(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/+uq":function(t,e,n){t.exports=n.p+"default/img/chips/10W.png"},"/KFf":function(t,e,n){"use strict";n.r(e);n("TsPW");var i=n("73KO"),s=n.n(i),a=n("0cTy"),c=n.n(a),o=n("uYhx"),u=n.n(o),r=n("xCjN"),M=(n("L2JU"),n("Htub")),l={name:"chips",components:{loadingMask:r.a,vanButton:s.a,vanImage:c.a,vanLoading:u.a},mixins:[M.a]},N=n("KHd+"),g={name:"chips",components:{chipsContent:Object(N.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["game","j_flex-column-stretch",{loading:t.imageLoading&&!1}]},[n("div",{style:{height:"50px"}}),t._v(" "),n("div",{staticClass:"game-wrapper j_flex-column",style:{paddingLeft:"10px"}},[n("div",{staticClass:"game-chips-list crown_scroll j_flex-column-around"},[t._l([0,1,2],(function(e){return[n("div",{key:e,staticClass:"j_flex-around"},[t._l(t.chips.slice(3*e,3*e+3),(function(i,s){return[n("div",{key:e+"_"+s,staticClass:"j_flex-column-around",on:{click:function(t){i.lock=!i.lock}}},[n("van-image",{staticClass:"game-chips-item",attrs:{src:t.getSrc(i),width:50,"error-icon":"question-o"}},[n("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),n("span",{style:{textAlign:"center",color:"burlywood"},domProps:{textContent:t._s(i.text)}})],1)]}))],2),t._v(" "),n("span",{key:"_"+e,staticClass:"game-chips-item",style:{marginLeft:"5%",transform:"translateY(-100%)"}})]}))],2)]),t._v(" "),n("div",{staticClass:"j_flex-center-around",style:{height:"80px"}},[n("van-button",{staticClass:"game-button",attrs:{size:"small",hairline:!0,type:"warning",text:"取消"},on:{click:function(e){return t.$router.replace({name:"Game"})}}}),t._v(" "),n("van-button",{staticClass:"game-button",attrs:{size:"small",hairline:!0,type:"warning",text:"確定"},on:{click:t.onConfirm}})],1),t._v(" "),n("div",{style:{height:"80px"}}),t._v(" "),n("router-link",{attrs:{to:{name:"Game"},replace:""}},[n("van-icon",{staticClass:"crown_back",attrs:{name:"share"}})],1)],1)}),[],!1,null,null,null).exports},mounted:function(){},updated:function(){},computed:{}},p=Object(N.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("chipsContent")}),[],!1,null,null,null);e.default=p.exports},"/U5B":function(t,e,n){t.exports=n.p+"default/img/chips/5W-1.png"},0:function(t,e){},1:function(t,e){},2:function(t,e){},"5HGK":function(t,e,n){t.exports=n.p+"default/img/chips/100.png"},9434:function(t,e,n){t.exports=n.p+"default/img/chips/5W.png"},"9aQa":function(t,e,n){t.exports=n.p+"default/img/chips/10W-p.png"},"9fz9":function(t,e,n){t.exports=n.p+"default/img/chips/500-1.png"},A346:function(t,e,n){"use strict";(function(t,i){var s=n("L2JU"),a=n("bSnq"),c=n.n(a),o=n("IUEU"),u=n.n(o),r=n("8OJ3"),M=(n("gFX4"),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function N(e){return function(){var n=e.apply(this,arguments);return new t((function(e,i){return function s(a,c){try{var o=n[a](c),u=o.value}catch(t){return void i(t)}if(!o.done)return t.resolve(u).then((function(t){s("next",t)}),(function(t){s("throw",t)}));e(u)}("next")}))}}r.a.options.hls.overrideNative=!0;var g="string"==typeof{NODE_ENV:'"production"',GH_PAGE:"true"}?JSON.parse({NODE_ENV:'"production"',GH_PAGE:"true"}):"object"===l({NODE_ENV:'"production"',GH_PAGE:"true"})?{NODE_ENV:'"production"',GH_PAGE:"true"}:{},p=function(t){for(var e=0,n=0;t;)e+=t.offsetLeft,n+=t.offsetTop,t=t.parentElement;return{offsetX:e,offsetY:n}},L=void 0;e.a={data:function(){return{imageNum:6,imageLoading:!0,activedChip:"",dealed:[],floping:0,offsetX:0,offsetY:0,chipsVisible:!0,player:null}},mounted:function(){var t=this;return N(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.gg=t,t.changeTitle({logoPosition:"right",type:"info"}),L&&clearInterval(L),L=setInterval((function(){t.dealed.length<4?(t.dealed.push(52*Math.random()|0),t.dealed.push(52*Math.random()|0),t.dealed.push(52*Math.random()|0),t.dealed.push(52*Math.random()|0)):4===t.dealed.length?t.floping<2?t.floping=2:t.floping<4?t.floping=4:t.dealed.push(52*Math.random()|0):5===t.dealed.length?t.floping<5?t.floping=5:t.dealed.push(52*Math.random()|0):6===t.dealed.length&&t.floping<6?t.floping=6:(t.dealed.length=0,t.setBetted({reset:!0}),t.$forceUpdate(),t.floping=0)}),2e3),t.player=Object(r.a)("#video",{html5:{hls:{overrideNative:!1},nativeVideoTracks:!0,nativeAudioTracks:!0,nativeTextTracks:!0}}),setTimeout((function(){t.submitPlayFunction((function(){t.player.play()})),setTimeout((function(){t.$refs.video.paused&&u.a.confirm({title:"請授權播放遊戲影片",customClass:"msg",confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(e){t.player.play&&t.player.play()})).catch((function(e){t.$router.replace({name:"HomeLobby"})}))}),1e3)}),2e3);case 6:case"end":return e.stop()}}),e,t)})))()},beforeDestroy:function(){this.player.stop&&this.player.stop(),this.player.dispose&&this.player.dispose(),this.submitPlayFunction({reset:!0}),this.player=null},methods:M({},Object(s.b)("layout/header",{changeTitle:i.UPDATED}),Object(s.b)("Game",{submitPlayFunction:"submitPlayFunction"}),Object(s.b)("Game/chips",{setBetted:"setBetted",updateBetted:"updateBetted"}),{onVideo:function(t){t.preventDefault()},imageLoaded:function(){--this.imageNum<=0&&(this.imageLoading=!1)},onClick:function(t){t||c.a.fail("敬請期待")},onCancel:function(){var t=this;this.setBetted({reset:!0}),this.$nextTick((function(){t.$forceUpdate()}))},getSrc:function(t){var e=t.text,i=t.actived,s=void 0!==i&&i;return n("KNZE")("./"+e+(s?"":"-1")+".png")},onBet:function(t,e){var n=this;return N(regeneratorRuntime.mark((function e(){var i,s,a,o,u,r,l,N,g,L;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.$refs.table,i=["first","second","third","fourth","fifth"][t],s=n.betted.filter((function(t){return t.className===i})).length,a=n.$refs.main.clientHeight,o=.4*a+.2*a*(t<3?.15:.62)-5*s,u=[22,50,75,32,68][t],r=n.chipsList.findIndex((function(t){return t===n.activedChip})),l=n.$refs.money,(N=p(l)).offsetX=[30,45,60][r],!n.activedChip){e.next=18;break}return g=M({text:n.activedChip,className:i},N),e.next=14,n.setBetted(g);case 14:L=e.sent,setTimeout((function(){n.updateBetted({index:L,offsetX:u,offsetY:o}),n.$forceUpdate()}),10),e.next=19;break;case 18:c.a.fail("請選擇籌碼");case 19:case"end":return e.stop()}}),e,n)})))()},showChips:function(){this.chipsVisible=!0},hideChips:function(){this.chipsVisible=!1},getCard:function(t){return[1,2,3,4,5,6,7,8,9,"T","J","Q","K"][t%13]}}),computed:M({},Object(s.c)("layout/header",{headerState:"state"}),Object(s.c)("Game/chips",{chipsList:"list",betted:"betted"}),{money:function(){return n("LY47")},pokers:function(){return{diamonds:n("ISw6"),clubs:n("PNJK"),hearts:n("KXGv"),spades:n("fUJ+")}},videoSrc:function(){return("production"===g.NODE_ENV?"true"===g.GH_PAGE?"/baccarat-20200208/":"/frontend/":"/static/")+"main.mp4"},touchEvents:function(){return{touchstart:this.hideChips,mousedown:this.hideChips,touchend:this.showChips,mouseup:this.showChips}},totalBetted:function(){var t=0,e=this.betted,n=Array.isArray(e),i=0;for(e=n?e:e[Symbol.iterator]();;){var s;if(n){if(i>=e.length)break;s=e[i++]}else{if((i=e.next()).done)break;s=i.value}var a=s.text;a.replace("K","000"),a.replace("W","0000"),t+=+a}return t}})}}).call(this,n("E2g8"),n("JCdI"))},BDII:function(t,e,n){t.exports=n.p+"default/img/chips/1W-1.png"},C88S:function(t,e,n){t.exports=n.p+"default/img/chips/1K.png"},CalG:function(t,e,n){t.exports=n.p+"default/img/chips/5W-p.png"},HBfd:function(t,e,n){t.exports=n.p+"default/img/chips/100-1.png"},Htub:function(t,e,n){"use strict";(function(t,i){var s=n("L2JU"),a=n("bSnq"),c=n.n(a),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function u(e){return function(){var n=e.apply(this,arguments);return new t((function(e,i){return function s(a,c){try{var o=n[a](c),u=o.value}catch(t){return void i(t)}if(!o.done)return t.resolve(u).then((function(t){s("next",t)}),(function(t){s("throw",t)}));e(u)}("next")}))}}e.a={data:function(){return{imageNum:6,imageLoading:!0,chips:[{text:"100",lock:!0},{text:"200",lock:!0},{text:"500",lock:!0},{text:"1K",lock:!0},{text:"2K",lock:!0},{text:"5K",lock:!0},{text:"1W",lock:!0},{text:"5W",lock:!0},{text:"10W",lock:!0}]}},mounted:function(){var t=this;return u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in window.gg=t,t.changeTitle({logoPosition:"right",type:"info"}),t.chips)t.chipsList.includes(t.chips[n].text)&&(t.chips[n].lock=!1);case 3:case"end":return e.stop()}}),e,t)})))()},methods:o({},Object(s.b)("layout/header",{changeTitle:i.UPDATED}),Object(s.b)("Game/chips",{setChips:"setChips"}),{imageLoaded:function(){--this.imageNum<=0&&(this.imageLoading=!1)},onClick:function(t){t||c.a.fail("敬請期待")},getSrc:function(t){var e=t.text,i=t.lock;return n("KNZE")("./"+e+(i?"-p":"")+".png")},onConfirm:function(){var t=this;return u(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i in n=[],t.chips)t.chips[i].lock||n.push(t.chips[i].text);if(3===n.length){e.next=6;break}c.a.fail("請選擇 3 個籌碼。"),e.next=10;break;case 6:return e.next=8,t.setChips(n);case 8:if(!e.sent){e.next=10;break}t.$router.replace({name:"Game"});case 10:case"end":return e.stop()}}),e,t)})))()}}),computed:o({},Object(s.c)("layout/header",{headerState:"state"}),Object(s.c)("Game/chips",{chipsList:"list"}),{money:function(){return n("LY47")}})}}).call(this,n("E2g8"),n("JCdI"))},ISw6:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFNzAwMjA7IiBwb2ludHM9IjQ1Mi4xNywyNTYgMjU2LDUxMiA1OS44MywyNTYgMjU2LDAgIi8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojOTkwMDEzOyIgcG9pbnRzPSI0NTIuMTcsMjU2IDI1Niw1MTIgMjU2LDAgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},JE0n:function(t,e,n){t.exports=n.p+"default/img/chips/5K-1.png"},KNZE:function(t,e,n){var i={"./100-1.png":"HBfd","./100-p.png":"Yd7v","./100.png":"5HGK","./10W-1.png":"tnvi","./10W-p.png":"9aQa","./10W.png":"/+uq","./1K-1.png":"kNHt","./1K-p.png":"m+1d","./1K.png":"C88S","./1W-1.png":"BDII","./1W-p.png":"riYp","./1W.png":"ZShA","./200-1.png":"zL7d","./200-p.png":"OC4G","./200.png":"oUAL","./2K-1.png":"ciUX","./2K-p.png":"oj3V","./2K.png":"fW/r","./500-1.png":"9fz9","./500-p.png":"lVlZ","./500.png":"WTA2","./5K-1.png":"JE0n","./5K-p.png":"mHw5","./5K.png":"T7u/","./5W-1.png":"/U5B","./5W-p.png":"CalG","./5W.png":"9434"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="KNZE"},KXGv:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFNzAwMjA7IiBkPSJNNDkxLjQ2OCwyNTAuNzg0Yy0yMS43MzQsMzkuNzQtNTUuNDQ1LDcxLjQ2MS04OC4wNDcsMTAyLjEzMw0KCWMtNS43NDgsNS40MDktMTEuMTY3LDEwLjUwNy0xNi41NjYsMTUuNjg2Yy0yMC4yMjUsMTkuNDI1LTQwLjY5OSwzOC4xNC02MC41MDQsNTYuMjU1Yy0xOS42NzUsMTcuOTc1LTQwLjAwOSwzNi41Ny01OS45NjQsNTUuNzM1DQoJTDI1Niw0OTAuNTcxbC0xMC4zODctOS45NzdjLTE5Ljk1NS0xOS4xNjUtNDAuMjg5LTM3Ljc2LTU5Ljk2NC01NS43MzVjLTE5LjgwNS0xOC4xMTUtNDAuMjc5LTM2LjgzLTYwLjUwNC01Ni4yNTUNCgljLTUuMzk5LTUuMTc5LTEwLjgxNy0xMC4yNzctMTYuNTY2LTE1LjY4NmMtMzIuNjAxLTMwLjY3Mi02Ni4zMTMtNjIuMzk0LTg4LjA0Ny0xMDIuMTMzQy03LjU3LDE5OS4zOTctNi43OTEsMTQyLjM0MiwyMi42NjIsOTQuMjI1DQoJYzM2LjU0LTU5LjY2NCw4Ny40NTctNzIuNTExLDEyMy43MzctNzIuNzkxYzMwLjk3Mi0wLjI0LDYxLjYwNCw4LjY1OCw4OC42MTcsMjUuNjkzTDI1Niw2MC4yNzRsMjEuMDI0LTEzLjE2Nw0KCWMyNi45NzMtMTcuMDE2LDU3LjYzNS0yNS44NzMsODguNTc3LTI1LjY3M2MzNi4yOCwwLjI4LDg3LjE5NywxMy4xMjcsMTIzLjczNyw3Mi43OTENCglDNTE4Ljc5MSwxNDIuMzQyLDUxOS41NzEsMTk5LjM5Nyw0OTEuNDY4LDI1MC43ODR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOTkwMDEzOyIgZD0iTTQ5MS40NjgsMjUwLjc4NGMtMjEuNzM0LDM5Ljc0LTU1LjQ0NSw3MS40NjEtODguMDQ3LDEwMi4xMzMNCgljLTUuNzQ4LDUuNDA5LTExLjE2NywxMC41MDctMTYuNTY2LDE1LjY4NmMtMjAuMjI1LDE5LjQyNS00MC42OTksMzguMTQtNjAuNTA0LDU2LjI1NWMtMTkuNjc1LDE3Ljk3NS00MC4wMDksMzYuNTctNTkuOTY0LDU1LjczNQ0KCUwyNTYsNDkwLjU3MVY2MC4yNzRsMjEuMDI0LTEzLjE2N2MyNi45NzMtMTcuMDE2LDU3LjYzNS0yNS44NzMsODguNTc3LTI1LjY3M2MzNi4yOCwwLjI4LDg3LjE5NywxMy4xMjcsMTIzLjczNyw3Mi43OTENCglDNTE4Ljc5MSwxNDIuMzQyLDUxOS41NzEsMTk5LjM5Nyw0OTEuNDY4LDI1MC43ODR6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},LY47:function(t,e,n){t.exports=n.p+"default/img/game/game-money.png"},OC4G:function(t,e,n){t.exports=n.p+"default/img/chips/200-p.png"},PNJK:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQzNBNDE7IiBkPSJNNDk3Ljk0NiwzNDMuNjFjLTYuMjYsMzYuMzEtMjUuNzIsNjguMTMtNTQuNzgsODkuNjJjLTI5LjI3LDIxLjYzLTY0Ljc1LDMwLjItOTkuOSwyNC4xNA0KCWMtMTEuOTQtMi4wNi0yMy40NS01Ljc3LTM0LjI0LTExYzMuMzcsMTAuODMsNy4yNSwxNywxMC42LDE5LjM2bDYuMzcsNC40OFY1MTJoLTE0MHYtNDEuNzlsNi4zNy00LjQ4DQoJYzMuMzUtMi4zNiw3LjIzLTguNTMsMTAuNi0xOS4zNmMtMTAuNzksNS4yMy0yMi4zLDguOTQtMzQuMjQsMTFjLTM1LjE1LDYuMDYtNzAuNjMtMi41MS05OS45LTI0LjE0DQoJYy0yOS4wNi0yMS40OS00OC41Mi01My4zMS01NC43Ny04OS42MmMtNi4yNi0zNi4zMSwxLjQxLTcyLjgxLDIxLjYtMTAyLjc5YzIwLjMzLTMwLjE4LDUwLjg5LTUwLjE0LDg2LjA1LTU2LjINCgljMi4wOC0wLjM2LDQuMTctMC42Nyw2LjI2LTAuOTJjLTYuODItMTUuOTUtMTAuMzYtMzMuMDgtMTAuMzYtNTAuNmMwLTczLjM5LDYyLjA4LTEzMy4xLDEzOC4zOS0xMzMuMXMxMzguMzksNTkuNzEsMTM4LjM5LDEzMy4xDQoJYzAsMTcuNTItMy41NCwzNC42Ni0xMC4zNiw1MC42YzIuMSwwLjI1LDQuMTgsMC41Niw2LjI2LDAuOTJjMzUuMTYsNi4wNiw2NS43MiwyNi4wMiw4Ni4wNSw1Ni4yDQoJQzQ5Ni41MjYsMjcwLjgsNTA0LjIwNiwzMDcuMyw0OTcuOTQ2LDM0My42MXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxNzE3MUE7IiBkPSJNNDk3Ljk0NiwzNDMuNjFjLTYuMjYsMzYuMzEtMjUuNzIsNjguMTMtNTQuNzgsODkuNjJjLTI5LjI3LDIxLjYzLTY0Ljc1LDMwLjItOTkuOSwyNC4xNA0KCWMtMTEuOTQtMi4wNi0yMy40NS01Ljc3LTM0LjI0LTExYzMuMzcsMTAuODMsNy4yNSwxNywxMC42LDE5LjM2bDYuMzcsNC40OFY1MTJoLTcwVjBjNzYuMzEsMCwxMzguMzksNTkuNzEsMTM4LjM5LDEzMy4xDQoJYzAsMTcuNTItMy41NCwzNC42Ni0xMC4zNiw1MC42YzIuMSwwLjI1LDQuMTgsMC41Niw2LjI2LDAuOTJjMzUuMTYsNi4wNiw2NS43MiwyNi4wMiw4Ni4wNSw1Ni4yDQoJQzQ5Ni41MjYsMjcwLjgsNTA0LjIwNiwzMDcuMyw0OTcuOTQ2LDM0My42MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},"T7u/":function(t,e,n){t.exports=n.p+"default/img/chips/5K.png"},WTA2:function(t,e,n){t.exports=n.p+"default/img/chips/500.png"},Yd7v:function(t,e,n){t.exports=n.p+"default/img/chips/100-p.png"},ZShA:function(t,e,n){t.exports=n.p+"default/img/chips/1W.png"},ciUX:function(t,e,n){t.exports=n.p+"default/img/chips/2K-1.png"},"fUJ+":function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQzNBNDE7IiBkPSJNNDc4LjU1OSwzNzguMzY2Yy0zNC45MzIsNTcuMDQ2LTgzLjYyMiw2OS4zMzMtMTE4LjMxNCw2OS41OTMNCgljLTE4LjAzMSwwLjE0LTM2LjA4My0zLjAxMi01My4yNjMtOS4xOTZjMy43NzIsMTUuNTksOC42MTUsMjQuMDc1LDEyLjY4OCwyNi45MzdsNi4zNzQsNC40ODNWNTEySDE4NS45NTZ2LTQxLjgxNmw2LjM3NC00LjQ4Mw0KCWM0LjA3My0yLjg2Miw4LjkxNi0xMS4zNDcsMTIuNjg4LTI2LjkzN2MtMTcuMTgxLDYuMTg0LTM1LjIyMiw5LjMzNi01My4yNjMsOS4xOTZjLTM0LjY5Mi0wLjI2LTgzLjM4Mi0xMi41NDgtMTE4LjMxNC02OS41OTMNCglDNS4yODMsMzMyLjM3OCw0LjU0MywyNzcuODM0LDMxLjQsMjI4LjczM2MyMC43MjMtMzcuOTA0LDUyLjgzMy02OC4xMTMsODMuODgyLTk3LjMzMWM1LjQ2My01LjEzMywxMC42MTctOS45ODYsMTUuNzUtMTQuOTA5DQoJYzE5LjI0Mi0xOC40ODIsMzguNzI0LTM2LjI5Myw1Ny41NTYtNTMuNTEzYzE4LjcwMi0xNy4xMDEsMzguMDQ0LTM0Ljc4Miw1Ny4wMTYtNTMuMDAzTDI1NiwwbDEwLjM5Nyw5Ljk3Ng0KCWMxOC45NzIsMTguMjIxLDM4LjMxNCwzNS45MDIsNTcuMDE2LDUzLjAwM2MxOC44MzIsMTcuMjIxLDM4LjMxNCwzNS4wMzIsNTcuNTU2LDUzLjUxM2M1LjEzMyw0LjkyMywxMC4yODYsOS43NzYsMTUuNzUsMTQuOTA5DQoJYzMxLjA0OSwyOS4yMTgsNjMuMTU5LDU5LjQyNyw4My44ODIsOTcuMzMxQzUwNy40NTcsMjc3LjgzNCw1MDYuNzE3LDMzMi4zNzgsNDc4LjU1OSwzNzguMzY2eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE3MTcxQTsiIGQ9Ik00NzguNTU5LDM3OC4zNjZjLTM0LjkzMiw1Ny4wNDYtODMuNjIyLDY5LjMzMy0xMTguMzE0LDY5LjU5Mw0KCWMtMTguMDMxLDAuMTQtMzYuMDgzLTMuMDEyLTUzLjI2My05LjE5NmMzLjc3MiwxNS41OSw4LjYxNSwyNC4wNzUsMTIuNjg4LDI2LjkzN2w2LjM3NCw0LjQ4M1Y1MTJIMjU2VjBsMTAuMzk3LDkuOTc2DQoJYzE4Ljk3MiwxOC4yMjEsMzguMzE0LDM1LjkwMiw1Ny4wMTYsNTMuMDAzYzE4LjgzMiwxNy4yMjEsMzguMzE0LDM1LjAzMiw1Ny41NTYsNTMuNTEzYzUuMTMzLDQuOTIzLDEwLjI4Niw5Ljc3NiwxNS43NSwxNC45MDkNCgljMzEuMDQ5LDI5LjIxOCw2My4xNTksNTkuNDI3LDgzLjg4Miw5Ny4zMzFDNTA3LjQ1NywyNzcuODM0LDUwNi43MTcsMzMyLjM3OCw0NzguNTU5LDM3OC4zNjZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},"fW/r":function(t,e,n){t.exports=n.p+"default/img/chips/2K.png"},kNHt:function(t,e,n){t.exports=n.p+"default/img/chips/1K-1.png"},lVlZ:function(t,e,n){t.exports=n.p+"default/img/chips/500-p.png"},"m+1d":function(t,e,n){t.exports=n.p+"default/img/chips/1K-p.png"},mHw5:function(t,e,n){t.exports=n.p+"default/img/chips/5K-p.png"},oUAL:function(t,e,n){t.exports=n.p+"default/img/chips/200.png"},oj3V:function(t,e,n){t.exports=n.p+"default/img/chips/2K-p.png"},riYp:function(t,e,n){t.exports=n.p+"default/img/chips/1W-p.png"},tYzw:function(t,e,n){"use strict";n.r(e);n("TsPW");var i=n("73KO"),s=n.n(i),a=n("0cTy"),c=n.n(a),o=n("uYhx"),u=n.n(o),r=n("xCjN"),M=(n("L2JU"),n("A346")),l=n("7BsA"),N=n.n(l),g={name:"game",components:{loadingMask:r.a,vanButton:s.a,vanImage:c.a,vanLoading:u.a,countTo:N.a},mixins:[M.a]},p=n("KHd+"),L={name:"Game",components:{gameContent:Object(p.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"main",class:["game","j_flex-column-stretch",{loading:t.imageLoading&&!1}]},[n("div",{staticClass:"game-video"},[n("video",{ref:"video",style:{width:"100%",height:"",minHeight:"50px"},attrs:{id:"video",autoplay:!0,playsinline:0,loop:""},on:{contextmenu:t.onVideo}},[n("source",{attrs:{src:t.videoSrc,type:"video/mp4"}})])]),t._v(" "),n("div",{ref:"table",staticClass:"game-table"},[n("div",{staticClass:"game-table-sheet j_flex-column-around-stretch"},[n("div",{staticClass:"game-table-col j_flex-stretch"},[n("div",{staticClass:"game-table-item j_flex-center-stretch-around",on:{click:function(e){return t.onBet(0,e)}}},[n("span",{staticClass:"sub_text",domProps:{textContent:t._s("閒對")}}),t._v(" "),n("span",{staticClass:"num_text",domProps:{textContent:t._s("1:11")}})]),t._v(" "),n("div",{staticClass:"game-table-item j_flex-center-stretch-around",on:{click:function(e){return t.onBet(1,e)}}},[n("span",{staticClass:"sub_text",domProps:{textContent:t._s("和")}}),t._v(" "),n("span",{staticClass:"num_text",domProps:{textContent:t._s("1:8")}})]),t._v(" "),n("div",{staticClass:"game-table-item j_flex-center-stretch-around",on:{click:function(e){return t.onBet(2,e)}}},[n("span",{staticClass:"sub_text",domProps:{textContent:t._s("莊對")}}),t._v(" "),n("span",{staticClass:"num_text",domProps:{textContent:t._s("1:11")}})])]),t._v(" "),n("div",{staticClass:"game-table-col j_flex-stretch"},[n("div",{staticClass:"game-table-item j_flex-center-stretch-around",on:{click:function(e){return t.onBet(3,e)}}},[n("div",[n("span",{staticClass:"main_text player",domProps:{textContent:t._s("閒")}})]),t._v(" "),n("span",{staticClass:"num_text",domProps:{textContent:t._s("1:1")}}),t._v(" "),n("span",{staticClass:"blocker"})]),t._v(" "),n("div",{staticClass:"game-table-item j_flex-center-stretch-around",on:{click:function(e){return t.onBet(4,e)}}},[n("span",{staticClass:"blocker"}),t._v(" "),n("span",{staticClass:"num_text",domProps:{textContent:t._s("1:0.95")}}),t._v(" "),n("div",[n("span",{staticClass:"main_text bookmaker",domProps:{textContent:t._s("莊")}})])])])])]),t._v(" "),n("div",{ref:"money",staticClass:"game-money j_flex-center-around"},[t.betted.length?[n("van-button",{staticClass:"game-button",attrs:{size:"small",hairline:!0,type:"warning",text:"取消下注"},on:{click:t.onCancel}})]:[n("router-link",{attrs:{to:{name:"GameChips"},relpace:""}},[n("van-button",{staticClass:"game-button",attrs:{size:"small",hairline:!0,type:"warning",text:"更換籌碼"},on:{click:function(t){}}})],1)],t._v(" "),t._l(t.chipsList,(function(e){return n("van-image",{key:e,ref:"chips",refInFor:!0,style:{transform:t.activedChip===e?"":"translateY(25%)"},attrs:{src:t.getSrc({text:e,actived:t.activedChip===e}),width:40,"error-icon":"question-o"},on:{click:function(n){t.activedChip=e}}},[n("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1)})),t._v(" "),n("div",{staticClass:"j_flex-center"},[n("van-image",{attrs:{src:t.money,width:25,"error-icon":"question-o"}},[n("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),n("count-to",{ref:"counts",staticClass:"num_text",attrs:{startVal:0,endVal:t.totalBetted,decimals:3,suffix:" $",duration:1500}})],1)],2),t._v(" "),n("div",{staticClass:"game-wrapper j_flex"},[n("div",{staticClass:"j_flex-column-around"},[n("div",{staticClass:"j_flex"},[n("span",{staticClass:"main_text bookmaker",domProps:{textContent:t._s("莊")}})]),t._v(" "),n("div",{staticClass:"j_flex"},[n("span",{staticClass:"main_text player",domProps:{textContent:t._s("閒")}})]),t._v(" "),n("div",{staticClass:"j_flex"},[n("span",{staticClass:"main_text draw",domProps:{textContent:t._s("和")}})])]),t._v(" "),n("div",{staticClass:"game-sheet j_flex"},t._l(50,(function(e){return n("div",{key:e,staticClass:"game-column j_flex-column"},t._l(10,(function(t){return n("div",{key:t,staticClass:"game-block"},[n("div",{class:["game-ball",t<5?e%2?"red":"blue":""]})])})),0)})),0)]),t._v(" "),t._l(t.betted,(function(e,i){var s=e.text,a=e.offsetX,c=e.offsetY,o=e.className;return n("van-image",{directives:[{name:"show",rawName:"v-show",value:t.chipsVisible,expression:"chipsVisible"}],key:"0_"+i,class:["game-table-chip",o],style:{left:a+"%",top:c+"px"},attrs:{src:t.getSrc({text:s}),width:"8vw","error-icon":"question-o"}},[n("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1)})),t._v(" "),t._l(t.dealed,(function(e,i){return n("div",{key:"card_"+i,class:["game-table-cards",["first","second","third","fourth","fifth","sixth"][i],{floping:i<t.floping}]},[n("van-image",{attrs:{src:t.pokers[["spades","clubs","hearts","diamonds"][e/13|0]]}}),t._v(" "),n("span",{class:["cards-text",{red:e>25}],domProps:{textContent:t._s(t.getCard(e))}})],1)})),t._v(" "),t._l(t.pokers,(function(t,e){return n("van-image",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:"poker_"+e,ref:e,refInFor:!0,attrs:{src:t}})})),t._v(" "),n("router-link",{attrs:{to:{name:"HomeLobby"},replace:""}},[n("van-icon",{staticClass:"crown_back",attrs:{name:"share"}})],1)],2)}),[],!1,null,null,null).exports},mounted:function(){},updated:function(){},computed:{}},j=Object(p.a)(L,(function(){var t=this.$createElement;return(this._self._c||t)("gameContent")}),[],!1,null,null,null);e.default=j.exports},tnvi:function(t,e,n){t.exports=n.p+"default/img/chips/10W-1.png"},zL7d:function(t,e,n){t.exports=n.p+"default/img/chips/200-1.png"}}]);