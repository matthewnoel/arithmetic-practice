var app=function(){"use strict";"undefined"!=typeof window&&(window.__svelte||={v:new Set}).v.add("5");const e=Symbol(),n=["touchstart","touchmove"];function t(e){return n.includes(e)}var r=Array.isArray,l=Array.from,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,u=Object.prototype,s=Array.prototype,f=Object.getPrototypeOf;const c=32,v=256,d=512,p=1024,m=2048,h=4096,g=8192,y=16384,b=65536,_=1<<20,w=Symbol("$state"),x=Symbol("legacy props"),M=Symbol("");function k(e){return e===this.v}function $(e){return n=e,t=this.v,!(n!=n?t==t:n!==t||null!==n&&"object"==typeof n||"function"==typeof n);var n,t}function T(e,n){return{f:0,v:e,reactions:null,equals:k,version:0}}function D(e){return function(e){null!==De&&2&De.f&&(null===Oe?Oe=[e]:Oe.push(e));return e}(T(e))}function S(e,n=!1){const t=T(e);return n||(t.equals=$),t}function E(e,n){return null!==De&&18&De.f&&(null===Oe||!Oe.includes(e))&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),N(e,n)}function N(e,n){return e.equals(n)||(e.v=n,e.version=Le(),O(e,m),null!==Ee&&Ee.f&p&&!(Ee.f&c)&&(null!==Pe&&Pe.includes(e)?(nn(Ee,m),Je(Ee)):null===Ae?function(e){Ae=e}([e]):Ae.push(e))),n}function O(e,n){var t=e.reactions;if(null!==t)for(var r=t.length,l=0;l<r;l++){var i=t[l],o=i.f;o&m||(nn(i,n),1280&o&&(2&o?O(i,h):Je(i)))}}function P(n,t=null,l){if("object"!=typeof n||null===n||w in n)return n;const i=f(n);if(i!==u&&i!==s)return n;var a,c=new Map,v=r(n),d=T(0);return v&&c.set("length",T(n.length)),new Proxy(n,{defineProperty(e,n,t){"value"in t&&!1!==t.configurable&&!1!==t.enumerable&&!1!==t.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var r=c.get(n);return void 0===r?(r=T(t.value),c.set(n,r)):E(r,P(t.value,a)),!0},deleteProperty(n,t){var r=c.get(t);if(void 0===r)t in n&&c.set(t,T(e));else{if(v&&"string"==typeof t){var l=c.get("length"),i=Number(t);Number.isInteger(i)&&i<l.v&&E(l,i)}E(r,e),q(d)}return!0},get(t,r,l){if(r===w)return n;var i=c.get(r),u=r in t;if(void 0!==i||u&&!o(t,r)?.writable||(i=T(P(u?t[r]:e,a)),c.set(r,i)),void 0!==i){var s=Xe(i);return s===e?void 0:s}return Reflect.get(t,r,l)},getOwnPropertyDescriptor(n,t){var r=Reflect.getOwnPropertyDescriptor(n,t);if(r&&"value"in r){var l=c.get(t);l&&(r.value=Xe(l))}else if(void 0===r){var i=c.get(t),o=i?.v;if(void 0!==i&&o!==e)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(n,t){if(t===w)return!0;var r=c.get(t),l=void 0!==r&&r.v!==e||Reflect.has(n,t);if((void 0!==r||null!==Ee&&(!l||o(n,t)?.writable))&&(void 0===r&&(r=T(l?P(n[t],a):e),c.set(t,r)),Xe(r)===e))return!1;return l},set(n,t,r,l){var i=c.get(t),u=t in n;if(v&&"length"===t)for(var s=r;s<i.v;s+=1){var f=c.get(s+"");void 0!==f?E(f,e):s in n&&(f=T(e),c.set(s+"",f))}void 0===i?u&&!o(n,t)?.writable||(E(i=T(void 0),P(r,a)),c.set(t,i)):(u=i.v!==e,E(i,P(r,a)));var p=Reflect.getOwnPropertyDescriptor(n,t);if(p?.set&&p.set.call(l,r),!u){if(v&&"string"==typeof t){var m=c.get("length"),h=Number(t);Number.isInteger(h)&&h>=m.v&&E(m,h+1)}q(d)}return!0},ownKeys(n){Xe(d);var t=Reflect.ownKeys(n).filter((n=>{var t=c.get(n);return void 0===t||t.v!==e}));for(var[r,l]of c)l.v===e||r in n||t.push(r);return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function q(e,n=1){E(e,e.v+n)}function A(e){return null!==e&&"object"==typeof e&&w in e?e[w]:e}var z,j,C;function L(e=""){return document.createTextNode(e)}function I(e){return j.call(e)}function R(e){return C.call(e)}function F(e,n){return I(e)}function W(e,n){var t=I(e);return t instanceof Comment&&""===t.data?R(t):t}function B(e,n=1,t=!1){let r=e;for(;n--;)r=R(r);return r}function V(e){var n=2050;null===Ee?n|=v:Ee.f|=_;var t=null!==De&&2&De.f?De:null;const r={children:null,ctx:Ce,deps:null,equals:k,f:n,fn:e,reactions:null,v:null,version:0,parent:t??Ee};return null!==t&&(t.children??=[]).push(r),r}function G(e){var n=e.children;if(null!==n){e.children=null;for(var t=0;t<n.length;t+=1){var r=n[t];2&r.f?Y(r):ie(r)}}}function K(e){var n,t=Ee;Ne(function(e){for(var n=e.parent;null!==n;){if(!(2&n.f))return n;n=n.parent}return null}(e));try{G(e),n=Fe(e)}finally{Ne(t)}return n}function H(e){var n=K(e);nn(e,(je||e.f&v)&&null!==e.deps?h:p),e.equals(n)||(e.v=n,e.version=Le())}function Y(e){G(e),Be(e,0),nn(e,y),e.v=e.children=e.deps=e.ctx=e.reactions=null}function J(e){null===Ee&&null===De&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==De&&De.f&v&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),xe&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Q(e,n,t,r=!0){var l=!!(64&e),i=Ee,o={ctx:Ce,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|m,first:null,fn:n,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(t){var a=we;try{Me(!0),Ve(o),o.f|=32768}catch(e){throw ie(o),e}finally{Me(a)}}else null!==n&&Je(o);if(!(t&&null===o.deps&&null===o.first&&null===o.nodes_start&&null===o.teardown&&!(o.f&_))&&!l&&r&&(null!==i&&function(e,n){var t=n.last;null===t?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}(o,i),null!==De&&2&De.f)){var u=De;(u.children??=[]).push(o)}return o}function U(e){return Q(4,e,!1)}function X(e){return Q(8,e,!0)}function Z(e){return ee(e)}function ee(e,n=0){return Q(24|n,e,!0)}function ne(e,n=!0){return Q(40,e,!0,n)}function te(e){var n=e.teardown;if(null!==n){const e=xe,t=De;ke(!0),Se(null);try{n.call(null)}finally{ke(e),Se(t)}}}function re(e){var n=e.deriveds;if(null!==n){e.deriveds=null;for(var t=0;t<n.length;t+=1)Y(n[t])}}function le(e,n=!1){var t=e.first;for(e.first=e.last=null;null!==t;){var r=t.next;ie(t,n),t=r}}function ie(e,n=!0){var t=!1;if((n||524288&e.f)&&null!==e.nodes_start){for(var r=e.nodes_start,l=e.nodes_end;null!==r;){var i=r===l?null:R(r);r.remove(),r=i}t=!0}le(e,n&&!t),re(e),Be(e,0),nn(e,y);var o=e.transitions;if(null!==o)for(const e of o)e.stop();te(e);var a=e.parent;null!==a&&null!==a.first&&oe(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function oe(e){var n=e.parent,t=e.prev,r=e.next;null!==t&&(t.next=r),null!==r&&(r.prev=t),null!==n&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function ae(e,n){var t=[];se(e,t,!0),ue(t,(()=>{ie(e),n&&n()}))}function ue(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var l of e)l.out(r)}else n()}function se(e,n,t){if(!(e.f&g)){if(e.f^=g,null!==e.transitions)for(const r of e.transitions)(r.is_global||t)&&n.push(r);for(var r=e.first;null!==r;){var l=r.next;se(r,n,!!(!!(r.f&b)||!!(r.f&c))&&t),r=l}}}function fe(e){ce(e,!0)}function ce(e,n){if(e.f&g){Ie(e)&&Ve(e),e.f^=g;for(var t=e.first;null!==t;){var r=t.next;ce(t,!!(!!(t.f&b)||!!(t.f&c))&&n),t=r}if(null!==e.transitions)for(const t of e.transitions)(t.is_global||n)&&t.in()}}let ve=!1,de=[];function pe(){ve=!1;const e=de.slice();de=[],function(e){for(var n=0;n<e.length;n++)e[n]()}(e)}function me(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const he=0;let ge=!1,ye=he,be=!1,_e=null,we=!1,xe=!1;function Me(e){we=e}function ke(e){xe=e}let $e=[],Te=0,De=null;function Se(e){De=e}let Ee=null;function Ne(e){Ee=e}let Oe=null;let Pe=null,qe=0,Ae=null;let ze=1,je=!1,Ce=null;function Le(){return++ze}function Ie(e){var n=e.f;if(n&m)return!0;if(n&h){var t=e.deps,r=!!(n&v);if(null!==t){var l;if(n&d){for(l=0;l<t.length;l++)(t[l].reactions??=[]).push(e);e.f^=d}for(l=0;l<t.length;l++){var i=t[l];if(Ie(i)&&H(i),!r||null===Ee||je||i?.reactions?.includes(e)||(i.reactions??=[]).push(e),i.version>e.version)return!0}}r&&(null===Ee||je)||nn(e,p)}return!1}function Re(e,n,t,r){if(ge){if(null===t&&(ge=!1),function(e){return!(e.f&y||null!==e.parent&&128&e.parent.f)}(n))throw e}else null!==t&&(ge=!0),function(e,n){for(var t=n;null!==t;){if(128&t.f)try{return void t.fn(e)}catch{t.f^=128}t=t.parent}throw ge=!1,e}(e,n)}function Fe(e){var n=Pe,t=qe,r=Ae,l=De,i=je,o=Oe,a=Ce,u=e.f;Pe=null,qe=0,Ae=null,De=96&u?null:e,je=!we&&!!(u&v),Oe=null,Ce=e.ctx;try{var s=(0,e.fn)(),f=e.deps;if(null!==Pe){var c;if(Be(e,qe),null!==f&&qe>0)for(f.length=qe+Pe.length,c=0;c<Pe.length;c++)f[qe+c]=Pe[c];else e.deps=f=Pe;if(!je)for(c=qe;c<f.length;c++)(f[c].reactions??=[]).push(e)}else null!==f&&qe<f.length&&(Be(e,qe),f.length=qe);return s}finally{Pe=n,qe=t,Ae=r,De=l,je=i,Oe=o,Ce=a}}function We(e,n){let t=n.reactions;if(null!==t){var r=t.indexOf(e);if(-1!==r){var l=t.length-1;0===l?t=n.reactions=null:(t[r]=t[l],t.pop())}}null===t&&2&n.f&&(null===Pe||!Pe.includes(n))&&(nn(n,h),768&n.f||(n.f^=d),Be(n,0))}function Be(e,n){var t=e.deps;if(null!==t)for(var r=n;r<t.length;r++)We(e,t[r])}function Ve(e){var n=e.f;if(!(n&y)){nn(e,p);var t=Ee,r=Ce;Ee=e;try{16&n?function(e){for(var n=e.first;null!==n;){var t=n.next;n.f&c||ie(n),n=t}}(e):le(e),re(e),te(e);var l=Fe(e);e.teardown="function"==typeof l?l:null,e.version=ze}catch(n){Re(n,e,t,r||e.ctx)}finally{Ee=t}}}function Ge(){if(Te>1e3){Te=0;try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){if(null===_e)throw e;Re(e,_e,null)}}Te++}function Ke(e){var n=e.length;if(0!==n){Ge();var t=we;we=!0;try{for(var r=0;r<n;r++){var l=e[r];l.f&p||(l.f^=p);var i=[];Qe(l,i),He(i)}}finally{we=t}}}function He(e){var n=e.length;if(0!==n)for(var t=0;t<n;t++){var r=e[t];if(!(24576&r.f))try{Ie(r)&&(Ve(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?oe(r):r.fn=null))}catch(e){Re(e,r,null,r.ctx)}}}function Ye(){if(be=!1,Te>1001)return;const e=$e;$e=[],Ke(e),be||(Te=0,_e=null)}function Je(e){ye===he&&(be||(be=!0,queueMicrotask(Ye))),_e=e;for(var n=e;null!==n.parent;){var t=(n=n.parent).f;if(96&t){if(!(t&p))return;n.f^=p}}$e.push(n)}function Qe(e,n){var t=e.first,r=[];e:for(;null!==t;){var l=t.f,i=!!(l&c),o=i&&!!(l&p),a=t.next;if(!(o||l&g))if(8&l){if(i)t.f^=p;else try{Ie(t)&&Ve(t)}catch(e){Re(e,t,null,t.ctx)}var u=t.first;if(null!==u){t=u;continue}}else 4&l&&r.push(t);if(null===a){let n=t.parent;for(;null!==n;){if(e===n)break e;var s=n.next;if(null!==s){t=s;continue e}n=n.parent}}t=a}for(var f=0;f<r.length;f++)u=r[f],n.push(u),Qe(u,n)}function Ue(e){var n=ye,t=$e;try{Ge();const n=[];ye=1,$e=n,be=!1,Ke(t);var r=e?.();return ve&&pe(),($e.length>0||n.length>0)&&Ue(),Te=0,_e=null,r}finally{ye=n,$e=t}}function Xe(e){var n=e.f,t=!!(2&n);if(t&&n&y){var r=K(e);return Y(e),r}if(null!==De){null!==Oe&&Oe.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}();var l=De.deps;null===Pe&&null!==l&&l[qe]===e?qe++:null===Pe?Pe=[e]:Pe.push(e),null!==Ae&&null!==Ee&&Ee.f&p&&!(Ee.f&c)&&Ae.includes(e)&&(nn(Ee,m),Je(Ee))}else if(t&&null===e.deps)for(var i=e,o=i.parent,a=i;null!==o;){if(!(2&o.f)){var u=o;u.deriveds?.includes(a)||(u.deriveds??=[]).push(a);break}a=o,o=o.parent}return t&&Ie(i=e)&&H(i),e.v}function Ze(e){const n=De;try{return De=null,e()}finally{De=n}}const en=-7169;function nn(e,n){e.f=e.f&en|n}function tn(e,n=!1,t){Ce={p:Ce,c:null,e:null,m:!1,s:e,x:null,l:null}}function rn(e){const n=Ce;if(null!==n){const e=n.e;if(null!==e){var t=Ee,r=De;n.e=null;try{for(var l=0;l<e.length;l++){var i=e[l];Ne(i.effect),Se(i.reaction),U(i.fn)}}finally{Ne(t),Se(r)}}Ce=n.p,n.m=!0}return{}}let ln=!1;function on(e){var n=De,t=Ee;Se(null),Ne(null);try{return e()}finally{Se(n),Ne(t)}}function an(e,n,t,r=t){e.addEventListener(n,(()=>on(t)));const l=e.__on_r;e.__on_r=l?()=>{l(),r(!0)}:()=>r(!0),ln||(ln=!0,document.addEventListener("reset",(e=>{Promise.resolve().then((()=>{if(!e.defaultPrevented)for(const n of e.target.elements)n.__on_r?.()}))}),{capture:!0}))}const un=new Set,sn=new Set;function fn(e,n,t,r){function l(e){if(r.capture||dn.call(n,e),!e.cancelBubble)return on((()=>t.call(this,e)))}var i;return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?(i=()=>{n.addEventListener(e,l,r)},ve||(ve=!0,queueMicrotask(pe)),de.push(i)):n.addEventListener(e,l,r),l}function cn(e,n,t,r,l){var i={capture:r,passive:l},o=fn(e,n,t,i);n!==document.body&&n!==window&&n!==document||function(e){const n=Q(8,null,!1);nn(n,p),n.teardown=e}((()=>{n.removeEventListener(e,o,i)}))}function vn(e){for(var n=0;n<e.length;n++)un.add(e[n]);for(var t of sn)t(e)}function dn(e){var n=this,t=n.ownerDocument,l=e.type,o=e.composedPath?.()||[],a=o[0]||e.target,u=0,s=e.__root;if(s){var f=o.indexOf(s);if(-1!==f&&(n===document||n===window))return void(e.__root=n);var c=o.indexOf(n);if(-1===c)return;f<=c&&(u=f)}if((a=o[u]||e.target)!==n){i(e,"currentTarget",{configurable:!0,get:()=>a||t});var v=De,d=Ee;Se(null),Ne(null);try{for(var p,m=[];null!==a;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+l];if(void 0!==g&&!a.disabled)if(r(g)){var[y,...b]=g;y.apply(a,[e,...b])}else g.call(a,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble||h===n||null===h)break;a=h}if(p){for(let e of m)queueMicrotask((()=>{throw e}));throw p}}finally{e.__root=n,delete e.currentTarget,Se(v),Ne(d)}}}function pn(e,n){var t=Ee;null===t.nodes_start&&(t.nodes_start=e,t.nodes_end=n)}function mn(e,n){var t,r=!!(1&n),l=!!(2&n),i=!e.startsWith("<!>");return()=>{var n,o;void 0===t&&(n=i?e:"<!>"+e,(o=document.createElement("template")).innerHTML=n,t=o.content,r||(t=I(t)));var a=l?document.importNode(t,!0):t.cloneNode(!0);r?pn(I(a),a.lastChild):pn(a,a);return a}}function hn(e,n){null!==e&&e.before(n)}function gn(e,n){var t=null==n?"":"object"==typeof n?n+"":n;t!==(e.__t??=e.nodeValue)&&(e.__t=t,e.nodeValue=null==t?"":t+"")}const yn=new Map;let bn=new WeakMap;function _n(n,t,r=!1){var l=n,i=null,o=null,a=e,u=!1;const s=(e,n=!0)=>{u=!0,f(n,e)},f=(e,n)=>{a!==(a=e)&&(a?(i?fe(i):n&&(i=ne((()=>n(l)))),o&&ae(o,(()=>{o=null}))):(o?fe(o):n&&(o=ne((()=>n(l)))),i&&ae(i,(()=>{i=null}))))};ee((()=>{u=!1,t(s),u||f(null,null)}),r?b:0)}function wn(e,n){return n}function xn(e,n,t,i,o,a=null){var u,s={flags:n,items:new Map,first:null};u=e.appendChild(L());var f=null,c=!1;ee((()=>{var e=t(),v=r(e)?e:null==e?[]:l(e),d=v.length;c&&0===d||(c=0===d,function(e,n,t,r,i,o,a){var u,s,f,c,v,d=e.length,p=n.items,m=n.first,h=m,y=null,b=[],_=[];for(v=0;v<d;v+=1)if(f=a(s=e[v],v),void 0!==(c=p.get(f))){if(Mn(c,s,v),c.e.f&g&&fe(c.e),c!==h){if(void 0!==u&&u.has(c)){if(b.length<_.length){var w,x=_[0];y=x.prev;var M=b[0],k=b[b.length-1];for(w=0;w<b.length;w+=1)$n(b[w],x,t);for(w=0;w<_.length;w+=1)u.delete(_[w]);Tn(n,M.prev,k.next),Tn(n,y,M),Tn(n,k,x),h=x,y=k,v-=1,b=[],_=[]}else u.delete(c),$n(c,h,t),Tn(n,c.prev,c.next),Tn(n,c,null===y?n.first:y.next),Tn(n,y,c),y=c;continue}for(b=[],_=[];null!==h&&h.k!==f;)!o&&h.e.f&g||(u??=new Set).add(h),_.push(h),h=h.next;if(null===h)continue;c=h}b.push(c),y=c,h=c.next}else{y=kn(h?h.e.nodes_start:t,n,y,null===y?n.first:y.next,s,f,v,r,i),p.set(f,y),b=[],_=[],h=y.next}if(null!==h||void 0!==u){for(var $=void 0===u?[]:l(u);null!==h;)!o&&h.e.f&g||$.push(h),h=h.next;if($.length>0)!function(e,n,t,r){for(var l=[],i=n.length,o=0;o<i;o++)se(n[o].e,l,!0);var a=i>0&&0===l.length&&null!==t;if(a){var u=t.parentNode;u.textContent="",u.append(t),r.clear(),Tn(e,n[0].prev,n[i-1].next)}ue(l,(()=>{for(var t=0;t<i;t++){var l=n[t];a||(r.delete(l.k),Tn(e,l.prev,l.next)),ie(l.e,!a)}}))}(n,$,0===d?t:null,p)}Ee.first=n.first&&n.first.e,Ee.last=y&&y.e}(v,s,u,o,n,!!(De.f&g),i),null!==a&&(0===d?f?fe(f):f=ne((()=>a(u))):null!==f&&ae(f,(()=>{f=null}))),t())}))}function Mn(e,n,t,r){N(e.v,n),e.i=t}function kn(e,n,t,r,l,i,o,a,u,s){var f=!!(1&u)?!(16&u)?S(l):T(l):l,c=2&u?T(o):o,v={i:c,v:f,k:i,a:null,e:null,prev:t,next:r};try{return v.e=ne((()=>a(e,f,c)),false),v.e.prev=t&&t.e,v.e.next=r&&r.e,null===t?n.first=v:(t.next=v,t.e.next=v.e),null!==r&&(r.prev=v,r.e.prev=v.e),v}finally{}}function $n(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,l=n?n.e.nodes_start:t,i=e.e.nodes_start;i!==r;){var o=R(i);l.before(i),i=o}}function Tn(e,n,t){null===n?e.first=t:(n.next=t,n.e.next=t&&t.e),null!==t&&(t.prev=n,t.e.prev=n&&n.e)}function Dn(e,n,t,r){var l=e.__attributes??={};l[n]!==(l[n]=t)&&("style"===n&&"__styles"in e&&(e.__styles={}),"loading"===n&&(e[M]=t),null==t?e.removeAttribute(n):"string"!=typeof t&&function(e){var n,t=Sn.get(e.nodeName);if(t)return t;Sn.set(e.nodeName,t=[]);var r=e,l=Element.prototype;for(;l!==r;){for(var i in n=a(r))n[i].set&&t.push(i);r=f(r)}return t}(e).includes(n)?e[n]=t:e.setAttribute(n,t))}var Sn=new Map;function En(e,n,t){if(t){if(e.classList.contains(n))return;e.classList.add(n)}else{if(!e.classList.contains(n))return;e.classList.remove(n)}}function Nn(e,n,t=n){an(e,"input",(r=>{var l=r?e.defaultValue:e.value;if(l=On(e)?Pn(l):l,t(l),l!==(l=n())){var i=e.selectionStart,o=e.selectionEnd;e.value=l??"",null!==o&&(e.selectionStart=i,e.selectionEnd=Math.min(o,e.value.length))}})),null==Ze(n)&&e.value&&t(On(e)?Pn(e.value):e.value),X((()=>{var t=n();On(e)&&t===Pn(e.value)||("date"!==e.type||t||e.value)&&t!==e.value&&(e.value=t??"")}))}function On(e){var n=e.type;return"number"===n||"range"===n}function Pn(e){return""===e?null:+e}function qn(e,n,t){if(e.multiple)return function(e,n){for(var t of e.options)t.selected=~n.indexOf(zn(t))}(e,n);for(var r of e.options){var l=zn(r);if(i=l,o=n,Object.is(A(i),A(o)))return void(r.selected=!0)}var i,o;t&&void 0===n||(e.selectedIndex=-1)}function An(e,n,t=n){var r=!0;an(e,"change",(n=>{var r,l=n?"[selected]":":checked";if(e.multiple)r=[].map.call(e.querySelectorAll(l),zn);else{var i=e.querySelector(l)??e.querySelector("option:not([disabled])");r=i&&zn(i)}t(r)})),U((()=>{var l=n();if(qn(e,l,r),r&&void 0===l){var i=e.querySelector(":checked");null!==i&&(l=zn(i),t(l))}e.__value=l,r=!1})),function(e){U((()=>{var n=new MutationObserver((()=>{var n=e.__value;qn(e,n)}));return n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{n.disconnect()}}))}(e)}function zn(e){return"__value"in e?e.__value:e.value}function jn(e){return function(...n){return n[0].preventDefault(),e?.apply(this,n)}}function Cn(e){null===Ce&&me(),function(e){if(J(),!(null!==Ee&&Ee.f&c&&null!==Ce)||Ce.m)return U(e);var n=Ce;(n.e??=[]).push({fn:e,effect:Ee,reaction:De})}((()=>{const n=Ze(e);if("function"==typeof n)return n}))}function Ln(){const e=Ce;return null===e&&me(),(n,t,l)=>{const i=e.s.$$events?.[n];if(i){const o=r(i)?i.slice():[i],a=function(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}(n,t,l);for(const n of o)n.call(e.x,a);return!a.defaultPrevented}return!0}}let In=!1;function Rn(e,n,t,r){var l,i=!!(1&t),a=!!(8&t),u=!!(16&t),s=!1;a?[l,s]=function(e){var n=In;try{return In=!1,[e(),In]}finally{In=n}}((()=>e[n])):l=e[n];var f,c=w in e||x in e,v=o(e,n)?.set??(c&&a&&n in e?t=>e[n]=t:void 0),d=r,p=!0,m=!1,h=()=>(m=!0,p&&(p=!1,d=u?Ze(r):r),d);if(void 0===l&&void 0!==r&&(v&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),l=h(),v&&v(l)),f=()=>{var t=e[n];return void 0===t?h():(p=!0,m=!1,t)},!(4&t))return f;if(v){var g=e.$$legacy;return function(e,n){return arguments.length>0?((!n||g||s)&&v(n?f():e),e):f()}}var y=!1,b=S(l),_=function(e){for(var n=Ee,t=Ee;null!==n&&!(96&n.f);)n=n.parent;try{return Ne(n),e()}finally{Ne(t)}}((()=>V((()=>{var e=f(),n=Xe(b);return y?(y=!1,n):b.v=e}))));return i||(_.equals=$),function(e,n){if(arguments.length>0){const t=n?Xe(_):a?P(e):e;return _.equals(t)||(y=!0,E(b,t),m&&void 0!==d&&(d=t),Ze((()=>Xe(_)))),e}return Xe(_)}}function Fn(e){!function(e){J(),X(e)}((()=>{e();var n=Ee;n.f&m&&(console.warn("https://svelte.dev/e/legacy_recursive_reactive_block"),nn(n,h))}))}const Wn=(e,n,t)=>{const r=e.target.valueAsNumber;r>Xe(n)&&r>Xe(t)&&E(t,P(r)),E(n,P(r))},Bn=(e,n,t)=>{const r=e.target.valueAsNumber;r<Xe(n)&&r<Xe(t)&&E(t,P(r)),E(n,P(r))},Vn=(e,n,t)=>{const r=e.target.valueAsNumber;r>Xe(n)&&r>Xe(t)&&E(t,P(r)),E(n,P(r))},Gn=(e,n,t)=>{const r=e.target.valueAsNumber;r<Xe(n)&&r<Xe(t)&&E(t,P(r)),E(n,P(r))};var Kn=mn("<option> </option>"),Hn=mn('<label for="first-min"> </label> <input type="range" name="first-min" id="first-min" step="1" class="svelte-mziz9r"> <label for="first-max"> </label> <input type="range" name="first-max" id="first-max" step="1" class="svelte-mziz9r"> <label for="second-min"> </label> <input type="range" name="second-min" id="second-min" step="1" class="svelte-mziz9r"> <label for="second-max"> </label> <input type="range" name="second-max" id="second-max" step="1" class="svelte-mziz9r">',1),Yn=mn('<label for="allow-negative-answers">Allow Negative Answers</label> <input type="checkbox" name="allow-negative-answers" id="allow-negative-answers" class="svelte-mziz9r">',1),Jn=mn('<form class="svelte-mziz9r"><label for="type">Problem Type</label> <select name="type" id="type" class="svelte-mziz9r"></select> <!> <!> <button type="submit">Practice</button></form>');function Qn(e,n){tn(n,!0);const t=Ln(),r=()=>{const e=Xe(i).id,n={firstTermMinimumDigits:Xe(o),firstTermMaximumDigits:Xe(u),secondTermMinimumDigits:Xe(f),secondTermMaximumDigits:Xe(v),allowNegativeAnswers:Xe(p)};t("message",{id:e,config:n})};let l=[{id:1,text:"Addition"},{id:2,text:"Subtraction"},{id:3,text:"Multiplication"},{id:4,text:"Division"}],i=D(void 0),o=D(1),a=D(6),u=D(1),s=D(1),f=D(1),c=D(6),v=D(1),d=D(1),p=D(!1);var m=Jn(),h=V((()=>jn(r))),g=B(F(m),2);xn(g,21,(()=>l),wn,((e,n)=>{var t=Kn(),r={},l=F(t);Z((()=>{r!==(r=Xe(n))&&(t.value=null==(t.__value=Xe(n))?"":Xe(n)),gn(l,Xe(n).text)})),hn(e,t)}));var y=B(g,2),b=e=>{var n=Hn(),t=W(n),r=F(t),l=B(t,2);Dn(l,"min",1),l.__change=[Wn,s,u];var i=B(l,2),p=F(i),m=B(i,2);Dn(m,"max",6),m.__change=[Bn,a,o];var h=B(m,2),g=F(h),y=B(h,2);Dn(y,"min",1),y.__change=[Vn,d,v];var b=B(y,2),_=F(b),w=B(b,2);Dn(w,"max",6),w.__change=[Gn,c,f],Z((()=>{gn(r,`Minimum Digits In First Term (${Xe(o)??""})`),Dn(l,"max",Xe(a)),l.disabled=1===Xe(a),gn(p,`Maximum Digits In First Term (${Xe(u)??""})`),Dn(m,"min",Xe(s)),m.disabled=6===Xe(s),gn(g,`Minimum Digits In Second Term (${Xe(f)??""})`),Dn(y,"max",Xe(c)),y.disabled=1===Xe(c),gn(_,`Maximum Digits In Second Term (${Xe(v)??""})`),Dn(w,"min",Xe(d)),w.disabled=6===Xe(d)})),Nn(l,(()=>Xe(o)),(e=>E(o,e))),Nn(m,(()=>Xe(u)),(e=>E(u,e))),Nn(y,(()=>Xe(f)),(e=>E(f,e))),Nn(w,(()=>Xe(v)),(e=>E(v,e))),hn(e,n)};_n(y,(e=>{[1,2,3,4].includes(Xe(i)?.id)&&e(b)}));var _=B(y,2),w=e=>{var n=Yn();!function(e,n,t=n){an(e,"change",(n=>{var r=n?e.defaultChecked:e.checked;t(r)})),null==Ze(n)&&t(e.checked),X((()=>{var t=n();e.checked=Boolean(t)}))}(B(W(n),2),(()=>Xe(p)),(e=>E(p,e))),hn(e,n)};_n(_,(e=>{2===Xe(i)?.id&&e(w)}));var x=B(_,2);Z((()=>x.disabled=!Xe(i))),cn("submit",m,(function(...e){Xe(h)?.apply(this,e)})),An(g,(()=>Xe(i)),(e=>E(i,e))),hn(e,m),rn()}vn(["change"]);var Un=mn('<div class="confetti svelte-15ksp55"></div>'),Xn=mn('<div class="confetti-holder svelte-15ksp55"></div>');function Zn(e,n){tn(n,!0);let t=Rn(n,"size",3,10),r=Rn(n,"x",19,(()=>[-.5,.5])),l=Rn(n,"y",19,(()=>[.25,1])),i=Rn(n,"duration",3,2e3),o=Rn(n,"infinite",3,!1),a=Rn(n,"delay",19,(()=>[0,50])),u=Rn(n,"colorRange",19,(()=>[0,360])),s=Rn(n,"colorArray",19,(()=>[])),f=Rn(n,"amount",3,50),c=Rn(n,"iterationCount",3,1),v=Rn(n,"fallDistance",3,"100px"),d=Rn(n,"rounded",3,!1),p=Rn(n,"cone",3,!1),m=Rn(n,"noGravity",3,!1),h=Rn(n,"xSpread",3,.15),g=Rn(n,"destroyOnComplete",3,!0),y=Rn(n,"disableForReducedMotion",3,!1),b=D(!1);function _(e,n){return Math.random()*(n-e)+e}Cn((()=>{g()&&!o()&&"infinite"!=c()&&setTimeout((()=>E(b,!0)),(i()+a()[1])*c())}));var w,x,M,k=(w=document.createDocumentFragment(),x=document.createComment(""),M=L(),w.append(x,M),pn(x,M),w),$=W(k),T=e=>{var n=Xn();xn(n,21,(()=>({length:f()})),wn,((e,n)=>{var f=Un();const d=V((()=>v()??"")),p=V((()=>t()??"")),m=V((()=>(s().length?s()[Math.round(Math.random()*(s().length-1))]:`hsl(${Math.round(_(u()[0],u()[1]))}, 75%, 50%)`)??"")),g=V((()=>_(-45,45)??"")),y=V((()=>_(-45,45)??"")),b=V((()=>_(-10,10)??"")),w=V((()=>_(-10,10)??"")),x=V((()=>_(-10,10)??"")),M=V((()=>_(0,360)??"")),k=V((()=>_(l()[0],l()[1])??"")),$=V((()=>_(r()[0],r()[1])??"")),T=V((()=>.1*_(2,10)??"")),D=V((()=>(o()?`calc(${i()}ms * var(--scale))`:`${i()}ms`)??"")),S=V((()=>_(a()[0],a()[1])??"")),E=V((()=>(o()?"infinite":c())??"")),N=V((()=>1-h()??"")),O=V((()=>`\n        --fall-distance: ${Xe(d)};\n        --size: ${Xe(p)}px;\n        --color: ${Xe(m)};\n        --skew: ${Xe(g)}deg,${Xe(y)}deg;\n        --rotation-xyz: ${Xe(b)}, ${Xe(w)}, ${Xe(x)};\n        --rotation-deg: ${Xe(M)}deg;\n        --translate-y-multiplier: ${Xe(k)};\n        --translate-x-multiplier: ${Xe($)};\n        --scale: ${Xe(T)};\n        --transition-duration: ${Xe(D)};\n        --transition-delay: ${Xe(S)}ms;\n        --transition-iteration-count: ${Xe(E)};\n        --x-spread: ${Xe(N)}`));Z((()=>Dn(f,"style",Xe(O)))),hn(e,f)})),Z((()=>{En(n,"rounded",d()),En(n,"cone",p()),En(n,"no-gravity",m()),En(n,"reduced-motion",y())})),hn(e,n)};_n($,(e=>{Xe(b)||e(T)})),hn(e,k),rn()}var et=mn('<div class="confetti svelte-1qjohkm"><!></div>'),nt=mn("<p> </p>"),tt=mn('<div id="streak" class="svelte-1qjohkm"><span> </span></div>'),rt=mn('<form class="svelte-1qjohkm"><label for="answer"> </label> <input type="number" name="answer" id="answer" class="svelte-1qjohkm"> <br> <input type="submit" value="Submit"> <!> <!> <!></form>');function lt(e,n){tn(n,!0);const t=(e,n)=>(e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1)+e)),r=()=>{let e=d,t=Xe(v),r=0;for(;Xe(v)===t&&r<10;)switch(r++,n.selection){case 1:[e,t]=i(n.config.firstTermMinimumDigits,n.config.firstTermMaximumDigits,n.config.secondTermMinimumDigits,n.config.secondTermMaximumDigits);break;case 2:[e,t]=o(n.config.firstTermMinimumDigits,n.config.firstTermMaximumDigits,n.config.secondTermMinimumDigits,n.config.secondTermMaximumDigits,n.config.allowNegativeAnswers);break;case 3:[e,t]=a(n.config.firstTermMinimumDigits,n.config.firstTermMaximumDigits,n.config.secondTermMinimumDigits,n.config.secondTermMaximumDigits);break;case 4:[e,t]=u(n.config.firstTermMinimumDigits,n.config.firstTermMaximumDigits,n.config.secondTermMinimumDigits,n.config.secondTermMaximumDigits);break;default:console.log("unknown selection")}d=e,E(v,P(t))},l=(e,n)=>{const r=t(e,n);return t(Math.pow(10,r-1),Math.pow(10,r)-1)},i=(e,n,t,r)=>{const i=l(e,n),o=l(t,r);return[e=>e===i+o,`${i} + ${o} =`]},o=(e,n,t,r,i)=>{let o=l(e,n),a=l(t,r);return i||([o,a]=[Math.max(o,a),Math.min(o,a)]),[e=>e===o-a,`${o} - ${a} =`]},a=(e,n,t,r)=>{const i=l(e,n),o=l(t,r);return[e=>e===i*o,`${i} × ${o} =`]},u=(e,n,t,r)=>{let i=l(e,n);const o=[];for(let e=Math.pow(10,t-1);e<Math.pow(10,r)-1;e++)i%e==0&&o.push(e);let a;return o.length>0?a=o[Math.floor(Math.random()*o.length)]:(a=l(t,r),i=a*l(e,n)),[e=>e===i/a,`${i} ÷ ${a} =`]},s=()=>{r(),E(p,null),E(m,null),function(e,n=1){var t=Xe(e),r=1===n?t++:t--;E(e,t)}(g),c()},f=()=>d(Xe(m))?s():(E(p,`${Xe(m)} isn't correct. Try again 😊`),E(m,null),void E(g,0)),c=async()=>{E(h,!1),await async function(){await Promise.resolve(),Ue()}(),E(h,!0)};let v=D(void 0),d=()=>!1,p=D(void 0),m=D(void 0),h=D(!1),g=D(0);Fn((()=>{Xe(v)||r()}));var y=rt(),b=V((()=>jn(f))),_=F(y),w=F(_),x=B(_,2),M=B(x,4),k=B(M,2),$=e=>{var n=et();Zn(F(n),{}),hn(e,n)};_n(k,(e=>{Xe(h)&&e($)}));var T=B(k,2),S=e=>{var n=nt(),t=F(n);Z((()=>gn(t,Xe(p)))),hn(e,n)};_n(T,(e=>{Xe(p)&&e(S)}));var N=B(T,2),O=e=>{var n=tt(),t=F(n),r=F(t);Z((()=>gn(r,`🔥${Xe(g)??""}`))),hn(e,n)};_n(N,(e=>{Xe(g)&&e(O)})),Z((()=>{gn(w,Xe(v)),M.disabled=null==Xe(m)})),cn("submit",y,(function(...e){Xe(b)?.apply(this,e)})),Nn(x,(()=>Xe(m)),(e=>E(m,e))),hn(e,y),rn()}var it=mn('<input type="button" data-theme-toggle="">');vn(["click"]);var ot=mn("<!> <div></div>",1),at=mn('<!> <footer><span>This website is open source. The source code is <a href="https://github.com/matthewnoel/arithmetic-practice" target="_blank">available here</a>. The list of third pary licenses is <a href="https://raw.githubusercontent.com/matthewnoel/arithmetic-practice/main/third-party-licenses.txt" target="_blank">available here</a>. You can file an <a href="https://github.com/matthewnoel/arithmetic-practice/issues/new" target="_blank">issue here</a>.</span> <span>Change Theme: <!></span></footer>',1),ut=mn("<div></div> <!>",1);var st,ft,ct=(st=function(e){const n=e=>{E(t,P(e.detail.id)),E(r,P(Object.assign({},e.detail.config)))};let t=D(void 0),r=D(P({}));var l=ut(),i=B(W(l),2),o=e=>{var n=ot();lt(W(n),{get selection(){return Xe(t)},get config(){return Xe(r)}}),hn(e,n)},a=e=>{var t=at(),r=W(t);Qn(r,{$$events:{message:n}});var l=B(r,2),i=B(F(l),2);!function(e,n){tn(n,!0);const t=e=>{E(o,P(e===l?"🌞":"🌚")),document.querySelector("html").setAttribute("data-theme",e)},r="light",l="dark";let i=(({localStorageTheme:e,systemSettingDark:n})=>null!==e?e:n.matches?l:r)({localStorageTheme:localStorage.getItem("theme"),systemSettingDark:window.matchMedia("(prefers-color-scheme: dark)")}),o=D("🌞");t(i);var a=it();a.__click=()=>{const e=i===l?r:l;localStorage.setItem("theme",e),t(e),i=e},Z((()=>{Dn(a,"aria-label","🌚"===Xe(o)?"Change to dark theme.":"Change to light theme."),function(e,n){var t=e.__attributes??={};t.value!==(t.value=n??void 0)&&(e.value!==n||0===n&&"PROGRESS"===e.nodeName)&&(e.value=n)}(a,Xe(o))})),hn(e,a),rn()}(B(F(i)),{}),hn(e,t)};_n(i,(e=>{Xe(t)?e(o):e(a,!1)})),hn(e,l)},ft={target:document.body},function(e,{target:n,anchor:r,props:i={},events:a,context:u,intro:s=!0}){!function(){if(void 0===z){z=window;var e=Element.prototype,n=Node.prototype;j=o(n,"firstChild").get,C=o(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}();var f=new Set,c=e=>{for(var r=0;r<e.length;r++){var l=e[r];if(!f.has(l)){f.add(l);var i=t(l);n.addEventListener(l,dn,{passive:i});var o=yn.get(l);void 0===o?(document.addEventListener(l,dn,{passive:i}),yn.set(l,1)):yn.set(l,o+1)}}};c(l(un)),sn.add(c);var v=void 0,d=function(e){const n=Q(64,e,!0);return(e={})=>new Promise((t=>{e.outro?ae(n,(()=>{ie(n),t(void 0)})):(ie(n),t(void 0))}))}((()=>{var t=r??n.appendChild(L());return ne((()=>{u&&(tn({}),Ce.c=u),a&&(i.$$events=a),v=e(t,i)||{},u&&rn()})),()=>{for(var e of f){n.removeEventListener(e,dn);var l=yn.get(e);0==--l?(document.removeEventListener(e,dn),yn.delete(e)):yn.set(e,l)}sn.delete(c),t!==r&&t.parentNode?.removeChild(t)}}));return bn.set(v,d),v}(st,ft));return ct}();
//# sourceMappingURL=bundle.js.map
