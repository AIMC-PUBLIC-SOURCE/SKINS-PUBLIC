(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{374:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(1),o=a(5);const r=document.querySelector("#reset-avatar");null==r||r.addEventListener("click",(async function(){try{await Object(n.a)({text:Object(c.a)("user.resetAvatarConfirm")})}catch(e){return}const{message:e}=await Object(o.c)("/user/profile/avatar",{tid:0});n.b.success(e),document.querySelectorAll('[alt="User Image"]').forEach(e=>{e.src+=`?${(new Date).getTime()}`})}));const s=document.querySelector("#change-password");null==s||s.addEventListener("submit",(async function(e){e.preventDefault();const t=e.target,a=t.oldPassword.value,r=t.newPassword.value;if(r!==t.confirm.value)return n.b.error(Object(c.b)("auth.invalidConfirmPwd")),void t.confirm.focus();const{code:s,message:i}=await Object(o.c)("/user/profile?action=password",{current_password:a,new_password:r});await Object(n.a)({mode:"alert",text:i}),0===s&&(window.location.href=`${blessing.base_url}/auth/login`)}));const i=document.querySelector("#change-nickname");null==i||i.addEventListener("submit",(async function(e){e.preventDefault();const t=e.target.nickname.value,{code:a,message:c}=await Object(o.c)("/user/profile?action=nickname",{new_nickname:t});Object(n.a)({mode:"alert",text:c}),0===a&&document.querySelectorAll('[data-mark="nickname"]').forEach(e=>{e.textContent=t})}));const l=document.querySelector("#change-email");null==l||l.addEventListener("submit",(async function(e){e.preventDefault();const t=e.target,a=t.email.value,c=t.password.value,{code:r,message:s}=await Object(o.c)("/user/profile?action=email",{new_email:a,password:c});await Object(n.a)({mode:"alert",text:s}),0===r&&(window.location.href=`${blessing.base_url}/auth/login`)}));const u=document.querySelector("#modal-delete-account");null==u||u.addEventListener("submit",(async function(e){e.preventDefault();const t=e.target.password.value,{code:a,message:c}=await Object(o.c)("/user/profile?action=delete",{password:t});await Object(n.a)({mode:"alert",text:c}),0===a&&(window.location.href=blessing.base_url)}))}}]);