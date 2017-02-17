Template.main.helpers({
	announcements: function() {
		return Announcements.find().fetch().reverse();
	}
});