(function() {
  'use strict';

  angular
    .module('windsorHouseDentalSurgery')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($rootScope,Page) {
    //var vm = this;
    $rootScope.Page = Page;
    Page.setTitle('Windsor House Dental Surgery | About');
    Page.setDescription('Information about the practice staff');

  }
})();
