/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.
            state('surveys', {
                url : '/surveys',
                templateUrl : 'survey/survey_list.tpl.html',
                controller : 'prSurveyController',
                resolve : {
                    surveyService : 'surveyService',

                    questionData : function(surveyService){
                        //return surveyService.getSurveyQuestionDetails()
                        return {}
                    },

                    submittedResponsesData : function(surveyService){
                        return {}
                    }
                }
            })
            .state('surveys.analytics', {
                url : '/analytics',
                templateUrl : 'survey/dummy_analytics.tpl.html',
                controller : 'prSelectedSurveyController'
            })
            .state('surveys.respondents', {
                url : '/respondents',
                templateUrl : 'survey/respondents.tpl.html',
                controller : 'prSurveyRespondentsController'
            })
            .state('surveys.selected_survey', {
                url : '/select/1',
                templateUrl : 'survey/selected_survey.tpl.html',
                controller : 'prSelectedSurveyController'
            })
    }]);