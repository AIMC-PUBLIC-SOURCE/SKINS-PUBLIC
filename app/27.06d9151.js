(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{202:function(e,t,n){var a=n(15),o=n(203);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},s=(a(e.i,o,i),o.locals?o.locals:{});e.exports=s},203:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n.n(a)()(!1);o.push([e.i,".terminal__3hLvz{z-index:1060;position:fixed;bottom:7vh;-webkit-user-select:none;-ms-user-select:none;user-select:none}@media(min-width: 1200px){.terminal__3hLvz{left:25vw;width:50vw;height:50vh}}@media(min-width: 768px)and (max-width: 1200px){.terminal__3hLvz{left:5vw;width:90vw;height:40vh}}@media(max-width: 768px){.terminal__3hLvz{left:1vw;width:98vw;height:35vh}}.body__1oPMf{background-color:#000}",""]),o.locals={terminal:"terminal__3hLvz",body:"body__1oPMf"},t.default=o},351:function(e,t,n){"use strict";n.r(t),n.d(t,"launch",(function(){return w}));var a=n(0),o=n.n(a),i=n(4),s=n.n(i),l=n(198),r=n(199),d=n(74),c=(n(200),n(201)),m=n.n(c),u=n(202),h=n.n(u);let f=!1;const v=e=>{const t=Object(a.useRef)(null);return Object(a.useEffect)(()=>{const e=t.current;if(!e)return;const n=new l.Terminal,a=new r.FitAddon;n.loadAddon(a),n.setOption("fontFamily",'Monaco, Consolas, "Roboto Mono", "Noto Sans", "Droid Sans Mono"'),n.open(e),a.fit();const o=new d.a(n),i=n.onData(e=>o.input(e));return f=!0,()=>{i.dispose(),o.free(),a.dispose(),n.dispose(),f=!1}},[]),o.a.createElement(m.a,{handle:".card-header"},o.a.createElement("div",{className:`card ${h.a.terminal}`},o.a.createElement("div",{className:"card-header"},o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("h4",{className:"card-title mt-1"},"Blessing Skin Shell"),o.a.createElement("button",{className:"btn btn-default",onClick:e.onClose},"×"))),o.a.createElement("div",{className:`card-body p-2 ${h.a.body}`,ref:t})))};function w(){if(f)return;const e=document.createElement("div");document.body.appendChild(e);s.a.render(o.a.createElement(v,{onClose:()=>{s.a.unmountComponentAtNode(e),e.remove()}}),e)}}}]);