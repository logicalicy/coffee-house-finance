App.module("Portfolio.Position", function (Position, App, Backbone, Marionette, $, _) {
    // Both model and collection defined in same file
    // and not in separate files as collection is dependent
    // on model.
    Position.Model = Backbone.Model.extend({});
    Position.Collection = Backbone.Collection.extend({
        model: Position.Model
    });
});