App.module("Portfolio.Position", function (Position, App, Backbone, Marionette, $, _) {
    var positionsLayoutTpl = JST['templates/portfolio/positions-layout-template'];

    Position.PositionsLayoutView = Backbone.Marionette.LayoutView.extend({
        template: positionsLayoutTpl,
        regions: {
            positionsRegion: '#positions-content'
        },
        events: {
            'click #add-position': 'onClickAddPosition',
            'click #back-to-portfolios': 'onClickBackToPortfolios'
        },
        onClickAddPosition: function () {
            window.location.href =
                '/portfolios/' +
                encodeURIComponent(this.portfolioId) +
                '/positions/new';
        },
        onClickBackToPortfolios: function () {
            window.location.href = '#portfolios';
        },
        onRender: function () {
            var positions = App.request("position:entities", this.portfolioId);
            this.positionsRegion.show(new Position.PositionsView({
                collection: positions
            }));
        }
    });
});