(function() {

  'use strict';

  angular
      .module('windsorHouseDentalSurgery')
      .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($rootScope,$stamplay,Page,toastr,$log) {
    var vm = this;
    vm.data = {};

    //$rootScope.data = vm;

    vm.submit = function (){
      $stamplay.Object("contact")
      .save(vm.data)
      .then(onSuccess, onError);
    };

    var onSuccess = function () {
      toastr.success("Thanks! We'll be in touch soon", {
            closeButton: true,
            progressBar: false
          })
      vm.data = {};
      }

    var onError = function () {
      toastr.error('Message not sent. Please contact the surgery', {
        closeButton: true,
        progressBar: false
      })
      vm.data = {};
    }

    $rootScope.Page = Page;
    Page.setTitle('Windsor House Dental Surgery | Contact');
    Page.setDescription('How to contact us here at the surgery');

    // FOR DEV

    $log.info($rootScope);
  }

})();
