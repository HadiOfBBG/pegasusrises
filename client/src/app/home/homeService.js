/**
 * Created by kaygee on 2/13/15.
 */


angular.module('home')
    .factory('homeService', ['$http', function($http){
        var homeService = {};

        homeService.uploadGoogleSheet = function(fileObject){
            // Simple POST request example (passing data) :
            return $http.post('/post/google/sheet', fileObject);
//                success(function(data, status, headers, config) {
//                    // this callback will be called asynchronously
//                    // when the response is available
//                }).
//                error(function(data, status, headers, config) {
//                    // called asynchronously if an error occurs
//                    // or server returns response with an error status.
//                });
        };

        homeService.uploadGoogleSheetContentsAsJson = function(fileObject){
            // Simple POST request example (passing data) :
//            return $http.post('/post/google/sheet/json', fileObject);
            return $http.post('/google/sheet/json', fileObject);
//                success(function(data, status, headers, config) {
//                    // this callback will be called asynchronously
//                    // when the response is available
//                }).
//                error(function(data, status, headers, config) {
//                    // called asynchronously if an error occurs
//                    // or server returns response with an error status.
//                });
        };

        return homeService;
    }]);