App.module("Yahoo.Stock", function (Stock, App, Backbone, Marionette, $, _) {
    // Both model and collection defined in same file
    // and not in separate files as collection is dependent
    // on model.
    Stock.Model = Backbone.Model.extend({
        defaults: {
            symbol: "",
            price: 0,
            date: "N/A",
            time: "N/A",
            change: "N/A",
            open: "N/A",
            high: "N/A",
            low: "N/A",
            volume: "N/A"
        },
        parse: function (response, options) {
            var results = response.query.results;
            return results ? results.row : {};
        },
        url: function () {
            return "https://query.yahooapis.com/v1/public/yql?q=" +
                "select%20*%20from%20csv%20where%20url%20%3D%0A" +
                "'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3F" +
                "s%3D" + encodeURIComponent(this.get('ticker_symbol')) + "%26" +
                "f%3Dsl1d1t1c1ohgv%26" +
                "e%3D.csv'%0A" +
                "and%20columns%3D'symbol%2Cprice%2Cdate%2Ctime%2Cchange%2Copen%2Chigh%2Clow%2Cvolume'&" +
                "format=json";
        }
    });
    Stock.Collection = Backbone.Collection.extend({
        model: Stock.Model
    });
});