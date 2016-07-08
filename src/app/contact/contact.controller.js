(function() {

  'use strict';

  angular
      .module('windsorHouseDentalSurgery')
      .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($rootScope,Page,toastr,$log) {

    var vm = this;
    vm.data = {};

    //$rootScope.data = vm;

    vm.submit = function (Stamplay){
      Stamplay.Object("contact")
      .save(vm.data)
      .then(onSuccess, onError);
    };

    var onSuccess = function () {
      toastr.success('Your message has been delivered!');
    };

    var onError = function () {
      toastr.error('Seems to be a problem');
    };

    $rootScope.Page = Page;
    Page.setTitle('WHDS | Contact');
    Page.setDescription('How to contact us here at the surgery');

    // FOR DEV

    $log.info($rootScope);
  }

})();
