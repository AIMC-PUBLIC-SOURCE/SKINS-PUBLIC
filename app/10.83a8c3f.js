(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a(1),n=a(5),s=a(3);async function l(e){let t;try{const{value:a}=await Object(s.a)({mode:"prompt",title:Object(c.a)("skinlib.setItemName"),text:Object(c.a)("skinlib.applyNotice"),input:e.name,validator:e=>{if(!e)return Object(c.a)("skinlib.emptyItemName")}});t=a}catch(e){return!1}const{code:a,message:l}=await n.c("/user/closet/add",{tid:e.tid,name:t});return 0===a?s.b.success(l):s.b.error(l),0===a}},29:function(e,t,a){t.hot=function(e){return e}},347:function(e,t,a){var c=a(12),n=a(348);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var s={insert:"head",singleton:!1},l=(c(e.i,n,s),n.locals?n.locals:{});e.exports=l},348:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a.n(c)()(!1);n.push([e.i,".truncate__1DNcD{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),n.locals={truncate:"truncate__1DNcD"},t.default=n},37:function(e,t,a){"use strict";var c=a(0),n=a.n(c);t.a=()=>n.a.createElement("div",{className:"container text-center",title:"Loading..."},n.a.createElement("i",{className:"fas fa-sync fa-spin"}))},371:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(4),l=a(29),i=a(49),r=a(53),o=a(1),m=a(5),b=a(3),u=a(68),d=a(54),p=a(99),j=a(67),O=a(98),v=a(128),E=a(347),f=a.n(E);const k=n.a.lazy(()=>Promise.all([a.e(3),a.e(2)]).then(a.bind(null,351)));t.default=Object(l.hot)(()=>{const[e,t]=Object(c.useState)({}),[a,l]=Object(c.useState)(!1),[E,w]=Object(c.useState)(!1),N=Object(i.a)("nickname"),h=Object(i.a)("uploaderExists"),y=Object(i.a)("currentUid",0),g=Object(i.a)("admin"),x=Object(i.a)("badges",[]),C=Object(i.a)("download"),$=Object(i.a)("report"),_=Object(r.a)("#previewer");Object(c.useEffect)(()=>{(async()=>{const e=location.href.replace(blessing.base_url,"").replace("show","info"),{data:a}=await m.b(e);t(a)})()},[]),Object(c.useEffect)(()=>{w(blessing.extra.inCloset)},[]);const S=(()=>{var t;const a=new URLSearchParams;return a.append("filter","cape"===e.type?"cape":"skin"),a.append("uploader",null===(t=e.uploader)||void 0===t?void 0:t.toString()),`${blessing.base_url}/skinlib?${a}`})(),T=y===e.uploader||g,A=`${blessing.base_url}/textures/${e.hash}`;return n.a.createElement(n.a.Fragment,null,Object(s.createPortal)(n.a.createElement(n.a.Suspense,{fallback:n.a.createElement(d.a,null)},n.a.createElement(k,Object.assign({},{["cape"===e.type?"cape":"skin"]:A},{isAlex:"alex"===e.type,initPositionZ:60}),0===y?n.a.createElement("button",{className:"btn btn-outline-secondary",title:Object(o.a)("skinlib.show.anonymous"),disabled:!0},Object(o.a)("skinlib.addToCloset")):n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("div",null,E&&n.a.createElement("button",{className:"btn btn-outline-success mr-2",onClick:()=>l(!0)},Object(o.a)("skinlib.apply")),E?n.a.createElement("button",{className:"btn btn-outline-primary mr-2",onClick:async()=>{await Object(j.a)(e.tid)&&(t(e=>Object.assign(Object.assign({},e),{likes:e.likes-1})),w(!1))}},Object(o.a)("skinlib.removeFromCloset")):n.a.createElement("button",{className:"btn btn-outline-primary mr-2",onClick:async()=>{await Object(v.a)(e)&&(t(e=>Object.assign(Object.assign({},e),{likes:e.likes+1})),w(!0))}},Object(o.a)("skinlib.addToCloset")),"cape"!==e.type&&n.a.createElement("button",{className:"btn btn-outline-info mr-2",onClick:()=>Object(O.a)(e.tid)},Object(o.a)("user.setAsAvatar")),C&&n.a.createElement("button",{className:"btn btn-outline-info mr-2",onClick:()=>{const t=document.createElement("a");t.href=`${blessing.base_url}/raw/${e.tid}`,t.download=`${e.name}.png`,t.click()}},Object(o.a)("skinlib.show.download")),n.a.createElement("button",{className:"btn btn-outline-info mr-2",onClick:async()=>{const t=(()=>$>0?Object(o.a)("skinlib.report.positive",{score:$}):$<0?Object(o.a)("skinlib.report.negative",{score:-$}):"")();let a;try{const{value:e}=await Object(b.a)({mode:"prompt",title:Object(o.a)("skinlib.report.title"),text:t,placeholder:Object(o.a)("skinlib.report.reason")});a=e}catch(e){return}const{code:c,message:n}=await m.c("/skinlib/report",{tid:e.tid,reason:a});0===c?b.b.success(n):b.b.error(n)}},Object(o.a)("skinlib.report.title"))),n.a.createElement("div",{className:E?"text-red":"text-gray",title:Object(o.a)("skinlib.show.likes")},n.a.createElement("i",{className:"fas fa-heart mr-1"}),n.a.createElement("span",null,e.likes))))),_),n.a.createElement("div",{className:"card card-primary"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",{className:"card-title"},Object(o.a)("skinlib.show.detail"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mt-2 mb-4"},n.a.createElement("div",{className:"col-4"},Object(o.a)("skinlib.show.name")),n.a.createElement("div",{className:`col-7 ${f.a.truncate}`,title:e.name},e.name),T&&n.a.createElement("div",{className:"col-1"},n.a.createElement(u.a,{title:Object(o.a)("skinlib.show.edit"),onClick:async()=>{let a;try{const{value:t}=await Object(b.a)({mode:"prompt",text:Object(o.a)("skinlib.setNewTextureName"),input:e.name,validator:e=>{if(!e)return Object(o.a)("skinlib.emptyNewTextureName")}});a=t}catch(e){return}const{code:c,message:n}=await m.c("/skinlib/rename",{tid:e.tid,new_name:a});0===c?(b.b.success(n),t(e=>Object.assign(Object.assign({},e),{name:a}))):b.b.error(n)}}))),n.a.createElement("div",{className:"row my-4"},n.a.createElement("div",{className:"col-4"},Object(o.a)("skinlib.show.model")),n.a.createElement("div",{className:"col-7"},"cape"===e.type?Object(o.a)("general.cape"):e.type),T&&n.a.createElement("div",{className:"col-1"},n.a.createElement(u.a,{title:Object(o.a)("skinlib.show.edit"),onClick:async()=>{let a;try{const{value:t}=await Object(b.a)({mode:"prompt",text:Object(o.a)("skinlib.setNewTextureModel"),input:e.type,inputType:"radios",choices:[{text:"Steve",value:"steve"},{text:"Alex",value:"alex"},{text:Object(o.a)("general.cape"),value:"cape"}]});a=t}catch(e){return}const{code:c,message:n}=await m.c("/skinlib/model",{tid:e.tid,model:a});0===c?(b.b.success(n),t(e=>Object.assign(Object.assign({},e),{type:a}))):b.b.error(n)}}))),n.a.createElement("div",{className:"row my-4"},n.a.createElement("div",{className:"col-4"},"Hash"),n.a.createElement("div",{className:`col-8 ${f.a.truncate}`,title:e.hash},e.hash)),n.a.createElement("div",{className:"row my-4"},n.a.createElement("div",{className:"col-4"},Object(o.a)("skinlib.show.size")),n.a.createElement("div",{className:"col-8"},e.size," KB")),n.a.createElement("div",{className:"row my-4"},n.a.createElement("div",{className:"col-4"},Object(o.a)("skinlib.show.uploader")),n.a.createElement("div",{className:`col-8 ${f.a.truncate}`},h?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("a",{href:S,target:"_blank"},N)),n.a.createElement("div",null,x.map(e=>n.a.createElement("span",{className:`badge bg-${e.color} mr-2`,key:e.text},e.text)))):N)),n.a.createElement("div",{className:"row mt-4 mb-2"},n.a.createElement("div",{className:"col-4"},Object(o.a)("skinlib.show.upload-at")),n.a.createElement("div",{className:"col-8"},e.upload_at))))),T&&n.a.createElement("div",{className:"card card-warning"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",{className:"card-title"},Object(o.a)("admin.operationsTitle"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",null,Object(o.a)("skinlib.show.manage-notice"))),n.a.createElement("div",{className:"card-footer"},n.a.createElement("div",{className:"container d-flex justify-content-between"},n.a.createElement("button",{className:"btn btn-warning",onClick:async()=>{try{await Object(b.a)({text:e.public?Object(o.a)("skinlib.setPrivateNotice"):Object(o.a)("skinlib.setPublicNotice")})}catch(e){return}const{code:a,message:c}=await m.c("/skinlib/privacy",{tid:e.tid});0===a?(b.b.success(c),t(e=>Object.assign(Object.assign({},e),{public:!e.public}))):b.b.error(c)}},e.public?Object(o.a)("skinlib.setAsPrivate"):Object(o.a)("skinlib.setAsPublic")),n.a.createElement("button",{className:"btn btn-danger",onClick:async()=>{try{await Object(b.a)({text:Object(o.a)("skinlib.deleteNotice"),okButtonType:"danger"})}catch(e){return}const{code:t,message:a}=await m.c("/skinlib/delete",{tid:e.tid});0===t?(b.b.success(a),setTimeout(()=>{window.location.href=`${blessing.base_url}/skinlib`},2e3)):b.b.error(a)}},Object(o.a)("skinlib.show.delete-texture"))))),n.a.createElement(p.a,Object.assign({show:a,canAdd:!1},{["cape"===e.type?"cape":"skin"]:e.tid},{onClose:()=>l(!1)})))})},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(0);function n(e,t){const[a,n]=Object(c.useState)(t);return Object(c.useEffect)(()=>{n(blessing.extra[e])},[]),a}},53:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(0);function n(e){const t=Object(c.useMemo)(()=>document.createElement("div"),[]);return Object(c.useEffect)(()=>{const a=document.querySelector(e);return a.appendChild(t),()=>{a.removeChild(t)}},[]),t}},54:function(e,t,a){"use strict";var c=a(0),n=a.n(c),s=a(1);t.a=()=>n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h3",{className:"card-title"},n.a.createElement("span",null,Object(s.b)("general.texturePreview"))))),n.a.createElement("div",{className:"card-body"}))},67:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a(1),n=a(5),s=a(3);async function l(e){try{await Object(s.a)({text:Object(c.a)("user.removeFromClosetNotice"),okButtonType:"danger"})}catch(e){return!1}const{code:t,message:a}=await n.c(`/user/closet/remove/${e}`);return 0===t?s.b.success(a):s.b.error(a),0===t}},68:function(e,t,a){"use strict";var c=a(0),n=a.n(c);t.a=e=>n.a.createElement("a",{href:"#",title:e.title,className:"ml-2",onClick:e.onClick},n.a.createElement("i",{className:"fas fa-edit"}))},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a(1),n=a(5),s=a(3);async function l(e){try{await Object(s.a)({title:Object(c.a)("user.setAvatar"),text:Object(c.a)("user.setAvatarNotice")})}catch(e){return}const{code:t,message:a}=await n.c("/user/profile/avatar",{tid:e});0===t?(s.b.success(a),document.querySelectorAll('[alt="User Image"]').forEach(e=>e.src+=`?${(new Date).getTime()}`)):s.b.error(a)}},99:function(e,t,a){"use strict";var c=a(0),n=a.n(c),s=a(6),l=a.n(s),i=a(1),r=a(5),o=a(3),m=a(37),b=a(10);const u=blessing.base_url;t.a=e=>{const[t,a]=Object(c.useState)([]),[s,d]=Object(c.useState)(""),[p,j]=Object(c.useState)(!1);Object(c.useEffect)(()=>{if(!e.show)return;(async()=>{j(!0);const{data:e}=await r.b("/user/player/list");a(e),j(!1)})()},[e.show]);return n.a.createElement(b.a,{show:e.show,id:"modal-apply",title:Object(i.a)("user.closet.use-as.title"),flexFooter:!0,footer:n.a.createElement(n.a.Fragment,null),onClose:e.onClose},p?n.a.createElement(m.a,null):0===t.length?n.a.createElement("p",null,Object(i.a)("user.closet.use-as.empty")):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:Object(i.a)("user.typeToSearch"),onChange:e=>{d(e.target.value)}})),t.filter(e=>e.name.includes(s)).map(t=>n.a.createElement("button",{key:t.pid,className:"btn btn-block btn-outline-info text-left",title:t.name,onClick:()=>(async t=>{const{code:a,message:c}=await r.c(`/user/player/set/${t.pid}`,{skin:e.skin,cape:e.cape});0===a?(o.b.success(c),l()("#modal-apply").modal("hide")):o.b.error(c)})(t)},n.a.createElement("img",{src:`${u}/avatar/${t.tid_skin}?3d&size=45`,alt:t.name,width:45,height:45}),n.a.createElement("span",{className:"ml-1"},t.name)))))}}}]);