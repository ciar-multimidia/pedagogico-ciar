jQuery(document).ready(function($) {

	var headerPortal = $('#header-portal'),
		altura_headerPortal = headerPortal.outerHeight(),
		listaVolumes = $('#lista-volumes'),
		viewport = jQuery(window).width();

	if (viewport > 680) {
		listaVolumes.css('min-height', 'calc(100vh - ' + altura_headerPortal + 'px )');
	}

});