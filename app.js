// MODULE
var myApp = angular.module('myApp', ['ngMessages']);

// CONTROLLERS
myApp.controller('mainController', function($scope, $log) {
  $log.log("hello");
  $log.info("This is INFO");
  $log.warn("Warning!!!");
  $log.debug("debug info");
  $log.error("That's a goddamn error, bro");
  console.log($scope);
  console.log($log);
});
