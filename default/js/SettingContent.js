(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3hCR":function(t,n,e){t.exports=e.p+"default/img/setting/setup-exchange.png"},GNPb:function(t,n,e){"use strict";(function(t,a){var o=e("L2JU"),i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};function r(n){return function(){var e=n.apply(this,arguments);return new t((function(n,a){return function o(i,r){try{var s=e[i](r),c=s.value}catch(t){return void a(t)}if(!s.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))}}n.a={data:function(){return{days:[{text:"今天",day:0},{text:"本周",day:6},{text:"本月",day:29}],active:"",cacheList:[],computeSize:45,remain:10}},mounted:function(){var t=this;return r(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:window.hs=t,t.changeTitle({logoPosition:"left",type:"text",subTitle:"遊戲設定"}),t.onChange();case 3:case"end":return n.stop()}}),n,t)})))()},methods:i({},Object(o.b)("Login",{mockAPI:a.CREATED}),Object(o.b)("layout/header",{changeTitle:a.UPDATED}),{onChange:function(t,n){var e=this;return r(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=(e.$refs.scroll||{}).$el)&&(n.scrollTop=0),t.next=4,e.mockAPI();case 4:e.cacheList=[].concat(new Array(20).fill("").map((function(t){return{}}))),e.doUpdate();case 6:case"end":return t.stop()}}),t,e)})))()},toBottom:function(){this.getList()},onscroll:function(t,n){var e=n.offset,a=n.offsetAll;n.start,n.end;a-e<350&&this.getList()},getList:function(){var t=this;return r(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.loading){n.next=4;break}return n.next=3,t.mockAPI();case 3:t.cacheList=[].concat(t.cacheList,new Array(20).fill("").map((function(t){return{}})));case 4:t.doUpdate();case 5:case"end":return n.stop()}}),n,t)})))()},doUpdate:function(){var t=this,n=(this.$refs.scroll||{}).$el,e=this.$refs.cell;Array.isArray(e)&&(e=e[0]),n&&e&&(this.computeSize=e.clientHeight||45,this.remain=n.clientHeight/this.computeSize+2|0),setTimeout((function(){t.$forceUpdate()}),0)}}),computed:i({},Object(o.c)("layout/header",{headerState:"state"}),Object(o.c)("Common",{loading:"loading"}),{character:function(){return e("sZGK")},images:function(){return[{src:e("p6oW"),name:"HomeLobby"},{src:e("eYwx")},{src:e("Ighz")}]}})}}).call(this,e("E2g8"),e("JCdI"))},Ighz:function(t,n,e){t.exports=e.p+"default/img/home/Baccarat-03.png"},NoGu:function(t,n,e){t.exports=e.p+"default/img/setting/setup-money.png"},RnL9:function(t,n,e){t.exports=e.p+"default/img/image/sign-people.png"},VHdb:function(t,n,e){"use strict";var a=[],o=["focusin","focus"],i=["focusout","blur"];n.a={beforeDestroy:function(){var t=document.body||document.querySelector("body");t.classList.contains("body-height-fix")&&t.classList.remove("body-height-fix"),a.length=0},methods:{onFocusChanged:function(t){var n=t.target||{},e=t.type||"",r=a.find((function(t){return t===n}));o.includes(e)&&!r?a.push(n):i.includes(e)&&r&&a.splice(a.findIndex((function(t){return t===n})),1);var s=document.body||document.querySelector("body");s.classList.contains("body-height-fix")||s.classList.add("body-height-fix"),setTimeout((function(){s.classList.contains("body-height-fix")&&s.classList.remove("body-height-fix"),a.length}),10)}},computed:{inputEvents:function(){return{focusin:this.onFocusChanged,focus:this.onFocusChanged,focusout:this.onFocusChanged,blur:this.onFocusChanged}}}}},X6zr:function(t,n,e){"use strict";e.r(n);e("TsPW");var a=e("0cTy"),o=e.n(a),i=e("uYhx"),r=e.n(i),s=e("xCjN"),c=(e("L2JU"),e("bOG6")),l={name:"Setting",components:{loadingMask:s.a,vanImage:o.a,vanLoading:r.a},mixins:[c.a]},u=e("KHd+"),g=Object(u.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"setting"},[e("loadingMask",{attrs:{loading:t.imageLoading}}),t._v(" "),e("div",{class:["setting-wrapper",{loading:t.imageLoading}]},[e("van-image",{staticClass:"setting-logo",attrs:{width:200,src:t.character},on:{load:t.imageLoaded}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("div",{staticClass:"setting-list j_flex-column-center-around"},[e("div",{ref:"info",class:["setting-info","j_flex-center-wrap",{crown_scroll:!0}]},[t._l(t.images,(function(n,a){var o=n.src,i=n.text,r=n.name,s=n.option;return[e("router-link",{key:a,staticClass:"setting-link j_flex-column-center-around",attrs:{to:Object.assign({},{name:r},s?{params:{option:s}}:{})}},[e("van-image",{staticClass:"setting-icon",attrs:{src:o,"error-icon":"question-o"},on:{click:function(n){return t.onClick(r)},load:t.imageLoaded}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("span",{domProps:{textContent:t._s(i)}})],1)]}))],2)])],1),t._v(" "),e("router-link",{attrs:{to:{name:"Home"},replace:""}},[e("van-icon",{staticClass:"crown_back",attrs:{name:"share"}})],1)],1)}),[],!1,null,null,null).exports,d=e("73KO"),f=e.n(d),p=e("rGE7"),m={name:"recharge",components:{loadingMask:s.a,vanButton:f.a,vanImage:o.a,vanLoading:r.a},mixins:[p.a]},h=Object(u.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"setting"},[e("div",{staticClass:"setting-wrapper"},[e("van-image",{staticClass:"setting-logo",attrs:{width:200,src:t.character}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("van-image",{staticClass:"setting-logo",attrs:{width:200,src:t.character}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("div",{staticClass:"setting-list j_flex-column-center-around"},[e("div",{staticClass:"setting-term j_flex-center-between"},[e("van-image",{staticClass:"setting-icon",attrs:{src:t.people,"error-icon":"question-o"},on:{click:function(n){return t.onClick(t.name)}}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("span",{staticClass:"setting-text",domProps:{textContent:t._s(t.nickName)}}),t._v(" "),e("div",{staticClass:"blocker"})],1),t._v(" "),e("div",{staticClass:"setting-term j_flex-center-between"},[e("van-image",{staticClass:"setting-icon amount",attrs:{src:t.amountIcon,"error-icon":"question-o"},on:{click:function(n){return t.onClick(t.name)}}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("van-field",t._g({staticClass:"setting-input",attrs:{"error-message":"",type:"digit",pattern:"\\d*",placeholder:"請輸入金額"},model:{value:t.amount,callback:function(n){t.amount=n},expression:"amount"}},t.inputEvents)),t._v(" "),e("div",{staticClass:"blocker"})],1),t._v(" "),e("div",{staticClass:"setting-term j_flex-center-between"},[e("van-image",{staticClass:"setting-icon amount",attrs:{src:t.cardIcon,"error-icon":"question-o"},on:{click:function(n){return t.onClick(t.name)}}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("van-field",{staticClass:"setting-input select",attrs:{placeholder:t.path,"right-icon":"arrow-down","error-message":"",type:"number",disabled:!0},on:{click:t.openSelect,input:function(t){},focus:function(t){}},model:{value:t.path,callback:function(n){t.path=n},expression:"path"}}),t._v(" "),e("van-button",{class:"",attrs:{round:"",size:"mini",hairline:!0,type:"warning",text:"確認"},on:{click:t.onClick}})],1),t._v(" "),e("div",{staticClass:"setting-info j_flex-column crown_scroll"},t._l(t.textList,(function(n,a){return e("span",{key:a,staticClass:"recharge-detail",domProps:{textContent:t._s(n)}})})),0)])],1),t._v(" "),e("router-link",{attrs:{to:{name:"Setting"},replace:""}},[e("van-icon",{staticClass:"crown_back",attrs:{name:"share"}})],1),t._v(" "),e("van-popup",{attrs:{"get-container":"body",position:"bottom","close-on-popstate":!0},model:{value:t.showSelect,callback:function(n){t.showSelect=n},expression:"showSelect"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.columns,"confirm-button-text":"確定","cancel-button-text":"取消"},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1),t._v(" "),e("loadingMask",{attrs:{loading:t.loading}})],1)}),[],!1,null,null,null).exports,v=e("h2rI"),x=e("7BsA"),C=e.n(x),y={name:"exchange",components:{loadingMask:s.a,vanButton:f.a,vanImage:o.a,vanLoading:r.a,countTo:C.a},mixins:[v.a]},b=Object(u.a)(y,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"setting"},[e("div",{staticClass:"setting-wrapper"},[e("van-image",{staticClass:"setting-logo",attrs:{width:200,src:t.character}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("div",{staticClass:"setting-list j_flex-column-center-around"},[e("div",{staticClass:"setting-term j_flex-center-between"},[e("van-image",{staticClass:"setting-icon amount",attrs:{src:t.amountIcon,"error-icon":"question-o"},on:{click:function(n){return t.onClick(t.name)}}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("count-to",{ref:"counts",staticClass:"setting-text",attrs:{startVal:0,endVal:t.quota,decimals:0,suffix:" $",duration:t.duration}}),t._v(" "),e("div",{staticClass:"blocker"})],1),t._v(" "),e("div",{ref:"info",class:["setting-info","j_flex-center-wrap",{crown_scroll:t.showScroll}]},[t._l(t.rewards,(function(n,a){return[e("router-link",{key:a,staticClass:"setting-link j_flex-column-center-around",attrs:{to:{}}},[e("van-image",{staticClass:"setting-icon",attrs:{src:t.money,"error-icon":"question-o"}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("span",{domProps:{textContent:t._s(n.title)}}),t._v(" "),e("count-to",{ref:"counts",refInFor:!0,staticClass:"setting-text",attrs:{startVal:0,endVal:n.point,decimals:0,suffix:" 點",duration:t.duration}})],1)]}))],2),t._v(" "),e("div",{style:{height:"20px"}}),t._v(" "),e("div",{staticClass:"setting-term j_flex-center-around"},[e("van-button",{staticClass:"exchange-button",attrs:{round:"",size:"normal",hairline:!1,type:"warning",text:"我要兌換"},on:{click:function(t){}}})],1)])],1),t._v(" "),e("router-link",{attrs:{to:{name:"Setting"},replace:""}},[e("van-icon",{staticClass:"crown_back",attrs:{name:"share"}})],1)],1)}),[],!1,null,null,null).exports,_=e("pFEv"),w=e.n(_),k=e("Tuh1"),j=e.n(k),L=e("LZKq"),O=e.n(L),S=e("icGI"),I=e.n(S),P=e("GNPb"),z={name:"history",components:{loadingMask:s.a,vanCell:w.a,vanImage:o.a,vanLoading:r.a,vanTab:j.a,vanTabs:O.a,virtualList:I.a},mixins:[P.a]},T={name:"Setting",components:{settingContent:g,rechargeContent:h,exchangeContent:b,historyContent:Object(u.a)(z,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"setting"},[e("div",{staticClass:"setting-wrapper"},[e("van-image",{staticClass:"setting-logo",attrs:{width:200,src:t.character}},[e("van-loading",{attrs:{slot:"loading",type:"circular",size:"50%"},slot:"loading"})],1),t._v(" "),e("div",{staticClass:"setting-list history j_flex-column-center-around"},[e("div",{staticClass:"setting-term j_flex-center-between"},[e("van-tabs",{staticClass:"setting-tabs",attrs:{type:"card"},on:{change:t.onChange},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},t._l(t.days,(function(t,n){var a=t.text;t.day;return e("van-tab",{key:n,attrs:{title:a}})})),1)],1),t._v(" "),e("virtualList",{ref:"scroll",class:["setting-info","virtual-list",{crown_scroll:!0}],style:{height:"100%",width:"100%",paddingBottom:t.computeSize/2+"px"},attrs:{size:t.computeSize,remain:t.remain,tobottom:t.toBottom,onscroll:t.onscroll}},[e("van-cell",[e("span",{attrs:{slot:"icon"},domProps:{textContent:t._s("輪數")},slot:"icon"}),t._v(" "),e("div",{staticClass:"j_flex-center-around",attrs:{slot:"title"},slot:"title"},t._l(["局數","門","壓分"],(function(n){return e("span",{key:n,domProps:{textContent:t._s(n)}})})),0),t._v(" "),e("span",{attrs:{slot:"right-icon"},domProps:{textContent:t._s("勝負")},slot:"right-icon"})]),t._v(" "),t.cacheList.length>0?t._l(t.cacheList,(function(n,a){return e("van-cell",{key:a,ref:"cell",refInFor:!0,class:[],on:{click:function(t){}}},[e("span",{attrs:{slot:"icon"},domProps:{textContent:t._s(a)},slot:"icon"}),t._v(" "),e("div",{staticClass:"j_flex-center-around",attrs:{slot:"title"},slot:"title"},t._l(["局數"+a,"門"+a,"壓分"+a],(function(n){return e("span",{key:n,domProps:{textContent:t._s(n)}})})),0),t._v(" "),e("span",{attrs:{slot:"right-icon"},domProps:{textContent:t._s(a)},slot:"right-icon"})])})):e("div",{staticClass:"no_data"})],2)],1)],1),t._v(" "),e("router-link",{attrs:{to:{name:"Setting"},replace:""}},[e("van-icon",{staticClass:"crown_back",attrs:{name:"share"}})],1),t._v(" "),e("loadingMask",{attrs:{loading:t.loading}})],1)}),[],!1,null,null,null).exports},mounted:function(){},updated:function(){},computed:{content:function(){return{menu:"settingContent",recharge:"rechargeContent",exchange:"exchangeContent",history:"historyContent"}[(this.$route.params.option||"").toLowerCase()]||"settingContent"}}},E=Object(u.a)(T,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition-group",{attrs:{name:"van-fade"}},["settingContent"===t.content?e("settingContent",{key:"SettingContent"}):t._e(),t._v(" "),"rechargeContent"===t.content?e("rechargeContent",{key:"RechargeContent"}):t._e(),t._v(" "),"exchangeContent"===t.content?e("exchangeContent",{key:"ExchangeContent"}):t._e(),t._v(" "),"historyContent"===t.content?e("historyContent",{key:"HistoryContent"}):t._e()],1)}),[],!1,null,null,null);n.default=E.exports},bOG6:function(t,n,e){"use strict";(function(t,a){var o=e("L2JU"),i=e("bSnq"),r=e.n(i),s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};n.a={data:function(){return{imageNum:6,imageLoading:!0}},mounted:function(){var n,e=this;return(n=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.ss=e,e.changeTitle({logoPosition:"left",type:"text",subTitle:"遊戲設定"});case 2:case"end":return t.stop()}}),t,e)})),function(){var e=n.apply(this,arguments);return new t((function(n,a){return function o(i,r){try{var s=e[i](r),c=s.value}catch(t){return void a(t)}if(!s.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))})()},methods:s({},Object(o.b)("layout/header",{changeTitle:a.UPDATED}),{imageLoaded:function(){--this.imageNum<=0&&(this.imageLoading=!1)},onClick:function(t){t||r.a.fail("敬請期待")}}),computed:s({},Object(o.c)("layout/header",{headerState:"state"}),{character:function(){return e("sZGK")},images:function(){return[{src:e("miHe"),text:"儲值",name:"SettingMain",option:"recharge"},{src:e("3hCR"),text:"兌換",name:"SettingMain",option:"exchange"},{src:e("kXEl"),text:"歷史注單",name:"SettingMain",option:"history"},{src:e("z3Mf"),text:"玩法規則"},{src:e("uH1+"),text:"聯絡客服"}]}})}}).call(this,e("E2g8"),e("JCdI"))},eYwx:function(t,n,e){t.exports=e.p+"default/img/home/Baccarat-02.png"},gf0F:function(t,n,e){t.exports=e.p+"default/img/setting/setup-card.png"},h2rI:function(t,n,e){"use strict";(function(t,a){var o=e("L2JU"),i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};n.a={data:function(){return{duration:1500,showScroll:!0}},mounted:function(){var n,e=this;return(n=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.ee=e,e.changeTitle({logoPosition:"left",type:"text",subTitle:"遊戲設定"});case 2:case"end":return t.stop()}}),t,e)})),function(){var e=n.apply(this,arguments);return new t((function(n,a){return function o(i,r){try{var s=e[i](r),c=s.value}catch(t){return void a(t)}if(!s.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))})()},updated:function(){},methods:i({},Object(o.b)("layout/header",{changeTitle:a.UPDATED})),computed:i({},Object(o.c)("layout/header",{headerState:"state"}),Object(o.c)("UserInfo",{rewards:"gifts",quota:"quota"}),{people:function(){return e("RnL9")},character:function(){return e("sZGK")},money:function(){return e("NoGu")},amountIcon:function(){return e("z582")},images:function(){return[{src:e("p6oW"),name:"HomeLobby"},{src:e("eYwx")},{src:e("Ighz")}]}})}}).call(this,e("E2g8"),e("JCdI"))},kXEl:function(t,n,e){t.exports=e.p+"default/img/setting/setup-history.png"},miHe:function(t,n,e){t.exports=e.p+"default/img/setting/setup-recharge.png"},p6oW:function(t,n,e){t.exports=e.p+"default/img/home/Baccarat-01.png"},rGE7:function(t,n,e){"use strict";(function(t,a){var o=e("L2JU"),i=e("VHdb"),r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};function s(n){return function(){var e=n.apply(this,arguments);return new t((function(n,a){return function o(i,r){try{var s=e[i](r),c=s.value}catch(t){return void a(t)}if(!s.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))}}n.a={data:function(){return{amount:"",path:"付款方式",showSelect:!1,textList:[]}},mounted:function(){var t=this;return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.changeTitle({logoPosition:"left",type:"text",subTitle:"遊戲儲值"});case 1:case"end":return n.stop()}}),n,t)})))()},mixins:[i.a],methods:r({},Object(o.b)("Login",{mockAPI:a.CREATED}),Object(o.b)("layout/header",{changeTitle:a.UPDATED}),{onClick:function(t){var n=this;return s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.mockAPI();case 2:n.textList=["訂單成立時間：","訂單編號：","賣家名稱：","運送方式：","付款方式：","訂單金額：","訂單操作："];case 3:case"end":return t.stop()}}),t,n)})))()},openSelect:function(){this.showSelect=!0},onCancel:function(){this.showSelect=!1},onConfirm:function(t){var n=t.text;this.path=n,this.showSelect=!1}}),computed:r({},Object(o.c)("layout/header",{headerState:"state"}),Object(o.c)("Common",{loading:"loading"}),Object(o.c)("UserInfo",{quota:"quota",nickName:"name"}),{character:function(){return e("sZGK")},people:function(){return e("RnL9")},amountIcon:function(){return e("z582")},cardIcon:function(){return e("gf0F")},columns:function(){return[{text:"123"},{text:"123"},{text:"123"}]}})}}).call(this,e("E2g8"),e("JCdI"))},sZGK:function(t,n,e){t.exports=e.p+"default/img/setting/setup-character.png"},"uH1+":function(t,n,e){t.exports=e.p+"default/img/image/sign-service.png"},z3Mf:function(t,n,e){t.exports=e.p+"default/img/setting/setup-rule.png"},z582:function(t,n,e){t.exports=e.p+"default/img/setting/setup-amount.png"}}]);