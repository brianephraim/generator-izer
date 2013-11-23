;(function(global){
	// UglifyJS define hack.  Used for unit testing.
	if (typeof APP_NOW === 'undefined') {
	  APP_NOW = function () {
	    return +new Date();
	  };
	}

	if (typeof APPS === 'undefined') {
	  var global = (function(){return this;})();
	}

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//EXPECTS <whatev class="catSlides"></whatev> in the DOM
	var app = function($,<%= widgetNameAllLower %>){
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
		define(['jQuery','js/<%= widgetNameAllLower %>'],function(){ 
			return app.apply(null,arguments);
		});
	} else if (typeof global.app === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.app = app($,<%= widgetNameAllLower %>);
	}



})(this);


