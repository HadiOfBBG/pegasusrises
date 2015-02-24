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