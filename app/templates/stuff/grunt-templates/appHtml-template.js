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
		if(document.location.host === 'localhost:4000'){
			html = html.replace('$@$rootPathReplaceString$@$','http://localhost:8000/<%= widgetNameAllLower %>/app/')
		} else if (document.location.host === 'defualt.github.io'){
			html = html.replace('$@$rootPathReplaceString$@$','/<%= widgetNameAllLower %>/app/')
		} else if (document.location.origin === 'file://'){
			html = html.replace('$@$rootPathReplaceString$@$','')

		}
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


