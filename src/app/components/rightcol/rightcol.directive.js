(function() {
    'use strict';

    angular
        .module('windsorHouseDentalSurgery')
        .directive('rightcol', rightcol);

    /** @ngInject */
    function rightcol() {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/rightcol/rightcol.html',
            controller: RightColController,
            controllerAs: 'rightcol',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function RightColController($rootScope,$filter,NgMap) {
            $rootScope.day = $filter('date')(new Date(),'EEEE');
            $rootScope.time = $filter('date')(new Date(),'HH:mm');
            $rootScope.date = $filter('date')(new Date(),'dd');
            $rootScope.month = $filter('date')(new Date(),'MMMM');

            if($rootScope.day == 'Monday' && $rootScope.time < '08:00' || $rootScope.day == 'Monday' && $rootScope.time > '17:00'){
                $rootScope.status = 'closed';
            }else if($rootScope.day == 'Tuesday' && $rootScope.time < '08:00' || $rootScope.day == 'Tuesday' && $rootScope.time > '19:00'){
                $rootScope.status = 'closed';
            }else if($rootScope.day == 'Wednesday' && $rootScope.time < '08:00' || $rootScope.day == 'Wednesday' && $rootScope.time > '17:00'){
                $rootScope.status = 'closed';
            }else if($rootScope.day == 'Thursday' && $rootScope.time < '08:00' || $rootScope.day == 'Thursday' && $rootScope.time > '17:00'){
                $rootScope.status = 'closed';
            }else if($rootScope.day == 'Friday' && $rootScope.time < '08:00' || $rootScope.day == 'Friday' && $rootScope.time > '13:00'){
                $rootScope.status = 'closed';
            }else if($rootScope.day == 'Saturday'){
                $rootScope.status = 'closed';
            }else if($rootScope.day == 'Sunday'){
                $rootScope.status = 'closed';
            }else if($rootScope.month == 'December' && $rootScope.day == '25'){
                $rootScope.status = 'closed';
            }else if($rootScope.month == 'December' && $rootScope.day == '26'){
                $rootScope.status = 'closed';
            }else if($rootScope.month == 'January' && $rootScope.day == '1'){
                $rootScope.status = 'closed';
            }else{
                $rootScope.status = 'open';
            }

            NgMap.getMap().then(function(map) {
                $rootScope.center = map.getCenter(); //$log(map.getCenter());
                $rootScope.markers = map.markers; //$log('markers', map.markers);
                $rootScope.shapes = map.shapes; //$log('shapes', map.shapes);
            });
        }
    }
})();
