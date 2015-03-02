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

        homeService.sendXLSDownloadUrl = function(xlsUrl ){
            return $http.post('/gcs', {downloadUrl : xlsUrl });
        };

        homeService.getDataFromServer = function( ){
            return $http.get('/read/data/from/pegasus')
        };

        homeService.getFileFromGoogle = function(fileId){
            var url = 'https://www.googleapis.com/drive/v2/files/' + fileId;
            return $http.get(url, {params : { key : 'AIzaSyDSBIljWNHZ9xMXuaROc4oAypA8LT5xmaU'}});
        };

        homeService.sendFileToOdk = function(){
//            fileObject
//            return $http.post('http://23.21.114.69/xlsform/', {file : 'file'});
//            return $resource('http://23.21.114.69/xlsform/', {});
            $.ajax({
                url : 'http://23.21.114.69/xlsform/',
                data : {file : 'file', fileName : 'FileName.xls'},
                type : 'post',
                beforeSend : function(xhr){
                    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                },
                crossDomain : true

            }).done(function(data){
                console.log('data ---- ', data)
            })
        };

        return homeService;
    }]);