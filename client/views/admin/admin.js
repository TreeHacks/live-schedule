Template.admin.events({
  'click #submit': function () {
	  Events.insert({
		  name: document.getElementById("name").value,
		  time: document.getElementById("time").value,
		  location: document.getElementById("location").value
	  });
	  Router.go("/");
  }
});