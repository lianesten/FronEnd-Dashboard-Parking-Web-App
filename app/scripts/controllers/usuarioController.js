'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('usuarioCtrl', ['$scope', '$timeout','usuarioService', 
  	function ($scope, $timeout,usuarioService) {
    //alert("Hello userController chuma");

    $scope.click = function(){
    	alert("click me");
    }


    $scope.crearUsuario = function() {
    	//alert("Hello crearUsuario function");
		usuarioService.crearUsuario(
				$scope.identificacionNuevoUsuario
		).then(function successCallback(response) {
			alert(response.data);
		  }, function errorCallback(response) {
		    alert(response.data);
		  });
    }


    $scope.buscarUsuario = function(){
    	alert("clic buscar usuarioCtrl");
    }

    $scope.listarUsuarios = function(){
    	//alert("clic listarUsuarios");
    	/*usuarioService.listarUsuarios().then(function successCallback(response) {
			alert(response.data);
			$scope.listaUsuario = response.data;
		  }, function errorCallback(response) {
		    alert(response.data);
		  });*/

        $scope.listaUsuario = usuarioService.listarUsuarios();


    }

}]);