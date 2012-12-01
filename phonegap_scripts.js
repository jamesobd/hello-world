
/**
 * Callback for when phonegap is ready
 */
function onLoad() {
	console.log('onLoad');
	document.addEventListener("deviceready", onDeviceReady, false);
}

/**
 * DeviceReady event callback
 */
function onDeviceReady() {
	alert('onDeviceReady');
	exit;
	// Listener to have all form submissions to use phonegap childbrowser
	$('form input[type="submit"]').click(function(e){
		try{
			var params = $(e.target.form).serialize();
			window.plugins.childBrowser.showWebPage("http://google.com", {showAddress: true});
			alert($(e.target.form).serialize());
		}
		catch(err) {
			navigator.notification.vibrate(1000);
			alert(err);
		}
		e.preventDefault();
		e.stopImmediatePropagation();
		return false;
	});
	
	$('form').on('submit', function(e){
		try{
			alert('stop submit');
		}
		catch(err){
			alert('oh no!');
		}
		e.preventDefault();
		return false;
	});

	$('form').on('keypress', 'input[type="submit"]', function(e){
		try{
			if (event.keyCode === 10 || event.keyCode === 13) {
				alert('stop it');
			}
			else {
				alert('wrong key');
			}
		}
		catch(err){
			alert('bah!');
		}
		e.preventDefault();
		return false;
	});
}

/**
 * Run after DOM and phonegap are ready
 */
//document.addEventListener("deviceready", onDeviceReady, false);




