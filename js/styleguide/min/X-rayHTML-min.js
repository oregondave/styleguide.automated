function xray(){!function($){var e="xrayhtml",t={classes:{sourcepanel:"source-panel"},initSelector:"[data-"+e+"]"},n={_create:function(){return $(this).each(function(){var t=$(this).data("init."+e);return t?!1:void $(this).data("init."+e,!0)[e]("_init").trigger("create."+e)})},_init:function(){var n=$(this).data(e)||t.defaultReveal;$(this).addClass(e+" method-"+n)[e]("_createSource")},_createSource:function(){var e=this,n=document.createElement("pre"),i=document.createElement("code"),a=document.createElement("div"),r=document.createElement("div"),c=e.innerHTML.replace(/\=\"\"/g,""),o=document.createTextNode(c);a.setAttribute("class","snippet"),$(e).wrapInner(a),i.appendChild(o),n.appendChild(i),r.setAttribute("class",t.classes.sourcepanel),r.appendChild(n),this.appendChild(r)}};$.fn[e]=function(t,n,i,a){return this.each(function(){return t&&"string"==typeof t?$.fn[e].prototype[t].call(this,n,i,a):$(this).data(e+"data")?$(this):($(this).data(e+"active",!0),void $.fn[e].prototype._create.call(this))})},$.extend($.fn[e].prototype,n),$(function(){$(t.initSelector)[e]()})}(jQuery)}window.jQuery=window.jQuery||window.shoestring;