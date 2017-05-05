const app = angular.module('reddit', ['ui.router']);


app.controller('MainController', function ($scope, Subreddit) {
  $scope.submit = (subreddit) => {
    Subreddit.getTopic(subreddit)
    .success((res) => {
      $scope.posts = res.data.children;
      console.log(res, 'res')
    });
  };
  // create a filter function to show only posts that range between these given minimums and maximums
  $scope.commentMinMax = (minComment, maxComment) => {
    return $scope.posts.filter(post => post.data.num_comments > minComments && post.data.num_comments > minComments);
  };
  $scope.filterUps = (minUps) => {
    return $scope.posts.filter(post => post.data.ups > minUps);
  };
});

app.factory('Subreddit', function ($http) {
  return {
    getTopic: topic => $http.get(`http://www.reddit.com/search.json?q=${topic}&sort=top&limit=5/comments/article`),
  }
});
