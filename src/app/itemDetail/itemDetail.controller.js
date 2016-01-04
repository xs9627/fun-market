(function() {
  'use strict';

  angular
    .module('funMarket')
    .controller('ItemDetailController', ItemDetailController);

  /** @ngInject */
  function ItemDetailController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1451378636999;
  }
})();
