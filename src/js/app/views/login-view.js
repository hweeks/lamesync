define(['jquery', 'underscore', 'backbone', 'Marionette', 'stache!../templates/login-view', 'FireBase'],
  function ($, _, Backbone, Marionette, LoginTemplate, Firebase) {
    return LoginView = Marionette.LayoutView.extend({
      template: LoginTemplate,
      events: {
        'click .submit' : 'checkUser'
      },
      checkUser: function(){
        var message;
        var user = $('.user').val();
        var pass = $('.pass').val();
        var firebaseBackEnd = new Firebase('https://blazing-fire-6849.firebaseio.com/');
        firebaseBackEnd.authWithPassword({
          "email": user,
          "password": pass
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            Backbone.trigger('show:player');
          }
        });
      }
    });
  }
);