/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyController', ['$rootScope', '$scope', 'homeService', 'growl','questionData','submittedResponsesData',
        function($rootScope, $scope, homeService, growl, questionData, submittedResponsesData){

            $scope.surveyData = questionData.data;
            if (questionData.data.questions_details.length) {
                $scope.surveyName =  questionData.data.questions_details[0].survey_name
            }

            $scope.submittedResponses = submittedResponsesData.data
        }])



    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService', 'growl','uiGmapGoogleMapApi',
        'questionData', 'submittedResponsesData',
        function($rootScope, $scope, homeService, growl, uiGmapGoogleMapApi, questionData, submittedResponsesData){

            $scope.surveyData = questionData.data;
            if (questionData.data.questions_details.length) {
                $scope.surveyName =  questionData.data.questions_details[0].survey_name
            }

            //This is the object to be sent to google charts
            $scope.chartObject = {
                data : {
                    cols : [],
                    rows : []
                }
            };

            $scope.selectQuestion = function(question){
                //Empty the scope object or declare in undefined
                $scope.selected_question = {};

                //Assign the selected/clicked question to the declared scope variable
                $scope.selected_question = question;

                //for close ended questions,
                if ($scope.selected_question.question_type == 'close_ended') {

                    //Get the individual answers value
                    $scope.selected_question.answer_values = $scope.selected_question.possible_answers.split(',');
                    $scope.selected_question.answers = {};

                    //Assign the split answer value as a key in a property of the question's answer object
                    angular.forEach($scope.selected_question.answer_values, function (option, index) {
                        // = {"cols": [
                        //    {id: "t", label: "Topping", type: "string"},
                        //    {id: "s", label: "Slices", type: "number"}
                        //], "rows": [
                        //  ;
                        //    {c: $scope.onions},
                        //    {c: [{v: "Olives"},{v: 31}]},
                        //    {c: [{v: "Zucchini"},{v: 1}]},
                        //    {c: [{v: "Pepperoni"},{v: 28}]}
                        //]};
                        //Assign the possible answers to the chartObjects column called "cols"
                        $scope.chartObject.data.cols.push({
                            id : option,
                            label : $scope.selected_question.possible_answers_labels[index],
                            type : (typeof option)
                        });
                        //$scope.selected_question.answers[$.trim(option)] = $scope.selected_question.possible_answers_labels[index];

                        //In the selected question object, assign each possible answer to a property in the "answer" property of the question
                        if ($.trim(option) != '') {
                            $scope.selected_question.answers[ $.trim(option) ] = 0;
                        }
                    });

                    //Loop over the submitted responses submitted
                    angular.forEach(submittedResponsesData.data.submissions, function (responseObject, indexObject) {

                        //Loop over the data field in the responses submitted
                        angular.forEach(responseObject.data, function (responseData, indexData) {

                            //if the supplied answer is a multiple choice one, loop over and increment each option
                            if ( typeof (responseData[ $scope.selected_question.question_field ]) == 'object') {
                                angular.forEach( responseData[ $scope.selected_question.question_field ], function (choice, index) {

                                    //And Increment the answer chosen in the chosen question's answer object
                                    $scope.selected_question.answers [ choice ] ++
                                });
                            }else{
                                //Increment the answer chosen in the chosen question's answer object
                                $scope.selected_question.answers [ responseData[ $scope.selected_question.question_field ] ] ++
                            }


                        })

                    })
                }
            };


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



            $scope.onions = [
                {v: "Onions"},
                {v: 3}
            ];

            // = {"cols": [
            //    {id: "t", label: "Topping", type: "string"},
            //    {id: "s", label: "Slices", type: "number"}
            //], "rows": [
            //    {c: [{v: "Mushrooms"},{v: 3}]},
            //    {c: $scope.onions},
            //    {c: [{v: "Olives"},{v: 31}]},
            //    {c: [{v: "Zucchini"},{v: 1}]},
            //    {c: [{v: "Pepperoni"},{v: 28}]}
            //]};

            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.chartObject.type = 'ColumnChart';
            $scope.chartObject.options = {
                "title": $scope.surveyName,
                "fill": 20,
                "displayExactValues": true,
                //"is3D": true,
                "vAxis": {
                    "title": "Responses", "gridlines": {"count": 6}
                },
                "hAxis": {
                    "title": "Possible Answers"
                }
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
            };

        }])
    .controller('prSurveyRespondentsController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        'questionData','submittedResponsesData',
        function($rootScope, $scope, homeService,surveyService, growl, questionData, submittedResponsesData ){

            //get email address of logged in user from the backend
            var from = $('#user_logged_in_email').text();

            $scope.surveyData = questionData.data;
            if (questionData.data.questions_details.length) {
                $scope.surveyName = $.trim( questionData.data.questions_details[0].survey_name)
            }else{
                //$scope.surveyName = "Test Survey Name";
            }


            $scope.respondent_form = {
                emails  : [],
                recipients  : [],
                from : from,
                survey :  $scope.surveyName
            };

            $scope.sendEmail = function(){
                if ($scope.respondent_form.emails.length > 0) {
                    $scope.respondent_form.recipients = [];
                    angular.forEach($scope.respondent_form.emails, function (email, index) {
                        $scope.respondent_form.recipients.push(email.text)
                    })
                    if ($scope.respondent_form.survey) {
                        surveyService.sendRespondentEmail($scope.respondent_form)
                            .success(function () {
                                growl.success("Emails sent successfully", {});
                            })
                            .error(function () {
                                growl.error("Emails could not be sent", {});

                            })
                    }else{
                        growl.info("Please select a survey", {});
                    }

                }else{
                    growl.info("Please type at least one recipient email", {});
                }
            }

        }]);

