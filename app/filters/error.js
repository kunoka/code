/**
 * Created by A on 2016/6/12.
 */
angular.module("com.ngnice.app").filter('error', function(Errors){
    return function(name){
        return Errors[name] || name;
    };
})