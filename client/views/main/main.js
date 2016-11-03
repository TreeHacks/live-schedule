Template.main.onCreated(function() {
});

Template.main.helpers({
  events: function () {
	  return Events.find();
  }
});