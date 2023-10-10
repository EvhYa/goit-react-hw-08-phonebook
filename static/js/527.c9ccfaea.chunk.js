"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[527],{527:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var a,r,o,c=t(9439),i=t(2791),s=t(168),l=t(5867),u=l.ZP.div(a||(a=(0,s.Z)(["\n  border: 2px solid black;\n  padding: 25px;\n  margin: 0 auto;\n  width: 350px;\n"]))),d=l.ZP.form(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),p=l.ZP.button(o||(o=(0,s.Z)(["\ndisplay: block;\nwidth: 120px;\nmargin: 10px auto 0px auto;\n"]))),m=t(9434),f=function(e){return e.contacts.items},v=function(e){return e.filter},h=function(e){return e.contacts.isLoading},b=t(208),y=t(184);function g(){var e=(0,i.useState)(""),n=(0,c.Z)(e,2),t=n[0],a=n[1],r=(0,i.useState)(""),o=(0,c.Z)(r,2),s=o[0],l=o[1],v=(0,m.v9)(f),h=(0,m.I0)(),g=function(e){var n=e.target.name,t=e.target.value;switch(n){case"name":a(t);break;case"number":l(t);break;default:return}};return(0,y.jsx)(u,{children:(0,y.jsxs)(d,{onSubmit:function(e){e.preventDefault();var n={name:t,number:s};v.find((function(e){return e.name.toLocaleLowerCase()===n.name.toLocaleLowerCase()}))?window.alert("This name is already in the list"):(h((0,b.uK)(n)),a(""),l(""))},children:[(0,y.jsx)("label",{htmlFor:"name",children:"Name"}),(0,y.jsx)("input",{id:"name",onChange:g,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,y.jsx)("label",{htmlFor:"number",children:"Number"}),(0,y.jsx)("input",{id:"number",onChange:g,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,y.jsx)(p,{type:"submit",children:"Add contact"})]})})}var x,j,w,O=t(1413),P=l.ZP.div(x||(x=(0,s.Z)(["\n  margin-top: 15px;\n  text-align: left;\n  padding: 10px;\n"]))),_=l.ZP.ul(j||(j=(0,s.Z)(['\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  >li {\n    &::before{\n        content: " ";\n        border-radius: 50%;\n        width: 10px;\n        height: 10px;\n        margin: auto 0;\n        background-color: yellowgreen;\n        text-align: center;\n        float: center;\n    }\n    display: flex;\n    justify-content: space-between;\n  }\n']))),X=t(7169),Z=t.n(X),k=function(e){var n=e.id,t=e.name,a=e.number,r=(0,i.useState)(!1),o=(0,c.Z)(r,2),s=o[0],l=o[1],u=(0,m.I0)();return(0,y.jsxs)("li",{children:[t," tel: ",a,(0,y.jsx)("button",{type:"button",onClick:function(){l(!0),u((0,b.GK)(n))},children:s?(0,y.jsx)(Z(),{color:"purple",size:10}):"Delete"})]})};function L(){var e=(0,m.v9)(f),n=(0,m.v9)(v),t=function(){return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}))};return(0,y.jsx)(P,{children:t().length?(0,y.jsx)(_,{children:t().map((function(e){return(0,y.jsx)(k,(0,O.Z)({},e),e.id)}))}):(0,y.jsx)("p",{children:"Contact is not found"})})}var C=l.ZP.div(w||(w=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n"]))),E=t(6895);function S(){var e=(0,m.v9)(v),n=(0,m.I0)();return(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,y.jsx)("input",{type:"text",onChange:function(e){return n((0,E.s)(e.currentTarget.value))},id:"filter",name:"filter",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter name you want to find"})]})}var A={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function z(e){if("number"===typeof e)return{value:e,unit:"px"};var n,t=(e.match(/^[0-9.]*/)||"").toString();n=t.includes(".")?parseFloat(t):parseInt(t,10);var a=(e.match(/[^0-9]*$/)||"").toString();return A[a]?{value:n,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}var M=function(e,n,t){var a="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,c="\n    @keyframes ".concat(a," {\n      ").concat(n,"\n    }\n  ");return o&&o.insertRule(c,0),a},F=function(){return F=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},F.apply(this,arguments)},I=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},D=[1,3,5],R=[M("PropagateLoader","25% {transform: translateX(-".concat(D[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(D[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(D[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),M("PropagateLoader","25% {transform: translateX(-".concat(D[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(D[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(D[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),M("PropagateLoader","25% {transform: translateX(-".concat(D[0],"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(D[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),M("PropagateLoader","25% {transform: translateX(".concat(D[0],"rem) scale(0.75)}\n    75% {transform: translateX(").concat(D[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),M("PropagateLoader","25% {transform: translateX(".concat(D[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(D[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(D[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),M("PropagateLoader","25% {transform: translateX(".concat(D[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(D[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(D[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")];var V=function(e){var n=e.loading,t=void 0===n||n,a=e.color,r=void 0===a?"#000000":a,o=e.speedMultiplier,c=void 0===o?1:o,s=e.cssOverride,l=void 0===s?{}:s,u=e.size,d=void 0===u?15:u,p=I(e,["loading","color","speedMultiplier","cssOverride","size"]),m=z(d),f=m.value,v=m.unit,h=F({display:"inherit",position:"relative"},l),b=function(e){return{position:"absolute",fontSize:"".concat(f/3).concat(v),width:"".concat(f).concat(v),height:"".concat(f).concat(v),background:r,borderRadius:"50%",animation:"".concat(R[e]," ").concat(1.5/c,"s infinite"),animationFillMode:"forwards"}};return t?i.createElement("span",F({style:h},p),i.createElement("span",{style:b(0)}),i.createElement("span",{style:b(1)}),i.createElement("span",{style:b(2)}),i.createElement("span",{style:b(3)}),i.createElement("span",{style:b(4)}),i.createElement("span",{style:b(5)})):null};function $(){var e=(0,m.v9)(h);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(g,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(S,{}),(0,y.jsx)(V,{color:"purple",loading:e}),!e&&(0,y.jsx)(L,{})]})}},7169:function(e,n,t){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},a.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t);var r=Object.getOwnPropertyDescriptor(n,t);r&&!("get"in r?!n.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,a,r)}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n},i=this&&this.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var s=c(t(2791)),l=t(8945),u=(0,t(7074).createAnimation)("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");n.default=function(e){var n=e.loading,t=void 0===n||n,r=e.color,o=void 0===r?"#000000":r,c=e.speedMultiplier,d=void 0===c?1:c,p=e.cssOverride,m=void 0===p?{}:p,f=e.size,v=void 0===f?15:f,h=e.margin,b=void 0===h?2:h,y=i(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=a({display:"inherit"},m),x=function(e){return{display:"inline-block",backgroundColor:o,width:(0,l.cssValue)(v),height:(0,l.cssValue)(v),margin:(0,l.cssValue)(b),borderRadius:"100%",animation:"".concat(u," ").concat(.7/d,"s ").concat(e%2?"0s":"".concat(.35/d,"s")," infinite linear"),animationFillMode:"both"}};return t?s.createElement("span",a({style:g},y),s.createElement("span",{style:x(1)}),s.createElement("span",{style:x(2)}),s.createElement("span",{style:x(3)})):null}},7074:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.createAnimation=void 0;n.createAnimation=function(e,n,t){var a="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,c="\n    @keyframes ".concat(a," {\n      ").concat(n,"\n    }\n  ");return o&&o.insertRule(c,0),a}},8945:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.cssValue=n.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"===typeof e)return{value:e,unit:"px"};var n,a=(e.match(/^[0-9.]*/)||"").toString();n=a.includes(".")?parseFloat(a):parseInt(a,10);var r=(e.match(/[^0-9]*$/)||"").toString();return t[r]?{value:n,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}n.parseLengthAndUnit=a,n.cssValue=function(e){var n=a(e);return"".concat(n.value).concat(n.unit)}}}]);
//# sourceMappingURL=527.c9ccfaea.chunk.js.map