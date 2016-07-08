(function() {
    'use strict';

    angular
        .module('windsorHouseDentalSurgery')
        .directive('headbar', headbar);

    /** @ngInject */
    function headbar() {


        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/headbar/headbar.html',
            controller: HeadBarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function HeadBarController() {
           
        }
    }


})();
