App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
    var portfolioTpl = JST['templates/portfolio/portfolio-template'];

    Portfolio.PortfolioView = Backbone.Marionette.ItemView.extend({
        template: portfolioTpl,
        tagName: 'tr',
        className: 'portfolio'
    });
});