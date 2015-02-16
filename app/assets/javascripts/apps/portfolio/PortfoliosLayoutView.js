App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
    var portfoliosLayoutTpl = JST['templates/portfolio/portfolios-layout-template'];

    Portfolio.PortfoliosLayoutView = Backbone.Marionette.LayoutView.extend({
        template: portfoliosLayoutTpl,
        regions: {
            portfoliosRegion: '#portfolios-content'
        },
        events: {
            'click #add-portfolio': 'onClickAddPortfolio'
        },
        onClickAddPortfolio: function () {
            window.location.href = '/portfolios/new';
        },
        onRender: function () {
            var portfolios = App.request("portfolio:entities");
            this.portfoliosRegion.show(new Portfolio.PortfoliosView({
                collection: portfolios
            }));
        }
    });
});