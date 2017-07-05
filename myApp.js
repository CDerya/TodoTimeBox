var app = angular.module("myTodosList", ["xeditable"]); 
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});
app.controller("myCtrl", function($scope) {
    $scope.products = ["learn Angular", "learn Bootstrap", "make stuff"];
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
        $scope.products.splice(itemToBeRemoved, 1);
    }  
});

  

