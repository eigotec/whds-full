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
            }, {
                name: 'Keep your teeth white',
                description: 'Scale and Polish from',
                colour: 'alert alert-success',
                icon: 'glyphicon glyphicon-refresh',
                price: '£ 28'
            }, {
                name: 'Amalgam Fillings',
                description: 'Silver from',
                colour: 'alert alert-danger',
                icon: 'glyphicon glyphicon-zoom-in',
                price: '£ 55'
            }, {
                name: 'Play Sport?',
                description: 'Sports guards from',
                colour: 'alert alert-info',
                icon: 'fa fa-futbol-o',
                price: '£ 55'
            }];
            $rootScope.randomize1 = function () {
                return 0.5 - Math.random();
            };
        }
    }


})();