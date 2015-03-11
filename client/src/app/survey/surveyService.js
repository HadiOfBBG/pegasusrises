/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .factory('surveyService' , [ '$http', function($http){
        var surveyService = {};

        surveyService.getAllSurveys = function(){
            return $http.get('all/surveys')
        };

        surveyService.getAllSubmissions = function( ){
            return $http.get('/pegasus/database/read')
        };

        surveyService.sendRespondentEmail = function(data){
            return $http.post('/sendmail', data)
        };
        return surveyService;
    }]);