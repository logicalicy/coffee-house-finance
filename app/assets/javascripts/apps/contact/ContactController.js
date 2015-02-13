App.module("Contact", function (Contact, App, Backbone, Marionette, $, _) {
    Contact.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "contact": "showContact"
        }
    });
    var API = {
        showContact: function() {
            Contact.Controller.showContact();
        }
    };
    new Contact.Router({
        controller: API
    });
    Contact.Controller = {
        showContact: function () {
            var contactView = new Contact.View({
            });

            App.mainRegion.show(contactView);
        }
    };
});