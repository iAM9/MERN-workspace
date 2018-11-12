var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', '$locationProvider' function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);



  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'NinjaController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'NinjaController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);


myNinjaApp.directive('randomNinja', [function(){
  return {
    restrict:'E',
    scope: {
      ninjas: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor((Math.random() * 4));
    }
  };
}]);


myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  };

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newnninja.name,
      belt: $scope.newnninja.belt,
      rate: parseInt($scope.newnninja.rate),
      available: true
    });

    $scope.newnninja.name = "";
    $scope.newnninja.rate = "";
    $scope.newnninja.belt = "";
  };

  $scope.removeAll = function(){
    $scope.ninjas = [];
  };

  $http.get('data/ninjas.json').then(function(data){
    $scope.ninjas = data.data;
  });

}]);
