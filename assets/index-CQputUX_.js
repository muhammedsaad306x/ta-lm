const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/carousel-vendor-CG2PRk06.css","assets/form-vendor-Bbgo5x5y.css","assets/map-vendor-CIGW-MKW.css","assets/Achievements-D21GFCQg.css","assets/Gallery-BMD19QWe.css","assets/CampaignDetails-BlWqPrGy.css"])))=>i.map(i=>d[i]);
import{_ as pe}from"./media-vendor-BKWaKWrj.js";import{a as P1,j as u}from"./map-vendor-CkCCoZy4.js";import{r as _,R as we}from"./form-vendor-8JSUuxVu.js";import{r as N0,g as U0}from"./carousel-vendor-Ek1eulE_.js";import{u as Mf,a as Eo,b as ns,c as as,L as ga,d as B1,e as P0,O as B0,Q as q1,f as H1,g as V1,h as be,r as ya,R as Q1,i as G1}from"./tanstack-vendor-DVbpgvBY.js";import{a as F1,i as Nn,b as $1,u as tn}from"./vendor-8UwSOQY7.js";import{p as Y1,f as X1,d as k,m as Ci,o as Z1}from"./ui-vendor-BVv7PGpf.js";import{F as K1,G as W1,I as q0,R as H0,a as V0,b as Q0,c as G0,d as F0,e as $0,A as Y0,f as Gl,g as J1,h as ew,i as X0,j as tw,k as Z0,l as Qg,m as nw,n as aw,o as iw,p as ow}from"./react-icons-vendor-D75jEhkE.js";var Cd={exports:{}},_r={},Dd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function rw(){return Gg||(Gg=1,(function(a){function o($,H){var N=$.length;$.push(H);e:for(;0<N;){var P=N-1>>>1,X=$[P];if(0<d(X,H))$[P]=H,$[N]=X,N=P;else break e}}function c($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var H=$[0],N=$.pop();if(N!==H){$[0]=N;e:for(var P=0,X=$.length,Z=X>>>1;P<Z;){var ce=2*(P+1)-1,ae=$[ce],oe=ce+1,te=$[oe];if(0>d(ae,N))oe<X&&0>d(te,ae)?($[P]=te,$[oe]=N,P=oe):($[P]=ae,$[ce]=N,P=ce);else if(oe<X&&0>d(te,N))$[P]=te,$[oe]=N,P=oe;else break e}}return H}function d($,H){var N=$.sortIndex-H.sortIndex;return N!==0?N:$.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,h=p.now();a.unstable_now=function(){return p.now()-h}}var g=[],y=[],T=1,x=null,S=3,D=!1,C=!1,R=!1,A=!1,z=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function E($){for(var H=c(y);H!==null;){if(H.callback===null)s(y);else if(H.startTime<=$)s(y),H.sortIndex=H.expirationTime,o(g,H);else break;H=c(y)}}function L($){if(R=!1,E($),!C)if(c(g)!==null)C=!0,B||(B=!0,I());else{var H=c(y);H!==null&&se(L,H.startTime-$)}}var B=!1,Q=-1,j=5,F=-1;function O(){return A?!0:!(a.unstable_now()-F<j)}function v(){if(A=!1,B){var $=a.unstable_now();F=$;var H=!0;try{e:{C=!1,R&&(R=!1,M(Q),Q=-1),D=!0;var N=S;try{t:{for(E($),x=c(g);x!==null&&!(x.expirationTime>$&&O());){var P=x.callback;if(typeof P=="function"){x.callback=null,S=x.priorityLevel;var X=P(x.expirationTime<=$);if($=a.unstable_now(),typeof X=="function"){x.callback=X,E($),H=!0;break t}x===c(g)&&s(g),E($)}else s(g);x=c(g)}if(x!==null)H=!0;else{var Z=c(y);Z!==null&&se(L,Z.startTime-$),H=!1}}break e}finally{x=null,S=N,D=!1}H=void 0}}finally{H?I():B=!1}}}var I;if(typeof w=="function")I=function(){w(v)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=v,I=function(){J.postMessage(null)}}else I=function(){z(v,0)};function se($,H){Q=z(function(){$(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function($){$.callback=null},a.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<$?Math.floor(1e3/$):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function($){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var N=S;S=H;try{return $()}finally{S=N}},a.unstable_requestPaint=function(){A=!0},a.unstable_runWithPriority=function($,H){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var N=S;S=$;try{return H()}finally{S=N}},a.unstable_scheduleCallback=function($,H,N){var P=a.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?P+N:P):N=P,$){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,$={id:T++,callback:H,priorityLevel:$,startTime:N,expirationTime:X,sortIndex:-1},N>P?($.sortIndex=N,o(y,$),c(g)===null&&$===c(y)&&(R?(M(Q),Q=-1):R=!0,se(L,N-P))):($.sortIndex=X,o(g,$),C||D||(C=!0,B||(B=!0,I()))),$},a.unstable_shouldYield=O,a.unstable_wrapCallback=function($){var H=S;return function(){var N=S;S=H;try{return $.apply(this,arguments)}finally{S=N}}}})(kd)),kd}var Fg;function sw(){return Fg||(Fg=1,Dd.exports=rw()),Dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function lw(){if($g)return _r;$g=1;var a=sw(),o=N0(),c=P1();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var l=r.alternate;if(l===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===n)return g(r),e;if(l===i)return g(r),t;l=l.sibling}throw Error(s(188))}if(n.return!==i.return)n=r,i=l;else{for(var m=!1,b=r.child;b;){if(b===n){m=!0,n=r,i=l;break}if(b===i){m=!0,i=r,n=l;break}b=b.sibling}if(!m){for(b=l.child;b;){if(b===n){m=!0,n=l,i=r;break}if(b===i){m=!0,i=l,n=r;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),v=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=v&&e[v]||e["@@iterator"],typeof e=="function"?e:null)}var q=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case z:return"Profiler";case A:return"StrictMode";case L:return"Suspense";case B:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case w:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case E:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var se=Array.isArray,$=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},P=[],X=-1;function Z(e){return{current:e}}function ce(e){0>X||(e.current=P[X],P[X]=null,X--)}function ae(e,t){X++,P[X]=e.current,e.current=t}var oe=Z(null),te=Z(null),fe=Z(null),ue=Z(null);function Ee(e,t){switch(ae(fe,t),ae(te,e),ae(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mg(t),e=pg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ce(oe),ae(oe,e)}function xe(){ce(oe),ce(te),ce(fe)}function me(e){e.memoizedState!==null&&ae(ue,e);var t=oe.current,n=pg(t,e.type);t!==n&&(ae(te,e),ae(oe,n))}function ke(e){te.current===e&&(ce(oe),ce(te)),ue.current===e&&(ce(ue),Sr._currentValue=N)}var Xe,Ze;function Je(e){if(Xe===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xe=t&&t[1]||"",Ze=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+e+Ze}var Ke=!1;function vt(e,t){if(!e||Ke)return"";Ke=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(ne){var ee=ne}Reflect.construct(e,[],le)}else{try{le.call()}catch(ne){ee=ne}e.call(le.prototype)}}else{try{throw Error()}catch(ne){ee=ne}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(ne){if(ne&&ee&&typeof ne.stack=="string")return[ne.stack,ee.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),m=l[0],b=l[1];if(m&&b){var U=m.split(`
`),W=b.split(`
`);for(r=i=0;i<U.length&&!U[i].includes("DetermineComponentFrameRoot");)i++;for(;r<W.length&&!W[r].includes("DetermineComponentFrameRoot");)r++;if(i===U.length||r===W.length)for(i=U.length-1,r=W.length-1;1<=i&&0<=r&&U[i]!==W[r];)r--;for(;1<=i&&0<=r;i--,r--)if(U[i]!==W[r]){if(i!==1||r!==1)do if(i--,r--,0>r||U[i]!==W[r]){var ie=`
`+U[i].replace(" at new "," at ");return e.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",e.displayName)),ie}while(1<=i&&0<=r);break}}}finally{Ke=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Je(n):""}function Gt(e,t){switch(e.tag){case 26:case 27:case 5:return Je(e.type);case 16:return Je("Lazy");case 13:return e.child!==t&&t!==null?Je("Suspense Fallback"):Je("Suspense");case 19:return Je("SuspenseList");case 0:case 15:return vt(e.type,!1);case 11:return vt(e.type.render,!1);case 1:return vt(e.type,!0);case 31:return Je("Activity");default:return""}}function Ft(e){try{var t="",n=null;do t+=Gt(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var jn=Object.prototype.hasOwnProperty,yn=a.unstable_scheduleCallback,va=a.unstable_cancelCallback,fs=a.unstable_shouldYield,vc=a.unstable_requestPaint,St=a.unstable_now,Xa=a.unstable_getCurrentPriorityLevel,Pn=a.unstable_ImmediatePriority,Bn=a.unstable_UserBlockingPriority,Za=a.unstable_NormalPriority,ms=a.unstable_LowPriority,Co=a.unstable_IdlePriority,Do=a.log,ps=a.unstable_setDisableYieldValue,On=null,bt=null;function xt(e){if(typeof Do=="function"&&ps(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(On,e)}catch{}}var ct=Math.clz32?Math.clz32:bc,ko=Math.log,jo=Math.LN2;function bc(e){return e>>>=0,e===0?32:31-(ko(e)/jo|0)|0}var qn=256,Hn=262144,Di=4194304;function $t(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ki(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,l=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~l,i!==0?r=$t(i):(m&=b,m!==0?r=$t(m):n||(n=b&~e,n!==0&&(r=$t(n))))):(b=i&~l,b!==0?r=$t(b):m!==0?r=$t(m):n||(n=i&~e,n!==0&&(r=$t(n)))),r===0?0:t!==0&&t!==r&&(t&l)===0&&(l=r&-r,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:r}function Ka(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vn(){var e=Di;return Di<<=1,(Di&62914560)===0&&(Di=4194304),e}function Oo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ba(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mo(e,t,n,i,r,l){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,U=e.expirationTimes,W=e.hiddenUpdates;for(n=m&~n;0<n;){var ie=31-ct(n),le=1<<ie;b[ie]=0,U[ie]=-1;var ee=W[ie];if(ee!==null)for(W[ie]=null,ie=0;ie<ee.length;ie++){var ne=ee[ie];ne!==null&&(ne.lane&=-536870913)}n&=~le}i!==0&&Ro(e,i,0),l!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=l&~(m&~t))}function Ro(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function zo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ct(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function hs(e,t){var n=t&-t;return n=(n&42)!==0?1:Lt(n),(n&(e.suspendedLanes|t))!==0?0:n}function Lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Io(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Ng(e.type))}function Lo(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var nn=Math.random().toString(36).slice(2),dt="__reactFiber$"+nn,nt="__reactProps$"+nn,Qn="__reactContainer$"+nn,ji="__reactEvents$"+nn,gs="__reactListeners$"+nn,ys="__reactHandles$"+nn,vs="__reactResources$"+nn,Se="__reactMarker$"+nn;function V(e){delete e[dt],delete e[nt],delete e[ji],delete e[gs],delete e[ys]}function de(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qn]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wg(e);e!==null;){if(n=e[dt])return n;e=wg(e)}return t}e=n,n=e.parentNode}return null}function he(e){if(e=e[dt]||e[Qn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ve(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function it(e){var t=e[vs];return t||(t=e[vs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[Se]=!0}var Tt=new Set,an={};function Nt(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(an[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var gt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),No={},Uo={};function Ob(e){return jn.call(Uo,e)?!0:jn.call(No,e)?!1:gt.test(e)?Uo[e]=!0:(No[e]=!0,!1)}function bs(e,t,n){if(Ob(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function xs(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Gn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function on(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function om(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mb(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){n=""+m,l.call(this,m)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xc(e){if(!e._valueTracker){var t=om(e)?"checked":"value";e._valueTracker=Mb(e,t,""+e[t])}}function rm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=om(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rb=/[\n"\\]/g;function rn(e){return e.replace(Rb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wc(e,t,n,i,r,l,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+on(t)):e.value!==""+on(t)&&(e.value=""+on(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Sc(e,m,on(t)):n!=null?Sc(e,m,on(n)):i!=null&&e.removeAttribute("value"),r==null&&l!=null&&(e.defaultChecked=!!l),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+on(b):e.removeAttribute("name")}function sm(e,t,n,i,r,l,m,b){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){xc(e);return}n=n!=null?""+on(n):"",t=t!=null?""+on(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),xc(e)}function Sc(e,t,n){t==="number"&&ws(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Oi(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function lm(e,t,n){if(t!=null&&(t=""+on(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+on(n):""}function cm(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(se(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=on(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),xc(e)}function Mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function um(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||zb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function dm(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&um(e,r,i)}else for(var l in t)t.hasOwnProperty(l)&&um(e,l,t[l])}function Tc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ib=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ss(e){return Lb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fn(){}var Ac=null;function Ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ri=null,zi=null;function fm(e){var t=he(e);if(t&&(e=t.stateNode)){var n=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(wc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+rn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[nt]||null;if(!r)throw Error(s(90));wc(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&rm(i)}break e;case"textarea":lm(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Oi(e,!!n.multiple,t,!1)}}}var _c=!1;function mm(e,t,n){if(_c)return e(t,n);_c=!0;try{var i=e(t);return i}finally{if(_c=!1,(Ri!==null||zi!==null)&&(cl(),Ri&&(t=Ri,e=zi,zi=Ri=null,fm(t),e)))for(t=0;t<e.length;t++)fm(e[t])}}function Po(e,t){var n=e.stateNode;if(n===null)return null;var i=n[nt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if($n)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Cc=!1}var xa=null,Dc=null,Ts=null;function pm(){if(Ts)return Ts;var e,t=Dc,n=t.length,i,r="value"in xa?xa.value:xa.textContent,l=r.length;for(e=0;e<n&&t[e]===r[e];e++);var m=n-e;for(i=1;i<=m&&t[n-i]===r[l-i];i++);return Ts=r.slice(e,1<i?1-i:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Es(){return!0}function hm(){return!1}function Ut(e){function t(n,i,r,l,m){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=l,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(l):l[b]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Es:hm,this.isPropagationStopped=hm,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),t}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=Ut(Wa),qo=x({},Wa,{view:0,detail:0}),Nb=Ut(qo),kc,jc,Ho,Cs=x({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ho&&(Ho&&e.type==="mousemove"?(kc=e.screenX-Ho.screenX,jc=e.screenY-Ho.screenY):jc=kc=0,Ho=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),gm=Ut(Cs),Ub=x({},Cs,{dataTransfer:0}),Pb=Ut(Ub),Bb=x({},qo,{relatedTarget:0}),Oc=Ut(Bb),qb=x({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Hb=Ut(qb),Vb=x({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qb=Ut(Vb),Gb=x({},Wa,{data:0}),ym=Ut(Gb),Fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yb[e])?!!t[e]:!1}function Mc(){return Xb}var Zb=x({},qo,{key:function(e){if(e.key){var t=Fb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$b[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kb=Ut(Zb),Wb=x({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Ut(Wb),Jb=x({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),ex=Ut(Jb),tx=x({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=Ut(tx),ax=x({},Cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=Ut(ax),ox=x({},Wa,{newState:0,oldState:0}),rx=Ut(ox),sx=[9,13,27,32],Rc=$n&&"CompositionEvent"in window,Vo=null;$n&&"documentMode"in document&&(Vo=document.documentMode);var lx=$n&&"TextEvent"in window&&!Vo,bm=$n&&(!Rc||Vo&&8<Vo&&11>=Vo),xm=" ",wm=!1;function Sm(e,t){switch(e){case"keyup":return sx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ii=!1;function cx(e,t){switch(e){case"compositionend":return Tm(t);case"keypress":return t.which!==32?null:(wm=!0,xm);case"textInput":return e=t.data,e===xm&&wm?null:e;default:return null}}function ux(e,t){if(Ii)return e==="compositionend"||!Rc&&Sm(e,t)?(e=pm(),Ts=Dc=xa=null,Ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bm&&t.locale!=="ko"?null:t.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dx[e.type]:t==="textarea"}function Em(e,t,n,i){Ri?zi?zi.push(i):zi=[i]:Ri=i,t=gl(t,"onChange"),0<t.length&&(n=new _s("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Qo=null,Go=null;function fx(e){sg(e,0)}function Ds(e){var t=Ve(e);if(rm(t))return e}function _m(e,t){if(e==="change")return t}var Cm=!1;if($n){var zc;if($n){var Ic="oninput"in document;if(!Ic){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),Ic=typeof Dm.oninput=="function"}zc=Ic}else zc=!1;Cm=zc&&(!document.documentMode||9<document.documentMode)}function km(){Qo&&(Qo.detachEvent("onpropertychange",jm),Go=Qo=null)}function jm(e){if(e.propertyName==="value"&&Ds(Go)){var t=[];Em(t,Go,e,Ec(e)),mm(fx,t)}}function mx(e,t,n){e==="focusin"?(km(),Qo=t,Go=n,Qo.attachEvent("onpropertychange",jm)):e==="focusout"&&km()}function px(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ds(Go)}function hx(e,t){if(e==="click")return Ds(t)}function gx(e,t){if(e==="input"||e==="change")return Ds(t)}function yx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:yx;function Fo(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!jn.call(t,r)||!Yt(e[r],t[r]))return!1}return!0}function Om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mm(e,t){var n=Om(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Om(n)}}function Rm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ws(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ws(e.document)}return t}function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var vx=$n&&"documentMode"in document&&11>=document.documentMode,Li=null,Nc=null,$o=null,Uc=!1;function Im(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uc||Li==null||Li!==ws(i)||(i=Li,"selectionStart"in i&&Lc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&Fo($o,i)||($o=i,i=gl(Nc,"onSelect"),0<i.length&&(t=new _s("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Li)))}function Ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ni={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Pc={},Lm={};$n&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function ei(e){if(Pc[e])return Pc[e];if(!Ni[e])return e;var t=Ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lm)return Pc[e]=t[n];return e}var Nm=ei("animationend"),Um=ei("animationiteration"),Pm=ei("animationstart"),bx=ei("transitionrun"),xx=ei("transitionstart"),wx=ei("transitioncancel"),Bm=ei("transitionend"),qm=new Map,Bc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bc.push("scrollEnd");function bn(e,t){qm.set(e,t),Nt(t,[e])}var ks=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sn=[],Ui=0,qc=0;function js(){for(var e=Ui,t=qc=Ui=0;t<e;){var n=sn[t];sn[t++]=null;var i=sn[t];sn[t++]=null;var r=sn[t];sn[t++]=null;var l=sn[t];if(sn[t++]=null,i!==null&&r!==null){var m=i.pending;m===null?r.next=r:(r.next=m.next,m.next=r),i.pending=r}l!==0&&Hm(n,r,l)}}function Os(e,t,n,i){sn[Ui++]=e,sn[Ui++]=t,sn[Ui++]=n,sn[Ui++]=i,qc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Hc(e,t,n,i){return Os(e,t,n,i),Ms(e)}function ti(e,t){return Os(e,null,null,t),Ms(e)}function Hm(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,l=e.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(r=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,r&&t!==null&&(r=31-ct(n),e=l.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),l):null}function Ms(e){if(50<hr)throw hr=0,Ku=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pi={};function Sx(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,i){return new Sx(e,t,n,i)}function Vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yn(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Vm(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Rs(e,t,n,i,r,l){var m=0;if(i=e,typeof e=="function")Vc(e)&&(m=1);else if(typeof e=="string")m=C1(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=Xt(31,n,t,r),e.elementType=F,e.lanes=l,e;case R:return ni(n.children,r,l,t);case A:m=8,r|=24;break;case z:return e=Xt(12,n,t,r|2),e.elementType=z,e.lanes=l,e;case L:return e=Xt(13,n,t,r),e.elementType=L,e.lanes=l,e;case B:return e=Xt(19,n,t,r),e.elementType=B,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:m=10;break e;case M:m=9;break e;case E:m=11;break e;case Q:m=14;break e;case j:m=16,i=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=Xt(m,n,t,r),t.elementType=e,t.type=i,t.lanes=l,t}function ni(e,t,n,i){return e=Xt(7,e,i,t),e.lanes=n,e}function Qc(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function Qm(e){var t=Xt(18,null,null,0);return t.stateNode=e,t}function Gc(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gm=new WeakMap;function ln(e,t){if(typeof e=="object"&&e!==null){var n=Gm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ft(t)},Gm.set(e,t),t)}return{value:e,source:t,stack:Ft(t)}}var Bi=[],qi=0,zs=null,Yo=0,cn=[],un=0,wa=null,Rn=1,zn="";function Xn(e,t){Bi[qi++]=Yo,Bi[qi++]=zs,zs=e,Yo=t}function Fm(e,t,n){cn[un++]=Rn,cn[un++]=zn,cn[un++]=wa,wa=e;var i=Rn;e=zn;var r=32-ct(i)-1;i&=~(1<<r),n+=1;var l=32-ct(t)+r;if(30<l){var m=r-r%5;l=(i&(1<<m)-1).toString(32),i>>=m,r-=m,Rn=1<<32-ct(t)+r|n<<r|i,zn=l+e}else Rn=1<<l|n<<r|i,zn=e}function Fc(e){e.return!==null&&(Xn(e,1),Fm(e,1,0))}function $c(e){for(;e===zs;)zs=Bi[--qi],Bi[qi]=null,Yo=Bi[--qi],Bi[qi]=null;for(;e===wa;)wa=cn[--un],cn[un]=null,zn=cn[--un],cn[un]=null,Rn=cn[--un],cn[un]=null}function $m(e,t){cn[un++]=Rn,cn[un++]=zn,cn[un++]=wa,Rn=t.id,zn=t.overflow,wa=e}var At=null,et=null,Pe=!1,Sa=null,dn=!1,Yc=Error(s(519));function Ta(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(ln(t,e)),Yc}function Ym(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[dt]=e,t[nt]=i,n){case"dialog":Ie("cancel",t),Ie("close",t);break;case"iframe":case"object":case"embed":Ie("load",t);break;case"video":case"audio":for(n=0;n<yr.length;n++)Ie(yr[n],t);break;case"source":Ie("error",t);break;case"img":case"image":case"link":Ie("error",t),Ie("load",t);break;case"details":Ie("toggle",t);break;case"input":Ie("invalid",t),sm(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ie("invalid",t);break;case"textarea":Ie("invalid",t),cm(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||dg(t.textContent,n)?(i.popover!=null&&(Ie("beforetoggle",t),Ie("toggle",t)),i.onScroll!=null&&Ie("scroll",t),i.onScrollEnd!=null&&Ie("scrollend",t),i.onClick!=null&&(t.onclick=Fn),t=!0):t=!1,t||Ta(e,!0)}function Xm(e){for(At=e.return;At;)switch(At.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:At=At.return}}function Hi(e){if(e!==At)return!1;if(!Pe)return Xm(e),Pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fd(e.type,e.memoizedProps)),n=!n),n&&et&&Ta(e),Xm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));et=xg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));et=xg(e)}else t===27?(t=et,Na(e.type)?(e=yd,yd=null,et=e):et=t):et=At?mn(e.stateNode.nextSibling):null;return!0}function ai(){et=At=null,Pe=!1}function Xc(){var e=Sa;return e!==null&&(Ht===null?Ht=e:Ht.push.apply(Ht,e),Sa=null),e}function Xo(e){Sa===null?Sa=[e]:Sa.push(e)}var Zc=Z(null),ii=null,Zn=null;function Aa(e,t,n){ae(Zc,t._currentValue),t._currentValue=n}function Kn(e){e._currentValue=Zc.current,ce(Zc)}function Kc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Wc(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var l=r.dependencies;if(l!==null){var m=r.child;l=l.firstContext;e:for(;l!==null;){var b=l;l=r;for(var U=0;U<t.length;U++)if(b.context===t[U]){l.lanes|=n,b=l.alternate,b!==null&&(b.lanes|=n),Kc(l.return,n,e),i||(m=null);break e}l=b.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=n,l=m.alternate,l!==null&&(l.lanes|=n),Kc(m,n,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Vi(e,t,n,i){e=null;for(var r=t,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=r.type;Yt(r.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(r===ue.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Sr):e=[Sr])}r=r.return}e!==null&&Wc(t,e,n,i),t.flags|=262144}function Is(e){for(e=e.firstContext;e!==null;){if(!Yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oi(e){ii=e,Zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Et(e){return Zm(ii,e)}function Ls(e,t){return ii===null&&oi(e),Zm(e,t)}function Zm(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zn===null){if(e===null)throw Error(s(308));Zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zn=Zn.next=t;return n}var Tx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ax=a.unstable_scheduleCallback,Ex=a.unstable_NormalPriority,ft={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new Tx,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&Ax(Ex,function(){e.controller.abort()})}var Ko=null,eu=0,Qi=0,Gi=null;function _x(e,t){if(Ko===null){var n=Ko=[];eu=0,Qi=ad(),Gi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return eu++,t.then(Km,Km),t}function Km(){if(--eu===0&&Ko!==null){Gi!==null&&(Gi.status="fulfilled");var e=Ko;Ko=null,Qi=0,Gi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Cx(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var Wm=$.S;$.S=function(e,t){Ih=St(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_x(e,t),Wm!==null&&Wm(e,t)};var ri=Z(null);function tu(){var e=ri.current;return e!==null?e:We.pooledCache}function Ns(e,t){t===null?ae(ri,ri.current):ae(ri,t.pool)}function Jm(){var e=tu();return e===null?null:{parent:ft._currentValue,pool:e}}var Fi=Error(s(460)),nu=Error(s(474)),Us=Error(s(542)),Ps={then:function(){}};function ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Fn,Fn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ap(e),e;default:if(typeof t.status=="string")t.then(Fn,Fn);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ap(e),e}throw li=t,Fi}}function si(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(li=n,Fi):n}}var li=null;function np(){if(li===null)throw Error(s(459));var e=li;return li=null,e}function ap(e){if(e===Fi||e===Us)throw Error(s(483))}var $i=null,Wo=0;function Bs(e){var t=Wo;return Wo+=1,$i===null&&($i=[]),tp($i,e,t)}function Jo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qs(e,t){throw t.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ip(e){function t(Y,G){if(e){var K=Y.deletions;K===null?(Y.deletions=[G],Y.flags|=16):K.push(G)}}function n(Y,G){if(!e)return null;for(;G!==null;)t(Y,G),G=G.sibling;return null}function i(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function r(Y,G){return Y=Yn(Y,G),Y.index=0,Y.sibling=null,Y}function l(Y,G,K){return Y.index=K,e?(K=Y.alternate,K!==null?(K=K.index,K<G?(Y.flags|=67108866,G):K):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function m(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,G,K,re){return G===null||G.tag!==6?(G=Qc(K,Y.mode,re),G.return=Y,G):(G=r(G,K),G.return=Y,G)}function U(Y,G,K,re){var _e=K.type;return _e===R?ie(Y,G,K.props.children,re,K.key):G!==null&&(G.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===j&&si(_e)===G.type)?(G=r(G,K.props),Jo(G,K),G.return=Y,G):(G=Rs(K.type,K.key,K.props,null,Y.mode,re),Jo(G,K),G.return=Y,G)}function W(Y,G,K,re){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Gc(K,Y.mode,re),G.return=Y,G):(G=r(G,K.children||[]),G.return=Y,G)}function ie(Y,G,K,re,_e){return G===null||G.tag!==7?(G=ni(K,Y.mode,re,_e),G.return=Y,G):(G=r(G,K),G.return=Y,G)}function le(Y,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Qc(""+G,Y.mode,K),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return K=Rs(G.type,G.key,G.props,null,Y.mode,K),Jo(K,G),K.return=Y,K;case C:return G=Gc(G,Y.mode,K),G.return=Y,G;case j:return G=si(G),le(Y,G,K)}if(se(G)||I(G))return G=ni(G,Y.mode,K,null),G.return=Y,G;if(typeof G.then=="function")return le(Y,Bs(G),K);if(G.$$typeof===w)return le(Y,Ls(Y,G),K);qs(Y,G)}return null}function ee(Y,G,K,re){var _e=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return _e!==null?null:b(Y,G,""+K,re);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case D:return K.key===_e?U(Y,G,K,re):null;case C:return K.key===_e?W(Y,G,K,re):null;case j:return K=si(K),ee(Y,G,K,re)}if(se(K)||I(K))return _e!==null?null:ie(Y,G,K,re,null);if(typeof K.then=="function")return ee(Y,G,Bs(K),re);if(K.$$typeof===w)return ee(Y,G,Ls(Y,K),re);qs(Y,K)}return null}function ne(Y,G,K,re,_e){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return Y=Y.get(K)||null,b(G,Y,""+re,_e);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case D:return Y=Y.get(re.key===null?K:re.key)||null,U(G,Y,re,_e);case C:return Y=Y.get(re.key===null?K:re.key)||null,W(G,Y,re,_e);case j:return re=si(re),ne(Y,G,K,re,_e)}if(se(re)||I(re))return Y=Y.get(K)||null,ie(G,Y,re,_e,null);if(typeof re.then=="function")return ne(Y,G,K,Bs(re),_e);if(re.$$typeof===w)return ne(Y,G,K,Ls(G,re),_e);qs(G,re)}return null}function ge(Y,G,K,re){for(var _e=null,Be=null,Te=G,Oe=G=0,Ue=null;Te!==null&&Oe<K.length;Oe++){Te.index>Oe?(Ue=Te,Te=null):Ue=Te.sibling;var qe=ee(Y,Te,K[Oe],re);if(qe===null){Te===null&&(Te=Ue);break}e&&Te&&qe.alternate===null&&t(Y,Te),G=l(qe,G,Oe),Be===null?_e=qe:Be.sibling=qe,Be=qe,Te=Ue}if(Oe===K.length)return n(Y,Te),Pe&&Xn(Y,Oe),_e;if(Te===null){for(;Oe<K.length;Oe++)Te=le(Y,K[Oe],re),Te!==null&&(G=l(Te,G,Oe),Be===null?_e=Te:Be.sibling=Te,Be=Te);return Pe&&Xn(Y,Oe),_e}for(Te=i(Te);Oe<K.length;Oe++)Ue=ne(Te,Y,Oe,K[Oe],re),Ue!==null&&(e&&Ue.alternate!==null&&Te.delete(Ue.key===null?Oe:Ue.key),G=l(Ue,G,Oe),Be===null?_e=Ue:Be.sibling=Ue,Be=Ue);return e&&Te.forEach(function(Ha){return t(Y,Ha)}),Pe&&Xn(Y,Oe),_e}function De(Y,G,K,re){if(K==null)throw Error(s(151));for(var _e=null,Be=null,Te=G,Oe=G=0,Ue=null,qe=K.next();Te!==null&&!qe.done;Oe++,qe=K.next()){Te.index>Oe?(Ue=Te,Te=null):Ue=Te.sibling;var Ha=ee(Y,Te,qe.value,re);if(Ha===null){Te===null&&(Te=Ue);break}e&&Te&&Ha.alternate===null&&t(Y,Te),G=l(Ha,G,Oe),Be===null?_e=Ha:Be.sibling=Ha,Be=Ha,Te=Ue}if(qe.done)return n(Y,Te),Pe&&Xn(Y,Oe),_e;if(Te===null){for(;!qe.done;Oe++,qe=K.next())qe=le(Y,qe.value,re),qe!==null&&(G=l(qe,G,Oe),Be===null?_e=qe:Be.sibling=qe,Be=qe);return Pe&&Xn(Y,Oe),_e}for(Te=i(Te);!qe.done;Oe++,qe=K.next())qe=ne(Te,Y,Oe,qe.value,re),qe!==null&&(e&&qe.alternate!==null&&Te.delete(qe.key===null?Oe:qe.key),G=l(qe,G,Oe),Be===null?_e=qe:Be.sibling=qe,Be=qe);return e&&Te.forEach(function(U1){return t(Y,U1)}),Pe&&Xn(Y,Oe),_e}function Ye(Y,G,K,re){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case D:e:{for(var _e=K.key;G!==null;){if(G.key===_e){if(_e=K.type,_e===R){if(G.tag===7){n(Y,G.sibling),re=r(G,K.props.children),re.return=Y,Y=re;break e}}else if(G.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===j&&si(_e)===G.type){n(Y,G.sibling),re=r(G,K.props),Jo(re,K),re.return=Y,Y=re;break e}n(Y,G);break}else t(Y,G);G=G.sibling}K.type===R?(re=ni(K.props.children,Y.mode,re,K.key),re.return=Y,Y=re):(re=Rs(K.type,K.key,K.props,null,Y.mode,re),Jo(re,K),re.return=Y,Y=re)}return m(Y);case C:e:{for(_e=K.key;G!==null;){if(G.key===_e)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){n(Y,G.sibling),re=r(G,K.children||[]),re.return=Y,Y=re;break e}else{n(Y,G);break}else t(Y,G);G=G.sibling}re=Gc(K,Y.mode,re),re.return=Y,Y=re}return m(Y);case j:return K=si(K),Ye(Y,G,K,re)}if(se(K))return ge(Y,G,K,re);if(I(K)){if(_e=I(K),typeof _e!="function")throw Error(s(150));return K=_e.call(K),De(Y,G,K,re)}if(typeof K.then=="function")return Ye(Y,G,Bs(K),re);if(K.$$typeof===w)return Ye(Y,G,Ls(Y,K),re);qs(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(n(Y,G.sibling),re=r(G,K),re.return=Y,Y=re):(n(Y,G),re=Qc(K,Y.mode,re),re.return=Y,Y=re),m(Y)):n(Y,G)}return function(Y,G,K,re){try{Wo=0;var _e=Ye(Y,G,K,re);return $i=null,_e}catch(Te){if(Te===Fi||Te===Us)throw Te;var Be=Xt(29,Te,null,Y.mode);return Be.lanes=re,Be.return=Y,Be}finally{}}}var ci=ip(!0),op=ip(!1),Ea=!1;function au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(He&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Ms(e),Hm(e,null,n),t}return Os(e,i,t,n),Ms(e)}function er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,zo(e,n)}}function ou(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?r=l=m:l=l.next=m,n=n.next}while(n!==null);l===null?r=l=t:l=l.next=t}else r=l=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ru=!1;function tr(){if(ru){var e=Gi;if(e!==null)throw e}}function nr(e,t,n,i){ru=!1;var r=e.updateQueue;Ea=!1;var l=r.firstBaseUpdate,m=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var U=b,W=U.next;U.next=null,m===null?l=W:m.next=W,m=U;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,b=ie.lastBaseUpdate,b!==m&&(b===null?ie.firstBaseUpdate=W:b.next=W,ie.lastBaseUpdate=U))}if(l!==null){var le=r.baseState;m=0,ie=W=U=null,b=l;do{var ee=b.lane&-536870913,ne=ee!==b.lane;if(ne?(Ne&ee)===ee:(i&ee)===ee){ee!==0&&ee===Qi&&(ru=!0),ie!==null&&(ie=ie.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ge=e,De=b;ee=t;var Ye=n;switch(De.tag){case 1:if(ge=De.payload,typeof ge=="function"){le=ge.call(Ye,le,ee);break e}le=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=De.payload,ee=typeof ge=="function"?ge.call(Ye,le,ee):ge,ee==null)break e;le=x({},le,ee);break e;case 2:Ea=!0}}ee=b.callback,ee!==null&&(e.flags|=64,ne&&(e.flags|=8192),ne=r.callbacks,ne===null?r.callbacks=[ee]:ne.push(ee))}else ne={lane:ee,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ie===null?(W=ie=ne,U=le):ie=ie.next=ne,m|=ee;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;ne=b,b=ne.next,ne.next=null,r.lastBaseUpdate=ne,r.shared.pending=null}}while(!0);ie===null&&(U=le),r.baseState=U,r.firstBaseUpdate=W,r.lastBaseUpdate=ie,l===null&&(r.shared.lanes=0),Ma|=m,e.lanes=m,e.memoizedState=le}}function rp(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function sp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)rp(n[e],t)}var Yi=Z(null),Hs=Z(0);function lp(e,t){e=ra,ae(Hs,e),ae(Yi,t),ra=e|t.baseLanes}function su(){ae(Hs,ra),ae(Yi,Yi.current)}function lu(){ra=Hs.current,ce(Yi),ce(Hs)}var Zt=Z(null),fn=null;function Da(e){var t=e.alternate;ae(st,st.current&1),ae(Zt,e),fn===null&&(t===null||Yi.current!==null||t.memoizedState!==null)&&(fn=e)}function cu(e){ae(st,st.current),ae(Zt,e),fn===null&&(fn=e)}function cp(e){e.tag===22?(ae(st,st.current),ae(Zt,e),fn===null&&(fn=e)):ka()}function ka(){ae(st,st.current),ae(Zt,Zt.current)}function Kt(e){ce(Zt),fn===e&&(fn=null),ce(st)}var st=Z(0);function Vs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hd(n)||gd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wn=0,je=null,Fe=null,mt=null,Qs=!1,Xi=!1,ui=!1,Gs=0,ar=0,Zi=null,Dx=0;function ot(){throw Error(s(321))}function uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yt(e[n],t[n]))return!1;return!0}function du(e,t,n,i,r,l){return Wn=l,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$.H=e===null||e.memoizedState===null?Fp:_u,ui=!1,l=n(i,r),ui=!1,Xi&&(l=dp(t,n,i,r)),up(e),l}function up(e){$.H=rr;var t=Fe!==null&&Fe.next!==null;if(Wn=0,mt=Fe=je=null,Qs=!1,ar=0,Zi=null,t)throw Error(s(300));e===null||pt||(e=e.dependencies,e!==null&&Is(e)&&(pt=!0))}function dp(e,t,n,i){je=e;var r=0;do{if(Xi&&(Zi=null),ar=0,Xi=!1,25<=r)throw Error(s(301));if(r+=1,mt=Fe=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}$.H=$p,l=t(n,i)}while(Xi);return l}function kx(){var e=$.H,t=e.useState()[0];return t=typeof t.then=="function"?ir(t):t,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(je.flags|=1024),t}function fu(){var e=Gs!==0;return Gs=0,e}function mu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function pu(e){if(Qs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qs=!1}Wn=0,mt=Fe=je=null,Xi=!1,ar=Gs=0,Zi=null}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?je.memoizedState=mt=e:mt=mt.next=e,mt}function lt(){if(Fe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=mt===null?je.memoizedState:mt.next;if(t!==null)mt=t,Fe=e;else{if(e===null)throw je.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},mt===null?je.memoizedState=mt=e:mt=mt.next=e}return mt}function Fs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ir(e){var t=ar;return ar+=1,Zi===null&&(Zi=[]),e=tp(Zi,e,t),t=je,(mt===null?t.memoizedState:mt.next)===null&&(t=t.alternate,$.H=t===null||t.memoizedState===null?Fp:_u),e}function $s(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ir(e);if(e.$$typeof===w)return Et(e)}throw Error(s(438,String(e)))}function hu(e){var t=null,n=je.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=je.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Fs(),je.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=O;return t.index++,n}function Jn(e,t){return typeof t=="function"?t(e):t}function Ys(e){var t=lt();return gu(t,Fe,e)}function gu(e,t,n){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var r=e.baseQueue,l=i.pending;if(l!==null){if(r!==null){var m=r.next;r.next=l.next,l.next=m}t.baseQueue=r=l,i.pending=null}if(l=e.baseState,r===null)e.memoizedState=l;else{t=r.next;var b=m=null,U=null,W=t,ie=!1;do{var le=W.lane&-536870913;if(le!==W.lane?(Ne&le)===le:(Wn&le)===le){var ee=W.revertLane;if(ee===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),le===Qi&&(ie=!0);else if((Wn&ee)===ee){W=W.next,ee===Qi&&(ie=!0);continue}else le={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},U===null?(b=U=le,m=l):U=U.next=le,je.lanes|=ee,Ma|=ee;le=W.action,ui&&n(l,le),l=W.hasEagerState?W.eagerState:n(l,le)}else ee={lane:le,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},U===null?(b=U=ee,m=l):U=U.next=ee,je.lanes|=le,Ma|=le;W=W.next}while(W!==null&&W!==t);if(U===null?m=l:U.next=b,!Yt(l,e.memoizedState)&&(pt=!0,ie&&(n=Gi,n!==null)))throw n;e.memoizedState=l,e.baseState=m,e.baseQueue=U,i.lastRenderedState=l}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function yu(e){var t=lt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,l=t.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do l=e(l,m.action),m=m.next;while(m!==r);Yt(l,t.memoizedState)||(pt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function fp(e,t,n){var i=je,r=lt(),l=Pe;if(l){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!Yt((Fe||r).memoizedState,n);if(m&&(r.memoizedState=n,pt=!0),r=r.queue,xu(hp.bind(null,i,r,e),[e]),r.getSnapshot!==t||m||mt!==null&&mt.memoizedState.tag&1){if(i.flags|=2048,Ki(9,{destroy:void 0},pp.bind(null,i,r,n,t),null),We===null)throw Error(s(349));l||(Wn&127)!==0||mp(i,t,n)}return n}function mp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t=Fs(),je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pp(e,t,n,i){t.value=n,t.getSnapshot=i,gp(t)&&yp(e)}function hp(e,t,n){return n(function(){gp(t)&&yp(e)})}function gp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yt(e,n)}catch{return!0}}function yp(e){var t=ti(e,2);t!==null&&Vt(t,e,2)}function vu(e){var t=Ot();if(typeof e=="function"){var n=e;if(e=n(),ui){xt(!0);try{n()}finally{xt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t}function vp(e,t,n,i){return e.baseState=n,gu(e,Fe,typeof i=="function"?i:Jn)}function jx(e,t,n,i,r){if(Ks(e))throw Error(s(485));if(e=t.action,e!==null){var l={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){l.listeners.push(m)}};$.T!==null?n(!0):l.isTransition=!1,i(l),n=t.pending,n===null?(l.next=t.pending=l,bp(t,l)):(l.next=n.next,t.pending=n.next=l)}}function bp(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var l=$.T,m={};$.T=m;try{var b=n(r,i),U=$.S;U!==null&&U(m,b),xp(e,t,b)}catch(W){bu(e,t,W)}finally{l!==null&&m.types!==null&&(l.types=m.types),$.T=l}}else try{l=n(r,i),xp(e,t,l)}catch(W){bu(e,t,W)}}function xp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){wp(e,t,i)},function(i){return bu(e,t,i)}):wp(e,t,n)}function wp(e,t,n){t.status="fulfilled",t.value=n,Sp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bp(e,n)))}function bu(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Sp(t),t=t.next;while(t!==i)}e.action=null}function Sp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tp(e,t){return t}function Ap(e,t){if(Pe){var n=We.formState;if(n!==null){e:{var i=je;if(Pe){if(et){t:{for(var r=et,l=dn;r.nodeType!==8;){if(!l){r=null;break t}if(r=mn(r.nextSibling),r===null){r=null;break t}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){et=mn(r.nextSibling),i=r.data==="F!";break e}}Ta(i)}i=!1}i&&(t=n[0])}}return n=Ot(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:t},n.queue=i,n=Vp.bind(null,je,i),i.dispatch=n,i=vu(!1),l=Eu.bind(null,je,!1,i.queue),i=Ot(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=jx.bind(null,je,r,l,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ep(e){var t=lt();return _p(t,Fe,e)}function _p(e,t,n){if(t=gu(e,t,Tp)[0],e=Ys(Jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ir(t)}catch(m){throw m===Fi?Us:m}else i=t;t=lt();var r=t.queue,l=r.dispatch;return n!==t.memoizedState&&(je.flags|=2048,Ki(9,{destroy:void 0},Ox.bind(null,r,n),null)),[i,l,e]}function Ox(e,t){e.action=t}function Cp(e){var t=lt(),n=Fe;if(n!==null)return _p(t,n,e);lt(),t=t.memoizedState,n=lt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ki(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=je.updateQueue,t===null&&(t=Fs(),je.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Dp(){return lt().memoizedState}function Xs(e,t,n,i){var r=Ot();je.flags|=e,r.memoizedState=Ki(1|t,{destroy:void 0},n,i===void 0?null:i)}function Zs(e,t,n,i){var r=lt();i=i===void 0?null:i;var l=r.memoizedState.inst;Fe!==null&&i!==null&&uu(i,Fe.memoizedState.deps)?r.memoizedState=Ki(t,l,n,i):(je.flags|=e,r.memoizedState=Ki(1|t,l,n,i))}function kp(e,t){Xs(8390656,8,e,t)}function xu(e,t){Zs(2048,8,e,t)}function Mx(e){je.flags|=4;var t=je.updateQueue;if(t===null)t=Fs(),je.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function jp(e){var t=lt().memoizedState;return Mx({ref:t,nextImpl:e}),function(){if((He&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Op(e,t){return Zs(4,2,e,t)}function Mp(e,t){return Zs(4,4,e,t)}function Rp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zp(e,t,n){n=n!=null?n.concat([e]):null,Zs(4,4,Rp.bind(null,t,e),n)}function wu(){}function Ip(e,t){var n=lt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&uu(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Lp(e,t){var n=lt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&uu(t,i[1]))return i[0];if(i=e(),ui){xt(!0);try{e()}finally{xt(!1)}}return n.memoizedState=[i,t],i}function Su(e,t,n){return n===void 0||(Wn&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Nh(),je.lanes|=e,Ma|=e,n)}function Np(e,t,n,i){return Yt(n,t)?n:Yi.current!==null?(e=Su(e,n,i),Yt(e,t)||(pt=!0),e):(Wn&42)===0||(Wn&1073741824)!==0&&(Ne&261930)===0?(pt=!0,e.memoizedState=n):(e=Nh(),je.lanes|=e,Ma|=e,t)}function Up(e,t,n,i,r){var l=H.p;H.p=l!==0&&8>l?l:8;var m=$.T,b={};$.T=b,Eu(e,!1,t,n);try{var U=r(),W=$.S;if(W!==null&&W(b,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var ie=Cx(U,i);or(e,t,ie,en())}else or(e,t,i,en())}catch(le){or(e,t,{then:function(){},status:"rejected",reason:le},en())}finally{H.p=l,m!==null&&b.types!==null&&(m.types=b.types),$.T=m}}function Rx(){}function Tu(e,t,n,i){if(e.tag!==5)throw Error(s(476));var r=Pp(e).queue;Up(e,r,t,N,n===null?Rx:function(){return Bp(e),n(i)})}function Pp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:N},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bp(e){var t=Pp(e);t.next===null&&(t=e.alternate.memoizedState),or(e,t.next.queue,{},en())}function Au(){return Et(Sr)}function qp(){return lt().memoizedState}function Hp(){return lt().memoizedState}function zx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=en();e=_a(n);var i=Ca(t,e,n);i!==null&&(Vt(i,t,n),er(i,t,n)),t={cache:Jc()},e.payload=t;return}t=t.return}}function Ix(e,t,n){var i=en();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ks(e)?Qp(t,n):(n=Hc(e,t,n,i),n!==null&&(Vt(n,e,i),Gp(n,t,i)))}function Vp(e,t,n){var i=en();or(e,t,n,i)}function or(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ks(e))Qp(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var m=t.lastRenderedState,b=l(m,n);if(r.hasEagerState=!0,r.eagerState=b,Yt(b,m))return Os(e,t,r,0),We===null&&js(),!1}catch{}finally{}if(n=Hc(e,t,r,i),n!==null)return Vt(n,e,i),Gp(n,t,i),!0}return!1}function Eu(e,t,n,i){if(i={lane:2,revertLane:ad(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ks(e)){if(t)throw Error(s(479))}else t=Hc(e,n,i,2),t!==null&&Vt(t,e,2)}function Ks(e){var t=e.alternate;return e===je||t!==null&&t===je}function Qp(e,t){Xi=Qs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gp(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,zo(e,n)}}var rr={readContext:Et,use:$s,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};rr.useEffectEvent=ot;var Fp={readContext:Et,use:$s,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:kp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xs(4194308,4,Rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){Xs(4,2,e,t)},useMemo:function(e,t){var n=Ot();t=t===void 0?null:t;var i=e();if(ui){xt(!0);try{e()}finally{xt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Ot();if(n!==void 0){var r=n(t);if(ui){xt(!0);try{n(t)}finally{xt(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Ix.bind(null,je,e),[i.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:function(e){e=vu(e);var t=e.queue,n=Vp.bind(null,je,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wu,useDeferredValue:function(e,t){var n=Ot();return Su(n,e,t)},useTransition:function(){var e=vu(!1);return e=Up.bind(null,je,e.queue,!0,!1),Ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=je,r=Ot();if(Pe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),We===null)throw Error(s(349));(Ne&127)!==0||mp(i,t,n)}r.memoizedState=n;var l={value:n,getSnapshot:t};return r.queue=l,kp(hp.bind(null,i,l,e),[e]),i.flags|=2048,Ki(9,{destroy:void 0},pp.bind(null,i,l,n,t),null),n},useId:function(){var e=Ot(),t=We.identifierPrefix;if(Pe){var n=zn,i=Rn;n=(i&~(1<<32-ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Gs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Dx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Au,useFormState:Ap,useActionState:Ap,useOptimistic:function(e){var t=Ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Eu.bind(null,je,!0,n),n.dispatch=t,[e,t]},useMemoCache:hu,useCacheRefresh:function(){return Ot().memoizedState=zx.bind(null,je)},useEffectEvent:function(e){var t=Ot(),n={impl:e};return t.memoizedState=n,function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},_u={readContext:Et,use:$s,useCallback:Ip,useContext:Et,useEffect:xu,useImperativeHandle:zp,useInsertionEffect:Op,useLayoutEffect:Mp,useMemo:Lp,useReducer:Ys,useRef:Dp,useState:function(){return Ys(Jn)},useDebugValue:wu,useDeferredValue:function(e,t){var n=lt();return Np(n,Fe.memoizedState,e,t)},useTransition:function(){var e=Ys(Jn)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:ir(e),t]},useSyncExternalStore:fp,useId:qp,useHostTransitionStatus:Au,useFormState:Ep,useActionState:Ep,useOptimistic:function(e,t){var n=lt();return vp(n,Fe,e,t)},useMemoCache:hu,useCacheRefresh:Hp};_u.useEffectEvent=jp;var $p={readContext:Et,use:$s,useCallback:Ip,useContext:Et,useEffect:xu,useImperativeHandle:zp,useInsertionEffect:Op,useLayoutEffect:Mp,useMemo:Lp,useReducer:yu,useRef:Dp,useState:function(){return yu(Jn)},useDebugValue:wu,useDeferredValue:function(e,t){var n=lt();return Fe===null?Su(n,e,t):Np(n,Fe.memoizedState,e,t)},useTransition:function(){var e=yu(Jn)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:ir(e),t]},useSyncExternalStore:fp,useId:qp,useHostTransitionStatus:Au,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,t){var n=lt();return Fe!==null?vp(n,Fe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hu,useCacheRefresh:Hp};$p.useEffectEvent=jp;function Cu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Du={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=en(),r=_a(i);r.payload=t,n!=null&&(r.callback=n),t=Ca(e,r,i),t!==null&&(Vt(t,e,i),er(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=en(),r=_a(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Ca(e,r,i),t!==null&&(Vt(t,e,i),er(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=en(),i=_a(n);i.tag=2,t!=null&&(i.callback=t),t=Ca(e,i,n),t!==null&&(Vt(t,e,n),er(t,e,n))}};function Yp(e,t,n,i,r,l,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,m):t.prototype&&t.prototype.isPureReactComponent?!Fo(n,i)||!Fo(r,l):!0}function Xp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Du.enqueueReplaceState(t,t.state,null)}function di(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Zp(e){ks(e)}function Kp(e){console.error(e)}function Wp(e){ks(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Jp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ku(e,t,n){return n=_a(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function eh(e){return e=_a(e),e.tag=3,e}function th(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var l=i.value;e.payload=function(){return r(l)},e.callback=function(){Jp(t,n,i)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Jp(t,n,i),typeof r!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Lx(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Vi(t,n,r,!0),n=Zt.current,n!==null){switch(n.tag){case 31:case 13:return fn===null?ul():n.alternate===null&&rt===0&&(rt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Ps?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ed(e,i,r)),!1;case 22:return n.flags|=65536,i===Ps?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ed(e,i,r)),!1}throw Error(s(435,n.tag))}return ed(e,i,r),ul(),!1}if(Pe)return t=Zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Yc&&(e=Error(s(422),{cause:i}),Xo(ln(e,n)))):(i!==Yc&&(t=Error(s(423),{cause:i}),Xo(ln(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=ln(i,n),r=ku(e.stateNode,i,r),ou(e,r),rt!==4&&(rt=2)),!1;var l=Error(s(520),{cause:i});if(l=ln(l,n),pr===null?pr=[l]:pr.push(l),rt!==4&&(rt=2),t===null)return!0;i=ln(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ku(n.stateNode,i,e),ou(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Ra===null||!Ra.has(l))))return n.flags|=65536,r&=-r,n.lanes|=r,r=eh(r),th(r,e,n,i),ou(n,r),!1}n=n.return}while(n!==null);return!1}var ju=Error(s(461)),pt=!1;function _t(e,t,n,i){t.child=e===null?op(t,null,n,i):ci(t,e.child,n,i)}function nh(e,t,n,i,r){n=n.render;var l=t.ref;if("ref"in i){var m={};for(var b in i)b!=="ref"&&(m[b]=i[b])}else m=i;return oi(t),i=du(e,t,n,m,l,r),b=fu(),e!==null&&!pt?(mu(e,t,r),ea(e,t,r)):(Pe&&b&&Fc(t),t.flags|=1,_t(e,t,i,r),t.child)}function ah(e,t,n,i,r){if(e===null){var l=n.type;return typeof l=="function"&&!Vc(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,ih(e,t,l,i,r)):(e=Rs(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Uu(e,r)){var m=l.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(m,i)&&e.ref===t.ref)return ea(e,t,r)}return t.flags|=1,e=Yn(l,i),e.ref=t.ref,e.return=t,t.child=e}function ih(e,t,n,i,r){if(e!==null){var l=e.memoizedProps;if(Fo(l,i)&&e.ref===t.ref)if(pt=!1,t.pendingProps=i=l,Uu(e,r))(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,ea(e,t,r)}return Ou(e,t,n,i,r)}function oh(e,t,n,i){var r=i.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~l}else i=0,t.child=null;return rh(e,t,l,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ns(t,l!==null?l.cachePool:null),l!==null?lp(t,l):su(),cp(t);else return i=t.lanes=536870912,rh(e,t,l!==null?l.baseLanes|n:n,n,i)}else l!==null?(Ns(t,l.cachePool),lp(t,l),ka(),t.memoizedState=null):(e!==null&&Ns(t,null),su(),ka());return _t(e,t,r,n),t.child}function sr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function rh(e,t,n,i,r){var l=tu();return l=l===null?null:{parent:ft._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Ns(t,null),su(),cp(t),e!==null&&Vi(e,t,i,!0),t.childLanes=r,null}function Js(e,t){return t=tl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sh(e,t,n){return ci(t,e.child,null,n),e=Js(t,t.pendingProps),e.flags|=2,Kt(t),t.memoizedState=null,e}function Nx(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Pe){if(i.mode==="hidden")return e=Js(t,i),t.lanes=536870912,sr(null,e);if(cu(t),(e=et)?(e=bg(e,dn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Rn,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=Qm(e),n.return=t,t.child=n,At=t,et=null)):e=null,e===null)throw Ta(t);return t.lanes=536870912,null}return Js(t,i)}var l=e.memoizedState;if(l!==null){var m=l.dehydrated;if(cu(t),r)if(t.flags&256)t.flags&=-257,t=sh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(pt||Vi(e,t,n,!1),r=(n&e.childLanes)!==0,pt||r){if(i=We,i!==null&&(m=hs(i,n),m!==0&&m!==l.retryLane))throw l.retryLane=m,ti(e,m),Vt(i,e,m),ju;ul(),t=sh(e,t,n)}else e=l.treeContext,et=mn(m.nextSibling),At=t,Pe=!0,Sa=null,dn=!1,e!==null&&$m(t,e),t=Js(t,i),t.flags|=4096;return t}return e=Yn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function el(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ou(e,t,n,i,r){return oi(t),n=du(e,t,n,i,void 0,r),i=fu(),e!==null&&!pt?(mu(e,t,r),ea(e,t,r)):(Pe&&i&&Fc(t),t.flags|=1,_t(e,t,n,r),t.child)}function lh(e,t,n,i,r,l){return oi(t),t.updateQueue=null,n=dp(t,i,n,r),up(e),i=fu(),e!==null&&!pt?(mu(e,t,l),ea(e,t,l)):(Pe&&i&&Fc(t),t.flags|=1,_t(e,t,n,l),t.child)}function ch(e,t,n,i,r){if(oi(t),t.stateNode===null){var l=Pi,m=n.contextType;typeof m=="object"&&m!==null&&(l=Et(m)),l=new n(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Du,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},au(t),m=n.contextType,l.context=typeof m=="object"&&m!==null?Et(m):Pi,l.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Cu(t,n,m,i),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(m=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),m!==l.state&&Du.enqueueReplaceState(l,l.state,null),nr(t,i,l,r),tr(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var b=t.memoizedProps,U=di(n,b);l.props=U;var W=l.context,ie=n.contextType;m=Pi,typeof ie=="object"&&ie!==null&&(m=Et(ie));var le=n.getDerivedStateFromProps;ie=typeof le=="function"||typeof l.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,ie||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(b||W!==m)&&Xp(t,l,i,m),Ea=!1;var ee=t.memoizedState;l.state=ee,nr(t,i,l,r),tr(),W=t.memoizedState,b||ee!==W||Ea?(typeof le=="function"&&(Cu(t,n,le,i),W=t.memoizedState),(U=Ea||Yp(t,n,U,i,ee,W,m))?(ie||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=W),l.props=i,l.state=W,l.context=m,i=U):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,iu(e,t),m=t.memoizedProps,ie=di(n,m),l.props=ie,le=t.pendingProps,ee=l.context,W=n.contextType,U=Pi,typeof W=="object"&&W!==null&&(U=Et(W)),b=n.getDerivedStateFromProps,(W=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(m!==le||ee!==U)&&Xp(t,l,i,U),Ea=!1,ee=t.memoizedState,l.state=ee,nr(t,i,l,r),tr();var ne=t.memoizedState;m!==le||ee!==ne||Ea||e!==null&&e.dependencies!==null&&Is(e.dependencies)?(typeof b=="function"&&(Cu(t,n,b,i),ne=t.memoizedState),(ie=Ea||Yp(t,n,ie,i,ee,ne,U)||e!==null&&e.dependencies!==null&&Is(e.dependencies))?(W||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,ne,U),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,ne,U)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||m===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=ne),l.props=i,l.state=ne,l.context=U,i=ie):(typeof l.componentDidUpdate!="function"||m===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,el(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=ci(t,e.child,null,r),t.child=ci(t,null,n,r)):_t(e,t,n,r),t.memoizedState=l.state,e=t.child):e=ea(e,t,r),e}function uh(e,t,n,i){return ai(),t.flags|=256,_t(e,t,n,i),t.child}var Mu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:Jm()}}function zu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Jt),e}function dh(e,t,n){var i=t.pendingProps,r=!1,l=(t.flags&128)!==0,m;if((m=l)||(m=e!==null&&e.memoizedState===null?!1:(st.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Pe){if(r?Da(t):ka(),(e=et)?(e=bg(e,dn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Rn,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=Qm(e),n.return=t,t.child=n,At=t,et=null)):e=null,e===null)throw Ta(t);return gd(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,r?(ka(),r=t.mode,b=tl({mode:"hidden",children:b},r),i=ni(i,r,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=Ru(n),i.childLanes=zu(e,m,n),t.memoizedState=Mu,sr(null,i)):(Da(t),Iu(t,b))}var U=e.memoizedState;if(U!==null&&(b=U.dehydrated,b!==null)){if(l)t.flags&256?(Da(t),t.flags&=-257,t=Lu(e,t,n)):t.memoizedState!==null?(ka(),t.child=e.child,t.flags|=128,t=null):(ka(),b=i.fallback,r=t.mode,i=tl({mode:"visible",children:i.children},r),b=ni(b,r,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,ci(t,e.child,null,n),i=t.child,i.memoizedState=Ru(n),i.childLanes=zu(e,m,n),t.memoizedState=Mu,t=sr(null,i));else if(Da(t),gd(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var W=m.dgst;m=W,i=Error(s(419)),i.stack="",i.digest=m,Xo({value:i,source:null,stack:null}),t=Lu(e,t,n)}else if(pt||Vi(e,t,n,!1),m=(n&e.childLanes)!==0,pt||m){if(m=We,m!==null&&(i=hs(m,n),i!==0&&i!==U.retryLane))throw U.retryLane=i,ti(e,i),Vt(m,e,i),ju;hd(b)||ul(),t=Lu(e,t,n)}else hd(b)?(t.flags|=192,t.child=e.child,t=null):(e=U.treeContext,et=mn(b.nextSibling),At=t,Pe=!0,Sa=null,dn=!1,e!==null&&$m(t,e),t=Iu(t,i.children),t.flags|=4096);return t}return r?(ka(),b=i.fallback,r=t.mode,U=e.child,W=U.sibling,i=Yn(U,{mode:"hidden",children:i.children}),i.subtreeFlags=U.subtreeFlags&65011712,W!==null?b=Yn(W,b):(b=ni(b,r,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,sr(null,i),i=t.child,b=e.child.memoizedState,b===null?b=Ru(n):(r=b.cachePool,r!==null?(U=ft._currentValue,r=r.parent!==U?{parent:U,pool:U}:r):r=Jm(),b={baseLanes:b.baseLanes|n,cachePool:r}),i.memoizedState=b,i.childLanes=zu(e,m,n),t.memoizedState=Mu,sr(e.child,i)):(Da(t),n=e.child,e=n.sibling,n=Yn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Iu(e,t){return t=tl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function tl(e,t){return e=Xt(22,e,null,t),e.lanes=0,e}function Lu(e,t,n){return ci(t,e.child,null,n),e=Iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Kc(e.return,t,n)}function Nu(e,t,n,i,r,l){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:l}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=n,m.tailMode=r,m.treeForkCount=l)}function mh(e,t,n){var i=t.pendingProps,r=i.revealOrder,l=i.tail;i=i.children;var m=st.current,b=(m&2)!==0;if(b?(m=m&1|2,t.flags|=128):m&=1,ae(st,m),_t(e,t,i,n),i=Pe?Yo:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fh(e,n,t);else if(e.tag===19)fh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Vs(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Nu(t,!1,r,n,l,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Vs(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Nu(t,!0,n,null,l,i);break;case"together":Nu(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ea(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Vi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Is(e)))}function Ux(e,t,n){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),Aa(t,ft,e.memoizedState.cache),ai();break;case 27:case 5:me(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:Aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cu(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Da(t),t.flags|=128,null):(n&t.child.childLanes)!==0?dh(e,t,n):(Da(t),e=ea(e,t,n),e!==null?e.sibling:null);Da(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Vi(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return mh(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ae(st,st.current),i)break;return null;case 22:return t.lanes=0,oh(e,t,n,t.pendingProps);case 24:Aa(t,ft,e.memoizedState.cache)}return ea(e,t,n)}function ph(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)pt=!0;else{if(!Uu(e,n)&&(t.flags&128)===0)return pt=!1,Ux(e,t,n);pt=(e.flags&131072)!==0}else pt=!1,Pe&&(t.flags&1048576)!==0&&Fm(t,Yo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=si(t.elementType),t.type=e,typeof e=="function")Vc(e)?(i=di(e,i),t.tag=1,t=ch(null,t,e,i,n)):(t.tag=0,t=Ou(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===E){t.tag=11,t=nh(null,t,e,i,n);break e}else if(r===Q){t.tag=14,t=ah(null,t,e,i,n);break e}}throw t=J(e)||e,Error(s(306,t,""))}}return t;case 0:return Ou(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=di(i,t.pendingProps),ch(e,t,i,r,n);case 3:e:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var l=t.memoizedState;r=l.element,iu(e,t),nr(t,i,null,n);var m=t.memoizedState;if(i=m.cache,Aa(t,ft,i),i!==l.cache&&Wc(t,[ft],n,!0),tr(),i=m.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=uh(e,t,i,n);break e}else if(i!==r){r=ln(Error(s(424)),t),Xo(r),t=uh(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(et=mn(e.firstChild),At=t,Pe=!0,Sa=null,dn=!0,n=op(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ai(),i===r){t=ea(e,t,n);break e}_t(e,t,i,n)}t=t.child}return t;case 26:return el(e,t),e===null?(n=Eg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Pe||(n=t.type,e=t.pendingProps,i=yl(fe.current).createElement(n),i[dt]=t,i[nt]=e,Ct(i,n,e),Re(i),t.stateNode=i):t.memoizedState=Eg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&Pe&&(i=t.stateNode=Sg(t.type,t.pendingProps,fe.current),At=t,dn=!0,r=et,Na(t.type)?(yd=r,et=mn(i.firstChild)):et=r),_t(e,t,t.pendingProps.children,n),el(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Pe&&((r=i=et)&&(i=p1(i,t.type,t.pendingProps,dn),i!==null?(t.stateNode=i,At=t,et=mn(i.firstChild),dn=!1,r=!0):r=!1),r||Ta(t)),me(t),r=t.type,l=t.pendingProps,m=e!==null?e.memoizedProps:null,i=l.children,fd(r,l)?i=null:m!==null&&fd(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=du(e,t,kx,null,null,n),Sr._currentValue=r),el(e,t),_t(e,t,i,n),t.child;case 6:return e===null&&Pe&&((e=n=et)&&(n=h1(n,t.pendingProps,dn),n!==null?(t.stateNode=n,At=t,et=null,e=!0):e=!1),e||Ta(t)),null;case 13:return dh(e,t,n);case 4:return Ee(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ci(t,null,i,n):_t(e,t,i,n),t.child;case 11:return nh(e,t,t.type,t.pendingProps,n);case 7:return _t(e,t,t.pendingProps,n),t.child;case 8:return _t(e,t,t.pendingProps.children,n),t.child;case 12:return _t(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Aa(t,t.type,i.value),_t(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,oi(t),r=Et(r),i=i(r),t.flags|=1,_t(e,t,i,n),t.child;case 14:return ah(e,t,t.type,t.pendingProps,n);case 15:return ih(e,t,t.type,t.pendingProps,n);case 19:return mh(e,t,n);case 31:return Nx(e,t,n);case 22:return oh(e,t,n,t.pendingProps);case 24:return oi(t),i=Et(ft),e===null?(r=tu(),r===null&&(r=We,l=Jc(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=n),r=l),t.memoizedState={parent:i,cache:r},au(t),Aa(t,ft,r)):((e.lanes&n)!==0&&(iu(e,t),nr(t,null,null,n),tr()),r=e.memoizedState,l=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Aa(t,ft,i)):(i=l.cache,Aa(t,ft,i),i!==r.cache&&Wc(t,[ft],n,!0))),_t(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function ta(e){e.flags|=4}function Pu(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(qh())e.flags|=8192;else throw li=Ps,nu}else e.flags&=-16777217}function hh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jg(t))if(qh())e.flags|=8192;else throw li=Ps,nu}function nl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vn():536870912,e.lanes|=t,to|=t)}function lr(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Px(e,t,n){var i=t.pendingProps;switch($c(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return tt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Kn(ft),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xc())),tt(t),null;case 26:var r=t.type,l=t.memoizedState;return e===null?(ta(t),l!==null?(tt(t),hh(t,l)):(tt(t),Pu(t,r,null,i,n))):l?l!==e.memoizedState?(ta(t),tt(t),hh(t,l)):(tt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ta(t),tt(t),Pu(t,r,e,i,n)),null;case 27:if(ke(t),n=fe.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ta(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return tt(t),null}e=oe.current,Hi(t)?Ym(t):(e=Sg(r,i,n),t.stateNode=e,ta(t))}return tt(t),null;case 5:if(ke(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ta(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return tt(t),null}if(l=oe.current,Hi(t))Ym(t);else{var m=yl(fe.current);switch(l){case 1:l=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=m.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?m.createElement("select",{is:i.is}):m.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?m.createElement(r,{is:i.is}):m.createElement(r)}}l[dt]=t,l[nt]=i;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)l.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=l;e:switch(Ct(l,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ta(t)}}return tt(t),Pu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ta(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=fe.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=At,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||dg(e.nodeValue,n)),e||Ta(t,!0)}else e=yl(e).createTextNode(i),e[dt]=t,t.stateNode=e}return tt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Hi(t),n!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[dt]=t}else ai(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),e=!1}else n=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Kt(t),t):(Kt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return tt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Hi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[dt]=t}else ai(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),r=!1}else r=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Kt(t),t):(Kt(t),null)}return Kt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),nl(t,t.updateQueue),tt(t),null);case 4:return xe(),e===null&&sd(t.stateNode.containerInfo),tt(t),null;case 10:return Kn(t.type),tt(t),null;case 19:if(ce(st),i=t.memoizedState,i===null)return tt(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)lr(i,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Vs(e),l!==null){for(t.flags|=128,lr(i,!1),e=l.updateQueue,t.updateQueue=e,nl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Vm(n,e),n=n.sibling;return ae(st,st.current&1|2),Pe&&Xn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&St()>sl&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Vs(l),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,nl(t,e),lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Pe)return tt(t),null}else 2*St()-i.renderingStartTime>sl&&n!==536870912&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=St(),e.sibling=null,n=st.current,ae(st,r?n&1|2:n&1),Pe&&Xn(t,i.treeForkCount),e):(tt(t),null);case 22:case 23:return Kt(t),lu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),n=t.updateQueue,n!==null&&nl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ce(ri),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Kn(ft),tt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Bx(e,t){switch($c(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(ft),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ke(t),null;case 31:if(t.memoizedState!==null){if(Kt(t),t.alternate===null)throw Error(s(340));ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Kt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(st),null;case 4:return xe(),null;case 10:return Kn(t.type),null;case 22:case 23:return Kt(t),lu(),e!==null&&ce(ri),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kn(ft),null;case 25:return null;default:return null}}function gh(e,t){switch($c(t),t.tag){case 3:Kn(ft),xe();break;case 26:case 27:case 5:ke(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&Kt(t);break;case 13:Kt(t);break;case 19:ce(st);break;case 10:Kn(t.type);break;case 22:case 23:Kt(t),lu(),e!==null&&ce(ri);break;case 24:Kn(ft)}}function cr(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var l=n.create,m=n.inst;i=l(),m.destroy=i}n=n.next}while(n!==r)}}catch(b){Ge(t,t.return,b)}}function ja(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&e)===e){var m=i.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,r=t;var U=n,W=b;try{W()}catch(ie){Ge(r,U,ie)}}}i=i.next}while(i!==l)}}catch(ie){Ge(t,t.return,ie)}}function yh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{sp(t,n)}catch(i){Ge(e,e.return,i)}}}function vh(e,t,n){n.props=di(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ge(e,t,i)}}function ur(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){Ge(e,t,r)}}function In(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Ge(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ge(e,t,r)}else n.current=null}function bh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Ge(e,e.return,r)}}function Bu(e,t,n){try{var i=e.stateNode;l1(i,e.type,n,t),i[nt]=t}catch(r){Ge(e,e.return,r)}}function xh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fn));else if(i!==4&&(i===27&&Na(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function al(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Na(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function wh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Ct(t,i,n),t[dt]=e,t[nt]=n}catch(l){Ge(e,e.return,l)}}var na=!1,ht=!1,Vu=!1,Sh=typeof WeakSet=="function"?WeakSet:Set,wt=null;function qx(e,t){if(e=e.containerInfo,ud=Al,e=zm(e),Lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,l=i.focusNode;i=i.focusOffset;var m=0,b=-1,U=-1,W=0,ie=0,le=e,ee=null;e:for(;;){for(var ne;le!==n||r!==0&&le.nodeType!==3||(b=m+r),le!==l||i!==0&&le.nodeType!==3||(U=m+i),le.nodeType===3&&(m+=le.nodeValue.length),(ne=le.firstChild)!==null;)ee=le,le=ne;for(;;){if(le===e)break e;if(ee===n&&++W===r&&(b=m),ee===l&&++ie===i&&(U=m),(ne=le.nextSibling)!==null)break;le=ee,ee=le.parentNode}le=ne}n=b===-1||U===-1?null:{start:b,end:U}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:e,selectionRange:n},Al=!1,wt=t;wt!==null;)if(t=wt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,wt=e;else for(;wt!==null;){switch(t=wt,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,r=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var ge=di(n.type,r);e=i.getSnapshotBeforeUpdate(ge,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(De){Ge(n,n.return,De)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)pd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,wt=e;break}wt=t.return}}function Th(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ia(e,n),i&4&&cr(5,n);break;case 1:if(ia(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ge(n,n.return,m)}else{var r=di(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ge(n,n.return,m)}}i&64&&yh(n),i&512&&ur(n,n.return);break;case 3:if(ia(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{sp(e,t)}catch(m){Ge(n,n.return,m)}}break;case 27:t===null&&i&4&&wh(n);case 26:case 5:ia(e,n),t===null&&i&4&&bh(n),i&512&&ur(n,n.return);break;case 12:ia(e,n);break;case 31:ia(e,n),i&4&&_h(e,n);break;case 13:ia(e,n),i&4&&Ch(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zx.bind(null,n),g1(e,n))));break;case 22:if(i=n.memoizedState!==null||na,!i){t=t!==null&&t.memoizedState!==null||ht,r=na;var l=ht;na=i,(ht=t)&&!l?oa(e,n,(n.subtreeFlags&8772)!==0):ia(e,n),na=r,ht=l}break;case 30:break;default:ia(e,n)}}function Ah(e){var t=e.alternate;t!==null&&(e.alternate=null,Ah(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&V(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,Pt=!1;function aa(e,t,n){for(n=n.child;n!==null;)Eh(e,t,n),n=n.sibling}function Eh(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(On,n)}catch{}switch(n.tag){case 26:ht||In(n,t),aa(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ht||In(n,t);var i=at,r=Pt;Na(n.type)&&(at=n.stateNode,Pt=!1),aa(e,t,n),br(n.stateNode),at=i,Pt=r;break;case 5:ht||In(n,t);case 6:if(i=at,r=Pt,at=null,aa(e,t,n),at=i,Pt=r,at!==null)if(Pt)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode)}catch(l){Ge(n,t,l)}else try{at.removeChild(n.stateNode)}catch(l){Ge(n,t,l)}break;case 18:at!==null&&(Pt?(e=at,yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),co(e)):yg(at,n.stateNode));break;case 4:i=at,r=Pt,at=n.stateNode.containerInfo,Pt=!0,aa(e,t,n),at=i,Pt=r;break;case 0:case 11:case 14:case 15:ja(2,n,t),ht||ja(4,n,t),aa(e,t,n);break;case 1:ht||(In(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&vh(n,t,i)),aa(e,t,n);break;case 21:aa(e,t,n);break;case 22:ht=(i=ht)||n.memoizedState!==null,aa(e,t,n),ht=i;break;default:aa(e,t,n)}}function _h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{co(e)}catch(n){Ge(t,t.return,n)}}}function Ch(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{co(e)}catch(n){Ge(t,t.return,n)}}function Hx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sh),t;default:throw Error(s(435,e.tag))}}function il(e,t){var n=Hx(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=Kx.bind(null,e,i);i.then(r,r)}})}function Bt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],l=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(Na(b.type)){at=b.stateNode,Pt=!1;break e}break;case 5:at=b.stateNode,Pt=!1;break e;case 3:case 4:at=b.stateNode.containerInfo,Pt=!0;break e}b=b.return}if(at===null)throw Error(s(160));Eh(l,m,r),at=null,Pt=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Dh(t,e),t=t.sibling}var xn=null;function Dh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bt(t,e),qt(e),i&4&&(ja(3,e,e.return),cr(3,e),ja(5,e,e.return));break;case 1:Bt(t,e),qt(e),i&512&&(ht||n===null||In(n,n.return)),i&64&&na&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=xn;if(Bt(t,e),qt(e),i&512&&(ht||n===null||In(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Se]||l[dt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(i),r.head.insertBefore(l,r.querySelector("head > title"))),Ct(l,i,n),l[dt]=e,Re(l),i=l;break e;case"link":var m=Dg("link","href",r).get(i+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(l=m[b],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}l=r.createElement(i),Ct(l,i,n),r.head.appendChild(l);break;case"meta":if(m=Dg("meta","content",r).get(i+(n.content||""))){for(b=0;b<m.length;b++)if(l=m[b],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}l=r.createElement(i),Ct(l,i,n),r.head.appendChild(l);break;default:throw Error(s(468,i))}l[dt]=e,Re(l),i=l}e.stateNode=i}else kg(r,e.type,e.stateNode);else e.stateNode=Cg(r,i,e.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?kg(r,e.type,e.stateNode):Cg(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Bu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Bt(t,e),qt(e),i&512&&(ht||n===null||In(n,n.return)),n!==null&&i&4&&Bu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Bt(t,e),qt(e),i&512&&(ht||n===null||In(n,n.return)),e.flags&32){r=e.stateNode;try{Mi(r,"")}catch(ge){Ge(e,e.return,ge)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Bu(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Vu=!0);break;case 6:if(Bt(t,e),qt(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ge){Ge(e,e.return,ge)}}break;case 3:if(xl=null,r=xn,xn=vl(t.containerInfo),Bt(t,e),xn=r,qt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(t.containerInfo)}catch(ge){Ge(e,e.return,ge)}Vu&&(Vu=!1,kh(e));break;case 4:i=xn,xn=vl(e.stateNode.containerInfo),Bt(t,e),qt(e),xn=i;break;case 12:Bt(t,e),qt(e);break;case 31:Bt(t,e),qt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,il(e,i)));break;case 13:Bt(t,e),qt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(rl=St()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,il(e,i)));break;case 22:r=e.memoizedState!==null;var U=n!==null&&n.memoizedState!==null,W=na,ie=ht;if(na=W||r,ht=ie||U,Bt(t,e),ht=ie,na=W,qt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||U||na||ht||fi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){U=n=t;try{if(l=U.stateNode,r)m=l.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=U.stateNode;var le=U.memoizedProps.style,ee=le!=null&&le.hasOwnProperty("display")?le.display:null;b.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(ge){Ge(U,U.return,ge)}}}else if(t.tag===6){if(n===null){U=t;try{U.stateNode.nodeValue=r?"":U.memoizedProps}catch(ge){Ge(U,U.return,ge)}}}else if(t.tag===18){if(n===null){U=t;try{var ne=U.stateNode;r?vg(ne,!0):vg(U.stateNode,!1)}catch(ge){Ge(U,U.return,ge)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,il(e,n))));break;case 19:Bt(t,e),qt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,il(e,i)));break;case 30:break;case 21:break;default:Bt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(xh(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,l=qu(e);al(e,l,r);break;case 5:var m=n.stateNode;n.flags&32&&(Mi(m,""),n.flags&=-33);var b=qu(e);al(e,b,m);break;case 3:case 4:var U=n.stateNode.containerInfo,W=qu(e);Hu(e,W,U);break;default:throw Error(s(161))}}catch(ie){Ge(e,e.return,ie)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Th(e,t.alternate,t),t=t.sibling}function fi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),fi(t);break;case 1:In(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&vh(t,t.return,n),fi(t);break;case 27:br(t.stateNode);case 26:case 5:In(t,t.return),fi(t);break;case 22:t.memoizedState===null&&fi(t);break;case 30:fi(t);break;default:fi(t)}e=e.sibling}}function oa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,l=t,m=l.flags;switch(l.tag){case 0:case 11:case 15:oa(r,l,n),cr(4,l);break;case 1:if(oa(r,l,n),i=l,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(W){Ge(i,i.return,W)}if(i=l,r=i.updateQueue,r!==null){var b=i.stateNode;try{var U=r.shared.hiddenCallbacks;if(U!==null)for(r.shared.hiddenCallbacks=null,r=0;r<U.length;r++)rp(U[r],b)}catch(W){Ge(i,i.return,W)}}n&&m&64&&yh(l),ur(l,l.return);break;case 27:wh(l);case 26:case 5:oa(r,l,n),n&&i===null&&m&4&&bh(l),ur(l,l.return);break;case 12:oa(r,l,n);break;case 31:oa(r,l,n),n&&m&4&&_h(r,l);break;case 13:oa(r,l,n),n&&m&4&&Ch(r,l);break;case 22:l.memoizedState===null&&oa(r,l,n),ur(l,l.return);break;case 30:break;default:oa(r,l,n)}t=t.sibling}}function Qu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Zo(n))}function Gu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zo(e))}function wn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jh(e,t,n,i),t=t.sibling}function jh(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:wn(e,t,n,i),r&2048&&cr(9,t);break;case 1:wn(e,t,n,i);break;case 3:wn(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zo(e)));break;case 12:if(r&2048){wn(e,t,n,i),e=t.stateNode;try{var l=t.memoizedProps,m=l.id,b=l.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(U){Ge(t,t.return,U)}}else wn(e,t,n,i);break;case 31:wn(e,t,n,i);break;case 13:wn(e,t,n,i);break;case 23:break;case 22:l=t.stateNode,m=t.alternate,t.memoizedState!==null?l._visibility&2?wn(e,t,n,i):dr(e,t):l._visibility&2?wn(e,t,n,i):(l._visibility|=2,Wi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Qu(m,t);break;case 24:wn(e,t,n,i),r&2048&&Gu(t.alternate,t);break;default:wn(e,t,n,i)}}function Wi(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,m=t,b=n,U=i,W=m.flags;switch(m.tag){case 0:case 11:case 15:Wi(l,m,b,U,r),cr(8,m);break;case 23:break;case 22:var ie=m.stateNode;m.memoizedState!==null?ie._visibility&2?Wi(l,m,b,U,r):dr(l,m):(ie._visibility|=2,Wi(l,m,b,U,r)),r&&W&2048&&Qu(m.alternate,m);break;case 24:Wi(l,m,b,U,r),r&&W&2048&&Gu(m.alternate,m);break;default:Wi(l,m,b,U,r)}t=t.sibling}}function dr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:dr(n,i),r&2048&&Qu(i.alternate,i);break;case 24:dr(n,i),r&2048&&Gu(i.alternate,i);break;default:dr(n,i)}t=t.sibling}}var fr=8192;function Ji(e,t,n){if(e.subtreeFlags&fr)for(e=e.child;e!==null;)Oh(e,t,n),e=e.sibling}function Oh(e,t,n){switch(e.tag){case 26:Ji(e,t,n),e.flags&fr&&e.memoizedState!==null&&D1(n,xn,e.memoizedState,e.memoizedProps);break;case 5:Ji(e,t,n);break;case 3:case 4:var i=xn;xn=vl(e.stateNode.containerInfo),Ji(e,t,n),xn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=fr,fr=16777216,Ji(e,t,n),fr=i):Ji(e,t,n));break;default:Ji(e,t,n)}}function Mh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];wt=i,zh(i,e)}Mh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rh(e),e=e.sibling}function Rh(e){switch(e.tag){case 0:case 11:case 15:mr(e),e.flags&2048&&ja(9,e,e.return);break;case 3:mr(e);break;case 12:mr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ol(e)):mr(e);break;default:mr(e)}}function ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];wt=i,zh(i,e)}Mh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),ol(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ol(t));break;default:ol(t)}e=e.sibling}}function zh(e,t){for(;wt!==null;){var n=wt;switch(n.tag){case 0:case 11:case 15:ja(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Zo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,wt=i;else e:for(n=e;wt!==null;){i=wt;var r=i.sibling,l=i.return;if(Ah(i),i===n){wt=null;break e}if(r!==null){r.return=l,wt=r;break e}wt=l}}}var Vx={getCacheForType:function(e){var t=Et(ft),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Et(ft).controller.signal}},Qx=typeof WeakMap=="function"?WeakMap:Map,He=0,We=null,ze=null,Ne=0,Qe=0,Wt=null,Oa=!1,eo=!1,Fu=!1,ra=0,rt=0,Ma=0,mi=0,$u=0,Jt=0,to=0,pr=null,Ht=null,Yu=!1,rl=0,Ih=0,sl=1/0,ll=null,Ra=null,yt=0,za=null,no=null,sa=0,Xu=0,Zu=null,Lh=null,hr=0,Ku=null;function en(){return(He&2)!==0&&Ne!==0?Ne&-Ne:$.T!==null?ad():Io()}function Nh(){if(Jt===0)if((Ne&536870912)===0||Pe){var e=Hn;Hn<<=1,(Hn&3932160)===0&&(Hn=262144),Jt=e}else Jt=536870912;return e=Zt.current,e!==null&&(e.flags|=32),Jt}function Vt(e,t,n){(e===We&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(ao(e,0),Ia(e,Ne,Jt,!1)),ba(e,n),((He&2)===0||e!==We)&&(e===We&&((He&2)===0&&(mi|=n),rt===4&&Ia(e,Ne,Jt,!1)),Ln(e))}function Uh(e,t,n){if((He&6)!==0)throw Error(s(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ka(e,t),r=i?$x(e,t):Ju(e,t,!0),l=i;do{if(r===0){eo&&!i&&Ia(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!Gx(n)){r=Ju(e,t,!1),l=!1;continue}if(r===2){if(l=t,e.errorRecoveryDisabledLanes&l)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;r=pr;var U=b.current.memoizedState.isDehydrated;if(U&&(ao(b,m).flags|=256),m=Ju(b,m,!1),m!==2){if(Fu&&!U){b.errorRecoveryDisabledLanes|=l,mi|=l,r=4;break e}l=Ht,Ht=r,l!==null&&(Ht===null?Ht=l:Ht.push.apply(Ht,l))}r=m}if(l=!1,r!==2)continue}}if(r===1){ao(e,0),Ia(e,t,0,!0);break}e:{switch(i=e,l=r,l){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Ia(i,t,Jt,!Oa);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(r=rl+300-St(),10<r)){if(Ia(i,t,Jt,!Oa),ki(i,0,!0)!==0)break e;sa=t,i.timeoutHandle=hg(Ph.bind(null,i,n,Ht,ll,Yu,t,Jt,mi,to,Oa,l,"Throttled",-0,0),r);break e}Ph(i,n,Ht,ll,Yu,t,Jt,mi,to,Oa,l,null,-0,0)}}break}while(!0);Ln(e)}function Ph(e,t,n,i,r,l,m,b,U,W,ie,le,ee,ne){if(e.timeoutHandle=-1,le=t.subtreeFlags,le&8192||(le&16785408)===16785408){le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fn},Oh(t,l,le);var ge=(l&62914560)===l?rl-St():(l&4194048)===l?Ih-St():0;if(ge=k1(le,ge),ge!==null){sa=l,e.cancelPendingCommit=ge($h.bind(null,e,t,l,n,i,r,m,b,U,ie,le,null,ee,ne)),Ia(e,l,m,!W);return}}$h(e,t,l,n,i,r,m,b,U)}function Gx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],l=r.getSnapshot;r=r.value;try{if(!Yt(l(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ia(e,t,n,i){t&=~$u,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var l=31-ct(r),m=1<<l;i[l]=-1,r&=~m}n!==0&&Ro(e,n,t)}function cl(){return(He&6)===0?(gr(0),!1):!0}function Wu(){if(ze!==null){if(Qe===0)var e=ze.return;else e=ze,Zn=ii=null,pu(e),$i=null,Wo=0,e=ze;for(;e!==null;)gh(e.alternate,e),e=e.return;ze=null}}function ao(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,d1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),sa=0,Wu(),We=e,ze=n=Yn(e.current,null),Ne=t,Qe=0,Wt=null,Oa=!1,eo=Ka(e,t),Fu=!1,to=Jt=$u=mi=Ma=rt=0,Ht=pr=null,Yu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-ct(i),l=1<<r;t|=e[r],i&=~l}return ra=t,js(),n}function Bh(e,t){je=null,$.H=rr,t===Fi||t===Us?(t=np(),Qe=3):t===nu?(t=np(),Qe=4):Qe=t===ju?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Wt=t,ze===null&&(rt=1,Ws(e,ln(t,e.current)))}function qh(){var e=Zt.current;return e===null?!0:(Ne&4194048)===Ne?fn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===fn:!1}function Hh(){var e=$.H;return $.H=rr,e===null?rr:e}function Vh(){var e=$.A;return $.A=Vx,e}function ul(){rt=4,Oa||(Ne&4194048)!==Ne&&Zt.current!==null||(eo=!0),(Ma&134217727)===0&&(mi&134217727)===0||We===null||Ia(We,Ne,Jt,!1)}function Ju(e,t,n){var i=He;He|=2;var r=Hh(),l=Vh();(We!==e||Ne!==t)&&(ll=null,ao(e,t)),t=!1;var m=rt;e:do try{if(Qe!==0&&ze!==null){var b=ze,U=Wt;switch(Qe){case 8:Wu(),m=6;break e;case 3:case 2:case 9:case 6:Zt.current===null&&(t=!0);var W=Qe;if(Qe=0,Wt=null,io(e,b,U,W),n&&eo){m=0;break e}break;default:W=Qe,Qe=0,Wt=null,io(e,b,U,W)}}Fx(),m=rt;break}catch(ie){Bh(e,ie)}while(!0);return t&&e.shellSuspendCounter++,Zn=ii=null,He=i,$.H=r,$.A=l,ze===null&&(We=null,Ne=0,js()),m}function Fx(){for(;ze!==null;)Qh(ze)}function $x(e,t){var n=He;He|=2;var i=Hh(),r=Vh();We!==e||Ne!==t?(ll=null,sl=St()+500,ao(e,t)):eo=Ka(e,t);e:do try{if(Qe!==0&&ze!==null){t=ze;var l=Wt;t:switch(Qe){case 1:Qe=0,Wt=null,io(e,t,l,1);break;case 2:case 9:if(ep(l)){Qe=0,Wt=null,Gh(t);break}t=function(){Qe!==2&&Qe!==9||We!==e||(Qe=7),Ln(e)},l.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:ep(l)?(Qe=0,Wt=null,Gh(t)):(Qe=0,Wt=null,io(e,t,l,7));break;case 5:var m=null;switch(ze.tag){case 26:m=ze.memoizedState;case 5:case 27:var b=ze;if(m?jg(m):b.stateNode.complete){Qe=0,Wt=null;var U=b.sibling;if(U!==null)ze=U;else{var W=b.return;W!==null?(ze=W,dl(W)):ze=null}break t}}Qe=0,Wt=null,io(e,t,l,5);break;case 6:Qe=0,Wt=null,io(e,t,l,6);break;case 8:Wu(),rt=6;break e;default:throw Error(s(462))}}Yx();break}catch(ie){Bh(e,ie)}while(!0);return Zn=ii=null,$.H=i,$.A=r,He=n,ze!==null?0:(We=null,Ne=0,js(),rt)}function Yx(){for(;ze!==null&&!fs();)Qh(ze)}function Qh(e){var t=ph(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?dl(e):ze=t}function Gh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=lh(n,t,t.pendingProps,t.type,void 0,Ne);break;case 11:t=lh(n,t,t.pendingProps,t.type.render,t.ref,Ne);break;case 5:pu(t);default:gh(n,t),t=ze=Vm(t,ra),t=ph(n,t,ra)}e.memoizedProps=e.pendingProps,t===null?dl(e):ze=t}function io(e,t,n,i){Zn=ii=null,pu(t),$i=null,Wo=0;var r=t.return;try{if(Lx(e,r,t,n,Ne)){rt=1,Ws(e,ln(n,e.current)),ze=null;return}}catch(l){if(r!==null)throw ze=r,l;rt=1,Ws(e,ln(n,e.current)),ze=null;return}t.flags&32768?(Pe||i===1?e=!0:eo||(Ne&536870912)!==0?e=!1:(Oa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Zt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Fh(t,e)):dl(t)}function dl(e){var t=e;do{if((t.flags&32768)!==0){Fh(t,Oa);return}e=t.return;var n=Px(t.alternate,t,ra);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);rt===0&&(rt=5)}function Fh(e,t){do{var n=Bx(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);rt=6,ze=null}function $h(e,t,n,i,r,l,m,b,U){e.cancelPendingCommit=null;do fl();while(yt!==0);if((He&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(l=t.lanes|t.childLanes,l|=qc,Mo(e,n,l,m,b,U),e===We&&(ze=We=null,Ne=0),no=t,za=e,sa=n,Xu=l,Zu=r,Lh=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wx(Za,function(){return Wh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=$.T,$.T=null,r=H.p,H.p=2,m=He,He|=4;try{qx(e,t)}finally{He=m,H.p=r,$.T=i}}yt=1,Yh(),Xh(),Zh()}}function Yh(){if(yt===1){yt=0;var e=za,t=no,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=$.T,$.T=null;var i=H.p;H.p=2;var r=He;He|=4;try{Dh(t,e);var l=dd,m=zm(e.containerInfo),b=l.focusedElem,U=l.selectionRange;if(m!==b&&b&&b.ownerDocument&&Rm(b.ownerDocument.documentElement,b)){if(U!==null&&Lc(b)){var W=U.start,ie=U.end;if(ie===void 0&&(ie=W),"selectionStart"in b)b.selectionStart=W,b.selectionEnd=Math.min(ie,b.value.length);else{var le=b.ownerDocument||document,ee=le&&le.defaultView||window;if(ee.getSelection){var ne=ee.getSelection(),ge=b.textContent.length,De=Math.min(U.start,ge),Ye=U.end===void 0?De:Math.min(U.end,ge);!ne.extend&&De>Ye&&(m=Ye,Ye=De,De=m);var Y=Mm(b,De),G=Mm(b,Ye);if(Y&&G&&(ne.rangeCount!==1||ne.anchorNode!==Y.node||ne.anchorOffset!==Y.offset||ne.focusNode!==G.node||ne.focusOffset!==G.offset)){var K=le.createRange();K.setStart(Y.node,Y.offset),ne.removeAllRanges(),De>Ye?(ne.addRange(K),ne.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),ne.addRange(K))}}}}for(le=[],ne=b;ne=ne.parentNode;)ne.nodeType===1&&le.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<le.length;b++){var re=le[b];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}Al=!!ud,dd=ud=null}finally{He=r,H.p=i,$.T=n}}e.current=t,yt=2}}function Xh(){if(yt===2){yt=0;var e=za,t=no,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=$.T,$.T=null;var i=H.p;H.p=2;var r=He;He|=4;try{Th(e,t.alternate,t)}finally{He=r,H.p=i,$.T=n}}yt=3}}function Zh(){if(yt===4||yt===3){yt=0,vc();var e=za,t=no,n=sa,i=Lh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,no=za=null,Kh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Ra=null),vn(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=$.T,r=H.p,H.p=2,$.T=null;try{for(var l=e.onRecoverableError,m=0;m<i.length;m++){var b=i[m];l(b.value,{componentStack:b.stack})}}finally{$.T=t,H.p=r}}(sa&3)!==0&&fl(),Ln(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Ku?hr++:(hr=0,Ku=e):hr=0,gr(0)}}function Kh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zo(t)))}function fl(){return Yh(),Xh(),Zh(),Wh()}function Wh(){if(yt!==5)return!1;var e=za,t=Xu;Xu=0;var n=vn(sa),i=$.T,r=H.p;try{H.p=32>n?32:n,$.T=null,n=Zu,Zu=null;var l=za,m=sa;if(yt=0,no=za=null,sa=0,(He&6)!==0)throw Error(s(331));var b=He;if(He|=4,Rh(l.current),jh(l,l.current,m,n),He=b,gr(0),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(On,l)}catch{}return!0}finally{H.p=r,$.T=i,Kh(e,t)}}function Jh(e,t,n){t=ln(n,t),t=ku(e.stateNode,t,2),e=Ca(e,t,2),e!==null&&(ba(e,2),Ln(e))}function Ge(e,t,n){if(e.tag===3)Jh(e,e,n);else for(;t!==null;){if(t.tag===3){Jh(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))){e=ln(n,e),n=eh(2),i=Ca(t,n,2),i!==null&&(th(n,i,t,e),ba(i,2),Ln(i));break}}t=t.return}}function ed(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Qx;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Fu=!0,r.add(n),e=Xx.bind(null,e,t,n),t.then(e,e))}function Xx(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,We===e&&(Ne&n)===n&&(rt===4||rt===3&&(Ne&62914560)===Ne&&300>St()-rl?(He&2)===0&&ao(e,0):$u|=n,to===Ne&&(to=0)),Ln(e)}function eg(e,t){t===0&&(t=Vn()),e=ti(e,t),e!==null&&(ba(e,t),Ln(e))}function Zx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eg(e,n)}function Kx(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),eg(e,n)}function Wx(e,t){return yn(e,t)}var ml=null,oo=null,td=!1,pl=!1,nd=!1,La=0;function Ln(e){e!==oo&&e.next===null&&(oo===null?ml=oo=e:oo=oo.next=e),pl=!0,td||(td=!0,e1())}function gr(e,t){if(!nd&&pl){nd=!0;do for(var n=!1,i=ml;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var l=0;else{var m=i.suspendedLanes,b=i.pingedLanes;l=(1<<31-ct(42|e)+1)-1,l&=r&~(m&~b),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,ig(i,l))}else l=Ne,l=ki(i,i===We?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Ka(i,l)||(n=!0,ig(i,l));i=i.next}while(n);nd=!1}}function Jx(){tg()}function tg(){pl=td=!1;var e=0;La!==0&&u1()&&(e=La);for(var t=St(),n=null,i=ml;i!==null;){var r=i.next,l=ng(i,t);l===0?(i.next=null,n===null?ml=r:n.next=r,r===null&&(oo=n)):(n=i,(e!==0||(l&3)!==0)&&(pl=!0)),i=r}yt!==0&&yt!==5||gr(e),La!==0&&(La=0)}function ng(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var m=31-ct(l),b=1<<m,U=r[m];U===-1?((b&n)===0||(b&i)!==0)&&(r[m]=ut(b,t)):U<=t&&(e.expiredLanes|=b),l&=~b}if(t=We,n=Ne,n=ki(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&va(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ka(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&va(i),vn(n)){case 2:case 8:n=Bn;break;case 32:n=Za;break;case 268435456:n=Co;break;default:n=Za}return i=ag.bind(null,e),n=yn(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&va(i),e.callbackPriority=2,e.callbackNode=null,2}function ag(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(fl()&&e.callbackNode!==n)return null;var i=Ne;return i=ki(e,e===We?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Uh(e,i,t),ng(e,St()),e.callbackNode!=null&&e.callbackNode===n?ag.bind(null,e):null)}function ig(e,t){if(fl())return null;Uh(e,t,!0)}function e1(){f1(function(){(He&6)!==0?yn(Pn,Jx):tg()})}function ad(){if(La===0){var e=Qi;e===0&&(e=qn,qn<<=1,(qn&261888)===0&&(qn=256)),La=e}return La}function og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ss(""+e)}function rg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function t1(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var l=og((r[nt]||null).action),m=i.submitter;m&&(t=(t=m[nt]||null)?og(t.formAction):m.getAttribute("formAction"),t!==null&&(l=t,m=null));var b=new _s("action","action",null,i,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(La!==0){var U=m?rg(r,m):new FormData(r);Tu(n,{pending:!0,data:U,method:r.method,action:l},null,U)}}else typeof l=="function"&&(b.preventDefault(),U=m?rg(r,m):new FormData(r),Tu(n,{pending:!0,data:U,method:r.method,action:l},l,U))},currentTarget:r}]})}}for(var id=0;id<Bc.length;id++){var od=Bc[id],n1=od.toLowerCase(),a1=od[0].toUpperCase()+od.slice(1);bn(n1,"on"+a1)}bn(Nm,"onAnimationEnd"),bn(Um,"onAnimationIteration"),bn(Pm,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(bx,"onTransitionRun"),bn(xx,"onTransitionStart"),bn(wx,"onTransitionCancel"),bn(Bm,"onTransitionEnd"),Mn("onMouseEnter",["mouseout","mouseover"]),Mn("onMouseLeave",["mouseout","mouseover"]),Mn("onPointerEnter",["pointerout","pointerover"]),Mn("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yr));function sg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var m=i.length-1;0<=m;m--){var b=i[m],U=b.instance,W=b.currentTarget;if(b=b.listener,U!==l&&r.isPropagationStopped())break e;l=b,r.currentTarget=W;try{l(r)}catch(ie){ks(ie)}r.currentTarget=null,l=U}else for(m=0;m<i.length;m++){if(b=i[m],U=b.instance,W=b.currentTarget,b=b.listener,U!==l&&r.isPropagationStopped())break e;l=b,r.currentTarget=W;try{l(r)}catch(ie){ks(ie)}r.currentTarget=null,l=U}}}}function Ie(e,t){var n=t[ji];n===void 0&&(n=t[ji]=new Set);var i=e+"__bubble";n.has(i)||(lg(t,e,2,!1),n.add(i))}function rd(e,t,n){var i=0;t&&(i|=4),lg(n,e,i,t)}var hl="_reactListening"+Math.random().toString(36).slice(2);function sd(e){if(!e[hl]){e[hl]=!0,Tt.forEach(function(n){n!=="selectionchange"&&(i1.has(n)||rd(n,!1,e),rd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hl]||(t[hl]=!0,rd("selectionchange",!1,t))}}function lg(e,t,n,i){switch(Ng(t)){case 2:var r=M1;break;case 8:r=R1;break;default:r=Sd}n=r.bind(null,t,n,e),r=void 0,!Cc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function ld(e,t,n,i,r){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var b=i.stateNode.containerInfo;if(b===r)break;if(m===4)for(m=i.return;m!==null;){var U=m.tag;if((U===3||U===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;b!==null;){if(m=de(b),m===null)return;if(U=m.tag,U===5||U===6||U===26||U===27){i=l=m;continue e}b=b.parentNode}}i=i.return}mm(function(){var W=l,ie=Ec(n),le=[];e:{var ee=qm.get(e);if(ee!==void 0){var ne=_s,ge=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":ne=Kb;break;case"focusin":ge="focus",ne=Oc;break;case"focusout":ge="blur",ne=Oc;break;case"beforeblur":case"afterblur":ne=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=ex;break;case Nm:case Um:case Pm:ne=Hb;break;case Bm:ne=nx;break;case"scroll":case"scrollend":ne=Nb;break;case"wheel":ne=ix;break;case"copy":case"cut":case"paste":ne=Qb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=vm;break;case"toggle":case"beforetoggle":ne=rx}var De=(t&4)!==0,Ye=!De&&(e==="scroll"||e==="scrollend"),Y=De?ee!==null?ee+"Capture":null:ee;De=[];for(var G=W,K;G!==null;){var re=G;if(K=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||K===null||Y===null||(re=Po(G,Y),re!=null&&De.push(vr(G,re,K))),Ye)break;G=G.return}0<De.length&&(ee=new ne(ee,ge,null,n,ie),le.push({event:ee,listeners:De}))}}if((t&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",ee&&n!==Ac&&(ge=n.relatedTarget||n.fromElement)&&(de(ge)||ge[Qn]))break e;if((ne||ee)&&(ee=ie.window===ie?ie:(ee=ie.ownerDocument)?ee.defaultView||ee.parentWindow:window,ne?(ge=n.relatedTarget||n.toElement,ne=W,ge=ge?de(ge):null,ge!==null&&(Ye=f(ge),De=ge.tag,ge!==Ye||De!==5&&De!==27&&De!==6)&&(ge=null)):(ne=null,ge=W),ne!==ge)){if(De=gm,re="onMouseLeave",Y="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(De=vm,re="onPointerLeave",Y="onPointerEnter",G="pointer"),Ye=ne==null?ee:Ve(ne),K=ge==null?ee:Ve(ge),ee=new De(re,G+"leave",ne,n,ie),ee.target=Ye,ee.relatedTarget=K,re=null,de(ie)===W&&(De=new De(Y,G+"enter",ge,n,ie),De.target=K,De.relatedTarget=Ye,re=De),Ye=re,ne&&ge)t:{for(De=o1,Y=ne,G=ge,K=0,re=Y;re;re=De(re))K++;re=0;for(var _e=G;_e;_e=De(_e))re++;for(;0<K-re;)Y=De(Y),K--;for(;0<re-K;)G=De(G),re--;for(;K--;){if(Y===G||G!==null&&Y===G.alternate){De=Y;break t}Y=De(Y),G=De(G)}De=null}else De=null;ne!==null&&cg(le,ee,ne,De,!1),ge!==null&&Ye!==null&&cg(le,Ye,ge,De,!0)}}e:{if(ee=W?Ve(W):window,ne=ee.nodeName&&ee.nodeName.toLowerCase(),ne==="select"||ne==="input"&&ee.type==="file")var Be=_m;else if(Am(ee))if(Cm)Be=gx;else{Be=px;var Te=mx}else ne=ee.nodeName,!ne||ne.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?W&&Tc(W.elementType)&&(Be=_m):Be=hx;if(Be&&(Be=Be(e,W))){Em(le,Be,n,ie);break e}Te&&Te(e,ee,W),e==="focusout"&&W&&ee.type==="number"&&W.memoizedProps.value!=null&&Sc(ee,"number",ee.value)}switch(Te=W?Ve(W):window,e){case"focusin":(Am(Te)||Te.contentEditable==="true")&&(Li=Te,Nc=W,$o=null);break;case"focusout":$o=Nc=Li=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Im(le,n,ie);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":Im(le,n,ie)}var Oe;if(Rc)e:{switch(e){case"compositionstart":var Ue="onCompositionStart";break e;case"compositionend":Ue="onCompositionEnd";break e;case"compositionupdate":Ue="onCompositionUpdate";break e}Ue=void 0}else Ii?Sm(e,n)&&(Ue="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ue="onCompositionStart");Ue&&(bm&&n.locale!=="ko"&&(Ii||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&Ii&&(Oe=pm()):(xa=ie,Dc="value"in xa?xa.value:xa.textContent,Ii=!0)),Te=gl(W,Ue),0<Te.length&&(Ue=new ym(Ue,e,null,n,ie),le.push({event:Ue,listeners:Te}),Oe?Ue.data=Oe:(Oe=Tm(n),Oe!==null&&(Ue.data=Oe)))),(Oe=lx?cx(e,n):ux(e,n))&&(Ue=gl(W,"onBeforeInput"),0<Ue.length&&(Te=new ym("onBeforeInput","beforeinput",null,n,ie),le.push({event:Te,listeners:Ue}),Te.data=Oe)),t1(le,e,W,n,ie)}sg(le,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gl(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=Po(e,n),r!=null&&i.unshift(vr(e,r,l)),r=Po(e,t),r!=null&&i.push(vr(e,r,l))),e.tag===3)return i;e=e.return}return[]}function o1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cg(e,t,n,i,r){for(var l=t._reactName,m=[];n!==null&&n!==i;){var b=n,U=b.alternate,W=b.stateNode;if(b=b.tag,U!==null&&U===i)break;b!==5&&b!==26&&b!==27||W===null||(U=W,r?(W=Po(n,l),W!=null&&m.unshift(vr(n,W,U))):r||(W=Po(n,l),W!=null&&m.push(vr(n,W,U)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var r1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function ug(e){return(typeof e=="string"?e:""+e).replace(r1,`
`).replace(s1,"")}function dg(e,t){return t=ug(t),ug(e)===t}function $e(e,t,n,i,r,l){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Mi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Mi(e,""+i);break;case"className":xs(e,"class",i);break;case"tabIndex":xs(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":xs(e,n,i);break;case"style":dm(e,i,l);break;case"data":if(t!=="object"){xs(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ss(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&$e(e,t,"name",r.name,r,null),$e(e,t,"formEncType",r.formEncType,r,null),$e(e,t,"formMethod",r.formMethod,r,null),$e(e,t,"formTarget",r.formTarget,r,null)):($e(e,t,"encType",r.encType,r,null),$e(e,t,"method",r.method,r,null),$e(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ss(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Fn);break;case"onScroll":i!=null&&Ie("scroll",e);break;case"onScrollEnd":i!=null&&Ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ss(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),bs(e,"popover",i);break;case"xlinkActuate":Gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Gn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Gn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Gn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Gn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":bs(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ib.get(n)||n,bs(e,n,i))}}function cd(e,t,n,i,r,l){switch(n){case"style":dm(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Mi(e,i):(typeof i=="number"||typeof i=="bigint")&&Mi(e,""+i);break;case"onScroll":i!=null&&Ie("scroll",e);break;case"onScrollEnd":i!=null&&Ie("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Fn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!an.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),l=e[nt]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,r),typeof i=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):bs(e,n,i)}}}function Ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var i=!1,r=!1,l;for(l in n)if(n.hasOwnProperty(l)){var m=n[l];if(m!=null)switch(l){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:$e(e,t,l,m,n,null)}}r&&$e(e,t,"srcSet",n.srcSet,n,null),i&&$e(e,t,"src",n.src,n,null);return;case"input":Ie("invalid",e);var b=l=m=r=null,U=null,W=null;for(i in n)if(n.hasOwnProperty(i)){var ie=n[i];if(ie!=null)switch(i){case"name":r=ie;break;case"type":m=ie;break;case"checked":U=ie;break;case"defaultChecked":W=ie;break;case"value":l=ie;break;case"defaultValue":b=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,t));break;default:$e(e,t,i,ie,n,null)}}sm(e,l,b,U,W,m,r,!1);return;case"select":Ie("invalid",e),i=m=l=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":l=b;break;case"defaultValue":m=b;break;case"multiple":i=b;default:$e(e,t,r,b,n,null)}t=l,n=m,e.multiple=!!i,t!=null?Oi(e,!!i,t,!1):n!=null&&Oi(e,!!i,n,!0);return;case"textarea":Ie("invalid",e),l=r=i=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":i=b;break;case"defaultValue":r=b;break;case"children":l=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:$e(e,t,m,b,n,null)}cm(e,i,r,l);return;case"option":for(U in n)if(n.hasOwnProperty(U)&&(i=n[U],i!=null))switch(U){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:$e(e,t,U,i,n,null)}return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(i=0;i<yr.length;i++)Ie(yr[i],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in n)if(n.hasOwnProperty(W)&&(i=n[W],i!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:$e(e,t,W,i,n,null)}return;default:if(Tc(t)){for(ie in n)n.hasOwnProperty(ie)&&(i=n[ie],i!==void 0&&cd(e,t,ie,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&$e(e,t,b,i,n,null))}function l1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,m=null,b=null,U=null,W=null,ie=null;for(ne in n){var le=n[ne];if(n.hasOwnProperty(ne)&&le!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":U=le;default:i.hasOwnProperty(ne)||$e(e,t,ne,null,i,le)}}for(var ee in i){var ne=i[ee];if(le=n[ee],i.hasOwnProperty(ee)&&(ne!=null||le!=null))switch(ee){case"type":l=ne;break;case"name":r=ne;break;case"checked":W=ne;break;case"defaultChecked":ie=ne;break;case"value":m=ne;break;case"defaultValue":b=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,t));break;default:ne!==le&&$e(e,t,ee,ne,i,le)}}wc(e,m,b,U,W,ie,l,r);return;case"select":ne=m=b=ee=null;for(l in n)if(U=n[l],n.hasOwnProperty(l)&&U!=null)switch(l){case"value":break;case"multiple":ne=U;default:i.hasOwnProperty(l)||$e(e,t,l,null,i,U)}for(r in i)if(l=i[r],U=n[r],i.hasOwnProperty(r)&&(l!=null||U!=null))switch(r){case"value":ee=l;break;case"defaultValue":b=l;break;case"multiple":m=l;default:l!==U&&$e(e,t,r,l,i,U)}t=b,n=m,i=ne,ee!=null?Oi(e,!!n,ee,!1):!!i!=!!n&&(t!=null?Oi(e,!!n,t,!0):Oi(e,!!n,n?[]:"",!1));return;case"textarea":ne=ee=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:$e(e,t,b,null,i,r)}for(m in i)if(r=i[m],l=n[m],i.hasOwnProperty(m)&&(r!=null||l!=null))switch(m){case"value":ee=r;break;case"defaultValue":ne=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==l&&$e(e,t,m,r,i,l)}lm(e,ee,ne);return;case"option":for(var ge in n)if(ee=n[ge],n.hasOwnProperty(ge)&&ee!=null&&!i.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:$e(e,t,ge,null,i,ee)}for(U in i)if(ee=i[U],ne=n[U],i.hasOwnProperty(U)&&ee!==ne&&(ee!=null||ne!=null))switch(U){case"selected":e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:$e(e,t,U,ee,i,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in n)ee=n[De],n.hasOwnProperty(De)&&ee!=null&&!i.hasOwnProperty(De)&&$e(e,t,De,null,i,ee);for(W in i)if(ee=i[W],ne=n[W],i.hasOwnProperty(W)&&ee!==ne&&(ee!=null||ne!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,t));break;default:$e(e,t,W,ee,i,ne)}return;default:if(Tc(t)){for(var Ye in n)ee=n[Ye],n.hasOwnProperty(Ye)&&ee!==void 0&&!i.hasOwnProperty(Ye)&&cd(e,t,Ye,void 0,i,ee);for(ie in i)ee=i[ie],ne=n[ie],!i.hasOwnProperty(ie)||ee===ne||ee===void 0&&ne===void 0||cd(e,t,ie,ee,i,ne);return}}for(var Y in n)ee=n[Y],n.hasOwnProperty(Y)&&ee!=null&&!i.hasOwnProperty(Y)&&$e(e,t,Y,null,i,ee);for(le in i)ee=i[le],ne=n[le],!i.hasOwnProperty(le)||ee===ne||ee==null&&ne==null||$e(e,t,le,ee,i,ne)}function fg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function c1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],l=r.transferSize,m=r.initiatorType,b=r.duration;if(l&&b&&fg(m)){for(m=0,b=r.responseEnd,i+=1;i<n.length;i++){var U=n[i],W=U.startTime;if(W>b)break;var ie=U.transferSize,le=U.initiatorType;ie&&fg(le)&&(U=U.responseEnd,m+=ie*(U<b?1:(b-W)/(U-W)))}if(--i,t+=8*(l+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ud=null,dd=null;function yl(e){return e.nodeType===9?e:e.ownerDocument}function mg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var md=null;function u1(){var e=window.event;return e&&e.type==="popstate"?e===md?!1:(md=e,!0):(md=null,!1)}var hg=typeof setTimeout=="function"?setTimeout:void 0,d1=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,f1=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(e){return gg.resolve(null).then(e).catch(m1)}:hg;function m1(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function yg(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),co(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")br(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,br(n);for(var l=n.firstChild;l;){var m=l.nextSibling,b=l.nodeName;l[Se]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=m}}else n==="body"&&br(e.ownerDocument.body);n=r}while(n);co(t)}function vg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function pd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":pd(n),V(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function p1(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Se])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=mn(e.nextSibling),e===null)break}return null}function h1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mn(e.nextSibling),e===null))return null;return e}function bg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mn(e.nextSibling),e===null))return null;return e}function hd(e){return e.data==="$?"||e.data==="$~"}function gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function g1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var yd=null;function xg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return mn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function wg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Sg(e,t,n){switch(t=yl(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function br(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);V(e)}var pn=new Map,Tg=new Set;function vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=H.d;H.d={f:y1,r:v1,D:b1,C:x1,L:w1,m:S1,X:A1,S:T1,M:E1};function y1(){var e=la.f(),t=cl();return e||t}function v1(e){var t=he(e);t!==null&&t.tag===5&&t.type==="form"?Bp(t):la.r(e)}var ro=typeof document>"u"?null:document;function Ag(e,t,n){var i=ro;if(i&&typeof t=="string"&&t){var r=rn(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Tg.has(r)||(Tg.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),Ct(t,"link",e),Re(t),i.head.appendChild(t)))}}function b1(e){la.D(e),Ag("dns-prefetch",e,null)}function x1(e,t){la.C(e,t),Ag("preconnect",e,t)}function w1(e,t,n){la.L(e,t,n);var i=ro;if(i&&e&&t){var r='link[rel="preload"][as="'+rn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+rn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+rn(n.imageSizes)+'"]')):r+='[href="'+rn(e)+'"]';var l=r;switch(t){case"style":l=so(e);break;case"script":l=lo(e)}pn.has(l)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),pn.set(l,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(xr(l))||t==="script"&&i.querySelector(wr(l))||(t=i.createElement("link"),Ct(t,"link",e),Re(t),i.head.appendChild(t)))}}function S1(e,t){la.m(e,t);var n=ro;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+rn(i)+'"][href="'+rn(e)+'"]',l=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=lo(e)}if(!pn.has(l)&&(e=x({rel:"modulepreload",href:e},t),pn.set(l,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wr(l)))return}i=n.createElement("link"),Ct(i,"link",e),Re(i),n.head.appendChild(i)}}}function T1(e,t,n){la.S(e,t,n);var i=ro;if(i&&e){var r=it(i).hoistableStyles,l=so(e);t=t||"default";var m=r.get(l);if(!m){var b={loading:0,preload:null};if(m=i.querySelector(xr(l)))b.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=pn.get(l))&&vd(e,n);var U=m=i.createElement("link");Re(U),Ct(U,"link",e),U._p=new Promise(function(W,ie){U.onload=W,U.onerror=ie}),U.addEventListener("load",function(){b.loading|=1}),U.addEventListener("error",function(){b.loading|=2}),b.loading|=4,bl(m,t,i)}m={type:"stylesheet",instance:m,count:1,state:b},r.set(l,m)}}}function A1(e,t){la.X(e,t);var n=ro;if(n&&e){var i=it(n).hoistableScripts,r=lo(e),l=i.get(r);l||(l=n.querySelector(wr(r)),l||(e=x({src:e,async:!0},t),(t=pn.get(r))&&bd(e,t),l=n.createElement("script"),Re(l),Ct(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(r,l))}}function E1(e,t){la.M(e,t);var n=ro;if(n&&e){var i=it(n).hoistableScripts,r=lo(e),l=i.get(r);l||(l=n.querySelector(wr(r)),l||(e=x({src:e,async:!0,type:"module"},t),(t=pn.get(r))&&bd(e,t),l=n.createElement("script"),Re(l),Ct(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(r,l))}}function Eg(e,t,n,i){var r=(r=fe.current)?vl(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=so(n.href),n=it(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=so(n.href);var l=it(r).hoistableStyles,m=l.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,m),(l=r.querySelector(xr(e)))&&!l._p&&(m.instance=l,m.state.loading=5),pn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pn.set(e,n),l||_1(r,e,n,m.state))),t&&i===null)throw Error(s(528,""));return m}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=lo(n),n=it(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function so(e){return'href="'+rn(e)+'"'}function xr(e){return'link[rel="stylesheet"]['+e+"]"}function _g(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function _1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ct(t,"link",n),Re(t),e.head.appendChild(t))}function lo(e){return'[src="'+rn(e)+'"]'}function wr(e){return"script[async]"+e}function Cg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+rn(n.href)+'"]');if(i)return t.instance=i,Re(i),i;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Re(i),Ct(i,"style",r),bl(i,n.precedence,e),t.instance=i;case"stylesheet":r=so(n.href);var l=e.querySelector(xr(r));if(l)return t.state.loading|=4,t.instance=l,Re(l),l;i=_g(n),(r=pn.get(r))&&vd(i,r),l=(e.ownerDocument||e).createElement("link"),Re(l);var m=l;return m._p=new Promise(function(b,U){m.onload=b,m.onerror=U}),Ct(l,"link",i),t.state.loading|=4,bl(l,n.precedence,e),t.instance=l;case"script":return l=lo(n.src),(r=e.querySelector(wr(l)))?(t.instance=r,Re(r),r):(i=n,(r=pn.get(l))&&(i=x({},n),bd(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),Re(r),Ct(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,bl(i,n.precedence,e));return t.instance}function bl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,l=r,m=0;m<i.length;m++){var b=i[m];if(b.dataset.precedence===t)l=b;else if(l!==r)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function vd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xl=null;function Dg(e,t,n){if(xl===null){var i=new Map,r=xl=new Map;r.set(n,i)}else r=xl,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var l=n[r];if(!(l[Se]||l[dt]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var m=l.getAttribute(t)||"";m=e+m;var b=i.get(m);b?b.push(l):i.set(m,[l])}}return i}function kg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function C1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function D1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=so(i.href),l=t.querySelector(xr(r));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,Re(l);return}l=t.ownerDocument||t,i=_g(i),(r=pn.get(r))&&vd(i,r),l=l.createElement("link"),Re(l);var m=l;m._p=new Promise(function(b,U){m.onload=b,m.onerror=U}),Ct(l,"link",i),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=wl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var xd=0;function k1(e,t){return e.stylesheets&&e.count===0&&Tl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Tl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&xd===0&&(xd=62500*c1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>xd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sl=null;function Tl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sl=new Map,t.forEach(j1,e),Sl=null,wl.call(e))}function j1(e,t){if(!(t.state.loading&4)){var n=Sl.get(e);if(n)var i=n.get(null);else{n=new Map,Sl.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var m=r[l];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),i=m)}i&&n.set(null,i)}r=t.instance,m=r.getAttribute("data-precedence"),l=n.get(m)||i,l===i&&n.set(null,r),n.set(m,r),this.count++,i=wl.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),l?l.parentNode.insertBefore(r,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Sr={$$typeof:w,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function O1(e,t,n,i,r,l,m,b,U){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.hiddenUpdates=Oo(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function Og(e,t,n,i,r,l,m,b,U,W,ie,le){return e=new O1(e,t,n,m,U,W,ie,le,b),t=1,l===!0&&(t|=24),l=Xt(3,null,null,t),e.current=l,l.stateNode=e,t=Jc(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:t},au(l),e}function Mg(e){return e?(e=Pi,e):Pi}function Rg(e,t,n,i,r,l){r=Mg(r),i.context===null?i.context=r:i.pendingContext=r,i=_a(t),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=Ca(e,i,t),n!==null&&(Vt(n,e,t),er(n,e,t))}function zg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wd(e,t){zg(e,t),(e=e.alternate)&&zg(e,t)}function Ig(e){if(e.tag===13||e.tag===31){var t=ti(e,67108864);t!==null&&Vt(t,e,67108864),wd(e,67108864)}}function Lg(e){if(e.tag===13||e.tag===31){var t=en();t=Lt(t);var n=ti(e,t);n!==null&&Vt(n,e,t),wd(e,t)}}var Al=!0;function M1(e,t,n,i){var r=$.T;$.T=null;var l=H.p;try{H.p=2,Sd(e,t,n,i)}finally{H.p=l,$.T=r}}function R1(e,t,n,i){var r=$.T;$.T=null;var l=H.p;try{H.p=8,Sd(e,t,n,i)}finally{H.p=l,$.T=r}}function Sd(e,t,n,i){if(Al){var r=Td(i);if(r===null)ld(e,t,i,El,n),Ug(e,i);else if(I1(r,e,t,n,i))i.stopPropagation();else if(Ug(e,i),t&4&&-1<z1.indexOf(e)){for(;r!==null;){var l=he(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var m=$t(l.pendingLanes);if(m!==0){var b=l;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var U=1<<31-ct(m);b.entanglements[1]|=U,m&=~U}Ln(l),(He&6)===0&&(sl=St()+500,gr(0))}}break;case 31:case 13:b=ti(l,2),b!==null&&Vt(b,l,2),cl(),wd(l,2)}if(l=Td(i),l===null&&ld(e,t,i,El,n),l===r)break;r=l}r!==null&&i.stopPropagation()}else ld(e,t,i,null,n)}}function Td(e){return e=Ec(e),Ad(e)}var El=null;function Ad(e){if(El=null,e=de(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return El=e,null}function Ng(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xa()){case Pn:return 2;case Bn:return 8;case Za:case ms:return 32;case Co:return 268435456;default:return 32}default:return 32}}var Ed=!1,Ua=null,Pa=null,Ba=null,Tr=new Map,Ar=new Map,qa=[],z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ug(e,t){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function Er(e,t,n,i,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[r]},t!==null&&(t=he(t),t!==null&&Ig(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function I1(e,t,n,i,r){switch(t){case"focusin":return Ua=Er(Ua,e,t,n,i,r),!0;case"dragenter":return Pa=Er(Pa,e,t,n,i,r),!0;case"mouseover":return Ba=Er(Ba,e,t,n,i,r),!0;case"pointerover":var l=r.pointerId;return Tr.set(l,Er(Tr.get(l)||null,e,t,n,i,r)),!0;case"gotpointercapture":return l=r.pointerId,Ar.set(l,Er(Ar.get(l)||null,e,t,n,i,r)),!0}return!1}function Pg(e){var t=de(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Lo(e.priority,function(){Lg(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Lo(e.priority,function(){Lg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _l(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Td(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ac=i,n.target.dispatchEvent(i),Ac=null}else return t=he(n),t!==null&&Ig(t),e.blockedOn=n,!1;t.shift()}return!0}function Bg(e,t,n){_l(e)&&n.delete(t)}function L1(){Ed=!1,Ua!==null&&_l(Ua)&&(Ua=null),Pa!==null&&_l(Pa)&&(Pa=null),Ba!==null&&_l(Ba)&&(Ba=null),Tr.forEach(Bg),Ar.forEach(Bg)}function Cl(e,t){e.blockedOn===t&&(e.blockedOn=null,Ed||(Ed=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,L1)))}var Dl=null;function qg(e){Dl!==e&&(Dl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Dl===e&&(Dl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(Ad(i||n)===null)continue;break}var l=he(n);l!==null&&(e.splice(t,3),t-=3,Tu(l,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function co(e){function t(U){return Cl(U,e)}Ua!==null&&Cl(Ua,e),Pa!==null&&Cl(Pa,e),Ba!==null&&Cl(Ba,e),Tr.forEach(t),Ar.forEach(t);for(var n=0;n<qa.length;n++){var i=qa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<qa.length&&(n=qa[0],n.blockedOn===null);)Pg(n),n.blockedOn===null&&qa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],l=n[i+1],m=r[nt]||null;if(typeof l=="function")m||qg(n);else if(m){var b=null;if(l&&l.hasAttribute("formAction")){if(r=l,m=l[nt]||null)b=m.formAction;else if(Ad(r)!==null)continue}else b=m.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),qg(n)}}}function Hg(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function _d(e){this._internalRoot=e}kl.prototype.render=_d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=en();Rg(n,i,e,t,null,null)},kl.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rg(e.current,2,null,e,null,null),cl(),t[Qn]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Io();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qa.length&&t!==0&&t<qa[n].priority;n++);qa.splice(n,0,e),n===0&&Pg(e)}};var Vg=o.version;if(Vg!=="19.2.0")throw Error(s(527,Vg,"19.2.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var N1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{On=jl.inject(N1),bt=jl}catch{}}return _r.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,i="",r=Zp,l=Kp,m=Wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Og(e,1,!1,null,null,n,i,null,r,l,m,Hg),e[Qn]=t.current,sd(e),new _d(t)},_r.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var i=!1,r="",l=Zp,m=Kp,b=Wp,U=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(U=n.formState)),t=Og(e,1,!0,t,n??null,i,r,U,l,m,b,Hg),t.context=Mg(null),n=t.current,i=en(),i=Lt(i),r=_a(i),r.callback=null,Ca(n,r,i),n=i,t.current.lanes=n,ba(t,n),Ln(t),e[Qn]=t.current,sd(e),new kl(t)},_r.version="19.2.0",_r}var Yg;function cw(){if(Yg)return Cd.exports;Yg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Cd.exports=lw(),Cd.exports}var Xg=cw(),jd={exports:{}},Od={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function uw(){if(Zg)return Od;Zg=1;var a=N0();function o(g,y){return g===y&&(g!==0||1/g===1/y)||g!==g&&y!==y}var c=typeof Object.is=="function"?Object.is:o,s=a.useSyncExternalStore,d=a.useRef,f=a.useEffect,p=a.useMemo,h=a.useDebugValue;return Od.useSyncExternalStoreWithSelector=function(g,y,T,x,S){var D=d(null);if(D.current===null){var C={hasValue:!1,value:null};D.current=C}else C=D.current;D=p(function(){function A(L){if(!z){if(z=!0,M=L,L=x(L),S!==void 0&&C.hasValue){var B=C.value;if(S(B,L))return w=B}return w=L}if(B=w,c(M,L))return B;var Q=x(L);return S!==void 0&&S(B,Q)?(M=L,B):(M=L,w=Q)}var z=!1,M,w,E=T===void 0?null:T;return[function(){return A(y())},E===null?void 0:function(){return A(E())}]},[y,T,x,S]);var R=s(g,D[0],D[1]);return f(function(){C.hasValue=!0,C.value=R},[R]),h(R),R},Od}var Kg;function dw(){return Kg||(Kg=1,jd.exports=uw()),jd.exports}var fw=dw();function K0(a){a()}function mw(){let a=null,o=null;return{clear(){a=null,o=null},notify(){K0(()=>{let c=a;for(;c;)c.callback(),c=c.next})},get(){const c=[];let s=a;for(;s;)c.push(s),s=s.next;return c},subscribe(c){let s=!0;const d=o={callback:c,next:null,prev:o};return d.prev?d.prev.next=d:a=d,function(){!s||a===null||(s=!1,d.next?d.next.prev=d.prev:o=d.prev,d.prev?d.prev.next=d.next:a=d.next)}}}}var Wg={notify(){},get:()=>[]};function pw(a,o){let c,s=Wg,d=0,f=!1;function p(R){T();const A=s.subscribe(R);let z=!1;return()=>{z||(z=!0,A(),x())}}function h(){s.notify()}function g(){C.onStateChange&&C.onStateChange()}function y(){return f}function T(){d++,c||(c=a.subscribe(g),s=mw())}function x(){d--,c&&d===0&&(c(),c=void 0,s.clear(),s=Wg)}function S(){f||(f=!0,T())}function D(){f&&(f=!1,x())}const C={addNestedSub:p,notifyNestedSubs:h,handleChangeWrapper:g,isSubscribed:y,trySubscribe:S,tryUnsubscribe:D,getListeners:()=>s};return C}var hw=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gw=hw(),yw=()=>typeof navigator<"u"&&navigator.product==="ReactNative",vw=yw(),bw=()=>gw||vw?_.useLayoutEffect:_.useEffect,xw=bw();function Jg(a,o){return a===o?a!==0||o!==0||1/a===1/o:a!==a&&o!==o}function Vr(a,o){if(Jg(a,o))return!0;if(typeof a!="object"||a===null||typeof o!="object"||o===null)return!1;const c=Object.keys(a),s=Object.keys(o);if(c.length!==s.length)return!1;for(let d=0;d<c.length;d++)if(!Object.prototype.hasOwnProperty.call(o,c[d])||!Jg(a[c[d]],o[c[d]]))return!1;return!0}var ww=Symbol.for("react-redux-context"),Sw=typeof globalThis<"u"?globalThis:{};function Tw(){if(!_.createContext)return{};const a=Sw[ww]??=new Map;let o=a.get(_.createContext);return o||(o=_.createContext(null),a.set(_.createContext,o)),o}var Ga=Tw();function Aw(a){const{children:o,context:c,serverState:s,store:d}=a,f=_.useMemo(()=>{const g=pw(d);return{store:d,subscription:g,getServerState:s?()=>s:void 0}},[d,s]),p=_.useMemo(()=>d.getState(),[d]);xw(()=>{const{subscription:g}=f;return g.onStateChange=g.notifyNestedSubs,g.trySubscribe(),p!==d.getState()&&g.notifyNestedSubs(),()=>{g.tryUnsubscribe(),g.onStateChange=void 0}},[f,p]);const h=c||Ga;return _.createElement(h.Provider,{value:f},o)}var Ew=Aw;function Rf(a=Ga){return function(){return _.useContext(a)}}var W0=Rf();function J0(a=Ga){const o=a===Ga?W0:Rf(a),c=()=>{const{store:s}=o();return s};return Object.assign(c,{withTypes:()=>c}),c}var ev=J0();function _w(a=Ga){const o=a===Ga?ev:J0(a),c=()=>o().dispatch;return Object.assign(c,{withTypes:()=>c}),c}var zf=_w(),Cw=(a,o)=>a===o;function Dw(a=Ga){const o=a===Ga?W0:Rf(a),c=(s,d={})=>{const{equalityFn:f=Cw}=typeof d=="function"?{equalityFn:d}:d,p=o(),{store:h,subscription:g,getServerState:y}=p;_.useRef(!0);const T=_.useCallback({[s.name](S){return s(S)}}[s.name],[s]),x=fw.useSyncExternalStoreWithSelector(g.addNestedSub,h.getState,y||h.getState,T,f);return _.useDebugValue(x),x};return Object.assign(c,{withTypes:()=>c}),c}var kw=Dw(),jw=K0;function kt(a){return`Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}var Ow=typeof Symbol=="function"&&Symbol.observable||"@@observable",ey=Ow,Md=()=>Math.random().toString(36).substring(7).split("").join("."),Mw={INIT:`@@redux/INIT${Md()}`,REPLACE:`@@redux/REPLACE${Md()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Md()}`},Zl=Mw;function Fa(a){if(typeof a!="object"||a===null)return!1;let o=a;for(;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return Object.getPrototypeOf(a)===o||Object.getPrototypeOf(a)===null}function tv(a,o,c){if(typeof a!="function")throw new Error(kt(2));if(typeof o=="function"&&typeof c=="function"||typeof c=="function"&&typeof arguments[3]=="function")throw new Error(kt(0));if(typeof o=="function"&&typeof c>"u"&&(c=o,o=void 0),typeof c<"u"){if(typeof c!="function")throw new Error(kt(1));return c(tv)(a,o)}let s=a,d=o,f=new Map,p=f,h=0,g=!1;function y(){p===f&&(p=new Map,f.forEach((A,z)=>{p.set(z,A)}))}function T(){if(g)throw new Error(kt(3));return d}function x(A){if(typeof A!="function")throw new Error(kt(4));if(g)throw new Error(kt(5));let z=!0;y();const M=h++;return p.set(M,A),function(){if(z){if(g)throw new Error(kt(6));z=!1,y(),p.delete(M),f=null}}}function S(A){if(!Fa(A))throw new Error(kt(7));if(typeof A.type>"u")throw new Error(kt(8));if(typeof A.type!="string")throw new Error(kt(17));if(g)throw new Error(kt(9));try{g=!0,d=s(d,A)}finally{g=!1}return(f=p).forEach(M=>{M()}),A}function D(A){if(typeof A!="function")throw new Error(kt(10));s=A,S({type:Zl.REPLACE})}function C(){const A=x;return{subscribe(z){if(typeof z!="object"||z===null)throw new Error(kt(11));function M(){const E=z;E.next&&E.next(T())}return M(),{unsubscribe:A(M)}},[ey](){return this}}}return S({type:Zl.INIT}),{dispatch:S,subscribe:x,getState:T,replaceReducer:D,[ey]:C}}function Rw(a){Object.keys(a).forEach(o=>{const c=a[o];if(typeof c(void 0,{type:Zl.INIT})>"u")throw new Error(kt(12));if(typeof c(void 0,{type:Zl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(kt(13))})}function nv(a){const o=Object.keys(a),c={};for(let f=0;f<o.length;f++){const p=o[f];typeof a[p]=="function"&&(c[p]=a[p])}const s=Object.keys(c);let d;try{Rw(c)}catch(f){d=f}return function(p={},h){if(d)throw d;let g=!1;const y={};for(let T=0;T<s.length;T++){const x=s[T],S=c[x],D=p[x],C=S(D,h);if(typeof C>"u")throw new Error(kt(14));y[x]=C,g=g||C!==D}return g=g||s.length!==Object.keys(p).length,g?y:p}}function Kl(...a){return a.length===0?o=>o:a.length===1?a[0]:a.reduce((o,c)=>(...s)=>o(c(...s)))}function zw(...a){return o=>(c,s)=>{const d=o(c,s);let f=()=>{throw new Error(kt(15))};const p={getState:d.getState,dispatch:(g,...y)=>f(g,...y)},h=a.map(g=>g(p));return f=Kl(...h)(d.dispatch),{...d,dispatch:f}}}function av(a){return Fa(a)&&"type"in a&&typeof a.type=="string"}var If=Symbol.for("immer-nothing"),Qr=Symbol.for("immer-draftable"),Qt=Symbol.for("immer-state");function jt(a,...o){throw new Error(`[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`)}var wo=Object.getPrototypeOf;function Dn(a){return!!a&&!!a[Qt]}function kn(a){return a?iv(a)||Array.isArray(a)||!!a[Qr]||!!a.constructor?.[Qr]||_o(a)||is(a):!1}var Iw=Object.prototype.constructor.toString(),ty=new WeakMap;function iv(a){if(!a||typeof a!="object")return!1;const o=Object.getPrototypeOf(a);if(o===null||o===Object.prototype)return!0;const c=Object.hasOwnProperty.call(o,"constructor")&&o.constructor;if(c===Object)return!0;if(typeof c!="function")return!1;let s=ty.get(c);return s===void 0&&(s=Function.toString.call(c),ty.set(c,s)),s===Iw}function Lw(a){return Dn(a)||jt(15,a),a[Qt].base_}function Xr(a,o,c=!0){Ti(a)===0?(c?Reflect.ownKeys(a):Object.keys(a)).forEach(d=>{o(d,a[d],a)}):a.forEach((s,d)=>o(d,s,a))}function Ti(a){const o=a[Qt];return o?o.type_:Array.isArray(a)?1:_o(a)?2:is(a)?3:0}function Zr(a,o){return Ti(a)===2?a.has(o):Object.prototype.hasOwnProperty.call(a,o)}function Rd(a,o){return Ti(a)===2?a.get(o):a[o]}function ov(a,o,c){const s=Ti(a);s===2?a.set(o,c):s===3?a.add(c):a[o]=c}function Nw(a,o){return a===o?a!==0||1/a===1/o:a!==a&&o!==o}function _o(a){return a instanceof Map}function is(a){return a instanceof Set}function bi(a){return a.copy_||a.base_}function sf(a,o){if(_o(a))return new Map(a);if(is(a))return new Set(a);if(Array.isArray(a))return Array.prototype.slice.call(a);const c=iv(a);if(o===!0||o==="class_only"&&!c){const s=Object.getOwnPropertyDescriptors(a);delete s[Qt];let d=Reflect.ownKeys(s);for(let f=0;f<d.length;f++){const p=d[f],h=s[p];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(s[p]={configurable:!0,writable:!0,enumerable:h.enumerable,value:a[p]})}return Object.create(wo(a),s)}else{const s=wo(a);if(s!==null&&c)return{...a};const d=Object.create(s);return Object.assign(d,a)}}function Lf(a,o=!1){return oc(a)||Dn(a)||!kn(a)||(Ti(a)>1&&Object.defineProperties(a,{set:Ol,add:Ol,clear:Ol,delete:Ol}),Object.freeze(a),o&&Object.values(a).forEach(c=>Lf(c,!0))),a}function Uw(){jt(2)}var Ol={value:Uw};function oc(a){return a===null||typeof a!="object"?!0:Object.isFrozen(a)}var lf={};function Ai(a){const o=lf[a];return o||jt(0,a),o}function Pw(a,o){lf[a]||(lf[a]=o)}var Kr;function rv(){return Kr}function Bw(a,o){return{drafts_:[],parent_:a,immer_:o,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ny(a,o){o&&(Ai("Patches"),a.patches_=[],a.inversePatches_=[],a.patchListener_=o)}function cf(a){uf(a),a.drafts_.forEach(qw),a.drafts_=null}function uf(a){a===Kr&&(Kr=a.parent_)}function ay(a){return Kr=Bw(Kr,a)}function qw(a){const o=a[Qt];o.type_===0||o.type_===1?o.revoke_():o.revoked_=!0}function iy(a,o){o.unfinalizedDrafts_=o.drafts_.length;const c=o.drafts_[0];return a!==void 0&&a!==c?(c[Qt].modified_&&(cf(o),jt(4)),kn(a)&&(a=Wl(o,a),o.parent_||Jl(o,a)),o.patches_&&Ai("Patches").generateReplacementPatches_(c[Qt].base_,a,o.patches_,o.inversePatches_)):a=Wl(o,c,[]),cf(o),o.patches_&&o.patchListener_(o.patches_,o.inversePatches_),a!==If?a:void 0}function Wl(a,o,c){if(oc(o))return o;const s=a.immer_.shouldUseStrictIteration(),d=o[Qt];if(!d)return Xr(o,(f,p)=>oy(a,d,o,f,p,c),s),o;if(d.scope_!==a)return o;if(!d.modified_)return Jl(a,d.base_,!0),d.base_;if(!d.finalized_){d.finalized_=!0,d.scope_.unfinalizedDrafts_--;const f=d.copy_;let p=f,h=!1;d.type_===3&&(p=new Set(f),f.clear(),h=!0),Xr(p,(g,y)=>oy(a,d,f,g,y,c,h),s),Jl(a,f,!1),c&&a.patches_&&Ai("Patches").generatePatches_(d,c,a.patches_,a.inversePatches_)}return d.copy_}function oy(a,o,c,s,d,f,p){if(d==null||typeof d!="object"&&!p)return;const h=oc(d);if(!(h&&!p)){if(Dn(d)){const g=f&&o&&o.type_!==3&&!Zr(o.assigned_,s)?f.concat(s):void 0,y=Wl(a,d,g);if(ov(c,s,y),Dn(y))a.canAutoFreeze_=!1;else return}else p&&c.add(d);if(kn(d)&&!h){if(!a.immer_.autoFreeze_&&a.unfinalizedDrafts_<1||o&&o.base_&&o.base_[s]===d&&h)return;Wl(a,d),(!o||!o.scope_.parent_)&&typeof s!="symbol"&&(_o(c)?c.has(s):Object.prototype.propertyIsEnumerable.call(c,s))&&Jl(a,d)}}}function Jl(a,o,c=!1){!a.parent_&&a.immer_.autoFreeze_&&a.canAutoFreeze_&&Lf(o,c)}function Hw(a,o){const c=Array.isArray(a),s={type_:c?1:0,scope_:o?o.scope_:rv(),modified_:!1,finalized_:!1,assigned_:{},parent_:o,base_:a,draft_:null,copy_:null,revoke_:null,isManual_:!1};let d=s,f=Nf;c&&(d=[s],f=Wr);const{revoke:p,proxy:h}=Proxy.revocable(d,f);return s.draft_=h,s.revoke_=p,h}var Nf={get(a,o){if(o===Qt)return a;const c=bi(a);if(!Zr(c,o))return Vw(a,c,o);const s=c[o];return a.finalized_||!kn(s)?s:s===zd(a.base_,o)?(Id(a),a.copy_[o]=ff(s,a)):s},has(a,o){return o in bi(a)},ownKeys(a){return Reflect.ownKeys(bi(a))},set(a,o,c){const s=sv(bi(a),o);if(s?.set)return s.set.call(a.draft_,c),!0;if(!a.modified_){const d=zd(bi(a),o),f=d?.[Qt];if(f&&f.base_===c)return a.copy_[o]=c,a.assigned_[o]=!1,!0;if(Nw(c,d)&&(c!==void 0||Zr(a.base_,o)))return!0;Id(a),df(a)}return a.copy_[o]===c&&(c!==void 0||o in a.copy_)||Number.isNaN(c)&&Number.isNaN(a.copy_[o])||(a.copy_[o]=c,a.assigned_[o]=!0),!0},deleteProperty(a,o){return zd(a.base_,o)!==void 0||o in a.base_?(a.assigned_[o]=!1,Id(a),df(a)):delete a.assigned_[o],a.copy_&&delete a.copy_[o],!0},getOwnPropertyDescriptor(a,o){const c=bi(a),s=Reflect.getOwnPropertyDescriptor(c,o);return s&&{writable:!0,configurable:a.type_!==1||o!=="length",enumerable:s.enumerable,value:c[o]}},defineProperty(){jt(11)},getPrototypeOf(a){return wo(a.base_)},setPrototypeOf(){jt(12)}},Wr={};Xr(Nf,(a,o)=>{Wr[a]=function(){return arguments[0]=arguments[0][0],o.apply(this,arguments)}});Wr.deleteProperty=function(a,o){return Wr.set.call(this,a,o,void 0)};Wr.set=function(a,o,c){return Nf.set.call(this,a[0],o,c,a[0])};function zd(a,o){const c=a[Qt];return(c?bi(c):a)[o]}function Vw(a,o,c){const s=sv(o,c);return s?"value"in s?s.value:s.get?.call(a.draft_):void 0}function sv(a,o){if(!(o in a))return;let c=wo(a);for(;c;){const s=Object.getOwnPropertyDescriptor(c,o);if(s)return s;c=wo(c)}}function df(a){a.modified_||(a.modified_=!0,a.parent_&&df(a.parent_))}function Id(a){a.copy_||(a.copy_=sf(a.base_,a.scope_.immer_.useStrictShallowCopy_))}var Qw=class{constructor(a){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(o,c,s)=>{if(typeof o=="function"&&typeof c!="function"){const f=c;c=o;const p=this;return function(g=f,...y){return p.produce(g,T=>c.call(this,T,...y))}}typeof c!="function"&&jt(6),s!==void 0&&typeof s!="function"&&jt(7);let d;if(kn(o)){const f=ay(this),p=ff(o,void 0);let h=!0;try{d=c(p),h=!1}finally{h?cf(f):uf(f)}return ny(f,s),iy(d,f)}else if(!o||typeof o!="object"){if(d=c(o),d===void 0&&(d=o),d===If&&(d=void 0),this.autoFreeze_&&Lf(d,!0),s){const f=[],p=[];Ai("Patches").generateReplacementPatches_(o,d,f,p),s(f,p)}return d}else jt(1,o)},this.produceWithPatches=(o,c)=>{if(typeof o=="function")return(p,...h)=>this.produceWithPatches(p,g=>o(g,...h));let s,d;return[this.produce(o,c,(p,h)=>{s=p,d=h}),s,d]},typeof a?.autoFreeze=="boolean"&&this.setAutoFreeze(a.autoFreeze),typeof a?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(a.useStrictShallowCopy),typeof a?.useStrictIteration=="boolean"&&this.setUseStrictIteration(a.useStrictIteration)}createDraft(a){kn(a)||jt(8),Dn(a)&&(a=lv(a));const o=ay(this),c=ff(a,void 0);return c[Qt].isManual_=!0,uf(o),c}finishDraft(a,o){const c=a&&a[Qt];(!c||!c.isManual_)&&jt(9);const{scope_:s}=c;return ny(s,o),iy(void 0,s)}setAutoFreeze(a){this.autoFreeze_=a}setUseStrictShallowCopy(a){this.useStrictShallowCopy_=a}setUseStrictIteration(a){this.useStrictIteration_=a}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(a,o){let c;for(c=o.length-1;c>=0;c--){const d=o[c];if(d.path.length===0&&d.op==="replace"){a=d.value;break}}c>-1&&(o=o.slice(c+1));const s=Ai("Patches").applyPatches_;return Dn(a)?s(a,o):this.produce(a,d=>s(d,o))}};function ff(a,o){const c=_o(a)?Ai("MapSet").proxyMap_(a,o):is(a)?Ai("MapSet").proxySet_(a,o):Hw(a,o);return(o?o.scope_:rv()).drafts_.push(c),c}function lv(a){return Dn(a)||jt(10,a),cv(a)}function cv(a){if(!kn(a)||oc(a))return a;const o=a[Qt];let c,s=!0;if(o){if(!o.modified_)return o.base_;o.finalized_=!0,c=sf(a,o.scope_.immer_.useStrictShallowCopy_),s=o.scope_.immer_.shouldUseStrictIteration()}else c=sf(a,!0);return Xr(c,(d,f)=>{ov(c,d,cv(f))},s),o&&(o.finalized_=!1),c}function Gw(){const o="replace",s="remove";function d(S,D,C,R){switch(S.type_){case 0:case 2:return p(S,D,C,R);case 1:return f(S,D,C,R);case 3:return h(S,D,C,R)}}function f(S,D,C,R){let{base_:A,assigned_:z}=S,M=S.copy_;M.length<A.length&&([A,M]=[M,A],[C,R]=[R,C]);for(let w=0;w<A.length;w++)if(z[w]&&M[w]!==A[w]){const E=D.concat([w]);C.push({op:o,path:E,value:x(M[w])}),R.push({op:o,path:E,value:x(A[w])})}for(let w=A.length;w<M.length;w++){const E=D.concat([w]);C.push({op:"add",path:E,value:x(M[w])})}for(let w=M.length-1;A.length<=w;--w){const E=D.concat([w]);R.push({op:s,path:E})}}function p(S,D,C,R){const{base_:A,copy_:z}=S;Xr(S.assigned_,(M,w)=>{const E=Rd(A,M),L=Rd(z,M),B=w?Zr(A,M)?o:"add":s;if(E===L&&B===o)return;const Q=D.concat(M);C.push(B===s?{op:B,path:Q}:{op:B,path:Q,value:L}),R.push(B==="add"?{op:s,path:Q}:B===s?{op:"add",path:Q,value:x(E)}:{op:o,path:Q,value:x(E)})})}function h(S,D,C,R){let{base_:A,copy_:z}=S,M=0;A.forEach(w=>{if(!z.has(w)){const E=D.concat([M]);C.push({op:s,path:E,value:w}),R.unshift({op:"add",path:E,value:w})}M++}),M=0,z.forEach(w=>{if(!A.has(w)){const E=D.concat([M]);C.push({op:"add",path:E,value:w}),R.unshift({op:s,path:E,value:w})}M++})}function g(S,D,C,R){C.push({op:o,path:[],value:D===If?void 0:D}),R.push({op:o,path:[],value:S})}function y(S,D){return D.forEach(C=>{const{path:R,op:A}=C;let z=S;for(let L=0;L<R.length-1;L++){const B=Ti(z);let Q=R[L];typeof Q!="string"&&typeof Q!="number"&&(Q=""+Q),(B===0||B===1)&&(Q==="__proto__"||Q==="constructor")&&jt(19),typeof z=="function"&&Q==="prototype"&&jt(19),z=Rd(z,Q),typeof z!="object"&&jt(18,R.join("/"))}const M=Ti(z),w=T(C.value),E=R[R.length-1];switch(A){case o:switch(M){case 2:return z.set(E,w);case 3:jt(16);default:return z[E]=w}case"add":switch(M){case 1:return E==="-"?z.push(w):z.splice(E,0,w);case 2:return z.set(E,w);case 3:return z.add(w);default:return z[E]=w}case s:switch(M){case 1:return z.splice(E,1);case 2:return z.delete(E);case 3:return z.delete(C.value);default:return delete z[E]}default:jt(17,A)}}),S}function T(S){if(!kn(S))return S;if(Array.isArray(S))return S.map(T);if(_o(S))return new Map(Array.from(S.entries()).map(([C,R])=>[C,T(R)]));if(is(S))return new Set(Array.from(S).map(T));const D=Object.create(wo(S));for(const C in S)D[C]=T(S[C]);return Zr(S,Qr)&&(D[Qr]=S[Qr]),D}function x(S){return Dn(S)?T(S):S}Pw("Patches",{applyPatches_:y,generatePatches_:d,generateReplacementPatches_:g})}var Ei=new Qw,os=Ei.produce,uv=Ei.produceWithPatches.bind(Ei),Fw=Ei.setUseStrictIteration.bind(Ei),ry=Ei.applyPatches.bind(Ei);function $w(a,o=`expected a function, instead received ${typeof a}`){if(typeof a!="function")throw new TypeError(o)}function Yw(a,o=`expected an object, instead received ${typeof a}`){if(typeof a!="object")throw new TypeError(o)}function Xw(a,o="expected all items to be functions, instead received the following types: "){if(!a.every(c=>typeof c=="function")){const c=a.map(s=>typeof s=="function"?`function ${s.name||"unnamed"}()`:typeof s).join(", ");throw new TypeError(`${o}[${c}]`)}}var sy=a=>Array.isArray(a)?a:[a];function Zw(a){const o=Array.isArray(a[0])?a[0]:a;return Xw(o,"createSelector expects all input-selectors to be functions, but received the following types: "),o}function Kw(a,o){const c=[],{length:s}=a;for(let d=0;d<s;d++)c.push(a[d].apply(null,o));return c}var Ww=class{constructor(a){this.value=a}deref(){return this.value}},Jw=typeof WeakRef<"u"?WeakRef:Ww,eS=0,ly=1;function Ml(){return{s:eS,v:void 0,o:null,p:null}}function ec(a,o={}){let c=Ml();const{resultEqualityCheck:s}=o;let d,f=0;function p(){let h=c;const{length:g}=arguments;for(let x=0,S=g;x<S;x++){const D=arguments[x];if(typeof D=="function"||typeof D=="object"&&D!==null){let C=h.o;C===null&&(h.o=C=new WeakMap);const R=C.get(D);R===void 0?(h=Ml(),C.set(D,h)):h=R}else{let C=h.p;C===null&&(h.p=C=new Map);const R=C.get(D);R===void 0?(h=Ml(),C.set(D,h)):h=R}}const y=h;let T;if(h.s===ly)T=h.v;else if(T=a.apply(null,arguments),f++,s){const x=d?.deref?.()??d;x!=null&&s(x,T)&&(T=x,f!==0&&f--),d=typeof T=="object"&&T!==null||typeof T=="function"?new Jw(T):T}return y.s=ly,y.v=T,T}return p.clearCache=()=>{c=Ml(),p.resetResultsCount()},p.resultsCount=()=>f,p.resetResultsCount=()=>{f=0},p}function tS(a,...o){const c=typeof a=="function"?{memoize:a,memoizeOptions:o}:a,s=(...d)=>{let f=0,p=0,h,g={},y=d.pop();typeof y=="object"&&(g=y,y=d.pop()),$w(y,`createSelector expects an output function after the inputs, but received: [${typeof y}]`);const T={...c,...g},{memoize:x,memoizeOptions:S=[],argsMemoize:D=ec,argsMemoizeOptions:C=[]}=T,R=sy(S),A=sy(C),z=Zw(d),M=x(function(){return f++,y.apply(null,arguments)},...R),w=D(function(){p++;const L=Kw(z,arguments);return h=M.apply(null,L),h},...A);return Object.assign(w,{resultFunc:y,memoizedResultFunc:M,dependencies:z,dependencyRecomputations:()=>p,resetDependencyRecomputations:()=>{p=0},lastResult:()=>h,recomputations:()=>f,resetRecomputations:()=>{f=0},memoize:x,argsMemoize:D})};return Object.assign(s,{withTypes:()=>s}),s}var Uf=tS(ec),nS=Object.assign((a,o=Uf)=>{Yw(a,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof a}`);const c=Object.keys(a),s=c.map(f=>a[f]);return o(s,(...f)=>f.reduce((p,h,g)=>(p[c[g]]=h,p),{}))},{withTypes:()=>nS});function dv(a){return({dispatch:c,getState:s})=>d=>f=>typeof f=="function"?f(c,s,a):d(f)}var aS=dv(),iS=dv,oS=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Kl:Kl.apply(null,arguments)},rS=a=>a&&typeof a.match=="function";function _n(a,o){function c(...s){if(o){let d=o(...s);if(!d)throw new Error(Cn(0));return{type:a,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:a,payload:s[0]}}return c.toString=()=>`${a}`,c.type=a,c.match=s=>av(s)&&s.type===a,c}var fv=class Br extends Array{constructor(...o){super(...o),Object.setPrototypeOf(this,Br.prototype)}static get[Symbol.species](){return Br}concat(...o){return super.concat.apply(this,o)}prepend(...o){return o.length===1&&Array.isArray(o[0])?new Br(...o[0].concat(this)):new Br(...o.concat(this))}};function cy(a){return kn(a)?os(a,()=>{}):a}function Rl(a,o,c){return a.has(o)?a.get(o):a.set(o,c(o)).get(o)}function sS(a){return typeof a=="boolean"}var lS=()=>function(o){const{thunk:c=!0}=o??{};let s=new fv;return c&&(sS(c)?s.push(aS):s.push(iS(c.extraArgument))),s},rc="RTK_autoBatch",Cr=()=>a=>({payload:a,meta:{[rc]:!0}}),uy=a=>o=>{setTimeout(o,a)},cS=(a={type:"raf"})=>o=>(...c)=>{const s=o(...c);let d=!0,f=!1,p=!1;const h=new Set,g=a.type==="tick"?queueMicrotask:a.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:uy(10):a.type==="callback"?a.queueNotification:uy(a.timeout),y=()=>{p=!1,f&&(f=!1,h.forEach(T=>T()))};return Object.assign({},s,{subscribe(T){const x=()=>d&&T(),S=s.subscribe(x);return h.add(T),()=>{S(),h.delete(T)}},dispatch(T){try{return d=!T?.meta?.[rc],f=!d,f&&(p||(p=!0,g(y))),s.dispatch(T)}finally{d=!0}}})},uS=a=>function(c){const{autoBatch:s=!0}=c??{};let d=new fv(a);return s&&d.push(cS(typeof s=="object"?s:void 0)),d};function dS(a){const o=lS(),{reducer:c=void 0,middleware:s,devTools:d=!0,preloadedState:f=void 0,enhancers:p=void 0}=a||{};let h;if(typeof c=="function")h=c;else if(Fa(c))h=nv(c);else throw new Error(Cn(1));let g;typeof s=="function"?g=s(o):g=o();let y=Kl;d&&(y=oS({trace:!1,...typeof d=="object"&&d}));const T=zw(...g),x=uS(T);let S=typeof p=="function"?p(x):x();const D=y(...S);return tv(h,f,D)}function mv(a){const o={},c=[];let s;const d={addCase(f,p){const h=typeof f=="string"?f:f.type;if(!h)throw new Error(Cn(28));if(h in o)throw new Error(Cn(29));return o[h]=p,d},addAsyncThunk(f,p){return p.pending&&(o[f.pending.type]=p.pending),p.rejected&&(o[f.rejected.type]=p.rejected),p.fulfilled&&(o[f.fulfilled.type]=p.fulfilled),p.settled&&c.push({matcher:f.settled,reducer:p.settled}),d},addMatcher(f,p){return c.push({matcher:f,reducer:p}),d},addDefaultCase(f){return s=f,d}};return a(d),[o,c,s]}Fw(!1);function fS(a){return typeof a=="function"}function mS(a,o){let[c,s,d]=mv(o),f;if(fS(a))f=()=>cy(a());else{const h=cy(a);f=()=>h}function p(h=f(),g){let y=[c[g.type],...s.filter(({matcher:T})=>T(g)).map(({reducer:T})=>T)];return y.filter(T=>!!T).length===0&&(y=[d]),y.reduce((T,x)=>{if(x)if(Dn(T)){const D=x(T,g);return D===void 0?T:D}else{if(kn(T))return os(T,S=>x(S,g));{const S=x(T,g);if(S===void 0){if(T===null)return T;throw Error("A case reducer on a non-draftable value must not return undefined")}return S}}return T},h)}return p.getInitialState=f,p}var pv=(a,o)=>rS(a)?a.match(o):a(o);function ma(...a){return o=>a.some(c=>pv(c,o))}function Gr(...a){return o=>a.every(c=>pv(c,o))}function sc(a,o){if(!a||!a.meta)return!1;const c=typeof a.meta.requestId=="string",s=o.indexOf(a.meta.requestStatus)>-1;return c&&s}function rs(a){return typeof a[0]=="function"&&"pending"in a[0]&&"fulfilled"in a[0]&&"rejected"in a[0]}function Pf(...a){return a.length===0?o=>sc(o,["pending"]):rs(a)?ma(...a.map(o=>o.pending)):Pf()(a[0])}function So(...a){return a.length===0?o=>sc(o,["rejected"]):rs(a)?ma(...a.map(o=>o.rejected)):So()(a[0])}function lc(...a){const o=c=>c&&c.meta&&c.meta.rejectedWithValue;return a.length===0?Gr(So(...a),o):rs(a)?Gr(So(...a),o):lc()(a[0])}function $a(...a){return a.length===0?o=>sc(o,["fulfilled"]):rs(a)?ma(...a.map(o=>o.fulfilled)):$a()(a[0])}function mf(...a){return a.length===0?o=>sc(o,["pending","fulfilled","rejected"]):rs(a)?ma(...a.flatMap(o=>[o.pending,o.rejected,o.fulfilled])):mf()(a[0])}var pS="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Bf=(a=21)=>{let o="",c=a;for(;c--;)o+=pS[Math.random()*64|0];return o},hS=["name","message","stack","code"],Ld=class{constructor(a,o){this.payload=a,this.meta=o}_type},dy=class{constructor(a,o){this.payload=a,this.meta=o}_type},gS=a=>{if(typeof a=="object"&&a!==null){const o={};for(const c of hS)typeof a[c]=="string"&&(o[c]=a[c]);return o}return{message:String(a)}},fy="External signal was aborted",To=(()=>{function a(o,c,s){const d=_n(o+"/fulfilled",(g,y,T,x)=>({payload:g,meta:{...x||{},arg:T,requestId:y,requestStatus:"fulfilled"}})),f=_n(o+"/pending",(g,y,T)=>({payload:void 0,meta:{...T||{},arg:y,requestId:g,requestStatus:"pending"}})),p=_n(o+"/rejected",(g,y,T,x,S)=>({payload:x,error:(s&&s.serializeError||gS)(g||"Rejected"),meta:{...S||{},arg:T,requestId:y,rejectedWithValue:!!x,requestStatus:"rejected",aborted:g?.name==="AbortError",condition:g?.name==="ConditionError"}}));function h(g,{signal:y}={}){return(T,x,S)=>{const D=s?.idGenerator?s.idGenerator(g):Bf(),C=new AbortController;let R,A;function z(w){A=w,C.abort()}y&&(y.aborted?z(fy):y.addEventListener("abort",()=>z(fy),{once:!0}));const M=(async function(){let w;try{let L=s?.condition?.(g,{getState:x,extra:S});if(vS(L)&&(L=await L),L===!1||C.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const B=new Promise((Q,j)=>{R=()=>{j({name:"AbortError",message:A||"Aborted"})},C.signal.addEventListener("abort",R)});T(f(D,g,s?.getPendingMeta?.({requestId:D,arg:g},{getState:x,extra:S}))),w=await Promise.race([B,Promise.resolve(c(g,{dispatch:T,getState:x,extra:S,requestId:D,signal:C.signal,abort:z,rejectWithValue:(Q,j)=>new Ld(Q,j),fulfillWithValue:(Q,j)=>new dy(Q,j)})).then(Q=>{if(Q instanceof Ld)throw Q;return Q instanceof dy?d(Q.payload,D,g,Q.meta):d(Q,D,g)})])}catch(L){w=L instanceof Ld?p(null,D,g,L.payload,L.meta):p(L,D,g)}finally{R&&C.signal.removeEventListener("abort",R)}return s&&!s.dispatchConditionRejection&&p.match(w)&&w.meta.condition||T(w),w})();return Object.assign(M,{abort:z,requestId:D,arg:g,unwrap(){return M.then(yS)}})}}return Object.assign(h,{pending:f,rejected:p,fulfilled:d,settled:ma(p,d),typePrefix:o})}return a.withTypes=()=>a,a})();function yS(a){if(a.meta&&a.meta.rejectedWithValue)throw a.payload;if(a.error)throw a.error;return a.payload}function vS(a){return a!==null&&typeof a=="object"&&typeof a.then=="function"}var bS=Symbol.for("rtk-slice-createasyncthunk");function xS(a,o){return`${a}/${o}`}function wS({creators:a}={}){const o=a?.asyncThunk?.[bS];return function(s){const{name:d,reducerPath:f=d}=s;if(!d)throw new Error(Cn(11));const p=(typeof s.reducers=="function"?s.reducers(TS()):s.reducers)||{},h=Object.keys(p),g={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},y={addCase(w,E){const L=typeof w=="string"?w:w.type;if(!L)throw new Error(Cn(12));if(L in g.sliceCaseReducersByType)throw new Error(Cn(13));return g.sliceCaseReducersByType[L]=E,y},addMatcher(w,E){return g.sliceMatchers.push({matcher:w,reducer:E}),y},exposeAction(w,E){return g.actionCreators[w]=E,y},exposeCaseReducer(w,E){return g.sliceCaseReducersByName[w]=E,y}};h.forEach(w=>{const E=p[w],L={reducerName:w,type:xS(d,w),createNotation:typeof s.reducers=="function"};ES(E)?CS(L,E,y,o):AS(L,E,y)});function T(){const[w={},E=[],L=void 0]=typeof s.extraReducers=="function"?mv(s.extraReducers):[s.extraReducers],B={...w,...g.sliceCaseReducersByType};return mS(s.initialState,Q=>{for(let j in B)Q.addCase(j,B[j]);for(let j of g.sliceMatchers)Q.addMatcher(j.matcher,j.reducer);for(let j of E)Q.addMatcher(j.matcher,j.reducer);L&&Q.addDefaultCase(L)})}const x=w=>w,S=new Map,D=new WeakMap;let C;function R(w,E){return C||(C=T()),C(w,E)}function A(){return C||(C=T()),C.getInitialState()}function z(w,E=!1){function L(Q){let j=Q[w];return typeof j>"u"&&E&&(j=Rl(D,L,A)),j}function B(Q=x){const j=Rl(S,E,()=>new WeakMap);return Rl(j,Q,()=>{const F={};for(const[O,v]of Object.entries(s.selectors??{}))F[O]=SS(v,Q,()=>Rl(D,Q,A),E);return F})}return{reducerPath:w,getSelectors:B,get selectors(){return B(L)},selectSlice:L}}const M={name:d,reducer:R,actions:g.actionCreators,caseReducers:g.sliceCaseReducersByName,getInitialState:A,...z(f),injectInto(w,{reducerPath:E,...L}={}){const B=E??f;return w.inject({reducerPath:B,reducer:R},L),{...M,...z(B,!0)}}};return M}}function SS(a,o,c,s){function d(f,...p){let h=o(f);return typeof h>"u"&&s&&(h=c()),a(h,...p)}return d.unwrapped=a,d}var Qa=wS();function TS(){function a(o,c){return{_reducerDefinitionType:"asyncThunk",payloadCreator:o,...c}}return a.withTypes=()=>a,{reducer(o){return Object.assign({[o.name](...c){return o(...c)}}[o.name],{_reducerDefinitionType:"reducer"})},preparedReducer(o,c){return{_reducerDefinitionType:"reducerWithPrepare",prepare:o,reducer:c}},asyncThunk:a}}function AS({type:a,reducerName:o,createNotation:c},s,d){let f,p;if("reducer"in s){if(c&&!_S(s))throw new Error(Cn(17));f=s.reducer,p=s.prepare}else f=s;d.addCase(a,f).exposeCaseReducer(o,f).exposeAction(o,p?_n(a,p):_n(a))}function ES(a){return a._reducerDefinitionType==="asyncThunk"}function _S(a){return a._reducerDefinitionType==="reducerWithPrepare"}function CS({type:a,reducerName:o},c,s,d){if(!d)throw new Error(Cn(18));const{payloadCreator:f,fulfilled:p,pending:h,rejected:g,settled:y,options:T}=c,x=d(a,f,T);s.exposeAction(o,x),p&&s.addCase(x.fulfilled,p),h&&s.addCase(x.pending,h),g&&s.addCase(x.rejected,g),y&&s.addMatcher(x.settled,y),s.exposeCaseReducer(o,{fulfilled:p||zl,pending:h||zl,rejected:g||zl,settled:y||zl})}function zl(){}function Cn(a){return`Minified Redux Toolkit error #${a}; visit https://redux-toolkit.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}const DS={activeTab:"campaigns"},hv=Qa({name:"campaigns",initialState:DS,reducers:{setActiveTab:(a,o)=>{a.activeTab=o.payload}}}),{setActiveTab:$O}=hv.actions,kS=hv.reducer;/*! js-cookie v3.0.5 | MIT */function Il(a){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var s in c)a[s]=c[s]}return a}var jS={read:function(a){return a[0]==='"'&&(a=a.slice(1,-1)),a.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(a){return encodeURIComponent(a).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function pf(a,o){function c(d,f,p){if(!(typeof document>"u")){p=Il({},o,p),typeof p.expires=="number"&&(p.expires=new Date(Date.now()+p.expires*864e5)),p.expires&&(p.expires=p.expires.toUTCString()),d=encodeURIComponent(d).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var h="";for(var g in p)p[g]&&(h+="; "+g,p[g]!==!0&&(h+="="+p[g].split(";")[0]));return document.cookie=d+"="+a.write(f,d)+h}}function s(d){if(!(typeof document>"u"||arguments.length&&!d)){for(var f=document.cookie?document.cookie.split("; "):[],p={},h=0;h<f.length;h++){var g=f[h].split("="),y=g.slice(1).join("=");try{var T=decodeURIComponent(g[0]);if(p[T]=a.read(y,T),d===T)break}catch{}}return d?p[d]:p}}return Object.create({set:c,get:s,remove:function(d,f){c(d,"",Il({},f,{expires:-1}))},withAttributes:function(d){return pf(this.converter,Il({},this.attributes,d))},withConverter:function(d){return pf(Il({},this.converter,d),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(a)}})}var Un=pf(jS,{path:"/"}),my={};const vo=typeof window<"u",OS=!vo&&typeof process<"u"&&my?.SITEMAP_API_TIMEOUT_MS?Number(my.SITEMAP_API_TIMEOUT_MS):vo?3e4:9e4,Ae=F1.create({baseURL:"https://lifemakers.org/webapi",headers:{"x-api-key":"LMK_DEV_APIKEY_abc123"},timeout:OS,withCredentials:!0});Ae.interceptors.request.use(a=>{const o=vo?document.cookie.split("; ").find(h=>h.startsWith("token="))?.split("=")[1]:void 0,s=(vo?window.location.pathname:"/").match(/\/ngos\/(\d+)/),d=s?s[1]:null;a.headers.Accept="*/*",a.headers["Accept-Language"]="en-US,en;q=0.5",a.data instanceof FormData||(a.headers["Content-Type"]="application/json"),d&&(a.headers["ngo-id"]=d);const p=(vo?sessionStorage.getItem("token"):void 0)||o;return p&&(a.headers.Authorization=`Bearer ${p}`),a.data instanceof FormData&&delete a.headers["Content-Type"],a},a=>Promise.reject(a));Ae.interceptors.response.use(a=>a,a=>(a.response?.status===401&&console.error("Unauthorized access"),Promise.reject(a)));const Nd=To("auth/loginUser",async({credentials:a,rememberMe:o},{rejectWithValue:c})=>{try{return{...(await Ae.post("/api/auth/login",a)).data,rememberMe:o}}catch(s){return c(s.response?.data||"Login failed")}}),Ud=To("auth/registerUser",async(a,{rejectWithValue:o})=>{try{return(await Ae.post("/api/auth/register",a)).data}catch(c){return o(c.response?.data||"Registration failed")}}),Pd=To("auth/loginWithGoogle",async({idToken:a,rememberMe:o},{rejectWithValue:c})=>{try{return{...(await Ae.post("/api/auth/google",{idToken:a})).data,rememberMe:o}}catch(s){return c(s.response?.data||"Google login failed")}}),Bd=To("auth/loginWithFacebook",async({accessToken:a,rememberMe:o},{rejectWithValue:c})=>{try{return{...(await Ae.post("/api/auth/facebook",{accessToken:a})).data,rememberMe:o}}catch(s){return c(s.response?.data||"Facebook login failed")}}),MS=(a,o)=>{o?Un.set("isLoggedIn",a,{expires:7,path:"/"}):sessionStorage.setItem("isLoggedIn",a)},RS={user:null,loading:!1,error:null,success:!1},gv=Qa({name:"auth",initialState:RS,reducers:{logout:a=>{a.user=null,a.success=!1,sessionStorage.removeItem("isLoggedIn"),Un.remove("isLoggedIn")},resetAuthState:a=>{a.loading=!1,a.error=null,a.success=!1},setRegisteredEmail:(a,o)=>{a.registeredEmail=o.payload}},extraReducers:a=>{const o=d=>{d.loading=!0,d.error=null},c=(d,f)=>{if(d.loading=!1,d.user=f.payload.user,f.payload.succeeded){const p=f.payload?.token;MS(p,f.payload.rememberMe),d.success=!0}},s=(d,f)=>{d.loading=!1,d.error=f.payload};a.addCase(Nd.pending,o).addCase(Nd.fulfilled,c).addCase(Nd.rejected,s).addCase(Ud.pending,o).addCase(Ud.fulfilled,c).addCase(Ud.rejected,s).addCase(Pd.pending,o).addCase(Pd.fulfilled,c).addCase(Pd.rejected,s).addCase(Bd.pending,o).addCase(Bd.fulfilled,c).addCase(Bd.rejected,s)}}),{logout:zS,setRegisteredEmail:YO}=gv.actions,IS=gv.reducer;var LS=class extends Error{issues;constructor(a){super(a[0].message),this.name="SchemaError",this.issues=a}},yv=(a=>(a.uninitialized="uninitialized",a.pending="pending",a.fulfilled="fulfilled",a.rejected="rejected",a))(yv||{}),pa="uninitialized",hf="pending",qr="fulfilled",Hr="rejected";function py(a){return{status:a,isUninitialized:a===pa,isLoading:a===hf,isSuccess:a===qr,isError:a===Hr}}var hy=Fa;function qf(a,o){if(a===o||!(hy(a)&&hy(o)||Array.isArray(a)&&Array.isArray(o)))return o;const c=Object.keys(o),s=Object.keys(a);let d=c.length===s.length;const f=Array.isArray(o)?[]:{};for(const p of c)f[p]=qf(a[p],o[p]),d&&(d=a[p]===f[p]);return d?a:f}function gf(a,o,c){return a.reduce((s,d,f)=>(o(d,f)&&s.push(c(d,f)),s),[]).flat()}function NS(a){return new RegExp("(^|:)//").test(a)}function US(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function Hf(a){return a!=null}function gy(a){return[...a?.values()??[]].filter(Hf)}function PS(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var BS=a=>a.replace(/\/$/,""),qS=a=>a.replace(/^\//,"");function HS(a,o){if(!a)return o;if(!o)return a;if(NS(o))return o;const c=a.endsWith("/")||!o.startsWith("?")?"/":"";return a=BS(a),o=qS(o),`${a}${c}${o}`}function tc(a,o,c){return a.has(o)?a.get(o):a.set(o,c(o)).get(o)}var yf=()=>new Map,yy=(...a)=>fetch(...a),VS=a=>a.status>=200&&a.status<=299,QS=a=>/ion\/(vnd\.api\+)?json/.test(a.get("content-type")||"");function vy(a){if(!Fa(a))return a;const o={...a};for(const[c,s]of Object.entries(o))s===void 0&&delete o[c];return o}var GS=a=>typeof a=="object"&&(Fa(a)||Array.isArray(a)||typeof a.toJSON=="function");function vv({baseUrl:a,prepareHeaders:o=x=>x,fetchFn:c=yy,paramsSerializer:s,isJsonContentType:d=QS,jsonContentType:f="application/json",jsonReplacer:p,timeout:h,responseHandler:g,validateStatus:y,...T}={}){return typeof fetch>"u"&&c===yy&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(S,D,C)=>{const{getState:R,extra:A,endpoint:z,forced:M,type:w}=D;let E,{url:L,headers:B=new Headers(T.headers),params:Q=void 0,responseHandler:j=g??"json",validateStatus:F=y??VS,timeout:O=h,...v}=typeof S=="string"?{url:S}:S,I,q=D.signal;O&&(I=new AbortController,D.signal.addEventListener("abort",I.abort),q=I.signal);let J={...T,signal:q,...v};B=new Headers(vy(B)),J.headers=await o(B,{getState:R,arg:S,extra:A,endpoint:z,forced:M,type:w,extraOptions:C})||B;const se=GS(J.body);if(J.body!=null&&!se&&typeof J.body!="string"&&J.headers.delete("content-type"),!J.headers.has("content-type")&&se&&J.headers.set("content-type",f),se&&d(J.headers)&&(J.body=JSON.stringify(J.body,p)),J.headers.has("accept")||(j==="json"?J.headers.set("accept","application/json"):j==="text"&&J.headers.set("accept","text/plain, text/html, */*")),Q){const oe=~L.indexOf("?")?"&":"?",te=s?s(Q):new URLSearchParams(vy(Q));L+=oe+te}L=HS(a,L);const $=new Request(L,J);E={request:new Request(L,J)};let N,P=!1,X=I&&setTimeout(()=>{P=!0,I.abort()},O);try{N=await c($)}catch(oe){return{error:{status:P?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(oe)},meta:E}}finally{X&&clearTimeout(X),I?.signal.removeEventListener("abort",I.abort)}const Z=N.clone();E.response=Z;let ce,ae="";try{let oe;if(await Promise.all([x(N,j).then(te=>ce=te,te=>oe=te),Z.text().then(te=>ae=te,()=>{})]),oe)throw oe}catch(oe){return{error:{status:"PARSING_ERROR",originalStatus:N.status,data:ae,error:String(oe)},meta:E}}return F(N,ce)?{data:ce,meta:E}:{error:{status:N.status,data:ce},meta:E}};async function x(S,D){if(typeof D=="function")return D(S);if(D==="content-type"&&(D=d(S.headers)?"json":"text"),D==="json"){const C=await S.text();return C.length?JSON.parse(C):null}return S.text()}}var by=class{constructor(a,o=void 0){this.value=a,this.meta=o}},cc="__rtkq/",FS="online",$S="offline",bv="focused",Vf=_n(`${cc}${bv}`),xv=_n(`${cc}un${bv}`),Qf=_n(`${cc}${FS}`),wv=_n(`${cc}${$S}`),ss="query",Sv="mutation",Tv="infinitequery";function uc(a){return a.type===ss}function YS(a){return a.type===Sv}function dc(a){return a.type===Tv}function nc(a){return uc(a)||dc(a)}function Gf(a,o,c,s,d,f){const p=XS(a)?a(o,c,s,d):a;return p?gf(p,Hf,h=>f(Av(h))):[]}function XS(a){return typeof a=="function"}function Av(a){return typeof a=="string"?{type:a}:a}function ZS(a,o){return a.catch(o)}var Ao=(a,o)=>a.endpointDefinitions[o],Jr=Symbol("forceQueryFn"),vf=a=>typeof a[Jr]=="function";function KS({serializeQueryArgs:a,queryThunk:o,infiniteQueryThunk:c,mutationThunk:s,api:d,context:f,getInternalState:p}){const h=E=>p(E)?.runningQueries,g=E=>p(E)?.runningMutations,{unsubscribeQueryResult:y,removeMutationResult:T,updateSubscriptionOptions:x}=d.internalActions;return{buildInitiateQuery:z,buildInitiateInfiniteQuery:M,buildInitiateMutation:w,getRunningQueryThunk:S,getRunningMutationThunk:D,getRunningQueriesThunk:C,getRunningMutationsThunk:R};function S(E,L){return B=>{const Q=Ao(f,E),j=a({queryArgs:L,endpointDefinition:Q,endpointName:E});return h(B)?.get(j)}}function D(E,L){return B=>g(B)?.get(L)}function C(){return E=>gy(h(E))}function R(){return E=>gy(g(E))}function A(E,L){const B=(Q,{subscribe:j=!0,forceRefetch:F,subscriptionOptions:O,[Jr]:v,...I}={})=>(q,J)=>{const se=a({queryArgs:Q,endpointDefinition:L,endpointName:E});let $;const H={...I,type:ss,subscribe:j,forceRefetch:F,subscriptionOptions:O,endpointName:E,originalArgs:Q,queryCacheKey:se,[Jr]:v};if(uc(L))$=o(H);else{const{direction:ue,initialPageParam:Ee}=I;$=c({...H,direction:ue,initialPageParam:Ee})}const N=d.endpoints[E].select(Q),P=q($),X=N(J()),{requestId:Z,abort:ce}=P,ae=X.requestId!==Z,oe=h(q)?.get(se),te=()=>N(J()),fe=Object.assign(v?P.then(te):ae&&!oe?Promise.resolve(X):Promise.all([oe,P]).then(te),{arg:Q,requestId:Z,subscriptionOptions:O,queryCacheKey:se,abort:ce,async unwrap(){const ue=await fe;if(ue.isError)throw ue.error;return ue.data},refetch:()=>q(B(Q,{subscribe:!1,forceRefetch:!0})),unsubscribe(){j&&q(y({queryCacheKey:se,requestId:Z}))},updateSubscriptionOptions(ue){fe.subscriptionOptions=ue,q(x({endpointName:E,requestId:Z,queryCacheKey:se,options:ue}))}});if(!oe&&!ae&&!v){const ue=h(q);ue.set(se,fe),fe.then(()=>{ue.delete(se)})}return fe};return B}function z(E,L){return A(E,L)}function M(E,L){return A(E,L)}function w(E){return(L,{track:B=!0,fixedCacheKey:Q}={})=>(j,F)=>{const O=s({type:"mutation",endpointName:E,originalArgs:L,track:B,fixedCacheKey:Q}),v=j(O),{requestId:I,abort:q,unwrap:J}=v,se=ZS(v.unwrap().then(P=>({data:P})),P=>({error:P})),$=()=>{j(T({requestId:I,fixedCacheKey:Q}))},H=Object.assign(se,{arg:v.arg,requestId:I,abort:q,unwrap:J,reset:$}),N=g(j);return N.set(I,H),H.then(()=>{N.delete(I)}),Q&&(N.set(Q,H),H.then(()=>{N.get(Q)===H&&N.delete(Q)})),H}}}var Ev=class extends LS{constructor(a,o,c,s){super(a),this.value=o,this.schemaName=c,this._bqMeta=s}},pi=(a,o)=>Array.isArray(a)?a.includes(o):!!a;async function hi(a,o,c,s){const d=await a["~standard"].validate(o);if(d.issues)throw new Ev(d.issues,o,c,s);return d.value}function xy(a){return a}var Dr=(a={})=>({...a,[rc]:!0});function WS({reducerPath:a,baseQuery:o,context:{endpointDefinitions:c},serializeQueryArgs:s,api:d,assertTagType:f,selectors:p,onSchemaFailure:h,catchSchemaFailure:g,skipSchemaValidation:y}){const T=(v,I,q,J)=>(se,$)=>{const H=c[v],N=s({queryArgs:I,endpointDefinition:H,endpointName:v});if(se(d.internalActions.queryResultPatched({queryCacheKey:N,patches:q})),!J)return;const P=d.endpoints[v].select(I)($()),X=Gf(H.providesTags,P.data,void 0,I,{},f);se(d.internalActions.updateProvidedBy([{queryCacheKey:N,providedTags:X}]))};function x(v,I,q=0){const J=[I,...v];return q&&J.length>q?J.slice(0,-1):J}function S(v,I,q=0){const J=[...v,I];return q&&J.length>q?J.slice(1):J}const D=(v,I,q,J=!0)=>(se,$)=>{const N=d.endpoints[v].select(I)($()),P={patches:[],inversePatches:[],undo:()=>se(d.util.patchQueryData(v,I,P.inversePatches,J))};if(N.status===pa)return P;let X;if("data"in N)if(kn(N.data)){const[Z,ce,ae]=uv(N.data,q);P.patches.push(...ce),P.inversePatches.push(...ae),X=Z}else X=q(N.data),P.patches.push({op:"replace",path:[],value:X}),P.inversePatches.push({op:"replace",path:[],value:N.data});return P.patches.length===0||se(d.util.patchQueryData(v,I,P.patches,J)),P},C=(v,I,q)=>J=>J(d.endpoints[v].initiate(I,{subscribe:!1,forceRefetch:!0,[Jr]:()=>({data:q})})),R=(v,I)=>v.query&&v[I]?v[I]:xy,A=async(v,{signal:I,abort:q,rejectWithValue:J,fulfillWithValue:se,dispatch:$,getState:H,extra:N})=>{const P=c[v.endpointName],{metaSchema:X,skipSchemaValidation:Z=y}=P,ce=v.type===ss;try{let ae=xy;const oe={signal:I,abort:q,dispatch:$,getState:H,extra:N,endpoint:v.endpointName,type:v.type,forced:ce?z(v,H()):void 0,queryCacheKey:ce?v.queryCacheKey:void 0},te=ce?v[Jr]:void 0;let fe;const ue=async(xe,me,ke,Xe)=>{if(me==null&&xe.pages.length)return Promise.resolve({data:xe});const Ze={queryArg:v.originalArgs,pageParam:me},Je=await Ee(Ze),Ke=Xe?x:S;return{data:{pages:Ke(xe.pages,Je.data,ke),pageParams:Ke(xe.pageParams,me,ke)},meta:Je.meta}};async function Ee(xe){let me;const{extraOptions:ke,argSchema:Xe,rawResponseSchema:Ze,responseSchema:Je}=P;if(Xe&&!pi(Z,"arg")&&(xe=await hi(Xe,xe,"argSchema",{})),te?me=te():P.query?(ae=R(P,"transformResponse"),me=await o(P.query(xe),oe,ke)):me=await P.queryFn(xe,oe,ke,Gt=>o(Gt,oe,ke)),me.error)throw new by(me.error,me.meta);let{data:Ke}=me;Ze&&!pi(Z,"rawResponse")&&(Ke=await hi(Ze,me.data,"rawResponseSchema",me.meta));let vt=await ae(Ke,me.meta,xe);return Je&&!pi(Z,"response")&&(vt=await hi(Je,vt,"responseSchema",me.meta)),{...me,data:vt}}if(ce&&"infiniteQueryOptions"in P){const{infiniteQueryOptions:xe}=P,{maxPages:me=1/0}=xe;let ke;const Xe={pages:[],pageParams:[]},Ze=p.selectQueryEntry(H(),v.queryCacheKey)?.data,Ke=z(v,H())&&!v.direction||!Ze?Xe:Ze;if("direction"in v&&v.direction&&Ke.pages.length){const vt=v.direction==="backward",Ft=(vt?_v:bf)(xe,Ke,v.originalArgs);ke=await ue(Ke,Ft,me,vt)}else{const{initialPageParam:vt=xe.initialPageParam}=v,Gt=Ze?.pageParams??[],Ft=Gt[0]??vt,jn=Gt.length;ke=await ue(Ke,Ft,me),te&&(ke={data:ke.data.pages[0]});for(let yn=1;yn<jn;yn++){const va=bf(xe,ke.data,v.originalArgs);ke=await ue(ke.data,va,me)}}fe=ke}else fe=await Ee(v.originalArgs);return X&&!pi(Z,"meta")&&fe.meta&&(fe.meta=await hi(X,fe.meta,"metaSchema",fe.meta)),se(fe.data,Dr({fulfilledTimeStamp:Date.now(),baseQueryMeta:fe.meta}))}catch(ae){let oe=ae;if(oe instanceof by){let te=R(P,"transformErrorResponse");const{rawErrorResponseSchema:fe,errorResponseSchema:ue}=P;let{value:Ee,meta:xe}=oe;try{fe&&!pi(Z,"rawErrorResponse")&&(Ee=await hi(fe,Ee,"rawErrorResponseSchema",xe)),X&&!pi(Z,"meta")&&(xe=await hi(X,xe,"metaSchema",xe));let me=await te(Ee,xe,v.originalArgs);return ue&&!pi(Z,"errorResponse")&&(me=await hi(ue,me,"errorResponseSchema",xe)),J(me,Dr({baseQueryMeta:xe}))}catch(me){oe=me}}try{if(oe instanceof Ev){const te={endpoint:v.endpointName,arg:v.originalArgs,type:v.type,queryCacheKey:ce?v.queryCacheKey:void 0};P.onSchemaFailure?.(oe,te),h?.(oe,te);const{catchSchemaFailure:fe=g}=P;if(fe)return J(fe(oe,te),Dr({baseQueryMeta:oe._bqMeta}))}}catch(te){oe=te}throw console.error(oe),oe}};function z(v,I){const q=p.selectQueryEntry(I,v.queryCacheKey),J=p.selectConfig(I).refetchOnMountOrArgChange,se=q?.fulfilledTimeStamp,$=v.forceRefetch??(v.subscribe&&J);return $?$===!0||(Number(new Date)-Number(se))/1e3>=$:!1}const M=()=>To(`${a}/executeQuery`,A,{getPendingMeta({arg:I}){const q=c[I.endpointName];return Dr({startedTimeStamp:Date.now(),...dc(q)?{direction:I.direction}:{}})},condition(I,{getState:q}){const J=q(),se=p.selectQueryEntry(J,I.queryCacheKey),$=se?.fulfilledTimeStamp,H=I.originalArgs,N=se?.originalArgs,P=c[I.endpointName],X=I.direction;return vf(I)?!0:se?.status==="pending"?!1:z(I,J)||uc(P)&&P?.forceRefetch?.({currentArg:H,previousArg:N,endpointState:se,state:J})?!0:!($&&!X)},dispatchConditionRejection:!0}),w=M(),E=M(),L=To(`${a}/executeMutation`,A,{getPendingMeta(){return Dr({startedTimeStamp:Date.now()})}}),B=v=>"force"in v,Q=v=>"ifOlderThan"in v,j=(v,I,q={})=>(J,se)=>{const $=B(q)&&q.force,H=Q(q)&&q.ifOlderThan,N=(X=!0)=>{const Z={forceRefetch:X,subscribe:!1};return d.endpoints[v].initiate(I,Z)},P=d.endpoints[v].select(I)(se());if($)J(N());else if(H){const X=P?.fulfilledTimeStamp;if(!X){J(N());return}(Number(new Date)-Number(new Date(X)))/1e3>=H&&J(N())}else J(N(!1))};function F(v){return I=>I?.meta?.arg?.endpointName===v}function O(v,I){return{matchPending:Gr(Pf(v),F(I)),matchFulfilled:Gr($a(v),F(I)),matchRejected:Gr(So(v),F(I))}}return{queryThunk:w,mutationThunk:L,infiniteQueryThunk:E,prefetch:j,updateQueryData:D,upsertQueryData:C,patchQueryData:T,buildMatchThunkActions:O}}function bf(a,{pages:o,pageParams:c},s){const d=o.length-1;return a.getNextPageParam(o[d],o,c[d],c,s)}function _v(a,{pages:o,pageParams:c},s){return a.getPreviousPageParam?.(o[0],o,c[0],c,s)}function Cv(a,o,c,s){return Gf(c[a.meta.arg.endpointName][o],$a(a)?a.payload:void 0,lc(a)?a.payload:void 0,a.meta.arg.originalArgs,"baseQueryMeta"in a.meta?a.meta.baseQueryMeta:void 0,s)}function wy(a){return Dn(a)?lv(a):a}function Ll(a,o,c){const s=a[o];s&&c(s)}function es(a){return("arg"in a?a.arg.fixedCacheKey:a.fixedCacheKey)??a.requestId}function Sy(a,o,c){const s=a[es(o)];s&&c(s)}var Nl={};function JS({reducerPath:a,queryThunk:o,mutationThunk:c,serializeQueryArgs:s,context:{endpointDefinitions:d,apiUid:f,extractRehydrationInfo:p,hasRehydrationInfo:h},assertTagType:g,config:y}){const T=_n(`${a}/resetApiState`);function x(F,O,v,I){F[O.queryCacheKey]??={status:pa,endpointName:O.endpointName},Ll(F,O.queryCacheKey,q=>{q.status=hf,q.requestId=v&&q.requestId?q.requestId:I.requestId,O.originalArgs!==void 0&&(q.originalArgs=O.originalArgs),q.startedTimeStamp=I.startedTimeStamp;const J=d[I.arg.endpointName];dc(J)&&"direction"in O&&(q.direction=O.direction)})}function S(F,O,v,I){Ll(F,O.arg.queryCacheKey,q=>{if(q.requestId!==O.requestId&&!I)return;const{merge:J}=d[O.arg.endpointName];if(q.status=qr,J)if(q.data!==void 0){const{fulfilledTimeStamp:se,arg:$,baseQueryMeta:H,requestId:N}=O;let P=os(q.data,X=>J(X,v,{arg:$.originalArgs,baseQueryMeta:H,fulfilledTimeStamp:se,requestId:N}));q.data=P}else q.data=v;else q.data=d[O.arg.endpointName].structuralSharing??!0?qf(Dn(q.data)?Lw(q.data):q.data,v):v;delete q.error,q.fulfilledTimeStamp=O.fulfilledTimeStamp})}const D=Qa({name:`${a}/queries`,initialState:Nl,reducers:{removeQueryResult:{reducer(F,{payload:{queryCacheKey:O}}){delete F[O]},prepare:Cr()},cacheEntriesUpserted:{reducer(F,O){for(const v of O.payload){const{queryDescription:I,value:q}=v;x(F,I,!0,{arg:I,requestId:O.meta.requestId,startedTimeStamp:O.meta.timestamp}),S(F,{arg:I,requestId:O.meta.requestId,fulfilledTimeStamp:O.meta.timestamp,baseQueryMeta:{}},q,!0)}},prepare:F=>({payload:F.map(I=>{const{endpointName:q,arg:J,value:se}=I,$=d[q];return{queryDescription:{type:ss,endpointName:q,originalArgs:I.arg,queryCacheKey:s({queryArgs:J,endpointDefinition:$,endpointName:q})},value:se}}),meta:{[rc]:!0,requestId:Bf(),timestamp:Date.now()}})},queryResultPatched:{reducer(F,{payload:{queryCacheKey:O,patches:v}}){Ll(F,O,I=>{I.data=ry(I.data,v.concat())})},prepare:Cr()}},extraReducers(F){F.addCase(o.pending,(O,{meta:v,meta:{arg:I}})=>{const q=vf(I);x(O,I,q,v)}).addCase(o.fulfilled,(O,{meta:v,payload:I})=>{const q=vf(v.arg);S(O,v,I,q)}).addCase(o.rejected,(O,{meta:{condition:v,arg:I,requestId:q},error:J,payload:se})=>{Ll(O,I.queryCacheKey,$=>{if(!v){if($.requestId!==q)return;$.status=Hr,$.error=se??J}})}).addMatcher(h,(O,v)=>{const{queries:I}=p(v);for(const[q,J]of Object.entries(I))(J?.status===qr||J?.status===Hr)&&(O[q]=J)})}}),C=Qa({name:`${a}/mutations`,initialState:Nl,reducers:{removeMutationResult:{reducer(F,{payload:O}){const v=es(O);v in F&&delete F[v]},prepare:Cr()}},extraReducers(F){F.addCase(c.pending,(O,{meta:v,meta:{requestId:I,arg:q,startedTimeStamp:J}})=>{q.track&&(O[es(v)]={requestId:I,status:hf,endpointName:q.endpointName,startedTimeStamp:J})}).addCase(c.fulfilled,(O,{payload:v,meta:I})=>{I.arg.track&&Sy(O,I,q=>{q.requestId===I.requestId&&(q.status=qr,q.data=v,q.fulfilledTimeStamp=I.fulfilledTimeStamp)})}).addCase(c.rejected,(O,{payload:v,error:I,meta:q})=>{q.arg.track&&Sy(O,q,J=>{J.requestId===q.requestId&&(J.status=Hr,J.error=v??I)})}).addMatcher(h,(O,v)=>{const{mutations:I}=p(v);for(const[q,J]of Object.entries(I))(J?.status===qr||J?.status===Hr)&&q!==J?.requestId&&(O[q]=J)})}}),R={tags:{},keys:{}},A=Qa({name:`${a}/invalidation`,initialState:R,reducers:{updateProvidedBy:{reducer(F,O){for(const{queryCacheKey:v,providedTags:I}of O.payload){z(F,v);for(const{type:q,id:J}of I){const se=(F.tags[q]??={})[J||"__internal_without_id"]??=[];se.includes(v)||se.push(v)}F.keys[v]=I}},prepare:Cr()}},extraReducers(F){F.addCase(D.actions.removeQueryResult,(O,{payload:{queryCacheKey:v}})=>{z(O,v)}).addMatcher(h,(O,v)=>{const{provided:I}=p(v);for(const[q,J]of Object.entries(I.tags??{}))for(const[se,$]of Object.entries(J)){const H=(O.tags[q]??={})[se||"__internal_without_id"]??=[];for(const N of $)H.includes(N)||H.push(N),O.keys[N]=I.keys[N]}}).addMatcher(ma($a(o),lc(o)),(O,v)=>{M(O,[v])}).addMatcher(D.actions.cacheEntriesUpserted.match,(O,v)=>{const I=v.payload.map(({queryDescription:q,value:J})=>({type:"UNKNOWN",payload:J,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:q}}));M(O,I)})}});function z(F,O){const v=wy(F.keys[O]??[]);for(const I of v){const q=I.type,J=I.id??"__internal_without_id",se=F.tags[q]?.[J];se&&(F.tags[q][J]=wy(se).filter($=>$!==O))}delete F.keys[O]}function M(F,O){const v=O.map(I=>{const q=Cv(I,"providesTags",d,g),{queryCacheKey:J}=I.meta.arg;return{queryCacheKey:J,providedTags:q}});A.caseReducers.updateProvidedBy(F,A.actions.updateProvidedBy(v))}const w=Qa({name:`${a}/subscriptions`,initialState:Nl,reducers:{updateSubscriptionOptions(F,O){},unsubscribeQueryResult(F,O){},internal_getRTKQSubscriptions(){}}}),E=Qa({name:`${a}/internalSubscriptions`,initialState:Nl,reducers:{subscriptionsUpdated:{reducer(F,O){return ry(F,O.payload)},prepare:Cr()}}}),L=Qa({name:`${a}/config`,initialState:{online:PS(),focused:US(),middlewareRegistered:!1,...y},reducers:{middlewareRegistered(F,{payload:O}){F.middlewareRegistered=F.middlewareRegistered==="conflict"||f!==O?"conflict":!0}},extraReducers:F=>{F.addCase(Qf,O=>{O.online=!0}).addCase(wv,O=>{O.online=!1}).addCase(Vf,O=>{O.focused=!0}).addCase(xv,O=>{O.focused=!1}).addMatcher(h,O=>({...O}))}}),B=nv({queries:D.reducer,mutations:C.reducer,provided:A.reducer,subscriptions:E.reducer,config:L.reducer}),Q=(F,O)=>B(T.match(O)?void 0:F,O),j={...L.actions,...D.actions,...w.actions,...E.actions,...C.actions,...A.actions,resetApiState:T};return{reducer:Q,actions:j}}var Tn=Symbol.for("RTKQ/skipToken"),Dv={status:pa},Ty=os(Dv,()=>{}),Ay=os(Dv,()=>{});function eT({serializeQueryArgs:a,reducerPath:o,createSelector:c}){const s=w=>Ty,d=w=>Ay;return{buildQuerySelector:S,buildInfiniteQuerySelector:D,buildMutationSelector:C,selectInvalidatedBy:R,selectCachedArgsForQuery:A,selectApiState:p,selectQueries:h,selectMutations:y,selectQueryEntry:g,selectConfig:T};function f(w){return{...w,...py(w.status)}}function p(w){return w[o]}function h(w){return p(w)?.queries}function g(w,E){return h(w)?.[E]}function y(w){return p(w)?.mutations}function T(w){return p(w)?.config}function x(w,E,L){return B=>{if(B===Tn)return c(s,L);const Q=a({queryArgs:B,endpointDefinition:E,endpointName:w});return c(F=>g(F,Q)??Ty,L)}}function S(w,E){return x(w,E,f)}function D(w,E){const{infiniteQueryOptions:L}=E;function B(Q){const j={...Q,...py(Q.status)},{isLoading:F,isError:O,direction:v}=j,I=v==="forward",q=v==="backward";return{...j,hasNextPage:z(L,j.data,j.originalArgs),hasPreviousPage:M(L,j.data,j.originalArgs),isFetchingNextPage:F&&I,isFetchingPreviousPage:F&&q,isFetchNextPageError:O&&I,isFetchPreviousPageError:O&&q}}return x(w,E,B)}function C(){return w=>{let E;return typeof w=="object"?E=es(w)??Tn:E=w,c(E===Tn?d:Q=>p(Q)?.mutations?.[E]??Ay,f)}}function R(w,E){const L=w[o],B=new Set,Q=gf(E,Hf,Av);for(const j of Q){const F=L.provided.tags[j.type];if(!F)continue;let O=(j.id!==void 0?F[j.id]:Object.values(F).flat())??[];for(const v of O)B.add(v)}return Array.from(B.values()).flatMap(j=>{const F=L.queries[j];return F?{queryCacheKey:j,endpointName:F.endpointName,originalArgs:F.originalArgs}:[]})}function A(w,E){return gf(Object.values(h(w)),L=>L?.endpointName===E&&L.status!==pa,L=>L.originalArgs)}function z(w,E,L){return E?bf(w,E,L)!=null:!1}function M(w,E,L){return!E||!w.getPreviousPageParam?!1:_v(w,E,L)!=null}}var Ey=WeakMap?new WeakMap:void 0,_y=({endpointName:a,queryArgs:o})=>{let c="";const s=Ey?.get(o);if(typeof s=="string")c=s;else{const d=JSON.stringify(o,(f,p)=>(p=typeof p=="bigint"?{$bigint:p.toString()}:p,p=Fa(p)?Object.keys(p).sort().reduce((h,g)=>(h[g]=p[g],h),{}):p,p));Fa(o)&&Ey?.set(o,d),c=d}return`${a}(${c})`};function tT(...a){return function(c){const s=ec(y=>c.extractRehydrationInfo?.(y,{reducerPath:c.reducerPath??"api"})),d={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...c,extractRehydrationInfo:s,serializeQueryArgs(y){let T=_y;if("serializeQueryArgs"in y.endpointDefinition){const x=y.endpointDefinition.serializeQueryArgs;T=S=>{const D=x(S);return typeof D=="string"?D:_y({...S,queryArgs:D})}}else c.serializeQueryArgs&&(T=c.serializeQueryArgs);return T(y)},tagTypes:[...c.tagTypes||[]]},f={endpointDefinitions:{},batch(y){y()},apiUid:Bf(),extractRehydrationInfo:s,hasRehydrationInfo:ec(y=>s(y)!=null)},p={injectEndpoints:g,enhanceEndpoints({addTagTypes:y,endpoints:T}){if(y)for(const x of y)d.tagTypes.includes(x)||d.tagTypes.push(x);if(T)for(const[x,S]of Object.entries(T))typeof S=="function"?S(Ao(f,x)):Object.assign(Ao(f,x)||{},S);return p}},h=a.map(y=>y.init(p,d,f));function g(y){const T=y.endpoints({query:x=>({...x,type:ss}),mutation:x=>({...x,type:Sv}),infiniteQuery:x=>({...x,type:Tv})});for(const[x,S]of Object.entries(T)){if(y.overrideExisting!==!0&&x in f.endpointDefinitions){if(y.overrideExisting==="throw")throw new Error(Cn(39));continue}f.endpointDefinitions[x]=S;for(const D of h)D.injectEndpoint(x,S)}return p}return p.injectEndpoints({endpoints:c.endpoints})}}function ca(a,...o){return Object.assign(a,...o)}var nT=({api:a,queryThunk:o,internalState:c,mwApi:s})=>{const d=`${a.reducerPath}/subscriptions`;let f=null,p=null;const{updateSubscriptionOptions:h,unsubscribeQueryResult:g}=a.internalActions,y=(R,A)=>{if(h.match(A)){const{queryCacheKey:M,requestId:w,options:E}=A.payload,L=R.get(M);return L?.has(w)&&L.set(w,E),!0}if(g.match(A)){const{queryCacheKey:M,requestId:w}=A.payload,E=R.get(M);return E&&E.delete(w),!0}if(a.internalActions.removeQueryResult.match(A))return R.delete(A.payload.queryCacheKey),!0;if(o.pending.match(A)){const{meta:{arg:M,requestId:w}}=A,E=tc(R,M.queryCacheKey,yf);return M.subscribe&&E.set(w,M.subscriptionOptions??E.get(w)??{}),!0}let z=!1;if(o.rejected.match(A)){const{meta:{condition:M,arg:w,requestId:E}}=A;if(M&&w.subscribe){const L=tc(R,w.queryCacheKey,yf);L.set(E,w.subscriptionOptions??L.get(E)??{}),z=!0}}return z},T=()=>c.currentSubscriptions,D={getSubscriptions:T,getSubscriptionCount:R=>T().get(R)?.size??0,isRequestSubscribed:(R,A)=>!!T()?.get(R)?.get(A)};function C(R){return JSON.parse(JSON.stringify(Object.fromEntries([...R].map(([A,z])=>[A,Object.fromEntries(z)]))))}return(R,A)=>{if(f||(f=C(c.currentSubscriptions)),a.util.resetApiState.match(R))return f={},c.currentSubscriptions.clear(),p=null,[!0,!1];if(a.internalActions.internal_getRTKQSubscriptions.match(R))return[!1,D];const z=y(c.currentSubscriptions,R);let M=!0;if(z){p||(p=setTimeout(()=>{const L=C(c.currentSubscriptions),[,B]=uv(f,()=>L);A.next(a.internalActions.subscriptionsUpdated(B)),f=L,p=null},500));const w=typeof R.type=="string"&&!!R.type.startsWith(d),E=o.rejected.match(R)&&R.meta.condition&&!!R.meta.arg.subscribe;M=!w&&!E}return[M,!1]}},aT=2147483647/1e3-1,iT=({reducerPath:a,api:o,queryThunk:c,context:s,internalState:d,selectors:{selectQueryEntry:f,selectConfig:p},getRunningQueryThunk:h,mwApi:g})=>{const{removeQueryResult:y,unsubscribeQueryResult:T,cacheEntriesUpserted:x}=o.internalActions,S=ma(T.match,c.fulfilled,c.rejected,x.match);function D(w){const E=d.currentSubscriptions.get(w);return E?E.size>0:!1}const C={};function R(w){for(const E of w.values())E?.abort?.()}const A=(w,E)=>{const L=E.getState(),B=p(L);if(S(w)){let Q;if(x.match(w))Q=w.payload.map(j=>j.queryDescription.queryCacheKey);else{const{queryCacheKey:j}=T.match(w)?w.payload:w.meta.arg;Q=[j]}z(Q,E,B)}if(o.util.resetApiState.match(w)){for(const[Q,j]of Object.entries(C))j&&clearTimeout(j),delete C[Q];R(d.runningQueries),R(d.runningMutations)}if(s.hasRehydrationInfo(w)){const{queries:Q}=s.extractRehydrationInfo(w);z(Object.keys(Q),E,B)}};function z(w,E,L){const B=E.getState();for(const Q of w){const j=f(B,Q);j?.endpointName&&M(Q,j.endpointName,E,L)}}function M(w,E,L,B){const j=Ao(s,E)?.keepUnusedDataFor??B.keepUnusedDataFor;if(j===1/0)return;const F=Math.max(0,Math.min(j,aT));if(!D(w)){const O=C[w];O&&clearTimeout(O),C[w]=setTimeout(()=>{if(!D(w)){const v=f(L.getState(),w);v?.endpointName&&L.dispatch(h(v.endpointName,v.originalArgs))?.abort(),L.dispatch(y({queryCacheKey:w}))}delete C[w]},F*1e3)}}return A},Cy=new Error("Promise never resolved before cacheEntryRemoved."),oT=({api:a,reducerPath:o,context:c,queryThunk:s,mutationThunk:d,internalState:f,selectors:{selectQueryEntry:p,selectApiState:h}})=>{const g=mf(s),y=mf(d),T=$a(s,d),x={},{removeQueryResult:S,removeMutationResult:D,cacheEntriesUpserted:C}=a.internalActions;function R(L,B,Q){const j=x[L];j?.valueResolved&&(j.valueResolved({data:B,meta:Q}),delete j.valueResolved)}function A(L){const B=x[L];B&&(delete x[L],B.cacheEntryRemoved())}function z(L){const{arg:B,requestId:Q}=L.meta,{endpointName:j,originalArgs:F}=B;return[j,F,Q]}const M=(L,B,Q)=>{const j=w(L);function F(O,v,I,q){const J=p(Q,v),se=p(B.getState(),v);!J&&se&&E(O,q,v,B,I)}if(s.pending.match(L)){const[O,v,I]=z(L);F(O,j,I,v)}else if(C.match(L))for(const{queryDescription:O,value:v}of L.payload){const{endpointName:I,originalArgs:q,queryCacheKey:J}=O;F(I,J,L.meta.requestId,q),R(J,v,{})}else if(d.pending.match(L)){if(B.getState()[o].mutations[j]){const[v,I,q]=z(L);E(v,I,j,B,q)}}else if(T(L))R(j,L.payload,L.meta.baseQueryMeta);else if(S.match(L)||D.match(L))A(j);else if(a.util.resetApiState.match(L))for(const O of Object.keys(x))A(O)};function w(L){return g(L)?L.meta.arg.queryCacheKey:y(L)?L.meta.arg.fixedCacheKey??L.meta.requestId:S.match(L)?L.payload.queryCacheKey:D.match(L)?es(L.payload):""}function E(L,B,Q,j,F){const O=Ao(c,L),v=O?.onCacheEntryAdded;if(!v)return;const I={},q=new Promise(P=>{I.cacheEntryRemoved=P}),J=Promise.race([new Promise(P=>{I.valueResolved=P}),q.then(()=>{throw Cy})]);J.catch(()=>{}),x[Q]=I;const se=a.endpoints[L].select(nc(O)?B:Q),$=j.dispatch((P,X,Z)=>Z),H={...j,getCacheEntry:()=>se(j.getState()),requestId:F,extra:$,updateCachedData:nc(O)?P=>j.dispatch(a.util.updateQueryData(L,B,P)):void 0,cacheDataLoaded:J,cacheEntryRemoved:q},N=v(B,H);Promise.resolve(N).catch(P=>{if(P!==Cy)throw P})}return M},rT=({api:a,context:{apiUid:o},reducerPath:c})=>(s,d)=>{a.util.resetApiState.match(s)&&d.dispatch(a.internalActions.middlewareRegistered(o))},sT=({reducerPath:a,context:o,context:{endpointDefinitions:c},mutationThunk:s,queryThunk:d,api:f,assertTagType:p,refetchQuery:h,internalState:g})=>{const{removeQueryResult:y}=f.internalActions,T=ma($a(s),lc(s)),x=ma($a(d,s),So(d,s));let S=[],D=0;const C=(z,M)=>{(d.pending.match(z)||s.pending.match(z))&&D++,x(z)&&(D=Math.max(0,D-1)),T(z)?A(Cv(z,"invalidatesTags",c,p),M):x(z)?A([],M):f.util.invalidateTags.match(z)&&A(Gf(z.payload,void 0,void 0,void 0,void 0,p),M)};function R(){return D>0}function A(z,M){const w=M.getState(),E=w[a];if(S.push(...z),E.config.invalidationBehavior==="delayed"&&R())return;const L=S;if(S=[],L.length===0)return;const B=f.util.selectInvalidatedBy(w,L);o.batch(()=>{const Q=Array.from(B.values());for(const{queryCacheKey:j}of Q){const F=E.queries[j],O=tc(g.currentSubscriptions,j,yf);F&&(O.size===0?M.dispatch(y({queryCacheKey:j})):F.status!==pa&&M.dispatch(h(F)))}})}return C},lT=({reducerPath:a,queryThunk:o,api:c,refetchQuery:s,internalState:d})=>{const{currentPolls:f,currentSubscriptions:p}=d,h=new Set;let g=null;const y=(A,z)=>{(c.internalActions.updateSubscriptionOptions.match(A)||c.internalActions.unsubscribeQueryResult.match(A))&&T(A.payload.queryCacheKey,z),(o.pending.match(A)||o.rejected.match(A)&&A.meta.condition)&&T(A.meta.arg.queryCacheKey,z),(o.fulfilled.match(A)||o.rejected.match(A)&&!A.meta.condition)&&x(A.meta.arg,z),c.util.resetApiState.match(A)&&(C(),g&&(clearTimeout(g),g=null),h.clear())};function T(A,z){h.add(A),g||(g=setTimeout(()=>{for(const M of h)S({queryCacheKey:M},z);h.clear(),g=null},0))}function x({queryCacheKey:A},z){const M=z.getState()[a],w=M.queries[A],E=p.get(A);if(!w||w.status===pa)return;const{lowestPollingInterval:L,skipPollingIfUnfocused:B}=R(E);if(!Number.isFinite(L))return;const Q=f.get(A);Q?.timeout&&(clearTimeout(Q.timeout),Q.timeout=void 0);const j=Date.now()+L;f.set(A,{nextPollTimestamp:j,pollingInterval:L,timeout:setTimeout(()=>{(M.config.focused||!B)&&z.dispatch(s(w)),x({queryCacheKey:A},z)},L)})}function S({queryCacheKey:A},z){const w=z.getState()[a].queries[A],E=p.get(A);if(!w||w.status===pa)return;const{lowestPollingInterval:L}=R(E);if(!Number.isFinite(L)){D(A);return}const B=f.get(A),Q=Date.now()+L;(!B||Q<B.nextPollTimestamp)&&x({queryCacheKey:A},z)}function D(A){const z=f.get(A);z?.timeout&&clearTimeout(z.timeout),f.delete(A)}function C(){for(const A of f.keys())D(A)}function R(A=new Map){let z=!1,M=Number.POSITIVE_INFINITY;for(const w of A.values())w.pollingInterval&&(M=Math.min(w.pollingInterval,M),z=w.skipPollingIfUnfocused||z);return{lowestPollingInterval:M,skipPollingIfUnfocused:z}}return y},cT=({api:a,context:o,queryThunk:c,mutationThunk:s})=>{const d=Pf(c,s),f=So(c,s),p=$a(c,s),h={};return(y,T)=>{if(d(y)){const{requestId:x,arg:{endpointName:S,originalArgs:D}}=y.meta,C=Ao(o,S),R=C?.onQueryStarted;if(R){const A={},z=new Promise((L,B)=>{A.resolve=L,A.reject=B});z.catch(()=>{}),h[x]=A;const M=a.endpoints[S].select(nc(C)?D:x),w=T.dispatch((L,B,Q)=>Q),E={...T,getCacheEntry:()=>M(T.getState()),requestId:x,extra:w,updateCachedData:nc(C)?L=>T.dispatch(a.util.updateQueryData(S,D,L)):void 0,queryFulfilled:z};R(D,E)}}else if(p(y)){const{requestId:x,baseQueryMeta:S}=y.meta;h[x]?.resolve({data:y.payload,meta:S}),delete h[x]}else if(f(y)){const{requestId:x,rejectedWithValue:S,baseQueryMeta:D}=y.meta;h[x]?.reject({error:y.payload??y.error,isUnhandledError:!S,meta:D}),delete h[x]}}},uT=({reducerPath:a,context:o,api:c,refetchQuery:s,internalState:d})=>{const{removeQueryResult:f}=c.internalActions,p=(g,y)=>{Vf.match(g)&&h(y,"refetchOnFocus"),Qf.match(g)&&h(y,"refetchOnReconnect")};function h(g,y){const T=g.getState()[a],x=T.queries,S=d.currentSubscriptions;o.batch(()=>{for(const D of S.keys()){const C=x[D],R=S.get(D);if(!R||!C)continue;const A=[...R.values()];(A.some(M=>M[y]===!0)||A.every(M=>M[y]===void 0)&&T.config[y])&&(R.size===0?g.dispatch(f({queryCacheKey:D})):C.status!==pa&&g.dispatch(s(C)))}})}return p};function dT(a){const{reducerPath:o,api:c,context:s,getInternalState:d}=a,{apiUid:f}=s,p={invalidateTags:_n(`${o}/invalidateTags`)},h=x=>x.type.startsWith(`${o}/`),g=[rT,iT,sT,lT,oT,cT];return{middleware:x=>{let S=!1;const D=d(x.dispatch),C={...a,internalState:D,refetchQuery:T,isThisApiSliceAction:h,mwApi:x},R=g.map(M=>M(C)),A=nT(C),z=uT(C);return M=>w=>{if(!av(w))return M(w);S||(S=!0,x.dispatch(c.internalActions.middlewareRegistered(f)));const E={...x,next:M},L=x.getState(),[B,Q]=A(w,E,L);let j;if(B?j=M(w):j=Q,x.getState()[o]&&(z(w,E,L),h(w)||s.hasRehydrationInfo(w)))for(const F of R)F(w,E,L);return j}},actions:p};function T(x){return a.api.endpoints[x.endpointName].initiate(x.originalArgs,{subscribe:!1,forceRefetch:!0})}}var Dy=Symbol(),fT=({createSelector:a=Uf}={})=>({name:Dy,init(o,{baseQuery:c,tagTypes:s,reducerPath:d,serializeQueryArgs:f,keepUnusedDataFor:p,refetchOnMountOrArgChange:h,refetchOnFocus:g,refetchOnReconnect:y,invalidationBehavior:T,onSchemaFailure:x,catchSchemaFailure:S,skipSchemaValidation:D},C){Gw();const R=ue=>ue;Object.assign(o,{reducerPath:d,endpoints:{},internalActions:{onOnline:Qf,onOffline:wv,onFocus:Vf,onFocusLost:xv},util:{}});const A=eT({serializeQueryArgs:f,reducerPath:d,createSelector:a}),{selectInvalidatedBy:z,selectCachedArgsForQuery:M,buildQuerySelector:w,buildInfiniteQuerySelector:E,buildMutationSelector:L}=A;ca(o.util,{selectInvalidatedBy:z,selectCachedArgsForQuery:M});const{queryThunk:B,infiniteQueryThunk:Q,mutationThunk:j,patchQueryData:F,updateQueryData:O,upsertQueryData:v,prefetch:I,buildMatchThunkActions:q}=WS({baseQuery:c,reducerPath:d,context:C,api:o,serializeQueryArgs:f,assertTagType:R,selectors:A,onSchemaFailure:x,catchSchemaFailure:S,skipSchemaValidation:D}),{reducer:J,actions:se}=JS({context:C,queryThunk:B,mutationThunk:j,serializeQueryArgs:f,reducerPath:d,assertTagType:R,config:{refetchOnFocus:g,refetchOnReconnect:y,refetchOnMountOrArgChange:h,keepUnusedDataFor:p,reducerPath:d,invalidationBehavior:T}});ca(o.util,{patchQueryData:F,updateQueryData:O,upsertQueryData:v,prefetch:I,resetApiState:se.resetApiState,upsertQueryEntries:se.cacheEntriesUpserted}),ca(o.internalActions,se);const $=new WeakMap,H=ue=>tc($,ue,()=>({currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map})),{buildInitiateQuery:N,buildInitiateInfiniteQuery:P,buildInitiateMutation:X,getRunningMutationThunk:Z,getRunningMutationsThunk:ce,getRunningQueriesThunk:ae,getRunningQueryThunk:oe}=KS({queryThunk:B,mutationThunk:j,infiniteQueryThunk:Q,api:o,serializeQueryArgs:f,context:C,getInternalState:H});ca(o.util,{getRunningMutationThunk:Z,getRunningMutationsThunk:ce,getRunningQueryThunk:oe,getRunningQueriesThunk:ae});const{middleware:te,actions:fe}=dT({reducerPath:d,context:C,queryThunk:B,mutationThunk:j,infiniteQueryThunk:Q,api:o,assertTagType:R,selectors:A,getRunningQueryThunk:oe,getInternalState:H});return ca(o.util,fe),ca(o,{reducer:J,middleware:te}),{name:Dy,injectEndpoint(ue,Ee){const xe=o,me=xe.endpoints[ue]??={};uc(Ee)&&ca(me,{name:ue,select:w(ue,Ee),initiate:N(ue,Ee)},q(B,ue)),YS(Ee)&&ca(me,{name:ue,select:L(),initiate:X(ue)},q(j,ue)),dc(Ee)&&ca(me,{name:ue,select:E(ue,Ee),initiate:P(ue,Ee)},q(B,ue))}}}});function Ul(a){return a.replace(a[0],a[0].toUpperCase())}var mT="query",pT="mutation",hT="infinitequery";function gT(a){return a.type===mT}function yT(a){return a.type===pT}function kv(a){return a.type===hT}function kr(a,...o){return Object.assign(a,...o)}var qd=Symbol();function Hd(a){const o=_.useRef(a),c=_.useMemo(()=>qf(o.current,a),[a]);return _.useEffect(()=>{o.current!==c&&(o.current=c)},[c]),c}function Pl(a){const o=_.useRef(a);return _.useEffect(()=>{Vr(o.current,a)||(o.current=a)},[a]),Vr(o.current,a)?o.current:a}var vT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bT=vT(),xT=()=>typeof navigator<"u"&&navigator.product==="ReactNative",wT=xT(),ST=()=>bT||wT?_.useLayoutEffect:_.useEffect,TT=ST(),ky=a=>a.isUninitialized?{...a,isUninitialized:!1,isFetching:!0,isLoading:a.data===void 0,status:yv.pending}:a;function Vd(a,...o){const c={};return o.forEach(s=>{c[s]=a[s]}),c}var Qd=["data","status","isLoading","isSuccess","isError","error"];function AT({api:a,moduleOptions:{batch:o,hooks:{useDispatch:c,useSelector:s,useStore:d},unstable__sideEffectsInRender:f,createSelector:p},serializeQueryArgs:h,context:g}){const y=f?B=>B():_.useEffect,T=B=>B.current?.unsubscribe?.(),x=g.endpointDefinitions;return{buildQueryHooks:w,buildInfiniteQueryHooks:E,buildMutationHook:L,usePrefetch:C};function S(B,Q,j){if(Q?.endpointName&&B.isUninitialized){const{endpointName:J}=Q,se=x[J];j!==Tn&&h({queryArgs:Q.originalArgs,endpointDefinition:se,endpointName:J})===h({queryArgs:j,endpointDefinition:se,endpointName:J})&&(Q=void 0)}let F=B.isSuccess?B.data:Q?.data;F===void 0&&(F=B.data);const O=F!==void 0,v=B.isLoading,I=(!Q||Q.isLoading||Q.isUninitialized)&&!O&&v,q=B.isSuccess||O&&(v&&!Q?.isError||B.isUninitialized);return{...B,data:F,currentData:B.data,isFetching:v,isLoading:I,isSuccess:q}}function D(B,Q,j){if(Q?.endpointName&&B.isUninitialized){const{endpointName:J}=Q,se=x[J];j!==Tn&&h({queryArgs:Q.originalArgs,endpointDefinition:se,endpointName:J})===h({queryArgs:j,endpointDefinition:se,endpointName:J})&&(Q=void 0)}let F=B.isSuccess?B.data:Q?.data;F===void 0&&(F=B.data);const O=F!==void 0,v=B.isLoading,I=(!Q||Q.isLoading||Q.isUninitialized)&&!O&&v,q=B.isSuccess||v&&O;return{...B,data:F,currentData:B.data,isFetching:v,isLoading:I,isSuccess:q}}function C(B,Q){const j=c(),F=Pl(Q);return _.useCallback((O,v)=>j(a.util.prefetch(B,O,{...F,...v})),[B,j,F])}function R(B,Q,{refetchOnReconnect:j,refetchOnFocus:F,refetchOnMountOrArgChange:O,skip:v=!1,pollingInterval:I=0,skipPollingIfUnfocused:q=!1,...J}={}){const{initiate:se}=a.endpoints[B],$=c(),H=_.useRef(void 0);if(!H.current){const ue=$(a.internalActions.internal_getRTKQSubscriptions());H.current=ue}const N=Hd(v?Tn:Q),P=Pl({refetchOnReconnect:j,refetchOnFocus:F,pollingInterval:I,skipPollingIfUnfocused:q}),X=J.initialPageParam,Z=Pl(X),ce=_.useRef(void 0);let{queryCacheKey:ae,requestId:oe}=ce.current||{},te=!1;ae&&oe&&(te=H.current.isRequestSubscribed(ae,oe));const fe=!te&&ce.current!==void 0;return y(()=>{fe&&(ce.current=void 0)},[fe]),y(()=>{const ue=ce.current;if(N===Tn){ue?.unsubscribe(),ce.current=void 0;return}const Ee=ce.current?.subscriptionOptions;if(!ue||ue.arg!==N){ue?.unsubscribe();const xe=$(se(N,{subscriptionOptions:P,forceRefetch:O,...kv(x[B])?{initialPageParam:Z}:{}}));ce.current=xe}else P!==Ee&&ue.updateSubscriptionOptions(P)},[$,se,O,N,P,fe,Z,B]),[ce,$,se,P]}function A(B,Q){return(F,{skip:O=!1,selectFromResult:v}={})=>{const{select:I}=a.endpoints[B],q=Hd(O?Tn:F),J=_.useRef(void 0),se=_.useMemo(()=>p([I(q),(X,Z)=>Z,X=>q],Q,{memoizeOptions:{resultEqualityCheck:Vr}}),[I,q]),$=_.useMemo(()=>v?p([se],v,{devModeChecks:{identityFunctionCheck:"never"}}):se,[se,v]),H=s(X=>$(X,J.current),Vr),N=d(),P=se(N.getState(),J.current);return TT(()=>{J.current=P},[P]),H}}function z(B){_.useEffect(()=>()=>{T(B),B.current=void 0},[B])}function M(B){if(!B.current)throw new Error(Cn(38));return B.current.refetch()}function w(B){const Q=(O,v={})=>{const[I]=R(B,O,v);return z(I),_.useMemo(()=>({refetch:()=>M(I)}),[I])},j=({refetchOnReconnect:O,refetchOnFocus:v,pollingInterval:I=0,skipPollingIfUnfocused:q=!1}={})=>{const{initiate:J}=a.endpoints[B],se=c(),[$,H]=_.useState(qd),N=_.useRef(void 0),P=Pl({refetchOnReconnect:O,refetchOnFocus:v,pollingInterval:I,skipPollingIfUnfocused:q});y(()=>{const ae=N.current?.subscriptionOptions;P!==ae&&N.current?.updateSubscriptionOptions(P)},[P]);const X=_.useRef(P);y(()=>{X.current=P},[P]);const Z=_.useCallback(function(ae,oe=!1){let te;return o(()=>{T(N),N.current=te=se(J(ae,{subscriptionOptions:X.current,forceRefetch:!oe})),H(ae)}),te},[se,J]),ce=_.useCallback(()=>{N.current?.queryCacheKey&&se(a.internalActions.removeQueryResult({queryCacheKey:N.current?.queryCacheKey}))},[se]);return _.useEffect(()=>()=>{T(N)},[]),_.useEffect(()=>{$!==qd&&!N.current&&Z($,!0)},[$,Z]),_.useMemo(()=>[Z,$,{reset:ce}],[Z,$,ce])},F=A(B,S);return{useQueryState:F,useQuerySubscription:Q,useLazyQuerySubscription:j,useLazyQuery(O){const[v,I,{reset:q}]=j(O),J=F(I,{...O,skip:I===qd}),se=_.useMemo(()=>({lastArg:I}),[I]);return _.useMemo(()=>[v,{...J,reset:q},se],[v,J,q,se])},useQuery(O,v){const I=Q(O,v),q=F(O,{selectFromResult:O===Tn||v?.skip?void 0:ky,...v}),J=Vd(q,...Qd);return _.useDebugValue(J),_.useMemo(()=>({...q,...I}),[q,I])}}}function E(B){const Q=(F,O={})=>{const[v,I,q,J]=R(B,F,O),se=_.useRef(J);y(()=>{se.current=J},[J]);const $=_.useCallback(function(P,X){let Z;return o(()=>{T(v),v.current=Z=I(q(P,{subscriptionOptions:se.current,direction:X}))}),Z},[v,I,q]);z(v);const H=Hd(O.skip?Tn:F),N=_.useCallback(()=>M(v),[v]);return _.useMemo(()=>({trigger:$,refetch:N,fetchNextPage:()=>$(H,"forward"),fetchPreviousPage:()=>$(H,"backward")}),[N,$,H])},j=A(B,D);return{useInfiniteQueryState:j,useInfiniteQuerySubscription:Q,useInfiniteQuery(F,O){const{refetch:v,fetchNextPage:I,fetchPreviousPage:q}=Q(F,O),J=j(F,{selectFromResult:F===Tn||O?.skip?void 0:ky,...O}),se=Vd(J,...Qd,"hasNextPage","hasPreviousPage");return _.useDebugValue(se),_.useMemo(()=>({...J,fetchNextPage:I,fetchPreviousPage:q,refetch:v}),[J,I,q,v])}}}function L(B){return({selectFromResult:Q,fixedCacheKey:j}={})=>{const{select:F,initiate:O}=a.endpoints[B],v=c(),[I,q]=_.useState();_.useEffect(()=>()=>{I?.arg.fixedCacheKey||I?.reset()},[I]);const J=_.useCallback(function(ae){const oe=v(O(ae,{fixedCacheKey:j}));return q(oe),oe},[v,O,j]),{requestId:se}=I||{},$=_.useMemo(()=>F({fixedCacheKey:j,requestId:I?.requestId}),[j,I,F]),H=_.useMemo(()=>Q?p([$],Q):$,[Q,$]),N=s(H,Vr),P=j==null?I?.arg.originalArgs:void 0,X=_.useCallback(()=>{o(()=>{I&&q(void 0),j&&v(a.internalActions.removeMutationResult({requestId:se,fixedCacheKey:j}))})},[v,j,I,se]),Z=Vd(N,...Qd,"endpointName");_.useDebugValue(Z);const ce=_.useMemo(()=>({...N,originalArgs:P,reset:X}),[N,P,X]);return _.useMemo(()=>[J,ce],[J,ce])}}}var ET=Symbol(),_T=({batch:a=jw,hooks:o={useDispatch:zf,useSelector:kw,useStore:ev},createSelector:c=Uf,unstable__sideEffectsInRender:s=!1,...d}={})=>({name:ET,init(f,{serializeQueryArgs:p},h){const g=f,{buildQueryHooks:y,buildInfiniteQueryHooks:T,buildMutationHook:x,usePrefetch:S}=AT({api:f,moduleOptions:{batch:a,hooks:o,unstable__sideEffectsInRender:s,createSelector:c},serializeQueryArgs:p,context:h});return kr(g,{usePrefetch:S}),kr(h,{batch:a}),{injectEndpoint(D,C){if(gT(C)){const{useQuery:R,useLazyQuery:A,useLazyQuerySubscription:z,useQueryState:M,useQuerySubscription:w}=y(D);kr(g.endpoints[D],{useQuery:R,useLazyQuery:A,useLazyQuerySubscription:z,useQueryState:M,useQuerySubscription:w}),f[`use${Ul(D)}Query`]=R,f[`useLazy${Ul(D)}Query`]=A}if(yT(C)){const R=x(D);kr(g.endpoints[D],{useMutation:R}),f[`use${Ul(D)}Mutation`]=R}else if(kv(C)){const{useInfiniteQuery:R,useInfiniteQuerySubscription:A,useInfiniteQueryState:z}=T(D);kr(g.endpoints[D],{useInfiniteQuery:R,useInfiniteQuerySubscription:A,useInfiniteQueryState:z}),f[`use${Ul(D)}InfiniteQuery`]=R}}}}}),jv=tT(fT(),_T());const yo=()=>typeof window<"u"&&window.location.pathname.startsWith("/ngos/")?window.location.pathname.split("/")[2]:1,Fr=jv({reducerPath:"campaignsApi",baseQuery:vv({baseUrl:"/api"}),tagTypes:["Campaigns","ngo-id"],endpoints:a=>({getCampaigns:a.query({query:({page:o,size:c,filter:s={},skipNgoId:d=!1,forceNgoId:f=null})=>{const p=yo(),h={};return d||(f!==null?h["ngo-id"]=f:h["ngo-id"]=p||null),{url:"/campaigns/all",method:"POST",headers:h,body:{page:o||1,size:c||8,filter:s}}},transformResponse:o=>o.data,providesTags:()=>{const o=yo();return[{type:"Campaigns",id:o||"default"},{type:"ngo-id",id:o||"default"}]}}),getMyParticipatedCampaigns:a.query({async queryFn({page:o=1,size:c=8,filter:s={}}){try{const d=yo();return{data:await Ae.post("/api/Users/participated-campaigns",{page:o,size:c,filter:s},{headers:{"ngo-id":d||null}})}}catch(d){return{error:{status:d.response?.status,data:d.response?.data||d.message}}}},providesTags:()=>{const o=yo();return[{type:"ParticipatedCampaigns",id:o||"default"},{type:"ngo-id",id:o||"default"}]}}),getCampaignById:a.query({query:o=>`/campaigns/${o}`,transformResponse:o=>({...o.data}),providesTags:()=>{const o=yo();return[{type:"Campaigns",id:o||"default"},{type:"ngo-id",id:o||"default"}]}})})}),{useGetCampaignsQuery:CT,useGetCampaignByIdQuery:XO,useGetMyParticipatedCampaignsQuery:ZO}=Fr,{getCampaignById:jy}=Fr.endpoints,$r=jv({reducerPath:"lookupApi",baseQuery:vv({baseUrl:"/api"}),tagTypes:["Lookups"],endpoints:a=>({getLookups:a.query({query:()=>({url:"/lookup/GetAllLookups",method:"get"}),transformResponse:o=>(o.data?.items||[]).map(s=>({...s})),providesTags:["Lookups"]}),getLookupValues:a.query({query:o=>`/lookup/GetLookupValues/${o}`,transformResponse:o=>o.data||[],providesTags:(o,c,s)=>[{type:"Lookups",name:s}]}),getBankAccounts:a.query({query:()=>"/content/bank-accounts",transformResponse:o=>o.data||[],providesTags:["BankAccounts"]}),getGovernanceById:a.query({query:o=>({url:`lookup/Governance/${o}`,params:{GovernanceId:o}}),transformResponse:o=>o.data||[],providesTags:(o,c,s)=>[{type:"Lookups",id:s}]}),getCityById:a.query({query:o=>({url:`lookup/City/${o}`,params:{cityId:o}}),transformResponse:o=>o.data||[],providesTags:(o,c,s)=>[{type:"Lookups",id:s}]}),getLookupValuesEndpoint:a.query({query:o=>({url:`lookup/${o}`}),transformResponse:o=>o.data||[],providesTags:(o,c,s)=>[{type:"Lookups",name:s}]})})}),{useGetLookupValuesQuery:Ff,useGetBankAccountsQuery:KO,useGetGovernanceByIdQuery:WO,useGetCityByIdQuery:JO,useGetLookupValuesEndpointQuery:eM}=$r,{getGovernanceById:tM,getCityById:nM}=$r.endpoints,DT=dS({reducer:{campaigns:kS,auth:IS,[Fr.reducerPath]:Fr.reducer,[$r.reducerPath]:$r.reducer},middleware:a=>a().concat(Fr.middleware,$r.middleware)});var Gd,Oy;function kT(){if(Oy)return Gd;Oy=1;var a=typeof Element<"u",o=typeof Map=="function",c=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function d(f,p){if(f===p)return!0;if(f&&p&&typeof f=="object"&&typeof p=="object"){if(f.constructor!==p.constructor)return!1;var h,g,y;if(Array.isArray(f)){if(h=f.length,h!=p.length)return!1;for(g=h;g--!==0;)if(!d(f[g],p[g]))return!1;return!0}var T;if(o&&f instanceof Map&&p instanceof Map){if(f.size!==p.size)return!1;for(T=f.entries();!(g=T.next()).done;)if(!p.has(g.value[0]))return!1;for(T=f.entries();!(g=T.next()).done;)if(!d(g.value[1],p.get(g.value[0])))return!1;return!0}if(c&&f instanceof Set&&p instanceof Set){if(f.size!==p.size)return!1;for(T=f.entries();!(g=T.next()).done;)if(!p.has(g.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(f)&&ArrayBuffer.isView(p)){if(h=f.length,h!=p.length)return!1;for(g=h;g--!==0;)if(f[g]!==p[g])return!1;return!0}if(f.constructor===RegExp)return f.source===p.source&&f.flags===p.flags;if(f.valueOf!==Object.prototype.valueOf&&typeof f.valueOf=="function"&&typeof p.valueOf=="function")return f.valueOf()===p.valueOf();if(f.toString!==Object.prototype.toString&&typeof f.toString=="function"&&typeof p.toString=="function")return f.toString()===p.toString();if(y=Object.keys(f),h=y.length,h!==Object.keys(p).length)return!1;for(g=h;g--!==0;)if(!Object.prototype.hasOwnProperty.call(p,y[g]))return!1;if(a&&f instanceof Element)return!1;for(g=h;g--!==0;)if(!((y[g]==="_owner"||y[g]==="__v"||y[g]==="__o")&&f.$$typeof)&&!d(f[y[g]],p[y[g]]))return!1;return!0}return f!==f&&p!==p}return Gd=function(p,h){try{return d(p,h)}catch(g){if((g.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw g}},Gd}var jT=kT();const OT=U0(jT);var Fd,My;function MT(){if(My)return Fd;My=1;var a=function(o,c,s,d,f,p,h,g){if(!o){var y;if(c===void 0)y=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var T=[s,d,f,p,h,g],x=0;y=new Error(c.replace(/%s/g,function(){return T[x++]})),y.name="Invariant Violation"}throw y.framesToPop=1,y}};return Fd=a,Fd}var RT=MT();const Ry=U0(RT);var Ov=(a=>(a.BASE="base",a.BODY="body",a.HEAD="head",a.HTML="html",a.LINK="link",a.META="meta",a.NOSCRIPT="noscript",a.SCRIPT="script",a.STYLE="style",a.TITLE="title",a.FRAGMENT="Symbol(react.fragment)",a))(Ov||{}),$d={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},zy=Object.values(Ov),fc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Mv=Object.entries(fc).reduce((a,[o,c])=>(a[c]=o,a),{}),En="data-rh",bo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},xo=(a,o)=>{for(let c=a.length-1;c>=0;c-=1){const s=a[c];if(Object.prototype.hasOwnProperty.call(s,o))return s[o]}return null},zT=a=>{let o=xo(a,"title");const c=xo(a,bo.TITLE_TEMPLATE);if(Array.isArray(o)&&(o=o.join("")),c&&o)return c.replace(/%s/g,()=>o);const s=xo(a,bo.DEFAULT_TITLE);return o||s||void 0},IT=a=>xo(a,bo.ON_CHANGE_CLIENT_STATE)||(()=>{}),Yd=(a,o)=>o.filter(c=>typeof c[a]<"u").map(c=>c[a]).reduce((c,s)=>({...c,...s}),{}),LT=(a,o)=>o.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,s)=>{if(!c.length){const d=Object.keys(s);for(let f=0;f<d.length;f+=1){const h=d[f].toLowerCase();if(a.indexOf(h)!==-1&&s[h])return c.concat(s)}}return c},[]),NT=a=>console&&typeof console.warn=="function"&&console.warn(a),jr=(a,o,c)=>{const s={};return c.filter(d=>Array.isArray(d[a])?!0:(typeof d[a]<"u"&&NT(`Helmet: ${a} should be of type "Array". Instead found type "${typeof d[a]}"`),!1)).map(d=>d[a]).reverse().reduce((d,f)=>{const p={};f.filter(g=>{let y;const T=Object.keys(g);for(let S=0;S<T.length;S+=1){const D=T[S],C=D.toLowerCase();o.indexOf(C)!==-1&&!(y==="rel"&&g[y].toLowerCase()==="canonical")&&!(C==="rel"&&g[C].toLowerCase()==="stylesheet")&&(y=C),o.indexOf(D)!==-1&&(D==="innerHTML"||D==="cssText"||D==="itemprop")&&(y=D)}if(!y||!g[y])return!1;const x=g[y].toLowerCase();return s[y]||(s[y]={}),p[y]||(p[y]={}),s[y][x]?!1:(p[y][x]=!0,!0)}).reverse().forEach(g=>d.push(g));const h=Object.keys(p);for(let g=0;g<h.length;g+=1){const y=h[g],T={...s[y],...p[y]};s[y]=T}return d},[]).reverse()},UT=(a,o)=>{if(Array.isArray(a)&&a.length){for(let c=0;c<a.length;c+=1)if(a[c][o])return!0}return!1},PT=a=>({baseTag:LT(["href"],a),bodyAttributes:Yd("bodyAttributes",a),defer:xo(a,bo.DEFER),encode:xo(a,bo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Yd("htmlAttributes",a),linkTags:jr("link",["rel","href"],a),metaTags:jr("meta",["name","charset","http-equiv","property","itemprop"],a),noscriptTags:jr("noscript",["innerHTML"],a),onChangeClientState:IT(a),scriptTags:jr("script",["src","innerHTML"],a),styleTags:jr("style",["cssText"],a),title:zT(a),titleAttributes:Yd("titleAttributes",a),prioritizeSeoTags:UT(a,bo.PRIORITIZE_SEO_TAGS)}),Rv=a=>Array.isArray(a)?a.join(""):a,BT=(a,o)=>{const c=Object.keys(a);for(let s=0;s<c.length;s+=1)if(o[c[s]]&&o[c[s]].includes(a[c[s]]))return!0;return!1},Xd=(a,o)=>Array.isArray(a)?a.reduce((c,s)=>(BT(s,o)?c.priority.push(s):c.default.push(s),c),{priority:[],default:[]}):{default:a,priority:[]},Iy=(a,o)=>({...a,[o]:void 0}),qT=["noscript","script","style"],xf=(a,o=!0)=>o===!1?String(a):String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),zv=a=>Object.keys(a).reduce((o,c)=>{const s=typeof a[c]<"u"?`${c}="${a[c]}"`:`${c}`;return o?`${o} ${s}`:s},""),HT=(a,o,c,s)=>{const d=zv(c),f=Rv(o);return d?`<${a} ${En}="true" ${d}>${xf(f,s)}</${a}>`:`<${a} ${En}="true">${xf(f,s)}</${a}>`},VT=(a,o,c=!0)=>o.reduce((s,d)=>{const f=d,p=Object.keys(f).filter(y=>!(y==="innerHTML"||y==="cssText")).reduce((y,T)=>{const x=typeof f[T]>"u"?T:`${T}="${xf(f[T],c)}"`;return y?`${y} ${x}`:x},""),h=f.innerHTML||f.cssText||"",g=qT.indexOf(a)===-1;return`${s}<${a} ${En}="true" ${p}${g?"/>":`>${h}</${a}>`}`},""),Iv=(a,o={})=>Object.keys(a).reduce((c,s)=>{const d=fc[s];return c[d||s]=a[s],c},o),QT=(a,o,c)=>{const s={key:o,[En]:!0},d=Iv(c,s);return[we.createElement("title",d,o)]},Fl=(a,o)=>o.map((c,s)=>{const d={key:s,[En]:!0};return Object.keys(c).forEach(f=>{const h=fc[f]||f;if(h==="innerHTML"||h==="cssText"){const g=c.innerHTML||c.cssText;d.dangerouslySetInnerHTML={__html:g}}else d[h]=c[f]}),we.createElement(a,d)}),hn=(a,o,c=!0)=>{switch(a){case"title":return{toComponent:()=>QT(a,o.title,o.titleAttributes),toString:()=>HT(a,o.title,o.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Iv(o),toString:()=>zv(o)};default:return{toComponent:()=>Fl(a,o),toString:()=>VT(a,o,c)}}},GT=({metaTags:a,linkTags:o,scriptTags:c,encode:s})=>{const d=Xd(a,$d.meta),f=Xd(o,$d.link),p=Xd(c,$d.script);return{priorityMethods:{toComponent:()=>[...Fl("meta",d.priority),...Fl("link",f.priority),...Fl("script",p.priority)],toString:()=>`${hn("meta",d.priority,s)} ${hn("link",f.priority,s)} ${hn("script",p.priority,s)}`},metaTags:d.default,linkTags:f.default,scriptTags:p.default}},FT=a=>{const{baseTag:o,bodyAttributes:c,encode:s=!0,htmlAttributes:d,noscriptTags:f,styleTags:p,title:h="",titleAttributes:g,prioritizeSeoTags:y}=a;let{linkTags:T,metaTags:x,scriptTags:S}=a,D={toComponent:()=>[],toString:()=>""};return y&&({priorityMethods:D,linkTags:T,metaTags:x,scriptTags:S}=GT(a)),{priority:D,base:hn("base",o,s),bodyAttributes:hn("bodyAttributes",c,s),htmlAttributes:hn("htmlAttributes",d,s),link:hn("link",T,s),meta:hn("meta",x,s),noscript:hn("noscript",f,s),script:hn("script",S,s),style:hn("style",p,s),title:hn("title",{title:h,titleAttributes:g},s)}},wf=FT,Bl=[],$f=!!(typeof window<"u"&&window.document&&window.document.createElement),Sf=class{instances=[];canUseDOM=$f;context;value={setHelmet:a=>{this.context.helmet=a},helmetInstances:{get:()=>this.canUseDOM?Bl:this.instances,add:a=>{(this.canUseDOM?Bl:this.instances).push(a)},remove:a=>{const o=(this.canUseDOM?Bl:this.instances).indexOf(a);(this.canUseDOM?Bl:this.instances).splice(o,1)}}};constructor(a,o){this.context=a,this.canUseDOM=o||!1,o||(a.helmet=wf({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},$T=parseInt(we.version.split(".")[0],10),Tf=$T>=19,YT={},Lv=we.createContext(YT),Nv=class Uv extends _.Component{static canUseDOM=$f;helmetData;constructor(o){super(o),Tf?this.helmetData=null:this.helmetData=new Sf(this.props.context||{},Uv.canUseDOM)}render(){return Tf?we.createElement(we.Fragment,null,this.props.children):we.createElement(Lv.Provider,{value:this.helmetData.value},this.props.children)}},uo=(a,o)=>{const c=document.head||document.querySelector("head"),s=c.querySelectorAll(`${a}[${En}]`),d=[].slice.call(s),f=[];let p;return o&&o.length&&o.forEach(h=>{const g=document.createElement(a);for(const y in h)if(Object.prototype.hasOwnProperty.call(h,y))if(y==="innerHTML")g.innerHTML=h.innerHTML;else if(y==="cssText"){const T=h.cssText;g.appendChild(document.createTextNode(T))}else{const T=y,x=typeof h[T]>"u"?"":h[T];g.setAttribute(y,x)}g.setAttribute(En,"true"),d.some((y,T)=>(p=T,g.isEqualNode(y)))?d.splice(p,1):f.push(g)}),d.forEach(h=>h.parentNode?.removeChild(h)),f.forEach(h=>c.appendChild(h)),{oldTags:d,newTags:f}},Af=(a,o)=>{const c=document.getElementsByTagName(a)[0];if(!c)return;const s=c.getAttribute(En),d=s?s.split(","):[],f=[...d],p=Object.keys(o);for(const h of p){const g=o[h]||"";c.getAttribute(h)!==g&&c.setAttribute(h,g),d.indexOf(h)===-1&&d.push(h);const y=f.indexOf(h);y!==-1&&f.splice(y,1)}for(let h=f.length-1;h>=0;h-=1)c.removeAttribute(f[h]);d.length===f.length?c.removeAttribute(En):c.getAttribute(En)!==p.join(",")&&c.setAttribute(En,p.join(","))},XT=(a,o)=>{typeof a<"u"&&document.title!==a&&(document.title=Rv(a)),Af("title",o)},Ly=(a,o)=>{const{baseTag:c,bodyAttributes:s,htmlAttributes:d,linkTags:f,metaTags:p,noscriptTags:h,onChangeClientState:g,scriptTags:y,styleTags:T,title:x,titleAttributes:S}=a;Af("body",s),Af("html",d),XT(x,S);const D={baseTag:uo("base",c),linkTags:uo("link",f),metaTags:uo("meta",p),noscriptTags:uo("noscript",h),scriptTags:uo("script",y),styleTags:uo("style",T)},C={},R={};Object.keys(D).forEach(A=>{const{newTags:z,oldTags:M}=D[A];z.length&&(C[A]=z),M.length&&(R[A]=D[A].oldTags)}),o&&o(),g(a,C,R)},Or=null,ZT=a=>{Or&&cancelAnimationFrame(Or),a.defer?Or=requestAnimationFrame(()=>{Ly(a,()=>{Or=null})}):(Ly(a),Or=null)},KT=ZT,Ny=class extends _.Component{rendered=!1;shouldComponentUpdate(a){return!Y1(a,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:a}=this.props.context;a.remove(this),this.emitChange()}emitChange(){const{helmetInstances:a,setHelmet:o}=this.props.context;let c=null;const s=PT(a.get().map(d=>{const{context:f,...p}=d.props;return p}));Nv.canUseDOM?KT(s):wf&&(c=wf(s)),o(c)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:a}=this.props.context;a.add(this),this.emitChange()}render(){return this.init(),null}},$l=[],Uy=a=>{const o={};for(const c of Object.keys(a))o[Mv[c]||c]=a[c];return o},gi=a=>{const o={};for(const c of Object.keys(a)){const s=fc[c];o[s||c]=a[c]}return o},Py=(a,o)=>{if(!$f)return;const c=document.getElementsByTagName(a)[0];if(!c)return;const s="data-rh-managed",d=c.getAttribute(s),f=d?d.split(","):[],p=Object.keys(o);for(const h of f)p.includes(h)||c.removeAttribute(h);for(const h of p){const g=o[h];g==null||g===!1?c.removeAttribute(h):g===!0?c.setAttribute(h,""):c.setAttribute(h,String(g))}p.length>0?c.setAttribute(s,p.join(",")):c.removeAttribute(s)},Zd=()=>{const a={},o={};for(const c of $l){const{htmlAttributes:s,bodyAttributes:d}=c.props;s&&Object.assign(a,Uy(s)),d&&Object.assign(o,Uy(d))}Py("html",a),Py("body",o)},WT=class extends _.Component{componentDidMount(){$l.push(this),Zd()}componentDidUpdate(){Zd()}componentWillUnmount(){const a=$l.indexOf(this);a!==-1&&$l.splice(a,1),Zd()}resolveTitle(){const{title:a,titleTemplate:o,defaultTitle:c}=this.props;return a&&o?o.replace(/%s/g,()=>Array.isArray(a)?a.join(""):a):a||c||void 0}renderTitle(){const a=this.resolveTitle();if(a===void 0)return null;const o=this.props.titleAttributes||{};return we.createElement("title",gi(o),a)}renderBase(){const{base:a}=this.props;return a?we.createElement("base",gi(a)):null}renderMeta(){const{meta:a}=this.props;return!a||!Array.isArray(a)?null:a.map((o,c)=>we.createElement("meta",{key:c,...gi(o)}))}renderLink(){const{link:a}=this.props;return!a||!Array.isArray(a)?null:a.map((o,c)=>we.createElement("link",{key:c,...gi(o)}))}renderScript(){const{script:a}=this.props;return!a||!Array.isArray(a)?null:a.map((o,c)=>{const{innerHTML:s,...d}=o,f=gi(d);return s&&(f.dangerouslySetInnerHTML={__html:s}),we.createElement("script",{key:c,...f})})}renderStyle(){const{style:a}=this.props;return!a||!Array.isArray(a)?null:a.map((o,c)=>{const{cssText:s,...d}=o,f=gi(d);return s&&(f.dangerouslySetInnerHTML={__html:s}),we.createElement("style",{key:c,...f})})}renderNoscript(){const{noscript:a}=this.props;return!a||!Array.isArray(a)?null:a.map((o,c)=>{const{innerHTML:s,...d}=o,f=gi(d);return s&&(f.dangerouslySetInnerHTML={__html:s}),we.createElement("noscript",{key:c,...f})})}render(){return we.createElement(we.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},JT=class extends _.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(a){return!OT(Iy(this.props,"helmetData"),Iy(a,"helmetData"))}mapNestedChildrenToProps(a,o){if(!o)return null;switch(a.type){case"script":case"noscript":return{innerHTML:o};case"style":return{cssText:o};default:throw new Error(`<${a.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(a,o,c,s){return{...o,[a.type]:[...o[a.type]||[],{...c,...this.mapNestedChildrenToProps(a,s)}]}}mapObjectTypeChildren(a,o,c,s){switch(a.type){case"title":return{...o,[a.type]:s,titleAttributes:{...c}};case"body":return{...o,bodyAttributes:{...c}};case"html":return{...o,htmlAttributes:{...c}};default:return{...o,[a.type]:{...c}}}}mapArrayTypeChildrenToProps(a,o){let c={...o};return Object.keys(a).forEach(s=>{c={...c,[s]:a[s]}}),c}warnOnInvalidChildren(a,o){return Ry(zy.some(c=>a.type===c),typeof a.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${zy.join(", ")} are allowed. Helmet does not support rendering <${a.type}> elements. Refer to our API for more information.`),Ry(!o||typeof o=="string"||Array.isArray(o)&&!o.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${a.type}>. Did you forget to wrap your children in braces? ( <${a.type}>{\`\`}</${a.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(a,o){let c={};return we.Children.forEach(a,s=>{if(!s||!s.props)return;const{children:d,...f}=s.props,p=Object.keys(f).reduce((g,y)=>(g[Mv[y]||y]=f[y],g),{});let{type:h}=s;switch(typeof h=="symbol"?h=h.toString():this.warnOnInvalidChildren(s,d),h){case"Symbol(react.fragment)":o=this.mapChildrenToProps(d,o);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(s,c,p,d);break;default:o=this.mapObjectTypeChildren(s,o,p,d);break}}),this.mapArrayTypeChildrenToProps(c,o)}render(){const{children:a,...o}=this.props;let c={...o},{helmetData:s}=o;if(a&&(c=this.mapChildrenToProps(a,c)),s&&!(s instanceof Sf)){const d=s;s=new Sf(d.context,!0),delete c.helmetData}return Tf?we.createElement(WT,{...c}):s?we.createElement(Ny,{...c,context:s.value}):we.createElement(Lv.Consumer,null,d=>we.createElement(Ny,{...c,context:d}))}};const e2={colors:{primary:"#FFB43A",primaryDark:"#E6A234",secondary:"#FF6B6B",secondaryDark:"#E65F5F",white:"#FFFFFF",gray:{100:"#F3F4F6",200:"#E5E7EB",300:"#D1D5DB",800:"#1F2937"}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem"},typography:{h1:{fontSize:"2.5rem",fontWeight:"bold",lineHeight:"1.2"},h2:{fontSize:"2rem",fontWeight:"bold",lineHeight:"1.3"},body:{fontSize:"1rem",lineHeight:"1.5"},subtitle:{fontSize:"1.25rem",lineHeight:"1.4",color:"#E5E7EB"}},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{base:1,dropdown:1e3,sticky:1020,fixed:1030,modalBackdrop:1040,modal:1050,popover:1060,tooltip:1070},transitions:{default:"0.3s ease",fast:"0.15s ease",slow:"0.5s ease"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"1rem",full:"9999px"}},t2="Invalid credentials",n2="Special Campaigns",a2={request:"To submit a request, please",here:"Here",welcome:"Welcome",home:"Home",about:"About",contact:"Contact",loading:"Loading",campaigns:"Campaigns",cart:"Cart",checkout:"Checkout",profile:"Profile",settings:"Settings",logout:"Logout",donate:"Donate",donateNow:"Donate Now",pageNotFound:"Page not found",backToHome:"Back to Home",currency:"EGP",login:"Login",close:"Close",selectIntention:"Select intention",donateIntention:"Donate Intention",donateIntentionRequired:"Donation intention is required",total:"Total",proceedToCheckout:"Proceed to Checkout",formSubmitted:"Your form was submitted successfully",register:"Register",showMore:"Show More",all:"All",clipboard:"Link copied to clipboard",submit:"Submit",cancel:"Cancel",noItemsMatch:"No items found",notAuthenticated:"You must be logged in to submit a request",download:"Download",checkForm:"Please fill in all fields",shortCode:"Short Code",noData:"No data found",retry:"Retry",goToPage:"Go to Page",error:"An error occurred",egpShort:"EGP"},i2={menu:"Menu",home:"Home",about:"About",lifemakers:"Life Makers",contact:"Contact",login:"Login",signup:"Sign Up",logout:"Logout",campaigns:"Campaigns",services:"Services",volunteer:"Volunteer",volunteerOpportunities:"Volunteer Opportunities",volunteerBoard:"Volunteer Board",becomeVolunteer:"Become Volunteer",volunteerSuccessStories:"Success Stories",aboutVolunteer:"About Volunteer",currentVolunteerActivities:"Current Volunteer Activities",humanitarianCases:"Humanitarian Cases",news:"News",calculator:"Zakat Calculator",aboutUs:"About Us",board:"Board",media:"Media",achievements:"Achievements",reach:"Our Reach",annualReport:"Annual Report",partners:"Partners of Success",associations:"Associations",programs:"Programs",refugeeServices:"Refugee",deals:"Tenders / Contracts",projects:"Projects",myDonations:"My Donations",monthlyDonation:"Monthly Donation",paymentOperations:"Payment Operations",myZakatAccount:"My Zakat Account",myNominatedCases:"My Nominated Cases",search:"Search Results"},o2={placeholder:"Search cities and addresses...",noResults:"No search results found",result:"result",results:"results"},r2={about:{title:"About Volunteering",description:`Volunteering is one of the core pillars upon which Life Makers Foundation is built, and one of the most significant contributions it has offered to youth and the community since its establishment more than twenty years ago. From day one, the foundation has believed that human development is the cornerstone of any true progress, and that youth are the driving force capable of transforming ideas into tangible impact.

Over two decades of community work, Life Makers Foundation has provided more than two million volunteering opportunities, through which young people have participated in developmental initiatives and projects that have touched the lives of thousands of families across Egypt’s governorates. These opportunities were not just about contributing time or effort — they became a genuine platform for self-discovery, skill development, and understanding real community needs.

Throughout this journey, Life Makers Foundation has trained and empowered thousands of young people through specialized programs focused on leadership, initiative management, teamwork, communication, and social problem analysis. Many of these young volunteers have gone on to become leaders in their communities — heading volunteer teams, founding their own initiatives, or taking on influential roles in local and international organizations.

Beyond offering volunteering and training opportunities, the foundation has opened wide doors for youth to gain hands-on learning experiences and participate in designing and implementing development projects in diverse fields such as education, health, economic empowerment, psychosocial support, refugee assistance, and life skills development. Each volunteer has the chance to leave a real mark — whether through fieldwork, specialized services, or leading entire teams in major national and seasonal initiatives.

At Life Makers Foundation, we believe that every volunteer has a unique ability to make a difference, and that every hour of volunteering can create an impact that lasts. That’s why we continuously strive to enhance the volunteer experience, offering new opportunities that align with young people’s interests and passions, while supporting their personal and professional growth.`},opportunities:{title:"Volunteer Opportunities",backToOpportunities:"Back to Opportunities"},becomeVol:{title:"Become a Volunteer",subtitle:"Volunteer with us and make a difference",description:`Life Makers Foundation offers diverse volunteering opportunities across several fields, including basic needs support, case management assistance, education, health, youth empowerment, and community events.

We believe volunteering is a space for learning, growth, and meaningful impact. That’s why we provide a safe and supportive environment where every volunteer feels that Life Makers is “the home of every volunteer.”

Ready to start your volunteering journey and be part of the change? Join us now.`,button:"Fill out the form"},volunteerStories:{title:"Success Stories",subtitle:"Success Stories",description:"Success Stories",button:"View Stories"},title:"Volunteer Board",subtitle:"Forming the Volunteer Board",volunteerBoard:"Volunteer Board",becomeVolunteer:"Become a Volunteer",volunteerSuccessStories:"Volunteer Success Stories",volunteerOpportunities:"Volunteer Opportunities"},s2={required:"This field is required",invalidEmail:"Invalid email address",nationalID:"The national ID must be 14 digits long",passportID:"The passport ID must be 6-9 alphanumeric characters",serverError:"A server error occurred",notFound:"Page not found",unauthorized:"Unauthorized access",loadingProjects:"Error loading projects",error:"Something went wrong",minAgeError:"You must be at least {{age}} years old",InvalidCredentials:"Email or password is incorrect"},l2={login:{email:"Email / phone",title:"Login to your account",subtitle:"Please enter your credentials to log in.",submit:"Login",noAccount:"Don't have an account?",register:"Register",password:"Password",rememberMe:"Remember me",forgotPassword:"Forgot password?",notMember:"Not a member?",googleLogin:"Login with Google",facebookLogin:"Login with Facebook",welcomeMsg:"You have successfully logged in",resetPasswordSuccess:"Password reset email sent successfully.",resetPasswordError:"Unable to send a password reset email.",isUserLoggedIn:"Log in to track your past and current donations with Life Makers."},register:{title:"Create a new account",subtitle:"Fill in the details to register.",acceptTerms:"I accept the",termsLink:"terms and conditions",submit:"Register",haveAccount:"Already have an account?",login:"Login",welcomeMsg:"Your account has been successfully created",confirm:"Confirm account",passwordMismatch:"Passwords do not match.",passwordMinLength:"Password must be at least 6 characters long.",form:{fullName:"Full Name",birthdate:"Birthdate",confirmPassword:"Confirm Password"}},email:"Email address",password:"Password",rememberMe:"Remember me",forgotPassword:"Forgot password?",firstName:"First name",lastName:"Last name",phone:"Phone number",confirmPassword:"Confirm password",registrationComplete:"Registration completed successfully. You can now enjoy the benefits of having an account.",resetPasswordEmailInstruction:"Please enter your email address to reset your password",resetPassword:"Reset Password",resetPasswordInstruction:"Please enter and confirm your new password",resetPasswordSuccess:"Password has been reset successfully",resetPasswordError:"Failed to reset the password",accountNotConfirmed:"Your account is not confirmed. Please check your email, we have sent you the passcode.",otp:{notReceived:"Didn't receive the code?",resend:"Resend",sentMessageWithEmail:"A verification code has been sent to your email {{email}}. Please enter the code here.",invalid:"Please enter a valid 6-digit code",success:"Email confirmed successfully!",resendSuccess:"A new OTP has been sent to your email",resendFailed:"Unable to resend the OTP. Please try again later.",verificationFailed:"Verification failed. Please try again.",resendIn:"You can resend the code after"},passwordRules:{minChars:"At least 8 characters",uppercase:"An uppercase letter (A-Z)",lowercase:"A lowercase letter (a-z)",digitOneToNine:"A number (0-9)",special:"A special character (!@#$...)"},passwordsDoNotMatch:"Passwords do not match.",passwordStrengthMessage:"Password must meet all the required rules."},c2={hero:{title:"Contribute to a Better Future",subtitle:"Join us in building a better future for those in need.",cta:"Take Action",shareValue:"Share Value",addToCart:"Add to Cart",donate:"Donate"},campaigns:{lastTenDays:"Last Ten Days Share",palmCharity:"Palm Charity Endowment",ramadanBox:"Ramadan Charity Box",breakingFast:"Breaking Fast",amount:"Amount",amountcurrency:"EGP",campaignName:"Campaign Name",donationIntention:"Donation Intention",donationType:"Donation Type",details:"View Details",totalAmount:"Total Amount",sukNumber:"Sukuk Number",donnerMsg:"Message (max 70 characters):",donnerMsgMax:"70 characters",donnerInfo:"Donor Information",soldOut:"Sold Out",whatsappNumber:"WhatsApp Number",selectCampaign:"Select a campaign",selectDonationIntention:"Select a donation intention"},social:{instagram:"Instagram",twitter:"Twitter",facebook:"Facebook",linkedin:"LinkedIn",youtube:"YouTube"},title:"Life Makers Foundation Egypt",description:"Life Makers Foundation Egypt (LMF) is a national, non-governmental, non-profit organization established in 2011 and centrally registered under No. 839 for 2018, operating under the Egyptian law for associations and civil institutions."},u2={title:"Aish Wmelh campaign",shareTitle:"Aish Wmelh campaign",shareText:"Join the biggest solidarity campaign among Egyptians",goalMain:"Our goal in Ramadan:",plateWord:"plates",goalSub:"Each plate = your contribution to a full meal that costs only 5 EGP.",mechanismHeading:"How to participate:",mechanismSubheading:"Preparing the components of the meal",steps:{step1Title:"You receive empty plates",step2Title:"You prepare the meals yourself",step3Title:"You hand them to volunteers at iftar time"},noteLabel:"Note: ",noteBody:"Meals are collected by volunteers and delivered to beneficiaries before iftar time.",formButton:"Open the form and fill in your information",or:"or",donationTitle:"Donate the cost of plates",donationLabel:"Each plate costs 5 EGP. Choose how many plates you want to donate.",totalLabel:"Total cost:",plateLabel:"meal",stats:{targetLabel:"Target",achievedLabel:"Achieved",remainingLabel:"Remaining"}},d2={title:"Donation Campaigns",tabs:{donationCampaigns:"Donation Campaigns",specialCases:"Special Cases",emergencyCampaigns:"Emergency Campaigns"},nominateCase:"Nominate a Case +",viewAllCampaigns:"View All Campaigns",campaignCard:{amount:"Amount",amountcurrency:"EGP",donate:"Donate Now",cart:"Add to Cart",progress:"Donation Progress"}},f2={aboutTitle:"Life Makers Foundation Egypt",aboutText:"Life Makers Foundation Egypt (LMF) is a national, non-governmental, non-profit organization established in 2011 and centrally registered under No. 839 for 2018, operating under the Egyptian law for associations and civil institutions.",contactTitle:"Contact Us",phoneTitle:"Phone Number",phone:"16563",newsletterTitle:"Newsletter",newsletterDescription:"Subscribe to our newsletter to receive the latest news and events from Life Makers.",newsletterPlaceholder:"Enter your email",subscribe:"Subscribe",emailTitle:"Email Address",email:"info@lifemakers.com",mainLinksTitle:"Main Links",news:"News",deals:"Tenders / Contracts",services:"Services and Projects",spread:"Our Reach",privacyPolicy:"Privacy Policy",board:"Board of Trustees",achievements:"Achievements",dukeAward:"Duke of Edinburgh Award",gallery:"Gallery",partners:"Partners of Success",donationTitle:"Donation Outlets",donationLocations:"Donation Outlets",donateOnline:"Donate Online",donateBanks:"Donate via Banks",otherDonationMethods:"Other Donation Methods",inKindDonations:"In-Kind Donations",volunteeringTitle:"About Volunteering",aboutVolunteering:"About Volunteering",becomeVolunteer:"Become a Volunteer",volunteerSuccessStories:"Volunteer Success Stories",volunteeringBoard:"Volunteer Board",volunteeringOpportunities:"Volunteer Opportunities",associations:"Associations",programs:"Programs",refugees:"Refugees",suppliers:"Suppliers",zakatCalculator:"Zakat Calculator",jobs:"Jobs",whoWeAre:"Who We Are",whereWeWork:"Our Reach",mediaGallery:"Media Gallery",annualReports:"Annual Reports",locations:"Locations",copyright:"All rights reserved to Ta-telecom",copyrightText:"All rights reserved to Life Makers Egypt © 2025",developedBy:"Developed by"},m2={title:"Annual Business Report",showAll:"Show All Reports"},p2={title:"Latest News",publishedAt:"Published At :",showAll:"Show All News",seeMore:"See More",backToNews:"Back to News",noNewsFound:"No news found for this year or no search results"},h2={title:"Partners of Success",partnerDetails:{title:"Partners"}},g2={title:"Programs and Projects",description:`From the heart of Egyptian society, Life Makers Foundation launches its projects with a vision rooted in empowering people and creating transformative, sustainable change. Through our development initiatives, we strive to bring lasting positive impact to the communities we serve, guided by a philosophy that places people at the center of development.

Our relationship with beneficiaries is built on trust and mutual respect. They are not merely recipients of support, but partners in success whose capabilities we believe in, and whose determination inspires us with hope and motivation. Volunteers—especially young people—stand at the forefront of our work. They are the beating heart of our foundation and the true driving force behind development. Since the establishment of Life Makers, youth leadership and volunteerism have formed the foundation of all our programs and projects.

We view volunteering as more than just a tool for program implementation; it is a way of life and a shared culture that we shape together to create impact that lasts and grows across generations. Our projects span various fields, including education, health, economic empowerment, and social protection.

Across these areas, we work to provide access to education, healthcare services, and dignified livelihood opportunities for the most vulnerable groups, while ensuring their social protection through comprehensive support and empowerment initiatives. These diverse projects reflect our deep commitment to achieving holistic development within Egyptian society—where efforts come together to address different aspects of life and ensure a brighter future for all.`,stats:{directBeneficiaries:{title:"Direct Beneficiaries",number:"+1,200,000",description:"Individuals whose lives have changed thanks to our development interventions"}},cards:{villages:{title:"Villages and Communities",number:"+600",unit:"communities and villages",description:"We reach the most needy areas in 27 governorates"},development:{title:"Development Projects",number:"+150",unit:"development projects",description:"Implement sustainable interventions in 6 key areas"},partnerships:{title:"Partnerships and Alliances",number:"+80",unit:"local and international partnerships",description:"We work with partners who believe in human-centered development"},volunteers:{title:"Participating Volunteers",number:"+25,000",unit:"young men and women",description:"Lead change in their communities with faith and passion"}},categories:"Diverse Categories",backToHome:"Back to Home Page",backToPrograms:"Back to Programs and Categories",backToCategory:"Back to Category",projects:"Projects",tags:{education:"# Education",health:"# Health",economicEmpowerment:"# Economic Empowerment"},impact:{title:"Our impact on children in 2023",children:{title:"Supported Children",number:"14,200",unit:"children",description:"We were supported in 40 countries to be able to lead and participate meaningfully in campaigns for a more harmonious and just future"},climate:{title:"Climate Change Support",number:"$2",unit:"million dollars",description:"Dedicated to supporting local communities and building their resilience in the face of climate change"}}},y2={title:"We Create Hope... Building a Home in Exile",description:`At Life Makers Foundation, we believe that true support goes beyond emergency assistance; it's a journey toward restoring dignity and building the future. Through our extensive experience and strategic partnerships with major international organizations (such as UNHCR and the European Union), we lead pioneering efforts to empower refugees, asylum seekers, and migrants. We don't just provide services; we create a safe environment that promotes "Self-Reliance" and effective integration within the Egyptian community.
We provide a comprehensive range of programs in health, psychosocial support, education, livelihoods and economic empowerment, basic needs assistance, and social protection.

We also manage community centers in Cairo, Aswan, and Damietta that provide safe and accessible spaces, offering healthcare services, case management, youth empowerment programs, and community activities that promote cohesion and integration. Through these efforts, we work to provide an environment that ensures dignity and protection and opens doors of opportunity for all those who have been forced to leave their homeland and start anew.`,statsSection:{title:"By the Numbers",funding:{title:"Current Project Funding Volume",number:"+144",unit:"million EGP",description:"for serving refugee issues"},beneficiaries:{title:"Beneficiaries",number:"+12,000",unit:"beneficiaries",description:"we reach with direct and indirect community and health services"},employment:{title:"Employment Rate",number:"100%",unit:"employment",description:"employment rate of graduates from our vocational training programs in the Livelihoods project"},governorates:{title:"Governorates",number:"3",unit:"major governorates",description:"wide geographical coverage including Greater Cairo, Alexandria, and Aswan"}},pillars:{title:"Our Work Pillars",protection:{number:"1-",title:"Protection & Psychosocial Support (Protection & PSS)",description:"We prioritize the most vulnerable groups, particularly unaccompanied children and female-headed households. We provide safe spaces, child protection committees, and specialized case management services to ensure their psychological and physical safety."},livelihoods:{number:"2-",title:"Economic Empowerment & Livelihoods",description:"We are UNHCR's partner in the Livelihoods portfolio in Greater Cairo. We transform beneficiaries from aid recipients to producers through vocational training, small business grants, and direct linkage to the labor market."},cohesion:{number:"3-",title:"Social Cohesion & Integration",description:"We believe that refugees are an added value to society. Our projects target both refugees and host communities (Egyptians) together, to promote peaceful coexistence and acceptance of others through joint cultural and social activities."}},featuredProjects:{title:"Our Strategic Projects (Featured Projects)",protectionResilience:{title:"Protection and Resilience Enhancement Project (EU-funded)",focusPoints:["A massive 3-year project aimed at enhancing the resilience of refugees and migrants in vulnerable situations","Focus: 2,000 unaccompanied children with protection, psychosocial support, education, and health services","Economic empowerment of 2,000 beneficiaries","Healthcare and educational services for 1,000 beneficiaries","Enhancing the capacity of health and education service providers and improving service quality","Geographic scope: Greater Cairo, Alexandria, and Damietta"]},livelihoodsIntegration:{title:"Livelihoods and Economic Integration Project (in partnership with UNHCR)",description:"As the strategic partner of UNHCR, we manage the economic empowerment portfolio in Greater Cairo",focusPoints:["Achievement: Supported 577 entrepreneurs to start their own businesses.","Training: Qualified 172 young men and women with labor market skills.","Integration: Engaged 1,500 Egyptians and refugees in social cohesion activities"]},unitedStand:{title:"United We Stand Project to Enhance Self-Reliance and Economic Empowerment for the Most Vulnerable Groups in Aswan (in cooperation with Plan International & Drosos)",description:"In response to the situation in the South, we focus our efforts in Aswan where Sudanese constitute 70% of the target and host communities constitute 30%",womenFocus:"In addition, and in our belief in the role of female-headed households, they also constitute 70% of the target.",innovations:["Innovation: Establishing Village Savings and Loan Associations (VSLAs) to enhance financial independence, and establishing child protection committees to enhance the protection role and protect children from multiple forms of abuse, and working to create child-friendly spaces to strengthen children's personalities and enhance their self-confidence","Future: Empowering youth and raising community awareness about positive parenting and children's rights"]}},whyDifferent:{title:"Why We're Different?",points:[{title:"Integrated Approach",description:"We don't work in isolated silos; we integrate protection with education, health, and economic empowerment in one cycle"},{title:"Technology & Transparency",description:"We use the latest technologies in case management and aid distribution to ensure aid reaches those who deserve it with high efficiency"},{title:"Sustainability",description:"We don't limit ourselves to direct implementation; we also provide grants to smaller local organizations to ensure continuity of impact and expansion of service scope."}]},callToActionTitle:"Be Part of the Journey of Change",callToAction:"Whether you're an international donor looking for a trusted partner, or an individual wishing to volunteer... your contribution makes a difference in the lives of thousands.",categories:"Projects and services provided to refugees",backToHome:"Back to Home Page",backToPrograms:"Back to Programs and Categories",backToCategory:"Back to Category",projects:"Projects",tags:{education:"# Education",health:"# Health",economicEmpowerment:"# Economic Empowerment"},impact:{title:"Our impact on children in 2023",children:{title:"Supported Children",number:"14,200",unit:"children",description:"We were supported in 40 countries to be able to lead and participate meaningfully in campaigns for a more harmonious and just future"},climate:{title:"Climate Change Support",number:"$2",unit:"million dollars",description:"Dedicated to supporting local communities and building their resilience in the face of climate change"}}},v2={title:"2024 Statistics",beneficiaries:"Beneficiaries",opportunities:"Opportunities",budget:"Budget"},b2="Quick Donate",x2={title:"About Us",description:`Life Makers Foundation (LMF) is a non-governmental and non-profit organization established in 2011 under the Egyptian Law of Associations and Foundations (registration no. 839/ 2018). As a voluntary-based foundation, Life Makers foundation empowers young people to become active leaders in their communities; with 12 offices and 19 partner organization across the country. The foundation adopts the Humanitarian Principles: Humanity, Neutrality, Impartiality, and Independence throughout its programs to ensure that assistance is done without any discrimination based on ethnicity, religion, sex, or any other biases. LMF provides humanitarian and development interventions to the neediest beneficiaries while preserving their dignity and participation.

VISION
Inclusive community development for the benefit of the humanity

MISSION
We provide young people across Egypt with knowledge, skills, and opportunities to become active leaders capable to address local challenges in their communities through volunteering in a meaningful and innovative interventions tailored to the needs of marginalized and most vulnerable groups while preserving their dignity within the framework of neutrality and equality.

Toward the realization of the vision, at Life Makers Foundation

WE STRIVE
• To innovate new means of implementation to ensure effectiveness and quality of services
• To empower young people with tangible tools and skills for self and community development
• To reach the most vulnerable and in-need beneficiaries across Egypt

WE PROMOTE
• The role of youth as active change makers
• Innovation and technology as key element in development
• Youth-led groups and organizations as key stakeholders in community development
• Core Humanitarian Standards

WE FIGHT
• For the rights of every child, women, young person to reach their potential in their communities
• For the rights of our beneficiaries to receive high-quality services while preserving dignity and confidentiality`},w2={title:"Board of Trustees",subtitle:"Forming the Board of Trustees","volunteer-title":"Volunteer Board",footerSubtitle:"Our board includes..",headerSubtitle:"Forming the Board of Trustees",description:"Life Makers Foundation Egypt (LMF) is a national, non-governmental, non-profit organization established in 2011 and centrally registered under No. 839 for 2018, operating under the Egyptian law for associations and civil institutions."},S2={amount:"Donation Amount",otherAmout:"Other",totalAmout:"Total donation",amountcurrency:"EGP",payment:"Payment",donate:"Donate Now",cart:"Cart",cartItems:"Donation Items",progress:"Donation Progress",donationMethods:"Payment Methods",shareValue:"Share Cost:",cartEmpty:"Your cart is empty",shareBtn:"Share",maximumAmount:"the maximum number of suk is 7",modelMsg:"Please confirm that the information you entered is correct in order to receive an invoice via email and a mobile message",paymentMethods:{card:"Visa / MasterCard",fawry:"Fawry",wallet:"Vodafone Cash",CashCollection:"Collection Request"},walletDis:"Payment via Vodafone Cash",fawryDis:"Payment via Fawry",cardDis:"Credit / Debit Card",personalData:"Personal Information",donationDetails:"Donation Details",formName:"Name",formEmail:"Email",invalidEmail:"Invalid email address",formPhone:"Phone number",inputRequired:"This field is required",invalidPhoneNum:"Invalid Phone Number",donationIntention:"choose intention",loginChoice:"(Without logging in) or",minimumAmount:"Minimum amount is {{amount}}",termsPrefix:"I agree to the",termsLink:"Terms & Conditions",privacyLink:"Privacy Policy",paymentBtn:"Proceed to Complete Payment",installmentPayment:"Payment in installments",numberOfInstallments:"Number of installments",installmentValue:"Installment value",currency:"ُEGP",installmentPolicy:"I agree to the installment policy",installmentPolicyTitle:"Installment Policy",installmentPolicyContent:{intro:"In our commitment to facilitate participation and support our valued clients/donors, we provide installment services according to the following terms and conditions:",generalProvisions:{title:"1. General Provisions",points:["Clients/donors are entitled to benefit from installment services when purchasing/subscribing/donating to initiatives or services specified by the foundation.","Installment services are available for individuals and companies according to the conditions outlined below.","The foundation reserves the right to modify or update this policy at any time, with amendments published on the website."]},eligibility:{title:"2. Eligibility Requirements",points:["Down payment of no less than 20% of the total amount upon subscription/purchase.","Providing accurate personal data and active means of communication.","Commitment to pay installments on their specified dates."]},paymentPlan:{title:"3. Payment Plan",points:["Installment period ranges from 3 to 12 months (depending on the type of service/initiative).","Monthly installment value is clearly determined before contracting.","No interest is charged on installments, though simple administrative fees may apply (if any)."]},paymentMethods:{title:"4. Payment Methods",points:["Bank transfer or direct deposit to the foundation's account.","Electronic payment via credit cards or electronic wallets.","Cash payment at the foundation's headquarters or through authorized collection representatives."]},latePayment:{title:"5. Late Payment or Default",description:"In case of delay in paying two consecutive installments, the foundation reserves the right to:",points:["Cancel the contract/subscription.","Count paid amounts as donation/administrative fees (in case of charitable initiatives).","Claim the remaining amount (in case of services or products)."]},inquiries:{title:"6. Inquiries",description:"To inquire about installment services or obtain a customized payment plan, please contact us via:",points:["📞 Phone: 16563","📧 Email: website@lifemakers.org","🌐 Website: lifemakers.org"]}},sukOwnerInfo:"Suk Owner Information",maxQuantityReached:"Maximum quantity reached ({{max}} items)",clipboard:"Link copied to clipboard",cashCollectionInfoSuccess:"Cash collection request created successfully",cashCollectionInfoError:"Failed to create cash collection request"},T2={title:"Media Gallery",showAll:"Show All Media",campaign:"Campaign",date:"Date",type:"Type",view:"View",download:"Download",share:"Share",latestToOldest:"Latest to oldest",oldestToLatest:"Oldest to latest",viewMore:"View More",volunteerName:"Volunteer Name",sortBy:"Sort By"},A2={title:"Adahy Campaign",description:"Adahy Campaign"},E2={title:"Nakhil Campaign",description:"Nakhil Campaign"},_2={title:"Wed Campaign",description:"Wed Campaign"},C2={title:"Annual Work Report",description:"At the end of each year, we strive to document all our work in a comprehensive annual report that summarizes the programs and projects carried out throughout the year. In this section, we present our annual reports from previous years."},D2={title:"Our Reach",geographicalSpread:"Geographical Spread",branchesTitle:"Branches",branchesSubtitle:"Geographical Spread",description:`We implement our projects across all governorates of Egypt through our offices and partner organizations, with 30 teams operating within our branches and affiliated associations nationwide.

These offices officially represent the foundation and provide a safe, structured environment where volunteers carry out both our central programs and local initiatives. They support the main foundation in delivering its activities within each governorate, ensuring quality, sustainability, and effective impact.

In addition, they play a vital role in resource development by supporting fundraising efforts and facilitating direct cooperation with local institutions, organizations, and partner entities within each governorate.`,offices:"Offices",associations:"Associations",donateBranches:"Donate Branches"},k2={title:"Success",description:"Your payment was successful.",subDescription:"You will receive an invoice via email and a mobile message.",home:"Back to Home",cashCollectionDescription:"Your data has been sent successfully and we will contact you in the shortest possible time",redirectMsg:"You will be redirected to the home page in {{seconds}} seconds",donationDetails:"Donation Details",transactionNumber:"Transaction Number",orderNumber:"Order Number",donatedItems:"Donated Items",totalAmount:"Total Donation",currency:"EGP",shares:"share(s)",saveScreenshot:"Save as Image"},j2={basicInfo:"Basic Information",address:"Address",volunteerFormTitle:"Volunteer Application Form at Life Makers Foundation",whatsApp:"WhatsApp Number",village:"Village / Area:",city:"District / City:",education:{type:"Education",student:"Student",graduated:"Graduate"},nationality:{nationalID:"National ID",passportID:"Passport ID",type:"Nationality",egyptian:"Egyptian",nonEgyptian:"Non-Egyptian"},gender:{type:"Gender",male:"Male",female:"Female"},disability:{label:"Additional Information",isDisabledLabel:"Are you a person with a disability?",yes:"Yes",no:"No",typeLabel:"Type of Disability",degreeLabel:"Degree of Disability",sourceLabel:"How did you hear about the volunteer form?",selectOption:"Select",mustChooseYes:"Please select 'Yes' if you specified a disability type or level.",types:{none:"No Disability",visual:"Visual Impairment",hearing:"Hearing Impairment",motor:"Motor Disability",intellectual:"Intellectual Disability",other:"Other"},degrees:{simple:"Mild",moderate:"Moderate",severe:"Severe"},sources:{social:"Social Media",volunteer:"Volunteer",event:"Event",other:"Other"}},age:"Age",personalData:"Personal Information",upload:{dragPhotoHere:`Drag image here
or`,choosePhoto:"Choose an image from your device",dragFileHere:`Drag file here
or`,chooseFile:"Choose an file from your device",idCard:"ID Card",personalPhoto:"Personal Photo"},submit:"Submit",cancel:"Cancel"},O2={alternativeDonation:{title:"Alternative Donation Methods",megakhier:{title:"Donate via Megakhair",description:"Megakhair through the app by dialing *9*40# or sending the word 'Mega' to 9695"},fawry:{title:"Donate via Fawry",description:"Through any merchant or shop with a Fawry machine:",instructions:["1. Go to any supermarket, pharmacy, or mobile shop with the Fawry logo.",'2. Ask the merchant: "I want to donate to Life Makers Foundation."',"3. The merchant selects: Donations → Life Makers or صناع الحياة.","4. Choose the donation amount (starting from 5 EGP).","5. Verify the foundation's name on the screen.","6. Pay the amount and take the donation receipt.",'7. Life Makers Foundation code on Fawry sometimes appears as: 950 or LIFE MAKERS. If not, ask them to search for "Life Makers."']}},websiteDonation:{title:"Donation through the website",seeMore:"Load More"},inBank:{title:"Donation through the bank",description:"You can donate from your account in any bank for Life Makers by transferring the donation amount to any of the following banks using the account number and swift code (transfer number):",accountInfo:"Account Information",swiftCode:"Swift Code:",branch:"Branch Address:",insideEgypt:"Inside Egypt",outsideEgypt:"Outside Egypt",selectBank:"Select Bank",selectArea:"Select Area",selectBranch:"Select Branch",selectGovernorate:"Select Governorate",selectCountry:"Select Country",seeMore:"Load More",cardEmptyMessage:"Please fill in the required data to donate",noDataFound:"No data found",iban:"Account Number:",branchAddress:"Branch Address:",selectCurrency:"Select Currency"},inBranch:{title:"Donation through the branches",seeMore:"Load More"}},M2={title:"In-Kind Donations",thankYou:"Thank you for your in-kind donation",thankYouMessage:"Your request has been received successfully",thankYouSubMessage:"A Life Makers representative will contact you soon to confirm the donation collection appointment",selectOption:"Select",howToDonate:"How to Donate",DonorDetails:"Donor Details",addressUrl:"Location on the map",selectGovernorateFirst:"Please select the governorate first",selectCityFirst:"Please select the city first",steps:{step1:`In every home, there are items we no longer need or use—like clothes we no longer wear, old furniture we replaced, stored devices, or even books we've already read. These items take up space and require effort every time we organize our homes. At Life Makers Foundation, we receive your in-kind donations, utilize them to serve the beneficiaries, and save you time and effort.

Submit your information now, and a Life Makers representative will contact you to confirm the donation collection appointment.

In-kind donations must be in good condition and suitable for use.`},donationType:{label:"Type of In-Kind Donation",types:{clothing:"Clothing",food:"Food",medicine:"Medicine & medical supplies",furniture:"Furniture",electronics:"Electronics & appliances",schoolSupplies:"School supplies",services:"Services (e.g. design, legal, translation)",other:"Other"}},governorate:{label:"Governorate",names:{cairo:"Cairo",giza:"Giza",alex:"Alexandria",dakahlia:"Dakahlia",sharqia:"Sharqia",qalyubia:"Qalyubia",assuit:"Assiut",sohag:"Sohag",luxor:"Luxor",aswan:"Aswan",other:"Other"}},area:{label:"Area",names:{nasrCity:"Nasr City",maadi:"Maadi",dokki:"Dokki",zamalek:"Zamalek",mansoura:"Mansoura",tanta:"Tanta",faisal:"Faisal",other:"Other"}},address:{label:"Detailed Address",placeholder:"Enter full address"},pickupDate:{label:"Pickup Date & Time"},period:{label:"Preferred Time",selectOption:"Select a time period",options:{morning:"Morning",evening:"Evening"}},notes:{label:"Notes",placeholder:"Additional information or comments"}},R2={title:"Suppliers Registration",address:"Address",companyOwnersTitle:"Company owners jointly liable / Board members / Representatives",companyOwnersNote:"Maximum (3) representatives",companyOwners:{name:"Name",nationalId:"National ID",position:"Position",addNewOwner:"Add Another Owner"},companyActivitiesTitle:"Company Activities",mainActivity:"Main Activity",subActivity:"Sub Activity",selectMainFirst:"Please select the main activity first",supplierData:{sectionTitle:"Supplier Information",companyName:"Company name (as in Commercial Register)",address:"Address",commercialRegNo:"Commercial Register Number",commercialRegIssuer:"Commercial Register Issuing Authority",taxCardNumber:"Tax Card Number",contactPerson:"Contact Person Name",mobile:"Mobile Number",landline:"Landline Number",fax:"Fax Number",companyType:"Company Type"},branchesTitle:"Company Branches",addNewBranch:"Add another branch",addNewActivity:"Add another activity",documents:{label:"Required Documents",description:"To understand the required documents in the attachment",clickHere:"Click here"}},z2={home:"Home",about:"About Us",board:"Board of Trustees",contact:"Contact",campaigns:"Campaigns",services:"Services",volunteer:"Volunteer","vol-opportunities":"Volunteer Opportunities","vol-board":"Volunteer Board","vol-become":"Become a Volunteer","vol-success":"Success Stories","vol-about":"About Volunteering",news:"News",media:"Media Gallery",achievements:"Achievements",branches:"Our Reach",partners:"Partners of Success","annual-report":"Annual Reports","yearly-reports":"Annual Reports",contracts:"Tenders / Contracts","success-stories":"Success Stories","website-donation":"Donate Online","alternative-donation":"Other Donation Methods","inbank-donation":"Donate via Banks","donate-branches":"Donation Outlets","campaign-details":"Campaign Details","news-details":"News Details","volunteer-form":"Volunteer Form","in-kind-donations":"In-kind Donations","suppliers-registeration":"Suppliers Registration","vol-opportunities-details":"Volunteer Opportunities Details"},I2={title:"Tenders / Contracts",details:"Details",duration:"Duration",downloadFile:"Download File"},L2={2020:{year:"2020",header:"Life Makers Egypt launched its campaign to support Gaza under the umbrella of the National Alliance, and the volume of aid provided reached 275 trucks through 10 convoys with the participation of 10,000 volunteers from various governorates.",footer:"",achieves:[]},2021:{year:"2021",header:"Life Makers Foundation participated in the 'Shoulder to Shoulder' event, organized by the National Alliance for Civil Development Work in the presence of President Sisi and more than 40,000 volunteers from all governorates.",footer:"More than 10,000 Life Makers volunteers participated in the events, and the chairperson of the Life Makers Volunteer Board gave a speech before President Sisi, and volunteers participated from live broadcast points from Alexandria Governorate while packing food boxes.",achieves:[]},2022:{year:"2022",header:"Life Makers Egypt Foundation joined the National Alliance as a founding member of the alliance, to begin a series of cooperation with civil society institutions and associations to reach beneficiaries in the farthest points in Egypt.",footer:"",achieves:[]},2023:{year:"2023",header:"",footer:"",achieves:[{description:"Installation of 349 water connections and 263 sewage connections, as well as upgrading 1,320 homes, in addition to installing roofs for 870 homes from unsafe houses.",image:"water"},{description:"Performing 678 surgical operations and 874 eye operations, in addition to equipping 21 medical convoys for examination and free treatment distribution, and 11 veterinary convoys to serve rural areas.",image:"surgen"},{description:"Providing 1,900 medical glasses after examination, and 212 prosthetic devices to support people with disabilities. Medical convoys conducted hepatitis C virus analysis for 1,295 people, in addition to holding health awareness sessions that benefited about 4,450 people.",image:"special"},{description:"The foundation provided 28,475 food boxes during the initiative, in addition to paying off debts for 5 indebted people, contributing to alleviating burdens from the shoulders of the most needy families.",image:"bags"},{description:"Organizing clothing exhibitions where 4,350 clothing items were distributed to families, and during winter, 9,275 blankets and 350 jackets were provided to protect families from severe cold.",image:"cloths"}]},2024:{year:"2024",header:"Life Makers participated in the 'Decent Life' comprehensive development campaign in Egypt's governorates, where Life Makers worked on developing the 10 poorest villages in Sohag and Qena governorates through:",footer:"Launching the 'People for Each Other' campaign and supporting one million beneficiaries during the coronavirus period, remotely without contact, through electronic payments, where the beneficiary receives a message on their mobile phone then goes to the nearest store (clothing - food - etc.).",achieves:[{description:"Installation of 349 water connections and 263 sewage connections, as well as upgrading 1,320 homes, in addition to installing roofs for 870 homes from unsafe houses.",image:"water"},{description:"Performing 678 surgical operations and 874 eye operations, in addition to equipping 21 medical convoys for examination and free treatment distribution, and 11 veterinary convoys to serve rural areas.",image:"surgen"},{description:"Providing 1,900 medical glasses after examination, and 212 prosthetic devices to support people with disabilities. Medical convoys conducted hepatitis C virus analysis for 1,295 people, in addition to holding health awareness sessions that benefited about 4,450 people.",image:"special"},{description:"The foundation provided 28,475 food boxes during the initiative, in addition to paying off debts for 5 indebted people, contributing to alleviating burdens from the shoulders of the most needy families.",image:"bags"},{description:"Organizing clothing exhibitions where 4,350 clothing items were distributed to families, and during winter, 9,275 blankets and 350 jackets were provided to protect families from severe cold.",image:"cloths"}]},title:"Achievements"},N2={title:"Profile",changePicture:"Change Picture",defaultName:"User Name",defaultEmail:"user@example.com",totalDonations:"Total Donations",campaignsParticipated:"Campaigns Participated In",invalidFileType:"Invalid file type. Please select an image in JPG, PNG, GIF, or WebP format",fileTooLarge:"File size is too large. Maximum size is 5MB",imageProcessingError:"Error processing image. Please try again with a different image",uploading:"Uploading...",personalProfile:"Personal Profile",myDonations:"My Donations",monthlyDonation:"Monthly Donation",paymentOperations:"Payment Operations",myZakatAccount:"My Zakat Account",myNominatedCases:"My Nominated Cases for Help",logout:"Logout",accountActions:"Account Actions",personalInformation:"Personal Information",birthDate:"Birth Date",birthDatePlaceholder:"Select your birth date",invalidBirthDate:"Birth date cannot be today or in the future",fullName:"Full Name",fullNamePlaceholder:"Enter your full name",email:"Email",emailPlaceholder:"Enter your email address",phone:"Phone Number",phonePlaceholder:"Enter your phone number",password:"Password",passwordPlaceholder:"Enter your password",confirmPassword:"Confirm Password",confirmPasswordPlaceholder:"Confirm your password",address:"Address",governorate:"Governorate",city:"City",village:"Village/Area",detailedAddress:"Detailed Address",detailedAddressPlaceholder:"Enter your detailed address",select:"Select",optional:"Optional",saveChanges:"Save Changes",cairo:"Cairo",alexandria:"Alexandria",giza:"Giza",village1:"Village 1",village2:"Village 2",updateSuccess:"Profile updated successfully",updateError:"Failed to update profile",missingFields:"Please fill in the required fields: {{fields}}",changePassword:"Change Password",oldPassword:"Old Password",newPassword:"New Password",confirmNewPassword:"Confirm New Password",updatePassword:"Update Password",passwordChangedSuccessfully:"Password changed successfully",passwordChangeError:"Failed to change password",imageUploadSuccess:"Image updated successfully",imageUploadError:"Failed to update image"},U2={title:"Nominate a Case for Help",organizationPolicy:"Organization Policy",organizationPolicyDesc:`Many times, we meet people going through difficult circumstances, and we feel that our support alone is not enough. No matter how much help we offer, their needs are greater and require collective participation and cooperation.

That's why, at Life Makers Foundation, we opened the door for donors to nominate humanitarian cases. Through this service, you can help our team reach more families everywhere and provide them with the necessary support after assessing eligibility.

And because guiding others to do good is like doing good yourself, your role is not just a nomination; you are an essential partner in the journey—starting from reviewing the case and verifying its eligibility, all the way to accepting it and publishing it officially on our website.

Once the case is approved, we will share with you a dedicated donation link so that you can share it with your family and friends, spreading goodness together.`,requestProcess:"Request Process",requestProcessDesc:"Zakat is a mandatory financial obligation for Muslims and one of the pillars of Islam. It is considered a form of obligatory charity. Zakat is paid from the wealth and possessions of Muslims to specific groups in society defined by Islamic law, with the purpose of purification and seeking closeness to Allah.",caseData:"Case Data",job:"Job",employed:"Employed",unemployed:"Unemployed",caseDocuments:"Case Documents",caseDetails:"Case Details",nominateCaseList:"My Nominated Cases for Help",nominateCaseSuccess:"Nominated case sent successfully. You can track the case status through your account.",note:"**The Life Makers team sends an email or SMS in case of rejection / request for additional data / preliminary approval for any request. Therefore, please always check your SMS messages or email to follow up on any requests or reasons related to the status of your application.",columns:{name:"Case Name",requestDate:"Request Date",phone:"Contact Phone",governorate:"Governorate",status:"Request Status",comment:"Comment"},status:{inReview:"In Review",accepted:"Accepted",rejected:"Rejected",dataRequired:"Data Required",preAccepted:"Preliminary Acceptance"}},P2={title:"My Payments",collection:"Collected",columns:{date:"Date",paymentMethod:"Payment Method",amount:"Amount",currency:"Currency",transactionNumber:"Transaction Number",invoice:"Invoice",campaignOrProject:"Campaign / Project"}},B2={invoiceTo:"Invoice To:",email:"Email:",mobile:"Mobile:",invoiceDate:"Invoice Date:",invoiceNumber:"Invoice Number:",transaction:"Transaction",donationItem:"Donation Item",intention:"Intention",amount:"Amount",currency:"Currency",method:"Method",ongoingCharity:"Ongoing Charity",total:"Total",contactUs:"Contact Us",phone:"Phone",address:"Address"},q2={title:"Monthly Donation",rememberMonthlyDonation:"Remember Monthly Donation",everyMonth:"Every Month",columns:{campaignName:"Campaign Name",recurrenceDay:"Recurrence Day",cancelSubscription:"Subscription Status",day:"Day:"}},H2={updateSuccess:"Reminders updated successfully.",saveChanges:"Save Changes",activate:"Activate"},V2={title:"Register for the Duke of Edinburg Scholarship",university:"School / University",policy:"Organization Policy",policyDesc:"Zakat is a mandatory financial obligation for Muslims and one of the pillars of Islam. It is considered a form of obligatory charity. Zakat is paid from the wealth and possessions of Muslims to specific groups in society defined by Islamic law, with the purpose of purification and seeking closeness to Allah.",basicInfo:"Student Information",fullName:"Full Name",info:"Additional Information",isRegistered:"Have you registered for the scholarship before?",level:"The level you want to join",levelOptions:{bronze:"Bronze",silver:"Silver",gold:"Gold"}},Q2={title:"Duke of Edinburgh Award",subtitle:"Life Makers Foundation – The official operating partner of The Duke of Edinburgh’s International Award in Egypt",description:`Life Makers Foundation is the official national operating partner of The Duke of Edinburgh’s International Award in Egypt — a global youth development program available in more than 140 countries. The Award is a personal challenge rather than a competition.

It targets young people aged 14 to 24 and offers a unique opportunity for them to discover their potential. The program aims to help youth develop real-life skills, build self-confidence and responsibility, gain leadership and teamwork abilities, and contribute meaningfully to their communities. This is achieved through experiential learning and inspiring, challenge-based adventures.`,levels:{title:"Award Levels:",bronze:"Bronze (from age 14)",silver:"Silver (from age 15)",gold:"Gold (from age 16)",description:"The Duke of Edinburgh’s Award is built on a set of core requirements that participants must complete at every level. These requirements are designed to support balanced personal development and strengthen character through practical experience and learning by doing."},categories:{title:"The program includes four main areas across all levels:",voluntaryService:"Voluntary Service: Participating in community service activities that benefit others and foster a sense of social responsibility.",physicalRecreation:"Physical Recreation:Regular physical or sports activities that improve health and physical fitness.",skillsDevelopment:"Skills Development: Learning a new skill or developing an existing one—such as photography, programming, music, or cooking.",socialSkills:"Social Skills: Building interpersonal skills and collaboration to enhance social communication and teamwork.",goldLevel:"At the Gold level, participants also commit to an additional element:",residentialProject:"Gold Residential Project: An additional requirement where participants spend time in a new environment with a different group, such as youth camps or external training programs."},participateInTheAward:{title:"Why Take Part in the Award?",description:"Joining The Duke of Edinburgh’s International Award is more than just a youth activity—it’s a life-changing experience. By the end of the journey, participants become stronger, more confident, and more aware of themselves and the world around them. Through the Award, young people gain:",items:["Valuable practical experience that strengthens their CV and increases their chances of university admissions and scholarships.","An internationally recognized certificate accepted in more than 130 countries.","A special graduation ceremony celebrating their achievements.","Real life skills such as time management, effective communication, leadership, and independence.","Self-confidence and the ability to face challenges and achieve goals.","Meaningful connections with young people from diverse backgrounds and cultures."]},button:"Register now and join The Duke of Edinburgh’s International Award"},G2={about:"About",arabicDescription:"Arabic Description",englishDescription:"English Description",followUs:"Follow Us",facebook:"Facebook",twitter:"Twitter",instagram:"Instagram",youtube:"YouTube"},F2={title:"Associations and Initiatives",label:"Life Makers Foundation",description:`Life Makers Foundation has 13 partner associations across various governorates in Egypt. These associations provide a safe and supportive environment that empowers volunteers and enables the implementation of development initiatives.

They also offer a wide range of development and charitable services within local communities, supporting our vision of creating sustainable impact and improving the quality of life for beneficiaries.`},$2={title:"Privacy Policy"},Y2={title:"Contact Us",label:"Life Makers Foundation...",label2:"We love to hear from you :)",discription:"Life Makers Foundation Egypt (LMF) is a national non-governmental, non-profit organization founded in 2011 and centrally registered under Registration No. 839/2018. It operates in accordance with the Egyptian Law on Associations and Civil Institutions.",address:"Address",addressValue:"3 El Moshtel St., El Sheshiny Division - Maadi",email:"Email",phone:"Phone",workTime:"Working Hours",workTimeValue:"10:00 AM - 06:00 PM",formTitle:"Get in Touch",message:"Enter your message",donate:"Donate with Us",donateDes:"The foundation provides comprehensive support to refugees residing in Egypt, including food, medical, educational assistance, and other forms of aid aimed at improving their living conditions.",volunteer:"Volunteer with Us",volDes:"The foundation is based on volunteerism and has been working since its inception to empower youth and build their capacities to develop communities and respond to their humanitarian and relief needs."},X2=[{id:1,text:"Original recent extract from the commercial registry (issued within the last 6 months)"},{id:2,text:"Copy of the national ID card of those listed in the commercial registry (Board members – owners – representatives)"},{id:3,text:"Copy of the industrial registration (for industrial companies and factories)"},{id:4,text:"For engineering consultancy offices, the original consultancy certificate issued by the Engineers Syndicate must be presented"},{id:5,text:"Form S14 (if available)"},{id:6,text:"Previous work (if available)"},{id:7,text:"Value Added Tax (VAT) registration certificate"},{id:8,text:"Bank certificate (bank account number)"},{id:9,text:"E-invoice system registration certificate"},{id:10,text:"Tax registration card"},{id:11,text:"Attach ISO14001 or ISO14067 certificate or any environmental study/certificate"}],Pv={InvalidCredentials:t2,special_campaigns:n2,common:a2,navigation:i2,search:o2,volunteer:r2,errors:s2,auth:l2,home:c2,aishWmelh:u2,campaigns:d2,footer:f2,annualReports:m2,news:p2,partners:h2,projects:g2,refugee:y2,statistics:v2,quickDonate:b2,aboutUs:x2,board:w2,checkout:S2,media:T2,adahy:A2,nakhil:E2,wed:_2,yearlyReports:C2,branches:D2,success:k2,volunteerForm:j2,donationSection:O2,InKindDonations:M2,suppliersRegisteration:R2,breadcrumbs:z2,"hasabat-elzakat":{title:"Zakat Calculator",description:"Zakat is a mandatory financial obligation for Muslims, and it is one of the pillars of Islam. It is considered one of the forms of compulsory charity. Zakat is paid from the money of Muslims and their possessions to specific categories of society, defined by Sharia law, with the aim of purification and proximity to God.","zakat-al-mal":"Zakat al-Mal","zakat-al-fitr":"Zakat al-Fitr","Zakat-Gold":"Zakat Gold","zakat-al-mal-title":"Enter the accumulated amount you own:",currency:"Egyptian Pound","zakat-gold-title":"Weight of gold 18:",unit:"Gram","value-label":"Value today:","zakat-gold-18k-title":"Weight of gold 18:","zakat-gold-21k-title":"Weight of gold 21:","zakat-gold-24k-title":"Weight of gold 24:","zakat-value":"Zakat Value","total-zakat":"Total Zakat","zakat-campgain":"campgains have zakat : ","currency-short":"EGP",zakatReminder:{headerText:"Zakat Reminder",submitButton:"Remind",name:"Name",email:"Email",phone:"Phone",date:"Reminder Date"},error:"You are not liable for Zakat; because the money did not reach the threshold.",zakatSummary:"Zakat Summary","no-campaigns":"No campaigns"},contracts:I2,achievements:L2,profile:N2,nominateCase:U2,myPayments:P2,invoice:B2,monthlyDonation:q2,reminders:H2,DukeForm:V2,dukeAdenbra:Q2,ngo:G2,ngos:F2,privacyPolicy:$2,contactUs:Y2,requiredDocuments:X2},Z2="خطا فى كلمة المرور او البريد الإلكتروني",K2="حملات خاصة",W2={request:"لتقديم طلب يرجى",here:"من هنا",all:"الكل",welcome:"مرحباً",home:"الرئيسية",about:"من نحن",contact:"اتصل بنا",loading:"جاري التحميل",campaigns:"الحملات",cart:"سلة التسوق",checkout:"الدفع",profile:"الملف الشخصي",settings:"الإعدادات",logout:"تسجيل الخروج",donate:"تبرع",donateNow:"تبرع الآن",pageNotFound:"الصفحة غير موجودة",backToHome:"العودة للصفحة الرئيسية",currency:"جنيه",login:"تسجيل الدخول",close:"إغلاق",selectIntention:"اختر نية",donateIntention:"نية التبرع",donateIntentionRequired:"يجب اختيار نية تبرع",total:"الإجمالي",proceedToCheckout:"تابع إلى عملية الدفع",register:"تسجيل",showMore:"عرض المزيد",formSubmitted:"تم إرسال النموذج بنجاح",welcomeMsg:"تم تسجيل الدخول بنجاح",clipboard:"تم نسخ الرابط إلى الحافظة",submit:"إرسال",cancel:"إلغاء",noItemsMatch:"لا يوجد نتائج",notAuthenticated:"يجب عليك تسجيل الدخول لتقديم طلب",download:"تحميل",checkForm:"يجب أن يتم تعبئة كل الحقول",shortCode:"الرمز المختصر",noData:"لا يوجد بيانات",retry:"إعادة المحاولة",goToPage:"الذهاب الي صفحة",error:"حدث خطأ",egpShort:"ج.م"},J2={menu:"القائمة",home:"الرئيسية",about:"من نحن",lifemakers:"صناع الحياة",contact:"اتصل بنا",login:"تسجيل الدخول",signup:"إنشاء حساب",logout:"تسجيل الخروج",campaigns:"الحملات",services:"الخدمات",volunteer:"التطوع",volunteerOpportunities:"الفرص التطوعية",volunteerBoard:"مجلس ادارة المتطوعين",becomeVolunteer:"كن متطوعا",volunteerSuccessStories:"قصص نجاح",aboutVolunteer:"عن التطوع",currentVolunteerActivities:"الانشطه الحاليه للتطوع",humanitarianCases:"الحالات الخيرية",news:"الأخبار",calculator:"حاسبة الزكاة",aboutUs:"من نحن",board:"مجلس الامناء",media:"معرض الوسائط",achievements:"الإنجازات",reach:"انتشارنا",annualReport:"تقارير الأعمال السنوية",partners:"شركاء النجاح",associations:"الجمعيات و المبادرات",programs:"البرامج و المشروعات",refugeeServices:"خدمات اللاجئين",deals:"المناقصات / التعاقدات",projects:"المشروعات",myDonations:"تبرعاتي",monthlyDonation:"التبرع الشهري",paymentOperations:"عمليات الدفع",myZakatAccount:"حساب زكاة مالي",myNominatedCases:"حالاتي المرشحة للمساعدة",search:"نتائج البحث"},eA={title:"الملف الشخصي",changePicture:"تغيير الصورة",defaultName:"اسم المستخدم",defaultEmail:"user@example.com",totalDonations:"اجمالي التبرعات",campaignsParticipated:"الحملات المشارك فيها",invalidFileType:"نوع الملف غير صحيح. يرجى اختيار صورة بصيغة JPG أو PNG أو GIF أو WebP",fileTooLarge:"حجم الملف كبير جداً. الحد الأقصى 5 ميجابايت",imageProcessingError:"خطأ في معالجة الصورة. يرجى المحاولة مرة أخرى بصورة مختلفة",uploading:"جاري الرفع...",personalProfile:"الملف الشخصي",myDonations:"تبرعاتي",monthlyDonation:"التبرع الشهري",paymentOperations:"عمليات الدفع",myZakatAccount:"حساب زكاة مالي",myNominatedCases:"حالاتي المرشحة للمساعدة",logout:"تسجيل الخروج",accountActions:"إجراءات الحساب",personalInformation:"المعلومات الشخصية",birthDate:"تاريخ الميلاد",birthDatePlaceholder:"اختر تاريخ ميلادك",invalidBirthDate:"لا يمكن أن يكون تاريخ الميلاد اليوم أو في المستقبل",fullName:"الاسم بالكامل",fullNamePlaceholder:"أدخل اسمك بالكامل",email:"البريد الالكتروني",emailPlaceholder:"أدخل بريدك الإلكتروني",phone:"رقم الهاتف",phonePlaceholder:"أدخل رقم هاتفك",password:"كلمة المرور",passwordPlaceholder:"أدخل كلمة المرور",confirmPassword:"تأكيد كلمة المرور",confirmPasswordPlaceholder:"أكد كلمة المرور",address:"العنوان",governorate:"المحافظة",city:"المركز / المدينة",village:"القرية / المنطقة",detailedAddress:"العنوان التفصيلي",detailedAddressPlaceholder:"أدخل العنوان التفصيلي",select:"اختر",optional:"اختياري",saveChanges:"حفظ التغيرات",cairo:"القاهرة",alexandria:"الإسكندرية",giza:"الجيزة",village1:"قرية 1",village2:"قرية 2",updateSuccess:"تم تحديث البيانات بنجاح",updateError:"حدث خطأ في تحديث البيانات",missingFields:"يرجى ملء الحقول المطلوبة: {{fields}}",changePassword:"تغيير كلمة المرور",oldPassword:"كلمة المرور القديمة",newPassword:"كلمة المرور الجديدة",confirmNewPassword:"تأكيد كلمة المرور الجديدة",updatePassword:"تحديث كلمة المرور",passwordChangedSuccessfully:"تم تغيير كلمة المرور بنجاح",passwordChangeError:"حدث خطأ في تغيير كلمة المرور",imageUploadSuccess:"تم تحديث الصورة بنجاح",imageUploadError:"فشل في تحديث الصورة"},tA={home:"الرئيسية",about:"من نحن",board:"مجلس الأمناء",contact:"اتصل بنا",campaigns:"الحملات",services:"خدماتنا",volunteer:"التطوع","vol-opportunities":"الفرص التطوعية","vol-board":"مجلس ادارة المتطوعين","vol-become":"كن متطوعا","vol-success":"قصص النجاح","vol-about":"عن التطوع",news:"الأخبار",media:"معرض الوسائط",achievements:"الإنجازات",branches:"انتشارنا",partners:"شركاء النجاح","annual-report":"التقارير السنوية","yearly-reports":"التقارير السنوية",contracts:"المناقصات / التعاقدات","success-stories":"قصص النجاح","website-donation":"التبرع عبر الموقع الإلكتروني","alternative-donation":"وسائل ومنافذ أخرى للتبرع","inbank-donation":"التبرع عبر البنك","donate-branches":"أماكن منافذ البيع","campaign-details":"تفاصيل الحملة","news-details":"تفاصيل الخبر","volunteer-form":"استمارة التطوع","in-kind-donations":"التبرعات العينية","suppliers-registeration":"التسجيل بقيد الموردين","vol-opportunities-details":"تفاصيل الفرص التطوعية"},nA={required:"هذا الحقل مطلوب",invalidEmail:"البريد الإلكتروني غير صالح",nationalID:"يجب أن يكون الرقم القومي مكونًا من 14 رقمًا",passportID:"يجب أن يكون رقم الجواز مكونًا من 6-9 أحرف أو أرقام",serverError:"حدث خطأ في الخادم",notFound:"الصفحة غير موجودة",unauthorized:"غير مصرح بالوصول",loadingProjects:"خطأ في تحميل المشروعات",error:"حدث خطأ",minAgeError:"يجب أن يكون العمر على الأقل {{age}} سنوات",InvalidCredentials:"البريد الإلكتروني أو كلمة المرور غير صحيحة"},aA={login:{email:"البريد الإلكتروني",title:"تسجيل الدخول إلى حسابك",subtitle:"الرجاء إدخال بيانات الدخول",submit:"تسجيل الدخول",noAccount:"ليس لديك حساب؟",register:"تسجيل",password:"كلمة المرور",rememberMe:"تذكرني",notMember:"لست مشترك؟",forgotPassword:"نسيت كلمة المرور؟",googleLogin:"تسجيل الدخول بحساب جوجل",facebookLogin:"تسجيل الدخول بحساب فيسبوك",welcomeMsg:"تم تسجيل الدخول بنجاح",resetPasswordSuccess:"تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني بنجاح.",resetPasswordError:"تعذر إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.",isUserLoggedIn:"سجل دخولك لتتابع تبرعاتك السابقة والحالية مع صناع الحياة"},register:{title:"إنشاء حساب جديد",subtitle:"املأ البيانات للتسجيل",acceptTerms:"أوافق على",termsLink:"الشروط والأحكام",submit:"تسجيل",haveAccount:"لديك حساب بالفعل؟",login:"تسجيل الدخول",welcomeMsg:"تم  إنشاء حسابك بنجاح",confirm:"تأكيد الحساب",passwordMismatch:"كلمتا المرور غير متطابقتين.",passwordMinLength:"يجب أن تكون كلمة المرور على الأقل 6 أحرف.",form:{fullName:"الاسم بالكامل",birthdate:"تاريخ الميلاد",confirmPassword:"تأكيد كلمة المرور"}},email:"البريد الإلكتروني",password:"كلمة المرور",rememberMe:"تذكرني",forgotPassword:"نسيت كلمة المرور؟",firstName:"الاسم الأول",lastName:"اسم العائلة",phone:"رقم الهاتف",confirmPassword:"تأكيد كلمة المرور",registrationComplete:"تمت عملية التسجيل بنجاح .. الآن يمكنك الاستمتاع بمزايا تسجيل الحساب",resetPasswordEmailInstruction:"قم بإخال الايميل الخاص بك حتي تتمكن من اعادة تعيين الرقم السري",resetPassword:"اعادة تعيين كلمة المرور",resetPasswordInstruction:"قم بإخال كلمة المرور الجديدة وتأكيدها",resetPasswordSuccess:"تم اعادة تعيين كلمة المرور بنجاح",resetPasswordError:"تعذر اعادة تعيين كلمة المرور",accountNotConfirmed:"الحساب غير مفعل. تحقق من بريدك الإلكتروني، لقد قمنا بإرسال الرقم السري.",otp:{notReceived:"لم يتم استلام الكود ؟",resend:"إعادة الإرسال",sentMessageWithEmail:"تم إرسال كود لتأكيد الحساب على بريدك الإلكتروني {{email}}، برجاء إدخال الكود هنا.",invalid:"يرجى إدخال رمز مكون من 6 أرقام بشكل صحيح",success:"تم تأكيد البريد الإلكتروني بنجاح!",resendSuccess:"تم إرسال رمز تحقق جديد إلى بريدك الإلكتروني",resendFailed:"تعذر إعادة إرسال رمز التحقق. يرجى المحاولة لاحقاً.",verificationFailed:"فشل التحقق. يرجى المحاولة مرة أخرى.",resendIn:"يمكنك إعادة الإرسال بعد"},passwordRules:{minChars:"8 أحرف على الأقل",uppercase:"حرف كبير (A-Z)",lowercase:"حرف صغير (a-z)",digitOneToNine:"رقم (0-9)",special:"رمز خاص (!@#$...)"},passwordsDoNotMatch:"كلمتا المرور غير متطابقتين.",passwordStrengthMessage:"كلمة المرور يجب أن تطابق جميع الشروط."},iA={hero:{title:"سهم العشرة الأواخر",subtitle:"تقدر تتبرع وتشارك بسهم الليالي العشر على مدار أخر 10 أيام من شهر رمضان واللي هيدخل في توفير عدد كبير من المساعدات المتنوعة للأسر المستحِقة.",cta:"دعوة للعمل",shareValue:"شارك القيمة",addToCart:"أضف إلى السلة",donate:"تبرع"},campaigns:{lastTenDays:"سهم العشرة الأواخر",palmCharity:"وقف النخيل الخيري",ramadanBox:"كرتونة رمضان خيرية",breakingFast:"إفطار صائم",amount:"المبلغ",amountcurrency:"جنيه",campaignName:"اسم الحملة",donationIntention:" نية التبرع",details:"عرض التفاصيل",donationType:"نوع التبرع",totalAmount:"اجمالى المبلغ",sukNumber:"عدد الصكوك",donnerMsg:"الرسالة (لا تزيد عن 70 حرف):",donnerMsgMax:"70 حرف",donnerInfo:"بيانات المتبرع عنه",soldOut:"تم البيع",whatsappNumber:"رقم الواتساب",selectCampaign:"اختر الحملة",selectDonationIntention:"اختر نية التبرع"},social:{instagram:"انستغرام",twitter:"تويتر",facebook:"فيسبوك",linkedin:"لينكد إن",youtube:"يوتيوب"},title:"صناع الحياة|Life Makers",description:`مؤسسة صناع الحياة مصر (LMF) هي مؤسسة أهلية وطنية غير حكومية وغير هادفة للربح أسست عام 2011 ومسجلة مركزيا برقم قيد 839 لسنة 2018 وتعمل طبقا لقانون الجمعيات والمؤسسات الأهلية المصري.

المؤسسة قائمة على التطوع وتعمل منذ نشأتها على تنمية الشباب لبناء قدراتهم من أجل العمل على تنمية المجتمعات والاستجابة لاحتياجاتهم الإنسانية والإغاثية.

المؤسسة تعمل مباشرةً من خلال مكاتبها وفروعها المنتشرة في أنحاء الجمهورية وكذا من خلال الجمعيات والمنظمات الشريكة في مجالات تنمية الشباب، التعليم، الصحة، سبل كسب العيش والاحتياجات الأساسية والبيئة.

ومساعدات المؤسسة لا تقتصر فقط على المصريين، بل تمتد لتشمل الفلسطينيين داخل مصر وفي غزة، حيث تقدم لهم مساعدات إنسانية متنوعة.

كما تقدم المؤسسة دعماً شاملاً للاجئين المقيمين في مصر، متضمنًا مساعدات غذائية وطبية وتعليمية وغيرها من أشكال الدعم التي تهدف لتحسين ظروفهم المعيشية.

تتبني المؤسسة مبادئ العمل الإنساني الأساسية: الإنسانية والحيادية والعمل طبقا للاحتياج والاستقلالية، في جميع الأعمال التي تقوم بها وذلك للتأكد من أن تقديم المساعدات يتم دون التمييز طبقا للعرق، الدين، النوع أو أي اعتبارات أخري، تقدم مؤسسة صناع الحياة التدخلات الإنسانية والتنموية لمستفيدين الأكثر احتياجات مع الحفاظ على كرامتهم والتأكد من مشاركتهم.`},oA={title:"حملة عيش وملح",shareTitle:"حملة عيش وملح",shareText:"شارك في أكبر حملة تكافل بين المصريين",goalMain:"هدفنا في رمضان:",plateWord:"طبق",goalSub:"كل طبق = مساهمتك في وجبة كاملة تكلفتها ٥ جنيه فقط.",mechanismHeading:"آلية المشاركة :",mechanismSubheading:"تجهيز مكونات الوجبة",steps:{step1Title:"هتستلم أطباق فاضية",step2Title:"تجّهز الوجبات بإيدك",step3Title:"تسلّمها للمتطوعين وقت الإفطار"},noteLabel:"ملحوظة: ",noteBody:"يتم استلام الوجبات من خلال المتطوعين لتوزيعها علي المستفدين قبل وقت الإفطار",formButton:"افتح الفورم واملأ البيانات",or:"أو",donationTitle:"التبرع بتكلفة الأطباق",donationLabel:"تكلفة الطبق = ٥ جنيه، اختر عدد الأطباق التي ترغب في التبرع بها.",totalLabel:"إجمالي التكلفة:",plateLabel:"وجبة",stats:{targetLabel:"الهدف",achievedLabel:"تحقق",remainingLabel:"المتبقي"}},rA={title:"حملة الأضاحي",description:"حملة الأضاحي"},sA={title:"حملة النخيل",description:"حملة النخيل"},lA={title:"حملة الود موصول",description:"حملة الود موصول"},cA={title:"حملات التبرع",tabs:{donationCampaigns:"حملات التبرع",specialCases:"حالات إنسانية",emergencyCampaigns:"حملات عاجلة"},nominateCase:"رشح حالة تستحق الدعم +",viewAllCampaigns:"عرض كل الحملات",filters:{category:"التصنيف",basic:"الاحتياجات الأساسية",urgent:"عاجل",sort:"ترتيب حسب",newest:"الأحدث",oldest:"الأقدم"},campaignCard:{amount:"المبلغ",amountcurrency:"ج.م",donate:"تبرع الآن",cart:"أضف للسلة",progress:"نسبه التبرع"}},uA={about:{title:"عن التطوع",description:`يُعدّ التطوّع أحد أهم الركائز التي تقوم عليها مؤسسة صُنّاع الحياة، وأحد أبرز ما تقدّمه للشباب والمجتمع منذ تأسيسها قبل أكثر من عشرين عامًا. فمنذ اليوم الأول، آمنت المؤسسة بأن بناء الإنسان هو أساس أي تنمية حقيقية، وأن الشباب هم الطاقة القادرة على تحويل الأفكار إلى أثر ملموس.

على مدار عقدين من العمل المجتمعي، استطاعت صُنّاع الحياة توفير أكثر من 2 مليون فرصة تطوعية شارك من خلالها الشباب في مبادرات ومشروعات تنموية تمس حياة آلاف الأسر في مختلف المحافظات. لم تكن هذه الفرص مجرد مشاركة وقت أو جهد، بل كانت منصة حقيقية لاكتشاف الذات، وتنمية المهارات، وفهم احتياجات المجتمع من أرض الواقع.

وخلال هذه الرحلة، درّبت وأهّلت صُنّاع الحياة آلاف الشباب عبر برامج تدريبية متخصصة، ركّزت على مهارات القيادة، وإدارة المبادرات، والعمل الجماعي، والتواصل، وتحليل المشكلات المجتمعية. الكثير من هؤلاء الشباب أصبحوا اليوم قادة في مجتمعاتهم، يقودون فرقًا تطوعية، ويؤسسون مبادرات خاصة بهم، أو يشغلون مواقع مؤثرة داخل مؤسسات محلية ودولية.

ولم تكتفِ المؤسسة بتوفير فرص التطوع والتدريب فقط، بل فتحت أمام الشباب أبوابًا واسعة للتعلّم العملي، والمشاركة في تصميم وتنفيذ مشروعات تنموية في مجالات متعددة مثل: التعليم، والصحة، والتمكين الاقتصادي، والدعم النفسي والاجتماعي، وخدمة اللاجئين، وتنمية المهارات الحياتية. فهنا، يحصل كل متطوّع على فرصة حقيقية لترك بصمته، سواء من خلال العمل الميداني، أو تقديم الخدمات المتخصصة، أو قيادة فرق كاملة في مبادرات موسمية ووطنية كبرى.

نؤمن في صُنّاع الحياة بأن كل متطوّع يمتلك قدرة فريدة على الإضافة، وأن كل ساعة تطوعية يمكن أن تصنع أثرًا يبقى. لذلك، نعمل باستمرار على تطوير بيئة العمل التطوعي، وتوفير فرص جديدة تلائم اهتمامات الشباب وشغفهم، وتساعدهم على النمو الشخصي والمهني.`},opportunities:{title:"الفرص التطوعية",backToOpportunities:"العودة للفرص"},becomeVol:{title:"كن متطوعا",subtitle:"تطوع معنا واصنع فرقًا",description:`توفّر مؤسسة صُنّاع الحياة فرصًا تطوعية في مجالات متعددة تشمل تلبية الاحتياجات الأساسية، وإدارة الحالة، والتعليم، والصحة، وتمكين الشباب، وتنظيم الفعاليات والأنشطة المجتمعية.

نحن نؤمن بأن التطوع هو مساحة للنمو والتعلّم وبناء الأثر، لذلك نحرص على توفير بيئة آمنة وداعمة تجعل كل متطوّع يشعر بأن صُنّاع الحياة هي "بيت كل متطوّع".

لو حابب تبدأ رحلتك التطوعية وتكون جزءًا من التغيير… انضم إلينا الآن.`,button:"ملئ الاستمارة"},volunteerStories:{title:"قصص نجاح",subtitle:"قصص المتطوعين",description:"قصص المتطوعين",button:"عرض القصص"},title:"مجلس ادارة المتطوعين",subtitle:"تشكيل مجلس ادارة المتطوعين",volunteerBoard:"مجلس ادارة المتطوعين",becomeVolunteer:"كن متطوعا",volunteerSuccessStories:"قصص نجاح",volunteerOpportunities:"الفرص التطوعية"},dA={placeholder:"البحث في المدن والعناوين...",noResults:"لا توجد نتائج للبحث",result:"نتيجة",results:"نتائج"},fA={aboutTitle:"مؤسسة صناع الحياه مصر",aboutText:"مؤسسة صناع الحياة مصر (LMF) هي مؤسسة أهلية وطنية غير حكومية وغير هادفة للربح أسست عام 2011 ومسجلة مركزيا برقم قيد 839 لسنة 2018 وتعمل طبقا لقانون الجمعيات والمؤسسات الأهلية المصري.",contactTitle:"اتصل بنا",phoneTitle:"رقم الهاتف",phone:"16563",newsletterTitle:"النشرة البريدية",newsletterDescription:"اشترك في النشرة البريدية لمؤسسة صناع الحياة ليصلك كل جديد.",newsletterPlaceholder:"أدخل بريدك الإلكتروني",subscribe:"اشترك",emailTitle:"البريد الإلكتروني",email:"info@lifemakers.com",mainLinksTitle:"روابط رئيسية",news:"الأخبار",deals:"المناقصات / التعاقدات",services:"خدمتنا ومشروعتنا",spread:"انتشارنا",humanitarianCases:"حالات خاصة",zakatCalculator:"حاسبة الزكاة",privacyPolicy:"سياسة الخصوصية",dukeAward:"جائزة دوق ادنبرة",gallery:"الجاليري",donationTitle:"أماكن منافذ التبرع",donationLocations:"أماكن منافذ التبرع",donateOnline:"التبرع عبر الموقع الإلكتروني",donateBanks:"تـبرع عبر البنوك",otherDonationMethods:"وسائل ومنافذ أخرى للتبرع",inKindDonations:"التبرعات العينية",volunteeringTitle:"عن التطوع",aboutVolunteering:"عن التطوع",becomeVolunteer:"كن متطوعا",volunteerSuccessStories:"قصص نجاح",volunteeringBoard:"مجلس ادارة المتطوعين",volunteeringOpportunities:"الفرص التطوعية",associations:"الجمعيات و المبادرات المجتمعية",programs:"البرامج و المشروعات",refugees:"اللاجئين",suppliers:"التسجيل بقيد الموردين",jobs:"الوظائف",achievements:"الإنجازات",board:"مجلس الامناء",aboutUs:"عن المؤسسة",whoWeAre:"من نحن",whereWeWork:"انتشارنا",mediaGallery:"معرض الوسائط",annualReports:"تقارير الأعمال السنوية",partners:"شركاء النجاح",locations:"المواقع",copyright:"جميع الحقوق محفوظة لزي اسوش يتس للاتصالات",copyrightText:"جميع الحقوق محفوظة لصناع الحياة مصر © 2025",developedBy:"تم التطوير بواسطة"},mA={title:"تقارير الأعمال السنوية",showAll:"عرض كل التقارير"},pA={title:"الأخبار",description:"اخر الأخبار",publishedAt:"تاريخ النشر :",newsCard:{title:"العنوان",description:"الوصف",date:"التاريخ"},showAll:"عرض كل الأخبار",seeMore:"عرض المزيد",backToNews:"عودة لقائمة الأخبار",noNewsFound:"لا توجد أخبار بهذا التاريخ او لا توجد نتائج للبحث"},hA={title:"شركاء النجاح",partnerDetails:{title:"الشركاء"}},gA={title:"البرامج والمشروعات",description:`من قلب المجتمع المصري، تنطلق مشروعات مؤسسة صُناع الحياة برؤية تؤمن بتمكين الإنسان وصناعة التغيير المجتمعي الجذري والمستدام. نسعى من خلال مبادراتنا التنموية إلى إحداث تحوّل إيجابي ومستدام في حياة الفئات التي نخدمها، مرتكزين على فلسفة تضع الإنسان في قلب عملية التنمية.

نحن نبني علاقتنا مع المستفيدين على الثقة والاحترام المتبادل؛ فالمستفيدون من جهودنا ليسوا مجرد متلقّي الدعم، بل شركاء في النجاح نؤمن بقدراتهم ونستمدّ من عزيمتهم الأمل والإلهام. ويتصدّر الشباب المتطوع صفوف العمل في مشروعاتنا؛ فهم القلب النابض لهذه المؤسسة والمحرّك الحقيقي للتنمية. منذ تأسيس صُنَّاع الحياة اعتمدنا على القيادة الشبابية والعمل التطوعي كأساس في تنفيذ جميع مبادراتنا ومشروعاتنا.

ننظر إلى التطوع باعتباره أكثر من مجرد آلية لتنفيذ البرامج، بل هو أسلوب حياة وثقافة مشتركة نصوغها معًا لنحقق أثرًا يبقى ويزدهر عبر الأجيال. تتنوع مشروعاتنا لتشمل مجالات التعليم والصحة والتمكين الاقتصادي والحماية الاجتماعية.

عبر هذه المجالات المتعددة، نعمل على توفير فرص التعليم والرعاية الصحية وبناء سبل عيش كريمة للفئات الأكثر احتياجًا، إلى جانب حمايتهم اجتماعيًا من خلال مبادرات دعم وتمكين شاملة. تعكس هذه المشروعات المتنوعة التزامنا الراسخ بتحقيق تنمية متكاملة في المجتمع المصري، حيث تتكامل الجهود لمعالجة مختلف جوانب الحياة وضمان مستقبل أكثر إشراقًا للجميع`,stats:{directBeneficiaries:{title:"المستفيدين المباشرين",number:"+1,200,000",description:"أفراد تغيرت حياتهم بفضل تدخلاتنا التنموية"}},cards:{villages:{title:"القرى والمجتمعات",number:"+600",unit:"مجتمع وقرية",description:"نصل إلى المناطق الأكثر احتياجًا في 27 محافظة"},development:{title:"المشاريع التنموية",number:"+150",unit:"مشروعًا تنمويًا",description:"تنفذ تدخلات مستدامة في 6 مجالات رئيسية"},partnerships:{title:"الشراكات والتحالفات",number:"+80",unit:"شراكة محلية ودولية",description:"نعمل مع شركاء يؤمنون بالتنمية القائمة على الإنسان"},volunteers:{title:"المتطوعين المشاركين",number:"+25,000",unit:"شاب وفتاة",description:"يقودون التغيير في مجتمعاتهم بإيمان وشغف"}},backToHome:"عودة للصفحة الرئيسية",backToPrograms:"عودة للبرامج والمجالات",backToCategory:"عودة للمجال",categories:"المجالات التنوعية",projects:"المشروعات",tags:{education:"# التعليم",health:"# الصحة",economicEmpowerment:"# التمكين الاقتصادي"},impact:{title:"تأثيرنا على الاطفال في ٢٠٢٣",children:{title:"الأطفال المدعومين",number:"14,200",unit:"طفل",description:"تم دعمنا في 40 دولة لتتمكن من قيادة والمشاركة بشكل هادف في الحملات من أجل مستقبل أكثر توافقا وعدالة"},climate:{title:"دعم تغير المناخ",number:"$2",unit:"مليون دولار",description:"مخصصة لدعم المجتمعات المحلية وبناء قدرتها على الصمود في مواجهة تغير المناخ"}}},yA={title:"نصنع الأمل.. ونبني وطناً في الغربة",description:`في مؤسسة "صنّاع الحياة"، نؤمن بأن الدعم الحقيقي يتجاوز مجرد المساعدة الطارئة؛ إنه رحلة نحو استعادة الكرامة وبناء المستقبل. من خلال خبرتنا الممتدة وشراكاتنا الاستراتيجية مع كبرى المنظمات الدولية (مثل المفوضية السامية لشؤون اللاجئين والاتحاد الأوروبي)، نقود جهوداً رائدة لتمكين اللاجئين، طالبي اللجوء، والمهاجرين. لا نقدم خدمات فحسب، بل نخلق بيئة آمنة تعزز "الاعتماد على الذات" (Self-Reliance) والاندماج الفعال داخل النسيج المصري.
فنحن نقدّم مجموعة متكاملة من البرامج في مجالات الصحة، الدعم النفسي والاجتماعي، التعليم، سبل العيش والتمكين الاقتصادي، وتلبية الاحتياجات الأساسية والحماية الاجتماعية.

كما ندير مراكز مجتمعية في القاهرة وأسوان ودمياط توفر مساحات آمنة وسهلة الوصول، وتقدم خدمات الرعاية الصحية، وإدارة الحالة، وبرامج تمكين الشباب، والأنشطة المجتمعية التي تعزز التماسك والاندماج من خلال هذه الجهود، نعمل على توفير بيئة تضمن الكرامة والحماية وتفتح أبواب الفرص لكل من اضطر إلى ترك وطنه والبدء من جديد.`,statsSection:{title:"بالأرقام",funding:{title:"حجم تمويل مشاريعنا الحالية",number:"+144",unit:"مليون جنيه",description:"لخدمة قضايا اللاجئين"},beneficiaries:{title:"المستفيدين",number:"+12,000",unit:"مستفيد",description:"نصل إليهم بخدمات مجتمعية وصحية مباشرة وغير مباشرة"},employment:{title:"نسبة التوظيف",number:"100%",unit:"توظيف",description:"نسبة توظيف خريجي برامجنا للتدريب المهني في مشروع سبل العيش"},governorates:{title:"المحافظات",number:"3",unit:"محافظات كبرى",description:"تغطية جغرافية واسعة تشمل القاهرة الكبرى، الإسكندرية، وأسوان"}},pillars:{title:"ركائز عملنا",protection:{number:"1-",title:"الحماية والدعم النفسي (Protection & PSS)",description:"نولي أولوية قصوى للفئات الأكثر هشاشة، وتحديداً الأطفال غير المصحوبين بذويهم والنساء المعيلات. نوفر مساحات آمنة، لجان حماية للطفل، وخدمات إدارة حالة متخصصة لضمان سلامتهم النفسية والجسدية."},livelihoods:{number:"2-",title:"التمكين الاقتصادي وسبل العيش (Livelihoods)",description:"نحن الشريك للمفوضية (UNHCR) في ملف سبل العيش بالقاهرة الكبرى. نحول المستفيدين من متلقين للمساعدة إلى منتجين عبر تدريبات مهنية، منح للمشاريع الصغيرة، وربط مباشر بسوق العمل."},cohesion:{number:"3-",title:"التماسك والدمج المجتمعي (Social Cohesion)",description:"نؤمن بأن اللاجئ قيمة مضافة للمجتمع. مشاريعنا تستهدف اللاجئين والمجتمع المضيف (المصريين) معاً، لتعزيز العيش المشترك وتقبل الآخر من خلال فعاليات ثقافية واجتماعية مشتركة."}},featuredProjects:{title:"مشاريعنا الاستراتيجية (Featured Projects)",protectionResilience:{title:"مشروع تعزيز الحماية والمرونة (بتمويل الاتحاد الأوروبي)",focusPoints:["مشروع ضخم يمتد لـ 3 سنوات، يستهدف تعزيز صمود اللاجئين والمهاجرين في أوضاع هشة","التركيز: 2,000 طفل غير مصحوب بخدمات الحماية والدعم النفسي والتعليم والصحة","تمكين 2,000 مستفيد اقتصادياً","تقديم الرعاية الصحية والخدمات التعليمية لـ 1,000 مستفيد","رفع كفاءة مقدمي الخدمات الصحية والتعليمية وتحسين جودة الخدمات","النطاق الجغرافي: القاهرة الكبرى، الإسكندرية، ودمياط"]},livelihoodsIntegration:{title:"مشروع سبل العيش والاندماج الاقتصادي (بالشراكة مع UNHCR)",description:"بصفتنا الشريك الاستراتيجي للمفوضية، ندير ملف التمكين الاقتصادي في القاهرة الكبرى",focusPoints:["الإنجاز: دعم 577 رائد أعمال لبدء مشاريعهم الخاصة.","التدريب: تأهيل 172 شاباً وفتاة بمهارات سوق العمل.","الدمج: إشراك 1500 مصري ولاجئ في أنشطة دمج مجتمعي"]},unitedStand:{title:"مشروع متحدين نقف لتعزيز الاعتماد على الذات والتمكين الاقتصادى للفئات الأكثر ضعفا في أسوان (بالتعاون مع Plan International & Drosos)",description:"استجابةً للأوضاع في الجنوب، نركز جهودنا في أسوان حيث يشكل السودانيون 70% من المستهدف ويشكل المجتمع المضيف 30%",womenFocus:"واضافه إلى ذلك ولإيماننا بدور المرآه المعيله للأسرة فهى تشكل 70% أيضا من المستهدف.",innovations:["الابتكار: تأسيس جمعيات الادخار والإقراض (VSLAs) لتعزيز الاستقلال المالي، وتأسيس لجان حمايه الطفل لتعزيز دور الحمايه وحماية الاطفال من الاساءات المتعدده، والعمل على إنشاء مساحات صديقه للاطفال لتعزيز تقويه شخصيه الاطفال وتعزيز ثقتهم بأنفسهم","المستقبل: تمكين الشباب وتوعية المجتمع حول التربية الإيجابية وحقوق الطفل"]}},whyDifferent:{title:"لماذا نحن مختلفون؟",points:[{title:"نهج تكاملي",description:"لا نعمل في جزر منعزلة؛ ندمج الحماية مع التعليم والصحة والتمكين الاقتصادي في دورة واحدة"},{title:"التكنولوجيا والشفافية",description:"نستخدم أحدث التقنيات في إدارة الحالات وتوزيع الدعم لضمان وصول المساعدات لمستحقيها بكفاءة عالية"},{title:"الاستدامة",description:"لا نكتفي بالتنفيذ المباشر، بل نقدم منحاً لمنظمات محلية أصغر لضمان استمرار الأثر وتوسيع نطاق الخدمة."}]},callToActionTitle:"كن جزءاً من رحلة التغيير",callToAction:"سواء كنت مانحاً دولياً تبحث عن شريك موثوق، أو فرداً يرغب في التطوع.. مساهمتك تصنع فرقاً في حياة الآلاف.",backToHome:"عودة للصفحة الرئيسية",backToPrograms:"عودة للبرامج والمجالات",backToCategory:"عودة للمجال",categories:"المشروعات والخدمات المقدمة للاجئين",projects:"المشروعات",tags:{education:"# التعليم",health:"# الصحة",economicEmpowerment:"# التمكين الاقتصادي"},impact:{title:"تأثيرنا على الاطفال في ٢٠٢٣",children:{title:"الأطفال المدعومين",number:"14,200",unit:"طفل",description:"تم دعمنا في 40 دولة لتتمكن من قيادة والمشاركة بشكل هادف في الحملات من أجل مستقبل أكثر توافقا وعدالة"},climate:{title:"دعم تغير المناخ",number:"$2",unit:"مليون دولار",description:"مخصصة لدعم المجتمعات المحلية وبناء قدرتها على الصمود في مواجهة تغير المناخ"}}},vA={title:"إحصائيات عام 2024",beneficiaries:"عدد المستفيدين",opportunities:"الفرص التطوعية",budget:"الميزانية"},bA="تبرع سريع",xA={title:"من نحن",description:`نبذة عن المؤسسة
(LMF (Foundation Makers Lifeهي مؤسسة أهلية غير حكومية وغير هادفة للربح، تأسست عام 2011 وفقًا لقانون الجمعيات والمؤسسات الأهلية في جمهورية مصر العربية (رقم التسجيل 839 لسنة 2018).
بصفتها مؤسسة قائمة على العمل التطوعي، تعمل صناع الحياة على تمكين الشباب ليكونوا قادة فاعلين في مجتمعاتهم، وذلك من خلال شبكة تمتد عبر ١٤ مكتبًا و١٩ شريكًا محليًا على مستوى الجمهورية.
تلتزم المؤسسة بتطبيق المبادئ الإنسانية الأساسية — الإنسانية، الحياد، عدم التحّيز، والاستقلالية — في جميع برامجها، بما يضمن تقديم الخدمات دون أي تمييز على أساس العِرق أو الدين أو النوع أو غيرها من أشكال التحّيز. كما تنفّذ المؤسسة تدخلات إنسانية وتنموية تستهدف الفئات الأكثر احتياجًا، مع الحفاظ على كرامتهم وتعزيز مشاركتهم الفاعلة.

الرؤية
تنمية مجتمعية شاملة ومستدامة لصالح الإنسانية.

الرسالة
تمكين الشباب في مختلف أنحاء مصر بالمعرفة والمهارات والفرص التي تؤهلهم ليصبحوا قادة فاعلين قادرين على مواجهة التحديات المحلية في مجتمعاتهم، من خلال العمل التطوعي وتقديم تدخلات مبتكرة وذات أثر، مصممة خصيصًا لتلبية احتياجات الفئات الأكثر هشاشة وتهميشًا، مع ضمان الحفاظ على كرامتهم في إطار من الحياد والمساواة.

قيمنا وتوجهاتنا الاستراتيجية

نسعى إلى
• تطوير أساليب تنفيذ مبتكرة تضمن فاعلية وجودة الخدمات.
• تمكين الشباب بأدوات ومهارات عملية للتنمية الذاتية والمجتمعية.
• الوصول إلى الفئات الأكثر احتياجًا في جميع أنحاء مصر.

نعزّز
• دور الشباب كقوة محركة للتغيير المجتمعي.
• الابتكار والتكنولوجيا كركيزتين أساسيتين في تحقيق التنمية.
• الشراكات مع المبادرات والمنظمات الشبابية كفاعلين رئيسيين في التنمية.
• الالتزام بالمعايير الإنسانية الأساسية في العمل التنموي والإغاثي.

ندافع عن
• حق كل طفل وامرأة وشاب في تحقيق إمكاناتهم الكاملة داخل مجتمعاتهم.
• حق المستفيدين في الحصول على خدمات عالية الجودة مع صون كرامتهم واحترام إنسانيتهم`},wA={title:"مجلس الامناء",subtitle:"تشكيل مجلس الامناء","volunteer-title":"مجلس ادارة المتطوعين",footerSubtitle:"ويضم مجلسنا..",headerSubtitle:"تشكيل مجلس الامناء",description:"تدار مؤسسة صناع الحياة مصر، من خلال مجلس أمناء يضم نخبة متميزة من الشخصيات العامة والوزراء السابقين وأساتذة الجامعات وأصحاب الخبرات في مجال العمل الشبابي والتطوعي، وخلال عام (2020) حرصت مؤسستنا على تشكيل مجلس أمناء جديد يضم عددا من ذوي الخبرات ورموز المجتمع على رأسهم اللواء أركان حرب محسن النعماني وزير التنمية المحلية ومحافظ سوهاج الأسبق، لتعزيز فرص تطوير أعمال المؤسسة واستكمال مسيرتها في دعم المستحقين."},SA={amount:"مبلغ التبرع:",otherAmout:"أدخل قيمة",totalAmout:"إجمالي التبرع",amountcurrency:"EGP",donate:"تبرع الآن",payment:"عملية الدفع",cart:"سلة التبرع",cartItems:"بنود التبرع",progress:"نسبه التبرع",donationMethods:"طرق الدفع",shareValue:"تكلفة السهم:",shareBtn:"شارك",maximumAmount:"اقصى حد للصكوك هو 7",modelMsg:" برجاء تأكيد ان البيانات التى ادخلتها صحيحة ليتم استلام فاتورة عن طريق الايميل ورسالة موبايل",paymentMethods:{card:"فيزا / ماستركارد",fawry:"فوري",wallet:"فودافون كاش",CashCollection:"طلب محصل"},walletDis:"الدفع من خلال فودافون كاش",fawryDis:"الدفع من خلال فوري",cartEmpty:"سلتك فارغة",cardDis:"بطاقة الائتمان / الخصم المباشر",personalData:"البيانات الشخصية",donationDetails:" تفاصيل التبرع",formName:"الاسم",formEmail:"البريد الإلكتروني",invalidEmail:"البريد الإلكتروني غير صالح",formPhone:"رقم الهاتف",inputRequired:"هذا الحقل مطلوب",invalidPhoneNum:"هذا الرقم غير صالح",donationIntention:"اختر نية التبرع",loginChoice:"(بدون تسجيل دخول) أو",minimumAmount:"الحد الأدنى للمبلغ هو {{amount}}",termsPrefix:"موافق على",termsLink:"الشروط و الأحكام",privacyLink:"سياسة الخصوصية",paymentBtn:"المتابعة لاستكمال عملية الدفع",installmentPayment:"الدفع بالتقسيط",numberOfInstallments:"عدد الاقساط",installmentValue:"قيمة القسط",currency:"ج.م",installmentPolicy:"موافق على سياسة التقسيط",installmentPolicyTitle:"سياسة التقسيط",installmentPolicyContent:{intro:"حرصًا من مؤسستنا على تسهيل المشاركة ودعم عملائنا/المتبرعين الكرام، نوفر خدمة التقسيط وفقًا للشروط والأحكام التالية:",generalProvisions:{title:"1. أحكام عامة",points:["يحق للعميل/المتبرع الاستفادة من خدمة التقسيط عند شراء/الاشتراك/التبرع في المبادرات أو الخدمات التي تحددها المؤسسة.","خدمة التقسيط متاحة للأفراد والشركات وفقًا للشروط الموضحة أدناه.","تحتفظ المؤسسة بالحق في تعديل أو تحديث هذه السياسة في أي وقت، مع نشر التعديلات على الموقع الإلكتروني."]},eligibility:{title:"2. شروط الاستفادة",points:["دفع مقدم لا يقل عن 20% من إجمالي المبلغ عند الاشتراك/الشراء.","تقديم بيانات شخصية صحيحة ووسائل تواصل مفعلة.","الالتزام بسداد الأقساط في مواعيدها المحددة."]},paymentPlan:{title:"3. خطة السداد",points:["مدة التقسيط تتراوح بين 3 إلى 12 شهرًا (حسب نوع الخدمة/المبادرة).","يتم تحديد قيمة القسط الشهري بشكل واضح قبل التعاقد.","لا يتم فرض فوائد على الأقساط، وقد يتم تطبيق رسوم إدارية بسيطة (إن وُجدت)."]},paymentMethods:{title:"4. طرق الدفع",points:["التحويل البنكي أو الإيداع المباشر في حساب المؤسسة.","الدفع الإلكتروني عبر بطاقات الائتمان أو المحافظ الإلكترونية.","الدفع النقدي في مقر المؤسسة أو من خلال مندوبي التحصيل المعتمدين."]},latePayment:{title:"5. التأخير أو التعثر",description:"في حالة التأخر عن سداد قسطين متتاليين، تحتفظ المؤسسة بالحق في:",points:["إلغاء التعاقد/الاشتراك.","احتساب المبالغ المدفوعة كتبرع/رسوم إدارية (في حالة المبادرات الخيرية).","المطالبة بالمبلغ المتبقي (في حالة الخدمات أو المنتجات)."]},inquiries:{title:"6. الاستفسارات",description:"للاستعلام عن خدمة التقسيط أو الحصول على خطة سداد مخصصة، يرجى التواصل معنا عبر:",points:["📞 الهاتف: 16563","📧 البريد الإلكتروني: website@lifemakers.org","🌐 الموقع الإلكتروني: https://lifemakers.org"]}},sukOwnerInfo:"بيانات صاحب الصك",maxQuantityReached:"تم الوصول للحد الأقصى للكمية ({{max}} عنصر)",clipboard:"تم نسخ الرابط",cashCollectionInfoSuccess:"تم إنشاء طلب التحصيل بنجاح",cashCollectionInfoError:"فشل إنشاء طلب التحصيل"},TA={title:"معرض الوسائط",showAll:"عرض كل الوسائط",viewMore:"عرض المزيد",campaign:"حملة",volunteerName:"اسم المتطوع",date:"التاريخ",type:"النوع",view:"عرض",download:"تحميل",share:"مشاركة",latestToOldest:"من الاحدث للاقدم",oldestToLatest:"من الاقدم للاحدث",sortBy:"عرض"},AA={title:"تقارير الأعمال السنوية",description:"نسعى في ختام كل عام إلى توثيق أعمالنا طوال العام المنتهي في تقرير مجمع يلخص مشروعات وبرامج المؤسسة التي تم تنفيذها والعمل عليها خلال العام المنصرم.. وهنا في هذا القسم نستعرض تقارير الأعمال خلال السنوات الماضية"},EA={showBranches:"عرض الفروع",hideBranches:"إخفاء الفروع",title:"انتشارنا",geographicalSpread:"الإنتشار الجغرافي",branchesTitle:"الفروع",branchesSubtitle:"الإنتشار الجغرافي",description:`ننفذ مشروعاتنا في جميع محافظات مصر من خلال مكاتبنا أو من خلال الجمعيات الشريكة، حيث لدينا 30 فريقًا في المكاتب والجمعيات التابعة بمختلف محافظات مصر.

هذه المكاتب تمثل المؤسسة بشكل رسمي وهي بيئة رسمية آمنة يمارس المتطوعون خلالها أنشطة المؤسسة المركزية إلى جانب المبادرات المحلية، وتدعم المؤسسة الأم في تنفيذ برامجها وأنشطتها داخل كل محافظة، محققة الجودة المطلوبة وضامنة لها الاستدامة، إضافة إلى لعب دورٍ مهم في تنمية موارد المؤسسة من خلال أنشطة جمع التبرعات، ومباشرة التعاون مع المؤسسات والجمعيات والهيئات الشريكة داخل المحافظة.`,offices:"المكاتب",associations:"الجمعيات",donateBranches:"منافذ"},_A={title:"نجاح عملية الدفع",description:"تمت عملية الدفع بنجاح.",subDescription:"سيتم استلام فاتورة عن طريق الايميل ورسالة موبايل.",cashCollectionDescription:"تم ارسال البيانات بنجاح وسيتم التواصل معك في اقرب وقت",redirectMsg:"سيتم التوجه للصفحة الرئيسية بعد {{seconds}} ثواني",home:"عودة للصفحة الرئيسية",donationDetails:"تفاصيل التبرع",transactionNumber:"رقم العملية",orderNumber:"رقم الطلب",donatedItems:"البنود المتبرع لها",totalAmount:"إجمالي التبرع",currency:"ج.م",shares:"سهم",saveScreenshot:"حفظ كصورة"},CA={basicInfo:"البيانات الأساسية",address:"العنوان",volunteerFormTitle:"إستمارة التطوع في مؤسسة صناع حياة",whatsApp:"رقم الواتساب",village:"القرية / المنطقة: ",city:"المركز / المدينة:",education:{type:"التعليم",student:"طالب",graduated:"خريج"},nationality:{nationalID:"الرقم القومي",passportID:"رقم الجواز",type:"الجنسية",egyptian:"مصري",nonEgyptian:"غير مصري"},gender:{type:"النوع",male:"ذكر",female:"أنثي"},disability:{label:"معلومات إضافية",isDisabledLabel:"هل أنت شخص من ذوي الاحتياجات الخاصة؟",yes:"نعم",no:"لا",typeLabel:"نوع الإعاقة",degreeLabel:"درجة الإعاقة",sourceLabel:"عرفت استمارة الجذب من فين؟",selectOption:"اختر",mustChooseYes:"يرجى اختيار 'نعم' إذا قمت بتحديد نوع أو درجة الإعاقة."},age:"السن",personalData:"البيانات الشخصية",upload:{dragPhotoHere:`اسحب صورة هنا
أو`,choosePhoto:"اختر صورة من جهازك",dragFileHere:`اسحب ملف هنا
أو`,chooseFile:"اختر ملف من جهازك",idCard:"صورة البطاقة",personalPhoto:"الصورة الشخصية"},submit:"إرسال",cancel:"إلغاء"},DA={websiteDonation:{title:"التبرع عبر الموقع الإلكتروني",seeMore:"عرض المزيد"},inBank:{title:"التبرع عبر البنك",description:"يمكنك التبرع من حسابك في أي بنك لمؤسسة صناع الحياة عن طريق تحويل قيمة التبرع لأي من البنوك التالية باستخدام رقم الحساب والسويفت كود (رقم التحويل):",accountInfo:"بيانات الحساب",swiftCode:"سويفت كود:",branch:"عنوان الفرع:",insideEgypt:"من داخل مصر",outsideEgypt:"من خارج مصر",selectBank:"اختر البنك",seeMore:"عرض المزيد",cardEmptyMessage:"يرجى إدخال البيانات المطلوبة للتبرع",noDataFound:"لا يوجد بيانات",branchAddress:"عنوان الفرع:",donationLocations:"أماكن منافذ التبرع",selectCurrency:"اختر العملة"},inBranch:{title:"أماكن منافذ التبرع",seeMore:"عرض المزيد"},alternativeDonation:{title:"وسائل ومنافذ أخرى للتبرع",megakhier:{title:"التبرع عن طريق ميجا خير",description:"ميجا خير عن طريق التطبيق ب *9*40#  او ارسال رسالة بكلمه ميجا على 9695"},fawry:{title:"التبرع عن طريق فوري",description:"من خلال تاجر أو محل عنده ماكينة فوري:",instructions:["1. توجّه لأي سوبر ماركت، صيدلية، محل موبايلات... عليه شعار فوري.",'2. اطلب من التاجر: "عايز أتبرع لمؤسسة صناع الحياة".',"3. التاجر يدخل على: تبرعات → صناع الحياة أو Life Makers.","4. حدّد مبلغ التبرع (أي مبلغ من أول 5 جنيه).","5. راجع اسم المؤسسة على الشاشة.","6. ادفع المبلغ واستلم إيصال التبرع.",'7. كود مؤسسة صناع الحياة على فوري أحيانًا يظهر بكود: 950 أو LIFE MAKERS، وإن ما ظهرش، خليه يبحث بالاسم "صناع الحياة".']}}},kA={title:"التبرعات العينية",thankYou:"شكرا لتبرعك العيني",thankYouMessage:"تم استلام طلبك بنجاح",thankYouSubMessage:"سيتم التواصل معك قريباً من ممثل صناع الحياة لتأكيد موعد تحصيل التبرع",seeMore:"عرض المزيد",selectOption:"اختر",howToDonate:"كيفية التبرع",DonorDetails:"بيانات المتبرع",addressUrl:"الموقع علي الخريطة",selectGovernorateFirst:"يرجى اختيار المحافظة أولاً",selectCityFirst:"يرجى اختيار المدينة أولاً",steps:{step1:`في كل بيت حاجات زيادة عن حاجتنا ومش بنستخدمها؛ زي هدوم مبقناش نلبسها، أثاث قديم جددناه، أجهزة مركونة، أو حتى كتب قرأناها.الحاجات دي بتكون واخدة مكان وبتحتاج مجهود في كل مرة بنرتب فيها البيت، في مؤسسة صناع الحياة بنستقبل تبرعاتك العينية دي، وبنوظفها لخدمة المستفيدين وبنوفر عليك جهد ووقت كبير.

سجل بياناتك دلوقتي وهيتم التواصل من ممثل صناع الحياة لتأكيد موعد تحصيل التبرع.

يشترط أن تكون التبرعات العينية بحالة جيدة وصالحة للاستخدام`},donationType:{label:"نوع التبرع العيني",types:{clothing:"ملابس",food:"مواد غذائية",medicine:"أدوية ومستلزمات طبية",furniture:"أثاث",electronics:"أجهزة كهربائية وإلكترونية",schoolSupplies:"مستلزمات مدرسية",services:"خدمات (مثل التصميم، القانون، الترجمة)",other:"أخرى"}},governorate:{label:"المحافظة",names:{cairo:"القاهرة",giza:"الجيزة",alex:"الإسكندرية",dakahlia:"الدقهلية",sharqia:"الشرقية",qalyubia:"القليوبية",assuit:"أسيوط",sohag:"سوهاج",luxor:"الأقصر",aswan:"أسوان",other:"أخرى"}},area:{label:"المنطقة",names:{nasrCity:"مدينة نصر",maadi:"المعادي",dokki:"الدقي",zamalek:"الزمالك",mansoura:"المنصورة",tanta:"طنطا",faisal:"فيصل",other:"أخرى"}},address:{label:"العنوان بالتفصيل",placeholder:"أدخل العنوان الكامل"},pickupDate:{label:"ميعاد الاستلام"},period:{label:"الفترة",selectOption:"اختر الفترة",options:{morning:"صباحًا",evening:"مساءً"}},notes:{label:"ملاحظات"}},jA={title:"التسجيل بقيد الموردين",address:"العنوان",supplierData:{sectionTitle:"بيانات المورد",companyName:"اسم الشركة في السجل التجاري",commercialRegNo:"رقم السجل التجاري",commercialRegIssuer:"جهة استخراج السجل التجاري",taxCardNumber:"رقم البطاقة الضريبية",contactPerson:"اسم مسؤول التواصل",mobile:"رقم الموبايل",landline:"رقم التليفون الأرضي",fax:"رقم الفاكس",companyType:"نوع الشركة"},companyOwnersTitle:"ملاك الشركة المسؤولين بالتضامن / أعضاء مجلس الإدارة / المندوبين",companyOwnersNote:"بحد أقصي (3) مندوب",companyOwners:{name:"الاسم",nationalId:"الرقم القومي",position:"المنصب",addNewOwner:"إضافة مالك آخر"},branchesTitle:"فروع الشركة",addNewBranch:"إضافة فرع آخر",addNewActivity:"إضافة نشاط آخر",companyActivitiesTitle:"أنشطة الشركة",mainActivity:"النشاط الرئيسي",subActivity:"النشاط الفرعي",selectMainFirst:"من فضلك اختار النشاط الرئيسي اولا",documents:{label:"المستندات المطلوبة",description:"للتعرف ع المطلوب في المرفق من فضلك",clickHere:"اضغط هنا"}},OA={title:"المناقصات / التعاقدات",details:"التفاصيل",duration:"المدة",downloadFile:"تحميل ملف"},MA={2020:{year:"2020",header:"أطلقت صناع الحياة مصر، حملتها لدعم غزة تحت مظلة التحالف الوطني، ووصل حجم المساعدات المقدمة إلى 275 شاحنة من خلال10قوافل وبمشاركة 10000 متطوع من مختلف المحافظات.",footer:"",achieves:[]},2021:{year:"2021",header:'شاركت مؤسسة صناع الحياة في فعالية "كتف في كتف"، التي نظمها التحالف الوطني للعمل الأهلي التنموي بحضور الرئيس السيسي وأكثر من 40 ألف متطوع من جميع المحافظات.',footer:"شارك أكثر من 10000 متطوع من صناع الحياة في الفعاليات، كما ألقت رئيسة مجلس إدارة متطوعي صناع الحياة، كلمة أمام الرئيس السيسي، وشارك المتطوعون من نقاط البث المباشر من محافظة الأسكندرية أثناء تعبئة كراتين المواد الغذائية.",achieves:[]},2022:{year:"2022",header:"انضمت مؤسسة صناع الحياة مصر للتحالف الوطني، كعضو مؤسس في التحالف، لتبدأ سلسلة من التعاون مع مؤسسات وجمعيات المجتمع المدني للوصول للمستفيدين في أبعد النقاط في مصر.",footer:"",achieves:[]},2023:{year:"2023",header:"",footer:"",achieves:[{description:"تركيب 349 وصلة مياه و263 وصلة صرف صحي، كما تم رفع كفاءة 1320 منزلاً، إلى جانب تركيب أسقف لـ870 منزلاً من المنازل غير الآمنة.",image:"water"},{description:"إجراء 678 عملية جراحية و874 عملية عيون، بالإضافة إلى تجهيز 21 قافلة طبية للكشف وصرف العلاج مجانًا، و11 قافلة بيطرية لخدمة المناطق الريفية.",image:"surgen"},{description:"توفير 1900 نظارة طبية بعد الكشف، و212 جهازًا تعويضيًا لدعم ذوي الإعاقة. وأجرت القوافل الطبية تحليل فيروس سي لـ1295 شخصًا، بالإضافة إلى عقد جلسات توعية صحية استفاد منها نحو 4450 شخصًا.",image:"special"},{description:"قدمت المؤسسة خلال المبادرة 28,475 كرتونة غذائية، إلى جانب سداد ديون 5 غارمين، مساهمةً في تخفيف الأعباء عن كاهل الأسر الأكثر احتياجًا.",image:"bags"},{description:"إقامة معارض ملابس تم خلالها توزيع 4350 قطعة ملابس على الأسر، وخلال فصل الشتاء، تم توفير 9275 لحافًا و350 جاكتًا لحماية الأسر من البرد القارس.",image:"cloths"}]},2024:{year:"2024",header:"صناع الحياة تشارك في حملة حياة كريمة للتنمية الشاملة في محافظات مصر، حيث عملت صناع الحياة على تنمية 10 قرى الأكثر فقرا بمحافظتي سوهاج وقنا من خلال :",footer:"إطلاق حملة الناس لبعضها ودعم مليون مستفيد خلال فترة كورونا، عن بعد بدون تلامس، وذلك من خلال المدفوعات الإلكترونية، حيث تصل للمستفيد رسالة على الهاتف المحمول ثم يتوجه لأقرب محل (ملابس – أغذية - ..).",achieves:[{description:"تركيب 349 وصلة مياه و263 وصلة صرف صحي، كما تم رفع كفاءة 1320 منزلاً، إلى جانب تركيب أسقف لـ870 منزلاً من المنازل غير الآمنة.",image:"water"},{description:"إجراء 678 عملية جراحية و874 عملية عيون، بالإضافة إلى تجهيز 21 قافلة طبية للكشف وصرف العلاج مجانًا، و11 قافلة بيطرية لخدمة المناطق الريفية.",image:"surgen"},{description:"توفير 1900 نظارة طبية بعد الكشف، و212 جهازًا تعويضيًا لدعم ذوي الإعاقة. وأجرت القوافل الطبية تحليل فيروس سي لـ1295 شخصًا، بالإضافة إلى عقد جلسات توعية صحية استفاد منها نحو 4450 شخصًا.",image:"special"},{description:"قدمت المؤسسة خلال المبادرة 28,475 كرتونة غذائية، إلى جانب سداد ديون 5 غارمين، مساهمةً في تخفيف الأعباء عن كاهل الأسر الأكثر احتياجًا.",image:"bags"},{description:"إقامة معارض ملابس تم خلالها توزيع 4350 قطعة ملابس على الأسر، وخلال فصل الشتاء، تم توفير 9275 لحافًا و350 جاكتًا لحماية الأسر من البرد القارس.",image:"cloths"}]},title:"الإنجازات"},RA={title:"رشح حالة للمساعدة",organizationPolicy:"سياسة المؤسسة",organizationPolicyDesc:`أوقات كتير بنقابل ناس بتمر بظروف صعبة، وبنحس إن مساعدتنا ليهم مش كفاية، ومهما كان حجم المساعدة فاحتياجهم أكبر ومحتاج مشاركة وتكاتف.

علشان كده، في مؤسسة صناع الحياة فتحنا باب ترشيح الحالات الإنسانية من المتبرعين؛ من خلال الخدمة دي، هتقدر تساعد فريقنا يوصل لأسر أكتر في كل مكان، ونقدملهم الدعم اللازم بعد دراسة الاستحقاق.

ولأن الدال على الخير كفاعله، دورك مش مجرد ترشيح؛ أنت شريك أساسي معانا في الرحلة، بدايةً من فحص الحالة والتأكد من استحقاقها، وصولاً لقبولها ونشرها رسميًا على الموقع.

وبمجرد قبول الحالة، هنشارك معاك رابط تبرع مخصص ليها، عشان تشاركه مع أهلك وأصحابك، وتتجمعوا مع بعض دايمًا في الخير.`,requestProcess:"طريقة سير الطلب",requestProcessDesc:"الزكاة هي فريضة مالية واجبة على المسلمين، وهي ركن من أركان الإسلام، وتعتبر شكلاً من أشكال الصدقة المفروضة. تُدفع الزكاة من أموال المسلمين وممتلكاتهم إلى فئات معينة من المجتمع حددها الشرع، بهدف التطهير والتقرب إلى الله.",caseData:"بيانات الحالة",job:"الوظيفة",employed:"يعمل",unemployed:"لا يعمل",caseDocuments:"أوراق الحالة",caseDetails:"تفاصيل الحالة",nominateCaseList:" حالاتي المرشحة للمساعدة",nominateCaseSuccess:"تمت ارسال الطلب  بنجاح .. يمكنك متابعة حالة الطلب من خلال حسابك الشخصى",note:"**يقوم فريق صناع الحياه بارسال ايميل او رسالة نصية فى حالة رفض / طلب بيانات/ قبول مبدئي  لأي طلب .. لذا نرجوا التحقق دائما من الرسائل النصية او بريدك الاليكتروني لمتابعة اي طلبات او اسباب تتعلق بحالة الطلب",columns:{name:"اسم الحالة",requestDate:"تاريخ الطلب",phone:"رقم تليفون للتواصل",governorate:"المحافظة",status:"حالة الطلب",comment:"التعليق"},status:{inReview:"جاري بحث الحالة",accepted:"طلب مقبول",rejected:"تم الرفض",dataRequired:"مطلوب بيانات",preAccepted:"قبول مبدئي"}},zA={title:"عمليات الدفع",collection:"تم التحصيل",columns:{date:"التاريخ",paymentMethod:"طريقة الدفع",amount:"المبلغ",currency:"العملة",transactionNumber:"رقم العملية",invoice:"الفاتورة",campaignOrProject:"الحملة / المشروع"}},IA={invoiceTo:"ألفاتوره الى:",email:"الإيميل:",mobile:"الموبايل:",invoiceDate:"تاريخ الفاتورة:",invoiceNumber:"رقم الفاتورة:",transaction:"رقم العملية",donationItem:"بند التبرع",intention:"نية التبرع",amount:"مبلغ التبرع",currency:"العملة",method:"طريقة الدفع",ongoingCharity:"صدقة جارية",total:"الإجمالي",contactUs:"تواصل بنا",phone:"رقم الهاتف",address:"العنوان"},LA={title:"التبرع الشهري",rememberMonthlyDonation:"التذكير بالتبرع الشهري",everyMonth:"من كل شهر",columns:{campaignName:"اسم الحملة",recurrenceDay:"يوم التكرار الشهري",cancelSubscription:" حالة الاشتراك",activateSubscription:"تفعيل الاشتراك",day:"يوم:"}},NA={updateSuccess:"تم تحديث التذكيرات بنجاح.",saveChanges:"حفظ التغيريات",activate:"تفعيل"},UA={title:"التسجيل فى جائزة دوق ادنبرة ",university:"المدرسة / الجامعة",policy:"سياسة المؤسسة",policyDesc:"الزكاة هي فريضة مالية واجبة على المسلمين، وهي ركن من أركان الإسلام، وتعتبر شكلاً من أشكال الصدقة المفروضة. تُدفع الزكاة من أموال المسلمين وممتلكاتهم إلى فئات معينة من المجتمع حددها الشرع، بهدف التطهير والتقرب إلى الله.",basicInfo:"بيانات الطالب",fullName:"الاسم الرباعي",info:"معلومات إضافية",isRegistered:"هل اشتركت في الجائزة من قبل؟",level:"المستوي الذي تريد الإنضمام إليه",levelOptions:{bronze:"برونز",silver:"فضي",gold:"ذهبي"}},PA={title:"جائزة دوق ادنبرة",subtitle:"مؤسسة صناع الحياة - الشريك التنفيذي لجائزة دوق إدنبرة العالمية في مصر",description:`تعد مؤسسة صناع الحياة الشريك التنفيذي الرسمي لجائزة دوق إدنبرة (Award International Edinburgh's of Duke The) في مصر، وهو برنامج عالمي لتنمية الشباب موجود في أكثر من 140 دولة، ويعتبر تحديًا فرديًا وليس تنافسيًا.

البرنامج مخصص للفئة العمرية من 14 إلى 24 سنة ويوفر فرصة فريدة للشباب لاكتشاف إمكانياتهم، كما يهدف إلى مساعدة الشباب على تطوير مهارات حياتية حقيقية، وبناء الثقة بالنفس وتحمل المسؤولية، واكتساب روح القيادة والعمل الجماعي، والمساهمة الفعالة في خدمة المجتمع، وذلك من خلال التعلم بالممارسة وخوض تجارب ملهمة مليئة بالتحديات والمغامرات.`,levels:{title:"مستويات الجائزة:",bronze:"البرونزية (من سن 14)",silver:"الفضية (من سن 15)",gold:"الذهبية (من سن 16)",description:"يعتمد برنامج دوق إدنبرة على مجموعة من الأهداف الأساسية التي يجب على كل مشارك تحقيقها في جميع المستويات، هذه الأهداف تهدف إلى تطوير مهارات الشباب بشكل متوازن وتعزيز شخصيتهم من خلال التعلم بالممارسة والتجربة العملية."},categories:{title:"يشمل البرنامج أربعة مجالات رئيسية في جميع المستويات:",voluntaryService:"الخدمة المجتمعية (Voluntary Service) المشاركة في أعمال تطوعية تخدم المجتمع وتغرس روح المسؤولية الاجتماعية.",physicalRecreation:"النشاط البدني (Physical Recreation) ممارسة نشاط رياضي أو بدني بانتظام لتعزيز الصحة واللياقة البدنية.",skillsDevelopment:"تنمية المهارات (Skills Development) تعلم مهارة جديدة أو تطوير مهارة موجودة، مثل التصوير، البرمجة، الموسيقى أو الطهي.",socialSkills:"المهارات الاجتماعية (Social Skills) مهارات التعامل مع الآخرين والتعاون معهم لتعزيز التعاون والتواصل الاجتماعي.",goldLevel:"أما في المستوى الذهبي، فيلتزم المشارك أيضًا بعنصر إضافي وهو؛",residentialProject:"الإقامة السكنية (Residential Project - Gold) تجربة جديدة يقضي فيها المشارك وقتًا مع مجموعة مختلفة في بيئة جديدة مثل المخيمات الشبابية أو البرامج التدريبية الخارجية."},participateInTheAward:{title:"لماذا تشارك في الجائزة؟",description:"الانضمام إلى جائزة دوق إدنبرة مش مجرد نشاط شبابي، لكنه تجربة حقيقية بتغتر حياتك للأفضل،بعد إنهاء رحلتك في الجائزة بتكون شخصية أقوى وأكثر وعيا بنفسك وبالعالم، وبتكتسب :",items:["خبرة عملية قوية تضيف قيمة حقيقية لسيرتك الذاتية وتزيد فرص قبولك في الجامعات والمنح الدراسية.","شهادة عالمية معترف بها في أكثر من 130 دولة حول العالم","حضور حفل تخرج رسمي مميز والإحتفال بإنجازاتهم","مهارات حياتية حقيقية: إدارة الوقت، التواصل الفعّال، القيادة، والاستقلالية.","الثقة بالنفس القدرة على مواجهة التحديات وتحقيق الأهداف","علاقات مميزة التعرف على شباب من خلفيات وثقافات مختلفة"]},button:"سجل الان في الاستمارة وانضم لجائزة دوق إدنبرة العالمية"},BA={about:"حول",arabicDescription:"الوصف بالعربية",englishDescription:"الوصف بالإنجليزية",followUs:"تابعنا",facebook:"فيسبوك",twitter:"تويتر",instagram:"إنستغرام",youtube:"يوتيوب",linkedin:"لينكد إن"},qA={title:"الجمعيات والمبادرات",label:"مؤسسة صناع الحياة",description:`لدى مؤسسة صناع الحياة 13 جمعية شريكة في مختلف محافظات مصر، تعمل كبيئة آمنة وداعمة لتمكين المتطوعين وتنفيذ المبادرات التنموية.

وتساهم هذه الجمعيات في تقديم خدمات تنموية وخيرية متنوعة داخل المجتمعات المحلية، بما يدعم رؤيتنا في تحقيق أثر مستدام وتحسين جودة حياة المستفيدين.`},HA={title:"سياسة الخصوصية",label:"سياسة الخصوصية – مؤسسة صناع الحياة"},VA={title:"اتصل بنا",label:"مؤسسة صناع الحياة...",label2:"نحن نحب أن نسمع منك :)",discription:"مؤسسة صناع الحياة مصر (LMF) هي مؤسسة أهلية وطنية غير حكومية وغير هادفة للربح أسست عام 2011 ومسجلة مركزياً برقم قيد 839 لسنة 2018 وتعمل طبقاً لقانون الجمعيات والمؤسسات الأهلية المصري.",address:"العنوان",addressValue:"3 ش المشتل تقسيم الشيشني - المعادي",email:"البريد الإلكتروني",phone:"التليفون",workTime:"مواعيد العمل",workTimeValue:"10:00 ص - 06:00 م",formTitle:"تواصل معنا",message:"أدخل رسالتك",donate:"تبرع معنا",donateDes:"تقدم المؤسسة دعماً شاملاً للاجئين المقيمين في مصر، متضمنًا مساعدات غذائية وطبية وتعليمية وغيرها من أشكال الدعم التي تهدف لتحسين ظروفهم المعيشية.",volunteer:"تطوع معنا",volDes:"المؤسسة قائمة على التطوع وتعمل منذ نشأتها على تنمية الشباب لبناء قدراتهم من أجل العمل على تنمية المجتمعات والاستجابة لاحتياجاتهم الإنسانية والإغاثية."},QA=[{id:1,text:"أصل مستخرج حديث من السجل التجاري (لم يمر عليه أكثر من 6 أشهر)"},{id:2,text:"صورة بطاقة الرقم القومي للوراد بالسجل التجاري (أعضاء مجلس إدارة – الملاك – المندوبين)"},{id:3,text:"صورة من السجل الصناعي (للشركات والمصانع الصناعية)"},{id:4,text:"بالنسبة للمكاتب الهندسية الاستشارية يتم الاطلاع على أصل شهادة المكتب الاستشاري الصادرة من نقابة المهندسين"},{id:5,text:"س 14 (إن وجد)"},{id:6,text:"سابقة الأعمال (إن وجد)"},{id:7,text:"شهادة تسجيل الضريبة على القيمة المضافة"},{id:8,text:"شهادة البنك (رقم الحساب البنكى)"},{id:9,text:"شهادة التسجيل بمنظومة الفاتورة الإلكترونية"},{id:10,text:"بطاقة التسجيل الضريبى"},{id:11,text:"إرفاق شهادة ISO14001 أو ISO14067 أو أي دراسة أو شهادة خاصة بالبيئة"}],Bv={InvalidCredentials:Z2,special_campaigns:K2,common:W2,navigation:J2,profile:eA,breadcrumbs:tA,errors:nA,auth:aA,home:iA,aishWmelh:oA,adahy:rA,nakhil:sA,wed:lA,campaigns:cA,volunteer:uA,search:dA,footer:fA,annualReports:mA,news:pA,partners:hA,projects:gA,refugee:yA,statistics:vA,quickDonate:bA,aboutUs:xA,board:wA,checkout:SA,media:TA,yearlyReports:AA,branches:EA,success:_A,volunteerForm:CA,"hasabat-elzakat":{title:"حاسبة الزكاة",description:"الزكاة هي فريضة مالية واجبة على المسلمين، وهي ركن من أركان الإسلام، وتعتبر شكلاً من أشكال الصدقة المفروضة. تُدفع الزكاة من أموال المسلمين وممتلكاتهم إلى فئات معينة من المجتمع حددها الشرع، بهدف التطهير والتقرب إلى الله.","zakat-al-mal":"زكاة المال","zakat-al-mal-title":"أدخل المبلغ التراكمي الذي تملكة:","zakat-al-fitr":"زكاة الفطر","Zakat-Gold":"زكاة الذهب",currency:"جنيه مصرى","zakat-gold-title":"وزن الذهب عيار 18:",unit:"جرام","value-label":"قيمة اليوم :","zakat-gold-18k-title":"وزن الذهب عيار 18:","zakat-gold-21k-title":"وزن الذهب عيار 21:","zakat-gold-24k-title":"وزن الذهب عيار 24:","zakat-value":"قيمة الزكاة","total-zakat":"إجمالي قيمة الزكاة","zakat-campgain":"الحملات اللتي يجوز فيها الزكاه : ","currency-short":"ج.م",zakatReminder:{headerText:"التذكير بموعد الزكاة ",submitButton:"تذكير",name:"الاسم",email:"البريد الإلكتروني",phone:"رقم الهاتف",date:"ميعاد التذكير"},error:"ليس عليك زكاة؛ لأن المال لم يبلغ النصاب.","no-campaigns":"لا يوجد حملات زكاة"},donationSection:DA,InKindDonations:kA,suppliersRegisteration:jA,contracts:OA,achievements:MA,nominateCase:RA,myPayments:zA,invoice:IA,monthlyDonation:LA,reminders:NA,DukeForm:UA,dukeAdenbra:PA,ngo:BA,ngos:qA,privacyPolicy:HA,contactUs:VA,requiredDocuments:QA},GA="Privacy Policy",FA="Privacy Policy – Life Makers Foundation",$A={title:"Introduction",body:"Life Makers Foundation is committed to protecting the privacy of donors' and visitors' information on our website. This policy aims to explain how we collect, use, and protect the personal information you provide when using our website."},YA={title:"Information We Collect",description:"When you visit the website or make a donation, we may collect the following information:",items:["Full name","Email address","Phone number","Residential address","Donated amount and type of donation"]},XA={title:"How We Use the Information",preface:"We use your personal information for the following purposes:",items:["To process donations securely and efficiently","To issue donation receipts and document transactions","To communicate with you regarding project updates or periodic reports","To improve user experience on the website","To comply with legal, financial, and regulatory requirements"]},ZA={title:"Information Protection",preface:"We protect your information through:",items:["Encrypting data during transmission using SSL protocols","Using secure servers and firewall technologies","Restricting access to data only to authorized staff committed to confidentiality policies"]},KA={title:"Information Sharing",preface:"We confirm that we do not sell or share your personal information with any third parties for marketing purposes. However, we may share certain data with:",items:["Technical service providers and online payment gateways (to ensure secure donation processing)","Governmental or regulatory authorities if legally required"]},WA={title:"Cookies",body:"Our website uses cookies to enhance your browsing experience and provide customized content. You can manage cookie settings through your browser."},JA={title:"Your Rights",items:["Request to know what information we hold about you","Request to modify or delete your data","Withdraw your consent to use your data at any time"],contactNote:"You can contact us via email to exercise these rights."},eE={title:"Changes to the Privacy Policy",body:"We reserve the right to modify the privacy policy from time to time. Any updates will be published on this page with the 'last updated' date changed."},tE={title:"Contact Us",body:"If you have any inquiries or requests related to this privacy policy, please contact us via:",items:["📧 Email: website@lifemakers.org","📞 Hotline: 16563"]},nE={title:"Donation Refund Policy",sections:[{heading:"First: Introduction",body:"Life Makers Foundation Egypt is committed to promoting transparency and integrity in its financial transactions with donors. Believing in the donor's right to reconsider their decisions and ensuring proper handling of donation funds, the foundation has established this policy to regulate donation refund requests according to specific terms and conditions."},{heading:"Second: Scope of Application",body:"This policy applies to monetary donations made through the foundation's official electronic channels, approved donation outlets, or in-person contributions. It does not apply to in-kind or non-monetary donations, or donations already allocated to projects for which funds have been disbursed."},{heading:"Third: Donation Refund Conditions",list:["1. Request Period: The donor has the right to request a refund within a maximum of five (5) working days from the date of the donation as documented by an official receipt.","2. Official Request Channels:","Fill out the donation refund form available on the website or at approved donation outlets.","Send the request via the official email: website@lifemakers.org.","Or via the hotline: 16563.","3. Required Documents:","A copy of the donation receipt or proof of payment.","A copy of the national ID or passport (for verification purposes only).","The bank account number or transfer method used.","- Any refund request not submitted by the donor personally or their legal representative under an official power of attorney will not be considered."]},{heading:"Fourth: Procedures",list:["1. The foundation reviews the request within no more than three (3) working days from the date of receipt.","2. If approved, the refund will be processed within a maximum of fifteen (15) working days from the approval date, via the same payment method or any method agreed upon with the donor.","3. The foundation reserves the right to reject the request if:","The request exceeds the specified time frame.","The donation has been allocated to a project where funds have already been used.","There is inconsistency in the provided data or suspicion of misuse."]},{heading:"Fifth: Donor Responsibilities",list:["1. The donor is responsible for the accuracy of the provided data and the payment method used.","2. The foundation is not liable for any delays resulting from incorrect or incomplete information."]},{heading:"Sixth: General Provisions",list:["The foundation reserves the right to update this policy whenever necessary and will announce updates through official channels.","Any dispute arising regarding the application of this policy shall be resolved amicably or through arbitration, and if unresolved, it shall be referred to the provisions of Egyptian law, with Cairo courts having jurisdiction."]}]},aE={title:GA,label:FA,preface:$A,collect:YA,use:XA,protection:ZA,sharing:KA,cookies:WA,rights:JA,changes:eE,contact:tE,refund:nE},iE="سياسة الخصوصية",oE="سياسة الخصوصية – مؤسسة صناع الحياة",rE={title:"مقدمة",body:"تلتزم مؤسسة صناع الحياة بحماية خصوصية معلومات المتبرعين والزوار لموقعنا الإلكتروني. تهدف هذه السياسة إلى شرح كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها لنا عند استخدامك لموقعنا."},sE={title:"المعلومات التي نقوم بجمعها",description:"عند زيارتك للموقع أو تقديم تبرع، قد نقوم بجمع المعلومات التالية:",items:["الاسم الكامل","البريد الإلكتروني","رقم الهاتف","عنوان الإقامة","المبلغ المتبرع به ونوع التبرع"]},lE={title:"كيفية استخدام المعلومات",preface:"نستخدم معلوماتك الشخصية للغايات التالية:",items:["إتمام عمليات التبرع بشكل آمن وفعال","إصدار إيصالات التبرع وتوثيق المعاملات","التواصل معك بشأن تحديثات المشروع أو التقارير الدورية","تحسين تجربة المستخدم على الموقع","الامتثال للمتطلبات القانونية والمالية والتنظيمية"]},cE={title:"حماية المعلومات",preface:"نلتزم بتأمين بياناتك من خلال:",items:["تشفير البيانات أثناء النقل باستخدام بروتوكولات SSL","استخدام خوادم آمنة وتقنيات جدار حماية (Firewall)","تقييد الوصول إلى البيانات فقط للموظفين المخوّلين والملتزمين بسياسة السرية"]},uE={title:"مشاركة المعلومات",preface:"نؤكد أننا لا نبيع أو نشارك معلوماتك الشخصية مع أي أطراف ثالثة لأغراض تسويقية. ومع ذلك، قد نشارك بعض البيانات مع:",items:["مزودي الخدمات التقنية والدفع الإلكتروني (بما يضمن تنفيذ التبرعات بشكل آمن)","الجهات الحكومية أو الرقابية في حال طُلب منا ذلك قانونياً"]},dE={title:"الكوكيز (Cookies)",body:"يستخدم موقعنا ملفات الكوكيز لتحسين تجربة التصفح وتقديم محتوى مخصص. يمكنك التحكم في إعدادات الكوكيز من خلال متصفحك."},fE={title:"حقوقك",items:["طلب معرفة المعلومات التي نحتفظ بها عنك","طلب تعديل أو حذف بياناتك","سحب الموافقة على استخدام بياناتك في أي وقت"],contactNote:"يمكنك التواصل معنا على البريد الإلكتروني لتفعيل هذه الحقوق."},mE={title:"التغييرات على سياسة الخصوصية",body:"نحتفظ بالحق في تعديل سياسة الخصوصية من وقت لآخر. سيتم نشر أي تحديثات على هذه الصفحة مع تغيير تاريخ “آخر تحديث”."},pE={title:"التواصل معنا",body:"إذا كانت لديك أي استفسارات أو طلبات متعلقة بسياسة الخصوصية، يرجى التواصل معنا عبر:",items:["📧 البريد الإلكتروني: website@lifemakers.org","📞 الهاتف: رقم الخط الساخن 16563"]},hE={title:"سياسة استرداد التبرعات",sections:[{heading:"أولاً: مقدمة",body:"تحرص مؤسسة صناع الحياة مصر على تعزيز مبادئ الشفافية والمصداقية في معاملاتها المالية مع المتبرعين، وإيمانًا منها بحق المتبرع في مراجعة قراراته، وضمانًا لحُسن التصرف في أموال التبرعات، وضعت المؤسسة هذه السياسة لتنظيم طلبات استرداد التبرعات النقدية وفق ضوابط ومعايير محددة."},{heading:"ثانيًا: نطاق التطبيق",body:"تنطبق هذه السياسة على التبرعات النقدية التي تتم من خلال الوسائل الإلكترونية الرسمية للمؤسسة أو عبر منافذ التبرع المعتمدة أو الحضور الشخصي، ولا تسري على التبرعات العينية أو غير النقدية أو تلك المُخصّصة لمشروعات قد تم صرف التبرع لأجلها."},{heading:"ثالثًا: شروط استرداد التبرع",list:["1. مدة الطلب: يحق للمتبرع طلب استرداد التبرع خلال مدة أقصاها خمسة (5) أيام عمل من تاريخ التبرع المثبت بإيصال رسمي.","2. الوسائل الرسمية لتقديم الطلب:","تعبئة نموذج استرداد التبرع المتوفر على الموقع الإلكتروني أو لدى منافذ التبرع.","إرسال الطلب عبر البريد الإلكتروني الرسمي website@lifemakers.org.","أو عبر الخط الساخن: 16563.","3. المستندات المطلوبة:","صورة من إيصال التبرع أو ما يثبت عملية الدفع.","صورة من بطاقة الرقم القومي أو جواز السفر (لأغراض التحقق فقط).","رقم الحساب البنكي أو وسيلة التحويل التي تم استخدامها.","- لا يُنظر في أي طلب استرداد لا يُقدم من المتبرع نفسه أو من وكيل قانوني عنه بموجب توكيل رسمي."]},{heading:"رابعًا: الإجراءات",list:["1. تقوم المؤسسة بدراسة الطلب خلال مدة لا تتجاوز ثلاثة (3) أيام عمل من تاريخ استلامه.","2. في حال الموافقة، يتم رد المبلغ خلال مدة أقصاها خمسة عشر (15) يوم عمل من تاريخ الموافقة، عبر نفس وسيلة الدفع أو بأي وسيلة يتم الاتفاق عليها مع المتبرع.","3. تحتفظ المؤسسة بحق رفض الطلب إذا:","تجاوزت مدة تقديم الطلب الإطار الزمني المحدد.","ثبت تخصيص التبرع لمشروع قد تم صرف الأموال عليه.","وُجد تضارب في البيانات أو شبهة إساءة استخدام."]},{heading:"خامسًا: مسؤولية المتبرع",list:["1. يتحمل المتبرع مسؤولية صحة البيانات المُقدمة ووسيلة الدفع المُستخدمة.","2. لا تتحمل المؤسسة أي التزامات تجاه تأخير ناتج عن بيانات خاطئة أو ناقصة."]},{heading:"سادسًا: أحكام عامة",list:["تحتفظ المؤسسة بحق تحديث هذه السياسة متى دعت الحاجة، وتُعلن التحديثات على الوسائل الرسمية.","يخضع أي نزاع ينشأ بشأن تطبيق هذه السياسة للحل الودي أو التحكيم وإن لم يتم الحل تحال لأحكام القانون المصري، ويُختص به محاكم القاهرة."]}]},gE={title:iE,label:oE,preface:rE,collect:sE,use:lE,protection:cE,sharing:uE,cookies:dE,rights:fE,changes:mE,contact:pE,refund:hE},Ef=()=>typeof window>"u"?"ar":localStorage.getItem("language")||"ar";(!Pv||!Bv)&&console.error("Translation files failed to load!");const yE={en:{translation:Pv||{},privacy:aE||{}},ar:{translation:Bv||{},privacy:gE||{}}};Nn.use($1).init({resources:yE,lng:Ef(),fallbackLng:"ar",defaultNS:"translation",ns:["translation","privacy"],initImmediate:!0,interpolation:{escapeValue:!1},react:{useSuspense:!1}},a=>{if(a){console.error("i18n initialization error:",a);return}const o=Nn.language||Ef();Nn.hasResourceBundle(o,"translation")?o!=="ar"&&o!=="en"&&Nn.changeLanguage("ar"):(console.error(`Translation bundle not found for language: ${o}`),Nn.hasResourceBundle("ar","translation")&&Nn.changeLanguage("ar"))});const qv=a=>{typeof document>"u"||(document.documentElement.lang=a)},vE=Nn.resolvedLanguage||Nn.language||Ef();qv(vE);Nn.on("languageChanged",a=>{qv(a),typeof localStorage<"u"&&localStorage.setItem("language",a)});const bE="/ta-lm/assets/aboutus-bg-Dd5FW0_5.svg",aM=k.section`
  padding: 1rem 4rem;
  background-repeat: no-repeat;
  background-position: 4rem 2rem;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,iM=k.section`
  padding: 1rem 4rem;
  background-image: url(${bE});
  background-repeat: no-repeat;
  background-position: 4rem 2rem;
  direction: ${({isRTL:a})=>a?"rtl":"ltr"};
  @media (max-width: 1200px) {
    padding: 1rem;
    background-image: none;
  }
`,oM=k.div`
  max-width: 98%;
  margin: 0 auto;
`,rM=k.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  color: ${({dark:a})=>"var(--primary-color)"};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,sM=k.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;
  color: black;
`,lM=k.p`
  white-space: pre-line;
  font-size: ${({fontSize:a})=>a||"1.2rem"};
  font-weight: 400;
  ${""}
  color: black;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,xE=X1`
  @keyframes scalePulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Cairo',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    /* OPTIMIZATION: Prevent white flash - Set background color immediately */
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
  }
  
  /* Apply Cairo font when fonts-loaded class is present */
  html.fonts-loaded body,
  html.fonts-loaded * {
    font-family: 'Cairo',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  }
  
  #root {
    /* OPTIMIZATION: Ensure root has background to prevent white flash */
    background-color: #f9f9f9;
  }
  .slick-initialized .slick-slide {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
`,cM=k.div`
  width: 70%;
  border-bottom: 1px solid #000;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`,wE=k.div`
  display: flex;
  gap: 0 10px;
  width: 100%;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,uM=k(wE)`
  max-width: 100%;
`,dM=k.div`
  flex: 1;
  max-width: 100%;
  margin: 0.5rem 0;

  display: ${({isRadio:a})=>a?"flex":"block"};
  @media (max-width: 768px) {
    display: ${({isRadio:a})=>a?"block":""};
    width: 100%;
    gap: 16px 0;
  }
`,SE=k.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  height: 38px;
  overflow: hidden;
  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`,fM=k.label`
  font-size: 0.875rem;
  color: #666;
  padding-left: ${({isRTL:a})=>a?"3px":"1rem"};
  padding-right: ${({isRTL:a})=>a?"1rem":"3px"};
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 100%;

  ${a=>a.focused&&`
    color: #3B82F6;
  `}

  ${({isRequired:a=!0})=>`${a&&` &::after {
    content: "*";
    color: #ef4444;
    margin-right: 4px;
    }`}`}
`,mM=k.input`
  flex: 1;
  height: 100%;
  border: none;
  /* padding: 0 16px; */
  font-size: 0.875rem;
  background: transparent;
  color: #333;
  display: flex;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  ${({isRTL:a})=>a?"padding-right:10px;":"padding-left: 10px;"}

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }
  /* Hide arrows in Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  /* Hide arrows in Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`,pM=k.span`
  position: absolute;
  ${({isRTL:a})=>a?"left: 1rem;":"right: 1rem;"}
  ${({isRTL:a})=>a?"margin-right: 3em;":"margin-left: 3rem;"}
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
`;k.ul`
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding-left: ${({isRTL:a})=>a?"0":"1.5rem"};
  text-align: ${({isRTL:a})=>a?"right":"left"};
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;const hM=k(SE)`
  display: flex;
  justify-content: space-between;
  /* justify-content: ${({isRTL:a})=>a?"flex-start":"flex-end"}; */
  padding: 0;
  overflow: visible;
  gap: 4px;
  flex-direction: row-reverse;
  border: none;
  background: transparent;
  box-shadow: none;
  width: 100%;
  margin-top: ${({margin:a})=>a||"0"};
`,gM=k.div`
  height: 100%;
  width: 57px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  .react-tel-input {
    height: 100%;
    width: 100%;
  }

  .flag-dropdown {
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
    position: static !important;
    width: 100%;

    &:hover,
    &:focus {
      background: transparent !important;
    }

    .selected-flag {
      background: transparent !important;
      padding: 0 !important;
      width: 100%;
      height: 100%;
      position: static !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      margin-right: 1rem;
      &:hover,
      &:focus {
        background: transparent !important;
      }

      .flag {
        position: static !important;
        transform: scale(1.3);
      }

      .arrow {
        position: static !important;
        margin-right: ${({isRTL:a})=>a?"-1rem":"0"};
        margin-left: ${({isRTL:a})=>a?"0":"1.5rem"};
        margin-top: 0.25rem;
        display: block;
        border-top: 4px solid #666;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }
    }
  }

  .country-list {
    margin: 4px 0 0;
    z-index: 999;
    min-width: 240px;
    right: 0;
    left: auto;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    .country {
      display: flex;
      align-items: center;
      padding: 8px 12px;

      &:hover {
        background: #f3f4f6;
      }

      .flag {
        margin-right: 8px;
      }
    }
  }

  input {
    display: none !important;
  }
`,yM=k.div`
  display: flex;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  height: 100%;
  width: 1000%;

  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`,vM=k.div`
  display: flex;
  gap: 24px;
`,bM=k.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #333;
`,xM=k.input`
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid #dfdfdf;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s ease;

  &:checked::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: #015cab;
    border-radius: 50%;
  }
`,wM=k.select`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: ${({isRTL:a})=>a?"0":"12px"};
  padding-left: ${({isRTL:a})=>a?"12px":"0"};
  font-size: 1rem;
  border-radius: 6px;
  width: 100%;
  /* direction: ${({isRtl:a})=>a?"rtl":"ltr"}; */
  margin-right: ${({isRTL:a})=>a?"0":"1rem"};
  margin-left: ${({isRTL:a})=>a?"1rem":"0"};

  &:focus {
    outline: none;
    border-color: #0f70b7;
  }
`,SM=k.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,TM=k.button`
  background-color: var(--primary-light);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: #095a93;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,AM=k.div`
  flex: 1;
  min-width: 240px;
`,EM=k.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 8px;
  font-size: 1rem;
  color: #333;
  text-align: ${({isRTL:a})=>a?"right":"left"};
`,_M=k.div`
  border: 1px dashed #bfbfbf;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  background-color: #f9f9f9;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover {
    border-color: #0f70b7;
  }
`,CM=k.p`
  font-size: 0.95rem;
  color: #555;
`,DM=k.button`
  background-color: var(--primary-light);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--primary-color);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,kM=k.input`
  display: none;
`,jM=k.img`
  max-width: 100%;
  height: 120px;
  object-fit: contain;
  border-radius: 6px;
`,OM=k.span`
  color: red;
  margin-right: 4px;
`,MM=k.p`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  margin-bottom: 16px;
`,RM=k.div`
  margin-top: 2rem;
`,zM=k.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`,TE=k.input`
  display: none;
`,AE=k.svg`
  overflow: visible;
  width: 1.2rem;
  height: 1.2em;
`,IM=k.path`
  fill: none;
  stroke: #bfbfbf;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition:
    stroke-dasharray 0.5s ease,
    stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;

  ${TE}:checked ~ ${AE} & {
    stroke-dasharray: 70.51 9999999;
    stroke-dashoffset: -262.27;
  }
`,LM=k.label`
  color: black;
  font-size: 1rem;
  font-family: Cairo;
  font-weight: 400;
  padding: 1rem;
  cursor: pointer;
  p {
    display: inline-block;
    color: #015cab;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,NM=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
  background-color: #fff;
`,UM=k.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`,PM=k.p`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 4px;
  text-align: justify;
`,BM=k.div`
  display: flex;
  padding: 2rem 0;
  gap: 4.5rem;
`,qM=k.span`
  font-size: 0.875rem;
  color: var(--secondary-color);
  font-weight: 500;
  border-radius: 0.375rem;
  padding: 0.1rem 0;
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.05rem 0.35rem;
  }
`,EE=Ci`
  0%, 80%, 100% {
    transform: scale(0);
  } 
  40% {
    transform: scale(1);
  }
`,HM=k.span`
  display: inline-block;
  margin-left: 4px;

  span {
    display: inline-block;
    width: 4px;
    height: 4px;
    margin: 0 2px;
    background-color: currentColor;
    border-radius: 50%;
    animation: ${EE} 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
    &:nth-child(3) {
      animation-delay: 0;
    }
  }
`,_E=Ci`
  to {
    transform: rotate(360deg);
  }
`;k.div`
  width: 100%;
  height: 5rem;
  place-items: center;
`;k.div`
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-top-color: var(--primary-color, #3498db);
  border-radius: 50%;
  animation: ${_E} 0.6s linear infinite;
  margin-left: 8px;
`;const VM=k.button`
  background: transparent;
  color: var(--primary-light);
  border: 2px solid var(--primary-light);
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 150px;
  margin-top: 2rem;

  &:hover {
    background: var(--primary-light);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    min-width: 120px;
  }
`,QM=k.label`
  font-size: 0.875rem;
  color: #666;
  padding: 0 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding-left: ${({isRTL:a})=>a?"3px":"1rem"};
  padding-right: ${({isRTL:a})=>a?"1rem":"3px"};

  ${a=>a.focused&&`
    color: #3B82F6;
  `}
`,GM=k.div`
  position: relative;
  width: 100%;
`,FM=k.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  cursor: pointer;
  outline: none;
`,$M=k.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,YM=k(K1)`
  position: absolute;
  top: 50%;
  left: ${({isRTL:a})=>a?"1rem":""};
  right: ${({isRTL:a})=>a?"":"1rem"};
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
`,XM=k.div`
  display: flex;
  justify-content: ${({isRTL:a})=>a?"right":"left"};
  gap: 12px;
  margin-top: 2rem;
  direction: ltr;
`,ZM=k.input`
  width: 45px;
  height: 50px;
  font-size: 22px;
  text-align: center;
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;k.ul`
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.5rem;
  padding-left: ${({isRTL:a})=>a?"0":"1.5rem"};
  text-align: ${({isRTL:a})=>a?"right":"left"};

  li {
    margin-bottom: 0.25rem;
  }
`;const CE=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
  background-color: #fff;
`,DE=k.div`
  width: ${({size:a})=>a||"40px"};
  height: ${({size:a})=>a||"40px"};
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,KM=k.div`
  background: #ffeacc;
  border-radius: 8px;
  font-size: 1rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-top: 1rem;
`,Hv=a=>({campaignId:a.campaignId||a.id,donationIntention:a.donationIntention?.id||a.donationIntention||null,amount:a.amount||0,donationAmountTypeId:a.donationAmountTypeId||0,numberOfShares:a.numberOfShares||0,shareValue:a.shareValue||0,isShareInSakk:a.isShareInSakk||!1,isInstallmentPayment:a.isInstallmentPayment||!1,installmentMonths:a.installmentMonths||0,sakkOwnerInfo:a.sakkOwnerInfo||null,onBehalfInfo:a.onBehalfInfo||null}),kE=a=>({id:a.id||a.donationId,donationId:a.donationId||a.id,campaignId:a.campaignId,donationIntention:a.donationIntention,amount:a.amount,donationAmountTypeId:a.donationAmountTypeId,numberOfShares:a.numberOfShares,shareValue:a.shareValue,isShareInSakk:a.isShareInSakk,isInstallmentPayment:a.isInstallmentPayment,installmentMonths:a.installmentMonths,sakkOwnerInfo:a.sakkOwnerInfo,onBehalfInfo:a.onBehalfInfo,campaign:a.campaign||{},titleAr:a.titleAr,titleEn:a.titleEn}),jE=async()=>{try{return(await Ae.get("/api/cart/get")).data}catch(a){throw console.error("Cart API Error:",a),console.error("Error response:",a.response?.data),console.error("Error status:",a.response?.status),a.response?.status===401?(console.error("User not authenticated for cart API"),new Error("User not authenticated")):new Error(a.response?.data?.message||"Failed to fetch cart items")}},Yf=async a=>{try{return(await Ae.post("/api/cart/add",a)).data}catch(o){throw console.error("Add to cart API Error:",o),new Error(o.response?.data?.message||"Failed to add item to cart")}},OE=async a=>{try{return(await Ae.post("/api/cart/remove",{itemId:a,userId:null})).data}catch(o){throw console.error("Remove from cart API Error:",o),new Error(o.response?.data?.message||"Failed to remove item from cart")}},Vv=async a=>{try{return(await Ae.post("/api/cart/update",a)).data}catch(o){throw console.error("Update cart item API Error:",o),new Error(o.response?.data?.message||"Failed to update cart item")}},ME=async a=>{try{console.log(`Starting sync of ${a.length} items to API`);const o=[];for(let d=0;d<a.length;d++){const f=a[d];try{const p=Hv(f);console.log(`Syncing item ${d+1}/${a.length}:`,p);const h=await Yf(p);o.push({status:"fulfilled",value:h}),console.log(`Successfully synced item ${d+1}`)}catch(p){console.error(`Failed to sync item ${d+1}:`,p),o.push({status:"rejected",reason:p})}}const c=o.filter(d=>d.status==="fulfilled").length,s=o.filter(d=>d.status==="rejected").length;return console.log(`Sync completed: ${c} successful, ${s} failed`),o}catch(o){throw console.error("Sync local cart to API error:",o),new Error("Failed to sync local cart to API")}},RE=(a,o)=>{const c=a.campaignId||a.id,s=o.campaignId||o.id,d=c===s,f=!!a.isShareInSakk,p=!!o.isShareInSakk,h=f===p,g=!!a.isInstallmentPayment,y=!!o.isInstallmentPayment;return d&&h&&g===y},zE=(a,o)=>a.find(c=>RE(c,o)),IE=async(a,o,c)=>{const s=zE(o,a);if(s){const d=s.amount||0,f=a.amount||0,p=d+f,h=a.shareValue||s.shareValue||1,g=Math.round(p/h),y={donationId:s.donationId||s.id,campaignId:a.campaignId||a.id,donationIntention:a.donationIntention?.id||a.donationIntention||(s.donationIntention===0?null:s.donationIntention),amount:p,donationAmountTypeId:a.donationAmountTypeId||s.donationAmountTypeId,numberOfShares:g,shareValue:a.shareValue||s.shareValue,isShareInSakk:a.isShareInSakk!==void 0?a.isShareInSakk:s.isShareInSakk,isInstallmentPayment:a.isInstallmentPayment!==void 0?a.isInstallmentPayment:s.isInstallmentPayment,installmentMonths:a.installmentMonths!==void 0&&a.installmentMonths>0?a.installmentMonths:s.installmentMonths,sakkOwnerInfo:a.sakkOwnerInfo||s.sakkOwnerInfo,onBehalfInfo:a.onBehalfInfo||s.onBehalfInfo};return c?await Vv(y):{...s,...y,id:s.id}}else{const d=Hv(a);return c?await Yf(d):{...a,id:Date.now()}}},LE=(a=!1)=>Mf({queryKey:["cart"],queryFn:jE,enabled:a,staleTime:300*1e3,cacheTime:600*1e3,retry:1,retryDelay:1e3}),NE=()=>{const a=Eo();return ns({mutationFn:Yf,onMutate:async o=>{await a.cancelQueries({queryKey:["cart"]});const c=a.getQueryData(["cart"]);return a.setQueryData(["cart"],s=>{if(!s)return s;const f=[...s.data?.items||s.items||[],o];return s.data?{...s,data:{...s.data,items:f}}:{...s,items:f}}),{previousCart:c}},onError:(o,c,s)=>{s?.previousCart&&a.setQueryData(["cart"],s.previousCart),console.error("Failed to add item to cart:",o)},onSettled:()=>{a.invalidateQueries({queryKey:["cart"]})}})},UE=()=>{const a=Eo();return ns({mutationFn:OE,onMutate:async o=>{await a.cancelQueries({queryKey:["cart"]});const c=a.getQueryData(["cart"]);return a.setQueryData(["cart"],s=>{if(!s)return s;const f=(s.data?.items||s.items||[]).filter(p=>{const h=p.donationId||p.id;return p.id!==o&&h!==o});return s.data?{...s,data:{...s.data,items:f}}:{...s,items:f}}),{previousCart:c}},onError:(o,c,s)=>{s?.previousCart&&a.setQueryData(["cart"],s.previousCart),console.error("Failed to remove item from cart:",o)},onSettled:(o,c)=>{c&&a.invalidateQueries({queryKey:["cart"]})}})},PE=()=>{const a=Eo();return ns({mutationFn:Vv,onMutate:async o=>{await a.cancelQueries({queryKey:["cart"]});const c=a.getQueryData(["cart"]);return a.setQueryData(["cart"],s=>{if(!s)return s;const f=(s.data?.items||s.items||[]).map(p=>p.id===o.donationId||p.donationId===o.donationId?o.donationIntention!==void 0?{...p,donationIntention:o.donationIntention,amount:p.amount,numberOfShares:p.numberOfShares}:{...p,...o}:p);return s.data?{...s,data:{...s.data,items:f}}:{...s,items:f}}),{previousCart:c}},onError:(o,c,s)=>{s?.previousCart&&a.setQueryData(["cart"],s.previousCart),console.error("Failed to update cart item:",o)},onSettled:(o,c,s)=>{c?a.invalidateQueries({queryKey:["cart"]}):s.donationIntention===void 0&&a.invalidateQueries({queryKey:["cart"]})}})},By=(a,o)=>{const c=a.campaignId||a.id,s=o.campaignId||o.id,d=c===s,f=!!a.isShareInSakk,p=!!o.isShareInSakk,h=f===p,g=!!a.isInstallmentPayment,y=!!o.isInstallmentPayment;return d&&h&&g===y},BE=()=>{const a=Eo();return ns({mutationFn:({item:o,cartItems:c,isAuthenticated:s})=>IE(o,c,s),onMutate:async({item:o,cartItems:c})=>{await a.cancelQueries({queryKey:["cart"]});const s=a.getQueryData(["cart"]),d=c.find(f=>By(f,o));return a.setQueryData(["cart"],f=>{if(!f)return f;const p=f.data?.items||f.items||[];let h;if(d)h=p.map(y=>{if(By(y,o)){const T=y.amount||0,x=o.amount||0,S=T+x,D=o.shareValue||y.shareValue||1,C=Math.round(S/D);return{...y,...o,amount:S,numberOfShares:C,donationId:y.donationId||d.donationId,id:y.id||d.id}}return y});else{const y={...o,id:Date.now()};h=[...p,y]}const g=h.reduce((y,T)=>y+(T.amount||0),0);return f.data?{...f,data:{...f.data,items:h,totalAmount:g}}:{...f,items:h,totalAmount:g}}),{previousCart:s,existingItem:d}},onError:(o,c,s)=>{s?.previousCart&&a.setQueryData(["cart"],s.previousCart),console.error("Failed to add or update item in cart:",o)},onSettled:()=>{a.invalidateQueries({queryKey:["cart"]})}})},qE=()=>{const a=Eo();return ns({mutationFn:ME,onSuccess:()=>{a.invalidateQueries({queryKey:["cart"]})},onError:o=>{console.error("Failed to sync local cart to API:",o)}})},HE=async a=>{const o=yo();return(await Ae.post("/api/content/projects",{page:a.page,size:a.size,filter:a.filter},{headers:{"ngo-id":o}})).data},VE=async a=>(await Ae.post(`/api/content/projects/${a.id}`)).data,QE=async()=>(await Ae.get("/api/content/yearly-reports")).data,GE=async a=>(await Ae.get("/api/content/news",{params:{page:a.page,size:a.size}})).data,FE=async a=>(await Ae.get(`/api/content/news/${a}?newsId=${a}`)).data,Xf=async()=>(await Ae.get("/api/content/carousel")).data,$E=async()=>(await Ae.get("/api/content/board-members")).data,YE=async()=>(await Ae.get("/api/volunteering/volunteers")).data,XE=async a=>(await Ae.get("/api/content/gallery-albums",a)).data,ZE=async a=>(await Ae.get("/api/content/success-stories",a)).data,KE=async a=>(await Ae.get("/api/volunteering/volunteering-opportunities",a)).data,WE=async a=>(await Ae.get(`/api/volunteering/volunteering-opportunities/${a}`)).data,JE=async({page:a,size:o})=>(await Ae.get("/api/content/partners",{params:{page:a,size:o}})).data,e_=async a=>(await Ae.get(`/api/content/partners/${a}`)).data,t_=async(a,o)=>{const c=o?"/api/donate/authenticated":"/api/donate",s=await Ae.post(c,a);return console.log("Status:",s.status),console.log("Data:",s.data),s.data},n_=async a=>(await Ae.post("/api/donations/submit-in-kind",a)).data,a_=async a=>(await Ae.post("/api/donations/complete-payment",a)).data,i_=async(a,o)=>(await Ae.post("/api/content/upload",a,{...o})).data,o_=async a=>(await Ae.post("/api/volunteering/submit-request",a)).data,r_=async()=>(await Ae.get("/api/lookup/CompanyActivities")).data.data,s_=async a=>(await Ae.post("/api/services/suppliers",a)).data,l_=async()=>(await Ae.get("/api/tenders/GetAllTenders")).data,c_=async a=>(await Ae.post("/api/auth/verify-otp",a)).data,u_=async a=>(await Ae.post("/api/Users/resend-otp",{},{params:{email:a}})).data,d_=async a=>(await Ae.post("/api/auth/forget-password",{},{params:{email:a}})).data,f_=async a=>(await Ae.post("/api/auth/reset-password",a)).data,m_=async a=>(await Ae.post("/api/users/single-reminder-anonymous",a)).data,p_=async a=>(await Ae.post("/api/users/single-reminder",a)).data,h_=async a=>(await Ae.post("/api/services/case-request",a)).data,g_=async()=>(await Ae.get("/api/users/my-cases")).data,y_=async()=>(await Ae.get("/api/Users/my-payments")).data,v_=async a=>(await Ae.get(`/api/Users/payment-details/${a}`)).data,b_=async()=>(await Ae.get("/api/Users/campaign-reminders")).data,x_=async a=>(await Ae.post("/api/users/campaign-reminders/update",a)).data,w_=async a=>(await Ae.post("/api/Users/campaign-reminders/cancel",{},{params:{campaignId:a}})).data,S_=async a=>(await Ae.post("/api/users/campaign-reminders",a)).data,Qv=async()=>(await Ae.get("/api/Users/profile")).data,T_=async a=>(await Ae.post("/api/users/update-profile",a)).data,A_=async a=>(await Ae.post("/api/services/dofe-request",a)).data,E_=async a=>(await Ae.get(`/api/ngos/${a.id}`)).data,__=async(a=1,o=8)=>(await Ae.get("/api/ngos",{},{params:{page:a,size:o}})).data,C_=async a=>(await Ae.get(`/api/content/search/${encodeURIComponent(a)}`)).data,D_=async a=>(await Ae.post("/api/content/contact-us",a)).data,Gv=async a=>(await Ae.post("/api/content/subscribe",a)).data,k_=async()=>(await Ae.get("/api/content/donation-methods")).data,j_=async a=>(await Ae.get(`/api/content/donation-methods/${a}`)).data,Fv=async()=>(await Ae.get("/api/content/seo-code")).data,O_=Object.freeze(Object.defineProperty({__proto__:null,ActivateMyCampaignsReminders:S_,CompanyActivities:r_,DeleteMyCampaignsReminders:w_,GetAllTenders:l_,GetMyCampaignsReminders:b_,GetMyNominatedCases:g_,GetMyPaymentById:v_,GetMyPayments:y_,GetUserProfile:Qv,RequestResetPassword:d_,ResendRegisterOTP:u_,ResetToken:f_,SendRegisterOTP:c_,SubmitDukeForm:A_,SubmitNominateCase:h_,SubmitSuppliers:s_,SubmitZakatAnonymousReminder:m_,SubmitZakatReminder:p_,UpdateMyCampaignsReminders:x_,UpdateUserProfile:T_,completeDonationOnlinePayment:a_,createDonation:t_,getAllNgos:__,getBoardMembers:$E,getCarousel:Xf,getDonationChannelById:j_,getDonationMethods:k_,getMediaGallery:XE,getNews:GE,getNewsById:FE,getNgoById:E_,getPartnerById:e_,getPartners:JE,getProjects:HE,getProjectsById:VE,getReports:QE,getSEOCode:Fv,getSuccessStories:ZE,getVolOpportunities:KE,getVolOpportunityById:WE,getVolunteers:YE,searchContent:C_,submitContactUs:D_,submitInKindDonationNew:n_,submitVolunteerRequest:o_,subscribeToNewsletter:Gv,uploadAttachments:i_},Symbol.toStringTag,{value:"Module"}));function $v(a){var o,c,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var d=a.length;for(o=0;o<d;o++)a[o]&&(c=$v(a[o]))&&(s&&(s+=" "),s+=c)}else for(c in a)a[c]&&(s&&(s+=" "),s+=c);return s}function Si(){for(var a,o,c=0,s="",d=arguments.length;c<d;c++)(a=arguments[c])&&(o=$v(a))&&(s&&(s+=" "),s+=o);return s}function M_(a){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",o.firstChild?o.insertBefore(c,o.firstChild):o.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}M_(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var ls=a=>typeof a=="number"&&!isNaN(a),_i=a=>typeof a=="string",ha=a=>typeof a=="function",R_=a=>_i(a)||ls(a),_f=a=>_i(a)||ha(a)?a:null,z_=(a,o)=>a===!1||ls(a)&&a>0?a:o,Cf=a=>_.isValidElement(a)||_i(a)||ha(a)||ls(a);function Yv(a,o,c=300){let{scrollHeight:s,style:d}=a;requestAnimationFrame(()=>{d.minHeight="initial",d.height=s+"px",d.transition=`all ${c}ms`,requestAnimationFrame(()=>{d.height="0",d.padding="0",d.margin="0",setTimeout(o,c)})})}function cs({enter:a,exit:o,appendPosition:c=!1,collapse:s=!0,collapseDuration:d=300}){return function({children:f,position:p,preventExitTransition:h,done:g,nodeRef:y,isIn:T,playToast:x}){let S=c?`${a}--${p}`:a,D=c?`${o}--${p}`:o,C=_.useRef(0);return _.useLayoutEffect(()=>{let R=y.current,A=S.split(" "),z=M=>{M.target===y.current&&(x(),R.removeEventListener("animationend",z),R.removeEventListener("animationcancel",z),C.current===0&&M.type!=="animationcancel"&&R.classList.remove(...A))};R.classList.add(...A),R.addEventListener("animationend",z),R.addEventListener("animationcancel",z)},[]),_.useEffect(()=>{let R=y.current,A=()=>{R.removeEventListener("animationend",A),s?Yv(R,g,d):g()};T||(h?A():(C.current=1,R.className+=` ${D}`,R.addEventListener("animationend",A)))},[T]),we.createElement(we.Fragment,null,f)}}function qy(a,o){return{content:Xv(a.content,a.props),containerId:a.props.containerId,id:a.props.toastId,theme:a.props.theme,type:a.props.type,data:a.props.data||{},isLoading:a.props.isLoading,icon:a.props.icon,reason:a.removalReason,status:o}}function Xv(a,o,c=!1){return _.isValidElement(a)&&!_i(a.type)?_.cloneElement(a,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:c}):ha(a)?a({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:c}):a}function I_({closeToast:a,theme:o,ariaLabel:c="close"}){return we.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:s=>{s.stopPropagation(),a(!0)},"aria-label":c},we.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},we.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L_({delay:a,isRunning:o,closeToast:c,type:s="default",hide:d,className:f,controlledProgress:p,progress:h,rtl:g,isIn:y,theme:T}){let x=d||p&&h===0,S={animationDuration:`${a}ms`,animationPlayState:o?"running":"paused"};p&&(S.transform=`scaleX(${h})`);let D=Si("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${T}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":g}),C=ha(f)?f({rtl:g,type:s,defaultClassName:D}):Si(D,f),R={[p&&h>=1?"onTransitionEnd":"onAnimationEnd"]:p&&h<1?null:()=>{y&&c()}};return we.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":x},we.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${T} Toastify__progress-bar--${s}`}),we.createElement("div",{role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:C,style:S,...R}))}var N_=1,Zv=()=>`${N_++}`;function U_(a,o,c){let s=1,d=0,f=[],p=[],h=o,g=new Map,y=new Set,T=M=>(y.add(M),()=>y.delete(M)),x=()=>{p=Array.from(g.values()),y.forEach(M=>M())},S=({containerId:M,toastId:w,updateId:E})=>{let L=M?M!==a:a!==1,B=g.has(w)&&E==null;return L||B},D=(M,w)=>{g.forEach(E=>{var L;(w==null||w===E.props.toastId)&&((L=E.toggle)==null||L.call(E,M))})},C=M=>{var w,E;(E=(w=M.props)==null?void 0:w.onClose)==null||E.call(w,M.removalReason),M.isActive=!1},R=M=>{if(M==null)g.forEach(C);else{let w=g.get(M);w&&C(w)}x()},A=()=>{d-=f.length,f=[]},z=M=>{var w,E;let{toastId:L,updateId:B}=M.props,Q=B==null;M.staleId&&g.delete(M.staleId),M.isActive=!0,g.set(L,M),x(),c(qy(M,Q?"added":"updated")),Q&&((E=(w=M.props).onOpen)==null||E.call(w))};return{id:a,props:h,observe:T,toggle:D,removeToast:R,toasts:g,clearQueue:A,buildToast:(M,w)=>{if(S(w))return;let{toastId:E,updateId:L,data:B,staleId:Q,delay:j}=w,F=L==null;F&&d++;let O={...h,style:h.toastStyle,key:s++,...Object.fromEntries(Object.entries(w).filter(([I,q])=>q!=null)),toastId:E,updateId:L,data:B,isIn:!1,className:_f(w.className||h.toastClassName),progressClassName:_f(w.progressClassName||h.progressClassName),autoClose:w.isLoading?!1:z_(w.autoClose,h.autoClose),closeToast(I){g.get(E).removalReason=I,R(E)},deleteToast(){let I=g.get(E);if(I!=null){if(c(qy(I,"removed")),g.delete(E),d--,d<0&&(d=0),f.length>0){z(f.shift());return}x()}}};O.closeButton=h.closeButton,w.closeButton===!1||Cf(w.closeButton)?O.closeButton=w.closeButton:w.closeButton===!0&&(O.closeButton=Cf(h.closeButton)?h.closeButton:!0);let v={content:M,props:O,staleId:Q};h.limit&&h.limit>0&&d>h.limit&&F?f.push(v):ls(j)?setTimeout(()=>{z(v)},j):z(v)},setProps(M){h=M},setToggle:(M,w)=>{let E=g.get(M);E&&(E.toggle=w)},isToastActive:M=>{var w;return(w=g.get(M))==null?void 0:w.isActive},getSnapshot:()=>p}}var Rt=new Map,ts=[],Df=new Set,P_=a=>Df.forEach(o=>o(a)),Kv=()=>Rt.size>0;function B_(){ts.forEach(a=>Jv(a.content,a.options)),ts=[]}var q_=(a,{containerId:o})=>{var c;return(c=Rt.get(o||1))==null?void 0:c.toasts.get(a)};function Wv(a,o){var c;if(o)return!!((c=Rt.get(o))!=null&&c.isToastActive(a));let s=!1;return Rt.forEach(d=>{d.isToastActive(a)&&(s=!0)}),s}function H_(a){if(!Kv()){ts=ts.filter(o=>a!=null&&o.options.toastId!==a);return}if(a==null||R_(a))Rt.forEach(o=>{o.removeToast(a)});else if(a&&("containerId"in a||"id"in a)){let o=Rt.get(a.containerId);o?o.removeToast(a.id):Rt.forEach(c=>{c.removeToast(a.id)})}}var V_=(a={})=>{Rt.forEach(o=>{o.props.limit&&(!a.containerId||o.id===a.containerId)&&o.clearQueue()})};function Jv(a,o){Cf(a)&&(Kv()||ts.push({content:a,options:o}),Rt.forEach(c=>{c.buildToast(a,o)}))}function Q_(a){var o;(o=Rt.get(a.containerId||1))==null||o.setToggle(a.id,a.fn)}function eb(a,o){Rt.forEach(c=>{(o==null||!(o!=null&&o.containerId)||o?.containerId===c.id)&&c.toggle(a,o?.id)})}function G_(a){let o=a.containerId||1;return{subscribe(c){let s=U_(o,a,P_);Rt.set(o,s);let d=s.observe(c);return B_(),()=>{d(),Rt.delete(o)}},setProps(c){var s;(s=Rt.get(o))==null||s.setProps(c)},getSnapshot(){var c;return(c=Rt.get(o))==null?void 0:c.getSnapshot()}}}function F_(a){return Df.add(a),()=>{Df.delete(a)}}function $_(a){return a&&(_i(a.toastId)||ls(a.toastId))?a.toastId:Zv()}function us(a,o){return Jv(a,o),o.toastId}function mc(a,o){return{...o,type:o&&o.type||a,toastId:$_(o)}}function pc(a){return(o,c)=>us(o,mc(a,c))}function Me(a,o){return us(a,mc("default",o))}Me.loading=(a,o)=>us(a,mc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o}));function Y_(a,{pending:o,error:c,success:s},d){let f;o&&(f=_i(o)?Me.loading(o,d):Me.loading(o.render,{...d,...o}));let p={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(y,T,x)=>{if(T==null){Me.dismiss(f);return}let S={type:y,...p,...d,data:x},D=_i(T)?{render:T}:T;return f?Me.update(f,{...S,...D}):Me(D.render,{...S,...D}),x},g=ha(a)?a():a;return g.then(y=>h("success",s,y)).catch(y=>h("error",c,y)),g}Me.promise=Y_;Me.success=pc("success");Me.info=pc("info");Me.error=pc("error");Me.warning=pc("warning");Me.warn=Me.warning;Me.dark=(a,o)=>us(a,mc("default",{theme:"dark",...o}));function X_(a){H_(a)}Me.dismiss=X_;Me.clearWaitingQueue=V_;Me.isActive=Wv;Me.update=(a,o={})=>{let c=q_(a,o);if(c){let{props:s,content:d}=c,f={delay:100,...s,...o,toastId:o.toastId||a,updateId:Zv()};f.toastId!==a&&(f.staleId=a);let p=f.render||d;delete f.render,us(p,f)}};Me.done=a=>{Me.update(a,{progress:1})};Me.onChange=F_;Me.play=a=>eb(!0,a);Me.pause=a=>eb(!1,a);function Z_(a){var o;let{subscribe:c,getSnapshot:s,setProps:d}=_.useRef(G_(a)).current;d(a);let f=(o=_.useSyncExternalStore(c,s,s))==null?void 0:o.slice();function p(h){if(!f)return[];let g=new Map;return a.newestOnTop&&f.reverse(),f.forEach(y=>{let{position:T}=y.props;g.has(T)||g.set(T,[]),g.get(T).push(y)}),Array.from(g,y=>h(y[0],y[1]))}return{getToastToRender:p,isToastActive:Wv,count:f?.length}}function K_(a){let[o,c]=_.useState(!1),[s,d]=_.useState(!1),f=_.useRef(null),p=_.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:g,closeToast:y,onClick:T,closeOnClick:x}=a;Q_({id:a.toastId,containerId:a.containerId,fn:c}),_.useEffect(()=>{if(a.pauseOnFocusLoss)return S(),()=>{D()}},[a.pauseOnFocusLoss]);function S(){document.hasFocus()||z(),window.addEventListener("focus",A),window.addEventListener("blur",z)}function D(){window.removeEventListener("focus",A),window.removeEventListener("blur",z)}function C(Q){if(a.draggable===!0||a.draggable===Q.pointerType){M();let j=f.current;p.canCloseOnClick=!0,p.canDrag=!0,j.style.transition="none",a.draggableDirection==="x"?(p.start=Q.clientX,p.removalDistance=j.offsetWidth*(a.draggablePercent/100)):(p.start=Q.clientY,p.removalDistance=j.offsetHeight*(a.draggablePercent===80?a.draggablePercent*1.5:a.draggablePercent)/100)}}function R(Q){let{top:j,bottom:F,left:O,right:v}=f.current.getBoundingClientRect();Q.nativeEvent.type!=="touchend"&&a.pauseOnHover&&Q.clientX>=O&&Q.clientX<=v&&Q.clientY>=j&&Q.clientY<=F?z():A()}function A(){c(!0)}function z(){c(!1)}function M(){p.didMove=!1,document.addEventListener("pointermove",E),document.addEventListener("pointerup",L)}function w(){document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",L)}function E(Q){let j=f.current;if(p.canDrag&&j){p.didMove=!0,o&&z(),a.draggableDirection==="x"?p.delta=Q.clientX-p.start:p.delta=Q.clientY-p.start,p.start!==Q.clientX&&(p.canCloseOnClick=!1);let F=a.draggableDirection==="x"?`${p.delta}px, var(--y)`:`0, calc(${p.delta}px + var(--y))`;j.style.transform=`translate3d(${F},0)`,j.style.opacity=`${1-Math.abs(p.delta/p.removalDistance)}`}}function L(){w();let Q=f.current;if(p.canDrag&&p.didMove&&Q){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance){d(!0),a.closeToast(!0),a.collapseAll();return}Q.style.transition="transform 0.2s, opacity 0.2s",Q.style.removeProperty("transform"),Q.style.removeProperty("opacity")}}let B={onPointerDown:C,onPointerUp:R};return h&&g&&(B.onMouseEnter=z,a.stacked||(B.onMouseLeave=A)),x&&(B.onClick=Q=>{T&&T(Q),p.canCloseOnClick&&y(!0)}),{playToast:A,pauseToast:z,isRunning:o,preventExitTransition:s,toastRef:f,eventHandlers:B}}var W_=typeof window<"u"?_.useLayoutEffect:_.useEffect,hc=({theme:a,type:o,isLoading:c,...s})=>we.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:a==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s});function J_(a){return we.createElement(hc,{...a},we.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function eC(a){return we.createElement(hc,{...a},we.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function tC(a){return we.createElement(hc,{...a},we.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function nC(a){return we.createElement(hc,{...a},we.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function aC(){return we.createElement("div",{className:"Toastify__spinner"})}var ac={info:eC,warning:J_,success:tC,error:nC,spinner:aC},iC=a=>a in ac;function oC({theme:a,type:o,isLoading:c,icon:s}){let d=null,f={theme:a,type:o};return s===!1||(ha(s)?d=s({...f,isLoading:c}):_.isValidElement(s)?d=_.cloneElement(s,f):c?d=ac.spinner():iC(o)&&(d=ac[o](f))),d}var rC=a=>{let{isRunning:o,preventExitTransition:c,toastRef:s,eventHandlers:d,playToast:f}=K_(a),{closeButton:p,children:h,autoClose:g,onClick:y,type:T,hideProgressBar:x,closeToast:S,transition:D,position:C,className:R,style:A,progressClassName:z,updateId:M,role:w,progress:E,rtl:L,toastId:B,deleteToast:Q,isIn:j,isLoading:F,closeOnClick:O,theme:v,ariaLabel:I}=a,q=Si("Toastify__toast",`Toastify__toast-theme--${v}`,`Toastify__toast--${T}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":O}),J=ha(R)?R({rtl:L,position:C,type:T,defaultClassName:q}):Si(q,R),se=oC(a),$=!!E||!g,H={closeToast:S,type:T,theme:v},N=null;return p===!1||(ha(p)?N=p(H):_.isValidElement(p)?N=_.cloneElement(p,H):N=I_(H)),we.createElement(D,{isIn:j,done:Q,position:C,preventExitTransition:c,nodeRef:s,playToast:f},we.createElement("div",{id:B,tabIndex:0,onClick:y,"data-in":j,className:J,...d,style:A,ref:s,...j&&{role:w,"aria-label":I}},se!=null&&we.createElement("div",{className:Si("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!F})},se),Xv(h,a,!o),N,!a.customProgressBar&&we.createElement(L_,{...M&&!$?{key:`p-${M}`}:{},rtl:L,theme:v,delay:g,isRunning:o,isIn:j,closeToast:S,hide:x,type:T,className:z,controlledProgress:$,progress:E||0})))},gc=(a,o=!1)=>({enter:`Toastify--animate Toastify__${a}-enter`,exit:`Toastify--animate Toastify__${a}-exit`,appendPosition:o}),tb=cs(gc("bounce",!0)),sC=cs(gc("slide",!0)),lC=cs(gc("zoom")),cC=cs(gc("flip")),uC={position:"top-right",transition:tb,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:a=>a.altKey&&a.code==="KeyT"};function dC(a){let o={...uC,...a},c=a.stacked,[s,d]=_.useState(!0),f=_.useRef(null),{getToastToRender:p,isToastActive:h,count:g}=Z_(o),{className:y,style:T,rtl:x,containerId:S,hotKeys:D}=o;function C(A){let z=Si("Toastify__toast-container",`Toastify__toast-container--${A}`,{"Toastify__toast-container--rtl":x});return ha(y)?y({position:A,rtl:x,defaultClassName:z}):Si(z,_f(y))}function R(){c&&(d(!0),Me.play())}return W_(()=>{var A;if(c){let z=f.current.querySelectorAll('[data-in="true"]'),M=12,w=(A=o.position)==null?void 0:A.includes("top"),E=0,L=0;Array.from(z).reverse().forEach((B,Q)=>{let j=B;j.classList.add("Toastify__toast--stacked"),Q>0&&(j.dataset.collapsed=`${s}`),j.dataset.pos||(j.dataset.pos=w?"top":"bot");let F=E*(s?.2:1)+(s?0:M*Q);j.style.setProperty("--y",`${w?F:F*-1}px`),j.style.setProperty("--g",`${M}`),j.style.setProperty("--s",`${1-(s?L:0)}`),E+=j.offsetHeight,L+=.025})}},[s,g,c]),_.useEffect(()=>{function A(z){var M;let w=f.current;D(z)&&((M=w.querySelector('[tabIndex="0"]'))==null||M.focus(),d(!1),Me.pause()),z.key==="Escape"&&(document.activeElement===w||w!=null&&w.contains(document.activeElement))&&(d(!0),Me.play())}return document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A)}},[D]),we.createElement("section",{ref:f,className:"Toastify",id:S,onMouseEnter:()=>{c&&(d(!1),Me.pause())},onMouseLeave:R,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":o["aria-label"]},p((A,z)=>{let M=z.length?{...T}:{...T,pointerEvents:"none"};return we.createElement("div",{tabIndex:-1,className:C(A),"data-stacked":c,style:M,key:`c-${A}`},z.map(({content:w,props:E})=>we.createElement(rC,{...E,stacked:c,collapseAll:R,isIn:h(E.toastId,E.containerId),key:`t-${E.key}`},w)))}))}const fC=Object.freeze(Object.defineProperty({__proto__:null,Bounce:tb,Flip:cC,Icons:ac,Slide:sC,ToastContainer:dC,Zoom:lC,collapseToast:Yv,cssTransition:cs,toast:Me},Symbol.toStringTag,{value:"Module"})),xi="isLoggedIn",nb="tokenExpiry",ab=_.createContext(),Zf=()=>{const a=_.useContext(ab);if(!a)throw new Error("useAuth must be used within an AuthProvider");return a},mC=()=>{const a=sessionStorage.getItem(xi),o=Un.get(xi);return(!a||a==="undefined")&&sessionStorage.removeItem(xi),(!o||o==="undefined")&&Un.remove(xi),a||o},Hy=()=>{Un.remove(xi),Un.remove(nb)},pC=({children:a})=>{const{t:o}=tn(),[c,s]=_.useState(!1),[d,f]=_.useState(null),[p,h]=_.useState(!0),g=Eo(),{data:y,isLoading:T,error:x,refetch:S}=Mf({queryKey:["userProfile"],queryFn:Qv,enabled:c,retry:1,staleTime:300*1e3});_.useEffect(()=>{(()=>{mC()?(s(!0),h(!1)):(Hy(),s(!1),f(null),h(!1))})()},[]),_.useEffect(()=>{y&&c&&f(y)},[y,c]),_.useEffect(()=>{x&&c&&console.warn("Failed to fetch user profile:",x)},[x,c]);const D=_.useCallback((M,w,E=24)=>{const L=new Date(Date.now()+E*60*60*1e3);w?(Un.set(xi,M,{expires:E/24}),Un.set(nb,L.toISOString(),{expires:E/24})):sessionStorage.setItem(xi,M),s(!0),S()},[]),C=_.useCallback(()=>{Hy(),s(!1),f(null),g.removeQueries({queryKey:["userProfile"]})},[]),R=_.useCallback(async(M,w)=>{const E=new FormData;E.append("file",M),(await Ae.post("/api/users/update-profile-image",E,{headers:{"Content-Type":null},onUploadProgress:B=>{if(w&&B.total){const Q=Math.round(B.loaded*100/B.total);w(Q)}}})).status===200?(Me.success(o("profile.imageUploadSuccess")),S()):Me.error(o("profile.imageUploadError"))},[d]),A=_.useCallback(async M=>{(await Ae.post("/api/users/change-password",M)).status===200?Me.success("Password changed successfully"):Me.error("Failed to change password")},[]),z=_.useMemo(()=>({isAuthenticated:c,user:d,loading:p||c&&T,isUserProfileLoading:T,userProfile:y,userProfileError:x,refetchUserProfile:S,login:D,logout:C,updateUserImage:R,changePassword:A}),[c,d,p,T,y,x,S,D,C,R,A]);return u.jsx(ab.Provider,{value:z,children:a})},ib=_.createContext(),hC=({children:a})=>{const[o,c]=_.useState({orderId:0,totalAmount:0,loading:!1,items:[]}),[s,d]=_.useState(!1),[f,p]=_.useState(!1),[h,g]=_.useState(!1),[y,T]=_.useState(!1),x=_.useRef(!1),{isAuthenticated:S}=Zf();x.current=S;const D=_.useCallback((H,N)=>{const P=H.campaignId||H.id,X=N.campaignId||N.id,Z=P===X,ce=!!H.isShareInSakk,ae=!!N.isShareInSakk,oe=ce===ae,te=!!H.isInstallmentPayment,fe=!!N.isInstallmentPayment;return Z&&oe&&te===fe},[]),{data:C,isLoading:R}=LE(S),A=NE(),z=UE(),M=PE(),w=BE(),E=qE();_.useEffect(()=>{if(S)p(!0);else{T(!1);const H=()=>{if(x.current){p(!0);return}const N=localStorage.getItem("cart");if(N)try{const P=JSON.parse(N);P&&P.items&&Array.isArray(P.items)&&c({orderId:P.orderId||0,totalAmount:P.totalAmount||P.items.reduce((X,Z)=>X+(Z.amount||0),0),items:P.items,loading:!1})}catch{c({orderId:0,totalAmount:0,items:[],loading:!1})}else c({orderId:0,totalAmount:0,items:[],loading:!1});p(!0)};typeof window<"u"&&window.requestIdleCallback?window.requestIdleCallback(H,{timeout:500}):setTimeout(H,0)}},[S]),_.useEffect(()=>{(async()=>{if(S)if(C?.data){const N=C.data,P=N.items??N.donations??[];if(!y&&(()=>{try{const ae=localStorage.getItem("cart");if(!ae)return!1;const oe=JSON.parse(ae);return Array.isArray(oe?.items)&&oe.items.length>0}catch{return!1}})()&&P.length===0)return;const Z=Array.isArray(P)?P.map(ae=>kE(ae)):[],ce=N.totalAmount??Z.reduce((ae,oe)=>ae+(oe.amount||0),0);c({orderId:N.orderId||0,totalAmount:ce,items:Z,loading:!1})}else!R&&!C&&c({orderId:0,totalAmount:0,items:[],loading:!1});else{const N=localStorage.getItem("cart");if(N)try{const P=JSON.parse(N);P&&P.items&&Array.isArray(P.items)&&c({orderId:P.orderId||0,totalAmount:P.totalAmount||P.items.reduce((X,Z)=>X+(Z.amount||0),0),items:P.items,loading:!1})}catch{c({orderId:0,totalAmount:0,items:[],loading:!1})}else c({orderId:0,totalAmount:0,items:[],loading:!1})}})()},[S,C,R,y]),_.useEffect(()=>{!f||S||(o.items.length>0||o.totalAmount===0)&&localStorage.setItem("cart",JSON.stringify({orderId:o.orderId,totalAmount:o.totalAmount,items:o.items}))},[o,f,S]),_.useEffect(()=>{(async()=>{if(S&&f&&!y&&!h){const N=localStorage.getItem("cart");if(N)try{const P=JSON.parse(N);if(P&&P.items&&Array.isArray(P.items)&&P.items.length>0){g(!0);try{const X=P.items.reduce((Z,ce)=>{const ae=Z.findIndex(oe=>D(oe,ce));if(ae===-1)Z.push(ce);else{const oe=Z[ae];Z[ae]={...oe,amount:(oe.amount||0)+(ce.amount||0),numberOfShares:(oe.numberOfShares||0)+(ce.numberOfShares||0)}}return Z},[]);await E.mutateAsync(X),localStorage.removeItem("cart"),T(!0)}catch{}finally{g(!1)}}else T(!0)}catch{T(!0)}else T(!0)}})()},[S,f,y,h,D,E]);const L=_.useCallback(async H=>{const N=Number(H.amount),P=Number(H.shareValue),X=Number(H.installmentMonths)||1,Z=!!(H.isInstallmentPayment&&X>1),ce=(Z&&X>1,N),ae=Z&&X>1?N*X:N,oe=H.numberOfShares||(P>0&&!isNaN(ae)&&!isNaN(P)?Math.round(ae/P):1),te={...H,numberOfShares:oe,amount:ce,installmentMonths:X};if(S)try{await w.mutateAsync({item:te,cartItems:o.items,isAuthenticated:!0});const fe=window.dataLayer||[],ue=document.documentElement.dir==="rtl"||document.documentElement.lang==="ar";fe.push({event:"add_to_cart",ecommerce:{currency:"EGP",value:te.amount||0,items:[{item_id:te.campaignId||te.id,item_name:ue?te?.campaign?.titleAr||te?.titleAr:te?.campaign?.titleEn||te?.titleEn,item_category:"donation",price:te.amount||0,quantity:te.numberOfShares||1}]}})}catch(fe){throw fe}else{const fe=o.items.find(xe=>D(xe,te)),ue=window.dataLayer||[],Ee=document.documentElement.dir==="rtl"||document.documentElement.lang==="ar";fe?(c(xe=>{const me=xe.items.map(Xe=>{if(Xe.id===fe.id){const Ze=Xe.amount||0,Je=te.amount||0,Ke=Ze+Je,vt=te.shareValue||Xe.shareValue||1,Gt=Math.round(Ke/vt);return{...Xe,amount:Ke,numberOfShares:Gt}}return Xe}),ke=me.reduce((Xe,Ze)=>Xe+Ze.amount,0);return{...xe,totalAmount:ke,items:me}}),ue.push({event:"add_to_cart",ecommerce:{currency:"EGP",value:te.amount||0,items:[{item_id:te.campaignId||te.id,item_name:Ee?te?.campaign?.titleAr||te?.titleAr:te?.campaign?.titleEn||te?.titleEn,item_category:"donation",price:te.amount||0,quantity:te.numberOfShares||1}]}})):(c(xe=>{const me={...te,campaignId:te.campaignId||te.campaign.id,id:Date.now()},ke=[...xe.items,me],Xe=ke.reduce((Ze,Je)=>Ze+Je.amount,0);return{...xe,totalAmount:Xe,items:ke}}),ue.push({event:"add_to_cart",ecommerce:{currency:"EGP",value:te.amount||0,items:[{item_id:te.campaignId||te.id,item_name:Ee?te?.campaign?.titleAr||te?.titleAr:te?.campaign?.titleEn||te?.titleEn,item_category:"donation",price:te.amount||0,quantity:te.numberOfShares||1}]}}))}},[S,o.items,w,D]),B=async H=>{const N=Number(H.amount),P=Number(H.shareValue),X=Number(H.installmentMonths)||1,Z=!!(H.isInstallmentPayment&&X>1),ce=(Z&&X>1,N),ae=Z&&X>1?N*X:N,oe=P>0&&!isNaN(ae)&&!isNaN(P)?Math.round(ae/P):1,te={...H,numberOfShares:oe,amount:ce,installmentMonths:X};if(S)try{await A.mutateAsync({campaignId:H.campaignId||H.id,donationIntention:H.donationIntention?.id||H.donationIntention||null,amount:H.amount||P*oe,donationAmountTypeId:H.donationAmountTypeId||0,numberOfShares:H.numberOfShares||0,shareValue:H.shareValue||0,isShareInSakk:H.isShareInSakk||!1,isInstallmentPayment:H.isInstallmentPayment||!1,installmentMonths:H.installmentMonths||0,sakkOwnerInfo:H.sakkOwnerInfo||null,onBehalfInfo:H.onBehalfInfo||null})}catch(fe){throw fe}else{const fe=o.items.find(ue=>D(ue,te));c(fe?ue=>{const Ee=ue.items.map(me=>{if(me.id===fe.id){const ke=me.amount||0,Xe=te.amount||0,Ze=ke+Xe,Je=te.shareValue||me.shareValue||1,Ke=Math.round(Ze/Je);return{...me,amount:Ze,numberOfShares:Ke}}return me}),xe=Ee.reduce((me,ke)=>me+ke.amount,0);return{...ue,totalAmount:xe,items:Ee}}:ue=>{const Ee=[...ue.items,te],xe=Ee.reduce((me,ke)=>me+ke.amount,0);return{...ue,totalAmount:xe,items:Ee}})}},Q=async H=>{if(S)try{const N=o.items.find(X=>X.id===H),P=N?.donationId||N?.id||H;await z.mutateAsync(P),c(X=>{const Z=X.items.filter(ce=>ce.id!==H);return{...X,totalAmount:Z.reduce((ce,ae)=>ce+ae.amount,0),items:Z}})}catch(N){throw N}else c(N=>{const P=N.items.filter(X=>X.id!==H);return{...N,totalAmount:P.reduce((X,Z)=>X+Z.amount,0),items:P}})},j=async H=>{if(S){const N=o.items.find(P=>P.id===H);if(N)try{let P=Number(N.campaign?.basePrice||N.shareValue||0);if(!P||P<=0){const xe=Math.max(1,Number(N.numberOfShares)||1);P=Number(N.amount||0)/xe}const X=N.campaign?.campaignTypeId,Z=Math.max(1,Number(N.numberOfShares)||1),ce=Number(N.amount)||0,ae=Math.max(0,Math.round(ce+P)),oe=Math.max(1,Math.round(ae/P)),te=X===4?Math.min(7,oe):oe,fe=Math.round(te*P),ue=!(X===4&&Z>=7),Ee=N.installmentMonths||1;await M.mutateAsync({donationId:H,campaignId:N.campaignId,donationIntention:N.donationIntention||null,amount:ue?fe:ce,donationAmountTypeId:N.donationAmountTypeId||0,numberOfShares:ue?te:Z,shareValue:P,isShareInSakk:N.isShareInSakk||!1,isInstallmentPayment:N.isInstallmentPayment||!1,installmentMonths:Ee,sakkOwnerInfo:N.sakkOwnerInfo||null,onBehalfInfo:N.onBehalfInfo||null}),c(xe=>{const me=xe.items.map(ke=>ke.id===H?{...ke,numberOfShares:ue?te:Z,amount:ue?fe:ce,installmentMonths:Ee}:ke);return{...xe,totalAmount:me.reduce((ke,Xe)=>ke+Xe.amount,0),items:me}})}catch(P){throw P}}else c(N=>{const P=N.items.map(X=>{if(X.id===H){let Z=Number(X.campaign?.basePrice||X.shareValue||0);if(!Z||Z<=0){const ke=Math.max(1,Number(X.numberOfShares)||1);Z=Number(X.amount||0)/ke}const ce=X.campaign?.campaignTypeId,ae=Math.max(1,Number(X.numberOfShares)||1),oe=Number(X.amount)||0,te=Math.max(0,Math.round(oe+Z)),fe=Math.max(1,Math.round(te/Z)),ue=ce===4?Math.min(7,fe):fe,Ee=Math.round(ue*Z),xe=!(ce===4&&ae>=7),me=X.installmentMonths||1;return{...X,numberOfShares:xe?ue:ae,amount:xe?Ee:oe,installmentMonths:me}}return X});return{...N,totalAmount:P.reduce((X,Z)=>X+Z.amount,0),items:P}})},F=async H=>{if(S){const N=o.items.find(P=>P.id===H);if(N)try{let P=Number(N.campaign?.basePrice||N.shareValue||0);if(!P||P<=0){const Ee=Math.max(1,Number(N.numberOfShares)||1);P=Number(N.amount||0)/Ee}const X=Math.max(1,Number(N.numberOfShares)||1),Z=Number(N.amount)||0,ce=Math.max(0,Math.round(Z-P)),ae=Math.max(0,Math.round(P)),oe=Math.max(ae,ce),te=Math.max(1,Math.round(oe/P)),fe=Z>P,ue=N.installmentMonths||1;await M.mutateAsync({donationId:H,campaignId:N.campaignId,donationIntention:N.donationIntention||null,amount:fe?oe:Z,donationAmountTypeId:N.donationAmountTypeId||0,numberOfShares:fe?te:X,shareValue:P,isShareInSakk:N.isShareInSakk||!1,isInstallmentPayment:N.isInstallmentPayment||!1,installmentMonths:ue,sakkOwnerInfo:N.sakkOwnerInfo||null,onBehalfInfo:N.onBehalfInfo||null}),c(Ee=>{const xe=Ee.items.map(me=>me.id===H?{...me,numberOfShares:fe?te:X,amount:fe?oe:Z,installmentMonths:ue}:me);return{...Ee,totalAmount:xe.reduce((me,ke)=>me+ke.amount,0),items:xe}})}catch(P){throw P}}else c(N=>{const P=N.items.map(X=>{if(X.id===H){let Z=Number(X.campaign?.basePrice||X.shareValue||0);if(!Z||Z<=0){const me=Math.max(1,Number(X.numberOfShares)||1);Z=Number(X.amount||0)/me}const ce=Math.max(1,Number(X.numberOfShares)||1),ae=Number(X.amount)||0,oe=Math.max(0,Math.round(ae-Z)),te=Math.max(0,Math.round(Z)),fe=Math.max(te,oe),ue=Math.max(1,Math.round(fe/Z)),Ee=ae>Z,xe=X.installmentMonths||1;return{...X,numberOfShares:Ee?ue:ce,amount:Ee?fe:ae,installmentMonths:xe}}return X});return{...N,totalAmount:P.reduce((X,Z)=>X+Z.amount,0),items:P}})},O=async(H,N,P,X)=>{if(S){const Z=o.items.find(ce=>ce.id===H);if(Z){let ce,ae;if(Z.isShareInSakk){const oe=Number(Z.campaign?.basePrice||Z.shareValue||0);ce=N,ae=oe>0?Math.round(ce/oe):1,Z.campaign?.campaignTypeId===4&&ae>7&&(ae=7,ce=oe*7)}else{const oe=Number(Z.campaign?.basePrice||Z.shareValue||0);if(Z.campaign?.campaignTypeId===4&&oe>0){const fe=Math.round(N/oe)||1,ue=Math.min(7,Math.max(1,fe));ae=ue,ce=oe*ue}else ce=Number(N)||0,ae=1}X(ce),c(oe=>{const te=oe.items.map(fe=>{if(fe.id===H){const ue=fe.installmentMonths||1;return{...fe,amount:ce,numberOfShares:ae,installmentMonths:ue}}return fe});return{...oe,totalAmount:te.reduce((fe,ue)=>fe+ue.amount,0),items:te}});try{const oe=Z.installmentMonths||1;await M.mutateAsync({donationId:H,campaignId:Z.campaignId||Z.id,donationIntention:Z.donationIntention?.id||Z.donationIntention||null,amount:ce,donationAmountTypeId:Z.donationAmountTypeId||0,numberOfShares:ae,shareValue:Z.campaign?.basePrice||Z.shareValue||0,isShareInSakk:Z.isShareInSakk||!1,isInstallmentPayment:Z.isInstallmentPayment||!1,installmentMonths:oe,sakkOwnerInfo:Z.sakkOwnerInfo||null,onBehalfInfo:Z.onBehalfInfo||null})}catch(oe){throw oe}}}else c(Z=>{const ce=Z.items.map(ae=>{if(ae.id===H){let oe,te;if(ae.isShareInSakk){const ue=Number(ae.campaign?.basePrice||ae.shareValue||0);oe=N,te=ue>0?Math.round(oe/ue):1,ae.campaign?.campaignTypeId===4&&te>7&&(te=7,oe=ue*7)}else{const ue=Number(ae.campaign?.basePrice||ae.shareValue||0);if(ae.campaign?.campaignTypeId===4&&ue>0){const xe=Math.round(N/ue)||1,me=Math.min(7,Math.max(1,xe));te=me,oe=ue*me}else oe=Number(N)||0,te=1}const fe=ae.installmentMonths||1;return{...ae,amount:oe,numberOfShares:te,installmentMonths:fe}}return ae});return{...Z,totalAmount:ce.reduce((ae,oe)=>ae+oe.amount,0),items:ce}})},v=async H=>{S?(await M.mutateAsync(H),c(N=>{const P=N.items.map(X=>X.id===H.campaignId?{...X,...H}:X);return{...N,totalAmount:P.reduce((X,Z)=>X+Z.amount,0),items:P}})):c(N=>{const P=N.items.map(X=>X.campaignId===H.campaignId?{...X,...H}:X);return{...N,totalAmount:P.reduce((X,Z)=>X+Z.amount,0),items:P}})},I=async()=>{c({orderId:0,totalAmount:0,items:[]}),localStorage.removeItem("cart")},q=()=>!o.items||o.items.length===0?0:o.items.reduce((H,N)=>{const P=N.amount||0;return H+P},0),J=async(H,N)=>{if(S){const P=o.items.find(X=>X.id===H);if(P)try{const X=P.amount,Z=P.numberOfShares;await M.mutateAsync({donationId:H,campaignId:P.campaignId,donationIntention:N||null,amount:X,donationAmountTypeId:P.donationAmountTypeId||0,numberOfShares:Z,shareValue:P.shareValue||0,isShareInSakk:P.isShareInSakk||!1,isInstallmentPayment:P.isInstallmentPayment||!1,installmentMonths:P.installmentMonths||0,sakkOwnerInfo:P.sakkOwnerInfo||null,onBehalfInfo:P.onBehalfInfo||null}),c(ce=>({...ce,totalAmount:ce.totalAmount,items:ce.items.map(ae=>ae.id===H?{...ae,donationIntention:N||null,amount:X,numberOfShares:Z}:ae)}))}catch(X){throw X}}else c(P=>({...P,items:P.items.map(X=>X.id===H?{...X,donationIntention:N||null}:X)}))},se=async(H,N)=>{const P=o.items.find(te=>te.id===H);if(!P||!P.isInstallmentPayment)return;const X=Number(P?.campaign?.basePrice||P?.shareValue||0),Z=Number(P.amount)||0,oe=Math.max(X,Z);if(S)try{await M.mutateAsync({donationId:H,campaignId:P.campaignId,donationIntention:P.donationIntention?.id||P.donationIntention||null,amount:oe,donationAmountTypeId:P.donationAmountTypeId||0,numberOfShares:P.numberOfShares||1,shareValue:X,isShareInSakk:P.isShareInSakk||!1,isInstallmentPayment:P.isInstallmentPayment||!1,installmentMonths:N,sakkOwnerInfo:P.sakkOwnerInfo||null,onBehalfInfo:P.onBehalfInfo||null}),c(te=>({...te,items:te.items.map(fe=>fe.id===H?{...fe,installmentMonths:N,amount:oe}:fe),totalAmount:te.items.reduce((fe,ue)=>{const Ee=ue.id===H?oe:ue.amount||0;return fe+Ee},0)}))}catch(te){throw te}else c(te=>({...te,items:te.items.map(fe=>fe.id===H?{...fe,installmentMonths:N,amount:oe}:fe),totalAmount:te.items.reduce((fe,ue)=>{const Ee=ue.id===H?oe:ue.amount||0;return fe+Ee},0)}))},$=_.useMemo(()=>({cartItems:o,addToCart:B,addOrUpdateCartItem:L,removeFromCart:Q,updateQuantity:j,decreaseQuantity:F,updatePrice:O,clearCart:I,getTotalPrice:q,isDrawerOpen:s,setIsDrawerOpen:d,updateDonationIntention:J,isLoadingCart:R,isAuthenticated:S,updateCartItem:v,isSyncing:h,updateInstallmentMonths:se}),[o,B,L,Q,j,F,O,I,q,s,d,J,R,S,v,h,se]);return f?u.jsx(ib.Provider,{value:$,children:a}):null};function gC({location:a}){return _.useEffect(()=>{typeof performance<"u"&&performance.mark&&a?.pathname&&performance.mark(`route-render:${a.pathname}`),window.scrollTo(0,0)},[a?.pathname]),null}const Kf=we.memo(gC),yC=k.div`
  position: relative;
  direction: ltr;
`,vC=k.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: #d1d5db;
  }

`,bC=k.span`
  font-weight: 500;
  font-size: 1rem;
  min-width: 40px;
  text-align: center;
`,ob=()=>{const{i18n:a}=tn(),o=a&&typeof a.changeLanguage=="function"?a:Nn,c=o.resolvedLanguage||o.language||"ar",s=()=>{const d=c==="ar"?"en":"ar";o&&typeof o.changeLanguage=="function"?o.changeLanguage(d).catch(f=>{console.error("Error changing language:",f)}):console.error("i18n.changeLanguage is not available")};return _.useEffect(()=>{const d=document.querySelector("main");d&&(d.dir=c==="ar"?"rtl":"ltr")},[c]),u.jsx(yC,{children:u.jsxs(vC,{onClick:s,title:`Switch to ${c==="ar"?"English":"العربية"}`,children:[u.jsx(W1,{size:25}),u.jsx(bC,{children:c==="ar"?"English":"عربي"})]})})},xC=Ci`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,wC=Ci`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`,SC=Ci`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,TC=Ci`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,AC=k.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20dvh;
  z-index: 10000;
  animation: ${a=>a.isClosing?TC:SC} 0.3s ease-in-out;
`,EC=k.div`
  background: white;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  width: 90%;
  max-width: 90%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  position: relative;
  animation: ${a=>a.isClosing?wC:xC} 0.4s ease-out;
  transform-origin: top center;
`,_C=k.button`
  ${""}
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: all 0.2s ease;
  font-size: 1.2rem;
  flex-direction: ${a=>a.isRTL?"row-reverse":"row"};

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`,CC=k.span`
  font-size: 0.875rem;
  margin: ${a=>a.isRTL?"0 0 0 0.5rem":"0 0.5rem 0 0"};
  color: #6b7280;
`,DC=k.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${""}
  flex-direction: ${a=>a.isRTL?"row-reverse":"row"};
`,kC=k.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;
  direction: ${a=>a.isRTL?"rtl":"ltr"};
  text-align: ${a=>a.isRTL?"right":"left"};

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #D9D9D9;
  }
`,jC=k.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
  min-width: 120px;
  justify-content: center;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }
`,OC=k.div`
  font-size: 1.2rem;
`,MC=({isOpen:a,onClose:o})=>{const[c,s]=_.useState(""),[d,f]=_.useState(!1),p=_.useRef(null),h=as(),{i18n:g}=tn(),y=g.resolvedLanguage==="ar";_.useEffect(()=>{a&&p.current&&setTimeout(()=>{p.current?.focus()},100)},[a]),_.useEffect(()=>{const C=R=>{R.key==="Escape"&&T()};return a&&(document.addEventListener("keydown",C),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",C),document.body.style.overflow="unset"}},[a]);const T=()=>{f(!0),setTimeout(()=>{o(),f(!1),s("")},300)},x=C=>{C.preventDefault(),c.trim()&&(T(),h({to:"/search",search:{query:c.trim()}}))},S=C=>{s(C.target.value)},D=C=>{C.key==="Enter"&&x(C)};return a?u.jsx(AC,{isClosing:d,onClick:T,children:u.jsxs(EC,{isClosing:d,onClick:C=>C.stopPropagation(),children:[u.jsxs(_C,{onClick:T,isRTL:y,children:[u.jsx(CC,{isRTL:y,children:y?"غلق":"Close"}),u.jsx(q0,{})]}),u.jsx("form",{onSubmit:x,style:{width:"90%"},children:u.jsxs(DC,{isRTL:y,children:[y?"بحث":"Search",u.jsx(kC,{ref:p,type:"text",value:c,onChange:S,onKeyPress:D,placeholder:y?"كلمة البحث":"Search Keyword",isRTL:y}),u.jsx(jC,{type:"submit",children:u.jsx(OC,{children:u.jsx(H0,{})})})]})})]})}):null},RC=k.div.withConfig({shouldForwardProp:a=>a!=="isRTL"})`
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: ${a=>a.isRTL?"flex-start":"flex-end"};
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 0rem 2rem;
  }
`,zC=k.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`,IC=k.div`
  display: block;
  margin: 0.25rem 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: none;
  }
`,LC=k.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  width: 98%;
  overflow: hidden;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
  }
`,rb=k.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
`,Mr=k.a`
  color: white;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:hover {
    color: #D1D5DB;
  }
`,Rr=k.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,wi=k.div`
  height: 1rem;
  width: 1px;
  background-color: #D9D9D9;
  flex-shrink: 0;
`,NC=k.button`
  color: white;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:hover {
    color: #D1D5DB;
  }
`,UC=k.div`
  width: 1.25rem;
  height: 1.25rem;
  transform: scaleX(-1);
  display: flex;
  background-color: transparent;
  align-items: center;
  flex-shrink: 0;
`,PC=k.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: white;
  transition: color 0.3s ease;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    color: #D1D5DB;
  }
`,BC=k.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,qC=k.span`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`,HC=k.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin: 0.25rem 0;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  flex-wrap: wrap;
`;k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
`;const VC=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  overflow: hidden;
`,sb=k(ga)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: #D1D5DB;
  }
`,lb=({isMobile:a})=>u.jsxs(rb,{children:[u.jsx(Mr,{href:"http://instagram.com/lifemakersegy/",target:"_blank",rel:"noopener noreferrer",children:u.jsx(Rr,{children:u.jsx(Q0,{size:25,color:a?"var(--primary-color)":"white"})})}),u.jsx(Mr,{href:"https://x.com/LifeMakersEGY",target:"_blank",rel:"noopener noreferrer",children:u.jsx(Rr,{children:u.jsx(G0,{size:25,color:a?"var(--primary-color)":"white"})})}),u.jsx(Mr,{href:"https://www.facebook.com/LifeMakersEGY/",target:"_blank",rel:"noopener noreferrer",children:u.jsx(Rr,{children:u.jsx(F0,{size:25,color:a?"var(--primary-color)":"white"})})}),u.jsx(Mr,{href:"https://www.linkedin.com/company/life-makers-foundation/",target:"_blank",rel:"noopener noreferrer",children:u.jsx(Rr,{children:u.jsx($0,{size:25,color:a?"var(--primary-color)":"white"})})}),u.jsx(Mr,{href:"https://www.youtube.com/user/EgyptLifeMakers",target:"_blank",rel:"noopener noreferrer",children:u.jsx(Rr,{children:u.jsx(Y0,{color:a?"var(--primary-color)":"white",size:40})})})]}),cb=()=>u.jsxs(PC,{href:"tel:16563",children:[u.jsx(BC,{children:u.jsx(V0,{size:25})}),u.jsx(qC,{children:"16563"})]}),ub=({onClick:a})=>u.jsx(NC,{onClick:a,children:u.jsx(UC,{children:u.jsx(H0,{size:25})})}),QC=({onSearchClick:a,t:o})=>u.jsx(IC,{children:u.jsx(HC,{children:u.jsxs(VC,{children:[u.jsx(ob,{}),u.jsx(wi,{}),u.jsx(ub,{onClick:a}),u.jsx(wi,{}),u.jsx(cb,{}),u.jsx(wi,{}),u.jsx(sb,{to:"/contact-us",children:o("contactUs.title")})]})})}),GC=({onSearchClick:a,t:o})=>u.jsx(LC,{children:u.jsxs(rb,{children:[u.jsx(lb,{}),u.jsx(wi,{}),u.jsx(ob,{}),u.jsx(wi,{}),u.jsx(ub,{onClick:a}),u.jsx(wi,{}),u.jsx(cb,{}),u.jsx(wi,{}),u.jsx(sb,{to:"/contact-us",children:o("contactUs.title")})]})});function FC(){const{i18n:a,t:o}=tn(),c=a.resolvedLanguage==="ar",[s,d]=_.useState(!1),f=()=>{d(!0)},p=()=>{d(!1)};return u.jsxs(u.Fragment,{children:[u.jsx(RC,{isRTL:c,children:u.jsxs(zC,{children:[u.jsx(QC,{onSearchClick:f,t:o}),u.jsx(GC,{onSearchClick:f,t:o})]})}),u.jsx(MC,{isOpen:s,onClose:p})]})}const $C=we.memo(FC),YC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='hugeicons:calculate'%3e%3cpath%20id='Vector'%20d='M22%208.66667H16.6667M19.3333%206V11.3333M22%2021.3333H16.6667M22%2017.3333H16.6667M11.3333%2021.3333L9.00001%2019M9.00001%2019L6.66668%2016.6667M9.00001%2019L11.3333%2016.6667M9.00001%2019L6.66668%2021.3333M11.3333%208.66667H6.00001M26.6667%2015.2667V12.7333C26.6667%207.36%2026.6667%204.672%2024.812%203.00267C22.9573%201.33334%2019.972%201.33334%2014%201.33334C8.02934%201.33334%205.04268%201.33334%203.18801%203.00267C1.33334%204.672%201.33334%207.36%201.33334%2012.7333V15.2667C1.33334%2020.64%201.33334%2023.328%203.18801%2024.9973C5.04268%2026.6667%208.02801%2026.6667%2014%2026.6667C19.9707%2026.6667%2022.9573%2026.6667%2024.812%2024.9973C26.6667%2023.328%2026.6667%2020.64%2026.6667%2015.2667Z'%20stroke='%230A4976'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",XC="/ta-lm/assets/Logo-bktMpAQ6.svg",db="/ta-lm/assets/nav_cart-Cf8NDMZn.svg",Vy="data:image/svg+xml,%3csvg%20width='30'%20height='29'%20viewBox='0%200%2030%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='iconoir:profile-circle'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M15%201C7.63599%201%201.66666%206.96933%201.66666%2014.3333C1.66666%2021.6973%207.63599%2027.6667%2015%2027.6667C22.364%2027.6667%2028.3333%2021.6973%2028.3333%2014.3333C28.3333%206.96933%2022.364%201%2015%201Z'%20stroke='%230A4976'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M4.69464%2022.7947C4.69464%2022.7947%207.66664%2019%2015%2019C22.3333%2019%2025.3066%2022.7947%2025.3066%2022.7947M15%2014.3333C16.0608%2014.3333%2017.0783%2013.9119%2017.8284%2013.1618C18.5785%2012.4116%2019%2011.3942%2019%2010.3333C19%209.27247%2018.5785%208.25505%2017.8284%207.50491C17.0783%206.75476%2016.0608%206.33334%2015%206.33334C13.9391%206.33334%2012.9217%206.75476%2012.1715%207.50491C11.4214%208.25505%2011%209.27247%2011%2010.3333C11%2011.3942%2011.4214%2012.4116%2012.1715%2013.1618C12.9217%2013.9119%2013.9391%2014.3333%2015%2014.3333Z'%20stroke='%230A4976'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",yc=()=>{const a=_.useContext(ib);if(!a)throw new Error("useCart must be used within a CartProvider");return a},Yl=k(Gl)`
  font-size: 0.6rem;
`,ZC=k.header`
  background-color: rgba(245, 245, 245, 1);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90000;
  /* CLS Fix: Reserve minimum height to prevent layout shift */
  min-height: 64px;
  will-change: transform;
`,KC=k.div.withConfig({shouldForwardProp:a=>a!=="isRTL"})`
  max-width: 98%;
  margin: 0 auto;
  direction: ${a=>a.isRTL?"ltr":"rtl"};
  padding: 0.5rem 2rem;
`,Wf=k.div.withConfig({shouldForwardProp:a=>a!=="isRTL"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: ${({isRTL:a})=>a?"flex-end":"flex-start"};
    justify-content: center;
  }
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`,WC=k.div`
  display: none;
  color: var(--primary-color);
  font-size: 1.5rem;
  border: 1px solid transparent;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: transparent;

  &:active {
    background-color: #e5e7eb;
    border-color: #d1d5db;
  }

  @media (max-width: 1150px) {
    display: block;
  }
`,JC=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 4000;
  @media (min-width: 1150px) {
    width: auto;
  }
`,eD=k(ga)`
  display: flex;
  align-items: center;
  ${""}
  user-select: none;

  @media (min-width: 768px) {
    margin: 0;
  }
`,tD=k.img`
  /* CLS Fix: Set explicit dimensions to prevent layout shift */
  width: auto;
  height: 50px;
  max-height: 50px;
  object-fit: contain;
  aspect-ratio: 2.5 / 1; /* Maintain logo aspect ratio */

  @media (min-width: 640px) {
    height: 35px;
    max-height: 35px;
  }

  @media (min-width: 768px) {
    height: 40px;
    max-height: 40px;
  }

  @media (min-width: 1150px) {
    height: 80px;
    max-height: 80px;
  }
`,Jf=k.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  @media (min-width: 640px) {
    gap: 0.5rem;
  }
`,nD=k.span.withConfig({shouldForwardProp:a=>a!=="isRTL"})`
  /* CLS Fix: Reserve space to prevent layout shift when amount changes */
  font-size: 0.75rem;
  direction: ${a=>a.isRTL?"rtl":"ltr"};
  text-wrap: nowrap;
  white-space: nowrap;
  min-width: 60px; /* Reserve minimum width for price display */
  display: inline-block;
  text-align: ${a=>a.isRTL?"right":"left"};
  
  @media (min-width: 640px) {
    font-size: 0.9rem;
    min-width: 80px;
  }
  
  @media (min-width: 1400px) {
    font-size: 1.1rem;
    min-width: 100px;
  }
`,aD=k.button`
  position: relative;
  user-select: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;

  ${Jf}:hover & {
    transform: scale(1.05);
  }
`,fb=k.img`
  /* CLS Fix: Explicit dimensions prevent layout shift */
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  display: block;
  object-fit: contain;

  @media (min-width: 640px) {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
  }

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
    min-width: 25px;
    min-height: 25px;
  }

  ${Jf}:hover & {
    color: #4b5563;
  }
`,iD=k.span`
  /* CLS Fix: Always reserve space to prevent layout shift */
  position: absolute;
  top: 0.25rem;
  right: -0.5rem;
  background-color: var(--secondary-color);
  color: var(--primary-light);
  border-radius: 9999px;
  width: 1rem;
  height: 1rem;
  min-width: 1rem;
  min-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  /* Reserve space even when hidden to prevent CLS */
  pointer-events: none;

  @media (min-width: 640px) {
    right: 0rem;
    width: 1rem;
    height: 1rem;
    min-width: 1rem;
    min-height: 1rem;
    font-size: 0.75rem;
  }
`,oD=k(ga)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  @media (min-width: 640px) {
    gap: 0.5rem;
  }
`,rD=k.span`
  font-size: 0.875rem;
  white-space: nowrap;
  @media (min-width: 640px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1400px) {
    font-size: 1rem;
  }
`;k(ga)`
  position: relative;
  user-select: none;
`;const sD=k.img`
  /* CLS Fix: Explicit dimensions prevent layout shift */
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
  display: block;
  object-fit: contain;

  &:hover {
    color: #4b5563;
  }
`,Qy=k.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  position: relative;

  @media (min-width: 640px) {
    gap: 0.5rem;
  }
`,Gy=k.span`
  /* CLS Fix: Reserve minimum width to prevent layout shift when text changes */
  font-size: 0.875rem;
  white-space: nowrap;
  direction: ${a=>a.isRTL?"rtl":"ltr"};
  min-width: 60px; /* Reserve space for "Login" or welcome message */
  display: inline-block;
  text-align: ${a=>a.isRTL?"right":"left"};
  
  @media (min-width: 640px) {
    font-size: 0.9rem;
    min-width: 80px;
  }
  
  @media (min-width: 1400px) {
    font-size: 1rem;
    min-width: 100px;
  }
`,lD=k.button`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 0.25rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Fy=k.img`
  /* CLS Fix: Explicit dimensions prevent layout shift */
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
  display: block;
  object-fit: contain;
  flex-shrink: 0;

  &:hover {
    color: #4b5563;
  }
`,cD=k.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  padding: 0.5rem 0;
  min-width: 200px;
  z-index: 1000;
  margin-top: 0.5rem;
`,yi=k.button.withConfig({shouldForwardProp:a=>a!=="isRTL"})`
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  color: #000;
  font-size: 0.875rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
  text-align: ${({isRTL:a})=>a?"right":"left"};

  &:hover {
    background-color: #f3f4f6;
  }

  &.logout {
    color: #dc2626;
  }

  &.logout:hover {
    background-color: #fef2f2;
  }
`,$y=k.div`
  height: 70px;
  width: 1px;
  background-color: #d9d9d9;
  @media (max-width: 768px) {
    height: 1px;
    width: 100%;
    background-color: #d9d9d9;
  }
`,ql=k(ga)`
  color: #000;
  text-align: right;
  width: 100%;
  user-select: none;
  max-height: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  transition: color 0.3s ease;

  &.active {
    color: var(--primary-light);
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 3px;
    background-color: var(--primary-light);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary-light);
    &::after {
      width: 100%;
    }
  }

  font-size: 0.875rem;
  white-space: nowrap;
  @media (min-width: 640px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1400px) {
    font-size: 18px;
  }
`,Yr=k.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  user-select: none;
  height: 50px;
  cursor: pointer;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 3px;
    background-color: var(--primary-light);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary-light);
    &::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    width: auto;
  }
`,Kd=k.div.withConfig({shouldForwardProp:a=>a!=="isActive"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #000;
  cursor: pointer;
  width: 100%;
  user-select: none;

  &.active {
    color: var(--primary-light);
  }
  white-space: nowrap;

  font-size: 0.875rem;
  white-space: nowrap;
  @media (min-width: 640px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1400px) {
    font-size: 1rem;
  }
  ${Yr}:hover & {
    color: var(--primary-light);
  }
`,Wd=k.div.withConfig({shouldForwardProp:a=>!["isActive","isRTL"].includes(a)})`
  display: ${a=>a.isActive?"block":"none"};
  position: absolute;
  ${({isRTL:a})=>a?"right: 0;":"left: 0;"}
  top: 3.1rem;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  border-radius: 0.375rem;
  z-index: 50;

  @media (max-width: 768px) {
    height: 150px;
    max-height: 300px;
    overflow-y: auto;
  }
  @media (min-width: 768px) {
    width: 16rem;
  }

  ${Yr}:hover & {
    @media (min-width: 768px) {
      display: block;
    }
  }

  /* Force hide when explicitly closed */
  &.force-hidden {
    display: none !important;
  }
`,Dt=k(ga).withConfig({shouldForwardProp:a=>a!=="isRTL"})`
  display: block;
  padding: 0.5rem 1rem;
  color: #000;
  font-size: 0.775rem;
  text-wrap: nowrap;
  text-align: right;
  user-select: none;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  &.active {
    background-color: #cceaff;
    color: #000;
  }

  font-size: 0.875rem;
  white-space: nowrap;
  @media (min-width: 640px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1400px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: #cceaff;
    color: #000;
  }
`,mb=k.nav`
  /* CLS Fix: Use max-height and opacity instead of display to prevent layout shift */
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(245, 245, 245, 1);
  z-index: 50;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  align-items: flex-end;
  gap: 1rem;
  padding: 1rem !important;
  
  /* CLS Fix: Use max-height and opacity for smooth transitions without layout shift */
  max-height: ${a=>a["data-menu-open"]?"1000px":"0"};
  opacity: ${a=>a["data-menu-open"]?"1":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  pointer-events: ${a=>a["data-menu-open"]?"auto":"none"};
  
  @media (min-width: 1150px) {
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    width: auto;
    align-items: center;
    /* Reset on desktop */
    max-height: none;
    opacity: 1;
    overflow: visible;
    pointer-events: auto;
  }
  @media (max-width: 720px) {
    max-height: ${a=>a["data-menu-open"]?"calc(100dvh - 64px)":"0"};
    overflow-y: auto;
  }
`,uD=k(mb)`
  position: relative;
  height: 100%;
  padding: 0 1rem !important;
  background-color: transparent;
  box-shadow: none;
  top: 0;
  @media (min-width: 1400px) {
    gap: 20px;
  }
  @media (max-width: 1150px) {
    max-height: calc(100dvh - 64px);
    flex-direction: column-reverse;
  }
`;function pb(){const[a,o]=_.useState(window.innerWidth<=1150);return _.useEffect(()=>{const c=()=>o(window.innerWidth<=1150);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),a}const hb=({toggleMenu:a,compact:o=!1})=>{const{t:c,i18n:s}=tn(),d=s.resolvedLanguage==="ar",{cartItems:f,setIsDrawerOpen:p,getTotalPrice:h}=yc(),g=f?.items?.length||0,y=h();return u.jsxs(Jf,{onClick:()=>{p(!0),a()},children:[!o&&u.jsxs(nD,{isRTL:d,children:[(y||0).toFixed(2)," ",c("checkout.amountcurrency")]}),u.jsxs(aD,{children:[u.jsx(fb,{src:db,alt:"Cart",width:"25",height:"25",loading:"eager",fetchPriority:"high",decoding:"async"}),u.jsx(iD,{"aria-hidden":g===0,style:{visibility:g>0?"visible":"hidden",opacity:g>0?1:0},children:g>0?g:"0"})]})]})},gb=({t:a,toggleMenu:o,compact:c})=>u.jsxs(oD,{to:"/hasbt-elzakat",onClick:()=>{o()},children:[!c&&u.jsx(rD,{children:a("navigation.calculator")}),u.jsx(sD,{src:YC,alt:"Calculator",width:"25",height:"25",loading:"eager",fetchPriority:"high",decoding:"async"})]}),dD=({t:a,isRTL:o,toggleMenu:c})=>{const{isAuthenticated:s,userProfile:d,logout:f}=Zf(),p=zf(),h=as(),[g,y]=_.useState(!1),T=_.useRef(null),x=()=>{p(zS()),f(),h({to:"/auth/login"}),y(!1)},S=C=>{h({to:C}),y(!1)},D=()=>{s&&y(!g)};return _.useEffect(()=>{const C=R=>{T.current&&!T.current.contains(R.target)&&y(!1)};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]),s?u.jsxs(Qy,{ref:T,onClick:D,children:[u.jsx(Yl,{}),u.jsxs(lD,{children:[u.jsx(Gy,{isRTL:o,children:d?.fullName?`${o?"اهلا":"Hello"} ${d.fullName.split(" ")[0]} !!`:a("common.welcome")}),u.jsx(Fy,{src:Vy,alt:"Profile",width:"25",height:"25",loading:"eager",fetchPriority:"high",decoding:"async"})]}),g&&u.jsxs(cD,{children:[u.jsx(yi,{isRTL:o,onClick:()=>{S("/profile"),c()},children:a("common.profile")}),u.jsx(yi,{isRTL:o,onClick:()=>{S("/my-donations"),c()},children:a("navigation.myDonations")}),u.jsx(yi,{isRTL:o,onClick:()=>{S("/monthly-donation"),c()},children:a("navigation.monthlyDonation")}),u.jsx(yi,{isRTL:o,onClick:()=>{S("/payment-operations"),c()},children:a("navigation.paymentOperations")}),u.jsx(yi,{isRTL:o,onClick:()=>{S("/hasbt-elzakat"),c()},children:a("navigation.myZakatAccount")}),u.jsx(yi,{isRTL:o,onClick:()=>{S("/my-nominated-cases"),c()},children:a("navigation.myNominatedCases")}),u.jsx(yi,{isRTL:o,onClick:()=>{x(),c()},className:"logout",children:a("navigation.logout")})]})]}):u.jsx(Qy,{children:u.jsxs(ga,{to:"/auth/login",style:{display:"flex",alignItems:"center",gap:"0.25rem",textDecoration:"none",color:"inherit"},onClick:()=>{c()},children:[u.jsx(Gy,{children:a("navigation.login")}),u.jsx(Fy,{src:Vy,alt:"Profile",width:"25",height:"25",loading:"eager",fetchPriority:"high",decoding:"async"})]})})},yb=({t:a,isRTL:o,toggleMenu:c})=>u.jsxs(Wf,{isRTL:o,children:[u.jsx(hb,{toggleMenu:c}),u.jsx($y,{}),u.jsx(gb,{t:a,toggleMenu:c}),u.jsx($y,{}),u.jsx(dD,{t:a,isRTL:o,toggleMenu:c})]}),fD=({isMenuOpen:a,activeDropdown:o,toggleDropdown:c,closeDropdown:s,forceHiddenDropdowns:d,t:f,isMobileNav:p,isRTL:h,toggleMenu:g})=>{const y=B1(),T=x=>x.some(S=>y({to:S,fuzzy:!0}));return u.jsxs(u.Fragment,{children:[p&&a&&u.jsx(u.Fragment,{children:u.jsx(yb,{t:f,isRTL:h,toggleMenu:g})}),u.jsxs(uD,{"data-menu-open":a,children:[u.jsx(ql,{to:"/ngos",onClick:()=>{g()},className:y({to:"/ngos",fuzzy:!0})?"active":"",children:f("navigation.associations")}),u.jsx(ql,{to:"/news",onClick:()=>{g()},className:y({to:"/news",fuzzy:!0})?"active":"",children:f("navigation.news")}),u.jsxs(Yr,{children:[u.jsxs(Kd,{onClick:()=>c("volunteer"),className:o==="volunteer"||T(["/volunteer"])?"active":"",children:[u.jsx(Yl,{size:"9px"}),f("navigation.volunteer")]}),u.jsxs(Wd,{isRTL:h,isActive:o==="volunteer",className:d.has("volunteer")?"force-hidden":"",children:[u.jsx(Dt,{to:"/vol-about",className:y({to:"/vol-about",fuzzy:!0})?"active":"",isRTL:h,onClick:()=>{s("volunteer"),g()},children:f("navigation.aboutVolunteer")}),u.jsx(Dt,{to:"/vol-become",className:y({to:"/vol-become",fuzzy:!0})?"active":"",isRTL:h,onClick:()=>{s("volunteer"),g()},children:f("navigation.becomeVolunteer")}),u.jsx(Dt,{to:"/vol-success",className:y({to:"/vol-success",fuzzy:!0})?"active":"",isRTL:h,onClick:()=>{s("volunteer"),g()},children:f("navigation.volunteerSuccessStories")}),u.jsx(Dt,{to:"/vol-board",className:y({to:"/vol-board",fuzzy:!0})?"active":"",isRTL:h,onClick:()=>{s("volunteer"),g()},children:f("navigation.volunteerBoard")}),u.jsx(Dt,{to:"/vol-opportunities",className:y({to:"/vol-opportunities",fuzzy:!0})?"active":"",isRTL:h,onClick:()=>{s("volunteer"),g()},children:f("navigation.volunteerOpportunities")})]})]}),u.jsx(ql,{to:"/refugee-services",onClick:()=>{g()},className:y({to:"/refugee-services",fuzzy:!0})?"active":"",children:f("navigation.refugeeServices")}),u.jsx(ql,{to:"/programs",onClick:()=>{g()},className:y({to:"/programs",fuzzy:!0})?"active":"",children:f("navigation.programs")}),u.jsxs(Yr,{children:[u.jsxs(Kd,{onClick:()=>c("donate"),className:o==="donate"||T(["/cases"])?"active":"",children:[u.jsx(Yl,{}),f("common.donate")]}),u.jsxs(Wd,{isRTL:h,isActive:o==="donate",className:d.has("donate")?"force-hidden":"",children:[u.jsx(Dt,{to:"/website-donation",className:y({to:"/website-donation",fuzzy:!0})?"active":"",isRTL:h,onClick:()=>{s("donate"),g()},children:f("donationSection.websiteDonation.title")}),u.jsx(Dt,{to:"/in-kind-donations",onClick:()=>{s("donate"),g()},className:y({to:"/in-kind-donations",fuzzy:!0})?"active":"",isRTL:h,children:f("InKindDonations.title")}),u.jsx(Dt,{to:"/inbank-donation",onClick:()=>{s("donate"),g()},className:y({to:"/inbank-donation",fuzzy:!0})?"active":"",isRTL:h,children:f("donationSection.inBank.title")}),u.jsx(Dt,{to:"/donate-branches",onClick:()=>{s("donate"),g()},className:y({to:"/donate-branches",fuzzy:!0})?"active":"",isRTL:h,children:f("donationSection.inBranch.title")}),u.jsx(Dt,{to:"/alternative-donation",onClick:()=>{s("donate"),g()},className:y({to:"/alternative-donation",fuzzy:!0})?"active":"",isRTL:h,children:f("donationSection.alternativeDonation.title")})]})]}),u.jsxs(Yr,{children:[u.jsxs(Kd,{onClick:()=>c("lifemakers"),isActive:o==="lifemakers",className:o==="lifemakers"||T(["/about","/board","/media","/achievements","/branches","/annual-report","/partners"])?"active":"",children:[u.jsx(Yl,{}),f("navigation.lifemakers")]}),u.jsxs(Wd,{isRTL:h,isActive:o==="lifemakers",className:d.has("lifemakers")?"force-hidden":"",children:[u.jsx(Dt,{to:"/about",onClick:()=>{s("lifemakers"),g()},className:y({to:"/about",fuzzy:!0})?"active":"",isRTL:h,children:f("navigation.aboutUs")}),u.jsx(Dt,{to:"/board",onClick:()=>{s("lifemakers"),g()},className:y({to:"/board",fuzzy:!0})?"active":"",isRTL:h,children:f("navigation.board")}),u.jsx(Dt,{to:"/media",onClick:()=>{s("lifemakers"),g()},className:y({to:"/media",fuzzy:!0})?"active":"",isRTL:h,children:f("navigation.media")}),u.jsx(Dt,{to:"/achievements",onClick:()=>{s("lifemakers"),g()},className:y({to:"/achievements",fuzzy:!0})?"active":"",isRTL:h,children:f("navigation.achievements")}),u.jsx(Dt,{to:"/branches",onClick:()=>{s("lifemakers"),g()},className:y({to:"/branches",fuzzy:!0})?"active":"",isRTL:h,children:f("navigation.reach")}),u.jsx(Dt,{to:"/annual-report",onClick:()=>{s("lifemakers"),g()},className:y({to:"/annual-report",fuzzy:!0})?"active":"",isRTL:h,children:f("navigation.annualReport")}),u.jsx(Dt,{to:"/partners",onClick:()=>{s("lifemakers"),g()},className:y({to:"/partners",fuzzy:!0})?"active":"",isRTL:h,children:f("navigation.partners")})]})]})]}),p&&a&&u.jsx(u.Fragment,{children:u.jsx(Wf,{isRTL:h,style:{alignItems:"center",justifyContent:"center",padding:"1rem 0"},children:u.jsx(lb,{isMobile:p})})})]})};function mD(){const{t:a,i18n:o}=tn(),[c,s]=_.useState(!1),[d,f]=_.useState(null),[p,h]=_.useState(new Set),g=pb(),y=o.resolvedLanguage==="ar",T=_.useCallback(()=>{s(C=>!C),f(null)},[]),x=_.useCallback(C=>{window.innerWidth<768?f(d===C?null:C):f(null)},[d]),S=_.useCallback(C=>{f(null),C&&(h(R=>new Set([...R,C])),setTimeout(()=>{h(R=>{const A=new Set(R);return A.delete(C),A})},100))},[]),D=_.useMemo(()=>({display:"flex",alignItems:"center",gap:"2rem"}),[]);return u.jsx(ZC,{children:u.jsx(KC,{isRTL:y,children:u.jsxs(Wf,{children:[!g&&u.jsx(yb,{t:a,isRTL:y,toggleMenu:T}),u.jsxs(JC,{children:[g&&u.jsxs(WC,{role:"button",tabIndex:0,onClick:T,onKeyDown:C=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),T())},"aria-label":"Toggle menu",style:D,children:[c?u.jsx(J1,{}):u.jsx(ew,{}),u.jsx("span",{onClick:C=>{C.stopPropagation()},children:u.jsx(hb,{toggleMenu:()=>{},compact:!0})}),u.jsx("span",{onClick:C=>{C.stopPropagation()},children:u.jsx(gb,{t:a,toggleMenu:()=>{},compact:!0})})]}),u.jsx(mb,{"data-menu-open":c,children:u.jsx(fD,{isMenuOpen:c,activeDropdown:d,toggleDropdown:x,closeDropdown:S,forceHiddenDropdowns:p,t:a,isMobileNav:g,isRTL:y,toggleMenu:T})}),u.jsx(eD,{to:"/",children:u.jsx(tD,{src:XC,alt:"Life Makers logo",width:"200",height:"80",loading:"eager",fetchPriority:"high",decoding:"async"})})]})]})})})}const pD=we.memo(mD),hD="/ta-lm/assets/footer_logo-WXOPWovE.svg",gD=k.footer`
  background-color: #003b5c;
  color: white;
  padding: 2rem 0 0;
  min-height: 400px; /* Reserve space to prevent layout shift */
  
  @media (max-width: 768px) {
    padding: 1.5rem 0 0;
    min-height: 500px; /* More space on mobile */
  }
`,fo=k.li`
  color: white;
  text-align: ${({$isRTL:a})=>a?"right":"left"};
`,yD=k.div`
  max-width: 98%;
  margin: 0 auto;
  padding: 0 4rem;

  @media (max-width: 640px) {
    max-width: 100vw;
    width: 100vw;
    margin: 0;
    padding: 0 0.25rem;
  }
`,vD=k.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;k.div`
  background-color: #d1d5db;
  width: 1px;
  height: 100%;
  margin: 0 2rem;
  align-self: stretch;
  justify-self: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;const ua=k.div`
  display: flex;
  flex-direction: column;
  align-items: ${({$isRTL:a})=>a?"flex-end":"flex-start"};
  margin-bottom: 1rem;
  flex: 1 1 0%;

  &:first-child {
    flex: 2 1 0%;
    min-width: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    ${""}
    padding: 0rem 2rem;
    flex: unset;
    min-width: unset;
  }
`,bD=k.h3`
  color: #d1d5db;
  margin: 1.5rem 0 1rem;
  text-align: right;
  font-family: 'Cairo', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem 0 0.75rem;
  }
  
  @media (max-width: 640px) {
    text-align: center;
    margin: 0.75rem 0 0.5rem;
  }
`,Yy=k.p`
  color: #d1d5db;
  text-align: ${({$isRTL:a})=>a?"right":"left"};
  direction: ${({$isRTL:a})=>a?"rtl":"ltr"};
  font-size: 1rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 640px) {
    text-align: center;
    direction: ${({$isRTL:a})=>a?"rtl":"ltr"};
  }
`,mo=k.ul`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.75rem;
  text-align: ${({$isRTL:a})=>a?"right":"left"};
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 1rem;
    gap: 0.5rem;
  }
  
  @media (max-width: 640px) {
    align-items: center;
    text-align: center;
  }
`,po=k(ga)`
  color: #d1d5db;
  font-size: 1rem;
  transition: color 0.2s ease;
  text-align: ${({$isRTL:a})=>a?"right":"left"};
  &:hover {
    color: var(--secondary-color);
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,xD=k.ul`
  display: flex;
  flex-direction: column;
  align-items: ${({$isRTL:a})=>a?"flex-end":"flex-start"};
  gap: 0.75rem;
  color: #d1d5db;
  text-align: ${({$isRTL:a})=>a?"right":"left"};
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
  
  @media (max-width: 640px) {
    align-items: center;
  }
`,Xy=k.h3`
  color: var(--secondary-color);
  font-family: 'Cairo', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  text-align: ${({$isRTL:a})=>a?"right":"left"};
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 640px) {
    text-align: center;
  }
`,Zy=k.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-align: ${({$isRTL:a})=>a?"right":"left"};
  @media (max-width: 640px) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 0.25rem;
  }

  &:hover {
    color: var(--secondary-color);
  }
`,wD=k.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 1.5rem;
  justify-content: flex-end;
  text-align: ${({$isRTL:a})=>a?"right":"left"};
  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1rem;
  }
  
  @media (max-width: 640px) {
    justify-content: center;
  }
`,zr=k.a`
  color: white;
  transition: all 0.2s ease;
  font-size: 1.5rem;
      
  &:hover {
    color: #d1d5db;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,SD=k.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #374151;
  text-align: center;
  background: var(--secondary-color);
  margin-top: 2rem;
  color: white;
  font-size: 1.1rem;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.85rem 0;
    margin-top: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 0.97rem;
    padding: 0.7rem 0;
    margin-top: 1.2rem;
    gap: 0.75rem;
  }
  @media (max-width: 480px) {
    font-size: 0.92rem;
    padding: 0.6rem 0;
    margin-top: 1rem;
    gap: 0.5rem;
  }

  p {
    margin: 0;
  }
`,Va=k.hr`
  margin: 1.5rem auto 0;
  width: 90%;
  border: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem auto 0;
    ${""}
  }
`,TD=_.lazy(()=>pe(()=>import("./NewsletterForm-DISdR-zL.js"),__vite__mapDeps([0,1,2])));function AD(){const{t:a,i18n:o}=tn(),c=pb(),[s,d]=_.useState(!1);_.useEffect(()=>{const x=setTimeout(()=>d(!0),3e3),S=()=>{const D=document.querySelector("footer");D&&D.getBoundingClientRect().top<window.innerHeight+500&&d(!0)};return window.addEventListener("scroll",S,{passive:!0}),S(),()=>{clearTimeout(x),window.removeEventListener("scroll",S)}},[]);const f=x=>Gv(x),p=[{to:"/about",label:"footer.whoWeAre"},{to:"/board",label:"footer.board"},{to:"/media",label:"footer.mediaGallery"},{to:"/achievements",label:"footer.achievements"},{to:"/branches",label:"footer.whereWeWork"},{to:"/annual-report",label:"footer.annualReports"},{to:"/partners",label:"footer.partners"}],h=[{to:"/ngos",label:"footer.associations"},{to:"/programs",label:"footer.programs"},{to:"/refugee-services",label:"footer.refugees"},{to:"/hasbt-elzakat",label:"footer.zakatCalculator"}],g=[{to:"/duke-adenbra",label:"footer.dukeAward"},{to:"/contracts",label:"footer.deals"},{to:"/suppliers-registeration",label:"footer.suppliers"},{to:"https://erp.lifemakers.org/jobs",label:"footer.jobs"}],y=[{to:"/website-donation",label:"footer.donateOnline"},{to:"/inbank-donation",label:"footer.donateBanks"},{to:"/in-kind-donations",label:"footer.inKindDonations"},{to:"/donate-branches",label:"footer.donationLocations"},{to:"/alternative-donation",label:"footer.otherDonationMethods"}],T=[{to:"/vol-about",label:"footer.aboutVolunteering"},{to:"/vol-become",label:"footer.becomeVolunteer"},{to:"/vol-success",label:"footer.volunteerSuccessStories"},{to:"/vol-board",label:"footer.volunteeringBoard"},{to:"/vol-opportunities",label:"footer.volunteeringOpportunities"}];return u.jsxs(gD,{children:[u.jsx(yD,{children:u.jsxs(vD,{children:[u.jsxs(ua,{$isRTL:o.resolvedLanguage==="ar",style:{gridColumn:"1 / 2"},children:[u.jsx("img",{src:hD,alt:"Life Makers logo",width:200,height:120,style:{height:120,marginBottom:16,width:"auto"},loading:"eager",fetchPriority:"high",decoding:"async"}),u.jsx(Yy,{$isRTL:o.resolvedLanguage==="ar",children:a("footer.aboutText")}),u.jsx(Va,{}),s?u.jsx(_.Suspense,{fallback:u.jsx("div",{style:{marginTop:24,minHeight:100}}),children:u.jsx(TD,{onSubmit:f,t:a,i18n:o})}):u.jsxs("div",{style:{marginTop:24,minHeight:100,color:"#fff"},children:[u.jsx("label",{htmlFor:"newsletter",style:{color:"#fff",fontWeight:"bold",marginBottom:8,display:"block",fontSize:"1.2rem",fontFamily:"Cairo",fontStyle:"normal",textAlign:o.resolvedLanguage==="ar"?"right":"left"},children:a("footer.newsletterTitle")}),u.jsx(Yy,{$isRTL:o.resolvedLanguage==="ar",children:a("footer.newsletterDescription")})]})]}),c&&u.jsx(ua,{children:u.jsx(Va,{})}),u.jsxs(ua,{$isRTL:o.resolvedLanguage==="ar",style:{gridColumn:"2 / 3"},children:[u.jsx(bD,{$isRTL:o.resolvedLanguage==="ar",children:a("footer.contactTitle")}),u.jsxs(xD,{$isRTL:o.resolvedLanguage==="ar",children:[u.jsx(Xy,{$isRTL:o.resolvedLanguage==="ar",children:a("footer.phoneTitle")}),u.jsxs(Zy,{$isRTL:o.resolvedLanguage==="ar",children:[u.jsx(V0,{style:{width:32,height:32,flexShrink:0,aspectRatio:1/1}}),u.jsx("span",{style:{direction:!o.resolvedLanguage==="ar"?"rtl":"ltr",fontFamily:"Cairo",fontSize:"32px",fontStyle:"normal",fontWeight:700,lineHeight:"normal"},children:a("footer.phone")})]})]}),u.jsx(Xy,{style:{direction:!o.resolvedLanguage==="ar"?"rtl":"ltr"},children:a("footer.emailTitle")}),u.jsx(Zy,{style:{direction:!o.resolvedLanguage==="ar"?"rtl":"ltr"},children:u.jsx("span",{children:a("footer.email")})}),u.jsxs(wD,{style:{direction:!o.resolvedLanguage==="ar"?"rtl":"ltr"},children:[u.jsx(zr,{href:"https://instagram.com/lifemakersegy/",target:"_blank",rel:"noopener noreferrer",children:u.jsx(Q0,{})}),u.jsx(zr,{href:"https://x.com/LifeMakersEGY",target:"_blank",rel:"noopener noreferrer",children:u.jsx(G0,{})}),u.jsx(zr,{href:"https://www.facebook.com/LifeMakersEGY/",target:"_blank",rel:"noopener noreferrer",children:u.jsx(F0,{})}),u.jsx(zr,{href:"https://www.linkedin.com/company/life-makers-foundation/",target:"_blank",rel:"noopener noreferrer",children:u.jsx($0,{})}),u.jsx(zr,{href:"https://www.youtube.com/user/EgyptLifeMakers",target:"_blank",rel:"noopener noreferrer",children:u.jsx(Y0,{})})]})]}),c&&u.jsx(ua,{children:u.jsx(Va,{})}),u.jsxs(ua,{$isRTL:o.resolvedLanguage==="ar",style:{gridColumn:"3 / 4"},children:[u.jsx(mo,{$isRTL:o.resolvedLanguage==="ar",children:h.map(x=>u.jsx(fo,{$isRTL:o.resolvedLanguage==="ar",children:u.jsx(po,{to:x.to,children:a(x.label)})},x.to))}),u.jsx(Va,{}),u.jsx(mo,{$isRTL:o.resolvedLanguage==="ar",children:g.map(x=>u.jsx(fo,{$isRTL:o.resolvedLanguage==="ar",children:u.jsx(po,{to:x.to,children:a(x.label)})},x.to))}),u.jsx(Va,{}),u.jsx(mo,{$isRTL:o.resolvedLanguage==="ar",children:u.jsx(fo,{$isRTL:o.resolvedLanguage==="ar",children:u.jsx(po,{$isRTL:o.resolvedLanguage==="ar",to:"/privacy-policy",children:a("footer.privacyPolicy")})})})]}),c&&u.jsx(ua,{children:u.jsx(Va,{})}),u.jsxs(ua,{$isRTL:o.resolvedLanguage==="ar",style:{gridColumn:"4 / 5"},children:[u.jsx(mo,{$isRTL:o.resolvedLanguage==="ar",children:y.map(x=>u.jsx(fo,{$isRTL:o.resolvedLanguage==="ar",children:u.jsx(po,{to:x.to,children:a(x.label)})},x.to))}),u.jsx(Va,{}),u.jsx(mo,{$isRTL:o.resolvedLanguage==="ar",children:T.map(x=>u.jsx(fo,{$isRTL:o.resolvedLanguage==="ar",children:u.jsx(po,{to:x.to,children:a(x.label)})},x.to))})]}),c&&u.jsx(ua,{children:u.jsx(Va,{})}),u.jsx(ua,{$isRTL:o.resolvedLanguage==="ar",style:{gridColumn:"3 / 4"},children:u.jsx(mo,{$isRTL:o.resolvedLanguage==="ar",children:p.map(x=>u.jsx(fo,{$isRTL:o.resolvedLanguage==="ar",children:u.jsx(po,{to:x.to,children:a(x.label)})},x.to))})})]})}),u.jsx(SD,{children:u.jsxs("p",{style:{margin:0,direction:o.resolvedLanguage==="ar"?"rtl":"ltr",textAlign:"center"},children:[a("footer.copyrightText"),"  –  ",a("footer.developedBy")," ",u.jsx("a",{href:"https://www.tatelecom.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"white",textDecoration:"underline",fontWeight:"bold"},children:"TA Telecom"})]})})]})}const vb=we.memo(AD),bb="/ta-lm/assets/hero_cart-BHyHZf4r.svg",ED=k.div`
  background: var(--secondary-color);
  border: 2px solid #fff;
  padding: 1rem 0.75rem;
  border-radius: ${({isRTL:a})=>a?"0 1rem 1rem 0":"1rem 0 0 1rem"};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 320px;
`,_D=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,CD=k.button`
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  color: #fff;
  ${""}
  cursor: pointer;
  border-radius: 9999px;
  transition: color 0.3s;
  outline: none;
  width: 2.2rem;
  height: 2.2rem;
  justify-content: center;
  &:hover {
    color: #e5e7eb;
  }
`,DD=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,kD=k.span`
  font-size: 1.1rem;
  font-weight: 300;
  color: #fff;
  margin: 0 0.5rem;
  padding: 0.2rem 0.2rem 0.5rem 0.2rem;
`,jD=k.span`
  font-size: 1.25rem;
  font-weight: 300;
  color: #fff;
  margin-left: 0.25rem;
`,Ky=k.div`
  position: relative;
  margin-bottom: 0.75rem;
  direction: ${a=>a.isRTL?"rtl":"ltr"};
`,Wy=k.select`
  width: 100%;
  padding: 0.6rem 8rem 0.6rem 1rem;
  border-radius: 0.75rem;
  background: #fff;
  ${({isRTL:a,padding:o=83})=>a?`
    padding-right: ${o}px;
    text-align: right;
  `:`
    padding-left: 120px;
  `}

  font-size: 0.9rem;
  font-weight: 600;
  border: 1.5px solid #eee;
  box-shadow: none;
  appearance: none;
  transition:
    background 0.3s,
    border 0.3s;
  &:hover {
    background: #f9fafb;
    border-color: #ccc;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-dark);
    border-color: var(--primary-light);
  }
  option {
    font-size: 0.9rem;
    font-weight: 600;
    width: 100%;
  }
`,Jy=k.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
  font-size: 0.9rem;
  ${({isRTL:a})=>a?`
    right: 8px;
    left: auto;
    direction: rtl;
  `:`
    left: 8px;
    right: auto;
    direction: ltr;
  `}
`,e0=k.div`
  position: absolute;
  top: 50%;
  ${({isRTL:a})=>a?"left: 1.1rem;":"right: 1.1rem;"}
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--secondary-color);
  font-size: 0.8rem;
`,OD=k.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 0.75rem;
  padding: 0.4rem 0.75rem;
  margin-bottom: 0.25rem;
  transition: background 0.3s;
  border: 1.5px solid var(--primary-light);
  gap: 0.5rem;
  min-height: 40px;
  justify-content: space-between;
  position: relative;
  direction: ${a=>a.isRTL?"ltr":"rtl"};
`,MD=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 40px;
  justify-content: flex-end;
  position: relative;
  direction: ${a=>a.isRTL?"ltr":"rtl"};
`,RD=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.5rem;
`,t0=k.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 0;
  color: var(--primary-light);
  font-size: 0.7rem;
  transition: color 0.2s;
  &:hover {
    color: var(--secondary-color);
  }
`;k.span`
  font-weight: 700;
  font-size: 1rem;
  color: #222;
  min-width: 30px;
  text-align: center;
`;const zD=k.input`
  font-weight: 700;
  font-size: 1rem;
  color: #222;
  width: 80px;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  ${""}
  border-radius: 6px;
  padding: 4px 6px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  
  /* Hide spinner arrows in Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  
  /* Hide spinner arrows in Firefox */
  &[type="number"],
  &[inputmode="numeric"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  
  &:focus {
    border-color: var(--primary-light);
    box-shadow: 0 0 0 2px rgba(1, 92, 163, 0.12);
  }
`;k.span`
  color: #4b5563;
  font-size: 0.9rem;
`;const ID=k.span`
  color: #4b5563;
  font-size: 0.9rem;
  margin-right: 0.25rem;
  font-weight: 600;
`;k.div`
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.1rem;
  margin-right: 0.2rem;
  text-align: right;
`;const LD=k.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`,ND=k.button`
  flex: 1;
  background: #fff;
  color: var(--secondary-color);
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  border: 2px solid var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  transition:
    background 0.3s,
    color 0.3s,
    border 0.3s,
    transform 0.2s,
    box-shadow 0.2s;
  &:hover {
    background: #fff7e6;
    color: #d48806;
    border-color: #d48806;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  &:active {
    transform: none;
    box-shadow: none;
  }
`,UD=k.button`
  flex: 1;
  background: var(--primary-light);
  color: #fff;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  border: 2px solid var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  transition:
    background 0.3s,
    color 0.3s,
    border 0.3s,
    transform 0.2s,
    box-shadow 0.2s;
  &:hover {
    background: #014c8c;
    border-color: #014c8c;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  &:active {
    transform: none;
    box-shadow: none;
  }
`,PD=k.img`
  width: 1.1em;
  height: 1.1em;
  margin-right: 0.2em;
`,BD=(a,o,c)=>{const s=Number(a);return!Number.isFinite(s)||s<o?{isValid:!1,error:c?"يجب أن يكون المبلغ أكبر من السعر الأساسي":"The amount must be greater than the base price",correctedAmount:o}:{isValid:!0,error:null,correctedAmount:s}},qD=(a,o,c,s)=>{const d=[];a.campaignName||d.push(s?"يرجى اختيار الحملة":"Please select a campaign");const f=a.donationIntention?Number(a.donationIntention):null;console.log("donationIntentionNum",typeof f,f),(f===null||isNaN(f))&&d.push(s?"يرجى اختيار نية التبرع":"Please select a donation intention");const p=o?.find(g=>g.id===parseInt(a.campaignName));p||d.push(s?"الحملة المختارة غير صحيحة":"Selected campaign is invalid");const h=f!==null&&!isNaN(f)?c?.find(g=>Number(g.id)===f):null;return p&&h&&(p.donationIntentionsIds?.some(y=>Number(y)===Number(h.id))||d.push(s?"نية التبرع المختارة غير مسموحة لهذه الحملة":"Selected donation intention is not allowed for this campaign")),{errors:d,selectedCampaign:p,selectedIntention:h}},HD=(a,o,c)=>{const s=Number(a.amount),d=Number(o?.basePrice)||250,f=a.donationIntention?Number(a.donationIntention):null;return{id:c?.id||0,donationIntention:f,amount:s,donationAmountTypeId:o.amountTypeId,numberOfShares:Math.max(1,Math.round(s/d)),shareValue:o.basePrice,campaignId:o.id,isShareInSakk:!1,isInstallmentPayment:!1,installmentMonths:1,sakkOwnerInfo:null,onBehalfInfo:null,campaign:{id:o.id,titleAr:o.titleAr,titleEn:o.titleEn,imageUrl:o.imageUrl,keyWords:o.keywords,intentions:o.donationIntentions,basePrice:o.basePrice}}},VD=a=>{(!a.onClose||typeof a.onClose!="function")&&console.warn("QuickDonateWindow: onClose prop is required and must be a function")};function QD({onClose:a}){typeof window<"u"&&window.location?.hostname==="localhost"&&VD({onClose:a});const{t:o,i18n:c}=tn(),s=c.resolvedLanguage==="ar",d=as(),f=yc(),p=_.useRef(!1),[h,g]=_.useState({campaignName:"",donationIntention:"",amount:""}),[y,T]=_.useState(!1),{data:x}=CT({size:100,filter:{isQuickDonationAllowed:!0},skipNgoId:!0}),S=_.useMemo(()=>x?.items||[],[x]),{data:D}=Ff("DonationIntention"),C=_.useMemo(()=>S?.find(j=>j.id===parseInt(h.campaignName)),[S,h.campaignName]),R=_.useMemo(()=>Number(C?.basePrice)||0,[C?.basePrice]),A=_.useMemo(()=>D?.filter(j=>C?.donationIntentionsIds?.some(F=>Number(F)===Number(j.id)))||[],[D,C?.donationIntentionsIds]),z=_.useCallback(()=>{g(j=>({...j,amount:j.amount*2}))},[]),M=_.useCallback(()=>{g(j=>({...j,amount:Math.max(R,Math.floor((Number(j.amount)||R)/2))}))},[R]),w=_.useCallback(j=>{const F=j.target.value.replace(/[^0-9]/g,""),O=F===""?"":parseInt(F,10);g(v=>({...v,amount:O}))},[]);_.useEffect(()=>{if(p.current||!S?.length||!D?.length)return;const j=S[0],F=Number(j?.basePrice)||250,O=j.donationIntentionsIds?.[0],v=O&&D.some(I=>Number(I.id)===Number(O));console.log("intentionExists",v,O,j.id),g(I=>({campaignName:I.campaignName||j.id,donationIntention:I.donationIntention||O||"",amount:I.amount===""?F:I.amount})),p.current=!0},[S,D]),_.useEffect(()=>{if(!S?.length||!D?.length||!h.campaignName)return;const j=S.find(F=>F.id===parseInt(h.campaignName));if(j&&A.length>0){const F=j.donationIntentionsIds?.[0];if(!F)return;const O=h.donationIntention&&A.some(v=>Number(v.id)===Number(h.donationIntention));(!h.donationIntention||!O)&&g(v=>({...v,donationIntention:F}))}},[S,D,h.campaignName,h.donationIntention,A]);const E=_.useRef(null);_.useEffect(()=>{if(!h.campaignName||!C)return;const j=C.id;if(E.current!==null&&E.current!==j){const F=C.donationIntentionsIds?.[0],O=Number(C.basePrice)||250;F&&g(v=>({...v,donationIntention:F,amount:O}))}E.current=j},[h.campaignName,C]);const L=_.useCallback(async(j=!1)=>{try{const{cartItems:F,addOrUpdateCartItem:O}=f;let v={...h};if(v.campaignName&&!v.donationIntention&&C){const N=C.donationIntentionsIds?.[0];N&&A.length>0&&(v.donationIntention=N,g(v))}const I=qD(v,S,D,s);if(I.errors.length>0)return I.errors.forEach(N=>Me.error(N)),!1;const{selectedCampaign:q}=I,J=BD(v.amount,R,s);if(!J.isValid)return g(N=>({...N,amount:J.correctedAmount})),Me.error(J.error),!1;const se=F?.items?.find(N=>N.campaignId===q.id),$=HD(v,q,se);await O($);const H=se?s?`تم تحديث ${q.titleAr} في السلة`:`${q.titleEn} has been updated in cart!`:s?`تم إضافة ${q.titleAr} إلى السلة`:`${q.titleEn} added to cart!`;return Me.success(H),j&&(a(),d({to:"/payment"})),!0}catch(F){console.error("Failed to add/update cart item:",F);const O=F?.response?.data?.message||F?.message,v=s?`حدث خطأ أثناء إضافة العنصر إلى السلة${O?`: ${O}`:""}`:`Error adding item to cart${O?`: ${O}`:""}`;return Me.error(v),!1}},[h,S,D,s,R,f,a,d,C,A]),B=_.useCallback(()=>{T(!0),L(!1)},[L]),Q=_.useCallback(async()=>{const{cartItems:j}=f;if(j?.items?.find(O=>O.campaignId===parseInt(h.campaignName))&&y){a(),T(!1),d({to:"/payment"});return}await L(!0)},[f,h.campaignName,a,d,L,y]);return u.jsxs(ED,{isRTL:s,children:[u.jsxs(_D,{children:[u.jsx(CD,{onClick:a,children:u.jsx(X0,{size:28})}),u.jsxs(DD,{children:[u.jsx(jD,{children:"♡"}),u.jsx(kD,{children:o("quickDonate")})]}),u.jsx("div",{style:{width:"2rem"}})]}),u.jsxs("div",{children:[u.jsxs(Ky,{isRTL:s,children:[u.jsxs(Jy,{isRTL:s,children:[`${o("home.campaigns.campaignName")}`," :"]}),u.jsxs(Wy,{isRTL:s,name:"campaignName",value:h.campaignName?String(h.campaignName):"",onChange:j=>{const F=parseInt(j.target.value),O=S?.find(q=>q.id===F),v=Number(O?.basePrice)||250,I=O?.donationIntentionsIds?.[0];g(q=>({...q,campaignName:F,donationIntention:I||"",amount:v}))},children:[u.jsx("option",{value:"",disabled:!0,children:o("home.campaigns.selectCampaign")}),S?.map(j=>u.jsx("option",{value:String(j.id),style:{width:"100%",direction:s?"ltr":"rtl",textAlign:s?"right":"left"},children:s?`${j.titleAr}`:`${j.titleEn}`},j.id))]}),u.jsx(e0,{isRTL:s,children:u.jsx(Gl,{})})]}),u.jsxs(Ky,{isRTL:s,children:[u.jsxs(Jy,{isRTL:s,children:[`${o("home.campaigns.donationIntention")}`," :"]}),u.jsx(e0,{isRTL:s,children:u.jsx(Gl,{})}),u.jsxs(Wy,{style:{...s?{paddingRight:"70px"}:{paddingLeft:"130px"}},isRTL:s,value:h.donationIntention?String(h.donationIntention):"",name:"donationIntention",onChange:j=>{const F=j.target.value,O=F===""?"":parseInt(F,10);g(v=>({...v,[j.target.name]:isNaN(O)?"":O}))},children:[u.jsx("option",{value:"",disabled:!0,children:o("home.campaigns.selectDonationIntention")}),A.map(j=>u.jsx("option",{value:String(j.id),style:{width:"100%",direction:s?"ltr":"rtl",textAlign:s?"right":"left"},children:s?`${j.nameAr}`:`${j.nameEn}`},j.id))]})]}),u.jsxs(OD,{isRTL:s,children:[u.jsxs(MD,{isRTL:s,children:[u.jsxs(RD,{children:[u.jsx(t0,{onClick:z,children:u.jsx(tw,{})}),u.jsx(t0,{onClick:M,children:u.jsx(Gl,{})})]}),u.jsx(zD,{inputMode:"numeric",pattern:"[0-9]*",value:h.amount,onChange:w,isRTL:s})]}),u.jsx(ID,{children:o("campaigns.campaignCard.amount")+" "+o("campaigns.campaignCard.amountcurrency")})]}),u.jsxs(LD,{children:[u.jsxs(ND,{onClick:j=>{j.preventDefault(),j.stopPropagation(),Q()},children:[u.jsx(Z0,{style:{marginRight:"4px"}}),u.jsx("span",{children:o("campaigns.campaignCard.donate")})]}),u.jsxs(UD,{onClick:j=>{j.preventDefault(),j.stopPropagation(),B()},children:[u.jsx(PD,{src:bb,alt:"cart"}),u.jsx("span",{children:o("campaigns.campaignCard.cart")})]})]})]})]})}const GD=k.div`
  position: fixed;
  ${({isRTL:a})=>a?"left: 0rem;":"right: 0rem;"}
  top: 55%;
  transform: translateY(-50%);
  z-index: 90001;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 767px) {
    top: auto;
    bottom: 1rem;
    left: 0;
    transform: none;
  }
`,FD=k.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.35);
    z-index: 1;
  }
`,$D=k.div`
  position: absolute;
  ${({isRTL:a})=>a?"left: 0;":"right:-4rem;"}
  ${""}
  bottom: 0;
  transform-origin: ${({isRTL:a})=>a?"bottom left":"bottom right"};
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 100;

  @media (max-width: 767px) {
    position: fixed;
    ${({isRTL:a})=>a?"left: 0;":"right:-4rem;"}
    bottom: 0;
    width: 95vw;
    min-width: unset;
    max-width: 95vw;
    z-index: 100;
  }
`,YD=k.div`
  width: 220px;
  @media (min-width: 768px) {
    width: 380px;
  }
  @media (max-width: 767px) {
    width: 95vw;
    min-width: unset;
    max-width: 95vw;
  }
`,XD=k.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    background: var(--secondary-color);
    color: #fff;
    font-weight: bold;
    padding: 0 0.75rem;
    height: 140px;
    width: 40px;
    border-radius: ${({isRTL:a})=>a?"0 0.75rem 0.75rem 0":"0.75rem 0 0 0.75rem"};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition:
      background 0.3s,
      transform 0.3s;
    &:hover {
      background: #002b4c;
      transform: scale(1.02);
    }
  }
`,ZD=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--secondary-color);
  color: #fff;
  border-radius: 9999px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.3s;
  font-size: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
  &:hover {
    background: #002b4c;
    transform: scale(1.02);
  }
`;k.div`
  position: absolute;
  left: 64px;
  top: 50%;
  transform: translateY(-50%);
  background: #000;
  color: #fff;
  font-size: 0.95rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: opacity 0.2s;
  @media (min-width: 768px) {
    display: none;
  }
`;function KD(){const[a,o]=_.useState(!1),[c,s]=_.useState(!1),d=_.useRef(null),f=_.useRef(null),{t:p,i18n:h}=tn(),g=h.resolvedLanguage==="ar";_.useEffect(()=>{(()=>{window.requestIdleCallback?window.requestIdleCallback(()=>s(!0),{timeout:2e3}):setTimeout(()=>s(!0),1e3)})()},[]),_.useEffect(()=>{if(!c)return;const T=x=>{d.current&&!d.current.contains(x.target)&&f.current&&!f.current.contains(x.target)&&o(!1)};return document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[]);const y=()=>{o(!a)};return c?u.jsxs(GD,{isRTL:g,children:[a&&u.jsx(FD,{}),u.jsx($D,{ref:d,style:{visibility:a?"visible":"hidden",opacity:a?1:0,pointerEvents:a?"auto":"none",transform:a?"scale(1)":"scale(0.3)"},isRTL:g,children:u.jsx(YD,{children:u.jsx(QD,{onClose:y})})}),u.jsxs("div",{ref:f,style:{visibility:a?"hidden":"visible",opacity:a?0:1,transform:a?"translateX(16px)":"translateX(0)",transition:"all 0.5s cubic-bezier(0.4,0,0.2,1)"},children:[u.jsxs(XD,{onClick:y,isRTL:g,children:[u.jsx("span",{style:{fontWeight:500,fontSize:g?"0.9rem":"0.7rem"},children:p("quickDonate")}),u.jsx(Qg,{style:{fontSize:"1rem",fontWeight:"bold"}})]}),u.jsx("div",{style:{position:"relative",display:"block"},children:u.jsx(ZD,{onClick:y,children:u.jsx(Qg,{})})})]})]}):null}const xb=we.memo(KD),WD=Ci`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,n0=k.div`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  justify-content: ${({isRTL:a})=>a?"flex-start":"flex-end"};
`,a0=k.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`,i0=k.div`
  position: relative;
  width: 700px;
  max-width: 100vw;
  height: 100dvh;
  background: #fff;
  box-shadow: -2px 0 16px rgba(0, 0, 0, 0.12);
  border-radius: 16px 0 0 16px;
  display: flex;
  flex-direction: column;
  animation: ${WD} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  @media (max-width: 500px) {
    width: 100vw;
    border-radius: 0;
  }
`,o0=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  direction: ${({isRTL:a})=>a?"rtl":"ltr"};
  padding: 24px 24px 0 24px;
`,r0=k.h2`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary-color);
`,s0=k.button`
  background: none;
  border: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #222;
  }
`,l0=k.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
`;k.div`
  margin-bottom: 0.2rem;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  direction: ${({isRTL:a})=>a?"rtl":"ltr"};
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.3rem;
  align-items: center;
  min-height: 24px;
`;k.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
  width: 100%;
  flex-direction: row-reverse;
  position: relative;
`;k.img`
  width: 90px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 16px;
  margin-right: 0;
  flex-shrink: 0;
`;k.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  direction: ${({isRTL:a})=>a?"rtl":"ltr"};
`;k.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isRTL:a})=>a?"flex-end":"flex-start"};
`;k.div`
  font-size: 1rem;
  color: #f5b43a;
  font-weight: 700;
  margin-bottom: 2px;
  text-align: right;
`;k.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: #223a5f;
  margin-bottom: 4px;
  text-align: right;
`;k.div`
  display: flex;
  align-items: center;
  ${""}
  width: 25%;
  margin: ${({isRTL:a})=>a?"8px 8px 0 0":"8px 0 0 8px"};
  flex-direction: row-reverse;
`;k.div`
  font-size: 1.2rem;
  color: #222;
  font-weight: 700;
  margin: 0 8px;
`;k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  direction: ltr;
`;k.button`
  background: none;
  border: none;
  color: #e53e3e;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 0;
  transition: color 0.2s;
  margin-top: 10px;
  &:hover {
    color: #b91c1c;
  }
`;k.span`
  font-size: 1rem;
  color: ${({error:a})=>a?"#f44336":"#2196f3"};
  font-weight: 700;
  margin-right: 4px;
  margin-left: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
`;k.span`
  color: inherit;
  font-size: 1.1em;
  margin-right: 2px;
  display: inline-flex;
  align-items: center;
`;k.div`
  color: #f44336;
  font-size: 0.95rem;
  margin-top: 6px;
  text-align: right;
  width: 100%;
  padding-right: 12px;
`;const c0=k.div`
  padding: 16px 24px;
  border-top: 1px solid #ececec;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  direction: ${({isRTL:a})=>a?"rtl":"ltr"};
`,u0=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.15rem;
  font-weight: 600;
  ${""}
  flex: 1;
  width: 25%;
`;k.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  margin: 0 6px;
`;k.span`
  font-size: 1.1rem;
  color: #222;
  margin: 0 4px;
  font-weight: 400;
`;const JD=k.div`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  background: ${({error:a})=>a?"var(--Colors-Red-Red---1000, #FFEDED)":"var(--Colors-Grey-Grey---900, #F5F5F5)"};
  border-radius: 10px;
  border: 1px solid
    ${({error:a})=>a?"var(--Colors-Red-Red, #F00000)":"var(--Colors-Grey-Grey---800, #DFDFDF)"};
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-direction: ${({isRtl:a})=>a?"row":"row-reverse"};
  @media (max-width: 490px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 0;
  }
`,ek=k.img`
  width: 95px;
  height: 95px;
  border-radius: 10px;
  object-fit: cover;
`,tk=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({isRtl:a})=>a?"flex-end":"flex-start"};
  @media (max-width: 490px) {
    justify-content: center;
    align-items: center;
  }
`,nk=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  direction: ${({isRtl:a})=>a?"rtl":"ltr"};
`,ak=k.span`
  color: var(--Colors-Orange-Orange, #fbae42);
  font-size: 15px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;
`,ik=k.h3`
  color: var(--Colors-Blue-Blue, #0a4976);
  font-size: 20px;
  font-family: Cairo;
  font-weight: 700;

  word-wrap: break-word;
  margin: 0;
  text-align: ${({isRtl:a})=>a?"right":"left"};
`,ok=k.div`
  display: flex;
  align-items: center;
  gap: 7px;
  direction: ${({isRtl:a})=>a?"ltr":"rtl"};
`,rk=k.span`
  color: var(--Colors-Base-Black, black);
  font-size: 15px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  direction: ${({isRtl:a})=>a?"ltr":"rtl"};
  text-wrap: nowrap;
`,sk=k.span`
  color: ${({error:a})=>a?"var(--Colors-Red-Red, #F00000)":"var(--Colors-Blue-Blue---100, #015CAB)"};
  font-size: 15px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 4px;
  direction: ${({isRtl:a})=>a?"ltr":"rtl"};
  text-wrap: nowrap;
`,lk=k.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,d0=k.button`
  width: 20px;
  height: 20px;
  border: 1px solid var(--Colors-Base-Black, black);
  background: transparent;
  color: #222;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ck=k.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,uk=k.span`
  color: black;
  font-size: 16px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
`,dk=k.span`
  color: black;
  font-size: 24px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`,fk=k.input`
  color: black;
  font-size: 24px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid #fbae42;
  border-radius: 4px;
  padding: 2px 6px;
  width: 80px;
  text-align: center;
  outline: none;

  &:focus {
    border-color: #015cab;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`,mk=k.button`
  width: 20px;
  height: 20px;
  background: transparent;
  color: #f00000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
`,pk=k.p`
  color: var(--Colors-Red-Red, #f00000);
  font-size: 15px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  text-align: ${({isRtl:a})=>a?"right":"left"};
  margin: 5px 0;
  direction: ${({isRtl:a})=>a?"rtl":"ltr"};
`;k.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
  direction: ${({isRtl:a})=>a?"rtl":"ltr"};
`;k.label`
  color: var(--Colors-Base-Black, black);
  font-size: 1rem;
  font-family: Cairo;
  font-weight: 400;
  padding: 1rem;
  cursor: pointer;

  a {
    color: var(--Colors-Blue-Blue---100, #015cab);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;k.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid var(--Colors-Grey-Grey---800, #dfdfdf);
`;k.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-direction: ${({isRtl:a})=>a?"row":"row-reverse"};
  @media (max-width: 490px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;k.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: ${({isRtl:a})=>a?"row-reverse":"row"};
`;k.span`
  color: black;
  font-size: 16px;
  font-family: Cairo;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
`;k.span`
  color: black;
  font-size: 32px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
`;k.span`
  color: black;
  font-size: 24px;
  font-family: Cairo;
  font-weight: 600;
  text-transform: uppercase;
`;const f0=k.button`
  flex: 1;
  height: 50px;
  padding: 6px 19px;
  background: var(--Colors-Orange-Orange, #fbae42);
  border-radius: 10px;
  border: none;
  color: var(--Colors-Base-White, white);
  font-size: 16px;
  font-family: Cairo;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  @media (max-width: 490px) {
    padding: 15px 20px;
  }

  &:hover {
    background: #e0a92e;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,hk=k.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  direction: ${({isRtl:a})=>a?"rtl":"ltr"};
`,gk=k.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`,yk=()=>{const{cartItems:a,removeFromCart:o,updateQuantity:c,decreaseQuantity:s,updatePrice:d,getTotalPrice:f,isDrawerOpen:p,setIsDrawerOpen:h,updateDonationIntention:g,isLoadingCart:y}=yc(),{i18n:T,t:x}=tn(),S=T.resolvedLanguage==="ar",[D,C]=_.useState(null),[R,A]=_.useState({}),z=as(),{isAuthenticated:M}=Zf(),w=_.useCallback(()=>{h(!1)},[h]);_.useEffect(()=>{p&&typeof performance<"u"&&performance.mark&&performance.mark("cart-open")},[p]);const E=v=>v?.isShareInSakk?1:v?.campaign?.basePrice||v?.shareValue||1,L=_.useMemo(()=>({display:"flex",alignItems:"center",gap:1}),[]),B=(v,I)=>{const q=Number(I);A(J=>({...J,[v.id]:q}))},Q=v=>{const I=Number(v?.campaign?.basePrice);if(I>=0){const q=R[v.id]??v.amount,J=v?.campaign?.campaignTypeId;let se=q;if(v.isInstallmentPayment&&v.installmentMonths>1){const $=I*v.installmentMonths;q<$&&(se=$)}else q<I&&(se=I);J===4&&Math.round(se/I)>7&&(se=I*7),A($=>({...$,[v.id]:se})),d(v.id,se,!0)}C(null)},j=(v,I)=>{I.isShareInSakk||I.isInstallmentPayment||I?.campaign?.campaignTypeId===4||(R[v]===void 0&&A(q=>({...q,[v]:I.amount})),C(v))},F=v=>{v.key==="Enter"&&v.target.blur()},O=(v,I)=>{const q=a?.items?.find(se=>se.id===v);if(!q||!q?.campaign?.intentions)return;const J=q?.campaign?.intentions.find(se=>se.id===Number(I));J&&g(v,J.id)};return _.useEffect(()=>{a?.items?.length>0&&a?.items?.forEach(v=>{A(I=>{const q={...I};return q[v.id]=v.amount,q})})},[a]),p?y?u.jsxs(n0,{children:[u.jsx(a0,{onClick:w}),u.jsxs(i0,{children:[u.jsxs(o0,{isRTL:S,children:[u.jsx(r0,{children:S?"سلة التبرع":"Donation Cart"}),M&&u.jsx("div",{}),u.jsx(s0,{onClick:w,children:u.jsx(q0,{})})]}),u.jsx(l0,{children:u.jsxs(CE,{children:[u.jsx(DE,{}),x("common.loading")]})}),u.jsxs(c0,{isRTL:S,children:[u.jsxs(u0,{children:[u.jsx("span",{children:x("common.total")}),u.jsxs("span",{children:[Math.round(f())," ",S?"ج.م":"EGP"]})]}),u.jsx(f0,{disabled:a?.items?.length===0,onClick:()=>{h(!1),z({to:"/payment"})},children:x("common.proceedToCheckout")})]})]})]}):u.jsxs(n0,{children:[u.jsx(a0,{onClick:w}),u.jsxs(i0,{children:[u.jsxs(o0,{isRTL:S,children:[u.jsx("div",{style:L,children:u.jsxs(r0,{children:[u.jsx(fb,{src:db,alt:"Cart",style:{width:"30px",height:"30px"},loading:"eager",fetchPriority:"high",decoding:"async"}),S?"سلة التبرع":"Donation Cart"]})}),u.jsxs(s0,{onClick:w,children:[u.jsxs("p",{style:{fontSize:"1rem"},children:[" ",S?"غلق":"Close"]}),u.jsx(X0,{})]})]}),u.jsx(l0,{children:a?.items?.length===0?u.jsx("p",{style:{textAlign:"center",color:"#888",marginTop:40},children:S?"سلتك فارغة":"Your cart is empty"}):a?.items?.map(v=>{const I=v?.campaign?.intentions||[];return u.jsxs(_.Fragment,{children:[u.jsxs(JD,{isRtl:S,error:!!(S?v.errorAr:v.errorEn)||!v.donationIntention&&v.campaign.id!==1054,children:[u.jsx(mk,{onClick:()=>o(v.id),children:u.jsx(nw,{size:16})}),u.jsxs(lk,{children:[u.jsx(d0,{onClick:()=>s(v.id),disabled:v.isInstallmentPayment||v.amount<=E(v),children:u.jsx(aw,{size:16})}),u.jsxs(ck,{children:[u.jsx(uk,{children:"ج.م."}),D===v.id?u.jsx(fk,{type:"number",value:R[v.id]??v.amount,onChange:q=>{const J=parseFloat(q.target.value)||0;B(v,J)},onBlur:()=>Q(v),onFocus:()=>j(v.id,v),onKeyPress:q=>F(q),min:v?.campaign?.basePrice,max:v?.campaign?.campaignTypeId===4?v?.campaign?.basePrice*7:void 0,disabled:v.isShareInSakk||v.isInstallmentPayment||v?.campaign?.campaignTypeId===4}):u.jsx(dk,{onClick:()=>{!v.isShareInSakk&&!v.isInstallmentPayment&&v?.campaign?.campaignTypeId!==4&&j(v.id,v)},style:{cursor:v.isShareInSakk||v.isInstallmentPayment||v?.campaign?.campaignTypeId===4?"not-allowed":"pointer",opacity:v.isShareInSakk||v.isInstallmentPayment||v?.campaign?.campaignTypeId===4?.6:1},children:R[v.id]??v.amount})]}),u.jsx(d0,{onClick:()=>c(v.id),disabled:v.isInstallmentPayment||v?.campaign?.campaignTypeId===4&&(v?.numberOfShares||1)>=7,children:u.jsx(iw,{size:16})})]}),u.jsxs(tk,{isRtl:S,children:[u.jsx(nk,{isRtl:S,children:v?.campaign?.keyWords&&v?.campaign?.keyWords.map(q=>u.jsxs(ak,{children:["#",S?q.nameAr:q.nameEn]},q.id))}),u.jsx(ik,{children:S?v?.campaign?.titleAr:v?.campaign?.titleEn}),v.isInstallmentPayment&&v.installmentMonths>1&&u.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"8px",textAlign:S?"right":"left"},children:S?`دفع بالتقسيط (${v.installmentMonths} أشهر)`:`Installment Payment (${v.installmentMonths} months)`}),v.campaign.id===1054&&u.jsx("div",{children:u.jsxs("p",{children:[S?"سيتم التبرع بقيمة عدد وجبات":"you will donate by number of meals",": ",v.amount/5," ",S?"وجبة ":"meals"]})}),v.isShareInSakk&&u.jsx("div",{style:{fontSize:"12px",color:"#28a745",marginBottom:"8px",textAlign:S?"right":"left",fontWeight:"500"},children:S?"مشاركة في صك":"Share in Sakk"}),v.campaign.id!==1054&&u.jsxs(ok,{isRtl:S,children:[u.jsxs(gk,{children:[u.jsxs(sk,{isRtl:S,error:!v.donationIntention,children:[v.donationIntention?S?I.find(q=>q.id===v.donationIntention)?.nameAr:I.find(q=>q.id===v.donationIntention)?.nameEn:x("common.selectIntention"),u.jsx(ow,{})]}),u.jsxs(hk,{value:v.donationIntention||"",onChange:q=>O(v.id,q.target.value),children:[u.jsx("option",{style:{direction:S?"rtl":"ltr"},value:"",children:x("common.selectIntention")}),I.map(q=>u.jsx("option",{style:{direction:S?"rtl":"ltr"},value:q.id,children:S?q.nameAr:q.nameEn},q.id))]})]}),u.jsxs(rk,{isRtl:S,children:[x("common.donateIntention"),":"]})]})]}),u.jsx(ek,{src:"https://lifemakers.org/Public/"+v?.campaign?.imageUrl,alt:S?v?.campaign?.titleAr:v?.campaign?.titleEn})]}),((S?v.errorAr:v.errorEn)||!v.donationIntention&&v.campaign.id!==1054)&&u.jsxs(pk,{isRtl:S,children:["*"," ",v.donationIntention?S?v.errorAr:v.errorEn:x("common.donateIntentionRequired")]})]},v.id)})}),u.jsxs(c0,{isRTL:S,children:[u.jsxs(u0,{children:[u.jsx("span",{children:x("common.total")}),u.jsxs("span",{children:[Math.round(f())," ",S?"ج.م":"EGP"]})]}),u.jsx(f0,{disabled:a?.items?.length===0,onClick:()=>{h(!1),z({to:"/payment"})},children:x("common.proceedToCheckout")})]})]})]}):null},vk=we.memo(yk),bk="/ta-lm/assets/error-CIDwolCd.png",xk=k.div`
  min-height: 100vh;
  background-color: white;
`,wk=k.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Sk=k.div`
  text-align: center;
`,Tk=k.img`
  margin: 0 auto 2rem;
  width: 100%;
  height: 16rem;
`,Ak=k.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
  margin-top: 1rem;
`,Ek=k(ga)`
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  display: inline-block;
  color: white;
  background-color: #2563eb;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;class wb extends we.Component{constructor(o){super(o),this.state={hasError:!1}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,c){console.error(o,c)}render(){return this.state.hasError?u.jsx(_k,{error:this.state.error}):this.props.children}}function _k(){const{t:a,i18n:o}=tn(),c=o.resolvedLanguage==="ar",s=P0(),d=s.pathname.startsWith("/checkout");return Ff("DonationIntention"),u.jsxs(xk,{children:[u.jsx(Kf,{location:s}),u.jsx(wk,{children:u.jsxs(Sk,{children:[u.jsx(Tk,{src:bk,alt:c?"صورة خطأ":"Error image"}),u.jsx(Ak,{children:c?"حدث خطأ ما اثناء تحميل الصفحه":"Something went wrong while loading the page."}),u.jsx(Ek,{to:"/",children:a("common.backToHome")})]})}),u.jsx(vb,{}),!d&&u.jsx(xb,{})]})}function ye({children:a,fallback:o=null,ErrorComponent:c=null}){return u.jsx(wb,{children:u.jsx(_.Suspense,{fallback:o,children:a})})}const Ck=we.createContext({}),Sb=!0;function Dk({baseColor:a,highlightColor:o,width:c,height:s,borderRadius:d,circle:f,direction:p,duration:h,enableAnimation:g=Sb,customHighlightBackground:y}){const T={};return p==="rtl"&&(T["--animation-direction"]="reverse"),typeof h=="number"&&(T["--animation-duration"]=`${h}s`),g||(T["--pseudo-element-display"]="none"),(typeof c=="string"||typeof c=="number")&&(T.width=c),(typeof s=="string"||typeof s=="number")&&(T.height=s),(typeof d=="string"||typeof d=="number")&&(T.borderRadius=d),f&&(T.borderRadius="50%"),typeof a<"u"&&(T["--base-color"]=a),typeof o<"u"&&(T["--highlight-color"]=o),typeof y=="string"&&(T["--custom-highlight-background"]=y),T}function An({count:a=1,wrapper:o,className:c,containerClassName:s,containerTestId:d,circle:f=!1,style:p,...h}){var g,y,T;const x=we.useContext(Ck),S={...h};for(const[w,E]of Object.entries(h))typeof E>"u"&&delete S[w];const D={...x,...S,circle:f},C={...p,...Dk(D)};let R="react-loading-skeleton";c&&(R+=` ${c}`);const A=(g=D.inline)!==null&&g!==void 0?g:!1,z=[],M=Math.ceil(a);for(let w=0;w<M;w++){let E=C;if(M>a&&w===M-1){const B=(y=E.width)!==null&&y!==void 0?y:"100%",Q=a%1,j=typeof B=="number"?B*Q:`calc(${B} * ${Q})`;E={...E,width:j}}const L=we.createElement("span",{className:R,style:E,key:w},"‌");A?z.push(L):z.push(we.createElement(we.Fragment,{key:w},L,we.createElement("br",null)))}return we.createElement("span",{className:s,"data-testid":d,"aria-live":"polite","aria-busy":(T=D.enableAnimation)!==null&&T!==void 0?T:Sb},o?z.map((w,E)=>we.createElement(o,{key:E},w)):z)}const kk=k.section`
  padding: 2rem 4rem;
  max-width: 98%;
  margin: 0 auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: 160px;
  }
`,jk=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,Ok=k.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
`;function ve({minHeight:a}={}){return u.jsxs(kk,{style:a?{minHeight:a}:void 0,children:[u.jsxs(jk,{children:[u.jsx(An,{height:32,width:180}),u.jsx(An,{height:24,width:80})]}),u.jsxs(Ok,{children:[u.jsx(An,{height:120,count:1}),u.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[u.jsx(An,{height:80,width:"30%"}),u.jsx(An,{height:80,width:"30%"}),u.jsx(An,{height:80,width:"30%"})]})]})]})}const Ya=()=>{const a=Un.get("isLoggedIn"),o=sessionStorage.getItem("isLoggedIn");(a===void 0||a==="undefined")&&Un.remove("isLoggedIn"),(o===void 0||o==="undefined")&&sessionStorage.removeItem("isLoggedIn");const c=o!=="undefined"&&o||a!=="undefined"&&a;return{isAuthenticated:!!c,token:c}},Mk=k.div`
  min-height: 100dvh;
  width: 100%;
`,m0=k.section`
  position: relative;
  min-height: 330px;
  max-height: 700px;
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--primary-light) 0.03%,
    #014976 24.98%
  );
  transition: background-color 0.5s;
  padding: 3rem 1.5rem;
  margin: 0 auto;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    min-height: 420px;
    max-height: 800px;
    padding: 4.5rem 2rem;
  }
  @media (min-width: 768px) {
    min-height: 480px;
    max-height: 800px;
    padding: 5rem 4rem;
  }
  @media (max-width: 479px) {
    min-height: 260px;
    padding: 2rem 0.5rem;
  }
`,p0=k.div`
  max-width: 98%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    flex-wrap: nowrap;
  }
`,h0=k.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    width: 50%;
    align-items: flex-start;
    text-align: right;
  }
`,g0=k.h1.withConfig({shouldForwardProp:a=>a!=="isRtl"})`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-align: center;
  @media (min-width: 480px) {
    font-size: 2.5rem;
    text-align: ${({isRtl:a})=>a?"right":"left"};
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    text-align: ${({isRtl:a})=>a?"right":"left"};
  }
`,y0=k.div.withConfig({shouldForwardProp:a=>a!=="isRtl"})`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #e5e7eb;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  @media (min-width: 480px) {
    font-size: 1.25rem;
    text-align: ${({isRtl:a})=>a?"right":"left"};
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    text-align: ${({isRtl:a})=>a?"right":"left"};
  }
`,v0=k.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`,b0=k.span`
  font-size: 1rem;
  color: #e5e7eb;

  @media (min-width: 480px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,x0=k.span`
  font-size: 1.125rem;
  font-weight: bold;
  color: white;

  @media (min-width: 480px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,w0=k.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 480px) {
    flex-direction: row;
    width: auto;
  }
`,Tb=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  width: 100%;

  @media (min-width: 480px) {
    width: auto;
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
  }
`,Rk=k(Tb)`
  background-color: var(--primary-light);
  color: white;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`,zk=k(Tb)`
  background-color: var(--secondary-color);
  color: white;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`,Ik=k.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  padding: 0 1rem;
`,Lk=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${""}
  width: 100%;
  justify-content: center;
`,Hl=k.button`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;
  @media (min-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`,S0=k.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 480px) {
    gap: 0.75rem;
  }
`,T0=k.button.withConfig({shouldForwardProp:a=>a!=="active"})`
  transition: all 0.3s;
  border: none;
  outline: none;
  background-color: ${a=>a.active?"#FFB43A":"#D9D9D9"};
  border-radius: 9999px;
  width: ${a=>a.active?"1.5rem":"0.75rem"};
  height: 0.5rem;
  cursor: pointer;

  @media (min-width: 480px) {
    width: ${a=>a.active?"2rem":"1rem"};
    height: 0.8rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`,A0=k.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`,E0=k.img`
  max-width: 100%;
  max-height: 300px;
  height: auto;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
  /* Optimize for LCP: Prevent layout shift and ensure fast rendering */
  display: block;
  will-change: auto;

  @media (min-width: 480px) {
    max-height: 400px;
  }
  @media (min-width: 768px) {
    max-height: 500px;
  }
`;k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
  background-color: #f5f5f5;
`;const Nk=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
  background-color: #f5f5f5;
  color: #ef4444;
`;/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:Ab,setPrototypeOf:_0,isFrozen:Uk,getPrototypeOf:Pk,getOwnPropertyDescriptor:Bk}=Object;let{freeze:zt,seal:gn,create:kf}=Object,{apply:jf,construct:Of}=typeof Reflect<"u"&&Reflect;zt||(zt=function(o){return o});gn||(gn=function(o){return o});jf||(jf=function(o,c){for(var s=arguments.length,d=new Array(s>2?s-2:0),f=2;f<s;f++)d[f-2]=arguments[f];return o.apply(c,d)});Of||(Of=function(o){for(var c=arguments.length,s=new Array(c>1?c-1:0),d=1;d<c;d++)s[d-1]=arguments[d];return new o(...s)});const Vl=It(Array.prototype.forEach),qk=It(Array.prototype.lastIndexOf),C0=It(Array.prototype.pop),Ir=It(Array.prototype.push),Hk=It(Array.prototype.splice),Xl=It(String.prototype.toLowerCase),Jd=It(String.prototype.toString),ef=It(String.prototype.match),Lr=It(String.prototype.replace),Vk=It(String.prototype.indexOf),Qk=It(String.prototype.trim),Sn=It(Object.prototype.hasOwnProperty),Mt=It(RegExp.prototype.test),Nr=Gk(TypeError);function It(a){return function(o){o instanceof RegExp&&(o.lastIndex=0);for(var c=arguments.length,s=new Array(c>1?c-1:0),d=1;d<c;d++)s[d-1]=arguments[d];return jf(a,o,s)}}function Gk(a){return function(){for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return Of(a,c)}}function Le(a,o){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xl;_0&&_0(a,null);let s=o.length;for(;s--;){let d=o[s];if(typeof d=="string"){const f=c(d);f!==d&&(Uk(o)||(o[s]=f),d=f)}a[d]=!0}return a}function Fk(a){for(let o=0;o<a.length;o++)Sn(a,o)||(a[o]=null);return a}function fa(a){const o=kf(null);for(const[c,s]of Ab(a))Sn(a,c)&&(Array.isArray(s)?o[c]=Fk(s):s&&typeof s=="object"&&s.constructor===Object?o[c]=fa(s):o[c]=s);return o}function Ur(a,o){for(;a!==null;){const s=Bk(a,o);if(s){if(s.get)return It(s.get);if(typeof s.value=="function")return It(s.value)}a=Pk(a)}function c(){return null}return c}const D0=zt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),tf=zt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),nf=zt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),$k=zt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),af=zt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Yk=zt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),k0=zt(["#text"]),j0=zt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),of=zt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),O0=zt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ql=zt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Xk=gn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Zk=gn(/<%[\w\W]*|[\w\W]*%>/gm),Kk=gn(/\$\{[\w\W]*/gm),Wk=gn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Jk=gn(/^aria-[\-\w]+$/),Eb=gn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),e3=gn(/^(?:\w+script|data):/i),t3=gn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),_b=gn(/^html$/i),n3=gn(/^[a-z][.\w]*(-[.\w]+)+$/i);var M0=Object.freeze({__proto__:null,ARIA_ATTR:Jk,ATTR_WHITESPACE:t3,CUSTOM_ELEMENT:n3,DATA_ATTR:Wk,DOCTYPE_NAME:_b,ERB_EXPR:Zk,IS_ALLOWED_URI:Eb,IS_SCRIPT_OR_DATA:e3,MUSTACHE_EXPR:Xk,TMPLIT_EXPR:Kk});const Pr={element:1,text:3,progressingInstruction:7,comment:8,document:9},a3=function(){return typeof window>"u"?null:window},i3=function(o,c){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let s=null;const d="data-tt-policy-suffix";c&&c.hasAttribute(d)&&(s=c.getAttribute(d));const f="dompurify"+(s?"#"+s:"");try{return o.createPolicy(f,{createHTML(p){return p},createScriptURL(p){return p}})}catch{return console.warn("TrustedTypes policy "+f+" could not be created."),null}},R0=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Cb(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a3();const o=Se=>Cb(Se);if(o.version="3.3.0",o.removed=[],!a||!a.document||a.document.nodeType!==Pr.document||!a.Element)return o.isSupported=!1,o;let{document:c}=a;const s=c,d=s.currentScript,{DocumentFragment:f,HTMLTemplateElement:p,Node:h,Element:g,NodeFilter:y,NamedNodeMap:T=a.NamedNodeMap||a.MozNamedAttrMap,HTMLFormElement:x,DOMParser:S,trustedTypes:D}=a,C=g.prototype,R=Ur(C,"cloneNode"),A=Ur(C,"remove"),z=Ur(C,"nextSibling"),M=Ur(C,"childNodes"),w=Ur(C,"parentNode");if(typeof p=="function"){const Se=c.createElement("template");Se.content&&Se.content.ownerDocument&&(c=Se.content.ownerDocument)}let E,L="";const{implementation:B,createNodeIterator:Q,createDocumentFragment:j,getElementsByTagName:F}=c,{importNode:O}=s;let v=R0();o.isSupported=typeof Ab=="function"&&typeof w=="function"&&B&&B.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:I,ERB_EXPR:q,TMPLIT_EXPR:J,DATA_ATTR:se,ARIA_ATTR:$,IS_SCRIPT_OR_DATA:H,ATTR_WHITESPACE:N,CUSTOM_ELEMENT:P}=M0;let{IS_ALLOWED_URI:X}=M0,Z=null;const ce=Le({},[...D0,...tf,...nf,...af,...k0]);let ae=null;const oe=Le({},[...j0,...of,...O0,...Ql]);let te=Object.seal(kf(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),fe=null,ue=null;const Ee=Object.seal(kf(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let xe=!0,me=!0,ke=!1,Xe=!0,Ze=!1,Je=!0,Ke=!1,vt=!1,Gt=!1,Ft=!1,jn=!1,yn=!1,va=!0,fs=!1;const vc="user-content-";let St=!0,Xa=!1,Pn={},Bn=null;const Za=Le({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ms=null;const Co=Le({},["audio","video","img","source","image","track"]);let Do=null;const ps=Le({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),On="http://www.w3.org/1998/Math/MathML",bt="http://www.w3.org/2000/svg",xt="http://www.w3.org/1999/xhtml";let ct=xt,ko=!1,jo=null;const bc=Le({},[On,bt,xt],Jd);let qn=Le({},["mi","mo","mn","ms","mtext"]),Hn=Le({},["annotation-xml"]);const Di=Le({},["title","style","font","a","script"]);let $t=null;const ki=["application/xhtml+xml","text/html"],Ka="text/html";let ut=null,Vn=null;const Oo=c.createElement("form"),ba=function(V){return V instanceof RegExp||V instanceof Function},Mo=function(){let V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Vn&&Vn===V)){if((!V||typeof V!="object")&&(V={}),V=fa(V),$t=ki.indexOf(V.PARSER_MEDIA_TYPE)===-1?Ka:V.PARSER_MEDIA_TYPE,ut=$t==="application/xhtml+xml"?Jd:Xl,Z=Sn(V,"ALLOWED_TAGS")?Le({},V.ALLOWED_TAGS,ut):ce,ae=Sn(V,"ALLOWED_ATTR")?Le({},V.ALLOWED_ATTR,ut):oe,jo=Sn(V,"ALLOWED_NAMESPACES")?Le({},V.ALLOWED_NAMESPACES,Jd):bc,Do=Sn(V,"ADD_URI_SAFE_ATTR")?Le(fa(ps),V.ADD_URI_SAFE_ATTR,ut):ps,ms=Sn(V,"ADD_DATA_URI_TAGS")?Le(fa(Co),V.ADD_DATA_URI_TAGS,ut):Co,Bn=Sn(V,"FORBID_CONTENTS")?Le({},V.FORBID_CONTENTS,ut):Za,fe=Sn(V,"FORBID_TAGS")?Le({},V.FORBID_TAGS,ut):fa({}),ue=Sn(V,"FORBID_ATTR")?Le({},V.FORBID_ATTR,ut):fa({}),Pn=Sn(V,"USE_PROFILES")?V.USE_PROFILES:!1,xe=V.ALLOW_ARIA_ATTR!==!1,me=V.ALLOW_DATA_ATTR!==!1,ke=V.ALLOW_UNKNOWN_PROTOCOLS||!1,Xe=V.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ze=V.SAFE_FOR_TEMPLATES||!1,Je=V.SAFE_FOR_XML!==!1,Ke=V.WHOLE_DOCUMENT||!1,Ft=V.RETURN_DOM||!1,jn=V.RETURN_DOM_FRAGMENT||!1,yn=V.RETURN_TRUSTED_TYPE||!1,Gt=V.FORCE_BODY||!1,va=V.SANITIZE_DOM!==!1,fs=V.SANITIZE_NAMED_PROPS||!1,St=V.KEEP_CONTENT!==!1,Xa=V.IN_PLACE||!1,X=V.ALLOWED_URI_REGEXP||Eb,ct=V.NAMESPACE||xt,qn=V.MATHML_TEXT_INTEGRATION_POINTS||qn,Hn=V.HTML_INTEGRATION_POINTS||Hn,te=V.CUSTOM_ELEMENT_HANDLING||{},V.CUSTOM_ELEMENT_HANDLING&&ba(V.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(te.tagNameCheck=V.CUSTOM_ELEMENT_HANDLING.tagNameCheck),V.CUSTOM_ELEMENT_HANDLING&&ba(V.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(te.attributeNameCheck=V.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),V.CUSTOM_ELEMENT_HANDLING&&typeof V.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(te.allowCustomizedBuiltInElements=V.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ze&&(me=!1),jn&&(Ft=!0),Pn&&(Z=Le({},k0),ae=[],Pn.html===!0&&(Le(Z,D0),Le(ae,j0)),Pn.svg===!0&&(Le(Z,tf),Le(ae,of),Le(ae,Ql)),Pn.svgFilters===!0&&(Le(Z,nf),Le(ae,of),Le(ae,Ql)),Pn.mathMl===!0&&(Le(Z,af),Le(ae,O0),Le(ae,Ql))),V.ADD_TAGS&&(typeof V.ADD_TAGS=="function"?Ee.tagCheck=V.ADD_TAGS:(Z===ce&&(Z=fa(Z)),Le(Z,V.ADD_TAGS,ut))),V.ADD_ATTR&&(typeof V.ADD_ATTR=="function"?Ee.attributeCheck=V.ADD_ATTR:(ae===oe&&(ae=fa(ae)),Le(ae,V.ADD_ATTR,ut))),V.ADD_URI_SAFE_ATTR&&Le(Do,V.ADD_URI_SAFE_ATTR,ut),V.FORBID_CONTENTS&&(Bn===Za&&(Bn=fa(Bn)),Le(Bn,V.FORBID_CONTENTS,ut)),St&&(Z["#text"]=!0),Ke&&Le(Z,["html","head","body"]),Z.table&&(Le(Z,["tbody"]),delete fe.tbody),V.TRUSTED_TYPES_POLICY){if(typeof V.TRUSTED_TYPES_POLICY.createHTML!="function")throw Nr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof V.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Nr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=V.TRUSTED_TYPES_POLICY,L=E.createHTML("")}else E===void 0&&(E=i3(D,d)),E!==null&&typeof L=="string"&&(L=E.createHTML(""));zt&&zt(V),Vn=V}},Ro=Le({},[...tf,...nf,...$k]),zo=Le({},[...af,...Yk]),hs=function(V){let de=w(V);(!de||!de.tagName)&&(de={namespaceURI:ct,tagName:"template"});const he=Xl(V.tagName),Ve=Xl(de.tagName);return jo[V.namespaceURI]?V.namespaceURI===bt?de.namespaceURI===xt?he==="svg":de.namespaceURI===On?he==="svg"&&(Ve==="annotation-xml"||qn[Ve]):!!Ro[he]:V.namespaceURI===On?de.namespaceURI===xt?he==="math":de.namespaceURI===bt?he==="math"&&Hn[Ve]:!!zo[he]:V.namespaceURI===xt?de.namespaceURI===bt&&!Hn[Ve]||de.namespaceURI===On&&!qn[Ve]?!1:!zo[he]&&(Di[he]||!Ro[he]):!!($t==="application/xhtml+xml"&&jo[V.namespaceURI]):!1},Lt=function(V){Ir(o.removed,{element:V});try{w(V).removeChild(V)}catch{A(V)}},vn=function(V,de){try{Ir(o.removed,{attribute:de.getAttributeNode(V),from:de})}catch{Ir(o.removed,{attribute:null,from:de})}if(de.removeAttribute(V),V==="is")if(Ft||jn)try{Lt(de)}catch{}else try{de.setAttribute(V,"")}catch{}},Io=function(V){let de=null,he=null;if(Gt)V="<remove></remove>"+V;else{const Re=ef(V,/^[\r\n\t ]+/);he=Re&&Re[0]}$t==="application/xhtml+xml"&&ct===xt&&(V='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+V+"</body></html>");const Ve=E?E.createHTML(V):V;if(ct===xt)try{de=new S().parseFromString(Ve,$t)}catch{}if(!de||!de.documentElement){de=B.createDocument(ct,"template",null);try{de.documentElement.innerHTML=ko?L:Ve}catch{}}const it=de.body||de.documentElement;return V&&he&&it.insertBefore(c.createTextNode(he),it.childNodes[0]||null),ct===xt?F.call(de,Ke?"html":"body")[0]:Ke?de.documentElement:it},Lo=function(V){return Q.call(V.ownerDocument||V,V,y.SHOW_ELEMENT|y.SHOW_COMMENT|y.SHOW_TEXT|y.SHOW_PROCESSING_INSTRUCTION|y.SHOW_CDATA_SECTION,null)},nn=function(V){return V instanceof x&&(typeof V.nodeName!="string"||typeof V.textContent!="string"||typeof V.removeChild!="function"||!(V.attributes instanceof T)||typeof V.removeAttribute!="function"||typeof V.setAttribute!="function"||typeof V.namespaceURI!="string"||typeof V.insertBefore!="function"||typeof V.hasChildNodes!="function")},dt=function(V){return typeof h=="function"&&V instanceof h};function nt(Se,V,de){Vl(Se,he=>{he.call(o,V,de,Vn)})}const Qn=function(V){let de=null;if(nt(v.beforeSanitizeElements,V,null),nn(V))return Lt(V),!0;const he=ut(V.nodeName);if(nt(v.uponSanitizeElement,V,{tagName:he,allowedTags:Z}),Je&&V.hasChildNodes()&&!dt(V.firstElementChild)&&Mt(/<[/\w!]/g,V.innerHTML)&&Mt(/<[/\w!]/g,V.textContent)||V.nodeType===Pr.progressingInstruction||Je&&V.nodeType===Pr.comment&&Mt(/<[/\w]/g,V.data))return Lt(V),!0;if(!(Ee.tagCheck instanceof Function&&Ee.tagCheck(he))&&(!Z[he]||fe[he])){if(!fe[he]&&gs(he)&&(te.tagNameCheck instanceof RegExp&&Mt(te.tagNameCheck,he)||te.tagNameCheck instanceof Function&&te.tagNameCheck(he)))return!1;if(St&&!Bn[he]){const Ve=w(V)||V.parentNode,it=M(V)||V.childNodes;if(it&&Ve){const Re=it.length;for(let Tt=Re-1;Tt>=0;--Tt){const an=R(it[Tt],!0);an.__removalCount=(V.__removalCount||0)+1,Ve.insertBefore(an,z(V))}}}return Lt(V),!0}return V instanceof g&&!hs(V)||(he==="noscript"||he==="noembed"||he==="noframes")&&Mt(/<\/no(script|embed|frames)/i,V.innerHTML)?(Lt(V),!0):(Ze&&V.nodeType===Pr.text&&(de=V.textContent,Vl([I,q,J],Ve=>{de=Lr(de,Ve," ")}),V.textContent!==de&&(Ir(o.removed,{element:V.cloneNode()}),V.textContent=de)),nt(v.afterSanitizeElements,V,null),!1)},ji=function(V,de,he){if(va&&(de==="id"||de==="name")&&(he in c||he in Oo))return!1;if(!(me&&!ue[de]&&Mt(se,de))){if(!(xe&&Mt($,de))){if(!(Ee.attributeCheck instanceof Function&&Ee.attributeCheck(de,V))){if(!ae[de]||ue[de]){if(!(gs(V)&&(te.tagNameCheck instanceof RegExp&&Mt(te.tagNameCheck,V)||te.tagNameCheck instanceof Function&&te.tagNameCheck(V))&&(te.attributeNameCheck instanceof RegExp&&Mt(te.attributeNameCheck,de)||te.attributeNameCheck instanceof Function&&te.attributeNameCheck(de,V))||de==="is"&&te.allowCustomizedBuiltInElements&&(te.tagNameCheck instanceof RegExp&&Mt(te.tagNameCheck,he)||te.tagNameCheck instanceof Function&&te.tagNameCheck(he))))return!1}else if(!Do[de]){if(!Mt(X,Lr(he,N,""))){if(!((de==="src"||de==="xlink:href"||de==="href")&&V!=="script"&&Vk(he,"data:")===0&&ms[V])){if(!(ke&&!Mt(H,Lr(he,N,"")))){if(he)return!1}}}}}}}return!0},gs=function(V){return V!=="annotation-xml"&&ef(V,P)},ys=function(V){nt(v.beforeSanitizeAttributes,V,null);const{attributes:de}=V;if(!de||nn(V))return;const he={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ae,forceKeepAttr:void 0};let Ve=de.length;for(;Ve--;){const it=de[Ve],{name:Re,namespaceURI:Tt,value:an}=it,Nt=ut(Re),Mn=an;let gt=Re==="value"?Mn:Qk(Mn);if(he.attrName=Nt,he.attrValue=gt,he.keepAttr=!0,he.forceKeepAttr=void 0,nt(v.uponSanitizeAttribute,V,he),gt=he.attrValue,fs&&(Nt==="id"||Nt==="name")&&(vn(Re,V),gt=vc+gt),Je&&Mt(/((--!?|])>)|<\/(style|title|textarea)/i,gt)){vn(Re,V);continue}if(Nt==="attributename"&&ef(gt,"href")){vn(Re,V);continue}if(he.forceKeepAttr)continue;if(!he.keepAttr){vn(Re,V);continue}if(!Xe&&Mt(/\/>/i,gt)){vn(Re,V);continue}Ze&&Vl([I,q,J],Uo=>{gt=Lr(gt,Uo," ")});const No=ut(V.nodeName);if(!ji(No,Nt,gt)){vn(Re,V);continue}if(E&&typeof D=="object"&&typeof D.getAttributeType=="function"&&!Tt)switch(D.getAttributeType(No,Nt)){case"TrustedHTML":{gt=E.createHTML(gt);break}case"TrustedScriptURL":{gt=E.createScriptURL(gt);break}}if(gt!==Mn)try{Tt?V.setAttributeNS(Tt,Re,gt):V.setAttribute(Re,gt),nn(V)?Lt(V):C0(o.removed)}catch{vn(Re,V)}}nt(v.afterSanitizeAttributes,V,null)},vs=function Se(V){let de=null;const he=Lo(V);for(nt(v.beforeSanitizeShadowDOM,V,null);de=he.nextNode();)nt(v.uponSanitizeShadowNode,de,null),Qn(de),ys(de),de.content instanceof f&&Se(de.content);nt(v.afterSanitizeShadowDOM,V,null)};return o.sanitize=function(Se){let V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},de=null,he=null,Ve=null,it=null;if(ko=!Se,ko&&(Se="<!-->"),typeof Se!="string"&&!dt(Se))if(typeof Se.toString=="function"){if(Se=Se.toString(),typeof Se!="string")throw Nr("dirty is not a string, aborting")}else throw Nr("toString is not a function");if(!o.isSupported)return Se;if(vt||Mo(V),o.removed=[],typeof Se=="string"&&(Xa=!1),Xa){if(Se.nodeName){const an=ut(Se.nodeName);if(!Z[an]||fe[an])throw Nr("root node is forbidden and cannot be sanitized in-place")}}else if(Se instanceof h)de=Io("<!---->"),he=de.ownerDocument.importNode(Se,!0),he.nodeType===Pr.element&&he.nodeName==="BODY"||he.nodeName==="HTML"?de=he:de.appendChild(he);else{if(!Ft&&!Ze&&!Ke&&Se.indexOf("<")===-1)return E&&yn?E.createHTML(Se):Se;if(de=Io(Se),!de)return Ft?null:yn?L:""}de&&Gt&&Lt(de.firstChild);const Re=Lo(Xa?Se:de);for(;Ve=Re.nextNode();)Qn(Ve),ys(Ve),Ve.content instanceof f&&vs(Ve.content);if(Xa)return Se;if(Ft){if(jn)for(it=j.call(de.ownerDocument);de.firstChild;)it.appendChild(de.firstChild);else it=de;return(ae.shadowroot||ae.shadowrootmode)&&(it=O.call(s,it,!0)),it}let Tt=Ke?de.outerHTML:de.innerHTML;return Ke&&Z["!doctype"]&&de.ownerDocument&&de.ownerDocument.doctype&&de.ownerDocument.doctype.name&&Mt(_b,de.ownerDocument.doctype.name)&&(Tt="<!DOCTYPE "+de.ownerDocument.doctype.name+`>
`+Tt),Ze&&Vl([I,q,J],an=>{Tt=Lr(Tt,an," ")}),E&&yn?E.createHTML(Tt):Tt},o.setConfig=function(){let Se=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mo(Se),vt=!0},o.clearConfig=function(){Vn=null,vt=!1},o.isValidAttribute=function(Se,V,de){Vn||Mo({});const he=ut(Se),Ve=ut(V);return ji(he,Ve,de)},o.addHook=function(Se,V){typeof V=="function"&&Ir(v[Se],V)},o.removeHook=function(Se,V){if(V!==void 0){const de=qk(v[Se],V);return de===-1?void 0:Hk(v[Se],de,1)[0]}return C0(v[Se])},o.removeHooks=function(Se){v[Se]=[]},o.removeAllHooks=function(){v=R0()},o}var ic=Cb();const WM=Object.freeze(Object.defineProperty({__proto__:null,default:ic},Symbol.toStringTag,{value:"Module"})),o3=({html:a,allowedTags:o=["p","br","strong","b","em","i","u","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","img","span","div","table","thead","tbody","tr","td","th","hr"],allowedAttributes:c={a:["href","title","target","rel","style","class"],img:["src","alt","title","width","height","style","class"],"*":["class","id","style","dir","align"]},allowScripts:s=!1,allowIframes:d=!1,className:f,style:p,dir:h,onSanitize:g,as:y="div",...T})=>{const[x,S]=_.useState(!1);_.useEffect(()=>{S(!0)},[]);const D=_.useMemo(()=>{if(!a)return"";if(!x||typeof window>"u"||!ic)return a;const C=new Set;Object.keys(c).forEach(z=>{z==="*"?c[z].forEach(M=>C.add(M)):c[z].forEach(M=>C.add(M))});const R={ALLOWED_TAGS:o,ALLOWED_ATTR:Array.from(C),ALLOW_DATA_ATTR:!1,FORBID_TAGS:s?[]:d?["script","style"]:["script","style","iframe"],FORBID_ATTR:["onerror","onload","onclick","onmouseover","onmouseout","onfocus","onblur","onchange","onsubmit","onreset","onselect","onkeydown","onkeypress","onkeyup"],KEEP_CONTENT:!0,RETURN_DOM:!1,RETURN_DOM_FRAGMENT:!1,RETURN_TRUSTED_TYPE:!1,SANITIZE_DOM:!0,ADD_ATTR:["target","rel"]};let A=ic.sanitize(a,R);return A&&A.includes("<a")&&(A=A.replace(/<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi,(z,M,w,E)=>{if(w.startsWith("http://")||w.startsWith("https://")||w.startsWith("//")){let B=E||"";return B.includes("target=")||(B+=' target="_blank"'),B.includes("rel=")||(B+=' rel="noopener noreferrer"'),`<a ${M}href="${w}"${B}>`}return z})),g&&g(A),A},[a,o,c,s,d,g,x]);return D?u.jsx(y,{className:`dangerously-inner-html ${f||""}`.trim(),style:p,dir:h,dangerouslySetInnerHTML:{__html:D},...T}):null};function r3(){const{t:a,i18n:o}=tn(),[c,s]=_.useState(0),d=o.resolvedLanguage==="ar",f=as(),{cartItems:p,addToCart:h,updateCartItem:g}=yc(),y=zf(),{data:T,isLoading:x,error:S}=Mf({queryKey:["carousel"],queryFn:Xf,staleTime:300*1e3,cacheTime:1800*1e3,refetchOnMount:!1,refetchOnWindowFocus:!1,enabled:!0,refetchOnReconnect:!1,retry:1,retryDelay:100}),D=j=>(j||"").toString().trim().toLowerCase().replace(/[^a-z0-9]+/gi,"-").replace(/^-+|-+$/g,""),C=j=>(j||"").toString().trim().toLowerCase().replace(/[^\u0600-\u06FFa-z0-9]+/gi,"-").replace(/^-+|-+$/g,""),R=_.useMemo(()=>T?.data||[],[T]),A=R[c],z=typeof window<"u"?window.location.origin:"",M="https://lifemakers.org/Public/",w=_.useMemo(()=>{if(!R||R.length===0||!A)return null;const j={"@type":"ItemList",name:"Homepage hero carousel",itemListElement:R.map((O,v)=>{const I=d?O.title:O.titleEn,q=d?O.description:O.descriptionEn,J=(d?C(I):D(I))||"campaign",se=O.campaignId?`/campaign-details/${J}/${O.campaignId}`:"/";return{"@type":"Offer",position:v+1,priceSpecification:{"@type":"PriceSpecification",price:O.amount},url:`${z}${se}`,itemOffered:{"@type":"Product",name:I,description:q,image:`${M}${O.backgroundImage}`,sku:O.campaignId?String(O.campaignId):void 0}}})},F={"@type":"ImageObject",url:`${M}${A.backgroundImage}`,caption:(d?A.title:A.titleEn)||"Hero image"};return{"@context":"https://schema.org","@type":"WebPage",name:(d?A.title:A.titleEn)||"Home",description:(d?A.description:A.descriptionEn)||void 0,primaryImageOfPage:F,hasPart:j}},[R,A,d,z,M]);_.useEffect(()=>{if(R.length>0){let j;const F=()=>{j=setInterval(()=>{s(O=>(O+1)%R.length)},1e4)};if(window.requestIdleCallback){const O=window.requestIdleCallback(F,{timeout:1e3});return()=>{window.cancelIdleCallback(O),j&&clearInterval(j)}}else{const O=setTimeout(F,100);return()=>{clearTimeout(O),j&&clearInterval(j)}}}},[R.length]);const E=async j=>{try{const O=(await y(jy.initiate(j))).data;if(!O)return;if(O.campaignTypeId===4)f({to:"/adahy"});else{const v=(d?C(O.titleAr):D(O.titleEn))||"campaign";f({to:j===1054?"/campaign-details/aish-w-melh/$id":"/campaign-details/$slug/$id",params:{slug:v,id:j}})}}catch(F){console.error("Navigation Error:",F),Me.error(a("common.error"))}},L=()=>s(j=>(j-1+R.length)%R.length),B=()=>s(j=>(j+1)%R.length),Q=async j=>{try{const F=await y(jy.initiate(j));if(F.error){Me.error(a("common.error"));return}const O=F.data;if(!O)return;const v={id:O.id,amount:O.basePrice,donationAmountTypeId:O.amountTypeId,numberOfShares:1,shareValue:O.basePrice,campaignId:O.id,isShareInSakk:!1,isInstallmentPayment:!1,installmentMonths:1,sakkOwnerInfo:null,onBehalfInfo:null,campaign:{id:O.id,titleAr:O.titleAr,titleEn:O.titleEn,imageUrl:O.imageUrl,keyWords:O.keywords,intentions:O.donationIntentions,basePrice:O.basePrice}},I=p.items.find(q=>q.campaign.id===O.id);I?(g({donationId:I.id,campaignId:O.id,amount:O.basePrice,donationAmountTypeId:O.amountTypeId,numberOfShares:1,shareValue:O.basePrice,isShareInSakk:!1,isInstallmentPayment:!1,installmentMonths:1,sakkOwnerInfo:null,onBehalfInfo:null}),Me.info(d?`تم تحديث ${O.titleAr} في السلة`:`${O.titleEn} has been updated in cart!`)):(h(v),Me.success(d?`تم إضافة ${O.titleAr} إلى السلة`:`${O.titleEn} added to cart!`))}catch(F){console.error("Error fetching campaign:",F),Me.error(a("common.error"))}};return x||!A?u.jsx(m0,{className:"hero-section-critical",children:u.jsxs(p0,{className:"hero-content-critical",children:[u.jsxs(h0,{className:"hero-text-container-critical",children:[u.jsx(g0,{isRtl:d,children:u.jsx(An,{height:40})}),u.jsx(y0,{isRtl:d,children:u.jsx(An,{count:3})}),u.jsxs(v0,{children:[u.jsxs(b0,{children:[a("home.hero.shareValue"),":"]}),u.jsx(x0,{children:u.jsx(An,{width:100})})]}),u.jsx(w0,{children:u.jsx(An,{height:40,width:150})})]}),u.jsx(A0,{className:"hero-image-container-critical",children:u.jsx(E0,{src:null,alt:"",width:1200,height:675,className:"hero-image-critical",style:{backgroundColor:"rgba(0,0,0,0.1)",aspectRatio:"16 / 9",minHeight:"300px"},"aria-hidden":"true"})})]})}):S?u.jsx(Nk,{children:u.jsx("p",{children:a("common.error")})}):u.jsxs(m0,{className:"hero-section-critical",children:[u.jsxs(p0,{className:"hero-content-critical",children:[u.jsxs(h0,{className:"hero-text-container-critical",children:[u.jsx(g0,{isRtl:d,children:(d?A.title:A.titleEn)||u.jsx(An,{})}),u.jsx(y0,{isRtl:d,children:u.jsx(o3,{html:d?A.description:A.descriptionEn,as:"div"})}),u.jsxs(v0,{children:[u.jsxs(b0,{children:[a("home.hero.shareValue"),":"]}),u.jsxs(x0,{children:[A.amount," ",a("common.currency")]})]}),u.jsxs(w0,{children:[A.showAddToCartButton&&u.jsxs(Rk,{type:"button",onClick:()=>Q(A.campaignId),children:[u.jsx("span",{children:a("home.hero.addToCart")}),u.jsx("img",{src:bb,alt:"cart",width:20,height:20,loading:"eager",fetchPriority:"high",decoding:"async"})]}),A.showDonateButton&&u.jsxs(zk,{type:"button",onClick:()=>E(A.campaignId),children:[u.jsx("span",{children:a("home.hero.donate")}),u.jsx(Z0,{})]})]}),u.jsx(Ik,{children:u.jsx(Lk,{children:d?u.jsxs(u.Fragment,{children:[u.jsx(Hl,{onClick:B,"aria-label":"Next Slide",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"2.5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})}),u.jsx(S0,{children:R.map((j,F)=>u.jsx(T0,{onClick:()=>s(R.length-1-F),"aria-label":`Go to slide ${R.length-F}`,active:R.length-1-F===c},F))}),u.jsx(Hl,{onClick:L,"aria-label":"Previous Slide",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"2.5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})})]}):u.jsxs(u.Fragment,{children:[u.jsx(Hl,{onClick:L,"aria-label":"Previous Slide",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"2.5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})}),u.jsx(S0,{children:R.map((j,F)=>u.jsx(T0,{onClick:()=>s(F),"aria-label":`Go to slide ${F+1}`,active:F===c},F))}),u.jsx(Hl,{onClick:B,"aria-label":"Next Slide",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"2.5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})})]})})})]}),u.jsx(A0,{className:"hero-image-container-critical",children:u.jsx(E0,{src:`https://lifemakers.org/Public/${A.backgroundImage}`,alt:`${(d?A.title:A.titleEn)||"Campaign"} - ${a("home.hero.imageAlt",{defaultValue:"Campaign image"})}`,loading:"eager",fetchPriority:"high",width:1200,height:675,decoding:"async",className:"hero-image-critical",style:{opacity:1,willChange:"auto",aspectRatio:"16 / 9",minHeight:"300px"},onLoad:j=>{j.target.setAttribute("data-lcp-ready","true"),j.target.style.opacity="1"}})})]}),w&&u.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(w)}})]})}function ho({children:a,rootMargin:o="100px",fallback:c=null}){const[s,d]=_.useState(!1),f=_.useRef(null);return _.useEffect(()=>{const p=f.current;if(!p)return;const h=new IntersectionObserver(([g])=>{g.isIntersecting&&(d(!0),h.disconnect())},{rootMargin:o,threshold:.01});return h.observe(p),()=>{h.disconnect()}},[o]),s?u.jsx(u.Fragment,{children:a}):u.jsx("div",{ref:f,style:{height:1,minHeight:1,width:"100%",visibility:"hidden",pointerEvents:"none"},"aria-hidden":"true",children:c})}const rf="https://www.lifemakers.org";function s3({title:a,description:o,lang:c,openGraph:s={},twitter:d={},children:f}){const p=s?.ogImage,h=typeof p=="object"&&p?.ogImage?p.ogImage:"/Logo.svg",g=typeof p=="object"&&p?.ogImageAlt?p.ogImageAlt:"",y=s?.ogUrl||rf,T=s?.ogTitle??a,x=s?.ogDescription??o,S=d?.twitterSummaryCard||{},D=S?.summaryCardImage??h,C=S?.summaryCardImageAlt??g,R=S?.summaryCardSiteUsername?`@${String(S.summaryCardSiteUsername).replace(/^@/,"")}`:"";return u.jsxs(JT,{children:[a!=null&&u.jsx("title",{children:a}),o!=null&&u.jsx("meta",{name:"description",content:o}),c!=null&&u.jsx("html",{lang:c}),T!=null&&u.jsx("meta",{property:"og:title",content:T}),x!=null&&u.jsx("meta",{property:"og:description",content:x}),h&&u.jsx("meta",{property:"og:image",content:h.startsWith("http")?h:`${rf.replace(/\/$/,"")}${h.startsWith("/")?h:"/"+h}`}),g&&u.jsx("meta",{property:"og:image:alt",content:g}),u.jsx("meta",{property:"og:url",content:y}),u.jsx("meta",{property:"og:type",content:"website"}),u.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),T!=null&&u.jsx("meta",{name:"twitter:title",content:T}),x!=null&&u.jsx("meta",{name:"twitter:description",content:x}),D&&u.jsx("meta",{name:"twitter:image",content:D.startsWith("http")?D:`${rf.replace(/\/$/,"")}${D.startsWith("/")?D:"/"+D}`}),C&&u.jsx("meta",{name:"twitter:image:alt",content:C}),R&&u.jsx("meta",{name:"twitter:site",content:R}),f]})}const l3=_.lazy(()=>pe(()=>import("./CampaignsSection-DyuEyuhf.js"),__vite__mapDeps([0,1,2]))),c3=_.lazy(()=>pe(()=>import("./ProjectsSection-BbWJHA8h.js"),__vite__mapDeps([0,1,2]))),u3=_.lazy(()=>pe(()=>import("./StatisticsSection-Dg0Mlpe2.js"),__vite__mapDeps([0,1,2]))),d3=_.lazy(()=>pe(()=>import("./NewsSection-CrylP0Yo.js"),__vite__mapDeps([0,1,2]))),f3=_.lazy(()=>pe(()=>import("./Adahy-DzRjwP89.js"),__vite__mapDeps([0,1,2]))),m3=_.lazy(()=>pe(()=>import("./PartnersSection-i_iNJerR.js"),__vite__mapDeps([0,1,2]))),vi=({id:a,role:o,ariaLabel:c,children:s,...d})=>u.jsx("section",{id:a,role:o,"aria-label":c,...d,children:s});function p3(){const{t:a,i18n:o}=tn(),c=typeof window<"u"?window.location.origin:"",[s,d]=_.useState(!1);_.useEffect(()=>{typeof requestIdleCallback<"u"?requestIdleCallback(()=>d(!0),{timeout:1e3}):setTimeout(()=>d(!0),100)},[]);const[f,p]=_.useState([]);_.useEffect(()=>{const y=()=>{p([{id:"hero",name:o.resolvedLanguage==="ar"?"البطولة":"Hero"},{id:"campaigns",name:(o.resolvedLanguage==="ar",a("campaigns.title"))},{id:"adahy",name:o.resolvedLanguage==="ar"?"الأضاحي":"Adahy"},{id:"projects",name:a("projects.title")},{id:"statistics",name:o.resolvedLanguage==="ar"?a("statistics.title")||"الإحصائيات":a("statistics.title")||"Statistics"},{id:"news",name:o.resolvedLanguage==="ar"?a("news.title")||"الأخبار":a("news.title")||"News"},{id:"partners",name:o.resolvedLanguage==="ar"?a("partners.title")||"الشركاء":a("partners.title")||"Partners"}])};typeof requestIdleCallback<"u"?requestIdleCallback(y,{timeout:2e3}):setTimeout(y,200)},[o.resolvedLanguage,a]);const[h,g]=_.useState(null);return _.useEffect(()=>{if(!f.length)return;const y=()=>{const T=f.map(x=>({"@type":"WebPageElement",name:x.name,url:`${c}/#${x.id}`}));g({"@context":"https://schema.org","@type":"WebPage",name:a("home.title"),description:a("home.description"),inLanguage:o.resolvedLanguage,hasPart:T})};typeof requestIdleCallback<"u"?requestIdleCallback(y,{timeout:3e3}):setTimeout(y,300)},[f,c,o.resolvedLanguage,a]),u.jsxs(u.Fragment,{children:[s&&u.jsxs(s3,{title:`${a("home.title")} | ${o.resolvedLanguage==="ar"?"الرئيسية":"Home"}`,description:a("home.description"),lang:o.resolvedLanguage,openGraph:{ogImage:{ogImage:"/Logo.svg",ogImageAlt:o.resolvedLanguage==="ar"?"  الصفحة الرئيسية":"Home page"},ogUrl:"https://www.lifemakers.org",ogTitle:a("home.title"),ogDescription:a("home.description")},twitter:{twitterSummaryCard:{summaryCardImage:"/Logo.svg",summaryCardImageAlt:o.resolvedLanguage==="ar"?"الصفحة الرئيسية":"Home page",summaryCardSiteUsername:"LifeMakersOrg"}},children:[u.jsx("meta",{name:"title",content:`${a("home.title")} | ${o.resolvedLanguage==="ar"?"الرئيسية":"Home"}`}),u.jsx("meta",{name:"description",content:a("home.description")}),u.jsx("meta",{name:"keywords",content:"life makers, home page"}),u.jsx("meta",{name:"robots",content:"index, follow"}),u.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),u.jsx("meta",{name:"language",content:o.resolvedLanguage})]}),u.jsxs(Mk,{children:[u.jsxs("main",{id:"main-content",role:"main","aria-label":o.resolvedLanguage==="ar"?"المحتوى الرئيسي":"Main content",children:[u.jsx(vi,{id:"hero",role:"region","aria-label":o.resolvedLanguage==="ar"?"منطقة المقدمة":"Hero section",itemScope:!0,itemType:"https://schema.org/WebPageElement",itemProp:"hasPart",children:u.jsx(r3,{})}),u.jsx(ho,{rootMargin:"200px",children:u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(vi,{id:"campaigns",role:"region","aria-label":o.resolvedLanguage==="ar"?"منطقة الحملات":"Campaigns section",itemScope:!0,itemType:"https://schema.org/WebPageElement",itemProp:"hasPart",children:u.jsx(l3,{})})})}),u.jsx(ho,{children:u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(vi,{id:"adahy",role:"region","aria-label":o.resolvedLanguage==="ar"?"منطقة الأضاحي":"Adahy section",itemScope:!0,itemType:"https://schema.org/WebPageElement",itemProp:"hasPart",children:u.jsx(f3,{})})})}),u.jsx(ho,{children:u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(vi,{id:"projects",role:"region","aria-label":o.resolvedLanguage==="ar"?"منطقة المشاريع":"Projects section",itemScope:!0,itemType:"https://schema.org/WebPageElement",itemProp:"hasPart",children:u.jsx(c3,{title:a("projects.title"),padding:"2rem 4rem 2rem 4rem",hasMoreItemsState:!1,routeName:"project-category"})})})}),u.jsx(ho,{children:u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(vi,{id:"statistics",role:"region","aria-label":o.resolvedLanguage==="ar"?"منطقة الإحصائيات":"Statistics section",itemScope:!0,itemType:"https://schema.org/WebPageElement",itemProp:"hasPart",children:u.jsx(u3,{})})})}),u.jsx(ho,{children:u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(vi,{id:"news",role:"region","aria-label":o.resolvedLanguage==="ar"?"منطقة الأخبار":"News section",itemScope:!0,itemType:"https://schema.org/WebPageElement",itemProp:"hasPart",children:u.jsx(d3,{})})})}),u.jsx(ho,{children:u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(vi,{id:"partners",role:"region","aria-label":o.resolvedLanguage==="ar"?"منطقة الشركاء":"Partners section",itemScope:!0,itemType:"https://schema.org/WebPageElement",itemProp:"hasPart",children:u.jsx(m3,{})})})})]}),h&&u.jsx("script",{loading:"lazy",defer:!0,type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h)}})]})]})}const h3=k.div`
  background-color: white;
`;function g3(){const a=P0(),o=a.pathname.startsWith("/checkout"),c=_.useRef(a.pathname);return Ff("DonationIntention"),_.useEffect(()=>{c.current!==a.pathname&&((window.dataLayer||[]).push({event:"page_view",page_path:a.pathname,page_title:document.title,page_location:window.location.href}),c.current=a.pathname)},[a.pathname]),u.jsxs(h3,{children:[u.jsx(Kf,{location:a}),u.jsx($C,{}),u.jsx(pD,{}),u.jsx("main",{children:u.jsx(B0,{})}),u.jsx(vb,{}),!o&&u.jsx(xb,{}),u.jsx(vk,{})]})}const em=new q1({defaultOptions:{queries:{refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1,staleTime:300*1e3,gcTime:600*1e3,retry:1,retryDelay:1e3},mutations:{retry:1}}});function y3(){return u.jsx("div",{children:u.jsx(B0,{})})}const v3=_.lazy(()=>pe(()=>import("./CampaignsSection-DyuEyuhf.js"),__vite__mapDeps([0,1,2]))),b3=_.lazy(()=>pe(()=>import("./AlternativeDonationDetails-DPFbnr9R.js"),__vite__mapDeps([0,1,2]))),x3=_.lazy(()=>pe(()=>import("./About-DAr5Gq9X.js"),__vite__mapDeps([0,1,2]))),w3=_.lazy(()=>pe(()=>import("./Achievements-Ce3mi5mN.js"),__vite__mapDeps([0,1,2,3]))),S3=_.lazy(()=>pe(()=>import("./Branches-C8H80a3Y.js"),__vite__mapDeps([0,1,2]))),T3=_.lazy(()=>pe(()=>import("./Board-9gOg1lIC.js"),__vite__mapDeps([0,1,2]))),A3=_.lazy(()=>pe(()=>import("./Vol-Board-BNK1Rey6.js"),__vite__mapDeps([0,1,2]))),E3=_.lazy(()=>pe(()=>import("./About-C_6hOaB6.js"),__vite__mapDeps([0,1,2]))),_3=_.lazy(()=>pe(()=>import("./Partners-D6xZ08IK.js"),__vite__mapDeps([0,1,2]))),C3=_.lazy(()=>pe(()=>import("./PartnerDetails-q-uAJqU7.js"),__vite__mapDeps([0,1,2]))),D3=_.lazy(()=>pe(()=>import("./NotFound-BJsgdSuD.js"),__vite__mapDeps([0,1,2]))),k3=_.lazy(()=>pe(()=>import("./Login-DhQu-yvE.js"),__vite__mapDeps([0,1,2]))),j3=_.lazy(()=>pe(()=>import("./Register-vKfi3EoR.js"),__vite__mapDeps([0,1,2]))),O3=_.lazy(()=>pe(()=>import("./ForgetPassword-8p9yGNJ2.js"),__vite__mapDeps([0,1,2]))),M3=_.lazy(()=>pe(()=>import("./ResetPassword-DYbQlajo.js"),__vite__mapDeps([0,1,2]))),R3=_.lazy(()=>pe(()=>import("./RegisterLayout-DNG0BgCs.js"),__vite__mapDeps([0,1,2]))),z3=_.lazy(()=>pe(()=>import("./CampaignsHome-DKtkG3Xw.js"),__vite__mapDeps([0,1,2]))),I3=_.lazy(()=>pe(()=>import("./Media-B_k-4X66.js"),__vite__mapDeps([0,1,2,4]))),L3=_.lazy(()=>pe(()=>import("./YearlyReports-CCijYPy6.js"),__vite__mapDeps([0,1,2]))),N3=_.lazy(()=>pe(()=>import("./PaymentPage-J7Ge4mFJ.js"),__vite__mapDeps([0,1,2]))),U3=_.lazy(()=>pe(()=>import("./Sucess-DFVLDcuj.js"),__vite__mapDeps([0,1,2]))),P3=_.lazy(()=>pe(()=>import("./Become-vol-BUahPbfb.js"),__vite__mapDeps([0,1,2]))),B3=_.lazy(()=>pe(()=>import("./Stroies-ByYUA7tI.js"),__vite__mapDeps([0,1,2,4]))),q3=_.lazy(()=>pe(()=>import("./AdahyPage-DLZZN0Ff.js"),__vite__mapDeps([0,1,2]))),H3=_.lazy(()=>pe(()=>import("./AishWmelh-Cs36sOyu.js"),__vite__mapDeps([0,1,2]))),Db=_.lazy(()=>pe(()=>import("./CampaignDetails-CH_R8nG1.js"),__vite__mapDeps([0,1,2,5]))),V3=_.lazy(()=>pe(()=>import("./VolunteerForm-gQvNzlea.js"),__vite__mapDeps([0,1,2]))),Q3=_.lazy(()=>pe(()=>import("./show-all-BYjIFvlJ.js"),__vite__mapDeps([0,1,2,4]))),G3=_.lazy(()=>pe(()=>import("./details-CPUR0pqP.js"),__vite__mapDeps([0,1,2]))),F3=_.lazy(()=>pe(()=>import("./WebsiteDonation-mWbHkWSs.js"),__vite__mapDeps([0,1,2]))),$3=_.lazy(()=>pe(()=>import("./AlternativeDonation-C7FHOM4T.js"),__vite__mapDeps([0,1,2]))),Y3=_.lazy(()=>pe(()=>import("./news-page--RUVmJyM.js"),__vite__mapDeps([0,1,2]))),X3=_.lazy(()=>pe(()=>import("./news-details-BuKQvz1x.js"),__vite__mapDeps([0,1,2]))),Z3=_.lazy(()=>pe(()=>import("./In-bank-nndPXFse.js"),__vite__mapDeps([0,1,2]))),K3=_.lazy(()=>pe(()=>import("./Branches-CVaBBPVF.js"),__vite__mapDeps([0,1,2]))),W3=_.lazy(()=>pe(()=>import("./InKindDonations-PgRIzkTp.js"),__vite__mapDeps([0,1,2]))),J3=_.lazy(()=>pe(()=>import("./InKindDonationThankYou-2qa0I3Xi.js"),__vite__mapDeps([0,1,2]))),ej=_.lazy(()=>pe(()=>import("./SuppliersRegisteration-DBo7Wtmt.js"),__vite__mapDeps([0,1,2]))),tj=_.lazy(()=>pe(()=>import("./Contracts-Bin5YurP.js"),__vite__mapDeps([0,1,2]))),nj=_.lazy(()=>pe(()=>import("./HasbtElzakat-5GpvAWO_.js"),__vite__mapDeps([0,1,2]))),aj=_.lazy(()=>pe(()=>import("./ConfirmEmail-Ccg-Iod-.js"),__vite__mapDeps([0,1,2]))),ij=_.lazy(()=>pe(()=>import("./MainPage-BDR1z0v7.js"),__vite__mapDeps([0,1,2]))),oj=_.lazy(()=>pe(()=>import("./ProjectCategory-C_Po1BoL.js"),__vite__mapDeps([0,1,2]))),rj=_.lazy(()=>pe(()=>import("./ProjectDetails-xkkmrXCC.js"),__vite__mapDeps([0,1,2]))),sj=_.lazy(()=>pe(()=>import("./Profile-ColFeUS1.js"),__vite__mapDeps([0,1,2]))),lj=_.lazy(()=>pe(()=>import("./NominateCaseForm-D9zQ9nHx.js"),__vite__mapDeps([0,1,2]))),cj=_.lazy(()=>pe(()=>import("./NominatedCasesList-CjnFGl4V.js"),__vite__mapDeps([0,1,2]))),uj=_.lazy(()=>pe(()=>import("./MyPayments-CKCSV1Al.js"),__vite__mapDeps([0,1,2]))),dj=_.lazy(()=>pe(()=>import("./MyDonations-NK87j7Nh.js"),__vite__mapDeps([0,1,2]))),fj=_.lazy(()=>pe(()=>import("./MonthlyDonation-CsSxqNrU.js"),__vite__mapDeps([0,1,2]))),mj=_.lazy(()=>pe(()=>import("./DukeForm-Hy9lTjYy.js"),__vite__mapDeps([0,1,2]))),pj=_.lazy(()=>pe(()=>import("./RefugeeDetails-BS61mbbO.js"),__vite__mapDeps([0,1,2]))),hj=_.lazy(()=>pe(()=>import("./Main-xCQHQwu-.js"),__vite__mapDeps([0,1,2]))),gj=_.lazy(()=>pe(()=>import("./DukeAdenbra-CSpVLMM8.js"),__vite__mapDeps([0,1,2]))),yj=_.lazy(()=>pe(()=>import("./NgosPage-C63rLiW8.js"),__vite__mapDeps([0,1,2]))),vj=_.lazy(()=>pe(()=>import("./NgoDetails-CMdWi9E9.js"),__vite__mapDeps([0,1,2]))),bj=_.lazy(()=>pe(()=>import("./PrivacyPolicy-BV9KSUMi.js"),__vite__mapDeps([0,1,2]))),xj=_.lazy(()=>pe(()=>import("./ContactUs-CHGp2c-q.js"),__vite__mapDeps([0,1,2]))),wj=_.lazy(()=>pe(()=>import("./SearchPage-C6WStJM5.js"),__vite__mapDeps([0,1,2]))),Ce=V1({component:()=>u.jsxs(u.Fragment,{children:[u.jsx(g3,{}),!1]})}),Sj=be({getParentRoute:()=>Ce,path:"/",loader:async()=>{await em.prefetchQuery({queryKey:["carousel"],queryFn:Xf,staleTime:300*1e3})},component:()=>u.jsx(p3,{})}),Tj=be({getParentRoute:()=>Ce,path:"/about",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(x3,{})})}),Aj=be({getParentRoute:()=>Ce,path:"/vol-about",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(E3,{})})}),Ej=be({getParentRoute:()=>Ce,path:"/vol-become",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(P3,{})})}),_j=be({getParentRoute:()=>Ce,path:"/vol-become/volunteer-form",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(V3,{})})}),Cj=be({getParentRoute:()=>Ce,path:"/vol-success",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(B3,{})})}),tm=be({getParentRoute:()=>Ce,path:"/partners"}),Dj=be({getParentRoute:()=>tm,path:"/",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(_3,{})})}),kj=be({getParentRoute:()=>tm,path:"/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(C3,{})})}),jj=be({getParentRoute:()=>Ce,path:"/achievements",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(w3,{})})}),Oj=be({getParentRoute:()=>Ce,path:"/board",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(T3,{})})}),Mj=be({getParentRoute:()=>Ce,path:"/contracts",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(tj,{})})}),Rj=be({getParentRoute:()=>Ce,path:"/vol-board",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(A3,{})})}),zj=be({getParentRoute:()=>Ce,path:"/vol-opportunities",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(Q3,{})})}),Ij=be({getParentRoute:()=>Ce,path:"/vol-opportunities-details/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(G3,{})})}),Lj=be({getParentRoute:()=>Ce,path:"/website-donation",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(F3,{})})}),nm=be({getParentRoute:()=>Ce,path:"/alternative-donation"}),Nj=be({getParentRoute:()=>nm,path:"/",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx($3,{})})}),Uj=be({getParentRoute:()=>nm,path:"method-details/$type/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(b3,{})})}),Pj=be({getParentRoute:()=>Ce,path:"/inbank-donation",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(Z3,{})})}),Bj=be({getParentRoute:()=>Ce,path:"/donate-branches",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(K3,{})})}),qj=be({getParentRoute:()=>Ce,path:"/in-kind-donations",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(W3,{})})}),Hj=be({getParentRoute:()=>Ce,path:"/in-kind-donations/thank-you",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(J3,{})})}),Vj=be({getParentRoute:()=>Ce,path:"/contact-us",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(xj,{})})}),Qj=be({getParentRoute:()=>Ce,path:"/campaign-details/$slug/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(Db,{})})}),ds=be({getParentRoute:()=>Ce,path:"/auth",component:()=>u.jsx(y3,{})}),Gj=be({getParentRoute:()=>ds,path:"/login",beforeLoad:()=>{const{isAuthenticated:a}=Ya();if(a)throw ya({to:"/"})},component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(k3,{})})}),Fj=be({getParentRoute:()=>ds,path:"/forget-password",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(O3,{})})}),$j=be({getParentRoute:()=>ds,path:"/reset-password",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(M3,{})})}),am=be({getParentRoute:()=>ds,path:"/register",beforeLoad:()=>{const{isAuthenticated:a}=Ya();if(a)throw ya({to:"/"})},component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(R3,{})})}),Yj=be({getParentRoute:()=>am,path:"/",beforeLoad:()=>{const{isAuthenticated:a}=Ya();if(a)throw ya({to:"/"})},component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(j3,{})})}),Xj=be({getParentRoute:()=>am,path:"confirm",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(aj,{})})}),kb=be({getParentRoute:()=>Ce,path:"/campaigns"}),Zj=be({getParentRoute:()=>kb,path:"/",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(z3,{})})}),Kj=be({getParentRoute:()=>Ce,path:"/adahy",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(q3,{})})}),Wj=be({getParentRoute:()=>Ce,path:"/campaign-details/aish-w-melh/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(H3,{})})}),Jj=be({getParentRoute:()=>Ce,path:"/media",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(I3,{})})}),eO=be({getParentRoute:()=>Ce,path:"/annual-report",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(L3,{})})}),tO=be({getParentRoute:()=>Ce,path:"/branches",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(S3,{})})}),nO=be({getParentRoute:()=>Ce,path:"/suppliers-registeration",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(ej,{})})}),aO=be({getParentRoute:()=>Ce,path:"/payment",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(N3,{})})}),iO=be({getParentRoute:()=>Ce,path:"/hasbt-elzakat",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(nj,{})})}),oO=be({getParentRoute:()=>Ce,path:"/programs",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(ij,{})})}),rO=be({getParentRoute:()=>Ce,path:"/project-category/$slug/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(oj,{})})}),sO=be({getParentRoute:()=>Ce,path:"/project-details/$slug/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(rj,{})})}),lO=be({getParentRoute:()=>Ce,path:"/refugee-services/$slug/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(pj,{})})}),cO=be({getParentRoute:()=>Ce,path:"/refugee-services",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(hj,{})})}),uO=be({getParentRoute:()=>Ce,beforeLoad:()=>{const{isAuthenticated:a}=Ya();if(!a)throw ya({to:"/"})},path:"/profile",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(sj,{})})}),dO=be({getParentRoute:()=>Ce,path:"/$",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(D3,{})})}),fO=be({getParentRoute:()=>Ce,path:"/donation/success",beforeLoad:()=>{const a=localStorage.getItem("paymentInProgress"),o=localStorage.getItem("sessionId"),c=localStorage.getItem("orderId"),s=localStorage.getItem("successOrderId"),d=localStorage.getItem("successPageCartItems"),f=localStorage.getItem("successPageVisited");if(!!!(a||o||c||s||d||f))throw ya({to:"/"});(a||o||c)&&localStorage.setItem("successPageVisited","true"),localStorage.removeItem("paymentInProgress")},component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(U3,{})})}),im=be({getParentRoute:()=>Ce,path:"/news"}),mO=be({getParentRoute:()=>im,path:"/",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(Y3,{})})}),pO=be({getParentRoute:()=>im,path:"/$slug/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(X3,{})})}),hO=be({getParentRoute:()=>Ce,path:"/nominate-case",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(lj,{})})}),gO=be({getParentRoute:()=>Ce,path:"/my-nominated-cases",beforeLoad:()=>{const{isAuthenticated:a}=Ya();if(!a)throw ya({to:"/"})},component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(cj,{})})}),yO=be({getParentRoute:()=>Ce,path:"/payment-operations",beforeLoad:()=>{const{isAuthenticated:a}=Ya();if(!a)throw ya({to:"/"})},component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(uj,{})})}),vO=be({getParentRoute:()=>Ce,path:"/my-donations",beforeLoad:()=>{const{isAuthenticated:a}=Ya();if(!a)throw ya({to:"/"})},component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(dj,{})})}),bO=be({getParentRoute:()=>Ce,path:"/monthly-donation",beforeLoad:()=>{const{isAuthenticated:a}=Ya();if(!a)throw ya({to:"/"})},component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(fj,{})})}),xO=be({getParentRoute:()=>Ce,path:"/duke-form",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(mj,{})})}),wO=be({getParentRoute:()=>Ce,path:"/duke-adenbra",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(gj,{})})}),SO=be({getParentRoute:()=>Ce,path:"/ngos",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(yj,{})})}),jb=be({getParentRoute:()=>Ce,path:"/ngos/$ngo_id",component:()=>u.jsxs(ye,{fallback:u.jsx(ve,{}),children:[u.jsx(vj,{}),u.jsx(v3,{})]})}),TO=be({getParentRoute:()=>jb,path:"/campaign-details/$slug/$id",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(Db,{})})}),AO=be({getParentRoute:()=>Ce,path:"/privacy-policy",component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(bj,{})})}),EO=be({getParentRoute:()=>Ce,path:"/search",validateSearch:a=>({query:a.query||""}),component:()=>u.jsx(ye,{fallback:u.jsx(ve,{}),children:u.jsx(wj,{})})}),_O=Ce.addChildren([Sj,Tj,tm.addChildren([Dj,kj]),Oj,jj,tO,ds.addChildren([Gj,Fj,$j,am.addChildren([Yj,Xj])]),kb.addChildren([Zj]),Jj,dO,Qj,eO,fO,aO,Rj,Aj,Ej,Cj,_j,zj,Ij,Lj,nm.addChildren([Nj,Uj]),Pj,Bj,qj,Hj,nO,Mj,im.addChildren([mO,pO]),iO,oO,rO,sO,uO,hO,gO,yO,vO,bO,xO,wO,Kj,lO,cO,SO,jb.addChildren([TO]),AO,Vj,Wj,EO]),CO=H1({routeTree:_O,basepath:"/ta-lm"});function DO(){return u.jsx(wb,{children:u.jsx(Q1,{router:CO})})}const z0="display:none!important;visibility:hidden!important;position:absolute!important;width:0!important;height:0!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important;",kO=300*1e3,jO=600*1e3,I0=5e4,OO={ALLOWED_TAGS:["script","noscript","meta","link","style","title","base","iframe","img","div","span","p","a","strong","em","b","i","u","h1","h2","h3","h4","h5","h6"],ALLOWED_ATTR:["src","href","content","property","name","charset","http-equiv","rel","type","async","defer","crossorigin","integrity","nonce","id","class","style","data-*","itemprop","itemscope","itemtype","width","height","alt","title","target","sandbox","allow","allowfullscreen","frameborder"],ALLOW_DATA_ATTR:!0,FORBID_ATTR:["onerror","onload","onclick","onmouseover","onmouseout","onfocus","onblur","onchange","onsubmit","onreset","onselect","onkeydown","onkeypress","onkeyup","onabort","onbeforeunload","onhashchange","onpageshow","onpagehide","onresize","onscroll","onunload"],KEEP_CONTENT:!0,SANITIZE_DOM:!0};function MO(a,o){if(!a)return"";const c=[],s="___SCRIPT_PLACEHOLDER___";a=a.replace(/<script[\s\S]*?<\/script>/gi,f=>(c.push(f),s));let d=ic.sanitize(a,o);return c.forEach(f=>{d=d.replace(s,f)}),d}function RO(a){const o={},c=["header","body","footer"];for(let s=0;s<c.length;s++){const d=c[s];let f=a[d]||"";f.length>I0&&(console.warn(`[SEO] SEO ${d} too large — truncated`),f=f.substring(0,I0)),o[d]=MO(f,OO)}return o}let da={data:null,timestamp:null,checksum:null};function zO(a=!0){const[o,c]=_.useState(a),[s,d]=_.useState(null),f=_.useRef(null),p=_.useRef(null),h=_.useRef(null),g=D=>{if(!D)return null;const C=JSON.stringify(D);let R=0;for(let A=0;A<C.length;A++){const z=C.charCodeAt(A);R=(R<<5)-R+z,R=R&R}return R.toString()},y=_.useCallback(()=>{if(typeof window>"u"||typeof document>"u")return;document.querySelectorAll("[data-seo-injected]").forEach(A=>A.remove());const C=document.getElementById("seo-body-container");C&&C.remove();const R=document.getElementById("seo-footer-container");R&&R.remove(),document.body&&Array.from(document.body.children).forEach(z=>{z.tagName==="DIV"&&z.style&&(z.style.display==="none"||z.style.visibility==="hidden")&&(z.id==="seo-body-container"||z.id==="seo-footer-container"||z.getAttribute("data-seo-injected"))&&z.remove()}),document.head&&document.head.querySelectorAll("script[data-seo-injected]").forEach(z=>z.remove())},[]),T=_.useCallback(D=>{if(!(typeof window>"u"||typeof document>"u")&&!(!D||!D.header&&!D.body&&!D.footer)){if(y(),D.header){const C=document.createElement("div");C.innerHTML=D.header,Array.from(C.childNodes).forEach(A=>{if(!(A.nodeType===Node.TEXT_NODE&&!A.textContent.trim())){if(A.nodeType===Node.ELEMENT_NODE&&A.tagName&&A.tagName.toUpperCase()==="SCRIPT"){const z=document.createElement("script");Array.from(A.attributes).forEach(L=>{z.setAttribute(L.name,L.value)}),z.textContent=A.textContent,z.setAttribute("data-seo-injected","header");const M=z.src||z.getAttribute("src")||"",w=M.includes("googletagmanager")||M.includes("google-analytics")||M.includes("gtag"),E=M.includes("clarity.ms")||M.includes("facebook.net")||M.includes("accounts.google.com");if(w)if("PerformanceObserver"in window)try{let L=!1;const B=new PerformanceObserver(Q=>{Q.getEntries().length>0&&!L&&(L=!0,B.disconnect(),setTimeout(()=>{z.async=!0,document.head&&document.head.appendChild(z)},1e3))});B.observe({type:"largest-contentful-paint",buffered:!0}),setTimeout(()=>{L||(B.disconnect(),z.async=!0,document.head&&document.head.appendChild(z))},8e3)}catch{z.async=!0,setTimeout(()=>{document.head&&document.head.appendChild(z)},5e3)}else z.async=!0,setTimeout(()=>{document.head&&document.head.appendChild(z)},5e3);else E&&!z.hasAttribute("async")&&!z.hasAttribute("defer")&&(z.async=!0,z.defer=!0),document.head&&document.head.appendChild(z)}else if(A.nodeType===Node.ELEMENT_NODE){const z=A.cloneNode(!0);z.setAttribute("data-seo-injected","header"),document.head?document.head.appendChild(z):console.error("[SEO] document.head not found!")}else if(A.nodeType===Node.TEXT_NODE&&A.textContent.trim()){const z=A.cloneNode(!0);document.head&&document.head.appendChild(z)}}})}if(D.body){const C=document.createElement("div");C.innerHTML=D.body;const R=C.querySelectorAll("script"),A=Array.from(R);if(A.forEach(M=>M.remove()),C.innerHTML.trim().length>0){const M=document.createElement("div");M.id="seo-body-container",M.setAttribute("data-seo-injected","body"),M.style.cssText=z0,M.innerHTML=C.innerHTML,document.body.insertBefore(M,document.body.firstChild),f.current=M}A.forEach(M=>{const w=document.createElement("script");Array.from(M.attributes).forEach(B=>{w.setAttribute(B.name,B.value)}),w.textContent=M.textContent,w.setAttribute("data-seo-injected","body-script");const E=w.src||w.getAttribute("src")||"";(E.includes("googletagmanager")||E.includes("google-analytics")||E.includes("gtag")||E.includes("clarity.ms")||E.includes("facebook.net"))&&!w.hasAttribute("async")&&!w.hasAttribute("defer")&&(w.async=!0,w.defer=!0),document.body.insertBefore(w,document.body.firstChild)})}if(D.footer){const C=document.createElement("div");C.innerHTML=D.footer;const R=C.querySelectorAll("script"),A=Array.from(R);if(A.forEach(M=>M.remove()),C.innerHTML.trim().length>0){const M=document.createElement("div");M.id="seo-footer-container",M.setAttribute("data-seo-injected","footer"),M.style.cssText=z0,M.innerHTML=C.innerHTML,document.body.appendChild(M),p.current=M}A.forEach(M=>{const w=document.createElement("script");Array.from(M.attributes).forEach(B=>{w.setAttribute(B.name,B.value)}),w.textContent=M.textContent,w.setAttribute("data-seo-injected","footer-script");const E=w.src||w.getAttribute("src")||"";(E.includes("googletagmanager")||E.includes("google-analytics")||E.includes("gtag")||E.includes("clarity.ms")||E.includes("facebook.net"))&&!w.hasAttribute("async")&&!w.hasAttribute("defer")&&(w.async=!0,w.defer=!0),document.body.appendChild(w)})}}},[y]),x=_.useCallback(async(D=!1)=>{try{const C=Date.now();if(!D&&da.data&&da.timestamp&&C-da.timestamp<kO&&g(da.data)===da.checksum){console.log("[SEO] Using cached SEO code"),T(da.data),c(!1);return}console.log("[SEO] Fetching SEO code from API...");const R=await Fv();if(R&&R.success&&R.data){const A={header:R.data.header||"",body:R.data.body||"",footer:R.data.footer||""},z=RO(A);console.log("[SEO] SEO code sanitized successfully");const M=g(z);da.checksum!==M?(console.log("[SEO] SEO code updated, injecting..."),T(z),da={data:z,timestamp:C,checksum:M}):console.log("[SEO] SEO code unchanged"),d(null)}else throw new Error("Invalid SEO code response")}catch(C){console.error("[SEO] Failed to fetch SEO code:",C.message),d(C.message),da.data||c(!1)}finally{c(!1)}},[T]);return _.useEffect(()=>{if(!a){c(!1);return}if(!(typeof window>"u"||typeof document>"u"))return x(),h.current=setInterval(()=>{console.log("[SEO] Checking for SEO code updates..."),x(!1)},jO),()=>{h.current&&clearInterval(h.current),typeof window<"u"&&typeof document<"u"&&y()}},[a,x,y]),{isLoading:o,error:s,refreshSEOCode:()=>{x(!0)}}}const IO=()=>{const[a,o]=_.useState(!1);_.useEffect(()=>{let f=!1,p=null,h=null;const g=()=>{if("PerformanceObserver"in window)try{h=new PerformanceObserver(T=>{const x=T.getEntries();x[x.length-1]&&!f&&(f=!0,h&&(h.disconnect(),h=null),setTimeout(()=>{o(!0)},500))}),h.observe({type:"largest-contentful-paint",buffered:!0}),p=setTimeout(()=>{f||(h&&(h.disconnect(),h=null),o(!0))},5e3)}catch{console.warn("[SEO] PerformanceObserver not supported, using load event"),y()}else y()},y=()=>{document.readyState==="complete"?setTimeout(()=>o(!0),3e3):window.addEventListener("load",()=>{setTimeout(()=>o(!0),3e3)},{once:!0})};return document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g,{once:!0}):g(),()=>{p&&clearTimeout(p),h&&(h.disconnect(),h=null)}},[]);const{isLoading:c,error:s,refreshSEOCode:d}=zO(a);return _.useEffect(()=>{typeof window<"u"&&(window.refreshSEOCode=d)},[c,s,d]),null},LO=_.lazy(()=>pe(()=>Promise.resolve().then(()=>fC),void 0).then(a=>({default:a.ToastContainer}))),NO=()=>(we.useEffect(()=>{let a;return requestAnimationFrame(()=>{requestAnimationFrame(()=>{a=setTimeout(()=>{window.__APP_READY__=!0},150)})}),()=>{a&&clearTimeout(a)}},[]),u.jsxs(Nv,{children:[u.jsx(xE,{}),u.jsx(Z1,{theme:e2,children:u.jsx(pC,{children:u.jsxs(hC,{children:[u.jsx(IO,{}),u.jsx(Kf,{}),u.jsx(DO,{}),u.jsx(_.Suspense,{fallback:null,children:u.jsx(LO,{position:"bottom-right",autoClose:2e3})})]})})})]})),UO=_.lazy(()=>pe(()=>import("./index.esm-BmnIqYQD.js"),__vite__mapDeps([0,1])).then(a=>({default:a.GoogleOAuthProvider}))),L0=()=>{pe(async()=>{const{getCarousel:a}=await Promise.resolve().then(()=>O_);return{getCarousel:a}},void 0).then(({getCarousel:a})=>{em.prefetchQuery({queryKey:["carousel"],queryFn:a,staleTime:300*1e3})})},go=document.getElementById("root");if(go){typeof requestIdleCallback<"u"?requestIdleCallback(()=>{L0()},{timeout:2e3}):setTimeout(()=>{L0()},100);const a=()=>{const[x,S]=_.useState(!1);return _.useEffect(()=>{S(!0)},[]),null},o=({children:x})=>{const[S,D]=_.useState(!1),[C,R]=_.useState(!1);return _.useEffect(()=>{const A=()=>{const M=window.location.pathname,E=["/login","/register","/forget-password","/reset-password","/confirm-email"].some(L=>M.includes(L));R(E),E?(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D(!0)})}),setTimeout(()=>D(!0),500)):typeof requestIdleCallback<"u"?requestIdleCallback(()=>{D(!0)},{timeout:1e4}):setTimeout(()=>D(!0),8e3)};A();const z=()=>{A()};return window.addEventListener("popstate",z),()=>{window.removeEventListener("popstate",z)}},[]),S?u.jsx(u.Fragment,{children:S?u.jsx(_.Suspense,{fallback:null,children:u.jsx(UO,{clientId:"722348908433-7j0cc7tf8m6gfekfp36smm5vp7q2due5.apps.googleusercontent.com",children:x})}):x}):x},c=[],s=()=>{c.forEach(x=>clearTimeout(x)),c.length=0},d=()=>(we.useEffect(()=>()=>s(),[]),null),f=u.jsxs(we.StrictMode,{children:[u.jsx(d,{}),u.jsx(Ew,{store:DT,children:u.jsxs(G1,{client:em,children:[u.jsx(o,{children:u.jsx(NO,{})}),u.jsx(a,{})]})})]}),p=(x=0)=>{const S=document.getElementById("initial-loading");if(!S||S.dataset.hidden==="true")return;const D=document.getElementById("root"),C=20,R=()=>{S.dataset.hidden="true"};if(D?.firstElementChild&&(D.firstElementChild.offsetHeight>0||D.firstElementChild.childNodes.length>0)||x>=C){requestAnimationFrame(()=>{requestAnimationFrame(()=>{R()})});return}requestAnimationFrame(()=>{requestAnimationFrame(()=>{p(x+1)})})},h=1500,g=5e3,y=Date.now(),T=()=>{const x=Date.now()-y,S=x>=h,D=x>=g;window.__APP_READY__&&S||D?requestAnimationFrame(()=>{requestAnimationFrame(()=>{p()})}):requestAnimationFrame(T)};if(go&&(go.style.backgroundColor="#f9f9f9"),go.hasChildNodes()){Xg.hydrateRoot(go,f),requestAnimationFrame(()=>{requestAnimationFrame(()=>{T()})});const x=setTimeout(()=>{p()},3e3);c.push(x)}else{Xg.createRoot(go).render(f),requestAnimationFrame(()=>{requestAnimationFrame(()=>{T()})});const x=setTimeout(()=>{p()},3e3);c.push(x)}}export{Ud as $,AE as A,IM as B,oM as C,lM as D,NM as E,dM as F,DM as G,TE as H,wE as I,HM as J,Nd as K,CE as L,Bd as M,YO as N,Xj as O,s3 as P,GM as Q,u_ as R,aM as S,rM as T,FM as U,YM as V,$M as W,uM as X,hM as Y,gM as Z,yM as _,kw as a,c_ as a$,d_ as a0,f_ as a1,XE as a2,QE as a3,bE as a4,WO as a5,eM as a6,wM as a7,QM as a8,vM as a9,jM as aA,CM as aB,TM as aC,kM as aD,WE as aE,k_ as aF,Uj as aG,GE as aH,FE as aI,KO as aJ,n_ as aK,r_ as aL,Bv as aM,Pv as aN,s_ as aO,l_ as aP,qM as aQ,p_ as aR,m_ as aS,Ky as aT,Jy as aU,Wy as aV,e0 as aW,jy as aX,Ae as aY,XM as aZ,ZM as a_,xM as aa,a_ as ab,t_ as ac,yc as ad,ZE as ae,XO as af,UM as ag,bb as ah,b_ as ai,S_ as aj,w_ as ak,JO as al,cM as am,MM as an,bM as ao,SM as ap,AM as aq,EM as ar,OM as as,LM as at,BM as au,i_ as av,o_ as aw,KE as ax,kj as ay,_M as az,CT as b,HE as b0,VE as b1,tM as b2,nM as b3,dC as b4,T_ as b5,Ya as b6,KM as b7,h_ as b8,g_ as b9,y_ as ba,v_ as bb,ZO as bc,x_ as bd,A_ as be,__ as bf,E_ as bg,D_ as bh,C_ as bi,Yy as bj,WM as bk,j_ as c,DE as d,o3 as e,Ff as f,yo as g,iM as h,sM as i,$E as j,YE as k,JE as l,VM as m,e_ as n,PM as o,Zf as p,Pd as q,SE as r,$O as s,fM as t,zf as u,mM as v,pM as w,RM as x,Me as y,zM as z};
