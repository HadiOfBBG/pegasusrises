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
    'ngTagsInput',
    'sun.scrollable'
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