(function() {
  'use strict';

  angular
    .module('windsorHouseDentalSurgery')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($rootScope,Page) {
    //var vm = this;
    $rootScope.Page = Page;
    Page.setTitle('Windsor House Dental Surgery | Pricing');
    Page.setDescription('Pricing for all our products and services');
  }
})();
