(this.webpackJsonpfitnet=this.webpackJsonpfitnet||[]).push([[0],{227:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=n(24),s=n(40),l=n(15),u=n(44),j=n.n(u),d=n(60),b=n(266),h=n(281),p=n(272),m=n(275),O=(n(94),n(273)),x=n(274),f=n(73),g=n(19),v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(a.useState)(n),c=Object(o.a)(r,2),i=c[0],s=c[1],l=function(){s(n)},u=function(e){var t=e.target;s(Object(g.a)(Object(g.a)({},i),{},Object(f.a)({},t.name,t.value)))};return[i,u,l]},y=n(32),w="[Auth] Login",N="[Auth] Logout",E="[UI] Set Error",C="[UI] Remove Error",A="[UI] Start loading",I="[UI] Finish loading",S=n(61);n(229),n(142);S.a.initializeApp({apiKey:"AIzaSyA4Xfyf_HiNsv1w1KnE80en2Sp9c8HeRXc",authDomain:"fitnet-app-410a4.firebaseapp.com",projectId:"fitnet-app-410a4",storageBucket:"fitnet-app-410a4.appspot.com",messagingSenderId:"917561381160",appId:"1:917561381160:web:6c79d5cafc6e754f0cc01d"});S.a.firestore();var P=new S.a.auth.GoogleAuthProvider,_=function(e,t){return{type:E,payload:e,input:t}},k=function(){return{type:I}},B=n(85),T=n.n(B),R=function(e,t,n){return function(a){a({type:A}),S.a.auth().signInWithEmailAndPassword(e,t).then((function(e){a(W(e.user.uid,e.user.displayName)),a(k()),n.replace("/")})).catch((function(e){T.a.fire({title:"Error Login",text:e.message,icon:"error"}).then(a(k()))}))}},W=function(e,t,n){return{type:w,payload:{uid:e,displayName:t,email:n}}},D=function(){return{type:N}},F=n(111),q=n.n(F),U=n(3),z=function(e){var t=e.history,n=Object(y.b)(),a=Object(y.c)((function(e){return e})).loading,r=v({email:"",password:""}),c=Object(o.a)(r,2),i=c[0],l=c[1],u=i.email,f=i.password,g=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n(R(u,f,t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{children:Object(U.jsxs)(b.a,{container:!0,className:"contenedor",children:[Object(U.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(U.jsx)("img",{src:"https://i.pinimg.com/564x/16/08/24/1608243ae65d90c5e1769c14c44ce12b.jpg",style:{width:"100%",height:"100vh",objectFit:"cover"},alt:"brand"})}),Object(U.jsxs)(b.a,{container:!0,className:"itemRight",item:!0,xs:12,sm:6,alignItems:"center",direction:"column",justify:"space-between",children:[Object(U.jsx)("div",{}),Object(U.jsxs)("div",{className:"containerTextlogin",children:[Object(U.jsx)(b.a,{container:!0,justify:"center",children:Object(U.jsx)("img",{src:"https://thumbs.dreamstime.com/b/logotipo-del-club-de-fitness-115039443.jpg",width:200,alt:"logo"})}),Object(U.jsxs)("form",{onSubmit:g,method:"POST",children:[Object(U.jsx)(h.a,{label:"Correo",name:"email",onChange:l,margin:"normal",required:!0,InputProps:{startAdornment:Object(U.jsx)(p.a,{position:"start",children:Object(U.jsx)(O.a,{})})}}),Object(U.jsx)(h.a,{label:"Contrase\xf1a",name:"password",onChange:l,margin:"normal",type:"password",required:!0,InputProps:{startAdornment:Object(U.jsxs)(p.a,{position:"start",children:[Object(U.jsx)(x.a,{})," "]})}}),Object(U.jsx)("div",{className:"spaceDiv"}),Object(U.jsx)(m.a,{color:"primary",type:"submit",size:"medium",disabled:a,variant:"contained",children:"Ingresar"})]}),Object(U.jsx)(s.b,{to:"/auth/register",className:"link",children:"Create new account"})]}),Object(U.jsxs)(b.a,{container:!0,justify:"center",spacing:2,children:[Object(U.jsx)(b.a,{item:!0,children:Object(U.jsx)(q.a,{type:"dark",onClick:function(){n((function(e){S.a.auth().signInWithPopup(P).then((function(t){var n=t.user;e(W(n.uid,n.displayName,n.email))}))}))}})}),Object(U.jsx)(b.a,{item:!0})]}),Object(U.jsx)("div",{})]})]})})},L=n(116),M=n.n(L),G=n(270),H=n(271),X=n(284),J=n(276),K=n(282),V=n(283),Q=n(88),Y=n.n(Q),Z={marginBottom:10,marginTop:10},$=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.ui})),n=t.msgError,r=t.input,c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(a.useState)("male"),b=Object(o.a)(u,2),O=b[0],x=b[1],f=v({name:" ",email:" ",phoneNumber:" ",password:" ",password2:" ",age:0}),g=Object(o.a)(f,2),w=g[0],N=g[1],E=w.name,A=w.email,I=w.phoneNumber,P=w.password,B=w.password2,R=w.age,D=function(){return void 0===E||E.trim().length<=1?(e(_("Name is required","name")),!1):void 0!==A&&M.a.isEmail(A)?void 0===I||I.length<9?(e(_("Phone number should be least 9 characters","phoneNumber")),!1):I.length>15?(e(_("Phone number should be less than 16 characters","phoneNumber")),!1):P!==B?(e(_("Passwords slould be match","password")),!1):P.length<7?(e(_("Password slould be least 7 characters","password")),!1):R<1||R>125?(e(_("Enter valid age range","age")),!1):s?(e({type:C}),!0):(e(_("Accept terms and conditions","conditions")),!1):(e(_("Email not valid","email")),!1)};return Object(U.jsxs)("form",{onSubmit:function(t){t.preventDefault(),D()&&(console.log(E,A,I,P,B,O,R,s),e(function(e,t,n,a,r,c,i){return function(n){S.a.auth().createUserWithEmailAndPassword(t,a).then(function(){var t=Object(d.a)(j.a.mark((function t(a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.user,t.next=3,r.updateProfile({displayName:e});case 3:n(W(r.uid,r.displayName,r.email));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){T.a.fire({title:"Error Register",text:e.message,icon:"error"}).then(n(k()))}))}}(E,A,0,P)))},children:[Object(U.jsx)(h.a,{fullWidth:!0,label:"Name",name:"name",onChange:N,placeholder:"Enter your name",style:Z,error:Boolean("name"===r),helperText:"name"===r&&n,variant:"outlined",focused:Boolean("name"===r),autoFocus:Boolean("name"===r)}),Object(U.jsx)(h.a,{fullWidth:!0,label:"Email",name:"email",onChange:N,placeholder:"Enter your email",style:Z,variant:"outlined",error:Boolean("email"===r),helperText:"email"===r&&n}),Object(U.jsx)(h.a,{fullWidth:!0,label:"Phone Number",name:"phoneNumber",onChange:N,placeholder:"Enter your phone number",style:Z,variant:"outlined",error:Boolean("phoneNumber"===r),helperText:"phoneNumber"===r&&n}),Object(U.jsx)(h.a,{fullWidth:!0,label:"Password",name:"password",onChange:N,type:"password",placeholder:"Enter your password",style:Z,error:Boolean("password"===r),helperText:"password"===r&&n,variant:"outlined",required:!0,InputProps:{startAdornment:Object(U.jsx)(p.a,{position:"start",children:Object(U.jsx)(Y.a,{})})}}),Object(U.jsx)(h.a,{fullWidth:!0,label:"Confirm Password",name:"password2",onChange:N,type:"password",placeholder:"Confirm your password",style:Z,error:Boolean("password2"===r),helperText:"password2"===r&&n,variant:"outlined",required:!0,InputProps:{startAdornment:Object(U.jsx)(p.a,{position:"start",children:Object(U.jsx)(Y.a,{})})}}),Object(U.jsx)(h.a,{fullWidth:!0,label:"Age",name:"age",onChange:N,placeholder:"Enter your age",type:"number",style:Z,error:Boolean("age"===r),helperText:"age"===r&&n,variant:"outlined"}),Object(U.jsxs)(G.a,{component:"fieldset",style:Z,children:[Object(U.jsx)(H.a,{component:"legend",children:"Gender"}),Object(U.jsxs)(X.a,{"aria-label":"gender",value:O,onChange:function(e){e.preventDefault(),x(e.target.value)},name:"gender",style:{display:"initial"},children:[Object(U.jsx)(J.a,{value:"female",control:Object(U.jsx)(K.a,{}),label:"Female"}),Object(U.jsx)(J.a,{value:"male",control:Object(U.jsx)(K.a,{}),label:"Male"}),Object(U.jsx)(J.a,{value:"no-binary",control:Object(U.jsx)(K.a,{}),label:"Non-Binary"})]})]}),Object(U.jsx)(J.a,{control:Object(U.jsx)(V.a,{value:s,onClick:function(e){e.preventDefault(),l(!s)}}),label:"I accept the terms and conditions.",style:Z}),Object(U.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",children:"Sign up"})]})},ee=function(){return Object(U.jsx)("div",{children:Object(U.jsxs)(b.a,{container:!0,className:"contenedor",children:[Object(U.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(U.jsx)("img",{src:"https://www.mensjournal.com/wp-content/uploads/mf/the_15_most_important_exercises_for_men_main.jpg?quality=86&strip=all",style:{width:"100%",height:"100vh",objectFit:"cover"},alt:"brand"})}),Object(U.jsxs)(b.a,{container:!0,className:"itemRight",item:!0,xs:12,sm:6,alignItems:"center",direction:"column",justify:"space-between",children:[Object(U.jsx)("div",{}),Object(U.jsxs)("div",{className:"containerTextRegister",children:[Object(U.jsx)("h2",{className:"tittle",children:"Register new user"}),Object(U.jsx)($,{}),Object(U.jsx)(s.b,{to:"/auth/login",className:"link",children:"Already registered?"})]}),Object(U.jsx)("div",{})]})]})})},te=function(){return Object(U.jsx)("div",{className:"auth__main",children:Object(U.jsx)("div",{className:"auth__box-container",children:Object(U.jsxs)(l.d,{children:[Object(U.jsx)(l.b,{exact:!0,path:"/auth/login",component:z}),Object(U.jsx)(l.b,{exact:!0,path:"/auth/register",component:ee}),Object(U.jsx)(l.a,{to:"/auth/login"})]})})})},ne=n(277),ae=n(278),re=n(279),ce=n(123),ie=n(231),oe=n(117),se=n.n(oe),le=n(118),ue=n.n(le),je=n(119),de=n.n(je),be=n(285),he=n(121),pe=Object(ne.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function me(){var e=pe(),t=r.a.useState(!0),n=Object(o.a)(t,2),a=n[0],c=n[1],i=r.a.useState(null),s=Object(o.a)(i,2),l=s[0],u=s[1],b=Boolean(l),h=Object(y.b)(),p=function(){u(null)},m=function(){c(!1),h(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.auth().signOut();case 2:t(D());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(U.jsx)("div",{className:e.root,children:Object(U.jsx)(ae.a,{position:"static",children:Object(U.jsxs)(re.a,{children:[Object(U.jsx)(ie.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(U.jsx)(se.a,{})}),Object(U.jsx)(ce.a,{variant:"h6",className:e.title,children:"Fitnet"}),a&&Object(U.jsxs)("div",{children:[Object(U.jsx)(ie.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit",children:Object(U.jsx)(ue.a,{})}),Object(U.jsxs)(he.a,{id:"menu-appbar",anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:p,children:[Object(U.jsx)(be.a,{onClick:p,children:"Profile"}),Object(U.jsx)(be.a,{onClick:p,children:"My account"}),Object(U.jsx)(be.a,{onClick:m,children:"Logout"})]}),Object(U.jsx)(ie.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:m,color:"inherit",children:Object(U.jsx)(de.a,{})})]})]})})})}var Oe=function(e){var t=e.history;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(me,{}),Object(U.jsx)("h2",{className:"text-center mt-4",children:"Home :"}),Object(U.jsx)(b.a,{container:!0,className:"contenedor",direction:"column",alignItems:"center",justify:"space-between",children:Object(U.jsx)(m.a,{color:"primary",variant:"contained",onClick:function(){t.replace("/auth")},children:"Hola Mundo"})})]})},xe=n(78),fe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,["isAuthenticated","component"]);return Object(U.jsx)(l.b,Object(g.a)(Object(g.a)({},a),{},{component:function(e){return t?Object(U.jsx)(n,Object(g.a)({},e)):Object(U.jsx)(l.a,{to:"/auth/login"})}}))},ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,["isAuthenticated","component"]);return Object(U.jsx)(l.b,Object(g.a)(Object(g.a)({},a),{},{component:function(e){return t?Object(U.jsx)(l.a,{to:"/"}):Object(U.jsx)(n,Object(g.a)({},e))}}))},ve=n(286),ye=n(280),we=function(){var e=Object(y.b)(),t=Object(a.useState)(!0),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),u=Object(o.a)(i,2),j=u[0],d=u[1];return Object(a.useEffect)((function(){S.a.auth().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.uid)?(e(W(t.uid,t.displayName)),d(!0)):d(!1),c(!1)}))}),[e,c,d]),r?Object(U.jsx)(ve.a,{open:r,children:Object(U.jsx)(ye.a,{color:"primary"})}):Object(U.jsx)(s.a,{children:Object(U.jsx)("div",{children:Object(U.jsxs)(l.d,{children:[Object(U.jsx)(ge,{path:"/auth",component:te,isAuthenticated:j}),Object(U.jsx)(fe,{exact:!0,path:"/",component:Oe,isAuthenticated:j}),Object(U.jsx)(l.a,{to:"/auth/login"})]})})})},Ne=n(50),Ee=n(120),Ce={msgError:null,input:null,loading:!1},Ae="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ne.d,Ie=Object(Ne.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{uid:t.payload.uid,name:t.payload.displayName,email:t.payload.email};case N:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(g.a)(Object(g.a)({},e),{},{msgError:t.payload,input:t.input});case C:return Object(g.a)(Object(g.a)({},e),{},{msgError:null,input:null});case A:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case I:return Object(g.a)(Object(g.a)({},e),{},{loading:!1});default:return e}}}),Se=Object(Ne.e)(Ie,Ae(Object(Ne.a)(Ee.a))),Pe=function(){return Object(U.jsx)(y.a,{store:Se,children:Object(U.jsx)(we,{})})};i.a.render(Object(U.jsx)(Pe,{}),document.getElementById("root"))},94:function(e,t,n){}},[[227,1,2]]]);
//# sourceMappingURL=main.5cc4e7fb.chunk.js.map