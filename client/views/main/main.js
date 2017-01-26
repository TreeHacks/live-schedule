Template.schedule.onCreated(function() {
});

Template.schedule.helpers({
  events: function () {
	  return Events.find();
  }
});