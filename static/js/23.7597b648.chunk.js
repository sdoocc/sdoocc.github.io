(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{917:function(e,t,a){"use strict";a.r(t);var n=a(53),r=a(22),s=a(23),l=a(26),o=a(24),i=a(25),c=a(0),u=a.n(c),d=a(860),m=a(861),h=a(89),p=a(90),f=a(91),g=a(14),v=a(46),E=a(43),k=a(39),y=a(47),S=a(144),b=a(40),I=a(128),w=a(44),M=a(869),N=a(899),L=a(900),O=a(868),T=a(413),C=a(411),B=a(412),j=a(12),H=a(31),R=a(102),x=a(414),D=a(884),A=a(875).default,F=a(12),P=F.postSafe,q=F.loadLocalAccount,U=(F.signString,function(e){function t(e){var a;Object(r.a)(this,t);return(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={collapse:!0,resourceList:[],resource:{tags:"",price:"",fee:"",deadline:"",owner:"",id:""},rsId:"\u8d26\u53f7\u672a\u767b\u9646"},a.state.shareMsg="",a.share=new A,a.userSec="",a.fee=.01,a.deadline=5,a.price=0,a.tags="",a.resName="",a.resId="",a.infoInterval=null,a.torrentList=[],a.finishedList=new Array,a.resume=null,a.html5File=null,a.torrent=null,a.poster=null,a.tokenCount=new Map,a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"cancelShare",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"componentDidMount",value:function(){var e=q();e&&e.secret&&(this.userSec=e.secret,this.setState({rsId:e.rsId})),this.share.init(this.onTorrentDone.bind(this),this.onTorrentStart.bind(this))}},{key:"initResumable",value:function(e,t){var a=this,n=Object(j.getFileHost)()+"/share/"+e+"/"+t;this.resume=new D({target:n,chunkSize:1048576,simultaneousUploads:4,testChunks:!1,throttleProgressCallbacks:1,method:"octet"}),this.resume.on("fileAdded",function(e){a.resume&&a.resume.upload()}.bind(this)),this.resume.on("pause",function(){}),this.resume.on("complete",function(){a.setState({shareMsg:"\u6587\u4ef6\u4e0a\u4f20\u6210\u529f"})}),this.resume.on("fileSuccess",function(e,t){}),this.resume.on("fileError",function(e,t){a.setState({shareMsg:"\u53d1\u5e03\u8d44\u6e90\u51fa\u9519\u4e86",uploadAgain:!0})}),this.resume.on("fileProgress",function(e){var t=100*e.progress();a.setState({shareMsg:"\u6587\u4ef6\u4e0a\u4f20\u4e2d "+t+"%"})}),this.resume.on("cancel",function(){}),this.resume.on("uploadStart",function(){})}},{key:"prettyBytes",value:function(e){var t,a=e<0,n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"];return a&&(e=-e),e<1?(a?"-":"")+e+" B":(t=Math.min(Math.floor(Math.log(e)/Math.log(1e3)),n.length-1),(a?"-":"")+(e=Number((e/Math.pow(1e3,t)).toFixed(2)))+" "+n[t])}},{key:"updateTorrentStatus",value:function(){var e=this;this.torrentList.map(function(t){var a=document.querySelector("#pid"+t.infoHash);a&&(a.innerHTML=t.numPeers);var n=document.querySelector("#sid"+t.infoHash);n&&(n.innerHTML=e.prettyBytes(t.uploadSpeed)+"/s");var r=document.querySelector("#did"+t.infoHash);if(r&&(r.innerHTML=e.prettyBytes(t.downloadSpeed)+"/s"),1===t.progress){var s=document.querySelector("#pgid"+t.infoHash);if(s&&-1==e.finishedList.indexOf(t.infoHash)){var l=t.files[0];e.finishedList.push(t.infoHash),l.getBlobURL(function(e,t){if(console.log(e+" "+t),e)throw e;s.download="\u5c71\u9876\u6d1e(www.sdoo.cc)-"+l.name,s.href=t})}}})}},{key:"onTorrentStart",value:function(e){this.setState({shareMsg:"\u5904\u7406\u4e2d...(\u5927\u6587\u4ef6\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162,\u8bf7\u8010\u5fc3\u7b49\u5f85)"}),e&&(this.html5File=e[0])}},{key:"addServerResoruce",value:function(){var e=this;q();this.setState({shareMsg:"\u8d44\u6e90\u83b7\u53d6\u4e2d..."});var t=this.state.downloadId;t?this.download(t):Object(H.loadMinerResource)(function(t,a){t?(e.setState({shareMsg:"\u8d44\u6e90\u83b7\u53d6\u6210\u529f\uff0c\u8bf7\u4e0d\u8981\u5173\u95ed\u6b64\u9875\u9762\uff0c\u5176\u4ed6\u7528\u6237\u4e0b\u8f7d\u6210\u529f\u540e\u5c06\u4f1a\u83b7\u5f97\u79ef\u5206\u5956\u52b1..."}),a.map(function(t){e.download(t.id)})):e.setState({shareMsg:"\u8d44\u6e90\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u8bd5"})}),setTimeout(function(){e.addNewMiner()},3e4)}},{key:"handleResourceToken",value:function(e,t){var a=localStorage.getItem(n),n=e+"-lst",r=e+"-ltime",s=!1,l=localStorage.getItem(r),o=(new Date).getTime();if(l&&o-parseInt(l)<12e4&&(s=!0),localStorage.setItem(r,o),t===a||s);else{localStorage.setItem(n,t);var i=localStorage.getItem("rtoken-key");i||(i=""),i=t+";"+i,localStorage.setItem("rtoken-key",i)}if(this.tokenCount.has(e)){var c=this.tokenCount.get(e);this.tokenCount.set(e,c+1)}else this.tokenCount.set(e,1);var u=this.tokenCount.get(e),d=document.querySelector("#rto"+e);d&&(d.innerHTML=u+""),u>0&&u%100==0&&this.uploadRtokens()}},{key:"addNewMiner",value:function(){var e=q();if(e){var t={action:"rtoken",type:"start",minerPk:e.pk};P("https://miner.sdoo.cc/bshop",t,function(e,t){})}}},{key:"uploadRtokens",value:function(){var e=q(),t={action:"rtoken",type:"reimburse",tokens:localStorage.getItem("rtoken-key").split(";"),minerPk:e.pk};P("https://miner.sdoo.cc/bshop",t,function(e,t){e&&localStorage.setItem("rtoken-key","")})}},{key:"download",value:function(e){var t=this,a={secret:this.userSec};new x(e,a).download(e,{resourceTokenCallBack:function(a){t.handleResourceToken(e,a)}},function(e){var a=e.infoHash,n=e.name,r=t.state.resourceList;r.push({id:a,name:n}),t.setState({resourceList:r}),t.torrentList.unshift(e)})}},{key:"onTorrentDone",value:function(e){if(this.setState({ready:!0}),e){this.torrent=e;e.infoHash,e.magnetURI,e.torrentFileBlobURL,e.name;this.resId=e.infoHash,this.resName=e.name;var t=this.state.resourceList;t.push({id:this.resId,name:this.resName}),this.setState({resourceList:t}),e.key=e.infoHash,this.torrentList.unshift(e)}this.infoInterval||(this.infoInterval=setInterval(this.updateTorrentStatus.bind(this),3e3)),this.setState({shareMsg:""})}},{key:"updateDownloadId",value:function(e){if(e&&e.target){var t=e.target.value;this.setState({downloadId:t})}}},{key:"updateFee",value:function(e){e&&e.target&&(this.fee=e.target.value)}},{key:"updatePrice",value:function(e){e&&e.target&&(this.price=e.target.value)}},{key:"updateTags",value:function(e){e&&e.target&&(this.tags=e.target.value)}},{key:"updateDeadline",value:function(e){e&&e.target&&(this.deadline=e.target.value)}},{key:"renderAddFile",value:function(){var e=this;return u.a.createElement(d.a,null,u.a.createElement(m.a,{xs:"12"},u.a.createElement(b.a,null,u.a.createElement(h.a,null,u.a.createElement(p.a,null,u.a.createElement("i",{className:"icon-share",onClick:this.toggle.bind(this)},"\u6d41\u91cf\u77ff\u5de5\u8d5a\u79ef\u5206"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(g.a,{color:"link",className:"card-header-action btn-setting"},u.a.createElement("i",{className:"icon-settings"})),u.a.createElement(g.a,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggle.bind(this)},u.a.createElement("i",{className:"icon-arrow-up"})),u.a.createElement(g.a,{color:"link",className:"card-header-action btn-close",onClick:this.toggleFade},u.a.createElement("i",{className:"icon-close"})))),u.a.createElement(I.a,{isOpen:this.state.collapse,id:"collapseExample"},u.a.createElement(f.a,null,u.a.createElement(w.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(k.a,null,"\u6211\u7684\u8d26\u53f7:")),u.a.createElement(y.a,{id:"prependedInput",size:"16",type:"text",value:this.state.rsId})))),u.a.createElement(w.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(k.a,null,u.a.createElement(R.a,{id:"mip166753",text:"\u83b7\u53d6\u670d\u52a1\u5668\u8d44\u6e90:",content:"\u586b\u5199\u8d44\u6e90ID\u4e0b\u8f7d,ID\u4e3a\u7a7a\u5219\u4ece\u670d\u52a1\u5668\u968f\u673a\u4e0b\u8f7d\u3002"}))),u.a.createElement(y.a,{id:"appendedInputButtons",size:"16",type:"text",onChange:this.updateDownloadId.bind(this),placeholder:"\u8d44\u6e90ID\u6216\u968f\u673a\u4e0b\u8f7d"}),u.a.createElement(g.a,{color:"danger",onClick:function(){return e.addServerResoruce()}},"\u4e0b\u8f7d")))),u.a.createElement(w.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(k.a,null,u.a.createElement(R.a,{id:"mip123",text:"\u968f\u673a\u83b7\u53d6\u670d\u52a1\u5668\u8d44\u6e90:",content:"\u6d41\u91cf\u77ff\u5de5\u5c06\u670d\u52a1\u5668\u8d44\u6e90\u4e0b\u8f7d\u5230\u672c\u5730\u540e\u4e3a\u9644\u8fd1\u5176\u4ed6\u7528\u6237\u63d0\u4f9b\u8d44\u6e90\u4e0b\u8f7d\u670d\u52a1\u3002\u5176\u4ed6\u7528\u6237\u6210\u529f\u4e0b\u8f7d\u8d44\u6e90\u540e\u4f1a\u7559\u4e0b\u786e\u8ba4\u4fe1\u606f\uff0c\u6d41\u91cf\u77ff\u5de5\u901a\u8fc7\u6536\u96c6\u5230\u7684\u786e\u8ba4\u4fe1\u606f\u6362\u53d6\u5c71\u9876\u6d1e\u79ef\u5206\u4f5c\u4e3a\u56de\u62a5\u3002"}))),u.a.createElement(g.a,{color:"danger",onClick:function(){return e.addServerResoruce()}},"\u70b9\u51fb\u8fd9\u91cc\u83b7\u5f97\u79ef\u5206"))),u.a.createElement(w.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(k.a,null,"\u9009\u62e9\u672c\u5730\u8d44\u6e90\u63d0\u4f9b\u6d41\u91cf:")),u.a.createElement("input",{name:"upload",type:"file"}))))))))))}},{key:"renderUploadAgainButton",value:function(){var e=this;return this.state.uploadAgain?u.a.createElement(g.a,{type:"submit",color:"primary",onClick:function(t){return e.uploadAgain()}},"\u91cd\u65b0\u4e0a\u4f20"):null}},{key:"renderResourceItems",value:function(){return this.state.resourceList.map(function(e){var t="pid"+e.id,a="sid"+e.id,n="rto"+e.id,r="did"+e.id,s="pgid"+e.id;return u.a.createElement(M.a,{action:!0},u.a.createElement(N.a,null,e.name,"   ",u.a.createElement(z,{id:e.id,res:e})),u.a.createElement(L.a,null,u.a.createElement("code",null," ",u.a.createElement("span",{id:t}),"\u8282\u70b9"),". \u2197",u.a.createElement("code",null,"\u4e0b\u8f7d",u.a.createElement("span",{id:r}),","),u.a.createElement("code",null,"\u4e0a\u4f20",u.a.createElement("span",{id:a}))," ",u.a.createElement("code",null,"\u6536\u5230",u.a.createElement("span",{id:n},0),"\u4e2a\u786e\u8ba4\u4fe1\u606f")," ",u.a.createElement("code",null,u.a.createElement("a",{id:s}))))})}},{key:"renderShareList",value:function(){return u.a.createElement(d.a,null,u.a.createElement(m.a,{sm:"12",xl:"6"},u.a.createElement(h.a,null,u.a.createElement(p.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"\u6b63\u5728\u670d\u52a1\u8d44\u6e90\u5217\u8868"),u.a.createElement(S.a,{color:"danger"},u.a.createElement("small",null,"\u6d41\u91cf\u77ff\u5de5\u5c06\u670d\u52a1\u5668\u8d44\u6e90\u4e0b\u8f7d\u5230\u672c\u5730\u540e\u4e3a\u9644\u8fd1\u5176\u4ed6\u7528\u6237\u63d0\u4f9b\u8d44\u6e90\u4e0b\u8f7d\u670d\u52a1\u3002\u5176\u4ed6\u7528\u6237\u6210\u529f\u4e0b\u8f7d\u8d44\u6e90\u540e\u4f1a\u7559\u4e0b\u786e\u8ba4\u4fe1\u606f\uff0c\u6d41\u91cf\u77ff\u5de5\u901a\u8fc7\u6536\u96c6\u5230\u7684\u786e\u8ba4\u4fe1\u606f\u6362\u53d6\u5c71\u9876\u6d1e\u79ef\u5206\u4f5c\u4e3a\u56de\u62a5\u3002")),u.a.createElement(S.a,{color:"danger"},u.a.createElement("small",null,"\u6b64\u9875\u9762\u6b63\u5728\u6267\u884c\u5171\u4eab\u8d44\u6e90\u529f\u80fd\uff0c\u8bf7\u4e0d\u8981\u5237\u65b0\u6216\u5173\u95ed\u6b64\u9875\u9762\uff0c\u4fdd\u6301\u6b64\u9875\u9762\u6253\u5f00\u72b6\u6001\u4e0b\uff0c\u9644\u8fd1\u7f51\u7edc\u4e0a\u7684\u5176\u4ed6\u7528\u6237\u624d\u53ef\u4ee5\u4e0b\u8f7d\u5217\u8868\u4e2d\u7684\u8d44\u6e90\u3002"))),u.a.createElement(f.a,null,u.a.createElement(O.a,null,this.renderResourceItems())))))}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},this.renderAddFile(),u.a.createElement("div",null,u.a.createElement(S.a,{color:"info"},this.state.shareMsg)),this.renderShareList())}}]),t}(c.Component)),z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).toggle=a.toggle.bind(Object(n.a)(Object(n.a)(a))),a.state={popoverOpen:!1},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return u.a.createElement("span",null,u.a.createElement("span",{className:"alert-primary  fade show",id:"Popover-"+this.props.id,onClick:this.toggle},"(\u5206\u4eab\u94fe\u63a5)"),u.a.createElement(T.a,{placement:"top",isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},u.a.createElement(C.a,{style:{color:"#c03d56"}},this.props.res.name),u.a.createElement(B.a,null,Object(j.getCurrentHost)()+"/#/btb#"+this.props.res.id)))}}]),t}(c.Component);t.default=U}}]);