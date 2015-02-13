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
    .controller('prHomeCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
        $scope.test = 'Kaygee';
        $scope.files = [];
    }]);