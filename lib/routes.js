Router.route('/', function () {
  this.render('main');
});

Router.route('/admin', function () {
  this.render('admin');
});