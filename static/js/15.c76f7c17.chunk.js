(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{839:function(e,t,a){"use strict";a.r(t),function(e){var n=a(22),l=a(23),r=a(7),c=a(24),s=a(25),i=a(10),u=a(0),o=a.n(u),d=a(138),m=a(85),p=a(86),h=a(115),E=a(87),g=a(791),f=a(792),y=a(228),v=a(69),b=a(70),k=a(14),w=a(45),P=a(44),I=a(41),N=a(38),S=a(83),O=a(137),R=a(39),x=a(116),C=a(42),G=a(802),j=a(840),D=a(376),T=a(374),z=a(375),H=a(71),L=a(67),V=a(68),A=a(84),M=a(12),q=a(72),F=a(29),B=a(96);function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var l=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var _=a(43),J=a(229),K=a(232),W=function(e){Object(c.a)(a,e);var t=Q(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).toggle=l.toggle.bind(Object(r.a)(l)),l.state={popoverOpen:!1},l}return Object(l.a)(a,[{key:"toggle",value:function(){var e=this,t=Object(M.getCurrentHost)()+"/#/btb#"+this.props.res.id;this.state.popoverOpen||setTimeout(function(){e.renderAccountqr(t)},100),this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"renderAccountqr",value:function(e){var t=this;K.toDataURL(e,function(e,a){t.setState({accountQr:a})})}},{key:"renderQr",value:function(){var e=this.state.accountQr;return e?o.a.createElement("img",{src:e}):null}},{key:"render",value:function(){var e=Object(M.getCurrentHost)()+"/#/btb#"+this.props.res.id;return o.a.createElement("span",null,o.a.createElement("span",{className:"alert-primary  fade show",id:"Popover-"+this.props.id,onClick:this.toggle},"(\u5206\u4eab\u94fe\u63a5)"),o.a.createElement(D.a,{placement:"top",isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},o.a.createElement(T.a,null,"\u5206\u4eab\u94fe\u63a5\uff08\u591a\u4eba\u89c2\u770b\u4f1a\u52a0\u5feb\u4e0b\u8f7d\u901f\u5ea6\uff09"),o.a.createElement(z.a,null,e+"#"+this.props.res.tags,this.renderQr())))}}]),a}(u.Component),$=function(t){Object(c.a)(r,t);var a=Q(r);function r(e){var t;return Object(n.a)(this,r),(t=a.call(this,e)).state={list:null,playingResource:null,peerId:null,presource:null,freeGGV:null,accountId:null,account:null,purchaseMsg:null,delete:!1,rememberPwd:!0,loadingMsg:"\u4e0b\u8f7d\u4e2d...",accountInfo:null,danger:!1,showPwdHint:!1},t.page=1,t.query="",t.secret=window.sessionStorage.getItem("userSec"),t.secret||(t.secret=window.localStorage.getItem("userSec")),t.inviteCode=null,t._input=null,t.deadline=6,t.fee="0.01",t}return Object(l.a)(r,[{key:"loadResourceList",value:function(t,a){var n,l=this;n=a&&a.length>0?{action:"listResource",page:t,query:a=new e(a).toString("hex")}:{action:"listResource",page:t},Object(F.bshopCall)(n,function(e,t){e&&t&&l.setState({list:t})}.bind(this))}},{key:"toggleDelete",value:function(){this.setState({delete:!this.state.delete})}},{key:"renderDeleteDialog",value:function(){return o.a.createElement(H.a,{isOpen:this.state.delete,toggle:this.toggleDelete.bind(this),className:"modal-danger "+this.props.className},o.a.createElement(L.a,{toggle:this.toggleDelete.bind(this)},"\u4e0b\u8f7d\u5c71\u9876\u6d1e\u94b1\u5305"),o.a.createElement(V.a,null,o.a.createElement("p",null,"Web\u7248\u4e0d\u652f\u6301\u8d44\u6e90\u96b1\u85cf\u529f\u80fd\uff0c\u96b1\u85cf\u8d44\u6e90\u529f\u80fd\u9700\u8981",o.a.createElement("a",{href:"https://github.com/zker001/zker-desktop",target:"_blank"},"\u4e0b\u8f7d\u5168\u8282\u70b9\u94b1\u5305")),o.a.createElement("p",null,"\u5f7b\u5e95\u96b1\u85cf\u8d44\u6e90\u9700\u8981\u652f\u4ed8\u8d44\u6e90\u4ef7\u683c9999\u500d\u7684\u624b\u7eed\u8d39(\u514d\u8d39\u8d44\u6e90\u9700\u89811000\u79ef\u5206)\uff0c\u624b\u7eed\u8d39\u5c06\u7531\u533a\u5757\u94fe\u673a\u5668\u4eba\u83b7\u5f97\u3002\u8d44\u6e90\u5f7b\u5e95\u96b1\u85cf\u540e\u5c06\u65e0\u6cd5\u64ad\u653e\u6216\u4e0b\u8f7d\u3002")),o.a.createElement(A.a,null,o.a.createElement(k.a,{color:"danger",onClick:this.toggleDelete.bind(this)},"OK")))}},{key:"renderTransactionItem",value:function(){return this.state.accountInfo.transactions.map(function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,Object(M.getTransactionName)(e.type)),o.a.createElement("td",null,e.from),o.a.createElement("td",null,e.to),o.a.createElement("td",null,e.amount," \u79ef\u5206"),o.a.createElement("td",null,e.fee," \u79ef\u5206"),o.a.createElement("td",null,e.height))})}},{key:"renderAccountTransactions",value:function(){return this.state.accountInfo.transactions?o.a.createElement(d.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"\u4ea4\u6613\u7c7b\u578b"),o.a.createElement("th",null,"\u53d1\u8d77\u8d26\u6237"),o.a.createElement("th",null,"\u63a5\u6536\u8d26\u6237"),o.a.createElement("th",null,"\u91d1\u989d"),o.a.createElement("th",null,"\u624b\u7eed\u8d39"),o.a.createElement("th",null,"\u533a\u5757\u9ad8\u5ea6"))),o.a.createElement("tbody",null,this.renderTransactionItem())):null}},{key:"renderPwdModal",value:function(){var e=this;if(!this.state.showPwdHint)return null;var t=this.state.playingResource.hint.split("$&");return o.a.createElement(H.a,{isOpen:this.state.showPwdHint,toggle:function(){return e.togglePwdHint()},className:"modal-info "+this.props.className},o.a.createElement(L.a,{toggle:function(){return e.togglePwdHint()}},"\u8d44\u6e90\u5df2\u7ecf\u52a0\u5bc6,\u8bf7\u8f93\u5165\u8d44\u6e90\u5bc6\u7801"),o.a.createElement(V.a,null,o.a.createElement(S.a,null,"\u5bc6\u7801\u63d0\u793a\uff1a"+t[0]),o.a.createElement(w.a,{size:"16",type:"text",placeholder:"\u8f93\u5165\u8d44\u6e90\u5bc6\u7801",onChange:this.updatePwd.bind(this)})),o.a.createElement(A.a,null,o.a.createElement(k.a,{color:"danger",onClick:function(){return e.togglePwdHint()}},"\u53d6\u6d88"),o.a.createElement(k.a,{color:"danger",onClick:function(){t.length>1&&t[1]!==Object(M.simpleHash)(e.state.resourcePwd).substr(0,10)||(e.togglePwdHint(),Object(M.startPlayer)(e.secret,e.state.playingResource,e.state.resourcePwd))}},"\u786e\u8ba4")))}},{key:"rederAccountInfoDialog",value:function(){return this.state.accountInfo?o.a.createElement(H.a,{isOpen:this.state.danger,toggle:this.toggleDanger.bind(this),className:"modal-info "+this.props.className},o.a.createElement(L.a,{toggle:this.toggleDanger.bind(this)},"\u8d26\u6237\u660e\u7ec6"),o.a.createElement(V.a,null,o.a.createElement("p",null,"\u8d26\u6237ID: ",this.state.accountInfo.rsId),o.a.createElement("p",null,"\u8d26\u6237\u516c\u94a5: ",this.state.accountInfo.pk),o.a.createElement("p",null,"\u8d26\u6237\u4f59\u989d: ",this.state.accountInfo.balance),o.a.createElement("p",null,"\u4ea4\u6613\u5217\u8868:"),this.renderAccountTransactions()),o.a.createElement(A.a,null,o.a.createElement(k.a,{color:"danger",onClick:this.toggleDanger.bind(this)},"OK"))):null}},{key:"showAccountInfo",value:function(e){this.toggleDanger();var t=Object(M.getShareHost)()+"/btb?action=account&rsIdOrPkHex="+e;J.concat(t,function(e,t,a){if(!e){var n=JSON.parse(a);this.setState({accountInfo:n})}}.bind(this))}},{key:"applyFreeGGV",value:function(e){}},{key:"cancelFreeGGV",value:function(){this.setState({freeGGV:null})}},{key:"componentDidMount",value:function(){var e=window.location.hash,t=null;if(e){var a=e.indexOf("#",1);a>0&&(t=e.substr(a+1,40))}this.loadResourceList(1,t);var n=Object(M.loadLocalAccount)();n&&(this.setState({account:n}),n.secret&&(this.secret=n.secret))}},{key:"prePage",value:function(){this.page>1&&(this.page--,this.loadResourceList(this.page,this.query))}},{key:"nextPage",value:function(){this.page++,this.loadResourceList(this.page,this.query)}},{key:"updateInvodeCode",value:function(e){e&&e.target&&(this.inviteCode=e.target.value)}},{key:"updatePwd",value:function(e){if(e&&e.target){var t=e.target.value;this.setState({resourcePwd:t})}}},{key:"rememberPassword",value:function(e){e&&e.target&&this.setState({rememberPwd:e.target.checked})}},{key:"updateSecret",value:function(e){if(e&&e.target){this.secret=e.target.value,this.secret=Object(M.enhancePassword)(this.secret);var t=Object(M.calcAccountId)(this.secret);this.setState({accountId:t})}}},{key:"updateQuery",value:function(e){e&&e.target&&(this.query=e.target.value)}},{key:"search",value:function(){this.page=1,this.loadResourceList(this.page,this.query)}},{key:"doLogin",value:function(){if(this.secret&&this.secret.length>39){this.state.rememberPwd?window.localStorage.setItem("userSec",this.secret):window.sessionStorage.setItem("userSec",this.secret);var e=Object(M.createPeerId)(this.secret);this.setState({account:e});var t=e.peerId;this.setState({peerId:t}),t&&this.state.playingResource&&this.tryPlay(this.state.playingResource,t),Object(M.loadAccountInfo)(e,function(e){e&&this.setState({account:e})}.bind(this))}}},{key:"showPurchase",value:function(e){this.setState({presource:e})}},{key:"showFreeGGV",value:function(){this.cancelPurchase();this.setState({freeGGV:"freeGGV"})}},{key:"gotoMiningBTB",value:function(){window.open("/#/miner/start","_blank")}},{key:"doPurchase",value:function(){if(this.state.account){var e=this.state.playingResource.id,t=(this.state.playingResource.price,this.fee),a=this.state.account.pk,n=this.deadline;Object(F.purchaseResource)(e,this.secret,t,n,this.showPurchaseStatus.bind(this),a)}else this.setState({purchaseMsg:"\u7528\u6237\u672a\u767b\u9646"})}},{key:"showPurchaseStatus",value:function(e,t){var a,n=this;e?(a="\u6210\u529f\uff0c\u8bf7\u7b49\u5f85\u4e0b\u8f7d/\u64ad\u653e\u6b64\u8d44\u6e90",setTimeout(function(){n.setState({presource:null})},5e3)):a="\u8bf7\u6c42\u5931\u8d25"+t,this.setState({purchaseMsg:a})}},{key:"cancelPurchase",value:function(){this.setState({presource:null}),this.setState({playingResource:null})}},{key:"createTempPeerId",value:function(){return"0000"+_(18).toString("hex")}},{key:"isTempPeerId",value:function(e){return e&&e.startsWith("0000")}},{key:"tryPlay",value:function(e,t){this.setState({playingResource:t}),t.encrypted?this.togglePwdHint():setTimeout(function(){Object(M.startPlayer)(e,t)},500)}},{key:"delete",value:function(e){}},{key:"renderResourceList",value:function(){var e=this,t=this.state.list;return t?t.map(function(t){var a=t.tags;return a=a.replace("$&"," "),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(k.a,{size:"sm",className:"btn-html5 btn-brand mr-1 mb-1",onClick:function(a){return e.tryPlay(e.secret,t)}},o.a.createElement("i",{className:"fa fa-html5"}),o.a.createElement("span",null,"\u64ad\u653e/\u4e0b\u8f7d"))),o.a.createElement("td",null,a),o.a.createElement("td",null,o.a.createElement(B.a,{id:"pce"+t.id,text:t.price+"\u79ef\u5206",content:"\u53d1\u5e03\u8005\u5728\u5206\u4eab\u8d44\u6e90\u7684\u65f6\u5019\u53ef\u4ee5\u7528\u79ef\u5206\u6765\u8bbe\u5b9a\u4ef7\u683c\uff0c\u5bf9\u8d44\u6e90\u6709\u9700\u6c42\u7684\u8d26\u6237\u5219\u53ef\u4ee5\u5728\u652f\u4ed8\u79ef\u5206\u7ed9\u4f5c\u8005\u540e\u4e0b\u8f7d\u6216\u64ad\u653e\u6b64\u8d44\u6e90\u3002\u65e0\u79ef\u5206\u6216\u672a\u8d2d\u4e70\u8d44\u6e90\u8d26\u6237\u53ea\u80fd\u9884\u89c810%.\u5c71\u9876\u6d1e\u533a\u5757\u94fe\u7cfb\u7edf\u5171\u6709\u603b\u91cf\u5341\u4ebf\u4e2a\u79ef\u5206\u7528\u6765\u8bb0\u5f55\u6bcf\u4e2a\u8d26\u6237\u7684\u884c\u4e3a\uff0c\u7528\u6765\u4fc3\u8fdb\u6fc0\u52b1\u8d44\u6e90\u7684\u539f\u521b\u4e0e\u5206\u4eab\u3002\u79ef\u5206\u4ee3\u8868\u8d26\u6237\u5bf9\u5c71\u9876\u6d1e\u793e\u533a\u7684\u8d21\u732e\u4e0e\u4ef7\u503c,\u8d26\u6237\u79ef\u5206\u53d7\u8d26\u6237\u5bc6\u7801\u4fdd\u62a4\uff0c\u79ef\u5206\u53ef\u4ee5\u5728\u8d26\u6237\u95f4\u6d41\u8f6c\u4f46\u4e0d\u53ef\u4f2a\u9020\u3001\u4e0d\u53ef\u7be1\u6539\u3001\u4e0d\u53ef\u5220\u9664\u3002\u5c71\u9876\u6d1e\u79ef\u5206\u603b\u91cf\u6c38\u8fdc\u56fa\u5b9a\uff0c\u4e0d\u4f1a\u589e\u52a0\u4e5f\u4e0d\u4f1a\u51cf\u5c11\u3002"})),o.a.createElement("td",null,o.a.createElement(W,{id:t.id,res:t})))}):null}},{key:"renderPayButton",value:function(){var e=this;return this.state.playingResource?parseFloat(this.state.playingResource.price)<=0?null:o.a.createElement(O.a,{color:"primary"},"\u514d\u8d39\u9884\u89c810%\u540e\u7ee7\u7eed\u64ad\u653e\u6216\u4e0b\u8f7d\u8bf7 ",o.a.createElement(k.a,{color:"danger",size:"sm",onClick:function(t){return e.showPurchase(e.state.playingResource)}},"\u8d2d\u4e70")):null}},{key:"cancelPlay",value:function(){this.setState({playingResource:null})}},{key:"renderPlayer",value:function(){var e=this;return this.state.presource?null:this.state.playingResource?o.a.createElement("div",{id:"playdiv"},o.a.createElement(m.a,null,o.a.createElement(p.a,null,this.renderPayButton(),this.state.playingResource.tags," - ",o.a.createElement(W,{id:this.state.playingResource.id,res:this.state.playingResource}),o.a.createElement(h.a,{color:"success",className:"float-right",onClick:function(){return e.cancelPlay()}},"\u8fd4\u56de\u5217\u8868")),o.a.createElement(E.a,null,o.a.createElement("div",{id:"status"},o.a.createElement("div",{id:"output"},o.a.createElement("div",{id:"progressBar"}),o.a.createElement("div",null,o.a.createElement("code",{id:"tags"})),o.a.createElement("div",null,o.a.createElement("code",{id:"numPeers"},"0 \u8282\u70b9"),". \u4e0b\u8f7d\u901f\u5ea6",o.a.createElement("code",{id:"downloadSpeed"},"0 b/s ")," / \u2197 \u4e0a\u4f20\u901f\u5ea6",o.a.createElement("code",{id:"uploadSpeed"},"0 b/s - "),"\u5df2\u7ecf\u4e0b\u8f7d",o.a.createElement("code",{id:"downloaded"})," \u5171",o.a.createElement("code",{id:"total"}))),o.a.createElement("div",null,"\u53d1\u5e03\u8005:",o.a.createElement(q.a,{rsId:this.state.playingResource.owner})),o.a.createElement("div",{id:"player",style:{width:"100%"}}),o.a.createElement("div",null,o.a.createElement("span",null,"\u672a\u8d2d\u4e70\u8d44\u6e90\u6216\u8d26\u6237\u6ca1\u6709\u79ef\u5206\u53ea\u80fd\u4e0b\u8f7d\u6216\u9884\u89c810%."),o.a.createElement("a",{href:"/#/miner"},"\u70b9\u51fb\u8fd9\u91cc\u83b7\u53d6\u79ef\u5206")),o.a.createElement("div",null,o.a.createElement("a",{id:"downloadLink"},"\u4fdd\u5b58")))))):null}},{key:"renderAccountInfo",value:function(){return this.state.account?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("span",null,"\u8d26\u6237ID:",this.state.account.rsId," "),o.a.createElement("span",{className:"alert-warning fade show"},"\u4f59\u989d: ",this.state.account.balance," \u79ef\u5206"))):null}},{key:"renderfreeGGV",value:function(){var e=this;return this.state.freeGGV?o.a.createElement(g.a,null,o.a.createElement(f.a,{xs:"12"},o.a.createElement(R.a,{timeout:this.state.timeout,in:this.state.fadeIn},o.a.createElement(m.a,null,o.a.createElement(p.a,null),o.a.createElement(x.a,{isOpen:!0,id:"collapseExample"},o.a.createElement(E.a,null,o.a.createElement(C.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,"Account(\u8d26\u6237) Id:")),o.a.createElement(w.a,{id:"prependedInput",size:"16",type:"text",value:this.state.account.rsId})))),o.a.createElement(C.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,"\u516c\u94a5:")),o.a.createElement(w.a,{id:"prependedInput",size:"16",type:"text",value:this.state.account.pk})))),o.a.createElement(C.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,"\u9080\u8bf7\u7801:")),o.a.createElement(w.a,{id:"appendedPrependedInput",size:"16",type:"text",onChange:this.updateInvodeCode.bind(this)})))),o.a.createElement(C.a,null,o.a.createElement(S.a,{htmlFor:"appendedInputButtons"},"\u8d26\u6237\u5bc6\u7801):"),o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,null,o.a.createElement(w.a,{id:"appendedInputButtons",size:"16",type:"text",value:this.secret,onChange:this.updateSecret.bind(this)})))),o.a.createElement("div",null,o.a.createElement("p",null,this.state.freeMsg)),o.a.createElement("div",{className:"form-actions"},o.a.createElement(k.a,{type:"submit",color:"primary",onClick:function(t){return e.applyFreeGGV()}},"\u53d1\u9001"),o.a.createElement(k.a,{color:"secondary",onClick:function(t){return e.cancelFreeGGV()}},"\u53d6\u6d88")))))))):null}},{key:"renderPurchase",value:function(){var e=this;return this.state.freeGGV?null:this.state.presource?o.a.createElement(g.a,null,o.a.createElement(f.a,{xs:"12"},o.a.createElement(R.a,{timeout:this.state.timeout,in:this.state.fadeIn},o.a.createElement(m.a,null,o.a.createElement(p.a,null,o.a.createElement(O.a,{color:"primary"},"\u652f\u4ed8\u4ef7\u683c\u7ed9\u53d1\u5e03\u8005\u540e\u624d\u53ef\u4ee5\u7ee7\u7eed\u64ad\u653e\u6216\u4e0b\u8f7d")),o.a.createElement(x.a,{isOpen:!0,id:"collapseExample"},o.a.createElement(E.a,null,o.a.createElement(C.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,"\u8d44\u6e90) ID:")),o.a.createElement(w.a,{id:"prependedInput",size:"16",type:"text",value:this.state.playingResource.id})))),o.a.createElement(C.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,"\u8d44\u6e90\u6807\u7b7e:")),o.a.createElement(w.a,{id:"prependedInput",size:"16",type:"text",value:this.state.playingResource.tags})))),o.a.createElement(C.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,"\u53d1\u5e03\u8005:")),o.a.createElement(w.a,{id:"prependedInput",size:"16",type:"text",value:this.state.playingResource.owner})))),o.a.createElement(C.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,"\u4ef7\u683c:")),o.a.createElement(w.a,{id:"appendedPrependedInput",size:"16",type:"text",value:this.state.playingResource.price}),o.a.createElement(I.a,{addonType:"append"},o.a.createElement(N.a,null,"\u79ef\u5206"))))),o.a.createElement(C.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,o.a.createElement(B.a,{id:"min123",text:"\u673a\u5668\u4eba\u8d39:",content:"\u533a\u5757\u94fe\u673a\u5668\u4eba\u4e3a\u8d26\u6237\u4f59\u989d\u6bd4\u8f83\u591a\u7684\u8d26\u6237\u968f\u673a\u4ea7\u751f\uff0c\u8d1f\u8d23\u9a8c\u8bc1\u6240\u6709\u4ea4\u6613\u662f\u5426\u7b26\u5408\u89c4\u5219,\u5e76\u5c06\u5408\u6cd5\u4ea4\u6613\u4fdd\u5b58\u5230\u533a\u5757\u94fe\u3002\u673a\u5668\u4eba\u4fdd\u8bc1\u6574\u4e2a\u7cfb\u7edf\u6309\u7167\u89c4\u5219\u8fd0\u884c\u3002\u540c\u65f6\u83b7\u5f97\u673a\u5668\u4eba\u8d39.\u624b\u7eed\u8d39\u9ad8\u7684\u4ea4\u6613\u4f1a\u88ab\u4f18\u5148\u5904\u7406."}))),o.a.createElement(w.a,{id:"appendedPrependedInput",size:"16",type:"text",onChange:this.updateFee.bind(this),placeholder:"\u6700\u5c110.01"}),o.a.createElement(I.a,{addonType:"append"},o.a.createElement(N.a,null,"\u79ef\u5206"))))),this.renderDeadline(),o.a.createElement("div",null,o.a.createElement("p",null,this.state.purchaseMsg)),o.a.createElement("div",{className:"form-actions"},o.a.createElement(k.a,{type:"submit",color:"primary",onClick:function(t){return e.doPurchase()}},"\u8d2d\u4e70"),o.a.createElement(k.a,{color:"secondary",onClick:function(t){return e.cancelPurchase()}},"\u53d6\u6d88")))))))):null}},{key:"renderDeadline",value:function(){return null}},{key:"updateDeadline",value:function(e){e&&e.target&&(this.deadline=e.target.value)}},{key:"updateFee",value:function(e){e&&e.target&&(this.fee=e.target.value)}},{key:"renderAccountId",value:function(){return this.state.accountId?o.a.createElement("p",{className:"text-muted"},"(\u8d26\u6237) ID: ",this.state.accountId):null}},{key:"renderLogIn",value:function(){var e=this;return this.state.freeGGV?null:this.state.presource?null:this.state.playingResource&&!this.state.peerId?o.a.createElement("div",{className:"app flex-row align-items-center"},o.a.createElement(G.a,null,o.a.createElement(g.a,{className:"justify-content-center"},o.a.createElement(f.a,{md:"8"},o.a.createElement(j.a,null,o.a.createElement(m.a,{className:"p-4"},o.a.createElement(E.a,null,o.a.createElement("h1",null,"\u767b\u9646"),o.a.createElement("p",{className:"text-muted"},"\u65b0\u7528\u6237\u81ea\u5df1\u9009\u62e9\u4e00\u4e2a\u5b89\u5168\u7684\u5bc6\u7801\u5c31\u53ef\u4ee5\u767b\u9646\uff0c\u5145\u503c\u540e\uff0c\u7528\u6765\u8d2d\u4e70\u8d44\u6e90\u6216\u5206\u4eab\u8d44\u6e90"),this.renderAccountId(),o.a.createElement(P.a,{className:"mb-3"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,o.a.createElement("i",{className:"icon-user"}))),o.a.createElement(w.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:" (\u8fd9\u91cc\u8f93\u5165\u5c71\u9876\u6d1e\u8d26\u6237\u5bc6\u7801\uff0c\u957f\u5ea6\u5927\u4e8e40)\u3002\u6bcf\u4e2a\u65b0\u7684\u5bc6\u7801\u90fd\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u8d26\u6237",value:this.secret,onChange:this.updateSecret.bind(this)}))),o.a.createElement(C.a,{row:!0},o.a.createElement(f.a,{md:"9"},o.a.createElement(C.a,null,o.a.createElement("input",{type:"checkbox",checked:this.state.rememberPwd,onChange:this.rememberPassword.bind(this)}),o.a.createElement(S.a,{className:"form-check-label",check:!0,htmlFor:"inline-checkbox1"},"\u8bb0\u4f4f\u5bc6\u7801")))),o.a.createElement(g.a,null,o.a.createElement(f.a,{xs:"6"},o.a.createElement(k.a,{color:"primary",className:"px-4",onClick:function(t){e.doLogin()}},"\u767b\u9646")))),o.a.createElement(m.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},o.a.createElement(E.a,{className:"text-center"},o.a.createElement("div",null,o.a.createElement("h2",null,"\u6ce8\u518c"),o.a.createElement("p",null,"\u8f93\u5165\u4e00\u4e2a\u957f\u5ea6\u5927\u4e8e40\u7684\u5b89\u5168\u5bc6\u7801\u6ce8\u518c\u65b0\u8d26\u6237\u3002"),o.a.createElement("p",null,"\u5c71\u9876\u6d1e\u8d26\u6237\u5b89\u5168\u7531\u5bc6\u7801\u590d\u6742\u5ea6\u51b3\u5b9a\uff0c\u5982\u679c\u5bc6\u7801\u4e22\u5931\u6216\u88ab\u4eba\u731c\u51fa\uff0c\u8d26\u6237\u5185\u4f59\u989d\u5c06\u4e22\u5931\u6216\u6c38\u8fdc\u65e0\u6cd5\u4f7f\u7528"),o.a.createElement(k.a,{color:"primary",className:"mt-3",active:!0},"Register Now!"))))))))):null}},{key:"renderList",value:function(){var e=this;return this.state.freeGGV?null:this.state.playingResource?null:this.state.presource?null:this.state.playingResource&&this.state.peerId?null:o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(m.a,null,o.a.createElement(p.a,null,o.a.createElement(P.a,{className:"input-prepend"},o.a.createElement(I.a,{addonType:"prepend"},o.a.createElement(N.a,null,o.a.createElement("i",{className:"fa fa-search"}))),o.a.createElement(w.a,{size:"16",id:"query_input",type:"text",placeholder:"\u8f93\u5165\u5173\u952e\u5b57\u641c\u7d22",onChange:this.updateQuery.bind(this)}),o.a.createElement(I.a,{addonType:"append"},o.a.createElement(k.a,{color:"info",onClick:function(t){e.search()}},"\u641c\u7d22")))),o.a.createElement(E.a,null,o.a.createElement(d.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("tbody",null,this.renderResourceList())),this.rederAccountInfoDialog(),this.renderDeleteDialog(),o.a.createElement("nav",null,o.a.createElement(y.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,{previous:!0,tag:"button",onClick:function(t){e.prePage()}},"\u4e0a\u4e00\u9875")),o.a.createElement(v.a,{active:!0},o.a.createElement(b.a,{tag:"button"},this.page)),o.a.createElement(v.a,null,o.a.createElement(b.a,{next:!0,tag:"button",onClick:function(t){e.nextPage()}},"\u4e0b\u4e00\u9875"))))))))}},{key:"togglePwdHint",value:function(){this.setState({showPwdHint:!this.state.showPwdHint})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger})}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},this.renderfreeGGV(),this.renderPurchase(),this.renderList(),this.renderPlayer(),this.renderPwdModal())}}]),r}(u.Component);t.default=$}.call(this,a(6).Buffer)},840:function(e,t,a){"use strict";var n=a(4),l=a(5),r=a(0),c=a.n(r),s=a(1),i=a.n(s),u=a(3),o=a.n(u),d=a(2),m={tag:d.q,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),i=Object(d.m)(o()(t,"card-group"),a);return c.a.createElement(r,Object(n.a)({},s,{className:i}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p}}]);