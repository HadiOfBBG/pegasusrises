/**
 * Created by kaygee on 2/16/15.
 */
angular.module('admin', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('settings', {
                url : '/settings',
                templateUrl : 'admin/settings.tpl.html',
                controller : 'prAdminSettingsCtrl'
            })
            .state('profile', {
                url : '/profile',
                templateUrl : 'admin/profile.tpl.html',
                controller : 'prAdminProfileCtrl'
            })
    }])
    .controller('prAdminSettingsCtrl', ['$rootScope', '$scope','$localStorage','growl', function($rootScope, $scope, $localStorage, growl){
        $scope.status = {
            isopen: false
        };

        $scope.themes = [
            {name : 'White (Default)', key : 'light_theme'},
            {name : 'Red' , key : 'red_thm'},
            {name : 'Green', key : 'green_thm'},
            {name : 'Blue', key : 'blue_thm'},
            {name : 'Magento', key : 'magento_thm'}
        ];

        $scope.themeChoice = $scope.themes[0];

        $scope.changeTheme = function(choice){
            $scope.themeChoice = choice;
             var body = $('body');
                body.removeClass('blue_thm');
                body.removeClass('red_thm');
                body.removeClass('magento_thm');
                body.removeClass('green_thm');
                body.addClass(choice.key);
        };

          $scope.headerOptions = [
            {name : 'Fixed header', key : 'fixed_header', description : 'The header will be fixed to the top whiles scrolling up and down.'},
            {name : 'Scroll with body (Unfixed)', key : 'unfixed', description: 'The header will scroll together with the body.'}
        ];

        $scope.headerChoice = $scope.headerOptions[0];

        $scope.changeHeaderType = function(choice){
            $scope.headerChoice = choice;
            var body = $('body');
            if(body.hasClass('fixed_header') && $scope.headerChoice.key == 'unfixed'){
                body.removeClass('fixed_header');
            }else if(!(body.hasClass('fixed_header')) && $scope.headerChoice.key != 'unfixed'){
                body.addClass('fixed_header');
            }
        };

          $scope.navOptions = [
            {name : 'Fixed Side Navigation', key : 'left_nav_fixed', description : 'The side navigation will be fixed in position whiles scrolling up and down.'},
            {name : 'Scroll Side Navigation', key : 'unfixed', description: 'The side navigation will scroll together with the body.'}
        ];

        $scope.navChoice = $scope.navOptions[0];

        $scope.changeNavType = function(choice){
            $scope.headerChoice = choice;
            var body = $('body');
            if(body.hasClass('left_nav_fixed') && $scope.headerChoice.key == 'unfixed'){
                body.removeClass('left_nav_fixed');
            }else if(!(body.hasClass('left_nav_fixed')) && $scope.headerChoice.key != 'unfixed'){
                body.addClass('left_nav_fixed');
            }
        };


        $scope.clearStorage = function(){
            $localStorage.$reset({
                first_timer : true
            });

            growl.success('Storage cleared successfully', {});
        }



    }])
    .controller('prAdminProfileCtrl', ['$rootScope', '$scope', function($rootScope, $scope){

    }]);
/**
 * Created by kaygee on 2/16/15.
 */

//var ngPegasusApp =
angular.module('pegasusrises', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'templates.app',
    'templates.common',
    'home',
    'admin',
    'survey',
    'directives',
    'lk-google-picker',
    'cfp.loadingBar',
    'angular-growl',
    'angularFileUpload',
    'ngResource',
    'ngJoyRide',
    'uiGmapgoogle-maps',
    'googlechart',
    'ngStorage',
    'ngTagsInput'
])
    //'angular-loading-bar',
    .constant('prConstantKeys', {
        google_api_key: 'AIzaSyDSBIljWNHZ9xMXuaROc4oAypA8LT5xmaU',
        google_client_id : '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com'
    })

    .config(['$stateProvider','$urlRouterProvider','lkGoogleSettingsProvider',
        'growlProvider', '$httpProvider', 'uiGmapGoogleMapApiProvider','prConstantKeys',
        function($stateProvider, $urlRouterProvider, lkGoogleSettingsProvider,
                 growlProvider, $httpProvider, uiGmapGoogleMapApiProvider, prConstantKeys){
            //for any unmatched url, redirect to the state '/home'
            $urlRouterProvider.otherwise('/');

            //This is the configuration for the Google Picker API
            lkGoogleSettingsProvider.configure({
                apiKey   :  prConstantKeys.google_api_key,
                clientId : prConstantKeys.google_client_id,
                scopes   : ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.readonly'],
                locale   : 'en',
                features : [],
                views    : [
                    'DocsView().setMimeTypes("application/vnd.google-apps.spreadsheet")'
                ]
            });
            //globally time the growl toatser to stay visible for 5seconds
            growlProvider.globalTimeToLive(5000);

            uiGmapGoogleMapApiProvider.configure({
                key : prConstantKeys.google_api_key,
                v: '3.17',
                //libraries: 'weather,geometry,visualization'
                libraries: ''
            });


        }])
    .run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar','$localStorage' ,function($rootScope, $state, $stateParams, cfpLoadingBar, $localStorage){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $localStorage.$default({
            first_timer : true
        });

        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            cfpLoadingBar.start();
            $rootScope.loading = true;
        });

        $rootScope.$on('$viewContentLoading',function(event){
            cfpLoadingBar.inc();
        });

        $rootScope.$on('$viewContentLoaded',function(event){
            cfpLoadingBar.complete();
            $rootScope.loading = false;
        });

    }]);

angular.module('pegasusrises').controller('prBreadCrumbCtrl', ['$scope', '$state' ,function($scope, $state){
    $scope.$watch('$state', function(oldVal, newVal){
        $scope.subtitle = ($state.current.name).toUpperCase();
    });

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



}]);
/**
 * Home Template
 *
 * Created by kaygee on 2/12/15.
 */

angular.module('home', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'home/home.tpl.html',
                controller : 'prHomeController'
                //resolve : {
                //    surveyService : 'surveyService',
                //
                //    surveyData : function(surveyService){
                //        return {}
                //    }
                //
                //}
            })
    }]);
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
/**
 * Created by kaygee on 2/13/15.
 */


angular.module('home')
    .factory('homeService', ['$http','prConstantKeys', function($http, prConstantKeys){
        var homeService = {};

        homeService.uploadGoogleSheet = function(fileObject){
            return $http.post('/post/google/sheet', fileObject);
        };

        homeService.uploadGoogleSheetContentsAsJson = function(fileObject){
            return $http.post('/google/sheet/json', fileObject);
        };

        homeService.sendXLSDownloadUrl = function( data ){
            return $http.post('/gcs', data);
        };

        homeService.getFileFromGoogle = function(fileId){
            var url = 'https://www.googleapis.com/drive/v2/files/' + fileId;
            return $http.get(url, {params : { key : prConstantKeys.google_api_key}});
        };

        return homeService;
    }]);
/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.
            state('surveys', {
                url : '/surveys',
                templateUrl : 'survey/survey_list.tpl.html',
                controller : 'prSurveyController',
                resolve : {
                    surveyService : 'surveyService',

                    questionData : function(surveyService){
                        return surveyService.getSurveyQuestionDetails()
                    },

                    submittedResponsesData : function(surveyService){
                        return surveyService.getAllResponses()
                    }
                }
            })
            .state('surveys.analytics', {
                url : '/analytics',
                templateUrl : 'survey/dummy_analytics.tpl.html',
                controller : 'prSelectedSurveyController'
            })
            .state('surveys.respondents', {
                url : '/respondents',
                templateUrl : 'survey/respondents.tpl.html',
                controller : 'prSurveyRespondentsController'
            })
            .state('surveys.selected_survey', {
                url : '/select/1',
                templateUrl : 'survey/selected_survey.tpl.html',
                controller : 'prSelectedSurveyController'
            })
    }]);
/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyController', ['$rootScope', '$scope', 'homeService', 'growl','questionData','submittedResponsesData',
        function($rootScope, $scope, homeService, growl, questionData, submittedResponsesData){

            $scope.surveyData = questionData.data;
            if (questionData.data.questions_details.length) {
                $scope.surveyName =  questionData.data.questions_details[0].survey_name
            }

            $scope.submittedResponses = submittedResponsesData.data
        }])



    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService', 'growl','uiGmapGoogleMapApi',
        'questionData', 'submittedResponsesData',
        function($rootScope, $scope, homeService, growl, uiGmapGoogleMapApi, questionData, submittedResponsesData){

            $scope.surveyData = questionData.data;
            if (questionData.data.questions_details.length) {
                $scope.surveyName =  questionData.data.questions_details[0].survey_name
            }

            $scope.selectQuestion = function(question){
                //Empty the scope object or declare in undefined
                $scope.selected_question = {};

                //Assign the selected/clicked question to the declared scope variable
                $scope.selected_question = question;

                //for close ended questions,
                if ($scope.selected_question.question_type == 'close_ended') {

                    //Get the individual answers value
                    $scope.selected_question.answer_values = $scope.selected_question.possible_answers.split(',');
                    $scope.selected_question.answers = {};

                    //Assign the split answer value as a key in a property of the question's answer object
                    angular.forEach($scope.selected_question.answer_values, function (option, index) {
                        //$scope.selected_question.answers[$.trim(option)] = $scope.selected_question.possible_answers_labels[index];

                        //In the selected question object, assign each possible answer to a property in the "answer" property of the question
                        if ($.trim(option) != '') {
                            $scope.selected_question.answers[ $.trim(option) ] = 0;
                        }
                    });

                    //Loop over the submitted responses submitted
                    angular.forEach(submittedResponsesData.data.submissions, function (responseObject, indexObject) {

                        //Loop over the data field in the responses submitted
                        angular.forEach(responseObject.data, function (responseData, indexData) {

                            //if the supplied answer is a multiple choice one, loop over and increment each option
                            if ( typeof (responseData[ $scope.selected_question.question_field ]) == 'object') {
                                angular.forEach( responseData[ $scope.selected_question.question_field ], function (choice, index) {

                                    //And Increment the answer chosen in the chosen question's answer object
                                    $scope.selected_question.answers [ choice ] ++
                                });
                            }else{
                                //Increment the answer chosen in the chosen question's answer object
                                $scope.selected_question.answers [ responseData[ $scope.selected_question.question_field ] ] ++
                            }


                        })

                    })
                }
            };


            $scope.map = { center: { latitude: 5.558288, longitude: -0.173778 }, zoom: 8 };
            $scope.markers = [
                {id : 1, points : {latitude: 5.578288, longitude: -0.345 }},
                { id : 2,  points : { latitude: 5.598288, longitude: -0.218 }},
                { id : 3,  points : { latitude: 5.458288, longitude: -0.1148 }},
                {id : 4,   points : { latitude: 5.358288, longitude: -0.089 }},
                {id : 5,  points : { latitude: 5.258288, longitude: -0.13778} }
            ];

            // uiGmapGoogleMapApi is a promise.
            // The "then" callback function provides the google.maps object.
            uiGmapGoogleMapApi.then(function(maps) {

            });

            $scope.chartObject = {};

            $scope.onions = [
                {v: "Onions"},
                {v: 3}
            ];

            // = {"cols": [
            //    {id: "t", label: "Topping", type: "string"},
            //    {id: "s", label: "Slices", type: "number"}
            //], "rows": [
            //    {c: [{v: "Mushrooms"},{v: 3}]},
            //    {c: $scope.onions},
            //    {c: [{v: "Olives"},{v: 31}]},
            //    {c: [{v: "Zucchini"},{v: 1}]},
            //    {c: [{v: "Pepperoni"},{v: 28}]}
            //]};
            $scope.chartObject.data = [
                [
                    "Component",
                    "cost"
                ],
                [
                    "Software",
                    92368
                ],
                [
                    "Hardware",
                    38064
                ],
                [
                    "Services",
                    20000
                ]
            ];

            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.chartObject.type = 'ColumnChart';
            $scope.chartObject.options = {
                "title": $scope.surveyName,
                "fill": 20,
                "displayExactValues": true,
                //"is3D": true,
                "vAxis": {
                    "title": "Responses", "gridlines": {"count": 6}
                },
                "hAxis": {
                    "title": "Possible Answers"
                }
            };
            $scope.changeChartType = function (chartType) {
                $scope.chartObject.type = chartType;
            };

            $scope.tabs = [
                { title:'Dynamic Title 1', content:'Dynamic content 1' },
                { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
            ];

            $scope.toggleButtons = function(state){
                $scope.showButtons = state;
            };

        }])
    .controller('prSurveyRespondentsController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        'questionData','submittedResponsesData',
        function($rootScope, $scope, homeService,surveyService, growl, questionData, submittedResponsesData ){

            //get email address of logged in user from the backend
            var from = $('#user_logged_in_email').text();

            $scope.surveyData = questionData.data;
            if (questionData.data.questions_details.length) {
                $scope.surveyName = $.trim( questionData.data.questions_details[0].survey_name)
            }else{
                //$scope.surveyName = "Test Survey Name";
            }


            $scope.respondent_form = {
                emails  : [],
                recipients  : [],
                from : from,
                survey :  $scope.surveyName
            };

            $scope.sendEmail = function(){
                if ($scope.respondent_form.emails.length > 0) {
                    $scope.respondent_form.recipients = [];
                    angular.forEach($scope.respondent_form.emails, function (email, index) {
                        $scope.respondent_form.recipients.push(email.text)
                    })
                    if ($scope.respondent_form.survey) {
                        surveyService.sendRespondentEmail($scope.respondent_form)
                            .success(function () {
                                growl.success("Emails sent successfully", {});
                            })
                            .error(function () {
                                growl.error("Emails could not be sent", {});

                            })
                    }else{
                        growl.info("Please select a survey", {});
                    }

                }else{
                    growl.info("Please type at least one recipient email", {});
                }
            }

        }]);


/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .factory('surveyService' , [ '$http', function($http){
        var surveyService = {};

        surveyService.getAllSurveys = function(){
            return $http.get('all/surveys')
        };

        surveyService.getSurveyQuestionDetails = function( ){
            //return $http.get('/questions/properties/read')
            return $http.get('/frontend/dummyloader/questions.json')
        };

        surveyService.getAllResponses = function( ){
            //return $http.get('/data/submissions/read')
            return $http.get('/frontend/dummyloader/submissions.json')
        };

        surveyService.sendRespondentEmail = function(data){
            return $http.post('/sendmail', data)
        };
        return surveyService;
    }]);