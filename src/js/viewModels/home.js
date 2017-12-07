define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext',
'ojs/ojbutton', 'ojs/ojarraytabledatasource', 'ojs/ojtable'], function(oj, ko, $) {
    var ViewModel = function() {
        var self = this;
        self.countryId = ko.observable();
        self.countryName = ko.observable();

        self.countries = ko.observableArray([
            {id: 0, name: 'Germany'},
            {id: 1, name: 'Austria'}
        ]);
        self.countriesDataSource = new oj.ArrayTableDataSource(self.countries, {
            idAttribute: 'id'
        });

        self.add = function() {
            self.countries.push({id: self.countryId(), name: self.countryName()});
        }
    };

    return new ViewModel();
});
