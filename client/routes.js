angular.module('reddit')
  .config(function ($stateProvider,
    $urlRouterProvider
  ) {
    $stateProvider
      .state('start', {
        url: '/start',
        templateUrl: 'views/home.html',
        controller: 'MainController',
      });

    $urlRouterProvider.otherwise('start');
  });
