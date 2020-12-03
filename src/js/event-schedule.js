import Vue from "vue/dist/vue.js";
import Fuse from "fuse.js";
import { TweenLite } from "gsap/TweenMax";

export default Vue.component("event-schedule", {
  template: `<div id="schedule-inner" class="schedule" :class="{active: true}">
    <div class="schedule-top section-wrapper">
      <div class="content-wrapper-wide">
        <div class="schedule-loader" style="height: 750px;">
          Loading...
        </div>
        <div class="schedule-search-wrapper">
          <i class="fa fa-search schedule-search-icon"></i>
          <input type="text" placeholder="Search" @input='evt=>query=evt.target.value' class="schedule-search" />
          <span class="schedule-clear-icon" v-if="query.length > 0" @click="query=''">✕</span>
        </div>
        <div class="schedule-categories">
          <button class="schedule-category" @click="selectedCat = -1" :class="{active: selectedCat == -1}">All Events</button>
          <button v-for="(cat, index) in schedule" @click="selectedCat = index" class="schedule-category" :class="{active: index == selectedCat}"><span :style="{background: cat.color}"></span> [[cat.name]]</button>
        </div>
      </div>
    </div>
    <div class="schedule-category-view" v-if="query.length > 0 || selectedCat != -1">
      <div class="section-wrapper">
        <div class="content-wrapper-wide">
          <div class="schedule-category-view-inner">
            <div v-for="item in categoryItems" class="schedule-category-view-item" v-if="isFound(item)">
              [[item.name]]
              <div class="schedule-category-view-item-details" :style="{color: item.color}">
                [[item.startDate]][[item.absStartHour != item.absEndHour ? ' - ' + item.endDate : '']] [[item.location ? ' | ' + item.location : '']]
              </div>
              <div v-if="item.description" v-html="item.description" />
              <span class="schedule-category-view-item-circle" :style="{background: item.color}"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="wrapper" v-if="query.length == 0 && selectedCat == -1" class="schedule-wrapper" @scroll="handleScroll" @click="hidePopup">
      <div class="schedule-inner" :style="{height: scheduleHeight, width: visibleHours * hourWidth + 'px'}">
        <div v-for="i in visibleHours" class="schedule-marker" :style="{left: (i - 1) * hourWidth + 'px'}">
          <div class="schedule-marker-time">[[getMarkerValue(i + 14)]]</div>
        </div>
        <div class="schedule-marker-day" :style="getDayStyle(0)">Fri</div>
        <div class="schedule-marker-day" :style="getDayStyle(9)">Sat</div>
        <div class="schedule-marker-day" :style="getDayStyle(33)">Sun</div>
        <div class="schedule-marker-now" :style="markerNowStyle"></div>
        <div v-for="(row, index) in scheduleRows" class="schedule-row" :style="{top: index * rowHeight + 'px'}">
          <div v-for="item in row" class="schedule-item" :class="{faded: !isFound(item), point: item.absStartHour == item.absEndHour}" :style="getItemStyle(item)" @click="setSelected(item)" :title="item.name">
            <h3 :style="{minWidth: hourWidth + 'px'}">[[item.name.replace("Getting Started With The", "")]]</h3>
            <div class="schedule-details" :style="{minWidth: hourWidth + 'px'}">
              [[item.startTime]][[item.absStartHour != item.absEndHour ? ' - ' + item.endTime : '']] [[item.location && item.location != 'Unknown Location' ? ' | ' + item.location : '']]
            </div>
            <div class="schedule-bar" :style="{background: item.color}">
              <div class="schedule-bar-start" :style="{background: item.color}"></div>
              <div class="schedule-bar-end" :style="{background: item.color}"></div>
            </div>
          </div>
        </div>
        <div ref="popup" class="schedule-overlay" :style="getOverlayStyle(selectedItem)" v-if="selectedItem != null">
          <h3>[[selectedItem.name]]</h3>
          <strong>Time</strong>
          <p>[[selectedItem.startDate]][[selectedItem.absStartHour != selectedItem.absEndHour ? ' - ' + selectedItem.endDate : '']]</p>
          <div v-if="selectedItem.location != 'Unknown Location'">
            <strong>Location</strong>
            <p>[[selectedItem.location || 'N/A']]</p>
          </div>
          <strong v-if="selectedItem.description">Description</strong>
          <div v-if="selectedItem.description" v-html="selectedItem.description" />
          <button class="schedule-overlay-close" @click="selectedItem = null"><i class="fa fa-times"></i></button>
        </div>
      </div>
    </div>
    <div class="schedule-dragger" v-if="query.length == 0 && selectedCat == -1">
      <div class="content-wrapper-wide">
        <div ref="track" class="schedule-track-wrapper">
          <div class="schedule-thumb" @mousedown="startDrag" @touchstart="startDrag" :style="thumbStyle">|||</div>
          <div class="schedule-track" @click="handleClick"></div>
        </div>
      </div>
    </div>
  </div>`,
  created: function() {
    // TODO: will need to change this date
    if (
      (new Date().getTime() - new Date("2021-02-14 15:00").getTime()) /
        3600000 <
      36
    )
      setInterval(this.updateTime, 60000);
    this.updateTime();
    var ctx = this;
    // TODO: will need to change this url and possibly event colours
    fetch(
      "https://api.eventive.org/event_buckets/5e2d4729d44a8300290de7cf/events_slim?api_key=2db927190aa686598bf88c893181cb7a"
    )
      .then(r => r.json())
      .then(data => {
        // Schedule shell
        var schedule = [
          {
            name: "Main Events",
            color: "#0D9071",
            items: []
          },
          {
            name: "Food",
            color: "#E83028",
            items: []
          },
          {
            name: "HackX",
            color: "#FF730E",
            items: []
          },
          {
            name: "Workshops",
            color: "#6B8E23",
            items: []
          },
          {
            name: "Talks",
            color: "#000080",
            items: []
          },
          {
            name: "Office Hours",
            color: "#E51B5D",
            items: []
          },
          {
            name: "Hardware",
            color: "#F46E20",
            items: []
          }
        ];

        function pad(num) {
          var norm = Math.floor(Math.abs(num));
          return (norm < 10 ? "0" : "") + norm;
        }

        function localFormatDayTime(d) {
          d = new Date(d - (480 - new Date().getTimezoneOffset()) * 60 * 1000);
          return (
            pad(d.getDate()) +
            "T" +
            pad(d.getHours()) +
            ":" +
            pad(d.getMinutes())
          );
        }

        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          var cat = schedule.findIndex(cat => {
            return item.tags.some(t => t === cat.name);
          });
          if (cat !== -1) {
            // this fits somewhere!
            schedule[cat].items.push({
              name: item.title,
              location: item.location,
              start: localFormatDayTime(new Date(item.start_time)),
              end: localFormatDayTime(new Date(item.end_time)),
              description: item.description ? item.description : undefined
            });
          }
        }

        var dayMap = ["Friday", "Saturday", "Sunday"];

        schedule = schedule.map(function(cat) {
          // sort subitems and create serialized time hashes
          cat.items = cat.items.map(function(item) {
            var startDay = Number(item.start.slice(0, 2)),
              startHour = Number(item.start.slice(3, 5)),
              startMinute = Number(item.start.slice(6)),
              endDay = Number(item.end.slice(0, 2)),
              endHour = Number(item.end.slice(3, 5)),
              endMinute = Number(item.end.slice(6));

            // subtract 15 to make 0 "3pm"
            item.absStartHour =
              (startDay - 14) * 24 + startHour + startMinute / 60 - 15;
            item.absEndHour =
              (endDay - 14) * 24 + endHour + endMinute / 60 - 15;
            item.startTime =
              (startHour % 12 || 12) + ":" + ("0" + startMinute).slice(-2);
            item.endTime =
              (endHour % 12 || 12) + ":" + ("0" + endMinute).slice(-2);
            item.startDate =
              dayMap[startDay - 14] +
              " " +
              item.startTime +
              (startHour >= 12 ? "pm" : "am");
            item.endDate =
              dayMap[endDay - 14] +
              " " +
              item.endTime +
              (endHour >= 12 ? "pm" : "am");
            item.color = cat.color;
            return item;
          });
          cat.items.sort(function(a, b) {
            return a.absStartHour - b.absStartHour;
          });
          return cat;
        });

        // checks if an item fits in the row above without overlapping
        function fits(item, row) {
          for (var i = 0; i < row.length; i++) {
            if (
              row[i].absStartHour <
                Math.max(item.absStartHour + 1, item.absEndHour + 0.25) &&
              Math.max(row[i].absStartHour + 1, row[i].absEndHour + 0.25) >
                item.absStartHour
            )
              return false;
          }
          return true;
        }

        ctx.scheduleRows = schedule.reduce(function(acc, cat) {
          var oldAccLength = acc.length; // make a shallow copy

          for (var i = 0; i < cat.items.length; i++) {
            var item = cat.items[i];
            var curRow = oldAccLength;
            do {
              curRow--;
            } while (curRow >= 0 && fits(item, acc[curRow]));
            do {
              curRow++;
            } while (curRow < acc.length && !fits(item, acc[curRow]));
            item.row = curRow;
            while (curRow >= acc.length) {
              acc.push([]);
            }
            acc[curRow].push(item);
          }
          return acc;
        }, []);

        var allScheduleItems = schedule.reduce(function(acc, cat) {
          return cat.items.reduce(function(acc2, item) {
            acc2.push(item);
            return acc2;
          }, acc);
        }, []);

        ctx.fuse = new Fuse(allScheduleItems, {
          shouldSort: true,
          threshold: 0.1,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: ["name", "location", "description"]
        });
        ctx.schedule = schedule;
        ctx.allScheduleItems = allScheduleItems;
      });
  },
  delimiters: ["[[", "]]"],
  data: function() {
    return {
      drag: {
        down: false,
        dragStart: 0,
        scrollPercentBeforeDrag: 0
      },
      fuse: null,
      allScheduleItems: [],
      query: "",
      rowHeight: 75,
      hourWidth: 100,
      visibleHours: 51,
      scrollPercent: 0,
      schedule: [],
      scheduleRows: [],
      hoursIn: 0,
      selectedCat: -1,
      selectedItem: null
    };
  },
  mounted: function() {
    this.$refs.wrapper.scrollLeft = this.hoursIn * this.hourWidth;
  },
  computed: {
    scheduleHeight: function() {
      // 25px to account for scrollbar
      return (
        Math.max(this.rowHeight * this.scheduleRows.length + 50, 300) + "px"
      );
    },
    thumbStyle: function() {
      var percent = this.scrollPercent;
      return this.$refs.track
        ? {
            transform:
              "translate3d(" +
              this.$refs.track.clientWidth * percent +
              "px,0,0)"
          }
        : {};
    },
    found: function() {
      var query = this.query.trim();
      return query ? this.fuse.search(query) : this.allScheduleItems;
    },
    markerNowStyle: function() {
      return {
        display: this.hoursIn < 0 ? "none" : "block",
        left: this.hoursIn * this.hourWidth + "px"
      };
    },
    foundMap: function() {
      var obj = {};
      for (var i = 0; i < this.found.length; i++) {
        obj[this.found[i].absStartHour + this.found[i].name] = true;
      }
      return obj;
    },
    categoryItems: function() {
      return this.selectedCat === -1
        ? this.allScheduleItems
        : this.schedule[this.selectedCat].items;
    }
  },
  methods: {
    updateTime: function() {
      var hoursIn =
        (new Date().getTime() - new Date("2020-02-14 15:00").getTime()) /
        3600000;
      if (hoursIn > 36) hoursIn = -1;
      this.hoursIn = hoursIn;
    },
    getItemStyle: function(item) {
      return {
        left: item.absStartHour * this.hourWidth + "px",
        width: (item.absEndHour - item.absStartHour) * this.hourWidth + "px",
        height: this.rowHeight + "px",
        color: item.color,
        zIndex: Math.floor(item.absStartHour * 100)
      };
    },
    getOverlayStyle: function(item) {
      return {
        left: item.absStartHour * this.hourWidth + "px",
        top:
          this.rowHeight *
            Math.min(item.row, this.scheduleRows.length / 2 - 1) +
          "px",
        maxHeight: this.rowHeight * (this.scheduleRows.length / 2 + 1) + "px"
      };
    },
    isFound: function(item) {
      return this.foundMap[item.absStartHour + item.name];
    },
    getMarkerValue: function(n) {
      var v = n % 12;
      return (v || 12) + (n % 24 >= 12 ? "pm" : "am");
    },
    getScrollLeftFromPercent(p) {
      return (
        Math.min(1, Math.max(0, p)) *
        (this.$refs.wrapper.scrollWidth - this.$refs.wrapper.clientWidth)
      );
    },
    handleScroll: function(e) {
      this.scrollPercent =
        e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth);
    },
    handleClick: function(e) {
      var percent = Math.max(
        0,
        Math.min(
          1,
          (e.offsetX - e.target.clientWidth * 0.1) /
            (e.target.clientWidth * 0.8)
        )
      ); // account for 20% negative margins...
      TweenLite.to(this.$refs.wrapper, 0.25, {
        scrollLeft: this.getScrollLeftFromPercent(percent)
      });
    },
    startDrag: function(e) {
      this.drag.dragStart =
        e.screenX || (e.touches && e.touches[0].screenX) || 0;
      this.drag.scrollPercentBeforeDrag = this.scrollPercent;
      this.drag.down = true;
      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDrag);
      document.addEventListener("mouseleave", this.stopDrag);
      document.addEventListener("touchmove", this.onDrag);
      document.addEventListener("touchend", this.stopDrag);
      document.addEventListener("touchcancel", this.stopDrag);
      document.body.style.userSelect = "none";
    },
    onDrag: function(e) {
      var delta =
        (e.screenX || (e.touches && e.touches[0].screenX) || 0) -
        this.drag.dragStart;
      if (this.drag.down && Math.abs(delta) > 10) {
        // more than 10 px delta
        var percent =
          this.drag.scrollPercentBeforeDrag +
          delta / this.$refs.track.clientWidth;
        this.$refs.wrapper.scrollLeft = this.getScrollLeftFromPercent(percent);
      }
    },
    stopDrag: function(e) {
      this.drag.down = false;
      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("mouseup", this.stopDrag);
      document.removeEventListener("mouseleave", this.stopDrag);
      document.removeEventListener("touchmove", this.onDrag);
      document.removeEventListener("touchend", this.stopDrag);
      document.removeEventListener("touchcancel", this.stopDrag);
      document.body.style.userSelect = null;
    },
    getDayStyle: function(hour) {
      var left = hour * this.hourWidth;
      var scheduleLeft = this.$refs.wrapper
        ? this.scrollPercent *
          (this.$refs.wrapper.scrollWidth - this.$refs.wrapper.clientWidth)
        : 0;
      var transformLeft = scheduleLeft - left;
      if (scheduleLeft > left) {
        return {
          left: left + "px",
          transform: "translateX(" + (scheduleLeft - left - 9) + "px)"
        };
      }
      return { left: left + "px" };
    },
    setSelected: function(item) {
      this.selectedItem = item;
    },
    hidePopup: function(e) {
      if (this.selectedItem !== null) {
        // not the popup itself was clicked and not a click target
        if (
          e.target !== this.$refs.popup &&
          e.target.parentNode !== this.$refs.popup &&
          e.target.parentNode.parentNode !== this.$refs.popup &&
          e.target.className.indexOf("schedule-item") === -1 &&
          e.target.parentNode.className.indexOf("schedule-item") === -1
        ) {
          this.selectedItem = null;
        }
      }
    }
  }
});
