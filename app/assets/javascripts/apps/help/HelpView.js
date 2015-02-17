App.module("Help", function (Help, App, Backbone, Marionette, $, _) {
    var helpTpl = JST['templates/help/help-template'];

    Help.View = Backbone.Marionette.ItemView.extend({
        template: helpTpl,
        className: 'help'
    });
});