(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{919:function(e,t,n){"use strict";n.r(t);var i=n(22),a=n(23),r=n(26),o=n(24),c=n(25),l=n(0),s=n.n(l),u=n(12),d=function(e){function t(e){return Object(i.a)(this,t),Object(r.a)(this,Object(o.a)(t).call(this,e))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.hash;if(e){var t=e.indexOf("#",1);if(t>0){var n=e.substr(t+1),i=Object(u.hexStringToString)(n).split("#");if(i.length>0){var a=i[0],r=i[1],o=i[2],c=a.split(";"),l=r.split(";");window.localStorage.setItem("ctracker",c[0]),window.localStorage.setItem("cminer",l[0]),o&&window.localStorage.setItem("iServers",o)}}}}},{key:"render",value:function(){return s.a.createElement("div",{style:{height:"680px"}},s.a.createElement("iframe",{width:"100%",height:"100%",frameborder:"0",name:"_blank",src:"/guide/index.html"}))}}]),t}(l.Component);t.default=d}}]);