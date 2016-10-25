angular.module('myApp', []).controller('namesCtrl', function($scope) {
  $scope.names = [
    {name:'Fred', job:'Quarry'},
    {name:'Wilma', job:'House'},
    {name:'Mr. Slate', job:'Boss'}
  ];
});
