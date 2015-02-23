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
                body.addClass(themeclass);
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
    'lk-google-picker',
    'angular-loading-bar',
    'angular-growl',
    'angularFileUpload',
    'ngResource',
    'ngJoyRide'
])
    .config(['$stateProvider','$urlRouterProvider','lkGoogleSettingsProvider', 'growlProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, lkGoogleSettingsProvider, growlProvider, $httpProvider){
        //for any unmatched url, redirect to the state '/home'
        $urlRouterProvider.otherwise('/');

        //This is the configuration for the Google Picker API
        lkGoogleSettingsProvider.configure({
            apiKey   : 'AIzaSyDSBIljWNHZ9xMXuaROc4oAypA8LT5xmaU',
            clientId : '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com',
            scopes   : ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.readonly'],
            locale   : 'en',
            features : ['MULTISELECT_ENABLED'],
            views    : [
                'DocsUploadView()',
                'DocsView().setMimeTypes("application/vnd.google-apps.spreadsheet")'
            ]
        });
        //globally time the growl toatser to stay visible for 5seconds
        growlProvider.globalTimeToLive(5000);

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }])
    .run(['$rootScope', '$state', '$stateParams', '$location' ,function($rootScope, $state, $stateParams, $location){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

    }]);

angular.module('pegasusrises').controller('prBreadCrumbCtrl', ['$scope', '$state' ,function($scope, $state){
    $scope.$watch('$state', function(oldVal, newVal){
        $scope.subtitle = ($state.current.name).toUpperCase();
    });
}]);


//angular.module('app', [
//  'ngRoute',
//  'projectsinfo',
//  'dashboard',
//  'projects',
//  'admin',
//  'services.breadcrumbs',
//  'services.i18nNotifications',
//  'services.httpRequestTracker',
//  'security',
//  'directives.crud',
//  'templates.app',
//  'templates.common']);

//angular.module('app').constant('MONGOLAB_CONFIG', {
//  baseUrl: '/databases/',
//  dbName: 'ascrum'
//});

//TODO: move those messages to a separate module
//angular.module('app').constant('I18N.MESSAGES', {
//  'errors.route.changeError':'Route change error',
//  'crud.user.save.success':"A user with id '{{id}}' was saved successfully.",
//  'crud.user.remove.success':"A user with id '{{id}}' was removed successfully.",
//  'crud.user.remove.error':"Something went wrong when removing user with id '{{id}}'.",
//  'crud.user.save.error':"Something went wrong when saving a user...",
//  'crud.project.save.success':"A project with id '{{id}}' was saved successfully.",
//  'crud.project.remove.success':"A project with id '{{id}}' was removed successfully.",
//  'crud.project.save.error':"Something went wrong when saving a project...",
//  'login.reason.notAuthorized':"You do not have the necessary access permissions.  Do you want to login as someone else?",
//  'login.reason.notAuthenticated':"You must be logged in to access this part of the application.",
//  'login.error.invalidCredentials': "Login failed.  Please check your credentials and try again.",
//  'login.error.serverError': "There was a problem with authenticating: {{exception}}."
//});

//angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//  $locationProvider.html5Mode(true);
//  $routeProvider.otherwise({redirectTo:'/projectsinfo'});
//}]);

/**
 * Home Template
 *
 * Created by kaygee on 2/12/15.
 */

angular.module('home', ['angular-loading-bar'])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'home/home.tpl.html',
                controller : 'prHomeCtrl'
            })
    }]);
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
                    homeService.sendXLSDownloadUrl(data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'])
                })
        };

        $scope.configJoyRide = [
            {
                type: "title",
                heading: "Welcome to the Pegasus Tutorial",
                text: '<div class="row">' +
                '<div id="title-text" class=" text-center col-md-12"><br>' +
                'This walkthrough will help you familiarize with the Pegasus Build System</div></div>',
                scroll: true
            },
            {
                type: "element",
                selector: "#ngJoyRide_1_gdrive",
                heading: "Create a Server",
                text: "<span class='text-center'>This button will open your Google Drive in this interface to allow you select the XLS file that will be used to generate the server</span>",
                placement: "right",
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
                heading : "<span class='text-center'>Upload the selected Google Sheet to begin creating your server</span>",
                scroll : true,
                placement : "left"
            }

        ];

        //$scope.$watch('files', function(){
        //    $scope.startJoyRide = !$scope.startJoyRide;
        //});

        $scope.startJoyRide = function(){
            $scope.startJoyRide = !$scope.startJoyRide
        };

        $scope.onFinish = function(){
            alert("Joy ride ends")
        }

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
            return $resource('http://23.21.114.69/xlsform/', {});
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