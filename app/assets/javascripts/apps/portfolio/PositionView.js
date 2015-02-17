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
        onClickEditPosition: function (event) {
            var url = this.model.get('url').replace('.json','/edit');
            window.location.href = url;
        },
        onClickDeletePosition: function (event) {
            this.model.destroy();
        }
    });
});