
/**
 * Callback for when phonegap is ready
 */
$(function() {
	console.log('onLoad');
	
	document.addEventListener("deviceready", onDeviceReady, false);
});

/**
 * DeviceReady event callback
 */
function onDeviceReady() {
	console.log('onDeviceReady');
	
	// Listener to have all form submissions to use phonegap childbrowser
	$('form input[type="submit"]').click(function(e) {
		var params = $(e.target.form).serialize();
		window.plugins.childBrowser.showWebPage($(e.target.form).attr('action')+'?'+params, {showLocationBar: false, showAddress: false, showNavigationBar: false});
		e.preventDefault();
		e.stopImmediatePropagation();
		return false;
	});
}

/**
 * Run after DOM and phonegap are ready
 */
//document.addEventListener("deviceready", onDeviceReady, false);




