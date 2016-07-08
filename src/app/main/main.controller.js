(function() {
  'use strict';

  angular
    .module('windsorHouseDentalSurgery')
    .factory('Page', function(){
      var title = 'default';
      var description = 'default';
      return {
        title: function() { return title; },
        description: function() { return description; },
        setTitle: function(newTitle) { title = newTitle; },
        setDescription: function(newDescription) { description = newDescription; }
      };
  })
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope,Page) {
    $rootScope.Page = Page;
    Page.setTitle('WHDS | Home');
    Page.setDescription('Windsor House Dental Surgery Hersham');
  }
})();
