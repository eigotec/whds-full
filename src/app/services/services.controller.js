(function() {
  'use strict';

  angular
    .module('windsorHouseDentalSurgery')
    .controller('ServicesController', ServicesController);

  /** @ngInject */
  function ServicesController($rootScope,Page) {

    Page.setTitle('Windsor House Dental Surgery | Services');
    Page.setDescription('Information about the products and services we offer');

    $rootScope.Page = Page;

    angular.element('.panel-body').addClass('ng-hide');

    $rootScope.clickMe = function(clickEvent,slide) {
      $rootScope.clickEvent = clickEvent.currentTarget.id;
      $rootScope.slide = angular.element('.panel-body').hasClass(clickEvent);
      angular.element(slide).removeClass('ng-hide');
      angular.element(slide).addClass('ng-show');
    };
  }
})();
