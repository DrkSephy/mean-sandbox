nhlApp.controller('helloController', function($scope){
    $scope.pageData = {};
    $scope.pageData = helloFactory.get().success(function(data){
        $scope.pageData = data;
    });
});