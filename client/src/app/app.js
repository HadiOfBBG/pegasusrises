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
    'angular-growl'
])
    .config(['$stateProvider','$urlRouterProvider','lkGoogleSettingsProvider', 'growlProvider', function($stateProvider, $urlRouterProvider, lkGoogleSettingsProvider, growlProvider){
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

        growlProvider.globalTimeToLive(5000);
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
