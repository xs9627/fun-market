(function() {
  'use strict';

  angular
    .module('funMarket')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
      vm.actions = [
        {
          icon: 'camera'
        },
        {
          icon: 'star-o'
        },
        {
          icon: 'thumbs-o-up'
        }
      ];
      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      vm.scrollUp = function(pageYOffset) {
        if(pageYOffset < 300) {
          delayChange(false, 0);
        } else {
          delayChange(false, 200);
        }
      }
      vm.scrollDown = function(pageYOffset){
        delayChange(true, 200);
      }

      var timer = false;
      function delayChange(value, delayTime){
        if (timer) {
            $timeout.cancel(timer);
        }
        timer = $timeout(function () {
            vm.boolChangeClass = value;
        }, delayTime);
      }
    }
  }

})();
