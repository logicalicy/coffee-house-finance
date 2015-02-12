App.module("Portfolio.Position", function (Position, App, Backbone, Marionette, $, _) {
    var positionsTpl = JST['templates/portfolio/positions-template'];

    Position.PositionsView = Backbone.Marionette.CompositeView.extend({
        tagName: "table",
        id: "portfolios",
        className: "table table-striped table-bordered",
        template: positionsTpl,
        childView: Position.PositionView,
        appendHtml: function(collectionView, itemView) {
            return collectionView.$("tbody").append(itemView.el);
        }
    });
});