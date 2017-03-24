webpackJsonp([1,2],{21:function(e,t,s){"use strict";var a=s(1),o=s(84),i=s(79),n=s.n(i),r=s(80),u=s.n(r);a.a.use(o.a);var c=[{path:"/",name:"loginseup",component:n.a},{path:"/login",name:"login",component:u.a},{path:"*",redirect:"/"}];t.a=new o.a({mode:"history",linkActiveClass:"active",routes:c})},22:function(e,t,s){"use strict";var a=s(1),o=s(8),i=s(9),n=s(26),r=s.n(n);a.a.use(o.a);var u={company:{logo:""},axios_config:{baseUrl:i.a.baseUrlWebApi,headers:{host_user:"",host_pwd:"",host_ip:"",host_port:1433,host_id:0,user_name:"",user_pwd:"",models:"config",database:""}}},c={SET_HOST_ID:function(e,t){e.axios_config.headers.host_id=t},SET_HOST_IP:function(e,t){e.axios_config.headers.host_ip=t},SET_HOST_USER:function(e,t){e.axios_config.headers.host_user=t},SET_HOST_PWD:function(e,t){e.axios_config.headers.host_pwd=t},SET_HOST_DATABASE:function(e,t){e.axios_config.headers.database=t},SET_USER_NAME:function(e,t){e.axios_config.headers.user_name=t},SET_USER_PWD:function(e,t){e.axios_config.headers.user_pwd=t},SET_COMPANY_LOGO:function(e,t){e.company.logo=t}},l={company:function(e){return e.company},axios_instance:function(e){return r.a.create(e.axios_config)},axios_config:function(e){return e.axios_config}};t.a=new o.a.Store({state:u,mutations:c,getters:l})},23:function(e,t){},24:function(e,t){},25:function(e,t,s){s(75);var a=s(7)(s(44),s(81),null,null);e.exports=a.exports},44:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},45:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(15),o=s.n(a),i=s(8);t.default={created:function(){this.$store.commit("SET_HOST_IP",this.$route.query.ip),this.$store.commit("SET_HOST_USER",this.$route.query.user),this.$store.commit("SET_HOST_PWD",this.$route.query.pwd),this.$store.commit("SET_HOST_ID",this.$route.query.id),this.$store.commit("SET_COMPANY_LOGO",this.$route.query.logo),this.$router.push("/login")},computed:o()({},s.i(i.b)(["host"]))}},46:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(15),o=s.n(a),i=s(8),n=s(9);t.default={data:function(){return{databases:[],isSubmited:!1,isSent:!1,loggin_error:!1}},computed:o()({},s.i(i.b)(["company","axios_config","axios_instance"]),{showSpinner:function(){return this.isSubmited&&!this.isSent},formSubmited:function(){return this.isSubmited},shouldEnableComprobar:function(){var e=this;return!(this.isSubmited&&!this.isSent)&&(!this.loggin_error&&!(!e.axios_config.headers.user_name.trim()||!e.axios_config.headers.user_pwd.trim()))},showCompany:function(){return!!this.databases.length},buttonStatusMsg:function(){return!this.isSubmited||this.isSent||this.loggin_error?this.isSent&&!this.loggin_error?"Iniciar Sesión":"Comprobar":"Comprobando"},hasLogginErrors:function(){return this.loggin_error}}),methods:{setUserName:function(e){this.$store.commit("SET_USER_NAME",e.target.value.toUpperCase())},setUserPwd:function(e){this.$store.commit("SET_USER_PWD",e.target.value)},logginCheck:function(e){if(e.preventDefault(),this.isSent)return alert("Aqui va el dash board !");var t=this;t.isSubmited=!0,t.axios_instance.get(n.a.baseUrlWebApi+"/login-check",{timeout:3e4}).then(function(e){console.log(e),e.data.logged?(t.isSent=!0,e.data.user_profile.databases.forEach(function(e){t.databases.push({text:e.DataBaseAlias,value:e.DataBaseName})}),e.data.user_profile.databases.length>0&&t.$store.commit("SET_HOST_DATABASE",e.data.user_profile.databases[0].DataBaseName)):(t.loggin_error=!0,t.isSent=!0,setTimeout(function(){t.isSubmited=!1,t.isSent=!1,t.loggin_error=!1},4e3))},function(e){console.log(e)}).catch(function(e){console.log(e)})}}}},75:function(e,t){},76:function(e,t){},77:function(e,t){},79:function(e,t,s){s(77);var a=s(7)(s(45),s(83),"data-v-ead08014",null);e.exports=a.exports},80:function(e,t,s){s(76);var a=s(7)(s(46),s(82),"data-v-5bdd7406",null);e.exports=a.exports},81:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("img",{staticClass:"logo",attrs:{src:e.company.logo,alt:""}}),e._v(" "),e._m(0),e._v(" "),s("form",[s("div",{staticClass:"container"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"userName"}},[e._v("Nombre de Usuario")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model:value",value:e.axios_config.headers.user_name,expression:"axios_config.headers.user_name",arg:"value"},{name:"focus",rawName:"v-focus",arg:"value"}],staticClass:"form-control",staticStyle:{"text-transform":"uppercase"},attrs:{type:"text",id:"userName",placeholder:"Nombre de Usuario",disabled:e.formSubmited},domProps:{value:e.axios_config.headers.user_name},on:{input:[function(t){t.target.composing||(e.axios_config.headers.user_name=t.target.value)},function(t){e.setUserName(t)}]}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"pwd"}},[e._v("Contraseña")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model:value",value:e.axios_config.headers.user_pwd,expression:"axios_config.headers.user_pwd",arg:"value"}],staticClass:"form-control pwd",attrs:{type:"password",id:"pwd",placeholder:"Contraseña",disabled:e.formSubmited},domProps:{value:e.axios_config.headers.user_pwd},on:{input:[function(t){t.target.composing||(e.axios_config.headers.user_pwd=t.target.value)},function(t){e.setUserPwd(t)}]}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showCompany,expression:"showCompany"}],staticClass:"form-group"},[s("label",{attrs:{for:"dbases"}},[e._v("Empresa")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.axios_config.headers.database,expression:"axios_config.headers.database"}],staticClass:"form-control",attrs:{id:"dbases"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.axios_config.headers.database=t.target.multiple?s:s[0]}}},e._l(e.databases,function(t){return s("option",{domProps:{value:t.value}},[e._v("\n              "+e._s(t.text)+"\n          ")])}))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.hasLogginErrors,expression:"hasLogginErrors"}],staticClass:"isa_warning",staticStyle:{"border-radius":".5em","box-shadow":"1px 1px 3px #888"}},[s("i",{staticClass:"fa fa-warning"}),e._v("\n        usuario o contraseña incorrecto\n      ")]),e._v(" "),s("div",{staticClass:"flex-container"},[s("button",{staticClass:"btn btn-primary flex-item",attrs:{name:"btnComprobar",disabled:!e.shouldEnableComprobar},on:{click:function(t){e.logginCheck(t)}}},[s("span",{class:{glyphicon:e.isSubmited&&!e.isSent,"glyphicon-refresh":e.isSubmited&&!e.isSent,spinning:e.isSubmited&&!e.isSent}}),e._v("\n          "+e._s(e.buttonStatusMsg)+"\n        ")])])])]),e._v(" "),s("pre",[e._v(e._s(e.$data))]),e._v(" "),s("pre",[e._v(e._s(e.axios_config))]),e._v(" "),s("pre",[e._v(e._s(e.showCompany))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("b",[e._v("Quality WEB")]),e._v(" "),s("small",[e._v("Inicia Sesión")])])}]}},83:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v("Loading ...")])])}]}},87:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),o=s(25),i=s.n(o),n=s(21),r=s(24),u=(s.n(r),s(23)),c=(s.n(u),s(22));a.a.config.productionTip=!1,a.a.directive("focus",{inserted:function(e){e.focus()}}),new a.a({el:"#app",router:n.a,store:c.a,template:"<App/>",components:{App:i.a}})},9:function(e,t,s){"use strict";const a={baseUrl:"https://qsmanager-api.herokuapp.com",baseUrlWebApi:"https://qsweb-api.herokuapp.com"};t.a=a}},[87]);
//# sourceMappingURL=app.11d6217329bed1b7389f.js.map