(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{852:function(t,e,a){"use strict";a.r(e);var n=a(22),r=a(23),c=a(24),s=a(25),i=a(10),u=a(0),o=a.n(u),l=a(85),p=a(87),f=a(45),h=a(14),d=a(42),v=(a(29),a(11));function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(i.a)(t);if(e){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var b=function(t){Object(c.a)(a,t);var e=m(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={data:"",url:"https://auth.sdoo.cc:19099/bshop",response:"res"},r}return Object(r.a)(a,[{key:"updateDate",value:function(t){if(t&&t.target){var e=t.target.value;this.setState({data:e})}}},{key:"updateUrl",value:function(t){if(t&&t.target){var e=t.target.value;this.setState({url:e})}}},{key:"doSend",value:function(){var t=this,e=Object(v.loadLocalAccount)();if(e&&e.secret){var a=e.secret,n=(new Date).getTime();n-=n%3e5;var r=Object(v.signString)(a,e.pk+n),c=this.state.url;try{var s=JSON.parse(this.state.data);s.signature=r,s.pk=e.pk,Object(v.postSafe)(c,s,function(e,a){console.log(e+":"+a);var n=e+":"+a;t.setState({response:n})})}catch(u){var i=u.toString();this.setState({response:i})}}else this.setState({response:"login first"})}},{key:"render",value:function(){var t=this;return o.a.createElement(l.a,null,o.a.createElement(p.a,null,o.a.createElement(d.a,null,o.a.createElement(f.a,{type:"text",name:"textarea-input",id:"textar",placeholder:this.state.url,onChange:this.updateUrl.bind(this)})),o.a.createElement(d.a,null,o.a.createElement(f.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"5",placeholder:"data",onChange:this.updateDate.bind(this)})),o.a.createElement(d.a,null,o.a.createElement(f.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"5",value:this.state.response})),o.a.createElement(d.a,null,o.a.createElement(h.a,{color:"danger",onClick:function(){t.doSend()},size:"sm"},"/bshop"))))}}]),a}(u.Component);e.default=b}}]);