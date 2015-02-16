App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
    var portfolioTpl = JST['templates/portfolio/portfolio-template'];

    Portfolio.PortfolioView = Backbone.Marionette.ItemView.extend({
        template: portfolioTpl,
        tagName: 'tr',
        className: 'portfolio',
        events: {
            'click .edit-portfolio': 'onClickEditPortfolio',
            'click .delete-portfolio': 'onClickDeletePortfolio'
        },
        onClickEditPortfolio: function (event) {
            var url = this.model.get('url').replace('.json','/edit');
            window.location.href = url;
        },
        onClickDeletePortfolio: function (event) {
            this.model.destroy();
        }
    });
});