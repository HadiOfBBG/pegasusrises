/**
 * Created by kaygee on 2/18/15.
 */

angular.module('home')
    .controller('prHomeController', ['$rootScope', '$scope', 'homeService', 'growl', '$upload','cfpLoadingBar',
        function($rootScope, $scope, homeService, growl, $upload, cfpLoadingBar){
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
                    $scope.surveyDataReturned = {};
                    Tabletop.init( {
                        key: $scope.files[ $scope.files.length - 1].id,
                        callback: function(data, tabletop) {
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

            $scope.getFile = function(){
                homeService.getFileFromGoogle($scope.files[ $scope.files.length - 1].id)
                    .success(function(data, stuff, more, headers){
                        console.log(data);

                        var urlToPost = data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

                        homeService.sendXLSDownloadUrl(urlToPost)

                    })
            };


            $scope.sendFileToOdk = function(){
                homeService.sendFileToOdk();
            };

            $scope.testDataRetrieve = function(){
                homeService.getDataFromServer();
            };

        }]);