define(['jquery', 'underscore', 'backbone', 'Marionette',
  'stache!../templates/main-view',
  '../views/login-view',
  '../views/player-view'],
  function ($, _, Backbone, Marionette, MainTemplate, LoginView, PlayerView) {
    return MainView = Marionette.LayoutView.extend({
      el: '#container',
      template: MainTemplate,
      regions: {
        header: '#header',
        body: '#body',
        footer: '#footer'
      },
      initialize: function(){
        this.listenTo(Backbone, 'show:player', this.showPlayer);
      },
      onRender: function(){
        var loginView = new LoginView();
        this.body.show(loginView);
      },
      showPlayer: function(){
        var playerView = new PlayerView();
        this.body.empty();
        this.body.show(playerView);
      }
    });
  }
);