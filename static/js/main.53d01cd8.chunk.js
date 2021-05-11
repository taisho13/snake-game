(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{17:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var i=n(2),c=n.n(i),a=n(12),s=n.n(a),r=(n(17),function(t,e){for(var n=function(){var n=Math.floor(Math.random()*(t-1-1))+1,i=Math.floor(Math.random()*(t-1-1))+1;if(!e.some((function(t){return t.x===n&&t.y===i})))return{v:{x:n,y:i}}};;){var i=n();if("object"===typeof i)return i.v}}),o=function(t,e){for(var n=[],i=0;i<t;i++){var c=new Array(t).fill("");n.push(c)}n[e.y][e.x]="snake";var a=r(t,[e]);return n[a.x][a.y]="food",n},u={x:17,y:17},l=o(35,u),d=[1e3,500,100,50,10],b=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),f=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),j=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),h=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),v=Object.freeze({37:f.left,38:f.up,39:f.right,40:f.down}),O=n(0),m=function(t){var e=t.length,n=t.difficulty,i=void 0===n?3:n,c=t.onChangeDifficulty,a=i<d.length?"":"is-hidden",s=i>1?"":"is-hidden";return Object(O.jsxs)("div",{className:"navigation",children:[Object(O.jsxs)("div",{className:"navigation-item",children:[Object(O.jsx)("span",{className:"navigation-lavel",children:"Length:"}),Object(O.jsx)("div",{className:"navigation-item-number-container",children:Object(O.jsx)("div",{className:"num-board",children:e})})]}),Object(O.jsxs)("div",{className:"navigation-item",children:[Object(O.jsx)("span",{className:"navigation-lavel",children:"Difficulty:"}),Object(O.jsxs)("div",{className:"navigation-item-number-container",children:[Object(O.jsx)("div",{className:"num-board",children:i}),Object(O.jsxs)("div",{className:"difficlty-button-container",children:[Object(O.jsx)("div",{className:"difficulty-button difficulty-up ".concat(a),onClick:function(){return c(i+1)}}),Object(O.jsx)("div",{className:"difficulty-button difficulty-down ".concat(s),onClick:function(){return c(i-1)}})]})]})]})]})},x=n(5),p=n(7),g=function(t){var e=t.onChange;return Object(O.jsxs)("div",{className:"manipulation-panel",children:[Object(O.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return e(f.left)},children:Object(O.jsx)(x.a,{icon:p.b})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return e(f.up)},children:Object(O.jsx)(x.a,{icon:p.d})}),Object(O.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return e(f.down)},children:Object(O.jsx)(x.a,{icon:p.a})})]}),Object(O.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return e(f.right)},children:Object(O.jsx)(x.a,{icon:p.c})})]})},y=function(t){var e=t.fields;return Object(O.jsx)("div",{className:"Field",children:e.map((function(t){return t.map((function(t){return Object(O.jsx)("div",{className:"dots ".concat(t)})}))}))})},N=function(t){var e=t.onStop,n=t.onStart,i=t.status,c=t.onRestart;return Object(O.jsxs)("div",{className:"button",children:[i===b.gameover&&Object(O.jsx)("button",{className:"btn btn-gameover",onClick:c,children:"Game Over"}),i===b.init&&Object(O.jsx)("button",{className:"btn btn-init",onClick:n,children:"start"}),i===b.suspended&&Object(O.jsx)("button",{className:"btn btn-suspended",onClick:n,children:"start"}),i===b.playing&&Object(O.jsx)("button",{className:"btn btn-playing",onClick:e,children:"stop"})]})},k=n(11),C=n(3),w=void 0,S=function(){w&&clearInterval(w)},D=function(){var t=Object(i.useState)(l),e=Object(C.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)([]),s=Object(C.a)(a,2),O=s[0],m=s[1],x=Object(i.useState)(b.init),p=Object(C.a)(x,2),g=p[0],y=p[1],N=Object(i.useState)(0),D=Object(C.a)(N,2),E=D[0],z=D[1],F=Object(i.useState)(f.up),I=Object(C.a)(F,2),L=I[0],M=I[1],A=Object(i.useState)(3),B=Object(C.a)(A,2),G=B[0],J=B[1];Object(i.useEffect)((function(){var t=d[G-1];return m([u]),w=setInterval((function(){z((function(t){return t+1}))}),t),S}),[G]),Object(i.useEffect)((function(){0!==O.length&&g===b.playing&&(T()||(S(),y(b.gameover)))}),[E]);var P=Object(i.useCallback)((function(t){if(g!==b.playing)return L;j[L]!==t&&M(t)}),[L,g]);Object(i.useEffect)((function(){var t=function(t){var e=v[t.keyCode];e&&P(e)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[P]);var R=Object(i.useCallback)((function(t){g===b.init&&(t<1||t>d.length||J(t))}),[g,G]),T=function(){var t=O[0],e=t.x,i=t.y,a=h[L],s={x:e+a.x,y:i+a.y};if(function(t,e){return e.y<0||e.x<0||e.y>t-1||e.x>t-1}(n.length,s)||function(t,e){return"snake"===t[e.y][e.x]}(n,s))return!1;var o=Object(k.a)(O);if("food"!==n[s.y][s.x]){var u=o.pop();n[u.y][u.x]=""}else{var l=r(n.length,[].concat(Object(k.a)(o),[s]));n[l.y][l.x]="food"}return n[s.y][s.x]="snake",o.unshift(s),m(o),c(n),!0};return{body:O,difficulty:G,fields:n,status:g,start:function(){return y(b.playing)},stop:function(){return y(b.suspended)},reload:function(){w=setInterval((function(){z((function(t){return t+1}))}),100),M(f.up),y(b.init),m([u]),c(o(35,u))},updateDirection:P,updateDifficulty:R}};var E=function(){var t=D(),e=t.body,n=t.difficulty,i=t.fields,c=t.start,a=t.stop,s=t.reload,r=t.status,o=t.updateDirection,u=t.updateDifficulty;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("div",{className:"title-container",children:Object(O.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(O.jsx)(m,{length:e.length,difficulty:n,onChangeDifficulty:u})]}),Object(O.jsx)("main",{className:"main",children:Object(O.jsx)(y,{fields:i})}),Object(O.jsxs)("footer",{className:"footer",children:[Object(O.jsx)(N,{status:r,onStop:a,onStart:c,onRestart:s}),Object(O.jsx)(g,{onChange:o})]})]})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),a(t),s(t)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),z()}},[[24,1,2]]]);
//# sourceMappingURL=main.53d01cd8.chunk.js.map