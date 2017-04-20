(function () {
    function RoomCtrl(Room, Message, $cookies) {
        this.roomData = Room.all;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        };
        
        this.sendMessage = function () {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            this.newMessage.sentAt = new Date().toString();
            Message.send(this.newMessage);
        }
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$cookies', RoomCtrl]);
})();
