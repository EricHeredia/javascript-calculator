(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(t,e,a){t.exports=a(598)},169:function(t,e,a){},171:function(t,e,a){},598:function(t,e,a){"use strict";a.r(e);var i=a(7),n=a.n(i),l=a(158),s=a.n(l),c=(a(169),a(159)),r=a(160),u=a(162),d=a(161),o=a(163),h=(a(171),a(56)),p=a.n(h),k=a(100),b=a.n(k),C=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).handleClick=function(t){var e=t.target.getAttribute("value"),i=a.state.input[a.state.input.length-1];switch(e){case"clear":a.setState({input:[],inputDisplay:["0"],display:["0"],currentNumber:[]});break;case"equals":a.calculateInput();break;case".":/[=]/.test(String(a.state.inputDisplay))?a.setState({input:["0","."],inputDisplay:["0","."],display:["0","."],currentNumber:["0","."]}):/[.]/.test(a.state.currentNumber)||a.defaultInput(t);break;case"0":a.state.currentNumber.length>0&&a.defaultInput(t);break;case"+":case"-":case"*":case"/":if(/[\/*\-+]/.test(i)){var n=p()(a.state.input,{$splice:[[a.state.input.length-1,1,e]]});a.setState({input:n,inputDisplay:n,display:n,currentNumber:[]})}else a.state.currentNumber.length&&a.defaultInput(t);break;default:a.defaultInput(t)}},a.calculateInput=function(){var t=a.state.input.join("");if(t)try{t=b.a.eval(t),t=b.a.format(t,{precision:7}),t=String(t),a.setState({input:[t],inputDisplay:a.state.input.join("")+"="+t,display:[t],currentNumber:[t]})}catch(e){a.setState({input:[],inputDisplay:a.state.input.join("")+"= Error",display:"Error"})}},a.state={input:[],inputDisplay:["0"],display:["0"],currentNumber:[]},a}return Object(o.a)(e,t),Object(r.a)(e,[{key:"defaultInput",value:function(t){var e=t.target.getAttribute("value");if(/[\/*\-+]/.test(e)){var a=p()(this.state.input,{$push:[e]});this.setState({input:a,inputDisplay:a,display:this.state.display,currentNumber:[]})}else if(/[0-9]/.test(e)&&/[=]/.test(this.state.inputDisplay))"0"===e?this.setState({input:[],inputDisplay:[e],display:[e],currentNumber:[]}):this.setState({input:[e],inputDisplay:[e],display:[e],currentNumber:[e]});else if("."===e&&0===this.state.currentNumber.length){var i=p()(this.state.input,{$push:["0"+e]});this.setState({input:i,inputDisplay:i,display:i,currentNumber:i})}else{var n=p()(this.state.input,{$push:[e]}),l=p()(this.state.currentNumber,{$push:[e]});this.setState({input:n,inputDisplay:n,display:l,currentNumber:l})}}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{id:"full-inputDisplay"},n.a.createElement("div",null,n.a.createElement("p",{id:"inputDisplay"},this.state.inputDisplay)),n.a.createElement("div",null,n.a.createElement("h1",{id:"display",maxlength:"10"},this.state.display))),n.a.createElement("div",{id:"calcButtons"},n.a.createElement("button",{id:"clear",value:"clear",onClick:this.handleClick},"AC"),n.a.createElement("button",{id:"divide",value:"/",onClick:this.handleClick},"/"),n.a.createElement("button",{id:"multiply",value:"*",onClick:this.handleClick},"*"),n.a.createElement("button",{id:"seven",value:"7",onClick:this.handleClick},"7"),n.a.createElement("button",{id:"eight",value:"8",onClick:this.handleClick},"8"),n.a.createElement("button",{id:"nine",value:"9",onClick:this.handleClick},"9"),n.a.createElement("button",{id:"subtract",value:"-",onClick:this.handleClick},"-"),n.a.createElement("button",{id:"four",value:"4",onClick:this.handleClick},"4"),n.a.createElement("button",{id:"five",value:"5",onClick:this.handleClick},"5"),n.a.createElement("button",{id:"six",value:"6",onClick:this.handleClick},"6"),n.a.createElement("button",{id:"add",value:"+",onClick:this.handleClick},"+"),n.a.createElement("button",{id:"one",value:"1",onClick:this.handleClick},"1"),n.a.createElement("button",{id:"two",value:"2",onClick:this.handleClick},"2"),n.a.createElement("button",{id:"three",value:"3",onClick:this.handleClick},"3"),n.a.createElement("button",{id:"equals",value:"equals",onClick:this.handleClick},"="),n.a.createElement("button",{id:"zero",value:"0",onClick:this.handleClick},"0"),n.a.createElement("button",{id:"decimal",value:".",onClick:this.handleClick},".")))}}]),e}(i.Component);s.a.render(n.a.createElement(C,null),document.getElementById("root"))}},[[164,2,1]]]);
//# sourceMappingURL=main.6e3c954a.chunk.js.map