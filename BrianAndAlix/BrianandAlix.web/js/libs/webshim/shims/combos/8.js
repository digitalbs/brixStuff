jQuery.webshims.register("dom-extend",function(d,h,i,k,p){var B=h.modules,s=/\s*,\s*/,t={},m={},q={},w={},g={},f=d.fn.val,D=function(b,a,c,e,o){return o?f.call(d(b)):f.call(d(b),c)};d.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?f.call(this):d.prop(a,"value",b,"val",!0);if(d.isArray(b))return f.apply(this,arguments);var c=d.isFunction(b);return this.each(function(e){a=this;1===a.nodeType&&(c?(e=b.call(a,e,d.prop(a,"value",p,"val",
!0)),null==e&&(e=""),d.prop(a,"value",e,"val")):d.prop(a,"value",b,"val"))})};var x="_webshimsLib"+Math.round(1E3*Math.random()),y=function(b,a,c){b=b.jquery?b[0]:b;if(!b)return c||{};var e=d.data(b,x);c!==p&&(e||(e=d.data(b,x,{})),a&&(e[a]=c));return a?e&&e[a]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){d.fn[b.name]=function(){return this.map(function(){var a=y(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){t[b]=d[b];d[b]=function(a,c,e,o,u){var j="val"==o,n=!j?t[b]:D;if(!a||!m[c]||1!==a.nodeType||!j&&o&&"attr"==b&&d.attrFn[c])return n(a,c,e,o,u);var z=(a.nodeName||"").toLowerCase(),v=q[z],C="attr"==b&&(!1===e||null===e)?"removeAttr":b,f,h,l;v||(v=q["*"]);v&&(v=v[c]);v&&(f=v[C]);if(f){if("value"==c)h=f.isVal,f.isVal=j;if("removeAttr"===C)return f.value.call(a);if(e===p)return f.get?f.get.call(a):f.value;f.set&&
("attr"==b&&!0===e&&(e=c),l=f.set.call(a,e));if("value"==c)f.isVal=h}else l=n(a,c,e,o,u);if((e!==p||"removeAttr"===C)&&g[z]&&g[z][c]){var i;i="removeAttr"==C?!1:"prop"==C?!!e:!0;g[z][c].forEach(function(c){if(!c.only||(c.only="prop"==b)||"attr"==c.only&&"prop"!=b)c.call(a,e,i,j?"val":C,b)})}return l};w[b]=function(a,c,e){q[a]||(q[a]={});q[a][c]||(q[a][c]={});var o=q[a][c][b],u=function(a,n,z){return n&&n[a]?n[a]:z&&z[a]?z[a]:"prop"==b&&"value"==c?function(a){return e.isVal?D(this,c,a,!1,0===arguments.length):
t[b](this,c,a)}:"prop"==b&&"value"==a&&e.value.apply?function(a){var j=t[b](this,c);j&&j.apply&&(j=j.apply(this,arguments));return j}:function(a){return t[b](this,c,a)}};q[a][c][b]=e;if(e.value===p){if(!e.set)e.set=e.writeable?u("set",e,o):h.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:d.noop;if(!e.get)e.get=u("get",e,o)}["value","get","set"].forEach(function(a){e[a]&&(e["_sup"+a]=u(a,o))})}});var l=!d.browser.msie||8<parseInt(d.browser.version,10),E=function(){var b=h.getPrototypeOf(k.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,e,d){var u=k.createElement(c),j=h.getPrototypeOf(u);if(l&&j&&b!==j&&(!u[e]||!a.call(u,e))){var n=u[e];d._supvalue=function(){return n&&n.apply?n.apply(this,arguments):n};j[e]=d.value}else d._supvalue=function(){var a=y(this,"propValue");return a&&a[e]&&a[e].apply?a[e].apply(this,arguments):a&&a[e]},r.extendValue(c,e,d.value);d.value._supvalue=d._supvalue}}(),r=function(){var b={};h.addReady(function(a,c){var j={},n=function(b){j[b]||(j[b]=d(a.getElementsByTagName(b)),
c[0]&&d.nodeName(c[0],b)&&(j[b]=j[b].add(c)))};d.each(b,function(a,b){n(a);!b||!b.forEach?h.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){j[a].each(b)})});j=null});var a,c=d([]),e=function(c,e){b[c]?b[c].push(e):b[c]=[e];d.isDOMReady&&(a||d(k.getElementsByTagName(c))).each(e)};return{createTmpCache:function(b){d.isDOMReady&&(a=a||d(k.getElementsByTagName(b)));return a||c},flushTmpCache:function(){a=null},content:function(a,b){e(a,function(){var a=d.attr(this,b);null!=a&&d.attr(this,
b,a)})},createElement:function(a,b){e(a,b)},extendValue:function(a,b,c){e(a,function(){d(this).each(function(){y(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),A=function(b,a){if(b.defaultValue===p)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}};if(!b.attr)b.attr={}};d.extend(h,{getID:function(){var b=(new Date).getTime();return function(a){var a=d(a),c=a.attr("id");c||(b++,c="ID-"+b,a.attr("id",c));
return c}}(),extendUNDEFProp:function(b,a){d.each(a,function(a,e){a in b||(b[a]=e)})},createPropDefault:A,data:y,moveToFirstEvent:function(){var b=d._data?"_data":"data";return function(a,c,e){if((a=(d[b](a,"events")||{})[c])&&1<a.length)c=a.pop(),e||(e="bind"),"bind"==e&&a.delegateCount?a.splice(a.delegateCount,0,c):a.unshift(c)}}(),addShadowDom:function(){var b,a,c,e,o={init:!1,start:function(){if(!this.init&&k.body)this.init=!0,this.height=d(k).height(),this.width=d(k).width(),setInterval(function(){var a=
d(k).height(),b=d(k).width();if(a!=o.height||b!=o.width)o.height=a,o.width=b,e({type:"docresize"})},600)}};e=function(e){clearTimeout(b);b=setTimeout(function(){if("resize"==e.type){var b=d(i).width(),n=d(i).width();if(n==a&&b==c)return;a=n;c=b;if(k.body)o.height=d(k).height(),o.width=d(k).width()}d.event.trigger("updateshadowdom")},40)};d(i).bind("resize",e);d.event.customEvent.updateshadowdom=!0;return function(a,b,c){c=c||{};a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);var e=d.data(a,x)||d.data(a,x,{}),
v=d.data(b,x)||d.data(b,x,{}),g={};if(c.shadowFocusElement){if(c.shadowFocusElement){if(c.shadowFocusElement.jquery)c.shadowFocusElement=c.shadowFocusElement[0];g=d.data(c.shadowFocusElement,x)||d.data(c.shadowFocusElement,x,g)}}else c.shadowFocusElement=b;e.hasShadow=b;g.nativeElement=v.nativeElement=a;g.shadowData=v.shadowData=e.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){y(this,"shadowData",v.shadowData)});
if(c.data)g.shadowData.data=v.shadowData.data=e.shadowData.data=c.data;c=null;h.ready("DOM",function(){o.start()})}}(),propTypes:{standard:function(b){A(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){A(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}},src:function(){var b=k.createElement("a");b.style.display=
"none";return function(a,c){A(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var a=this.getAttribute(c),g;if(null==a)return"";b.setAttribute("href",a+"");if(!d.support.hrefNormalized){try{d(b).insertAfter(this),g=b.getAttribute("href",4)}catch(f){g=b.getAttribute("href",4)}d(b).detach()}return g||b.href}}}}(),enumarated:function(b){A(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var a=(b.attr.get.call(this)||"").toLowerCase();if(!a||-1==
b.limitedTo.indexOf(a))a=b.defaultValue;return a}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(s));a.forEach(function(a){h.defineNodeNamesProperty(b,a,{prop:{set:function(b){d.attr(this,a,b)},get:function(){return d.attr(this,a)||""}}})})},defineNodeNameProperty:function(b,a,c){m[a]=!0;if(c.reflect)h.propTypes[c.propType||"standard"](c,a);["prop","attr","removeAttr"].forEach(function(e){var g=c[e];g&&(g="prop"===e?d.extend({writeable:!0},g):d.extend({},g,{writeable:!0}),w[e](b,
a,g),"*"!=b&&h.cfg.extendNative&&"prop"==e&&g.value&&d.isFunction(g.value)&&E(b,a,g),c[e]=g)});c.initAttr&&r.content(b,a);return c},defineNodeNameProperties:function(b,a,c,e){for(var d in a)!e&&a[d].initAttr&&r.createTmpCache(b),c&&!a[d][c]&&(a[d][c]={},["value","set","get"].forEach(function(b){b in a[d]&&(a[d][c][b]=a[d][b],delete a[d][b])})),a[d]=h.defineNodeNameProperty(b,d,a[d]);e||r.flushTmpCache();return a},createElement:function(b,a,c){var e;d.isFunction(a)&&(a={after:a});r.createTmpCache(b);
a.before&&r.createElement(b,a.before);c&&(e=h.defineNodeNameProperties(b,c,!1,!0));a.after&&r.createElement(b,a.after);r.flushTmpCache();return e},onNodeNamesPropertyModify:function(b,a,c,e){"string"==typeof b&&(b=b.split(s));d.isFunction(c)&&(c={set:c});b.forEach(function(b){g[b]||(g[b]={});"string"==typeof a&&(a=a.split(s));c.initAttr&&r.createTmpCache(b);a.forEach(function(a){g[b][a]||(g[b][a]=[],m[a]=!0);if(c.set){if(e)c.set.only=e;g[b][a].push(c.set)}c.initAttr&&r.content(b,a)});r.flushTmpCache()})},
defineNodeNamesBooleanProperty:function(b,a,c){c||(c={});if(d.isFunction(c))c.set=c;h.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?p:a}},removeAttr:{value:function(){this.removeAttribute(a);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===p)return b=b.attributes[a]||{},c=b.specified?b.value:null,null==c?p:c;
"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var b=[],a={},c,e,g=/:\/\/|^\.*\//,f=function(a,b,c){return b&&c&&-1!==d.inArray(b,c.availabeLangs||[])?(a.loading=!0,c=c.langSrc,g.test(c)||(c=h.cfg.basePath+c),h.loader.loadScript(c+b+".js",function(){a.langObj[b]?(a.loading=!1,n(a,!0)):d(function(){a.langObj[b]&&n(a,!0);a.loading=!1})}),!0):!1},j=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},n=function(a,b){if(a.activeLang!=c&&
a.activeLang!==e){var d=B[a.module].options;if(a.langObj[c]||e&&a.langObj[e])a.activeLang=c,a.callback(a.langObj[c]||a.langObj[e],c),j(a.module);else if(!b&&!f(a,c,d)&&!f(a,e,d)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],c),j(a.module)}};return function(j){if("string"==typeof j&&j!==c)c=j,e=c.split("-")[0],c==e&&(e=!1),d.each(b,function(a,b){n(b)});else if("object"==typeof j)if(j.register)a[j.register]||(a[j.register]=[]),a[j.register].push(j),j.callback();else{if(!j.activeLang)j.activeLang=
"";b.push(j);n(j)}return c}}()});d.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){h[b]=function(b,d,g,f){"string"==typeof b&&(b=b.split(s));var j={};b.forEach(function(b){j[b]=h[a](b,d,g,f)});return j}});h.isReady("webshimLocalization",!0)});
(function(d,h){var i=d.webshims.browserVersion;if(!(d.browser.mozilla&&5<i)&&(!d.browser.msie||12>i&&7<i)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},p=function(d,h){d.getAttribute("role")||d.setAttribute("role",h)};d.webshims.addReady(function(i,s){d.each(k,function(h,g){for(var f=d(h,i).add(s.filter(h)),k=0,m=f.length;k<m;k++)p(f[k],g)});if(i===h){var t=h.getElementsByTagName("header")[0],m=h.getElementsByTagName("footer"),q=m.length;
t&&!d(t).closest("section, article")[0]&&p(t,"banner");q&&(t=m[q-1],d(t).closest("section, article")[0]||p(t,"contentinfo"))}})}})(jQuery,document);
(function(d,h,i){var k=h.audio&&h.video,p=!1,B=i.cfg.mediaelement,s=i.bugs,t=function(){i.ready("mediaelement-swf",function(){if(!i.mediaelement.createSWF)i.modules["mediaelement-swf"].test=d.noop,i.reTest(["mediaelement-swf"],k)})},m;if(k){var q=document.createElement("video");h.videoBuffered="buffered"in q;p="loop"in q;i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));h.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:h.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(k&&!B.preferFlash){var w=function(g){var f=g.target.parentNode;!B.preferFlash&&(d(g.target).is("audio, video")||f&&d("source:last",f)[0]==g.target)&&i.ready("DOM mediaelement",function(){m&&t();i.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){m&&!B.preferFlash&&i.mediaelement.createSWF&&!d(g.target).closest("audio, video").is(".nonnative-api-active")?(B.preferFlash=!0,document.removeEventListener("error",
w,!0),d("audio, video").mediaLoad(),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+g.target.src)):m||document.removeEventListener("error",w,!0)},20)})})};document.addEventListener("error",w,!0);d("audio, video").each(function(){this.error&&w({target:this})})}s.track=!1;h.track&&function(){if(!s.track)s.track="number"!=typeof d("<track />")[0].readyState;if(!s.track)try{new TextTrackCue(2,3,"")}catch(g){s.track=!0}var f=i.cfg.track,h=function(g){d(g.target).filter("track").each(k)},
k=function(){if(s.track||!f.override&&3==d.prop(this,"readyState"))f.override=!0,i.reTest("track"),document.removeEventListener("error",h,!0),this&&d.nodeName(this,"track")?i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):i.info("track support was overwritten. due to bad browser support")},m=function(){document.addEventListener("error",h,!0);s.track?k():d("track").each(k)};f.override||(i.isReady("track")?m():d(m))}();i.register("mediaelement-core",function(d,
f,i,q,y){m=swfobject.hasFlashPlayerVersion("9.0.115");var l=f.mediaelement,w=function(a,b){var a=d(a),c={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!c.src)return c;var e=a.attr("type");if(e)c.type=e,c.container=d.trim(e.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=l.getTypeForSrc(c.src,b))c.type=e,c.container=e;if(e=a.attr("media"))c.media=e;return c},r=!m&&"postMessage"in i&&k,A=
function(){var a;return function(){!a&&r&&(a=!0,f.loader.loadScript("https://www.youtube.com/player_api"),d(function(){f.polyfill("mediaelement-yt")}))}}(),b=function(){m?t():A()};f.addPolyfill("mediaelement-yt",{test:!r,d:["dom-support"]});l.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};l.mimeTypes.source=d.extend({},l.mimeTypes.audio,l.mimeTypes.video);l.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||
-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],c;d.each(l.mimeTypes[b],function(b,d){if(-1!==d.indexOf(a))return c=b,!1});return c};l.srces=function(a,b){a=d(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),d.isArray(b)||(b=[b]),b.forEach(function(b){var c=q.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});
else{var b=[],c=a[0].nodeName.toLowerCase(),e=w(a,c);e.src?b.push(e):d("source",a).each(function(){e=w(this,c);e.src&&b.push(e)});return b}};d.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==y&&(d(this).removeAttr("poster"),b&&d.attr(this,"poster",b));l.srces(this,a);d(this).mediaLoad()})};l.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
l.canThirdPlaySrces=function(a,b){var c="";if(m||r)a=d(a),b=b||l.srces(a),d.each(b,function(a,b){if(b.container&&b.src&&(m&&-1!=l.swfMimeTypes.indexOf(b.container)||r&&"video/youtube"==b.container))return c=b,!1});return c};var a={};l.canNativePlaySrces=function(b,c){var e="";if(k){var b=d(b),f=(b[0].nodeName||"").toLowerCase();if(!a[f])return e;c=c||l.srces(b);d.each(c,function(c,d){if(d.type&&a[f].prop._supvalue.call(b[0],d.type))return e=d,!1})}return e};l.setError=function(a,b){b||(b="can't play sources");
d(a).pause().data("mediaerror",b);f.warn("mediaelementError: "+b);setTimeout(function(){d(a).data("mediaerror")&&d(a).trigger("mediaerror")},1)};var c=function(){var a;return function(d,e,g){f.ready(m?"mediaelement-swf":"mediaelement-yt",function(){l.createSWF?l.createSWF(d,e,g):a||(a=!0,b(),c(d,e,g))});!a&&r&&!l.createSWF&&A()}}(),e=function(a,b,d,f,g){d||!1!==d&&b&&"third"==b.isActive?(d=l.canThirdPlaySrces(a,f))?c(a,d,b):g?l.setError(a,!1):e(a,b,!1,f,!0):(d=l.canNativePlaySrces(a,f))?b&&"third"==
b.isActive&&l.setActive(a,"html5",b):g?(l.setError(a,!1),b&&"third"==b.isActive&&l.setActive(a,"html5",b)):e(a,b,!0,f,!0)},o=/^(?:embed|object|datalist)$/i,u=function(a,b){var c=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{}),h=l.srces(a),i=a.parentNode;clearTimeout(c.loadTimer);d.data(a,"mediaerror",!1);if(h.length&&i&&!(1!=i.nodeType||o.test(i.nodeName||"")))b=b||f.data(a,"mediaelement"),e(a,b,B.preferFlash||y,h)};d(q).bind("ended",function(a){var b=f.data(a.target,"mediaelement");
(!p||b&&"html5"!=b.isActive||d.prop(a.target,"loop"))&&setTimeout(function(){!d.prop(a.target,"paused")&&d.prop(a.target,"loop")&&d(a.target).prop("currentTime",0).play()},1)});p||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var c=f.defineNodeNameProperty(b,"load",{prop:{value:function(){var a=f.data(this,"mediaelement");u(this,a);k&&(!a||"html5"==a.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});a[b]=f.defineNodeNameProperty(b,
"canPlayType",{prop:{value:function(c){var e="";k&&a[b].prop._supvalue&&(e=a[b].prop._supvalue.call(this,c),"no"==e&&(e=""));!e&&m&&(c=d.trim((c||"").split(";")[0]),-1!=l.swfMimeTypes.indexOf(c)&&(e="maybe"));return e}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){u(a);a=null},9)}});i=function(){f.addReady(function(a,b){d("video, audio",
a).add(b.filter("video, audio")).each(function(){d.browser.msie&&8<f.browserVersion&&d.prop(this,"paused")&&!d.prop(this,"readyState")&&d(this).is('audio[preload="none"][controls]:not([autoplay])')?d(this).prop("preload","metadata").mediaLoad():u(this);if(k){var a,b,c=this,e=function(){var a=d.prop(c,"buffered");if(a){for(var b="",e=0,f=a.length;e<f;e++)b+=a.end(e);return b}},h=function(){var a=e();a!=b&&(b=a,d(c).triggerHandler("progress"))};d(this).bind("play loadstart progress",function(c){"progress"==
c.type&&(b=e());clearTimeout(a);a=setTimeout(h,999)}).bind("emptied stalled mediaerror abort suspend",function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};h.track&&!s.track&&f.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});k?(f.isReady("mediaelement-core",!0),i(),f.ready("WINDOWLOAD mediaelement",b)):f.ready("mediaelement-swf",i);d(function(){f.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
