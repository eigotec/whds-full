(function() {
    'use strict';

    angular
        .module('windsorHouseDentalSurgery')
        .directive('adverts1', adverts1);

    /** @ngInject */
    function adverts1() {


        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/adverts1/adverts1.html',
            controller: Adverts1Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function Adverts1Controller($rootScope) {

            $rootScope.adverts1 = [{
                name: 'New Patients',
                description: 'Examination for only',
                colour: 'alert alert-info',
                icon: 'glyphicon glyphicon-star',
                price: '£ 37'
            }];
            $rootScope.randomize1 = function () {
                return 0.5 - Math.random();
            };
        }
    }


})();