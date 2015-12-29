(function() {
  'use strict';

  angular
    .module('funMarket')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
