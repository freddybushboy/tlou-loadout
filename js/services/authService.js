angular.module('loadoutApp')
  .factory('AuthService', function ($resource, $cookies, $cookieStore) {

    return {
      getCurrent: function() {
        return {
          id: $cookies.userId,
          name: $cookies.userName
        };
      },
      login: function() {
        // var login = $resource('/api/reddit-login');
        // login.get().$promise.then(function(data) {
        //   console.log(data)
        // }, function(error) {
        //   console.log('error', error);
        // });
        $cookies.userId = 'hi7g5';
        $cookies.userName = 'FreddyBushBoy';
      },
      logout: function() {
        // remove the cookies.
        $cookieStore.remove('userId');
        $cookieStore.remove('userName');
      }
    }
  });
