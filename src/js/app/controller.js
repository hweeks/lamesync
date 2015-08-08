define(['jquery', 'underscore', 'backbone', 'Marionette'],
  function ($, _, Backbone, Marionette, Router) {
    return AppController = {
      emptyRoute: function(){
        console.log("No route");
      },
      aTest: function(){
        console.log("We can navigate else where.");
      }
    };
  }
);