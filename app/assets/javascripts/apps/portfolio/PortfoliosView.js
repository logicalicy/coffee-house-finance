App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
    var portfoliosTpl = JST['templates/portfolio/portfolios-template'];

    Portfolio.PortfoliosView = Backbone.Marionette.CompositeView.extend({
        tagName: "table",
        id: "portfolios",
        className: "table table-striped table-bordered",
        template: portfoliosTpl,
        childView: Portfolio.PortfolioView,
        appendHtml: function(collectionView, itemView) {
            return collectionView.$("tbody").append(itemView.el);
        }
    });
});