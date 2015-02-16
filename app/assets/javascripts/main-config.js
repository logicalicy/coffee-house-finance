App.on('start', function() {
    if ( Backbone.history ) {
        Backbone.history.start();
        var loggedIn = $.cookie('signed_in');
        if (this.getCurrentRoute() === "" && loggedIn) {
            App.Portfolio.Controller.showPortfolios();
        }
        else if (! loggedIn) {
            App.Home.Controller.showHome();
        }
    }
});

App.getCurrentRoute = function () {
    return Backbone.history.fragment
};

App.addInitializer(function (options) {

    App.navigate = function(route, options){
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    App.addRegions({
        mainRegion: "#content"
    });

});

$(document).ready(function () {
    App.start();
});