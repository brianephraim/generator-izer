;(function(global){
	// UglifyJS define hack.  Used for unit testing.
	if (typeof <%= widgetNameAllCap %>_APP_NOW === 'undefined') {
	  <%= widgetNameAllCap %>_APP_NOW = function () {
	    return +new Date();
	  };
	}

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//EXPECTS <whatev class="catSlides"></whatev> in the DOM
	var app = function($,appHtml,<%= widgetNameAllLower %>){
		console.log(appHtml)
		$(function(){
    		$('.<%= widgetNameAllLower %>WidgetFrame').append('asdfasfasdfasdfasdfa');
		});
		return 'Hi i am return app';
	};


	if (typeof exports === 'object') {
		// nodejs
		module.exports = app($,<%= widgetNameAllLower %>);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jQuery','generated/js/appHtml','js/<%= widgetNameAllLower %>'],function(){ 
			return app.apply(null,arguments);
		});
	} else if (typeof global.app === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.app = app($,<%= widgetNameAllLower %>);
	}



})(this);


