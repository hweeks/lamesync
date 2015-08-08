requirejs.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    Marionette: 'lib/backbone.marionette',
    mustache: 'lib/mustache',
    text: 'lib/text',
    stache: 'lib/stache'
  },
  shim: {
    'mustache': {
      exports: 'Mustache'
    },
    'backbone' : {
      deps : ['underscore', 'jquery']
    },
    'Marionette' : {
      deps : ['underscore', 'jquery', 'backbone']
    }
  }
});
require(['app/app'], function(App){
  var app = new App;
});