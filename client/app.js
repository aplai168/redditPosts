const app = angular.module('reddit', ['ui.router']);


app.controller('MainController', function($scope, $http) {
    $scope.search = {};
    // $http.get("http://www.reddit.com/search.json?q=ferrari")
    $http.get('http://www.reddit.com/search.json?q=ferrari&sort=new')
    // $http.get(`http://www.reddit.com/search.json?q=${topic}&sort=new`)

    .success(function(response) {
        // $scope.names = response.data.children;
        $scope.posts = response.data.children;

        console.log(response, 'response')
        $scope.list = ['hey', 'whatupd'];
    });
});
