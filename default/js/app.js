(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1ROT":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var r=n("oCYn"),o=n("CMmP"),a=n.n(o),i=n("vDqi");n.n(i).a.create().defaults.withCredentials=!1,r.default.use(a.a);var s=new a.a({locale:"",fallbackLocale:"zh_cn",messages:{}}),c=function(e){}},"7bQ4":function(e,t,n){"use strict";(function(e){var r=n("Nlzp"),o=n("QmAe"),a=n("K2Fo"),i={error:{},message:{},loginMessage:{},loading:!1,nowLang:localStorage.getItem(a.a.i18n)||"zh_cn"},s={HANDLE_AJAX:function(t,n){t.getters,t.dispatch,t.commit,t.rootGetters;var a=n.api,i=(n.payload,n.tokenOnly),s=(n.method,n.responseType,i?"":Object(o.a)({}));return Object(r.a)(a,s).then((function(e){return e})).catch((function(t){var n=new Error((t||{}).message||"fail");return e.reject(n)}))},HANDLE_AJAX_LOADING:function(e,t){var n=e.dispatch,r=e.commit,o=t.api,a=t.payload,i=void 0===a?{}:a,s=t.tokenOnly,c=void 0!==s&&s,u=t.method,l=t.responseType;return r("loading",!0),n("HANDLE_AJAX",{api:o,payload:i,loading:!0,tokenOnly:c,method:u,responseType:l}).finally((function(e){return r("loading",!1),e}))}};t.a={namespaced:!0,state:i,actions:s,mutations:{error:function(e,t){e.error=t},message:function(e,t){e.message=t},loginMessage:function(e,t){e.loginMessage=t},loading:function(e,t){e.loading=t}},getters:{error:function(e){return e.error},message:function(e){return e.message},loginMessage:function(e){return e.loginMessage},loading:function(e){return e.loading}}}}).call(this,n("E2g8"))},A9WM:function(e,t,n){"use strict";(function(e,n){var r;var o=((r={})[n.CREATED]=function(t,r){var o,a=this,i=(t.rootGetters,t.dispatch);t.commit;return(o=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i(n.HANDLE_AJAX_LOADING,{api:""},{root:!0});case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,a)})),function(){var t=o.apply(this,arguments);return new e((function(n,r){return function o(a,i){try{var s=t[a](i),c=s.value}catch(e){return void r(e)}if(!s.done)return e.resolve(c).then((function(e){o("next",e)}),(function(e){o("throw",e)}));n(c)}("next")}))})()},r);t.a={namespaced:!0,state:{},actions:o,mutations:{},getters:{},modules:{}}}).call(this,n("E2g8"),n("JCdI"))},B6RA:function(e,t,n){"use strict";var r=n("nlxe"),o=n("7bQ4"),a={namespaced:!0,state:{},actions:{},mutations:{},getters:{},modules:{header:n("j7Wt").a}},i=n("A9WM"),s=n("oCYn"),c=n("L2JU");s.default.use(c.a);var u=new c.a.Store({modules:{App:r.a,Common:o.a,layout:a,Login:i.a},strict:!1});t.a=u},CaA0:function(e,t,n){"use strict";var r=n("L2JU"),o={methods:{changeDocumentTitle:function(e){document.title=e},changeTitleByPlatform:function(){this.changeDocumentTitle("皇家")}},mounted:function(){},updated:function(){"home"===this.$route.name.toLowerCase()&&this.changeTitleByPlatform();var e=document.querySelector("[class*=main__container]");e&&0!=+e.scrollTop&&setTimeout((function(){var t=setInterval((function(){(e.scrollTop-=10)<=0&&clearInterval(t)}),15)}),1e3)},computed:(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e})({},Object(r.c)("Common",{loading:"loading"}),{platformCode:function(){return this.baseUrl.platformCode}})},a={name:"index",components:{NavHeader:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"KZAA"))},NavFooter:function(){return n.e(13).then(n.bind(null,"zbAR"))},loadingMask:n("xCjN").a},mixins:[o]},i=n("KHd+"),s=Object(i.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("transition",{ref:"header",attrs:{name:"header",mode:"out-in"}},[this.$route.meta.hasNav?t("NavHeader"):this._e()],1),this._v(" "),t("transition",{attrs:{name:"slide",mode:"out-in"}},[t("router-view",{ref:"main",staticClass:"main__container"})],1),this._v(" "),t("transition",{ref:"footer",attrs:{name:"footer",mode:"out-in"}},[this.$route.meta.hasFoot?t("NavFooter"):this._e()],1)],1)}),[],!1,null,null,null);t.a=s.exports},JCdI:function(e,t,n){"use strict";n.r(t),n.d(t,"CREATED",(function(){return r})),n.d(t,"READ",(function(){return o})),n.d(t,"UPDATED",(function(){return a})),n.d(t,"DELETED",(function(){return i})),n.d(t,"MODIFY",(function(){return s})),n.d(t,"HANDLE_AJAX_LOADING",(function(){return c}));var r="CREATED",o="READ",a="UPDATED",i="DELETED",s="MODIFY",c="Common/HANDLE_AJAX_LOADING"},K2Fo:function(e,t,n){"use strict";t.a={session:"session",messageList:"messageList",userInfo:"userInfo",userConfig:"userConfig",takeCashMenu:"takeCashMenu",rechargeMenu:"rechargeMenu",i18n:"i18n"}},Nlzp:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=n("vDqi");n.n(r).a.defaults.withCredentials=!0;var o,a,i=(o=regeneratorRuntime.mark((function t(n){return n.path,n.method,n.mainServer,n.responseType,arguments.length>1&&void 0!==arguments[1]&&arguments[1],regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new e((function(e,t){setTimeout((function(){e("ok")}),1e3)})));case 1:case"end":return t.stop()}}),t,void 0)})),a=function(){var t=o.apply(this,arguments);return new e((function(n,r){return function o(a,i){try{var s=t[a](i),c=s.value}catch(e){return void r(e)}if(!s.done)return e.resolve(c).then((function(e){o("next",e)}),(function(e){o("throw",e)}));n(c)}("next")}))},function(e){return a.apply(this,arguments)})}).call(this,n("E2g8"))},QmAe:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));n("4X9F"),n("IkEG"),n("Vtdi");var r=n("FAev"),o=n.n(r),a=(n("1ROT"),"function"==typeof Symbol&&Symbol.iterator,Object.assign,function(e){return encodeURIComponent(o.a.encode(encodeURIComponent(JSON.stringify(e))))})}).call(this,n("JCdI"))},TsPW:function(e,t,n){"use strict";var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"v1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"post",r=e+"/"+t+"/"||!1;return function(e){return{path:"/api/"+r+e,method:n}}},o=r("acc/front"),a=r("game"),i=r("mobile");a("frontend_config/get_config"),a("Menu/front_list"),a("Login/direct_register"),a("Login/register"),a("Login/login"),a("Login/create_code"),o("users/user_logout"),i("Game_config/get_mobile_template"),a("Game_client/get_game_token_after_transfer"),o("game/before_game_transfer"),o("game/get_user_specific_game_wallet"),o("game/get_user_specific_game_wallet"),o("game/game_transfer_v3"),o("game/before_game_transfer"),o("ui/order_type_list"),o("fund/fund_orders_report_v3"),o("fund/fund_orders_report_v3"),o("game/transfer_record"),a("Report/order_history_list_v2"),a("Game_setting/get_company_list"),a("Game_setting/get_company_category_list"),a("Game_setting/get_company_game_list"),o("fund/check_funds_password_set"),o("fund/set_password"),o("fund/update_password"),o("fund/verify_password"),o("ui/question_list"),o("security/check_question_set"),o("security/current_questions"),o("security/set_questions"),o("security/random_questions"),o("security/answer_questions"),o("ui/bank_can_binding"),o("ui/province_list"),o("ui/city_list"),o("user_card/list_info"),o("user_card/binding_step"),o("user_card/verify_latest_one"),o("user_card/delete_bank_card"),o("recharge/pay_recharge"),o("autorouting/pay_api"),o("recharge/bank_card_and_thirdparty_bank"),o("recharge/bank_card_recharge"),o("recharge/bank_recharge"),o("autorouting/api"),a("Menu/thirdparty_pay_list"),o("recharge/bank_card_recharge_api"),o("recharge/update_bank_card_recharge_note"),o("recharge/qrcode_recharge"),o("recharge/qrcode_recharge_api"),o("recharge/update_qrcode_recharge_note"),o("withdrawals/step"),o("withdrawals/apply"),o("withdrawals/progress_search"),o("users/get_user"),o("users/edit_user"),o("users/update_password"),a("Team/get_user_list"),a("Team/register"),a("Team/get_link_list"),a("Team/team_overview"),a("Point/get_user_refund_list"),a("Point/get_refund_data_v2"),a("Point/set_refund_data_v2"),a("Point/get_user_refund_list"),a("Point/get_refund_data_v2"),a("Point/set_refund_data_v2"),a("team/check_invitation_link"),a("Chat_server/get_user_message_history"),a("Chat_server/upload_pics"),a("Lucky_money/check_set_active"),a("Lucky_money/set_active"),a("Lucky_money/get_member_list"),a("Lucky_money/get_report_list"),a("Lucky_money/stop_active"),a("Lucky_money/check_receive_active"),a("Lucky_money/receive_active"),a("Lucky_money/check_bind_active"),a("Lucky_money/get_record_list"),a("promo_banner/get_promo_ad_list"),a("promo_banner/get_promo_ad_list"),a("Activity_define/get_activity_fast_type"),a("Activity_define/get_activity_list"),a("Activity_define/get_detail"),a("Activity_define/get_user_bonus_list"),a("Activity_define/update_bonus_received"),a("News/get_news_list"),a("News/get_news_detail"),a("Message/receive_box"),a("Message/receive_message_detail"),a("Message/receive_del"),a("Message/receive_reply"),a("Message/send_box"),a("Message/send_message_detail"),a("Message/send_del"),a("Message/send_message"),a("verification/send_sms_code"),a("verification/check_sms_code"),a("verification/send_sms_verify"),a("verification/send_mail_code"),a("verification/check_mail_code"),a("verification/send_email_verify"),a("verification/check_field_value"),a("verification/send_forget_password"),a("verification/check_forget_password"),a("verification/set_forget_password"),a("verification/send_forget_acc"),a("verification/check_forget_acc"),a("Game_client/game_category_list"),a("Home/login_page_info"),a("Home/main_page_info"),i("share_msg/link_list")},Vtdi:function(e,t,n){"use strict";n.r(t);n("vn9c");var r=n("Vl+Z"),o=(n("PfWk"),n("KDDF")),a=(n("DsWx"),n("IatR")),i=(n("w6Z4"),n("rQYt")),s=(n("rB5s"),n("VD6T")),c=(n("X1+7"),n("8lM+")),u=(n("ilju"),n("5B+z")),l=(n("AgnO"),n("fV4+")),f=(n("5+UC"),n("05lO")),d=(n("xm80"),n("Ji/l"),n("sFw1"),n("NO8f"),n("aqI/"),n("Faw5"),n("r1bV"),n("tuSo"),n("nCnK"),n("Y9lz"),n("Tdpu"),n("9AAn"),n("T39b"),n("EK0E"),n("wCsR"),n("3xty"),n("I5cv"),n("iMoV"),n("uhZd"),n("0YWM"),n("694e"),n("LTTk"),n("9rMk"),n("IlFx"),n("xpiv"),n("oZ/O"),n("klPD"),n("knU9"),n("VRzm"),n("ioFf"),n("DW2E"),n("z2o2"),n("mura"),n("Zshi"),n("V/DX"),n("FlsD"),n("mYba"),n("5Pf0"),n("RW0V"),n("JduL"),n("91GP"),n("25dN"),n("/SS/"),n("f3/d"),n("eI33"),n("VpUO"),n("oDIu"),n("FLlr"),n("9VmF"),n("rvZc"),n("L9s1"),n("OEbY"),n("SRfc"),n("pIFo"),n("KKXr"),n("OG14"),n("HEwt"),n("6AQ9"),n("dE+T"),n("dRSK"),n("INYr"),n("bHtr"),n("yt8O"),n("/KAi"),n("fN96"),n("sbF8"),n("7h0T"),n("Ljet"),n("knhD"),n("h/M4"),n("fyVe"),n("U2t9"),n("2atp"),n("+auO"),n("MtdB"),n("Jcmo"),n("nzyx"),n("BC7C"),n("x8ZO"),n("9P93"),n("BJ/l"),n("eHKK"),n("pp/T"),n("CyHz"),n("bBoP"),n("x8Yj"),n("hLT2"),n("Z2Ku"),n("hhXQ"),n("/8Fb"),n("jm62"),n("9XZr"),n("7VC1"),n("R5XZ"),n("Ew+T"),n("rGqo"),n("ls82"),n("oCYn")),p=(n("L2JU"),{name:"app",components:{},mixins:[{beforeMount:function(){},mounted:function(){},created:function(){document.querySelector("#splash-container")&&document.querySelector("#splash-container").remove()},methods:{},computed:{}}]}),m=n("KHd+"),_=Object(m.a)(p,(function(){var e=this.$createElement;return(this._self._c||e)("router-view",{staticClass:"wrapper j_flex-column"})}),[],!1,null,null,null).exports,g=n("oYx3"),h=n("B6RA"),v=n("1ROT"),y=(n("FXp9"),n("8OYU"),n("y0MQ"),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),b={},w=function(e){var t=e.options,n=e.regex,r=e.pattern,o={};return"object"===(void 0===t?"undefined":y(t))?(Object.keys(t).forEach((function(e){o[e.replace(n,r)]=t[e]})),o):"string"==typeof t?t.replace(n,r):new Error("type not a object or a string")},k=function(e){return w({options:e,regex:/([a-z])([A-Z])/g,pattern:function(e,t,n,r,o,a){return t+"_"+n.toLowerCase()}})},A=function(e){return w({options:e,regex:/_([a-zA-Z])/g,pattern:function(e,t,n,r,o,a){return e[1].toUpperCase()}})};b.install=function(e,t){e.prototype.$snakeCase=k,e.prototype.$camelCase=A};var L=b,x={install:function(e,t){e.prototype.$getQueryParams=function(){var e={};if(location.search.substr(1)){var t=location.search.substr(1).split(/&|=/);t.forEach((function(n,r){r%2||(e[n]=t[r+1])}))}return{params:e,searchs:location.search.substr(1)}}()}},C=x,E={install:function(e,t){Object.defineProperty(e.prototype,"$getDevice",{get:function(){var e=window.navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i);return{iOS:t,webkit:n,safari:t&&n&&!e.match(/CriOS/i)}}})}};n.d(t,"vue$",(function(){return T})),n.d(t,"vue",(function(){return D})),d.default.config.productionTip=!1,"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/crown-baccarat/service-worker.js").then((function(e){})).catch((function(e){}))})),d.default.use(r.a).use(o.a).use(a.a).use(i.a).use(s.a).use(c.a).use(u.a).use(l.a).use(f.a),d.default.use(L).use(C).use(E);var T=new d.default({el:"#app",router:g.a,store:h.a,i18n:v.b,template:"<App/>",components:{App:_}}),D=T},j7Wt:function(e,t,n){"use strict";(function(e){var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=((n={})[e.UPDATED]=function(e,t){e.getters,e.dispatch;var n=e.commit;e.rootGetters;"object"===(void 0===t?"undefined":r(t))&&n("set",t)},n);t.a={namespaced:!0,state:{title:"",subTitle:"",type:"",logoPosition:""},actions:o,mutations:{set:function(e,t){for(var n in t)e.hasOwnProperty(n)&&(e[n]=t[n])}},getters:{state:function(e){return e}},modules:{}}}).call(this,n("JCdI"))},nlxe:function(e,t,n){"use strict";(function(e,r){var o;n("TsPW"),n("K2Fo");var a=((o={})[r.READ]=function(t){var n,r=this;t.getters,t.dispatch,t.commit;return(n=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e,r)})),function(){var t=n.apply(this,arguments);return new e((function(n,r){return function o(a,i){try{var s=t[a](i),c=s.value}catch(e){return void r(e)}if(!s.done)return e.resolve(c).then((function(e){o("next",e)}),(function(e){o("throw",e)}));n(c)}("next")}))})()},o);t.a={namespaced:!0,state:{list:[],pagination:{page:1,totalPage:1,limit:20}},actions:a,mutations:{},getters:{list:function(e){return e.list},pagination:function(e){return e.pagination}}}}).call(this,n("E2g8"),n("JCdI"))},oYx3:function(e,t,n){"use strict";(function(e){var r=n("oCYn"),o=n("jE9Z"),a=n("u0V/");n("B6RA"),n("K2Fo");function i(t){return function(){var n=t.apply(this,arguments);return new e((function(t,r){return function o(a,i){try{var s=n[a](i),c=s.value}catch(e){return void r(e)}if(!s.done)return e.resolve(c).then((function(e){o("next",e)}),(function(e){o("throw",e)}));t(c)}("next")}))}}r.default.use(o.a);var s,c,u,l=(s=i(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},location.search.substr(1)&&location.search.substr(1).split("&").forEach((function(e,n){var r=e.split("="),o=r[0],a=r[1];t[o||n]=a||""})),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e,void 0)}))),function(){return s.apply(this,arguments)}),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=(t||(document||{}).body||{}).classList;if(n){Array.isArray(e)||(e=[e]);var r=e,o=Array.isArray(r),a=0;for(r=o?r:r[Symbol.iterator]();;){var i;if(o){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var s=i;n.contains[s]||n.add(s)}}},d=function(e,t){var n=(t||(document||{}).body||{}).classList;if(n){Array.isArray(e)||(e=[e]);var r=e,o=Array.isArray(r),a=0;for(r=o?r:r[Symbol.iterator]();;){var i;if(o){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var s=i;n.contains[s]&&n.remove(s)}}},p=(c=i(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},"true"===window.sessionStorage.debug?f("debug"):d("debug"),"Login"===t.name||"Register"===t.name?f(["crown_bg_base","crown_bg_login","j_text--body"]):(d("crown_bg_login"),f(["crown_bg_base","j_text--body"])),e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,void 0)}))),function(e,t){return c.apply(this,arguments)}),m=(u=i(regeneratorRuntime.mark((function e(t,n,r){var o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return name,e.next=3,l();case 3:return o=e.sent,e.next=6,p(t,o);case 6:a=e.sent,r(a);case 8:case"end":return e.stop()}}),e,void 0)}))),function(e,t,n){return u.apply(this,arguments)}),_=new o.a(a.a);_.beforeEach(m),_.afterEach((function(e,t){})),t.a=_}).call(this,n("E2g8"))},slT8:function(e,t,n){"use strict";var r=n("tkjB");n.n(r).a},tkjB:function(e,t,n){},"u0V/":function(e,t,n){"use strict";var r=n("CaA0"),o=n("B6RA");t.a={mode:"hash",base:"/crown-baccarat",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/failure",name:"failure",component:function(e){return n.e(9).then(function(){return e(n("jp0L"))}.bind(null,n)).catch(n.oe)}},{path:"/",component:r.a,redirect:function(e){return window.matchMedia("(display-mode: standalone)").matches?(o.a.getters["Config/userInfo"]||{}).token?{name:"Home"}:{name:"Login"}:{name:"PWA"}},children:[{path:"login",name:"Login",meta:{hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){return e(n("0Sby"))}.bind(null,n)).catch(n.oe)}},{path:"register",name:"Register",meta:{hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){return e(n("z5hO"))}.bind(null,n)).catch(n.oe)}},{path:"Home",name:"Home",meta:{hasNav:!0,hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){return e(n("TNam"))}.bind(null,n)).catch(n.oe)}},{path:"Home/lobby",name:"HomeLobby",meta:{hasNav:!0,hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){return e(n("orzg"))}.bind(null,n)).catch(n.oe)}},{path:"Setting",name:"Setting",params:!0,meta:{hasNav:!0,hasFoot:!1},redirect:function(e){return{name:"SettingMain",params:{option:e.params.option||"menu"}}}},{path:"Setting/:option",name:"SettingMain",props:!0,meta:{hasNav:!0,hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(12),n.e(6)]).then(function(){return e(n("X6zr"))}.bind(null,n)).catch(n.oe)}},{path:"game",name:"Game",params:!0,meta:{hasNav:!0,hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){return e(n("tYzw"))}.bind(null,n)).catch(n.oe)}},{path:"game/chips",name:"GameChips",params:!0,meta:{hasNav:!0,hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){return e(n("/KFf"))}.bind(null,n)).catch(n.oe)}},{path:"PWA",name:"PWA",params:!0,meta:{hasNav:!1,hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){return e(n("dtGZ"))}.bind(null,n)).catch(n.oe)}},{path:"debug",name:"debug",params:!0,meta:{hasNav:!1,hasFoot:!1},component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){return e(n("I00/"))}.bind(null,n)).catch(n.oe)}}]},{path:"*",redirect:{name:"failure"}}]}},xCjN:function(e,t,n){"use strict";var r={name:"loading",props:{loading:{default:!1},selector:{type:[String,Function],default:"body"}},data:function(){return{popup:{}}},created:function(){var e=this;this.$nextTick((function(){e.popup=e.$refs.popup&&e.$refs.popup.$el||{}}))},methods:{getPopup:function(){var e=this;this.$nextTick((function(){e.popup=e.$refs.popup&&e.$refs.popup.$el||{}}))}},computed:{getLoading:{get:function(){return Boolean(this.loading)},set:function(e){return e}},showLoading:function(){return Object.keys(this.popup).length},getSize:function(){var e=this.popup.clientWidth||50,t=this.popup.clientHeight||50;return e<t?e:t}}},o=(n("slT8"),n("KHd+")),a=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-popup",{ref:"popup",staticStyle:{overflow:"hidden",background:"transparent",height:"50%",width:"50%"},attrs:{"get-container":e.selector,"close-on-click-overlay":!1,"close-on-popstate":!0},on:{opened:e.getPopup},model:{value:e.getLoading,callback:function(t){e.getLoading=t},expression:"getLoading"}},[e.showLoading?n("van-loading",{staticStyle:{overflow:"hidden","text-align":"center"},attrs:{size:e.getSize,vertical:"",color:"#1989fa"}},[e._t("default")],2):n("div",[e._v(".")])],1)],1)}),[],!1,null,"7e4a52f0",null);t.a=a.exports},y0MQ:function(e,t,n){}},[["Vtdi",10,11]]]);