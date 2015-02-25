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


            $scope.configJoyRide = [
                {
                    type: "title",
                    heading: "Welcome to the Pegasus Tutorial",
                    text: '<div class="row">' +
                    '<div id="title-text" style="font-size: medium;" class=" text-center col-md-12"><br>' +
                    'This walkthrough will help you familiarize with the Pegasus Build System</div></div>',
                    scroll: true
                },
                {
                    type: "element",
                    selector: "#ngJoyRide_1_gdrive",
                    heading: "Create a Server",
                    text: "<span class=''  style='font-size: medium;'>This button will open your Google Drive in this interface to allow you select the XLS file that will be used to generate the server</span>" +
                    "<br><span  style='font-size: small;'>Clicking \"NEXT\'</span>",
                    placement: "left",
                    scroll: true
                },
                {
                    type : 'function',
                    fn : function(){
                        $scope.startJoyRide = false;
                        $('#ngJoyRide_1_gdrive').trigger('click');
                    }
                },
                {
                    type : 'element',
                    selector : '#ngJoyRide_2_upload',
                    heading : "<span class='text-center'  style='font-size: medium;'>Upload the selected Google Sheet to begin creating your server</span>",
                    scroll : true,
                    placement : "left"
                }

            ];

            $scope.startJoyRide = function(){
                $scope.startJoyRide = !$scope.startJoyRide
            };

            $scope.onFinish = function(){
                //alert("Joy ride ends")
            };

            $scope.sendFileToOdk = function(){
                homeService.sendFileToOdk();
            };

            $scope.startLoadingBar = function(){
                cfpLoadingBar.start();
                cfpLoadingBar.inc();
                setTimeout(function(){cfpLoadingBar.complete()}, 50000000)
            };

            $rootScope.$on('cfpLoadingBar:loading', function(){
                console.log("cfpLoadingBar:loading");
            });

            $rootScope.$on('cfpLoadingBar:loaded', function(){
                console.log("cfpLoadingBar:loaded");
            });

            $rootScope.$on('cfpLoadingBar:started', function(){
                console.log("cfpLoadingBar:started");
            });

            $rootScope.$on('cfpLoadingBar:completed', function(){
                console.log("cfpLoadingBar:completed");
            });


        }]);