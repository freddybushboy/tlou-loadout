angular.module('loadoutApp')
  .factory('AuthService', function ($cookies, $cookieStore) {

    return {
      getCurrent: function() {
        return {
          id: $cookies.userId,
          name: $cookies.userName
        };
      },
      login: function() {
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
