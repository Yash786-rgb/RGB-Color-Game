(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,t){"use strict";t.r(a);var l,n,c=t(0),r=t.n(c),s=t(6),o=t.n(s),i=t(1),m=t(2),u=t(4),d=t(3),h=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).changeAns=function(a){e.setState({ans:a})},e.state={ans:""},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{class:"btn"},this.state.ans)}}]),t}(r.a.Component),E=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleDivClick=function(a){"hard"==v?a.target.style.backgroundColor==n?(e.ansElement.current.changeAns("CORRECT"),e.oneDiv1.current.style.backgroundColor=n,e.oneDiv2.current.style.backgroundColor=n,e.oneDiv3.current.style.backgroundColor=n,e.oneDiv4.current.style.backgroundColor=n,e.oneDiv5.current.style.backgroundColor=n,e.oneDiv6.current.style.backgroundColor=n,e.header.current.style.backgroundColor=n):(e.ansElement.current.changeAns("TRY AGAIN"),a.target.style.backgroundColor="#141e30"):a.target.style.backgroundColor==l?(e.ansElement.current.changeAns("correct"),e.oneDiv1.current.style.backgroundColor=l,e.oneDiv2.current.style.backgroundColor=l,e.oneDiv3.current.style.backgroundColor=l,e.header.current.style.backgroundColor=l):(e.ansElement.current.changeAns("try again"),a.target.style.backgroundColor="#141e30")},e.resetFn=function(){e.header.current.style.backgroundColor="#ee9ca7",e.ansElement.current.changeAns(""),e.forceUpdate()},e.easyClick=function(){v="easy",e.forceUpdate()},e.hardClick=function(){v="hard",e.forceUpdate()},e.state={color:"initial"},e.ansElement=r.a.createRef(),e.oneDiv1=r.a.createRef(),e.oneDiv2=r.a.createRef(),e.oneDiv3=r.a.createRef(),e.oneDiv4=r.a.createRef(),e.oneDiv5=r.a.createRef(),e.oneDiv6=r.a.createRef(),e.header=r.a.createRef(),e}return Object(m.a)(t,[{key:"render",value:function(){for(var e=[],a=[],t=[],c=Math.floor,s=Math.random,o=[c(256*s()),c(256*s()),c(256*s()),c(256*s()),c(256*s()),c(256*s())],i=[c(256*s()),c(256*s()),c(256*s()),c(256*s()),c(256*s()),c(256*s())],m=[c(256*s()),c(256*s()),c(256*s()),c(256*s()),c(256*s()),c(256*s())],u=0;u<6;u++)a.push(o[u]+", "+i[u]+", "+m[u]);for(u=0;u<6;u++)t.push("rgb("+a[u]+")");var d=c(6*s()),E=c(3*s()),b=t[d],C=t[E];l=C,n=b;for(u=0;u<6;u++)e.push({backgroundColor:t[u]});if("easy"==v)var k={backgroundColor:" #ee9ca7"};else var g={backgroundColor:" #ee9ca7"};return"hard"==v?r.a.createElement("div",null,r.a.createElement("h1",null,"Game with some changeAns"),r.a.createElement("div",{style:{backgroundColor:"#ee9ca7"},ref:this.header},r.a.createElement("h1",{className:"text-center"},"THE GREAT"),r.a.createElement("h1",{className:"text-center color"},b.toLocaleUpperCase()),r.a.createElement("h1",{className:"text-center"},"COLOR GAME"),r.a.createElement("div",{style:{backgroundColor:"white"},class:"row"},r.a.createElement("div",{class:"col-4"},r.a.createElement(h,{ref:this.ansElement})),r.a.createElement("div",{class:"col-4"},r.a.createElement("button",{class:"btn",onClick:this.resetFn},"RESET")),r.a.createElement("div",{class:"col-4"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-2"},r.a.createElement("button",{type:"button",class:"btn ",onClick:this.easyClick,style:k},"EASY")),r.a.createElement("div",{class:"col-2"},r.a.createElement("button",{class:"btn ",onClick:this.hardClick,style:g},"HARD")))))),r.a.createElement("br",null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv1,onClick:this.handleDivClick,style:e[0],className:"img-thumbnail"})),r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv2,onClick:this.handleDivClick,style:e[1],className:"img-thumbnail"})),r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv3,onClick:this.handleDivClick,style:e[2],className:"img-thumbnail"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv4,onClick:this.handleDivClick,style:e[3],className:"img-thumbnail"})),r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv5,onClick:this.handleDivClick,style:e[4],className:"img-thumbnail"})),r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv6,onClick:this.handleDivClick,style:e[5],className:"img-thumbnail"})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)):r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundColor:"#ee9ca7"},ref:this.header},r.a.createElement("h1",{className:"text-center"},"THE GREAT"),r.a.createElement("h1",{className:"text-center color"},b.toLocaleUpperCase()),r.a.createElement("h1",{className:"text-center"},"COLOR GAME"),r.a.createElement("div",{style:{backgroundColor:"white"},class:"row"},r.a.createElement("div",{class:"col-lg-4"},r.a.createElement(h,{ref:this.ansElement})),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("button",{class:"btn",onClick:this.resetFn},"RESET")),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-2"},r.a.createElement("button",{type:"button",class:"btn ",onClick:this.easyClick,style:k},"EASY")),r.a.createElement("div",{class:"col-lg-2"},r.a.createElement("button",{class:"btn ",onClick:this.hardClick,style:g},"HARD")))))),r.a.createElement("br",null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv1,onClick:this.handleDivClick,style:e[0],className:"img-thumbnail"})),r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv2,onClick:this.handleDivClick,style:e[1],className:"img-thumbnail"})),r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{ref:this.oneDiv3,onClick:this.handleDivClick,style:e[2],className:"img-thumbnail"})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component),v="hard",b=E;o.a.render(r.a.createElement(b,null),document.getElementById("root"))},7:function(e,a,t){e.exports=t(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.16b24199.chunk.js.map