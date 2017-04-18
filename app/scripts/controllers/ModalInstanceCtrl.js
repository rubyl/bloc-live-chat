(function () {
    function ModalInstanceCtrl($uibModalInstance, $cookies, Room) {
        this.createRoom = function () {
            $uibModalInstance.close(this.name);
        };
        
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        
        this.createUsername = function () {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        };
    };
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', '$cookies', ModalInstanceCtrl]);
})();