angular.module('myApp.controllers.IntroCtrl', [])

.controller('IntroCtrl', ['$scope', 'Avengers', function ($scope, Avengers) {
  $scope.avengers = Avengers;


}])
;
