App.module("Portfolio.Position", function (Position, App, Backbone, Marionette, $, _) {
    Position.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "portfolios/:id/positions": "showPositions"
        }
    });
    var API = {
        showPositions: function(portfolioId) {
            Position.Controller.showPositions(portfolioId);
        }
    };
    new Position.Router({
        controller: API
    });
    Position.Controller = {
        showPositions: function (portfolioId) {
            var Position = App.module('Portfolio.Position');
            var positions = App.request("position:entities");
            var portfoliosView = new Position.PositionsView({
                collection: positions
            });

            App.mainRegion.show(portfoliosView);
        }
    };
});