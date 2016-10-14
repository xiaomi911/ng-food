app
    .controller('firstPage', function ($scope, $rootScope) {
        $scope.changeActive = function (index) {
            $rootScope.arr = [0, 0, 0];
            $rootScope.arr[index - 1] = 1;
        }
    })
    .controller('a1', function ($scope, $rootScope, $http) {
        $http.get('data/a1.json').success(function (data) {
            $scope._data = data.result;
        })
    })
    .controller('foodchange', function ($scope, $rootScope, slideSelect,$http) {
        var tmp=[],tmp2;
        $http.post('data/foodClassify.json')
        .success(function(data){
            $scope.res = data.result;
            $scope._tmp = $scope.res[0].food;
            $scope._tmp2 = $scope.res[0].foodDetail[0];
            data.result.forEach(function(v,i){
                tmp.push(v.food);
            })
        });
        $scope.choose = function () {
            slideSelect.show({
                    title: '选择分类',
                    init: 0,
                    data: tmp,
                    sCallback: function (selected) {
                        //console.log(selected);
                    },
                    done: function (data) {
                        //document.querySelector('.gushu').innerHTML=data.value+"<a href></a>";
                        $scope._tmp = data.value;
                        tmp2 = $scope.res[data.index].foodDetail;
                        //document.querySelector('.shicai').innerHTML=tmp2[0]+"<a href></a>";
                        $scope._tmp2 = tmp2[0];
                        $scope.$apply(function(){
                            console.log('updated..')
                        });
                    }

                })
        };
        $scope.select = function () {

            slideSelect.show({
                    title: '选择食材',
                    init: 0,
                    data: tmp2,
                    sCallback: function (selected) {
                        //console.log(selected);
                    },
                    done: function (data) {

                        $scope._tmp2 = data.value;
                        //document.querySelector('.shicai').innerHTML=data.value+"<a href></a>";
                    }

                })
        };

        $scope.fcShow = false;
        $scope.showFChange = function(){
            $scope.fcShow = true;
            $scope.$broadcast('fcCount');

            $http({
                method:'post',
                url:'data/foodchangelist.json',
                data:{
                    'fenlei':$scope._tmp,
                    'shicai':$scope._tmp2,
                    'num':$scope.fcCount
                }
            })
            .success(function(data){
                console.log(data);
                $scope.changedata = data;
                $scope.$broadcast('change')
            })
        }
    });