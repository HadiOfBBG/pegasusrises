/**
 * Created by kaygee on 2/18/15.
 */

angular.module('home')
    .controller('prHomeCtrl', ['$rootScope', '$scope', 'homeService', 'growl', '$upload', function($rootScope, $scope, homeService, growl, $upload){
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
                        $scope.surveyDataReturned = {
                            choices : {},
                            survey : {}
                        };
                        angular.forEach(data, function(val, prop){
                            $scope.surveyDataReturned [ prop ] = {
                                column_names :  data[prop].column_names,
                                elements :  data[prop].elements,
                                name :  data[prop].name,
                                original_columns : data[prop].original_columns,
                                pretty_columns : data[prop].pretty_columns
                            };
                        });
                        if (data) {
                            console.log($scope.surveyDataReturned);
                            homeService.uploadGoogleSheetContentsAsJson($scope.surveyDataReturned)
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
                    simpleSheet: false
                })
            }else{
                alert("No file selected")
            }
        };

<<<<<<< HEAD

        var CLIENT_ID = '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com';
        var SCOPES = 'https://www.googleapis.com/auth/drive';

        $scope.getFile = function(){
            homeService.getFileFromGoogle($scope.files[ $scope.files.length - 1].id)
                .success(function(data, stuff, more, headers){
                    console.log(data);

                    var urlToPost = data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

                    homeService.sendXLSDownloadUrl(urlToPost)

                })
        };


        /**
         * Download a file's content.
         *
         * @param {File} file Drive File instance.
         * @param {Function} callback Function to call when the request is complete.
         */
        function downloadFile(file, callback) {
            file.downloadUrl = file['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

            if (file.downloadUrl) {
                var accessToken = gapi.auth.getToken().access_token;
                var xhr = new XMLHttpRequest();
                xhr.open('GET', file.downloadUrl);
                xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
                xhr.onload = function() {
                    callback(xhr.responseText);
                };
                xhr.onerror = function() {
                    callback(null);
                };
                xhr.send();
            } else {
                callback(null);
            }
        }
=======
        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });
        $scope.odkTest = function(){
            homeService.sendFileToOdk().query()
        };

        $scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    $upload.upload({
                        url: 'http://23.21.114.69/xlsform/',
                        fields: {'username': $scope.username},
                        file: file
                    }).progress(function (evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                    }).success(function (data, status, headers, config) {
                        console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                    });
                }
            }
        };

>>>>>>> d403072b36f940d4df18e034555b73513f6f1562

    }]);