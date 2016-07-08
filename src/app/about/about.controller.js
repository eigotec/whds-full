(function() {
  'use strict';

  angular
    .module('windsorHouseDentalSurgery')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($rootScope,Page) {
    //var vm = this;
    $rootScope.Page = Page;
    Page.setTitle('WHDS | About');
    Page.setDescription('Information about the practice staff');

  }
})();
