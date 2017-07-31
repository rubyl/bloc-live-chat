(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
         });
         
         $stateProvider
            .state('rooms', {
            url: '/',
            controller: 'RoomCtrl as rooms',
            templateUrl: '/templates/rooms.html'
         });

     }
    
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/user.html',    
                controller: 'UserModalInstanceCtrl as user',
                backdrop  : 'static',
                keyboard  : false
            });
            
            console.log("hello");

            
            modalInstance.result.then(function(username) {
                this.username = username;
                $cookies.put('blocChatCurrentUser', this.username);
            })
        }
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
 })();