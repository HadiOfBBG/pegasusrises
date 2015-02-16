/**
 * Home Template
 *
 * Created by kaygee on 2/12/15.
 */

angular.module('home', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'home/home.tpl.html',
                controller : 'prHomeCtrl'
            })
    }])
    .controller('prHomeCtrl', ['$rootScope', '$scope', 'homeService', function($rootScope, $scope, homeService){
        $scope.test = 'Kaygee';
        $scope.files = [];

        $scope.uploadSheet = function(){
            homeService.uploadGoogleSheet($scope.files[0]).
                success(function(data, status, headers, config) {
                    console.log("success");
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                }).
                error(function(data, status, headers, config) {
                    console.log("error");
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                });
        }
    }]);