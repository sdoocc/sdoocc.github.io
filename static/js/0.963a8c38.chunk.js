(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{806:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return s});var r=n(22),i=n(23),a=n(377),s=function(){function t(){Object(r.a)(this,t),this.player=new a("",{}),this.torrentCallback=null,this.onStartCallback=null}return Object(i.a)(t,[{key:"init",value:function(e,t,n){this.torrentCallback=e,this.onStartCallback=t;var r=n;r||(r=document.querySelector("input[name=upload]")),r&&this.uploadElement(r,this.onStartCallback,function(e,t){if(e)return e;t=t.map(function(e){return e.file}),this.onFiles(t)}.bind(this))}},{key:"isTorrentFile",value:function(e){return-1!==e.name.indexOf(".torrent")}},{key:"isNotTorrentFile",value:function(e){return!this.isTorrentFile(e)}},{key:"onSeedTorrent",value:function(e){e.on("warning",function(e){}),e.on("error",function(e){})}},{key:"seedContent",value:function(t,n,r){var i=e.from(t),a=this.player.seed(i,{name:n});a.on("infoHash",function(e){r(a)})}},{key:"seedOneByOne",value:function(e,t){var n=this;if(console.log("seedOneByOne "+t),e[t]){var r=this.player.seed(e[t],this.onSeedTorrent.bind(this));r.on("infoHash",function(i){n.torrentCallback(r),n.seedOneByOne(e,t+1)})}}},{key:"seed",value:function(e){0!==e.length&&(this.onStartCallback(e),this.seedOneByOne(e,0))}},{key:"onFiles",value:function(e){e.forEach(function(e){}),this.seed(e)}},{key:"uploadElement",value:function(e,t,n,r){"function"===typeof n&&(r=n,n={}),"string"===typeof n&&(n={type:n}),e.addEventListener("change",function(i){if(0===e.files.length)return r(null,[]);t&&t(null);var a=new FileReader,s=0,o=[];function u(t){var r=e.files[t];"text"===n.type?a.readAsText(r):"url"===n.type?a.readAsDataURL(r):a.readAsArrayBuffer(r)}a.addEventListener("load",function(t){o.push({file:e.files[s],target:t.target}),++s===e.files.length?r(null,o):u(s)}),u(s)})}}]),t}()}.call(this,n(6).Buffer)},812:function(e,t,n){(function(t){var r=n(231),i=n(98);!function(){"use strict";e.exports=function e(n){if(!(this instanceof e))return new e(n);if(this.version=1,this.support="undefined"!==typeof File&&"undefined"!==typeof Blob&&"undefined"!==typeof FileList&&(!!Blob.prototype.webkitSlice||!!Blob.prototype.mozSlice||!!Blob.prototype.slice||!1),!this.support)return!1;var a=this;a.files=[],a.defaults={chunkSize:1048576,forceChunkSize:!1,simultaneousUploads:3,fileParameterName:"file",chunkNumberParameterName:"resumableChunkNumber",chunkSizeParameterName:"resumableChunkSize",currentChunkSizeParameterName:"resumableCurrentChunkSize",totalSizeParameterName:"resumableTotalSize",typeParameterName:"resumableType",identifierParameterName:"resumableIdentifier",fileNameParameterName:"resumableFilename",relativePathParameterName:"resumableRelativePath",totalChunksParameterName:"resumableTotalChunks",throttleProgressCallbacks:.5,query:{},headers:{},preprocess:null,method:"multipart",uploadMethod:"POST",testMethod:"GET",prioritizeFirstAndLastChunk:!1,target:"/",testTarget:null,parameterNamespace:"",testChunks:!0,generateUniqueIdentifier:null,getTarget:null,maxChunkRetries:100,chunkRetryInterval:void 0,permanentErrors:[400,404,415,500,501],maxFiles:void 0,withCredentials:!1,xhrTimeout:0,clearInput:!0,chunkFormat:"blob",setChunkTypeFromFile:!1,maxFilesErrorCallback:function(e,t){var n=a.getOpt("maxFiles");alert("Please upload no more than "+n+" file"+(1===n?"":"s")+" at a time.")},minFileSize:1,minFileSizeErrorCallback:function(e,t){alert(e.fileName||e.name+" is too small, please upload files larger than "+s.formatSize(a.getOpt("minFileSize"))+".")},maxFileSize:void 0,maxFileSizeErrorCallback:function(e,t){alert(e.fileName||e.name+" is too large, please upload files less than "+s.formatSize(a.getOpt("maxFileSize"))+".")},fileType:[],fileTypeErrorCallback:function(e,t){alert(e.fileName||e.name+" has type not allowed, please upload files of type "+a.getOpt("fileType")+".")}},a.opts=n||{},a.getOpt=function(t){var n=this;if(t instanceof Array){var r={};return s.each(t,function(e){r[e]=n.getOpt(e)}),r}if(n instanceof h){if("undefined"!==typeof n.opts[t])return n.opts[t];n=n.fileObj}if(n instanceof d){if("undefined"!==typeof n.opts[t])return n.opts[t];n=n.resumableObj}if(n instanceof e)return"undefined"!==typeof n.opts[t]?n.opts[t]:n.defaults[t]},a.events=[],a.on=function(e,t){a.events.push(e.toLowerCase(),t)},a.fire=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);var n=e[0].toLowerCase();for(t=0;t<=a.events.length;t+=2)a.events[t]==n&&a.events[t+1].apply(a,e.slice(1)),"catchall"==a.events[t]&&a.events[t+1].apply(null,e);"fileerror"==n&&a.fire("error",e[2],e[1]),"fileprogress"==n&&a.fire("progress")};var s={stopEvent:function(e){e.stopPropagation(),e.preventDefault()},each:function(e,t){if("undefined"!==typeof e.length){for(var n=0;n<e.length;n++)if(!1===t(e[n]))return}else for(n in e)if(!1===t(n,e[n]))return},generateUniqueIdentifier:function(e,t){var n=a.getOpt("generateUniqueIdentifier");if("function"===typeof n)return n(e,t);var r=e.webkitRelativePath||e.fileName||e.name;return e.size+"-"+r.replace(/[^0-9a-zA-Z_-]/gim,"")},contains:function(e,t){var n=!1;return s.each(e,function(e){return e!=t||(n=!0,!1)}),n},formatSize:function(e){return e<1024?e+" bytes":e<1048576?(e/1024).toFixed(0)+" KB":e<1073741824?(e/1024/1024).toFixed(1)+" MB":(e/1024/1024/1024).toFixed(1)+" GB"},getTarget:function(e,t){var n=a.getOpt("target");if("test"===e&&a.getOpt("testTarget")&&(n="/"===a.getOpt("testTarget")?a.getOpt("target"):a.getOpt("testTarget")),"function"===typeof n)return n(t);var r=n.indexOf("?")<0?"?":"&";return n+r+t.join("&")}},o=function(e){s.stopEvent(e),e.dataTransfer&&e.dataTransfer.items?c(e.dataTransfer.items,e):e.dataTransfer&&e.dataTransfer.files&&c(e.dataTransfer.files,e)},u=function(e){e.preventDefault()};function l(e,t,n,r){var i;return e.isFile?e.file(function(e){e.relativePath=t+e.name,n.push(e),r()}):(e.isDirectory?i=e:e instanceof File&&n.push(e),"function"===typeof e.webkitGetAsEntry&&(i=e.webkitGetAsEntry()),i&&i.isDirectory?function(e,t,n,r){e.createReader().readEntries(function(e){if(!e.length)return r();f(e.map(function(e){return l.bind(null,e,t,n)}),r)})}(i,t+i.name+"/",n,r):("function"===typeof e.getAsFile&&(e=e.getAsFile())instanceof File&&(e.relativePath=t+e.name,n.push(e)),void r()))}function f(e,t){if(!e||0===e.length)return t();e[0](function(){f(e.slice(1),t)})}function c(e,t){if(e.length){a.fire("beforeAdd");var n=[];f(Array.prototype.map.call(e,function(e){return l.bind(null,e,"",n)}),function(){n.length&&p(n,t)})}}var p=function(e,t){var n=0,r=a.getOpt(["maxFiles","minFileSize","maxFileSize","maxFilesErrorCallback","minFileSizeErrorCallback","maxFileSizeErrorCallback","fileType","fileTypeErrorCallback"]);if("undefined"!==typeof r.maxFiles&&r.maxFiles<e.length+a.files.length){if(1!==r.maxFiles||1!==a.files.length||1!==e.length)return r.maxFilesErrorCallback(e,n++),!1;a.removeFile(a.files[0])}var i=[],o=[],u=e.length,l=function(){if(!--u){if(!i.length&&!o.length)return;window.setTimeout(function(){a.fire("filesAdded",i,o)},0)}};s.each(e,function(e){var u=e.name;if(r.fileType.length>0){var f=!1;for(var c in r.fileType){var p="."+r.fileType[c];if(-1!==u.toLowerCase().indexOf(p.toLowerCase(),u.length-p.length)){f=!0;break}}if(!f)return r.fileTypeErrorCallback(e,n++),!1}if("undefined"!==typeof r.minFileSize&&e.size<r.minFileSize)return r.minFileSizeErrorCallback(e,n++),!1;if("undefined"!==typeof r.maxFileSize&&e.size>r.maxFileSize)return r.maxFileSizeErrorCallback(e,n++),!1;function h(n){a.getFromUniqueIdentifier(n)?o.push(e):function(){e.uniqueIdentifier=n;var r=new d(a,e,n);a.files.push(r),i.push(r),r.container="undefined"!=typeof t?t.srcElement:null,window.setTimeout(function(){a.fire("fileAdded",r,t)},0)}(),l()}var m=s.generateUniqueIdentifier(e,t);m&&"function"===typeof m.then?m.then(function(e){h(e)},function(){l()}):h(m)})};function d(e,t,n){var r=this;r.opts={},r.getOpt=e.getOpt,r._prevProgress=0,r.resumableObj=e,r.file=t,r.fileName=t.fileName||t.name,r.size=t.size,r.relativePath=t.relativePath||t.webkitRelativePath||r.fileName,r.uniqueIdentifier=n,r._pause=!1,r.container="";var i=void 0!==n,a=function(e,t){switch(e){case"progress":r.resumableObj.fire("fileProgress",r,t);break;case"error":r.abort(),i=!0,r.chunks=[],r.resumableObj.fire("fileError",r,t);break;case"success":if(i)return;r.resumableObj.fire("fileProgress",r),r.isComplete()&&r.resumableObj.fire("fileSuccess",r,t);break;case"retry":r.resumableObj.fire("fileRetry",r)}};return r.chunks=[],r.abort=function(){var e=0;s.each(r.chunks,function(t){"uploading"==t.status()&&(t.abort(),e++)}),e>0&&r.resumableObj.fire("fileProgress",r)},r.cancel=function(){var e=r.chunks;r.chunks=[],s.each(e,function(e){"uploading"==e.status()&&(e.abort(),r.resumableObj.uploadNextChunk())}),r.resumableObj.removeFile(r),r.resumableObj.fire("fileProgress",r)},r.retry=function(){r.bootstrap();var e=!1;r.resumableObj.on("chunkingComplete",function(){e||r.resumableObj.upload(),e=!0})},r.bootstrap=function(){r.abort(),i=!1,r.chunks=[],r._prevProgress=0;for(var e=r.getOpt("forceChunkSize")?Math.ceil:Math.floor,t=Math.max(e(r.file.size/r.getOpt("chunkSize")),1),n=0;n<t;n++)!function(e){window.setTimeout(function(){r.chunks.push(new h(r.resumableObj,r,e,a)),r.resumableObj.fire("chunkingProgress",r,e/t)},0)}(n);window.setTimeout(function(){r.resumableObj.fire("chunkingComplete",r)},0)},r.progress=function(){if(i)return 1;var e=0,t=!1;return s.each(r.chunks,function(n){"error"==n.status()&&(t=!0),e+=n.progress(!0)}),e=t?1:e>.99999?1:e,e=Math.max(r._prevProgress,e),r._prevProgress=e,e},r.isUploading=function(){var e=!1;return s.each(r.chunks,function(t){if("uploading"==t.status())return e=!0,!1}),e},r.isComplete=function(){var e=!1;return s.each(r.chunks,function(t){var n=t.status();if("pending"==n||"uploading"==n||1===t.preprocessState)return e=!0,!1}),!e},r.pause=function(e){r._pause="undefined"===typeof e?!r._pause:e},r.isPaused=function(){return r._pause},r.resumableObj.fire("chunkingStart",r),r.bootstrap(),this}function h(e,n,a,o){var u=this;u.opts={},u.getOpt=e.getOpt,u.resumableObj=e,u.fileObj=n,u.fileObjSize=n.size,u.fileObjType=n.file.type,u.offset=a,u.callback=o,u.lastProgressCallback=new Date,u.tested=!1,u.retries=0,u.pendingRetry=!1,u.preprocessState=0;var l=u.getOpt("chunkSize");return u.loaded=0,u.startByte=u.offset*l,u.endByte=Math.min(u.fileObjSize,(u.offset+1)*l),u.fileObjSize-u.endByte<l&&!u.getOpt("forceChunkSize")&&(u.endByte=u.fileObjSize),u.xhr=null,u.test=function(){u.xhr=new XMLHttpRequest;var e=function(e){u.tested=!0;var t=u.status();"success"==t?(u.callback(t,u.message()),u.resumableObj.uploadNextChunk()):u.send()};u.xhr.addEventListener("load",e,!1),u.xhr.addEventListener("error",e,!1),u.xhr.addEventListener("timeout",e,!1);var t=[],n=u.getOpt("parameterNamespace"),r=u.getOpt("query");"function"==typeof r&&(r=r(u.fileObj,u)),s.each(r,function(e,r){t.push([encodeURIComponent(n+e),encodeURIComponent(r)].join("="))}),t=t.concat([["chunkNumberParameterName",u.offset+1],["chunkSizeParameterName",u.getOpt("chunkSize")],["currentChunkSizeParameterName",u.endByte-u.startByte],["totalSizeParameterName",u.fileObjSize],["typeParameterName",u.fileObjType],["identifierParameterName",u.fileObj.uniqueIdentifier],["fileNameParameterName",u.fileObj.fileName],["relativePathParameterName",u.fileObj.relativePath],["totalChunksParameterName",u.fileObj.chunks.length]].filter(function(e){return u.getOpt(e[0])}).map(function(e){return[n+u.getOpt(e[0]),encodeURIComponent(e[1])].join("=")})),u.xhr.open(u.getOpt("testMethod"),s.getTarget("test",t)),u.xhr.timeout=u.getOpt("xhrTimeout"),u.xhr.withCredentials=u.getOpt("withCredentials");var i=u.getOpt("headers");"function"===typeof i&&(i=i(u.fileObj,u)),s.each(i,function(e,t){u.xhr.setRequestHeader(e,t)}),u.xhr.send(null)},u.preprocessFinished=function(){u.preprocessState=2,u.send()},u.send=function(){var e=u.getOpt("preprocess");if("function"===typeof e)switch(u.preprocessState){case 0:return u.preprocessState=1,void e(u);case 1:return}if(!u.getOpt("testChunks")||u.tested){u.xhr=new XMLHttpRequest,u.xhr.upload.addEventListener("progress",function(e){new Date-u.lastProgressCallback>1e3*u.getOpt("throttleProgressCallbacks")&&(u.callback("progress"),u.lastProgressCallback=new Date),u.loaded=e.loaded||0},!1),u.loaded=0,u.pendingRetry=!1,u.callback("progress");var n=function(e){var t=u.status();if("success"==t||"error"==t)u.callback(t,u.message()),u.resumableObj.uploadNextChunk();else{u.callback("retry",u.message()),u.abort(),u.retries++;var n=u.getOpt("chunkRetryInterval");void 0!==n?(u.pendingRetry=!0,setTimeout(u.send,n)):u.send()}};u.xhr.addEventListener("load",n,!1),u.xhr.addEventListener("error",n,!1),u.xhr.addEventListener("timeout",n,!1);var a=[["chunkNumberParameterName",u.offset+1],["chunkSizeParameterName",u.getOpt("chunkSize")],["currentChunkSizeParameterName",u.endByte-u.startByte],["totalSizeParameterName",u.fileObjSize],["typeParameterName",u.fileObjType],["identifierParameterName",u.fileObj.uniqueIdentifier],["fileNameParameterName",u.fileObj.fileName],["relativePathParameterName",u.fileObj.relativePath],["totalChunksParameterName",u.fileObj.chunks.length]].filter(function(e){return u.getOpt(e[0])}).reduce(function(e,t){return e[u.getOpt(t[0])]=t[1],e},{}),o=u.getOpt("query");"function"==typeof o&&(o=o(u.fileObj,u)),s.each(o,function(e,t){a[e]=t});var l=u.fileObj.file.slice?"slice":u.fileObj.file.mozSlice?"mozSlice":u.fileObj.file.webkitSlice?"webkitSlice":"slice";console.log("bytes="+u.startByte+"-"+u.endByte);var f=u.fileObj.file[l](u.startByte,u.endByte,u.getOpt("setChunkTypeFromFile")?u.fileObj.file.type:""),c=u.getOpt("keyString"),p=new FileReader;p.readAsArrayBuffer(f),p.onload=function(e){var n=p.result;f=function(e,n){var a=i.createHash("sha256");a.update(e);var s=a.digest(),o=new r.ModeOfOperation.ecb(s),u=t.from(n);return u.length%16!==0&&(u=r.padding.pkcs7.pad(u)),o.encrypt(u)}(c,n);var o=null,l=[],d=u.getOpt("parameterNamespace");if("octet"===u.getOpt("method"))o=f,s.each(a,function(e,t){l.push([encodeURIComponent(d+e),encodeURIComponent(t)].join("="))});else if(o=new FormData,s.each(a,function(e,t){o.append(d+e,t),l.push([encodeURIComponent(d+e),encodeURIComponent(t)].join("="))}),"blob"==u.getOpt("chunkFormat"))o.append(d+u.getOpt("fileParameterName"),f,u.fileObj.fileName);else if("base64"==u.getOpt("chunkFormat")){var h=new FileReader;h.onload=function(e){o.append(d+u.getOpt("fileParameterName"),h.result),u.xhr.send(o)},h.readAsDataURL(f)}var m=s.getTarget("upload",l),g=u.getOpt("uploadMethod");u.xhr.open(g,m),"octet"===u.getOpt("method")&&u.xhr.setRequestHeader("Content-Type","application/octet-stream"),u.xhr.timeout=u.getOpt("xhrTimeout"),u.xhr.withCredentials=u.getOpt("withCredentials");var b=u.getOpt("headers");"function"===typeof b&&(b=b(u.fileObj,u)),s.each(b,function(e,t){u.xhr.setRequestHeader(e,t)}),"blob"==u.getOpt("chunkFormat")&&u.xhr.send(o)}}else u.test()},u.abort=function(){u.xhr&&u.xhr.abort(),u.xhr=null},u.status=function(){return u.pendingRetry?"uploading":u.xhr?u.xhr.readyState<4?"uploading":200==u.xhr.status||201==u.xhr.status?"success":s.contains(u.getOpt("permanentErrors"),u.xhr.status)||u.retries>=u.getOpt("maxChunkRetries")?"error":(u.abort(),"pending"):"pending"},u.message=function(){return u.xhr?u.xhr.responseText:""},u.progress=function(e){"undefined"===typeof e&&(e=!1);var t=e?(u.endByte-u.startByte)/u.fileObjSize:1;if(u.pendingRetry)return 0;switch(u.xhr&&u.xhr.status||(t*=.95),u.status()){case"success":case"error":return 1*t;case"pending":return 0*t;default:return u.loaded/(u.endByte-u.startByte)*t}},this}return a.uploadNextChunk=function(){var e=!1;if(a.getOpt("prioritizeFirstAndLastChunk")&&(s.each(a.files,function(t){return t.chunks.length&&"pending"==t.chunks[0].status()&&0===t.chunks[0].preprocessState?(t.chunks[0].send(),e=!0,!1):t.chunks.length>1&&"pending"==t.chunks[t.chunks.length-1].status()&&0===t.chunks[t.chunks.length-1].preprocessState?(t.chunks[t.chunks.length-1].send(),e=!0,!1):void 0}),e))return!0;if(s.each(a.files,function(t){if(!1===t.isPaused()&&s.each(t.chunks,function(t){if("pending"==t.status()&&0===t.preprocessState)return t.send(),e=!0,!1}),e)return!1}),e)return!0;var t=!1;return s.each(a.files,function(e){if(!e.isComplete())return t=!0,!1}),t||a.fire("complete"),!1},a.assignBrowse=function(e,t){"undefined"==typeof e.length&&(e=[e]),s.each(e,function(e){var n;"INPUT"===e.tagName&&"file"===e.type?n=e:((n=document.createElement("input")).setAttribute("type","file"),n.style.display="none",e.addEventListener("click",function(){n.style.opacity=0,n.style.display="block",n.focus(),n.click(),n.style.display="none"},!1),e.appendChild(n));var r=a.getOpt("maxFiles");"undefined"===typeof r||1!=r?n.setAttribute("multiple","multiple"):n.removeAttribute("multiple"),t?n.setAttribute("webkitdirectory","webkitdirectory"):n.removeAttribute("webkitdirectory");var i=a.getOpt("fileType");"undefined"!==typeof i&&i.length>=1?n.setAttribute("accept",i.map(function(e){return"."+e}).join(",")):n.removeAttribute("accept"),n.addEventListener("change",function(e){p(e.target.files,e),a.getOpt("clearInput")&&(e.target.value="")},!1)})},a.assignDrop=function(e){"undefined"==typeof e.length&&(e=[e]),s.each(e,function(e){e.addEventListener("dragover",u,!1),e.addEventListener("dragenter",u,!1),e.addEventListener("drop",o,!1)})},a.unAssignDrop=function(e){"undefined"==typeof e.length&&(e=[e]),s.each(e,function(e){e.removeEventListener("dragover",u),e.removeEventListener("dragenter",u),e.removeEventListener("drop",o)})},a.isUploading=function(){var e=!1;return s.each(a.files,function(t){if(t.isUploading())return e=!0,!1}),e},a.upload=function(){if(!a.isUploading()){a.fire("uploadStart");for(var e=1;e<=a.getOpt("simultaneousUploads");e++)a.uploadNextChunk()}},a.pause=function(){s.each(a.files,function(e){e.abort()}),a.fire("pause")},a.cancel=function(){a.fire("beforeCancel");for(var e=a.files.length-1;e>=0;e--)a.files[e].cancel();a.fire("cancel")},a.progress=function(){var e=0,t=0;return s.each(a.files,function(n){e+=n.progress()*n.size,t+=n.size}),t>0?e/t:0},a.addFile=function(e,t){p([e],t)},a.addFiles=function(e,t){p(e,t)},a.removeFile=function(e){for(var t=a.files.length-1;t>=0;t--)a.files[t]===e&&a.files.splice(t,1)},a.getFromUniqueIdentifier=function(e){var t=!1;return s.each(a.files,function(n){n.uniqueIdentifier==e&&(t=n)}),t},a.getSize=function(){var e=0;return s.each(a.files,function(t){e+=t.size}),e},a.handleDropEvent=function(e){o(e)},a.handleChangeEvent=function(e){p(e.target.files,e),e.target.value=""},a.updateQuery=function(e){a.opts.query=e},this}}()}).call(this,n(6).Buffer)},830:function(e,t,n){"use strict";var r=n(4),i=n(5),a=n(0),s=n.n(a),o=n(1),u=n.n(o),l=n(3),f=n.n(l),c=n(2),p={tag:c.q,className:u.a.any,cssModule:u.a.object},d=function(e){var t=e.className,n=e.cssModule,a=e.tag,o=Object(i.a)(e,["className","cssModule","tag"]),u=Object(c.m)(f()(t,"list-group-item-heading"),n);return s.a.createElement(a,Object(r.a)({},o,{className:u}))};d.propTypes=p,d.defaultProps={tag:"h5"},t.a=d},831:function(e,t,n){"use strict";var r=n(4),i=n(5),a=n(0),s=n.n(a),o=n(1),u=n.n(o),l=n(3),f=n.n(l),c=n(2),p={tag:c.q,className:u.a.any,cssModule:u.a.object},d=function(e){var t=e.className,n=e.cssModule,a=e.tag,o=Object(i.a)(e,["className","cssModule","tag"]),u=Object(c.m)(f()(t,"list-group-item-text"),n);return s.a.createElement(a,Object(r.a)({},o,{className:u}))};d.propTypes=p,d.defaultProps={tag:"p"},t.a=d}}]);