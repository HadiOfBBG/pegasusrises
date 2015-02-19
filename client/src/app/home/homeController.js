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


    }]);