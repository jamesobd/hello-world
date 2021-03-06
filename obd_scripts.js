/**
 * Some scripts to assist in migrating a website to PhoneGap
 * 
 * @author James Jensen - Online By Design, LLC
 * 
 */

// Forms using POST method will not work on PhoneGap.
// Use a ChildBrowser on any links taking us to pages with these forms.
if ( $('form[method="post"]').length > 0 ) {
	alert('Warning: This page contains a POST form and should be displayed in a ChildBrowser to function correctly.');
}


/**
 * Listener for when phonegap is ready
 */
$(function(){
	$(document).on("deviceready", onDeviceReady);
});


/**
 * DeviceReady event callback
 */
function onDeviceReady() {
	
	// Any links that have the childbrowser class will use a ChildBrowser
	$('a.childbrowser').on('click', function(){
		e.preventDefault();
		
		// Load website version in ChildBrowser instead
		childBrowser(e.target.href);
	});
	
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
	var location = String(window.location);
	
	// If hydration is being used then the window.location is different
	if ( String(window.location).indexOf("hydra_app") == -1 ) {
		url = typeof url !== 'undefined' ? url : "http://800truckhelp.com"+location.substring(location.indexOf("www")+3,location.indexOf("/index.html"));
	}
	else {
		url = typeof url !== 'undefined' ? url : "http://800truckhelp.com"+location.substring(location.indexOf("hydra_app")+9,location.indexOf("/index.html"));
	}
	window.plugins.childBrowser.showWebPage(url, {showLocationBar: false, showAddress: false, showNavigationBar: false});
}
