(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0Sby":function(t,n,e){"use strict";e.r(n);e("TsPW");var o=e("0cTy"),i=e.n(o),s=e("xCjN"),a=(e("L2JU"),e("VInP")),r={name:"Login",components:{loadingMask:s.a,vanImage:i.a},mixins:[a.a]},l=e("KHd+"),c={name:"Login",components:{LoginContent:Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login"},[e("loadingMask",{attrs:{loading:t.loading}}),t._v(" "),e("div",{staticClass:"login-box j_flex-column-center-between"},[e("div",{staticClass:"blocker"}),t._v(" "),e("van-image",{staticClass:"login-logo",attrs:{src:t.logo}}),t._v(" "),e("div",{staticClass:"login-field j_flex-column-between"},[t._l(t.inputs,(function(n,o){return[e("div",{key:o,staticClass:"login-field-line j_flex-center-between"},[e("van-image",{staticClass:"login-field-icon",attrs:{src:n.src}}),t._v(" "),e("van-field",{attrs:{"error-message":n.errorMsg,type:n.type,placeholder:n.placeholder},on:{input:function(t){n.errorMsg=""},focus:function(t){n.errorMsg=""}},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"item.value"}})],1)]})),t._v(" "),e("div",{staticClass:"login-field-line j_flex-center-between"},[e("div",{staticClass:"blocker"}),t._v(" "),e("router-link",{attrs:{to:{name:"Register"}}},[e("span",{staticClass:"login-link j_text--day",domProps:{textContent:t._s("註冊")}})]),t._v(" "),e("span",{staticClass:"login-link j_text--day",domProps:{textContent:t._s("忘記帳號")}})],1),t._v(" "),e("div",{staticClass:"login-field-line j_flex-center-around"},[e("div",{staticClass:"blocker"}),t._v(" "),e("div",{staticClass:"login-button j_flex-column-around",on:{click:t.onPlay}},[e("span",{staticClass:"login-button-text j_text--day",domProps:{textContent:t._s("PLAY")}})])]),t._v(" "),e("div",{staticClass:"blocker",style:{height:"60px"}}),t._v(" "),e("div",{staticClass:"login-field-line j_flex-column-center-around"},[e("van-image",{staticClass:"login-service-icon",attrs:{src:t.service}}),t._v(" "),e("span",{staticClass:"j_text--day",domProps:{textContent:t._s("聯絡客服")}})],1)],2),t._v(" "),e("div",{staticClass:"blocker"})],1)],1)}),[],!1,null,null,null).exports}},u=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("LoginContent")}),[],!1,null,null,null);n.default=u.exports},RnL9:function(t,n,e){t.exports=e.p+"default/img/sign-people.png"},V5e3:function(t,n,e){t.exports=e.p+"default/img/sign-lock.png"},VInP:function(t,n,e){"use strict";(function(t,o){var i=e("L2JU"),s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};n.a={data:function(){return{inputs:{account:{value:"",errorMsg:"",placeholder:"請輸入手機號碼",type:"digit",src:e("RnL9")},password:{value:"",errorMsg:"",placeholder:"請輸入密碼",type:"password",src:e("V5e3")}},account:"",password:""}},mounted:function(){var n,e=this;return(n=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t,e)})),function(){var e=n.apply(this,arguments);return new t((function(n,o){return function i(s,a){try{var r=e[s](a),l=r.value}catch(t){return void o(t)}if(!r.done)return t.resolve(l).then((function(t){i("next",t)}),(function(t){i("throw",t)}));n(l)}("next")}))})()},methods:s({},Object(i.b)("Login",{login:o.CREATED}),{checkInputs:function(){var t=!0;for(var n in this.inputs)this.inputs[n].value||(this.inputs[n].errorMsg=this.inputs[n].placeholder,t=!1);return t},onPlay:function(){var t=this;this.checkInputs()&&this.login().then((function(n){t.$router.push({name:"Home"})})).catch((function(t){}))}}),computed:s({},Object(i.c)("Common",["loading"]),{logo:function(){return e("zVwA")},service:function(){return e("uH1+")}})}}).call(this,e("E2g8"),e("JCdI"))},mkV3:function(t,n,e){"use strict";(function(t){e("TsPW");var o=e("0cTy"),i=e.n(o),s=e("xCjN"),a=e("L2JU"),r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};n.a={name:"LoginContent",components:{loadingMask:s.a,vanImage:i.a},data:function(){return{account:"",password:"",termList:{nickName:{placeholder:"輸入暱稱",text:""},account:{placeholder:"輸入帳號",text:""},password:{placeholder:"輸入密碼",text:""},confirm:{placeholder:"確認密碼",text:""},phone:{placeholder:"輸入電話",text:""}}}},mounted:function(){var n,e=this;return(n=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t,e)})),function(){var e=n.apply(this,arguments);return new t((function(n,o){return function i(s,a){try{var r=e[s](a),l=r.value}catch(t){return void o(t)}if(!r.done)return t.resolve(l).then((function(t){i("next",t)}),(function(t){i("throw",t)}));n(l)}("next")}))})()},methods:{},computed:r({},Object(a.c)("Common",["loading"]),{logo:function(){return e("zVwA")},people:function(){return e("RnL9")},lock:function(){return e("V5e3")},service:function(){return e("uH1+")}})}}).call(this,e("E2g8"))},"uH1+":function(t,n,e){t.exports=e.p+"default/img/sign-service.png"},z5hO:function(t,n,e){"use strict";e.r(n);var o=e("mkV3").a,i=e("KHd+"),s={name:"Register",components:{RegisterContent:Object(i.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login"},[e("loadingMask",{attrs:{loading:t.loading}}),t._v(" "),e("router-link",{attrs:{to:{name:"Login"},replace:""}},[e("van-icon",{staticClass:"login-back",attrs:{name:"play",size:"30px"}})],1),t._v(" "),e("div",{staticClass:"login-box j_flex-column-center-between"},[e("div",{staticClass:"blocker"}),t._v(" "),e("van-image",{staticClass:"login-logo",attrs:{src:t.logo}}),t._v(" "),e("div",{staticClass:"login-field j_flex-column-between"},[t._l(t.termList,(function(n,o){return e("div",{key:o,staticClass:"login-field-line j_flex-center-between"},[e("van-field",{attrs:{placeholder:n.placeholder},model:{value:n.text,callback:function(e){t.$set(n,"text",e)},expression:"term.text"}})],1)})),t._v(" "),e("div",{staticClass:"blocker"}),t._v(" "),e("div",{staticClass:"login-field-line j_flex-center-around"},[e("div",{staticClass:"login-button j_flex-column-around"},[e("span",{staticClass:"login-button-text j_text--day",domProps:{textContent:t._s("註冊")}})])]),t._v(" "),e("div",{staticClass:"blocker",style:{height:"60px"}})],2),t._v(" "),e("div",{staticClass:"blocker"})],1)],1)}),[],!1,null,null,null).exports}},a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("RegisterContent")}),[],!1,null,null,null);n.default=a.exports},zVwA:function(t,n,e){t.exports=e.p+"default/img/sign-logo.png"}}]);