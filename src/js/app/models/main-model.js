define(['jquery', 'underscore', 'backbone', 'Marionette'],
  function ($, _, Backbone, Marionette, Router) {
    return MainModel = Backbone.Model.extend({
      initialize: function(){
        this.set('test', "This is a test");
      }
    });
  }
);