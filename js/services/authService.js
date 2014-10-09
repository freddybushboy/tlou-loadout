angular.module('loadoutApp')
  .factory('AuthService', function ($location, $resource, $cookies, $cookieStore) {

    return {
      getCurrent: function() {
        var userId = $location.search()['id'];
        var userName = $location.search()['name'];
        if (userId !== undefined && userId !== undefined) {
          $cookies.userId = userId;
          $cookies.userName = userName;
        }
        return {
          id: $cookies.userId,
          name: $cookies.userName
        };
      },
      logout: function() {
        // remove the cookies.
        $cookieStore.remove('userId');
        $cookieStore.remove('userName');
      }
    }
  });
