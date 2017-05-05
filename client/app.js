const app = angular.module('reddit', ['ui.router']);


app.controller('MainController', function ($scope, Subreddit) {
  $scope.submit = (subreddit) => {
    Subreddit.getTopic(subreddit)
    .success((res) => {
      $scope.posts = res.data.children;
    });
  };
});

app.factory('Subreddit', function ($http) {
  // $http.get("http://www.reddit.com/search.json?q=ferrari")
  // $http.get('http://www.reddit.com/search.json?q=ferrari&sort=new')
  return {
    getTopic: topic => $http.get(`http://www.reddit.com/search.json?q=${topic}`),
    // getTopic: topic => $http.get('http://www.reddit.com/search.json?q=ferrari&sort=new'),
  }
});

// const getTopic = (topic) => {
//   $http.get(`http://www.reddit.com/search.json?q=${topic}`)
//   .success((response) => {
//     $scope.posts = response.data.children;
//     console.log(response, 'response')
//   });
// };
