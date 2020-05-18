jQuery(document).ready(function($) {

	var headerPortal = $('#header-portal'),
		altura_headerPortal = headerPortal.outerHeight(),
		listaModulos = $('#lista-modulos');

	listaModulos.css('min-height', 'calc(100vh - ' + altura_headerPortal + 'px )');

});