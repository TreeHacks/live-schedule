Meteor.methods({
	makeAnnouncement: function(text) {
		Announcements.insert({
			text: text
		});
		return true;
	},
	hideAnnouncement: function(id) {
		Announcements.remove({
			_id: id
		});
		return true;
	}
});