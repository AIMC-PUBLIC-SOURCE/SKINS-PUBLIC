(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{29:function(e,t,n){t.hot=function(e){return e}},34:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},368:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),i=n(49),s=n(1),o=n(5),l=n(3),u=n(59),p=n(79);t.default=Object(c.hot)(()=>{const[e,t]=Object(a.useState)(""),[n,c]=Object(a.useState)(""),[d,f]=Object(a.useState)(""),[m,h]=Object(a.useState)(""),[b,g]=Object(a.useState)(""),[v,y]=Object(a.useState)(!1),[w,E]=Object(a.useState)(""),j=Object(i.a)("player"),x=Object(a.useRef)(null),O=Object(a.useRef)(null);return r.a.createElement("form",{onSubmit:async t=>{if(t.preventDefault(),E(""),n!==d)return E(Object(s.a)("auth.invalidConfirmPwd")),void x.current.focus();y(!0);const{code:a,message:r}=await o.c("/auth/register",Object.assign({email:e,password:n,captcha:await O.current.execute()},j?{player_name:b}:{nickname:m}));0===a?(l.b.success(r),setTimeout(()=>{window.location.href=`${blessing.base_url}/user`},3e3)):(E(r),O.current.reset()),y(!1)}},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"email",required:!0,className:"form-control",placeholder:Object(s.a)("auth.email"),value:e,onChange:e=>{t(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"password",required:!0,minLength:8,maxLength:32,className:"form-control",placeholder:Object(s.a)("auth.password"),value:n,onChange:e=>{c(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"password",required:!0,minLength:8,maxLength:32,className:"form-control",placeholder:Object(s.a)("auth.repeat-pwd"),ref:x,value:d,onChange:e=>{f(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-sign-in-alt"})))),j?r.a.createElement("div",{className:"input-group mb-3",title:Object(s.a)("auth.player-name-intro")},r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:Object(s.a)("auth.player-name"),value:b,onChange:e=>{g(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-gamepad"})))):r.a.createElement("div",{className:"input-group mb-3",title:Object(s.a)("auth.nickname-intro")},r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:Object(s.a)("auth.nickname"),value:m,onChange:e=>{h(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-gamepad"})))),r.a.createElement(p.a,{ref:O}),r.a.createElement(u.a,{type:"warning"},w),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},r.a.createElement("a",{href:`${blessing.base_url}/auth/login`},Object(s.a)("auth.login-link")),r.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:v},v?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin mr-1"}),Object(s.a)("auth.registering")):Object(s.a)("auth.register-button"))))})},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e,t){const[n,r]=Object(a.useState)(t);return Object(a.useEffect)(()=>{r(blessing.extra[e])},[]),n}},59:function(e,t,n){"use strict";var a=n(0),r=n.n(a);const c=new Map([["success","check"],["info","info"],["warning","exclamation-triangle"],["danger","times-circle"]]);t.a=e=>{const{type:t}=e,n=c.get(t);return e.children?r.a.createElement("div",{className:`alert alert-${t}`},r.a.createElement("i",{className:`icon fas fa-${n}`}),e.children):null}},79:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(80),i=n.n(c),s=n(2),o=n(1),l=n(81),u=n.n(l);const p=Symbol();t.a=class extends r.a.Component{constructor(e){super(e),this.execute=async()=>{const e=this.ref.current;return e&&this.state.invisible?new Promise(t=>{const n=Object(s.b)(p,e=>{t(e),n()});e.execute()}):this.state.value},this.reset=()=>{const e=this.ref.current;e?e.reset():this.setState({time:Date.now()})},this.handleValueChange=e=>{this.setState({value:e.target.value})},this.handleVerify=e=>{Object(s.a)(p,e),this.setState({value:e})},this.handleRefresh=()=>{this.setState({time:Date.now()})},this.state={value:"",time:Date.now(),sitekey:blessing.extra.recaptcha,invisible:blessing.extra.invisible},this.ref=r.a.createRef()}render(){return this.state.sitekey?r.a.createElement("div",{className:"mb-2"},r.a.createElement(i.a,{ref:this.ref,sitekey:this.state.sitekey,size:this.state.invisible?"invisible":"normal",onVerify:this.handleVerify})):r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"form-group mb-3 mr-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:Object(o.a)("auth.captcha"),required:!0,value:this.state.value,onChange:this.handleValueChange})),r.a.createElement("img",{src:`${blessing.base_url}/auth/captcha?v=${this.state.time}`,alt:Object(o.a)("auth.captcha"),className:u.a.captcha,height:34,title:Object(o.a)("auth.change-captcha"),onClick:this.handleRefresh}))}}},80:function(e,t,n){(function(t){var a;a=function(e){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=function(e){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src=e,document.head&&document.head.appendChild(t)},i=function(e){return Array.from(document.scripts).reduce((function(t,n){return t||e.test(n.src)}),!1)};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d="https://recaptcha.net/recaptcha/api.js",f=/(http|https):\/\/(www)?.+\/recaptcha/,m=function(e){function t(e){var n,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,u=o(t).call(this,e),n=!u||"object"!==s(u)&&"function"!=typeof u?l(a):u,p(l(n),"container",null),p(l(n),"_isAvailable",(function(){return Boolean(window&&window.grecaptcha&&window.grecaptcha.ready)})),p(l(n),"_inject",(function(){if(n.props.inject&&!i(f)){var e=n.props.hl?"&hl=".concat(n.props.hl):"",t="".concat(d,"?render=explicit").concat(e);c(t)}})),p(l(n),"_prepare",(function(){var e=n.props,t=e.explicit,a=e.onLoad;window.grecaptcha.ready((function(){n.setState({ready:!0},(function(){t||n.renderExplicitly(),a&&a()}))}))})),p(l(n),"_renderRecaptcha",(function(e,t){return window.grecaptcha.render(e,t)})),p(l(n),"_resetRecaptcha",(function(){return window.grecaptcha.reset(n.state.instanceId)})),p(l(n),"_executeRecaptcha",(function(){return window.grecaptcha.execute(n.state.instanceId)})),p(l(n),"_getResponseRecaptcha",(function(){return window.grecaptcha.getResponse(n.state.instanceId)})),p(l(n),"_stopTimer",(function(){n.state.timer&&clearInterval(n.state.timer)})),p(l(n),"componentDidMount",(function(){if(n._inject(),n._isAvailable())n._prepare();else{var e=setInterval((function(){n._isAvailable()&&(n._prepare(),n._stopTimer())}),500);n.setState({timer:e})}})),p(l(n),"shouldComponentUpdate",(function(e){return n.props.className!==e.className||!n.state.rendered})),p(l(n),"componentWillUnmount",(function(){n._stopTimer(),n.state.rendered&&n._resetRecaptcha()})),p(l(n),"renderExplicitly",(function(){return new Promise((function(e,t){if(n.state.rendered)return t(new Error("This recaptcha instance has been already rendered."));if(!n.state.ready||!n.container)return t(new Error("Recaptcha is not ready for rendering yet."));var a=n._renderRecaptcha(n.container,{sitekey:n.props.sitekey,theme:n.props.theme,size:n.props.size,badge:n.state.invisible?n.props.badge:null,tabindex:n.props.tabindex,callback:n.props.onVerify,"expired-callback":n.props.onExpire,"error-callback":n.props.onError,isolated:n.state.invisible?n.props.isolated:null,hl:n.state.invisible?null:n.props.hl});n.setState({instanceId:a,rendered:!0},(function(){n.props.onRender&&n.props.onRender(),e()}))}))})),p(l(n),"reset",(function(){return new Promise((function(e,t){if(n.state.rendered)return n._resetRecaptcha(),e();t(new Error("This recaptcha instance did not render yet."))}))})),p(l(n),"execute",(function(){return new Promise((function(e,t){return n.state.invisible?(n.state.rendered&&(n._executeRecaptcha(),e()),t(new Error("This recaptcha instance did not render yet."))):t(new Error("Manual execution is only available for invisible size."))}))})),p(l(n),"getResponse",(function(){return new Promise((function(e,t){if(n.state.rendered)return e(n._getResponseRecaptcha());t(new Error("This recaptcha instance did not render yet."))}))})),p(l(n),"render",(function(){var e=r.a.createElement("div",{id:n.props.id,className:n.props.className,ref:function(e){return n.container=e}});return n.props.children?n.props.children({renderExplicitly:n.renderExplicitly,reset:n.reset,execute:n.execute,getResponse:n.getResponse,recaptchaComponent:e}):e})),n.state={instanceId:null,ready:!1,rendered:!1,invisible:"invisible"===n.props.size,timer:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),t}(a.Component);p(m,"defaultProps",{id:"",className:"g-recaptcha",theme:"light",size:"normal",badge:"bottomright",tabindex:0,explicit:!1,inject:!0,isolated:!1,hl:""}),t.default=m}]).default},e.exports=a(n(0))}).call(this,n(34))},81:function(e,t,n){var a=n(12),r=n(82);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1},i=(a(e.i,r,c),r.locals?r.locals:{});e.exports=i},82:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a)()(!1);r.push([e.i,".captcha__33j3t{cursor:pointer}",""]),r.locals={captcha:"captcha__33j3t"},t.default=r}}]);