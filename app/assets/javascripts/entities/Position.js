App.module("Portfolio.Position", function (Position, App, Backbone, Marionette, $, _) {
    // Both model and collection defined in same file
    // and not in separate files as collection is dependent
    // on model.
    Position.Model = Backbone.Model.extend({
        url: function() {
            return '/positions/' + encodeURIComponent(this.id)
        }
    });
    Position.Collection = Backbone.Collection.extend({
        model: Position.Model,
        initialize: function (models, options) {
            options || (options = {});
            if (options.portfolio_id) {
                this.portfolio_id = options.portfolio_id;
            }
        },
        url: function () {
            return '/portfolios/' + encodeURIComponent(this.portfolio_id) + '/positions';
        }
    });
});