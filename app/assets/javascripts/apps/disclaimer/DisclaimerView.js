App.module("Disclaimer", function (Disclaimer, App, Backbone, Marionette, $, _) {
    var disclaimerTpl = JST['templates/disclaimer/disclaimer-template'];

    Disclaimer.View = Backbone.Marionette.ItemView.extend({
        template: disclaimerTpl,
        className: 'disclaimer'
    });
});