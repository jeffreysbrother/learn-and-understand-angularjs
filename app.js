// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', function($scope, $log, $resource) {
  $log.log("hello");
  $log.info("This is INFO");
  $log.warn("Warning!!!");
  $log.debug("debug info");
  $log.error("That's a goddamn error, bro");
  console.log($scope);
  console.log($log);
});
