/* 
 The global service will return an object which we can use to identify 
 the user, as well as to determine if that user has logged in or not. 
*/
window.angular.module('ngff.services.global', [])
  .factory('Global', function() {
    var current_user = window.user;
    return {
        currentUser: function(){
            return current_user;
        },
        isSignedIn: function(){
            return !!current_user;
        }
    };

  });