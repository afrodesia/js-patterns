define(function(){
	'use strict';

	var Image = function(attr){

		this.width = attr.width || 0;
		this.height = attr.height || 0;
		this.name = attr.name || '';

	};

	return Image;
});