define(function(){"use strict";var n={};return{publish:function(i,u){n[i]&&n[i].forEach(function(n){n(u)})},subscribe:function(i,u){var c;return n[i]||(n[i]=[]),c=n[i].push(u)-1,{dispose:function(){n[i].splice(c,1)}}}}});