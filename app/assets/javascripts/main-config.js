App.on('start', function() {
  return Backbone.history.start;
});

App.addInitializer(function (options) {
    App.addRegions({
        mainRegion: "#content"
    });

    var Position = App.module('Portfolio.Position');
    var positions = App.request("position:entities");
    var portfoliosView = new Position.PositionsView({
        collection: positions
    });

    App.mainRegion.show(portfoliosView);
});

$(document).ready(function () {
    App.start();
});