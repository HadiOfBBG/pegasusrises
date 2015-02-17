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
    'templates.app',
    'templates.common',
    'home',
    'admin',
    'lk-google-picker',
    'ngToast',
    'angular-loading-bar'
])
    .config(['$stateProvider','$urlRouterProvider','lkGoogleSettingsProvider', function($stateProvider, $urlRouterProvider, lkGoogleSettingsProvider){
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
//
//angular.module('app').run(['security', function(security) {
//  // Get the current user when the application starts
//  // (in case they are still logged in from a previous session)
//  security.requestCurrentUser();
//}]);
//
//angular.module('app').controller('AppCtrl', ['$scope', 'i18nNotifications', 'localizedMessages', function($scope, i18nNotifications, localizedMessages) {
//
//  $scope.notifications = i18nNotifications;
//
//  $scope.removeNotification = function (notification) {
//    i18nNotifications.remove(notification);
//  };
//
//  $scope.$on('$routeChangeError', function(event, current, previous, rejection){
//    i18nNotifications.pushForCurrentRoute('errors.route.changeError', 'error', {}, {rejection: rejection});
//  });
//}]);
//
//angular.module('app').controller('HeaderCtrl', ['$scope', '$location', '$route', 'security', 'breadcrumbs', 'notifications', 'httpRequestTracker',
//  function ($scope, $location, $route, security, breadcrumbs, notifications, httpRequestTracker) {
//  $scope.location = $location;
//  $scope.breadcrumbs = breadcrumbs;
//
//  $scope.isAuthenticated = security.isAuthenticated;
//  $scope.isAdmin = security.isAdmin;
//
//  $scope.home = function () {
//    if (security.isAuthenticated()) {
//      $location.path('/dashboard');
//    } else {
//      $location.path('/projectsinfo');
//    }
//  };
//
//  $scope.isNavbarActive = function (navBarPath) {
//    return navBarPath === breadcrumbs.getFirst().name;
//  };
//
//  $scope.hasPendingRequests = function () {
//    return httpRequestTracker.hasPendingRequests();
//  };
//}]);

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
                controller : 'prHomeCtrl'
            })
    }])
    .controller('prHomeCtrl', ['$rootScope', '$scope', 'homeService','ngToast', function($rootScope, $scope, homeService, ngToast){
        $scope.files = [];

        $scope.uploadSheet = function(){
            var fileToUpload = $scope.files[ $scope.files.length - 1 ];
            homeService.uploadGoogleSheet(fileToUpload).
                success(function(data, status, headers, config) {
                    console.log("success");
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                }).
                error(function(data, status, headers, config) {
                    console.log("error");
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                });
        };

        $scope.testToast = function(){
            console.log("test");

            // create a toast:
            ngToast.create('A toast message...');

            // clear specific toast:
//            var msg = ngToast.create({
//                content: 'Another message as <a href="#" class="">HTML</a>'
//            });
//            ngToast.dismiss(msg);

            // clear all toasts:
//            ngToast.dismiss();
        };
//https://docs.google.com/spreadsheets/d/1FrJhUXPYaaKo4Y62uRHgRTwkVeDVgEIrpUmY2r0HEJw/edit?usp=sharing
//https://docs.google.com/spreadsheets/d/1FrJhUXPYaaKo4Y62uRHgRTwkVeDVgEIrpUmY2r0HEJw/pubhtml

        $scope.tabletop= function(){
            if ($scope.files.length) {
                Tabletop.init( {
                    key: $scope.files[ $scope.files.length - 1].id,
                    callback: function(data, tabletop) {
                        console.log(data);
                        console.log(tabletop);
                        if (data) {
                            homeService.uploadGoogleSheetContentsAsJson({"google_sheet_contents" : data})
                        }else{
                            alert("The file has not been shared to the public")
                        }
                    },
                    simpleSheet: true
                })
            }else{
                alert("No file selected")
            }
        }

    }]);
/**
 * Created by kaygee on 2/13/15.
 */


angular.module('home')
    .factory('homeService', ['$http', function($http){
        var homeService = {};

        homeService.uploadGoogleSheet = function(fileObject){
            // Simple POST request example (passing data) :
            return $http.post('/post/google/sheet', fileObject);
//                success(function(data, status, headers, config) {
//                    // this callback will be called asynchronously
//                    // when the response is available
//                }).
//                error(function(data, status, headers, config) {
//                    // called asynchronously if an error occurs
//                    // or server returns response with an error status.
//                });
        };

        homeService.uploadGoogleSheetContentsAsJson = function(fileObject){
            // Simple POST request example (passing data) :
            return $http.post('/post/google/sheet/json', fileObject);
//                success(function(data, status, headers, config) {
//                    // this callback will be called asynchronously
//                    // when the response is available
//                }).
//                error(function(data, status, headers, config) {
//                    // called asynchronously if an error occurs
//                    // or server returns response with an error status.
//                });
        };

        return homeService;
    }]);