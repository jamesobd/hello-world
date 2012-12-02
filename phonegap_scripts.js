/**
 * Some scripts to assist in migrating a website to PhoneGap
 * 
 */


/**
 * Listener for when phonegap is ready
 */
$(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});


/**
 * DeviceReady event callback
 */
function onDeviceReady() {
	
	// Forms using POST method will not work on PhoneGap.
	// Need to use ChildBrowser on any links taking us to pages with these forms.
	if ( $('form[method="post"]').length > 0 ) {
		alert('Warning: This page contains a POST form.  Add a childbrowser class to the link that got you here.');
	}
	
	// Any links that have the childbrowser class will use the ChildBrowser plugin
	$('a.childbrowser').on('click', function(){
		e.preventDefault();
		
		// Load website version in ChildBrowser instead
		childBrowser(e.target.href);
	});
	
	// Forms using GET method will work with PhoneGap and the submission sent to childbrowser
	$('form[method="get"]').on('submit', function(e) {
		e.preventDefault();
		var params = $(e.target).serialize();
		childBrowser(e.target.action+'?'+params);
	});
}


/**
 * Displays the url in a fullscreen ChildBrowser
 */
function childBrowser(url) {
	url = typeof url !== 'undefined' ? a : window.location;
	window.plugins.childBrowser.showWebPage(url, {showLocationBar: false, showAddress: false, showNavigationBar: false});
}