(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{852:function(e,t,a){"use strict";var n=a(4),l=a(0),r=a.n(l),c=a(1),i=a.n(c),o=a(234),s={children:i.a.node},u=function(e){return r.a.createElement(o.a,Object(n.a)({group:!0},e))};u.propTypes=s,t.a=u},926:function(e,t,a){"use strict";a.r(t);var n=a(21),l=a(22),r=a(24),c=a(23),i=a(25),o=a(0),s=a.n(o),u=a(169),h=a(827),m=a(828),d=a(229),f=a(232),E=a(228),g=a(66),p=a(67),k=a(34),b=a(65),v=a(77),I=a(132),y=a(129),O=a(130),w=a(168),A=a(131),L=a(852),S=a(399),B=a(397),D=a(12),T=a(68),j=a(214),x=a(79),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).page=1,a.state={accountInfo:null,list:[],dropdownOpen:new Array(2).fill(!1),filterOption:"",filterIdx:0,filterValue:"",page:1,danger:!1,showAccount:!1,blockInfo:null},a.filterOptions=["(\u5168\u90e8)","(\u624b\u7eed\u8d39)","(\u91d1\u989d)","(\u673a\u5668\u4eba)","(\u9ad8\u5ea6)"],a.filterMsg=["","(\u8f93\u5165\u603b\u624b\u7eed\u8d39)","(\u8f93\u5165\u4ea4\u6613\u603b\u91d1\u989d)","(\u8f93\u5165\u673a\u5668\u4eba\u8d26\u53f7)","(\u8f38\u5165\u5340\u584a\u9ad8\u5ea6)"],a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadLoadBlockList(1,this.state.filterIdx)}},{key:"loadLoadBlockList",value:function(e,t,a){var n=Object(D.getShareHost)()+"/btb?action=blockList&page="+e+"&filterIdx="+t+"&filterValue="+a;x.concat(n,function(e,t,a){if(!e)try{var n=JSON.parse(a);this.setState({list:n})}catch(l){}}.bind(this))}},{key:"prePage",value:function(){this.state.page>1&&(this.state.page--,this.loadLoadBlockList(this.state.page,this.state.filterIdx,this.state.filterValue))}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger})}},{key:"loadBlockInfo",value:function(e){this.toggleDanger();var t=Object(D.getShareHost)()+"/btb?action=block&height="+e;x.concat(t,function(e,t,a){if(!e){var n=JSON.parse(a);n.ok&&this.setState({blockInfo:n})}}.bind(this))}},{key:"nextPage",value:function(){this.state.page++,this.loadLoadBlockList(this.state.page,this.state.filterIdx,this.state.filterValue)}},{key:"filterBlocks",value:function(){this.loadLoadBlockList(this.state.page,this.state.filterIdx,this.state.filterValue)}},{key:"renderBlockList",value:function(){var e=this.state.list;return e?e.map(function(e){var t=new Date;t.setTime(e.time);var a=t.toLocaleString();return s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(j.a,{height:e.height})),s.a.createElement("td",null,s.a.createElement(T.a,{rsId:e.generatorId})),s.a.createElement("td",null,e.amount," \u79ef\u5206"),s.a.createElement("td",null,e.fee," \u79ef\u5206"),s.a.createElement("td",null,a))}):null}},{key:"renderAccountTransactionItem",value:function(){return this.state.accountInfo.transactions.map(function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,Object(D.getTransactionName)(e.type)),s.a.createElement("td",null,e.from),s.a.createElement("td",null,e.to),s.a.createElement("td",null,e.amount," \u79ef\u5206"),s.a.createElement("td",null,e.fee," \u79ef\u5206"),s.a.createElement("td",null,e.height))})}},{key:"renderAccountTransactions",value:function(){return this.state.accountInfo.transactions?s.a.createElement(u.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"\u4ea4\u6613\u7c7b\u578b"),s.a.createElement("th",null,"\u53d1\u8d77\u8d26\u6237"),s.a.createElement("th",null,"\u63a5\u6536\u8d26\u6237"),s.a.createElement("th",null,"\u91d1\u989d"),s.a.createElement("th",null,"\u624b\u7eed\u8d39"),s.a.createElement("th",null,"\u533a\u5757\u9ad8\u5ea6"))),s.a.createElement("tbody",null,this.renderAccountTransactionItem())):null}},{key:"rederAccountInfoDialog",value:function(){return this.state.accountInfo?s.a.createElement(I.a,{isOpen:this.state.showAccount,toggle:this.toggleAccount.bind(this),className:"modal-info "+this.props.className},s.a.createElement(y.a,{toggle:this.toggleAccount.bind(this)},"\u8d26\u6237\u660e\u7ec6"),s.a.createElement(O.a,null,s.a.createElement("p",null,"\u8d26\u6237ID: ",this.state.accountInfo.rsId),s.a.createElement("p",null,"\u8d26\u6237\u516c\u94a5: ",this.state.accountInfo.pk),s.a.createElement("p",null,"\u8d26\u6237\u4f59\u989d: ",this.state.accountInfo.balance),s.a.createElement("p",null,"\u4ea4\u6613\u5217\u8868:"),this.renderAccountTransactions()),s.a.createElement(w.a,null,s.a.createElement(k.a,{color:"danger",onClick:this.toggleAccount.bind(this)},"OK"))):null}},{key:"toggleAccount",value:function(){this.setState({showAccount:!this.state.showAccount})}},{key:"showAccountInfo",value:function(e){this.toggleAccount();var t=Object(D.getShareHost)()+"/btb?action=account&rsIdOrPkHex="+e;x.concat(t,function(e,t,a){if(!e){var n=JSON.parse(a);this.setState({accountInfo:n})}}.bind(this))}},{key:"toggle",value:function(e){var t=this.state.dropdownOpen.map(function(t,a){return a===e&&!t});this.setState({dropdownOpen:t})}},{key:"setFilter",value:function(e){this.setState({page:1,filterIdx:e,filterOption:this.filterMsg[e]})}},{key:"upateFilterValue",value:function(e){if(e&&e.target){var t=e.target.value;this.setState({filterValue:t})}}},{key:"renderFilterOptions",value:function(){var e=this;return this.filterOptions.map(function(t,a){return s.a.createElement(A.a,{onClick:function(t){e.setFilter(a)}},t)})}},{key:"rederBlockInfoDialog",value:function(){return this.state.blockInfo?s.a.createElement(I.a,{isOpen:this.state.danger,toggle:this.toggleDanger.bind(this),className:"modal-info "+this.props.className},s.a.createElement(y.a,{toggle:this.toggleDanger.bind(this)},"\u4ea4\u6613\u533a\u5757\u660e\u7ec6"),s.a.createElement(O.a,null,s.a.createElement("p",null,"\u533a\u5757ID: ",this.state.blockInfo.block.id),s.a.createElement("p",null,"\u533a\u5757\u9ad8\u5ea6: ",this.state.blockInfo.block.height),s.a.createElement("p",null,"\u4ea4\u6613\u5217\u8868:"),this.renderBlockTransactions()),s.a.createElement(w.a,null,s.a.createElement(k.a,{color:"danger",onClick:this.toggleDanger.bind(this)},"OK"))):null}},{key:"renderList",value:function(){var e=this;return this.state.list?s.a.createElement(h.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,null,s.a.createElement(f.a,null,s.a.createElement(b.a,null,s.a.createElement(L.a,{isOpen:this.state.dropdownOpen[1],toggle:function(){e.toggle(1)}},s.a.createElement(S.a,{caret:!0},"(\u8fc7\u6ee4)"),s.a.createElement(B.a,null,this.renderFilterOptions())),s.a.createElement(v.a,{placeholder:this.state.filterOption,onChange:this.upateFilterValue.bind(this)}),s.a.createElement(k.a,{color:"primary",onClick:function(t){return e.filterBlocks()}},s.a.createElement("i",{className:"fa fa-search"}),"\xa0")),this.rederBlockInfoDialog(),s.a.createElement(u.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"\u533a\u5757\u9ad8\u5ea6"),s.a.createElement("th",null,"\u673a\u5668\u4eba"),s.a.createElement("th",null,"\u91d1\u989d"),s.a.createElement("th",null,"\u624b\u7eed\u8d39"),s.a.createElement("th",null,"\u65f6\u95f4"))),s.a.createElement("tbody",null,this.renderBlockList(),this.rederAccountInfoDialog())),s.a.createElement("nav",null,s.a.createElement(E.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,{previous:!0,tag:"button",onClick:function(t){e.prePage()}},"\u4e0a\u4e00\u9875")),s.a.createElement(g.a,{active:!0},s.a.createElement(p.a,{tag:"button"},this.state.page)),s.a.createElement(g.a,null,s.a.createElement(p.a,{next:!0,tag:"button",onClick:function(t){e.nextPage()}},"\u4e0b\u4e00\u9875")))))))):null}},{key:"renderTransactionItem",value:function(){return this.state.blockInfo.transactions.map(function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,Object(D.getTransactionName)(e.type)),s.a.createElement("td",null,e.from),s.a.createElement("td",null,e.to),s.a.createElement("td",null,e.amount," \u79ef\u5206"),s.a.createElement("td",null,e.fee," \u79ef\u5206"),s.a.createElement("td",null,e.height))})}},{key:"renderBlockTransactions",value:function(){return this.state.blockInfo.transactions?s.a.createElement(u.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"\u4ea4\u6613\u7c7b\u578b"),s.a.createElement("th",null,"\u53d1\u8d77\u8d26\u6237"),s.a.createElement("th",null,"\u63a5\u6536\u8d26\u6237"),s.a.createElement("th",null,"\u91d1\u989d"),s.a.createElement("th",null,"\u624b\u7eed\u8d39"),s.a.createElement("th",null,"\u533a\u5757\u9ad8\u5ea6"))),s.a.createElement("tbody",null,this.renderTransactionItem())):null}},{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},this.renderList())}}]),t}(o.Component);t.default=N}}]);