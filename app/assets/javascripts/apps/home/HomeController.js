App.module("Home", function (Home, App, Backbone, Marionette, $, _) {
    Home.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "": "showHome",
            "home": "showHome"
        }
    });
    var API = {
        showHome: function() {
            Home.Controller.showHome();
        }
    };
    new Home.Router({
        controller: API
    });
    Home.Controller = {
        showHome: function () {
            var homeView = new Home.View({
            });

            App.mainRegion.show(homeView);
        }
    };
});