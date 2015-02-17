App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
  var Position = App.module('Portfolio.Position');
  var portfolios, positions;
  var initializePositions = function () {
    positions = new Position.Collection([], {
      portfolio_id: 1
    });
    positions.fetch();
  };
  var initializePortfolios = function () {
    portfolios = new Portfolio.Collection();
    portfolios.fetch();
  };
  var API = {
    getPositionEntities: function() {
      if( ! positions ) {
        initializePositions();
      }
      return positions;
    },
    getPortfolioEntities: function() {
      if( ! portfolios ) {
        initializePortfolios();
      }
      return portfolios;
    }
  };
  App.reqres.setHandler("position:entities", function() {
    return API.getPositionEntities();
  });
  App.reqres.setHandler("portfolio:entities", function() {
    return API.getPortfolioEntities();
  });
});