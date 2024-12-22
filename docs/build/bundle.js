var app=function(){"use strict";"undefined"!=typeof window&&(window.__svelte||={v:new Set}).v.add("5");const e=Symbol(),n=Symbol("filename"),t=globalThis.process?.env?.NODE_ENV;t||console.warn("If bundling, conditions should include development or production. If not bundling, conditions or NODE_ENV should include development or production. See https://www.npmjs.com/package/esm-env for tips on setting conditions in popular bundlers and runtimes.");var r=t&&!t.toLowerCase().includes("prod"),l=Array.isArray,i=Array.from,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,u=Object.prototype,c=Array.prototype,f=Object.getPrototypeOf;const v=32,d=256,p=512,h=1024,m=2048,g=4096,_=8192,w=16384,b=65536,y=1<<18,x=1<<20,$=Symbol("$state"),k=Symbol("$state metadata"),M=Symbol("legacy props"),S=Symbol("");function E(e){return e===this.v}function T(e){return n=e,t=this.v,!(n!=n?t==t:n!==t||null!==n&&"object"==typeof n||"function"==typeof n);var n,t}function D(){if(r){const e=new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value")}let O=new Set;function N(e){O=e}function A(e){return{f:0,v:e,reactions:null,equals:E,version:0}}function j(e){return function(e){null!==Ye&&2&Ye.f&&(null===Ze?Ze=[e]:Ze.push(e));return e}(A(e))}function q(e,n=!1){const t=A(e);return n||(t.equals=T),t}function C(e,n){return null!==Ye&&18&Ye.f&&(null===Ze||!Ze.includes(e))&&function(){if(r){const e=new Error("state_unsafe_mutation\nUpdating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),P(e,n)}function P(e,n){if(!e.equals(n)&&(e.v=n,e.version=sn(),z(e,m),null!==Qe&&Qe.f&h&&!(Qe.f&v)&&(null!==en&&en.includes(e)?(Tn(Qe,m),xn(Qe)):null===tn?function(e){tn=e}([e]):tn.push(e)),r&&O.size>0)){const e=Array.from(O);var t=Ve;Be(!0);try{for(const n of e)n.f&h&&Tn(n,g),un(n)&&mn(n)}finally{Be(t)}O.clear()}return n}function z(e,n){var t=e.reactions;if(null!==t)for(var l=t.length,i=0;i<l;i++){var o=t[i],a=o.f;a&m||(r&&a&y?O.add(o):(Tn(o,n),1280&a&&(2&a?z(o,g):xn(o))))}}var L="font-weight: bold",I="font-weight: normal";function R(e,n){r?console.warn(`%c[svelte] ownership_invalid_mutation\n%c${e?`${e} mutated a value owned by ${n}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead`:"Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}\nhttps://svelte.dev/e/ownership_invalid_mutation`,L,I):console.warn("https://svelte.dev/e/ownership_invalid_mutation")}function F(e){r?console.warn(`%c[svelte] state_proxy_equality_mismatch\n%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results\nhttps://svelte.dev/e/state_proxy_equality_mismatch`,L,I):console.warn("https://svelte.dev/e/state_proxy_equality_mismatch")}const V={},W=/at (?:.+ \()?(.+):(\d+):(\d+)\)?$/,B=/@(.+):(\d+):(\d+)$/;function U(){const e=function(){const e=(new Error).stack;if(!e)return null;const n=[];for(const t of e.split("\n")){let e=W.exec(t)??B.exec(t);e&&n.push({file:e[1],line:+e[2],column:+e[3]})}return n}()?.slice(4);if(!e)return null;for(let n=0;n<e.length;n++){const t=e[n],r=V[t.file];if(r)for(const e of r){if(null==e.end)return null;if(e.start.line<t.line&&e.end.line>t.line)return e.component}else if(0===n)return null}return null}function G(e,n){if(null!==n.owners)for(;e;){if(null===e.owners){n.owners=null;break}for(const t of e.owners)n.owners.add(t);e=e.parent}}function K(e,n){return null===e.owners||(e.owners.has(n)||null!==e.parent&&K(e.parent,n))}function H(e){return e?.owners?.values().next().value??H(e.parent)}function Y(e){const t=U();if(t&&!K(e,t)){let r=H(e);r[n]!==t[n]?R(t[n],r[n]):R()}}function J(n,t=null,i){if("object"!=typeof n||null===n||$ in n)return n;const o=f(n);if(o!==u&&o!==c)return n;var s,v=new Map,d=l(n),p=A(0);return d&&v.set("length",A(n.length)),r&&((s={parent:t,owners:null}).owners=null===t?null!==on?new Set([on.function]):null:new Set),new Proxy(n,{defineProperty(e,n,t){"value"in t&&!1!==t.configurable&&!1!==t.enumerable&&!1!==t.writable||function(){if(r){const e=new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var l=v.get(n);return void 0===l?(l=A(t.value),v.set(n,l)):C(l,J(t.value,s)),!0},deleteProperty(n,t){var r=v.get(t);if(void 0===r)t in n&&v.set(t,A(e));else{if(d&&"string"==typeof t){var l=v.get("length"),i=Number(t);Number.isInteger(i)&&i<l.v&&C(l,i)}C(r,e),Q(p)}return!0},get(t,l,i){if(r&&l===k)return s;if(l===$)return n;var o=v.get(l),u=l in t;if(void 0!==o||u&&!a(t,l)?.writable||(o=A(J(u?t[l]:e,s)),v.set(l,o)),void 0!==o){var c=Mn(o);if(r){var f=c?.[k];f&&f?.parent!==s&&G(s,f)}return c===e?void 0:c}return Reflect.get(t,l,i)},getOwnPropertyDescriptor(n,t){var r=Reflect.getOwnPropertyDescriptor(n,t);if(r&&"value"in r){var l=v.get(t);l&&(r.value=Mn(l))}else if(void 0===r){var i=v.get(t),o=i?.v;if(void 0!==i&&o!==e)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(n,t){if(r&&t===k)return!0;if(t===$)return!0;var l=v.get(t),i=void 0!==l&&l.v!==e||Reflect.has(n,t);if((void 0!==l||null!==Qe&&(!i||a(n,t)?.writable))&&(void 0===l&&(l=A(i?J(n[t],s):e),v.set(t,l)),Mn(l)===e))return!1;return i},set(n,t,l,i){var o=v.get(t),u=t in n;if(d&&"length"===t)for(var c=l;c<o.v;c+=1){var f=v.get(c+"");void 0!==f?C(f,e):c in n&&(f=A(e),v.set(c+"",f))}if(void 0===o?u&&!a(n,t)?.writable||(C(o=A(void 0),J(l,s)),v.set(t,o)):(u=o.v!==e,C(o,J(l,s))),r){var h=l?.[k];h&&h?.parent!==s&&G(s,h),Y(s)}var m=Reflect.getOwnPropertyDescriptor(n,t);if(m?.set&&m.set.call(i,l),!u){if(d&&"string"==typeof t){var g=v.get("length"),_=Number(t);Number.isInteger(_)&&_>=g.v&&C(g,_+1)}Q(p)}return!0},ownKeys(n){Mn(p);var t=Reflect.ownKeys(n).filter((n=>{var t=v.get(n);return void 0===t||t.v!==e}));for(var[r,l]of v)l.v===e||r in n||t.push(r);return t},setPrototypeOf(){!function(){if(r){const e=new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function Q(e,n=1){C(e,e.v+n)}function X(e){return null!==e&&"object"==typeof e&&$ in e?e[$]:e}var Z,ee,ne;function te(){if(void 0===Z){Z=window;var e=Element.prototype,n=Node.prototype;ee=a(n,"firstChild").get,ne=a(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0,r&&(e.__svelte_meta=null,function(){const e=Array.prototype,n=Array.__svelte_cleanup;n&&n();const{indexOf:t,lastIndexOf:r,includes:l}=e;e.indexOf=function(e,n){const r=t.call(this,e,n);return-1===r&&-1!==t.call(X(this),X(e),n)&&F("array.indexOf(...)"),r},e.lastIndexOf=function(e,n){const t=r.call(this,e,n??this.length-1);return-1===t&&-1!==r.call(X(this),X(e),n??this.length-1)&&F("array.lastIndexOf(...)"),t},e.includes=function(e,n){const t=l.call(this,e,n);return t||l.call(X(this),X(e),n)&&F("array.includes(...)"),t},Array.__svelte_cleanup=()=>{e.indexOf=t,e.lastIndexOf=r,e.includes=l}}())}}function re(e=""){return document.createTextNode(e)}function le(e){return ee.call(e)}function ie(e){return ne.call(e)}function oe(e,n){return le(e)}function ae(e,n){var t=le(e);return t instanceof Comment&&""===t.data?ie(t):t}function se(e,n=1,t=!1){let r=e;for(;n--;)r=ie(r);return r}function ue(e){var n=2050;null===Qe?n|=d:Qe.f|=x;var t=null!==Ye&&2&Ye.f?Ye:null;const r={children:null,ctx:on,deps:null,equals:E,f:n,fn:e,reactions:null,v:null,version:0,parent:t??Qe};return null!==t&&(t.children??=[]).push(r),r}function ce(e){var n=e.children;if(null!==n){e.children=null;for(var t=0;t<n.length;t+=1){var r=n[t];2&r.f?pe(r):Me(r)}}}let fe=[];function ve(e){var n,t=Qe;if(Xe(function(e){for(var n=e.parent;null!==n;){if(!(2&n.f))return n;n=n.parent}return null}(e)),r){let l=O;N(new Set);try{fe.includes(e)&&function(){if(r){const e=new Error("derived_references_self\nA derived value cannot reference itself recursively\nhttps://svelte.dev/e/derived_references_self");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/derived_references_self")}(),fe.push(e),ce(e),n=dn(e)}finally{Xe(t),N(l),fe.pop()}}else try{ce(e),n=dn(e)}finally{Xe(t)}return n}function de(e){var n=ve(e);Tn(e,(ln||e.f&d)&&null!==e.deps?g:h),e.equals(n)||(e.v=n,e.version=sn())}function pe(e){ce(e),hn(e,0),Tn(e,w),e.v=e.children=e.deps=e.ctx=e.reactions=null}function he(e){null===Qe&&null===Ye&&function(e){if(r){const n=new Error(`effect_orphan\n\`${e}\` can only be used inside an effect (e.g. during component initialisation)\nhttps://svelte.dev/e/effect_orphan`);throw n.name="Svelte error",n}throw new Error("https://svelte.dev/e/effect_orphan")}(e),null!==Ye&&Ye.f&d&&function(){if(r){const e=new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),We&&function(e){if(r){const n=new Error(`effect_in_teardown\n\`${e}\` cannot be used inside an effect cleanup function\nhttps://svelte.dev/e/effect_in_teardown`);throw n.name="Svelte error",n}throw new Error("https://svelte.dev/e/effect_in_teardown")}(e)}function me(e,n,t,l=!0){var i=!!(64&e),o=Qe;if(r)for(;null!==o&&o.f&y;)o=o.parent;var a={ctx:on,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|m,first:null,fn:n,last:null,next:null,parent:i?null:o,prev:null,teardown:null,transitions:null,version:0};if(r&&(a.component_function=an),t){var s=Ve;try{Be(!0),mn(a),a.f|=32768}catch(e){throw Me(a),e}finally{Be(s)}}else null!==n&&xn(a);if(!(t&&null===a.deps&&null===a.first&&null===a.nodes_start&&null===a.teardown&&!(a.f&x))&&!i&&l&&(null!==o&&function(e,n){var t=n.last;null===t?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}(a,o),null!==Ye&&2&Ye.f)){var u=Ye;(u.children??=[]).push(a)}return a}function ge(e){return me(4,e,!1)}function _e(e){return me(8,e,!0)}function we(e){return r&&o(e,"name",{value:"{expression}"}),be(e)}function be(e,n=0){return me(24|n,e,!0)}function ye(e,n=!0){return me(40,e,!0,n)}function xe(e){var n=e.teardown;if(null!==n){const e=We,t=Ye;Ue(!0),Je(null);try{n.call(null)}finally{Ue(e),Je(t)}}}function $e(e){var n=e.deriveds;if(null!==n){e.deriveds=null;for(var t=0;t<n.length;t+=1)pe(n[t])}}function ke(e,n=!1){var t=e.first;for(e.first=e.last=null;null!==t;){var r=t.next;Me(t,n),t=r}}function Me(e,n=!0){var t=!1;if((n||524288&e.f)&&null!==e.nodes_start){for(var l=e.nodes_start,i=e.nodes_end;null!==l;){var o=l===i?null:ie(l);l.remove(),l=o}t=!0}ke(e,n&&!t),$e(e),hn(e,0),Tn(e,w);var a=e.transitions;if(null!==a)for(const e of a)e.stop();xe(e);var s=e.parent;null!==s&&null!==s.first&&Se(e),r&&(e.component_function=null),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Se(e){var n=e.parent,t=e.prev,r=e.next;null!==t&&(t.next=r),null!==r&&(r.prev=t),null!==n&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Ee(e,n){var t=[];De(e,t,!0),Te(t,(()=>{Me(e),n&&n()}))}function Te(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var l of e)l.out(r)}else n()}function De(e,n,t){if(!(e.f&_)){if(e.f^=_,null!==e.transitions)for(const r of e.transitions)(r.is_global||t)&&n.push(r);for(var r=e.first;null!==r;){var l=r.next;De(r,n,!!(!!(r.f&b)||!!(r.f&v))&&t),r=l}}}function Oe(e){Ne(e,!0)}function Ne(e,n){if(e.f&_){un(e)&&mn(e),e.f^=_;for(var t=e.first;null!==t;){var r=t.next;Ne(t,!!(!!(t.f&b)||!!(t.f&v))&&n),t=r}if(null!==e.transitions)for(const t of e.transitions)(t.is_global||n)&&t.in()}}let Ae=!1,je=[];function qe(){Ae=!1;const e=je.slice();je=[],function(e){for(var n=0;n<e.length;n++)e[n]()}(e)}function Ce(e){if(r){const n=new Error(`lifecycle_outside_component\n\`${e}(...)\` can only be used during component initialisation\nhttps://svelte.dev/e/lifecycle_outside_component`);throw n.name="Svelte error",n}throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Pe=0,ze=new WeakSet;let Le=!1,Ie=Pe,Re=!1,Fe=null,Ve=!1,We=!1;function Be(e){Ve=e}function Ue(e){We=e}let Ge=[],Ke=0,He=[],Ye=null;function Je(e){Ye=e}let Qe=null;function Xe(e){Qe=e}let Ze=null;let en=null,nn=0,tn=null;let rn=0,ln=!1,on=null,an=null;function sn(){return++rn}function un(e){var n=e.f;if(n&m)return!0;if(n&g){var t=e.deps,r=!!(n&d);if(null!==t){var l;if(n&p){for(l=0;l<t.length;l++)(t[l].reactions??=[]).push(e);e.f^=p}for(l=0;l<t.length;l++){var i=t[l];if(un(i)&&de(i),!r||null===Qe||ln||i?.reactions?.includes(e)||(i.reactions??=[]).push(e),i.version>e.version)return!0}}r||Tn(e,h)}return!1}function cn(e,n){for(var t=n;null!==t;){if(128&t.f)try{return void t.fn(e)}catch{t.f^=128}t=t.parent}throw Le=!1,e}function fn(e){return!(e.f&w||null!==e.parent&&128&e.parent.f)}function vn(e,t,l,i){if(Le){if(null===l&&(Le=!1),fn(t))throw e;return}if(null!==l&&(Le=!0),!r||null===i||!(e instanceof Error)||ze.has(e))return void cn(e,t);ze.add(e);const a=[],s=t.fn?.name;s&&a.push(s);let u=i;for(;null!==u;){if(r){var c=u.function?.[n];if(c){const e=c.split("/").pop();a.push(e)}}u=u.p}const f=/Firefox/.test(navigator.userAgent)?"  ":"\t";o(e,"message",{value:e.message+`\n${a.map((e=>`\n${f}in ${e}`)).join("")}\n`}),o(e,"component_stack",{value:a});const v=e.stack;if(v){const n=v.split("\n"),t=[];for(let e=0;e<n.length;e++){const r=n[e];r.includes("svelte/src/internal")||t.push(r)}o(e,"stack",{value:e.stack+t.join("\n")})}if(cn(e,t),fn(t))throw e}function dn(e){var n=en,t=nn,r=tn,l=Ye,i=ln,o=Ze,a=on,s=e.f;en=null,nn=0,tn=null,Ye=96&s?null:e,ln=!Ve&&!!(s&d),Ze=null,on=e.ctx;try{var u=(0,e.fn)(),c=e.deps;if(null!==en){var f;if(hn(e,nn),null!==c&&nn>0)for(c.length=nn+en.length,f=0;f<en.length;f++)c[nn+f]=en[f];else e.deps=c=en;if(!ln)for(f=nn;f<c.length;f++)(c[f].reactions??=[]).push(e)}else null!==c&&nn<c.length&&(hn(e,nn),c.length=nn);return u}finally{en=n,nn=t,tn=r,Ye=l,ln=i,Ze=o,on=a}}function pn(e,n){let t=n.reactions;if(null!==t){var r=t.indexOf(e);if(-1!==r){var l=t.length-1;0===l?t=n.reactions=null:(t[r]=t[l],t.pop())}}null===t&&2&n.f&&(null===en||!en.includes(n))&&(Tn(n,g),768&n.f||(n.f^=p),hn(n,0))}function hn(e,n){var t=e.deps;if(null!==t)for(var r=n;r<t.length;r++)pn(e,t[r])}function mn(e){var n=e.f;if(!(n&w)){Tn(e,h);var t=Qe,l=on;if(Qe=e,r){var i=an;an=e.component_function}try{16&n?function(e){for(var n=e.first;null!==n;){var t=n.next;n.f&v||Me(n),n=t}}(e):ke(e),$e(e),xe(e);var o=dn(e);e.teardown="function"==typeof o?o:null,e.version=rn,r&&He.push(e)}catch(n){vn(n,e,t,l||e.ctx)}finally{Qe=t,r&&(an=i)}}}function gn(){console.error("Last ten effects were: ",He.slice(-10).map((e=>e.fn))),He=[]}function _n(){if(Ke>1e3){Ke=0;try{!function(){if(r){const e=new Error("effect_update_depth_exceeded\nMaximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops\nhttps://svelte.dev/e/effect_update_depth_exceeded");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){if(r&&o(e,"stack",{value:""}),null===Fe)throw r&&gn(),e;if(r)try{vn(e,Fe,null,null)}catch(e){throw gn(),e}else vn(e,Fe,null,null)}}Ke++}function wn(e){var n=e.length;if(0!==n){_n();var t=Ve;Ve=!0;try{for(var r=0;r<n;r++){var l=e[r];l.f&h||(l.f^=h);var i=[];$n(l,i),bn(i)}}finally{Ve=t}}}function bn(e){var n=e.length;if(0!==n)for(var t=0;t<n;t++){var r=e[t];if(!(24576&r.f))try{un(r)&&(mn(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?Se(r):r.fn=null))}catch(e){vn(e,r,null,r.ctx)}}}function yn(){if(Re=!1,Ke>1001)return;const e=Ge;Ge=[],wn(e),Re||(Ke=0,Fe=null,r&&(He=[]))}function xn(e){Ie===Pe&&(Re||(Re=!0,queueMicrotask(yn))),Fe=e;for(var n=e;null!==n.parent;){var t=(n=n.parent).f;if(96&t){if(!(t&h))return;n.f^=h}}Ge.push(n)}function $n(e,n){var t=e.first,r=[];e:for(;null!==t;){var l=t.f,i=!!(l&v),o=i&&!!(l&h),a=t.next;if(!(o||l&_))if(8&l){if(i)t.f^=h;else try{un(t)&&mn(t)}catch(e){vn(e,t,null,t.ctx)}var s=t.first;if(null!==s){t=s;continue}}else 4&l&&r.push(t);if(null===a){let n=t.parent;for(;null!==n;){if(e===n)break e;var u=n.next;if(null!==u){t=u;continue e}n=n.parent}}t=a}for(var c=0;c<r.length;c++)s=r[c],n.push(s),$n(s,n)}function kn(e){var n=Ie,t=Ge;try{_n();const n=[];Ie=1,Ge=n,Re=!1,wn(t);var l=e?.();return Ae&&qe(),(Ge.length>0||n.length>0)&&kn(),Ke=0,Fe=null,r&&(He=[]),l}finally{Ie=n,Ge=t}}function Mn(e){var n=e.f,t=!!(2&n);if(t&&n&w){var l=ve(e);return pe(e),l}if(null!==Ye){null!==Ze&&Ze.includes(e)&&function(){if(r){const e=new Error("state_unsafe_local_read\nReading state that was created inside the same derived is forbidden. Consider using `untrack` to read locally created state\nhttps://svelte.dev/e/state_unsafe_local_read");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/state_unsafe_local_read")}();var i=Ye.deps;null===en&&null!==i&&i[nn]===e?nn++:null===en?en=[e]:en.push(e),null!==tn&&null!==Qe&&Qe.f&h&&!(Qe.f&v)&&tn.includes(e)&&(Tn(Qe,m),xn(Qe))}else if(t&&null===e.deps)for(var o=e,a=o.parent,s=o;null!==a;){if(!(2&a.f)){var u=a;u.deriveds?.includes(s)||(u.deriveds??=[]).push(s);break}s=a,a=a.parent}return t&&un(o=e)&&de(o),e.v}function Sn(e){const n=Ye;try{return Ye=null,e()}finally{Ye=n}}const En=-7169;function Tn(e,n){e.f=e.f&En|n}function Dn(e,n=!1,t){on={p:on,c:null,e:null,m:!1,s:e,x:null,l:null},r&&(on.function=t,an=t)}function On(e){const n=on;if(null!==n){const e=n.e;if(null!==e){var t=Qe,l=Ye;n.e=null;try{for(var i=0;i<e.length;i++){var o=e[i];Xe(o.effect),Je(o.reaction),ge(o.fn)}}finally{Xe(t),Je(l)}}on=n.p,r&&(an=n.p?.function??null),n.m=!0}return{}}if(r){function Rt(e){if(!(e in globalThis)){let n;Object.defineProperty(globalThis,e,{configurable:!0,get:()=>{if(void 0!==n)return n;!function(e){if(r){const n=new Error(`rune_outside_svelte\nThe \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files\nhttps://svelte.dev/e/rune_outside_svelte`);throw n.name="Svelte error",n}throw new Error("https://svelte.dev/e/rune_outside_svelte")}(e)},set:e=>{n=e}})}}Rt("$state"),Rt("$effect"),Rt("$derived"),Rt("$inspect"),Rt("$props"),Rt("$bindable")}let Nn=!1;function An(e){var n=Ye,t=Qe;Je(null),Xe(null);try{return e()}finally{Je(n),Xe(t)}}function jn(e,n,t,r=t){e.addEventListener(n,(()=>An(t)));const l=e.__on_r;e.__on_r=l?()=>{l(),r(!0)}:()=>r(!0),Nn||(Nn=!0,document.addEventListener("reset",(e=>{Promise.resolve().then((()=>{if(!e.defaultPrevented)for(const n of e.target.elements)n.__on_r?.()}))}),{capture:!0}))}const qn=new Set,Cn=new Set;function Pn(e,n,t,r){function l(e){if(r.capture||In.call(n,e),!e.cancelBubble)return An((()=>t.call(this,e)))}var i;return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?(i=()=>{n.addEventListener(e,l,r)},Ae||(Ae=!0,queueMicrotask(qe)),je.push(i)):n.addEventListener(e,l,r),l}function zn(e,n,t,r,l){var i={capture:r,passive:l},o=Pn(e,n,t,i);n!==document.body&&n!==window&&n!==document||function(e){const n=me(8,null,!1);Tn(n,h),n.teardown=e}((()=>{n.removeEventListener(e,o,i)}))}function Ln(e){for(var n=0;n<e.length;n++)qn.add(e[n]);for(var t of Cn)t(e)}function In(e){var n=this,t=n.ownerDocument,r=e.type,i=e.composedPath?.()||[],a=i[0]||e.target,s=0,u=e.__root;if(u){var c=i.indexOf(u);if(-1!==c&&(n===document||n===window))return void(e.__root=n);var f=i.indexOf(n);if(-1===f)return;c<=f&&(s=c)}if((a=i[s]||e.target)!==n){o(e,"currentTarget",{configurable:!0,get:()=>a||t});var v=Ye,d=Qe;Je(null),Xe(null);try{for(var p,h=[];null!==a;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+r];if(void 0!==g&&!a.disabled)if(l(g)){var[_,...w]=g;_.apply(a,[e,...w])}else g.call(a,e)}catch(e){p?h.push(e):p=e}if(e.cancelBubble||m===n||null===m)break;a=m}if(p){for(let e of h)queueMicrotask((()=>{throw e}));throw p}}finally{e.__root=n,delete e.currentTarget,Je(v),Xe(d)}}}function Rn(e,n){var t=Qe;null===t.nodes_start&&(t.nodes_start=e,t.nodes_end=n)}function Fn(e,n){var t,r=!!(1&n),l=!!(2&n),i=!e.startsWith("<!>");return()=>{var n,o;void 0===t&&(n=i?e:"<!>"+e,(o=document.createElement("template")).innerHTML=n,t=o.content,r||(t=le(t)));var a=l?document.importNode(t,!0):t.cloneNode(!0);r?Rn(le(a),a.lastChild):Rn(a,a);return a}}function Vn(e,n){null!==e&&e.before(n)}const Wn=["touchstart","touchmove"];function Bn(e){return Wn.includes(e)}function Un(e,n){var t=null==n?"":"object"==typeof n?n+"":n;t!==(e.__t??=e.nodeValue)&&(e.__t=t,e.nodeValue=null==t?"":t+"")}const Gn=new Map;let Kn=new WeakMap;function Hn(n,t,r=!1){var l=n,i=null,o=null,a=e,s=!1;const u=(e,n=!0)=>{s=!0,c(n,e)},c=(e,n)=>{a!==(a=e)&&(a?(i?Oe(i):n&&(i=ye((()=>n(l)))),o&&Ee(o,(()=>{o=null}))):(o?Oe(o):n&&(o=ye((()=>n(l)))),i&&Ee(i,(()=>{i=null}))))};be((()=>{s=!1,t(u),s||c(null,null)}),r?b:0)}function Yn(e,n){return n}function Jn(e,n,t,r,o,a=null){var s,u={flags:n,items:new Map,first:null};s=e.appendChild(re());var c=null,f=!1;be((()=>{var e=t(),v=l(e)?e:null==e?[]:i(e),d=v.length;f&&0===d||(f=0===d,function(e,n,t,r,l,o,a){var s,u,c,f,v,d=e.length,p=n.items,h=n.first,m=h,g=null,w=[],b=[];for(v=0;v<d;v+=1)if(c=a(u=e[v],v),void 0!==(f=p.get(c))){if(Qn(f,u,v),f.e.f&_&&Oe(f.e),f!==m){if(void 0!==s&&s.has(f)){if(w.length<b.length){var y,x=b[0];g=x.prev;var $=w[0],k=w[w.length-1];for(y=0;y<w.length;y+=1)Zn(w[y],x,t);for(y=0;y<b.length;y+=1)s.delete(b[y]);et(n,$.prev,k.next),et(n,g,$),et(n,k,x),m=x,g=k,v-=1,w=[],b=[]}else s.delete(f),Zn(f,m,t),et(n,f.prev,f.next),et(n,f,null===g?n.first:g.next),et(n,g,f),g=f;continue}for(w=[],b=[];null!==m&&m.k!==c;)!o&&m.e.f&_||(s??=new Set).add(m),b.push(m),m=m.next;if(null===m)continue;f=m}w.push(f),g=f,m=f.next}else{g=Xn(m?m.e.nodes_start:t,n,g,null===g?n.first:g.next,u,c,v,r,l),p.set(c,g),w=[],b=[],m=g.next}if(null!==m||void 0!==s){for(var M=void 0===s?[]:i(s);null!==m;)!o&&m.e.f&_||M.push(m),m=m.next;if(M.length>0)!function(e,n,t,r){for(var l=[],i=n.length,o=0;o<i;o++)De(n[o].e,l,!0);var a=i>0&&0===l.length&&null!==t;if(a){var s=t.parentNode;s.textContent="",s.append(t),r.clear(),et(e,n[0].prev,n[i-1].next)}Te(l,(()=>{for(var t=0;t<i;t++){var l=n[t];a||(r.delete(l.k),et(e,l.prev,l.next)),Me(l.e,!a)}}))}(n,M,0===d?t:null,p)}Qe.first=n.first&&n.first.e,Qe.last=g&&g.e}(v,u,s,o,n,!!(Ye.f&_),r),null!==a&&(0===d?c?Oe(c):c=ye((()=>a(s))):null!==c&&Ee(c,(()=>{c=null}))),t())}))}function Qn(e,n,t,r){P(e.v,n),e.i=t}function Xn(e,n,t,r,l,i,o,a,s){var u=!!(1&s)?!(16&s)?q(l):A(l):l,c=2&s?A(o):o,f={i:c,v:u,k:i,a:null,e:null,prev:t,next:r};try{return f.e=ye((()=>a(e,u,c)),false),f.e.prev=t&&t.e,f.e.next=r&&r.e,null===t?n.first=f:(t.next=f,t.e.next=f.e),null!==r&&(r.prev=f,r.e.prev=f.e),f}finally{}}function Zn(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,l=n?n.e.nodes_start:t,i=e.e.nodes_start;i!==r;){var o=ie(i);l.before(i),i=o}}function et(e,n,t){null===n?e.first=t:(n.next=t,n.e.next=t&&t.e),null!==t&&(t.prev=n,t.e.prev=n&&n.e)}function nt(e,n,t,r){var l=e.__attributes??={};l[n]!==(l[n]=t)&&("style"===n&&"__styles"in e&&(e.__styles={}),"loading"===n&&(e[S]=t),null==t?e.removeAttribute(n):"string"!=typeof t&&function(e){var n,t=tt.get(e.nodeName);if(t)return t;tt.set(e.nodeName,t=[]);var r=e,l=Element.prototype;for(;l!==r;){for(var i in n=s(r))n[i].set&&t.push(i);r=f(r)}return t}(e).includes(n)?e[n]=t:e.setAttribute(n,t))}var tt=new Map;function rt(e,n,t){if(t){if(e.classList.contains(n))return;e.classList.add(n)}else{if(!e.classList.contains(n))return;e.classList.remove(n)}}function lt(e,n,t=n){jn(e,"input",(l=>{r&&"checkbox"===e.type&&D();var i=l?e.defaultValue:e.value;if(i=it(e)?ot(i):i,t(i),i!==(i=n())){var o=e.selectionStart,a=e.selectionEnd;e.value=i??"",null!==a&&(e.selectionStart=o,e.selectionEnd=Math.min(a,e.value.length))}})),null==Sn(n)&&e.value&&t(it(e)?ot(e.value):e.value),_e((()=>{r&&"checkbox"===e.type&&D();var t=n();it(e)&&t===ot(e.value)||("date"!==e.type||t||e.value)&&t!==e.value&&(e.value=t??"")}))}function it(e){var n=e.type;return"number"===n||"range"===n}function ot(e){return""===e?null:+e}function at(e,n,t){if(e.multiple)return function(e,n){for(var t of e.options)t.selected=~n.indexOf(ut(t))}(e,n);for(var r of e.options){var l=ut(r);if(i=l,o=n,Object.is(X(i),X(o)))return void(r.selected=!0)}var i,o;t&&void 0===n||(e.selectedIndex=-1)}function st(e,n,t=n){var r=!0;jn(e,"change",(n=>{var r,l=n?"[selected]":":checked";if(e.multiple)r=[].map.call(e.querySelectorAll(l),ut);else{var i=e.querySelector(l)??e.querySelector("option:not([disabled])");r=i&&ut(i)}t(r)})),ge((()=>{var l=n();if(at(e,l,r),r&&void 0===l){var i=e.querySelector(":checked");null!==i&&(l=ut(i),t(l))}e.__value=l,r=!1})),function(e){ge((()=>{var n=new MutationObserver((()=>{var n=e.__value;at(e,n)}));return n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{n.disconnect()}}))}(e)}function ut(e){return"__value"in e?e.__value:e.value}function ct(e){return function(...n){return n[0].preventDefault(),e?.apply(this,n)}}function ft(e){null===on&&Ce("onMount"),function(e){he("$effect");var n=null!==Qe&&!!(Qe.f&v)&&null!==on&&!on.m;if(r&&o(e,"name",{value:"$effect"}),!n)return ge(e);var t=on;(t.e??=[]).push({fn:e,effect:Qe,reaction:Ye})}((()=>{const n=Sn(e);if("function"==typeof n)return n}))}function vt(){const e=on;return null===e&&Ce("createEventDispatcher"),(n,t,r)=>{const i=e.s.$$events?.[n];if(i){const o=l(i)?i.slice():[i],a=function(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}(n,t,r);for(const n of o)n.call(e.x,a);return!a.defaultPrevented}return!0}}let dt=!1;function pt(e,n,t,l){var i,o=!!(1&t),s=!!(8&t),u=!!(16&t),c=!1;s?[i,c]=function(e){var n=dt;try{return dt=!1,[e(),dt]}finally{dt=n}}((()=>e[n])):i=e[n];var f,v=$ in e||M in e,d=a(e,n)?.set??(v&&s&&n in e?t=>e[n]=t:void 0),p=l,h=!0,m=!1,g=()=>(m=!0,h&&(h=!1,p=u?Sn(l):l),p);if(void 0===i&&void 0!==l&&(d&&function(e){if(r){const n=new Error(`props_invalid_value\nCannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value\nhttps://svelte.dev/e/props_invalid_value`);throw n.name="Svelte error",n}throw new Error("https://svelte.dev/e/props_invalid_value")}(n),i=g(),d&&d(i)),f=()=>{var t=e[n];return void 0===t?g():(h=!0,m=!1,t)},!(4&t))return f;if(d){var _=e.$$legacy;return function(e,n){return arguments.length>0?((!n||_||c)&&d(n?f():e),e):f()}}var w=!1,b=q(i),y=function(e){for(var n=Qe,t=Qe;null!==n&&!(96&n.f);)n=n.parent;try{return Xe(n),e()}finally{Xe(t)}}((()=>ue((()=>{var e=f(),n=Mn(b);return w?(w=!1,n):b.v=e}))));return o||(y.equals=T),function(e,n){if(arguments.length>0){const t=n?Mn(y):s?J(e):e;return y.equals(t)||(w=!0,C(b,t),m&&void 0!==p&&(p=t),Sn((()=>Mn(y)))),e}return Mn(y)}}function ht(e){!function(e){he("$effect.pre"),r&&o(e,"name",{value:"$effect.pre"}),_e(e)}((()=>{e();var t=Qe;if(t.f&m){let e="a file (we can't know which one)";r&&(e=an?.[n]??e),function(e){r?console.warn(`%c[svelte] legacy_recursive_reactive_block\n%cDetected a migrated \`$:\` reactive block in \`${e}\` that both accesses and updates the same reactive value. This may cause recursive updates when converted to an \`$effect\`.\nhttps://svelte.dev/e/legacy_recursive_reactive_block`,L,I):console.warn("https://svelte.dev/e/legacy_recursive_reactive_block")}(e),Tn(t,g)}}))}const mt=(e,n,t)=>{const r=e.target.valueAsNumber;r>Mn(n)&&r>Mn(t)&&C(t,J(r)),C(n,J(r))},gt=(e,n,t)=>{const r=e.target.valueAsNumber;r<Mn(n)&&r<Mn(t)&&C(t,J(r)),C(n,J(r))},_t=(e,n,t)=>{const r=e.target.valueAsNumber;r>Mn(n)&&r>Mn(t)&&C(t,J(r)),C(n,J(r))},wt=(e,n,t)=>{const r=e.target.valueAsNumber;r<Mn(n)&&r<Mn(t)&&C(t,J(r)),C(n,J(r))};var bt=Fn("<option> </option>"),yt=Fn('<label for="first-min"> </label> <input type="range" name="first-min" id="first-min" step="1" class="svelte-mziz9r"> <label for="first-max"> </label> <input type="range" name="first-max" id="first-max" step="1" class="svelte-mziz9r"> <label for="second-min"> </label> <input type="range" name="second-min" id="second-min" step="1" class="svelte-mziz9r"> <label for="second-max"> </label> <input type="range" name="second-max" id="second-max" step="1" class="svelte-mziz9r">',1),xt=Fn('<label for="allow-negative-answers">Allow Negative Answers</label> <input type="checkbox" name="allow-negative-answers" id="allow-negative-answers" class="svelte-mziz9r">',1),$t=Fn('<form class="svelte-mziz9r"><label for="type">Problem Type</label> <select name="type" id="type" class="svelte-mziz9r"></select> <!> <!> <button type="submit">Practice</button></form>');function kt(e,n){Dn(n,!0);const t=vt(),r=()=>{const e=Mn(i).id,n={firstTermMinimumDigits:Mn(o),firstTermMaximumDigits:Mn(s),secondTermMinimumDigits:Mn(c),secondTermMaximumDigits:Mn(v),allowNegativeAnswers:Mn(p)};t("message",{id:e,config:n})};let l=[{id:1,text:"Addition"},{id:2,text:"Subtraction"},{id:3,text:"Multiplication"},{id:4,text:"Division"}],i=j(void 0),o=j(1),a=j(6),s=j(1),u=j(1),c=j(1),f=j(6),v=j(1),d=j(1),p=j(!1);var h=$t(),m=ue((()=>ct(r))),g=se(oe(h),2);Jn(g,21,(()=>l),Yn,((e,n)=>{var t=bt(),r={},l=oe(t);we((()=>{r!==(r=Mn(n))&&(t.value=null==(t.__value=Mn(n))?"":Mn(n)),Un(l,Mn(n).text)})),Vn(e,t)}));var _=se(g,2),w=e=>{var n=yt(),t=ae(n),r=oe(t),l=se(t,2);nt(l,"min",1),l.__change=[mt,u,s];var i=se(l,2),p=oe(i),h=se(i,2);nt(h,"max",6),h.__change=[gt,a,o];var m=se(h,2),g=oe(m),_=se(m,2);nt(_,"min",1),_.__change=[_t,d,v];var w=se(_,2),b=oe(w),y=se(w,2);nt(y,"max",6),y.__change=[wt,f,c],we((()=>{Un(r,`Minimum Digits In First Term (${Mn(o)??""})`),nt(l,"max",Mn(a)),l.disabled=1===Mn(a),Un(p,`Maximum Digits In First Term (${Mn(s)??""})`),nt(h,"min",Mn(u)),h.disabled=6===Mn(u),Un(g,`Minimum Digits In Second Term (${Mn(c)??""})`),nt(_,"max",Mn(f)),_.disabled=1===Mn(f),Un(b,`Maximum Digits In Second Term (${Mn(v)??""})`),nt(y,"min",Mn(d)),y.disabled=6===Mn(d)})),lt(l,(()=>Mn(o)),(e=>C(o,e))),lt(h,(()=>Mn(s)),(e=>C(s,e))),lt(_,(()=>Mn(c)),(e=>C(c,e))),lt(y,(()=>Mn(v)),(e=>C(v,e))),Vn(e,n)};Hn(_,(e=>{[1,2,3,4].includes(Mn(i)?.id)&&e(w)}));var b=se(_,2),y=e=>{var n=xt();!function(e,n,t=n){jn(e,"change",(n=>{var r=n?e.defaultChecked:e.checked;t(r)})),null==Sn(n)&&t(e.checked),_e((()=>{var t=n();e.checked=Boolean(t)}))}(se(ae(n),2),(()=>Mn(p)),(e=>C(p,e))),Vn(e,n)};Hn(b,(e=>{2===Mn(i)?.id&&e(y)}));var x=se(b,2);we((()=>x.disabled=!Mn(i))),zn("submit",h,(function(...e){Mn(m)?.apply(this,e)})),st(g,(()=>Mn(i)),(e=>C(i,e))),Vn(e,h),On()}Ln(["change"]);var Mt=Fn('<div class="confetti svelte-15ksp55"></div>'),St=Fn('<div class="confetti-holder svelte-15ksp55"></div>');function Et(e,n){Dn(n,!0);let t=pt(n,"size",3,10),r=pt(n,"x",19,(()=>[-.5,.5])),l=pt(n,"y",19,(()=>[.25,1])),i=pt(n,"duration",3,2e3),o=pt(n,"infinite",3,!1),a=pt(n,"delay",19,(()=>[0,50])),s=pt(n,"colorRange",19,(()=>[0,360])),u=pt(n,"colorArray",19,(()=>[])),c=pt(n,"amount",3,50),f=pt(n,"iterationCount",3,1),v=pt(n,"fallDistance",3,"100px"),d=pt(n,"rounded",3,!1),p=pt(n,"cone",3,!1),h=pt(n,"noGravity",3,!1),m=pt(n,"xSpread",3,.15),g=pt(n,"destroyOnComplete",3,!0),_=pt(n,"disableForReducedMotion",3,!1),w=j(!1);function b(e,n){return Math.random()*(n-e)+e}ft((()=>{g()&&!o()&&"infinite"!=f()&&setTimeout((()=>C(w,!0)),(i()+a()[1])*f())}));var y,x,$,k=(y=document.createDocumentFragment(),x=document.createComment(""),$=re(),y.append(x,$),Rn(x,$),y),M=ae(k),S=e=>{var n=St();Jn(n,21,(()=>({length:c()})),Yn,((e,n)=>{var c=Mt();const d=ue((()=>v()??"")),p=ue((()=>t()??"")),h=ue((()=>(u().length?u()[Math.round(Math.random()*(u().length-1))]:`hsl(${Math.round(b(s()[0],s()[1]))}, 75%, 50%)`)??"")),g=ue((()=>b(-45,45)??"")),_=ue((()=>b(-45,45)??"")),w=ue((()=>b(-10,10)??"")),y=ue((()=>b(-10,10)??"")),x=ue((()=>b(-10,10)??"")),$=ue((()=>b(0,360)??"")),k=ue((()=>b(l()[0],l()[1])??"")),M=ue((()=>b(r()[0],r()[1])??"")),S=ue((()=>.1*b(2,10)??"")),E=ue((()=>(o()?`calc(${i()}ms * var(--scale))`:`${i()}ms`)??"")),T=ue((()=>b(a()[0],a()[1])??"")),D=ue((()=>(o()?"infinite":f())??"")),O=ue((()=>1-m()??"")),N=ue((()=>`\n        --fall-distance: ${Mn(d)};\n        --size: ${Mn(p)}px;\n        --color: ${Mn(h)};\n        --skew: ${Mn(g)}deg,${Mn(_)}deg;\n        --rotation-xyz: ${Mn(w)}, ${Mn(y)}, ${Mn(x)};\n        --rotation-deg: ${Mn($)}deg;\n        --translate-y-multiplier: ${Mn(k)};\n        --translate-x-multiplier: ${Mn(M)};\n        --scale: ${Mn(S)};\n        --transition-duration: ${Mn(E)};\n        --transition-delay: ${Mn(T)}ms;\n        --transition-iteration-count: ${Mn(D)};\n        --x-spread: ${Mn(O)}`));we((()=>nt(c,"style",Mn(N)))),Vn(e,c)})),we((()=>{rt(n,"rounded",d()),rt(n,"cone",p()),rt(n,"no-gravity",h()),rt(n,"reduced-motion",_())})),Vn(e,n)};Hn(M,(e=>{Mn(w)||e(S)})),Vn(e,k),On()}var Tt=Fn('<div class="confetti svelte-1qjohkm"><!></div>'),Dt=Fn("<p> </p>"),Ot=Fn('<div id="streak" class="svelte-1qjohkm"><span> </span></div>'),Nt=Fn('<form class="svelte-1qjohkm"><label for="answer"> </label> <input type="number" name="answer" id="answer" class="svelte-1qjohkm"> <br> <input type="submit" value="Submit"> <!> <!> <!></form>');function At(e,n){Dn(n,!0);const t=(e,n)=>(e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1)+e)),r=()=>{let e=d,t=Mn(v),r=0;for(;Mn(v)===t&&r<10;)switch(r++,n.selection){case 1:[e,t]=i(n.config.firstTermMinimumDigits,n.config.firstTermMaximumDigits,n.config.secondTermMinimumDigits,n.config.secondTermMaximumDigits);break;case 2:[e,t]=o(n.config.firstTermMinimumDigits,n.config.firstTermMaximumDigits,n.config.secondTermMinimumDigits,n.config.secondTermMaximumDigits,n.config.allowNegativeAnswers);break;case 3:[e,t]=a(n.config.firstTermMinimumDigits,n.config.firstTermMaximumDigits,n.config.secondTermMinimumDigits,n.config.secondTermMaximumDigits);break;case 4:[e,t]=s(n.config.firstTermMinimumDigits,n.config.firstTermMaximumDigits,n.config.secondTermMinimumDigits,n.config.secondTermMaximumDigits);break;default:console.log("unknown selection")}d=e,C(v,J(t))},l=(e,n)=>{const r=t(e,n);return t(Math.pow(10,r-1),Math.pow(10,r)-1)},i=(e,n,t,r)=>{const i=l(e,n),o=l(t,r);return[e=>e===i+o,`${i} + ${o} =`]},o=(e,n,t,r,i)=>{let o=l(e,n),a=l(t,r);return i||([o,a]=[Math.max(o,a),Math.min(o,a)]),[e=>e===o-a,`${o} - ${a} =`]},a=(e,n,t,r)=>{const i=l(e,n),o=l(t,r);return[e=>e===i*o,`${i} × ${o} =`]},s=(e,n,t,r)=>{let i=l(e,n);const o=[];for(let e=Math.pow(10,t-1);e<Math.pow(10,r)-1;e++)i%e==0&&o.push(e);let a;return o.length>0?a=o[Math.floor(Math.random()*o.length)]:(a=l(t,r),i=a*l(e,n)),[e=>e===i/a,`${i} ÷ ${a} =`]},u=()=>{r(),C(p,null),C(h,null),function(e,n=1){var t=Mn(e),r=1===n?t++:t--;C(e,t)}(g),f()},c=()=>d(Mn(h))?u():(C(p,`${Mn(h)} isn't correct. Try again 😊`),C(h,null),void C(g,0)),f=async()=>{C(m,!1),await async function(){await Promise.resolve(),kn()}(),C(m,!0)};let v=j(void 0),d=()=>!1,p=j(void 0),h=j(void 0),m=j(!1),g=j(0);ht((()=>{Mn(v)||r()}));var _=Nt(),w=ue((()=>ct(c))),b=oe(_),y=oe(b),x=se(b,2),$=se(x,4),k=se($,2),M=e=>{var n=Tt();Et(oe(n),{}),Vn(e,n)};Hn(k,(e=>{Mn(m)&&e(M)}));var S=se(k,2),E=e=>{var n=Dt(),t=oe(n);we((()=>Un(t,Mn(p)))),Vn(e,n)};Hn(S,(e=>{Mn(p)&&e(E)}));var T=se(S,2),D=e=>{var n=Ot(),t=oe(n),r=oe(t);we((()=>Un(r,`🔥${Mn(g)??""}`))),Vn(e,n)};Hn(T,(e=>{Mn(g)&&e(D)})),we((()=>{Un(y,Mn(v)),$.disabled=null==Mn(h)})),zn("submit",_,(function(...e){Mn(w)?.apply(this,e)})),lt(x,(()=>Mn(h)),(e=>C(h,e))),Vn(e,_),On()}var jt=Fn('<input type="button" data-theme-toggle="">');Ln(["click"]);var qt=Fn("<!> <div></div>",1),Ct=Fn('<!> <footer><span>This website is open source. The source code is <a href="https://github.com/matthewnoel/arithmetic-practice" target="_blank">available here</a>. The list of third pary licenses is <a href="https://raw.githubusercontent.com/matthewnoel/arithmetic-practice/main/third-party-licenses.txt" target="_blank">available here</a>. You can file an <a href="https://github.com/matthewnoel/arithmetic-practice/issues/new" target="_blank">issue here</a>.</span> <span>Change Theme: <!></span></footer>',1),Pt=Fn("<div></div> <!>",1);var zt,Lt,It=(zt=function(e){const n=e=>{C(t,J(e.detail.id)),C(r,J(Object.assign({},e.detail.config)))};let t=j(void 0),r=j(J({}));var l=Pt(),i=se(ae(l),2),o=e=>{var n=qt();At(ae(n),{get selection(){return Mn(t)},get config(){return Mn(r)}}),Vn(e,n)},a=e=>{var t=Ct(),r=ae(t);kt(r,{$$events:{message:n}});var l=se(r,2),i=se(oe(l),2);!function(e,n){Dn(n,!0);const t=e=>{C(o,J(e===l?"🌞":"🌚")),document.querySelector("html").setAttribute("data-theme",e)},r="light",l="dark";let i=(({localStorageTheme:e,systemSettingDark:n})=>null!==e?e:n.matches?l:r)({localStorageTheme:localStorage.getItem("theme"),systemSettingDark:window.matchMedia("(prefers-color-scheme: dark)")}),o=j("🌞");t(i);var a=jt();a.__click=()=>{const e=i===l?r:l;localStorage.setItem("theme",e),t(e),i=e},we((()=>{nt(a,"aria-label","🌚"===Mn(o)?"Change to dark theme.":"Change to light theme."),function(e,n){var t=e.__attributes??={};t.value!==(t.value=n??void 0)&&(e.value!==n||0===n&&"PROGRESS"===e.nodeName)&&(e.value=n)}(a,Mn(o))})),Vn(e,a),On()}(se(oe(i)),{}),Vn(e,t)};Hn(i,(e=>{Mn(t)?e(o):e(a,!1)})),Vn(e,l)},Lt={target:document.body},function(e,{target:n,anchor:t,props:r={},events:l,context:o,intro:a=!0}){te();var s=new Set,u=e=>{for(var t=0;t<e.length;t++){var r=e[t];if(!s.has(r)){s.add(r);var l=Bn(r);n.addEventListener(r,In,{passive:l});var i=Gn.get(r);void 0===i?(document.addEventListener(r,In,{passive:l}),Gn.set(r,1)):Gn.set(r,i+1)}}};u(i(qn)),Cn.add(u);var c=void 0,f=function(e){const n=me(64,e,!0);return()=>{Me(n)}}((()=>{var i=t??n.appendChild(re());return ye((()=>{o&&(Dn({}),on.c=o),l&&(r.$$events=l),c=e(i,r)||{},o&&On()})),()=>{for(var e of s){n.removeEventListener(e,In);var r=Gn.get(e);0==--r?(document.removeEventListener(e,In),Gn.delete(e)):Gn.set(e,r)}Cn.delete(u),Kn.delete(c),i!==t&&i.parentNode?.removeChild(i)}}));return Kn.set(c,f),c}(zt,Lt));return It}();
//# sourceMappingURL=bundle.js.map
