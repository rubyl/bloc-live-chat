(function () {
    function ModalInstanceCtrl($uibModalInstance, $cookies, Room) {
        this.createRoom = function () {
            $uibModalInstance.close(this.name);
        };
        
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    };
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', '$cookies', ModalInstanceCtrl]);
})();