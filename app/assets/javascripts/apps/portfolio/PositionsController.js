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
            var portfoliosView = new Position.PositionsLayoutView();
            portfoliosView.portfolioId = portfolioId;
            App.mainRegion.show(portfoliosView);
        }
    };
});