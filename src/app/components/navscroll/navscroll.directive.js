(function() {
  'use strict';

  angular
    .module('funMarket')
    .directive('navscroll', navscroll);

  /** @ngInject */
  function navscroll($window, $timeout) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (!scope.scrollPosition) {
                scope.scrollPosition = 0;
            }

            if (this.pageYOffset < 300){
                delayChange(false, 0);
            } else if (this.pageYOffset <= scope.scrollPosition
                //|| this.pageYOffset >= this.document.body.clientHeight
                ) {
                delayChange(false, 200);
            } else {
                delayChange(true, 500);
            }
            scope.scrollPosition = this.pageYOffset;
            scope.$apply();
        });

        var timer = false;
        function delayChange(value, delayTime){
            if (timer) {
                $timeout.cancel(timer);
            }
            timer = $timeout(function () {
                scope.boolChangeClass = value;
            }, delayTime);
        }
    };
}
})();