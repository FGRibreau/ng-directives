/*global angular */
(function(){
  'use strict';

  angular
    .module('fg.directives.blockEnter', [])
    .directive('ngBlockEnter', function() {
    return function(scope, element /*, attrs */) {
      element.bind('keydown keypress', function(event) {
        if(event.which === 13) {
          event.preventDefault();
        }
      });
    };
  });

})();
