'use strict';

var todoModule = angular.module('todoApp', []);

todoModule.controller('todoController', function($scope){
    $scope.title = "Yoshi's todo list";

    var model =
        [
            {
                description: 'Learn Javascript',
                done: true
            },
            {
                description: 'Learn angular',
                done: false
            },
            {
                description: 'Buy flowers',
                done: false
            },
            {
                description: 'Go shopping',
                done: false
            }
        ];

    $scope.data = model;
    $scope.incomplete = function() {
        var numberOfIncompleteTodos = 0;

        angular.forEach(model, function(item){
           if(!item.done)
           {
               numberOfIncompleteTodos++;
           }
        });

        return numberOfIncompleteTodos;
    }

    $scope.addTodo = function() {
        var newTodo = { description: $scope.inputText, done: false};
        model.push(newTodo);
    }
});
