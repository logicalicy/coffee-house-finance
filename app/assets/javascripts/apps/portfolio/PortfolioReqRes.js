App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
  var Position = App.module('Portfolio.Position');
  var portfolios, positions;
  var API = {
    getPositionEntities: function(portfolioId) {
      if( ! positions ) {
        positions = new Position.Collection();
      }
      positions.portfolio_id = portfolioId;
      positions.fetch();
      return positions;
    },
    getPortfolioEntities: function() {
      if( ! portfolios ) {
        portfolios = new Portfolio.Collection();
        portfolios.fetch();
      }
      return portfolios;
    }
  };
  App.reqres.setHandler("position:entities", function(portfolioId) {
    return API.getPositionEntities(portfolioId);
  });
  App.reqres.setHandler("portfolio:entities", function() {
    return API.getPortfolioEntities();
  });
});