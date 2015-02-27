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
        }]);
