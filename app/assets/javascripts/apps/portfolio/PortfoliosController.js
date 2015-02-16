App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
    Portfolio.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "portfolios": "showPortfolios"
        }
    });
    var API = {
        showPortfolios: function() {
            Portfolio.Controller.showPortfolios();
        }
    };
    new Portfolio.Router({
        controller: API
    });
    Portfolio.Controller = {
        showPortfolios: function () {
            var portfoliosView = new Portfolio.PortfoliosLayoutView();
            App.mainRegion.show(portfoliosView);
        }
    };
});