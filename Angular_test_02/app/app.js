var toDoList = angular.module('toDoList', []);


toDoList.controller('ListController', ['$scope', '$http', function($scope, $http){

  $scope.removeItem = function(item){
    var removeItem = $scope.itemlist.indexOf(item);
    $scope.itemlist.splice(item,1);
  };

  $scope.addItem = function(){
    $scope.itemlist.push({
      desc: $scope.newitem.desc,
    });

    $scope.newitem.desc = "";

  };




  $http.get('data/itemlist.json').then(function(data){
    $scope.itemlist = data.data;
  });

}]);
