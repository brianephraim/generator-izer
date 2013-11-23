;(function(global){
	// UglifyJS define hack.  Used for unit testing..
	if (typeof <%= widgetNameAllCap %>_NOW === 'undefined') {
	  <%= widgetNameAllCap %>_NOW = function () {
	    return +new Date();
	  };
	}

	if (typeof <%= widgetNameAllCap %> === 'undefined') {
	  var global = (function(){return this;})();
	}


	var make<%= widgetNameFirstCap %>Object = function($){
		console.log('make<%= widgetNameFirstCap %>Object')
		var <%= widgetNameAllLower %> = function(options){
            
        };

		return <%= widgetNameAllLower %>;
	}
	//return objInstance;

	if (typeof exports === 'object') {
		// nodejs
		module.exports = make<%= widgetNameFirstCap %>Object($,tools);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jQuery'],function(){
			return make<%= widgetNameFirstCap %>Object.apply(null,arguments);
		});
	} else if (typeof global.<%= widgetNameAllLower %> === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.<%= widgetNameAllLower %> = make<%= widgetNameFirstCap %>Object($,tools);
	}



})(this);