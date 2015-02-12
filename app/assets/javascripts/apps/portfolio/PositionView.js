App.module("Portfolio.Position", function (Position, App, Backbone, Marionette, $, _) {
    var positionTpl = JST['templates/portfolio/position-template'];

    Position.PositionView = Backbone.Marionette.ItemView.extend({
        template: positionTpl,
        tagName: 'tr',
        className: 'portfolio'
    });
});