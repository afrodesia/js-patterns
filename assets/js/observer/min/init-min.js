define(function(e){"use strict";return{init:function(){var r,o,s,n,t,b=e("observer/subject"),i=e("observer/observer");r=new b,o=new i("observer1"),s=new i("observer2"),n={prop:"something"},t={prop:"something else"},r.observe(o),r.observe(s),r.add(n),r.add(t)}}});