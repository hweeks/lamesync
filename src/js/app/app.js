define(['jquery', 'underscore', 'backbone', 'Marionette', 
  '../app/router', 
  '../app/controller', 
  '../app/views/main-view', 
  '../app/models/main-model'],
  function ($, _, Backbone, Marionette, 
    Router, 
    Controller, 
    MainView, 
    MainModel) {
    return App = Marionette.Application.extend({
      container: '#container',
      initialize: function(){
        var controller = Controller;
        var router = new Router({
          controller: controller
        });
        var model = new MainModel;
        var mainView = new MainView({
          model: model
        });
        mainView.render();
        this.on('start', this.beginHistory());
      },
      beginHistory: function(){
        console.log('History started');
        Backbone.history.start({
          pushState:true,
          root: '/'
        });
      }
    });
  }
);