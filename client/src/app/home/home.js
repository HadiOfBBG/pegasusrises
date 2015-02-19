/**
 * Home Template
 *
 * Created by kaygee on 2/12/15.
 */

angular.module('home', ['angular-loading-bar'])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'home/home.tpl.html',
                controller : 'prHomeCtrl'
            })
    }])
    .controller('prHomeCtrl', ['$rootScope', '$scope', 'homeService', 'growl', function($rootScope, $scope, homeService, growl){
        $scope.files = [];

        $scope.uploadSheet = function(){
            var fileToUpload = $scope.files[ $scope.files.length - 1 ];
            homeService.uploadGoogleSheet(fileToUpload).
                success(function(data, status, headers, config) {
                    growl.success("Data was posted successfully", {});
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                }).
                error(function(data, status, headers, config) {
                    growl.error("Something went wrong on the server", {});
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                });
        };

        $scope.tabletop= function(){
            if ($scope.files.length) {
                Tabletop.init( {
                    key: $scope.files[ $scope.files.length - 1].id,
                    callback: function(data, tabletop) {
                        console.log(data);
                        if (data) {
                            homeService.uploadGoogleSheetContentsAsJson({"google_sheet_contents" : data})
                                .success(function(data){
                                    growl.success("Data was posted successfully", {});
                                })
                                .error(function(){
                                    growl.error("Something went wrong on the server", {});
                                })
                        }else{
                            alert("The file has not been shared to the public")
                        }
                    },
                    simpleSheet: true
                })
            }else{
                alert("No file selected")
            }
        };


    }]);