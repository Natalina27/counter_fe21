(this.webpackJsonptodo_fe21_420=this.webpackJsonptodo_fe21_420||[]).push([[0],{1:function(e,t,a){e.exports={app:"App_app__13Yue",container:"App_container___P6pN",counter:"App_counter__2Oh8H",inputs:"App_inputs__3EMcE",buttons:"App_buttons__1pIvC",negatives:"App_negatives__3oaez",positives:"App_positives__1hW6V",button:"App_button__unkQw",number:"App_number__1mT4h"}},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),p=a(2),u=a(6),s=a(3),i=a(1),m=a.n(i);var l=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(10),i=Object(s.a)(o,2),l=i[0],_=i[1],b=Object(n.useState)({lower:0,upper:0}),v=Object(s.a)(b,2),E=v[0],f=v[1],N=function(e){f(Object(u.a)({},E,Object(p.a)({},e.target.name,e.target.value)))},d=function(e){_(l+ +e)};return r.a.createElement("main",{className:m.a.app},r.a.createElement("div",{className:m.a.container},r.a.createElement("h1",null," Enter your range from 1 to 5 "),r.a.createElement("form",{className:m.a.counter},r.a.createElement("div",{className:m.a.inputs},r.a.createElement("input",{type:"text",name:"lower",onChange:N}),r.a.createElement("input",{type:"text",name:"upper",onChange:N})),r.a.createElement("button",{key:123,onClick:function(e){e.preventDefault();var t=E.lower,a=E.upper;if(t<a){for(var n=[],r=t;r<=a;r++)n.push(r);c(n)}}}," "),r.a.createElement("div",{className:m.a.buttons},r.a.createElement("div",{className:m.a.negatives},a.reverse().map((function(e){return r.a.createElement("button",{key:-e,onClick:function(){return d(-e)},className:m.a.button},-e)}))),r.a.createElement("span",{className:m.a.number},l),r.a.createElement("div",{className:m.a.positives},a.reverse().map((function(e){return r.a.createElement("button",{key:e,onClick:function(){return d(e)},className:m.a.button},e)})))))))};o.a.render(r.a.createElement(l,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.d320f80d.chunk.js.map