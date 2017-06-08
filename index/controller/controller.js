var myApp = angular.module('countryApp', []);
myApp.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {
    var refresh = function(){

    $http.get('http://inqstatsapi.inqubu.com/?api_key=4290b72cac505fea&cmd=getWorldData&data=population,size,gdp_total,density').then(doneCallbacks, failCallbacks);


    function doneCallbacks(res) {
      console.log("Data received");
      $scope.CountryData = res.data;
    }

    function failCallbacks(err) {
      console.log(err.message);
    }
  };
  refresh();
  $scope.show = false;
  $scope.dshow = false;
}]);
