define(['jquery', 'underscore', 'backbone', 'Marionette'],
  function ($, _, Backbone, Marionette) {
    return AppRouter = Marionette.AppRouter.extend({
      appRoutes: {
        "": "emptyRoute",
        "test": "aTest"
      }
    });
  }
);