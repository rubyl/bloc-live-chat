(function () {
    function ModalCtrl(Room, $uibModal) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modal'
            });
            
            modalInstance.result.then(function(name) {
               this.room = name;
               Room.createRoom(this.room);
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();