(function() {
  'use strict';

  angular
    .module('funMarket')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('detail', {
        url: '/item-detail',
        templateUrl: 'app/itemDetail/itemDetail.html',
        controller: 'ItemDetailController',
        controllerAs: 'itemDetail'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
