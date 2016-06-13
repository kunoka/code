/**
 * Created by A on 2016/6/9.
 */
//声明此JS为严格模式，以回避一些JS的低级错误
'use strict';
angular.module('com.ngnice.app')
.config( //声明config回调函数，$stateProvider和$urlRouterProvider是服务，参数名不可以修改
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state(
            'home',{
                url: '/',
                templateUrl: 'controllers/home/index.html',
                controller: 'HomeIndexCtrl as vm' //as vm 是一项最佳实践
            }
        );
        $stateProvider.state('notFound',{
            url: '/notFound',
//            templateUrl: 'controllers/home/notFound.html',
            templateUrl: 'controllers/reader/create.html',
            controller: 'ReaderCreateCtrl as vm'
//            controller: 'HomeNotFoundCtrl as vm'
        });
        $urlRouterProvider.otherwise('/notFound');

        $stateProvider.state('reader', {
            url: '/reader',
            tempalte: '<div ui-view></div>',
            abstract: true
        });
        $stateProvider.state('reader.create',{
            url: '/create',
            templateUrl: 'controllers/reader/create.html',
            controller: 'ReaderCreateCtrl as vm'
        });
    }
);