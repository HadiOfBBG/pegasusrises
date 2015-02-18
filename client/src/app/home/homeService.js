/**
 * Created by kaygee on 2/13/15.
 */


angular.module('home')
    .factory('homeService', ['$http','$resource', function($http, $resource){
        var homeService = {};

        homeService.uploadGoogleSheet = function(fileObject){
            return $http.post('/post/google/sheet', fileObject);
        };

        homeService.uploadGoogleSheetContentsAsJson = function(fileObject){
            return $http.post('/google/sheet/json', fileObject);
        };

        homeService.sendFileToOdk = function(){
//            fileObject
//            return $http.post('http://23.21.114.69/xlsform/', fileObject);
            return $resource('http://23.21.114.69/xlsform/', {});
        };

        return homeService;
    }]);