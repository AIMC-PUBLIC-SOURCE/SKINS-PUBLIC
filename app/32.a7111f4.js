(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{362:function(e,a,r){"use strict";r.r(a),r.d(a,"registerNavbarPicker",(function(){return o})),r.d(a,"registerSidebarPicker",(function(){return p}));var c=r(363),t=r(372),i=r(364),s=r(386),b=r(183),n=r(340),l=r(365);function o(e,a,r){const o=Object(c.a)(a,"click").pipe(Object(b.a)(e=>e.target),Object(n.a)(e=>"INPUT"===e.tagName),Object(b.a)(e=>e.value));Object(t.a)(Object(i.a)(r),o).pipe(Object(l.a)()).subscribe(([a,r])=>{e.classList.replace(`navbar-${a}`,`navbar-${r}`)});const[d,u]=Object(s.a)(o,e=>["light","warning","white","orange","lime"].includes(e));d.subscribe(()=>{e.classList.remove("navbar-dark"),e.classList.add("navbar-light")}),u.subscribe(()=>{e.classList.remove("navbar-light"),e.classList.add("navbar-dark")})}const d=document.querySelector(".wrapper > nav"),u=document.querySelector("#navbar-color-picker");function p(e,{dark:a,light:r},s){const o=Object(t.a)(Object(c.a)(a,"click"),Object(c.a)(r,"click")).pipe(Object(b.a)(e=>e.target),Object(n.a)(e=>"INPUT"===e.tagName),Object(b.a)(e=>e.value));Object(t.a)(Object(i.a)(s),o).pipe(Object(l.a)()).subscribe(([a,r])=>{e.classList.replace(`sidebar-${a}`,`sidebar-${r}`)})}d&&u&&o(d,u,blessing.extra.navbar||"white");const j=document.querySelector(".main-sidebar"),O=document.querySelector("#sidebar-dark-picker"),g=document.querySelector("#sidebar-light-picker");j&&O&&g&&p(j,{dark:O,light:g},blessing.extra.sidebar||"dark-primary")}}]);