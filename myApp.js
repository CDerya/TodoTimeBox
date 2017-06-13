var app = angular.module("myTodosList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["study angular", "studyBootstrap", "make shit"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}        
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
            $scope.addMe="";
        } else {
            $scope.errortext = "The item is already in your shopping list.";

        }

        
    }
    $scope.removeItem = function (itemToBeRemoved) {
        //$scope.errortext = "";    
        $scope.products.splice(itemToBeRemoved, 1);
    }

});

  

