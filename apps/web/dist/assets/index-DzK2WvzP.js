(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function T0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ym={exports:{}},Rl={},Sm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),w0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),R0=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),L0=Symbol.for("react.forward_ref"),D0=Symbol.for("react.suspense"),I0=Symbol.for("react.memo"),U0=Symbol.for("react.lazy"),dh=Symbol.iterator;function F0(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var Mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,bm={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Mm}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tm(){}Tm.prototype=Fs.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Mm}var Gd=Hd.prototype=new Tm;Gd.constructor=Hd;Em(Gd,Fs.prototype);Gd.isPureReactComponent=!0;var fh=Array.isArray,wm=Object.prototype.hasOwnProperty,Wd={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)wm.call(e,i)&&!Am.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Oa,type:t,key:s,ref:a,props:r,_owner:Wd.current}}function O0(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function k0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hh=/\/+/g;function Zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k0(""+t.key):e.toString(36)}function Uo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Oa:case w0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Zl(a,0):i,fh(r)?(n="",t!=null&&(n=t.replace(hh,"$&/")+"/"),Uo(r,e,n,"",function(c){return c})):r!=null&&(jd(r)&&(r=O0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(hh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",fh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Zl(s,o);a+=Uo(s,e,n,l,r)}else if(l=F0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Zl(s,o++),a+=Uo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function $a(t,e,n){if(t==null)return t;var i=[],r=0;return Uo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},Fo={transition:null},z0={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Wd};function Rm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Fs;je.Fragment=A0;je.Profiler=R0;je.PureComponent=Hd;je.StrictMode=C0;je.Suspense=D0;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;je.act=Rm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Em({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)wm.call(e,l)&&!Am.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:P0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N0,_context:t},t.Consumer=t};je.createElement=Cm;je.createFactory=function(t){var e=Cm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:L0,render:t}};je.isValidElement=jd;je.lazy=function(t){return{$$typeof:U0,_payload:{_status:-1,_result:t},_init:B0}};je.memo=function(t,e){return{$$typeof:I0,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Fo.transition;Fo.transition={};try{t()}finally{Fo.transition=e}};je.unstable_act=Rm;je.useCallback=function(t,e){return tn.current.useCallback(t,e)};je.useContext=function(t){return tn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};je.useEffect=function(t,e){return tn.current.useEffect(t,e)};je.useId=function(){return tn.current.useId()};je.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return tn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};je.useRef=function(t){return tn.current.useRef(t)};je.useState=function(t){return tn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return tn.current.useTransition()};je.version="18.3.1";Sm.exports=je;var Ee=Sm.exports;const V0=T0(Ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=Ee,G0=Symbol.for("react.element"),W0=Symbol.for("react.fragment"),j0=Object.prototype.hasOwnProperty,X0=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y0={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)j0.call(e,i)&&!Y0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:G0,type:t,key:s,ref:a,props:r,_owner:X0.current}}Rl.Fragment=W0;Rl.jsx=Nm;Rl.jsxs=Nm;ym.exports=Rl;var p=ym.exports,ru={},Pm={exports:{}},En={},Lm={exports:{}},Dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,j){var Q=U.length;U.push(j);e:for(;0<Q;){var ne=Q-1>>>1,ae=U[ne];if(0<r(ae,j))U[ne]=j,U[Q]=ae,Q=ne;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var j=U[0],Q=U.pop();if(Q!==j){U[0]=Q;e:for(var ne=0,ae=U.length,ke=ae>>>1;ne<ke;){var Be=2*(ne+1)-1,Ie=U[Be],q=Be+1,le=U[q];if(0>r(Ie,Q))q<ae&&0>r(le,Ie)?(U[ne]=le,U[q]=Q,ne=q):(U[ne]=Ie,U[Be]=Q,ne=Be);else if(q<ae&&0>r(le,Q))U[ne]=le,U[q]=Q,ne=q;else break e}}return j}function r(U,j){var Q=U.sortIndex-j.sortIndex;return Q!==0?Q:U.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,u=3,m=!1,_=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(U){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=U)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function S(U){if(b=!1,M(U),!_)if(n(l)!==null)_=!0,Y(w);else{var j=n(c);j!==null&&z(S,j.startTime-U)}}function w(U,j){_=!1,b&&(b=!1,d(g),g=-1),m=!0;var Q=u;try{for(M(j),f=n(l);f!==null&&(!(f.expirationTime>j)||U&&!P());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,u=f.priorityLevel;var ae=ne(f.expirationTime<=j);j=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&i(l),M(j)}else i(l);f=n(l)}if(f!==null)var ke=!0;else{var Be=n(c);Be!==null&&z(S,Be.startTime-j),ke=!1}return ke}finally{f=null,u=Q,m=!1}}var A=!1,E=null,g=-1,C=5,N=-1;function P(){return!(t.unstable_now()-N<C)}function L(){if(E!==null){var U=t.unstable_now();N=U;var j=!0;try{j=E(!0,U)}finally{j?k():(A=!1,E=null)}}else A=!1}var k;if(typeof x=="function")k=function(){x(L)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,O=$.port2;$.port1.onmessage=L,k=function(){O.postMessage(null)}}else k=function(){v(L,0)};function Y(U){E=U,A||(A=!0,k())}function z(U,j){g=v(function(){U(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Y(w))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(u){case 1:case 2:case 3:var j=3;break;default:j=u}var Q=u;u=j;try{return U()}finally{u=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=u;u=U;try{return j()}finally{u=Q}},t.unstable_scheduleCallback=function(U,j,Q){var ne=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ne+Q:ne):Q=ne,U){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Q+ae,U={id:h++,callback:j,priorityLevel:U,startTime:Q,expirationTime:ae,sortIndex:-1},Q>ne?(U.sortIndex=Q,e(c,U),n(l)===null&&U===n(c)&&(b?(d(g),g=-1):b=!0,z(S,Q-ne))):(U.sortIndex=ae,e(l,U),_||m||(_=!0,Y(w))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var j=u;return function(){var Q=u;u=j;try{return U.apply(this,arguments)}finally{u=Q}}}})(Dm);Lm.exports=Dm;var $0=Lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=Ee,Mn=$0;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,xa={};function kr(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(xa[t]=e,t=0;t<e.length;t++)Im.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},mh={};function Z0(t){return su.call(mh,t)?!0:su.call(ph,t)?!1:K0.test(t)?mh[t]=!0:(ph[t]=!0,!1)}function Q0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J0(t,e,n,i){if(e===null||typeof e>"u"||Q0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,Yd);Ht[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,Yd);Ht[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,Yd);Ht[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J0(e,n,r,i)&&(n=null),i||r===null?Z0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),Um=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),ou=Symbol.for("react.suspense"),lu=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),gh=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Ql;function na(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Jl=!1;function ec(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function ev(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=ec(t.type,!1),t;case 11:return t=ec(t.type.render,!1),t;case 1:return t=ec(t.type,!0),t;default:return""}}function cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case au:return"Profiler";case qd:return"StrictMode";case ou:return"Suspense";case lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fm:return(t.displayName||"Context")+".Consumer";case Um:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:cu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return cu(t(e))}catch{}}return null}function tv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cu(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nv(t){var e=km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=nv(t))}function Bm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function du(t,e){zm(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&fu(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fu(t,e,n){(e!=="number"||Jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ia(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Vm(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Gm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iv=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){iv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function Wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var rv=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mu(t,e){if(e){if(rv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vu=null,xs=null,vs=null;function Sh(t){if(t=za(t)){if(typeof vu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Il(e),vu(t.stateNode,t.type,e))}}function Xm(t){xs?vs?vs.push(t):vs=[t]:xs=t}function Ym(){if(xs){var t=xs,e=vs;if(vs=xs=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function $m(t,e){return t(e)}function qm(){}var tc=!1;function Km(t,e,n){if(tc)return t(e,n);tc=!0;try{return $m(t,e,n)}finally{tc=!1,(xs!==null||vs!==null)&&(qm(),Ym())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=Il(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var _u=!1;if(Ci)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{_u=!1}function sv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ca=!1,el=null,tl=!1,yu=null,av={onError:function(t){ca=!0,el=t}};function ov(t,e,n,i,r,s,a,o,l){ca=!1,el=null,sv.apply(av,arguments)}function lv(t,e,n,i,r,s,a,o,l){if(ov.apply(this,arguments),ca){if(ca){var c=el;ca=!1,el=null}else throw Error(re(198));tl||(tl=!0,yu=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mh(t){if(Br(t)!==t)throw Error(re(188))}function cv(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mh(r),t;if(s===i)return Mh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Qm(t){return t=cv(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var eg=Mn.unstable_scheduleCallback,Eh=Mn.unstable_cancelCallback,uv=Mn.unstable_shouldYield,dv=Mn.unstable_requestPaint,bt=Mn.unstable_now,fv=Mn.unstable_getCurrentPriorityLevel,Jd=Mn.unstable_ImmediatePriority,tg=Mn.unstable_UserBlockingPriority,nl=Mn.unstable_NormalPriority,hv=Mn.unstable_LowPriority,ng=Mn.unstable_IdlePriority,Nl=null,si=null;function pv(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:xv,mv=Math.log,gv=Math.LN2;function xv(t){return t>>>=0,t===0?32:31-(mv(t)/gv|0)|0}var Qa=64,Ja=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function vv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _v(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Wn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=vv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Su(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function yv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sg,tf,ag,og,lg,Mu=!1,eo=[],Ji=null,er=null,tr=null,ya=new Map,Sa=new Map,Yi=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=za(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Mv(t,e,n,i,r){switch(e){case"focusin":return Ji=Gs(Ji,t,e,n,i,r),!0;case"dragenter":return er=Gs(er,t,e,n,i,r),!0;case"mouseover":return tr=Gs(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ya.set(s,Gs(ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Sa.set(s,Gs(Sa.get(s)||null,t,e,n,i,r)),!0}return!1}function cg(t){var e=br(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=Zm(n),e!==null){t.blockedOn=e,lg(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xu=i,n.target.dispatchEvent(i),xu=null}else return e=za(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){Oo(t)&&n.delete(e)}function Ev(){Mu=!1,Ji!==null&&Oo(Ji)&&(Ji=null),er!==null&&Oo(er)&&(er=null),tr!==null&&Oo(tr)&&(tr=null),ya.forEach(Th),Sa.forEach(Th)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Mu||(Mu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,Ev)))}function Ma(t){function e(r){return Ws(r,t)}if(0<eo.length){Ws(eo[0],t);for(var n=1;n<eo.length;n++){var i=eo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Ws(Ji,t),er!==null&&Ws(er,t),tr!==null&&Ws(tr,t),ya.forEach(e),Sa.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Yi.shift()}var _s=Ii.ReactCurrentBatchConfig,rl=!0;function bv(t,e,n,i){var r=it,s=_s.transition;_s.transition=null;try{it=1,nf(t,e,n,i)}finally{it=r,_s.transition=s}}function Tv(t,e,n,i){var r=it,s=_s.transition;_s.transition=null;try{it=4,nf(t,e,n,i)}finally{it=r,_s.transition=s}}function nf(t,e,n,i){if(rl){var r=Eu(t,e,n,i);if(r===null)fc(t,e,i,sl,n),bh(t,i);else if(Mv(r,t,e,n,i))i.stopPropagation();else if(bh(t,i),e&4&&-1<Sv.indexOf(t)){for(;r!==null;){var s=za(r);if(s!==null&&sg(s),s=Eu(t,e,n,i),s===null&&fc(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fc(t,e,i,null,n)}}var sl=null;function Eu(t,e,n,i){if(sl=null,t=Qd(i),t=br(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fv()){case Jd:return 1;case tg:return 4;case nl:case hv:return 16;case ng:return 536870912;default:return 16}default:return 16}}var Ki=null,rf=null,ko=null;function dg(){if(ko)return ko;var t,e=rf,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ko=r.slice(t,1<i?1-i:void 0)}function Bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function wh(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?to:wh,this.isPropagationStopped=wh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=bn(Os),Ba=gt({},Os,{view:0,detail:0}),wv=bn(Ba),ic,rc,js,Pl=gt({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(ic=t.screenX-js.screenX,rc=t.screenY-js.screenY):rc=ic=0,js=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),Ah=bn(Pl),Av=gt({},Pl,{dataTransfer:0}),Cv=bn(Av),Rv=gt({},Ba,{relatedTarget:0}),sc=bn(Rv),Nv=gt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=bn(Nv),Lv=gt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=bn(Lv),Iv=gt({},Os,{data:0}),Ch=bn(Iv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ov[t])?!!e[t]:!1}function af(){return kv}var Bv=gt({},Ba,{key:function(t){if(t.key){var e=Uv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zv=bn(Bv),Vv=gt({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=bn(Vv),Hv=gt({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),Gv=bn(Hv),Wv=gt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=bn(Wv),Xv=gt({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=bn(Xv),$v=[9,13,27,32],of=Ci&&"CompositionEvent"in window,ua=null;Ci&&"documentMode"in document&&(ua=document.documentMode);var qv=Ci&&"TextEvent"in window&&!ua,fg=Ci&&(!of||ua&&8<ua&&11>=ua),Nh=" ",Ph=!1;function hg(t,e){switch(t){case"keyup":return $v.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function Kv(t,e){switch(t){case"compositionend":return pg(e);case"keypress":return e.which!==32?null:(Ph=!0,Nh);case"textInput":return t=e.data,t===Nh&&Ph?null:t;default:return null}}function Zv(t,e){if(as)return t==="compositionend"||!of&&hg(t,e)?(t=dg(),ko=rf=Ki=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qv[t.type]:e==="textarea"}function mg(t,e,n,i){Xm(i),e=al(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var da=null,Ea=null;function Jv(t){wg(t,0)}function Ll(t){var e=cs(t);if(Bm(e))return t}function e_(t,e){if(t==="change")return e}var gg=!1;if(Ci){var ac;if(Ci){var oc="oninput"in document;if(!oc){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),oc=typeof Dh.oninput=="function"}ac=oc}else ac=!1;gg=ac&&(!document.documentMode||9<document.documentMode)}function Ih(){da&&(da.detachEvent("onpropertychange",xg),Ea=da=null)}function xg(t){if(t.propertyName==="value"&&Ll(Ea)){var e=[];mg(e,Ea,t,Qd(t)),Km(Jv,e)}}function t_(t,e,n){t==="focusin"?(Ih(),da=e,Ea=n,da.attachEvent("onpropertychange",xg)):t==="focusout"&&Ih()}function n_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(Ea)}function i_(t,e){if(t==="click")return Ll(e)}function r_(t,e){if(t==="input"||t==="change")return Ll(e)}function s_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:s_;function ba(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!su.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Uh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=Uh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uh(n)}}function vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=Jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jo(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function a_(t){var e=_g(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(i!==null&&lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fh(n,s);var a=Fh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o_=Ci&&"documentMode"in document&&11>=document.documentMode,os=null,bu=null,fa=null,Tu=!1;function Oh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||os==null||os!==Jo(i)||(i=os,"selectionStart"in i&&lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&ba(fa,i)||(fa=i,i=al(bu,"onSelect"),0<i.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function no(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},lc={},yg={};Ci&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Dl(t){if(lc[t])return lc[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return lc[t]=e[n];return t}var Sg=Dl("animationend"),Mg=Dl("animationiteration"),Eg=Dl("animationstart"),bg=Dl("transitionend"),Tg=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){Tg.set(t,e),kr(e,[t])}for(var cc=0;cc<kh.length;cc++){var uc=kh[cc],l_=uc.toLowerCase(),c_=uc[0].toUpperCase()+uc.slice(1);dr(l_,"on"+c_)}dr(Sg,"onAnimationEnd");dr(Mg,"onAnimationIteration");dr(Eg,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(bg,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u_=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Bh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,lv(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Bh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Bh(r,o,c),s=l}}}if(tl)throw t=yu,tl=!1,yu=null,t}function ut(t,e){var n=e[Nu];n===void 0&&(n=e[Nu]=new Set);var i=t+"__bubble";n.has(i)||(Ag(e,t,2,!1),n.add(i))}function dc(t,e,n){var i=0;e&&(i|=4),Ag(n,t,i,e)}var io="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[io]){t[io]=!0,Im.forEach(function(n){n!=="selectionchange"&&(u_.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[io]||(e[io]=!0,dc("selectionchange",!1,e))}}function Ag(t,e,n,i){switch(ug(e)){case 1:var r=bv;break;case 4:r=Tv;break;default:r=nf}n=r.bind(null,e,n,t),r=void 0,!_u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=br(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Km(function(){var c=s,h=Qd(n),f=[];e:{var u=Tg.get(t);if(u!==void 0){var m=sf,_=t;switch(t){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":m=zv;break;case"focusin":_="focus",m=sc;break;case"focusout":_="blur",m=sc;break;case"beforeblur":case"afterblur":m=sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Gv;break;case Sg:case Mg:case Eg:m=Pv;break;case bg:m=jv;break;case"scroll":m=wv;break;case"wheel":m=Yv;break;case"copy":case"cut":case"paste":m=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rh}var b=(e&4)!==0,v=!b&&t==="scroll",d=b?u!==null?u+"Capture":null:u;b=[];for(var x=c,M;x!==null;){M=x;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,d!==null&&(S=_a(x,d),S!=null&&b.push(wa(x,S,M)))),v)break;x=x.return}0<b.length&&(u=new m(u,_,null,n,h),f.push({event:u,listeners:b}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==xu&&(_=n.relatedTarget||n.fromElement)&&(br(_)||_[Ri]))break e;if((m||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?br(_):null,_!==null&&(v=Br(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(b=Ah,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(b=Rh,S="onPointerLeave",d="onPointerEnter",x="pointer"),v=m==null?u:cs(m),M=_==null?u:cs(_),u=new b(S,x+"leave",m,n,h),u.target=v,u.relatedTarget=M,S=null,br(h)===c&&(b=new b(d,x+"enter",_,n,h),b.target=M,b.relatedTarget=v,S=b),v=S,m&&_)t:{for(b=m,d=_,x=0,M=b;M;M=Gr(M))x++;for(M=0,S=d;S;S=Gr(S))M++;for(;0<x-M;)b=Gr(b),x--;for(;0<M-x;)d=Gr(d),M--;for(;x--;){if(b===d||d!==null&&b===d.alternate)break t;b=Gr(b),d=Gr(d)}b=null}else b=null;m!==null&&zh(f,u,m,b,!1),_!==null&&v!==null&&zh(f,v,_,b,!0)}}e:{if(u=c?cs(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var w=e_;else if(Lh(u))if(gg)w=r_;else{w=n_;var A=t_}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(w=i_);if(w&&(w=w(t,c))){mg(f,w,n,h);break e}A&&A(t,u,c),t==="focusout"&&(A=u._wrapperState)&&A.controlled&&u.type==="number"&&fu(u,"number",u.value)}switch(A=c?cs(c):window,t){case"focusin":(Lh(A)||A.contentEditable==="true")&&(os=A,bu=c,fa=null);break;case"focusout":fa=bu=os=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Oh(f,n,h);break;case"selectionchange":if(o_)break;case"keydown":case"keyup":Oh(f,n,h)}var E;if(of)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else as?hg(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(fg&&n.locale!=="ko"&&(as||g!=="onCompositionStart"?g==="onCompositionEnd"&&as&&(E=dg()):(Ki=h,rf="value"in Ki?Ki.value:Ki.textContent,as=!0)),A=al(c,g),0<A.length&&(g=new Ch(g,t,null,n,h),f.push({event:g,listeners:A}),E?g.data=E:(E=pg(n),E!==null&&(g.data=E)))),(E=qv?Kv(t,n):Zv(t,n))&&(c=al(c,"onBeforeInput"),0<c.length&&(h=new Ch("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}wg(f,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(t,n),s!=null&&i.unshift(wa(t,s,r)),s=_a(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=_a(n,s),l!=null&&a.unshift(wa(n,l,o))):r||(l=_a(n,s),l!=null&&a.push(wa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var d_=/\r\n?/g,f_=/\u0000|\uFFFD/g;function Vh(t){return(typeof t=="string"?t:""+t).replace(d_,`
`).replace(f_,"")}function ro(t,e,n){if(e=Vh(e),Vh(t)!==e&&n)throw Error(re(425))}function ol(){}var wu=null,Au=null;function Cu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,p_=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(t){return Hh.resolve(null).then(t).catch(m_)}:Ru;function m_(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),ti="__reactFiber$"+ks,Aa="__reactProps$"+ks,Ri="__reactContainer$"+ks,Nu="__reactEvents$"+ks,g_="__reactListeners$"+ks,x_="__reactHandles$"+ks;function br(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gh(t);t!==null;){if(n=t[ti])return n;t=Gh(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[ti]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Il(t){return t[Aa]||null}var Pu=[],us=-1;function fr(t){return{current:t}}function dt(t){0>us||(t.current=Pu[us],Pu[us]=null,us--)}function ct(t,e){us++,Pu[us]=t.current,t.current=e}var lr={},Kt=fr(lr),ln=fr(!1),Pr=lr;function ws(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function ll(){dt(ln),dt(Kt)}function Wh(t,e,n){if(Kt.current!==lr)throw Error(re(168));ct(Kt,e),ct(ln,n)}function Cg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,tv(t)||"Unknown",r));return gt({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Pr=Kt.current,ct(Kt,t),ct(ln,ln.current),!0}function jh(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Cg(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,dt(ln),dt(Kt),ct(Kt,t)):dt(ln),ct(ln,n)}var yi=null,Ul=!1,pc=!1;function Rg(t){yi===null?yi=[t]:yi.push(t)}function v_(t){Ul=!0,Rg(t)}function hr(){if(!pc&&yi!==null){pc=!0;var t=0,e=it;try{var n=yi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Ul=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),eg(Jd,hr),r}finally{it=e,pc=!1}}return null}var ds=[],fs=0,ul=null,dl=0,Cn=[],Rn=0,Lr=null,Mi=1,Ei="";function _r(t,e){ds[fs++]=dl,ds[fs++]=ul,ul=t,dl=e}function Ng(t,e,n){Cn[Rn++]=Mi,Cn[Rn++]=Ei,Cn[Rn++]=Lr,Lr=t;var i=Mi;t=Ei;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-Wn(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function cf(t){t.return!==null&&(_r(t,1),Ng(t,1,0))}function uf(t){for(;t===ul;)ul=ds[--fs],ds[fs]=null,dl=ds[--fs],ds[fs]=null;for(;t===Lr;)Lr=Cn[--Rn],Cn[Rn]=null,Ei=Cn[--Rn],Cn[Rn]=null,Mi=Cn[--Rn],Cn[Rn]=null}var Sn=null,yn=null,ft=!1,Vn=null;function Pg(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(ft){var e=yn;if(e){var n=e;if(!Xh(t,e)){if(Lu(t))throw Error(re(418));e=nr(n.nextSibling);var i=Sn;e&&Xh(t,e)?Pg(i,n):(t.flags=t.flags&-4097|2,ft=!1,Sn=t)}}else{if(Lu(t))throw Error(re(418));t.flags=t.flags&-4097|2,ft=!1,Sn=t}}}function Yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function so(t){if(t!==Sn)return!1;if(!ft)return Yh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cu(t.type,t.memoizedProps)),e&&(e=yn)){if(Lu(t))throw Lg(),Error(re(418));for(;e;)Pg(t,e),e=nr(e.nextSibling)}if(Yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?nr(t.stateNode.nextSibling):null;return!0}function Lg(){for(var t=yn;t;)t=nr(t.nextSibling)}function As(){yn=Sn=null,ft=!1}function df(t){Vn===null?Vn=[t]:Vn.push(t)}var __=Ii.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $h(t){var e=t._init;return e(t._payload)}function Dg(t){function e(d,x){if(t){var M=d.deletions;M===null?(d.deletions=[x],d.flags|=16):M.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=ar(d,x),d.index=0,d.sibling=null,d}function s(d,x,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<x?(d.flags|=2,x):M):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,M,S){return x===null||x.tag!==6?(x=Sc(M,d.mode,S),x.return=d,x):(x=r(x,M),x.return=d,x)}function l(d,x,M,S){var w=M.type;return w===ss?h(d,x,M.props.children,S,M.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ji&&$h(w)===x.type)?(S=r(x,M.props),S.ref=Xs(d,x,M),S.return=d,S):(S=Xo(M.type,M.key,M.props,null,d.mode,S),S.ref=Xs(d,x,M),S.return=d,S)}function c(d,x,M,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Mc(M,d.mode,S),x.return=d,x):(x=r(x,M.children||[]),x.return=d,x)}function h(d,x,M,S,w){return x===null||x.tag!==7?(x=Nr(M,d.mode,S,w),x.return=d,x):(x=r(x,M),x.return=d,x)}function f(d,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Sc(""+x,d.mode,M),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:return M=Xo(x.type,x.key,x.props,null,d.mode,M),M.ref=Xs(d,null,x),M.return=d,M;case rs:return x=Mc(x,d.mode,M),x.return=d,x;case ji:var S=x._init;return f(d,S(x._payload),M)}if(ia(x)||Vs(x))return x=Nr(x,d.mode,M,null),x.return=d,x;ao(d,x)}return null}function u(d,x,M,S){var w=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return w!==null?null:o(d,x,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qa:return M.key===w?l(d,x,M,S):null;case rs:return M.key===w?c(d,x,M,S):null;case ji:return w=M._init,u(d,x,w(M._payload),S)}if(ia(M)||Vs(M))return w!==null?null:h(d,x,M,S,null);ao(d,M)}return null}function m(d,x,M,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(M)||null,o(x,d,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qa:return d=d.get(S.key===null?M:S.key)||null,l(x,d,S,w);case rs:return d=d.get(S.key===null?M:S.key)||null,c(x,d,S,w);case ji:var A=S._init;return m(d,x,M,A(S._payload),w)}if(ia(S)||Vs(S))return d=d.get(M)||null,h(x,d,S,w,null);ao(x,S)}return null}function _(d,x,M,S){for(var w=null,A=null,E=x,g=x=0,C=null;E!==null&&g<M.length;g++){E.index>g?(C=E,E=null):C=E.sibling;var N=u(d,E,M[g],S);if(N===null){E===null&&(E=C);break}t&&E&&N.alternate===null&&e(d,E),x=s(N,x,g),A===null?w=N:A.sibling=N,A=N,E=C}if(g===M.length)return n(d,E),ft&&_r(d,g),w;if(E===null){for(;g<M.length;g++)E=f(d,M[g],S),E!==null&&(x=s(E,x,g),A===null?w=E:A.sibling=E,A=E);return ft&&_r(d,g),w}for(E=i(d,E);g<M.length;g++)C=m(E,d,g,M[g],S),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?g:C.key),x=s(C,x,g),A===null?w=C:A.sibling=C,A=C);return t&&E.forEach(function(P){return e(d,P)}),ft&&_r(d,g),w}function b(d,x,M,S){var w=Vs(M);if(typeof w!="function")throw Error(re(150));if(M=w.call(M),M==null)throw Error(re(151));for(var A=w=null,E=x,g=x=0,C=null,N=M.next();E!==null&&!N.done;g++,N=M.next()){E.index>g?(C=E,E=null):C=E.sibling;var P=u(d,E,N.value,S);if(P===null){E===null&&(E=C);break}t&&E&&P.alternate===null&&e(d,E),x=s(P,x,g),A===null?w=P:A.sibling=P,A=P,E=C}if(N.done)return n(d,E),ft&&_r(d,g),w;if(E===null){for(;!N.done;g++,N=M.next())N=f(d,N.value,S),N!==null&&(x=s(N,x,g),A===null?w=N:A.sibling=N,A=N);return ft&&_r(d,g),w}for(E=i(d,E);!N.done;g++,N=M.next())N=m(E,d,g,N.value,S),N!==null&&(t&&N.alternate!==null&&E.delete(N.key===null?g:N.key),x=s(N,x,g),A===null?w=N:A.sibling=N,A=N);return t&&E.forEach(function(L){return e(d,L)}),ft&&_r(d,g),w}function v(d,x,M,S){if(typeof M=="object"&&M!==null&&M.type===ss&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case qa:e:{for(var w=M.key,A=x;A!==null;){if(A.key===w){if(w=M.type,w===ss){if(A.tag===7){n(d,A.sibling),x=r(A,M.props.children),x.return=d,d=x;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ji&&$h(w)===A.type){n(d,A.sibling),x=r(A,M.props),x.ref=Xs(d,A,M),x.return=d,d=x;break e}n(d,A);break}else e(d,A);A=A.sibling}M.type===ss?(x=Nr(M.props.children,d.mode,S,M.key),x.return=d,d=x):(S=Xo(M.type,M.key,M.props,null,d.mode,S),S.ref=Xs(d,x,M),S.return=d,d=S)}return a(d);case rs:e:{for(A=M.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){n(d,x.sibling),x=r(x,M.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Mc(M,d.mode,S),x.return=d,d=x}return a(d);case ji:return A=M._init,v(d,x,A(M._payload),S)}if(ia(M))return _(d,x,M,S);if(Vs(M))return b(d,x,M,S);ao(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,M),x.return=d,d=x):(n(d,x),x=Sc(M,d.mode,S),x.return=d,d=x),a(d)):n(d,x)}return v}var Cs=Dg(!0),Ig=Dg(!1),fl=fr(null),hl=null,hs=null,ff=null;function hf(){ff=hs=hl=null}function pf(t){var e=fl.current;dt(fl),t._currentValue=e}function Iu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){hl=t,ff=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(hl===null)throw Error(re(308));hs=t,hl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var Tr=null;function mf(t){Tr===null?Tr=[t]:Tr.push(t)}function Ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var u=o.lane,m=o.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,b=o;switch(u=e,m=n,b.tag){case 1:if(_=b.payload,typeof _=="function"){f=_.call(m,f,u);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=b.payload,u=typeof _=="function"?_.call(m,f,u):_,u==null)break e;f=gt({},f,u);break e;case 2:Xi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else m={eventTime:m,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=f):h=h.next=m,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=f}}function Kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Va={},ai=fr(Va),Ca=fr(Va),Ra=fr(Va);function wr(t){if(t===Va)throw Error(re(174));return t}function xf(t,e){switch(ct(Ra,e),ct(Ca,t),ct(ai,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pu(e,t)}dt(ai),ct(ai,e)}function Rs(){dt(ai),dt(Ca),dt(Ra)}function Og(t){wr(Ra.current);var e=wr(ai.current),n=pu(e,t.type);e!==n&&(ct(Ca,t),ct(ai,n))}function vf(t){Ca.current===t&&(dt(ai),dt(Ca))}var ht=fr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mc=[];function _f(){for(var t=0;t<mc.length;t++)mc[t]._workInProgressVersionPrimary=null;mc.length=0}var Vo=Ii.ReactCurrentDispatcher,gc=Ii.ReactCurrentBatchConfig,Dr=0,mt=null,Nt=null,Ft=null,gl=!1,ha=!1,Na=0,y_=0;function Wt(){throw Error(re(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,i,r,s){if(Dr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vo.current=t===null||t.memoizedState===null?b_:T_,t=n(i,r),ha){s=0;do{if(ha=!1,Na=0,25<=s)throw Error(re(301));s+=1,Ft=Nt=null,e.updateQueue=null,Vo.current=w_,t=n(i,r)}while(ha)}if(Vo.current=xl,e=Nt!==null&&Nt.next!==null,Dr=0,Ft=Nt=mt=null,gl=!1,e)throw Error(re(300));return t}function Mf(){var t=Na!==0;return Na=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?mt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function In(){if(Nt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Ft===null?mt.memoizedState:Ft.next;if(e!==null)Ft=e,Nt=t;else{if(t===null)throw Error(re(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ft===null?mt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Pa(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=In(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Dr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,mt.lanes|=h,Ir|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Xn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vc(t){var e=In(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Xn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function kg(){}function Bg(t,e){var n=mt,i=In(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,Ef(Hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,La(9,Vg.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(re(349));Dr&30||zg(n,e,r)}return r}function zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vg(t,e,n,i){e.value=n,e.getSnapshot=i,Gg(e)&&Wg(t)}function Hg(t,e,n){return n(function(){Gg(e)&&Wg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function Wg(t){var e=Ni(t,1);e!==null&&jn(e,t,1,-1)}function Zh(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=E_.bind(null,mt,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jg(){return In().memoizedState}function Ho(t,e,n,i){var r=Jn();mt.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function Fl(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var a=Nt.memoizedState;if(s=a.destroy,i!==null&&yf(i,a.deps)){r.memoizedState=La(e,n,s,i);return}}mt.flags|=t,r.memoizedState=La(1|e,n,s,i)}function Qh(t,e){return Ho(8390656,8,t,e)}function Ef(t,e){return Fl(2048,8,t,e)}function Xg(t,e){return Fl(4,2,t,e)}function Yg(t,e){return Fl(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,$g.bind(null,e,t),n)}function bf(){}function Kg(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qg(t,e,n){return Dr&21?(Xn(n,e)||(n=ig(),mt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function S_(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=gc.transition;gc.transition={};try{t(!1),e()}finally{it=n,gc.transition=i}}function Jg(){return In().memoizedState}function M_(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ex(t))tx(e,n);else if(n=Ug(t,e,n,i),n!==null){var r=Jt();jn(n,t,i,r),nx(n,e,i)}}function E_(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ex(t))tx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Xn(o,a)){var l=e.interleaved;l===null?(r.next=r,mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ug(t,e,r,i),n!==null&&(r=Jt(),jn(n,t,i,r),nx(n,e,i))}}function ex(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function tx(t,e){ha=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}var xl={readContext:Dn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},b_={readContext:Dn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ho(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ho(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=M_.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Zh,useDebugValue:bf,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Zh(!1),e=t[0];return t=S_.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Jn();if(ft){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ot===null)throw Error(re(349));Dr&30||zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qh(Hg.bind(null,i,s,t),[t]),i.flags|=2048,La(9,Vg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ot.identifierPrefix;if(ft){var n=Ei,i=Mi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=y_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},T_={readContext:Dn,useCallback:Kg,useContext:Dn,useEffect:Ef,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:Yg,useMemo:Zg,useReducer:xc,useRef:jg,useState:function(){return xc(Pa)},useDebugValue:bf,useDeferredValue:function(t){var e=In();return Qg(e,Nt.memoizedState,t)},useTransition:function(){var t=xc(Pa)[0],e=In().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Bg,useId:Jg,unstable_isNewReconciler:!1},w_={readContext:Dn,useCallback:Kg,useContext:Dn,useEffect:Ef,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:Yg,useMemo:Zg,useReducer:vc,useRef:jg,useState:function(){return vc(Pa)},useDebugValue:bf,useDeferredValue:function(t){var e=In();return Nt===null?e.memoizedState=t:Qg(e,Nt.memoizedState,t)},useTransition:function(){var t=vc(Pa)[0],e=In().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Bg,useId:Jg,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=sr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(jn(e,t,r,i),zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=sr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(jn(e,t,r,i),zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=sr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(jn(e,t,i,n),zo(e,t,i))}};function Jh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function ix(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=cn(e)?Pr:Kt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Fu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=cn(e)?Pr:Kt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=ev(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ou(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var A_=typeof WeakMap=="function"?WeakMap:Map;function rx(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,Yu=i),Ou(t,e)},n}function sx(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ou(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ou(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new A_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=V_.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var C_=Ii.ReactCurrentOwner,on=!1;function Qt(t,e,n,i){e.child=t===null?Ig(e,null,n,i):Cs(e,t.child,n,i)}function rp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=Sf(t,e,n,i,s,r),n=Mf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ft&&n&&cf(e),e.flags|=1,Qt(t,e,i,r),e.child)}function sp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ax(t,e,s,i,r)):(t=Xo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function ax(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return ku(t,e,n,i,r)}function ox(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(ms,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(ms,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(ms,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(ms,xn),xn|=i;return Qt(t,e,r,n),e.child}function lx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ku(t,e,n,i,r){var s=cn(n)?Pr:Kt.current;return s=ws(e,s),ys(e,r),n=Sf(t,e,n,i,s,r),i=Mf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ft&&i&&cf(e),e.flags|=1,Qt(t,e,n,r),e.child)}function ap(t,e,n,i,r){if(cn(n)){var s=!0;cl(e)}else s=!1;if(ys(e,r),e.stateNode===null)Go(t,e),ix(e,n,i),Fu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=cn(n)?Pr:Kt.current,c=ws(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&ep(e,a,i,c),Xi=!1;var u=e.memoizedState;a.state=u,pl(e,i,a,r),l=e.memoizedState,o!==i||u!==l||ln.current||Xi?(typeof h=="function"&&(Uu(e,n,h,i),l=e.memoizedState),(o=Xi||Jh(e,n,o,i,u,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Fg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Bn(e.type,o),a.props=c,f=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=cn(n)?Pr:Kt.current,l=ws(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||u!==l)&&ep(e,a,i,l),Xi=!1,u=e.memoizedState,a.state=u,pl(e,i,a,r);var _=e.memoizedState;o!==f||u!==_||ln.current||Xi?(typeof m=="function"&&(Uu(e,n,m,i),_=e.memoizedState),(c=Xi||Jh(e,n,c,i,u,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Bu(t,e,n,i,s,r)}function Bu(t,e,n,i,r,s){lx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&jh(e,n,!1),Pi(t,e,s);i=e.stateNode,C_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Cs(e,t.child,null,s),e.child=Cs(e,null,o,s)):Qt(t,e,o,s),e.memoizedState=i.state,r&&jh(e,n,!0),e.child}function cx(t){var e=t.stateNode;e.pendingContext?Wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wh(t,e.context,!1),xf(t,e.containerInfo)}function op(t,e,n,i,r){return As(),df(r),e.flags|=256,Qt(t,e,n,i),e.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function ux(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(ht,r&1),t===null)return Du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=zl(a,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vu(n),e.memoizedState=zu,t):Tf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return R_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ar(o,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Vu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zu,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tf(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oo(t,e,n,i){return i!==null&&df(i),Cs(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function R_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=_c(Error(re(422))),oo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zl({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Cs(e,t.child,null,a),e.child.memoizedState=Vu(a),e.memoizedState=zu,s);if(!(e.mode&1))return oo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=_c(s,i,void 0),oo(t,e,a,i)}if(o=(a&t.childLanes)!==0,on||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),jn(i,t,r,-1))}return Pf(),i=_c(Error(re(421))),oo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=H_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=nr(r.nextSibling),Sn=e,ft=!0,Vn=null,t!==null&&(Cn[Rn++]=Mi,Cn[Rn++]=Ei,Cn[Rn++]=Lr,Mi=t.id,Ei=t.overflow,Lr=e),e=Tf(e,i.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Iu(t.return,e,n)}function yc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yc(e,!0,n,null,s);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N_(t,e,n){switch(e.tag){case 3:cx(e),As();break;case 5:Og(e);break;case 1:cn(e.type)&&cl(e);break;case 4:xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?ux(t,e,n):(ct(ht,ht.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ct(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,ox(t,e,n)}return Pi(t,e,n)}var fx,Hu,hx,px;fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hu=function(){};hx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ai.current);var s=null;switch(n){case"input":r=uu(t,r),i=uu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=hu(t,r),i=hu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ol)}mu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};px=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function P_(t,e,n){var i=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return cn(e.type)&&ll(),jt(e),null;case 3:return i=e.stateNode,Rs(),dt(ln),dt(Kt),_f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(so(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Ku(Vn),Vn=null))),Hu(t,e),jt(e),null;case 5:vf(e);var r=wr(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)hx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return jt(e),null}if(t=wr(ai.current),so(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)ut(sa[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":xh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":_h(i,s),ut("invalid",i)}mu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ro(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ro(i.textContent,o,t),r=["children",""+o]):xa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":Ka(i),vh(i,s,!0);break;case"textarea":Ka(i),yh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ti]=e,t[Aa]=i,fx(t,e,!1,!1),e.stateNode=t;e:{switch(a=gu(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)ut(sa[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":xh(t,i),r=uu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":_h(t,i),r=hu(t,i),ut("invalid",t);break;default:r=i}mu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&$d(t,s,l,a))}switch(n){case"input":Ka(t),vh(t,i,!1);break;case"textarea":Ka(t),yh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)px(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=wr(Ra.current),wr(ai.current),so(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ro(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return jt(e),null;case 13:if(dt(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&yn!==null&&e.mode&1&&!(e.flags&128))Lg(),As(),e.flags|=98560,s=!1;else if(s=so(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ti]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Vn!==null&&(Ku(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Pt===0&&(Pt=3):Pf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Rs(),Hu(t,e),t===null&&Ta(e.stateNode.containerInfo),jt(e),null;case 10:return pf(e.type._context),jt(e),null;case 17:return cn(e.type)&&ll(),jt(e),null;case 19:if(dt(ht),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ys(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ml(t),a!==null){for(e.flags|=128,Ys(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Ps&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return jt(e),null}else 2*bt()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=ht.current,ct(ht,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Nf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function L_(t,e){switch(uf(e),e.tag){case 1:return cn(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),dt(ln),dt(Kt),_f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vf(e),null;case 13:if(dt(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(ht),null;case 4:return Rs(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var lo=!1,$t=!1,D_=typeof WeakSet=="function"?WeakSet:Set,Me=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Gu(t,e,n){try{n()}catch(i){yt(t,e,i)}}var cp=!1;function I_(t,e){if(wu=rl,t=_g(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)u=f,f=m;for(;;){if(f===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++h===i&&(l=a),(m=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Au={focusedElem:t,selectionRange:n},rl=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var b=_.memoizedProps,v=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?b:Bn(e.type,b),v);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return _=cp,cp=!1,_}function pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Gu(e,n,s)}r=r.next}while(r!==i)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mx(t){var e=t.alternate;e!==null&&(t.alternate=null,mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[Aa],delete e[Nu],delete e[g_],delete e[x_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gx(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Xu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Xu(t,e,n),t=t.sibling;t!==null;)Xu(t,e,n),t=t.sibling}var Bt=null,zn=!1;function ki(t,e,n){for(n=n.child;n!==null;)xx(t,e,n),n=n.sibling}function xx(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:$t||ps(n,e);case 6:var i=Bt,r=zn;Bt=null,ki(t,e,n),Bt=i,zn=r,Bt!==null&&(zn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(zn?(t=Bt,n=n.stateNode,t.nodeType===8?hc(t.parentNode,n):t.nodeType===1&&hc(t,n),Ma(t)):hc(Bt,n.stateNode));break;case 4:i=Bt,r=zn,Bt=n.stateNode.containerInfo,zn=!0,ki(t,e,n),Bt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Gu(n,e,a),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!$t&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,ki(t,e,n),$t=i):ki(t,e,n);break;default:ki(t,e,n)}}function dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new D_),e.forEach(function(i){var r=G_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,zn=!1;break e;case 3:Bt=o.stateNode.containerInfo,zn=!0;break e;case 4:Bt=o.stateNode.containerInfo,zn=!0;break e}o=o.return}if(Bt===null)throw Error(re(160));xx(s,a,r),Bt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vx(e,t),e=e.sibling}function vx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Kn(t),i&4){try{pa(3,t,t.return),kl(3,t)}catch(b){yt(t,t.return,b)}try{pa(5,t,t.return)}catch(b){yt(t,t.return,b)}}break;case 1:Un(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Un(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(b){yt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&zm(r,s),gu(o,a);var c=gu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?jm(r,f):h==="dangerouslySetInnerHTML"?Gm(r,f):h==="children"?va(r,f):$d(r,h,f,c)}switch(o){case"input":du(r,s);break;case"textarea":Vm(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gs(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(b){yt(t,t.return,b)}}break;case 6:if(Un(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){yt(t,t.return,b)}}break;case 3:if(Un(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(b){yt(t,t.return,b)}break;case 4:Un(e,t),Kn(t);break;case 13:Un(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cf=bt())),i&4&&dp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||h,Un(e,t),$t=c):Un(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Me=t,h=t.child;h!==null;){for(f=Me=h;Me!==null;){switch(u=Me,m=u.child,u.tag){case 0:case 11:case 14:case 15:pa(4,u,u.return);break;case 1:ps(u,u.return);var _=u.stateNode;if(typeof _.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(b){yt(i,n,b)}}break;case 5:ps(u,u.return);break;case 22:if(u.memoizedState!==null){hp(f);continue}}m!==null?(m.return=u,Me=m):hp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Wm("display",a))}catch(b){yt(t,t.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){yt(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),Kn(t),i&4&&dp(t);break;case 21:break;default:Un(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var s=up(t);Xu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=up(t);ju(t,o,a);break;default:throw Error(re(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function U_(t,e,n){Me=t,_x(t)}function _x(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||lo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||$t;o=lo;var c=$t;if(lo=a,($t=l)&&!c)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?pp(r):l!==null?(l.return=a,Me=l):pp(r);for(;s!==null;)Me=s,_x(s),s=s.sibling;Me=r,lo=o,$t=c}fp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):fp(t)}}function fp(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ma(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}$t||e.flags&512&&Wu(e)}catch(u){yt(e,e.return,u)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function hp(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function pp(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Wu(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{Wu(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var F_=Math.ceil,vl=Ii.ReactCurrentDispatcher,wf=Ii.ReactCurrentOwner,Pn=Ii.ReactCurrentBatchConfig,et=0,Ot=null,Ct=null,Vt=0,xn=0,ms=fr(0),Pt=0,Da=null,Ir=0,Bl=0,Af=0,ma=null,an=null,Cf=0,Ps=1/0,_i=null,_l=!1,Yu=null,rr=null,co=!1,Zi=null,yl=0,ga=0,$u=null,Wo=-1,jo=0;function Jt(){return et&6?bt():Wo!==-1?Wo:Wo=bt()}function sr(t){return t.mode&1?et&2&&Vt!==0?Vt&-Vt:__.transition!==null?(jo===0&&(jo=ig()),jo):(t=it,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function jn(t,e,n,i){if(50<ga)throw ga=0,$u=null,Error(re(185));ka(t,n,i),(!(et&2)||t!==Ot)&&(t===Ot&&(!(et&2)&&(Bl|=n),Pt===4&&$i(t,Vt)),un(t,i),n===1&&et===0&&!(e.mode&1)&&(Ps=bt()+500,Ul&&hr()))}function un(t,e){var n=t.callbackNode;_v(t,e);var i=il(t,t===Ot?Vt:0);if(i===0)n!==null&&Eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Eh(n),e===1)t.tag===0?v_(mp.bind(null,t)):Rg(mp.bind(null,t)),p_(function(){!(et&6)&&hr()}),n=null;else{switch(rg(i)){case 1:n=Jd;break;case 4:n=tg;break;case 16:n=nl;break;case 536870912:n=ng;break;default:n=nl}n=Ax(n,yx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yx(t,e){if(Wo=-1,jo=0,et&6)throw Error(re(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=il(t,t===Ot?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=et;et|=2;var s=Mx();(Ot!==t||Vt!==e)&&(_i=null,Ps=bt()+500,Rr(t,e));do try{B_();break}catch(o){Sx(t,o)}while(!0);hf(),vl.current=s,et=r,Ct!==null?e=0:(Ot=null,Vt=0,e=Pt)}if(e!==0){if(e===2&&(r=Su(t),r!==0&&(i=r,e=qu(t,r))),e===1)throw n=Da,Rr(t,0),$i(t,i),un(t,bt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!O_(r)&&(e=Sl(t,i),e===2&&(s=Su(t),s!==0&&(i=s,e=qu(t,s))),e===1))throw n=Da,Rr(t,0),$i(t,i),un(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:yr(t,an,_i);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Cf+500-bt(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ru(yr.bind(null,t,an,_i),e);break}yr(t,an,_i);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Wn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*F_(i/1960))-i,10<i){t.timeoutHandle=Ru(yr.bind(null,t,an,_i),i);break}yr(t,an,_i);break;case 5:yr(t,an,_i);break;default:throw Error(re(329))}}}return un(t,bt()),t.callbackNode===n?yx.bind(null,t):null}function qu(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=an,an=n,e!==null&&Ku(e)),t}function Ku(t){an===null?an=t:an.push.apply(an,t)}function O_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Af,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function mp(t){if(et&6)throw Error(re(327));Ss();var e=il(t,0);if(!(e&1))return un(t,bt()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=Su(t);i!==0&&(e=i,n=qu(t,i))}if(n===1)throw n=Da,Rr(t,0),$i(t,e),un(t,bt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,an,_i),un(t,bt()),null}function Rf(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Ps=bt()+500,Ul&&hr())}}function Ur(t){Zi!==null&&Zi.tag===0&&!(et&6)&&Ss();var e=et;et|=1;var n=Pn.transition,i=it;try{if(Pn.transition=null,it=1,t)return t()}finally{it=i,Pn.transition=n,et=e,!(et&6)&&hr()}}function Nf(){xn=ms.current,dt(ms)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h_(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(uf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:Rs(),dt(ln),dt(Kt),_f();break;case 5:vf(i);break;case 4:Rs();break;case 13:dt(ht);break;case 19:dt(ht);break;case 10:pf(i.type._context);break;case 22:case 23:Nf()}n=n.return}if(Ot=t,Ct=t=ar(t.current,null),Vt=xn=e,Pt=0,Da=null,Af=Bl=Ir=0,an=ma=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Tr=null}return t}function Sx(t,e){do{var n=Ct;try{if(hf(),Vo.current=xl,gl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(Dr=0,Ft=Nt=mt=null,ha=!1,Na=0,wf.current=null,n===null||n.return===null){Pt=1,Da=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=np(a);if(m!==null){m.flags&=-257,ip(m,a,o,s,e),m.mode&1&&tp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var b=new Set;b.add(l),e.updateQueue=b}else _.add(l);break e}else{if(!(e&1)){tp(s,c,e),Pf();break e}l=Error(re(426))}}else if(ft&&o.mode&1){var v=np(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),ip(v,a,o,s,e),df(Ns(l,o));break e}}s=l=Ns(l,o),Pt!==4&&(Pt=2),ma===null?ma=[s]:ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=rx(s,l,e);qh(s,d);break e;case 1:o=l;var x=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(rr===null||!rr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=sx(s,o,e);qh(s,S);break e}}s=s.return}while(s!==null)}bx(n)}catch(w){e=w,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function Mx(){var t=vl.current;return vl.current=xl,t===null?xl:t}function Pf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Ir&268435455)&&!(Bl&268435455)||$i(Ot,Vt)}function Sl(t,e){var n=et;et|=2;var i=Mx();(Ot!==t||Vt!==e)&&(_i=null,Rr(t,e));do try{k_();break}catch(r){Sx(t,r)}while(!0);if(hf(),et=n,vl.current=i,Ct!==null)throw Error(re(261));return Ot=null,Vt=0,Pt}function k_(){for(;Ct!==null;)Ex(Ct)}function B_(){for(;Ct!==null&&!uv();)Ex(Ct)}function Ex(t){var e=wx(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?bx(t):Ct=e,wf.current=null}function bx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L_(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=P_(n,e,xn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function yr(t,e,n){var i=it,r=Pn.transition;try{Pn.transition=null,it=1,z_(t,e,n,i)}finally{Pn.transition=r,it=i}return null}function z_(t,e,n,i){do Ss();while(Zi!==null);if(et&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yv(t,s),t===Ot&&(Ct=Ot=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,Ax(nl,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var a=it;it=1;var o=et;et|=4,wf.current=null,I_(t,n),vx(n,t),a_(Au),rl=!!wu,Au=wu=null,t.current=n,U_(n),dv(),et=o,it=a,Pn.transition=s}else t.current=n;if(co&&(co=!1,Zi=t,yl=r),s=t.pendingLanes,s===0&&(rr=null),pv(n.stateNode),un(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=Yu,Yu=null,t;return yl&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===$u?ga++:(ga=0,$u=t):ga=0,hr(),null}function Ss(){if(Zi!==null){var t=rg(yl),e=Pn.transition,n=it;try{if(Pn.transition=null,it=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,yl=0,et&6)throw Error(re(331));var r=et;for(et|=4,Me=t.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Me=c;Me!==null;){var h=Me;switch(h.tag){case 0:case 11:case 15:pa(8,h,s)}var f=h.child;if(f!==null)f.return=h,Me=f;else for(;Me!==null;){h=Me;var u=h.sibling,m=h.return;if(mx(h),h===c){Me=null;break}if(u!==null){u.return=m,Me=u;break}Me=m}}}var _=s.alternate;if(_!==null){var b=_.child;if(b!==null){_.child=null;do{var v=b.sibling;b.sibling=null,b=v}while(b!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Me=d;break e}Me=s.return}}var x=t.current;for(Me=x;Me!==null;){a=Me;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Me=M;else e:for(a=x;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:kl(9,o)}}catch(w){yt(o,o.return,w)}if(o===a){Me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Me=S;break e}Me=o.return}}if(et=r,hr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Nl,t)}catch{}i=!0}return i}finally{it=n,Pn.transition=e}}return!1}function gp(t,e,n){e=Ns(n,e),e=rx(t,e,1),t=ir(t,e,1),e=Jt(),t!==null&&(ka(t,1,e),un(t,e))}function yt(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Ns(n,t),t=sx(e,t,1),e=ir(e,t,1),t=Jt(),e!==null&&(ka(e,1,t),un(e,t));break}}e=e.return}}function V_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Vt&n)===n&&(Pt===4||Pt===3&&(Vt&130023424)===Vt&&500>bt()-Cf?Rr(t,0):Af|=n),un(t,e)}function Tx(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=Jt();t=Ni(t,e),t!==null&&(ka(t,e,n),un(t,n))}function H_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tx(t,n)}function G_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Tx(t,n)}var wx;wx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,N_(t,e,n);on=!!(t.flags&131072)}else on=!1,ft&&e.flags&1048576&&Ng(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Go(t,e),t=e.pendingProps;var r=ws(e,Kt.current);ys(e,n),r=Sf(null,e,i,t,r,n);var s=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gf(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,Fu(e,i,t,n),e=Bu(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&cf(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Go(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=j_(i),t=Bn(i,t),r){case 0:e=ku(null,e,i,t,n);break e;case 1:e=ap(null,e,i,t,n);break e;case 11:e=rp(null,e,i,t,n);break e;case 14:e=sp(null,e,i,Bn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ku(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ap(t,e,i,r,n);case 3:e:{if(cx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fg(t,e),pl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(re(423)),e),e=op(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(re(424)),e),e=op(t,e,i,n,r);break e}else for(yn=nr(e.stateNode.containerInfo.firstChild),Sn=e,ft=!0,Vn=null,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),i===r){e=Pi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return Og(e),t===null&&Du(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Cu(i,r)?a=null:s!==null&&Cu(i,s)&&(e.flags|=32),lx(t,e),Qt(t,e,a,n),e.child;case 6:return t===null&&Du(e),null;case 13:return ux(t,e,n);case 4:return xf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Cs(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),rp(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(fl,i._currentValue),i._currentValue=a,s!==null)if(Xn(s.value,a)){if(s.children===r.children&&!ln.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Iu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Iu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=Dn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),sp(t,e,i,r,n);case 15:return ax(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Go(t,e),e.tag=1,cn(i)?(t=!0,cl(e)):t=!1,ys(e,n),ix(e,i,r),Fu(e,i,r,n),Bu(null,e,i,!0,t,n);case 19:return dx(t,e,n);case 22:return ox(t,e,n)}throw Error(re(156,e.tag))};function Ax(t,e){return eg(t,e)}function W_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new W_(t,e,n,i)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j_(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Lf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Nr(n.children,r,s,e);case qd:a=8,r|=8;break;case au:return t=Nn(12,n,e,r|2),t.elementType=au,t.lanes=s,t;case ou:return t=Nn(13,n,e,r),t.elementType=ou,t.lanes=s,t;case lu:return t=Nn(19,n,e,r),t.elementType=lu,t.lanes=s,t;case Om:return zl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Um:a=10;break e;case Fm:a=9;break e;case Kd:a=11;break e;case Zd:a=14;break e;case ji:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Nn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function zl(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Om,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Mc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function X_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nc(0),this.expirationTimes=nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,i,r,s,a,o,l){return t=new X_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function Y_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Cx(t){if(!t)return lr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(cn(n))return Cg(t,n,e)}return e}function Rx(t,e,n,i,r,s,a,o,l){return t=Df(n,i,!0,t,r,s,a,o,l),t.context=Cx(null),n=t.current,i=Jt(),r=sr(n),s=Ti(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,ka(t,r,i),un(t,i),t}function Vl(t,e,n,i){var r=e.current,s=Jt(),a=sr(r);return n=Cx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,a),t!==null&&(jn(t,r,a,s),zo(t,r,a)),a}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){xp(t,e),(t=t.alternate)&&xp(t,e)}function $_(){return null}var Nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uf(t){this._internalRoot=t}Hl.prototype.render=Uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Vl(t,e,null,null)};Hl.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){Vl(null,t,null,null)}),e[Ri]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&cg(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function q_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ml(a);s.call(c)}}var a=Rx(e,i,t,0,null,!1,!1,"",vp);return t._reactRootContainer=a,t[Ri]=a.current,Ta(t.nodeType===8?t.parentNode:t),Ur(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ml(l);o.call(c)}}var l=Df(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[Ri]=l.current,Ta(t.nodeType===8?t.parentNode:t),Ur(function(){Vl(e,l,n,i)}),l}function Wl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ml(a);o.call(l)}}Vl(e,a,t,r)}else a=q_(n,e,t,r,i);return Ml(a)}sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(ef(e,n|1),un(e,bt()),!(et&6)&&(Ps=bt()+500,hr()))}break;case 13:Ur(function(){var i=Ni(t,1);if(i!==null){var r=Jt();jn(i,t,1,r)}}),If(t,1)}};tf=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=Jt();jn(e,t,134217728,n)}If(t,134217728)}};ag=function(t){if(t.tag===13){var e=sr(t),n=Ni(t,e);if(n!==null){var i=Jt();jn(n,t,e,i)}If(t,e)}};og=function(){return it};lg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};vu=function(t,e,n){switch(e){case"input":if(du(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Il(i);if(!r)throw Error(re(90));Bm(i),du(i,r)}}}break;case"textarea":Vm(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};$m=Rf;qm=Ur;var K_={usingClientEntryPoint:!1,Events:[za,cs,Il,Xm,Ym,Rf]},$s={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z_={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qm(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||$_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{Nl=uo.inject(Z_),si=uo}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(re(200));return Y_(t,e,null,n)};En.createRoot=function(t,e){if(!Ff(t))throw Error(re(299));var n=!1,i="",r=Nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,Ta(t.nodeType===8?t.parentNode:t),new Uf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Qm(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Ur(t)};En.hydrate=function(t,e,n){if(!Gl(e))throw Error(re(200));return Wl(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Nx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Rx(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,Ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hl(e)};En.render=function(t,e,n){if(!Gl(e))throw Error(re(200));return Wl(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(re(40));return t._reactRootContainer?(Ur(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};En.unstable_batchedUpdates=Rf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gl(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Wl(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function Px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Px)}catch(t){console.error(t)}}Px(),Pm.exports=En;var Q_=Pm.exports,_p=Q_;ru.createRoot=_p.createRoot,ru.hydrateRoot=_p.hydrateRoot;const J_=[{key:"2023-08",label:"August 2023"},{key:"2023-09",label:"September 2023"},{key:"2023-10",label:"October 2023"},{key:"2023-11",label:"November 2023"},{key:"2023-12",label:"December 2023"},{key:"2024-01",label:"January 2024"}],ey={monthKey:"2023-08",label:"August 2023",totalBalance:452e5,totalIncome:725e5,totalExpense:273e5,balanceGrowthPercent:12.5,incomeProgressPercent:70,expenseProgressPercent:30,weeklyCashflow:[{weekLabel:"Minggu 1",income:24e6,expense:6e6,incomePercent:80,expensePercent:30},{weekLabel:"Minggu 2",income:135e5,expense:12e6,incomePercent:45,expensePercent:60},{weekLabel:"Minggu 3",income:285e5,expense:5e6,incomePercent:95,expensePercent:25},{weekLabel:"Minggu 4",income:65e5,expense:43e5,incomePercent:65,expensePercent:40}]},Lx=Ee.createContext(void 0),ty=({children:t})=>{const[e,n]=Ee.useState([]),[i,r]=Ee.useState([]),[s,a]=Ee.useState(ey),[o,l]=Ee.useState([]),[c,h]=Ee.useState(()=>localStorage.getItem("nexus_finance_auth_v2")==="true"),[f,u]=Ee.useState(()=>localStorage.getItem("nexus_finance_role_v2")||"staff"),[m,_]=Ee.useState(()=>localStorage.getItem("nexus_finance_username_v2")||""),[b,v]=Ee.useState(!0),[d,x]=Ee.useState("2023-08"),[M,S]=Ee.useState("dashboard"),[w,A]=Ee.useState(!1),[E,g]=Ee.useState(!1),[C,N]=Ee.useState(!1),[P,L]=Ee.useState([]),k=(oe,ie="success")=>{const we="toast_"+Math.random().toString(36).substr(2,9);L(Le=>[...Le,{id:we,message:oe,type:ie}]),setTimeout(()=>{$(we)},4e3)},$=oe=>{L(ie=>ie.filter(we=>we.id!==oe))},O=async()=>{try{const oe=await fetch("/api/categories");if(oe.ok){const ie=await oe.json();n(ie.data||ie)}}catch(oe){console.error("Fetch categories failed",oe)}},Y=async()=>{try{const oe=await fetch("/api/transactions");if(oe.ok){const ie=await oe.json();r(ie)}}catch(oe){console.error("Fetch transactions failed",oe)}},z=async oe=>{if(f!=="staff")try{const ie=await fetch(`/api/dashboard/summary?month=${oe}`);if(ie.ok){const we=await ie.json();a(we.data)}}catch(ie){console.error("Fetch summary failed",ie)}},U=async()=>{try{const oe=await fetch("/api/notifications");if(oe.ok){const ie=await oe.json();l(ie.data||ie)}}catch(oe){console.error("Fetch notifications failed",oe)}},j=()=>{h(!1),u("staff"),_(""),localStorage.removeItem("nexus_finance_auth_v2"),localStorage.removeItem("nexus_finance_role_v2"),localStorage.removeItem("nexus_finance_username_v2")};Ee.useEffect(()=>{(async()=>{try{const ie=await fetch("/api/auth/get-session");if(ie.ok){const we=await ie.json();if(we&&we.user){h(!0);const Le=we.user.role||"staff";u(Le),_(we.user.name),localStorage.setItem("nexus_finance_auth_v2","true"),localStorage.setItem("nexus_finance_role_v2",Le),localStorage.setItem("nexus_finance_username_v2",we.user.name)}else j()}else j()}catch(ie){console.error("Session check failed",ie)}finally{v(!1)}})()},[]),Ee.useEffect(()=>{c&&(O(),Y(),U())},[c]),Ee.useEffect(()=>{c&&f!=="staff"&&z(d)},[c,f,d]);const Q=async(oe,ie)=>{try{const we=await fetch("/api/auth/sign-in/email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:oe,password:ie})});if(!we.ok){const Xe=await we.json();return k(Xe.message||"Login gagal. Periksa kredensial Anda.","error"),!1}const Le=await we.json();h(!0);const We=Le.user.role||"staff";return u(We),_(Le.user.name),localStorage.setItem("nexus_finance_auth_v2","true"),localStorage.setItem("nexus_finance_role_v2",We),localStorage.setItem("nexus_finance_username_v2",Le.user.name),S(We==="staff"?"transactions":"dashboard"),k("Autentikasi berhasil. Selamat datang di Nexus Finance!","success"),!0}catch(we){return console.error(we),k("Koneksi ke server gagal.","error"),!1}},ne=async()=>{try{await fetch("/api/auth/sign-out",{method:"POST"})}catch(oe){console.error(oe)}finally{j(),k("Sesi Nexus Finance telah diakhiri secara aman.","info")}},ae=async(oe,ie,we,Le)=>{try{const We=await fetch("/api/auth/sign-up/email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:oe,email:ie,password:we,role:Le})});if(!We.ok){const Xe=await We.json();return k(Xe.message||"Pendaftaran gagal. Silakan coba lagi.","error"),{success:!1}}return k("Pendaftaran berhasil! Silakan login.","success"),{success:!0}}catch(We){return console.error(We),k("Koneksi ke server gagal.","error"),{success:!1}}},ke=Ee.useMemo(()=>[...i].sort((oe,ie)=>new Date(ie.date).getTime()-new Date(oe.date).getTime()),[i]),Be=Ee.useMemo(()=>ke.slice(0,5),[ke]),Ie=async oe=>{try{const{categoryName:ie,...we}=oe,Le=await fetch("/api/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:we.amount,type:we.type,description:we.description,categoryId:we.categoryId,date:new Date(we.date).toISOString(),icon:we.icon})});if(!Le.ok){const We=await Le.json();k(We.error||"Gagal menambahkan transaksi.","error");return}k("Transaksi berhasil ditambahkan!","success"),await Y(),f!=="staff"&&await z(d)}catch(ie){console.error(ie),k("Gagal menghubungi server.","error")}},q=async oe=>{try{const ie=await fetch(`/api/transactions/${oe}`,{method:"DELETE"});if(!ie.ok){const we=await ie.json();k(we.error||"Gagal menghapus transaksi.","error");return}k("Transaksi berhasil dihapus","info"),await Y(),f!=="staff"&&await z(d)}catch(ie){console.error(ie),k("Gagal menghubungi server.","error")}},le=async(oe,ie)=>{try{const we=await fetch("/api/categories",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:oe,type:ie})});return we.ok?(k(`Kategori "${oe}" berhasil dibuat!`,"success"),await O(),{success:!0}):{success:!1,message:(await we.json()).error||"Gagal menambahkan kategori."}}catch(we){return console.error(we),k("Gagal menghubungi server.","error"),{success:!1,message:"Koneksi gagal"}}},se=async oe=>{try{const ie=await fetch(`/api/categories/${oe}`,{method:"DELETE"});return ie.ok?(k("Kategori berhasil dihapus","info"),await O(),{success:!0}):{success:!1,message:(await ie.json()).error||"Gagal menghapus kategori."}}catch(ie){return console.error(ie),k("Gagal menghubungi server.","error"),{success:!1,message:"Koneksi gagal"}}},Ue=async()=>{try{(await fetch("/api/notifications/read-all",{method:"PATCH"})).ok&&l(ie=>ie.map(we=>({...we,isRead:!0})))}catch(oe){console.error(oe)}};return p.jsx(Lx.Provider,{value:{categories:e,transactions:i,selectedMonth:d,setSelectedMonth:x,availableMonths:J_,summary:s,recentTransactions:Be,filteredTransactions:ke,activeTab:M,setActiveTab:S,isAddModalOpen:w,openAddModal:()=>A(!0),closeAddModal:()=>A(!1),isNotificationOpen:E,setIsNotificationOpen:g,toggleNotification:()=>g(oe=>!oe),isMobileSidebarOpen:C,setIsMobileSidebarOpen:N,isAuthenticated:c,userRole:f,userName:m,login:Q,logout:ne,register:ae,isLoadingSession:b,addTransaction:Ie,deleteTransaction:q,addCategory:le,deleteCategory:se,notifications:o,markNotificationsAsRead:Ue,toasts:P,showToast:k,removeToast:$},children:t})},hn=()=>{const t=Ee.useContext(Lx);if(!t)throw new Error("useFinance must be used within a FinanceProvider");return t},ny=()=>{const{activeTab:t,setActiveTab:e,openAddModal:n,isMobileSidebarOpen:i,setIsMobileSidebarOpen:r,showToast:s,logout:a,userRole:o,userName:l}=hn(),c=[{id:"dashboard",label:"Dashboard",icon:"dashboard",fill:!0},{id:"transactions",label:"Transaksi",icon:"swap_horiz",fill:!1},{id:"ledger",label:"Riwayat Kas",icon:"history",fill:!1},{id:"categories",label:"Kategori",icon:"category",fill:!1}].filter(_=>o==="staff"?_.id!=="dashboard"&&_.id!=="categories":!0),h=_=>{e(_),r(!1)},f=_=>{_.preventDefault(),a()},u=_=>{_.preventDefault(),s("Pusat Bantuan Nexus: Dokumentasi dan panduan keuangan telah dibuka.","info")},m=p.jsxs("div",{className:"flex flex-col h-full py-md px-xs",children:[p.jsxs("div",{className:"px-md mb-xl flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-sm",children:[p.jsx("div",{className:"w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary/30 shrink-0",children:p.jsx("span",{className:"material-symbols-outlined text-primary text-xl",children:"account_balance"})}),p.jsx("div",{className:"overflow-hidden",children:p.jsx("h2",{className:"font-headline-md text-headline-md text-primary truncate text-lg",children:"Nexus Finance"})})]}),p.jsx("button",{onClick:()=>r(!1),className:"md:hidden text-on-surface-variant hover:text-on-surface p-1","aria-label":"Tutup menu",children:p.jsx("span",{className:"material-symbols-outlined text-xl",children:"close"})})]}),p.jsxs("div",{className:"px-md mb-lg",children:[p.jsxs("div",{className:"flex items-center gap-sm mb-md p-sm glass-panel rounded-lg hover:border-primary/40 transition-colors",children:[p.jsx("div",{className:"w-10 h-10 rounded-full overflow-hidden border border-outline-variant shrink-0 bg-surface-container-high flex items-center justify-center",children:p.jsx("div",{className:"w-full h-full bg-gradient-to-tr from-primary-container via-secondary to-primary flex items-center justify-center text-[#0a0a0f] font-bold text-xs",children:l?l.substring(0,2).toUpperCase():"NF"})}),p.jsxs("div",{className:"overflow-hidden",children:[p.jsx("p",{className:"font-label-md text-label-md text-on-surface truncate",children:l||"Premium User"}),p.jsxs("p",{className:"font-body-sm text-body-sm text-on-surface-variant text-[10px] truncate capitalize",children:["Plan: ",o]})]})]}),o!=="viewer"&&p.jsxs("button",{onClick:n,className:"w-full bg-primary-container text-[#0a0a0f] font-label-md text-label-md py-sm rounded glow-primary hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-xs font-semibold cursor-pointer shadow-lg",children:[p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"add"})," Add Transaction"]})]}),p.jsx("ul",{className:"flex-1 space-y-xs overflow-y-auto px-xs",children:c.map(_=>{const b=t===_.id;return p.jsx("li",{children:p.jsxs("button",{onClick:()=>h(_.id),className:`w-full text-left flex items-center gap-sm px-sm py-sm rounded-r-full font-label-md text-label-md transition-all active:scale-[0.98] duration-150 cursor-pointer ${b?"text-secondary font-bold bg-secondary-container/10 border-r-4 border-secondary":"text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"}`,children:[p.jsx("span",{className:"material-symbols-outlined",style:b&&_.fill?{fontVariationSettings:"'FILL' 1"}:void 0,children:_.icon}),_.label]})},_.id)})}),p.jsxs("div",{className:"mt-auto pt-md border-t border-outline-variant/30 px-xs space-y-xs",children:[p.jsxs("button",{onClick:u,className:"w-full flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all text-left font-label-md text-label-md cursor-pointer",children:[p.jsx("span",{className:"material-symbols-outlined",children:"help"}),"Help"]}),p.jsxs("button",{onClick:f,className:"w-full flex items-center gap-sm px-sm py-sm rounded-lg text-error hover:bg-error-container/20 transition-all text-left font-label-md text-label-md cursor-pointer",children:[p.jsx("span",{className:"material-symbols-outlined",children:"logout"}),"Logout"]}),p.jsx("div",{className:"pt-2 px-1",children:p.jsxs("div",{className:"flex items-center justify-between p-2 rounded-lg bg-surface-container/60 border border-[#2a2a3e] hover:border-primary/40 transition-colors",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"text-xs",children:"👑"}),p.jsxs("div",{className:"overflow-hidden",children:[p.jsx("p",{className:"text-[10px] font-bold text-primary tracking-wider uppercase truncate",children:"KING ARGA"}),p.jsx("p",{className:"text-[8px] text-on-surface-variant uppercase tracking-widest truncate",children:"System Edition"})]})]}),p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_#44f3a9]"})]})})]})]});return p.jsxs(p.Fragment,{children:[p.jsx("nav",{className:"hidden md:flex bg-surface-container-low text-secondary font-label-md text-label-md left-0 h-screen w-64 border-r border-outline-variant shrink-0 flex-col z-20",children:m}),i&&p.jsxs("div",{className:"fixed inset-0 z-50 md:hidden flex",children:[p.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity",onClick:()=>r(!1)}),p.jsx("nav",{className:"relative w-72 bg-surface-container-low border-r border-outline-variant flex flex-col h-full shadow-2xl z-10 animate-fade-in",children:m})]})]})},iy=()=>{const{activeTab:t,selectedMonth:e,setSelectedMonth:n,availableMonths:i,setIsMobileSidebarOpen:r,toggleNotification:s,notifications:a,showToast:o}=hn(),[l,c]=Ee.useState(!1),h=Ee.useRef(null),f=i.find(b=>b.key===e)||i[0],u=a.filter(b=>!b.isRead).length,m={dashboard:"Dashboard",transactions:"Transaksi",ledger:"Riwayat Kas",categories:"Kategori Keuangan","add-transaction":"Tambah Transaksi"};Ee.useEffect(()=>{const b=v=>{h.current&&!h.current.contains(v.target)&&c(!1)};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[]);const _=()=>{o("Pengaturan Nexus Finance: Preferensi sistem telah termutakhir.","info")};return p.jsxs("header",{className:"flex-none px-margin-mobile md:px-margin-desktop py-md flex items-center justify-between border-b border-outline-variant/30 glass-panel border-x-0 border-t-0 sticky top-0 z-20 backdrop-blur-md bg-[#12121a]/80",children:[p.jsxs("div",{className:"flex items-center gap-sm",children:[p.jsx("button",{onClick:()=>r(!0),className:"md:hidden text-on-surface hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high cursor-pointer","aria-label":"Buka menu navigasi",children:p.jsx("span",{className:"material-symbols-outlined",children:"menu"})}),p.jsx("h1",{className:"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight",children:m[t]||"Dashboard"})]}),p.jsxs("div",{className:"flex items-center gap-md",children:[p.jsxs("div",{className:"relative",ref:h,children:[p.jsxs("button",{onClick:()=>c(b=>!b),className:"flex items-center gap-xs px-sm py-xs border border-[#2a2a3e] rounded bg-[#0a0a0f] text-on-surface hover:border-primary-container transition-colors cursor-pointer","aria-expanded":l,children:[p.jsx("span",{className:"font-label-md text-label-md",children:f.label}),p.jsx("span",{className:`material-symbols-outlined text-[16px] transition-transform ${l?"rotate-180":""}`,children:"arrow_drop_down"})]}),l&&p.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-[#12121a] border border-[#2a2a3e] rounded-lg shadow-2xl py-1 z-50 animate-slide-down",children:[p.jsx("div",{className:"px-3 py-1.5 text-[11px] font-label-md text-on-surface-variant uppercase tracking-wider border-b border-[#2a2a3e]/60",children:"Pilih Periode"}),i.map(b=>p.jsxs("button",{onClick:()=>{n(b.key),c(!1)},className:`w-full text-left px-3 py-2 text-sm flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer ${b.key===e?"text-secondary font-semibold bg-secondary-container/10":"text-on-surface"}`,children:[p.jsx("span",{children:b.label}),b.key===e&&p.jsx("span",{className:"material-symbols-outlined text-secondary text-sm",children:"check"})]},b.key))]})]}),p.jsxs("div",{className:"hidden md:flex gap-sm",children:[p.jsxs("button",{onClick:s,className:"relative w-8 h-8 rounded-full border border-[#2a2a3e] flex items-center justify-center text-on-surface-variant hover:text-primary-container hover:border-primary-container/50 transition-colors cursor-pointer","aria-label":"Notifikasi",children:[p.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"notifications"}),u>0&&p.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-[#12121a]"})]}),p.jsx("button",{onClick:_,className:"w-8 h-8 rounded-full border border-[#2a2a3e] flex items-center justify-center text-on-surface-variant hover:text-primary-container hover:border-primary-container/50 transition-colors cursor-pointer","aria-label":"Pengaturan",children:p.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"settings"})})]})]})]})};function ni(t,e=!1){const i="Rp "+Math.abs(t).toLocaleString("en-US");return e?t>=0?"+"+i:"-"+i:i}function Ec(t){const e=Math.abs(t);return e>=1e9?`Rp ${(e/1e9).toFixed(1).replace(".0","")}B`:e>=1e6?`Rp ${(e/1e6).toFixed(1).replace(".0","")}M`:e>=1e3?`Rp ${(e/1e3).toFixed(0)}K`:`Rp ${e.toLocaleString("en-US")}`}function Dx(t){if(typeof t=="number")return t;const e=t.replace(/[^0-9]/g,"");return parseInt(e,10)||0}function Ix(t){try{const e=new Date(t);if(isNaN(e.getTime()))return t;const n=e.getDate(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],s=String(e.getHours()).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0");return`${n} ${r}, ${s}:${a}`}catch{return t}}function Ux(t){return new Date().toISOString().split("T")[0]}const ry=()=>{const{summary:t}=hn();return p.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-3 gap-md",children:[p.jsxs("div",{className:"glass-panel p-md rounded-xl glow-primary relative overflow-hidden group glass-card-hover",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),p.jsxs("div",{className:"flex justify-between items-start mb-sm relative z-10",children:[p.jsx("p",{className:"font-label-md text-label-md text-on-surface-variant",children:"Total Saldo"}),p.jsx("span",{className:"material-symbols-outlined text-primary-container",children:"account_balance_wallet"})]}),p.jsx("h3",{className:"font-display-lg text-display-lg text-on-surface mb-xs relative z-10",children:Ec(t.totalBalance)}),p.jsxs("div",{className:"flex items-center gap-xs relative z-10",children:[p.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/10 text-secondary border border-secondary/20",children:[p.jsx("span",{className:"material-symbols-outlined text-[12px] mr-1",children:"trending_up"})," +",t.balanceGrowthPercent,"%"]}),p.jsx("span",{className:"font-body-sm text-body-sm text-on-surface-variant text-[11px]",children:"vs last month"})]})]}),p.jsxs("div",{className:"glass-panel p-md rounded-xl glow-success relative overflow-hidden group glass-card-hover",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),p.jsxs("div",{className:"flex justify-between items-start mb-sm relative z-10",children:[p.jsx("p",{className:"font-label-md text-label-md text-on-surface-variant",children:"Pemasukan (Masuk)"}),p.jsx("span",{className:"material-symbols-outlined text-secondary",children:"arrow_downward"})]}),p.jsx("h3",{className:"font-headline-lg text-headline-lg text-on-surface mb-xs relative z-10",children:Ec(t.totalIncome)}),p.jsx("div",{className:"w-full bg-[#0a0a0f] h-1.5 rounded-full mt-sm overflow-hidden relative z-10 border border-[#2a2a3e]/40",children:p.jsx("div",{className:"bg-secondary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(68,243,169,0.5)]",style:{width:`${t.incomeProgressPercent}%`}})})]}),p.jsxs("div",{className:"glass-panel p-md rounded-xl glow-danger relative overflow-hidden group glass-card-hover",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),p.jsxs("div",{className:"flex justify-between items-start mb-sm relative z-10",children:[p.jsx("p",{className:"font-label-md text-label-md text-on-surface-variant",children:"Pengeluaran (Keluar)"}),p.jsx("span",{className:"material-symbols-outlined text-tertiary",children:"arrow_upward"})]}),p.jsx("h3",{className:"font-headline-lg text-headline-lg text-on-surface mb-xs relative z-10",children:Ec(t.totalExpense)}),p.jsx("div",{className:"w-full bg-[#0a0a0f] h-1.5 rounded-full mt-sm overflow-hidden relative z-10 border border-[#2a2a3e]/40",children:p.jsx("div",{className:"bg-tertiary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(255,179,176,0.4)]",style:{width:`${t.expenseProgressPercent}%`}})})]})]})},sy=()=>{const{summary:t}=hn();return p.jsxs("section",{className:"glass-panel p-md rounded-xl",children:[p.jsxs("div",{className:"flex items-center justify-between mb-lg",children:[p.jsx("h2",{className:"font-headline-md text-headline-md text-on-surface",children:"Arus Kas"}),p.jsxs("div",{className:"flex items-center gap-sm",children:[p.jsxs("div",{className:"flex items-center gap-xs",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_rgba(68,243,169,0.8)]"}),p.jsx("span",{className:"font-body-sm text-body-sm text-on-surface-variant",children:"Pemasukan"})]}),p.jsxs("div",{className:"flex items-center gap-xs",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-tertiary shadow-[0_0_6px_rgba(255,179,176,0.8)]"}),p.jsx("span",{className:"font-body-sm text-body-sm text-on-surface-variant",children:"Pengeluaran"})]})]})]}),p.jsx("div",{className:"space-y-md font-tabular-nums text-tabular-nums text-sm",children:t.weeklyCashflow.map((e,n)=>p.jsxs("div",{className:"flex items-center gap-sm group",children:[p.jsx("div",{className:"w-16 md:w-20 text-right text-on-surface-variant font-medium text-xs md:text-sm group-hover:text-on-surface transition-colors",children:e.weekLabel}),p.jsxs("div",{className:"flex-1 flex flex-col gap-1.5 bg-[#0a0a0f]/40 p-1.5 rounded-lg border border-[#2a2a3e]/30",children:[p.jsxs("div",{className:"relative flex items-center",children:[p.jsx("div",{className:"h-2 rounded-r-full bg-secondary transition-all duration-700 ease-out group-hover:opacity-90 shadow-[0_0_8px_rgba(68,243,169,0.3)]",style:{width:`${Math.max(5,e.incomePercent)}%`},title:`Pemasukan: ${ni(e.income)} (${e.incomePercent}%)`}),p.jsxs("span",{className:"ml-2 text-[10px] text-on-surface-variant/70 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline",children:[e.incomePercent,"% (",ni(e.income),")"]})]}),p.jsxs("div",{className:"relative flex items-center",children:[p.jsx("div",{className:"h-2 rounded-r-full bg-tertiary transition-all duration-700 ease-out group-hover:opacity-90 shadow-[0_0_8px_rgba(255,179,176,0.3)]",style:{width:`${Math.max(5,e.expensePercent)}%`},title:`Pengeluaran: ${ni(e.expense)} (${e.expensePercent}%)`}),p.jsxs("span",{className:"ml-2 text-[10px] text-on-surface-variant/70 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline",children:[e.expensePercent,"% (",ni(e.expense),")"]})]})]})]},n))})]})},ay=()=>{const{recentTransactions:t,setActiveTab:e}=hn(),n=(i,r)=>i||(r==="income"?"payments":"shopping_cart");return p.jsxs("section",{className:"glass-panel rounded-xl overflow-hidden",children:[p.jsxs("div",{className:"flex items-center justify-between p-md border-b border-[#2a2a3e]",children:[p.jsx("h2",{className:"font-headline-md text-headline-md text-on-surface",children:"Transaksi Terakhir"}),p.jsxs("button",{onClick:()=>e("ledger"),className:"font-label-md text-label-md text-primary-container hover:text-primary transition-colors flex items-center gap-xs cursor-pointer group",children:["Lihat Semua"," ",p.jsx("span",{className:"material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform",children:"arrow_forward"})]})]}),p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"w-full text-left font-body-md text-body-md min-w-[600px]",children:[p.jsx("thead",{className:"bg-[#0a0a0f]/50 border-b border-[#2a2a3e] font-label-md text-label-md text-on-surface-variant",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-md py-sm font-normal",children:"Deskripsi"}),p.jsx("th",{className:"px-md py-sm font-normal",children:"Kategori"}),p.jsx("th",{className:"px-md py-sm font-normal",children:"Tanggal"}),p.jsx("th",{className:"px-md py-sm font-normal text-right",children:"Jumlah"})]})}),p.jsxs("tbody",{className:"divide-y divide-[#2a2a3e]/50 font-tabular-nums text-tabular-nums text-sm",children:[t.map(i=>{const r=i.type==="income",s=n(i.icon,i.type);return p.jsxs("tr",{className:"hover:bg-[#1b1b20] transition-colors group",children:[p.jsxs("td",{className:"px-md py-sm flex items-center gap-sm",children:[p.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${r?"bg-secondary/10 text-secondary":"bg-tertiary/10 text-tertiary"}`,children:p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:s})}),p.jsx("span",{className:"text-on-surface truncate font-medium group-hover:text-primary-fixed transition-colors",children:i.description})]}),p.jsx("td",{className:"px-md py-sm text-on-surface-variant",children:i.categoryName||"Umum"}),p.jsx("td",{className:"px-md py-sm text-on-surface-variant",children:Ix(i.date)}),p.jsx("td",{className:`px-md py-sm text-right font-medium ${r?"text-secondary":"text-tertiary"}`,children:ni(i.amount,!0)})]},i.id)}),t.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:4,className:"px-md py-8 text-center text-on-surface-variant text-sm",children:"Belum ada riwayat transaksi."})})]})]})})]})},oy=()=>p.jsxs("div",{className:"flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop space-y-xl",children:[p.jsx(ry,{}),p.jsx(sy,{}),p.jsx(ay,{}),p.jsx("div",{className:"h-lg"})]}),ly=()=>{const{filteredTransactions:t,openAddModal:e,deleteTransaction:n,categories:i,userRole:r}=hn(),[s,a]=Ee.useState("all"),[o,l]=Ee.useState(""),[c,h]=Ee.useState("all"),f=t.filter(u=>{if(s!=="all"&&u.type!==s||c!=="all"&&u.categoryId!==c)return!1;if(o){const m=o.toLowerCase();return u.description.toLowerCase().includes(m)||u.categoryName&&u.categoryName.toLowerCase().includes(m)}return!0});return p.jsxs("div",{className:"flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop space-y-md",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"font-headline-md text-headline-md text-on-surface",children:"Manajemen Transaksi"}),p.jsx("p",{className:"text-on-surface-variant text-xs md:text-sm",children:"Kelola pencatatan kas masuk dan kas keluar dengan pembukuan real-time."})]}),r!=="viewer"&&p.jsxs("button",{onClick:e,className:"bg-primary-container text-[#0a0a0f] font-label-md text-sm py-2 px-4 rounded-lg glow-primary font-semibold hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer shadow-lg",children:[p.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"add"})," Tambah Transaksi"]})]}),p.jsxs("div",{className:"glass-panel p-md rounded-xl flex flex-col md:flex-row items-stretch md:items-center gap-md justify-between",children:[p.jsxs("div",{className:"relative flex-1",children:[p.jsx("span",{className:"material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg",children:"search"}),p.jsx("input",{type:"text",placeholder:"Cari transaksi...",value:o,onChange:u=>l(u.target.value),className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 pl-10 pr-4 text-on-surface text-sm focus:outline-none focus:border-primary-container transition-colors"})]}),p.jsxs("div",{className:"flex items-center gap-sm flex-wrap",children:[p.jsx("div",{className:"flex bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg p-0.5",children:["all","income","expense"].map(u=>p.jsx("button",{onClick:()=>a(u),className:`px-3 py-1.5 rounded text-xs font-label-md capitalize transition-colors cursor-pointer ${s===u?"bg-surface-container-high text-on-surface font-semibold":"text-on-surface-variant hover:text-on-surface"}`,children:u==="all"?"Semua":u==="income"?"Masuk":"Keluar"},u))}),p.jsxs("select",{value:c,onChange:u=>h(u.target.value),className:"bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-1.5 px-3 text-xs text-on-surface focus:outline-none focus:border-primary-container cursor-pointer",children:[p.jsx("option",{value:"all",children:"Semua Kategori"}),i.map(u=>p.jsx("option",{value:u.id,children:u.name},u.id))]})]})]}),p.jsx("section",{className:"glass-panel rounded-xl overflow-hidden",children:p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"w-full text-left font-body-md text-body-md min-w-[700px]",children:[p.jsx("thead",{className:"bg-[#0a0a0f]/50 border-b border-[#2a2a3e] font-label-md text-label-md text-on-surface-variant",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-md py-sm font-normal",children:"Deskripsi"}),p.jsx("th",{className:"px-md py-sm font-normal",children:"Kategori"}),p.jsx("th",{className:"px-md py-sm font-normal",children:"Tanggal"}),p.jsx("th",{className:"px-md py-sm font-normal text-right",children:"Jumlah"}),r==="admin"&&p.jsx("th",{className:"px-md py-sm font-normal text-center w-16",children:"Aksi"})]})}),p.jsxs("tbody",{className:"divide-y divide-[#2a2a3e]/50 font-tabular-nums text-tabular-nums text-sm",children:[f.map(u=>{const m=u.type==="income";return p.jsxs("tr",{className:"hover:bg-[#1b1b20] transition-colors group",children:[p.jsxs("td",{className:"px-md py-sm flex items-center gap-sm",children:[p.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m?"bg-secondary/10 text-secondary":"bg-tertiary/10 text-tertiary"}`,children:p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:u.icon||(m?"payments":"shopping_cart")})}),p.jsx("span",{className:"text-on-surface font-medium truncate",children:u.description})]}),p.jsx("td",{className:"px-md py-sm text-on-surface-variant",children:p.jsx("span",{className:"inline-block px-2 py-0.5 rounded text-xs bg-surface-container border border-outline-variant/30",children:u.categoryName||"Umum"})}),p.jsx("td",{className:"px-md py-sm text-on-surface-variant",children:Ix(u.date)}),p.jsx("td",{className:`px-md py-sm text-right font-medium ${m?"text-secondary":"text-tertiary"}`,children:ni(u.amount,!0)}),r==="admin"&&p.jsx("td",{className:"px-md py-sm text-center",children:p.jsx("button",{onClick:()=>n(u.id),className:"text-on-surface-variant hover:text-error p-1 rounded hover:bg-error-container/20 transition-colors cursor-pointer",title:"Hapus Transaksi",children:p.jsx("span",{className:"material-symbols-outlined text-base",children:"delete"})})})]},u.id)}),f.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:r==="admin"?5:4,className:"px-md py-12 text-center text-on-surface-variant text-sm",children:"Tidak ada transaksi yang cocok dengan filter."})})]})]})})}),p.jsx("div",{className:"h-lg"})]})},cy=()=>{const{filteredTransactions:t,deleteTransaction:e,showToast:n,openAddModal:i}=hn(),[r,s]=Ee.useState(""),[a,o]=Ee.useState(""),[l,c]=Ee.useState("all"),[h,f]=Ee.useState(1),u=10,m=Ee.useMemo(()=>t.filter(E=>!(r&&new Date(E.date)<new Date(r)||a&&new Date(E.date)>new Date(a+"T23:59:59")||l!=="all"&&E.type!==l)),[t,r,a,l]),_=Ee.useMemo(()=>m.filter(E=>E.type==="income").reduce((E,g)=>E+g.amount,0),[m]),b=Ee.useMemo(()=>m.filter(E=>E.type==="expense").reduce((E,g)=>E+g.amount,0),[m]),v=_-b,d=m.length,x=Math.ceil(d/u)||1,M=Math.min(Math.max(h,1),x),S=Ee.useMemo(()=>{const E=(M-1)*u;return m.slice(E,E+u)},[m,M,u]),w=()=>{if(m.length===0){n("Tidak ada data riwayat kas untuk diekspor!","error");return}const E=["No,ID,Tanggal,Kategori,Catatan,Tipe,Nominal"],g=m.map((L,k)=>{const $=L.type==="income"?"Pemasukan":"Pengeluaran";return`"${k+1}","${L.id}","${L.date.split("T")[0]}","${L.categoryName||""}","${L.description.replace(/"/g,'""')}","${$}","${L.amount}"`}),C="data:text/csv;charset=utf-8,"+[E,...g].join(`
`),N=encodeURI(C),P=document.createElement("a");P.setAttribute("href",N),P.setAttribute("download",`riwayat_kas_nexus_${Date.now()}.csv`),document.body.appendChild(P),P.click(),document.body.removeChild(P),n("Laporan Riwayat Kas berhasil diekspor ke CSV!","success")},A=(E,g)=>{window.confirm(`Hapus transaksi "${g}" dari buku kas?`)&&(e(E),n(`Transaksi "${g}" berhasil dihapus.`,"info"))};return p.jsxs("div",{className:"flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-[#0a0a0f] select-none",children:[p.jsxs("div",{className:"max-w-7xl mx-auto space-y-lg",children:[p.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-md",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-sm",children:[p.jsx("h1",{className:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface",children:"Riwayat Kas"}),p.jsxs("button",{onClick:w,title:"Ekspor CSV",className:"hidden sm:flex items-center gap-1 px-3 py-1 bg-surface-container border border-outline-variant rounded-lg text-primary text-xs font-label-md hover:border-primary-container transition-colors cursor-pointer",children:[p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"download"}),"CSV"]})]}),p.jsx("p",{className:"font-body-sm text-body-sm text-on-surface-variant mt-1",children:"Review and manage your financial ledger."})]}),p.jsxs("div",{className:"flex flex-wrap gap-sm items-center bg-surface-container-low p-sm border border-outline-variant rounded-lg",children:[p.jsxs("div",{className:"flex items-center space-x-xs",children:[p.jsx("span",{className:"material-symbols-outlined text-on-surface-variant text-[18px]",children:"calendar_today"}),p.jsx("input",{type:"date",value:r,onChange:E=>{s(E.target.value),f(1)},className:"bg-[#0a0a0f] border border-[#2a2a3e] text-on-surface text-body-sm rounded px-xs py-1 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none [color-scheme:dark]"}),p.jsx("span",{className:"text-on-surface-variant text-body-sm",children:"-"}),p.jsx("input",{type:"date",value:a,onChange:E=>{o(E.target.value),f(1)},className:"bg-[#0a0a0f] border border-[#2a2a3e] text-on-surface text-body-sm rounded px-xs py-1 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none [color-scheme:dark]"})]}),p.jsx("div",{className:"h-6 w-px bg-outline-variant hidden md:block"}),p.jsxs("select",{value:l,onChange:E=>{c(E.target.value),f(1)},className:"bg-[#0a0a0f] border border-[#2a2a3e] text-on-surface text-body-sm rounded px-xs py-1 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none cursor-pointer",children:[p.jsx("option",{value:"all",children:"Semua Tipe"}),p.jsx("option",{value:"income",children:"Pemasukan"}),p.jsx("option",{value:"expense",children:"Pengeluaran"})]}),(r||a||l!=="all")&&p.jsxs("button",{onClick:()=>{s(""),o(""),c("all"),f(1)},className:"bg-surface-variant text-on-surface hover:text-primary-container border border-outline-variant px-sm py-1 rounded text-label-md font-label-md transition-colors flex items-center space-x-xs cursor-pointer",children:[p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"close"}),p.jsx("span",{children:"Reset"})]})]})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-sm",children:[p.jsxs("div",{className:"glass-panel p-md rounded-xl relative overflow-hidden group bg-[#12121a] border border-[#2a2a3e]",children:[p.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-secondary/20 transition-all pointer-events-none"}),p.jsxs("div",{className:"flex items-center space-x-sm mb-xs relative z-10",children:[p.jsx("span",{className:"material-symbols-outlined text-secondary",children:"arrow_downward"}),p.jsx("span",{className:"font-label-md text-label-md text-on-surface-variant",children:"Total Masuk"})]}),p.jsx("div",{className:"font-headline-md text-headline-md text-on-surface relative z-10 font-bold text-secondary font-tabular-nums",children:ni(_)})]}),p.jsxs("div",{className:"glass-panel p-md rounded-xl relative overflow-hidden group bg-[#12121a] border border-[#2a2a3e]",children:[p.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-tertiary-container/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-tertiary-container/20 transition-all pointer-events-none"}),p.jsxs("div",{className:"flex items-center space-x-sm mb-xs relative z-10",children:[p.jsx("span",{className:"material-symbols-outlined text-tertiary-container",children:"arrow_upward"}),p.jsx("span",{className:"font-label-md text-label-md text-on-surface-variant",children:"Total Keluar"})]}),p.jsx("div",{className:"font-headline-md text-headline-md text-on-surface relative z-10 font-bold text-tertiary font-tabular-nums",children:ni(b)})]}),p.jsxs("div",{className:"glass-panel p-md rounded-xl relative overflow-hidden group bg-[#12121a] border border-[#2a2a3e]",children:[p.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary-container/20 transition-all pointer-events-none"}),p.jsxs("div",{className:"flex items-center space-x-sm mb-xs relative z-10",children:[p.jsx("span",{className:"material-symbols-outlined text-primary-container",children:"account_balance_wallet"}),p.jsx("span",{className:"font-label-md text-label-md text-on-surface-variant",children:"Selisih (Net)"})]}),p.jsx("div",{className:`font-headline-md text-headline-md relative z-10 font-bold font-tabular-nums ${v>=0?"text-primary":"text-tertiary"}`,children:ni(v)})]})]}),p.jsxs("div",{className:"glass-panel rounded-xl overflow-hidden flex flex-col bg-[#12121a] border border-[#2a2a3e] shadow-[0_4px_30px_rgba(0,0,0,0.5)]",children:[p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"w-full text-left border-collapse min-w-[700px]",children:[p.jsx("thead",{children:p.jsxs("tr",{className:"border-b border-[#2a2a3e] bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider",children:[p.jsx("th",{className:"py-sm px-md w-12 text-center",children:"#"}),p.jsx("th",{className:"py-sm px-md",children:"Tanggal"}),p.jsx("th",{className:"py-sm px-md",children:"Kategori"}),p.jsx("th",{className:"py-sm px-md",children:"Catatan"}),p.jsx("th",{className:"py-sm px-md text-right",children:"Nominal"}),p.jsx("th",{className:"py-sm px-md w-24 text-center",children:"Aksi"})]})}),p.jsxs("tbody",{className:"text-body-sm font-tabular-nums text-on-surface divide-y divide-[#2a2a3e]",children:[S.map((E,g)=>{const C=E.type==="income",N=(M-1)*u+g+1;return p.jsxs("tr",{className:"hover:bg-surface-container-high transition-colors group",children:[p.jsx("td",{className:"py-3 px-md text-center text-on-surface-variant text-xs",children:N}),p.jsx("td",{className:"py-3 px-md text-xs text-on-surface whitespace-nowrap",children:E.date.includes("T")?E.date.split("T")[0]:E.date}),p.jsx("td",{className:"py-3 px-md",children:p.jsx("span",{className:"px-2 py-1 rounded text-[11px] font-label-md border border-outline-variant bg-surface-container text-on-surface-variant",children:E.categoryName||"General"})}),p.jsx("td",{className:"py-3 px-md text-on-surface font-medium truncate max-w-[240px]",children:E.description}),p.jsxs("td",{className:`py-3 px-md text-right font-semibold whitespace-nowrap ${C?"text-secondary":"text-tertiary"}`,children:[C?"+":"-"," ",ni(E.amount)]}),p.jsx("td",{className:"py-3 px-md text-center",children:p.jsx("div",{className:"flex items-center justify-center space-x-xs opacity-80 group-hover:opacity-100 transition-opacity",children:p.jsx("button",{onClick:()=>A(E.id,E.description),className:"text-on-surface-variant hover:text-tertiary-container p-1 rounded hover:bg-surface-container transition-colors cursor-pointer",title:"Hapus transaksi",children:p.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"delete"})})})})]},E.id)}),S.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:6,className:"py-12 px-md text-center text-on-surface-variant text-sm",children:p.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[p.jsx("span",{className:"material-symbols-outlined text-4xl text-outline-variant",children:"receipt_long"}),p.jsx("p",{children:"Tidak ada data catatan kas untuk filter yang dipilih."})]})})})]})]})}),p.jsxs("div",{className:"border-t border-[#2a2a3e] p-sm flex flex-col sm:flex-row items-center justify-between gap-sm bg-surface-container-lowest",children:[p.jsxs("div",{className:"text-body-sm text-on-surface-variant text-xs",children:["Showing ",d===0?0:(M-1)*u+1," to"," ",Math.min(M*u,d)," of ",d," entries"]}),p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx("button",{onClick:()=>f(E=>Math.max(E-1,1)),disabled:M<=1,className:"px-2 py-1 rounded border border-[#2a2a3e] text-on-surface-variant hover:bg-surface-variant disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer","aria-label":"Previous page",children:p.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"chevron_left"})}),Array.from({length:x},(E,g)=>g+1).map(E=>p.jsx("button",{onClick:()=>f(E),className:`px-3 py-1 rounded font-label-md text-label-md cursor-pointer transition-colors ${E===M?"bg-primary-container text-on-primary-container font-bold":"border border-[#2a2a3e] text-on-surface hover:bg-surface-variant"}`,children:E},E)),p.jsx("button",{onClick:()=>f(E=>Math.min(E+1,x)),disabled:M>=x,className:"px-2 py-1 rounded border border-[#2a2a3e] text-on-surface-variant hover:bg-surface-variant disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer","aria-label":"Next page",children:p.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"chevron_right"})})]})]})]})]}),p.jsx("div",{className:"h-lg"})]})},uy=()=>{const{categories:t,addCategory:e,deleteCategory:n,userRole:i}=hn(),[r,s]=Ee.useState(""),[a,o]=Ee.useState("income"),l=t.filter(f=>f.type==="income"),c=t.filter(f=>f.type==="expense"),h=async f=>{if(f.preventDefault(),!r.trim())return;(await e(r.trim(),a)).success&&s("")};return p.jsxs("div",{className:"flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop space-y-lg",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"font-headline-md text-headline-md text-on-surface",children:"Kategori Keuangan"}),p.jsx("p",{className:"text-on-surface-variant text-xs md:text-sm",children:"Kelola klasifikasi pos pemasukan dan pos pengeluaran perusahaan."})]}),i==="admin"&&p.jsxs("div",{className:"glass-panel p-md rounded-xl",children:[p.jsxs("h3",{className:"text-sm font-label-md text-on-surface mb-sm flex items-center gap-xs",children:[p.jsx("span",{className:"material-symbols-outlined text-primary-container text-lg",children:"add_box"}),"Tambah Kategori Baru"]}),p.jsxs("form",{onSubmit:h,className:"flex flex-col sm:flex-row gap-sm items-stretch sm:items-center",children:[p.jsx("input",{type:"text",placeholder:"Nama kategori, contoh: Langganan SaaS...",value:r,onChange:f=>s(f.target.value),className:"flex-1 bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 px-3 text-sm text-on-surface focus:outline-none focus:border-primary-container",required:!0}),p.jsxs("div",{className:"flex bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg p-0.5",children:[p.jsx("button",{type:"button",onClick:()=>o("income"),className:`px-3 py-1.5 rounded text-xs font-label-md transition-colors cursor-pointer ${a==="income"?"bg-secondary/20 text-secondary font-bold":"text-on-surface-variant hover:text-on-surface"}`,children:"Pemasukan"}),p.jsx("button",{type:"button",onClick:()=>o("expense"),className:`px-3 py-1.5 rounded text-xs font-label-md transition-colors cursor-pointer ${a==="expense"?"bg-tertiary/20 text-tertiary font-bold":"text-on-surface-variant hover:text-on-surface"}`,children:"Pengeluaran"})]}),p.jsx("button",{type:"submit",className:"px-lg py-2 bg-primary-container text-[#0a0a0f] rounded-lg font-label-md font-semibold text-sm glow-primary hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap",children:"Simpan Kategori"})]})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-md",children:[p.jsxs("div",{className:"glass-panel p-md rounded-xl space-y-md",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-[#2a2a3e] pb-sm",children:[p.jsxs("div",{className:"flex items-center gap-xs",children:[p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(68,243,169,0.8)]"}),p.jsx("h3",{className:"font-headline-md text-base text-on-surface",children:"Kategori Pemasukan"})]}),p.jsxs("span",{className:"text-xs text-secondary font-bold bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20",children:[l.length," Kategori"]})]}),p.jsx("div",{className:"space-y-xs",children:l.map(f=>p.jsxs("div",{className:"flex items-center justify-between p-sm rounded-lg bg-[#0a0a0f]/60 border border-[#2a2a3e]/60 hover:border-secondary/30 transition-colors group",children:[p.jsxs("div",{className:"flex items-center gap-sm",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center",children:p.jsx("span",{className:"material-symbols-outlined text-base",children:f.icon||"savings"})}),p.jsx("span",{className:"font-medium text-sm text-on-surface",children:f.name})]}),i==="admin"&&p.jsx("button",{onClick:()=>n(f.id),className:"text-on-surface-variant hover:text-error p-1 rounded hover:bg-error-container/20 transition-colors opacity-60 group-hover:opacity-100 cursor-pointer",title:"Hapus Kategori",children:p.jsx("span",{className:"material-symbols-outlined text-base",children:"delete"})})]},f.id))})]}),p.jsxs("div",{className:"glass-panel p-md rounded-xl space-y-md",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-[#2a2a3e] pb-sm",children:[p.jsxs("div",{className:"flex items-center gap-xs",children:[p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(255,179,176,0.8)]"}),p.jsx("h3",{className:"font-headline-md text-base text-on-surface",children:"Kategori Pengeluaran"})]}),p.jsxs("span",{className:"text-xs text-tertiary font-bold bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20",children:[c.length," Kategori"]})]}),p.jsx("div",{className:"space-y-xs",children:c.map(f=>p.jsxs("div",{className:"flex items-center justify-between p-sm rounded-lg bg-[#0a0a0f]/60 border border-[#2a2a3e]/60 hover:border-tertiary/30 transition-colors group",children:[p.jsxs("div",{className:"flex items-center gap-sm",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center",children:p.jsx("span",{className:"material-symbols-outlined text-base",children:f.icon||"category"})}),p.jsx("span",{className:"font-medium text-sm text-on-surface",children:f.name})]}),i==="admin"&&p.jsx("button",{onClick:()=>n(f.id),className:"text-on-surface-variant hover:text-error p-1 rounded hover:bg-error-container/20 transition-colors opacity-60 group-hover:opacity-100 cursor-pointer",title:"Hapus Kategori",children:p.jsx("span",{className:"material-symbols-outlined text-base",children:"delete"})})]},f.id))})]})]}),p.jsx("div",{className:"h-lg"})]})},dy=()=>{const{categories:t,addTransaction:e,setActiveTab:n,showToast:i}=hn(),[r,s]=Ee.useState("income"),[a,o]=Ee.useState(""),[l,c]=Ee.useState(Ux()),[h,f]=Ee.useState("15,000,000"),[u,m]=Ee.useState("");Ee.useEffect(()=>{const d=t.filter(x=>x.type===r);d.length>0?o(d[0].id):o("")},[r,t]);const _=d=>{const x=d.target.value.replace(/[^0-9]/g,"");if(!x){f("");return}const M=parseInt(x,10);f(M.toLocaleString("en-US"))},b=d=>{d.preventDefault();const x=Dx(h);if(x<=0){i("Masukkan nominal transaksi yang valid!","error");return}if(!a){i("Pilih kategori transaksi!","error");return}const M=t.find(w=>w.id===a),S=u.trim()||(M==null?void 0:M.name)||(r==="income"?"Pemasukan":"Pengeluaran");e({date:new Date(l).toISOString(),type:r,categoryId:a,categoryName:(M==null?void 0:M.name)||"General",amount:x,description:S,icon:(M==null?void 0:M.icon)||(r==="income"?"arrow_downward":"arrow_upward")}),n("transactions")},v=t.filter(d=>d.type===r);return p.jsxs("div",{className:"flex-1 flex flex-col h-full overflow-y-auto relative bg-[#0a0a0f] select-none",children:[p.jsxs("header",{className:"md:hidden flex items-center justify-between px-margin-mobile h-16 border-b border-outline-variant bg-[#131318]/80 backdrop-blur-md sticky top-0 z-20",children:[p.jsx("button",{onClick:()=>n("transactions"),className:"text-on-surface-variant hover:text-on-surface p-1 cursor-pointer","aria-label":"Kembali",children:p.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"})}),p.jsx("h1",{className:"font-headline-lg-mobile text-headline-lg-mobile text-on-surface",children:"Tambah Transaksi"}),p.jsx("div",{className:"w-6"})," "]}),p.jsxs("div",{className:"px-margin-mobile md:px-margin-desktop py-lg max-w-3xl mx-auto w-full flex-1 flex flex-col",children:[p.jsxs("div",{className:"hidden md:block mb-xl",children:[p.jsxs("button",{onClick:()=>n("transactions"),className:"flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors mb-sm cursor-pointer",children:[p.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"arrow_back"}),p.jsx("span",{className:"font-label-md text-label-md",children:"Kembali ke Transaksi"})]}),p.jsx("h1",{className:"font-display-lg text-display-lg text-on-surface tracking-tight",children:"Tambah Transaksi"}),p.jsx("p",{className:"font-body-md text-body-md text-on-surface-variant mt-xs",children:"Catat aktivitas keuangan Anda dengan presisi."})]}),p.jsxs("div",{className:"glass-panel rounded-xl p-md md:p-xl flex flex-col gap-xl bg-[#12121a] border border-[#2a2a3e] shadow-[0_4px_30px_rgba(0,0,0,0.5)]",children:[p.jsxs("div",{className:"flex p-1 bg-surface-container-low rounded-full w-full border border-outline-variant/50 relative overflow-hidden",children:[p.jsx("div",{className:`absolute inset-y-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 z-0 ${r==="income"?"left-1 bg-secondary shadow-[0_0_15px_rgba(68,243,169,0.35)]":"left-[calc(50%+2px)] bg-tertiary-container shadow-[0_0_15px_rgba(252,105,105,0.35)]"}`}),p.jsxs("button",{type:"button",onClick:()=>s("income"),className:`flex-1 py-sm rounded-full font-label-md text-label-md z-10 relative flex justify-center items-center gap-xs transition-colors cursor-pointer ${r==="income"?"text-on-secondary font-bold":"text-on-surface-variant hover:text-on-surface"}`,children:[p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"arrow_downward"}),"PEMASUKAN"]}),p.jsxs("button",{type:"button",onClick:()=>s("expense"),className:`flex-1 py-sm rounded-full font-label-md text-label-md z-10 relative flex justify-center items-center gap-xs transition-colors cursor-pointer ${r==="expense"?"text-[#0a0a0f] font-bold":"text-on-surface-variant hover:text-on-surface"}`,children:[p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"arrow_upward"}),"PENGELUARAN"]})]}),p.jsxs("form",{onSubmit:b,className:"flex flex-col gap-lg",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-lg",children:[p.jsxs("div",{className:"flex flex-col gap-xs",children:[p.jsx("label",{className:"font-label-md text-label-md text-on-surface-variant",htmlFor:"tx-date",children:"Tanggal"}),p.jsxs("div",{className:"relative",children:[p.jsx("span",{className:"material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none",children:"calendar_today"}),p.jsx("input",{id:"tx-date",type:"date",value:l,onChange:d=>c(d.target.value),className:"w-full bg-surface-dim border border-outline-variant rounded-lg py-sm pl-xl pr-sm text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all [color-scheme:dark]",required:!0})]})]}),p.jsxs("div",{className:"flex flex-col gap-xs",children:[p.jsx("label",{className:"font-label-md text-label-md text-on-surface-variant",htmlFor:"tx-category",children:"Kategori"}),p.jsxs("div",{className:"relative",children:[p.jsx("span",{className:"material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none",children:"category"}),p.jsxs("select",{id:"tx-category",value:a,onChange:d=>o(d.target.value),className:"w-full bg-surface-dim border border-outline-variant rounded-lg py-sm pl-xl pr-sm text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer",required:!0,children:[v.length===0&&p.jsx("option",{value:"",children:"Tidak ada kategori"}),v.map(d=>p.jsx("option",{value:d.id,children:d.name},d.id))]}),p.jsx("span",{className:"material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none",children:"expand_more"})]})]})]}),p.jsxs("div",{className:"flex flex-col gap-xs",children:[p.jsx("label",{className:"font-label-md text-label-md text-on-surface-variant",htmlFor:"tx-amount",children:"Nominal"}),p.jsxs("div",{className:"relative",children:[p.jsx("span",{className:"absolute left-sm top-1/2 -translate-y-1/2 font-tabular-nums text-tabular-nums text-outline font-semibold",children:"Rp"}),p.jsx("input",{id:"tx-amount",type:"text",value:h,onChange:_,placeholder:"0",className:"w-full bg-surface-dim border border-outline-variant rounded-lg py-md pl-xl pr-sm text-on-surface font-display-lg text-headline-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline/30 font-semibold",required:!0})]})]}),p.jsxs("div",{className:"flex flex-col gap-xs",children:[p.jsx("label",{className:"font-label-md text-label-md text-on-surface-variant",htmlFor:"tx-notes",children:"Catatan (Opsional)"}),p.jsx("textarea",{id:"tx-notes",value:u,onChange:d=>m(d.target.value),placeholder:"Tambahkan deskripsi transaksi...",rows:3,className:"w-full bg-surface-dim border border-outline-variant rounded-lg py-sm px-sm text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline/50 resize-none"})]}),p.jsx("div",{className:"pt-sm mt-sm border-t border-outline-variant/30",children:p.jsxs("button",{type:"submit",className:"w-full bg-primary-container text-[#0a0a0f] font-semibold text-[16px] py-md rounded-lg flex items-center justify-center gap-sm shadow-lg hover:shadow-[0_0_20px_rgba(76,154,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all duration-300 group cursor-pointer",children:[p.jsx("span",{className:"material-symbols-outlined group-hover:scale-110 transition-transform",children:"save"}),"Simpan Transaksi"]})})]})]})]})]})},fy=()=>{const{isAddModalOpen:t,closeAddModal:e,categories:n,addTransaction:i,showToast:r}=hn(),[s,a]=Ee.useState("income"),[o,l]=Ee.useState(""),[c,h]=Ee.useState(Ux()),[f,u]=Ee.useState(""),[m,_]=Ee.useState("");if(Ee.useEffect(()=>{const x=n.filter(M=>M.type===s);x.length>0?l(x[0].id):l("")},[s,n]),Ee.useEffect(()=>{const x=M=>{M.key==="Escape"&&t&&e()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[t,e]),!t)return null;const b=x=>{const M=x.target.value.replace(/[^0-9]/g,"");if(!M){u("");return}const S=parseInt(M,10);u(S.toLocaleString("en-US"))},v=x=>{x.preventDefault();const M=Dx(f);if(M<=0){r("Masukkan nominal transaksi yang valid!","error");return}if(!m.trim()){r("Masukkan deskripsi transaksi!","error");return}if(!o){r("Pilih kategori transaksi!","error");return}const S=n.find(w=>w.id===o);i({date:new Date(c).toISOString(),type:s,categoryId:o,categoryName:(S==null?void 0:S.name)||"General",amount:M,description:m.trim(),icon:(S==null?void 0:S.icon)||(s==="income"?"payments":"shopping_cart")}),u(""),_(""),e()},d=n.filter(x=>x.type===s);return p.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[p.jsx("div",{className:"fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity",onClick:e}),p.jsxs("div",{className:"relative w-full max-w-lg bg-[#12121a] border border-[#2a2a3e] rounded-xl shadow-2xl overflow-hidden z-10 animate-fade-in",children:[p.jsxs("div",{className:"flex items-center justify-between p-md border-b border-[#2a2a3e] bg-[#0e0e13]/60",children:[p.jsxs("div",{className:"flex items-center gap-sm",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary/30 text-primary",children:p.jsx("span",{className:"material-symbols-outlined text-lg",children:"add_circle"})}),p.jsx("h3",{className:"font-headline-md text-headline-md text-on-surface text-lg",children:"Tambah Transaksi Baru"})]}),p.jsx("button",{onClick:e,className:"text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container-high transition-colors cursor-pointer",children:p.jsx("span",{className:"material-symbols-outlined text-xl",children:"close"})})]}),p.jsxs("form",{onSubmit:v,className:"p-md space-y-md",children:[p.jsxs("div",{className:"grid grid-cols-2 gap-2 p-1 bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg",children:[p.jsxs("button",{type:"button",onClick:()=>a("income"),className:`py-2 px-3 rounded text-sm font-label-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${s==="income"?"bg-secondary/20 text-secondary font-bold border border-secondary/30 shadow-[0_0_12px_rgba(68,243,169,0.2)]":"text-on-surface-variant hover:text-on-surface"}`,children:[p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"arrow_downward"}),"Pemasukan (Masuk)"]}),p.jsxs("button",{type:"button",onClick:()=>a("expense"),className:`py-2 px-3 rounded text-sm font-label-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${s==="expense"?"bg-tertiary/20 text-tertiary font-bold border border-tertiary/30 shadow-[0_0_12px_rgba(255,179,176,0.2)]":"text-on-surface-variant hover:text-on-surface"}`,children:[p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"arrow_upward"}),"Pengeluaran (Keluar)"]})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-xs font-label-md text-on-surface-variant mb-1",children:["Nominal (Rp) ",p.jsx("span",{className:"text-secondary",children:"*"})]}),p.jsxs("div",{className:"relative",children:[p.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold text-sm",children:"Rp"}),p.jsx("input",{type:"text",value:f,onChange:b,placeholder:"15,000,000",className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2.5 pl-10 pr-3 text-on-surface text-base font-tabular-nums focus:outline-none focus:border-primary-container transition-colors",autoFocus:!0,required:!0})]})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-xs font-label-md text-on-surface-variant mb-1",children:["Deskripsi Transaksi ",p.jsx("span",{className:"text-secondary",children:"*"})]}),p.jsx("input",{type:"text",value:m,onChange:x=>_(x.target.value),placeholder:"Contoh: Client Payment - TechCorp",className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 px-3 text-on-surface text-sm focus:outline-none focus:border-primary-container transition-colors",required:!0})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-md",children:[p.jsxs("div",{children:[p.jsxs("label",{className:"block text-xs font-label-md text-on-surface-variant mb-1",children:["Kategori ",p.jsx("span",{className:"text-secondary",children:"*"})]}),p.jsx("select",{value:o,onChange:x=>l(x.target.value),className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 px-3 text-on-surface text-sm focus:outline-none focus:border-primary-container transition-colors cursor-pointer",required:!0,children:d.map(x=>p.jsx("option",{value:x.id,children:x.name},x.id))})]}),p.jsxs("div",{children:[p.jsxs("label",{className:"block text-xs font-label-md text-on-surface-variant mb-1",children:["Tanggal Transaksi ",p.jsx("span",{className:"text-secondary",children:"*"})]}),p.jsx("input",{type:"date",value:c,onChange:x=>h(x.target.value),className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 px-3 text-on-surface text-sm focus:outline-none focus:border-primary-container transition-colors cursor-pointer",required:!0})]})]}),p.jsxs("div",{className:"pt-sm border-t border-[#2a2a3e]/60 flex items-center justify-end gap-sm",children:[p.jsx("button",{type:"button",onClick:e,className:"px-md py-2 border border-[#2a2a3e] rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high text-sm font-label-md transition-colors cursor-pointer",children:"Batal"}),p.jsxs("button",{type:"submit",className:"px-lg py-2 bg-primary-container text-[#0a0a0f] rounded font-label-md font-semibold text-sm glow-primary hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5",children:[p.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"save"}),"Simpan Transaksi"]})]})]})]})]})},hy=()=>{const{isNotificationOpen:t,setIsNotificationOpen:e,notifications:n,markNotificationsAsRead:i}=hn();return t?p.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",children:[p.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity",onClick:()=>e(!1)}),p.jsxs("div",{className:"relative w-full max-w-sm bg-[#12121a] border-l border-[#2a2a3e] h-full shadow-2xl z-10 flex flex-col animate-slide-down",children:[p.jsxs("div",{className:"p-md border-b border-[#2a2a3e] flex items-center justify-between bg-[#0e0e13]/80",children:[p.jsxs("div",{className:"flex items-center gap-sm",children:[p.jsx("span",{className:"material-symbols-outlined text-primary-container",children:"notifications"}),p.jsx("h3",{className:"font-headline-md text-headline-md text-on-surface text-base",children:"Pemberitahuan"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{onClick:i,className:"text-[11px] font-label-md text-primary hover:underline cursor-pointer",children:"Tandai Dibaca"}),p.jsx("button",{onClick:()=>e(!1),className:"text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container-high",children:p.jsx("span",{className:"material-symbols-outlined text-lg",children:"close"})})]})]}),p.jsx("div",{className:"flex-1 overflow-y-auto divide-y divide-[#2a2a3e]/40 p-xs",children:n.map(r=>p.jsxs("div",{className:`p-sm rounded-lg transition-colors ${r.isRead?"opacity-70 hover:opacity-100 hover:bg-[#1b1b20]":"bg-primary/5 hover:bg-primary/10 border-l-2 border-primary-container"}`,children:[p.jsxs("div",{className:"flex items-center justify-between mb-1",children:[p.jsx("span",{className:"font-label-md text-xs font-semibold text-on-surface",children:r.title}),p.jsx("span",{className:"text-[10px] text-on-surface-variant",children:r.timestamp})]}),p.jsx("p",{className:"font-body-sm text-xs text-on-surface-variant leading-relaxed",children:r.message})]},r.id))})]})]}):null},yp=()=>{const{toasts:t,removeToast:e}=hn();return t.length===0?null:p.jsx("div",{className:"fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none",children:t.map(n=>{let i="border-primary-container text-primary",r="info";return n.type==="success"?(i="border-secondary/40 text-secondary shadow-[0_0_15px_rgba(68,243,169,0.2)]",r="check_circle"):n.type==="error"&&(i="border-tertiary/40 text-tertiary shadow-[0_0_15px_rgba(255,179,176,0.2)]",r="error"),p.jsxs("div",{className:`pointer-events-auto flex items-center gap-3 px-4 py-3 bg-[#12121a] border rounded-lg shadow-xl text-sm animate-fade-in ${i}`,children:[p.jsx("span",{className:"material-symbols-outlined text-lg shrink-0",children:r}),p.jsx("span",{className:"text-on-surface font-medium text-xs md:text-sm",children:n.message}),p.jsx("button",{onClick:()=>e(n.id),className:"ml-2 text-on-surface-variant hover:text-on-surface cursor-pointer p-0.5",children:p.jsx("span",{className:"material-symbols-outlined text-sm",children:"close"})})]},n.id)})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="185",py=0,Sp=1,my=2,Yo=1,gy=2,aa=3,cr=0,dn=1,Si=2,wi=0,Ms=1,Mp=2,Ep=3,bp=4,xy=5,Mr=100,vy=101,_y=102,yy=103,Sy=104,My=200,Ey=201,by=202,Ty=203,Zu=204,Qu=205,wy=206,Ay=207,Cy=208,Ry=209,Ny=210,Py=211,Ly=212,Dy=213,Iy=214,Ju=0,ed=1,td=2,Ls=3,nd=4,id=5,rd=6,sd=7,kf=0,Uy=1,Fy=2,oi=0,Fx=1,Ox=2,kx=3,Bx=4,zx=5,Vx=6,Hx=7,Gx=300,Fr=301,Ds=302,bc=303,Tc=304,jl=306,ad=1e3,bi=1001,od=1002,zt=1003,Oy=1004,fo=1005,qt=1006,wc=1007,Ar=1008,_n=1009,Wx=1010,jx=1011,Ia=1012,Bf=1013,ui=1014,ii=1015,Li=1016,zf=1017,Vf=1018,Ua=1020,Xx=35902,Yx=35899,$x=1021,qx=1022,Gn=1023,Di=1026,Cr=1027,Kx=1028,Hf=1029,Or=1030,Gf=1031,Wf=1033,$o=33776,qo=33777,Ko=33778,Zo=33779,ld=35840,cd=35841,ud=35842,dd=35843,fd=36196,hd=37492,pd=37496,md=37488,gd=37489,El=37490,xd=37491,vd=37808,_d=37809,yd=37810,Sd=37811,Md=37812,Ed=37813,bd=37814,Td=37815,wd=37816,Ad=37817,Cd=37818,Rd=37819,Nd=37820,Pd=37821,Ld=36492,Dd=36494,Id=36495,Ud=36283,Fd=36284,bl=36285,Od=36286,ky=3200,kd=0,By=1,qi="",An="srgb",Tl="srgb-linear",wl="linear",nt="srgb",Wr=7680,Tp=519,zy=512,Vy=513,Hy=514,jf=515,Gy=516,Wy=517,Xf=518,jy=519,wp=35044,Ap="300 es",ri=2e3,Fa=2001;function Xy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yy(){const t=Al("canvas");return t.style.display="block",t}const Cp={};function Rp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Zx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Fe(...t){t=Zx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=Zx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Es(...t){const e=t.join(" ");e in Cp||(Cp[e]=!0,Fe(...t))}function $y(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qy={[Ju]:ed,[td]:rd,[nd]:sd,[Ls]:id,[ed]:Ju,[rd]:td,[sd]:nd,[id]:Ls};class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,Bd=180/Math.PI;function Ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Ky(t,e){return(t%e+e)%e}function Cc(t,e,n){return(1-n)*t+n*e}function qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zf=class Zf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zf.prototype.isVector2=!0;let qe=Zf;class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],m=s[a+1],_=s[a+2],b=s[a+3];if(f!==b||l!==u||c!==m||h!==_){let v=l*u+c*m+h*_+f*b;v<0&&(u=-u,m=-m,_=-_,b=-b,v=-v);let d=1-o;if(v<.9995){const x=Math.acos(v),M=Math.sin(x);d=Math.sin(d*x)/M,o=Math.sin(o*x)/M,l=l*d+u*o,c=c*d+m*o,h=h*d+_*o,f=f*d+b*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+_*o,f=f*d+b*o;const x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+h*f+l*m-c*u,e[n+1]=l*_+h*u+c*f-o*m,e[n+2]=c*_+h*m+o*u-l*f,e[n+3]=h*_-o*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),u=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"YXZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"ZXY":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"ZYX":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"YZX":this._x=u*h*f+c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f-u*m*_;break;case"XZY":this._x=u*h*f-c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f+u*m*_;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],u=i+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qf=class Qf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qf.prototype.isVector3=!0;let H=Qf;const Rc=new H,Np=new Bs,Jf=class Jf{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],m=i[5],_=i[8],b=r[0],v=r[3],d=r[6],x=r[1],M=r[4],S=r[7],w=r[2],A=r[5],E=r[8];return s[0]=a*b+o*x+l*w,s[3]=a*v+o*M+l*A,s[6]=a*d+o*S+l*E,s[1]=c*b+h*x+f*w,s[4]=c*v+h*M+f*A,s[7]=c*d+h*S+f*E,s[2]=u*b+m*x+_*w,s[5]=u*v+m*M+_*A,s[8]=u*d+m*S+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,m=c*s-a*l,_=n*f+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=f*b,e[1]=(r*c-h*i)*b,e[2]=(o*i-r*a)*b,e[3]=u*b,e[4]=(h*n-r*l)*b,e[5]=(r*s-o*n)*b,e[6]=m*b,e[7]=(i*l-c*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nc.makeScale(e,n)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nc.makeRotation(-e)),this}translate(e,n){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jf.prototype.isMatrix3=!0;let Oe=Jf;const Nc=new Oe,Pp=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zy(){const t={enabled:!0,workingColorSpace:Tl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qi?wl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Tl]:{primaries:e,whitePoint:i,transfer:wl,toXYZ:Pp,fromXYZ:Lp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Pp,fromXYZ:Lp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),t}const Ye=Zy();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class Qy{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=Al("canvas")),jr.width=e.width,jr.height=e.height;const r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jy=0;class Yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pc(r[a].image)):s.push(Pc(r[a]))}else s=Pc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let eS=0;const Lc=new H;class en extends zr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=bi,r=bi,s=qt,a=Ar,o=Gn,l=_n,c=en.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Ha(),this.name="",this.source=new Yf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Gx;en.DEFAULT_ANISOTROPY=1;const eh=class eh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],_=l[9],b=l[2],v=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-b)<.01&&Math.abs(_-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+b)<.1&&Math.abs(_+v)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(m+1)/2,w=(d+1)/2,A=(h+u)/4,E=(f+b)/4,g=(_+v)/4;return M>S&&M>w?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=E/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=g/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=g/s),this.set(i,r,s,n),this}let x=Math.sqrt((v-_)*(v-_)+(f-b)*(f-b)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(v-_)/x,this.y=(f-b)/x,this.z=(u-h)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eh.prototype.isVector4=!0;let pt=eh;class tS extends zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new en(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Yf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends tS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qx extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nS extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cl=class Cl{constructor(e,n,i,r,s,a,o,l,c,h,f,u,m,_,b,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,u,m,_,b,v)}set(e,n,i,r,s,a,o,l,c,h,f,u,m,_,b,v){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=_,d[11]=b,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*f,_=o*h,b=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*h,m=l*f,_=c*h,b=c*f;n[0]=u+b*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=m*o-_,n[6]=b+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*h,m=l*f,_=c*h,b=c*f;n[0]=u-b*o,n[4]=-a*f,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*h,n[9]=b-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*h,m=a*f,_=o*h,b=o*f;n[0]=l*h,n[4]=_*c-m,n[8]=u*c+b,n[1]=l*f,n[5]=b*c+u,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,_=o*l,b=o*c;n[0]=l*h,n[4]=b-u*f,n[8]=_*f+m,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*f+_,n[10]=u-b*f}else if(e.order==="XZY"){const u=a*l,m=a*c,_=o*l,b=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=u*f+b,n[5]=a*h,n[9]=m*f-_,n[2]=_*f-m,n[6]=o*h,n[10]=b*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iS,e,rS)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Bi.crossVectors(i,mn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Bi.crossVectors(i,mn)),Bi.normalize(),ho.crossVectors(mn,Bi),r[0]=Bi.x,r[4]=ho.x,r[8]=mn.x,r[1]=Bi.y,r[5]=ho.y,r[9]=mn.y,r[2]=Bi.z,r[6]=ho.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],m=i[13],_=i[2],b=i[6],v=i[10],d=i[14],x=i[3],M=i[7],S=i[11],w=i[15],A=r[0],E=r[4],g=r[8],C=r[12],N=r[1],P=r[5],L=r[9],k=r[13],$=r[2],O=r[6],Y=r[10],z=r[14],U=r[3],j=r[7],Q=r[11],ne=r[15];return s[0]=a*A+o*N+l*$+c*U,s[4]=a*E+o*P+l*O+c*j,s[8]=a*g+o*L+l*Y+c*Q,s[12]=a*C+o*k+l*z+c*ne,s[1]=h*A+f*N+u*$+m*U,s[5]=h*E+f*P+u*O+m*j,s[9]=h*g+f*L+u*Y+m*Q,s[13]=h*C+f*k+u*z+m*ne,s[2]=_*A+b*N+v*$+d*U,s[6]=_*E+b*P+v*O+d*j,s[10]=_*g+b*L+v*Y+d*Q,s[14]=_*C+b*k+v*z+d*ne,s[3]=x*A+M*N+S*$+w*U,s[7]=x*E+M*P+S*O+w*j,s[11]=x*g+M*L+S*Y+w*Q,s[15]=x*C+M*k+S*z+w*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],m=e[14],_=e[3],b=e[7],v=e[11],d=e[15],x=l*m-c*u,M=o*m-c*f,S=o*u-l*f,w=a*m-c*h,A=a*u-l*h,E=a*f-o*h;return n*(b*x-v*M+d*S)-i*(_*x-v*w+d*A)+r*(_*M-b*w+d*E)-s*(_*S-b*A+v*E)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],m=e[11],_=e[12],b=e[13],v=e[14],d=e[15],x=n*o-i*a,M=n*l-r*a,S=n*c-s*a,w=i*l-r*o,A=i*c-s*o,E=r*c-s*l,g=h*b-f*_,C=h*v-u*_,N=h*d-m*_,P=f*v-u*b,L=f*d-m*b,k=u*d-m*v,$=x*k-M*L+S*P+w*N-A*C+E*g;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/$;return e[0]=(o*k-l*L+c*P)*O,e[1]=(r*L-i*k-s*P)*O,e[2]=(b*E-v*A+d*w)*O,e[3]=(u*A-f*E-m*w)*O,e[4]=(l*N-a*k-c*C)*O,e[5]=(n*k-r*N+s*C)*O,e[6]=(v*S-_*E-d*M)*O,e[7]=(h*E-u*S+m*M)*O,e[8]=(a*L-o*N+c*g)*O,e[9]=(i*N-n*L-s*g)*O,e[10]=(_*A-b*S+d*x)*O,e[11]=(f*S-h*A-m*x)*O,e[12]=(o*C-a*P-l*g)*O,e[13]=(n*P-i*C+r*g)*O,e[14]=(b*M-_*w-v*x)*O,e[15]=(h*w-f*M+u*x)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,u=s*c,m=s*h,_=s*f,b=a*h,v=a*f,d=o*f,x=l*c,M=l*h,S=l*f,w=i.x,A=i.y,E=i.z;return r[0]=(1-(b+d))*w,r[1]=(m+S)*w,r[2]=(_-M)*w,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(u+d))*A,r[6]=(v+x)*A,r[7]=0,r[8]=(_+M)*E,r[9]=(v-x)*E,r[10]=(1-(u+b))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Fn.copy(this);const c=1/a,h=1/o,f=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ri,l=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let _,b;if(l)_=s/(a-s),b=a*s/(a-s);else if(o===ri)_=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Fa)_=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ri,l=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,b;if(l)_=1/(a-s),b=a/(a-s);else if(o===ri)_=-2/(a-s),b=-(a+s)/(a-s);else if(o===Fa)_=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Cl.prototype.isMatrix4=!0;let St=Cl;const Xr=new H,Fn=new St,iS=new H(0,0,0),rS=new H(1,1,1),Bi=new H,ho=new H,mn=new H,Dp=new St,Ip=new Bs;class ur{constructor(e=0,n=0,i=0,r=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ip.setFromEuler(this),this.setFromQuaternion(Ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class Jx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sS=0;const Up=new H,Yr=new Bs,pi=new St,po=new H,Ks=new H,aS=new H,oS=new Bs,Fp=new H(1,0,0),Op=new H(0,1,0),kp=new H(0,0,1),Bp={type:"added"},lS={type:"removed"},$r={type:"childadded",child:null},Dc={type:"childremoved",child:null};class fn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new H,n=new ur,i=new Bs,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Oe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Fp,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(kp,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fp,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?po.copy(e):po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ks,po,this.up):pi.lookAt(po,Ks,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(pi),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bp),$r.child=e,this.dispatchEvent($r),$r.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lS),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bp),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,aS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new H(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cS={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const v=n.getJointPose(b,i),d=this._getHandJoint(c,b);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Uc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=Ky(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Uc(a,s,e+1/3),this.g=Uc(a,s,e),this.b=Uc(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=An){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=e0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Ye.workingToColorSpace(Yt.copy(this),e),Math.round($e(Yt.r*255,0,255))*65536+Math.round($e(Yt.g*255,0,255))*256+Math.round($e(Yt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=An){Ye.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(go);const i=Cc(zi.h,go.h,n),r=Cc(zi.s,go.s,n),s=Cc(zi.l,go.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ke;Ke.NAMES=e0;class uS extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const On=new H,mi=new H,Fc=new H,gi=new H,qr=new H,Kr=new H,zp=new H,Oc=new H,kc=new H,Bc=new H,zc=new pt,Vc=new pt,Hc=new pt;class Hn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),mi.subVectors(i,n),Fc.subVectors(e,n);const a=On.dot(On),o=On.dot(mi),l=On.dot(Fc),c=mi.dot(mi),h=mi.dot(Fc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return zc.setScalar(0),Vc.setScalar(0),Hc.setScalar(0),zc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,i),Hc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(zc,s.x),a.addScaledVector(Vc,s.y),a.addScaledVector(Hc,s.z),a}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),mi.subVectors(e,n),On.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),On.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;qr.subVectors(r,i),Kr.subVectors(s,i),Oc.subVectors(e,i);const l=qr.dot(Oc),c=Kr.dot(Oc);if(l<=0&&c<=0)return n.copy(i);kc.subVectors(e,r);const h=qr.dot(kc),f=Kr.dot(kc);if(h>=0&&f<=h)return n.copy(r);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(qr,a);Bc.subVectors(e,s);const m=qr.dot(Bc),_=Kr.dot(Bc);if(_>=0&&m<=_)return n.copy(s);const b=m*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Kr,o);const v=h*_-m*f;if(v<=0&&f-h>=0&&m-_>=0)return zp.subVectors(s,r),o=(f-h)/(f-h+(m-_)),n.copy(r).addScaledVector(zp,o);const d=1/(v+b+u);return a=b*d,o=u*d,n.copy(i).addScaledVector(qr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ga{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),vo.subVectors(this.max,Zs),Zr.subVectors(e.a,Zs),Qr.subVectors(e.b,Zs),Jr.subVectors(e.c,Zs),Vi.subVectors(Qr,Zr),Hi.subVectors(Jr,Qr),mr.subVectors(Zr,Jr);let n=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-mr.z,mr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,mr.z,0,-mr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-mr.y,mr.x,0];return!Gc(n,Zr,Qr,Jr,vo)||(n=[1,0,0,0,1,0,0,0,1],!Gc(n,Zr,Qr,Jr,vo))?!1:(_o.crossVectors(Vi,Hi),n=[_o.x,_o.y,_o.z],Gc(n,Zr,Qr,Jr,vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new H,new H,new H,new H,new H,new H,new H,new H],kn=new H,xo=new Ga,Zr=new H,Qr=new H,Jr=new H,Vi=new H,Hi=new H,mr=new H,Zs=new H,vo=new H,_o=new H,gr=new H;function Gc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){gr.fromArray(t,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const At=new H,yo=new qe;let dS=0;class ci extends zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wp,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yo.fromBufferAttribute(this,n),yo.applyMatrix3(e),this.setXY(n,yo.x,yo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class t0 extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class n0 extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}const fS=new Ga,Qs=new H,Wc=new H;class $f{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):fS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Wc)),this.expandByPoint(Qs.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hS=0;const wn=new St,jc=new fn,es=new H,gn=new Ga,Js=new Ga,Ut=new H;class hi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xy(e)?n0:t0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ln(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(gn.min,Js.min),gn.expandByPoint(Ut),Ut.addVectors(gn.max,Js.max),gn.expandByPoint(Ut)):(gn.expandByPoint(Js.min),gn.expandByPoint(Js.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Ut.add(es)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new H,l[g]=new H;const c=new H,h=new H,f=new H,u=new qe,m=new qe,_=new qe,b=new H,v=new H;function d(g,C,N){c.fromBufferAttribute(i,g),h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,N),u.fromBufferAttribute(s,g),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,N),h.sub(c),f.sub(c),m.sub(u),_.sub(u);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(b.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),v.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(P),o[g].add(b),o[C].add(b),o[N].add(b),l[g].add(v),l[C].add(v),l[N].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let g=0,C=x.length;g<C;++g){const N=x[g],P=N.start,L=N.count;for(let k=P,$=P+L;k<$;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new H,S=new H,w=new H,A=new H;function E(g){w.fromBufferAttribute(r,g),A.copy(w);const C=o[g];M.copy(C),M.sub(w.multiplyScalar(w.dot(C))).normalize(),S.crossVectors(A,C);const P=S.dot(l[g])<0?-1:1;a.setXYZW(g,M.x,M.y,M.z,P)}for(let g=0,C=x.length;g<C;++g){const N=x[g],P=N.start,L=N.count;for(let k=P,$=P+L;k<$;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,h=new H,f=new H;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),b=e.getX(u+1),v=e.getX(u+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,v),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,v),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let m=0,_=0;for(let b=0,v=l.length;b<v;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let d=0;d<h;d++)u[_++]=c[m++]}return new ci(u,h,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],m=e(u,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let pS=0;class Wa extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Ms,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Qu,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Fe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Qu&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new H,Xc=new H,So=new H,Gi=new H,Yc=new H,Mo=new H,$c=new H;class mS{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xc.copy(e).add(n).multiplyScalar(.5),So.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Xc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(So),o=Gi.dot(this.direction),l=-Gi.dot(So),c=Gi.lengthSq(),h=Math.abs(1-a*a);let f,u,m,_;if(h>0)if(f=a*l-o,u=a*o-l,_=s*h,f>=0)if(u>=-_)if(u<=_){const b=1/h;f*=b,u*=b,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xc).addScaledVector(So,u),m}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){Yc.subVectors(n,e),Mo.subVectors(i,e),$c.crossVectors(Yc,Mo);let a=this.direction.dot($c),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(Mo.crossVectors(Gi,Mo));if(l<0)return null;const c=o*this.direction.dot(Yc.cross(Gi));if(c<0||l+c>a)return null;const h=-o*Gi.dot($c);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class i0 extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vp=new St,xr=new mS,Eo=new $f,Hp=new H,bo=new H,To=new H,wo=new H,qc=new H,Ao=new H,Gp=new H,Co=new H;class di extends fn{constructor(e=new hi,n=new i0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(qc.fromBufferAttribute(f,e),a?Ao.addScaledVector(qc,h):Ao.addScaledVector(qc.sub(n),h))}n.add(Ao)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Eo.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Eo,Hp)===null||xr.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(Vp.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Vp),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=u.length;_<b;_++){const v=u[_],d=a[v.materialIndex],x=Math.max(v.start,m.start),M=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let S=x,w=M;S<w;S+=3){const A=o.getX(S),E=o.getX(S+1),g=o.getX(S+2);r=Ro(this,d,e,i,c,h,f,A,E,g),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let v=_,d=b;v<d;v+=3){const x=o.getX(v),M=o.getX(v+1),S=o.getX(v+2);r=Ro(this,a,e,i,c,h,f,x,M,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=u.length;_<b;_++){const v=u[_],d=a[v.materialIndex],x=Math.max(v.start,m.start),M=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=x,w=M;S<w;S+=3){const A=S,E=S+1,g=S+2;r=Ro(this,d,e,i,c,h,f,A,E,g),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let v=_,d=b;v<d;v+=3){const x=v,M=v+1,S=v+2;r=Ro(this,a,e,i,c,h,f,x,M,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function gS(t,e,n,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===cr,o),l===null)return null;Co.copy(o),Co.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Co);return c<n.near||c>n.far?null:{distance:c,point:Co.clone(),object:t}}function Ro(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,bo),t.getVertexPosition(l,To),t.getVertexPosition(c,wo);const h=gS(t,e,n,i,bo,To,wo,Gp);if(h){const f=new H;Hn.getBarycoord(Gp,bo,To,wo,f),r&&(h.uv=Hn.getInterpolatedAttribute(r,o,l,c,f,new qe)),s&&(h.uv1=Hn.getInterpolatedAttribute(s,o,l,c,f,new qe)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,c,f,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new H,materialIndex:0};Hn.getNormal(bo,To,wo,u.normal),h.face=u,h.barycoord=f}return h}class xS extends en{constructor(e=null,n=1,i=1,r,s,a,o,l,c=zt,h=zt,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kc=new H,vS=new H,_S=new Oe;class Sr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Kc.subVectors(i,n).cross(vS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Kc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_S.getNormalMatrix(e),r=this.coplanarPoint(Kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new $f,yS=new qe(.5,.5),No=new H;class qf{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],m=s[7],_=s[8],b=s[9],v=s[10],d=s[11],x=s[12],M=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-a,m-h,d-_,w-x).normalize(),r[1].setComponents(c+a,m+h,d+_,w+x).normalize(),r[2].setComponents(c+o,m+f,d+b,w+M).normalize(),r[3].setComponents(c-o,m-f,d-b,w-M).normalize(),i)r[4].setComponents(l,u,v,S).normalize(),r[5].setComponents(c-l,m-u,d-v,w-S).normalize();else if(r[4].setComponents(c-l,m-u,d-v,w-S).normalize(),n===ri)r[5].setComponents(c+l,m+u,d+v,w+S).normalize();else if(n===Fa)r[5].setComponents(l,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=yS.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class r0 extends en{constructor(e=[],n=Fr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Is extends en{constructor(e,n,i=ui,r,s,a,o=zt,l=zt,c,h=Di,f=1){if(h!==Di&&h!==Cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class SS extends Is{constructor(e,n=ui,i=Fr,r,s,a=zt,o=zt,l,c=Di){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class s0 extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends hi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(h,3)),this.setAttribute("uv",new Ln(f,2));function _(b,v,d,x,M,S,w,A,E,g,C){const N=S/E,P=w/g,L=S/2,k=w/2,$=A/2,O=E+1,Y=g+1;let z=0,U=0;const j=new H;for(let Q=0;Q<Y;Q++){const ne=Q*P-k;for(let ae=0;ae<O;ae++){const ke=ae*N-L;j[b]=ke*x,j[v]=ne*M,j[d]=$,c.push(j.x,j.y,j.z),j[b]=0,j[v]=0,j[d]=A>0?1:-1,h.push(j.x,j.y,j.z),f.push(ae/E),f.push(1-Q/g),z+=1}}for(let Q=0;Q<g;Q++)for(let ne=0;ne<E;ne++){const ae=u+ne+O*Q,ke=u+ne+O*(Q+1),Be=u+(ne+1)+O*(Q+1),Ie=u+(ne+1)+O*Q;l.push(ae,ke,Ie),l.push(ke,Be,Ie),U+=6}o.addGroup(m,U,C),m+=U,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kf extends hi{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],m=[];let _=0;const b=[],v=i/2;let d=0;x(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ln(f,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(m,2));function x(){const S=new H,w=new H;let A=0;const E=(n-e)/i;for(let g=0;g<=s;g++){const C=[],N=g/s,P=N*(n-e)+e;for(let L=0;L<=r;L++){const k=L/r,$=k*l+o,O=Math.sin($),Y=Math.cos($);w.x=P*O,w.y=-N*i+v,w.z=P*Y,f.push(w.x,w.y,w.z),S.set(O,E,Y).normalize(),u.push(S.x,S.y,S.z),m.push(k,1-N),C.push(_++)}b.push(C)}for(let g=0;g<r;g++)for(let C=0;C<s;C++){const N=b[C][g],P=b[C+1][g],L=b[C+1][g+1],k=b[C][g+1];(e>0||C!==0)&&(h.push(N,P,k),A+=3),(n>0||C!==s-1)&&(h.push(P,L,k),A+=3)}c.addGroup(d,A,0),d+=A}function M(S){const w=_,A=new qe,E=new H;let g=0;const C=S===!0?e:n,N=S===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,v*N,0),u.push(0,N,0),m.push(.5,.5),_++;const P=_;for(let L=0;L<=r;L++){const $=L/r*l+o,O=Math.cos($),Y=Math.sin($);E.x=C*Y,E.y=v*N,E.z=C*O,f.push(E.x,E.y,E.z),u.push(0,N,0),A.x=O*.5+.5,A.y=Y*.5*N+.5,m.push(A.x,A.y),_++}for(let L=0;L<r;L++){const k=w+L,$=P+L;S===!0?h.push($,$+1,k):h.push($+1,$,k),g+=3}c.addGroup(d,g,S===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xl extends hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=n/l,m=[],_=[],b=[],v=[];for(let d=0;d<h;d++){const x=d*u-a;for(let M=0;M<c;M++){const S=M*f-s;_.push(S,-x,0),b.push(0,0,1),v.push(M/o),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const M=x+c*d,S=x+c*(d+1),w=x+1+c*(d+1),A=x+1+c*d;m.push(M,S,A),m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(b,3)),this.setAttribute("uv",new Ln(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Wp(r))r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Wp(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function Wp(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function MS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const ES={clone:Us,merge:Zt};var bS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bS,this.fragmentShader=TS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=MS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new St().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wS extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class AS extends Wa{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=kf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class CS extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RS extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class o0 extends fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Zc=new St,jp=new H,Xp=new H;class NS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;jp.setFromMatrixPosition(e.matrixWorld),n.position.copy(jp),Xp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xp),n.updateMatrixWorld(),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Fa||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Po=new H,Lo=new Bs,Zn=new H;class l0 extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Po,Lo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Lo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Po,Lo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Lo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new H,Yp=new qe,$p=new qe;class vn extends l0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,Yp,$p),n.subVectors($p,Yp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class PS extends NS{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class LS extends o0{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class c0 extends l0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DS extends o0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ts=-90,ns=1;class IS extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new vn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new vn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new vn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new vn(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new vn(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,u,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class US extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const th=class th{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};th.prototype.isMatrix2=!0;let qp=th;function Kp(t,e,n,i){const r=FS(i);switch(n){case $x:return t*e;case Kx:return t*e/r.components*r.byteLength;case Hf:return t*e/r.components*r.byteLength;case Or:return t*e*2/r.components*r.byteLength;case Gf:return t*e*2/r.components*r.byteLength;case qx:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case Wf:return t*e*4/r.components*r.byteLength;case $o:case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:case dd:return Math.max(t,16)*Math.max(e,8)/4;case ld:case ud:return Math.max(t,8)*Math.max(e,8)/2;case fd:case hd:case md:case gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pd:case El:case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ld:case Dd:case Id:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ud:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bl:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FS(t){switch(t){case _n:case Wx:return{byteLength:1,components:1};case Ia:case jx:case Li:return{byteLength:2,components:1};case zf:case Vf:return{byteLength:2,components:4};case ui:case Bf:case ii:return{byteLength:4,components:1};case Xx:case Yx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function OS(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){const _=f[u],b=f[m];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++u,f[u]=b)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){const b=f[m];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,NM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:kS,alphahash_pars_fragment:BS,alphamap_fragment:zS,alphamap_pars_fragment:VS,alphatest_fragment:HS,alphatest_pars_fragment:GS,aomap_fragment:WS,aomap_pars_fragment:jS,batching_pars_vertex:XS,batching_vertex:YS,begin_vertex:$S,beginnormal_vertex:qS,bsdfs:KS,iridescence_fragment:ZS,bumpmap_pars_fragment:QS,clipping_planes_fragment:JS,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:aM,common:oM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:dM,emissivemap_fragment:fM,emissivemap_pars_fragment:hM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:xM,envmap_pars_fragment:vM,envmap_pars_vertex:_M,envmap_physical_pars_fragment:NM,envmap_vertex:yM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:bM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:wM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:CM,lights_pars_begin:RM,lights_toon_fragment:PM,lights_toon_pars_fragment:LM,lights_phong_fragment:DM,lights_phong_pars_fragment:IM,lights_physical_fragment:UM,lights_physical_pars_fragment:FM,lights_fragment_begin:OM,lights_fragment_maps:kM,lights_fragment_end:BM,lightprobes_pars_fragment:zM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:WM,map_fragment:jM,map_pars_fragment:XM,map_particle_fragment:YM,map_particle_pars_fragment:$M,metalnessmap_fragment:qM,metalnessmap_pars_fragment:KM,morphinstance_vertex:ZM,morphcolor_vertex:QM,morphnormal_vertex:JM,morphtarget_pars_vertex:eE,morphtarget_vertex:tE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:rE,normal_pars_vertex:sE,normal_vertex:aE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:dE,opaque_fragment:fE,packing:hE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:xE,roughnessmap_fragment:vE,roughnessmap_pars_fragment:_E,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:SE,shadowmap_vertex:ME,shadowmask_pars_fragment:EE,skinbase_vertex:bE,skinning_pars_vertex:TE,skinning_vertex:wE,skinnormal_vertex:AE,specularmap_fragment:CE,specularmap_pars_fragment:RE,tonemapping_fragment:NE,tonemapping_pars_fragment:PE,transmission_fragment:LE,transmission_pars_fragment:DE,uv_pars_fragment:IE,uv_pars_vertex:UE,uv_vertex:FE,worldpos_vertex:OE,background_vert:kE,background_frag:BE,backgroundCube_vert:zE,backgroundCube_frag:VE,cube_vert:HE,cube_frag:GE,depth_vert:WE,depth_frag:jE,distance_vert:XE,distance_frag:YE,equirect_vert:$E,equirect_frag:qE,linedashed_vert:KE,linedashed_frag:ZE,meshbasic_vert:QE,meshbasic_frag:JE,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:r1,meshnormal_frag:s1,meshphong_vert:a1,meshphong_frag:o1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:u1,meshtoon_frag:d1,points_vert:f1,points_frag:h1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:x1},ge={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ei={basic:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Zt([ge.points,ge.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Zt([ge.common,ge.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Zt([ge.sprite,ge.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Zt([ge.common,ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Zt([ge.lights,ge.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ei.physical={uniforms:Zt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Do={r:0,b:0,g:0},v1=new St,d0=new Oe;d0.set(-1,0,0,0,1,0,0,0,1);function _1(t,e,n,i,r,s){const a=new Ke(0);let o=r===!0?0:1,l,c,h=null,f=0,u=null;function m(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=e.get(M,S)}return M}function _(x){let M=!1;const S=m(x);S===null?v(a,o):S&&S.isColor&&(v(S,1),M=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(x,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===jl)?(c===void 0&&(c=new di(new ja(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Us(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(d0),c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==nt,(h!==S||f!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new di(new Xl(2,2),new fi({name:"BackgroundMaterial",uniforms:Us(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function v(x,M){x.getRGB(Do,a0(t)),n.buffers.color.setClear(Do.r,Do.g,Do.b,M,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,v(a,o)},render:_,addToRenderList:b,dispose:d}}function y1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(P,L,k,$,O){let Y=!1;const z=f(P,$,k,L);s!==z&&(s=z,c(s.object)),Y=m(P,$,k,O),Y&&_(P,$,k,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(P,L,k,$),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function f(P,L,k,$){const O=$.wireframe===!0;let Y=i[L.id];Y===void 0&&(Y={},i[L.id]=Y);const z=P.isInstancedMesh===!0?P.id:0;let U=Y[z];U===void 0&&(U={},Y[z]=U);let j=U[k.id];j===void 0&&(j={},U[k.id]=j);let Q=j[O];return Q===void 0&&(Q=u(l()),j[O]=Q),Q}function u(P){const L=[],k=[],$=[];for(let O=0;O<n;O++)L[O]=0,k[O]=0,$[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:$,object:P,attributes:{},index:null}}function m(P,L,k,$){const O=s.attributes,Y=L.attributes;let z=0;const U=k.getAttributes();for(const j in U)if(U[j].location>=0){const ne=O[j];let ae=Y[j];if(ae===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;z++}return s.attributesNum!==z||s.index!==$}function _(P,L,k,$){const O={},Y=L.attributes;let z=0;const U=k.getAttributes();for(const j in U)if(U[j].location>=0){let ne=Y[j];ne===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),O[j]=ae,z++}s.attributes=O,s.attributesNum=z,s.index=$}function b(){const P=s.newAttributes;for(let L=0,k=P.length;L<k;L++)P[L]=0}function v(P){d(P,0)}function d(P,L){const k=s.newAttributes,$=s.enabledAttributes,O=s.attributeDivisors;k[P]=1,$[P]===0&&(t.enableVertexAttribArray(P),$[P]=1),O[P]!==L&&(t.vertexAttribDivisor(P,L),O[P]=L)}function x(){const P=s.newAttributes,L=s.enabledAttributes;for(let k=0,$=L.length;k<$;k++)L[k]!==P[k]&&(t.disableVertexAttribArray(k),L[k]=0)}function M(P,L,k,$,O,Y,z){z===!0?t.vertexAttribIPointer(P,L,k,O,Y):t.vertexAttribPointer(P,L,k,$,O,Y)}function S(P,L,k,$){b();const O=$.attributes,Y=k.getAttributes(),z=L.defaultAttributeValues;for(const U in Y){const j=Y[U];if(j.location>=0){let Q=O[U];if(Q===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const ne=Q.normalized,ae=Q.itemSize,ke=e.get(Q);if(ke===void 0)continue;const Be=ke.buffer,Ie=ke.type,q=ke.bytesPerElement,le=Ie===t.INT||Ie===t.UNSIGNED_INT||Q.gpuType===Bf;if(Q.isInterleavedBufferAttribute){const se=Q.data,Ue=se.stride,oe=Q.offset;if(se.isInstancedInterleavedBuffer){for(let ie=0;ie<j.locationSize;ie++)d(j.location+ie,se.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ie=0;ie<j.locationSize;ie++)v(j.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ie=0;ie<j.locationSize;ie++)M(j.location+ie,ae/j.locationSize,Ie,ne,Ue*q,(oe+ae/j.locationSize*ie)*q,le)}else{if(Q.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)d(j.location+se,Q.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<j.locationSize;se++)v(j.location+se);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let se=0;se<j.locationSize;se++)M(j.location+se,ae/j.locationSize,Ie,ne,ae*q,ae/j.locationSize*se*q,le)}}else if(z!==void 0){const ne=z[U];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(j.location,ne);break;case 3:t.vertexAttrib3fv(j.location,ne);break;case 4:t.vertexAttrib4fv(j.location,ne);break;default:t.vertexAttrib1fv(j.location,ne)}}}}x()}function w(){C();for(const P in i){const L=i[P];for(const k in L){const $=L[k];for(const O in $){const Y=$[O];for(const z in Y)h(Y[z].object),delete Y[z];delete $[O]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const L=i[P.id];for(const k in L){const $=L[k];for(const O in $){const Y=$[O];for(const z in Y)h(Y[z].object),delete Y[z];delete $[O]}}delete i[P.id]}function E(P){for(const L in i){const k=i[L];for(const $ in k){const O=k[$];if(O[P.id]===void 0)continue;const Y=O[P.id];for(const z in Y)h(Y[z].object),delete Y[z];delete O[P.id]}}}function g(P){for(const L in i){const k=i[L],$=P.isInstancedMesh===!0?P.id:0,O=k[$];if(O!==void 0){for(const Y in O){const z=O[Y];for(const U in z)h(z[U].object),delete z[U];delete O[Y]}delete k[$],Object.keys(k).length===0&&delete i[L]}}}function C(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:v,disableUnusedAttributes:x}}function S1(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function M1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Gn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const g=E===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==_n&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ii&&!g)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:w,samples:A}}function E1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||i!==0||r;return r=u,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,m){const _=f.clippingPlanes,b=f.clipIntersection,v=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!v)s?h(null):c();else{const x=s?0:i,M=x*4;let S=d.clippingState||null;l.value=S,S=h(_,u,M,m);for(let w=0;w!==M;++w)S[w]=n[w];d.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,m,_){const b=f!==null?f.length:0;let v=null;if(b!==0){if(v=l.value,_!==!0||v===null){const d=m+b*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<d)&&(v=new Float32Array(d));for(let M=0,S=m;M!==b;++M,S+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(v,S),v[S+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}const Qi=4,Zp=[.125,.215,.35,.446,.526,.582],Er=20,b1=256,ea=new c0,Qp=new Ke;let Qc=null,Jc=0,eu=0,tu=!1;const T1=new H;class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=T1}=s;Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fr||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Li,format:Gn,colorSpace:Tl,depthBuffer:!1},r=em(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=w1(s)),this._blurMaterial=C1(s,e,n),this._ggxMaterial=A1(s,e,n)}return r}_compileMaterial(e){const n=new di(new hi,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new vn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Qp),f.toneMapping=oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new ja,new i0({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,v=b.material;let d=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,d=!0):(v.color.copy(Qp),d=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const w=this._cubeSize;is(r,S*w,M>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(b,l),f.render(e,l)}f.toneMapping=m,f.autoClear=u,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fr||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,m=f*u,{_lodMax:_}=this,b=this._sizeLods[i],v=3*b*(i>_-Qi?i-_+Qi:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,is(s,v,d,3*b,2*b),r.setRenderTarget(s),r.render(o,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,is(e,v,d,3*b,2*b),r.setRenderTarget(e),r.render(o,ea)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Er-1),b=s/_,v=isFinite(s)?1+Math.floor(h*b):Er;v>Er&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Er}`);const d=[];let x=0;for(let E=0;E<Er;++E){const g=E/b,C=Math.exp(-g*g/2);d.push(C),E===0?x+=C:E<v&&(x+=2*C)}for(let E=0;E<d.length;E++)d[E]=d[E]/x;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-i;const S=this._sizeLods[r],w=3*S*(r>M-Qi?r-M+Qi:0),A=4*(this._cubeSize-S);is(n,w,A,3*S,2*S),l.setRenderTarget(n),l.render(f,ea)}}function w1(t){const e=[],n=[],i=[];let r=t;const s=t-Qi+1+Zp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Qi?l=Zp[a-t+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,b=3,v=2,d=1,x=new Float32Array(b*_*m),M=new Float32Array(v*_*m),S=new Float32Array(d*_*m);for(let A=0;A<m;A++){const E=A%3*2/3-1,g=A>2?0:-1,C=[E,g,0,E+2/3,g,0,E+2/3,g+1,0,E,g,0,E+2/3,g+1,0,E,g+1,0];x.set(C,b*_*A),M.set(u,v*_*A);const N=[A,A,A,A,A,A];S.set(N,d*_*A)}const w=new hi;w.setAttribute("position",new ci(x,b)),w.setAttribute("uv",new ci(M,v)),w.setAttribute("faceIndex",new ci(S,d)),i.push(new di(w,null)),r>Qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function em(t,e,n){const i=new li(t,e,n);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function A1(t,e,n){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function C1(t,e,n){const i=new Float32Array(Er),r=new H(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function tm(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function nm(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class f0 extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new r0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ja(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:wi});s.uniforms.tEquirect.value=n;const a=new di(r,s),o=n.minFilter;return n.minFilter===Ar&&(n.minFilter=qt),new IS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function R1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===bc||m===Tc)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const b=new f0(_.height);return b.fromEquirectangularTexture(t,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,_=m===bc||m===Tc,b=m===Fr||m===Ds;if(_||b){let v=n.get(u);const d=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Jp(t)),v=_?i.fromEquirectangular(u,v):i.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),v.texture;if(v!==void 0)return v.texture;{const x=u.image;return _&&x&&x.height>0||b&&x&&l(x)?(i===null&&(i=new Jp(t)),v=_?i.fromEquirectangular(u):i.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),u.addEventListener("dispose",h),v.texture):null}}}return u}function o(u,m){return m===bc?u.mapping=Fr:m===Tc&&(u.mapping=Ds),u}function l(u){let m=0;const _=6;for(let b=0;b<_;b++)u[b]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function N1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Es("WebGLRenderer: "+i+" extension not supported."),r}}}function P1(t,e,n,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(f){const u=[],m=f.index,_=f.attributes.position;let b=0;if(_===void 0)return;if(m!==null){const x=m.array;b=m.version;for(let M=0,S=x.length;M<S;M+=3){const w=x[M+0],A=x[M+1],E=x[M+2];u.push(w,A,A,E,E,w)}}else{const x=_.array;b=_.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const w=M+0,A=M+1,E=M+2;u.push(w,A,A,E,E,w)}}const v=new(_.count>=65535?n0:t0)(u,1);v.version=b;const d=s.get(f);d&&e.remove(d),s.set(f,v)}function h(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function L1(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){t.drawElements(i,u,s,f*a),n.update(u,i,1)}function c(f,u,m){m!==0&&(t.drawElementsInstanced(i,u,s,f*a,m),n.update(u,i,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,m);let b=0;for(let v=0;v<m;v++)b+=u[v];n.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function D1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function I1(t,e,n){const i=new WeakMap,r=new pt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let N=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var m=N;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),b===!0&&(S=2),v===!0&&(S=3);let w=o.attributes.position.count*S,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*A*4*f),g=new Qx(E,w,A,f);g.type=ii,g.needsUpdate=!0;const C=S*4;for(let P=0;P<f;P++){const L=d[P],k=x[P],$=M[P],O=w*A*4*P;for(let Y=0;Y<L.count;Y++){const z=Y*C;_===!0&&(r.fromBufferAttribute(L,Y),E[O+z+0]=r.x,E[O+z+1]=r.y,E[O+z+2]=r.z,E[O+z+3]=0),b===!0&&(r.fromBufferAttribute(k,Y),E[O+z+4]=r.x,E[O+z+5]=r.y,E[O+z+6]=r.z,E[O+z+7]=0),v===!0&&(r.fromBufferAttribute($,Y),E[O+z+8]=r.x,E[O+z+9]=r.y,E[O+z+10]=r.z,E[O+z+11]=$.itemSize===4?r.w:1)}}u={count:f,texture:g,size:new qe(w,A)},i.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let v=0;v<c.length;v++)_+=c[v];const b=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",b),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function U1(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const F1={[Fx]:"LINEAR_TONE_MAPPING",[Ox]:"REINHARD_TONE_MAPPING",[kx]:"CINEON_TONE_MAPPING",[Bx]:"ACES_FILMIC_TONE_MAPPING",[Vx]:"AGX_TONE_MAPPING",[Hx]:"NEUTRAL_TONE_MAPPING",[zx]:"CUSTOM_TONE_MAPPING"};function O1(t,e,n,i,r,s){const a=new li(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Is(e,n):void 0}),o=new li(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new hi;l.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const c=new wS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new di(l,c),f=new c0(-1,1,1,-1,0,1);let u=null,m=null,_=!1,b,v=null,d=[],x=!1;this.setSize=function(M,S){a.setSize(M,S),o.setSize(M,S);for(let w=0;w<d.length;w++){const A=d[w];A.setSize&&A.setSize(M,S)}},this.setEffects=function(M){d=M,x=d.length>0&&d[0].isRenderPass===!0;const S=a.width,w=a.height;for(let A=0;A<d.length;A++){const E=d[A];E.setSize&&E.setSize(S,w)}},this.begin=function(M,S){if(_||M.toneMapping===oi&&d.length===0)return!1;if(v=S,S!==null){const w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return x===!1&&M.setRenderTarget(a),b=M.toneMapping,M.toneMapping=oi,!0},this.hasRenderPass=function(){return x},this.end=function(M,S){M.toneMapping=b,_=!0;let w=a,A=o;for(let E=0;E<d.length;E++){const g=d[E];if(g.enabled!==!1&&(g.render(M,A,w,S),g.needsSwap!==!1)){const C=w;w=A,A=C}}if(u!==M.outputColorSpace||m!==M.toneMapping){u=M.outputColorSpace,m=M.toneMapping,c.defines={},Ye.getTransfer(u)===nt&&(c.defines.SRGB_TRANSFER="");const E=F1[m];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(v),M.render(h,f),v=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const h0=new en,zd=new Is(1,1),p0=new Qx,m0=new nS,g0=new r0,im=[],rm=[],sm=new Float32Array(16),am=new Float32Array(9),om=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=im[r];if(s===void 0&&(s=new Float32Array(r),im[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $l(t,e){let n=rm[e];n===void 0&&(n=new Int32Array(e),rm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function k1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function H1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;om.set(i),t.uniformMatrix2fv(this.addr,!1,om),Dt(n,i)}}function G1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;am.set(i),t.uniformMatrix3fv(this.addr,!1,am),Dt(n,i)}}function W1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;sm.set(i),t.uniformMatrix4fv(this.addr,!1,sm),Dt(n,i)}}function j1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function J1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(zd.compareFunction=n.isReversedDepthBuffer()?Xf:jf,s=zd):s=h0,n.setTexture2D(e||s,r)}function eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m0,r)}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g0,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p0,r)}function ib(t){switch(t){case 5126:return k1;case 35664:return B1;case 35665:return z1;case 35666:return V1;case 35674:return H1;case 35675:return G1;case 35676:return W1;case 5124:case 35670:return j1;case 35667:case 35671:return X1;case 35668:case 35672:return Y1;case 35669:case 35673:return $1;case 5125:return q1;case 36294:return K1;case 36295:return Z1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(t,e){t.uniform1fv(this.addr,e)}function sb(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function ab(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function ob(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function lb(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cb(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ub(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function db(t,e){t.uniform1iv(this.addr,e)}function fb(t,e){t.uniform2iv(this.addr,e)}function hb(t,e){t.uniform3iv(this.addr,e)}function pb(t,e){t.uniform4iv(this.addr,e)}function mb(t,e){t.uniform1uiv(this.addr,e)}function gb(t,e){t.uniform2uiv(this.addr,e)}function xb(t,e){t.uniform3uiv(this.addr,e)}function vb(t,e){t.uniform4uiv(this.addr,e)}function _b(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=zd:a=h0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function yb(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||m0,s[a])}function Sb(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||g0,s[a])}function Mb(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||p0,s[a])}function Eb(t){switch(t){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return db;case 35667:case 35671:return fb;case 35668:case 35672:return hb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return xb;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Mb}}class bb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ib(n.type)}}class Tb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Eb(n.type)}}class wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function lm(t,e){t.seq.push(e),t.map[e.id]=e}function Ab(t,e,n){const i=t.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),a=nu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lm(n,c===void 0?new bb(o,t,e):new Tb(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new wb(o),lm(n,f)),n=f}}}class Qo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Ab(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Cb=37297;let Rb=0;function Nb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const um=new Oe;function Pb(t){Ye._getMatrix(um,Ye.workingColorSpace,t);const e=`mat3( ${um.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case wl:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Nb(t.getShaderSource(e),o)}else return s}function Lb(t,e){const n=Pb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Db={[Fx]:"Linear",[Ox]:"Reinhard",[kx]:"Cineon",[Bx]:"ACESFilmic",[Vx]:"AgX",[Hx]:"Neutral",[zx]:"Custom"};function Ib(t,e){const n=Db[e];return n===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Io=new H;function Ub(){Ye.getLuminanceCoefficients(Io);const t=Io.x.toFixed(4),e=Io.y.toFixed(4),n=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Ob(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function oa(t){return t!==""}function fm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(t){return t.replace(Bb,Vb)}const zb=new Map;function Vb(t,e){let n=He[e];if(n===void 0){const i=zb.get(e);if(i!==void 0)n=He[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vd(n)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(t){return t.replace(Hb,Gb)}function Gb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wb={[Yo]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function jb(t){return Wb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xb={[Fr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[jl]:"ENVMAP_TYPE_CUBE_UV"};function Yb(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Xb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const $b={[Ds]:"ENVMAP_MODE_REFRACTION"};function qb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":$b[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kb={[kf]:"ENVMAP_BLENDING_MULTIPLY",[Uy]:"ENVMAP_BLENDING_MIX",[Fy]:"ENVMAP_BLENDING_ADD"};function Zb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Kb[t.combine]||"ENVMAP_BLENDING_NONE"}function Qb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Jb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=jb(n),c=Yb(n),h=qb(n),f=Zb(n),u=Qb(n),m=Fb(n),_=Ob(s),b=r.createProgram();let v,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(oa).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(oa).join(`
`),d.length>0&&(d+=`
`)):(v=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),d=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?He.tonemapping_pars_fragment:"",n.toneMapping!==oi?Ib("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Lb("linearToOutputTexel",n.outputColorSpace),Ub(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),a=Vd(a),a=fm(a,n),a=hm(a,n),o=Vd(o),o=fm(o,n),o=hm(o,n),a=pm(a),o=pm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",n.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+v+a,S=x+d+o,w=cm(r,r.VERTEX_SHADER,M),A=cm(r,r.FRAGMENT_SHADER,S);r.attachShader(b,w),r.attachShader(b,A),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function E(P){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(b)||"",k=r.getShaderInfoLog(w)||"",$=r.getShaderInfoLog(A)||"",O=L.trim(),Y=k.trim(),z=$.trim();let U=!0,j=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,w,A);else{const Q=dm(r,w,"vertex"),ne=dm(r,A,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Q+`
`+ne)}else O!==""?Fe("WebGLProgram: Program Info Log:",O):(Y===""||z==="")&&(j=!1);j&&(P.diagnostics={runnable:U,programLog:O,vertexShader:{log:Y,prefix:v},fragmentShader:{log:z,prefix:d}})}r.deleteShader(w),r.deleteShader(A),g=new Qo(r,b),C=kb(r,b)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let C;this.getAttributes=function(){return C===void 0&&E(this),C};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(b,Cb)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=A,this}let eT=0;class tT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nT(e),n.set(e,i)),i}}class nT{constructor(e){this.id=eT++,this.code=e,this.usedTimes=0}}function iT(t){return t===Or||t===El||t===bl}function rT(t,e,n,i,r,s){const a=new Jx,o=new tT,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function b(g,C,N,P,L,k){const $=P.fog,O=L.geometry,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,U=e.get(g.envMap||Y,z),j=U&&U.mapping===jl?U.image.height:null,Q=m[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&Fe("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=ne!==void 0?ne.length:0;let ke=0;O.morphAttributes.position!==void 0&&(ke=1),O.morphAttributes.normal!==void 0&&(ke=2),O.morphAttributes.color!==void 0&&(ke=3);let Be,Ie,q,le;if(Q){const be=ei[Q];Be=be.vertexShader,Ie=be.fragmentShader}else{Be=g.vertexShader,Ie=g.fragmentShader;const be=o.getVertexShaderStage(g),vt=o.getFragmentShaderStage(g);o.update(g,be,vt),q=be.id,le=vt.id}const se=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),oe=L.isInstancedMesh===!0,ie=L.isBatchedMesh===!0,we=!!g.map,Le=!!g.matcap,We=!!U,Xe=!!g.aoMap,Ze=!!g.lightMap,Tt=!!g.bumpMap&&g.wireframe===!1,Rt=!!g.normalMap,It=!!g.displacementMap,kt=!!g.emissiveMap,xt=!!g.metalnessMap,wt=!!g.roughnessMap,I=g.anisotropy>0,rn=g.clearcoat>0,tt=g.dispersion>0,R=g.iridescence>0,y=g.sheen>0,B=g.transmission>0,W=I&&!!g.anisotropyMap,K=rn&&!!g.clearcoatMap,ce=rn&&!!g.clearcoatNormalMap,de=rn&&!!g.clearcoatRoughnessMap,Z=R&&!!g.iridescenceMap,ee=R&&!!g.iridescenceThicknessMap,fe=y&&!!g.sheenColorMap,Ce=y&&!!g.sheenRoughnessMap,me=!!g.specularMap,he=!!g.specularColorMap,Pe=!!g.specularIntensityMap,De=B&&!!g.transmissionMap,ze=B&&!!g.thicknessMap,D=!!g.gradientMap,ue=!!g.alphaMap,J=g.alphaTest>0,pe=!!g.alphaHash,_e=!!g.extensions;let te=oi;g.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(te=t.toneMapping);const Ae={shaderID:Q,shaderType:g.type,shaderName:g.name,vertexShader:Be,fragmentShader:Ie,defines:g.defines,customVertexShaderID:q,customFragmentShaderID:le,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:ie,batchingColor:ie&&L._colorsTexture!==null,instancing:oe,instancingColor:oe&&L.instanceColor!==null,instancingMorph:oe&&L.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:we,matcap:Le,envMap:We,envMapMode:We&&U.mapping,envMapCubeUVHeight:j,aoMap:Xe,lightMap:Ze,bumpMap:Tt,normalMap:Rt,displacementMap:It,emissiveMap:kt,normalMapObjectSpace:Rt&&g.normalMapType===By,normalMapTangentSpace:Rt&&g.normalMapType===kd,packedNormalMap:Rt&&g.normalMapType===kd&&iT(g.normalMap.format),metalnessMap:xt,roughnessMap:wt,anisotropy:I,anisotropyMap:W,clearcoat:rn,clearcoatMap:K,clearcoatNormalMap:ce,clearcoatRoughnessMap:de,dispersion:tt,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:y,sheenColorMap:fe,sheenRoughnessMap:Ce,specularMap:me,specularColorMap:he,specularIntensityMap:Pe,transmission:B,transmissionMap:De,thicknessMap:ze,gradientMap:D,opaque:g.transparent===!1&&g.blending===Ms&&g.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:pe,combine:g.combine,mapUv:we&&_(g.map.channel),aoMapUv:Xe&&_(g.aoMap.channel),lightMapUv:Ze&&_(g.lightMap.channel),bumpMapUv:Tt&&_(g.bumpMap.channel),normalMapUv:Rt&&_(g.normalMap.channel),displacementMapUv:It&&_(g.displacementMap.channel),emissiveMapUv:kt&&_(g.emissiveMap.channel),metalnessMapUv:xt&&_(g.metalnessMap.channel),roughnessMapUv:wt&&_(g.roughnessMap.channel),anisotropyMapUv:W&&_(g.anisotropyMap.channel),clearcoatMapUv:K&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(g.sheenRoughnessMap.channel),specularMapUv:me&&_(g.specularMap.channel),specularColorMapUv:he&&_(g.specularColorMap.channel),specularIntensityMapUv:Pe&&_(g.specularIntensityMap.channel),transmissionMapUv:De&&_(g.transmissionMap.channel),thicknessMapUv:ze&&_(g.thicknessMap.channel),alphaMapUv:ue&&_(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Rt||I),vertexNormals:!!O.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(we||ue),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||O.attributes.normal===void 0&&Rt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ue,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ke,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:we&&g.map.isVideoTexture===!0&&Ye.getTransfer(g.map.colorSpace)===nt,decodeVideoTextureEmissive:kt&&g.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(g.emissiveMap.colorSpace)===nt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Si,flipSided:g.side===dn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:_e&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&g.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function v(g){const C=[];if(g.shaderID?C.push(g.shaderID):(C.push(g.customVertexShaderID),C.push(g.customFragmentShaderID)),g.defines!==void 0)for(const N in g.defines)C.push(N),C.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(d(C,g),x(C,g),C.push(t.outputColorSpace)),C.push(g.customProgramCacheKey),C.join()}function d(g,C){g.push(C.precision),g.push(C.outputColorSpace),g.push(C.envMapMode),g.push(C.envMapCubeUVHeight),g.push(C.mapUv),g.push(C.alphaMapUv),g.push(C.lightMapUv),g.push(C.aoMapUv),g.push(C.bumpMapUv),g.push(C.normalMapUv),g.push(C.displacementMapUv),g.push(C.emissiveMapUv),g.push(C.metalnessMapUv),g.push(C.roughnessMapUv),g.push(C.anisotropyMapUv),g.push(C.clearcoatMapUv),g.push(C.clearcoatNormalMapUv),g.push(C.clearcoatRoughnessMapUv),g.push(C.iridescenceMapUv),g.push(C.iridescenceThicknessMapUv),g.push(C.sheenColorMapUv),g.push(C.sheenRoughnessMapUv),g.push(C.specularMapUv),g.push(C.specularColorMapUv),g.push(C.specularIntensityMapUv),g.push(C.transmissionMapUv),g.push(C.thicknessMapUv),g.push(C.combine),g.push(C.fogExp2),g.push(C.sizeAttenuation),g.push(C.morphTargetsCount),g.push(C.morphAttributeCount),g.push(C.numDirLights),g.push(C.numPointLights),g.push(C.numSpotLights),g.push(C.numSpotLightMaps),g.push(C.numHemiLights),g.push(C.numRectAreaLights),g.push(C.numDirLightShadows),g.push(C.numPointLightShadows),g.push(C.numSpotLightShadows),g.push(C.numSpotLightShadowsWithMaps),g.push(C.numLightProbes),g.push(C.shadowMapType),g.push(C.toneMapping),g.push(C.numClippingPlanes),g.push(C.numClipIntersection),g.push(C.depthPacking)}function x(g,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const C=m[g.type];let N;if(C){const P=ei[C];N=ES.clone(P.uniforms)}else N=g.uniforms;return N}function S(g,C){let N=h.get(C);return N!==void 0?++N.usedTimes:(N=new Jb(t,C,g,r),c.push(N),h.set(C,N)),N}function w(g){if(--g.usedTimes===0){const C=c.indexOf(g);c[C]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function E(){o.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:E}}function sT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function aT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function gm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,b,v,d){let x=t[e];return x===void 0?(x={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:v,group:d},t[e]=x):(x.id=u.id,x.object=u,x.geometry=m,x.material=_,x.materialVariant=a(u),x.groupOrder=b,x.renderOrder=u.renderOrder,x.z=v,x.group=d),e++,x}function l(u,m,_,b,v,d){const x=o(u,m,_,b,v,d);_.transmission>0?i.push(x):_.transparent===!0?r.push(x):n.push(x)}function c(u,m,_,b,v,d){const x=o(u,m,_,b,v,d);_.transmission>0?i.unshift(x):_.transparent===!0?r.unshift(x):n.unshift(x)}function h(u,m,_){n.length>1&&n.sort(u||aT),i.length>1&&i.sort(m||gm),r.length>1&&r.sort(m||gm),_&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,m=t.length;u<m;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function oT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new xm,t.set(i,[a])):r>=s.length?(a=new xm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function lT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ke};break;case"SpotLight":n={position:new H,direction:new H,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function cT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uT=0;function dT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fT(t){const e=new lT,n=cT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new St,a=new St;function o(c){let h=0,f=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,_=0,b=0,v=0,d=0,x=0,M=0,S=0,w=0,A=0,E=0;c.sort(dT);for(let C=0,N=c.length;C<N;C++){const P=c[C],L=P.color,k=P.intensity,$=P.distance;let O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Or?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=L.r*k,f+=L.g*k,u+=L.b*k;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],k);E++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,U=n.get(P);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=O,i.directionalShadowMatrix[m]=P.shadow.matrix,x++}i.directional[m]=Y,m++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(L).multiplyScalar(k),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[b]=Y;const z=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,z.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[b]=z.matrix,P.castShadow){const U=n.get(P);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.spotShadow[b]=U,i.spotShadowMap[b]=O,S++}b++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(L).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=Y,v++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const z=P.shadow,U=n.get(P);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,U.shadowCameraNear=z.camera.near,U.shadowCameraFar=z.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=P.shadow.matrix,M++}i.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(k),Y.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[d]=Y,d++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const g=i.hash;(g.directionalLength!==m||g.pointLength!==_||g.spotLength!==b||g.rectAreaLength!==v||g.hemiLength!==d||g.numDirectionalShadows!==x||g.numPointShadows!==M||g.numSpotShadows!==S||g.numSpotMaps!==w||g.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=v,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,g.directionalLength=m,g.pointLength=_,g.spotLength=b,g.rectAreaLength=v,g.hemiLength=d,g.numDirectionalShadows=x,g.numPointShadows=M,g.numSpotShadows=S,g.numSpotMaps=w,g.numLightProbes=E,i.version=uT++)}function l(c,h){let f=0,u=0,m=0,_=0,b=0;const v=h.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const M=c[d];if(M.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),f++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),m++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),a.identity(),s.copy(M.matrixWorld),s.premultiply(v),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),u++}else if(M.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(v),b++}}}return{setup:o,setupView:l,state:i}}function vm(t){const e=new fT(t),n=[],i=[],r=[];function s(u){f.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function hT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vm(t),e.set(r,[o])):s>=a.length?(o=new vm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const pT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gT=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],xT=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],_m=new St,ta=new H,iu=new H;function vT(t,e,n){let i=new qf;const r=new qe,s=new qe,a=new pt,o=new CS,l=new RS,c={},h=n.maxTextureSize,f={[cr]:dn,[dn]:cr,[Si]:Si},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:pT,fragmentShader:mT}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new hi;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new di(_,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let d=this.type;this.render=function(A,E,g){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;this.type===gy&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yo);const C=t.getRenderTarget(),N=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),L=t.state;L.setBlending(wi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=d!==this.type;k&&E.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(O=>O.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,O=A.length;$<O;$++){const Y=A[$],z=Y.shadow;if(z===void 0){Fe("WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const U=z.getFrameExtents();r.multiply(U),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,z.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=j,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===aa){if(Y.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new li(r.x,r.y,{format:Or,type:Li,minFilter:qt,magFilter:qt,generateMipmaps:!1}),z.map.texture.name=Y.name+".shadowMap",z.map.depthTexture=new Is(r.x,r.y,ii),z.map.depthTexture.name=Y.name+".shadowMapDepth",z.map.depthTexture.format=Di,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt}else Y.isPointLight?(z.map=new f0(r.x),z.map.depthTexture=new SS(r.x,ui)):(z.map=new li(r.x,r.y),z.map.depthTexture=new Is(r.x,r.y,ui)),z.map.depthTexture.name=Y.name+".shadowMap",z.map.depthTexture.format=Di,this.type===Yo?(z.map.depthTexture.compareFunction=j?Xf:jf,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt);z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<Q;ne++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(z.map),t.clear());const ae=z.getViewport(ne);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),L.viewport(a)}if(Y.isPointLight){const ae=z.camera,ke=z.matrix,Be=Y.distance||ae.far;Be!==ae.far&&(ae.far=Be,ae.updateProjectionMatrix()),ta.setFromMatrixPosition(Y.matrixWorld),ae.position.copy(ta),iu.copy(ae.position),iu.add(gT[ne]),ae.up.copy(xT[ne]),ae.lookAt(iu),ae.updateMatrixWorld(),ke.makeTranslation(-ta.x,-ta.y,-ta.z),_m.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),z._frustum.setFromProjectionMatrix(_m,ae.coordinateSystem,ae.reversedDepth)}else z.updateMatrices(Y);i=z.getFrustum(),S(E,g,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===aa&&x(z,g),z.needsUpdate=!1}d=this.type,v.needsUpdate=!1,t.setRenderTarget(C,N,P)};function x(A,E){const g=e.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(r.x,r.y,{format:Or,type:Li})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,g,u,b,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,g,m,b,null)}function M(A,E,g,C){let N=null;const P=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)N=P;else if(N=g.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=N.uuid,k=E.uuid;let $=c[L];$===void 0&&($={},c[L]=$);let O=$[k];O===void 0&&(O=N.clone(),$[k]=O,E.addEventListener("dispose",w)),N=O}if(N.visible=E.visible,N.wireframe=E.wireframe,C===aa?N.side=E.shadowSide!==null?E.shadowSide:E.side:N.side=E.shadowSide!==null?E.shadowSide:f[E.side],N.alphaMap=E.alphaMap,N.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,N.map=E.map,N.clipShadows=E.clipShadows,N.clippingPlanes=E.clippingPlanes,N.clipIntersection=E.clipIntersection,N.displacementMap=E.displacementMap,N.displacementScale=E.displacementScale,N.displacementBias=E.displacementBias,N.wireframeLinewidth=E.wireframeLinewidth,N.linewidth=E.linewidth,g.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=t.properties.get(N);L.light=g}return N}function S(A,E,g,C,N){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===aa)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);const k=e.update(A),$=A.material;if(Array.isArray($)){const O=k.groups;for(let Y=0,z=O.length;Y<z;Y++){const U=O[Y],j=$[U.materialIndex];if(j&&j.visible){const Q=M(A,j,C,N);A.onBeforeShadow(t,A,E,g,k,Q,U),t.renderBufferDirect(g,null,k,Q,A,U),A.onAfterShadow(t,A,E,g,k,Q,U)}}}else if($.visible){const O=M(A,$,C,N);A.onBeforeShadow(t,A,E,g,k,O,null),t.renderBufferDirect(g,null,k,O,A,null),A.onAfterShadow(t,A,E,g,k,O,null)}}const L=A.children;for(let k=0,$=L.length;k<$;k++)S(L[k],E,g,C,N)}function w(A){A.target.removeEventListener("dispose",w);for(const g in c){const C=c[g],N=A.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function _T(t,e){function n(){let D=!1;const ue=new pt;let J=null;const pe=new pt(0,0,0,0);return{setMask:function(_e){J!==_e&&!D&&(t.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){D=_e},setClear:function(_e,te,Ae,be,vt){vt===!0&&(_e*=be,te*=be,Ae*=be),ue.set(_e,te,Ae,be),pe.equals(ue)===!1&&(t.clearColor(_e,te,Ae,be),pe.copy(ue))},reset:function(){D=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,J=null,pe=null,_e=null;return{setReversed:function(te){if(ue!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ue=te;const be=_e;_e=null,this.setClear(be)}},getReversed:function(){return ue},setTest:function(te){te?se(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(te){J!==te&&!D&&(t.depthMask(te),J=te)},setFunc:function(te){if(ue&&(te=qy[te]),pe!==te){switch(te){case Ju:t.depthFunc(t.NEVER);break;case ed:t.depthFunc(t.ALWAYS);break;case td:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case nd:t.depthFunc(t.EQUAL);break;case id:t.depthFunc(t.GEQUAL);break;case rd:t.depthFunc(t.GREATER);break;case sd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=te}},setLocked:function(te){D=te},setClear:function(te){_e!==te&&(_e=te,ue&&(te=1-te),t.clearDepth(te))},reset:function(){D=!1,J=null,pe=null,_e=null,ue=!1}}}function r(){let D=!1,ue=null,J=null,pe=null,_e=null,te=null,Ae=null,be=null,vt=null;return{setTest:function(ot){D||(ot?se(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(ot){ue!==ot&&!D&&(t.stencilMask(ot),ue=ot)},setFunc:function(ot,Yn,$n){(J!==ot||pe!==Yn||_e!==$n)&&(t.stencilFunc(ot,Yn,$n),J=ot,pe=Yn,_e=$n)},setOp:function(ot,Yn,$n){(te!==ot||Ae!==Yn||be!==$n)&&(t.stencilOp(ot,Yn,$n),te=ot,Ae=Yn,be=$n)},setLocked:function(ot){D=ot},setClear:function(ot){vt!==ot&&(t.clearStencil(ot),vt=ot)},reset:function(){D=!1,ue=null,J=null,pe=null,_e=null,te=null,Ae=null,be=null,vt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},u={},m=new WeakMap,_=[],b=null,v=!1,d=null,x=null,M=null,S=null,w=null,A=null,E=null,g=new Ke(0,0,0),C=0,N=!1,P=null,L=null,k=null,$=null,O=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,U=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=U>=2);let Q=null,ne={};const ae=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),Be=new pt().fromArray(ae),Ie=new pt().fromArray(ke);function q(D,ue,J,pe){const _e=new Uint8Array(4),te=t.createTexture();t.bindTexture(D,te),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<J;Ae++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(ue+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return te}const le={};le[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(Ls),Tt(!1),Rt(Sp),se(t.CULL_FACE),Xe(wi);function se(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function Ue(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function oe(D,ue){return u[D]!==ue?(t.bindFramebuffer(D,ue),u[D]=ue,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function ie(D,ue){let J=_,pe=!1;if(D){J=m.get(ue),J===void 0&&(J=[],m.set(ue,J));const _e=D.textures;if(J.length!==_e.length||J[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Ae=_e.length;te<Ae;te++)J[te]=t.COLOR_ATTACHMENT0+te;J.length=_e.length,pe=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,pe=!0);pe&&t.drawBuffers(J)}function we(D){return b!==D?(t.useProgram(D),b=D,!0):!1}const Le={[Mr]:t.FUNC_ADD,[vy]:t.FUNC_SUBTRACT,[_y]:t.FUNC_REVERSE_SUBTRACT};Le[yy]=t.MIN,Le[Sy]=t.MAX;const We={[My]:t.ZERO,[Ey]:t.ONE,[by]:t.SRC_COLOR,[Zu]:t.SRC_ALPHA,[Ny]:t.SRC_ALPHA_SATURATE,[Cy]:t.DST_COLOR,[wy]:t.DST_ALPHA,[Ty]:t.ONE_MINUS_SRC_COLOR,[Qu]:t.ONE_MINUS_SRC_ALPHA,[Ry]:t.ONE_MINUS_DST_COLOR,[Ay]:t.ONE_MINUS_DST_ALPHA,[Py]:t.CONSTANT_COLOR,[Ly]:t.ONE_MINUS_CONSTANT_COLOR,[Dy]:t.CONSTANT_ALPHA,[Iy]:t.ONE_MINUS_CONSTANT_ALPHA};function Xe(D,ue,J,pe,_e,te,Ae,be,vt,ot){if(D===wi){v===!0&&(Ue(t.BLEND),v=!1);return}if(v===!1&&(se(t.BLEND),v=!0),D!==xy){if(D!==d||ot!==N){if((x!==Mr||w!==Mr)&&(t.blendEquation(t.FUNC_ADD),x=Mr,w=Mr),ot)switch(D){case Ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mp:t.blendFunc(t.ONE,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",D);break}else switch(D){case Ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ep:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bp:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",D);break}M=null,S=null,A=null,E=null,g.set(0,0,0),C=0,d=D,N=ot}return}_e=_e||ue,te=te||J,Ae=Ae||pe,(ue!==x||_e!==w)&&(t.blendEquationSeparate(Le[ue],Le[_e]),x=ue,w=_e),(J!==M||pe!==S||te!==A||Ae!==E)&&(t.blendFuncSeparate(We[J],We[pe],We[te],We[Ae]),M=J,S=pe,A=te,E=Ae),(be.equals(g)===!1||vt!==C)&&(t.blendColor(be.r,be.g,be.b,vt),g.copy(be),C=vt),d=D,N=!1}function Ze(D,ue){D.side===Si?Ue(t.CULL_FACE):se(t.CULL_FACE);let J=D.side===dn;ue&&(J=!J),Tt(J),D.blending===Ms&&D.transparent===!1?Xe(wi):Xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),kt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(D){P!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),P=D)}function Rt(D){D!==py?(se(t.CULL_FACE),D!==L&&(D===Sp?t.cullFace(t.BACK):D===my?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),L=D}function It(D){D!==k&&(z&&t.lineWidth(D),k=D)}function kt(D,ue,J){D?(se(t.POLYGON_OFFSET_FILL),($!==ue||O!==J)&&($=ue,O=J,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,J))):Ue(t.POLYGON_OFFSET_FILL)}function xt(D){D?se(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function wt(D){D===void 0&&(D=t.TEXTURE0+Y-1),Q!==D&&(t.activeTexture(D),Q=D)}function I(D,ue,J){J===void 0&&(Q===null?J=t.TEXTURE0+Y-1:J=Q);let pe=ne[J];pe===void 0&&(pe={type:void 0,texture:void 0},ne[J]=pe),(pe.type!==D||pe.texture!==ue)&&(Q!==J&&(t.activeTexture(J),Q=J),t.bindTexture(D,ue||le[D]),pe.type=D,pe.texture=ue)}function rn(){const D=ne[Q];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function y(){try{t.texSubImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function B(){try{t.texSubImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function ce(){try{t.texStorage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function de(){try{t.texStorage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function Z(){try{t.texImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function ee(){try{t.texImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function fe(D){return f[D]!==void 0?f[D]:t.getParameter(D)}function Ce(D,ue){f[D]!==ue&&(t.pixelStorei(D,ue),f[D]=ue)}function me(D){Be.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function he(D){Ie.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ie.copy(D))}function Pe(D,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let pe=J.get(D);pe===void 0&&(pe=t.getUniformBlockIndex(ue,D.name),J.set(D,pe))}function De(D,ue){const pe=c.get(ue).get(D);l.get(ue)!==pe&&(t.uniformBlockBinding(ue,pe,D.__bindingPointIndex),l.set(ue,pe))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,ne={},u={},m=new WeakMap,_=[],b=null,v=!1,d=null,x=null,M=null,S=null,w=null,A=null,E=null,g=new Ke(0,0,0),C=0,N=!1,P=null,L=null,k=null,$=null,O=null,Be.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Ue,bindFramebuffer:oe,drawBuffers:ie,useProgram:we,setBlending:Xe,setMaterial:Ze,setFlipSided:Tt,setCullFace:Rt,setLineWidth:It,setPolygonOffset:kt,setScissorTest:xt,activeTexture:wt,bindTexture:I,unbindTexture:rn,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:Z,texImage3D:ee,pixelStorei:Ce,getParameter:fe,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:ce,texStorage3D:de,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:me,viewport:he,reset:ze}}function yT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap,f=new Set;let u;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,y){return _?new OffscreenCanvas(R,y):Al("canvas")}function v(R,y,B){let W=1;const K=tt(R);if((K.width>B||K.height>B)&&(W=B/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(W*K.width),de=Math.floor(W*K.height);u===void 0&&(u=b(ce,de));const Z=y?b(ce,de):u;return Z.width=ce,Z.height=de,Z.getContext("2d").drawImage(R,0,0,ce,de),Fe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+de+")."),Z}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function d(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,y,B,W,K,ce=!1){if(R!==null){if(t[R]!==void 0)return t[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let de;W&&(de=e.get("EXT_texture_norm16"),de||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===t.RED&&(B===t.FLOAT&&(Z=t.R32F),B===t.HALF_FLOAT&&(Z=t.R16F),B===t.UNSIGNED_BYTE&&(Z=t.R8),B===t.UNSIGNED_SHORT&&de&&(Z=de.R16_EXT),B===t.SHORT&&de&&(Z=de.R16_SNORM_EXT)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.R8UI),B===t.UNSIGNED_SHORT&&(Z=t.R16UI),B===t.UNSIGNED_INT&&(Z=t.R32UI),B===t.BYTE&&(Z=t.R8I),B===t.SHORT&&(Z=t.R16I),B===t.INT&&(Z=t.R32I)),y===t.RG&&(B===t.FLOAT&&(Z=t.RG32F),B===t.HALF_FLOAT&&(Z=t.RG16F),B===t.UNSIGNED_BYTE&&(Z=t.RG8),B===t.UNSIGNED_SHORT&&de&&(Z=de.RG16_EXT),B===t.SHORT&&de&&(Z=de.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RG8UI),B===t.UNSIGNED_SHORT&&(Z=t.RG16UI),B===t.UNSIGNED_INT&&(Z=t.RG32UI),B===t.BYTE&&(Z=t.RG8I),B===t.SHORT&&(Z=t.RG16I),B===t.INT&&(Z=t.RG32I)),y===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),B===t.UNSIGNED_INT&&(Z=t.RGB32UI),B===t.BYTE&&(Z=t.RGB8I),B===t.SHORT&&(Z=t.RGB16I),B===t.INT&&(Z=t.RGB32I)),y===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),B===t.UNSIGNED_INT&&(Z=t.RGBA32UI),B===t.BYTE&&(Z=t.RGBA8I),B===t.SHORT&&(Z=t.RGBA16I),B===t.INT&&(Z=t.RGBA32I)),y===t.RGB&&(B===t.UNSIGNED_SHORT&&de&&(Z=de.RGB16_EXT),B===t.SHORT&&de&&(Z=de.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),y===t.RGBA){const ee=ce?wl:Ye.getTransfer(K);B===t.FLOAT&&(Z=t.RGBA32F),B===t.HALF_FLOAT&&(Z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Z=ee===nt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&de&&(Z=de.RGBA16_EXT),B===t.SHORT&&de&&(Z=de.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(R,y){let B;return R?y===null||y===ui||y===Ua?B=t.DEPTH24_STENCIL8:y===ii?B=t.DEPTH32F_STENCIL8:y===Ia&&(B=t.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ui||y===Ua?B=t.DEPTH_COMPONENT24:y===ii?B=t.DEPTH_COMPONENT32F:y===Ia&&(B=t.DEPTH_COMPONENT16),B}function A(R,y){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==qt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function E(R){const y=R.target;y.removeEventListener("dispose",E),C(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function g(R){const y=R.target;y.removeEventListener("dispose",g),P(y)}function C(R){const y=i.get(R);if(y.__webglInit===void 0)return;const B=R.source,W=m.get(B);if(W){const K=W[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&N(R),Object.keys(W).length===0&&m.delete(B)}i.remove(R)}function N(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const B=R.source,W=m.get(B);delete W[y.__cacheKey],a.memory.textures--}function P(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let K=0;K<y.__webglFramebuffer[W].length;K++)t.deleteFramebuffer(y.__webglFramebuffer[W][K]);else t.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)t.deleteFramebuffer(y.__webglFramebuffer[W]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=R.textures;for(let W=0,K=B.length;W<K;W++){const ce=i.get(B[W]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(B[W])}i.remove(R)}let L=0;function k(){L=0}function $(){return L}function O(R){L=R}function Y(){const R=L;return R>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function U(R,y){const B=i.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const W=R.image;if(W===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(B,R,y);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function j(R,y){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Ue(B,R,y);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function Q(R,y){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Ue(B,R,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function ne(R,y){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){oe(B,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const ae={[ad]:t.REPEAT,[bi]:t.CLAMP_TO_EDGE,[od]:t.MIRRORED_REPEAT},ke={[zt]:t.NEAREST,[Oy]:t.NEAREST_MIPMAP_NEAREST,[fo]:t.NEAREST_MIPMAP_LINEAR,[qt]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},Be={[zy]:t.NEVER,[jy]:t.ALWAYS,[Vy]:t.LESS,[jf]:t.LEQUAL,[Hy]:t.EQUAL,[Xf]:t.GEQUAL,[Gy]:t.GREATER,[Wy]:t.NOTEQUAL};function Ie(R,y){if(y.type===ii&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===qt||y.magFilter===wc||y.magFilter===fo||y.magFilter===Ar||y.minFilter===qt||y.minFilter===wc||y.minFilter===fo||y.minFilter===Ar)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ae[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ae[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ae[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ke[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ke[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==fo&&y.minFilter!==Ar||y.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function q(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",E));const W=y.source;let K=m.get(W);K===void 0&&(K={},m.set(W,K));const ce=z(y);if(ce!==R.__cacheKey){K[ce]===void 0&&(K[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[ce].usedTimes++;const de=K[R.__cacheKey];de!==void 0&&(K[R.__cacheKey].usedTimes--,de.usedTimes===0&&N(y)),R.__cacheKey=ce,R.__webglTexture=K[ce].texture}return B}function le(R,y,B){return Math.floor(Math.floor(R/B)/y)}function se(R,y,B,W){const ce=R.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,B,W,y.data);else{ce.sort((Ce,me)=>Ce.start-me.start);let de=0;for(let Ce=1;Ce<ce.length;Ce++){const me=ce[de],he=ce[Ce],Pe=me.start+me.count,De=le(he.start,y.width,4),ze=le(me.start,y.width,4);he.start<=Pe+1&&De===ze&&le(he.start+he.count-1,y.width,4)===De?me.count=Math.max(me.count,he.start+he.count-me.start):(++de,ce[de]=he)}ce.length=de+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Ce=0,me=ce.length;Ce<me;Ce++){const he=ce[Ce],Pe=Math.floor(he.start/4),De=Math.ceil(he.count/4),ze=Pe%y.width,D=Math.floor(Pe/y.width),ue=De,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,ze,D,ue,J,B,W,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Ue(R,y,B){let W=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=t.TEXTURE_3D);const K=q(R,y),ce=y.source;n.bindTexture(W,R.__webglTexture,t.TEXTURE0+B);const de=i.get(ce);if(ce.version!==de.__version||K===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const J=Ye.getPrimaries(Ye.workingColorSpace),pe=y.colorSpace===qi?null:Ye.getPrimaries(y.colorSpace),_e=y.colorSpace===qi||J===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=v(y.image,!1,r.maxTextureSize);ee=rn(y,ee);const fe=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type);let me=S(y.internalFormat,fe,Ce,y.normalized,y.colorSpace,y.isVideoTexture);Ie(W,y);let he;const Pe=y.mipmaps,De=y.isVideoTexture!==!0,ze=de.__version===void 0||K===!0,D=ce.dataReady,ue=A(y,ee);if(y.isDepthTexture)me=w(y.format===Cr,y.type),ze&&(De?n.texStorage2D(t.TEXTURE_2D,1,me,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,me,ee.width,ee.height,0,fe,Ce,null));else if(y.isDataTexture)if(Pe.length>0){De&&ze&&n.texStorage2D(t.TEXTURE_2D,ue,me,Pe[0].width,Pe[0].height);for(let J=0,pe=Pe.length;J<pe;J++)he=Pe[J],De?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,he.width,he.height,fe,Ce,he.data):n.texImage2D(t.TEXTURE_2D,J,me,he.width,he.height,0,fe,Ce,he.data);y.generateMipmaps=!1}else De?(ze&&n.texStorage2D(t.TEXTURE_2D,ue,me,ee.width,ee.height),D&&se(y,ee,fe,Ce)):n.texImage2D(t.TEXTURE_2D,0,me,ee.width,ee.height,0,fe,Ce,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,me,Pe[0].width,Pe[0].height,ee.depth);for(let J=0,pe=Pe.length;J<pe;J++)if(he=Pe[J],y.format!==Gn)if(fe!==null)if(De){if(D)if(y.layerUpdates.size>0){const _e=Kp(he.width,he.height,y.format,y.type);for(const te of y.layerUpdates){const Ae=he.data.subarray(te*_e/he.data.BYTES_PER_ELEMENT,(te+1)*_e/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,te,he.width,he.height,1,fe,Ae)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,ee.depth,fe,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,me,he.width,he.height,ee.depth,0,he.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,ee.depth,fe,Ce,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,me,he.width,he.height,ee.depth,0,fe,Ce,he.data)}else{De&&ze&&n.texStorage2D(t.TEXTURE_2D,ue,me,Pe[0].width,Pe[0].height);for(let J=0,pe=Pe.length;J<pe;J++)he=Pe[J],y.format!==Gn?fe!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,he.width,he.height,fe,he.data):n.compressedTexImage2D(t.TEXTURE_2D,J,me,he.width,he.height,0,he.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,he.width,he.height,fe,Ce,he.data):n.texImage2D(t.TEXTURE_2D,J,me,he.width,he.height,0,fe,Ce,he.data)}else if(y.isDataArrayTexture)if(De){if(ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,me,ee.width,ee.height,ee.depth),D)if(y.layerUpdates.size>0){const J=Kp(ee.width,ee.height,y.format,y.type);for(const pe of y.layerUpdates){const _e=ee.data.subarray(pe*J/ee.data.BYTES_PER_ELEMENT,(pe+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,ee.width,ee.height,1,fe,Ce,_e)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Ce,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ee.width,ee.height,ee.depth,0,fe,Ce,ee.data);else if(y.isData3DTexture)De?(ze&&n.texStorage3D(t.TEXTURE_3D,ue,me,ee.width,ee.height,ee.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Ce,ee.data)):n.texImage3D(t.TEXTURE_3D,0,me,ee.width,ee.height,ee.depth,0,fe,Ce,ee.data);else if(y.isFramebufferTexture){if(ze)if(De)n.texStorage2D(t.TEXTURE_2D,ue,me,ee.width,ee.height);else{let J=ee.width,pe=ee.height;for(let _e=0;_e<ue;_e++)n.texImage2D(t.TEXTURE_2D,_e,me,J,pe,0,fe,Ce,null),J>>=1,pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),f.add(y),J.onpaint=pe=>{const _e=pe.changedElements;for(const te of f)_e.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const _e=t.RGBA,te=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,te,Ae,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&ze){const J=tt(Pe[0]);n.texStorage2D(t.TEXTURE_2D,ue,me,J.width,J.height)}for(let J=0,pe=Pe.length;J<pe;J++)he=Pe[J],De?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe,Ce,he):n.texImage2D(t.TEXTURE_2D,J,me,fe,Ce,he);y.generateMipmaps=!1}else if(De){if(ze){const J=tt(ee);n.texStorage2D(t.TEXTURE_2D,ue,me,J.width,J.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Ce,ee)}else n.texImage2D(t.TEXTURE_2D,0,me,fe,Ce,ee);d(y)&&x(W),de.__version=ce.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function oe(R,y,B){if(y.image.length!==6)return;const W=q(R,y),K=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const ce=i.get(K);if(K.version!==ce.__version||W===!0){n.activeTexture(t.TEXTURE0+B);const de=Ye.getPrimaries(Ye.workingColorSpace),Z=y.colorSpace===qi?null:Ye.getPrimaries(y.colorSpace),ee=y.colorSpace===qi||de===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ce=y.image[0]&&y.image[0].isDataTexture,me=[];for(let te=0;te<6;te++)!fe&&!Ce?me[te]=v(y.image[te],!0,r.maxCubemapSize):me[te]=Ce?y.image[te].image:y.image[te],me[te]=rn(y,me[te]);const he=me[0],Pe=s.convert(y.format,y.colorSpace),De=s.convert(y.type),ze=S(y.internalFormat,Pe,De,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,ue=ce.__version===void 0||W===!0,J=K.dataReady;let pe=A(y,he);Ie(t.TEXTURE_CUBE_MAP,y);let _e;if(fe){D&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,ze,he.width,he.height);for(let te=0;te<6;te++){_e=me[te].mipmaps;for(let Ae=0;Ae<_e.length;Ae++){const be=_e[Ae];y.format!==Gn?Pe!==null?D?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,be.width,be.height,Pe,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,ze,be.width,be.height,0,be.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,be.width,be.height,Pe,De,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,ze,be.width,be.height,0,Pe,De,be.data)}}}else{if(_e=y.mipmaps,D&&ue){_e.length>0&&pe++;const te=tt(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,ze,te.width,te.height)}for(let te=0;te<6;te++)if(Ce){D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,me[te].width,me[te].height,Pe,De,me[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,me[te].width,me[te].height,0,Pe,De,me[te].data);for(let Ae=0;Ae<_e.length;Ae++){const vt=_e[Ae].image[te].image;D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,vt.width,vt.height,Pe,De,vt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,ze,vt.width,vt.height,0,Pe,De,vt.data)}}else{D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,De,me[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,Pe,De,me[te]);for(let Ae=0;Ae<_e.length;Ae++){const be=_e[Ae];D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,Pe,De,be.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,ze,Pe,De,be.image[te])}}}d(y)&&x(t.TEXTURE_CUBE_MAP),ce.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ie(R,y,B,W,K,ce){const de=s.convert(B.format,B.colorSpace),Z=s.convert(B.type),ee=S(B.internalFormat,de,Z,B.normalized,B.colorSpace),fe=i.get(y),Ce=i.get(B);if(Ce.__renderTarget=y,!fe.__hasExternalTextures){const me=Math.max(1,y.width>>ce),he=Math.max(1,y.height>>ce);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,ce,ee,me,he,y.depth,0,de,Z,null):n.texImage2D(K,ce,ee,me,he,0,de,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,K,Ce.__webglTexture,0,xt(y)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,K,Ce.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(R,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const W=y.depthTexture,K=W&&W.isDepthTexture?W.type:null,ce=w(y.stencilBuffer,K),de=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(y),ce,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(y),ce,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ce,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,R)}else{const W=y.textures;for(let K=0;K<W.length;K++){const ce=W[K],de=s.convert(ce.format,ce.colorSpace),Z=s.convert(ce.type),ee=S(ce.internalFormat,de,Z,ce.normalized,ce.colorSpace);wt(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(y),ee,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(y),ee,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(R,y,B){const W=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,y.depthTexture);const fe=s.convert(y.depthTexture.format),Ce=s.convert(y.depthTexture.type);let me;y.depthTexture.format===Di?me=t.DEPTH_COMPONENT24:y.depthTexture.format===Cr&&(me=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,me,y.width,y.height,0,fe,Ce,null)}}else U(y.depthTexture,0);const ce=K.__webglTexture,de=xt(y),Z=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ee=y.depthTexture.format===Cr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Di)wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Z,ce,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ee,Z,ce,0);else if(y.depthTexture.format===Cr)wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Z,ce,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ee,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(R){const y=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=W}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)Le(y.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?Le(y.__webglFramebuffer[0],R,0):Le(y.__webglFramebuffer,R,0)}else if(B){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=t.createRenderbuffer(),we(y.__webglDepthbuffer[W],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ce)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),we(y.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(R,y,B){const W=i.get(R);y!==void 0&&ie(W.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&We(R)}function Ze(R){const y=R.texture,B=i.get(R),W=i.get(y);R.addEventListener("dispose",g);const K=R.textures,ce=R.isWebGLCubeRenderTarget===!0,de=K.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=y.version,a.memory.textures++),ce){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let ee=0;ee<y.mipmaps.length;ee++)B.__webglFramebuffer[Z][ee]=t.createFramebuffer()}else B.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)B.__webglFramebuffer[Z]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(de)for(let Z=0,ee=K.length;Z<ee;Z++){const fe=i.get(K[Z]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&wt(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const ee=K[Z];B.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const fe=s.convert(ee.format,ee.colorSpace),Ce=s.convert(ee.type),me=S(ee.internalFormat,fe,Ce,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),he=xt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),we(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ie(B.__webglFramebuffer[Z][ee],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else ie(B.__webglFramebuffer[Z],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(y)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let Z=0,ee=K.length;Z<ee;Z++){const fe=K[Z],Ce=i.get(fe);let me=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Ce.__webglTexture),Ie(me,fe),ie(B.__webglFramebuffer,R,fe,t.COLOR_ATTACHMENT0+Z,me,0),d(fe)&&x(me)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,W.__webglTexture),Ie(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ie(B.__webglFramebuffer[ee],R,y,t.COLOR_ATTACHMENT0,Z,ee);else ie(B.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,Z,0);d(y)&&x(Z),n.unbindTexture()}R.depthBuffer&&We(R)}function Tt(R){const y=R.textures;for(let B=0,W=y.length;B<W;B++){const K=y[B];if(d(K)){const ce=M(R),de=i.get(K).__webglTexture;n.bindTexture(ce,de),x(ce),n.unbindTexture()}}}const Rt=[],It=[];function kt(R){if(R.samples>0){if(wt(R)===!1){const y=R.textures,B=R.width,W=R.height;let K=t.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(R),Z=y.length>1;if(Z)for(let fe=0;fe<y.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Ce=i.get(y[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,B,W,0,0,B,W,K,t.NEAREST),l===!0&&(Rt.length=0,It.length=0,Rt.push(t.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Rt.push(ce),It.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,It)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let fe=0;fe<y.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Ce=i.get(y[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function xt(R){return Math.min(r.maxSamples,R.samples)}function wt(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function I(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function rn(R,y){const B=R.colorSpace,W=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Tl&&B!==qi&&(Ye.getTransfer(B)===nt?(W!==Gn||K!==_n)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",B)),y}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.getTextureUnits=$,this.setTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Xe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ST(t,e){function n(i,r=qi){let s;const a=Ye.getTransfer(r);if(i===_n)return t.UNSIGNED_BYTE;if(i===zf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Yx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wx)return t.BYTE;if(i===jx)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===Bf)return t.INT;if(i===ui)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===$x)return t.ALPHA;if(i===qx)return t.RGB;if(i===Gn)return t.RGBA;if(i===Di)return t.DEPTH_COMPONENT;if(i===Cr)return t.DEPTH_STENCIL;if(i===Kx)return t.RED;if(i===Hf)return t.RED_INTEGER;if(i===Or)return t.RG;if(i===Gf)return t.RG_INTEGER;if(i===Wf)return t.RGBA_INTEGER;if(i===$o||i===qo||i===Ko||i===Zo)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ld||i===cd||i===ud||i===dd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ld)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ud)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fd||i===hd||i===pd||i===md||i===gd||i===El||i===xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fd||i===hd)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===md)return s.COMPRESSED_R11_EAC;if(i===gd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===El)return s.COMPRESSED_RG11_EAC;if(i===xd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vd||i===_d||i===yd||i===Sd||i===Md||i===Ed||i===bd||i===Td||i===wd||i===Ad||i===Cd||i===Rd||i===Nd||i===Pd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_d)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Md)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ed)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Td)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ad)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ld||i===Dd||i===Id)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ld)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Id)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ud||i===Fd||i===bl||i===Od)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ud)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const MT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ET=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new s0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fi({vertexShader:MT,fragmentShader:ET,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new Xl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TT extends zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,_=null;const b=typeof XRWebGLBinding<"u",v=new bT,d={},x=n.getContextAttributes();let M=null,S=null;const w=[],A=[],E=new qe;let g=null;const C=new vn;C.viewport=new pt;const N=new vn;N.viewport=new pt;const P=[C,N],L=new US;let k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=w[q];return le===void 0&&(le=new Ic,w[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=w[q];return le===void 0&&(le=new Ic,w[q]=le),le.getGripSpace()},this.getHand=function(q){let le=w[q];return le===void 0&&(le=new Ic,w[q]=le),le.getHandSpace()};function O(q){const le=A.indexOf(q.inputSource);if(le===-1)return;const se=w[le];se!==void 0&&(se.update(q.inputSource,q.frame,c||a),se.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",z);for(let q=0;q<w.length;q++){const le=A[q];le!==null&&(A[q]=null,w[q].disconnect(le))}k=null,$=null,v.reset();for(const q in d)delete d[q];e.setRenderTarget(M),m=null,u=null,f=null,r=null,S=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ue=null,oe=null;x.depth&&(oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?Cr:Di,Ue=x.stencil?Ua:ui);const ie={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(ie),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new li(u.textureWidth,u.textureHeight,{format:Gn,type:_n,depthTexture:new Is(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new li(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(q){for(let le=0;le<q.removed.length;le++){const se=q.removed[le],Ue=A.indexOf(se);Ue>=0&&(A[Ue]=null,w[Ue].disconnect(se))}for(let le=0;le<q.added.length;le++){const se=q.added[le];let Ue=A.indexOf(se);if(Ue===-1){for(let ie=0;ie<w.length;ie++)if(ie>=A.length){A.push(se),Ue=ie;break}else if(A[ie]===null){A[ie]=se,Ue=ie;break}if(Ue===-1)break}const oe=w[Ue];oe&&oe.connect(se)}}const U=new H,j=new H;function Q(q,le,se){U.setFromMatrixPosition(le.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const Ue=U.distanceTo(j),oe=le.projectionMatrix.elements,ie=se.projectionMatrix.elements,we=oe[14]/(oe[10]-1),Le=oe[14]/(oe[10]+1),We=(oe[9]+1)/oe[5],Xe=(oe[9]-1)/oe[5],Ze=(oe[8]-1)/oe[0],Tt=(ie[8]+1)/ie[0],Rt=we*Ze,It=we*Tt,kt=Ue/(-Ze+Tt),xt=kt*-Ze;if(le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xt),q.translateZ(kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),oe[10]===-1)q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const wt=we+kt,I=Le+kt,rn=Rt-xt,tt=It+(Ue-xt),R=We*Le/I*wt,y=Xe*Le/I*wt;q.projectionMatrix.makePerspective(rn,tt,R,y,wt,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let le=q.near,se=q.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(se=v.depthFar)),L.near=N.near=C.near=le,L.far=N.far=C.far=se,(k!==L.near||$!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,$=L.far),L.layers.mask=q.layers.mask|6,C.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const Ue=q.parent,oe=L.cameras;ne(L,Ue);for(let ie=0;ie<oe.length;ie++)ne(oe[ie],Ue);oe.length===2?Q(L,C,N):L.projectionMatrix.copy(C.projectionMatrix),ae(q,L,Ue)};function ae(q,le,se){se===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(se.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(L)},this.getCameraTexture=function(q){return d[q]};let ke=null;function Be(q,le){if(h=le.getViewerPose(c||a),_=le,h!==null){const se=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ue=!1;se.length!==L.cameras.length&&(L.cameras.length=0,Ue=!0);for(let Le=0;Le<se.length;Le++){const We=se[Le];let Xe=null;if(m!==null)Xe=m.getViewport(We);else{const Tt=f.getViewSubImage(u,We);Xe=Tt.viewport,Le===0&&(e.setRenderTargetTextures(S,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(S))}let Ze=P[Le];Ze===void 0&&(Ze=new vn,Ze.layers.enable(Le),Ze.viewport=new pt,P[Le]=Ze),Ze.matrix.fromArray(We.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(We.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Le===0&&(L.matrix.copy(Ze.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ue===!0&&L.cameras.push(Ze)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const Le=f.getDepthInformation(se[0]);Le&&Le.isValid&&Le.texture&&v.init(Le,r.renderState)}if(oe&&oe.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let Le=0;Le<se.length;Le++){const We=se[Le].camera;if(We){let Xe=d[We];Xe||(Xe=new s0,d[We]=Xe);const Ze=f.getCameraImage(We);Xe.sourceTexture=Ze}}}}for(let se=0;se<w.length;se++){const Ue=A[se],oe=w[se];Ue!==null&&oe!==void 0&&oe.update(Ue,le,c||a)}ke&&ke(q,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ie=new u0;Ie.setAnimationLoop(Be),this.setAnimationLoop=function(q){ke=q},this.dispose=function(){}}}const wT=new St,x0=new Oe;x0.set(-1,0,0,0,1,0,0,0,1);function AT(t,e){function n(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,a0(t)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,x,M,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(v,d):d.isMeshLambertMaterial?(s(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(v,d),f(v,d)):d.isMeshPhongMaterial?(s(v,d),h(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(v,d),u(v,d),d.isMeshPhysicalMaterial&&m(v,d,S)):d.isMeshMatcapMaterial?(s(v,d),_(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),b(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(a(v,d),d.isLineDashedMaterial&&o(v,d)):d.isPointsMaterial?l(v,d,x,M):d.isSpriteMaterial?c(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,n(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===dn&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,n(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===dn&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,n(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,n(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const x=e.get(d),M=x.envMap,S=x.envMapRotation;M&&(v.envMap.value=M,v.envMapRotation.value.setFromMatrix4(wT.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(x0),v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,v.aoMapTransform))}function a(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform))}function o(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,x,M){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*x,v.scale.value=M*.5,d.map&&(v.map.value=d.map,n(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function h(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function f(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function u(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function m(v,d,x){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,d){d.matcap&&(v.matcap.value=d.matcap)}function b(v,d){const x=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const A=w.program;i.uniformBlockBinding(S,A)}function c(S,w){let A=r[S.id];A===void 0&&(v(S),A=h(S),r[S.id]=A,S.addEventListener("dispose",x));const E=w.program;i.updateUBOMapping(S,E);const g=e.render.frame;s[S.id]!==g&&(u(S),s[S.id]=g)}function h(S){const w=f();S.__bindingPointIndex=w;const A=t.createBuffer(),E=S.__size,g=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,E,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,A),A}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=r[S.id],A=S.uniforms,E=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let g=0,C=A.length;g<C;g++){const N=A[g];if(Array.isArray(N))for(let P=0,L=N.length;P<L;P++)m(N[P],g,P,E);else m(N,g,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,w,A,E){if(b(S,w,A,E)===!0){const g=S.__offset,C=S.value;if(Array.isArray(C)){let N=0;for(let P=0;P<C.length;P++){const L=C[P],k=d(L);_(L,S.__data,N),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,S.__data)}}function _(S,w,A){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,A)}function b(S,w,A,E){const g=S.value,C=w+"_"+A;if(E[C]===void 0)return typeof g=="number"||typeof g=="boolean"?E[C]=g:ArrayBuffer.isView(g)?E[C]=g.slice():E[C]=g.clone(),!0;{const N=E[C];if(typeof g=="number"||typeof g=="boolean"){if(N!==g)return E[C]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(N.equals(g)===!1)return N.copy(g),!0}}return!1}function v(S){const w=S.uniforms;let A=0;const E=16;for(let C=0,N=w.length;C<N;C++){const P=Array.isArray(w[C])?w[C]:[w[C]];for(let L=0,k=P.length;L<k;L++){const $=P[L],O=Array.isArray($.value)?$.value:[$.value];for(let Y=0,z=O.length;Y<z;Y++){const U=O[Y],j=d(U),Q=A%E,ne=Q%j.boundary,ae=Q+ne;A+=ne,ae!==0&&E-ae<j.storage&&(A+=E-ae),$.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=j.storage}}}const g=A%E;return g>0&&(A+=E-g),S.__size=A,S.__cache={},this}function d(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",S),w}function x(S){const w=S.target;w.removeEventListener("dispose",x);const A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const RT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function NT(){return Qn===null&&(Qn=new xS(RT,16,16,Or,Li),Qn.name="DFG_LUT",Qn.minFilter=qt,Qn.magFilter=qt,Qn.wrapS=bi,Qn.wrapT=bi,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class PT{constructor(e={}){const{canvas:n=Yy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=_n}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const b=m,v=new Set([Wf,Gf,Hf]),d=new Set([_n,ui,Ia,Ua,zf,Vf]),x=new Uint32Array(4),M=new Int32Array(4),S=new H;let w=null,A=null;const E=[],g=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,L=null,k=null,$=null,O=null;this._outputColorSpace=An;let Y=0,z=0,U=null,j=-1,Q=null;const ne=new pt,ae=new pt;let ke=null;const Be=new Ke(0);let Ie=0,q=n.width,le=n.height,se=1,Ue=null,oe=null;const ie=new pt(0,0,q,le),we=new pt(0,0,q,le);let Le=!1;const We=new qf;let Xe=!1,Ze=!1;const Tt=new St,Rt=new H,It=new pt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function wt(){return U===null?se:1}let I=i;function rn(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",Yn,!1),I===null){const F="webgl2";if(I=rn(F,T),I===null)throw rn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Je("WebGLRenderer: "+T.message),T}let tt,R,y,B,W,K,ce,de,Z,ee,fe,Ce,me,he,Pe,De,ze,D,ue,J,pe,_e,te;function Ae(){tt=new N1(I),tt.init(),pe=new ST(I,tt),R=new M1(I,tt,e,pe),y=new _T(I,tt),R.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),k=I.createFramebuffer(),$=I.createFramebuffer(),O=I.createFramebuffer(),B=new D1(I),W=new sT,K=new yT(I,tt,y,W,R,pe,B),ce=new R1(N),de=new OS(I),_e=new y1(I,de),Z=new P1(I,de,B,_e),ee=new U1(I,Z,de,_e,B),D=new I1(I,R,K),Pe=new E1(W),fe=new rT(N,ce,tt,R,_e,Pe),Ce=new AT(N,W),me=new oT,he=new hT(tt),ze=new _1(N,ce,y,ee,_,l),De=new vT(N,ee,R),te=new CT(I,B,R,y),ue=new S1(I,tt,B),J=new L1(I,tt,B),B.programs=fe.programs,N.capabilities=R,N.extensions=tt,N.properties=W,N.renderLists=me,N.shadowMap=De,N.state=y,N.info=B}Ae(),b!==_n&&(C=new O1(b,n.width,n.height,o,r,s));const be=new TT(N,I);this.xr=be,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(q,le,!1))},this.getSize=function(T){return T.set(q,le)},this.setSize=function(T,F,X=!0){if(be.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,le=F,n.width=Math.floor(T*se),n.height=Math.floor(F*se),X===!0&&(n.style.width=T+"px",n.style.height=F+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(q*se,le*se).floor()},this.setDrawingBufferSize=function(T,F,X){q=T,le=F,se=X,n.width=Math.floor(T*X),n.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(b===_n){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ne)},this.getViewport=function(T){return T.copy(ie)},this.setViewport=function(T,F,X,V){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,F,X,V),y.viewport(ne.copy(ie).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(we)},this.setScissor=function(T,F,X,V){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,F,X,V),y.scissor(ae.copy(we).multiplyScalar(se).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(T){y.setScissorTest(Le=T)},this.setOpaqueSort=function(T){Ue=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,X=!0){let V=0;if(T){let G=!1;if(U!==null){const ve=U.texture.format;G=v.has(ve)}if(G){const ve=U.texture.type,Se=d.has(ve),xe=ze.getClearColor(),Te=ze.getClearAlpha(),Re=xe.r,Ve=xe.g,Ge=xe.b;Se?(x[0]=Re,x[1]=Ve,x[2]=Ge,x[3]=Te,I.clearBufferuiv(I.COLOR,0,x)):(M[0]=Re,M[1]=Ve,M[2]=Ge,M[3]=Te,I.clearBufferiv(I.COLOR,0,M))}else V|=I.COLOR_BUFFER_BIT}F&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",Yn,!1),ze.dispose(),me.dispose(),he.dispose(),W.dispose(),ce.dispose(),ee.dispose(),_e.dispose(),te.dispose(),fe.dispose(),be.dispose(),be.removeEventListener("sessionstart",ih),be.removeEventListener("sessionend",rh),pr.stop()};function vt(T){T.preventDefault(),Rp("WebGLRenderer: Context Lost."),P=!0}function ot(){Rp("WebGLRenderer: Context Restored."),P=!1;const T=B.autoReset,F=De.enabled,X=De.autoUpdate,V=De.needsUpdate,G=De.type;Ae(),B.autoReset=T,De.enabled=F,De.autoUpdate=X,De.needsUpdate=V,De.type=G}function Yn(T){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $n(T){const F=T.target;F.removeEventListener("dispose",$n),v0(F)}function v0(T){_0(T),W.remove(T)}function _0(T){const F=W.get(T).programs;F!==void 0&&(F.forEach(function(X){fe.releaseProgram(X)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,V,G,ve){F===null&&(F=kt);const Se=G.isMesh&&G.matrixWorld.determinantAffine()<0,xe=M0(T,F,X,V,G);y.setMaterial(V,Se);let Te=X.index,Re=1;if(V.wireframe===!0){if(Te=Z.getWireframeAttribute(X),Te===void 0)return;Re=2}const Ve=X.drawRange,Ge=X.attributes.position;let Ne=Ve.start*Re,rt=(Ve.start+Ve.count)*Re;ve!==null&&(Ne=Math.max(Ne,ve.start*Re),rt=Math.min(rt,(ve.start+ve.count)*Re)),Te!==null?(Ne=Math.max(Ne,0),rt=Math.min(rt,Te.count)):Ge!=null&&(Ne=Math.max(Ne,0),rt=Math.min(rt,Ge.count));const Mt=rt-Ne;if(Mt<0||Mt===1/0)return;_e.setup(G,V,xe,X,Te);let _t,st=ue;if(Te!==null&&(_t=de.get(Te),st=J,st.setIndex(_t)),G.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*wt()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(G.isLine){let Gt=V.linewidth;Gt===void 0&&(Gt=1),y.setLineWidth(Gt*wt()),G.isLineSegments?st.setMode(I.LINES):G.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else G.isPoints?st.setMode(I.POINTS):G.isSprite&&st.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Gt=G._multiDrawStarts,ye=G._multiDrawCounts,pn=G._multiDrawCount,Qe=Te?de.get(Te).bytesPerElement:1,Tn=W.get(V).currentProgram.getUniforms();for(let qn=0;qn<pn;qn++)Tn.setValue(I,"_gl_DrawID",qn),st.render(Gt[qn]/Qe,ye[qn])}else if(G.isInstancedMesh)st.renderInstances(Ne,Mt,G.count);else if(X.isInstancedBufferGeometry){const Gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ye=Math.min(X.instanceCount,Gt);st.renderInstances(Ne,Mt,ye)}else st.render(Ne,Mt)};function nh(T,F,X){T.transparent===!0&&T.side===Si&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,Ya(T,F,X),T.side=cr,T.needsUpdate=!0,Ya(T,F,X),T.side=Si):Ya(T,F,X)}this.compile=function(T,F,X=null){X===null&&(X=T),A=he.get(X),A.init(F),g.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const V=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){const xe=ve[Se];nh(xe,X,G),V.add(xe)}else nh(ve,X,G),V.add(ve)}),A=g.pop(),V},this.compileAsync=function(T,F,X=null){const V=this.compile(T,F,X);return new Promise(G=>{function ve(){if(V.forEach(function(Se){W.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){G(T);return}setTimeout(ve,10)}tt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ql=null;function y0(T){ql&&ql(T)}function ih(){pr.stop()}function rh(){pr.start()}const pr=new u0;pr.setAnimationLoop(y0),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(T){ql=T,be.setAnimationLoop(T),T===null?pr.stop():pr.start()},be.addEventListener("sessionstart",ih),be.addEventListener("sessionend",rh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(T,F);const X=be.enabled===!0&&be.isPresenting===!0,V=C!==null&&(U===null||X)&&C.begin(N,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,F,U),A=he.get(T,g.length),A.init(F),A.state.textureUnits=K.getTextureUnits(),g.push(A),Tt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),We.setFromProjectionMatrix(Tt,ri,F.reversedDepth),Ze=this.localClippingEnabled,Xe=Pe.init(this.clippingPlanes,Ze),w=me.get(T,E.length),w.init(),E.push(w),be.enabled===!0&&be.isPresenting===!0){const Se=N.xr.getDepthSensingMesh();Se!==null&&Kl(Se,F,-1/0,N.sortObjects)}Kl(T,F,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(Ue,oe,F.reversedDepth),xt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,xt&&ze.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Pe.beginShadows();const G=A.state.shadowsArray;if(De.render(G,T,F),Xe===!0&&Pe.endShadows(),(V&&C.hasRenderPass())===!1){const Se=w.opaque,xe=w.transmissive;if(A.setupLights(),F.isArrayCamera){const Te=F.cameras;if(xe.length>0)for(let Re=0,Ve=Te.length;Re<Ve;Re++){const Ge=Te[Re];ah(Se,xe,T,Ge)}xt&&ze.render(T);for(let Re=0,Ve=Te.length;Re<Ve;Re++){const Ge=Te[Re];sh(w,T,Ge,Ge.viewport)}}else xe.length>0&&ah(Se,xe,T,F),xt&&ze.render(T),sh(w,T,F)}U!==null&&z===0&&(K.updateMultisampleRenderTarget(U),K.updateRenderTargetMipmap(U)),V&&C.end(N),T.isScene===!0&&T.onAfterRender(N,T,F),_e.resetDefaultState(),j=-1,Q=null,g.pop(),g.length>0?(A=g[g.length-1],K.setTextureUnits(A.state.textureUnits),Xe===!0&&Pe.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?w=E[E.length-1]:w=null,L!==null&&L.renderEnd()};function Kl(T,F,X,V){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)A.pushLightProbeGrid(T);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||We.intersectsSprite(T)){V&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Tt);const Se=ee.update(T),xe=T.material;xe.visible&&w.push(T,Se,xe,X,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||We.intersectsObject(T))){const Se=ee.update(T),xe=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),It.copy(Se.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(Tt)),Array.isArray(xe)){const Te=Se.groups;for(let Re=0,Ve=Te.length;Re<Ve;Re++){const Ge=Te[Re],Ne=xe[Ge.materialIndex];Ne&&Ne.visible&&w.push(T,Se,Ne,X,It.z,Ge)}}else xe.visible&&w.push(T,Se,xe,X,It.z,null)}}const ve=T.children;for(let Se=0,xe=ve.length;Se<xe;Se++)Kl(ve[Se],F,X,V)}function sh(T,F,X,V){const{opaque:G,transmissive:ve,transparent:Se}=T;A.setupLightsView(X),Xe===!0&&Pe.setGlobalState(N.clippingPlanes,X),V&&y.viewport(ne.copy(V)),G.length>0&&Xa(G,F,X),ve.length>0&&Xa(ve,F,X),Se.length>0&&Xa(Se,F,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ah(T,F,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){const Ne=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new li(1,1,{generateMipmaps:!0,type:Ne?Li:_n,minFilter:Ar,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ve=A.state.transmissionRenderTarget[V.id],Se=V.viewport||ne;ve.setSize(Se.z*N.transmissionResolutionScale,Se.w*N.transmissionResolutionScale);const xe=N.getRenderTarget(),Te=N.getActiveCubeFace(),Re=N.getActiveMipmapLevel();N.setRenderTarget(ve),N.getClearColor(Be),Ie=N.getClearAlpha(),Ie<1&&N.setClearColor(16777215,.5),N.clear(),xt&&ze.render(X);const Ve=N.toneMapping;N.toneMapping=oi;const Ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),Xe===!0&&Pe.setGlobalState(N.clippingPlanes,V),Xa(T,X,V),K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let rt=0,Mt=F.length;rt<Mt;rt++){const _t=F[rt],{object:st,geometry:Gt,material:ye,group:pn}=_t;if(ye.side===Si&&st.layers.test(V.layers)){const Qe=ye.side;ye.side=dn,ye.needsUpdate=!0,oh(st,X,V,Gt,ye,pn),ye.side=Qe,ye.needsUpdate=!0,Ne=!0}}Ne===!0&&(K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve))}N.setRenderTarget(xe,Te,Re),N.setClearColor(Be,Ie),Ge!==void 0&&(V.viewport=Ge),N.toneMapping=Ve}function Xa(T,F,X){const V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ve=T.length;G<ve;G++){const Se=T[G],{object:xe,geometry:Te,group:Re}=Se;let Ve=Se.material;Ve.allowOverride===!0&&V!==null&&(Ve=V),xe.layers.test(X.layers)&&oh(xe,F,X,Te,Ve,Re)}}function oh(T,F,X,V,G,ve){T.onBeforeRender(N,F,X,V,G,ve),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(N,F,X,V,T,ve),G.transparent===!0&&G.side===Si&&G.forceSinglePass===!1?(G.side=dn,G.needsUpdate=!0,N.renderBufferDirect(X,F,V,G,T,ve),G.side=cr,G.needsUpdate=!0,N.renderBufferDirect(X,F,V,G,T,ve),G.side=Si):N.renderBufferDirect(X,F,V,G,T,ve),T.onAfterRender(N,F,X,V,G,ve)}function Ya(T,F,X){F.isScene!==!0&&(F=kt);const V=W.get(T),G=A.state.lights,ve=A.state.shadowsArray,Se=G.state.version,xe=fe.getParameters(T,G.state,ve,F,X,A.state.lightProbeGridArray),Te=fe.getProgramCacheKey(xe);let Re=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const Ve=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=ce.get(T.envMap||V.environment,Ve),V.envMapRotation=V.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",$n),Re=new Map,V.programs=Re);let Ge=Re.get(Te);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===Se)return ch(T,xe),Ge}else xe.uniforms=fe.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,X,xe),T.onBeforeCompile(xe,N),Ge=fe.acquireProgram(xe,Te),Re.set(Te,Ge),V.uniforms=xe.uniforms;const Ne=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=Pe.uniform),ch(T,xe),V.needsLights=b0(T),V.lightsStateVersion=Se,V.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=A.state.lightProbeGridArray.length>0,V.currentProgram=Ge,V.uniformsList=null,Ge}function lh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Qo.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ch(T,F){const X=W.get(T);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function S0(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let X=0,V=T.length;X<V;X++){const G=T[X];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function M0(T,F,X,V,G){F.isScene!==!0&&(F=kt),K.resetTextureUnits();const ve=F.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,xe=U===null?N.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ye.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=ce.get(V.envMap||Se,Te),Ve=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let _t=oi;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_t=N.toneMapping);const st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Gt=st!==void 0?st.length:0,ye=W.get(V),pn=A.state.lights;if(Xe===!0&&(Ze===!0||T!==Q)){const lt=T===Q&&V.id===j;Pe.setState(V,T,lt)}let Qe=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==pn.state.version||ye.outputColorSpace!==xe||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Re||V.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Pe.numPlanes||ye.numIntersection!==Pe.numIntersection)||ye.vertexAlphas!==Ve||ye.vertexTangents!==Ge||ye.morphTargets!==Ne||ye.morphNormals!==rt||ye.morphColors!==Mt||ye.toneMapping!==_t||ye.morphTargetsCount!==Gt||!!ye.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ye.__version=V.version);let Tn=ye.currentProgram;Qe===!0&&(Tn=Ya(V,F,G),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Tn,ye));let qn=!1,Ui=!1,Vr=!1;const at=Tn.getUniforms(),Et=ye.uniforms;if(y.useProgram(Tn.program)&&(qn=!0,Ui=!0,Vr=!0),V.id!==j&&(j=V.id,Ui=!0),ye.needsLights){const lt=S0(A.state.lightProbeGridArray,G);ye.lightProbeGrid!==lt&&(ye.lightProbeGrid=lt,Ui=!0)}if(qn||Q!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),at.setValue(I,"projectionMatrix",T.projectionMatrix),at.setValue(I,"viewMatrix",T.matrixWorldInverse);const Oi=at.map.cameraPosition;Oi!==void 0&&Oi.setValue(I,Rt.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,Ui=!0,Vr=!0)}if(ye.needsLights&&(pn.state.directionalShadowMap.length>0&&at.setValue(I,"directionalShadowMap",pn.state.directionalShadowMap,K),pn.state.spotShadowMap.length>0&&at.setValue(I,"spotShadowMap",pn.state.spotShadowMap,K),pn.state.pointShadowMap.length>0&&at.setValue(I,"pointShadowMap",pn.state.pointShadowMap,K)),G.isSkinnedMesh){at.setOptional(I,G,"bindMatrix"),at.setOptional(I,G,"bindMatrixInverse");const lt=G.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(I,"boneTexture",lt.boneTexture,K))}G.isBatchedMesh&&(at.setOptional(I,G,"batchingTexture"),at.setValue(I,"batchingTexture",G._matricesTexture,K),at.setOptional(I,G,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",G._indirectTexture,K),at.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",G._colorsTexture,K));const Fi=X.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&D.update(G,X,Tn),(Ui||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,at.setValue(I,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Et.envMapIntensity.value=F.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=NT()),Ui){if(at.setValue(I,"toneMappingExposure",N.toneMappingExposure),ye.needsLights&&E0(Et,Vr),ve&&V.fog===!0&&Ce.refreshFogUniforms(Et,ve),Ce.refreshMaterialUniforms(Et,V,se,le,A.state.transmissionRenderTarget[T.id]),ye.needsLights&&ye.lightProbeGrid){const lt=ye.lightProbeGrid;Et.probesSH.value=lt.texture,Et.probesMin.value.copy(lt.boundingBox.min),Et.probesMax.value.copy(lt.boundingBox.max),Et.probesResolution.value.copy(lt.resolution)}Qo.upload(I,lh(ye),Et,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Qo.upload(I,lh(ye),Et,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(I,"center",G.center),at.setValue(I,"modelViewMatrix",G.modelViewMatrix),at.setValue(I,"normalMatrix",G.normalMatrix),at.setValue(I,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const lt=V.uniformsGroups;for(let Oi=0,Hr=lt.length;Oi<Hr;Oi++){const uh=lt[Oi];te.update(uh,Tn),te.bind(uh,Tn)}}return Tn}function E0(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function b0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,F,X){const V=W.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=F,W.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const X=W.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,X=0){U=T,Y=F,z=X;let V=null,G=!1,ve=!1;if(T){const xe=W.get(T);if(xe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(T.viewport),ae.copy(T.scissor),ke=T.scissorTest,y.viewport(ne),y.scissor(ae),y.setScissorTest(ke),j=-1;return}else if(xe.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(xe.__hasExternalTextures)K.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ve=T.depthTexture;if(xe.__boundDepthTexture!==Ve){if(Ve!==null&&W.has(Ve)&&(T.width!==Ve.image.width||T.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Re=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?V=Re[F][X]:V=Re[F],G=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?V=W.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[X]:V=Re,ne.copy(T.viewport),ae.copy(T.scissor),ke=T.scissorTest}else ne.copy(ie).multiplyScalar(se).floor(),ae.copy(we).multiplyScalar(se).floor(),ke=Le;if(X!==0&&(V=k),y.bindFramebuffer(I.FRAMEBUFFER,V)&&y.drawBuffers(T,V),y.viewport(ne),y.scissor(ae),y.setScissorTest(ke),G){const xe=W.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,X)}else if(ve){const xe=F;for(let Te=0;Te<T.textures.length;Te++){const Re=W.get(T.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,Re.__webglTexture,X,xe)}}else if(T!==null&&X!==0){const xe=W.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,X)}j=-1},this.readRenderTargetPixels=function(T,F,X,V,G,ve,Se,xe=0){if(!(T&&T.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){y.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Re=T.textures[xe],Ve=Re.format,Ge=Re.type;if(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(Ve)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ge)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-V&&X>=0&&X<=T.height-G&&I.readPixels(F,X,V,G,pe.convert(Ve),pe.convert(Ge),ve)}finally{const Re=U!==null?W.get(U).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,F,X,V,G,ve,Se,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(F>=0&&F<=T.width-V&&X>=0&&X<=T.height-G){y.bindFramebuffer(I.FRAMEBUFFER,Te);const Re=T.textures[xe],Ve=Re.format,Ge=Re.type;if(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(F,X,V,G,pe.convert(Ve),pe.convert(Ge),0);const rt=U!==null?W.get(U).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,rt);const Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $y(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.deleteBuffer(Ne),I.deleteSync(Mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,X=0){const V=Math.pow(2,-X),G=Math.floor(T.image.width*V),ve=Math.floor(T.image.height*V),Se=F!==null?F.x:0,xe=F!==null?F.y:0;K.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Se,xe,G,ve),y.unbindTexture()},this.copyTextureToTexture=function(T,F,X=null,V=null,G=0,ve=0){let Se,xe,Te,Re,Ve,Ge,Ne,rt,Mt;const _t=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(X!==null)Se=X.max.x-X.min.x,xe=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Ve=X.min.y,Ge=X.isBox3?X.min.z:0;else{const Et=Math.pow(2,-G);Se=Math.floor(_t.width*Et),xe=Math.floor(_t.height*Et),T.isDataArrayTexture?Te=_t.depth:T.isData3DTexture?Te=Math.floor(_t.depth*Et):Te=1,Re=0,Ve=0,Ge=0}V!==null?(Ne=V.x,rt=V.y,Mt=V.z):(Ne=0,rt=0,Mt=0);const st=pe.convert(F.format),Gt=pe.convert(F.type);let ye;F.isData3DTexture?(K.setTexture3D(F,0),ye=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),ye=I.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),ye=I.TEXTURE_2D),y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const pn=y.getParameter(I.UNPACK_ROW_LENGTH),Qe=y.getParameter(I.UNPACK_IMAGE_HEIGHT),Tn=y.getParameter(I.UNPACK_SKIP_PIXELS),qn=y.getParameter(I.UNPACK_SKIP_ROWS),Ui=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),y.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),y.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const Vr=T.isDataArrayTexture||T.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Et=W.get(T),Fi=W.get(F),lt=W.get(Et.__renderTarget),Oi=W.get(Fi.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,lt.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Hr=0;Hr<Te;Hr++)Vr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(T).__webglTexture,G,Ge+Hr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(F).__webglTexture,ve,Mt+Hr)),I.blitFramebuffer(Re,Ve,Se,xe,Ne,rt,Se,xe,I.DEPTH_BUFFER_BIT,I.NEAREST);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||W.has(T)){const Et=W.get(T),Fi=W.get(F);y.bindFramebuffer(I.READ_FRAMEBUFFER,$),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let lt=0;lt<Te;lt++)Vr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.__webglTexture,G,Ge+lt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Et.__webglTexture,G),at?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fi.__webglTexture,ve,Mt+lt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fi.__webglTexture,ve),G!==0?I.blitFramebuffer(Re,Ve,Se,xe,Ne,rt,Se,xe,I.COLOR_BUFFER_BIT,I.NEAREST):at?I.copyTexSubImage3D(ye,ve,Ne,rt,Mt+lt,Re,Ve,Se,xe):I.copyTexSubImage2D(ye,ve,Ne,rt,Re,Ve,Se,xe);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else at?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(ye,ve,Ne,rt,Mt,Se,xe,Te,st,Gt,_t.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,ve,Ne,rt,Mt,Se,xe,Te,st,_t.data):I.texSubImage3D(ye,ve,Ne,rt,Mt,Se,xe,Te,st,Gt,_t):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,Ne,rt,Se,xe,st,Gt,_t.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,Ne,rt,_t.width,_t.height,st,_t.data):I.texSubImage2D(I.TEXTURE_2D,ve,Ne,rt,Se,xe,st,Gt,_t);y.pixelStorei(I.UNPACK_ROW_LENGTH,pn),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Tn),y.pixelStorei(I.UNPACK_SKIP_ROWS,qn),y.pixelStorei(I.UNPACK_SKIP_IMAGES,Ui),ve===0&&F.generateMipmaps&&I.generateMipmap(ye),y.unbindTexture()},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){Y=0,z=0,U=null,y.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}const LT=()=>{const{login:t,register:e}=hn(),[n,i]=Ee.useState("admin@nexus.finance"),[r,s]=Ee.useState("admin123"),[a,o]=Ee.useState(!1),[l,c]=Ee.useState(!0),[h,f]=Ee.useState(!1),[u,m]=Ee.useState(!1),[_,b]=Ee.useState(""),[v,d]=Ee.useState("staff"),x=Ee.useRef(null),M=Ee.useRef(null);Ee.useEffect(()=>{const w=x.current;if(!w)return;let A;const E=w.getContext("webgl")||w.getContext("experimental-webgl");if(!E)return;const g=`
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `,C=`
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = v_texCoord;
        float noise = sin(uv.x * 3.0 + u_time * 0.5) * cos(uv.y * 2.0 - u_time * 0.3);
        
        vec3 color1 = vec3(0.039, 0.039, 0.059); // #0a0a0f
        vec3 color2 = vec3(0.071, 0.071, 0.102); // #12121a
        vec3 accent = vec3(0.0, 0.839, 0.561) * 0.06; // Faint green glow
        
        vec3 finalColor = mix(color1, color2, uv.y + noise * 0.2);
        finalColor += accent * (1.0 - distance(uv, vec2(0.5)));
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,N=(Be,Ie)=>{const q=E.createShader(Be);return q?(E.shaderSource(q,Ie),E.compileShader(q),q):null},P=N(E.VERTEX_SHADER,g),L=N(E.FRAGMENT_SHADER,C);if(!P||!L)return;const k=E.createProgram();if(!k)return;E.attachShader(k,P),E.attachShader(k,L),E.linkProgram(k),E.useProgram(k);const $=E.createBuffer();E.bindBuffer(E.ARRAY_BUFFER,$),E.bufferData(E.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),E.STATIC_DRAW);const O=E.getAttribLocation(k,"a_position");E.enableVertexAttribArray(O),E.vertexAttribPointer(O,2,E.FLOAT,!1,0,0);const Y=E.getUniformLocation(k,"u_time"),z=E.getUniformLocation(k,"u_resolution"),U=E.getUniformLocation(k,"u_mouse"),j={x:window.innerWidth/2,y:window.innerHeight/2},Q=Be=>{const Ie=w.getBoundingClientRect();Ie.width&&Ie.height&&(j.x=Be.clientX-Ie.left,j.y=Ie.height-(Be.clientY-Ie.top))};window.addEventListener("mousemove",Q);const ne=()=>{const Be=w.clientWidth||1280,Ie=w.clientHeight||720;(w.width!==Be||w.height!==Ie)&&(w.width=Be,w.height=Ie)};let ae=null;typeof ResizeObserver<"u"&&(ae=new ResizeObserver(ne),ae.observe(w)),ne();const ke=Be=>{ne(),E.viewport(0,0,w.width,w.height),Y&&E.uniform1f(Y,Be*.001),z&&E.uniform2f(z,w.width,w.height),U&&E.uniform2f(U,j.x,j.y),E.drawArrays(E.TRIANGLE_STRIP,0,4),A=requestAnimationFrame(ke)};return A=requestAnimationFrame(ke),()=>{window.removeEventListener("mousemove",Q),ae&&ae.disconnect(),cancelAnimationFrame(A),E.deleteProgram(k),E.deleteShader(P),E.deleteShader(L),E.deleteBuffer($)}},[]),Ee.useEffect(()=>{const w=M.current;if(!w)return;const A=w.clientWidth||256,E=w.clientHeight||256,g=new uS,C=new vn(75,A/E,.1,1e3),N=new PT({alpha:!0,antialias:!0});N.setSize(A,E),N.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.innerHTML="",w.appendChild(N.domElement);const P=new Kf(2,2,.4,32),L=new AS({color:54927,shininess:100,transparent:!0,opacity:.85}),k=new di(P,L);k.rotation.x=Math.PI/2,g.add(k);const $=new LS(16777215,1.5,100);$.position.set(5,5,5),g.add($);const O=new DS(4210752,1.2);g.add(O),C.position.z=7;let Y;const z=()=>{Y=requestAnimationFrame(z),k.rotation.z+=.01,k.rotation.y+=.006,N.render(g,C)};z();const U=()=>{if(!w)return;const j=w.clientWidth||256,Q=w.clientHeight||256;C.aspect=j/Q,C.updateProjectionMatrix(),N.setSize(j,Q)};return window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U),cancelAnimationFrame(Y),P.dispose(),L.dispose(),N.dispose(),w.contains(N.domElement)&&w.removeChild(N.domElement)}},[]);const S=async w=>{if(w.preventDefault(),f(!0),u){const A=await e(_,n,r,v);f(!1),A.success&&(m(!1),b(""),i(""),s(""))}else await t(n,r),f(!1)};return p.jsxs("div",{className:"h-screen w-screen flex items-center justify-center relative bg-surface-container-lowest overflow-hidden select-none",children:[p.jsx("div",{className:"absolute inset-0 w-full h-full z-0 opacity-45 pointer-events-none",children:p.jsx("canvas",{ref:x,className:"w-full h-full block"})}),p.jsx("div",{className:"absolute right-[10%] top-[20%] w-64 h-64 z-10 hidden md:block opacity-85 pointer-events-none",children:p.jsx("div",{ref:M,className:"w-full h-full"})}),p.jsxs("main",{className:"relative z-20 w-full max-w-md px-margin-mobile md:px-0",children:[p.jsxs("div",{className:"text-center mb-xl",children:[p.jsxs("h1",{className:"font-display-lg text-display-lg text-primary-fixed mb-xs flex items-center justify-center gap-2",children:[p.jsx("span",{className:"material-symbols-outlined text-4xl text-primary",children:"account_balance"}),"Nexus Finance"]}),p.jsx("p",{className:"font-body-lg text-body-lg text-on-surface-variant",children:u?"Register New Account":"Secure Enterprise Access"})]}),p.jsxs("div",{className:"glass-panel rounded-xl p-md md:p-lg shadow-2xl bg-[#12121a]/85 backdrop-blur-xl border border-[#2a2a3e]",children:[p.jsxs("form",{className:"space-y-sm",onSubmit:S,children:[u&&p.jsxs("div",{children:[p.jsx("label",{className:"block font-label-md text-label-md text-on-surface-variant mb-xs",htmlFor:"name",children:"NAMA LENGKAP"}),p.jsxs("div",{className:"relative",children:[p.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-xs pointer-events-none",children:p.jsx("span",{className:"material-symbols-outlined text-outline-variant text-[20px]",children:"badge"})}),p.jsx("input",{id:"name",type:"text",value:_,onChange:w=>b(w.target.value),placeholder:"Masukkan nama lengkap",className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded pl-xl pr-sm py-xs text-on-surface font-body-md transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/40",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block font-label-md text-label-md text-on-surface-variant mb-xs",htmlFor:"username",children:"EMAIL / USERNAME"}),p.jsxs("div",{className:"relative",children:[p.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-xs pointer-events-none",children:p.jsx("span",{className:"material-symbols-outlined text-outline-variant text-[20px]",children:"mail"})}),p.jsx("input",{id:"username",type:"text",value:n,onChange:w=>i(w.target.value),placeholder:"Enter email or username",className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded pl-xl pr-sm py-xs text-on-surface font-body-md transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/40",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block font-label-md text-label-md text-on-surface-variant mb-xs mt-sm",htmlFor:"password",children:"PASSWORD"}),p.jsxs("div",{className:"relative",children:[p.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-xs pointer-events-none",children:p.jsx("span",{className:"material-symbols-outlined text-outline-variant text-[20px]",children:"lock"})}),p.jsx("input",{id:"password",type:a?"text":"password",value:r,onChange:w=>s(w.target.value),placeholder:"Enter password",className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded pl-xl pr-xl py-xs text-on-surface font-body-md transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/40",required:!0}),p.jsx("button",{type:"button",onClick:()=>o(w=>!w),className:"absolute inset-y-0 right-0 flex items-center pr-xs text-outline-variant hover:text-primary transition-colors cursor-pointer","aria-label":a?"Hide password":"Show password",children:p.jsx("span",{className:"material-symbols-outlined text-[20px]",children:a?"visibility_off":"visibility"})})]})]}),u&&p.jsxs("div",{children:[p.jsx("label",{className:"block font-label-md text-label-md text-on-surface-variant mb-xs mt-sm",htmlFor:"role",children:"ROLE (HAK AKSES)"}),p.jsxs("div",{className:"relative",children:[p.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-xs pointer-events-none",children:p.jsx("span",{className:"material-symbols-outlined text-outline-variant text-[20px]",children:"admin_panel_settings"})}),p.jsxs("select",{id:"role",value:v,onChange:w=>d(w.target.value),className:"w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded pl-xl pr-sm py-xs text-on-surface font-body-md transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 cursor-pointer",children:[p.jsx("option",{value:"staff",children:"Staff Data Entry (Write Transactions only)"}),p.jsx("option",{value:"viewer",children:"Viewer / Eksekutif (Read-Only stats & reports)"}),p.jsx("option",{value:"admin",children:"Administrator (Full Access & Control)"})]})]})]}),!u&&p.jsxs("div",{className:"flex items-center justify-between py-xs",children:[p.jsxs("label",{className:"flex items-center gap-xs cursor-pointer",children:[p.jsx("input",{type:"checkbox",checked:l,onChange:w=>c(w.target.checked),className:"rounded bg-[#0a0a0f] border-[#2a2a3e] text-primary focus:ring-primary focus:ring-offset-[#12121a]"}),p.jsx("span",{className:"font-body-sm text-body-sm text-on-surface-variant",children:"Remember me"})]}),p.jsx("a",{href:"#forgot-password",onClick:w=>{w.preventDefault(),alert("Silakan hubungi administrator IT untuk mereset akun Anda.")},className:"font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors",children:"Forgot Password?"})]}),p.jsx("button",{type:"submit",disabled:h,className:"w-full bg-[#4c9aff] text-[#0a0a0f] font-semibold text-[16px] py-sm rounded mt-md shadow-lg hover:shadow-[0_0_20px_rgba(76,154,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2",children:h?p.jsx("div",{className:"w-5 h-5 border-2 border-[#0a0a0f] border-t-transparent rounded-full animate-spin"}):u?"Daftar Akun Baru":"Masuk"})]}),p.jsx("div",{className:"mt-md text-center",children:p.jsx("button",{type:"button",onClick:()=>{m(w=>!w),b(""),u?(i("admin@nexus.finance"),s("admin123")):(i(""),s(""))},className:"font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors cursor-pointer",children:u?"Sudah punya akun? Masuk di sini":"Belum punya akun? Buat akun di sini"})}),p.jsxs("div",{className:"mt-lg text-center border-t border-[#2a2a3e] pt-sm space-y-2",children:[!u&&p.jsxs("p",{className:"font-label-md text-label-md text-outline flex items-center justify-center gap-1",children:[p.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"info"}),"Demo Admin: admin@nexus.finance / admin123"]}),p.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e0e13]/80 border border-[#2a2a3e] text-[11px] font-label-md text-on-surface-variant",children:[p.jsx("span",{className:"text-secondary",children:"👑"}),p.jsx("span",{className:"text-outline text-[10px] tracking-wider uppercase",children:"DEVELOPED BY"}),p.jsx("span",{className:"font-bold text-primary tracking-widest",children:"KING ARGA"})]})]})]})]})]})},DT=()=>{const{isAuthenticated:t,activeTab:e,isLoadingSession:n}=hn();return n?p.jsxs("div",{className:"h-screen w-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-on-surface",children:[p.jsx("div",{className:"w-10 h-10 border-4 border-[#4c9aff] border-t-transparent rounded-full animate-spin mb-4"}),p.jsx("p",{className:"text-on-surface-variant font-label-md text-xs tracking-wider uppercase",children:"Loading Session..."})]}):t?p.jsxs("div",{className:"flex h-screen overflow-hidden bg-[#0a0a0f] text-on-surface font-body-md text-body-md antialiased select-none",children:[p.jsx(ny,{}),p.jsxs("main",{className:"flex-1 flex flex-col h-full overflow-hidden relative",children:[p.jsx(iy,{}),e==="dashboard"&&p.jsx(oy,{}),e==="transactions"&&p.jsx(ly,{}),e==="ledger"&&p.jsx(cy,{}),e==="categories"&&p.jsx(uy,{}),e==="add-transaction"&&p.jsx(dy,{})]}),p.jsx(fy,{}),p.jsx(hy,{}),p.jsx(yp,{}),p.jsxs("div",{className:"fixed bottom-3 right-4 z-30 pointer-events-none select-none hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121a]/85 backdrop-blur-md border border-[#2a2a3e] shadow-[0_0_12px_rgba(76,154,255,0.15)] opacity-85",children:[p.jsx("span",{className:"text-xs",children:"👑"}),p.jsx("span",{className:"text-[10px] font-bold tracking-wider bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent uppercase",children:"KING ARGA"})]})]}):p.jsxs(p.Fragment,{children:[p.jsx(LT,{}),p.jsx(yp,{})]})},IT=()=>p.jsx(ty,{children:p.jsx(DT,{})});ru.createRoot(document.getElementById("root")).render(p.jsx(V0.StrictMode,{children:p.jsx(IT,{})}));
