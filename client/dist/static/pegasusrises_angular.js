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
    .controller('prAdminSettingsCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
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
    'lk-google-picker',
    //'angular-loading-bar',
    'cfp.loadingBar',
    'angular-growl',
    'angularFileUpload',
    'ngResource',
    'ngJoyRide',
    'uiGmapgoogle-maps',
    'googlechart'
])
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
    .run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar' ,function($rootScope, $state, $stateParams, cfpLoadingBar){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            cfpLoadingBar.start();
            //$rootScope.loading = true;
        });

        $rootScope.$on('$viewContentLoading',function(event){
            cfpLoadingBar.inc();
        });

        $rootScope.$on('$viewContentLoaded',function(event){
            cfpLoadingBar.complete();
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
            })
    }]);
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

        }]);
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
/**
 * Created by kaygee on 2/18/15.
 */

function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var CSV = '';
    //Set Report title in first row or line

    CSV  = ReportTitle +   '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            row  = index + ',';
        }

        row = row.slice(0, -1);

        //append Label row with line break
        CSV  = row  + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i  ) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row  = '"'  +  arrData[i][index]  + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV  = row +   '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    //Generate a file name
    var fileName = "MyReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName  = ReportTitle.replace(/ /g, "_");

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' +  escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName +  ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.
            state('surveys', {
                url : '/surveys',
                templateUrl : 'survey/survey_list.tpl.html',
                controller : 'prSurveyController'
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
    .controller('prSurveyController', ['$rootScope', '$scope', 'homeService', 'growl',
        function($rootScope, $scope, homeService, growl){

        }])
    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService', 'growl','uiGmapGoogleMapApi',
        function($rootScope, $scope, homeService, growl, uiGmapGoogleMapApi){
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
                {v: 3},
            ];

            $scope.chartObject.data = {"cols": [
                {id: "t", label: "Topping", type: "string"},
                {id: "s", label: "Slices", type: "number"}
            ], "rows": [
                {c: [
                    {v: "Mushrooms"},
                    {v: 3},
                ]},
                {c: $scope.onions},
                {c: [
                    {v: "Olives"},
                    {v: 31}
                ]},
                {c: [
                    {v: "Zucchini"},
                    {v: 1},
                ]},
                {c: [
                    {v: "Pepperoni"},
                    {v: 2},
                ]}
            ]};


            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.chartObject.type = 'ColumnChart';
            $scope.chartObject.options = {
                'title': 'How Much Pizza I Ate Last Night'
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


        return surveyService;
    }]);