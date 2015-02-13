App.module("Contact", function (Contact, App, Backbone, Marionette, $, _) {
    var contactTpl = JST['templates/contact/contact-template'];

    Contact.View = Backbone.Marionette.ItemView.extend({
        template: contactTpl,
        className: 'contact'
    });
});