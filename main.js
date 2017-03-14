angular.module('APP', ['ngSanitize'])
  .controller('codeCtrl', ['$scope', function($scope){

    $scope.indent = function(times){
      return '&nbsp;&nbsp;'.repeat(times);
    };

    // Function name
    $scope.func_name = '';

    // Function type params
    $scope.type_params = [];

    // Function params
    $scope.params = [];

    // Function return-type
    $scope.ret_type = '';

    // Add a type param
    $scope.add_type_param = function(){
      $scope.type_params.push({name: ""});
    };

    // Remove the type param specified by a index
    $scope.remove_type_param_by_idx = function(idx){
      $scope.type_params.splice(idx, 1);
    };

    // Add a param
    $scope.add_param = function(){
      $scope.params.push({name: "", type: ""});
    };

    // Remove the param specified by a index
    $scope.remove_param_by_idx = function(idx){
      $scope.params.splice(idx, 1);
    };


    // Local variables
    $scope.local_vars = [];

    // Add a local variable
    $scope.add_local_var = function(){
      $scope.local_vars.push({name: "", type: "", init_value: "", update_value: ""});
    };

    // Remove the local variable specified by a index
    $scope.remove_local_var_by_idx = function(idx){
      $scope.local_vars.splice(idx, 1);
    };

    // A condition in while-loop
    $scope.while_cond = '';

    // Loop i begin value TODO remove
    $scope.loop_begin = '';

    // Loop i min value TODO remove
    $scope.loop_min  = '';

    // Loop dec value TODO remove
    $scope.loop_dec_value = '1';

    // Function's return-value
    $scope.ret_val = '';

    // Erase prev prefix
    $scope.erase_prev = function(var_name){
      return var_name.replace(/prev_/g, '');
    };

    // Example settings
    $scope.example_settings = [
      {name: "Empty setting", func: load_empty_setting},
      {name: "Power(a^n)",    func: load_pow_setting},
      {name: "Factorial(n!)", func: load_fact_setting},
      {name: "Fibonacci",     func: load_fib_setting},
      {name: 'map ver1',      func: load_map1_setting},
      {name: 'map ver2',      func: load_map2_setting},
      {name: 'foldLeft',      func: load_foldl_setting},
      {name: 'foldRight',     func: load_foldr_setting}

    ];

    // Selected example setting
    $scope.current_setting = $scope.example_settings[0];

    // Example setting
    function load_empty_setting(){
      $scope.func_name = '';
      $scope.type_params = [];
      $scope.params = [];
      $scope.ret_type = '';
      $scope.local_vars = [];
      $scope.while_cond = '';
      $scope.ret_val = '';
    };

    // power (a^n)
    function load_pow_setting(){
      $scope.func_name = 'power';
      $scope.type_params = [];
      $scope.params = [{name: "a", type: "Int"}, {name: "n", type: "Int"}];
      $scope.ret_type = 'Int';
      $scope.local_vars = [
        {name: "i", type: "Int", init_value: "0", update_value: "i+1"},
        {name: "res", type: "Int", init_value: "1", update_value: "res*a"},
      ];
      $scope.while_cond = 'i < n';
      $scope.ret_val = 'res';
    };

    // factorial
    function load_fact_setting(){
      $scope.func_name = 'fact';
      $scope.type_params = [];
      $scope.params = [{name: "n", type: "Int"}];
      $scope.ret_type = 'Int';
      $scope.local_vars = [
        {name: "i", type: "Int", init_value: "0", update_value: "i+1"},
        {name: "res", type: "Int", init_value: "1", update_value: "res*m"},
        {name: "m", type: "Int", init_value: "n", update_value: "m-1"}
      ];
      $scope.while_cond = 'i < n';
      $scope.ret_val = 'res';
    };


    // fib
    function load_fib_setting(){
      $scope.func_name = 'fib';
      $scope.type_params = [];
      $scope.params = [{name: "n", type: "Int"}];
      $scope.ret_type = 'Int';
      $scope.local_vars = [
        {name: "i", type: "Int", init_value: "0", update_value: "i+1"},
        {name: "a", type: "Int", init_value: "1", update_value: "prev_b"},
        {name: "b", type: "Int", init_value: "1", update_value: "prev_a+prev_b"}
      ];
      $scope.while_cond = 'i < n';
      $scope.ret_val = 'a';
    };

    // map1
    function load_map1_setting(){
      $scope.func_name = 'map';
      $scope.type_params = [{name: 'A'},{name: 'B'}];
      $scope.params = [
        {name: "seq", type: 'Seq[A]'},
        {name: "f",  type: 'A => B'}
      ];
      $scope.ret_type = 'Seq[B]';
      $scope.local_vars = [
        {name: "result", type: 'Seq[B]', init_value: "Seq.empty", update_value: "result :+ f(seq(i))"},
        {name: "i",  type: 'Int', init_value: "0", update_value: "i + 1"}
      ];
      $scope.while_cond = 'i < seq.length'
      $scope.ret_val = 'result';
    };

    // map2
    function load_map2_setting(){
      $scope.func_name = 'map';
      $scope.type_params = [{name: 'A'},{name: 'B'}];
      $scope.params = [
        {name: "seq", type: 'Seq[A]'},
        {name: "f",  type: 'A => B'}
      ];
      $scope.ret_type = 'Seq[B]';
      $scope.local_vars = [
        {name: "result", type: 'Seq[B]', init_value: "Seq.empty", update_value: "result :+ f(rest.head)"},
        {name: "rest",  type: 'Seq[A]', init_value: "seq", update_value: "rest.tail"}
      ];
      $scope.while_cond = 'rest.nonEmpty'
      $scope.ret_val = 'result';
    };

    // foldLeft
    function load_foldl_setting(){
      $scope.func_name = 'foldLeft';
      $scope.type_params = [{name: 'E'},{name: 'A'}];
      $scope.params = [
        {name: "seq", type: 'Seq[E]'},
        {name: "zero",  type: 'A'},
        {name: "f",     type: '(A, E) => A'},
      ];
      $scope.while_cond = 'i < seq.length'
      $scope.ret_type = 'A';
      $scope.local_vars = [
        {name: "accum", type: 'A', init_value: "zero", update_value: "f(accum, seq(i))"},
        {name: "i",     type: 'Int', init_value: "0", update_value: "i + 1"}
      ];

      $scope.ret_val = 'accum';
    };

    // foldRight
    function load_foldr_setting(){
      $scope.func_name = 'foldRight';
      $scope.type_params = [{name: 'E'},{name: 'A'}];
      $scope.params = [
        {name: "seq", type: 'Seq[E]'},
        {name: "zero",  type: 'A'},
        {name: "f",     type: '(E, A) => A'},
      ];
      $scope.while_cond = 'i >= 0';
      $scope.ret_type = 'A';
      $scope.local_vars = [
        {name: "accum", type: 'A', init_value: "zero", update_value: "f(seq(i), accum)"},
        {name: "i",     type: 'Int', init_value: "seq.length-1", update_value: "i - 1"}
      ];

      $scope.ret_val = 'accum';
    };

  }]);
