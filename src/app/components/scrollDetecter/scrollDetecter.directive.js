(function() {
  'use strict';

  angular
    .module('funMarket')
    .directive('scrollDetecter', scrollDetecter);

  /** @ngInject */
  function scrollDetecter($window) {
    var directive = {
    restrict: 'E',
      scope: {
        onScrollUp: '=',
        onScrollDown: '=',
        onReachBottom: '='
      },
      link: linkFunc
    };
    return directive;

    function linkFunc(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if(scope.onScrollUp || scope.onScrollDown) {
                if (!scope.scrollPosition) {
                    scope.scrollPosition = 0;
                }

                /*if (this.pageYOffset < 300){
                    delayChange(false, 0);
                } else*/ 
                if (this.pageYOffset <= scope.scrollPosition) {
                    scope.onScrollUp(this.pageYOffset);
                } else {
                    scope.onScrollDown(this.pageYOffset);
                }
                scope.scrollPosition = this.pageYOffset;
                scope.$apply();
            }
            
            if(scope.onReachBottom){
                var doc = this.window.document;
                var windowHeight = "innerHeight" in this.window ? this.window.innerHeight : doc.documentElement.offsetHeight;
                var body = doc.body, html = doc.documentElement;
                var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
                var windowBottom = windowHeight + this.window.pageYOffset;
                if (windowBottom >= docHeight) {
                    //alert('bottom reached');
                    scope.onReachBottom();
                }
            }
        });
    }
}
})();