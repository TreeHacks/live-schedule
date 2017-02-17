Template.admin.events({
	"click #admin_finish": function(event, template) {
		var announcement = document.getElementById("admin_announcement").value;
		Meteor.call('makeAnnouncement', announcement, function(error, results) {
			if(result) {
				alert("Success!");
			} else {
				alert("Failure...");
			}
		});
	},
	"click .admin_delete": function(event, template) {
		Meteor.call('hideAnnouncement', event.target.id, function(error, results) {
			if(result) {
				alert("Success!");
			} else {
				alert("Failure...");
			}
		});
	}
});

Template.admin.helpers({
	announcements: function() {
		return Announcements.find({});
	}
});