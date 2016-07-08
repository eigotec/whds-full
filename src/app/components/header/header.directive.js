(function() {
    'use strict';

    angular
        .module('windsorHouseDentalSurgery')
        .directive('header', header);

    /** @ngInject */
    function header() {


        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/header/header.html',
            controller: HeaderController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function HeaderController($rootScope,$location) {
            //var vm = this;

            $rootScope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }
    }

})();
