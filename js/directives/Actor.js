angular.module('myApp.directives.Actor',[])

    .directive('actor',function() {
        return {
            restrict: 'E',
            templateUrl: 'views/partials/actor.html'
        };
    });
