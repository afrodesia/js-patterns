define(function(i){"use strict";var s=i("pubsub/pubsub");s.subscribe("atopic",function(i){console.log("atopic was published with data: "+i)})});