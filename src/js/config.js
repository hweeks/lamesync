requirejs.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    Marionette: 'lib/backbone.marionette',
    mustache: 'lib/mustache',
    text: 'lib/text',
    stache: 'lib/stache',
    FireBase: '//cdn.firebase.com/js/client/2.2.1/firebase',
    yt: 'lib/yt'
  },
  shim: {
    'mustache': {
      exports: 'Mustache'
    },
    'yt': {
      exports: 'YT'
    },
    'FireBase': {
      exports: 'Firebase'
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