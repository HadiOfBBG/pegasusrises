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

            $scope.selectQuestion = function(question, index){
                //Empty the scope object or declare if undefined
                $scope.selected_question = {};

                //Assign the selected/clicked question to the declared scope variable
                $scope.selected_question = question;

                //Assign the index too for detailed analytics view
                $scope.selected_question.index = index;

                //for close ended questions,
                if ($scope.selected_question.question_type == 'close_ended') {

                    //Get the individual answers value
                    $scope.selected_question.answer_values = $scope.selected_question.possible_answers.split(',');
                    $scope.selected_question.answer_labels = $scope.selected_question.possible_answers_labels.split(',');
                    $scope.selected_question.answers = {};
                    $scope.chartObject.data= {
                        cols: [
                            {id: 'A', label: 'question_field', type: 'string'},
                            {id: 'B', label: 'Responses', type: 'number'}
                        ],
                        rows : []
                    };
                    //Assign the split answer value as a key in a property of the selected question's answer object
                    angular.forEach($scope.selected_question.answer_values, function (option, index) {

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

                    //Assign answer count to chart rows for chart display
                    angular.forEach($scope.selected_question.answer_values, function (option, indexOption) {
                        if ($.trim(option) != '') {

                            $scope.chartObject.data.rows.push({
                                c : [ {v: $scope.selected_question.answer_labels[indexOption]},
                                    {v : $scope.selected_question.answers[option],   f: $scope.selected_question.answers[option] }]
                            });
                        }

                    });



                    // $routeParams.chartType == BarChart or PieChart or ColumnChart...
                    $scope.chartObject.type = 'BarChart';
                    $scope.chartObject.options = {
                        "title": $scope.selected_question.question,
                        "fill": 20,
                        "displayExactValues": true
                        //"is3D": true,

                    };
                }else{
                    $scope.chartObject = {
                        data : {
                            cols : [],
                            rows : []
                        }
                    };
                }



            };





            $scope.changeChartType = function (chartType) {
                $scope.chartObject.type = chartType;

                if (chartType != 'BarChart') {
                    $scope.chartObject.options.vAxis =  {
                        "title": "Responses"
                        //"gridlines": {"count": 6}
                    };
                    $scope.chartObject.options.hAxis =  {
                        "title": "Possible Answers"
                    }
                }else{
                    $scope.chartObject.options.vAxis =  {
                        "title": "Possible Answers"
                        //"gridlines": {"count": 6}
                    };
                    $scope.chartObject.options.hAxis =  {
                        "title": "Responses"
                    }
                }
            };


        }])

    .controller('prDetailedAnalyticsSurveyController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        'questionData','submittedResponsesData','$stateParams','uiGmapGoogleMapApi',
        function($rootScope, $scope, homeService, surveyService, growl, questionData, submittedResponsesData, $stateParams, uiGmapGoogleMapApi ){

            $scope.selected_question = questionData.data.questions_details[ $stateParams.index ];


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

            /*
             *Email Respondent Section
             * */
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
                    });
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
            };

            /*
             * End email section
             * */


            /*
            * SMS Send Section
            * */
            $scope.sms_respondent_form = {
                phone_numbers  : [],
                recipients  : [],
                from : "PegasusRises",
                survey :  $scope.surveyName
            };

            $scope.sendSMS = function(){
                if ($scope.sms_respondent_form.phone_numbers.length > 0) {
                    $scope.respondent_form.recipients = [];
                    angular.forEach($scope.sms_respondent_form.phone_numbers, function (number, index) {
                        $scope.sms_respondent_form.recipients.push(number.text)
                    });
                    if ($scope.sms_respondent_form.survey) {
                        surveyService.sendRespondentSMS($scope.sms_respondent_form)
                            .success(function () {
                                growl.success("SMS sent successfully", {});
                            })
                            .error(function () {
                                growl.error("SMS could not be sent", {});

                            })
                    }else{
                        growl.info("Please select a survey", {});
                    }

                }else{
                    growl.info("Please type at least one recipient phone number", {});
                }
            };

            /*
            * Send SMS end
            * */

         }]);

