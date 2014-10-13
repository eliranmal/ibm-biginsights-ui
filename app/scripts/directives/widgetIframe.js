'use strict';

angular.module('ibmBiginsightsUiApp')
    .directive('widgetIframe', function () {
        return {
            template: '<div></div>',
            restrict: 'A',
            'scope': {
                'url': '='
            },
            link: function postLink(scope, element/*, attrs*/) {


                function refresh() {
                    element.find('iframe').remove();
                    element.append($('<iframe></iframe>', { 'src': scope.url, 'scrolling': 'no', 'width': '800px', 'height': '800px', 'frameborder': 'no'}));
                }


                refresh();
                scope.$watch('url', refresh);
            }
        };
    });