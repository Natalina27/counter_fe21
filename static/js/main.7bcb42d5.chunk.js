(this.webpackJsonpcounter_fe21=this.webpackJsonpcounter_fe21||[]).push([[0],[,function(e,n,t){e.exports={number:"Buttons_number__1rnLs",button:"Buttons_button__3_mtt",buttons:"Buttons_buttons__2Bb2U",negatives:"Buttons_negatives__3evKr",positives:"Buttons_positives__2qR3c"}},,,,function(e,n,t){e.exports={app:"App_app__13Yue"}},function(e,n,t){e.exports={container:"Counter_container__19KWb"}},function(e,n,t){e.exports={header:"Header_header__5b1gt"}},function(e,n,t){e.exports={counter:"CounterBody_counter__1AoAU"}},function(e,n,t){e.exports={inputs:"Inputs_inputs__2er3c",submit:"Inputs_submit__20PAq"}},function(e,n,t){e.exports={reset:"Reset_reset__3NDPq"}},function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),u=t.n(o),i=t(2),c=t(5),s=t.n(c),m=t(6),g=t.n(m),l=t(7),v=t.n(l);var p=function(){return r.a.createElement("h1",{className:v.a.header}," Enter your range from 1 to 10 ")},R=t(8),_=t.n(R),b=t(1),f=t.n(b);var x=function(e){var n=e.positiveRange,t=e.negativeRange,a=e.onButtonClick,o=e.resultNumb;return r.a.createElement("div",{className:f.a.buttons},r.a.createElement("div",{className:f.a.negatives},t.map((function(e){return r.a.createElement("button",{key:-e,onClick:function(){return a(-e)},className:f.a.button},-e)}))),r.a.createElement("span",{className:f.a.number},o),r.a.createElement("div",{className:f.a.positives},n.map((function(e){return r.a.createElement("button",{key:e,onClick:function(){return a(e)},className:f.a.button},"+",e)}))))},C=t(9),E=t.n(C);var h=function(e){var n=e.minRange,t=e.maxRange,a=e.onChangeMinRange,o=e.onChangeMaxRange;return r.a.createElement("div",{className:E.a.inputs},r.a.createElement("input",{type:"text",name:"min",value:n.min,onChange:a}),r.a.createElement("input",{type:"text",name:"max",value:t.max,onChange:o}))};var N=function(e){var n=e.positiveRange,t=e.negativeRange,a=e.minRange,o=e.maxRange,u=e.onChangeMinRange,i=e.onChangeMaxRange,c=e.onButtonClick,s=e.resultNumb;return r.a.createElement("div",{className:_.a.counter},r.a.createElement(h,{minRange:a,maxRange:o,onChangeMinRange:u,onChangeMaxRange:i,positiveRange:n,negativeRange:t}),r.a.createElement(x,{resultNumb:s,onButtonClick:c,positiveRange:n,negativeRange:t}))},d=t(10),k=t.n(d);var B=function(e){var n=e.onReset;return r.a.createElement("button",{className:k.a.reset,onClick:function(){return n()}}," RESET")};var j=function(e){var n=e.positiveRange,t=e.negativeRange,a=e.minRange,o=e.maxRange,u=e.onChangeMinRange,i=e.onChangeMaxRange,c=e.onButtonClick,s=e.resultNumb,m=e.onReset;return r.a.createElement("div",{className:g.a.container},r.a.createElement(p,null),r.a.createElement(N,{positiveRange:n,negativeRange:t,minRange:a,maxRange:o,onChangeMinRange:u,onChangeMaxRange:i,onButtonClick:c,resultNumb:s}),r.a.createElement(B,{key:345,onReset:m}))};var M=function(){var e=Object(a.useState)(10),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),c=Object(i.a)(u,2),m=c[0],g=c[1],l=Object(a.useState)(0),v=Object(i.a)(l,2),p=v[0],R=v[1],_=Object(a.useState)(0),b=Object(i.a)(_,2),f=b[0],x=b[1],C=Object(a.useState)([]),E=Object(i.a)(C,2),h=E[0],N=E[1],d=Object(a.useState)([]),k=Object(i.a)(d,2),B=k[0],M=k[1],O=function(e,n){for(var t=[],a=e;a<=n;a++)t.push(a);return t},y=function(e,n){for(var t=[],a=n;a>=e;a--)t.push(a);return t};return r.a.createElement("main",{className:s.a.app},r.a.createElement(j,{positiveRange:B,negativeRange:h,onButtonClick:function(e){o(t+ +e)},onChangeMinRange:function(e){var n=+e.target.value;R(n),N(y(n,f)),M(O(n,f))},onChangeMaxRange:function(e){var n=+e.target.value;x(n),N(y(p,n)),M(O(p,n))},onReset:function(){R({min:""}),x({max:""}),o(0),g(m+""),N([]),M([])},minRange:p,maxRange:f,resultNumb:t}))};u.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.7bcb42d5.chunk.js.map