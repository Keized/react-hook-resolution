(this["webpackJsonpreact-hook-resolution-example"]=this["webpackJsonpreact-hook-resolution-example"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);a(5);var n=a(0),o=a.n(n),r=a(2),l=a.n(r),i=a(3),c=()=>o.a.createElement("header",null,o.a.createElement("h1",null,"React hook resolution"),o.a.createElement("h2",null,o.a.createElement("a",{href:"https://github.com/Keized/react-hook-resolution"},"Github"))),s=a(14);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p={mobile:!1,tablet:!1,desktop:!0},b=({breakpoints:e})=>{const t=function(e,t){void 0===e&&(e={desktop:992,tablet:768,mobile:0}),void 0===t&&(t=500);var a=Object(n.useState)(p),o=a[0],r=a[1],l=function(){var t=window.innerWidth,a=u({},p);a.mobile=t<e.tablet,a.desktop=t>=e.desktop,a.tablet=t<e.desktop&&t>e.tablet,r(a)},i=Object(s.a)(l,t)[0];return Object(n.useEffect)((function(){l()}),[e]),Object(n.useLayoutEffect)((function(){return l(),window.addEventListener("resize",i),function(){return window.removeEventListener("resize",l)}}),[]),o}(e);return o.a.createElement("div",{id:"device-container"},console.log(e),console.log(t),o.a.createElement("h3",null,"You're on ",t.desktop?"desktop / laptop":t.tablet?"tablet (or baby laptop)":"mobile"," !"),o.a.createElement("div",{id:"device",className:t.desktop?"desktop":t.tablet?"tablet":"mobile"},o.a.createElement("div",{className:"keyboard"})),o.a.createElement("p",null,"Try to resize your page"))},m=a(1),d=({breakpoints:e,setBreakpoints:t})=>{const a=(e,a)=>{t(t=>Object(m.a)(Object(m.a)({},t),{},{[a]:e}))};return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"mobile-input"},"Mobile Breakpoint"),o.a.createElement("input",{type:"text",id:"mobile-input",value:e.mobile,onChange:e=>a(e.currentTarget.value,"mobile")})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"tablet-input"},"Tablet breakpoint"),o.a.createElement("input",{type:"text",id:"tablet-input",value:e.tablet,onChange:e=>a(e.currentTarget.value,"tablet")})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"desktop-input"},"Desktop breakpoint"),o.a.createElement("input",{type:"text",id:"desktop-input",value:e.desktop,onChange:e=>a(e.currentTarget.value,"desktop")})))};var k=()=>{const e=Object(n.useState)({desktop:992,tablet:768,mobile:0}),t=Object(i.a)(e,2),a=t[0],r=t[1];return o.a.createElement("div",null,o.a.createElement(c,null),o.a.createElement(b,{breakpoints:a}),o.a.createElement(d,{breakpoints:a,setBreakpoints:r}))};l.a.render(o.a.createElement(k,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(12)},5:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.0708ef61.chunk.js.map