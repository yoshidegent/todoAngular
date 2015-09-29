'use strict';

var todoModule = angular.module('todoApp', []);

todoModule.controller('todoController', function($scope, $http){
    $scope.title = "Yoshi's todo list";

    var todoItemModel;

    $http.get('model/data.json').success(function(data){
        $scope.data = data;
    });

    //$scope.data = todoItemModel;

    $scope.incomplete = function() {
        var numberOfIncompleteTodos = 0;

        angular.forEach(todoItemModel, function(item){
           if(!item.done)
           {
               numberOfIncompleteTodos++;
           }
        });

        return numberOfIncompleteTodos;
    };

    $scope.addTodo = function() {
        var newTodo = { description: $scope.inputText, done: false};
        todoItemModel.push(newTodo);
    };
});
