(function() {
    'use strict';

    angular
        .module('windsorHouseDentalSurgery')
        .directive('banners', banners);

    /** @ngInject */
    function banners() {


        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/banners/banners.html',
            controller: BannersController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function BannersController() {
            //var vm = this;

        }
    }

})();