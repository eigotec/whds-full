(function() {
    'use strict';

    angular
        .module('windsorHouseDentalSurgery')
        .directive('footer', footer);

    /** @ngInject */
    function footer() {


        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/footer/footer.html',
            controller: FooterController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FooterController() {
            //var vm = this;
        }
    }
})();