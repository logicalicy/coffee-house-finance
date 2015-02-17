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
        initialize: function () {
            this.positions = new Portfolio.Position.Collection();
            this.positions.portfolio_id = this.model.get('id');
            this.listenToOnce(this.positions, 'sync', this.onSyncPortfolioPositions);
            this.positions.fetch();
        },
        onClickEditPortfolio: function (event) {
            var url = this.model.get('url').replace('.json','/edit');
            window.location.href = url;
        },
        onClickDeletePortfolio: function (event) {
            this.model.destroy();
        },
        onSyncPortfolioPositions: function (positions) {
            // Value of portfolio is sum of all its positions.
            var totalValue = positions.reduce(function (memo, position) {
                    return memo + position.get('units') * position.get('current_price');
                }, 0);
            this.$('.total-value').text(totalValue);
        }
    });
});