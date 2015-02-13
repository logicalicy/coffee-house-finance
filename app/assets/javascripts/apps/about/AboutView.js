App.module("About", function (About, App, Backbone, Marionette, $, _) {
    var aboutTpl = JST['templates/about/about-template'];

    About.View = Backbone.Marionette.ItemView.extend({
        template: aboutTpl,
        className: 'about'
    });
});