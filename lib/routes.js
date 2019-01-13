Router.route('/', function () {
	this.render('main');
});

Router.route('/admin', function () {
	this.render('admin');
});

Router.route( "/announce", function() {
	console.log("announced");
}, { where: "server" });

