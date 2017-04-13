(function () {
    function RoomCtrl($scope, Room) {
        console.log("roomCtrl");
        console.log(Room);
        for (var i = 0; i < Room.all.length; i++) {
            console.log(Room.all[i]);
        }
        this.roomData = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();