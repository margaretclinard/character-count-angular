angular
  .module('counter')
  .controller('TitleCount', TitleCount);


function TitleCount ($scope, $http) {
  $scope.title = "";
  $scope.description = "";

  // $scope.submit = function () {
  //   console.log('clicked');
  //   $http
  //   .post('https://character-counter.firebaseio.com/titles.json')
  //   .success(function () {

  //   });
  // }
}