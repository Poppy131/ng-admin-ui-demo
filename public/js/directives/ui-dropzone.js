/**
 * An AngularJS directive for Dropzone.js, https://gist.github.com/compact/8118670
 * 
 * Usage:
 * 
 * <div ng-app="app" ng-controller="SomeCtrl">
 *   <button dropzone="dropzoneConfig">
 *     Drag and drop files here or click to upload
 *   </button>
 * </div>
 */
angular.module('app')
  .directive('dropzone', function() {
    return function(scope, element, attrs) {
      var config, dropzone;

      config = scope[attrs.dropzone];

      // create a Dropzone for the element with the given options
      dropzone = new Dropzone(element[0], config.options);

      // bind the given event handlers
      angular.forEach(config.eventHandlers, function(handler, event) {
        dropzone.on(event, handler);
      });
    };
  });

// Usage:
//
// angular.module('app', ['dropzone']);
//
// angular.module('app').controller('SomeCtrl', function ($scope) {
//   $scope.dropzoneConfig = {
//     'options': { // passed into the Dropzone constructor
//       'url': 'upload.php'
//     },
//     'eventHandlers': {
//       'sending': function (file, xhr, formData) {
//       },
//       'success': function (file, response) {
//       }
//     }
//   };
// });
