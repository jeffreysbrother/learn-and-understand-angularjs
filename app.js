// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', function($scope, $log) {
  console.log($scope);
  console.log($log);
});
