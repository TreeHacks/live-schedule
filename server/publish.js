Meteor.publish('events', function(table) {
  return Events.find();
});