/*global angular */
(function(){
  'use strict';

  angular
    .module('fg.directives.srcOtherwise', [])
    .directive('ngSrcOtherwise', [function() {
      return {
        compile: function(/* $element, attr */) {
          return function(scope, element, attr) {
            element.on('error', function(/* event */) {
              element.attr('src', attr.ngSrcOtherwise);
            });
          };
        }
      };
  }]);

})();
