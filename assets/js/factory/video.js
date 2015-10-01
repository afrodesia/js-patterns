define(function(){
	'use strict';

	var Video = function(attr){

		this.length = attr.length || 0;
		this.name = attr.name || '';

	};

	return Video;
});