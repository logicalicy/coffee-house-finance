App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
  var Position = App.module('Portfolio.Position');
  var portfolios, positions;
  var initializePositions = function () {
    positions = new Position.Collection([
      {
        name: 'America',
        value: 1222.00
      },
      {
        name: 'Europe',
        value: 30000.00
      },
      {
        name: 'UK',
        value: 4000.00
      }
    ]);
  };
  var initializePortfolios = function () {
    portfolios = new Portfolio.Collection([
      {
        id: 1,
        name: 'America',
        description: 'Example description'
      }
    ]);
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