angular.module('APP', ['ngSanitize'])
  .controller('codeCtrl', ['$scope', function($scope){

    $scope.indent = function(times){
      return '&nbsp;&nbsp;'.repeat(times);
    };

    // Function name
    $scope.func_name = '';

    // Function params
    $scope.params = [];

    // Add a param
    $scope.add_param = function(){
      $scope.params.push({name: ""});
    };

    // Remove the param specified by a index
    $scope.remove_param_by_idx = function(idx){
      $scope.params.splice(idx, 1);
    };


    // Local variables
    $scope.local_vars = [];

    // Add a local variable
    $scope.add_local_var = function(){
      $scope.local_vars.push({name: "", init_value: "", update_value: ""});
    };

    // Remove the local variable specified by a index
    $scope.remove_local_var_by_idx = function(idx){
      $scope.local_vars.splice(idx, 1);
    };

    // Loop i begin value
    $scope.loop_begin = '';

    // Loop i min value
    $scope.loop_min  = '';

    // Loop dec value
    $scope.loop_dec_value = '1';

    // Function's return-value
    $scope.ret_val = '';

    // Erase prev prefix
    $scope.erase_prev = function(var_name){
      return var_name.replace(/prev_/g, '');
    };


    // Example setting
    $scope.load_empty_setting = function(){
      $scope.func_name = '';
      $scope.params = [];
      $scope.local_vars = [];
      $scope.loop_begin = '';
      $scope.loop_min   = '';
      $scope.loop_dec_value = '';
      $scope.ret_val = '';
    };

    // power (a^n)
    $scope.load_pow_setting = function(){
      $scope.func_name = 'power';
      $scope.params = [{name: "a"}, {name: "n"}];
      $scope.local_vars = [
        {name: "res", init_value: "1", update_value: "res*a"},
      ];
      $scope.loop_begin = 'n';
      $scope.loop_min   = '0';
      $scope.loop_dec_value = '1';
      $scope.ret_val = 'res';
    };

    // factorial
    $scope.load_fact_setting = function(){
      $scope.func_name = 'fact';
      $scope.params = [{name: "n"}];
      $scope.local_vars = [
        {name: "res", init_value: "1", update_value: "res*m"},
        {name: "m", init_value: "n", update_value: "m-1"}
      ];
      $scope.loop_begin = 'n';
      $scope.loop_min   = '0';
      $scope.loop_dec_value = '1';
      $scope.ret_val = 'res';
    };


    // fib
    $scope.load_fib_setting = function(){
      $scope.func_name = 'fib';
      $scope.params = [{name: "n"}];
      $scope.local_vars = [
        {name: "a", init_value: "1", update_value: "prev_b"},
        {name: "b", init_value: "1", update_value: "prev_a+prev_b"}
      ];
      $scope.loop_begin = 'n';
      $scope.loop_min   = '0';
      $scope.loop_dec_value = '1';
      $scope.ret_val = 'a';
    };

  }]);
