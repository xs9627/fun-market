(function() {
  'use strict';

  angular
    .module('funMarket')
    .controller('ItemDetailController', ItemDetailController);

  /** @ngInject */
  function ItemDetailController($rootScope) {
    $rootScope.pageClass = 'page-detail';
    var vm = this;

    
    vm.awesomeThings = [];
    vm.classAnimation = '';
  }
})();
