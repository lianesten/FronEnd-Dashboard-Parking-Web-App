'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
//Definicion de uris 
var URL_SERVICIO_CREAR_USUARIO = '../../parkingBackend/rest/usuario/guardarUsuario';
var URL_SERVICIO_LISTAR_USUARIOS = 'http://localhost:8081/parkingBackend/rest/usuario/listarUsuarios';

angular.module('sbAdminApp')
.service("usuarioService", function($http) {
	//alert("hello from user service");


	this.listarUsuarios = function() {
		return //JSON.parse('[{"numeroId":"1152686066","nombres":"Esteban","apellidos":"Montoya","privilegio":2,"username":"empleado","password":"empleado","email":"julianesten@gmail.com"},{"numeroId":"1152686067","nombres":"julian","apellidos":"Paniagua","privilegio":2,"username":"empleado2","password":"empleado2","email":"julian.montoyap@udea.edu.co"},{"numeroId":"98520106","nombres":"oscar","apellidos":"Montoya","privilegio":1,"username":"admin","password":"admin","email":"oscar@oscar.com"}]');


		$http({
			method : 'GET',
			url : URL_SERVICIO_LISTAR_USUARIOS
		});
	}
	
	
	this.crearUsuario = function(identificacion,apellidos){
		alert("numero: "+ identificacion);
		console.log('entro al ServiceUsuario,crearUsuario');
		return $http({
			method : 'POST',
			url : URL_SERVICIO_CREAR_USUARIO,
			params : {
				identificacion:identificacion,
				apellidos:apellidos
			}
		});
	}
	
});	  