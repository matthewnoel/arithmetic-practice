var app=function(){"use strict";"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5");const e=Symbol();var t=!1;function n(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}var r=Array.isArray,l=Array.prototype.indexOf,i=Array.from,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,s=Object.prototype,f=Array.prototype,c=Object.getPrototypeOf,v=Object.isExtensible;function d(e){for(var t=0;t<e.length;t++)e[t]()}const m=32,p=64,h=128,g=256,y=512,b=1024,w=2048,_=4096,x=8192,M=16384,$=65536,k=1<<20,T=1<<21,D=Symbol("$state"),S=Symbol("legacy props"),E=Symbol("");function N(t){if("object"!=typeof t||null===t||D in t)return t;const n=c(t);if(n!==s&&n!==f)return t;var l=new Map,i=r(t),a=rt(0),u=$e,v=e=>{var t=$e;Te(u);var n=e();return Te(t),n};return i&&l.set("length",rt(t.length)),new Proxy(t,{defineProperty(e,t,n){"value"in n&&!1!==n.configurable&&!1!==n.enumerable&&!1!==n.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var r=l.get(t);return void 0===r?(r=v((()=>rt(n.value))),l.set(t,r)):it(r,v((()=>N(n.value)))),!0},deleteProperty(t,n){var r=l.get(n);if(void 0===r)n in t&&l.set(n,v((()=>rt(e))));else{if(i&&"string"==typeof n){var o=l.get("length"),u=Number(n);Number.isInteger(u)&&u<o.v&&it(o,u)}it(r,e),O(a)}return!0},get(n,r,i){if(r===D)return t;var a=l.get(r),u=r in n;if(void 0!==a||u&&!o(n,r)?.writable||(a=v((()=>rt(N(u?n[r]:e)))),l.set(r,a)),void 0!==a){var s=Qe(a);return s===e?void 0:s}return Reflect.get(n,r,i)},getOwnPropertyDescriptor(t,n){var r=Reflect.getOwnPropertyDescriptor(t,n);if(r&&"value"in r){var i=l.get(n);i&&(r.value=Qe(i))}else if(void 0===r){var a=l.get(n),o=a?.v;if(void 0!==a&&o!==e)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(t,n){if(n===D)return!0;var r=l.get(n),i=void 0!==r&&r.v!==e||Reflect.has(t,n);if((void 0!==r||null!==De&&(!i||o(t,n)?.writable))&&(void 0===r&&(r=v((()=>rt(i?N(t[n]):e))),l.set(n,r)),Qe(r)===e))return!1;return i},set(t,n,r,u){var s=l.get(n),f=n in t;if(i&&"length"===n)for(var c=r;c<s.v;c+=1){var d=l.get(c+"");void 0!==d?it(d,e):c in t&&(d=v((()=>rt(e))),l.set(c+"",d))}void 0===s?f&&!o(t,n)?.writable||(it(s=v((()=>rt(void 0))),v((()=>N(r)))),l.set(n,s)):(f=s.v!==e,it(s,v((()=>N(r)))));var m=Reflect.getOwnPropertyDescriptor(t,n);if(m?.set&&m.set.call(u,r),!f){if(i&&"string"==typeof n){var p=l.get("length"),h=Number(n);Number.isInteger(h)&&h>=p.v&&it(p,h+1)}O(a)}return!0},ownKeys(t){Qe(a);var n=Reflect.ownKeys(t).filter((t=>{var n=l.get(t);return void 0===n||n.v!==e}));for(var[r,i]of l)i.v===e||r in t||n.push(r);return n},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function O(e,t=1){it(e,e.v+t)}function A(e){try{if(null!==e&&"object"==typeof e&&D in e)return e[D]}catch{}return e}var q,P,z,j;function C(e=""){return document.createTextNode(e)}function L(e){return z.call(e)}function I(e){return j.call(e)}function R(e,t){return L(e)}function F(e,t){var n=L(e);return n instanceof Comment&&""===n.data?I(n):n}function W(e,t=1,n=!1){let r=e;for(;t--;)r=I(r);return r}function B(e){return e===this.v}function V(e){return t=e,n=this.v,!(t!=t?n==n:t!==n||null!==t&&"object"==typeof t||"function"==typeof t);var t,n}function G(e){var t=2050,n=null!==$e&&2&$e.f?$e:null;null===De||null!==n&&n.f&g?t|=g:De.f|=k;return{ctx:ut,deps:null,effects:null,equals:B,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:n??De}}function K(e){const t=G(e);return Ne(t),t}function H(e){var t=e.effects;if(null!==t){e.effects=null;for(var n=0;n<t.length;n+=1)ae(t[n])}}function U(e){var t,n=De;Se(function(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return t;t=t.parent}return null}(e));try{H(e),t=Fe(e)}finally{Se(n)}return t}function Y(e){var t=U(e);et(e,(je||e.f&g)&&null!==e.deps?_:b),e.equals(t)||(e.v=t,e.wv=Ce())}function J(e){null===De&&null===$e&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==$e&&$e.f&g&&null===De&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),_e&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Q(e,t,n,r=!0){var l=De,i={ctx:ut,deps:null,nodes_start:null,nodes_end:null,f:e|w,first:null,fn:t,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(n)try{Ve(i),i.f|=32768}catch(e){throw ae(i),e}else null!==t&&Ue(i);if(!(n&&null===i.deps&&null===i.first&&null===i.nodes_start&&null===i.teardown&&!(1048704&i.f))&&r&&(null!==l&&function(e,t){var n=t.last;null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(i,l),null!==$e&&2&$e.f)){var a=$e;(a.effects??=[]).push(i)}return i}function X(e){const t=Q(8,null,!1);return et(t,b),t.teardown=e,t}function Z(e){return Q(4,e,!1)}function ee(e){return Q(8,e,!0)}function te(e,t=[],n=G){const r=t.map(n);return ne((()=>e(...r.map(Qe))))}function ne(e,t=0){return Q(24|t,e,!0)}function re(e,t=!0){return Q(40,e,!0,t)}function le(e){var t=e.teardown;if(null!==t){const e=_e,n=$e;xe(!0),Te(null);try{t.call(null)}finally{xe(e),Te(n)}}}function ie(e,t=!1){var n=e.first;for(e.first=e.last=null;null!==n;){var r=n.next;n.f&p?n.parent=null:ae(n,t),n=r}}function ae(e,t=!0){var n=!1;if((t||524288&e.f)&&null!==e.nodes_start){for(var r=e.nodes_start,l=e.nodes_end;null!==r;){var i=r===l?null:I(r);r.remove(),r=i}n=!0}ie(e,t&&!n),Be(e,0),et(e,M);var a=e.transitions;if(null!==a)for(const e of a)e.stop();le(e);var o=e.parent;null!==o&&null!==o.first&&oe(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function oe(e){var t=e.parent,n=e.prev,r=e.next;null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function ue(e,t){var n=[];fe(e,n,!0),se(n,(()=>{ae(e),t&&t()}))}function se(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var l of e)l.out(r)}else t()}function fe(e,t,n){if(!(e.f&x)){if(e.f^=x,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r);for(var r=e.first;null!==r;){var l=r.next;fe(r,t,!!(!!(r.f&$)||!!(r.f&m))&&n),r=l}}}function ce(e){ve(e,!0)}function ve(e,t){if(e.f&x){e.f^=x,e.f&b||(e.f^=b),Le(e)&&(et(e,w),Ue(e));for(var n=e.first;null!==n;){var r=n.next;ve(n,!!(!!(n.f&$)||!!(n.f&m))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let de=[],me=[];function pe(){var e=de;de=[],d(e)}function he(){var e;de.length>0&&pe(),me.length>0&&(e=me,me=[],d(e))}let ge=!1,ye=!1,be=null,we=!1,_e=!1;function xe(e){_e=e}let Me=[],$e=null,ke=!1;function Te(e){$e=e}let De=null;function Se(e){De=e}let Ee=null;function Ne(e){null!==$e&&$e.f&T&&(null===Ee?Ee=[e]:Ee.push(e))}let Oe=null,Ae=0,qe=null;let Pe=1,ze=0,je=!1;function Ce(){return++Pe}function Le(e){var t=e.f;if(t&w)return!0;if(t&_){var n=e.deps,r=!!(t&g);if(null!==n){var l,i,a=!!(t&y),o=r&&null!==De&&!je,u=n.length;if(a||o){var s=e,f=s.parent;for(l=0;l<u;l++)i=n[l],!a&&i?.reactions?.includes(s)||(i.reactions??=[]).push(s);a&&(s.f^=y),!o||null===f||f.f&g||(s.f^=g)}for(l=0;l<u;l++)if(Le(i=n[l])&&Y(i),i.wv>e.wv)return!0}r&&(null===De||je)||et(e,b)}return!1}function Ie(e,t,n,r){if(ge){if(null===n&&(ge=!1),function(e){return!(e.f&M||null!==e.parent&&e.parent.f&h)}(t))throw e}else null!==n&&(ge=!0),function(e,t){for(var n=t;null!==n;){if(n.f&h)try{return void n.fn(e)}catch{n.f^=h}n=n.parent}throw ge=!1,e}(e,t)}function Re(e,t,n=!0){var r=e.reactions;if(null!==r)for(var l=0;l<r.length;l++){var i=r[l];Ee?.includes(e)||(2&i.f?Re(i,t,!1):t===i&&(n?et(i,w):i.f&b&&et(i,_),Ue(i)))}}function Fe(e){var t=Oe,n=Ae,r=qe,l=$e,i=je,a=Ee,o=ut,u=ke,s=e.f;Oe=null,Ae=0,qe=null,je=!!(s&g)&&(ke||!we||null===$e),$e=96&s?null:e,Ee=null,st(e.ctx),ke=!1,ze++,e.f|=T;try{var f=(0,e.fn)(),c=e.deps;if(null!==Oe){var v;if(Be(e,Ae),null!==c&&Ae>0)for(c.length=Ae+Oe.length,v=0;v<Oe.length;v++)c[Ae+v]=Oe[v];else e.deps=c=Oe;if(!je)for(v=Ae;v<c.length;v++)(c[v].reactions??=[]).push(e)}else null!==c&&Ae<c.length&&(Be(e,Ae),c.length=Ae);if(!(null===qe||ke||null===c||6146&e.f))for(v=0;v<qe.length;v++)Re(qe[v],e);return l!==e&&(ze++,null!==qe&&(null===r?r=qe:r.push(...qe))),f}finally{Oe=t,Ae=n,qe=r,$e=l,je=i,Ee=a,st(o),ke=u,e.f^=T}}function We(e,t){let n=t.reactions;if(null!==n){var r=l.call(n,e);if(-1!==r){var i=n.length-1;0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null===n&&2&t.f&&(null===Oe||!Oe.includes(t))&&(et(t,_),768&t.f||(t.f^=y),H(t),Be(t,0))}function Be(e,t){var n=e.deps;if(null!==n)for(var r=t;r<n.length;r++)We(e,n[r])}function Ve(e){var n=e.f;if(!(n&M)){et(e,b);var r=De,l=ut,i=we;De=e,we=!0;try{16&n?function(e){for(var t=e.first;null!==t;){var n=t.next;t.f&m||ae(t),t=n}}(e):ie(e),le(e);var a=Fe(e);e.teardown="function"==typeof a?a:null,e.wv=Pe;e.deps;t}catch(t){Ie(t,e,r,l||e.ctx)}finally{we=i,De=r}}}function Ge(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){if(null===be)throw e;Ie(e,be,null)}}function Ke(){var e=we;try{var t=0;for(we=!0;Me.length>0;){t++>1e3&&Ge();var n=Me,r=n.length;Me=[];for(var l=0;l<r;l++){He(Ye(n[l]))}tt.clear()}}finally{ye=!1,we=e,be=null}}function He(e){var t=e.length;if(0!==t)for(var n=0;n<t;n++){var r=e[n];if(!(24576&r.f))try{Le(r)&&(Ve(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?oe(r):r.fn=null))}catch(e){Ie(e,r,null,r.ctx)}}}function Ue(e){ye||(ye=!0,queueMicrotask(Ke));for(var t=be=e;null!==t.parent;){var n=(t=t.parent).f;if(96&n){if(!(n&b))return;t.f^=b}}Me.push(t)}function Ye(e){for(var t=[],n=e;null!==n;){var r=n.f,l=!!(96&r);if(!(l&&!!(r&b)||r&x)){if(4&r)t.push(n);else if(l)n.f^=b;else{var i=$e;try{$e=n,Le(n)&&Ve(n)}catch(e){Ie(e,n,null,n.ctx)}finally{$e=i}}var a=n.first;if(null!==a){n=a;continue}}var o=n.parent;for(n=n.next;null===n&&null!==o;)n=o.next,o=o.parent}return t}async function Je(){await Promise.resolve(),function(){for(he();Me.length>0;)ye=!0,Ke(),he()}()}function Qe(e){var t=!!(2&e.f);if(null===$e||ke){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent;null===r||r.f&g||(n.f^=g)}}else if(!Ee?.includes(e)){var l=$e.deps;e.rv<ze&&(e.rv=ze,null===Oe&&null!==l&&l[Ae]===e?Ae++:null===Oe?Oe=[e]:je&&Oe.includes(e)||Oe.push(e))}return t&&Le(n=e)&&Y(n),_e&&tt.has(e)?tt.get(e):e.v}function Xe(e){var t=ke;try{return ke=!0,e()}finally{ke=t}}const Ze=-7169;function et(e,t){e.f=e.f&Ze|t}const tt=new Map;function nt(e,t){return{f:0,v:e,reactions:null,equals:B,rv:0,wv:0}}function rt(e,t){const n=nt(e);return Ne(n),n}function lt(e,t=!1){const n=nt(e);return t||(n.equals=V),n}function it(e,t,n=!1){return null!==$e&&!ke&&18&$e.f&&!Ee?.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),at(e,n?N(t):t)}function at(e,t){if(!e.equals(t)){var n=e.v;_e?tt.set(e,t):tt.set(e,n),e.v=t,2&e.f&&(e.f&w&&U(e),et(e,e.f&g?_:b)),e.wv=Ce(),ot(e,w),null!==De&&De.f&b&&!(96&De.f)&&(null===qe?function(e){qe=e}([e]):qe.push(e))}return t}function ot(e,t){var n=e.reactions;if(null!==n)for(var r=n.length,l=0;l<r;l++){var i=n[l],a=i.f;a&w||(et(i,t),1280&a&&(2&a?ot(i,_):Ue(i)))}}let ut=null;function st(e){ut=e}function ft(e,t=!1,n){var r=ut={p:ut,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};X((()=>{r.d=!0}))}function ct(e){const t=ut;if(null!==t){const e=t.e;if(null!==e){var n=De,r=$e;t.e=null;try{for(var l=0;l<e.length;l++){var i=e[l];Se(i.effect),Te(i.reaction),Z(i.fn)}}finally{Se(n),Te(r)}}ut=t.p,t.m=!0}return{}}const vt=["touchstart","touchmove"];function dt(e){return vt.includes(e)}let mt=!1;function pt(e){var t=$e,n=De;Te(null),Se(null);try{return e()}finally{Te(t),Se(n)}}function ht(e,t,n,r=n){e.addEventListener(t,(()=>pt(n)));const l=e.__on_r;e.__on_r=l?()=>{l(),r(!0)}:()=>r(!0),mt||(mt=!0,document.addEventListener("reset",(e=>{Promise.resolve().then((()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()}))}),{capture:!0}))}const gt=new Set,yt=new Set;function bt(e,t,n,r={}){function l(e){if(r.capture||xt.call(t,e),!e.cancelBubble)return pt((()=>n?.call(this,e)))}var i;return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?(i=()=>{t.addEventListener(e,l,r)},0===de.length&&queueMicrotask(pe),de.push(i)):t.addEventListener(e,l,r),l}function wt(e,t,n,r,l){var i={capture:r,passive:l},a=bt(e,t,n,i);t!==document.body&&t!==window&&t!==document||X((()=>{t.removeEventListener(e,a,i)}))}function _t(e){for(var t=0;t<e.length;t++)gt.add(e[t]);for(var n of yt)n(e)}function xt(e){var t=this,n=t.ownerDocument,l=e.type,i=e.composedPath?.()||[],o=i[0]||e.target,u=0,s=e.__root;if(s){var f=i.indexOf(s);if(-1!==f&&(t===document||t===window))return void(e.__root=t);var c=i.indexOf(t);if(-1===c)return;f<=c&&(u=f)}if((o=i[u]||e.target)!==t){a(e,"currentTarget",{configurable:!0,get:()=>o||n});var v=$e,d=De;Te(null),Se(null);try{for(var m,p=[];null!==o;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var g=o["__"+l];if(null!=g&&(!o.disabled||e.target===o))if(r(g)){var[y,...b]=g;y.apply(o,[e,...b])}else g.call(o,e)}catch(e){m?p.push(e):m=e}if(e.cancelBubble||h===t||null===h)break;o=h}if(m){for(let e of p)queueMicrotask((()=>{throw e}));throw m}}finally{e.__root=t,delete e.currentTarget,Te(v),Se(d)}}}function Mt(e,t){var n=De;null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function $t(e,t){var n,r=!!(1&t),l=!!(2&t),i=!e.startsWith("<!>");return()=>{var t,a;void 0===n&&(t=i?e:"<!>"+e,(a=document.createElement("template")).innerHTML=t,n=a.content,r||(n=L(n)));var o=l||P?document.importNode(n,!0):n.cloneNode(!0);r?Mt(L(o),o.lastChild):Mt(o,o);return o}}function kt(e,t){null!==e&&e.before(t)}function Tt(e,t){var n=null==t?"":"object"==typeof t?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}const Dt=new Map;let St=new WeakMap;function Et(t,n,[r,l]=[0,0]){var i=t,a=null,o=null,u=e,s=!1;const f=(e,t=!0)=>{s=!0,c(t,e)},c=(e,t)=>{u!==(u=e)&&(u?(a?ce(a):t&&(a=re((()=>t(i)))),o&&ue(o,(()=>{o=null}))):(o?ce(o):t&&(o=re((()=>t(i,[r+1,l])))),a&&ue(a,(()=>{a=null}))))};ne((()=>{s=!1,n(f),s||c(null,null)}),r>0?$:0)}function Nt(e,t){return t}function Ot(e,t,n,l,a,o=null){var u,s={flags:t,items:new Map,first:null};u=e.appendChild(C());var f=null,c=!1,v=function(e){const t=G(e);return t.equals=V,t}((()=>{var e=n();return r(e)?e:null==e?[]:i(e)}));ne((()=>{var e=Qe(v),r=e.length;c&&0===r||(c=0===r,function(e,t,n,r,l,a,o){var u,s,f,c,v,d=e.length,m=t.items,p=t.first,h=p,g=null,y=[],b=[];for(v=0;v<d;v+=1)if(f=a(s=e[v],v),void 0!==(c=m.get(f))){if(At(c,s,v),c.e.f&x&&ce(c.e),c!==h){if(void 0!==u&&u.has(c)){if(y.length<b.length){var w,_=b[0];g=_.prev;var M=y[0],$=y[y.length-1];for(w=0;w<y.length;w+=1)Pt(y[w],_,n);for(w=0;w<b.length;w+=1)u.delete(b[w]);zt(t,M.prev,$.next),zt(t,g,M),zt(t,$,_),h=_,g=$,v-=1,y=[],b=[]}else u.delete(c),Pt(c,h,n),zt(t,c.prev,c.next),zt(t,c,null===g?t.first:g.next),zt(t,g,c),g=c;continue}for(y=[],b=[];null!==h&&h.k!==f;)h.e.f&x||(u??=new Set).add(h),b.push(h),h=h.next;if(null===h)continue;c=h}y.push(c),g=c,h=c.next}else{g=qt(h?h.e.nodes_start:n,t,g,null===g?t.first:g.next,s,f,v,r,l,o),m.set(f,g),y=[],b=[],h=g.next}if(null!==h||void 0!==u){for(var k=void 0===u?[]:i(u);null!==h;)h.e.f&x||k.push(h),h=h.next;if(k.length>0)!function(e,t,n,r){for(var l=[],i=t.length,a=0;a<i;a++)fe(t[a].e,l,!0);var o=i>0&&0===l.length&&null!==n;if(o){var u=n.parentNode;u.textContent="",u.append(n),r.clear(),zt(e,t[0].prev,t[i-1].next)}se(l,(()=>{for(var n=0;n<i;n++){var l=t[n];o||(r.delete(l.k),zt(e,l.prev,l.next)),ae(l.e,!o)}}))}(t,k,0===d?n:null,m)}De.first=t.first&&t.first.e,De.last=g&&g.e}(e,s,u,a,t,l,n),null!==o&&(0===r?f?ce(f):f=re((()=>o(u))):null!==f&&ue(f,(()=>{f=null}))),Qe(v))}))}function At(e,t,n,r){at(e.v,t),e.i=n}function qt(e,t,n,r,l,i,a,o,u,s){var f=!!(1&u)?!(16&u)?lt(l):nt(l):l,c=2&u?nt(a):a,v={i:c,v:f,k:i,a:null,e:null,prev:n,next:r};try{return v.e=re((()=>o(e,f,c,s)),false),v.e.prev=n&&n.e,v.e.next=r&&r.e,null===n?t.first=v:(n.next=v,n.e.next=v.e),null!==r&&(r.prev=v,r.e.prev=v.e),v}finally{}}function Pt(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,l=t?t.e.nodes_start:n,i=e.e.nodes_start;i!==r;){var a=I(i);l.before(i),i=a}}function zt(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}const jt=[..." \t\n\r\f \v\ufeff"];function Ct(e,t,n,r,l,i){var a=e.__className;if(a!==n||void 0===a){var o=function(e,t,n){var r=""+e;if(n)for(var l in n)if(n[l])r=r?r+" "+l:l;else if(r.length)for(var i=l.length,a=0;(a=r.indexOf(l,a))>=0;){var o=a+i;0!==a&&!jt.includes(r[a-1])||o!==r.length&&!jt.includes(r[o])?a=o:r=(0===a?"":r.substring(0,a))+r.substring(o+1)}return""===r?null:r}(n,0,i);null==o?e.removeAttribute("class"):e.className=o,e.__className=n}else if(i&&l!==i)for(var u in i){var s=!!i[u];null!=l&&s===!!l[u]||e.classList.toggle(u,s)}return i}function Lt(e,t,n,r){if(e.__style!==t){var l=function(e){return null==e?null:String(e)}(t);null==l?e.removeAttribute("style"):e.style.cssText=l,e.__style=t}return r}const It=Symbol("is custom element"),Rt=Symbol("is html");function Ft(e,t,n,r){var l=Wt(e);l[t]!==(l[t]=n)&&("loading"===t&&(e[E]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=Bt.get(e.nodeName);if(n)return n;Bt.set(e.nodeName,n=[]);var r=e,l=Element.prototype;for(;l!==r;){for(var i in t=u(r))t[i].set&&n.push(i);r=c(r)}return n}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Wt(e){return e.__attributes??={[It]:e.nodeName.includes("-"),[Rt]:"http://www.w3.org/1999/xhtml"===e.namespaceURI}}var Bt=new Map;function Vt(e,t,n=t){ht(e,"input",(r=>{var l=r?e.defaultValue:e.value;if(l=Gt(e)?Kt(l):l,n(l),l!==(l=t())){var i=e.selectionStart,a=e.selectionEnd;e.value=l??"",null!==a&&(e.selectionStart=i,e.selectionEnd=Math.min(a,e.value.length))}})),null==Xe(t)&&e.value&&n(Gt(e)?Kt(e.value):e.value),ee((()=>{var n=t();Gt(e)&&n===Kt(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")}))}function Gt(e){var t=e.type;return"number"===t||"range"===t}function Kt(e){return""===e?null:+e}function Ht(e,t,n){if(e.multiple)return function(e,t){for(var n of e.options)n.selected=~t.indexOf(Yt(n))}(e,t);for(var r of e.options){var l=Yt(r);if(i=l,a=t,Object.is(A(i),A(a)))return void(r.selected=!0)}var i,a;n&&void 0===t||(e.selectedIndex=-1)}function Ut(e,t,n=t){var r=!0;ht(e,"change",(t=>{var r,l=t?"[selected]":":checked";if(e.multiple)r=[].map.call(e.querySelectorAll(l),Yt);else{var i=e.querySelector(l)??e.querySelector("option:not([disabled])");r=i&&Yt(i)}n(r)})),Z((()=>{var l=t();if(Ht(e,l,r),r&&void 0===l){var i=e.querySelector(":checked");null!==i&&(l=Yt(i),n(l))}e.__value=l,r=!1})),function(e){Z((()=>{var t=new MutationObserver((()=>{var t=e.__value;Ht(e,t)}));return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}}))}(e)}function Yt(e){return"__value"in e?e.__value:e.value}function Jt(e){return function(...t){return t[0].preventDefault(),e?.apply(this,t)}}function Qt(e){null===ut&&n(),function(e){if(J(),!(null!==De&&De.f&m&&null!==ut)||ut.m)return Z(e);var t=ut;(t.e??=[]).push({fn:e,effect:De,reaction:$e})}((()=>{const t=Xe(e);if("function"==typeof t)return t}))}function Xt(){const e=ut;return null===e&&n(),(t,n,l)=>{const i=e.s.$$events?.[t];if(i){const a=r(i)?i.slice():[i],o=function(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}(t,n,l);for(const t of a)t.call(e.x,o);return!o.defaultPrevented}return!0}}let Zt=!1;function en(e){return e.ctx?.d??!1}function tn(e,t,n,r){var l,i=!!(1&n),a=!!(8&n),u=!!(16&n),s=!1;a?[l,s]=function(e){var t=Zt;try{return Zt=!1,[e(),Zt]}finally{Zt=t}}((()=>e[t])):l=e[t];var f,c=D in e||S in e,v=a&&(o(e,t)?.set??(c&&t in e&&(n=>e[t]=n)))||void 0,d=r,m=!0,p=!1,h=()=>(p=!0,m&&(m=!1,d=u?Xe(r):r),d);if(void 0===l&&void 0!==r&&(v&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),l=h(),v&&v(l)),f=()=>{var n=e[t];return void 0===n?h():(m=!0,p=!1,n)},!(4&n))return f;if(v){var g=e.$$legacy;return function(e,t){return arguments.length>0?((!t||g||s)&&v(t?f():e),e):f()}}var y=!1,b=lt(l),w=G((()=>{var e=f(),t=Qe(b);return y?(y=!1,t):b.v=e}));return a&&Qe(w),i||(w.equals=V),function(e,t){if(arguments.length>0){const n=t?Qe(w):a?N(e):e;if(!w.equals(n)){if(y=!0,it(b,n),p&&void 0!==d&&(d=n),en(w))return e;Xe((()=>Qe(w)))}return e}return en(w)?w.v:Qe(w)}}function nn(e){!function(e){J(),ee(e)}((()=>{e();var t=De;t.f&w&&(console.warn("https://svelte.dev/e/legacy_recursive_reactive_block"),et(t,_))}))}const rn=(e,t,n)=>{const r=e.target.valueAsNumber;r>Qe(t)&&r>Qe(n)&&it(n,r,!0),it(t,r,!0)},ln=(e,t,n)=>{const r=e.target.valueAsNumber;r<Qe(t)&&r<Qe(n)&&it(n,r,!0),it(t,r,!0)},an=(e,t,n)=>{const r=e.target.valueAsNumber;r>Qe(t)&&r>Qe(n)&&it(n,r,!0),it(t,r,!0)},on=(e,t,n)=>{const r=e.target.valueAsNumber;r<Qe(t)&&r<Qe(n)&&it(n,r,!0),it(t,r,!0)};var un=$t("<option> </option>"),sn=$t('<label for="first-min"> </label> <input type="range" name="first-min" id="first-min" step="1" class="svelte-mziz9r"> <label for="first-max"> </label> <input type="range" name="first-max" id="first-max" step="1" class="svelte-mziz9r"> <label for="second-min"> </label> <input type="range" name="second-min" id="second-min" step="1" class="svelte-mziz9r"> <label for="second-max"> </label> <input type="range" name="second-max" id="second-max" step="1" class="svelte-mziz9r">',1),fn=$t('<label for="allow-negative-answers">Allow Negative Answers</label> <input type="checkbox" name="allow-negative-answers" id="allow-negative-answers" class="svelte-mziz9r">',1),cn=$t('<form class="svelte-mziz9r"><label for="type">Problem Type</label> <select name="type" id="type" class="svelte-mziz9r"></select> <!> <!> <button type="submit">Practice</button></form>');function vn(e,t){ft(t,!0);const n=Xt(),r=()=>{const e=Qe(i).id,t={firstTermMinimumDigits:Qe(a),firstTermMaximumDigits:Qe(u),secondTermMinimumDigits:Qe(f),secondTermMaximumDigits:Qe(v),allowNegativeAnswers:Qe(m)};n("message",{id:e,config:t})};let l=[{id:1,text:"Addition"},{id:2,text:"Subtraction"},{id:3,text:"Multiplication"},{id:4,text:"Division"}],i=rt(void 0),a=rt(1),o=rt(6),u=rt(1),s=rt(1),f=rt(1),c=rt(6),v=rt(1),d=rt(1),m=rt(!1);var p=cn(),h=K((()=>Jt(r))),g=W(R(p),2);Ot(g,21,(()=>l),Nt,((e,t)=>{var n=un(),r={},l=R(n);te((()=>{r!==(r=Qe(t))&&(n.value=(n.__value=Qe(t))??""),Tt(l,Qe(t).text)})),kt(e,n)}));var y=W(g,2),b=e=>{var t=sn(),n=F(t),r=R(n),l=W(n,2);Ft(l,"min",1),l.__change=[rn,s,u];var i=W(l,2),m=R(i),p=W(i,2);Ft(p,"max",6),p.__change=[ln,o,a];var h=W(p,2),g=R(h),y=W(h,2);Ft(y,"min",1),y.__change=[an,d,v];var b=W(y,2),w=R(b),_=W(b,2);Ft(_,"max",6),_.__change=[on,c,f],te((()=>{Tt(r,`Minimum Digits In First Term (${Qe(a)??""})`),Ft(l,"max",Qe(o)),l.disabled=1===Qe(o),Tt(m,`Maximum Digits In First Term (${Qe(u)??""})`),Ft(p,"min",Qe(s)),p.disabled=6===Qe(s),Tt(g,`Minimum Digits In Second Term (${Qe(f)??""})`),Ft(y,"max",Qe(c)),y.disabled=1===Qe(c),Tt(w,`Maximum Digits In Second Term (${Qe(v)??""})`),Ft(_,"min",Qe(d)),_.disabled=6===Qe(d)})),Vt(l,(()=>Qe(a)),(e=>it(a,e))),Vt(p,(()=>Qe(u)),(e=>it(u,e))),Vt(y,(()=>Qe(f)),(e=>it(f,e))),Vt(_,(()=>Qe(v)),(e=>it(v,e))),kt(e,t)};Et(y,(e=>{[1,2,3,4].includes(Qe(i)?.id)&&e(b)}));var w=W(y,2),_=e=>{var t=fn();!function(e,t,n=t){ht(e,"change",(t=>{var r=t?e.defaultChecked:e.checked;n(r)})),null==Xe(t)&&n(e.checked),ee((()=>{var n=t();e.checked=Boolean(n)}))}(W(F(t),2),(()=>Qe(m)),(e=>it(m,e))),kt(e,t)};Et(w,(e=>{2===Qe(i)?.id&&e(_)}));var x=W(w,2);te((()=>x.disabled=!Qe(i))),wt("submit",p,(function(...e){Qe(h)?.apply(this,e)})),Ut(g,(()=>Qe(i)),(e=>it(i,e))),kt(e,p),ct()}_t(["change"]);var dn=$t('<div class="confetti svelte-15ksp55"></div>'),mn=$t("<div></div>");function pn(e,t){ft(t,!0);const n=tn(t,"size",3,10),r=tn(t,"x",19,(()=>[-.5,.5])),l=tn(t,"y",19,(()=>[.25,1])),i=tn(t,"duration",3,2e3),a=tn(t,"infinite",3,!1),o=tn(t,"delay",19,(()=>[0,50])),u=tn(t,"colorRange",19,(()=>[0,360])),s=tn(t,"colorArray",19,(()=>[])),f=tn(t,"amount",3,50),c=tn(t,"iterationCount",3,1),v=tn(t,"fallDistance",3,"100px"),d=tn(t,"rounded",3,!1),m=tn(t,"cone",3,!1),p=tn(t,"noGravity",3,!1),h=tn(t,"xSpread",3,.15),g=tn(t,"destroyOnComplete",3,!0),y=tn(t,"disableForReducedMotion",3,!1);let b=rt(!1);function w(e,t){return Math.random()*(t-e)+e}function _(){return s().length?s()[Math.round(Math.random()*(s().length-1))]:`hsl(${Math.round(w(u()[0],u()[1]))}, 75%, 50%)`}Qt((()=>{g()&&!a()&&"string"!=typeof c()&&setTimeout((()=>it(b,!0)),(i()+o()[1])*c())}));var x,M,$,k=(x=document.createDocumentFragment(),M=document.createComment(""),$=C(),x.append(M,$),Mt(M,$),x),T=F(k),D=e=>{var t=mn();let u;Ot(t,21,(()=>({length:f()})),Nt,((e,t)=>{var n=dn();te(((e,t,r,l,o,u,s,f,c,v,d)=>Lt(n,`\n        --color: ${e??""};\n        --skew: ${t??""}deg,${r??""}deg;\n        --rotation-xyz: ${l??""}, ${o??""}, ${u??""};\n        --rotation-deg: ${s??""}deg;\n        --translate-y-multiplier: ${f??""};\n        --translate-x-multiplier: ${c??""};\n        --scale: ${v??""};\n        --transition-delay: ${d??""}ms;\n        --transition-duration: ${(a()?`calc(${i()}ms * var(--scale))`:`${i()}ms`)??""};`)),[_,()=>w(-45,45),()=>w(-45,45),()=>w(-10,10),()=>w(-10,10),()=>w(-10,10),()=>w(0,360),()=>w(l()[0],l()[1]),()=>w(r()[0],r()[1]),()=>.1*w(2,10),()=>w(o()[0],o()[1])]),kt(e,n)})),te((e=>{u=Ct(t,0,"confetti-holder svelte-15ksp55",0,u,e),Lt(t,`\n    --fall-distance: ${v()??""};\n    --size: ${n()??""}px;\n    --x-spread: ${1-h()};\n    --transition-iteration-count: ${(a()?"infinite":c())??""};`)}),[()=>({rounded:d(),cone:m(),"no-gravity":p(),"reduced-motion":y()})]),kt(e,t)};Et(T,(e=>{Qe(b)||e(D)})),kt(e,k),ct()}var hn=$t('<div class="confetti svelte-1qjohkm"><!></div>'),gn=$t("<p> </p>"),yn=$t('<div id="streak" class="svelte-1qjohkm"><span> </span></div>'),bn=$t('<form class="svelte-1qjohkm"><label for="answer"> </label> <input type="number" name="answer" id="answer" class="svelte-1qjohkm"> <br> <input type="submit" value="Submit"> <!> <!> <!></form>');function wn(e,t){ft(t,!0);const n=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),r=()=>{let e=d,n=Qe(v),r=0;for(;Qe(v)===n&&r<10;)switch(r++,t.selection){case 1:[e,n]=i(t.config.firstTermMinimumDigits,t.config.firstTermMaximumDigits,t.config.secondTermMinimumDigits,t.config.secondTermMaximumDigits);break;case 2:[e,n]=a(t.config.firstTermMinimumDigits,t.config.firstTermMaximumDigits,t.config.secondTermMinimumDigits,t.config.secondTermMaximumDigits,t.config.allowNegativeAnswers);break;case 3:[e,n]=o(t.config.firstTermMinimumDigits,t.config.firstTermMaximumDigits,t.config.secondTermMinimumDigits,t.config.secondTermMaximumDigits);break;case 4:[e,n]=u(t.config.firstTermMinimumDigits,t.config.firstTermMaximumDigits,t.config.secondTermMinimumDigits,t.config.secondTermMaximumDigits);break;default:console.log("unknown selection")}d=e,it(v,n,!0)},l=(e,t)=>{const r=n(e,t);return n(Math.pow(10,r-1),Math.pow(10,r)-1)},i=(e,t,n,r)=>{const i=l(e,t),a=l(n,r);return[e=>e===i+a,`${i} + ${a} =`]},a=(e,t,n,r,i)=>{let a=l(e,t),o=l(n,r);return i||([a,o]=[Math.max(a,o),Math.min(a,o)]),[e=>e===a-o,`${a} - ${o} =`]},o=(e,t,n,r)=>{const i=l(e,t),a=l(n,r);return[e=>e===i*a,`${i} × ${a} =`]},u=(e,t,n,r)=>{let i=l(e,t);const a=[];for(let e=Math.pow(10,n-1);e<Math.pow(10,r)-1;e++)i%e==0&&a.push(e);let o;return a.length>0?o=a[Math.floor(Math.random()*a.length)]:(o=l(n,r),i=o*l(e,t)),[e=>e===i/o,`${i} ÷ ${o} =`]},s=()=>{r(),it(m,null),it(p,null),function(e,t=1){var n=Qe(e),r=1===t?n++:n--;it(e,n)}(g),c()},f=()=>d(Qe(p))?s():(it(m,`${Qe(p)} isn't correct. Try again 😊`),it(p,null),void it(g,0)),c=async()=>{it(h,!1),await Je(),it(h,!0)};let v=rt(void 0),d=()=>!1,m=rt(void 0),p=rt(void 0),h=rt(!1),g=rt(0);nn((()=>{Qe(v)||r()}));var y=bn(),b=K((()=>Jt(f))),w=R(y),_=R(w),x=W(w,2),M=W(x,4),$=W(M,2),k=e=>{var t=hn();pn(R(t),{}),kt(e,t)};Et($,(e=>{Qe(h)&&e(k)}));var T=W($,2),D=e=>{var t=gn(),n=R(t);te((()=>Tt(n,Qe(m)))),kt(e,t)};Et(T,(e=>{Qe(m)&&e(D)}));var S=W(T,2),E=e=>{var t=yn(),n=R(t),r=R(n);te((()=>Tt(r,`🔥${Qe(g)??""}`))),kt(e,t)};Et(S,(e=>{Qe(g)&&e(E)})),te((()=>{Tt(_,Qe(v)),M.disabled=null==Qe(p)})),wt("submit",y,(function(...e){Qe(b)?.apply(this,e)})),Vt(x,(()=>Qe(p)),(e=>it(p,e))),kt(e,y),ct()}var _n=$t('<input type="button" data-theme-toggle="">');function xn(e,t){ft(t,!0);const n=e=>{it(a,e===l?"🌞":"🌚",!0),document.querySelector("html").setAttribute("data-theme",e)},r="light",l="dark";let i=(({localStorageTheme:e,systemSettingDark:t})=>null!==e?e:t.matches?l:r)({localStorageTheme:localStorage.getItem("theme"),systemSettingDark:window.matchMedia("(prefers-color-scheme: dark)")}),a=rt("🌞");n(i);var o=_n();o.__click=()=>{const e=i===l?r:l;localStorage.setItem("theme",e),n(e),i=e},te((()=>{Ft(o,"aria-label","🌚"===Qe(a)?"Change to dark theme.":"Change to light theme."),function(e,t){var n=Wt(e);n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}(o,Qe(a))})),kt(e,o),ct()}_t(["click"]);var Mn=$t("<!> <div></div>",1),$n=$t('<!> <footer><span>This website is open source. The source code is <a href="https://github.com/matthewnoel/arithmetic-practice" target="_blank">available here</a>. The list of third pary licenses is <a href="https://raw.githubusercontent.com/matthewnoel/arithmetic-practice/main/third-party-licenses.txt" target="_blank">available here</a>. You can file an <a href="https://github.com/matthewnoel/arithmetic-practice/issues/new" target="_blank">issue here</a>.</span> <span>Change Theme: <!></span></footer>',1),kn=$t("<div></div> <!>",1);var Tn,Dn,Sn=(Tn=function(e){const t=e=>{it(n,e.detail.id,!0),it(r,Object.assign({},e.detail.config),!0)};let n=rt(void 0),r=rt(N({}));var l=kn(),i=W(F(l),2),a=e=>{var t=Mn();wn(F(t),{get selection(){return Qe(n)},get config(){return Qe(r)}}),kt(e,t)},o=e=>{var n=$n(),r=F(n);vn(r,{$$events:{message:t}});var l=W(r,2),i=W(R(l),2);xn(W(R(i)),{}),kt(e,n)};Et(i,(e=>{Qe(n)?e(a):e(o,!1)})),kt(e,l)},Dn={target:document.body},function(e,{target:t,anchor:n,props:r={},events:l,context:a,intro:u=!0}){!function(){if(void 0===q){q=window,P=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;z=o(t,"firstChild").get,j=o(t,"nextSibling").get,v(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),v(n)&&(n.__t=void 0)}}();var s=new Set,f=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!s.has(r)){s.add(r);var l=dt(r);t.addEventListener(r,xt,{passive:l});var i=Dt.get(r);void 0===i?(document.addEventListener(r,xt,{passive:l}),Dt.set(r,1)):Dt.set(r,i+1)}}};f(i(gt)),yt.add(f);var c=void 0,d=function(e){const t=Q(p,e,!0);return(e={})=>new Promise((n=>{e.outro?ue(t,(()=>{ae(t),n(void 0)})):(ae(t),n(void 0))}))}((()=>{var i=n??t.appendChild(C());return re((()=>{a&&(ft({}),ut.c=a),l&&(r.$$events=l),c=e(i,r)||{},a&&ct()})),()=>{for(var e of s){t.removeEventListener(e,xt);var r=Dt.get(e);0==--r?(document.removeEventListener(e,xt),Dt.delete(e)):Dt.set(e,r)}yt.delete(f),i!==n&&i.parentNode?.removeChild(i)}}));return St.set(c,d),c}(Tn,Dn));return Sn}();
//# sourceMappingURL=bundle.js.map
