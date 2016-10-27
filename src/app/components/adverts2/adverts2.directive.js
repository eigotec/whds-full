(function() {
    'use strict';

    angular
        .module('windsorHouseDentalSurgery')
        .directive('adverts2', adverts2);

    /** @ngInject */
    function adverts2() {


        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/adverts2/adverts2.html',
            controller: Adverts2Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function Adverts2Controller($rootScope) {

            $rootScope.adverts2 = [{
                name: 'Under 18?',
                description: 'FREE care on the NHS',
                colour: 'alert alert-success',
                icon: 'glyphicon glyphicon-ok',
                price: '£ - '
            }];
            $rootScope.randomize2 = function () {
                return 0.5 - Math.random();
            };
        }
    }


})();