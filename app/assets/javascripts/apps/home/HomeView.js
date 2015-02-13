App.module("Home", function (Home, App, Backbone, Marionette, $, _) {
    var homeTpl = JST['templates/home/home-template'];

    Home.View = Backbone.Marionette.ItemView.extend({
        template: homeTpl,
        className: 'home'
    });
});