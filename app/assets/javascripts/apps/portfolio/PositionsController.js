App.module("Portfolio.Position", function (Position, App, Backbone, Marionette, $, _) {
    Position.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "portfolio": "showPositions"
        }
    });
    var API = {
        showPositions: function() {
            Position.Controller.showPositions();
        }
    };
    new Position.Router({
        controller: API
    });
    Position.Controller = {
        showPositions: function () {
            var Position = App.module('Portfolio.Position');
            var positions = App.request("position:entities");
            var portfoliosView = new Position.PositionsView({
                collection: positions
            });

            App.mainRegion.show(portfoliosView);
        }
    };
});