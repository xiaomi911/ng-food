app.directive('fChange',["$rootScope",function($rootScope){
    return {
        restrict:'C',
        templateUrl:'tpl/e-foodchange1.html',
        controller:[
            '$scope',
            function($scope){
                $scope.$on('fcCount',function(data){
                    $scope._foodCount = data.targetScope.fcCount;
                    $scope._foodName = data.targetScope._tmp2;
                });
                $scope.$on('change',function(data){
                    $scope.resfood = data.targetScope.changedata.result;
                })
            }
        ]
    }
}]);