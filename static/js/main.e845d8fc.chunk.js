(this["webpackJsonpsimple-text-app"]=this["webpackJsonpsimple-text-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(3),r=n.n(o),c=n(4),s=n(5),l=n(7),u=n(6),d=(n(12),n(0)),p=function(e){return e.items.map((function(t,n){return Object(d.jsxs)("li",{className:"list-group-item",children:[t,Object(d.jsx)("i",{onClick:function(){return e.onDelete(t)},className:"far fa-times-circle"})]},n)}))},m=function(e){return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("h2",{children:"To-Do List"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{class:"alert alert-warning",role:"alert"}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("div",{className:"input-group-prepend",children:Object(d.jsx)("button",{className:"btn btn-outline-primary",type:"button",onClick:e.onSubmit,children:"Submit"})}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"","aria-label":"Example text with two button addons","aria-describedby":"button-addon3",value:e.inputValue,onChange:e.onInputChange})]}),Object(d.jsx)("ul",{className:"list-group",children:Object(d.jsx)(p,{items:e.items,onDelete:e.onDelete})}),Object(d.jsx)("button",{className:"btn btn-danger",type:"button",onClick:e.onClear,children:"Clear List"})]})]})},h=function(){return Object(d.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Simple Todo-List: React"})})})},b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={input:"",items:["Pick up eggs","Haircut appointment","Finish To do app"]},e.handleChange=function(t){e.setState({input:t.target.value})},e.submitItem=function(){var t=document.querySelector(".alert");""===e.state.input?(t.innerHTML="Please enter text",t.style.opacity=1,setTimeout((function(){t.style.opacity=0}),3e3)):e.state.input.length<=4?(t.innerHTML="Please enter text longer than 4 characters",t.style.opacity=1,setTimeout((function(){t.style.opacity=0}),3e3)):e.setState({items:e.state.items.concat(e.state.input),input:""})},e.clearItem=function(){e.setState({items:[]})},e.deleteItem=function(t){var n=e.state.items.filter((function(e){return t!==e}));e.setState({items:n})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.handleChange,t=this.submitItem,n=this.clearItem,i=this.deleteItem,o=this.state,r=o.input,c=o.items;return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(m,{onInputChange:e,onSubmit:t,onClear:n,onDelete:i,inputValue:r,items:c})]})}}]),n}(i.Component),f=(n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(d.jsx)(b,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-todo-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-todo-app","/service-worker.js");f?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):j(e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.e845d8fc.chunk.js.map