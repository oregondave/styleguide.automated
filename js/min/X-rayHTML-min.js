function xray(){!function($){var e="xrayhtml",t={text:{open:"View Source",close:"View Demo"},classes:{button:"btn btn-small",open:"view-source",sourcepanel:"source-panel"},initSelector:"[data-"+e+"]",defaultReveal:"inline"},n={_create:function(){return $(this).each(function(){var t=$(this).data("init."+e);return t?!1:void $(this).data("init."+e,!0)[e]("_init").trigger("create."+e)})},_init:function(){var n=$(this).data(e)||t.defaultReveal;"flip"===n&&$(this)[e]("_createButton"),$(this).addClass(e+" method-"+n)[e]("_createSource")},_createButton:function(){var e=document.createElement("a"),n=document.createTextNode(t.text.open),a=$(this);e.setAttribute("class",t.classes.button),e.href="#",e.appendChild(n),$(e).bind("click",function(n){var i=a.attr("class").indexOf(t.classes.open)>-1;a[i?"removeClass":"addClass"](t.classes.open),e.innerHTML=i?t.text.open:t.text.close,n.preventDefault()}).insertBefore(a)},_createSource:function(){var e=this,n=document.createElement("pre"),a=document.createElement("code"),i=document.createElement("div"),r=document.createElement("div"),c=e.innerHTML.replace(/\=\"\"/g,""),o=document.createTextNode(c);i.setAttribute("class","snippet"),$(e).wrapInner(i),a.appendChild(o),n.appendChild(a),r.setAttribute("class",t.classes.sourcepanel),r.appendChild(n),this.appendChild(r)}};$.fn[e]=function(t,n,a,i){return this.each(function(){return t&&"string"==typeof t?$.fn[e].prototype[t].call(this,n,a,i):$(this).data(e+"data")?$(this):($(this).data(e+"active",!0),void $.fn[e].prototype._create.call(this))})},$.extend($.fn[e].prototype,n),$(function(){$(t.initSelector)[e]()})}(jQuery)}window.jQuery=window.jQuery||window.shoestring;