webpackJsonp([1,2],{21:function(e,t,a){"use strict";var r=a(1),s=a(84),o=a(79),n=a.n(o),i=a(80),u=a.n(i);r.a.use(s.a);var c=[{path:"/",name:"loginseup",component:n.a},{path:"/login",name:"login",component:u.a},{path:"*",redirect:"/"}];t.a=new s.a({mode:"history",linkActiveClass:"active",routes:c})},22:function(e,t,a){"use strict";var r=a(1),s=a(8),o=a(9),n=a(26),i=a.n(n);r.a.use(s.a);var u={host:{id:0,ip:"",user:"",pwd:""},axios_instance:i.a.create({baseUrl:o.a.baseUrl,timeout:2e3,headers:{user:"",pwd:"",database:"",server_ip:"",port:1433,models:"config",host_id:0}})},c={SET_HOST_ID:function(e,t){e.host.id=t},SET_HOST_IP:function(e,t){e.host.ip=t},SET_HOST_USER:function(e,t){e.host.user=t},SET_HOST_PWD:function(e,t){e.host.pwd=t}},l={host:function(e){return e.host},axios_instance:function(e){return i.a.create({baseUrl:o.a.baseUrl,timeout:2e3,headers:{user:e.host.user,pwd:e.host.pwd,database:"BD_COMERCIAL",server_ip:e.host.ip,port:1433,models:"config",host_id:e.host.id}})}};t.a=new s.a.Store({state:u,mutations:c,getters:l})},23:function(e,t){},24:function(e,t){},25:function(e,t,a){a(75);var r=a(7)(a(44),a(81),null,null);e.exports=r.exports},44:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(15),s=a.n(r),o=a(8);t.default={created:function(){this.$store.commit("SET_HOST_IP",this.$route.query.ip),this.$store.commit("SET_HOST_USER",this.$route.query.user),this.$store.commit("SET_HOST_PWD",this.$route.query.pwd),this.$store.commit("SET_HOST_ID",this.$route.query.id),this.$router.push("/login")},computed:s()({},a.i(o.b)(["host"]))}},46:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(15),s=a.n(r),o=a(8),n=a(9);t.default={data:function(){return{userName:"",pwd:"",selected:"",databases:[]}},computed:s()({},a.i(o.b)(["host","axios_instance"]),{shouldEnableComprobar:function(){return!(!this.userName.trim()||!this.pwd.trim())}}),methods:{logginCheck:function(){this.axios_instance.get(n.a.baseUrl+"/login-check").then(function(e){e.user_profile.databases.forEach(function(e){this.databases.push({text:e.DataBaseName,value:e.DataBaseName})})},function(e){console.log(e)})}}}},75:function(e,t){},76:function(e,t){},77:function(e,t){},79:function(e,t,a){a(77);var r=a(7)(a(45),a(83),"data-v-ead08014",null);e.exports=r.exports},80:function(e,t,a){a(76);var r=a(7)(a(46),a(82),"data-v-5bdd7406",null);e.exports=r.exports},81:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{attrs:{src:"static/img/logo.png",alt:""}}),e._v(" "),e._m(0),e._v(" "),a("form",[a("div",{staticClass:"container"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userName"}},[e._v("Nombre de Usuario")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.userName,expression:"userName",arg:"value"},{name:"focus",rawName:"v-focus",arg:"value"}],staticClass:"form-control",attrs:{type:"text",id:"userName",placeholder:"Nombre de Usuario"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"pwd"}},[e._v("Contraseña")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.pwd,expression:"pwd",arg:"value"}],staticClass:"form-control pwd",attrs:{type:"password",id:"pwd",placeholder:"Contraseña"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=t.target.multiple?a:a[0]}}},e._l(e.databases,function(t){return a("option",{domProps:{value:t.value}},[e._v("\n              "+e._s(e.bd)+"\n          ")])}))]),e._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"button",name:"comprobar",value:"Comprobar",disabled:!e.shouldEnableComprobar},on:{click:e.logginCheck}})])]),e._v(" "),a("pre",[e._v(e._s(e.$data))]),e._v(" "),a("pre",[e._v(e._s(e.host))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[a("b",[e._v("Quality WEB")]),e._v(" "),a("small",[e._v("Inicia Sesión")])])}]}},83:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("Loading ...")])])}]}},87:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),s=a(25),o=a.n(s),n=a(21),i=a(24),u=(a.n(i),a(23)),c=(a.n(u),a(22));r.a.config.productionTip=!1,r.a.directive("focus",{inserted:function(e){e.focus()}}),new r.a({el:"#app",router:n.a,store:c.a,template:"<App/>",components:{App:o.a}})},9:function(e,t,a){"use strict";const r={baseUrl:"https://qsmanager-api.herokuapp.com"};t.a=r}},[87]);
//# sourceMappingURL=app.4ff63ff17fe6413b8e07.js.map