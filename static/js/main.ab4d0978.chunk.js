(this["webpackJsonpprojet-swapi"]=this["webpackJsonpprojet-swapi"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(8),s=c.n(n),r=c(5),j=(c(13),c(14),c.p+"static/media/vador.181bb9c0.png"),l=c(1);var i=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{className:"bg-black py-5 head",children:Object(l.jsx)("section",{className:"container text-center text-white",children:Object(l.jsx)("h1",{className:" font-face-gm text-warning",children:"Star Wars Api"})})}),Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-black ",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"pouet"}),Object(l.jsx)("img",{height:"100",src:j}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#mynavbar",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"mynavbar",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/",className:"nav-link",children:"Accueil"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/recherche",className:"nav-link",children:"Recherche"})})]}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-2",type:"text",placeholder:"Search"}),Object(l.jsx)("button",{className:"btn btn-warning",type:"button",children:"Search"})]})]})]})})]})};var b=function(){return Object(l.jsx)("footer",{className:"py-5 text-center bg-black",children:Object(l.jsx)("section",{children:Object(l.jsx)("p",{className:"text-white"})})})},o=c(3);var d=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),j=r[0],i=r[1],b=Object(a.useState)([]),d=Object(o.a)(b,2),h=d[0],u=d[1];return Object(a.useEffect)((function(){fetch("https://swapi.dev/api/").then((function(e){return e.json()})).then((function(e){i(!0),u(e)}),(function(e){i(!0),n(e)}))}),[]),c?Object(l.jsxs)("div",{children:["Erreur : ",c.message]}):j?Object(l.jsx)("div",{className:" row justify-content-center Accueil",children:Object.keys(h).map((function(e,t){return Object(l.jsxs)("div",{className:"card border border border-dark p-0 m-3 col-3 ",children:[Object(l.jsx)("img",{className:"card-img-top",src:"https://www.presse-citron.net/app/uploads/2021/01/lucasfilm-games-star-wars.jpg",alt:"Card img cap"}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("h5",{className:"card-title text-center",children:e})})]})}))}):Object(l.jsx)("div",{children:"Chargement..."})};var h=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),j=r[0],i=r[1],b=Object(a.useState)([]),d=Object(o.a)(b,2),h=d[0],u=d[1],m=Object(a.useState)("1"),O=Object(o.a)(m,2),p=O[0],x=O[1];return Object(a.useEffect)((function(){console.log(p),fetch("https://swapi.dev/api/people/".concat(p,"/")).then((function(e){return e.json()})).then((function(e){i(!0),u(e)}),(function(e){i(!0),n(e)}))}),[p]),c?Object(l.jsxs)("div",{children:["Erreur : ",c.message]}):j?0!==p.length?Object(l.jsxs)("div",{className:"row justify-content-center m-3 p-2",children:[Object(l.jsx)("form",{className:"mb-3",children:Object(l.jsx)("input",{className:"form-control",type:"number",placeholder:"Rechercher un personnage","aria-label":"Search",onInput:function(e){return x(e.target.value)}})}),Object.keys(h).map((function(e,t){return Object(l.jsx)("ul",{className:"m-2",children:Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{children:e})," : ",h[e]]})},t)}))]}):Object(l.jsxs)("div",{className:"row justify-content-center m-3 p-2",children:[Object(l.jsx)("form",{className:"mb-3",children:Object(l.jsx)("input",{className:"form-control",type:"number",placeholder:"Rechercher un personnage","aria-label":"Search",onInput:function(e){return x(e.target.value)}})}),x("1")]}):Object(l.jsx)("div",{children:"Chargement..."})},u=c(2);c(16);var m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(i,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/",element:Object(l.jsx)(d,{})}),Object(l.jsx)(u.a,{path:"Recherche",element:Object(l.jsx)(h,{})})]}),Object(l.jsx)(b,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c.p;s.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.ab4d0978.chunk.js.map