App.module("About", function (About, App, Backbone, Marionette, $, _) {
    About.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "about": "showAbout"
        }
    });
    var API = {
        showAbout: function() {
            About.Controller.showAbout();
        }
    };
    new About.Router({
        controller: API
    });
    About.Controller = {
        showAbout: function () {
            var aboutView = new About.View({
            });

            App.mainRegion.show(aboutView);
        }
    };
});