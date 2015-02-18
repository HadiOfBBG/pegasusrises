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