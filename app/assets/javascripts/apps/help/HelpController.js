App.module("Help", function (Help, App, Backbone, Marionette, $, _) {
    Help.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "help": "showHelp"
        }
    });
    var API = {
        showHelp: function() {
            Help.Controller.showHelp();
        }
    };
    new Help.Router({
        controller: API
    });
    Help.Controller = {
        showHelp: function () {
            var helpView = new Help.View({
            });

            App.mainRegion.show(helpView);
        }
    };
});