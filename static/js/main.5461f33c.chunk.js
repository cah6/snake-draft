(this["webpackJsonpsnake-draft"]=this["webpackJsonpsnake-draft"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(8),u=n.n(i),a=(n(13),n(7)),l=n(4),o=n(5),s=(n(14),n(0));function f(t,e,n,r){return Object(l.a)(r).map((function(r,c){var i=function(t,e,n,r){return""!==r.get(n).get(e)?t.filter((function(t){return function(t,e,n,r){var c=r.get(n).get(e);return""===c||t===c}(t,e,n,r)})):t.filter((function(t){return function(t,e,n,r){var c=r.get(n);return!Object(l.a)(c.values()).includes(t)}(t,0,n,r)})).filter((function(t){return function(t,e,n,r){var c=r.get(n),i=Object(l.a)(c.values());return i[e]=t,!(function(t,e){for(var n=[],r=0,c=[[e-2,e+1],[e-1,e+2],[e,e+3]];r<c.length;r++){var i=Object(o.a)(c[r],2),u=i[0],a=i[1];u>=0&&a<=t.length&&n.push(t.slice(u,a))}return n}(i,e).filter((function(t){return t.every((function(t){return!t.startsWith("ED")&&""!==t}))})).length>=1)}(t,e,n,r)})).filter((function(t){return function(t,e){return"MICU"!==t||0!==e}(t,e)})).filter((function(t){return function(t,e){return"TOX/Elec"!==t||6!==e}(t,e)})).filter((function(t){return function(t,e){return"PICU"!==t||8!==e}(t,e)})).filter((function(t){return function(t,e,n,r){var c=h(r,e);return"MICU"!==t||!c.includes(t)}(t,e,0,r)})).filter((function(t){return function(t,e,n,r){var c=h(r,e);return i=t,!(("ED Valley"===i||!i.startsWith("ED"))&&c.filter((function(e){return e===t})).length>=2);var i}(t,e,0,r)})).filter((function(t){return function(t,e,n,r){var c=h(r,e).filter(b).length;return!(b(t)&&c>=3)}(t,e,0,r)}))}(d,c,t,e);return Object(s.jsx)("td",{children:Object(s.jsxs)("select",{class:e.get(t).get(c),value:e.get(t).get(c),onChange:function(r){return function(t,e,n,r,c){n.get(t).set(e,c.target.value),r(new Map(n))}(t,c,e,n,r)},children:[Object(s.jsx)("option",{value:"",children:"--"}),i.map((function(t){return Object(s.jsx)("option",{class:"ED",className:"ED",style:{backgroundColor:"lightblue"},children:t})}))]})})}))}function h(t,e){var n,r=[],c=Object(a.a)(t.values());try{for(c.s();!(n=c.n()).done;){var i,u=n.value,l=Object(a.a)(u.entries());try{for(l.s();!(i=l.n()).done;){var s=Object(o.a)(i.value,2),f=s[0],h=s[1];f===e&&r.push(h)}}catch(j){l.e(j)}finally{l.f()}}}catch(j){c.e(j)}finally{c.f()}return r}function j(t){var e=Object(s.jsx)("th",{children:"Name"}),n=d.map((function(t,e){return Object(s.jsx)("th",{children:e+1})}));return Object(s.jsxs)("thead",{children:[e,n]})}var d=["ED 1","ED 2","ED 3","ED 4","ED 5","ED \ud83c\udfdd 1","ED \ud83c\udfdd 2","ED Valley","Elective \ud83c\udfdd","CCU","PICU","MICU","TOX/Elec"];function b(t){return t.startsWith("ED \ud83c\udfdd")||t.startsWith("Elective")}var v=["Aaron","Nick","Amy","Charmayne","Connor","Junaid","Josh","Haseeb","Alissa","Danielle","Patrick","Nataliya"],O=function(){var t=Object(r.useState)(function(t){var e=new Map;return t.forEach((function(t){return e.set(t,function(){var t=new Map;return d.forEach((function(e,n){return t.set(n,"")})),t}())})),e}(v)),e=Object(o.a)(t,2),n=e[0],c=e[1];console.log(n);var i=Object(l.a)(n).map((function(t){var e=Object(o.a)(t,2),r=e[0],i=e[1];return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:r}),f(r,n,c,i)]})}));return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h1",{children:"Schedule Drafting"}),Object(s.jsx)("div",{class:"table-wrapper",children:Object(s.jsxs)("table",{children:[j(d.length),Object(s.jsx)("tbody",{children:i})]})})]})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,u=e.getTTFB;n(t),r(t),c(t),i(t),u(t)}))};u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.5461f33c.chunk.js.map