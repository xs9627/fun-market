(function() {
  'use strict';

  angular
    .module('funMarket')
    .directive('actionButton', actionButton)
    .animation('.action-item-button', [function() {
      return {
        addClass: function(element, className, doneFn) {
          if(className == 'ng-hide') {
            TweenMax.to(element,0.5,{
              delay:delayTime(element),
              y:0,
              force3D:true,
              ease:Quint.easeInOut
            });
          }
        },
        removeClass: function(element, className, doneFn) {
          if(className == 'ng-hide') {
            TweenMax.to(element,0.5,{
              delay:delayTime(element),
              y:90,
              force3D:true,
              ease:Quint.easeInOut
            });
          }
        }
      }
    }])
    .animation('.action-toggle-button', [function() {
      return {
        addClass: function(element, className, doneFn) {
          if(className == 'active') {
            TweenMax.to(element,0.1,{
              scale:0.65
            });
            TweenMax.to(element,0.4,{
              rotation:45,
              ease:Quint.easeInOut,
              force3D:true
            });
          }
        },
        removeClass: function(element, className, doneFn) {
          if(className == 'active') {
            TweenMax.to(element,0.1,{
              scale:1
            });
            TweenMax.to(element,0.4,{
              rotation:0,
              ease:Quint.easeInOut,
              force3D:true
            });
          }
        }
      }
    }])
    .animation('.action-item-bounce', [function() {
      return {
        addClass: function(element, className, doneFn) {
          if(className == 'ng-hide') {
            var $bounce=element;

            TweenMax.fromTo($bounce,0.2,{
              transformOrigin:"50% 50%"
            },{
              delay:delayTime(element),
              scaleX:1,
              scaleY:0.8,
              force3D:true,
              ease:Quad.easeInOut,
              onComplete:function(){
                TweenMax.to($bounce,0.15,{
                  // scaleX:1.2,
                  scaleY:1.2,
                  force3D:true,
                  ease:Quad.easeInOut,
                  onComplete:function(){
                    TweenMax.to($bounce,1.5,{
                      // scaleX:1,
                      scaleY:1,
                      force3D:true,
                      ease:Elastic.easeOut,
                      easeParams:[1.1,0.3]
                    })
                  }
                })
              }
            });
          }
        },
        removeClass: function(element, className, doneFn) {
          if(className == 'ng-hide') {
            TweenMax.fromTo(element,0.2,{
              transformOrigin:"50% 50%"
            },{
              delay:delayTime(element),
              scaleX:0.8,
              scaleY:1.2,
              force3D:true,
              ease:Quad.easeInOut,
              onComplete:function(){
                TweenMax.to(element,0.15,{
                  // scaleX:1.2,
                  scaleY:0.7,
                  force3D:true,
                  ease:Quad.easeInOut,
                  onComplete:function(){
                    TweenMax.to(element,1.5,{
                      // scaleX:1,
                      scaleY:0.8,
                      force3D:true,
                      ease:Elastic.easeOut,
                      easeParams:[1.1,0.3]
                    })
                  }
                })
              }
            });
          }
        }
      }
    }]);

    function delayTime(element) {
      return element[0].attributes.index.value * 0.08;
    }

  /** @ngInject */
  function actionButton() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/actionButton/actionButton.html',
      scope: {
          actions: '=',
          hideButton: '='
      },
      controller: ActionButtonController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ActionButtonController(moment) {
      var vm = this;
      var toggled = false;
      vm.showButton = function() {
        if(vm.hideButton){
          toggled = false;
        }
        return toggled;
      };
      vm.toggle = function() {
        if(vm.hideButton) {
          vm.hideButton = false;
        }
        toggled = !toggled;
      }
      // "vm.creation" is avaible by directive option "bindToController: true"
      
    }
  }



})();
