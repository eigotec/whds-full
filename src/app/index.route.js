(function() {
  'use strict';

  angular
    .module('windsorHouseDentalSurgery')
    .config(routeConfig);

  function routeConfig($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/services', {
        templateUrl: 'app/services/services.html',
        controller: 'ServicesController',
        controllerAs: 'service'
      })
      .when('/pricing', {
        templateUrl: 'app/pricing/pricing.html',
        controller: 'PricingController',
        controllerAs: 'pricing'
       })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
        })
        .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      //$locationProvider.hashPrefix('!');
  }

})();
