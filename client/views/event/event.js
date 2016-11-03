Template.event.helpers({
  counter: function () {
	  return;
  }
});

Template.event.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});