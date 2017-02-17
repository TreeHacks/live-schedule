Template.admin.events({
	"click #admin_finish": function(event, template) {
		var announcement = document.getElementById("admin_announcement").value;
		var password = document.getElementById("admin_password").value;
		Meteor.call('makeAnnouncement', announcement, password, function(error, results) {
			if(!results) {
				alert("wrong password");
			}
		});
	},
	"click .admin_delete": function(event, template) {
		var password = prompt("password");
		Meteor.call('hideAnnouncement', event.target.id, password, function(error, results) {
			if(!results) {
				alert("wrong password");
			}
		});
	}
});

Template.admin.helpers({
	announcements: function() {
		return Announcements.find({});
	}
});