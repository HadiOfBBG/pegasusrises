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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 414d7bae8f89379a86e1569048ee51ccdf61ebc7
        homeService.sendXLSDownloadUrl = function(xlsUrl ){
            return $http.post('/gcs', {downloadUrl : xlsUrl });
        };

        homeService.getFileFromGoogle = function(fileId){
            var url = 'https://www.googleapis.com/drive/v2/files/' + fileId;
            return $http.get(url, {params : { key : 'AIzaSyDSBIljWNHZ9xMXuaROc4oAypA8LT5xmaU'}});
        };

        homeService.sendFileToOdk = function(){
<<<<<<< HEAD
=======
        homeService.sendFileToOdk = function(){
//            fileObject
//            return $http.post('http://23.21.114.69/xlsform/', fileObject);
>>>>>>> d403072b36f940d4df18e034555b73513f6f1562
=======
>>>>>>> 414d7bae8f89379a86e1569048ee51ccdf61ebc7
            return $resource('http://23.21.114.69/xlsform/', {});
        };

        return homeService;
    }]);