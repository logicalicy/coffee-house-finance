App.module("Portfolio.Position", function (Position, App, Backbone, Marionette, $, _) {
    var positionTpl = JST['templates/portfolio/position-template'];

    Position.PositionView = Backbone.Marionette.ItemView.extend({
        template: positionTpl,
        tagName: 'tr',
        className: 'position',
        events: {
            'click .edit-position': 'onClickEditPosition',
            'click .delete-position': 'onClickDeletePosition'
        },
        initialize: function () {
            this.stock = App.request('stock:entity', this.model.get('ticker_symbol'));
            this.listenToOnce(this.stock, 'sync', this.onSyncStock);
            this.stock.fetch();
        },
        onClickEditPosition: function (event) {
            var url = this.model.get('url').replace('.json','/edit');
            window.location.href = url;
        },
        onClickDeletePosition: function (event) {
            this.model.destroy();
        },
        onSyncStock: function (stock) {
            var currentPrice = stock.get('price');
            if (currentPrice > 0) {
                this.$('.current_price').text(stock.get('price'));
                this.model.save({
                    current_price: currentPrice
                });
            }
        }
    });
});