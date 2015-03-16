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
                        return surveyService.getSurveyQuestionDetails()
                    },

                    submittedResponsesData : function(surveyService){
                        return surveyService.getAllResponses()
                    }
                }
            })
            .state('surveys.analytics', {
                url : '/analytics/:survey_name/:index',
                templateUrl : 'survey/detailed_analytics.tpl.html',
                controller : 'prDetailedAnalyticsSurveyController'
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