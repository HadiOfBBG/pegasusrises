/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .controller('prSurveyController', ['$rootScope', '$scope', 'homeService', 'growl',
        function($rootScope, $scope, homeService, growl){

        }])
    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService', 'growl','uiGmapGoogleMapApi','surveyData',
        function($rootScope, $scope, homeService, growl, uiGmapGoogleMapApi, surveyData){

            $scope.surveyData = surveyData.data;
            if (surveyData.data.questions_details.length) {
               $scope.surveyName =  surveyData.data.questions_details[0].survey_name
            }

            $scope.selectQuestion = function(question){
                $scope.selected_question = question;
            }


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

            $scope.chartObject = {};

            $scope.onions = [
                {v: "Onions"},
                {v: 3},
            ];

            $scope.chartObject.data = {"cols": [
                {id: "t", label: "Topping", type: "string"},
                {id: "s", label: "Slices", type: "number"}
            ], "rows": [
                {c: [
                    {v: "Mushrooms"},
                    {v: 3},
                ]},
                {c: $scope.onions},
                {c: [
                    {v: "Olives"},
                    {v: 31}
                ]},
                {c: [
                    {v: "Zucchini"},
                    {v: 1},
                ]},
                {c: [
                    {v: "Pepperoni"},
                    {v: 2},
                ]}
            ]};


            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.chartObject.type = 'ColumnChart';
            $scope.chartObject.options = {
                'title': 'How Much Pizza I Ate Last Night'
            };
            $scope.changeChartType = function (chartType) {
                $scope.chartObject.type = chartType;
            };

            $scope.tabs = [
                { title:'Dynamic Title 1', content:'Dynamic content 1' },
                { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
            ];

            $scope.toggleButtons = function(state){
                $scope.showButtons = state;
            }

        }]);

