;(function(global){
	// UglifyJS define hack.  Used for unit testing.
	if (typeof <%= widgetNameAllCap %>_APP_NOW === 'undefined') {
	  <%= widgetNameAllCap %>_APPHTML_NOW = function () {
	    return +new Date();
	  };
	}

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//EXPECTS <whatev class="catSlides"></whatev> in the DOM
	var app = function($,<%= widgetNameAllLower %>){
		var html = '<%= brkt1 %> appHtml <%= brkt2 %>';
		console.log(html)
		return html;
	};


	if (typeof exports === 'object') {
		// nodejs
		module.exports = app($,<%= widgetNameAllLower %>);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define([],function(){ 
			return app.apply(null,arguments);
		});
	} else if (typeof global.app === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.app = app($,<%= widgetNameAllLower %>);
	}



})(this);


