App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
      name: 'one',
      className: 'dropdown',
      choices: [
        { choice: 'Choose One' },
        { choice: 'First' },
        { choice: 'Last' }
      ]
    }
  }
});
