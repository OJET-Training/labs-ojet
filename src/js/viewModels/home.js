define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext'], function(oj, ko, $) {
    var ViewModel = function() {
        var self = this;
        self.countryId = ko.observable();
        self.countryName = ko.observable();
    };

    return new ViewModel();
});
