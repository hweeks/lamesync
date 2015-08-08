define(['jquery', 'underscore', 'backbone', 'Marionette', 'stache!../templates/main-view'],
  function ($, _, Backbone, Marionette, MainTemplate) {
    return MainView = Marionette.LayoutView.extend({
      el: '#container',
      template: MainTemplate,
      regions: {
        header: '#header',
        body: '#body',
        footer: '#footer'
      },
      onRender: function(){
        console.log("View Rendered.");
      }
    });
  }
);