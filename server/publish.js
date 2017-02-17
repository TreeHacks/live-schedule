Meteor.publish('announcements', function(table) {
  return Announcements.find();
});