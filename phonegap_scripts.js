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
	// Use a ChildBrowser on any links taking us to pages with these forms.
	if ( $('form[method="post"]').length > 0 ) {
		alert('Warning: This page contains a POST form.  Add a childbrowser class to the link that got you here.\n\nAlternatively you can add the data-childbrowser-url attribute to the body to redirect to a ChildBrowser.');
	}
	
	// Any links that have the childbrowser class will use a ChildBrowser
	$('a.childbrowser').on('click', function(){
		e.preventDefault();
		
		// Load website version in ChildBrowser instead
		childBrowser(e.target.href);
	});
	
	// Any pages which have a childbrowser_redirect_url variable will redirect to a ChildBrowser
	if ( typeof childbrowser_redirect_url !== 'undefined' ) {
		//alert(childbrowser_redirect_url);
		childBrowser(childbrowser_redirect_url);
	}
	else {
		alert('crap');
	}
	
	// Forms using GET method will work with PhoneGap if the submission uses a ChildBrowser
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
	url = typeof url !== 'undefined' ? url : window.location;
	window.plugins.childBrowser.showWebPage(url, {showLocationBar: false, showAddress: false, showNavigationBar: false});
}