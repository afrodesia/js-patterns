define(function(){"use strict";var n={};return{publish:function(u,i){n[u]&&n[u].forEach(function(n){n(i)})},subscribe:function(u,i){n[u]||(n[u]=[]),n[u].push(i)}}});