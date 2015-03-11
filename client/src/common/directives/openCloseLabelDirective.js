/**
 * Created by Kaygee on 07/03/2015.
 */

angular.module('directives', []);


angular.module('directives')
    .directive('openClosed', [function(){
        return {
            restrict: 'ECA',

            replace: false,

            scope: {
                type: '@'
            },

            controller: function ($scope) {
                $scope.label = {
                    open_ended : 'OPEN',
                    close_ended : 'CLOSED'
                };

                $scope.class = {
                    open_ended : 'label-success',
                    close_ended : 'label-danger'
                }            },

            template: '<span class="label" ng-title="{{  label [ type ] - ENDED }}" ng-class="class[ type ]" style="font-size: smaller">{{ label [ type ] }}</span>'
        }
    }]);