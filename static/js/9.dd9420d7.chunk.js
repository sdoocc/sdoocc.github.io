(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{875:function(e,t,a){(function(t){e.exports=function(e,a){var d=e.files.filter(function(e){return/^poster\.(jpg|png|gif)$/.test(e.name)})[0];if(d)return u(d,a);var m=["audio","video","image"].map(function(t){return{type:t,size:i(e,r[t])}}).sort(function(e,t){return t.size-e.size})[0];if(0===m.size)return a(new Error(s));switch(m.type){case"audio":return function(e,t){var a=o(e,r.image);if(0===a.length)return t(new Error(s));var i=a.map(function(e){return{file:e,score:c(e)}}).reduce(function(e,t){return e.score>t.score?e:t.score>e.score?t:e.file.length>t.file.length?e:t}),l=n.extname(i.file.name);i.file.getBuffer(function(e,a){return t(e,a,l)})}(e,a);case"image":return function(e,t){u(l(e,r.image),t)}(e,a);case"video":return function(e,a){l(e,r.video).getBlobURL(function(e,n){var r=document.createElement("video");function i(){r.removeEventListener("seeked",i);var e=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"===typeof e&&(e=document.querySelector(e));if(null==e||"VIDEO"!==e.nodeName)throw new TypeError("First argument must be a <video> element or selector");var n=a.format;null==n&&(n="png");if("png"!==n&&"jpeg"!==n&&"webp"!==n)throw new TypeError('Second argument must be one of "png", "jpeg", or "webp"');var r=document.createElement("canvas");r.width=e.videoWidth,r.height=e.videoHeight,r.getContext("2d").drawImage(e,0,0);var s=r.toDataURL("image/"+n).split(",")[1];return t.from(s,"base64")}(r);if(r.pause(),r.src="",r.load(),0===e.length)return a(new Error(s));a(null,e,".png")}r.addEventListener("canplay",function e(){r.removeEventListener("canplay",e);r.addEventListener("seeked",i);r.currentTime=Math.min(.03*(r.duration||600),60)}),r.volume=0,r.src=n,r.play()})}(e,a)}};var n=a(92),r=a(876),s="Cannot generate a poster from any files in the torrent";function i(e,t){var a=o(e,t);return 0===a.length?0:a.map(function(e){return e.length}).reduce(function(e,t){return e+t})}function l(e,t){var a=o(e,t);if(0!==a.length)return a.reduce(function(e,t){return e.length>t.length?e:t})}function o(e,t){return e.files.filter(function(e){var a=n.extname(e.name).toLowerCase();return-1!==t.indexOf(a)})}function c(e){var t=n.basename(e.name,n.extname(e.name)).toLowerCase(),a={cover:80,folder:80,album:80,front:80,back:20,spectrogram:-80};for(var r in a){if(t===r)return a[r];if(-1!==t.indexOf(r))return a[r]}return 0}function u(e,t){var a=n.extname(e.name);e.getBuffer(function(e,n){return t(e,n,a)})}}).call(this,a(7).Buffer)},876:function(e,t){e.exports={audio:[".aac",".aif",".aiff",".asf",".dff",".dsf",".flac",".m2a",".m4a",".m4b",".mp2",".mp3",".mpc",".oga",".ogg",".opus",".spx",".wma",".wav",".wv",".wvp"],video:[".avi",".mp4",".m4v",".webm",".mov",".mkv",".mpg",".mpeg",".ogv",".webm",".wmv"],image:[".gif",".jpg",".jpeg",".png"]}},889:function(e,t,a){"use strict";a.r(t),function(e){var n=a(52),r=a(21),s=a(22),i=a(24),l=a(23),o=a(25),c=a(0),u=a.n(c),d=a(831),m=a(832),h=a(228),p=a(229),f=a(231),g=a(34),v=a(65),E=a(89),y=a(64),b=a(77),k=a(130),S=a(39),w=a(230),O=a(78),x=a(90),I=a(840),N=a(871),T=a(872),j=a(839),F=a(400),L=a(397),B=a(398),C=a(12),M=(a(30),a(91)),H=a(846).default,P=a(852),A=(a(79),a(12)),z=(A.shareResource,A.postSafe),R=A.loadLocalAccount,D=A.signString,U=(a(875),function(t){function a(e){var t;Object(r.a)(this,a);return(t=Object(i.a)(this,Object(l.a)(a).call(this,e))).state={collapse:!0,resourceList:[],resource:{tags:"",price:"",fee:"",deadline:"",owner:"",id:""},rsId:"\u8d26\u53f7\u672a\u767b\u9646",autoShare:!1,resId:"\u9009\u62e9\u8981\u5206\u4eab\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939"},t.state.shareMsg="",t.share=new H(t.state),t.userSec="",t.fee=.01,t.deadline=5,t.price=0,t.tags="",t.resName="",t.infoInterval=null,t.torrentList=[],t.resume=null,t.html5Files=null,t.torrent=null,t.poster=null,t}return Object(o.a)(a,t),Object(s.a)(a,[{key:"cancelShare",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"uploadTorrent",value:function(e,t,a){var n=this,r=e.torrentFile.toString("base64"),s=e.infoHash,i=e.files[0].name;this.setState({shareMsg:"\u6587\u4ef6\u4e0a\u4f20\u4e2d..."});var l={torrentFile:r,name:i},o=(new Date).getTime();o-=o%864e5;var c=D(this.userSec,s+o),u=Object(C.calcAccountId)(this.userSec)+i,d=this.state.existResource;if(d){var m=d.name,h=m.split("$&");if(2==h.length&&(m=h[1]),u=d.owner+m,d.pwd&&Object(C.simpleHash)(this.passwd).substr(0,10)!==d.pwd)return void this.setState({shareMsg:"\u5bc6\u7801\u4e0e\u539f\u5bc6\u7801\u4e0d\u5339\u914d"})}this.passwd&&this.passwd.length>0&&(u=this.passwd+u);var p={url:Object(C.getTorrentFileHost)()+"/torrentFile/"+s+"/"+c,nonce:"000"};d?(this.initResumable(s,c,u),this.resume.addFile(this.html5Files[t])):z(p,l,function(e){e&&(n.initResumable(s,c,u),n.resume.addFile(n.html5Files[t]),a(!0))})}},{key:"shareFileOneByOne",value:function(e,t){console.log("shareFileOneByOne "+t),this.setState({fileIndex:t});var a=e[t];if(a){var n=this.html5Files[t];this.doShare(a,n.name,a.infoHash,t,function(e){e&&console.log("share tran ok."+t)})}else console.log("tor is null.all finished ? index="+t)}},{key:"uploadAgain",value:function(){var e=this;this.setState({shareMsg:"\u8d44\u6e90\u91cd\u65b0\u4e0a\u4f20\u4e2d...",uploadAgain:!1});var t=this.state.fileIndex,a=this.torrentList[t];this.uploadTorrent(a,t,function(a){a&&e.setState({fileIndex:t})})}},{key:"doShare",value:function(t,a,n,r,s){var i=this;console.log("doShare "+a+" index="+r);this.deadline,this.fee,this.price;var l=Object(C.createPeerId)(this.userSec),o=(l.pk,l.aid,new e(this.tags+"$&"+a).toString("hex")),c={tags:o};this.passwd&&this.passwd.length>0&&(this.hint=this.hint+"$&"+Object(C.simpleHash)(this.passwd).substr(0,10),c.hint=e.from(this.hint).toString("base64"),c.encrypted=!0);var u=function(e,n){e&&n&&n.ok?(i.setState({shareMsg:"\u8d44\u6e90("+a+")\u6821\u9a8c\u6210\u529f\uff0c\u8d44\u6e90\u4e0a\u4f20\u4e2d,\u8bf7\u7a0d\u540e...",ready:!1,existResource:null}),setTimeout(function(){i.uploadTorrent(t,r,s)},500)):(i.setState({shareMsg:"\u53d1\u5e03\u8d44\u6e90("+a+")\u51fa\u9519\u4e86"}),s(!1))};u(!0,{ok:!0})}},{key:"componentDidMount",value:function(){var e=R();e&&e.secret&&(this.userSec=e.secret,this.setState({rsId:e.rsId})),this.share.init(this.onTorrentDone.bind(this),this.onTorrentStart.bind(this))}},{key:"initResumable",value:function(e,t,a){var n=this,r=Object(C.getFileHost)()+"/share/"+e+"/"+t;this.resume=new P({target:r,keyString:a,chunkSize:10485760,simultaneousUploads:4,testChunks:!1,throttleProgressCallbacks:1,method:"octet"}),this.resume.on("fileAdded",function(e){n.resume&&n.resume.upload()}.bind(this)),this.resume.on("pause",function(){}),this.resume.on("complete",function(){if(!n.state.uploadAgain){n.setState({shareMsg:"\u6587\u4ef6\u4e0a\u4f20\u6210\u529f",ready:!1});var e=n.state.fileIndex+1;n.shareFileOneByOne(n.torrentList,e)}}),this.resume.on("fileSuccess",function(e,t){}),this.resume.on("fileError",function(e,t){n.setState({shareMsg:"\u53d1\u5e03\u8d44\u6e90\u51fa\u9519\u4e86",uploadAgain:!0})}),this.resume.on("fileProgress",function(e){var t=100*e.progress();n.setState({shareMsg:"\u6587\u4ef6\u4e0a\u4f20\u4e2d "+t+"%"})}),this.resume.on("cancel",function(){}),this.resume.on("uploadStart",function(){})}},{key:"prettyBytes",value:function(e){var t,a=e<0,n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"];return a&&(e=-e),e<1?(a?"-":"")+e+" B":(t=Math.min(Math.floor(Math.log(e)/Math.log(1e3)),n.length-1),(a?"-":"")+(e=Number((e/Math.pow(1e3,t)).toFixed(2)))+" "+n[t])}},{key:"updateTorrentStatus",value:function(){var e=this;this.torrentList.map(function(t){var a=document.querySelector("#pid"+t.infoHash);a&&(a.innerHTML=t.numPeers);var n=document.querySelector("#sid"+t.infoHash);n&&(n.innerHTML=e.prettyBytes(t.uploadSpeed)+"/s")})}},{key:"onTorrentStart",value:function(e){this.setState({shareMsg:"\u5904\u7406\u4e2d...(\u5927\u6587\u4ef6\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162,\u8bf7\u8010\u5fc3\u7b49\u5f85)",resId:"\u6b63\u5728\u8ba1\u7b97\u4e2d..."}),e&&(this.html5Files=e)}},{key:"onTorrentDone",value:function(e){if(this.setState({ready:!0,shareMsg:"\u6587\u4ef6\u5206\u6790\u6210\u529f\uff0c\u70b9\u51fb\u5206\u4eab\u6309\u94ae\u53d1\u5e03\u5230\u670d\u52a1\u5668"}),e){this.torrent=e;e.infoHash,e.magnetURI,e.torrentFileBlobURL,e.name;this.state.resId=e.infoHash,this.resName=e.name;var t=this.state.resourceList;t.push({id:this.state.resId,name:this.resName}),this.setState({resourceList:t}),e.key=e.infoHash,-1==this.torrentList.indexOf(e)&&this.torrentList.unshift(e),this.html5Files.length==this.torrentList.length&&(this.state.autoShare?this.shareFileOneByOne(this.torrentList,0):this.setState({ready:!0}))}this.infoInterval||(this.infoInterval=setInterval(this.updateTorrentStatus.bind(this),3e3))}},{key:"updateSecret",value:function(e){if(e&&e.target){this.secret=e.target.value,this.secret=Object(C.enhancePassword)(this.secret);var t=Object(C.calcAccountId)(this.secret);this.setState({rsId:t})}}},{key:"updateFee",value:function(e){e&&e.target&&(this.fee=e.target.value)}},{key:"updatePrice",value:function(e){e&&e.target&&(this.price=e.target.value)}},{key:"updateTags",value:function(e){e&&e.target&&(this.tags=e.target.value)}},{key:"updatePwdHint",value:function(e){e&&e.target&&(this.hint=e.target.value)}},{key:"updatePwd",value:function(e){e&&e.target&&(this.passwd=e.target.value,""===this.passwd&&(this.hint=""))}},{key:"updateDeadline",value:function(e){e&&e.target&&(this.deadline=e.target.value)}},{key:"autoShareCheck",value:function(e){e&&e.target&&this.setState({autoShare:e.target.checked})}},{key:"renderAddFile",value:function(){var e=this;return u.a.createElement(d.a,null,u.a.createElement(m.a,{xs:"12"},u.a.createElement(S.a,null,u.a.createElement(h.a,null,u.a.createElement(p.a,null,u.a.createElement("i",{className:"icon-share",onClick:this.toggle.bind(this)},"\u5171\u4eab\u8d44\u6e90\u8d5a\u79ef\u5206"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(g.a,{color:"link",className:"card-header-action btn-setting"},u.a.createElement("i",{className:"icon-settings"})),u.a.createElement(g.a,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggle.bind(this)},u.a.createElement("i",{className:"icon-arrow-up"})),u.a.createElement(g.a,{color:"link",className:"card-header-action btn-close",onClick:this.toggleFade},u.a.createElement("i",{className:"icon-close"})))),u.a.createElement(w.a,{isOpen:this.state.collapse,id:"collapseExample"},u.a.createElement(f.a,null,u.a.createElement(O.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u6211\u7684\u8d26\u53f7:")),u.a.createElement(b.a,{id:"prependedInput",size:"16",type:"text",value:this.state.rsId})))),u.a.createElement(O.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u8d44\u6e90:")),u.a.createElement("input",{name:"upload",type:"file",multiple:"true"})))),u.a.createElement(O.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,u.a.createElement(M.a,{id:"resid123",text:"\u8d44\u6e90ID:",content:"\u6bcf\u4e2a\u8d44\u6e90\u90fd\u4f1a\u6709\u4e00\u4e2a\u552f\u4e00\u7684ID\u6c38\u4e45\u4fdd\u5b58\uff0c\u76f8\u540c\u7684\u8d44\u6e90\u53ea\u80fd\u53d1\u5e03\u4e00\u6b21\u3002"}))),u.a.createElement(b.a,{id:"prependedInput1",size:"16",type:"text",value:this.state.resId})))),u.a.createElement(O.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u8d44\u6e90\u6807\u7b7e:")),u.a.createElement(b.a,{id:"prependedInput2",size:"16",type:"text",onChange:this.updateTags.bind(this),placeholder:"\u8d44\u6e90\u63cf\u8ff0"})))),u.a.createElement(O.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,u.a.createElement(M.a,{id:"mip123",text:"\u8d44\u6e90\u5bc6\u7801:",content:"\u79c1\u6709\u5185\u5bb9\u53ef\u4ee5\u8bbe\u7f6e\u5bc6\u7801\u3002\u5176\u4ed6\u4eba\u9700\u8981\u5bc6\u7801\u624d\u80fd\u67e5\u770b\u8d44\u6e90\u5185\u5bb9\u3002\u7cfb\u7edf\u4e0d\u4fdd\u5b58\u5bc6\u7801\uff0c\u5bc6\u7801\u53ea\u6709\u8d44\u6e90\u53d1\u5e03\u8005\u672c\u4eba\u77e5\u9053\u3002"}))),u.a.createElement(b.a,{id:"prependedInput2",size:"16",type:"text",onChange:this.updatePwd.bind(this),placeholder:""})))),u.a.createElement(O.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,u.a.createElement(M.a,{id:"mpw123",text:"\u5bc6\u7801\u63d0\u793a:",content:"\u5bc6\u7801\u63d0\u793a\u4fe1\u606f\uff0c\u9632\u6b62\u5fd8\u8bb0\u5bc6\u7801\u3002"}))),u.a.createElement(b.a,{id:"prependedInput2",size:"16",type:"text",onChange:this.updatePwdHint.bind(this),placeholder:"\u8d44\u6e90\u5bc6\u7801\u7684\u63d0\u793a\u4fe1\u606f"})))),u.a.createElement(O.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,u.a.createElement(M.a,{id:"pip123",text:"\u4ef7\u683c:",content:"\u53d1\u5e03\u8005\u53ef\u4ee5\u8bbe\u7f6e\u8d44\u6e90\u79ef\u5206\u4ef7\u683c\uff0c\u4e0b\u8f7d\u8005\u9700\u8981\u652f\u4ed8\u79ef\u5206\u540e\u624d\u53ef\u4ee5\u4e0b\u8f7d\u6b64\u8d44\u6e90\u3002\u672a\u652f\u4ed8\u524d\u53ea\u80fd\u9884\u89c8\u6216\u4e0b\u8f7d10%\u3002"}))),u.a.createElement(b.a,{id:"appendedPrependedInput3",size:"16",type:"text",onChange:this.updatePrice.bind(this),placeholder:" \u8d44\u6e90\u4ef7\u683c,\u9ed8\u8ba40\u79ef\u5206"}),u.a.createElement(E.a,{addonType:"append"},u.a.createElement(y.a,null,"\u79ef\u5206"))))),u.a.createElement(O.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,u.a.createElement(M.a,{id:"mpe123",text:"\u673a\u5668\u4eba\u8d39:",content:"\u5c71\u9876\u6d1e\u533a\u5757\u94fe\u7cfb\u7edf\u6bcf\u7b14\u4ea4\u6613\u90fd\u6709\u673a\u5668\u4eba\u8d39\uff0c\u673a\u5668\u4eba\u4e3a\u4f59\u989d\u8f83\u591a\u7684\u8d26\u6237\uff0c\u8d1f\u8d23\u9a8c\u8bc1\u4ea4\u6613\u7b26\u5408\u7cfb\u7edf\u89c4\u5219\uff0c\u4fdd\u8bc1\u7cfb\u7edf\u5b89\u5168\u8fd0\u884c\uff0c\u540c\u65f6\u83b7\u5f97\u673a\u5668\u4eba\u8d39\u505a\u4e3a\u56de\u62a5.\u6700\u5c110.01"}))),u.a.createElement(b.a,{id:"appendedPrependedInput",size:"16",type:"text",onChange:this.updateFee.bind(this),placeholder:"\u6700\u5c110.01\u4e2a\u79ef\u5206"}),u.a.createElement(E.a,{addonType:"append"},u.a.createElement(y.a,null,"\u79ef\u5206"))))),this.renderDeadline(),u.a.createElement("div",null,u.a.createElement(k.a,{color:"info"},this.state.shareMsg),this.renderUploadAgainButton()),u.a.createElement("div",{className:"form-actions"},u.a.createElement(g.a,{type:"submit",color:"primary",disabled:!this.state.ready,onClick:function(t){e.setState({shareMsg:"\u6587\u4ef6\u5904\u7406\u4e2d..."}),setTimeout(function(){e.shareFileOneByOne(e.torrentList,0)},1e3)}},"\u5206\u4eab"),u.a.createElement(g.a,{color:"secondary",onClick:function(t){return e.cancelShare()}},"\u53d6\u6d88")),u.a.createElement("div",null,u.a.createElement("input",{type:"checkbox",checked:this.state.autoShare,onChange:this.autoShareCheck.bind(this)}),u.a.createElement(x.a,{className:"form-check-label",check:!0,htmlFor:"inline-checkbox1"},"\u6587\u4ef6\u5206\u6790\u5b8c\u6bd5\u81ea\u52a8\u5206\u4eab"))))))))}},{key:"renderUploadAgainButton",value:function(){var e=this;return this.state.uploadAgain?u.a.createElement(g.a,{type:"submit",color:"primary",onClick:function(t){return e.uploadAgain()}},"\u91cd\u65b0\u4e0a\u4f20\u6587\u4ef6"):null}},{key:"renderDeadline",value:function(){return null}},{key:"renderResourceItems",value:function(){return this.state.resourceList.map(function(e){var t="pid"+e.id,a="sid"+e.id;return u.a.createElement(I.a,{action:!0},u.a.createElement(N.a,null," ",e.name,"  ",u.a.createElement($,{id:e.id,res:e})),u.a.createElement(T.a,null,u.a.createElement("code",null," ",u.a.createElement("span",{id:t}),"\u8282\u70b9"),". \u2197",u.a.createElement("code",null,u.a.createElement("span",{id:a}),"\u4e0a\u4f20\u901f\u5ea6")))})}},{key:"renderShareList",value:function(){return u.a.createElement(d.a,null,u.a.createElement(m.a,{sm:"12",xl:"6"},u.a.createElement(h.a,null,u.a.createElement(p.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"\u6211\u7684\u8d44\u6e90\u5217\u8868"),u.a.createElement(k.a,{color:"danger"},u.a.createElement("small",null,"\u8bf7\u4e0d\u8981\u5237\u65b0\u6216\u5173\u95ed\u6b64\u9875\u9762\uff0c\u4fdd\u6301\u6b64\u9875\u9762\u6253\u5f00\u72b6\u6001\u4e0b\uff0c\u8d2d\u4e70\u8fc7\u8d44\u6e90\u7684\u7528\u6237\u624d\u53ef\u4ee5\u4e0b\u8f7d\u672c\u673a\u8d44\u6e90"))),u.a.createElement(f.a,null,u.a.createElement(j.a,null,this.renderResourceItems())))))}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},this.renderAddFile(),this.renderShareList())}}]),a}(c.Component)),$=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).toggle=a.toggle.bind(Object(n.a)(Object(n.a)(a))),a.state={popoverOpen:!1},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return u.a.createElement("span",null,u.a.createElement("span",{className:"alert-primary  fade show",id:"Popover-"+this.props.id,onClick:this.toggle},"(\u5206\u4eab\u94fe\u63a5)"),u.a.createElement(F.a,{placement:"top",isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},u.a.createElement(L.a,null,"\u5206\u4eab\u94fe\u63a5\uff08\u591a\u4eba\u89c2\u770b\u4f1a\u52a0\u5feb\u4e0b\u8f7d\u901f\u5ea6\uff09"),u.a.createElement(B.a,null,Object(C.getCurrentHost)()+"/#/btb#"+this.props.res.id+"#"+this.props.res.name)))}}]),t}(c.Component);t.default=U}.call(this,a(7).Buffer)}}]);