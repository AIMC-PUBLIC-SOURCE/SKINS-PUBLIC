(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{368:function(t,e,n){"use strict";n.r(e);var a=n(86),i=(n(84),n(3)),s=n(59),l=n(42),o={name:"Market",components:{VueGoodTable:a.a},mixins:[l.a,s.a],data(){return{plugins:[],columns:[{field:"title",label:this.$t("admin.pluginTitle")},{field:"description",label:this.$t("admin.pluginDescription"),sortable:!1,width:"37%"},{field:"author",label:this.$t("admin.pluginAuthor")},{field:"version",label:this.$t("admin.pluginVersion"),sortable:!1,globalSearchDisabled:!0,width:"5%"},{field:"dependencies",label:this.$t("admin.pluginDependencies"),sortable:!1,globalSearchDisabled:!0},{field:"operations",label:this.$t("admin.operationsTitle"),sortable:!1,globalSearchDisabled:!0,width:"12%"}],installing:""}},beforeMount(){this.fetchData()},methods:{async fetchData(){this.plugins=await this.$http.get("/admin/plugins/market/list")},async installPlugin({name:t,originalIndex:e}){this.installing=t;const{code:n,message:a,data:s}=await this.$http.post("/admin/plugins/market/download",{name:t});0===n?(i.b.success(a),this.plugins[e].can_update=!1,this.plugins[e].installed=!0):s&&s.reason?function(t,e){const n=document.createElement("div"),a=document.createElement("p");a.textContent=t,n.appendChild(a);const s=document.createElement("ul");e.forEach(t=>{const e=document.createElement("li");e.textContent=t,s.appendChild(e)}),n.appendChild(s),Object(i.a)({mode:"alert",dangerousHTML:n.outerHTML})}(a,s.reason):i.b.error(a),this.installing=""},async updatePlugin(t){try{await Object(i.a)({text:this.$t("admin.confirmUpdate",{plugin:t.title,old:t.installed,new:t.version})})}catch{return}this.installPlugin(t)}}},d=n(41),r=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("vue-good-table",{attrs:{rows:t.plugins,columns:t.columns,"search-options":t.tableOptions.search,"pagination-options":t.tableOptions.pagination,"style-class":"vgt-table striped"},scopedSlots:t._u([{key:"table-row",fn:function(e){return["title"===e.column.field?n("span",[n("strong",[t._v(t._s(e.formattedRow[e.column.field]))]),t._v(" "),n("div",[t._v(t._s(e.row.name))])]):"dependencies"===e.column.field?n("span",[0===Object.keys(e.row.dependencies.all).length?n("span",[n("i",{directives:[{name:"t",rawName:"v-t",value:"admin.noDependencies",expression:"'admin.noDependencies'"}]})]):n("div",t._l(e.row.dependencies.all,(function(a,i){return n("span",{key:i,staticClass:"badge",class:"bg-"+(i in e.row.dependencies.unsatisfied?"red":"green")},[t._v("\n            "+t._s(i)+": "+t._s(a)+"\n            "),n("br")])})),0)]):"operations"===e.column.field?n("span",[e.row.installed?[e.row.can_update?n("button",{staticClass:"btn btn-success",attrs:{disabled:t.installing===e.row.name},on:{click:function(n){return t.updatePlugin(e.row)}}},[t.installing===e.row.name?[n("i",{staticClass:"fas fa-spinner fa-spin"}),t._v(" "+t._s(t.$t("admin.pluginUpdating"))+"\n            ")]:[n("i",{staticClass:"fas fa-sync-alt"}),t._v(" "+t._s(t.$t("admin.updatePlugin"))+"\n            ")]],2):n("button",{staticClass:"btn btn-default",attrs:{disabled:""}},[n("i",{staticClass:"fas fa-download"}),t._v(" "+t._s(t.$t("admin.installPlugin"))+"\n          ")])]:n("button",{staticClass:"btn btn-default",attrs:{disabled:t.installing===e.row.name},on:{click:function(n){return t.installPlugin(e.row)}}},[t.installing===e.row.name?[n("i",{staticClass:"fas fa-spinner fa-spin"}),t._v(" "+t._s(t.$t("admin.pluginInstalling"))+"\n          ")]:[n("i",{staticClass:"fas fa-download"}),t._v(" "+t._s(t.$t("admin.installPlugin"))+"\n          ")]],2)],2):n("span",{domProps:{textContent:t._s(e.formattedRow[e.column.field])}})]}}])})],1)}),[],!1,null,null,null);e.default=r.exports},42:function(t,e,n){"use strict";var a=n(5),i=n(2);e.a=a.a.extend({mounted(){i.a("mounted",{el:this.$root.$options.el})}})},59:function(t,e,n){"use strict";var a=n(5);e.a=a.a.extend({data(){return{tableOptions:{search:{enabled:!0,placeholder:this.$t("vendor.datatable.search")},pagination:{enabled:!0,nextLabel:this.$t("vendor.datatable.next"),prevLabel:this.$t("vendor.datatable.prev"),rowsPerPageLabel:this.$t("vendor.datatable.rowsPerPage"),allLabel:this.$t("vendor.datatable.all"),ofLabel:this.$t("vendor.datatable.of")}}}}})}}]);