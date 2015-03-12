/**
 * Created by kaygee on 2/18/15.
 */

angular.module('home')
    .controller('prHomeController', ['$rootScope', '$scope','$state', 'homeService','surveyService', 'growl',
        'cfpLoadingBar', '$localStorage', '$sessionStorage','$timeout',
        function($rootScope, $scope, $state, homeService, surveyService, growl, cfpLoadingBar, $localStorage, $sessionStorage, $timeout){
            $scope.files = [];

            $scope.first_timer = $localStorage.first_timer;

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
                            console.dir(data);
                            angular.forEach(data, function(val, prop){
                                $scope.surveyDataReturned [ prop ] = {
                                    column_names :  data[prop].column_names,
                                    elements :  data[prop].elements,
                                    name :  data[prop].name,
                                    original_columns : data[prop].original_columns,
                                    pretty_columns : data[prop].pretty_columns
                                };
                                $scope.surveyDataReturned.form_id = $scope.files[$scope.files.length-1].name;
                            });
                            if (data) {
                                homeService.uploadGoogleSheetContentsAsJson($scope.surveyDataReturned)
                                    .success(function(data){
                                        //$localStorage.first_timer = false;
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
                        var infoToPost = {
                            downloadUrl : data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
                            filename : $scope.files[ $scope.files.length - 1].name
                        };

                        homeService.sendXLSDownloadUrl(infoToPost)

                    })
            };

            $scope.processServer = function(){
                cfpLoadingBar.start();
                growl.info('Getting dowloadUrl from Google Spreadsheets...', {});

                $timeout(function(){
                    growl.success('File downloaded successfully', {});
                    cfpLoadingBar.set(0.3);

                    $timeout(function(){
                        growl.info('Processing and saving file content into database', {});

                        $timeout(function(){
                            growl.success('File saved successfully', {});
                            cfpLoadingBar.set(0.6);

                            $timeout(function(){
                                cfpLoadingBar.set(0.8);
                                growl.info('Deploying survey for participation...', {});

                                $timeout(function(){
                                    growl.success('Successfully created server', {});
                                    cfpLoadingBar.complete();
                                    $localStorage.first_timer = false;
                                    $state.go('surveys')
                                }, 2000);

                            }, 3500);

                        }, 3500);

                    }, 3000);


                }, 2000);



            };

            $scope.dataFromAggregate = function() {
                surveyService.getDataFromPegasus()
                    .success(function (data) {
                        console.log('data');
                        $scope.returnedDataSingle = data;
                        angular.forEach(data, function (setInfo, index) {
                            console.log(JSON.parse(setInfo));
                            $scope.returnedData = JSON.parse(setInfo);

                        });
                    })
            }

        }]);