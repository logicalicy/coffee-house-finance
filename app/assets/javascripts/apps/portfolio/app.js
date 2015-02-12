App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
  var Position = App.module('Portfolio.Position');
  var positions;
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
  var API = {
    getPositionEntities: function() {
      if( ! positions ) {
        initializePositions();
      }
      return positions;
    }
  };
  App.reqres.setHandler("position:entities", function() {
    return API.getPositionEntities();
  });
});