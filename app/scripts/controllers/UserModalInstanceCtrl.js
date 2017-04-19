(function () {
    function UserModalInstanceCtrl($uibModalInstance) {
        this.createUsername = function () {
            $uibModalInstance.close(this.username);
        };
    };
    
    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl', ['$uibModalInstance', UserModalInstanceCtrl]);
})();