/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.4 (Thu, 10 Jan 2013)
 * @requires jQuery v1.6 or later
 */
!function(e,t,i,n){"use strict";var o=i(e),a=i(t),r=i.fancybox=function(){r.open.apply(this,arguments)},s=navigator.userAgent.match(/msie/),l=null,c=t.createTouch!==n,d=function(e){return e&&e.hasOwnProperty&&e instanceof i},p=function(e){return e&&"string"===i.type(e)},h=function(e){return p(e)&&e.indexOf("%")>0},f=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},u=function(e,t){var i=parseInt(e,10)||0;return t&&h(e)&&(i=r.getViewport()[t]/100*i),Math.ceil(i)},g=function(e,t){return u(e,t)+"px"};i.extend(r,{version:"2.1.4",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!c,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(s?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(i.isPlainObject(t)||(t={}),!1!==r.close(!0))?(i.isArray(e)||(e=d(e)?i(e).get():[e]),i.each(e,function(o,a){var s,l,c,h,f,u,g,m={};"object"===i.type(a)&&(a.nodeType&&(a=i(a)),d(a)?(m={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},i.metadata&&i.extend(!0,m,a.metadata())):m=a),s=t.href||m.href||(p(a)?a:null),l=t.title!==n?t.title:m.title||"",c=t.content||m.content,h=c?"html":t.type||m.type,!h&&m.isDom&&(h=a.data("fancybox-type"),h||(f=a.prop("class").match(/fancybox\.(\w+)/),h=f?f[1]:null)),p(s)&&(h||(r.isImage(s)?h="image":r.isSWF(s)?h="swf":"#"===s.charAt(0)?h="inline":p(a)&&(h="html",c=a)),"ajax"===h&&(u=s.split(/\s+/,2),s=u.shift(),g=u.shift())),c||("inline"===h?s?c=i(p(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):m.isDom&&(c=a):"html"===h?c=s:h||s||!m.isDom||(h="inline",c=a)),i.extend(m,{href:s,type:h,content:c,title:l,selector:g}),e[o]=m}),r.opts=i.extend(!0,{},r.defaults,t),t.keys!==n&&(r.opts.keys=t.keys?i.extend({},r.defaults.keys,t.keys):!1),r.group=e,r._start(r.opts.index)):void 0},cancel:function(){var e=r.coming;e&&!1!==r.trigger("onCancel")&&(r.hideLoading(),r.ajaxLoad&&r.ajaxLoad.abort(),r.ajaxLoad=null,r.imgPreload&&(r.imgPreload.onload=r.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),r.coming=null,r.current||r._afterZoomOut(e))},close:function(e){r.cancel(),!1!==r.trigger("beforeClose")&&(r.unbindEvents(),r.isActive&&(r.isOpen&&e!==!0?(r.isOpen=r.isOpened=!1,r.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),r.wrap.stop(!0,!0).removeClass("fancybox-opened"),r.transitions[r.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),r._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(r.player.timer)},n=function(){t(),r.current&&r.player.isActive&&(r.player.timer=setTimeout(r.next,r.current.playSpeed))},o=function(){t(),i("body").unbind(".player"),r.player.isActive=!1,r.trigger("onPlayEnd")},a=function(){r.current&&(r.current.loop||r.current.index<r.group.length-1)&&(r.player.isActive=!0,i("body").bind({"afterShow.player onUpdate.player":n,"onCancel.player beforeClose.player":o,"beforeLoad.player":t}),n(),r.trigger("onPlayStart"))};e===!0||!r.player.isActive&&e!==!1?a():o()},next:function(e){var t=r.current;t&&(p(e)||(e=t.direction.next),r.jumpto(t.index+1,e,"next"))},prev:function(e){var t=r.current;t&&(p(e)||(e=t.direction.prev),r.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var o=r.current;o&&(e=u(e),r.direction=t||o.direction[e>=o.index?"next":"prev"],r.router=i||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==n&&(r.cancel(),r._start(e)))},reposition:function(e,t){var n,o=r.current,a=o?o.wrap:null;a&&(n=r._getPosition(t),e&&"scroll"===e.type?(delete n.position,a.stop(!0,!0).animate(n,200)):(a.css(n),o.pos=i.extend({},o.dim,n)))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(l),l=null),r.isOpen&&!l&&(l=setTimeout(function(){var n=r.current;n&&!r.isClosing&&(r.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&n.autoResize)&&r._setDimension(),"scroll"===t&&n.canShrink||r.reposition(e),r.trigger("onUpdate"),l=null)},i&&!c?0:300))},toggle:function(e){r.isOpen&&(r.current.fitToView="boolean"===i.type(e)?e:!r.current.fitToView,c&&(r.wrap.removeAttr("style").addClass("fancybox-tmp"),r.trigger("onUpdate")),r.update())},hideLoading:function(){a.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;r.hideLoading(),e=i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"),a.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),r.cancel())}),r.defaults.fixed||(t=r.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=r.current&&r.current.locked||!1,i={x:o.scrollLeft(),y:o.scrollTop()};return t?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=c&&e.innerWidth?e.innerWidth:o.width(),i.h=c&&e.innerHeight?e.innerHeight:o.height()),i},unbindEvents:function(){r.wrap&&d(r.wrap)&&r.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=r.current;t&&(o.bind("orientationchange.fb"+(c?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),r.update),e=t.keys,e&&a.bind("keydown.fb",function(o){var a=o.which||o.keyCode,s=o.target||o.srcElement;return 27===a&&r.coming?!1:void(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||s&&(s.type||i(s).is("[contenteditable]"))||i.each(e,function(e,s){return t.group.length>1&&s[a]!==n?(r[e](s[a]),o.preventDefault(),!1):i.inArray(a,s)>-1?(r[e](),o.preventDefault(),!1):void 0}))}),i.fn.mousewheel&&t.mouseWheel&&r.wrap.bind("mousewheel.fb",function(e,n,o,a){for(var s=e.target||null,l=i(s),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=f(l[0]),l=i(l).parent();0===n||c||r.group.length>1&&!t.canShrink&&(a>0||o>0?r.prev(a>0?"down":"left"):(0>a||0>o)&&r.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var n,o=t||r.coming||r.current;if(o){if(i.isFunction(o[e])&&(n=o[e].apply(o,Array.prototype.slice.call(arguments,1))),n===!1)return!1;o.helpers&&i.each(o.helpers,function(t,n){n&&r.helpers[t]&&i.isFunction(r.helpers[t][e])&&(n=i.extend(!0,{},r.helpers[t].defaults,n),r.helpers[t][e](n,o))}),i.event.trigger(e+".fb")}},isImage:function(e){return p(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,n,o,a,s,l={};if(e=u(e),t=r.group[e]||null,!t)return!1;if(l=i.extend(!0,{},r.opts,t),a=l.margin,s=l.padding,"number"===i.type(a)&&(l.margin=[a,a,a,a]),"number"===i.type(s)&&(l.padding=[s,s,s,s]),l.modal&&i.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),l.group=r.group,l.index=e,r.coming=l,!1===r.trigger("beforeLoad"))return void(r.coming=null);if(o=l.type,n=l.href,!o)return r.coming=null,r.current&&r.router&&"jumpto"!==r.router?(r.current.index=e,r[r.router](r.direction)):!1;if(r.isActive=!0,("image"===o||"swf"===o)&&(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===o&&(l.aspectRatio=!0),"iframe"===o&&c&&(l.scrolling="scroll"),l.wrap=i(l.tpl.wrap).addClass("fancybox-"+(c?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),i.extend(l,{skin:i(".fancybox-skin",l.wrap),outer:i(".fancybox-outer",l.wrap),inner:i(".fancybox-inner",l.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){l.skin.css("padding"+t,g(l.padding[e]))}),r.trigger("onReady"),"inline"===o||"html"===o){if(!l.content||!l.content.length)return r._error("content")}else if(!n)return r._error("href");"image"===o?r._loadImage():"ajax"===o?r._loadAjax():"iframe"===o?r._loadIframe():r._afterLoad()},_error:function(e){i.extend(r.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:r.coming.tpl.error}),r._afterLoad()},_loadImage:function(){var e=r.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,r.coming.width=this.width,r.coming.height=this.height,r._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,r._error("image")},e.src=r.coming.href,e.complete!==!0&&r.showLoading()},_loadAjax:function(){var e=r.coming;r.showLoading(),r.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){r.coming&&"abort"!==t?r._error("ajax",e):r.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,r._afterLoad())}}))},_loadIframe:function(){var e=r.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",c?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(r.showLoading(),t.one("load",function(){i(this).data("ready",1),c||i(this).bind("load.fb",r.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),r._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||r._afterLoad()},_preloadImages:function(){var e,t,i=r.group,n=r.current,o=i.length,a=n.preload?Math.min(n.preload,o-1):0;for(t=1;a>=t;t+=1)e=i[(n.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,n,o,a,s,l=r.coming,c=r.current,p="fancybox-placeholder";if(r.hideLoading(),l&&r.isActive!==!1){if(!1===r.trigger("afterLoad",l,c))return l.wrap.stop(!0).trigger("onReset").remove(),void(r.coming=null);switch(c&&(r.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),r.unbindEvents(),e=l,t=l.content,n=l.type,o=l.scrolling,i.extend(r,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:c}),a=e.href,n){case"inline":case"ajax":case"html":e.selector?t=i("<div>").html(t).find(e.selector):d(t)&&(t.data(p)||t.data(p,i('<div class="'+p+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){i(this).find(t).length&&t.hide().replaceAll(t.data(p)).data(p,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',s="",i.each(e.swf,function(e,i){t+='<param name="'+e+'" value="'+i+'"></param>',s+=" "+e+'="'+i+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+s+"></embed></object>"}d(t)&&t.parent().is(e.inner)||e.inner.append(t),r.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),r._setDimension(),r.reposition(),r.isOpen=!1,r.coming=null,r.bindEvents(),r.isOpened?c.prevMethod&&r.transitions[c.prevMethod]():i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),r.transitions[r.isOpened?e.nextMethod:e.openMethod](),r._preloadImages()}},_setDimension:function(){var e,t,n,o,a,s,l,c,d,p,f,m,y,v,x,w=r.getViewport(),b=0,k=!1,C=!1,W=r.wrap,O=r.skin,S=r.inner,_=r.current,E=_.width,T=_.height,j=_.minWidth,L=_.minHeight,P=_.maxWidth,M=_.maxHeight,A=_.scrolling,H=_.scrollOutside?_.scrollbarWidth:0,R=_.margin,I=u(R[1]+R[3]),D=u(R[0]+R[2]);if(W.add(O).add(S).width("auto").height("auto").removeClass("fancybox-tmp"),e=u(O.outerWidth(!0)-O.width()),t=u(O.outerHeight(!0)-O.height()),n=I+e,o=D+t,a=h(E)?(w.w-n)*u(E)/100:E,s=h(T)?(w.h-o)*u(T)/100:T,"iframe"===_.type){if(v=_.content,_.autoHeight&&1===v.data("ready"))try{v[0].contentWindow.document.location&&(S.width(a).height(9999),x=v.contents().find("body"),H&&x.css("overflow-x","hidden"),s=x.height())}catch(z){}}else(_.autoWidth||_.autoHeight)&&(S.addClass("fancybox-tmp"),_.autoWidth||S.width(a),_.autoHeight||S.height(s),_.autoWidth&&(a=S.width()),_.autoHeight&&(s=S.height()),S.removeClass("fancybox-tmp"));if(E=u(a),T=u(s),d=a/s,j=u(h(j)?u(j,"w")-n:j),P=u(h(P)?u(P,"w")-n:P),L=u(h(L)?u(L,"h")-o:L),M=u(h(M)?u(M,"h")-o:M),l=P,c=M,_.fitToView&&(P=Math.min(w.w-n,P),M=Math.min(w.h-o,M)),m=w.w-I,y=w.h-D,_.aspectRatio?(E>P&&(E=P,T=u(E/d)),T>M&&(T=M,E=u(T*d)),j>E&&(E=j,T=u(E/d)),L>T&&(T=L,E=u(T*d))):(E=Math.max(j,Math.min(E,P)),_.autoHeight&&"iframe"!==_.type&&(S.width(E),T=S.height()),T=Math.max(L,Math.min(T,M))),_.fitToView)if(S.width(E).height(T),W.width(E+e),p=W.width(),f=W.height(),_.aspectRatio)for(;(p>m||f>y)&&E>j&&T>L&&!(b++>19);)T=Math.max(L,Math.min(M,T-10)),E=u(T*d),j>E&&(E=j,T=u(E/d)),E>P&&(E=P,T=u(E/d)),S.width(E).height(T),W.width(E+e),p=W.width(),f=W.height();else E=Math.max(j,Math.min(E,E-(p-m))),T=Math.max(L,Math.min(T,T-(f-y)));H&&"auto"===A&&s>T&&m>E+e+H&&(E+=H),S.width(E).height(T),W.width(E+e),p=W.width(),f=W.height(),k=(p>m||f>y)&&E>j&&T>L,C=_.aspectRatio?l>E&&c>T&&a>E&&s>T:(l>E||c>T)&&(a>E||s>T),i.extend(_,{dim:{width:g(p),height:g(f)},origWidth:a,origHeight:s,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:f-O.outerHeight(!0),skinSpace:O.height()-T}),!v&&_.autoHeight&&T>L&&M>T&&!C&&S.height("auto")},_getPosition:function(e){var t=r.current,i=r.getViewport(),n=t.margin,o=r.wrap.width()+n[1]+n[3],a=r.wrap.height()+n[0]+n[2],s={position:"absolute",top:n[0],left:n[3]};return t.autoCenter&&t.fixed&&!e&&a<=i.h&&o<=i.w?s.position="fixed":t.locked||(s.top+=i.y,s.left+=i.x),s.top=g(Math.max(s.top,s.top+(i.h-a)*t.topRatio)),s.left=g(Math.max(s.left,s.left+(i.w-o)*t.leftRatio)),s},_afterZoomIn:function(){var e=r.current;e&&(r.isOpen=r.isOpened=!0,r.wrap.css("overflow","visible").addClass("fancybox-opened"),r.update(),(e.closeClick||e.nextClick&&r.group.length>1)&&r.inner.css("cursor","pointer").bind("click.fb",function(t){i(t.target).is("a")||i(t.target).parent().is("a")||(t.preventDefault(),r[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb",function(e){e.preventDefault(),r.close()}),e.arrows&&r.group.length>1&&((e.loop||e.index>0)&&i(e.tpl.prev).appendTo(r.outer).bind("click.fb",r.prev),(e.loop||e.index<r.group.length-1)&&i(e.tpl.next).appendTo(r.outer).bind("click.fb",r.next)),r.trigger("afterShow"),e.loop||e.index!==e.group.length-1?r.opts.autoPlay&&!r.player.isActive&&(r.opts.autoPlay=!1,r.play()):r.play(!1))},_afterZoomOut:function(e){e=e||r.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(r,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),r.trigger("afterClose",e)}}),r.transitions={getOrigPosition:function(){var e=r.current,t=e.element,i=e.orig,n={},o=50,a=50,s=e.hPadding,l=e.wPadding,c=r.getViewport();return!i&&e.isDom&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t)),d(i)?(n=i.offset(),i.is("img")&&(o=i.outerWidth(),a=i.outerHeight())):(n.top=c.y+(c.h-a)*e.topRatio,n.left=c.x+(c.w-o)*e.leftRatio),("fixed"===r.wrap.css("position")||e.locked)&&(n.top-=c.y,n.left-=c.x),n={top:g(n.top-s*e.topRatio),left:g(n.left-l*e.leftRatio),width:g(o+l),height:g(a+s)}},step:function(e,t){var i,n,o,a=t.prop,s=r.current,l=s.wrapSpace,c=s.skinSpace;("width"===a||"height"===a)&&(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),r.isClosing&&(i=1-i),n="width"===a?s.wPadding:s.hPadding,o=e-n,r.skin[a](u("width"===a?o:o-l*i)),r.inner[a](u("width"===a?o:o-l*i-c*i)))},zoomIn:function(){var e=r.current,t=e.pos,n=e.openEffect,o="elastic"===n,a=i.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===n&&(t.opacity=.1),r.wrap.css(t).animate(a,{duration:"none"===n?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:r._afterZoomIn})},zoomOut:function(){var e=r.current,t=e.closeEffect,i="elastic"===t,n={opacity:.1};i&&(n=this.getOrigPosition(),e.closeOpacity&&(n.opacity=.1)),r.wrap.animate(n,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:r._afterZoomOut})},changeIn:function(){var e,t=r.current,i=t.nextEffect,n=t.pos,o={opacity:1},a=r.direction,s=200;n.opacity=.1,"elastic"===i&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(n[e]=g(u(n[e])-s),o[e]="+="+s+"px"):(n[e]=g(u(n[e])+s),o[e]="-="+s+"px")),"none"===i?r._afterZoomIn():r.wrap.css(n).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:r._afterZoomIn})},changeOut:function(){var e=r.previous,t=e.prevEffect,n={opacity:.1},o=r.direction,a=200;"elastic"===t&&(n["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(n,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},r.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!c,fixed:!0},overlay:null,fixed:!1,create:function(e){e=i.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo("body"),this.fixed=!1,e.fixed&&r.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(o.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){i(e.target).hasClass("fancybox-overlay")&&(r.isActive?r.close():t.close())}),this.overlay.css(e.css).show()},close:function(){i(".fancybox-overlay").remove(),o.unbind("resize.overlay"),this.overlay=null,this.margin!==!1&&(i("body").css("margin-right",this.margin),this.margin=!1),this.el&&this.el.removeClass("fancybox-lock")},update:function(){var e,i="100%";this.overlay.width(i).height("100%"),s?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(i=a.width())):a.width()>o.width()&&(i=a.width()),this.overlay.width(i).height(a.height())},onReady:function(e,n){i(".fancybox-overlay").stop(!0,!0),this.overlay||(this.margin=a.height()>o.height()||"scroll"===i("body").css("overflow-y")?i("body").css("margin-right"):!1,this.el=i(t.all&&!t.querySelector?"html":"body"),this.create(e)),e.locked&&this.fixed&&(n.locked=this.overlay.append(n.wrap),n.fixed=!1),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&(this.el.addClass("fancybox-lock"),this.margin!==!1&&i("body").css("margin-right",u(this.margin)+t.scrollbarWidth)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!r.isActive&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},r.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t,n,o=r.current,a=o.title,l=e.type;if(i.isFunction(a)&&(a=a.call(o.element,o)),p(a)&&""!==i.trim(a)){switch(t=i('<div class="fancybox-title fancybox-title-'+l+'-wrap">'+a+"</div>"),l){case"inside":n=r.skin;break;case"outside":n=r.wrap;break;case"over":n=r.inner;break;default:n=r.skin,t.appendTo("body"),s&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),r.current.margin[2]+=Math.abs(u(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](n)}}},i.fn.fancybox=function(e){var t,n=i(this),o=this.selector||"",s=function(a){var s,l,c=i(this).blur(),d=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(s=e.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?i(o):n,c=c.filter("["+s+'="'+l+'"]'),d=c.index(this)),e.index=d,r.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?a.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):n.unbind("click.fb-start").bind("click.fb-start",s),this.filter("[data-fancybox-start=1]").trigger("click"),this},a.ready(function(){i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),n=t.innerWidth()-t.height(99).innerWidth();return e.remove(),n}),i.support.fixedPosition===n&&(i.support.fixedPosition=function(){var e=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),i.extend(r.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")})})}(window,document,jQuery);
 
 /**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

/*
    Masked Input plugin for jQuery
    Version: 1.3.1
*/
!(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);



(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define("priorityNav", factory(root));
    } else if (typeof exports === "object") {
        module.exports = factory(root);
    } else {
        root.priorityNav = factory(root);
    }
})(window || this, function (root) {

    "use strict";

    /**
     * Variables
     */
    var priorityNav = {}; // Object for public APIs
    var breaks = []; // Object to store instances with breakpoints where the instances menu item"s didin"t fit.
    var supports = !!document.querySelector && !!root.addEventListener // Feature test
    var settings = {};
    var instance = 0;
    var count = 0;
    var mainNavWrapper, totalWidth, restWidth, mainNav, navDropdown, navDropdownToggle, dropDownWidth, toggleWrapper;
    var viewportWidth = 0;

    /**
     * Default settings
     * @type {{initClass: string, navDropdown: string, navDropdownToggle: string, mainNavWrapper: string, moved: Function, movedBack: Function}}
     */
    var defaults = {
        initClass:                  "js-priorityNav", // Class that will be printed on html element to allow conditional css styling.
        mainNavWrapper:             ".header__block-nav", // mainnav wrapper selector (must be direct parent from mainNav)
        mainNav:                    ".menu-header", // mainnav selector. (must be inline-block)
        navDropdown:                "nav__dropdown", // class used for the dropdown.
        navDropdownToggle:          "nav__dropdown-toggle", // class used for the dropdown toggle.
        navDropdownLabel:           "еще", // Text that is used for the dropdown toggle.
        navDropdownBreakpointLabel: "menu", //button label for navDropdownToggle when the breakPoint is reached.
        breakPoint:                 500, //amount of pixels when all menu items should be moved to dropdown to simulate a mobile menu
        throttleDelay:              0, // this will throttle the calculating logic on resize because i'm a responsible dev.
        offsetPixels:               30, // increase to decrease the time it takes to move an item.
        count:                      false, // prints the amount of items are moved to the attribute data-count to style with css counter.

        //Callbacks
        moved: function () {
        },
        movedBack: function () {
        }
    };


    /**
     * A simple forEach() implementation for Arrays, Objects and NodeLists
     * @private
     * @param {Array|Object|NodeList} collection Collection of items to iterate
     * @param {Function} callback Callback function for each iteration
     * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
     */
    var forEach = function (collection, callback, scope) {
        if (Object.prototype.toString.call(collection) === "[object Object]") {
            for (var prop in collection) {
                if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                    callback.call(scope, collection[prop], prop, collection);
                }
            }
        } else {
            for (var i = 0, len = collection.length; i < len; i++) {
                callback.call(scope, collection[i], i, collection);
            }
        }
    };


    /**
     * Get the closest matching element up the DOM tree
     * @param {Element} elem Starting element
     * @param {String} selector Selector to match against (class, ID, or data attribute)
     * @return {Boolean|Element} Returns false if not match found
     */
    var getClosest = function (elem, selector) {
        var firstChar = selector.charAt(0);
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (firstChar === ".") {
                if (elem.classList.contains(selector.substr(1))) {
                    return elem;
                }
            } else if (firstChar === "#") {
                if (elem.id === selector.substr(1)) {
                    return elem;
                }
            } else if (firstChar === "[") {
                if (elem.hasAttribute(selector.substr(1, selector.length - 2))) {
                    return elem;
                }
            }
        }
        return false;
    };


    /**
     * Merge defaults with user options
     * @private
     * @param {Object} defaults Default settings
     * @param {Object} options User options
     * @returns {Object} Merged values of defaults and options
     */
    var extend = function (defaults, options) {
        var extended = {};
        forEach(defaults, function (value, prop) {
            extended[prop] = defaults[prop];
        });
        forEach(options, function (value, prop) {
            extended[prop] = options[prop];
        });
        return extended;
    };


    /**
     * Debounced resize to throttle execution
     * @param func
     * @param wait
     * @param immediate
     * @returns {Function}
     */
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }


    /**
     * Toggle class on element
     * @param el
     * @param className
     */
    var toggleClass = function (el, className) {
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var classes = el.className.split(" ");
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1); else
                classes.push(className);

            el.className = classes.join(" ");
        }
    };


    /**
     * Check if dropdown menu is already on page before creating it
     * @param mainNavWrapper
     */
    var prepareHtml = function (_this, settings) {

        /**
         * Create dropdow menu
         * @type {HTMLElement}
         */
        toggleWrapper = document.createElement("span");
        navDropdown = document.createElement("ul");
        navDropdownToggle = document.createElement("button");

        /**
         * Set label for dropdown toggle
         * @type {string}
         */
        navDropdownToggle.innerHTML = settings.navDropdownLabel;


        /**
         * Move elements to the right spot
         */
        _this.insertAfter(toggleWrapper, _this.querySelector(mainNav));

        toggleWrapper.appendChild(navDropdown);
        toggleWrapper.appendChild(navDropdownToggle);

        /**
         * Add classes so we can target elements
         */
        navDropdown.classList.add(settings.navDropdown);
        navDropdown.classList.add("priority-nav__dropdown");

        navDropdownToggle.classList.add(settings.navDropdownToggle);
        navDropdownToggle.classList.add("priority-nav__dropdown-toggle");

        toggleWrapper.classList.add(settings.navDropdown+"-wrapper");
        toggleWrapper.classList.add("priority-nav__wrapper");

        _this.classList.add("priority-nav");
    };


    /**
     * Get innerwidth without padding
     * @param element
     * @returns {number}
     */
    var getElementContentWidth = function(element) {
        var styles = window.getComputedStyle(element);
        var padding = parseFloat(styles.paddingLeft) +
            parseFloat(styles.paddingRight);

        return element.clientWidth - padding;
    };


    /**
     * Get viewport size
     * @returns {{width: number, height: number}}
     */
    var viewportSize = function() {
        var doc = document, w = window;
        var docEl = (doc.compatMode && doc.compatMode === "CSS1Compat")?
            doc.documentElement: doc.body;

        var width = docEl.clientWidth;
        var height = docEl.clientHeight;

        // mobile zoomed in?
        if ( w.innerWidth && width > w.innerWidth ) {
            width = w.innerWidth;
            height = w.innerHeight;
        }

        return {width: width, height: height};
    };


    /**
     * Get width
     * @param elem
     * @returns {number}
     */
    var calculateWidths = function (_this) {
        totalWidth = getElementContentWidth(_this);
        //Check if parent is the navwrapper before calculating its width
        if (_this.querySelector(navDropdown).parentNode === _this) {
            dropDownWidth = _this.querySelector(navDropdown).offsetWidth;
        } else {
            dropDownWidth = 0;
        }
        restWidth = getChildrenWidth(_this) + settings.offsetPixels;
        viewportWidth = viewportSize().width;
    };


    /**
     * Move item to array
     * @param item
     */
    priorityNav.doesItFit = function (_this, settings) {

        /**
         * Check if it is the first run
         */
        var delay = _this.getAttribute("instance") === 0 ? delay : settings.throttleDelay;

        /**
         * Increase instance
         */
        instance++;

        /**
         * Debounced execution of the main logic
         */
        (debounce(function () {

            /**
             * Get the current element"s instance
             * @type {string}
             */
            var identifier = _this.getAttribute("instance");

            /**
             * Update width
             */
            calculateWidths(_this);

            /**
             * Keep executing until all menu items that are overflowing are moved
             */
            while (totalWidth <= restWidth  && _this.querySelector(mainNav).children.length > 0 || viewportWidth < settings.breakPoint && _this.querySelector(mainNav).children.length > 0) {
                //move item to dropdown
                priorityNav.toDropdown(_this, identifier);
                //recalculate widths
                calculateWidths(_this, identifier);
                //update dropdownToggle label
                if(viewportWidth < settings.breakPoint) updateLabel(_this, identifier, settings.navDropdownBreakpointLabel);
            }

            /**
             * Keep executing until all menu items that are able to move back are moved
             */
            while (totalWidth >= breaks[identifier][breaks[identifier].length - 1] && viewportWidth > settings.breakPoint) {
                //move item to menu
                priorityNav.toMenu(_this, identifier);
                //update dropdownToggle label
                if(viewportWidth > settings.breakPoint) updateLabel(_this, identifier, settings.navDropdownLabel);
            }

            /**
             * If there are no items in dropdown hide dropdown
             */
            if (breaks[identifier].length < 1) {
                _this.querySelector(navDropdown).classList.remove("show");
                //show navDropdownLabel
                updateLabel(_this, identifier, settings.navDropdownLabel);
            }

            /**
             * If there are no items in menu
             */
            if (_this.querySelector(mainNav).children.length < 1){
                //show navDropdownBreakpointLabel
                updateLabel(_this, identifier, settings.navDropdownBreakpointLabel);
            }

            /**
             * Check if we need to show toggle menu button
             */
            showToggle(_this, identifier);

        }, delay ))();
    };


    /**
     * Show/hide toggle button
     */
    var showToggle = function (_this, identifier) {
        if (breaks[identifier].length < 1) {
            _this.querySelector(navDropdownToggle).classList.add("priority-nav-is-hidden");
            _this.querySelector(navDropdownToggle).classList.remove("priority-nav-is-visible");
            _this.classList.remove("priority-nav-has-dropdown");
        } else {
            _this.querySelector(navDropdownToggle).classList.add("priority-nav-is-visible");
            _this.querySelector(navDropdownToggle).classList.remove("priority-nav-is-hidden");
            _this.classList.add("priority-nav-has-dropdown");
        }
    };


    /**
     * Update count on dropdown toggle button
     */
    var updateCount = function (_this, identifier) {
        _this.querySelector(navDropdownToggle).setAttribute("priorityNav-count", breaks[identifier].length);
    };

    var updateLabel = function(_this, identifier, label){
        _this.querySelector(navDropdownToggle).innerHTML = label;
    };


    /**
     * Move item to dropdown
     */
    priorityNav.toDropdown = function (_this, identifier) {


        /**
         * move last child of navigation menu to dropdown
         */
        if (_this.querySelector(navDropdown).firstChild && _this.querySelector(mainNav).children.length > 0) {
            _this.querySelector(navDropdown).insertBefore(_this.querySelector(mainNav).lastElementChild, _this.querySelector(navDropdown).firstChild);
        } else if (_this.querySelector(mainNav).children.length > 0) {
            _this.querySelector(navDropdown).appendChild(_this.querySelector(mainNav).lastElementChild);
        }

        /**
         * store breakpoints
         */
        breaks[identifier].push(restWidth);

        /**
         * check if we need to show toggle menu button
         */
        showToggle(_this, identifier);

        /**
         * update count on dropdown toggle button
         */
        if (_this.querySelector(mainNav).children.length > 0 && settings.count) {
            updateCount(_this, identifier);
        }

        /**
         * If item has been moved to dropdown trigger the callback
         */
        settings.moved();
    };


    /**
     * Move item to menu
     */
    priorityNav.toMenu = function (_this, identifier) {

        /**
         * move last child of navigation menu to dropdown
         */
        if (_this.querySelector(navDropdown).children.length > 0) _this.querySelector(mainNav).appendChild(_this.querySelector(navDropdown).firstElementChild);

        /**
         * remove last breakpoint
         */
        breaks[identifier].pop();

        /**
         * Check if we need to show toggle menu button
         */
        showToggle(_this, identifier);

        /**
         * update count on dropdown toggle button
         */
        if (_this.querySelector(mainNav).children.length > 0 && settings.count) {
            updateCount(_this, identifier);
        }

        /**
         * If item has been moved back to the main menu trigger the callback
         */
        settings.movedBack();
    };


    /**
     * Count width of children and return the value
     * @param e
     */
    var getChildrenWidth = function (e) {
        var children = e.childNodes;
        var sum = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeType !== 3) {
                if(!isNaN(children[i].offsetWidth)){
                    sum += children[i].offsetWidth;
                }

            }
        }
        return sum;
    };


    /**
     * Bind eventlisteners
     */
    var listeners = function (_this, settings) {

        // Check if an item needs to move
        if(window.attachEvent) {
            window.attachEvent("onresize", function() {
                if(priorityNav.doesItFit)priorityNav.doesItFit(_this, settings);
            });
        }
        else if(window.addEventListener) {
            window.addEventListener("resize", function() {
                if(priorityNav.doesItFit)priorityNav.doesItFit(_this, settings);
            }, true);
        }

        // Toggle dropdown
        _this.querySelector(navDropdownToggle).addEventListener("click", function () {
            toggleClass(_this.querySelector(navDropdown), "show");
            toggleClass(this, "is-open");
            toggleClass(_this, "is-open");
        });

        /*
         * Remove when clicked outside dropdown
         */
        document.addEventListener("click", function (event) {
            if (!getClosest(event.target, settings.navDropdown) && event.target !== _this.querySelector(navDropdownToggle)) {
                _this.querySelector(navDropdown).classList.remove("show");
                _this.querySelector(navDropdownToggle).classList.remove("is-open");
                _this.classList.remove("is-open");
            }
        });

        /**
         * Remove when escape key is pressed
         */
        document.onkeydown = function (evt) {
            evt = evt || window.event;
            if (evt.keyCode === 27) {
                navDropdown.classList.remove("show");
                navDropdownToggle.classList.remove("is-open");
                mainNavWrapper.classList.remove("is-open");
            }
        };
    };


    /**
     * Remove function
     */
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    };

    /*global HTMLCollection */
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = 0, len = this.length; i < len; i++) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    };


    /**
     * Destroy the current initialization.
     * @public
     */
    priorityNav.destroy = function () {
        // If plugin isn"t already initialized, stop
        if (!settings) return;
        // Remove feedback class
        document.documentElement.classList.remove(settings.initClass);
        // Remove toggle
        toggleWrapper.remove();
        // Remove settings
        settings = null;
        delete priorityNav.init;
        delete priorityNav.doesItFit;
    };


    /**
     * insertAfter function
     * @param n
     * @param r
     */
    if (supports && typeof Node !== 'undefined'){
        Node.prototype.insertAfter = function(n,r) {this.insertBefore(n,r.nextSibling);};
    }


    /**
     * Initialize Plugin
     * @public
     * @param {Object} options User settings
     */
    priorityNav.init = function (options) {


        // Feature test.
        if (!supports && typeof Node === 'undefined'){
            console.warn("This browser doesn't support priorityNav");
            return;
        }

        /**
         * Merge user options with defaults
         * @type {Object}
         */
        settings = extend(defaults, options || {});

        /**
         * Store nodes
         * @type {NodeList}
         */
        var elements = document.querySelectorAll(settings.mainNavWrapper);

        /**
         * Loop over every instance and reference _this
         */
        forEach(elements, function(_this){

            /**
             * Create breaks array
             * @type {number}
             */
            breaks[count] = [];

            /**
             * Set the instance number as data attribute
             */
            _this.setAttribute("instance", count++);

            /**
             * Store the wrapper element
             */
            mainNavWrapper = _this;
            if (!mainNavWrapper) {
                console.warn("couldn't find the specified mainNavWrapper element");
                return;
            }

            /**
             * Store the menu elementStore the menu element
             */
            mainNav = settings.mainNav;
            if (!_this.querySelector(mainNav)) {
                console.warn("couldn't find the specified mainNav element");
                return;
            }

            /**
             * Check if we need to create the dropdown elements
             */
            prepareHtml(_this, settings);

            /**
             * Store the dropdown element
             */
            navDropdown = "."+settings.navDropdown;
            if (!_this.querySelector(navDropdown)) {
                console.warn("couldn't find the specified navDropdown element");
                return;
            }

            /**
             * Store the dropdown toggle element
             */
            navDropdownToggle = "."+settings.navDropdownToggle;
            if (!_this.querySelector(navDropdownToggle)) {
                console.warn("couldn't find the specified navDropdownToggle element");
                return;
            }

            /**
             * Event listeners
             */
            listeners(_this, settings);

            /**
             * Start first check
             */
            priorityNav.doesItFit(_this, settings);

        });

        /**
         * Count amount of instances
         */
        instance++;

        /**
         * Add class to HTML element to activate conditional CSS
         */
        document.documentElement.classList.add(settings.initClass);
    };


    /**
     * Public APIs
     */
    return priorityNav;

});

var nav = priorityNav.init();