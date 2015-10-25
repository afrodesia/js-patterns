define(function(){
	'use strict';

	return {
		validate: function(value){
			return (/^[0-9]{10}$/g).test(value);

		}
	};
});