App.module("Disclaimer", function (Disclaimer, App, Backbone, Marionette, $, _) {
    Disclaimer.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "disclaimer": "showDisclaimer"
        }
    });
    var API = {
        showDisclaimer: function() {
            Disclaimer.Controller.showDisclaimer();
        }
    };
    new Disclaimer.Router({
        controller: API
    });
    Disclaimer.Controller = {
        showDisclaimer: function () {
            var disclaimerView = new Disclaimer.View({
            });

            App.mainRegion.show(disclaimerView);
        }
    };
});