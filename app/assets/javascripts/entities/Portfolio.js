App.module("Portfolio", function (Portfolio, App, Backbone, Marionette, $, _) {
    // Both model and collection defined in same file
    // and not in separate files as collection is dependent
    // on model.
    Portfolio.Model = Backbone.Model.extend({
        url: function() {
            return '/portfolios/' + encodeURIComponent(this.id)
        }
    });
    Portfolio.Collection = Backbone.Collection.extend({
        model: Portfolio.Model,
        url: '/portfolios'
    });
});