var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function i(t){t.forEach(n)}function o(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function m(t){return function(n){return n.preventDefault(),t.call(this,n)}}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t){return""===t?null:+t}function h(t,n){n=""+n,t.data!==n&&(t.data=n)}function $(t,n){t.value=null==n?"":n}function b(t,n,e){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n)return void(i.selected=!0)}e&&void 0===n||(t.selectedIndex=-1)}let x;function v(t){x=t}function w(){const t=function(){if(!x)throw new Error("Function called outside component initialization");return x}();return(n,e,{cancelable:i=!1}={})=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}(n,e,{cancelable:i});return o.slice().forEach((n=>{n.call(t,r)})),!r.defaultPrevented}return!0}}const y=[],_=[];let M=[];const T=[],D=Promise.resolve();let A=!1;function k(t){M.push(t)}const E=new Set;let N=0;function S(){if(0!==N)return;const t=x;do{try{for(;N<y.length;){const t=y[N];N++,v(t),C(t.$$)}}catch(t){throw y.length=0,N=0,t}for(v(null),y.length=0,N=0;_.length;)_.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];E.has(n)||(E.add(n),n())}M.length=0}while(y.length);for(;T.length;)T.pop()();A=!1,E.clear(),v(t)}function C(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const I=new Set;let O;function j(t,n){t&&t.i&&(I.delete(t),t.i(n))}function P(t,n,e,i){if(t&&t.o){if(I.has(t))return;I.add(t),O.c.push((()=>{I.delete(t),i&&(e&&t.d(1),i())})),t.o(n)}else i&&i()}function F(t){return void 0!==t?.length?t:Array.from(t)}function q(t){t&&t.c()}function L(t,e,r){const{fragment:c,after_update:u}=t.$$;c&&c.m(e,r),k((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(k)}function z(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];M.forEach((i=>-1===t.indexOf(i)?n.push(i):e.push(i))),e.forEach((t=>t())),M=n}(e.after_update),i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&(y.push(t),A||(A=!0,D.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function G(n,o,r,c,u,l,a=null,d=[-1]){const f=x;v(n);const m=n.$$={fragment:null,ctx:[],props:l,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:o.target||f.$$.root};a&&a(m.root);let g=!1;if(m.ctx=r?r(n,o.props||{},((t,e,...i)=>{const o=i.length?i[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&B(n,t)),e})):[],m.update(),g=!0,i(m.before_update),m.fragment=!!c&&c(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(s)}else m.fragment&&m.fragment.c();o.intro&&j(n.$$.fragment),L(n,o.target,o.anchor),S()}v(f)}class H{$$=void 0;$$set=void 0;$destroy(){z(this,1),this.$destroy=t}$on(n,e){if(!o(e))return t;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(t,n,e){const i=t.slice();return i[23]=n[e],i}function K(n){let e,i,o,r=n[23].text+"";return{c(){e=l("option"),i=a(r),o=d(),e.__value=n[23],$(e,e.__value)},m(t,n){u(t,e,n),c(e,i),c(e,o)},p:t,d(t){t&&s(e)}}}function Q(t){let n,e,o,r,m,p,b,x,v,w,y,_,M,T,D,A,k,E,N,S,C,I,O,j,P,F,q,L,z,B,G,H,J;return{c(){n=l("label"),e=a("Minimum Digits In First Term ("),o=a(t[1]),r=a(")"),m=d(),p=l("input"),x=d(),v=l("label"),w=a("Maximum Digits In First Term ("),y=a(t[3]),_=a(")"),M=d(),T=l("input"),A=d(),k=l("label"),E=a("Minimum Digits In Second Term ("),N=a(t[5]),S=a(")"),C=d(),I=l("input"),j=d(),P=l("label"),F=a("Maximum Digits In Second Term ("),q=a(t[7]),L=a(")"),z=d(),B=l("input"),g(n,"for","first-min"),g(p,"type","range"),g(p,"name","first-min"),g(p,"id","first-min"),g(p,"min",V),g(p,"max",t[2]),g(p,"step","1"),p.disabled=b=V===t[2],g(v,"for","first-max"),g(T,"type","range"),g(T,"name","first-max"),g(T,"id","first-max"),g(T,"min",t[4]),g(T,"max",W),g(T,"step","1"),T.disabled=D=t[4]===W,g(k,"for","second-min"),g(I,"type","range"),g(I,"name","second-min"),g(I,"id","second-min"),g(I,"min",X),g(I,"max",t[6]),g(I,"step","1"),I.disabled=O=X===t[6],g(P,"for","second-max"),g(B,"type","range"),g(B,"name","second-max"),g(B,"id","second-max"),g(B,"min",t[8]),g(B,"max",Y),g(B,"step","1"),B.disabled=G=t[8]===Y},m(i,s){u(i,n,s),c(n,e),c(n,o),c(n,r),u(i,m,s),u(i,p,s),$(p,t[1]),u(i,x,s),u(i,v,s),c(v,w),c(v,y),c(v,_),u(i,M,s),u(i,T,s),$(T,t[3]),u(i,A,s),u(i,k,s),c(k,E),c(k,N),c(k,S),u(i,C,s),u(i,I,s),$(I,t[5]),u(i,j,s),u(i,P,s),c(P,F),c(P,q),c(P,L),u(i,z,s),u(i,B,s),$(B,t[7]),H||(J=[f(p,"change",t[17]),f(p,"input",t[17]),f(p,"change",t[12]),f(T,"change",t[18]),f(T,"input",t[18]),f(T,"change",t[13]),f(I,"change",t[19]),f(I,"input",t[19]),f(I,"change",t[14]),f(B,"change",t[20]),f(B,"input",t[20]),f(B,"change",t[15])],H=!0)},p(t,n){2&n&&h(o,t[1]),4&n&&g(p,"max",t[2]),4&n&&b!==(b=V===t[2])&&(p.disabled=b),2&n&&$(p,t[1]),8&n&&h(y,t[3]),16&n&&g(T,"min",t[4]),16&n&&D!==(D=t[4]===W)&&(T.disabled=D),8&n&&$(T,t[3]),32&n&&h(N,t[5]),64&n&&g(I,"max",t[6]),64&n&&O!==(O=X===t[6])&&(I.disabled=O),32&n&&$(I,t[5]),128&n&&h(q,t[7]),256&n&&g(B,"min",t[8]),256&n&&G!==(G=t[8]===Y)&&(B.disabled=G),128&n&&$(B,t[7])},d(t){t&&(s(n),s(m),s(p),s(x),s(v),s(M),s(T),s(A),s(k),s(C),s(I),s(j),s(P),s(z),s(B)),H=!1,i(J)}}}function R(t){let n,e,i,o,r;return{c(){n=l("label"),n.textContent="Allow Negative Answers",e=d(),i=l("input"),g(n,"for","allow-negative-answers"),g(i,"type","checkbox"),g(i,"name","allow-negative-answers"),g(i,"id","allow-negative-answers")},m(c,s){u(c,n,s),u(c,e,s),u(c,i,s),$(i,t[9]),o||(r=f(i,"change",t[21]),o=!0)},p(t,n){512&n&&$(i,t[9])},d(t){t&&(s(n),s(e),s(i)),o=!1,r()}}}function U(n){let e,o,r,p,h,$,x,v,w,y,_,M,T=F(n[11]),D=[];for(let t=0;t<T.length;t+=1)D[t]=K(J(n,T,t));let A=(1===n[0]?.id||2===n[0]?.id||3===n[0]?.id)&&Q(n),E=2===n[0]?.id&&R(n);return{c(){e=l("form"),o=l("label"),o.textContent="Problem Type",r=d(),p=l("select");for(let t=0;t<D.length;t+=1)D[t].c();h=d(),A&&A.c(),$=d(),E&&E.c(),x=d(),v=l("button"),w=a("Practice"),g(o,"for","type"),g(p,"name","type"),g(p,"id","type"),void 0===n[0]&&k((()=>n[16].call(p))),v.disabled=y=!n[0],g(v,"type","submit")},m(t,i){u(t,e,i),c(e,o),c(e,r),c(e,p);for(let t=0;t<D.length;t+=1)D[t]&&D[t].m(p,null);b(p,n[0],!0),c(e,h),A&&A.m(e,null),c(e,$),E&&E.m(e,null),c(e,x),c(e,v),c(v,w),_||(M=[f(p,"change",n[16]),f(e,"submit",m(n[10]))],_=!0)},p(t,[n]){if(2048&n){let e;for(T=F(t[11]),e=0;e<T.length;e+=1){const i=J(t,T,e);D[e]?D[e].p(i,n):(D[e]=K(i),D[e].c(),D[e].m(p,null))}for(;e<D.length;e+=1)D[e].d(1);D.length=T.length}2049&n&&b(p,t[0]),1===t[0]?.id||2===t[0]?.id||3===t[0]?.id?A?A.p(t,n):(A=Q(t),A.c(),A.m(e,$)):A&&(A.d(1),A=null),2===t[0]?.id?E?E.p(t,n):(E=R(t),E.c(),E.m(e,x)):E&&(E.d(1),E=null),2049&n&&y!==(y=!t[0])&&(v.disabled=y)},i:t,o:t,d(t){t&&s(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(D,t),A&&A.d(),E&&E.d(),_=!1,i(M)}}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");let V=1,W=6,X=1,Y=6;function Z(t,n,e){const i=w();let o,r=[{id:1,text:"Addition"},{id:2,text:"Subtraction"},{id:3,text:"Multiplication"},{id:4,text:"Division"}],c=1,u=6,s=1,l=1,a=1,d=6,f=1,m=1,g=!1;return[o,c,u,s,l,a,d,f,m,g,()=>{const t=o.id;i("message",{id:t,config:{firstTermMinimumDigits:c,firstTermMaximumDigits:s,secondTermMinimumDigits:a,secondTermMaximumDigits:f,allowNegativeAnswers:g}})},r,t=>{const n=t.target.valueAsNumber;n>l&&n>s&&e(3,s=n),e(4,l=n)},t=>{const n=t.target.valueAsNumber;n<u&&n<c&&e(1,c=n),e(2,u=n)},t=>{const n=t.target.valueAsNumber;n>m&&n>f&&e(7,f=n),e(8,m=n)},t=>{const n=t.target.valueAsNumber;n<d&&n<a&&e(5,a=n),e(6,d=n)},function(){o=function(t){const n=t.querySelector(":checked");return n&&n.__value}(this),e(0,o),e(11,r)},function(){c=p(this.value),e(1,c)},function(){s=p(this.value),e(3,s)},function(){a=p(this.value),e(5,a)},function(){f=p(this.value),e(7,f)},function(){g=this.value,e(9,g)}]}class tt extends H{constructor(t){super(),G(this,t,Z,U,r,{})}}function nt(t){let n,e;return{c(){n=l("p"),e=a(t[1])},m(t,i){u(t,n,i),c(n,e)},p(t,n){2&n&&h(e,t[1])},d(t){t&&s(n)}}}function et(n){let e,o,r,b,x,v,w,y,_,M,T,D=n[1]&&nt(n);return{c(){e=l("form"),o=l("label"),r=a(n[0]),b=d(),x=l("input"),v=d(),w=l("input"),_=d(),D&&D.c(),g(o,"for","answer"),g(x,"type","number"),g(x,"name","answer"),g(x,"id","answer"),g(w,"type","submit"),w.value="Submit",w.disabled=y=null==n[2]},m(t,i){u(t,e,i),c(e,o),c(o,r),c(e,b),c(e,x),$(x,n[2]),c(e,v),c(e,w),c(e,_),D&&D.m(e,null),M||(T=[f(x,"input",n[6]),f(e,"submit",m(n[3]))],M=!0)},p(t,[n]){1&n&&h(r,t[0]),4&n&&p(x.value)!==t[2]&&$(x,t[2]),4&n&&y!==(y=null==t[2])&&(w.disabled=y),t[1]?D?D.p(t,n):(D=nt(t),D.c(),D.m(e,null)):D&&(D.d(1),D=null)},i:t,o:t,d(t){t&&s(e),D&&D.d(),M=!1,i(T)}}}function it(t,n,e){let{selection:i}=n,{config:o}=n;const r=(t,n)=>(t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1)+t)),c=()=>{switch(i){case 1:return s(o.firstTermMinimumDigits,o.firstTermMaximumDigits,o.secondTermMinimumDigits,o.secondTermMaximumDigits);case 2:return l(o.firstTermMinimumDigits,o.firstTermMaximumDigits,o.secondTermMinimumDigits,o.secondTermMaximumDigits,o.allowNegativeAnswers);case 3:return a(o.firstTermMinimumDigits,o.firstTermMaximumDigits,o.secondTermMinimumDigits,o.secondTermMaximumDigits);case 4:return d()}console.log("unknown selection"),alert("unkown selection")},u=(t,n)=>{const e=r(t,n);return r(Math.pow(10,e-1),Math.pow(10,e)-1)},s=(t,n,i,o)=>{const r=u(t,n),c=u(i,o);h=t=>t===r+c,e(0,f=`${r} + ${c} =`)},l=(t,n,i,o,r)=>{let c=u(t,n),s=u(i,o);r||([c,s]=[Math.max(c,s),Math.min(c,s)]),h=t=>t===c-s,e(0,f=`${c} - ${s} =`)},a=(t,n,i,o)=>{const r=u(t,n),c=u(i,o);h=t=>t===r*c,e(0,f=`${r} × ${c} =`)},d=()=>{const t=r(1,9),n=r(1,9);h=n=>n===t,e(0,f=`${t*n} ÷ ${n} =`)};let f,m,g,h=()=>!1;return t.$$set=t=>{"selection"in t&&e(4,i=t.selection),"config"in t&&e(5,o=t.config)},t.$$.update=()=>{1&t.$$.dirty&&(f||c())},[f,m,g,()=>h(g)?(c(),e(1,m=null),void e(2,g=null)):(e(1,m=`${g} isn't correct. Try again 😊`),void e(2,g=null)),i,o,function(){g=p(this.value),e(2,g)}]}class ot extends H{constructor(t){super(),G(this,t,it,et,r,{selection:4,config:5})}}function rt(n){let e,i;return e=new tt({}),e.$on("message",n[2]),{c(){q(e.$$.fragment)},m(t,n){L(e,t,n),i=!0},p:t,i(t){i||(j(e.$$.fragment,t),i=!0)},o(t){P(e.$$.fragment,t),i=!1},d(t){z(e,t)}}}function ct(t){let n,e;return n=new ot({props:{selection:t[0],config:t[1]}}),{c(){q(n.$$.fragment)},m(t,i){L(n,t,i),e=!0},p(t,e){const i={};1&e&&(i.selection=t[0]),2&e&&(i.config=t[1]),n.$set(i)},i(t){e||(j(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){z(n,t)}}}function ut(t){let n,e,o,r;const c=[ct,rt],l=[];function d(t,n){return t[0]?0:1}return n=d(t),e=l[n]=c[n](t),{c(){e.c(),o=a("")},m(t,e){l[n].m(t,e),u(t,o,e),r=!0},p(t,[r]){let u=n;n=d(t),n===u?l[n].p(t,r):(O={r:0,c:[],p:O},P(l[u],1,1,(()=>{l[u]=null})),O.r||i(O.c),O=O.p,e=l[n],e?e.p(t,r):(e=l[n]=c[n](t),e.c()),j(e,1),e.m(o.parentNode,o))},i(t){r||(j(e),r=!0)},o(t){P(e),r=!1},d(t){t&&s(o),l[n].d(t)}}}function st(t,n,e){let i,o={};return[i,o,t=>{e(0,i=t.detail.id),e(1,o=Object.assign({},t.detail.config))}]}return new class extends H{constructor(t){super(),G(this,t,st,ut,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
