(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1ROT":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return c}));var r=n("oCYn"),o=n("CMmP"),a=n.n(o),i=n("vDqi");n.n(i).a.create().defaults.withCredentials=!1,r.default.use(a.a);var u=new a.a({locale:"",fallbackLocale:"zh_cn",messages:{}}),c=function(t){}},"5S0l":function(t,e,n){"use strict";(function(t,n){var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var a=((r={})[n.CREATED]=function(e,n){var r,o=this;e.rootGetters,e.dispatch,e.commit;return(r=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t,o)})),function(){var e=r.apply(this,arguments);return new t((function(n,r){return function o(a,i){try{var u=e[a](i),c=u.value}catch(t){return void r(t)}if(!u.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))})()},r),i={load:function(t,e){var n=JSON.parse(atob(sessionStorage.getItem("UserInfo")));for(var r in t)n.hasOwnProperty(r)&&(t[r]=n[r]);return t},set:function(t,e){var n={};for(var r in t)e.hasOwnProperty(r)&&(t[r]=e[r],n[r]=e[r]);return sessionStorage.setItem("UserInfo",btoa(JSON.stringify(n))),t},clear:function(t,e){for(var n in t)Array.isArray(t[n])&&t[n].splice(0),"object"===o(t[n])?t[n]={}:"number"==typeof t[n]?t[n]=0:t[n]="";return t}};e.a={namespaced:!0,state:{no:"",name:"",account:"",quota:0,min_buy:0,max_buy:0,token:"",coin:{},game_coin:[],gifts:[],tables:[]},actions:a,mutations:i,getters:{no:function(t){return t.no},name:function(t){return t.name},account:function(t){return t.account},quota:function(t){return t.quota},min_buy:function(t){return t.min_buy},max_buy:function(t){return t.max_buy},token:function(t){return t.token},coin:function(t){return t.coin},gifts:function(t){return t.gifts},coins:function(t){return t.coins},tables:function(t){return t.tables}}}}).call(this,n("E2g8"),n("JCdI"))},"7bQ4":function(t,e,n){"use strict";(function(t){var r=n("Nlzp"),o=(n("QmAe"),n("K2Fo")),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i={error:{},message:{},loginMessage:{},loading:!1,nowLang:localStorage.getItem(o.a.i18n)||"zh_cn"},u={HANDLE_AJAX:function(e,n){e.getters,e.dispatch,e.commit,e.rootGetters;var o=n.api,i=n.payload,u=void 0===i?{}:i,c=(n.tokenOnly,n.method,n.responseType,a({},u));return Object(r.a)(o,c).then((function(t){return t})).catch((function(e){var n=new Error((e||{}).message||"fail");return t.reject(n)}))},HANDLE_AJAX_LOADING:function(t,e){var n=t.dispatch,r=t.commit,o=e.api,a=e.payload,i=void 0===a?{}:a,u=e.tokenOnly,c=void 0!==u&&u,s=e.method,f=e.responseType;return r("loading",!0),n("HANDLE_AJAX",{api:o,payload:i,loading:!0,tokenOnly:c,method:s,responseType:f}).finally((function(t){return r("loading",!1),t}))}};e.a={namespaced:!0,state:i,actions:u,mutations:{error:function(t,e){t.error=e},message:function(t,e){t.message=e},loginMessage:function(t,e){t.loginMessage=e},loading:function(t,e){t.loading=e}},getters:{error:function(t){return t.error},message:function(t){return t.message},loginMessage:function(t){return t.loginMessage},loading:function(t){return t.loading}}}}).call(this,n("E2g8"))},B6RA:function(t,e,n){"use strict";var r=n("nlxe"),o=n("7bQ4"),a={namespaced:!0,state:{pageLoading:!1},actions:{setLoading:function(t,e){t.getters,t.dispatch;var n=t.commit;t.rootGetters;n("setLoading",!!e)}},mutations:{setLoading:function(t,e){t.pageLoading=e}},getters:{pageLoading:function(t){return t.pageLoading}},modules:{chips:n("dM3J").a}},i={namespaced:!0,state:{pageLoading:!1},actions:{setLoading:function(t,e){t.getters,t.dispatch;var n=t.commit;t.rootGetters;n("setLoading",!!e)}},mutations:{setLoading:function(t,e){t.pageLoading=e}},getters:{pageLoading:function(t){return t.pageLoading}},modules:{header:n("j7Wt").a}},u=n("mWAd"),c=n("ORQg"),s={namespaced:!0,state:{},actions:{},mutations:{},getters:{},modules:{login:u.a,register:c.a}},f=n("5S0l"),l=n("oCYn"),p=n("L2JU");l.default.use(p.a);var m=new p.a.Store({modules:{App:r.a,Common:o.a,Game:a,layout:i,Login:s,UserInfo:f.a},strict:!1});e.a=m},CaA0:function(t,e,n){"use strict";var r=n("L2JU"),o={data:function(){return{}},methods:{changeDocumentTitle:function(t){document.title=t},changeTitleByPlatform:function(){this.changeDocumentTitle("皇家")}},mounted:function(){},updated:function(){"home"===this.$route.name.toLowerCase()&&this.changeTitleByPlatform();var t=document.querySelector("[class*=main__container]");t&&0!=+t.scrollTop&&setTimeout((function(){var e=setInterval((function(){(t.scrollTop-=10)<=0&&clearInterval(e)}),15)}),1e3)},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})({},Object(r.c)("layout",{loading:"pageLoading"}),{platformCode:function(){return this.baseUrl.platformCode}})},a={name:"index",components:{NavHeader:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"KZAA"))},NavFooter:function(){return n.e(12).then(n.bind(null,"zbAR"))},loadingMask:n("xCjN").a},mixins:[o]},i=n("KHd+"),u=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loadingMask",{attrs:{loading:t.loading}}),t._v(" "),n("transition",{ref:"header",attrs:{name:"header",mode:"out-in"}},[t.$route.meta.hasNav?n("NavHeader"):t._e()],1),t._v(" "),n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view",{ref:"main",staticClass:"main__container"})],1),t._v(" "),n("transition",{ref:"footer",attrs:{name:"footer",mode:"out-in"}},[t.$route.meta.hasFoot?n("NavFooter"):t._e()],1)],1)}),[],!1,null,null,null);e.a=u.exports},JCdI:function(t,e,n){"use strict";n.r(e),n.d(e,"CREATED",(function(){return r})),n.d(e,"READ",(function(){return o})),n.d(e,"UPDATED",(function(){return a})),n.d(e,"DELETED",(function(){return i})),n.d(e,"MODIFY",(function(){return u})),n.d(e,"HANDLE_AJAX_LOADING",(function(){return c}));var r="CREATED",o="READ",a="UPDATED",i="DELETED",u="MODIFY",c="Common/HANDLE_AJAX_LOADING"},K2Fo:function(t,e,n){"use strict";e.a={session:"session",messageList:"messageList",userInfo:"userInfo",userConfig:"userConfig",takeCashMenu:"takeCashMenu",rechargeMenu:"rechargeMenu",i18n:"i18n"}},Nlzp:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c}));var r=n("vDqi"),o=n.n(r),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};o.a.defaults.withCredentials=!0;var i,u,c=(i=regeneratorRuntime.mark((function e(n){var r,i,u=n.path,c=n.method,s=n.mainServer,f=n.responseType,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],i=s&&!r.includes(u)?"//"+s+u:""+u,e.next=4,o()(a({method:"get"===c?"get":"post",url:i},"get"===c?{params:{data:l}}:{data:l},f?{responseType:f}:{})).then((function(t){return t.data})).catch((function(e){return t.reject({message:"Gateway Timeout"})}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,void 0)})),u=function(){var e=i.apply(this,arguments);return new t((function(n,r){return function o(a,i){try{var u=e[a](i),c=u.value}catch(t){return void r(t)}if(!u.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))},function(t){return u.apply(this,arguments)})}).call(this,n("E2g8"))},ORQg:function(t,e,n){"use strict";(function(t,r){var o,a=n("TsPW"),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var u=Object(a.a)("register"),c=((o={})[r.CREATED]=function(e,n){var o,a=this,c=(e.rootGetters,e.dispatch);e.commit;return(o=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i({},n),t.next=3,c(r.HANDLE_AJAX_LOADING,{api:{path:u.created},payload:e},{root:!0}).then((function(t){if(1!=+t.code)throw t.message||"不明錯誤";return t}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,a)})),function(){var e=o.apply(this,arguments);return new t((function(n,r){return function o(a,i){try{var u=e[a](i),c=u.value}catch(t){return void r(t)}if(!u.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))})()},o);e.a={namespaced:!0,state:{},actions:c,mutations:{},getters:{}}}).call(this,n("E2g8"),n("JCdI"))},QmAe:function(t,e,n){"use strict";(function(t){n("4X9F"),n("IkEG"),n("Vtdi"),n("FAev"),n("1ROT"),"function"==typeof Symbol&&Symbol.iterator,Object.assign}).call(this,n("JCdI"))},TsPW:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"v1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"post",r=t+"/"+e+"/"||!1;return function(t){return{path:"/api/"+r+t,method:n}}},o=(r("acc/front"),r("game"),r("mobile"),{login:{created:"/api/members/login"},register:{created:"/api/members/registered"},game:{update:"/api/members/changeCoins"}}),a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;if(/(\.|\/)/.test(t)){var n=t.split(/(\.|\/)/).filter((function(t){return!/(\.|\/)/.test(t)}));return n.reduce((function(t,n){return"string"==typeof t?e[t][n]:t[n]}))}return e[t]||e}},Vtdi:function(t,e,n){"use strict";n.r(e);n("vn9c");var r=n("Vl+Z"),o=(n("PfWk"),n("KDDF")),a=(n("DsWx"),n("IatR")),i=(n("w6Z4"),n("rQYt")),u=(n("rB5s"),n("VD6T")),c=(n("X1+7"),n("8lM+")),s=(n("ilju"),n("5B+z")),f=(n("AgnO"),n("fV4+")),l=(n("5+UC"),n("05lO")),p=(n("xm80"),n("Ji/l"),n("sFw1"),n("NO8f"),n("aqI/"),n("Faw5"),n("r1bV"),n("tuSo"),n("nCnK"),n("Y9lz"),n("Tdpu"),n("9AAn"),n("T39b"),n("EK0E"),n("wCsR"),n("3xty"),n("I5cv"),n("iMoV"),n("uhZd"),n("0YWM"),n("694e"),n("LTTk"),n("9rMk"),n("IlFx"),n("xpiv"),n("oZ/O"),n("klPD"),n("knU9"),n("VRzm"),n("ioFf"),n("DW2E"),n("z2o2"),n("mura"),n("Zshi"),n("V/DX"),n("FlsD"),n("mYba"),n("5Pf0"),n("RW0V"),n("JduL"),n("91GP"),n("25dN"),n("/SS/"),n("f3/d"),n("eI33"),n("VpUO"),n("oDIu"),n("FLlr"),n("9VmF"),n("rvZc"),n("L9s1"),n("OEbY"),n("SRfc"),n("pIFo"),n("KKXr"),n("OG14"),n("HEwt"),n("6AQ9"),n("dE+T"),n("dRSK"),n("INYr"),n("bHtr"),n("yt8O"),n("/KAi"),n("fN96"),n("sbF8"),n("7h0T"),n("Ljet"),n("knhD"),n("h/M4"),n("fyVe"),n("U2t9"),n("2atp"),n("+auO"),n("MtdB"),n("Jcmo"),n("nzyx"),n("BC7C"),n("x8ZO"),n("9P93"),n("BJ/l"),n("eHKK"),n("pp/T"),n("CyHz"),n("bBoP"),n("x8Yj"),n("hLT2"),n("Z2Ku"),n("hhXQ"),n("/8Fb"),n("jm62"),n("9XZr"),n("7VC1"),n("R5XZ"),n("Ew+T"),n("rGqo"),n("ls82"),n("oCYn")),m=(n("L2JU"),!1),d=["gesturechange"],h=function(t){return t.preventDefault()},g={name:"app",components:{},mixins:[{watch:{$route:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]}},beforeMount:function(){},mounted:function(){if(!m){var t=d,e=Array.isArray(t),n=0;for(t=e?t:t[Symbol.iterator]();;){var r;if(e){if(n>=t.length)break;r=t[n++]}else{if((n=t.next()).done)break;r=n.value}var o=r;document.body.addEventListener(o,h)}var a=0;document.addEventListener("touchend",(function(t){var e=(new Date).getTime();e-a<=300&&t.preventDefault(),a=e}),!1),m=!m}this.changeDocumentTitle("皇家")},created:function(){},updated:function(){document.querySelector("#splash-container")&&document.querySelector("#splash-container").remove()},methods:{changeDocumentTitle:function(t){document.title=t}},computed:{}}]},v=n("KHd+"),y=Object(v.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("router-view",{staticClass:"wrapper j_flex-column"})}),[],!1,null,null,null).exports,b=n("oYx3"),w=n("B6RA"),A=n("1ROT"),x=(n("FXp9"),n("8OYU"),n("y0MQ"),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}),E={},O=function(t){var e=t.options,n=t.regex,r=t.pattern,o={};return"object"===(void 0===e?"undefined":x(e))?(Object.keys(e).forEach((function(t){o[t.replace(n,r)]=e[t]})),o):"string"==typeof e?e.replace(n,r):new Error("type not a object or a string")},S=function(t){return O({options:t,regex:/([a-z])([A-Z])/g,pattern:function(t,e,n,r,o,a){return e+"_"+n.toLowerCase()}})},L=function(t){return O({options:t,regex:/_([a-zA-Z])/g,pattern:function(t,e,n,r,o,a){return t[1].toUpperCase()}})};E.install=function(t,e){t.prototype.$snakeCase=S,t.prototype.$camelCase=L};var _=E,k={install:function(t,e){t.prototype.$getQueryParams=function(){var t={};if(location.search.substr(1)){var e=location.search.substr(1).split(/&|=/);e.forEach((function(n,r){r%2||(t[n]=e[r+1])}))}return{params:t,searchs:location.search.substr(1)}}()}},D=k,C={install:function(t,e){Object.defineProperty(t.prototype,"$getDevice",{get:function(){var t=window.navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);return{iOS:e,webkit:n,safari:e&&n&&!t.match(/CriOS/i)}}})}};n.d(e,"vue$",(function(){return T})),n.d(e,"vue",(function(){return j}));var P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};if(p.default.config.productionTip=!1,"serviceWorker"in navigator){var R="string"==typeof{NODE_ENV:'"production"',GH_PAGE:"true"}?JSON.parse({NODE_ENV:'"production"',GH_PAGE:"true"}):"object"===P({NODE_ENV:'"production"',GH_PAGE:"true"})?{NODE_ENV:'"production"',GH_PAGE:"true"}:{};window.addEventListener("load",(function(){navigator.serviceWorker.register("/"+("true"===R.GH_PAGE?"baccarat-20200208":"frontend")+"/service-worker.js").then((function(t){})).catch((function(t){}))}))}p.default.use(r.a).use(o.a).use(a.a).use(i.a).use(u.a).use(c.a).use(s.a).use(f.a).use(l.a),p.default.use(_).use(D).use(C);var T=new p.default({el:"#app",router:b.a,store:w.a,i18n:A.b,template:"<App/>",components:{App:y}}),j=T},dM3J:function(t,e,n){"use strict";(function(t){var r=n("TsPW"),o=n("bSnq"),a=n.n(o),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function c(e){return function(){var n=e.apply(this,arguments);return new t((function(e,r){return function o(a,i){try{var u=n[a](i),c=u.value}catch(t){return void r(t)}if(!u.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));e(c)}("next")}))}}Object(r.a)("game");var s={list:["100","200","500"],betted:[]},f={setChips:function(t,e){var n=this,r=(t.getters,t.dispatch,t.commit);t.rootGetters;return c(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Array.isArray(e)&&3===e.length){t.next=5;break}return a.a.fail("請選擇 3 個籌碼。"),t.abrupt("return",!1);case 5:return r("setChips",e),t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t,n)})))()},setBetted:function(t,e){var n=this,r=(t.getters,t.dispatch,t.commit);t.rootGetters;return c(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("object"===(void 0===e?"undefined":u(e))){t.next=4;break}return t.abrupt("return",!1);case 4:e.reset?r("setBetted",{reset:!0}):r("setBetted",{data:i({text:"500",className:"fifth",offsetX:-9999,offsetY:-9999},e)});case 5:return t.abrupt("return",s.betted.length-1);case 6:case"end":return t.stop()}}),t,n)})))()},updateBetted:function(t,e){var n=this,r=(t.getters,t.dispatch,t.commit);t.rootGetters;return c(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("object"===(void 0===e?"undefined":u(e))){t.next=4;break}return t.abrupt("return",!1);case 4:o=i({},e),a=e.index,delete o.index,r("setBetted",{index:a,data:o});case 8:return t.abrupt("return",s.betted.length-1);case 9:case"end":return t.stop()}}),t,n)})))()}},l={setChips:function(t,e){t.list=e},setBetted:function(t,e){e.reset?t.betted.length=0:e.hasOwnProperty("index")?t.betted[e.index]=i({},t.betted[e.index],e.data):t.betted.push(e.data)}};e.a={namespaced:!0,state:s,actions:f,mutations:l,getters:{list:function(t){return t.list},betted:function(t){return t.betted}},modules:{}}}).call(this,n("E2g8"))},j7Wt:function(t,e,n){"use strict";(function(t){var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=((n={})[t.UPDATED]=function(t,e){t.getters,t.dispatch;var n=t.commit;t.rootGetters;"object"===(void 0===e?"undefined":r(e))&&n("set",e)},n);e.a={namespaced:!0,state:{title:"",subTitle:"",type:"",logoPosition:""},actions:o,mutations:{set:function(t,e){for(var n in e)t.hasOwnProperty(n)&&(t[n]=e[n])}},getters:{state:function(t){return t}},modules:{}}}).call(this,n("JCdI"))},mWAd:function(t,e,n){"use strict";(function(t,r){var o,a=n("TsPW"),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var c=Object(a.a)("login"),s=((o={})[r.CREATED]=function(e,n){var o,a=this,s=(e.rootGetters,e.dispatch),f=e.commit;return(o=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u({},n),t.next=3,s(r.HANDLE_AJAX_LOADING,{api:{path:c.created},payload:e},{root:!0}).then((function(t){if(1!=+t.code||"object"!==i(t.message))throw t.message||"不明錯誤";return f("UserInfo/set",t.message,{root:!0}),t}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,a)})),function(){var e=o.apply(this,arguments);return new t((function(n,r){return function o(a,i){try{var u=e[a](i),c=u.value}catch(t){return void r(t)}if(!u.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))})()},o);e.a={namespaced:!0,state:{},actions:s,mutations:{},getters:{}}}).call(this,n("E2g8"),n("JCdI"))},nlxe:function(t,e,n){"use strict";(function(t,r){var o;n("TsPW"),n("K2Fo");var a=((o={})[r.READ]=function(e){var n,r=this;e.getters,e.dispatch,e.commit;return(n=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t,r)})),function(){var e=n.apply(this,arguments);return new t((function(n,r){return function o(a,i){try{var u=e[a](i),c=u.value}catch(t){return void r(t)}if(!u.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));n(c)}("next")}))})()},o);e.a={namespaced:!0,state:{list:[],pagination:{page:1,totalPage:1,limit:20}},actions:a,mutations:{},getters:{list:function(t){return t.list},pagination:function(t){return t.pagination}}}}).call(this,n("E2g8"),n("JCdI"))},oYx3:function(t,e,n){"use strict";(function(t){var r=n("oCYn"),o=n("jE9Z"),a=n("u0V/"),i=n("B6RA");n("K2Fo");function u(e){return function(){var n=e.apply(this,arguments);return new t((function(e,r){return function o(a,i){try{var u=n[a](i),c=u.value}catch(t){return void r(t)}if(!u.done)return t.resolve(c).then((function(t){o("next",t)}),(function(t){o("throw",t)}));e(c)}("next")}))}}r.default.use(o.a);c=u(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},location.search.substr(1)&&location.search.substr(1).split("&").forEach((function(t,n){var r=t.split("="),o=r[0],a=r[1];e[o||n]=a||""})),t.abrupt("return",e);case 3:case"end":return t.stop()}}),t,void 0)})));var c,s,f,l,p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=(e||(document||{}).body||{}).classList;if(n){Array.isArray(t)||(t=[t]);var r=t,o=Array.isArray(r),a=0;for(r=o?r:r[Symbol.iterator]();;){var i;if(o){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var u=i;n.contains[u]||n.add(u)}}},m=function(t,e){var n=(e||(document||{}).body||{}).classList;if(n){Array.isArray(t)||(t=[t]);var r=t,o=Array.isArray(r),a=0;for(r=o?r:r[Symbol.iterator]();;){var i;if(o){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var u=i;n.contains[u]&&n.remove(u)}}},d=(s=u(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},"true"===window.sessionStorage.debug?p("debug"):m("debug"),"Login"===e.name||"Register"===e.name?p(["crown_bg_base","crown_bg_login","j_text--body"]):(m("crown_bg_login"),p(["crown_bg_base","j_text--body"])),t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,void 0)}))),function(t,e){return s.apply(this,arguments)}),h=(f=u(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.a&&i.a.commit&&i.a.commit("UserInfo/load"),r();case 2:case"end":return t.stop()}}),t,void 0)}))),function(t,e,n){return f.apply(this,arguments)}),g=new o.a(a.a);g.beforeEach((l=u(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.a.dispatch&&i.a.dispatch("layout/setLoading",!0),t.next=3,d(e);case 3:t.sent,h(e,n,r);case 5:case"end":return t.stop()}}),t,void 0)}))),function(t,e,n){return l.apply(this,arguments)})),g.afterEach((function(t,e){i.a.dispatch&&i.a.dispatch("layout/setLoading",!1)})),e.a=g}).call(this,n("E2g8"))},slT8:function(t,e,n){"use strict";var r=n("tkjB");n.n(r).a},tkjB:function(t,e,n){},"u0V/":function(t,e,n){"use strict";var r=n("CaA0"),o=n("B6RA"),a=function(){return window.matchMedia("(display-mode: standalone)").matches};e.a={mode:"hash",base:"/crown-baccarat",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/failure",name:"failure",component:function(t){return n.e(8).then(function(){return t(n("jp0L"))}.bind(null,n)).catch(n.oe)}},{path:"/",component:r.a,redirect:function(t){return a()?(o.a.getters.UserInfo||{}).token?{name:"Home"}:{name:"Login"}:{name:"PWA"}},children:[{path:"login",name:"Login",meta:{hasFoot:!1},component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){return t(n("0Sby"))}.bind(null,n)).catch(n.oe)}},{path:"register",name:"Register",meta:{hasFoot:!1},component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){return t(n("z5hO"))}.bind(null,n)).catch(n.oe)}},{path:"Home",name:"Home",meta:{hasNav:!0,hasFoot:!1},component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){return t(n("TNam"))}.bind(null,n)).catch(n.oe)}},{path:"Home/lobby",name:"HomeLobby",meta:{hasNav:!0,hasFoot:!1},component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){return t(n("orzg"))}.bind(null,n)).catch(n.oe)}},{path:"Setting",name:"Setting",params:!0,meta:{hasNav:!0,hasFoot:!1},redirect:function(t){return{name:"SettingMain",params:{option:t.params.option||"menu"}}}},{path:"Setting/:option",name:"SettingMain",props:!0,meta:{hasNav:!0,hasFoot:!1},component:function(t){return Promise.all([n.e(0),n.e(11),n.e(6)]).then(function(){return t(n("X6zr"))}.bind(null,n)).catch(n.oe)}},{path:"game",name:"Game",params:!0,meta:{hasNav:!0,hasFoot:!1},component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("tYzw"))}.bind(null,n)).catch(n.oe)}},{path:"game/chips",name:"GameChips",params:!0,meta:{hasNav:!0,hasFoot:!1},component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("/KFf"))}.bind(null,n)).catch(n.oe)}},{path:"PWA",name:"PWA",params:!0,meta:{hasNav:!1,hasFoot:!1},beforeEnter:function(t,e,n){a()&&n((o.a.getters["Config/userInfo"]||{}).token?{name:"Home"}:{name:"Login"});n()},component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){return t(n("dtGZ"))}.bind(null,n)).catch(n.oe)}}]},{path:"*",redirect:{name:"failure"}}]}},xCjN:function(t,e,n){"use strict";var r={name:"loading",props:{loading:{default:!1},selector:{type:[String,Function],default:"body"}},data:function(){return{popup:{}}},created:function(){var t=this;this.$nextTick((function(){t.popup=t.$refs.popup&&t.$refs.popup.$el||{}}))},methods:{getPopup:function(){var t=this;this.$nextTick((function(){t.popup=t.$refs.popup&&t.$refs.popup.$el||{}}))}},computed:{getLoading:{get:function(){return Boolean(this.loading)},set:function(t){return t}},showLoading:function(){return Object.keys(this.popup).length},getSize:function(){var t=this.popup.clientWidth||50,e=this.popup.clientHeight||50;return t<e?t:e}}},o=(n("slT8"),n("KHd+")),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-popup",{ref:"popup",staticStyle:{overflow:"hidden",background:"transparent",height:"50%",width:"50%"},attrs:{"get-container":t.selector,"close-on-click-overlay":!1,"close-on-popstate":!0},on:{opened:t.getPopup},model:{value:t.getLoading,callback:function(e){t.getLoading=e},expression:"getLoading"}},[t.showLoading?n("van-loading",{staticStyle:{overflow:"hidden","text-align":"center"},attrs:{size:t.getSize,vertical:"",color:"#1989fa"}},[t._t("default")],2):n("div",[t._v(".")])],1)],1)}),[],!1,null,"7e4a52f0",null);e.a=a.exports},y0MQ:function(t,e,n){}},[["Vtdi",9,10]]]);