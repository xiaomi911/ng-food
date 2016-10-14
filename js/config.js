var app = angular.module('foodTest',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){

    $stateProvider
        .state('index',{
            url:'/',
            templateUrl:'tpl/first.html'
        })
        .state('a1',{
            url:'/a1',
            templateUrl:'tpl/a1.html'
        })
        .state('a1.a2',{
            url:'/a2',
            templateUrl:'tpl/a2.html'
        })
        .state('foodchange',{
            url:'/foodchange',
            templateUrl:'tpl/e-foodchange.html'
        })
        .state('foodlist',{
            url:'/foodlist',
            templateUrl:'tpl/foodlist.html'
        })
        .state('findex',{
            url:'/findex',
            templateUrl:'tpl/f-index.html'
        });


    $urlRouterProvider.otherwise('/');
});

