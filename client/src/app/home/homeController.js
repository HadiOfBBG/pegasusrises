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
                }).
                error(function(data, status, headers, config) {
                    growl.error("Something went wrong on the server", {});
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
                    homeService.sendXLSDownloadUrl(data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'])
                })
        };

    }]);