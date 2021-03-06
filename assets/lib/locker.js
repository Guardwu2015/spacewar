/**
 * Pointer Lock API
 * https://developer.mozilla.org/en-US/docs/WebAPI/Pointer_Lock
 */

/** 
 * enhanced-by h5-Lium / http://weibo.com/hellolium
 */

(function( w, d, _ ){
	w.Locker = {};
	
	Locker.lockPointer = function( elem ){
		elem.requestFullscreen = elem.requestFullscreen
			|| elem.requestFullScreen
			|| elem.webkitRequestFullscreen
			|| elem.webkitRequestFullScreen
			|| elem.mozRequestFullscreen
			|| elem.mozRequestFullScreen; // Older API upper case 'S'.
		elem.requestFullscreen();
	}
	
	Locker.setHandler = function( handler ){
		_handler = handler;
	}
	
	d.addEventListener( 'pointerlockchange', onChange, false );
	d.addEventListener( 'webkitpointerlockchange', onChange, false );
	d.addEventListener( 'mozpointerlockchange', onChange, false );
	
	d.addEventListener('fullscreenchange', fullscreenChange, false);
	d.addEventListener('webkitfullscreenchange', fullscreenChange, false);
	d.addEventListener('mozfullscreenchange', fullscreenChange, false);
	
	function _handler( locked ) {}
	function onChange( event ) {
		var locked = !! ( d.pointerLockElement
			|| d.webkitPointerLockElement
			|| d.mozPointerLockElement );
		_handler( locked );
	}
	
	function fullscreenChange() {
		var elem = d.fullscreenElement
			|| d.fullScreenElement
			|| d.webkitFullscreenElement
			|| d.webkitFullScreenElement
			|| d.mozFullscreenElement
			|| d.mozFullScreenElement;
		if ( elem ) {
			elem.requestPointerLock = elem.requestPointerLock
				|| elem.webkitRequestPointerLock
				|| elem.mozRequestPointerLock;
			elem.requestPointerLock();
		}
	}
})( window, document );