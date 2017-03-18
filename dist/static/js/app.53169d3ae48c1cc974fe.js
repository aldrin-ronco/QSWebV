webpackJsonp([1,2],{21:function(e,t,a){"use strict";var s=a(1),o=a(84),n=a(79),r=a.n(n),i=a(80),u=a.n(i);s.a.use(o.a);var c=[{path:"/",name:"loginseup",component:r.a},{path:"/login",name:"login",component:u.a},{path:"*",redirect:"/"}];t.a=new o.a({mode:"history",linkActiveClass:"active",routes:c})},22:function(e,t,a){"use strict";var s=a(1),o=a(8),n=a(9),r=a(26),i=a.n(r);s.a.use(o.a);var u={host:{id:0,ip:"",user:"",pwd:"",companyLogo:""},axios_instance:i.a.create({baseUrl:n.a.baseUrlWebApi,headers:{user:"",pwd:"",database:"",server_ip:"",port:1433,models:"config",host_id:0}})},c={SET_HOST_ID:function(e,t){e.host.id=t},SET_HOST_IP:function(e,t){e.host.ip=t},SET_HOST_USER:function(e,t){e.host.user=t},SET_HOST_PWD:function(e,t){e.host.pwd=t},SET_COMPANY_LOGO:function(e,t){e.host.companyLogo=t}},l={host:function(e){return e.host},axios_instance:function(e){return i.a.create({baseUrl:n.a.baseUrl,timeout:2e3,headers:{user:e.host.user,pwd:e.host.pwd,database:"BD_COMERCIAL",server_ip:e.host.ip,port:1433,models:"config",host_id:e.host.id}})}};t.a=new o.a.Store({state:u,mutations:c,getters:l})},23:function(e,t){},24:function(e,t){},25:function(e,t,a){a(75);var s=a(7)(a(44),a(81),null,null);e.exports=s.exports},44:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(15),o=a.n(s),n=a(8);t.default={created:function(){this.$store.commit("SET_HOST_IP",this.$route.query.ip),this.$store.commit("SET_HOST_USER",this.$route.query.user),this.$store.commit("SET_HOST_PWD",this.$route.query.pwd),this.$store.commit("SET_HOST_ID",this.$route.query.id),this.$store.commit("SET_COMPANY_LOGO",this.$route.query.logo),this.$router.push("/login")},computed:o()({},a.i(n.b)(["host"]))}},46:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(15),o=a.n(s),n=a(8),r=a(9);t.default={data:function(){return{userName:"",pwd:"",selected:"",databases:[],isSubmited:!1,isSent:!1}},computed:o()({},a.i(n.b)(["host","axios_instance"]),{shouldEnableComprobar:function(){return!(!this.userName.trim()||!this.pwd.trim())},showCompany:function(){return!!this.databases.length},btnStatus:function(){return"Comprobando"}}),methods:{logginCheck:function(){var e=this;this.axios_instance.get(r.a.baseUrlWebApi+"/login-check",{timeout:1e4}).then(function(t){console.log(t),t.data.user_profile.databases.forEach(function(t){e.databases.push({text:t.DataBaseAlias,value:t.DataBaseName})}),t.data.user_profile.databases.length>0&&(e.selected=t.data.user_profile.databases[0].DataBaseName)},function(e){console.log(e)})}}}},75:function(e,t){},76:function(e,t){},77:function(e,t){},79:function(e,t,a){a(77);var s=a(7)(a(45),a(83),"data-v-ead08014",null);e.exports=s.exports},80:function(e,t,a){a(76);var s=a(7)(a(46),a(82),"data-v-5bdd7406",null);e.exports=s.exports},81:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{staticClass:"logo",attrs:{src:e.host.companyLogo,alt:""}}),e._v(" "),e._m(0),e._v(" "),a("form",[a("div",{staticClass:"container"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userName"}},[e._v("Nombre de Usuario")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.userName,expression:"userName",arg:"value"},{name:"focus",rawName:"v-focus",arg:"value"}],staticClass:"form-control",attrs:{type:"text",id:"userName",placeholder:"Nombre de Usuario"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"pwd"}},[e._v("Contraseña")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.pwd,expression:"pwd",arg:"value"}],staticClass:"form-control pwd",attrs:{type:"password",id:"pwd",placeholder:"Contraseña"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showCompany,expression:"showCompany"}],staticClass:"form-group"},[a("label",{attrs:{for:"dbases"}},[e._v("Empresa")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"form-control",attrs:{id:"dbases"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=t.target.multiple?a:a[0]}}},e._l(e.databases,function(t){return a("option",{domProps:{value:t.value}},[e._v("\n              "+e._s(t.text)+"\n          ")])}))]),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{name:"comprobar",disabled:!e.shouldEnableComprobar},on:{click:e.logginCheck}},[a("span",{staticClass:"btnSpinner"}),e._v("\n             "+e._s(e.btnStatus)+"\n      ")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[a("b",[e._v("Quality WEB")]),e._v(" "),a("small",[e._v("Inicia Sesión")])])}]}},83:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("Loading ...")])])}]}},87:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),o=a(25),n=a.n(o),r=a(21),i=a(24),u=(a.n(i),a(23)),c=(a.n(u),a(22));s.a.config.productionTip=!1,s.a.directive("focus",{inserted:function(e){e.focus()}}),new s.a({el:"#app",router:r.a,store:c.a,template:"<App/>",components:{App:n.a}})},9:function(e,t,a){"use strict";const s={baseUrl:"https://qsmanager-api.herokuapp.com",baseUrlWebApi:"https://qsweb-api.herokuapp.com"};t.a=s}},[87]);
//# sourceMappingURL=app.53169d3ae48c1cc974fe.js.map