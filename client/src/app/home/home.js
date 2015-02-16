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
    .controller('prHomeCtrl', ['$rootScope', '$scope', 'homeService','ngToast', function($rootScope, $scope, homeService, ngToast){
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
        };

        $scope.testToast = function(){
            console.log("test");

            // create a toast:
            ngToast.create('A toast message...');

            // clear specific toast:
//            var msg = ngToast.create({
//                content: 'Another message as <a href="#" class="">HTML</a>'
//            });
//            ngToast.dismiss(msg);

            // clear all toasts:
//            ngToast.dismiss();
        }
    }]);