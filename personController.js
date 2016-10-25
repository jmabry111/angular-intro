      var app = angular.module('myApp', []);
      app.controller('personCtrl', function($scope) {
        $scope.fname = 'Barney';
        $scope.lname = 'Rubble';
        $scope.fullName = function() {
          return $scope.fname + " " + $scope.lname;
        }
        $scope.price = 3.2;
        $scope.quantity = 28;
      });

