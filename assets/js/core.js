require(

	// Loads modules 
	[
	'jquery',
	'factory/init',
	'pubsub/init',
	'strategy/init',
	'observer/init' 

	],

	function(factory, pubsub, strategy, observer, jquery){
		'use strict';

		var examples = {
			factory: factory,
			pubsub: pubsub,
			strategy: strategy,
			observer: observer
		};

		window.runExample = function(example){
			examples[example].init();
		};
	}
);