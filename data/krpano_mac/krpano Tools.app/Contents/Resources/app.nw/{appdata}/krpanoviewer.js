var krpanoviewer={};(function(){function a(e){t.readFile(r+e,null,function(t,n){t?fatalerror(t):u[e]=n})}var e=require("path"),t=require("fs"),n=krpanoviewer,r="",i="",s=["krpano.swf","embedpano.js","krpano.js"],o={},u={};n.loadViewerFiles=function(){r=gui_get_global().dirname+e.sep+"viewer"+e.sep,a("krpano.swf"),a("krpano.js"),a("embedpano.js"),i=r+"plugins"+e.sep,t.readdir(i,function(t,n){if(t)return;var r,s;s=n.length;for(r=0;r<s;r++){var u=n[r];if(u){var a=e.basename(u).toLowerCase(),f=e.extname(a);if(f==".swf"||f==".js")o[a]=i+u}}})},n.getFile=function(e){return u[e]},n.getPluginFilepath=function(e){return o[e]}})()