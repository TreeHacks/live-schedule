Meteor.methods({
	makeAnnouncement: function(text, password) {
		if(password == "treehacksfam") {
			Announcements.insert({
				text: text
			});
			return true;
		} else {
			return false;
		}
	},
	hideAnnouncement: function(id, password) {
		if(password == "treehacksfam") {
			Announcements.remove({
				_id: id
			});
			return true;
		} else {
			return false;
		}
	}
});