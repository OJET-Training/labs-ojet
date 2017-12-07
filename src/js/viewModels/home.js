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

        self.remove = function(country) {
            self.countries.remove(function(c) {
                return c.id == country.id;
            });
        }

        self.selected = function(evt) {
            var selectedIndex = evt.detail.value[0].startIndex.row;
            var selectedCountry = self.countries()[selectedIndex];
            self.countryId(selectedCountry.id);
            self.countryName(selectedCountry.name);
        }

        var idUniqueValidator = {
            validate: function(val) {
                for (var i = 0; i < self.countries().length; i++) {
                    if (self.countries()[i].id === val) {
                        throw new Error("id not unique");
                    }
                }
                return true;
            }
        };
        self.validators = [idUniqueValidator];
    };

    return new ViewModel();
});
