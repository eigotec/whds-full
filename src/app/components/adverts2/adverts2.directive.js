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
            $rootScope.randomize2 = function () {
                return 0.5 - Math.random();
            };
        }
    }


})();