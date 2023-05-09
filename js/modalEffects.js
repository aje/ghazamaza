/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init() {

		var overlay = $( '.md-overlay' );

		[].slice.call( $( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = $( '#' + el.getAttribute( 'data-modal' ) );
			var	close = $( '.md-close' );
				// close = $('.md-close' );

			function removeModal() {
				// classie.remove( modal, 'md-show' );
				modal.removeClass('md-show')

			}

			// function removeModalHandler() {
			// 	removeModal( classie.has( el, 'md-setperspective' ) ); 
			// }


			el.addEventListener( 'click', function( ev ) {
				// alert();
				// classie.add( modal, 'md-show' );
				modal.addClass('md-show')
				// overlay.removeEventListener( 'click', removeModal );
				// overlay.addEventListener( 'click', removeModal );

			});

			// close.addEventListener( 'click', function( ev ) {
			close.click(function(ev) {
				ev.stopPropagation();
				removeModal();
			});
			overlay.click(function(ev) {
				ev.stopPropagation();
				removeModal();
			});

		} );

	}

	init();

})();