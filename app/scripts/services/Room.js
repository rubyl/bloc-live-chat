(function() {
  function Room($firebaseArray) {
    console.log("roomjs");
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();