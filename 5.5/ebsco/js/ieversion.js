(function() {'use strict';
	// Returns the version of Internet Explorer or a -1
	// (indicating the use of another browser).
	var rv = -1, ua, re;
	// Return value assumes failure.
	if (navigator.appName === 'Microsoft Internet Explorer') {
		ua = navigator.userAgent;
		re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) !== null) {
			rv = parseFloat(RegExp.$1);
		}
        //IE10 can be detected in the appVersion string...
		if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
		    document.documentElement.className += " ie10"
		}
	}
        //combination of user agent "Trident" and "rv:11" for ie11 detection
	else if (navigator.userAgent.indexOf("Trident") !== -1 && navigator.userAgent.indexOf("rv:11") !== -1) {
	    document.documentElement.className += " ie11"
	}

    //switch statements for ie9 and lower...
	if (rv !== -1) {
		switch(rv) {
			case 9.0:
				document.documentElement.className += " ie9";
				break;
			case 8.0:
			case 7.0:
				document.documentElement.className += " lt-ie9";
				break;
			default:
				return;
		}
	} else {
		return;
	}
})();