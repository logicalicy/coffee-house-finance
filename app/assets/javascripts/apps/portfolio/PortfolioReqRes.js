App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
  var Position = App.module('Portfolio.Position');
  var Stock = App.module('Yahoo.Stock');
  var portfolios, positions;
  var API = {
    getYahooStockEntity: function(tickerSymbol) {
      var stock = new Stock.Model({ ticker_symbol: tickerSymbol });
      return stock;
    },
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
  App.reqres.setHandler("stock:entity", function(tickerSymbol) {
    return API.getYahooStockEntity(tickerSymbol);
  });
});