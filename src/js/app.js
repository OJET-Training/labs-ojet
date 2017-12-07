define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojrouter', 'ojs/ojnavigationlist', 'ojs/ojarraytabledatasource'], function(oj, ko, $) {

    var AppViewModel = function() {
        var self = this;

        var router = oj.Router.rootInstance;
        router.configure({
            'home': {
                label: 'Home',
                value: 'home',
                isDefault: true
            },
            'about': {
                label: 'About',
                value: 'about',
            }
        });
        oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
        self.router = router;

        self.navItems = new oj.ArrayTableDataSource(self.router.states, {idAttribute: 'id'});
    };

    return AppViewModel;
});
