(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Ss(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},Oe=[],Kt=()=>{},Ui=()=>!1,Nn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ps=t=>t.startsWith("onUpdate:"),xt=Object.assign,Is=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ao=Object.prototype.hasOwnProperty,J=(t,e)=>ao.call(t,e),V=Array.isArray,Be=t=>Dn(t)==="[object Map]",ji=t=>Dn(t)==="[object Set]",H=t=>typeof t=="function",ct=t=>typeof t=="string",ye=t=>typeof t=="symbol",st=t=>t!==null&&typeof t=="object",Vi=t=>(st(t)||H(t))&&H(t.then)&&H(t.catch),Hi=Object.prototype.toString,Dn=t=>Hi.call(t),co=t=>Dn(t).slice(8,-1),zi=t=>Dn(t)==="[object Object]",Cs=t=>ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xe=Ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ln=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},uo=/-\w/g,Tt=Ln(t=>t.replace(uo,e=>e.slice(1).toUpperCase())),go=/\B([A-Z])/g,_e=Ln(t=>t.replace(go,"-$1").toLowerCase()),On=Ln(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kn=Ln(t=>t?`on${On(t)}`:""),he=(t,e)=>!Object.is(t,e),vn=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Gi=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ws=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $s;const Bn=()=>$s||($s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Es(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ct(s)?ho(s):Es(s);if(i)for(const l in i)e[l]=i[l]}return e}else if(ct(t)||st(t))return t}const po=/;(?![^(]*\))/g,mo=/:([^]+)/,fo=/\/\*[^]*?\*\//g;function ho(t){const e={};return t.replace(fo,"").split(po).forEach(n=>{if(n){const s=n.split(mo);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ee(t){let e="";if(ct(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Ee(t[n]);s&&(e+=s+" ")}else if(st(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yo=Ss(xo);function Fi(t){return!!t||t===""}const $i=t=>!!(t&&t.__v_isRef===!0),at=t=>ct(t)?t:t==null?"":V(t)||st(t)&&(t.toString===Hi||!H(t.toString))?$i(t)?at(t.value):JSON.stringify(t,Ki,2):String(t),Ki=(t,e)=>$i(e)?Ki(t,e.value):Be(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],l)=>(n[Wn(s,l)+" =>"]=i,n),{})}:ji(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wn(n))}:ye(e)?Wn(e):st(e)&&!V(e)&&!zi(e)?String(e):e,Wn=(t,e="")=>{var n;return ye(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let It;class bo{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function vo(){return It}let et;const Jn=new WeakSet;class Wi{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jn.has(this)&&(Jn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ks(this),Yi(this);const e=et,n=Nt;et=this,Nt=!0;try{return this.fn()}finally{Xi(this),et=e,Nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)As(e);this.deps=this.depsTail=void 0,Ks(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rs(this)&&this.run()}get dirty(){return rs(this)}}let Ji=0,Ze,tn;function Qi(t,e=!1){if(t.flags|=8,e){t.next=tn,tn=t;return}t.next=Ze,Ze=t}function Rs(){Ji++}function _s(){if(--Ji>0)return;if(tn){let e=tn;for(tn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ze;){let e=Ze;for(Ze=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Yi(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xi(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),As(s),qo(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function rs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zi(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===rn)||(t.globalVersion=rn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!rs(t))))return;t.flags|=2;const e=t.dep,n=et,s=Nt;et=t,Nt=!0;try{Yi(t);const i=t.fn(t._value);(e.version===0||he(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{et=n,Nt=s,Xi(t),t.flags&=-3}}function As(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)As(l,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function qo(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nt=!0;const tl=[];function ie(){tl.push(Nt),Nt=!1}function le(){const t=tl.pop();Nt=t===void 0?!0:t}function Ks(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=et;et=void 0;try{e()}finally{et=n}}}let rn=0;class So{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ks{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!et||!Nt||et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==et)n=this.activeLink=new So(et,this),et.deps?(n.prevDep=et.depsTail,et.depsTail.nextDep=n,et.depsTail=n):et.deps=et.depsTail=n,el(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=et.depsTail,n.nextDep=void 0,et.depsTail.nextDep=n,et.depsTail=n,et.deps===n&&(et.deps=s)}return n}trigger(e){this.version++,rn++,this.notify(e)}notify(e){Rs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_s()}}}function el(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)el(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const as=new WeakMap,Ce=Symbol(""),cs=Symbol(""),an=Symbol("");function mt(t,e,n){if(Nt&&et){let s=as.get(t);s||as.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ks),i.map=s,i.key=n),i.track()}}function te(t,e,n,s,i,l){const o=as.get(t);if(!o){rn++;return}const r=a=>{a&&a.trigger()};if(Rs(),e==="clear")o.forEach(r);else{const a=V(t),p=a&&Cs(n);if(a&&n==="length"){const u=Number(s);o.forEach((g,f)=>{(f==="length"||f===an||!ye(f)&&f>=u)&&r(g)})}else switch((n!==void 0||o.has(void 0))&&r(o.get(n)),p&&r(o.get(an)),e){case"add":a?p&&r(o.get("length")):(r(o.get(Ce)),Be(t)&&r(o.get(cs)));break;case"delete":a||(r(o.get(Ce)),Be(t)&&r(o.get(cs)));break;case"set":Be(t)&&r(o.get(Ce));break}}_s()}function Me(t){const e=W(t);return e===t?e:(mt(e,"iterate",an),kt(t)?e:e.map(Dt))}function Un(t){return mt(t=W(t),"iterate",an),t}function ge(t,e){return oe(t)?we(t)?He(Dt(e)):He(e):Dt(e)}const Po={__proto__:null,[Symbol.iterator](){return Qn(this,Symbol.iterator,t=>ge(this,t))},concat(...t){return Me(this).concat(...t.map(e=>V(e)?Me(e):e))},entries(){return Qn(this,"entries",t=>(t[1]=ge(this,t[1]),t))},every(t,e){return Qt(this,"every",t,e,void 0,arguments)},filter(t,e){return Qt(this,"filter",t,e,n=>n.map(s=>ge(this,s)),arguments)},find(t,e){return Qt(this,"find",t,e,n=>ge(this,n),arguments)},findIndex(t,e){return Qt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qt(this,"findLast",t,e,n=>ge(this,n),arguments)},findLastIndex(t,e){return Qt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yn(this,"includes",t)},indexOf(...t){return Yn(this,"indexOf",t)},join(t){return Me(this).join(t)},lastIndexOf(...t){return Yn(this,"lastIndexOf",t)},map(t,e){return Qt(this,"map",t,e,void 0,arguments)},pop(){return We(this,"pop")},push(...t){return We(this,"push",t)},reduce(t,...e){return Ws(this,"reduce",t,e)},reduceRight(t,...e){return Ws(this,"reduceRight",t,e)},shift(){return We(this,"shift")},some(t,e){return Qt(this,"some",t,e,void 0,arguments)},splice(...t){return We(this,"splice",t)},toReversed(){return Me(this).toReversed()},toSorted(t){return Me(this).toSorted(t)},toSpliced(...t){return Me(this).toSpliced(...t)},unshift(...t){return We(this,"unshift",t)},values(){return Qn(this,"values",t=>ge(this,t))}};function Qn(t,e,n){const s=Un(t),i=s[e]();return s!==t&&!kt(t)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const Io=Array.prototype;function Qt(t,e,n,s,i,l){const o=Un(t),r=o!==t&&!kt(t),a=o[e];if(a!==Io[e]){const g=a.apply(t,l);return r?Dt(g):g}let p=n;o!==t&&(r?p=function(g,f){return n.call(this,ge(t,g),f,t)}:n.length>2&&(p=function(g,f){return n.call(this,g,f,t)}));const u=a.call(o,p,s);return r&&i?i(u):u}function Ws(t,e,n,s){const i=Un(t);let l=n;return i!==t&&(kt(t)?n.length>3&&(l=function(o,r,a){return n.call(this,o,r,a,t)}):l=function(o,r,a){return n.call(this,o,ge(t,r),a,t)}),i[e](l,...s)}function Yn(t,e,n){const s=W(t);mt(s,"iterate",an);const i=s[e](...n);return(i===-1||i===!1)&&Ns(n[0])?(n[0]=W(n[0]),s[e](...n)):i}function We(t,e,n=[]){ie(),Rs();const s=W(t)[e].apply(t,n);return _s(),le(),s}const Co=Ss("__proto__,__v_isRef,__isVue"),nl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ye));function wo(t){ye(t)||(t=String(t));const e=W(this);return mt(e,"has",t),e.hasOwnProperty(t)}class sl{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return s===(i?l?Lo:rl:l?ol:ll).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!i){let a;if(o&&(a=Po[n]))return a;if(n==="hasOwnProperty")return wo}const r=Reflect.get(e,n,ht(e)?e:s);if((ye(n)?nl.has(n):Co(n))||(i||mt(e,"get",n),l))return r;if(ht(r)){const a=o&&Cs(n)?r:r.value;return i&&st(a)?ds(a):a}return st(r)?i?ds(r):jn(r):r}}class il extends sl{constructor(e=!1){super(!1,e)}set(e,n,s,i){let l=e[n];const o=V(e)&&Cs(n);if(!this._isShallow){const p=oe(l);if(!kt(s)&&!oe(s)&&(l=W(l),s=W(s)),!o&&ht(l)&&!ht(s))return p||(l.value=s),!0}const r=o?Number(n)<e.length:J(e,n),a=Reflect.set(e,n,s,ht(e)?e:i);return e===W(i)&&(r?he(s,l)&&te(e,"set",n,s):te(e,"add",n,s)),a}deleteProperty(e,n){const s=J(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&te(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!ye(n)||!nl.has(n))&&mt(e,"has",n),s}ownKeys(e){return mt(e,"iterate",V(e)?"length":Ce),Reflect.ownKeys(e)}}class Eo extends sl{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ro=new il,_o=new Eo,Ao=new il(!0);const us=t=>t,xn=t=>Reflect.getPrototypeOf(t);function ko(t,e,n){return function(...s){const i=this.__v_raw,l=W(i),o=Be(l),r=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,p=i[t](...s),u=n?us:e?He:Dt;return!e&&mt(l,"iterate",a?cs:Ce),{next(){const{value:g,done:f}=p.next();return f?{value:g,done:f}:{value:r?[u(g[0]),u(g[1])]:u(g),done:f}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function To(t,e){const n={get(i){const l=this.__v_raw,o=W(l),r=W(i);t||(he(i,r)&&mt(o,"get",i),mt(o,"get",r));const{has:a}=xn(o),p=e?us:t?He:Dt;if(a.call(o,i))return p(l.get(i));if(a.call(o,r))return p(l.get(r));l!==o&&l.get(i)},get size(){const i=this.__v_raw;return!t&&mt(W(i),"iterate",Ce),i.size},has(i){const l=this.__v_raw,o=W(l),r=W(i);return t||(he(i,r)&&mt(o,"has",i),mt(o,"has",r)),i===r?l.has(i):l.has(i)||l.has(r)},forEach(i,l){const o=this,r=o.__v_raw,a=W(r),p=e?us:t?He:Dt;return!t&&mt(a,"iterate",Ce),r.forEach((u,g)=>i.call(l,p(u),p(g),o))}};return xt(n,t?{add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear")}:{add(i){!e&&!kt(i)&&!oe(i)&&(i=W(i));const l=W(this);return xn(l).has.call(l,i)||(l.add(i),te(l,"add",i,i)),this},set(i,l){!e&&!kt(l)&&!oe(l)&&(l=W(l));const o=W(this),{has:r,get:a}=xn(o);let p=r.call(o,i);p||(i=W(i),p=r.call(o,i));const u=a.call(o,i);return o.set(i,l),p?he(l,u)&&te(o,"set",i,l):te(o,"add",i,l),this},delete(i){const l=W(this),{has:o,get:r}=xn(l);let a=o.call(l,i);a||(i=W(i),a=o.call(l,i)),r&&r.call(l,i);const p=l.delete(i);return a&&te(l,"delete",i,void 0),p},clear(){const i=W(this),l=i.size!==0,o=i.clear();return l&&te(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ko(i,t,e)}),n}function Ts(t,e){const n=To(t,e);return(s,i,l)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,l)}const Mo={get:Ts(!1,!1)},No={get:Ts(!1,!0)},Do={get:Ts(!0,!1)};const ll=new WeakMap,ol=new WeakMap,rl=new WeakMap,Lo=new WeakMap;function Oo(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bo(t){return t.__v_skip||!Object.isExtensible(t)?0:Oo(co(t))}function jn(t){return oe(t)?t:Ms(t,!1,Ro,Mo,ll)}function al(t){return Ms(t,!1,Ao,No,ol)}function ds(t){return Ms(t,!0,_o,Do,rl)}function Ms(t,e,n,s,i){if(!st(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const l=Bo(t);if(l===0)return t;const o=i.get(t);if(o)return o;const r=new Proxy(t,l===2?s:n);return i.set(t,r),r}function we(t){return oe(t)?we(t.__v_raw):!!(t&&t.__v_isReactive)}function oe(t){return!!(t&&t.__v_isReadonly)}function kt(t){return!!(t&&t.__v_isShallow)}function Ns(t){return t?!!t.__v_raw:!1}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Uo(t){return!J(t,"__v_skip")&&Object.isExtensible(t)&&Gi(t,"__v_skip",!0),t}const Dt=t=>st(t)?jn(t):t,He=t=>st(t)?ds(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function cn(t){return cl(t,!1)}function jo(t){return cl(t,!0)}function cl(t,e){return ht(t)?t:new Vo(t,e)}class Vo{constructor(e,n){this.dep=new ks,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:W(e),this._value=n?e:Dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||kt(e)||oe(e);e=s?e:W(e),he(e,n)&&(this._rawValue=e,this._value=s?e:Dt(e),this.dep.trigger())}}function Ue(t){return ht(t)?t.value:t}const Ho={get:(t,e,n)=>e==="__v_raw"?t:Ue(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ht(i)&&!ht(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ul(t){return we(t)?t:new Proxy(t,Ho)}class zo{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ks(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return Qi(this,!0),!0}get value(){const e=this.dep.track();return Zi(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Go(t,e,n=!1){let s,i;return H(t)?s=t:(s=t.get,i=t.set),new zo(s,i,n)}const bn={},wn=new WeakMap;let Pe;function Fo(t,e=!1,n=Pe){if(n){let s=wn.get(n);s||wn.set(n,s=[]),s.push(t)}}function $o(t,e,n=Z){const{immediate:s,deep:i,once:l,scheduler:o,augmentJob:r,call:a}=n,p=M=>i?M:kt(M)||i===!1||i===0?ee(M,1):ee(M);let u,g,f,x,R=!1,A=!1;if(ht(t)?(g=()=>t.value,R=kt(t)):we(t)?(g=()=>p(t),R=!0):V(t)?(A=!0,R=t.some(M=>we(M)||kt(M)),g=()=>t.map(M=>{if(ht(M))return M.value;if(we(M))return p(M);if(H(M))return a?a(M,2):M()})):H(t)?e?g=a?()=>a(t,2):t:g=()=>{if(f){ie();try{f()}finally{le()}}const M=Pe;Pe=u;try{return a?a(t,3,[x]):t(x)}finally{Pe=M}}:g=Kt,e&&i){const M=g,X=i===!0?1/0:i;g=()=>ee(M(),X)}const z=vo(),D=()=>{u.stop(),z&&z.active&&Is(z.effects,u)};if(l&&e){const M=e;e=(...X)=>{M(...X),D()}}let T=A?new Array(t.length).fill(bn):bn;const B=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const X=u.run();if(i||R||(A?X.some((pt,it)=>he(pt,T[it])):he(X,T))){f&&f();const pt=Pe;Pe=u;try{const it=[X,T===bn?void 0:A&&T[0]===bn?[]:T,x];T=X,a?a(e,3,it):e(...it)}finally{Pe=pt}}}else u.run()};return r&&r(B),u=new Wi(g),u.scheduler=o?()=>o(B,!1):B,x=M=>Fo(M,!1,u),f=u.onStop=()=>{const M=wn.get(u);if(M){if(a)a(M,4);else for(const X of M)X();wn.delete(u)}},e?s?B(!0):T=u.run():o?o(B.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function ee(t,e=1/0,n){if(e<=0||!st(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ht(t))ee(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)ee(t[s],e,n);else if(ji(t)||Be(t))t.forEach(s=>{ee(s,e,n)});else if(zi(t)){for(const s in t)ee(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ee(t[s],e,n)}return t}function fn(t,e,n,s){try{return s?t(...s):t()}catch(i){Vn(i,e,n)}}function Wt(t,e,n,s){if(H(t)){const i=fn(t,e,n,s);return i&&Vi(i)&&i.catch(l=>{Vn(l,e,n)}),i}if(V(t)){const i=[];for(let l=0;l<t.length;l++)i.push(Wt(t[l],e,n,s));return i}}function Vn(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let r=e.parent;const a=e.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](t,a,p)===!1)return}r=r.parent}if(l){ie(),fn(l,null,10,[t,a,p]),le();return}}Ko(t,n,i,s,o)}function Ko(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const vt=[];let Ft=-1;const je=[];let pe=null,Ne=0;const dl=Promise.resolve();let En=null;function gl(t){const e=En||dl;return t?e.then(this?t.bind(this):t):e}function Wo(t){let e=Ft+1,n=vt.length;for(;e<n;){const s=e+n>>>1,i=vt[s],l=un(i);l<t||l===t&&i.flags&2?e=s+1:n=s}return e}function Ds(t){if(!(t.flags&1)){const e=un(t),n=vt[vt.length-1];!n||!(t.flags&2)&&e>=un(n)?vt.push(t):vt.splice(Wo(e),0,t),t.flags|=1,pl()}}function pl(){En||(En=dl.then(fl))}function Jo(t){V(t)?je.push(...t):pe&&t.id===-1?pe.splice(Ne+1,0,t):t.flags&1||(je.push(t),t.flags|=1),pl()}function Js(t,e,n=Ft+1){for(;n<vt.length;n++){const s=vt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;vt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ml(t){if(je.length){const e=[...new Set(je)].sort((n,s)=>un(n)-un(s));if(je.length=0,pe){pe.push(...e);return}for(pe=e,Ne=0;Ne<pe.length;Ne++){const n=pe[Ne];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pe=null,Ne=0}}const un=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fl(t){try{for(Ft=0;Ft<vt.length;Ft++){const e=vt[Ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ft<vt.length;Ft++){const e=vt[Ft];e&&(e.flags&=-2)}Ft=-1,vt.length=0,ml(),En=null,(vt.length||je.length)&&fl()}}let Rt=null,hl=null;function Rn(t){const e=Rt;return Rt=t,hl=t&&t.type.__scopeId||null,e}function ne(t,e=Rt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&kn(-1);const l=Rn(e);let o;try{o=t(...i)}finally{Rn(l),s._d&&kn(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qo(t,e){if(Rt===null)return t;const n=Fn(Rt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[l,o,r,a=Z]=e[i];l&&(H(l)&&(l={mounted:l,updated:l}),l.deep&&ee(o),s.push({dir:l,instance:n,value:o,oldValue:void 0,arg:r,modifiers:a}))}return t}function qe(t,e,n,s){const i=t.dirs,l=e&&e.dirs;for(let o=0;o<i.length;o++){const r=i[o];l&&(r.oldValue=l[o].value);let a=r.dir[s];a&&(ie(),Wt(a,n,8,[t.el,r,t,e]),le())}}const Yo=Symbol("_vte"),Xo=t=>t.__isTeleport,Zo=Symbol("_leaveCb");function Ls(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ls(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xl(t,e){return H(t)?xt({name:t.name},e,{setup:t}):t}function yl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const _n=new WeakMap;function en(t,e,n,s,i=!1){if(V(t)){t.forEach((R,A)=>en(R,e&&(V(e)?e[A]:e),n,s,i));return}if(nn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&en(t,e,n,s.component.subTree);return}const l=s.shapeFlag&4?Fn(s.component):s.el,o=i?null:l,{i:r,r:a}=t,p=e&&e.r,u=r.refs===Z?r.refs={}:r.refs,g=r.setupState,f=W(g),x=g===Z?Ui:R=>J(f,R);if(p!=null&&p!==a){if(Qs(e),ct(p))u[p]=null,x(p)&&(g[p]=null);else if(ht(p)){p.value=null;const R=e;R.k&&(u[R.k]=null)}}if(H(a))fn(a,r,12,[o,u]);else{const R=ct(a),A=ht(a);if(R||A){const z=()=>{if(t.f){const D=R?x(a)?g[a]:u[a]:a.value;if(i)V(D)&&Is(D,l);else if(V(D))D.includes(l)||D.push(l);else if(R)u[a]=[l],x(a)&&(g[a]=u[a]);else{const T=[l];a.value=T,t.k&&(u[t.k]=T)}}else R?(u[a]=o,x(a)&&(g[a]=o)):A&&(a.value=o,t.k&&(u[t.k]=o))};if(o){const D=()=>{z(),_n.delete(t)};D.id=-1,_n.set(t,D),wt(D,n)}else Qs(t),z()}}}function Qs(t){const e=_n.get(t);e&&(e.flags|=8,_n.delete(t))}Bn().requestIdleCallback;Bn().cancelIdleCallback;const nn=t=>!!t.type.__asyncLoader,bl=t=>t.type.__isKeepAlive;function tr(t,e){vl(t,"a",e)}function er(t,e){vl(t,"da",e)}function vl(t,e,n=ft){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Hn(e,s,n),n){let i=n.parent;for(;i&&i.parent;)bl(i.parent.vnode)&&nr(s,e,n,i),i=i.parent}}function nr(t,e,n,s){const i=Hn(e,t,s,!0);ql(()=>{Is(s[e],i)},n)}function Hn(t,e,n=ft,s=!1){if(n){const i=n[t]||(n[t]=[]),l=e.__weh||(e.__weh=(...o)=>{ie();const r=hn(n),a=Wt(e,n,t,o);return r(),le(),a});return s?i.unshift(l):i.push(l),l}}const re=t=>(e,n=ft)=>{(!pn||t==="sp")&&Hn(t,(...s)=>e(...s),n)},sr=re("bm"),ir=re("m"),lr=re("bu"),or=re("u"),rr=re("bum"),ql=re("um"),ar=re("sp"),cr=re("rtg"),ur=re("rtc");function dr(t,e=ft){Hn("ec",t,e)}const Sl="components";function dn(t,e){return Il(Sl,t,!0,e)||t}const Pl=Symbol.for("v-ndc");function gr(t){return ct(t)?Il(Sl,t,!1)||t:t||Pl}function Il(t,e,n=!0,s=!1){const i=Rt||ft;if(i){const l=i.type;{const r=ta(l,!1);if(r&&(r===e||r===Tt(e)||r===On(Tt(e))))return l}const o=Ys(i[t]||l[t],e)||Ys(i.appContext[t],e);return!o&&s?l:o}}function Ys(t,e){return t&&(t[e]||t[Tt(e)]||t[On(Tt(e))])}function Et(t,e,n,s){let i;const l=n,o=V(t);if(o||ct(t)){const r=o&&we(t);let a=!1,p=!1;r&&(a=!kt(t),p=oe(t),t=Un(t)),i=new Array(t.length);for(let u=0,g=t.length;u<g;u++)i[u]=e(a?p?He(Dt(t[u])):Dt(t[u]):t[u],u,void 0,l)}else if(typeof t=="number"){i=new Array(t);for(let r=0;r<t;r++)i[r]=e(r+1,r,void 0,l)}else if(st(t))if(t[Symbol.iterator])i=Array.from(t,(r,a)=>e(r,a,void 0,l));else{const r=Object.keys(t);i=new Array(r.length);for(let a=0,p=r.length;a<p;a++){const u=r[a];i[a]=e(t[u],u,a,l)}}else i=[];return i}const gs=t=>t?Gl(t)?Fn(t):gs(t.parent):null,sn=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gs(t.parent),$root:t=>gs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wl(t),$forceUpdate:t=>t.f||(t.f=()=>{Ds(t.update)}),$nextTick:t=>t.n||(t.n=gl.bind(t.proxy)),$watch:t=>Pr.bind(t)}),Xn=(t,e)=>t!==Z&&!t.__isScriptSetup&&J(t,e),pr={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:l,accessCache:o,type:r,appContext:a}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return l[e]}else{if(Xn(s,e))return o[e]=1,s[e];if(i!==Z&&J(i,e))return o[e]=2,i[e];if(J(l,e))return o[e]=3,l[e];if(n!==Z&&J(n,e))return o[e]=4,n[e];ps&&(o[e]=0)}}const p=sn[e];let u,g;if(p)return e==="$attrs"&&mt(t.attrs,"get",""),p(t);if((u=r.__cssModules)&&(u=u[e]))return u;if(n!==Z&&J(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,J(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:l}=t;return Xn(i,e)?(i[e]=n,!0):s!==Z&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(l[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,props:l,type:o}},r){let a;return!!(n[r]||t!==Z&&r[0]!=="$"&&J(t,r)||Xn(e,r)||J(l,r)||J(s,r)||J(sn,r)||J(i.config.globalProperties,r)||(a=o.__cssModules)&&a[r])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xs(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ps=!0;function mr(t){const e=wl(t),n=t.proxy,s=t.ctx;ps=!1,e.beforeCreate&&Zs(e.beforeCreate,t,"bc");const{data:i,computed:l,methods:o,watch:r,provide:a,inject:p,created:u,beforeMount:g,mounted:f,beforeUpdate:x,updated:R,activated:A,deactivated:z,beforeDestroy:D,beforeUnmount:T,destroyed:B,unmounted:M,render:X,renderTracked:pt,renderTriggered:it,errorCaptured:Ot,serverPrefetch:ae,expose:Bt,inheritAttrs:ce,components:be,directives:Ut,filters:$e}=e;if(p&&fr(p,s,null),o)for(const Y in o){const $=o[Y];H($)&&(s[Y]=$.bind(n))}if(i){const Y=i.call(n,n);st(Y)&&(t.data=jn(Y))}if(ps=!0,l)for(const Y in l){const $=l[Y],Jt=H($)?$.bind(n,n):H($.get)?$.get.bind(n,n):Kt,ue=!H($)&&H($.set)?$.set.bind(n):Kt,jt=Mt({get:Jt,set:ue});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>jt.value,set:qt=>jt.value=qt})}if(r)for(const Y in r)Cl(r[Y],s,n,Y);if(a){const Y=H(a)?a.call(n):a;Reflect.ownKeys(Y).forEach($=>{qn($,Y[$])})}u&&Zs(u,t,"c");function gt(Y,$){V($)?$.forEach(Jt=>Y(Jt.bind(n))):$&&Y($.bind(n))}if(gt(sr,g),gt(ir,f),gt(lr,x),gt(or,R),gt(tr,A),gt(er,z),gt(dr,Ot),gt(ur,pt),gt(cr,it),gt(rr,T),gt(ql,M),gt(ar,ae),V(Bt))if(Bt.length){const Y=t.exposed||(t.exposed={});Bt.forEach($=>{Object.defineProperty(Y,$,{get:()=>n[$],set:Jt=>n[$]=Jt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===Kt&&(t.render=X),ce!=null&&(t.inheritAttrs=ce),be&&(t.components=be),Ut&&(t.directives=Ut),ae&&yl(t)}function fr(t,e,n=Kt){V(t)&&(t=ms(t));for(const s in t){const i=t[s];let l;st(i)?"default"in i?l=se(i.from||s,i.default,!0):l=se(i.from||s):l=se(i),ht(l)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):e[s]=l}}function Zs(t,e,n){Wt(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cl(t,e,n,s){let i=s.includes(".")?_l(n,s):()=>n[s];if(ct(t)){const l=e[t];H(l)&&Sn(i,l)}else if(H(t))Sn(i,t.bind(n));else if(st(t))if(V(t))t.forEach(l=>Cl(l,e,n,s));else{const l=H(t.handler)?t.handler.bind(n):e[t.handler];H(l)&&Sn(i,l,t)}}function wl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:l,config:{optionMergeStrategies:o}}=t.appContext,r=l.get(e);let a;return r?a=r:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(p=>An(a,p,o,!0)),An(a,e,o)),st(e)&&l.set(e,a),a}function An(t,e,n,s=!1){const{mixins:i,extends:l}=e;l&&An(t,l,n,!0),i&&i.forEach(o=>An(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const r=hr[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const hr={data:ti,props:ei,emits:ei,methods:Ye,computed:Ye,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Ye,directives:Ye,watch:yr,provide:ti,inject:xr};function ti(t,e){return e?t?function(){return xt(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function xr(t,e){return Ye(ms(t),ms(e))}function ms(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ye(t,e){return t?xt(Object.create(null),t,e):e}function ei(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:xt(Object.create(null),Xs(t),Xs(e??{})):e}function yr(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const s in e)n[s]=yt(t[s],e[s]);return n}function El(){return{app:null,config:{isNativeTag:Ui,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let br=0;function vr(t,e){return function(s,i=null){H(s)||(s=xt({},s)),i!=null&&!st(i)&&(i=null);const l=El(),o=new WeakSet,r=[];let a=!1;const p=l.app={_uid:br++,_component:s,_props:i,_container:null,_context:l,_instance:null,version:na,get config(){return l.config},set config(u){},use(u,...g){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(p,...g)):H(u)&&(o.add(u),u(p,...g))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,g){return g?(l.components[u]=g,p):l.components[u]},directive(u,g){return g?(l.directives[u]=g,p):l.directives[u]},mount(u,g,f){if(!a){const x=p._ceVNode||rt(s,i);return x.appContext=l,f===!0?f="svg":f===!1&&(f=void 0),t(x,u,f),a=!0,p._container=u,u.__vue_app__=p,Fn(x.component)}},onUnmount(u){r.push(u)},unmount(){a&&(Wt(r,p._instance,16),t(null,p._container),delete p._container.__vue_app__)},provide(u,g){return l.provides[u]=g,p},runWithContext(u){const g=Ve;Ve=p;try{return u()}finally{Ve=g}}};return p}}let Ve=null;function qn(t,e){if(ft){let n=ft.provides;const s=ft.parent&&ft.parent.provides;s===n&&(n=ft.provides=Object.create(s)),n[t]=e}}function se(t,e,n=!1){const s=Jr();if(s||Ve){let i=Ve?Ve._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}const qr=Symbol.for("v-scx"),Sr=()=>se(qr);function Sn(t,e,n){return Rl(t,e,n)}function Rl(t,e,n=Z){const{immediate:s,deep:i,flush:l,once:o}=n,r=xt({},n),a=e&&s||!e&&l!=="post";let p;if(pn){if(l==="sync"){const x=Sr();p=x.__watcherHandles||(x.__watcherHandles=[])}else if(!a){const x=()=>{};return x.stop=Kt,x.resume=Kt,x.pause=Kt,x}}const u=ft;r.call=(x,R,A)=>Wt(x,u,R,A);let g=!1;l==="post"?r.scheduler=x=>{wt(x,u&&u.suspense)}:l!=="sync"&&(g=!0,r.scheduler=(x,R)=>{R?x():Ds(x)}),r.augmentJob=x=>{e&&(x.flags|=4),g&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const f=$o(t,e,r);return pn&&(p?p.push(f):a&&f()),f}function Pr(t,e,n){const s=this.proxy,i=ct(t)?t.includes(".")?_l(s,t):()=>s[t]:t.bind(s,s);let l;H(e)?l=e:(l=e.handler,n=e);const o=hn(this),r=Rl(i,l.bind(s),n);return o(),r}function _l(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ir=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tt(e)}Modifiers`]||t[`${_e(e)}Modifiers`];function Cr(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let i=n;const l=e.startsWith("update:"),o=l&&Ir(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ct(u)?u.trim():u)),o.number&&(i=n.map(ws)));let r,a=s[r=Kn(e)]||s[r=Kn(Tt(e))];!a&&l&&(a=s[r=Kn(_e(e))]),a&&Wt(a,t,6,i);const p=s[r+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[r])return;t.emitted[r]=!0,Wt(p,t,6,i)}}const wr=new WeakMap;function Al(t,e,n=!1){const s=n?wr:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const l=t.emits;let o={},r=!1;if(!H(t)){const a=p=>{const u=Al(p,e,!0);u&&(r=!0,xt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!l&&!r?(st(t)&&s.set(t,null),null):(V(l)?l.forEach(a=>o[a]=null):xt(o,l),st(t)&&s.set(t,o),o)}function zn(t,e){return!t||!Nn(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,_e(e))||J(t,e))}function ni(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[l],slots:o,attrs:r,emit:a,render:p,renderCache:u,props:g,data:f,setupState:x,ctx:R,inheritAttrs:A}=t,z=Rn(t);let D,T;try{if(n.shapeFlag&4){const M=i||s,X=M;D=$t(p.call(X,M,u,g,x,f,R)),T=r}else{const M=e;D=$t(M.length>1?M(g,{attrs:r,slots:o,emit:a}):M(g,null)),T=e.props?r:Er(r)}}catch(M){ln.length=0,Vn(M,t,1),D=rt(xe)}let B=D;if(T&&A!==!1){const M=Object.keys(T),{shapeFlag:X}=B;M.length&&X&7&&(l&&M.some(Ps)&&(T=Rr(T,l)),B=ze(B,T,!1,!0))}return n.dirs&&(B=ze(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Ls(B,n.transition),D=B,Rn(z),D}const Er=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nn(n))&&((e||(e={}))[n]=t[n]);return e},Rr=(t,e)=>{const n={};for(const s in t)(!Ps(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _r(t,e,n){const{props:s,children:i,component:l}=t,{props:o,children:r,patchFlag:a}=e,p=l.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?si(s,o,p):!!o;if(a&8){const u=e.dynamicProps;for(let g=0;g<u.length;g++){const f=u[g];if(o[f]!==s[f]&&!zn(p,f))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:s===o?!1:s?o?si(s,o,p):!0:!!o;return!1}function si(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const l=s[i];if(e[l]!==t[l]&&!zn(n,l))return!0}return!1}function Ar({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const kl={},Tl=()=>Object.create(kl),Ml=t=>Object.getPrototypeOf(t)===kl;function kr(t,e,n,s=!1){const i={},l=Tl();t.propsDefaults=Object.create(null),Nl(t,e,i,l);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:al(i):t.type.props?t.props=i:t.props=l,t.attrs=l}function Tr(t,e,n,s){const{props:i,attrs:l,vnode:{patchFlag:o}}=t,r=W(i),[a]=t.propsOptions;let p=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let g=0;g<u.length;g++){let f=u[g];if(zn(t.emitsOptions,f))continue;const x=e[f];if(a)if(J(l,f))x!==l[f]&&(l[f]=x,p=!0);else{const R=Tt(f);i[R]=fs(a,r,R,x,t,!1)}else x!==l[f]&&(l[f]=x,p=!0)}}}else{Nl(t,e,i,l)&&(p=!0);let u;for(const g in r)(!e||!J(e,g)&&((u=_e(g))===g||!J(e,u)))&&(a?n&&(n[g]!==void 0||n[u]!==void 0)&&(i[g]=fs(a,r,g,void 0,t,!0)):delete i[g]);if(l!==r)for(const g in l)(!e||!J(e,g))&&(delete l[g],p=!0)}p&&te(t.attrs,"set","")}function Nl(t,e,n,s){const[i,l]=t.propsOptions;let o=!1,r;if(e)for(let a in e){if(Xe(a))continue;const p=e[a];let u;i&&J(i,u=Tt(a))?!l||!l.includes(u)?n[u]=p:(r||(r={}))[u]=p:zn(t.emitsOptions,a)||(!(a in s)||p!==s[a])&&(s[a]=p,o=!0)}if(l){const a=W(n),p=r||Z;for(let u=0;u<l.length;u++){const g=l[u];n[g]=fs(i,a,g,p[g],t,!J(p,g))}}return o}function fs(t,e,n,s,i,l){const o=t[n];if(o!=null){const r=J(o,"default");if(r&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&H(a)){const{propsDefaults:p}=i;if(n in p)s=p[n];else{const u=hn(i);s=p[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(l&&!r?s=!1:o[1]&&(s===""||s===_e(n))&&(s=!0))}return s}const Mr=new WeakMap;function Dl(t,e,n=!1){const s=n?Mr:e.propsCache,i=s.get(t);if(i)return i;const l=t.props,o={},r=[];let a=!1;if(!H(t)){const u=g=>{a=!0;const[f,x]=Dl(g,e,!0);xt(o,f),x&&r.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!l&&!a)return st(t)&&s.set(t,Oe),Oe;if(V(l))for(let u=0;u<l.length;u++){const g=Tt(l[u]);ii(g)&&(o[g]=Z)}else if(l)for(const u in l){const g=Tt(u);if(ii(g)){const f=l[u],x=o[g]=V(f)||H(f)?{type:f}:xt({},f),R=x.type;let A=!1,z=!0;if(V(R))for(let D=0;D<R.length;++D){const T=R[D],B=H(T)&&T.name;if(B==="Boolean"){A=!0;break}else B==="String"&&(z=!1)}else A=H(R)&&R.name==="Boolean";x[0]=A,x[1]=z,(A||J(x,"default"))&&r.push(g)}}const p=[o,r];return st(t)&&s.set(t,p),p}function ii(t){return t[0]!=="$"&&!Xe(t)}const Os=t=>t==="_"||t==="_ctx"||t==="$stable",Bs=t=>V(t)?t.map($t):[$t(t)],Nr=(t,e,n)=>{if(e._n)return e;const s=ne((...i)=>Bs(e(...i)),n);return s._c=!1,s},Ll=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Os(i))continue;const l=t[i];if(H(l))e[i]=Nr(i,l,s);else if(l!=null){const o=Bs(l);e[i]=()=>o}}},Ol=(t,e)=>{const n=Bs(e);t.slots.default=()=>n},Bl=(t,e,n)=>{for(const s in e)(n||!Os(s))&&(t[s]=e[s])},Dr=(t,e,n)=>{const s=t.slots=Tl();if(t.vnode.shapeFlag&32){const i=e._;i?(Bl(s,e,n),n&&Gi(s,"_",i,!0)):Ll(e,s)}else e&&Ol(t,e)},Lr=(t,e,n)=>{const{vnode:s,slots:i}=t;let l=!0,o=Z;if(s.shapeFlag&32){const r=e._;r?n&&r===1?l=!1:Bl(i,e,n):(l=!e.$stable,Ll(e,i)),o=e}else e&&(Ol(t,e),o={default:1});if(l)for(const r in i)!Os(r)&&o[r]==null&&delete i[r]},wt=Vr;function Or(t){return Br(t)}function Br(t,e){const n=Bn();n.__VUE__=!0;const{insert:s,remove:i,patchProp:l,createElement:o,createText:r,createComment:a,setText:p,setElementText:u,parentNode:g,nextSibling:f,setScopeId:x=Kt,insertStaticContent:R}=t,A=(c,d,m,b=null,q=null,y=null,C=void 0,I=null,P=!!d.dynamicChildren)=>{if(c===d)return;c&&!Je(c,d)&&(b=v(c),qt(c,q,y,!0),c=null),d.patchFlag===-2&&(P=!1,d.dynamicChildren=null);const{type:S,ref:U,shapeFlag:E}=d;switch(S){case Gn:z(c,d,m,b);break;case xe:D(c,d,m,b);break;case Pn:c==null&&T(d,m,b,C);break;case ot:be(c,d,m,b,q,y,C,I,P);break;default:E&1?X(c,d,m,b,q,y,C,I,P):E&6?Ut(c,d,m,b,q,y,C,I,P):(E&64||E&128)&&S.process(c,d,m,b,q,y,C,I,P,L)}U!=null&&q?en(U,c&&c.ref,y,d||c,!d):U==null&&c&&c.ref!=null&&en(c.ref,null,y,c,!0)},z=(c,d,m,b)=>{if(c==null)s(d.el=r(d.children),m,b);else{const q=d.el=c.el;d.children!==c.children&&p(q,d.children)}},D=(c,d,m,b)=>{c==null?s(d.el=a(d.children||""),m,b):d.el=c.el},T=(c,d,m,b)=>{[c.el,c.anchor]=R(c.children,d,m,b,c.el,c.anchor)},B=({el:c,anchor:d},m,b)=>{let q;for(;c&&c!==d;)q=f(c),s(c,m,b),c=q;s(d,m,b)},M=({el:c,anchor:d})=>{let m;for(;c&&c!==d;)m=f(c),i(c),c=m;i(d)},X=(c,d,m,b,q,y,C,I,P)=>{if(d.type==="svg"?C="svg":d.type==="math"&&(C="mathml"),c==null)pt(d,m,b,q,y,C,I,P);else{const S=c.el&&c.el._isVueCE?c.el:null;try{S&&S._beginPatch(),ae(c,d,q,y,C,I,P)}finally{S&&S._endPatch()}}},pt=(c,d,m,b,q,y,C,I)=>{let P,S;const{props:U,shapeFlag:E,transition:O,dirs:j}=c;if(P=c.el=o(c.type,y,U&&U.is,U),E&8?u(P,c.children):E&16&&Ot(c.children,P,null,b,q,Zn(c,y),C,I),j&&qe(c,null,b,"created"),it(P,c,c.scopeId,C,b),U){for(const tt in U)tt!=="value"&&!Xe(tt)&&l(P,tt,null,U[tt],y,b);"value"in U&&l(P,"value",null,U.value,y),(S=U.onVnodeBeforeMount)&&Gt(S,b,c)}j&&qe(c,null,b,"beforeMount");const F=Ur(q,O);F&&O.beforeEnter(P),s(P,d,m),((S=U&&U.onVnodeMounted)||F||j)&&wt(()=>{S&&Gt(S,b,c),F&&O.enter(P),j&&qe(c,null,b,"mounted")},q)},it=(c,d,m,b,q)=>{if(m&&x(c,m),b)for(let y=0;y<b.length;y++)x(c,b[y]);if(q){let y=q.subTree;if(d===y||Vl(y.type)&&(y.ssContent===d||y.ssFallback===d)){const C=q.vnode;it(c,C,C.scopeId,C.slotScopeIds,q.parent)}}},Ot=(c,d,m,b,q,y,C,I,P=0)=>{for(let S=P;S<c.length;S++){const U=c[S]=I?me(c[S]):$t(c[S]);A(null,U,d,m,b,q,y,C,I)}},ae=(c,d,m,b,q,y,C)=>{const I=d.el=c.el;let{patchFlag:P,dynamicChildren:S,dirs:U}=d;P|=c.patchFlag&16;const E=c.props||Z,O=d.props||Z;let j;if(m&&Se(m,!1),(j=O.onVnodeBeforeUpdate)&&Gt(j,m,d,c),U&&qe(d,c,m,"beforeUpdate"),m&&Se(m,!0),(E.innerHTML&&O.innerHTML==null||E.textContent&&O.textContent==null)&&u(I,""),S?Bt(c.dynamicChildren,S,I,m,b,Zn(d,q),y):C||$(c,d,I,null,m,b,Zn(d,q),y,!1),P>0){if(P&16)ce(I,E,O,m,q);else if(P&2&&E.class!==O.class&&l(I,"class",null,O.class,q),P&4&&l(I,"style",E.style,O.style,q),P&8){const F=d.dynamicProps;for(let tt=0;tt<F.length;tt++){const Q=F[tt],St=E[Q],Pt=O[Q];(Pt!==St||Q==="value")&&l(I,Q,St,Pt,q,m)}}P&1&&c.children!==d.children&&u(I,d.children)}else!C&&S==null&&ce(I,E,O,m,q);((j=O.onVnodeUpdated)||U)&&wt(()=>{j&&Gt(j,m,d,c),U&&qe(d,c,m,"updated")},b)},Bt=(c,d,m,b,q,y,C)=>{for(let I=0;I<d.length;I++){const P=c[I],S=d[I],U=P.el&&(P.type===ot||!Je(P,S)||P.shapeFlag&198)?g(P.el):m;A(P,S,U,null,b,q,y,C,!0)}},ce=(c,d,m,b,q)=>{if(d!==m){if(d!==Z)for(const y in d)!Xe(y)&&!(y in m)&&l(c,y,d[y],null,q,b);for(const y in m){if(Xe(y))continue;const C=m[y],I=d[y];C!==I&&y!=="value"&&l(c,y,I,C,q,b)}"value"in m&&l(c,"value",d.value,m.value,q)}},be=(c,d,m,b,q,y,C,I,P)=>{const S=d.el=c?c.el:r(""),U=d.anchor=c?c.anchor:r("");let{patchFlag:E,dynamicChildren:O,slotScopeIds:j}=d;j&&(I=I?I.concat(j):j),c==null?(s(S,m,b),s(U,m,b),Ot(d.children||[],m,U,q,y,C,I,P)):E>0&&E&64&&O&&c.dynamicChildren?(Bt(c.dynamicChildren,O,m,q,y,C,I),(d.key!=null||q&&d===q.subTree)&&Ul(c,d,!0)):$(c,d,m,U,q,y,C,I,P)},Ut=(c,d,m,b,q,y,C,I,P)=>{d.slotScopeIds=I,c==null?d.shapeFlag&512?q.ctx.activate(d,m,b,C,P):$e(d,m,b,q,y,C,P):Ae(c,d,P)},$e=(c,d,m,b,q,y,C)=>{const I=c.component=Wr(c,b,q);if(bl(c)&&(I.ctx.renderer=L),Qr(I,!1,C),I.asyncDep){if(q&&q.registerDep(I,gt,C),!c.el){const P=I.subTree=rt(xe);D(null,P,d,m),c.placeholder=P.el}}else gt(I,c,d,m,q,y,C)},Ae=(c,d,m)=>{const b=d.component=c.component;if(_r(c,d,m))if(b.asyncDep&&!b.asyncResolved){Y(b,d,m);return}else b.next=d,b.update();else d.el=c.el,b.vnode=d},gt=(c,d,m,b,q,y,C)=>{const I=()=>{if(c.isMounted){let{next:E,bu:O,u:j,parent:F,vnode:tt}=c;{const Ht=jl(c);if(Ht){E&&(E.el=tt.el,Y(c,E,C)),Ht.asyncDep.then(()=>{c.isUnmounted||I()});return}}let Q=E,St;Se(c,!1),E?(E.el=tt.el,Y(c,E,C)):E=tt,O&&vn(O),(St=E.props&&E.props.onVnodeBeforeUpdate)&&Gt(St,F,E,tt),Se(c,!0);const Pt=ni(c),Vt=c.subTree;c.subTree=Pt,A(Vt,Pt,g(Vt.el),v(Vt),c,q,y),E.el=Pt.el,Q===null&&Ar(c,Pt.el),j&&wt(j,q),(St=E.props&&E.props.onVnodeUpdated)&&wt(()=>Gt(St,F,E,tt),q)}else{let E;const{el:O,props:j}=d,{bm:F,m:tt,parent:Q,root:St,type:Pt}=c,Vt=nn(d);Se(c,!1),F&&vn(F),!Vt&&(E=j&&j.onVnodeBeforeMount)&&Gt(E,Q,d),Se(c,!0);{St.ce&&St.ce._def.shadowRoot!==!1&&St.ce._injectChildStyle(Pt);const Ht=c.subTree=ni(c);A(null,Ht,m,b,c,q,y),d.el=Ht.el}if(tt&&wt(tt,q),!Vt&&(E=j&&j.onVnodeMounted)){const Ht=d;wt(()=>Gt(E,Q,Ht),q)}(d.shapeFlag&256||Q&&nn(Q.vnode)&&Q.vnode.shapeFlag&256)&&c.a&&wt(c.a,q),c.isMounted=!0,d=m=b=null}};c.scope.on();const P=c.effect=new Wi(I);c.scope.off();const S=c.update=P.run.bind(P),U=c.job=P.runIfDirty.bind(P);U.i=c,U.id=c.uid,P.scheduler=()=>Ds(U),Se(c,!0),S()},Y=(c,d,m)=>{d.component=c;const b=c.vnode.props;c.vnode=d,c.next=null,Tr(c,d.props,b,m),Lr(c,d.children,m),ie(),Js(c),le()},$=(c,d,m,b,q,y,C,I,P=!1)=>{const S=c&&c.children,U=c?c.shapeFlag:0,E=d.children,{patchFlag:O,shapeFlag:j}=d;if(O>0){if(O&128){ue(S,E,m,b,q,y,C,I,P);return}else if(O&256){Jt(S,E,m,b,q,y,C,I,P);return}}j&8?(U&16&&At(S,q,y),E!==S&&u(m,E)):U&16?j&16?ue(S,E,m,b,q,y,C,I,P):At(S,q,y,!0):(U&8&&u(m,""),j&16&&Ot(E,m,b,q,y,C,I,P))},Jt=(c,d,m,b,q,y,C,I,P)=>{c=c||Oe,d=d||Oe;const S=c.length,U=d.length,E=Math.min(S,U);let O;for(O=0;O<E;O++){const j=d[O]=P?me(d[O]):$t(d[O]);A(c[O],j,m,null,q,y,C,I,P)}S>U?At(c,q,y,!0,!1,E):Ot(d,m,b,q,y,C,I,P,E)},ue=(c,d,m,b,q,y,C,I,P)=>{let S=0;const U=d.length;let E=c.length-1,O=U-1;for(;S<=E&&S<=O;){const j=c[S],F=d[S]=P?me(d[S]):$t(d[S]);if(Je(j,F))A(j,F,m,null,q,y,C,I,P);else break;S++}for(;S<=E&&S<=O;){const j=c[E],F=d[O]=P?me(d[O]):$t(d[O]);if(Je(j,F))A(j,F,m,null,q,y,C,I,P);else break;E--,O--}if(S>E){if(S<=O){const j=O+1,F=j<U?d[j].el:b;for(;S<=O;)A(null,d[S]=P?me(d[S]):$t(d[S]),m,F,q,y,C,I,P),S++}}else if(S>O)for(;S<=E;)qt(c[S],q,y,!0),S++;else{const j=S,F=S,tt=new Map;for(S=F;S<=O;S++){const Ct=d[S]=P?me(d[S]):$t(d[S]);Ct.key!=null&&tt.set(Ct.key,S)}let Q,St=0;const Pt=O-F+1;let Vt=!1,Ht=0;const Ke=new Array(Pt);for(S=0;S<Pt;S++)Ke[S]=0;for(S=j;S<=E;S++){const Ct=c[S];if(St>=Pt){qt(Ct,q,y,!0);continue}let zt;if(Ct.key!=null)zt=tt.get(Ct.key);else for(Q=F;Q<=O;Q++)if(Ke[Q-F]===0&&Je(Ct,d[Q])){zt=Q;break}zt===void 0?qt(Ct,q,y,!0):(Ke[zt-F]=S+1,zt>=Ht?Ht=zt:Vt=!0,A(Ct,d[zt],m,null,q,y,C,I,P),St++)}const zs=Vt?jr(Ke):Oe;for(Q=zs.length-1,S=Pt-1;S>=0;S--){const Ct=F+S,zt=d[Ct],Gs=d[Ct+1],Fs=Ct+1<U?Gs.el||Gs.placeholder:b;Ke[S]===0?A(null,zt,m,Fs,q,y,C,I,P):Vt&&(Q<0||S!==zs[Q]?jt(zt,m,Fs,2):Q--)}}},jt=(c,d,m,b,q=null)=>{const{el:y,type:C,transition:I,children:P,shapeFlag:S}=c;if(S&6){jt(c.component.subTree,d,m,b);return}if(S&128){c.suspense.move(d,m,b);return}if(S&64){C.move(c,d,m,L);return}if(C===ot){s(y,d,m);for(let E=0;E<P.length;E++)jt(P[E],d,m,b);s(c.anchor,d,m);return}if(C===Pn){B(c,d,m);return}if(b!==2&&S&1&&I)if(b===0)I.beforeEnter(y),s(y,d,m),wt(()=>I.enter(y),q);else{const{leave:E,delayLeave:O,afterLeave:j}=I,F=()=>{c.ctx.isUnmounted?i(y):s(y,d,m)},tt=()=>{y._isLeaving&&y[Zo](!0),E(y,()=>{F(),j&&j()})};O?O(y,F,tt):tt()}else s(y,d,m)},qt=(c,d,m,b=!1,q=!1)=>{const{type:y,props:C,ref:I,children:P,dynamicChildren:S,shapeFlag:U,patchFlag:E,dirs:O,cacheIndex:j}=c;if(E===-2&&(q=!1),I!=null&&(ie(),en(I,null,m,c,!0),le()),j!=null&&(d.renderCache[j]=void 0),U&256){d.ctx.deactivate(c);return}const F=U&1&&O,tt=!nn(c);let Q;if(tt&&(Q=C&&C.onVnodeBeforeUnmount)&&Gt(Q,d,c),U&6)ve(c.component,m,b);else{if(U&128){c.suspense.unmount(m,b);return}F&&qe(c,null,d,"beforeUnmount"),U&64?c.type.remove(c,d,m,L,b):S&&!S.hasOnce&&(y!==ot||E>0&&E&64)?At(S,d,m,!1,!0):(y===ot&&E&384||!q&&U&16)&&At(P,d,m),b&&ke(c)}(tt&&(Q=C&&C.onVnodeUnmounted)||F)&&wt(()=>{Q&&Gt(Q,d,c),F&&qe(c,null,d,"unmounted")},m)},ke=c=>{const{type:d,el:m,anchor:b,transition:q}=c;if(d===ot){Te(m,b);return}if(d===Pn){M(c);return}const y=()=>{i(m),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(c.shapeFlag&1&&q&&!q.persisted){const{leave:C,delayLeave:I}=q,P=()=>C(m,y);I?I(c.el,y,P):P()}else y()},Te=(c,d)=>{let m;for(;c!==d;)m=f(c),i(c),c=m;i(d)},ve=(c,d,m)=>{const{bum:b,scope:q,job:y,subTree:C,um:I,m:P,a:S}=c;li(P),li(S),b&&vn(b),q.stop(),y&&(y.flags|=8,qt(C,c,d,m)),I&&wt(I,d),wt(()=>{c.isUnmounted=!0},d)},At=(c,d,m,b=!1,q=!1,y=0)=>{for(let C=y;C<c.length;C++)qt(c[C],d,m,b,q)},v=c=>{if(c.shapeFlag&6)return v(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const d=f(c.anchor||c.el),m=d&&d[Yo];return m?f(m):d};let _=!1;const w=(c,d,m)=>{c==null?d._vnode&&qt(d._vnode,null,null,!0):A(d._vnode||null,c,d,null,null,null,m),d._vnode=c,_||(_=!0,Js(),ml(),_=!1)},L={p:A,um:qt,m:jt,r:ke,mt:$e,mc:Ot,pc:$,pbc:Bt,n:v,o:t};return{render:w,hydrate:void 0,createApp:vr(w)}}function Zn({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Se({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ur(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ul(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let l=0;l<s.length;l++){const o=s[l];let r=i[l];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[l]=me(i[l]),r.el=o.el),!n&&r.patchFlag!==-2&&Ul(o,r)),r.type===Gn&&r.patchFlag!==-1&&(r.el=o.el),r.type===xe&&!r.el&&(r.el=o.el)}}function jr(t){const e=t.slice(),n=[0];let s,i,l,o,r;const a=t.length;for(s=0;s<a;s++){const p=t[s];if(p!==0){if(i=n[n.length-1],t[i]<p){e[s]=i,n.push(s);continue}for(l=0,o=n.length-1;l<o;)r=l+o>>1,t[n[r]]<p?l=r+1:o=r;p<t[n[l]]&&(l>0&&(e[s]=n[l-1]),n[l]=s)}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=e[o];return n}function jl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jl(e)}function li(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vl=t=>t.__isSuspense;function Vr(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Jo(t)}const ot=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),xe=Symbol.for("v-cmt"),Pn=Symbol.for("v-stc"),ln=[];let _t=null;function k(t=!1){ln.push(_t=t?null:[])}function Hr(){ln.pop(),_t=ln[ln.length-1]||null}let gn=1;function kn(t,e=!1){gn+=t,t<0&&_t&&e&&(_t.hasOnce=!0)}function Hl(t){return t.dynamicChildren=gn>0?_t||Oe:null,Hr(),gn>0&&_t&&_t.push(t),t}function N(t,e,n,s,i,l){return Hl(h(t,e,n,s,i,l,!0))}function Us(t,e,n,s,i){return Hl(rt(t,e,n,s,i,!0))}function Tn(t){return t?t.__v_isVNode===!0:!1}function Je(t,e){return t.type===e.type&&t.key===e.key}const zl=({key:t})=>t??null,In=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ct(t)||ht(t)||H(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,l=t===ot?0:1,o=!1,r=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zl(e),ref:e&&In(e),scopeId:hl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Rt};return r?(js(a,n),l&128&&t.normalize(a)):n&&(a.shapeFlag|=ct(n)?8:16),gn>0&&!o&&_t&&(a.patchFlag>0||l&6)&&a.patchFlag!==32&&_t.push(a),a}const rt=zr;function zr(t,e=null,n=null,s=0,i=null,l=!1){if((!t||t===Pl)&&(t=xe),Tn(t)){const r=ze(t,e,!0);return n&&js(r,n),gn>0&&!l&&_t&&(r.shapeFlag&6?_t[_t.indexOf(t)]=r:_t.push(r)),r.patchFlag=-2,r}if(ea(t)&&(t=t.__vccOpts),e){e=Gr(e);let{class:r,style:a}=e;r&&!ct(r)&&(e.class=Ee(r)),st(a)&&(Ns(a)&&!V(a)&&(a=xt({},a)),e.style=Es(a))}const o=ct(t)?1:Vl(t)?128:Xo(t)?64:st(t)?4:H(t)?2:0;return h(t,e,n,s,i,o,l,!0)}function Gr(t){return t?Ns(t)||Ml(t)?xt({},t):t:null}function ze(t,e,n=!1,s=!1){const{props:i,ref:l,patchFlag:o,children:r,transition:a}=t,p=e?Fr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&zl(p),ref:e&&e.ref?n&&l?V(l)?l.concat(In(e)):[l,In(e)]:In(e):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ze(t.ssContent),ssFallback:t.ssFallback&&ze(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Ls(u,a.clone(u)),u}function Re(t=" ",e=0){return rt(Gn,null,t,e)}function nt(t,e){const n=rt(Pn,null,t);return n.staticCount=e,n}function Zt(t="",e=!1){return e?(k(),Us(xe,null,t)):rt(xe,null,t)}function $t(t){return t==null||typeof t=="boolean"?rt(xe):V(t)?rt(ot,null,t.slice()):Tn(t)?me(t):rt(Gn,null,String(t))}function me(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ze(t)}function js(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),js(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ml(e)?e._ctx=Rt:i===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),s&64?(n=16,e=[Re(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fr(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ee([e.class,s.class]));else if(i==="style")e.style=Es([e.style,s.style]);else if(Nn(i)){const l=e[i],o=s[i];o&&l!==o&&!(V(l)&&l.includes(o))&&(e[i]=l?[].concat(l,o):o)}else i!==""&&(e[i]=s[i])}return e}function Gt(t,e,n,s=null){Wt(t,e,7,[n,s])}const $r=El();let Kr=0;function Wr(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||$r,l={uid:Kr++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dl(s,i),emitsOptions:Al(s,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=e?e.root:l,l.emit=Cr.bind(null,l),t.ce&&t.ce(l),l}let ft=null;const Jr=()=>ft||Rt;let Mn,hs;{const t=Bn(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),l=>{i.length>1?i.forEach(o=>o(l)):i[0](l)}};Mn=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),hs=e("__VUE_SSR_SETTERS__",n=>pn=n)}const hn=t=>{const e=ft;return Mn(t),t.scope.on(),()=>{t.scope.off(),Mn(e)}},oi=()=>{ft&&ft.scope.off(),Mn(null)};function Gl(t){return t.vnode.shapeFlag&4}let pn=!1;function Qr(t,e=!1,n=!1){e&&hs(e);const{props:s,children:i}=t.vnode,l=Gl(t);kr(t,s,l,e),Dr(t,i,n||e);const o=l?Yr(t,e):void 0;return e&&hs(!1),o}function Yr(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pr);const{setup:s}=n;if(s){ie();const i=t.setupContext=s.length>1?Zr(t):null,l=hn(t),o=fn(s,t,0,[t.props,i]),r=Vi(o);if(le(),l(),(r||t.sp)&&!nn(t)&&yl(t),r){if(o.then(oi,oi),e)return o.then(a=>{ri(t,a)}).catch(a=>{Vn(a,t,0)});t.asyncDep=o}else ri(t,o)}else Fl(t)}function ri(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:st(e)&&(t.setupState=ul(e)),Fl(t)}function Fl(t,e,n){const s=t.type;t.render||(t.render=s.render||Kt);{const i=hn(t);ie();try{mr(t)}finally{le(),i()}}}const Xr={get(t,e){return mt(t,"get",""),t[e]}};function Zr(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Xr),slots:t.slots,emit:t.emit,expose:e}}function Fn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ul(Uo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sn)return sn[n](t)},has(e,n){return n in e||n in sn}})):t.proxy}function ta(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function ea(t){return H(t)&&"__vccOpts"in t}const Mt=(t,e)=>Go(t,e,pn);function $l(t,e,n){try{kn(-1);const s=arguments.length;return s===2?st(e)&&!V(e)?Tn(e)?rt(t,null,[e]):rt(t,e):rt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Tn(n)&&(n=[n]),rt(t,e,n))}finally{kn(1)}}const na="3.5.25";let xs;const ai=typeof window<"u"&&window.trustedTypes;if(ai)try{xs=ai.createPolicy("vue",{createHTML:t=>t})}catch{}const Kl=xs?t=>xs.createHTML(t):t=>t,sa="http://www.w3.org/2000/svg",ia="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,ci=Xt&&Xt.createElement("template"),la={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Xt.createElementNS(sa,t):e==="mathml"?Xt.createElementNS(ia,t):n?Xt.createElement(t,{is:n}):Xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,l){const o=n?n.previousSibling:e.lastChild;if(i&&(i===l||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{ci.innerHTML=Kl(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const r=ci.content;if(s==="svg"||s==="mathml"){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}e.insertBefore(r,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},oa=Symbol("_vtc");function ra(t,e,n){const s=t[oa];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ui=Symbol("_vod"),aa=Symbol("_vsh"),ca=Symbol(""),ua=/(?:^|;)\s*display\s*:/;function da(t,e,n){const s=t.style,i=ct(n);let l=!1;if(n&&!i){if(e)if(ct(e))for(const o of e.split(";")){const r=o.slice(0,o.indexOf(":")).trim();n[r]==null&&Cn(s,r,"")}else for(const o in e)n[o]==null&&Cn(s,o,"");for(const o in n)o==="display"&&(l=!0),Cn(s,o,n[o])}else if(i){if(e!==n){const o=s[ca];o&&(n+=";"+o),s.cssText=n,l=ua.test(n)}}else e&&t.removeAttribute("style");ui in t&&(t[ui]=l?s.display:"",t[aa]&&(s.display="none"))}const di=/\s*!important$/;function Cn(t,e,n){if(V(n))n.forEach(s=>Cn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ga(t,e);di.test(n)?t.setProperty(_e(s),n.replace(di,""),"important"):t[s]=n}}const gi=["Webkit","Moz","ms"],ts={};function ga(t,e){const n=ts[e];if(n)return n;let s=Tt(e);if(s!=="filter"&&s in t)return ts[e]=s;s=On(s);for(let i=0;i<gi.length;i++){const l=gi[i]+s;if(l in t)return ts[e]=l}return e}const pi="http://www.w3.org/1999/xlink";function mi(t,e,n,s,i,l=yo(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(pi,e.slice(6,e.length)):t.setAttributeNS(pi,e,n):n==null||l&&!Fi(n)?t.removeAttribute(e):t.setAttribute(e,l?"":ye(n)?String(n):n)}function fi(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kl(n):n);return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const r=l==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(r!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const r=typeof t[e];r==="boolean"?n=Fi(n):n==null&&r==="string"?(n="",o=!0):r==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function De(t,e,n,s){t.addEventListener(e,n,s)}function pa(t,e,n,s){t.removeEventListener(e,n,s)}const hi=Symbol("_vei");function ma(t,e,n,s,i=null){const l=t[hi]||(t[hi]={}),o=l[e];if(s&&o)o.value=s;else{const[r,a]=fa(e);if(s){const p=l[e]=ya(s,i);De(t,r,p,a)}else o&&(pa(t,r,o,a),l[e]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function fa(t){let e;if(xi.test(t)){e={};let s;for(;s=t.match(xi);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_e(t.slice(2)),e]}let es=0;const ha=Promise.resolve(),xa=()=>es||(ha.then(()=>es=0),es=Date.now());function ya(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Wt(ba(s,n.value),e,5,[s])};return n.value=t,n.attached=xa(),n}function ba(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,va=(t,e,n,s,i,l)=>{const o=i==="svg";e==="class"?ra(t,s,o):e==="style"?da(t,n,s):Nn(e)?Ps(e)||ma(t,e,n,s,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qa(t,e,s,o))?(fi(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mi(t,e,s,o,l,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ct(s))?fi(t,Tt(e),s,l,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),mi(t,e,s,o))};function qa(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&yi(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return yi(e)&&ct(n)?!1:e in t}const bi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>vn(e,n):e};function Sa(t){t.target.composing=!0}function vi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ns=Symbol("_assign");function qi(t,e,n){return e&&(t=t.trim()),n&&(t=ws(t)),t}const Pa={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[ns]=bi(i);const l=s||i.props&&i.props.type==="number";De(t,e?"change":"input",o=>{o.target.composing||t[ns](qi(t.value,n,l))}),(n||l)&&De(t,"change",()=>{t.value=qi(t.value,n,l)}),e||(De(t,"compositionstart",Sa),De(t,"compositionend",vi),De(t,"change",vi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:l}},o){if(t[ns]=bi(o),t.composing)return;const r=(l||t.type==="number")&&!/^0\d/.test(t.value)?ws(t.value):t.value,a=e??"";r!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Ia=["ctrl","shift","alt","meta"],Ca={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ia.some(n=>t[`${n}Key`]&&!e.includes(n))},wa=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((i,...l)=>{for(let o=0;o<e.length;o++){const r=Ca[e[o]];if(r&&r(i,e))return}return t(i,...l)}))},Ea=xt({patchProp:va},la);let Si;function Ra(){return Si||(Si=Or(Ea))}const _a=((...t)=>{const e=Ra().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=ka(s);if(!i)return;const l=e._component;!H(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Aa(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function Aa(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ka(t){return ct(t)?document.querySelector(t):t}const Le=typeof document<"u";function Wl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ta(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Wl(t.default)}const K=Object.assign;function ss(t,e){const n={};for(const s in e){const i=e[s];n[s]=Lt(i)?i.map(t):t(i)}return n}const on=()=>{},Lt=Array.isArray;function Pi(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Jl=/#/g,Ma=/&/g,Na=/\//g,Da=/=/g,La=/\?/g,Ql=/\+/g,Oa=/%5B/g,Ba=/%5D/g,Yl=/%5E/g,Ua=/%60/g,Xl=/%7B/g,ja=/%7C/g,Zl=/%7D/g,Va=/%20/g;function Vs(t){return t==null?"":encodeURI(""+t).replace(ja,"|").replace(Oa,"[").replace(Ba,"]")}function Ha(t){return Vs(t).replace(Xl,"{").replace(Zl,"}").replace(Yl,"^")}function ys(t){return Vs(t).replace(Ql,"%2B").replace(Va,"+").replace(Jl,"%23").replace(Ma,"%26").replace(Ua,"`").replace(Xl,"{").replace(Zl,"}").replace(Yl,"^")}function za(t){return ys(t).replace(Da,"%3D")}function Ga(t){return Vs(t).replace(Jl,"%23").replace(La,"%3F")}function Fa(t){return Ga(t).replace(Na,"%2F")}function mn(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const $a=/\/$/,Ka=t=>t.replace($a,"");function is(t,e,n="/"){let s,i={},l="",o="";const r=e.indexOf("#");let a=e.indexOf("?");return a=r>=0&&a>r?-1:a,a>=0&&(s=e.slice(0,a),l=e.slice(a,r>0?r:e.length),i=t(l.slice(1))),r>=0&&(s=s||e.slice(0,r),o=e.slice(r,e.length)),s=Ya(s??e,n),{fullPath:s+l+o,path:s,query:i,hash:mn(o)}}function Wa(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ii(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ja(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ge(e.matched[s],n.matched[i])&&to(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ge(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function to(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qa(t[n],e[n]))return!1;return!0}function Qa(t,e){return Lt(t)?Ci(t,e):Lt(e)?Ci(e,t):t===e}function Ci(t,e){return Lt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ya(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let l=n.length-1,o,r;for(o=0;o<s.length;o++)if(r=s[o],r!==".")if(r==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+s.slice(o).join("/")}const de={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let bs=(function(t){return t.pop="pop",t.push="push",t})({}),ls=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Xa(t){if(!t)if(Le){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ka(t)}const Za=/^[^#]+#/;function tc(t,e){return t.replace(Za,"#")+e}function ec(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const $n=()=>({left:window.scrollX,top:window.scrollY});function nc(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=ec(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wi(t,e){return(history.state?history.state.position-e:-1)+t}const vs=new Map;function sc(t,e){vs.set(t,e)}function ic(t){const e=vs.get(t);return vs.delete(t),e}function lc(t){return typeof t=="string"||t&&typeof t=="object"}function eo(t){return typeof t=="string"||typeof t=="symbol"}let lt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const no=Symbol("");lt.MATCHER_NOT_FOUND+"",lt.NAVIGATION_GUARD_REDIRECT+"",lt.NAVIGATION_ABORTED+"",lt.NAVIGATION_CANCELLED+"",lt.NAVIGATION_DUPLICATED+"";function Fe(t,e){return K(new Error,{type:t,[no]:!0},e)}function Yt(t,e){return t instanceof Error&&no in t&&(e==null||!!(t.type&e))}const oc=["params","query","hash"];function rc(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of oc)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function ac(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(Ql," "),l=i.indexOf("="),o=mn(l<0?i:i.slice(0,l)),r=l<0?null:mn(i.slice(l+1));if(o in e){let a=e[o];Lt(a)||(a=e[o]=[a]),a.push(r)}else e[o]=r}return e}function Ei(t){let e="";for(let n in t){const s=t[n];if(n=za(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Lt(s)?s.map(i=>i&&ys(i)):[s&&ys(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cc(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Lt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const uc=Symbol(""),Ri=Symbol(""),Hs=Symbol(""),so=Symbol(""),qs=Symbol("");function Qe(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fe(t,e,n,s,i,l=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((r,a)=>{const p=f=>{f===!1?a(Fe(lt.NAVIGATION_ABORTED,{from:n,to:e})):f instanceof Error?a(f):lc(f)?a(Fe(lt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),r())},u=l(()=>t.call(s&&s.instances[i],e,n,p));let g=Promise.resolve(u);t.length<3&&(g=g.then(p)),g.catch(f=>a(f))})}function os(t,e,n,s,i=l=>l()){const l=[];for(const o of t)for(const r in o.components){let a=o.components[r];if(!(e!=="beforeRouteEnter"&&!o.instances[r]))if(Wl(a)){const p=(a.__vccOpts||a)[e];p&&l.push(fe(p,n,s,o,r,i))}else{let p=a();l.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${r}" at "${o.path}"`);const g=Ta(u)?u.default:u;o.mods[r]=u,o.components[r]=g;const f=(g.__vccOpts||g)[e];return f&&fe(f,n,s,o,r,i)()}))}}return l}function dc(t,e){const n=[],s=[],i=[],l=Math.max(e.matched.length,t.matched.length);for(let o=0;o<l;o++){const r=e.matched[o];r&&(t.matched.find(p=>Ge(p,r))?s.push(r):n.push(r));const a=t.matched[o];a&&(e.matched.find(p=>Ge(p,a))||i.push(a))}return[n,s,i]}let gc=()=>location.protocol+"//"+location.host;function io(t,e){const{pathname:n,search:s,hash:i}=e,l=t.indexOf("#");if(l>-1){let o=i.includes(t.slice(l))?t.slice(l).length:1,r=i.slice(o);return r[0]!=="/"&&(r="/"+r),Ii(r,"")}return Ii(n,t)+s+i}function pc(t,e,n,s){let i=[],l=[],o=null;const r=({state:f})=>{const x=io(t,location),R=n.value,A=e.value;let z=0;if(f){if(n.value=x,e.value=f,o&&o===R){o=null;return}z=A?f.position-A.position:0}else s(x);i.forEach(D=>{D(n.value,R,{delta:z,type:bs.pop,direction:z?z>0?ls.forward:ls.back:ls.unknown})})};function a(){o=n.value}function p(f){i.push(f);const x=()=>{const R=i.indexOf(f);R>-1&&i.splice(R,1)};return l.push(x),x}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(K({},f.state,{scroll:$n()}),"")}}function g(){for(const f of l)f();l=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:a,listen:p,destroy:g}}function _i(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?$n():null}}function mc(t){const{history:e,location:n}=window,s={value:io(t,n)},i={value:e.state};i.value||l(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function l(a,p,u){const g=t.indexOf("#"),f=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+a:gc()+t+a;try{e[u?"replaceState":"pushState"](p,"",f),i.value=p}catch(x){console.error(x),n[u?"replace":"assign"](f)}}function o(a,p){l(a,K({},e.state,_i(i.value.back,a,i.value.forward,!0),p,{position:i.value.position}),!0),s.value=a}function r(a,p){const u=K({},i.value,e.state,{forward:a,scroll:$n()});l(u.current,u,!0),l(a,K({},_i(s.value,a,null),{position:u.position+1},p),!1),s.value=a}return{location:s,state:i,push:r,replace:o}}function fc(t){t=Xa(t);const e=mc(t),n=pc(t,e.state,e.location,e.replace);function s(l,o=!0){o||n.pauseListeners(),history.go(l)}const i=K({location:"",base:t,go:s,createHref:tc.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}let Ie=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var ut=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(ut||{});const hc={type:Ie.Static,value:""},xc=/[a-zA-Z0-9_]/;function yc(t){if(!t)return[[]];if(t==="/")return[[hc]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(x){throw new Error(`ERR (${n})/"${p}": ${x}`)}let n=ut.Static,s=n;const i=[];let l;function o(){l&&i.push(l),l=[]}let r=0,a,p="",u="";function g(){p&&(n===ut.Static?l.push({type:Ie.Static,value:p}):n===ut.Param||n===ut.ParamRegExp||n===ut.ParamRegExpEnd?(l.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Ie.Param,value:p,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),p="")}function f(){p+=a}for(;r<t.length;){if(a=t[r++],a==="\\"&&n!==ut.ParamRegExp){s=n,n=ut.EscapeNext;continue}switch(n){case ut.Static:a==="/"?(p&&g(),o()):a===":"?(g(),n=ut.Param):f();break;case ut.EscapeNext:f(),n=s;break;case ut.Param:a==="("?n=ut.ParamRegExp:xc.test(a)?f():(g(),n=ut.Static,a!=="*"&&a!=="?"&&a!=="+"&&r--);break;case ut.ParamRegExp:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=ut.ParamRegExpEnd:u+=a;break;case ut.ParamRegExpEnd:g(),n=ut.Static,a!=="*"&&a!=="?"&&a!=="+"&&r--,u="";break;default:e("Unknown state");break}}return n===ut.ParamRegExp&&e(`Unfinished custom RegExp for param "${p}"`),g(),o(),i}const Ai="[^/]+?",bc={sensitive:!1,strict:!1,start:!0,end:!0};var bt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(bt||{});const vc=/[.+*?^${}()[\]/\\]/g;function qc(t,e){const n=K({},bc,e),s=[];let i=n.start?"^":"";const l=[];for(const p of t){const u=p.length?[]:[bt.Root];n.strict&&!p.length&&(i+="/");for(let g=0;g<p.length;g++){const f=p[g];let x=bt.Segment+(n.sensitive?bt.BonusCaseSensitive:0);if(f.type===Ie.Static)g||(i+="/"),i+=f.value.replace(vc,"\\$&"),x+=bt.Static;else if(f.type===Ie.Param){const{value:R,repeatable:A,optional:z,regexp:D}=f;l.push({name:R,repeatable:A,optional:z});const T=D||Ai;if(T!==Ai){x+=bt.BonusCustomRegExp;try{`${T}`}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${T}): `+M.message)}}let B=A?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;g||(B=z&&p.length<2?`(?:/${B})`:"/"+B),z&&(B+="?"),i+=B,x+=bt.Dynamic,z&&(x+=bt.BonusOptional),A&&(x+=bt.BonusRepeatable),T===".*"&&(x+=bt.BonusWildcard)}u.push(x)}s.push(u)}if(n.strict&&n.end){const p=s.length-1;s[p][s[p].length-1]+=bt.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function r(p){const u=p.match(o),g={};if(!u)return null;for(let f=1;f<u.length;f++){const x=u[f]||"",R=l[f-1];g[R.name]=x&&R.repeatable?x.split("/"):x}return g}function a(p){let u="",g=!1;for(const f of t){(!g||!u.endsWith("/"))&&(u+="/"),g=!1;for(const x of f)if(x.type===Ie.Static)u+=x.value;else if(x.type===Ie.Param){const{value:R,repeatable:A,optional:z}=x,D=R in p?p[R]:"";if(Lt(D)&&!A)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const T=Lt(D)?D.join("/"):D;if(!T)if(z)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):g=!0);else throw new Error(`Missing required param "${R}"`);u+=T}}return u||"/"}return{re:o,score:s,keys:l,parse:r,stringify:a}}function Sc(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===bt.Static+bt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===bt.Static+bt.Segment?1:-1:0}function lo(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const l=Sc(s[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-s.length)===1){if(ki(s))return 1;if(ki(i))return-1}return i.length-s.length}function ki(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pc={strict:!1,end:!0,sensitive:!1};function Ic(t,e,n){const s=qc(yc(t.path),n),i=K(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Cc(t,e){const n=[],s=new Map;e=Pi(Pc,e);function i(g){return s.get(g)}function l(g,f,x){const R=!x,A=Mi(g);A.aliasOf=x&&x.record;const z=Pi(e,g),D=[A];if("alias"in g){const M=typeof g.alias=="string"?[g.alias]:g.alias;for(const X of M)D.push(Mi(K({},A,{components:x?x.record.components:A.components,path:X,aliasOf:x?x.record:A})))}let T,B;for(const M of D){const{path:X}=M;if(f&&X[0]!=="/"){const pt=f.record.path,it=pt[pt.length-1]==="/"?"":"/";M.path=f.record.path+(X&&it+X)}if(T=Ic(M,f,z),x?x.alias.push(T):(B=B||T,B!==T&&B.alias.push(T),R&&g.name&&!Ni(T)&&o(g.name)),oo(T)&&a(T),A.children){const pt=A.children;for(let it=0;it<pt.length;it++)l(pt[it],T,x&&x.children[it])}x=x||T}return B?()=>{o(B)}:on}function o(g){if(eo(g)){const f=s.get(g);f&&(s.delete(g),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(g);f>-1&&(n.splice(f,1),g.record.name&&s.delete(g.record.name),g.children.forEach(o),g.alias.forEach(o))}}function r(){return n}function a(g){const f=Rc(g,n);n.splice(f,0,g),g.record.name&&!Ni(g)&&s.set(g.record.name,g)}function p(g,f){let x,R={},A,z;if("name"in g&&g.name){if(x=s.get(g.name),!x)throw Fe(lt.MATCHER_NOT_FOUND,{location:g});z=x.record.name,R=K(Ti(f.params,x.keys.filter(B=>!B.optional).concat(x.parent?x.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),g.params&&Ti(g.params,x.keys.map(B=>B.name))),A=x.stringify(R)}else if(g.path!=null)A=g.path,x=n.find(B=>B.re.test(A)),x&&(R=x.parse(A),z=x.record.name);else{if(x=f.name?s.get(f.name):n.find(B=>B.re.test(f.path)),!x)throw Fe(lt.MATCHER_NOT_FOUND,{location:g,currentLocation:f});z=x.record.name,R=K({},f.params,g.params),A=x.stringify(R)}const D=[];let T=x;for(;T;)D.unshift(T.record),T=T.parent;return{name:z,path:A,params:R,matched:D,meta:Ec(D)}}t.forEach(g=>l(g));function u(){n.length=0,s.clear()}return{addRoute:l,resolve:p,removeRoute:o,clearRoutes:u,getRoutes:r,getRecordMatcher:i}}function Ti(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Mi(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:wc(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function wc(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ni(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ec(t){return t.reduce((e,n)=>K(e,n.meta),{})}function Rc(t,e){let n=0,s=e.length;for(;n!==s;){const l=n+s>>1;lo(t,e[l])<0?s=l:n=l+1}const i=_c(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function _c(t){let e=t;for(;e=e.parent;)if(oo(e)&&lo(t,e)===0)return e}function oo({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Di(t){const e=se(Hs),n=se(so),s=Mt(()=>{const a=Ue(t.to);return e.resolve(a)}),i=Mt(()=>{const{matched:a}=s.value,{length:p}=a,u=a[p-1],g=n.matched;if(!u||!g.length)return-1;const f=g.findIndex(Ge.bind(null,u));if(f>-1)return f;const x=Li(a[p-2]);return p>1&&Li(u)===x&&g[g.length-1].path!==x?g.findIndex(Ge.bind(null,a[p-2])):f}),l=Mt(()=>i.value>-1&&Nc(n.params,s.value.params)),o=Mt(()=>i.value>-1&&i.value===n.matched.length-1&&to(n.params,s.value.params));function r(a={}){if(Mc(a)){const p=e[Ue(t.replace)?"replace":"push"](Ue(t.to)).catch(on);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:s,href:Mt(()=>s.value.href),isActive:l,isExactActive:o,navigate:r}}function Ac(t){return t.length===1?t[0]:t}const kc=xl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Di,setup(t,{slots:e}){const n=jn(Di(t)),{options:s}=se(Hs),i=Mt(()=>({[Oi(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Oi(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=e.default&&Ac(e.default(n));return t.custom?l:$l("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),Tc=kc;function Mc(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nc(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Lt(i)||i.length!==s.length||s.some((l,o)=>l!==i[o]))return!1}return!0}function Li(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Oi=(t,e,n)=>t??e??n,Dc=xl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=se(qs),i=Mt(()=>t.route||s.value),l=se(Ri,0),o=Mt(()=>{let p=Ue(l);const{matched:u}=i.value;let g;for(;(g=u[p])&&!g.components;)p++;return p}),r=Mt(()=>i.value.matched[o.value]);qn(Ri,Mt(()=>o.value+1)),qn(uc,r),qn(qs,i);const a=cn();return Sn(()=>[a.value,r.value,t.name],([p,u,g],[f,x,R])=>{u&&(u.instances[g]=p,x&&x!==u&&p&&p===f&&(u.leaveGuards.size||(u.leaveGuards=x.leaveGuards),u.updateGuards.size||(u.updateGuards=x.updateGuards))),p&&u&&(!x||!Ge(u,x)||!f)&&(u.enterCallbacks[g]||[]).forEach(A=>A(p))},{flush:"post"}),()=>{const p=i.value,u=t.name,g=r.value,f=g&&g.components[u];if(!f)return Bi(n.default,{Component:f,route:p});const x=g.props[u],R=x?x===!0?p.params:typeof x=="function"?x(p):x:null,z=$l(f,K({},R,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(g.instances[u]=null)},ref:a}));return Bi(n.default,{Component:z,route:p})||z}}});function Bi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lc=Dc;function Oc(t){const e=Cc(t.routes,t),n=t.parseQuery||ac,s=t.stringifyQuery||Ei,i=t.history,l=Qe(),o=Qe(),r=Qe(),a=jo(de);let p=de;Le&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ss.bind(null,v=>""+v),g=ss.bind(null,Fa),f=ss.bind(null,mn);function x(v,_){let w,L;return eo(v)?(w=e.getRecordMatcher(v),L=_):L=v,e.addRoute(L,w)}function R(v){const _=e.getRecordMatcher(v);_&&e.removeRoute(_)}function A(){return e.getRoutes().map(v=>v.record)}function z(v){return!!e.getRecordMatcher(v)}function D(v,_){if(_=K({},_||a.value),typeof v=="string"){const m=is(n,v,_.path),b=e.resolve({path:m.path},_),q=i.createHref(m.fullPath);return K(m,b,{params:f(b.params),hash:mn(m.hash),redirectedFrom:void 0,href:q})}let w;if(v.path!=null)w=K({},v,{path:is(n,v.path,_.path).path});else{const m=K({},v.params);for(const b in m)m[b]==null&&delete m[b];w=K({},v,{params:g(m)}),_.params=g(_.params)}const L=e.resolve(w,_),G=v.hash||"";L.params=u(f(L.params));const c=Wa(s,K({},v,{hash:Ha(G),path:L.path})),d=i.createHref(c);return K({fullPath:c,hash:G,query:s===Ei?cc(v.query):v.query||{}},L,{redirectedFrom:void 0,href:d})}function T(v){return typeof v=="string"?is(n,v,a.value.path):K({},v)}function B(v,_){if(p!==v)return Fe(lt.NAVIGATION_CANCELLED,{from:_,to:v})}function M(v){return it(v)}function X(v){return M(K(T(v),{replace:!0}))}function pt(v,_){const w=v.matched[v.matched.length-1];if(w&&w.redirect){const{redirect:L}=w;let G=typeof L=="function"?L(v,_):L;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=T(G):{path:G},G.params={}),K({query:v.query,hash:v.hash,params:G.path!=null?{}:v.params},G)}}function it(v,_){const w=p=D(v),L=a.value,G=v.state,c=v.force,d=v.replace===!0,m=pt(w,L);if(m)return it(K(T(m),{state:typeof m=="object"?K({},G,m.state):G,force:c,replace:d}),_||w);const b=w;b.redirectedFrom=_;let q;return!c&&Ja(s,L,w)&&(q=Fe(lt.NAVIGATION_DUPLICATED,{to:b,from:L}),jt(L,L,!0,!1)),(q?Promise.resolve(q):Bt(b,L)).catch(y=>Yt(y)?Yt(y,lt.NAVIGATION_GUARD_REDIRECT)?y:ue(y):$(y,b,L)).then(y=>{if(y){if(Yt(y,lt.NAVIGATION_GUARD_REDIRECT))return it(K({replace:d},T(y.to),{state:typeof y.to=="object"?K({},G,y.to.state):G,force:c}),_||b)}else y=be(b,L,!0,d,G);return ce(b,L,y),y})}function Ot(v,_){const w=B(v,_);return w?Promise.reject(w):Promise.resolve()}function ae(v){const _=Te.values().next().value;return _&&typeof _.runWithContext=="function"?_.runWithContext(v):v()}function Bt(v,_){let w;const[L,G,c]=dc(v,_);w=os(L.reverse(),"beforeRouteLeave",v,_);for(const m of L)m.leaveGuards.forEach(b=>{w.push(fe(b,v,_))});const d=Ot.bind(null,v,_);return w.push(d),At(w).then(()=>{w=[];for(const m of l.list())w.push(fe(m,v,_));return w.push(d),At(w)}).then(()=>{w=os(G,"beforeRouteUpdate",v,_);for(const m of G)m.updateGuards.forEach(b=>{w.push(fe(b,v,_))});return w.push(d),At(w)}).then(()=>{w=[];for(const m of c)if(m.beforeEnter)if(Lt(m.beforeEnter))for(const b of m.beforeEnter)w.push(fe(b,v,_));else w.push(fe(m.beforeEnter,v,_));return w.push(d),At(w)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),w=os(c,"beforeRouteEnter",v,_,ae),w.push(d),At(w))).then(()=>{w=[];for(const m of o.list())w.push(fe(m,v,_));return w.push(d),At(w)}).catch(m=>Yt(m,lt.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function ce(v,_,w){r.list().forEach(L=>ae(()=>L(v,_,w)))}function be(v,_,w,L,G){const c=B(v,_);if(c)return c;const d=_===de,m=Le?history.state:{};w&&(L||d?i.replace(v.fullPath,K({scroll:d&&m&&m.scroll},G)):i.push(v.fullPath,G)),a.value=v,jt(v,_,w,d),ue()}let Ut;function $e(){Ut||(Ut=i.listen((v,_,w)=>{if(!ve.listening)return;const L=D(v),G=pt(L,ve.currentRoute.value);if(G){it(K(G,{replace:!0,force:!0}),L).catch(on);return}p=L;const c=a.value;Le&&sc(wi(c.fullPath,w.delta),$n()),Bt(L,c).catch(d=>Yt(d,lt.NAVIGATION_ABORTED|lt.NAVIGATION_CANCELLED)?d:Yt(d,lt.NAVIGATION_GUARD_REDIRECT)?(it(K(T(d.to),{force:!0}),L).then(m=>{Yt(m,lt.NAVIGATION_ABORTED|lt.NAVIGATION_DUPLICATED)&&!w.delta&&w.type===bs.pop&&i.go(-1,!1)}).catch(on),Promise.reject()):(w.delta&&i.go(-w.delta,!1),$(d,L,c))).then(d=>{d=d||be(L,c,!1),d&&(w.delta&&!Yt(d,lt.NAVIGATION_CANCELLED)?i.go(-w.delta,!1):w.type===bs.pop&&Yt(d,lt.NAVIGATION_ABORTED|lt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ce(L,c,d)}).catch(on)}))}let Ae=Qe(),gt=Qe(),Y;function $(v,_,w){ue(v);const L=gt.list();return L.length?L.forEach(G=>G(v,_,w)):console.error(v),Promise.reject(v)}function Jt(){return Y&&a.value!==de?Promise.resolve():new Promise((v,_)=>{Ae.add([v,_])})}function ue(v){return Y||(Y=!v,$e(),Ae.list().forEach(([_,w])=>v?w(v):_()),Ae.reset()),v}function jt(v,_,w,L){const{scrollBehavior:G}=t;if(!Le||!G)return Promise.resolve();const c=!w&&ic(wi(v.fullPath,0))||(L||!w)&&history.state&&history.state.scroll||null;return gl().then(()=>G(v,_,c)).then(d=>d&&nc(d)).catch(d=>$(d,v,_))}const qt=v=>i.go(v);let ke;const Te=new Set,ve={currentRoute:a,listening:!0,addRoute:x,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:z,getRoutes:A,resolve:D,options:t,push:M,replace:X,go:qt,back:()=>qt(-1),forward:()=>qt(1),beforeEach:l.add,beforeResolve:o.add,afterEach:r.add,onError:gt.add,isReady:Jt,install(v){v.component("RouterLink",Tc),v.component("RouterView",Lc),v.config.globalProperties.$router=ve,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ue(a)}),Le&&!ke&&a.value===de&&(ke=!0,M(i.location).catch(L=>{}));const _={};for(const L in de)Object.defineProperty(_,L,{get:()=>a.value[L],enumerable:!0});v.provide(Hs,ve),v.provide(so,al(_)),v.provide(qs,a);const w=v.unmount;Te.add(v),v.unmount=function(){Te.delete(v),Te.size<1&&(p=de,Ut&&Ut(),Ut=null,a.value=de,ke=!1,Y=!1),w()}}};function At(v){return v.reduce((_,w)=>_.then(()=>ae(w)),Promise.resolve())}return ve}const Bc={class:"min-h-screen bg-gray-50"},Uc={class:"bg-white border-b border-gray-200 sticky top-0 z-50"},jc={class:"container"},Vc={class:"flex items-center justify-between h-16"},Hc={class:"flex items-center space-x-4"},zc={class:"hidden md:flex items-center space-x-6"},Gc={class:"flex"},Fc={class:"w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16"},$c={class:"p-4"},Kc={class:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3"},Wc={class:"space-y-1"},Jc={class:"flex-1"},Qc={class:"container py-8"},Yc={__name:"App",setup(t){const e=cn([{name:"介绍",path:"/introduction"},{name:"快速开始",path:"/quickstart"},{name:"配置",path:"/configuration"},{name:"插件开发",path:"/plugins"},{name:"API",path:"/api"},{name:"示例",path:"/examples"},{name:"使用企业",path:"/enterprise-users"},{name:"联系我们",path:"/contact"}]),n=cn([{title:"入门指南",items:[{name:"功能介绍",path:"/introduction"},{name:"快速开始",path:"/quickstart"},{name:"项目目录结构",path:"/project-structure"}]},{title:"开发指南",items:[{name:"主程序配置",path:"/configuration"},{name:"插件开发",path:"/plugins"},{name:"插件打包",path:"/plugins-packaging"},{name:"动态部署",path:"/dynamic-deployment"}]},{title:"核心功能",items:[{name:"插件生命周期管理",path:"/plugin-lifecycle"},{name:"配置管理",path:"/configuration-management"},{name:"性能监控",path:"/performance-monitoring"},{name:"安全机制",path:"/security"}]},{title:"API参考",items:[{name:"API文档",path:"/api"},{name:"注解说明",path:"/annotations"},{name:"配置参数",path:"/config-parameters"}]},{title:"其他",items:[{name:"示例项目",path:"/examples"},{name:"使用企业",path:"/enterprise-users"},{name:"版本升级说明",path:"/changelog"},{name:"常见问题",path:"/faq"},{name:"联系我们",path:"/contact"}]}]);return(s,i)=>{const l=dn("router-link"),o=dn("router-view");return k(),N("div",Bc,[h("header",Uc,[h("div",jc,[h("div",Vc,[h("div",Hc,[rt(l,{to:"/",class:"flex items-center space-x-2"},{default:ne(()=>[...i[0]||(i[0]=[h("div",{class:"w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"},[h("span",{class:"text-white font-bold text-sm"},"BB")],-1),h("span",{class:"text-xl font-bold text-gray-900"},"Brick BootKit",-1)])]),_:1}),i[1]||(i[1]=h("span",{class:"text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded"},"4.0.1",-1))]),h("nav",zc,[(k(!0),N(ot,null,Et(e.value,r=>(k(),Us(l,{key:r.name,to:r.path,class:"text-gray-600 hover:text-primary-600 transition-colors duration-200"},{default:ne(()=>[Re(at(r.name),1)]),_:2},1032,["to"]))),128))])])])]),h("div",Gc,[h("aside",Fc,[h("nav",$c,[(k(!0),N(ot,null,Et(n.value,r=>(k(),N("div",{key:r.title,class:"mb-6"},[h("h3",Kc,at(r.title),1),h("ul",Wc,[(k(!0),N(ot,null,Et(r.items,a=>(k(),N("li",{key:a.name},[rt(l,{to:a.path,class:Ee(["sidebar-item",s.$route.path===a.path?"sidebar-item-active":"sidebar-item-inactive"])},{default:ne(()=>[Re(at(a.name),1)]),_:2},1032,["to","class"])]))),128))])]))),128))])]),h("main",Jc,[h("div",Qc,[rt(o)])]),i[2]||(i[2]=h("aside",{class:"w-64 hidden xl:block"},[h("div",{class:"sticky top-16 p-4"},[h("h3",{class:"text-sm font-semibold text-gray-900 mb-3"},"目录"),h("nav",{id:"toc",class:"toc-nav"})])],-1))])])}}},Xc={class:"space-y-12"},Zc={class:"text-center space-y-6"},tu={class:"flex items-center justify-center space-x-4"},eu={class:"space-y-8"},nu={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},su={class:"w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4"},iu={class:"text-lg font-semibold text-gray-900 mb-2"},lu={class:"text-gray-600"},ou={class:"space-y-8"},ru={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},au={class:"text-lg font-semibold text-gray-900 mb-2"},cu={class:"text-gray-600 mb-3"},uu={class:"text-sm text-gray-500 space-y-1"},du={__name:"Home",setup(t){const e=cn([{title:"热插拔支持",description:"无需重启主程序，可动态安装、卸载、启动、停止插件",icon:"PluginIcon"},{title:"类加载隔离",description:"自定义类加载器，完全隔离插件依赖，解决版本冲突",icon:"LockIcon"},{title:"Spring原生体验",description:"插件开发体验与Spring Boot完全一致，简单易用",icon:"SpringIcon"},{title:"两种开发模式",description:"支持隔离模式和共享模式，灵活选择开发方式",icon:"ModeIcon"},{title:"性能监控",description:"集成Micrometer，提供插件性能监控和管理",icon:"ChartIcon"},{title:"安全管控",description:"完善的权限控制和安全扫描机制",icon:"ShieldIcon"}]),n=cn([{title:"To-B系统定制化",description:"不同客户需求差异化，通过插件实现个性化功能扩展",points:["扩展中台系统的不同需求","无需修改核心代码","按需安装客户特定插件"]},{title:"To-C系统功能扩展",description:"动态增加新功能模块，提升系统灵活性和可扩展性",points:["运行时动态功能加载","A/B测试和灰度发布","降低系统耦合度"]},{title:"微服务架构演进",description:"从单体应用平滑过渡到插件化架构",points:["平滑的系统重构","团队协作开发","降低系统复杂度"]},{title:"依赖版本冲突解决",description:"不同插件使用不同版本依赖，完全隔离",points:["同时支持不同版本的库","避免依赖冲突问题","灵活的依赖管理"]}]);return(s,i)=>{const l=dn("router-link");return k(),N("div",Xc,[h("section",Zc,[i[2]||(i[2]=h("div",{class:"w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto"},[h("span",{class:"text-white font-bold text-2xl"},"BB")],-1)),i[3]||(i[3]=h("h1",{class:"text-5xl font-bold text-gray-900"}," Brick BootKit SpringBoot ",-1)),i[4]||(i[4]=h("p",{class:"text-xl text-gray-600 max-w-3xl mx-auto"}," 基于 SpringBoot 3.x 的插件式开发框架，支持动态热插拔、类隔离、版本独立管理等高级特性 ",-1)),h("div",tu,[rt(l,{to:"/quickstart",class:"btn btn-primary"},{default:ne(()=>[...i[0]||(i[0]=[Re(" 快速开始 ",-1)])]),_:1}),i[1]||(i[1]=h("a",{href:"https://github.com/v18268185209/brick-bootkit-springboot",target:"_blank",class:"btn btn-secondary"}," GitHub ",-1))]),i[5]||(i[5]=h("div",{class:"text-sm text-gray-500"},[h("span",{class:"bg-green-100 text-green-800 px-2 py-1 rounded-full"},"v4.0.1"),h("span",{class:"mx-2"},"•"),h("span",null,"支持 SpringBoot 2.3.1+ 到 3.5+")],-1))]),h("section",eu,[i[6]||(i[6]=h("h2",{class:"text-3xl font-bold text-center text-gray-900"},"核心特性",-1)),h("div",nu,[(k(!0),N(ot,null,Et(e.value,o=>(k(),N("div",{key:o.title,class:"card"},[h("div",su,[(k(),Us(gr(o.icon),{class:"w-6 h-6 text-primary-600"}))]),h("h3",iu,at(o.title),1),h("p",lu,at(o.description),1)]))),128))])]),i[8]||(i[8]=nt('<section class="space-y-8"><h2 class="text-3xl font-bold text-center text-gray-900">架构设计</h2><div class="card"><div class="bg-gray-50 rounded-lg p-8 text-center"><div class="text-gray-600 mb-4">系统架构图</div><div class="text-sm text-gray-500"> ┌─────────────────────────────────────────────────────────────┐<br> │ 主应用程序 (Main Application) │<br> ├─────────────────────────────────────────────────────────────┤<br> │ 插件A (隔离模式) │ 插件B (共享模式) │ 插件C (隔离模式) │<br> ├─────────────────────────────────────────────────────────────┤<br> │ 插件管理层 (Plugin Management) │<br> ├─────────────────────────────────────────────────────────────┤<br> │ 核心框架层 (Core Framework) │<br> ├─────────────────────────────────────────────────────────────┤<br> │ Spring Boot 3.x + Java 17 │<br> └─────────────────────────────────────────────────────────────┘ </div></div></div></section>',1)),h("section",ou,[i[7]||(i[7]=h("h2",{class:"text-3xl font-bold text-center text-gray-900"},"适用场景",-1)),h("div",ru,[(k(!0),N(ot,null,Et(n.value,o=>(k(),N("div",{key:o.title,class:"card"},[h("h3",au,at(o.title),1),h("p",cu,at(o.description),1),h("ul",uu,[(k(!0),N(ot,null,Et(o.points,r=>(k(),N("li",{key:r},"• "+at(r),1))),128))])]))),128))])]),i[9]||(i[9]=nt(`<section class="space-y-6"><h2 class="text-3xl font-bold text-center text-gray-900">快速开始</h2><div class="card"><div class="space-y-4"><h3 class="text-lg font-semibold">1. 引入依赖</h3><pre><code>&lt;dependency&gt;
  &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot3-brick-bootkit&lt;/artifactId&gt;
  &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre><h3 class="text-lg font-semibold">2. 配置插件路径</h3><pre><code>plugin:
  runMode: dev
  mainPackage: com.example.yourapp
  pluginPath:
    - /path/to/plugins</code></pre><h3 class="text-lg font-semibold">3. 启动主程序</h3><pre><code>@SpringBootApplication
public class Application implements SpringBootstrap {
    public static void main(String[] args) {
        SpringMainBootstrap.launch(Application.class, args);
    }
    
    @Override
    public void run(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }
}</code></pre></div></div></section>`,1))])}}},dt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},gu={},pu={class:"space-y-8"};function mu(t,e){return k(),N("div",pu,[...e[0]||(e[0]=[nt('<div><h1 class="text-4xl font-bold text-gray-900 mb-4">功能介绍</h1><p class="text-lg text-gray-600 mb-8"> Brick BootKit SpringBoot 是一个强大的插件式开发框架，专为SpringBoot应用设计。 它允许开发者在不重启主程序的前提下，动态扩展系统功能，实现低耦合、高内聚的系统架构。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">项目背景</h2><div class="card space-y-4"><p class="text-gray-700"> 在当下后端市场，还是以 <code>spring-boot</code> 为核心框架进行系统开发，本框架可以在 <code>spring-boot</code> 系统上进行插件式的开发，将插件当做一个 <code>mini</code> 版本的 <code>spring-boot</code> 进行系统扩展开发。 </p><p class="text-gray-700"> 在项目开发中，使用到了原作者的框架，但升级到SpringBoot 3.5之后，无法使用，原作者也已经多年未更新， 因此针对此项目进行二次修改后进行开源，希望有技术能力的一起把该插件继续维护下去。 </p></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">核心特性</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">开发特性</h3><ul class="space-y-2 text-gray-700"><li class="flex items-start"><span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span> 简化了框架的集成步骤，更容易上手 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span> 插件开发更加贴近Spring Boot原生开发 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span> 支持两种模式开发：隔离模式、共享模式 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span> 使用Maven打包插件，支持对插件的自主打包编译 </li></ul></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">技术特性</h3><ul class="space-y-2 text-gray-700"><li class="flex items-start"><span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span> 自主的开发的类加载器，支持插件定义各种依赖jar包 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span> 支持集成各种spring-boot-xxx-starter </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span> 动态安装、卸载、启动、停止插件 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span> 主程序和插件类隔离，有效避免类冲突 </li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">解决的痛点</h2><div class="space-y-4"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">To-B系统场景</h3><p class="text-gray-700 mb-3"> 在To-B系统场景中，不同甲方会有不同的需求，在不打分支和改动系统核心代码的前提下， 可以在插件中进行扩展开发特定功能，不同甲方使用不同插件。 </p><div class="bg-green-50 border-l-4 border-green-400 p-4"><p class="text-green-700 text-sm"><strong>完美解决非核心系统的扩展功能开发</strong>，例如扩展中台系统的不同需求 </p></div></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">To-C系统场景</h3><p class="text-gray-700 mb-3"> 在To-C系统场景中，可以在主程序通过定义java-interface，在插件中做不同实现， 来达到动态扩展系统功能。 </p><div class="bg-blue-50 border-l-4 border-blue-400 p-4"><p class="text-blue-700 text-sm"> 通过插件模式实现功能的<strong>动态扩展</strong>，提升系统灵活性 </p></div></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">依赖版本冲突</h3><p class="text-gray-700 mb-3"> 由于引入了不同版本的依赖，导致系统无法运行，本框架可以完美解决在不同插件中定义不同版本的依赖， 从底层进行隔离。 </p><div class="bg-yellow-50 border-l-4 border-yellow-400 p-4"><p class="text-yellow-700 text-sm"> 可以完美解决系统同时连接数据库<strong>mysql-5和mysql-8版本</strong></p></div></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">模块化组装</h3><p class="text-gray-700 mb-3"> 在插件中，可以任意集成不同的非web类型的springboot-xx-starter， 然后将不同插件功能组装起来，以达到一个统一对外提供服务的完整系统。 </p><div class="bg-purple-50 border-l-4 border-purple-400 p-4"><p class="text-purple-700 text-sm"> 实现<strong>系统组装化、插拔化开发</strong>，提升开发效率 </p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">版本兼容性</h2><div class="card"><div class="overflow-x-auto"><table class="min-w-full"><thead><tr class="bg-gray-50"><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> 框架版本 </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> SpringBoot版本 </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3.0.x</td><td class="px-6 py-4 text-sm text-gray-500"> 2.3.1.RELEASE - 2.3.12.RELEASE<br> 2.4.0 - 2.4.13<br> 2.5.0 - 2.5.11<br> 2.6.0 - 2.6.14<br> 2.7.0 - 2.7.6 </td></tr></tbody></table></div><div class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4"><p class="text-yellow-700 text-sm"><strong>注意：</strong>spring-boot升级到2.6.0+后启动时swagger会报错。（swagger和springboot2.6.0+不兼容） </p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">运行环境</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="card text-center"><div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"><span class="text-blue-600 font-bold text-lg">JDK</span></div><h3 class="text-lg font-semibold text-gray-900 mb-2">JDK</h3><p class="text-gray-600">JDK 1.8+</p></div><div class="card text-center"><div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4"><span class="text-green-600 font-bold text-lg">Maven</span></div><h3 class="text-lg font-semibold text-gray-900 mb-2">Maven</h3><p class="text-gray-600">Apache Maven 3.6+</p></div><div class="card text-center"><div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4"><span class="text-purple-600 font-bold text-lg">Spring</span></div><h3 class="text-lg font-semibold text-gray-900 mb-2">SpringBoot</h3><p class="text-gray-600">SpringBoot 2.3.1 ~ 3.5+</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">当前版本</h2><div class="card"><div class="flex items-center justify-between"><div><h3 class="text-2xl font-bold text-gray-900">4.0.1</h3><p class="text-gray-600">最新稳定版本</p></div><div class="text-right"><div class="text-sm text-gray-500">发布日期</div><div class="font-semibold text-gray-900">2025年12月</div></div></div></div></section>',7)])])}const fu=dt(gu,[["render",mu]]),hu={},xu={class:"space-y-8"},yu={class:"space-y-6"},bu={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"};function vu(t,e){const n=dn("router-link");return k(),N("div",xu,[e[4]||(e[4]=nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">快速开始</h1><p class="text-lg text-gray-600 mb-8"> 通过以下步骤，您可以在5分钟内搭建一个完整的插件式SpringBoot应用。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">前置要求</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-2">JDK版本</h3><p class="text-gray-600">JDK 1.8+ (推荐JDK 17)</p></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-2">Maven</h3><p class="text-gray-600">Apache Maven 3.6+</p></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-2">SpringBoot</h3><p class="text-gray-600">SpringBoot 2.3.1+ 或 3.x</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">步骤1：创建主程序</h2><div class="space-y-4"><h3 class="text-xl font-semibold text-gray-900">1.1 添加依赖</h3><div class="card"><p class="text-gray-700 mb-4">在主程序的pom.xml中添加框架依赖：</p><pre><code>&lt;dependency&gt;
    &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot3-brick-bootkit&lt;/artifactId&gt;
    &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre></div><h3 class="text-xl font-semibold text-gray-900">1.2 配置文件</h3><div class="card"><p class="text-gray-700 mb-4">在application.yml中添加插件配置：</p><pre><code>plugin:
  # 运行模式：dev(开发) 或 prod(生产)
  runMode: dev
  # 主程序扫描包名
  mainPackage: com.example.yourapp
  # 插件路径
  pluginPath:
    - D://your/project/plugins
    - D://your/project/plugin-repository</code></pre><div class="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4"><p class="text-blue-700 text-sm"><strong>配置说明：</strong><br>• runMode: 开发环境使用dev，生产环境使用prod <br>• mainPackage: 主程序扫描的包名 <br>• pluginPath: 插件目录，支持多个路径 </p></div></div><h3 class="text-xl font-semibold text-gray-900">1.3 修改启动类</h3><div class="card"><p class="text-gray-700 mb-4">修改SpringBoot启动类，实现SpringBootstrap接口：</p><pre><code>import com.zqzqq.bootkits.loader.launcher.SpringMainBootstrap;
import com.zqzqq.bootkits.loader.launcher.SpringBootstrap;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements SpringBootstrap {

    public static void main(String[] args) {
        // 使用SpringMainBootstrap引导启动
        SpringMainBootstrap.launch(Application.class, args);
    }

    @Override
    public void run(String[] args) throws Exception {
        // 在这里启动SpringBoot应用
        SpringApplication.run(Application.class, args);
    }
}</code></pre></div><h3 class="text-xl font-semibold text-gray-900">1.4 打包主程序</h3><div class="card"><p class="text-gray-700 mb-4">使用Maven命令打包主程序：</p><pre><code class="bash">mvn clean install</code></pre></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">步骤2：创建插件</h2><div class="space-y-4"><h3 class="text-xl font-semibold text-gray-900">2.1 添加依赖</h3><div class="card"><p class="text-gray-700 mb-4">在插件的pom.xml中添加必要依赖：</p><pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;\${和主程序一致的springboot版本}&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot3-brick-bootkit-bootstrap&lt;/artifactId&gt;
    &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;主程序的groupId&lt;/groupId&gt;
    &lt;artifactId&gt;主程序的artifactId&lt;/artifactId&gt;
    &lt;version&gt;主程序的version&lt;/version&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;</code></pre></div><h3 class="text-xl font-semibold text-gray-900">2.2 定义插件引导类</h3><div class="card"><p class="text-gray-700 mb-4">创建插件主入口，继承SpringPluginBootstrap：</p><pre><code>import com.zqzqq.bootkits.bootstrap.SpringPluginBootstrap;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamplePlugin extends SpringPluginBootstrap {
    
    public static void main(String[] args) {
        new ExamplePlugin().run(args);
    }
    
}</code></pre><div class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4"><p class="text-yellow-700 text-sm"><strong>注意事项：</strong>插件包名不能和主程序包名一致。如需一致，插件包名范围须小于等于主程序包名。 </p></div></div><h3 class="text-xl font-semibold text-gray-900">2.3 配置Maven打包插件</h3><div class="card"><p class="text-gray-700 mb-4">在插件的pom.xml中添加打包配置：</p><pre><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
            &lt;configuration&gt;
                &lt;!-- 当前打包模式：开发模式 --&gt;
                &lt;mode&gt;dev&lt;/mode&gt;
                &lt;!-- 插件信息定义 --&gt;
                &lt;pluginInfo&gt;
                    &lt;!-- 插件id --&gt;
                    &lt;id&gt;plugin-example&lt;/id&gt;
                    &lt;!-- 插件入口类 --&gt;
                    &lt;bootstrapClass&gt;com.example.plugin.ExamplePlugin&lt;/bootstrapClass&gt;
                    &lt;!-- 插件版本 --&gt;
                    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
                &lt;/pluginInfo&gt;
            &lt;/configuration&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;repackage&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;</code></pre></div><h3 class="text-xl font-semibold text-gray-900">2.4 创建示例Controller</h3><div class="card"><p class="text-gray-700 mb-4">创建一个简单的REST接口：</p><pre><code>import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(&quot;/example&quot;)
public class ExampleController {
    @GetMapping
    public String hello(){
        return &quot;Hello from plugin!&quot;;
    }
}</code></pre></div><h3 class="text-xl font-semibold text-gray-900">2.5 编译插件</h3><div class="card"><p class="text-gray-700 mb-4">使用Maven命令编译插件：</p><pre><code class="bash">mvn clean package</code></pre></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">步骤3：启动测试</h2><div class="space-y-4"><div class="card"><h3 class="text-xl font-semibold text-gray-900 mb-3">3.1 启动主程序</h3><p class="text-gray-700 mb-4">启动主程序后，在控制台日志中查看关键信息：</p><pre><code>插件加载环境: dev
插件[plugin-example@1.0.0-SNAPSHOT]加载成功
插件[plugin-example]注册接口: {GET [/plugins/plugin-example/example]}
插件[plugin-example@1.0.0-SNAPSHOT]启动成功
插件初始化完成</code></pre></div><div class="card"><h3 class="text-xl font-semibold text-gray-900 mb-3">3.2 测试插件接口</h3><p class="text-gray-700 mb-4">在浏览器中访问插件接口：</p><div class="bg-green-50 border border-green-200 rounded-lg p-4"><code class="text-green-800">http://127.0.0.1:8080/plugins/plugin-example/example</code></div><p class="text-gray-600 text-sm mt-2"> 如果返回 &quot;Hello from plugin!&quot;，说明插件集成成功！ </p></div></div></section>`,5)),h("section",yu,[e[3]||(e[3]=h("h2",{class:"text-3xl font-bold text-gray-900"},"下一步",-1)),h("div",bu,[rt(n,{to:"/configuration",class:"card hover:shadow-lg transition-shadow duration-200"},{default:ne(()=>[...e[0]||(e[0]=[h("h3",{class:"text-lg font-semibold text-gray-900 mb-2"},"详细配置",-1),h("p",{class:"text-gray-600"},"了解更多配置选项和高级功能",-1)])]),_:1}),rt(n,{to:"/plugins",class:"card hover:shadow-lg transition-shadow duration-200"},{default:ne(()=>[...e[1]||(e[1]=[h("h3",{class:"text-lg font-semibold text-gray-900 mb-2"},"插件开发",-1),h("p",{class:"text-gray-600"},"深入学习插件开发和高级特性",-1)])]),_:1}),rt(n,{to:"/examples",class:"card hover:shadow-lg transition-shadow duration-200"},{default:ne(()=>[...e[2]||(e[2]=[h("h3",{class:"text-lg font-semibold text-gray-900 mb-2"},"示例项目",-1),h("p",{class:"text-gray-600"},"查看完整的示例代码和最佳实践",-1)])]),_:1})])])])}const qu=dt(hu,[["render",vu]]),Su={},Pu={class:"space-y-8"};function Iu(t,e){return k(),N("div",Pu,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">项目目录结构</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍Brick BootKit SpringBoot项目的目录结构、各模块作用和组织方式。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">根目录结构</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">主项目根目录</h3><pre><code>brick-bootkit-springboot/
├── spring-boot3-brick-bootkit/          # 主程序启动器模块
├── spring-boot3-brick-bootkit-bootstrap/  # 插件启动器模块
├── spring-boot3-brick-bootkit-core/      # 核心功能模块
├── spring-boot3-brick-bootkit-common/    # 公共组件模块
├── spring-boot3-brick-bootkit-loader/    # 类加载器模块
├── spring-boot3-brick-bootkit-maven-packager/  # Maven打包插件模块
├── doc/                                  # 文档目录
│   ├── docs-website/                     # 文档网站
│   └── updates/                          # 更新日志
├── .git/                                 # Git版本控制
├── .idea/                                # IntelliJ IDEA配置
├── pom.xml                               # 主项目POM文件
├── LICENSE                               # Apache 2.0许可证
├── readme.md                             # 项目说明文档
├── check-version.sh                      # 版本检查脚本
├── update-version.sh                     # 版本更新脚本
├── checkstyle.xml                        # 代码风格配置
├── pmd-ruleset.xml                       # PMD代码分析规则
└── sonar-project.properties              # SonarQube配置</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">模块结构</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit (主程序启动器)</h3><p class="text-gray-700">主程序的启动器，提供Spring Boot集成和插件管理功能。</p><pre><code>spring-boot3-brick-bootkit/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/
│   │   │       └── auto/                    # 自动配置类
│   │   └── resources/
│   │       └── META-INF/
│   │           └── spring.factories         # Spring Boot自动配置
│   └── test/                               # 测试代码
├── pom.xml                                # 模块POM文件
└── README.md                              # 模块说明</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-bootstrap (插件启动器)</h3><p class="text-gray-700">插件的启动器，提供插件环境初始化和生命周期管理。</p><pre><code>spring-boot3-brick-bootkit-bootstrap/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/bootstrap/
│   │   │       ├── annotation/               # 插件相关注解
│   │   │       ├── coexist/                 # 插件共存处理
│   │   │       ├── launcher/                # 插件启动器
│   │   │       ├── listener/                # 插件监听器
│   │   │       └── processor/               # 处理器
│   │   │           └── interceptor/         # 拦截器
│   │   └── resources/
│   └── test/                               # 测试代码
└── pom.xml                                # 模块POM文件</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-core (核心功能模块)</h3><p class="text-gray-700">框架的核心功能模块，提供配置管理、生命周期管理、性能监控等。</p><pre><code>spring-boot3-brick-bootkit-core/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/core/
│   │   │       ├── config/                   # 配置管理
│   │   │       ├── dependency/               # 依赖管理
│   │   │       ├── exception/                # 异常处理
│   │   │       ├── health/                   # 健康检查
│   │   │       │   └── impl/                 # 健康检查实现
│   │   │       ├── isolation/                # 隔离机制
│   │   │       ├── lifecycle/                # 生命周期管理
│   │   │       ├── logging/                  # 日志管理
│   │   │       ├── monitoring/               # 监控管理
│   │   │       ├── performance/              # 性能监控
│   │   │       ├── plugin/                   # 插件管理
│   │   │       ├── security/                 # 安全机制
│   │   │       ├── state/                    # 状态管理
│   │   │       └── version/                  # 版本管理
│   │   └── resources/                        # 配置文件
│   └── test/                                # 测试代码
└── pom.xml                                 # 模块POM文件</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-loader (类加载器模块)</h3><p class="text-gray-700">自定义类加载器模块，处理插件的类加载和资源管理。</p><pre><code>spring-boot3-brick-bootkit-loader/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/loader/
│   │   │       ├── archive/                  # 归档文件处理
│   │   │       ├── classloader/              # 类加载器
│   │   │       │   ├── filter/               # 类过滤器
│   │   │       │   └── resource/             # 资源管理
│   │   │       │       ├── cache/            # 资源缓存
│   │   │       │       ├── loader/           # 资源加载器
│   │   │       │       └── storage/          # 资源存储
│   │   │       ├── jar/                      # JAR文件处理
│   │   │       ├── launcher/                 # 启动器
│   │   │       │   ├── classpath/            # 类路径处理
│   │   │       │   ├── coexist/              # 共存处理
│   │   │       │   ├── isolation/            # 隔离处理
│   │   │       │   ├── runner/               # 运行器
│   │   │       └── utils/                    # 工具类
│   │   └── resources/                        # 配置文件
│   └── test/                                # 测试代码
└── pom.xml                                 # 模块POM文件</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-common (公共组件模块)</h3><p class="text-gray-700">公共组件模块，提供通用工具类和基础功能。</p><pre><code>spring-boot3-brick-bootkit-common/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/common/
│   │   │       ├── annotation/               # 通用注解
│   │   │       ├── constant/                 # 常量定义
│   │   │       ├── exception/                # 通用异常
│   │   │       └── utils/                    # 通用工具类
│   │   └── resources/                        # 配置文件
│   └── test/                                # 测试代码
└── pom.xml                                 # 模块POM文件</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-maven-packager (Maven打包插件)</h3><p class="text-gray-700">Maven打包插件，提供插件的构建和打包功能。</p><pre><code>spring-boot3-brick-bootkit-maven-packager/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/packager/
│   │   │       ├── config/                   # 打包配置
│   │   │       ├── goal/                     # Maven目标
│   │   │       ├── model/                    # 数据模型
│   │   │       └── processor/                # 打包处理器
│   │   └── resources/
│   │       └── META-INF/
│   │           └── maven/
│   │               └── plugin.xml            # Maven插件描述符
│   └── test/                                # 测试代码
└── pom.xml                                 # 模块POM文件</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">文档结构</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">doc/docs-website (文档网站)</h3><p class="text-gray-700">基于Vue 3 + Vite的在线文档网站。</p><pre><code>doc/docs-website/
├── src/
│   ├── views/                    # 页面组件
│   │   ├── Home.vue             # 首页
│   │   ├── Introduction.vue     # 功能介绍
│   │   ├── QuickStart.vue       # 快速开始
│   │   ├── Configuration.vue    # 配置说明
│   │   ├── Plugins.vue          # 插件开发
│   │   ├── API.vue              # API参考
│   │   └── Examples.vue         # 示例
│   ├── components/               # 通用组件
│   ├── assets/                   # 静态资源
│   ├── App.vue                  # 主应用组件
│   ├── main.js                  # 应用入口
│   └── style.css                # 全局样式
├── public/                       # 公共资源
├── dist/                        # 构建输出目录
├── index.html                   # HTML模板
├── package.json                 # NPM配置
├── vite.config.js              # Vite配置
├── tailwind.config.js          # Tailwind配置
└── README.md                   # 文档说明</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置文件说明</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">代码质量配置</h3><ul class="space-y-2 text-gray-700"><li><code>checkstyle.xml</code> - 代码风格检查</li><li><code>pmd-ruleset.xml</code> - PMD静态分析规则</li><li><code>spotbugs-exclude.xml</code> - SpotBugs排除规则</li><li><code>sonar-project.properties</code> - SonarQube配置</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">构建和部署</h3><ul class="space-y-2 text-gray-700"><li><code>pom.xml</code> - Maven项目配置</li><li><code>check-version.sh</code> - 版本检查脚本</li><li><code>update-version.sh</code> - 版本更新脚本</li><li><code>Dockerfile</code> - Docker镜像构建</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">模块依赖关系</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">依赖层次结构</h3><pre><code>spring-boot3-brick-bootkit (主程序启动器)
├── spring-boot3-brick-bootkit-core (核心功能)
│   ├── spring-boot3-brick-bootkit-common (公共组件)
│   └── spring-boot3-brick-bootkit-loader (类加载器)
└── spring-boot3-brick-bootkit-bootstrap (插件启动器)
    └── spring-boot3-brick-bootkit-common (公共组件)

spring-boot3-brick-bootkit-maven-packager (Maven打包插件)
└── spring-boot3-brick-bootkit-core (核心功能)</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">构建流程</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">Maven构建顺序</h3><ol class="space-y-2 text-gray-700"><li>1. <strong>spring-boot3-brick-bootkit-common</strong> - 公共组件最先构建</li><li>2. <strong>spring-boot3-brick-bootkit-loader</strong> - 类加载器模块</li><li>3. <strong>spring-boot3-brick-bootkit-core</strong> - 核心功能模块</li><li>4. <strong>spring-boot3-brick-bootkit-bootstrap</strong> - 插件启动器</li><li>5. <strong>spring-boot3-brick-bootkit-maven-packager</strong> - Maven打包插件</li><li>6. <strong>spring-boot3-brick-bootkit</strong> - 主程序启动器最后构建</li></ol></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">构建命令</h3><pre><code class="bash"># 完整构建
mvn clean install

# 只构建特定模块
mvn clean install -pl spring-boot3-brick-bootkit-core

# 跳过测试构建
mvn clean install -DskipTests

# 生成文档
mvn clean install -DgenerateDocs=true</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">开发指南</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">编码规范</h3><ul class="space-y-2 text-gray-700"><li>• 遵循阿里巴巴Java开发手册</li><li>• 使用CheckStyle检查代码风格</li><li>• 使用PMD进行静态代码分析</li><li>• 使用SpotBugs检查潜在bug</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">测试要求</h3><ul class="space-y-2 text-gray-700"><li>• 单元测试覆盖率 ≥ 80%</li><li>• 使用JUnit 5进行单元测试</li><li>• 使用Mockito进行模拟测试</li><li>• 集成测试覆盖主要功能</li></ul></div></div></section>`,8)])])}const Cu=dt(Su,[["render",Iu]]),wu={},Eu={class:"space-y-8"};function Ru(t,e){return k(),N("div",Eu,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">配置详细说明</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍主程序的配置选项，包括基础配置、高级配置和运行模式设置。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">基础配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">基本配置示例</h3><p class="text-gray-700">以下是一个完整的基础配置示例：</p><pre><code>plugin:
  # 运行模式：dev(开发环境) 或 prod(生产环境)
  runMode: dev
  
  # 主程序扫描的包名
  mainPackage: com.example.yourapp
  
  # 插件目录路径，支持多个路径
  pluginPath:
    - D://project/plugins
    - D://project/plugin-repository
  
  # 主程序版本（可选）
  version: 1.0.0
  
  # 是否启用插件ID作为访问路径前缀
  enablePluginIdRestPathPrefix: true</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">运行模式</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">开发模式 (dev)</h3><ul class="space-y-2 text-gray-700"><li class="flex items-start"><span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span> 适用于IDEA环境开发调试 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span> 直接加载编译后的插件classes目录 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span> 支持热部署，修改插件后无需重新打包 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span> 日志信息更详细，便于调试 </li></ul><div class="mt-4 bg-green-50 border-l-4 border-green-400 p-4"><p class="text-green-700 text-sm">仅适用于开发环境，不适用于生产环境</p></div></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">生产模式 (prod)</h3><ul class="space-y-2 text-gray-700"><li class="flex items-start"><span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span> 适用于生产环境部署 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span> 只能加载打包后的插件（jar、zip等） </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span> 更严格的插件验证和安全检查 </li><li class="flex items-start"><span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span> 优化了性能和资源占用 </li></ul><div class="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4"><p class="text-blue-700 text-sm">生产环境的推荐模式</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">高级配置</h2><div class="space-y-6"><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">安全配置</h3><pre><code>plugin:
  security:
    # 是否启用安全扫描
    enableScan: true
    
    # 安全扫描模式：STRICT(严格)、NORMAL(普通)、LENIENT(宽松)
    scanMode: NORMAL
    
    # 是否启用插件签名验证
    enableSignature: false
    
    # 最大插件大小限制（MB）
    maxPluginSize: 100</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">性能监控配置</h3><pre><code>plugin:
  monitoring:
    # 是否启用性能监控
    enable: true
    
    # 监控指标收集间隔（秒）
    metricsInterval: 60
    
    # 是否记录插件执行日志
    enableExecutionLog: true
    
    # 慢执行阈值（毫秒）
    slowExecutionThreshold: 1000</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">资源限制配置</h3><pre><code>plugin:
  resource:
    # 最大内存限制（MB）
    maxMemory: 512
    
    # 最大线程数
    maxThreads: 10
    
    # 是否启用资源限制
    enableLimits: false</code></pre></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件路径配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">支持的路径格式</h3><p class="text-gray-700 mb-4">pluginPath支持多种路径格式：</p><ul class="space-y-3 text-gray-700"><li class="flex items-start"><span class="inline-block w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-xs text-center leading-6 font-bold mr-3 mt-0.5">1</span><div><strong>绝对路径：</strong><code>D://project/plugins</code><code>/usr/local/plugins</code></div></li><li class="flex items-start"><span class="inline-block w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-xs text-center leading-6 font-bold mr-3 mt-0.5">2</span><div><strong>相对路径：</strong><code>./plugins</code><code>../external-plugins</code></div></li><li class="flex items-start"><span class="inline-block w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-xs text-center leading-6 font-bold mr-3 mt-0.5">3</span><div><strong>环境变量：</strong><code>\${PLUGIN_HOME}/plugins</code></div></li><li class="flex items-start"><span class="inline-block w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-xs text-center leading-6 font-bold mr-3 mt-0.5">4</span><div><strong>网络路径（生产环境）：</strong><code>http://plugins.example.com/repository</code></div></li></ul></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">目录结构要求</h3><p class="text-gray-700 mb-4">插件目录的结构要求：</p><pre><code>plugins/                    # 插件根目录
├── plugin-example-1.0.0-SNAPSHOT/    # 开发模式插件目录
│   ├── target/classes/               # 编译后的类文件
│   └── target/lib/                   # 插件依赖的jar文件
├── plugin-example-1.0.0-SNAPSHOT.jar # 生产模式插件jar包
├── plugin-another-1.0.0.zip         # 生产模式插件zip包
└── plugin-repository/               # 插件仓库目录
    └── official/                     # 官方插件目录
        └── plugin-official-1.0.0.jar</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">日志配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件日志跟随主程序配置</h3><p class="text-gray-700 mb-4">插件的日志可以配置为跟随主程序的日志配置：</p><pre><code>plugin:
  logging:
    # 是否跟随主程序日志配置
    inheritFromMain: true
    
    # 插件日志级别
    level: INFO
    
    # 插件日志文件路径
    file: logs/plugins.log
    
    # 插件日志格式
    pattern: &quot;%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n&quot;</code></pre><div class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4"><p class="text-yellow-700 text-sm"><strong>注意：</strong>在SpringBoot 2.6.0+版本中，可能需要额外配置以避免swagger相关错误。 </p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置验证</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置验证规则</h3><div class="overflow-x-auto"><table class="min-w-full"><thead><tr class="bg-gray-50"><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">配置项</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">是否必需</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">runMode</td><td class="px-6 py-4 text-sm text-gray-500">String</td><td class="px-6 py-4 text-sm text-gray-500">是</td><td class="px-6 py-4 text-sm text-gray-500">-</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">mainPackage</td><td class="px-6 py-4 text-sm text-gray-500">String</td><td class="px-6 py-4 text-sm text-gray-500">是</td><td class="px-6 py-4 text-sm text-gray-500">-</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">pluginPath</td><td class="px-6 py-4 text-sm text-gray-500">List&lt;String&gt;</td><td class="px-6 py-4 text-sm text-gray-500">是</td><td class="px-6 py-4 text-sm text-gray-500">-</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">enablePluginIdRestPathPrefix</td><td class="px-6 py-4 text-sm text-gray-500">Boolean</td><td class="px-6 py-4 text-sm text-gray-500">否</td><td class="px-6 py-4 text-sm text-gray-500">true</td></tr></tbody></table></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置建议</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">开发环境建议</h3><ul class="space-y-2 text-gray-700"><li>• 使用dev模式进行开发调试</li><li>• 配置详细的日志级别</li><li>• 启用性能监控和执行日志</li><li>• 使用本地插件目录</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">生产环境建议</h3><ul class="space-y-2 text-gray-700"><li>• 使用prod模式确保稳定性</li><li>• 禁用开发相关的功能</li><li>• 启用安全扫描和签名验证</li><li>• 配置资源限制</li></ul></div></div></section>`,8)])])}const _u=dt(wu,[["render",Ru]]),Au={},ku={class:"space-y-8"};function Tu(t,e){return k(),N("div",ku,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">插件开发指南</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍插件的开发模式、生命周期管理和高级特性。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">开发模式</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-xl font-semibold text-gray-900 mb-4">隔离模式</h3><p class="text-gray-700 mb-4"> 每个插件使用独立的类加载器，完全隔离插件之间的依赖，适合有依赖冲突的场景。 </p><h4 class="font-semibold text-gray-900 mb-2">特性：</h4><ul class="space-y-1 text-gray-700"><li>• 插件之间完全隔离</li><li>• 支持不同版本的同一依赖</li><li>• 内存占用相对较大</li><li>• 适合生产环境</li></ul><div class="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4"><p class="text-blue-700 text-sm">推荐模式，特别是在生产环境中</p></div></div><div class="card"><h3 class="text-xl font-semibold text-gray-900 mb-4">共享模式</h3><p class="text-gray-700 mb-4"> 插件共享主程序的类加载器，依赖统一管理，内存占用较小。 </p><h4 class="font-semibold text-gray-900 mb-2">特性：</h4><ul class="space-y-1 text-gray-700"><li>• 依赖统一管理</li><li>• 内存占用较小</li><li>• 依赖版本必须统一</li><li>• 适合开发环境</li></ul><div class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4"><p class="text-yellow-700 text-sm">开发调试时推荐使用</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件生命周期</h2><div class="card"><h3 class="text-xl font-semibold text-gray-900 mb-4">生命周期状态</h3><div class="overflow-x-auto"><table class="min-w-full"><thead><tr class="bg-gray-50"><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">触发操作</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PARSED</td><td class="px-6 py-4 text-sm text-gray-500">插件已解析，尚未加载</td><td class="px-6 py-4 text-sm text-gray-500">插件文件识别</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">LOADED</td><td class="px-6 py-4 text-sm text-gray-500">插件已加载，类已初始化</td><td class="px-6 py-4 text-sm text-gray-500">调用load()方法</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">STARTED</td><td class="px-6 py-4 text-sm text-gray-500">插件已启动，可以提供服务</td><td class="px-6 py-4 text-sm text-gray-500">调用start()方法</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">STOPPED</td><td class="px-6 py-4 text-sm text-gray-500">插件已停止，不能提供服务</td><td class="px-6 py-4 text-sm text-gray-500">调用stop()方法</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">UNLOADED</td><td class="px-6 py-4 text-sm text-gray-500">插件已卸载，资源已释放</td><td class="px-6 py-4 text-sm text-gray-500">调用unload()方法</td></tr></tbody></table></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件引导类</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">基本结构</h3><p class="text-gray-700">插件引导类需要继承SpringPluginBootstrap：</p><pre><code>import com.zqzqq.bootkits.bootstrap.SpringPluginBootstrap;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamplePlugin extends SpringPluginBootstrap {
    
    public static void main(String[] args) {
        new ExamplePlugin().run(args);
    }
    
    @Override
    protected void initialize() throws Exception {
        // 插件初始化逻辑
        System.out.println(&quot;插件初始化中...&quot;);
    }
    
    @Override
    protected void shutdown() throws Exception {
        // 插件关闭逻辑
        System.out.println(&quot;插件关闭中...&quot;);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件控制器</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">REST API示例</h3><p class="text-gray-700">插件中的控制器会自动注册到主程序中：</p><pre><code>@RestController
@RequestMapping(&quot;/example&quot;)
public class ExampleController {
    
    @GetMapping(&quot;/hello&quot;)
    public String hello() {
        return &quot;Hello from plugin!&quot;;
    }
    
    @PostMapping(&quot;/process&quot;)
    public Map&lt;String, Object&gt; processData(@RequestBody Map&lt;String, Object&gt; data) {
        // 处理业务逻辑
        Map&lt;String, Object&gt; result = new HashMap&lt;&gt;();
        result.put(&quot;status&quot;, &quot;success&quot;);
        result.put(&quot;data&quot;, data);
        return result;
    }
    
    @GetMapping(&quot;/status&quot;)
    public PluginStatus getStatus() {
        return new PluginStatus(&quot;plugin-example&quot;, &quot;running&quot;);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">访问路径</h3><p class="text-gray-700">插件控制器的访问路径格式：</p><pre><code>http://localhost:8080/plugins/{plugin-id}/{controller-path}

# 示例
http://localhost:8080/plugins/plugin-example/example/hello</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件依赖管理</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">隔离模式依赖</h3><p class="text-gray-700">在隔离模式下，插件可以包含所有必要的依赖：</p><pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;com.oracle.database.jdbc&lt;/groupId&gt;
    &lt;artifactId&gt;ojdbc8&lt;/artifactId&gt;
    &lt;version&gt;21.1.0.0&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
    &lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt;
    &lt;version&gt;7.15.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">共享模式依赖</h3><p class="text-gray-700">在共享模式下，主要依赖应该由主程序提供：</p><pre><code>&lt;!-- 由主程序提供的依赖 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;

&lt;!-- 插件特有的依赖 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;custom-library&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件服务</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">创建插件服务</h3><p class="text-gray-700">插件中的服务类会作为Spring Bean注册：</p><pre><code>@Service
public class ExampleService {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    public void saveData(DataModel data) {
        jdbcTemplate.update(
            &quot;INSERT INTO example_table (name, value) VALUES (?, ?)&quot;,
            data.getName(), data.getValue()
        );
    }
    
    public List&lt;DataModel&gt; getAllData() {
        return jdbcTemplate.query(
            &quot;SELECT * FROM example_table&quot;,
            new BeanPropertyRowMapper&lt;&gt;(DataModel.class)
        );
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">主程序 Bean 注入</h3><p class="text-gray-700">在插件中注入主程序的 Bean：</p><pre><code>@AutowiredType(MainConfiguration.class)
@Autowired
private MainConfigService mainConfigService;

@PluginComponent
public class ExampleComponent {
    
    @Autowired
    private MainApplicationService mainService;
    
    public void useMainService() {
        String config = mainService.getConfig(&quot;key&quot;);
        System.out.println(&quot;从主程序获取的配置: &quot; + config);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件配置文件</h3><p class="text-gray-700">插件可以有自己的配置文件，支持Spring Boot的配置机制：</p><pre><code># application.yml (在插件的resources目录下)
plugin:
  database:
    url: jdbc:mysql://localhost:3306/plugin_db
    username: plugin_user
    password: plugin_password
  
  features:
    enabled: true
    cache-timeout: 300

spring:
  profiles:
    active: dev</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置获取</h3><pre><code>@Configuration
@ConfigurationProperties(prefix = &quot;plugin.database&quot;)
public class DatabaseConfig {
    
    private String url;
    private String username;
    private String password;
    
    // getters and setters
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    // ... other getters and setters
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件拦截器</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">Web拦截器</h3><p class="text-gray-700">插件可以注册Web拦截器来拦截请求：</p><pre><code>@PluginComponent
public class ExampleInterceptor implements HandlerInterceptor {
    
    @Override
    public boolean preHandle(HttpServletRequest request, 
                           HttpServletResponse response, 
                           Object handler) throws Exception {
        
        String pluginId = PluginContextHolder.getCurrentPluginId();
        System.out.println(&quot;插件 &quot; + pluginId + &quot; 处理请求: &quot; + request.getRequestURI());
        
        // 添加插件特定的逻辑
        return true;
    }
    
    @Override
    public void postHandle(HttpServletRequest request, 
                          HttpServletResponse response, 
                          Object handler, 
                          ModelAndView modelAndView) throws Exception {
        // 请求处理后的逻辑
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, 
                               HttpServletResponse response, 
                               Object handler, 
                               Exception ex) throws Exception {
        // 请求完成后的逻辑
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">拦截器注册</h3><pre><code>@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Autowired
    private ExampleInterceptor exampleInterceptor;
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(exampleInterceptor)
                .addPathPatterns(&quot;/example/**&quot;)
                .excludePathPatterns(&quot;/example/public/**&quot;);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件事件监听</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">ApplicationEvent监听</h3><pre><code>@PluginComponent
public class ExampleEventListener {
    
    @EventListener
    public void handlePluginStart(PluginLifecycleEvent event) {
        if (PluginLifecycleState.STARTED.equals(event.getState())) {
            System.out.println(&quot;插件 &quot; + event.getPluginId() + &quot; 已启动&quot;);
            // 执行插件启动后的初始化逻辑
        }
    }
    
    @EventListener
    public void handleConfigChange(PluginConfigurationChangeEvent event) {
        System.out.println(&quot;插件配置已变更: &quot; + event.getPluginId());
        // 处理配置变更逻辑
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">开发建议</h3><ul class="space-y-2 text-gray-700"><li>• 使用@PluginComponent注解标记插件特有组件</li><li>• 通过PluginContextHolder获取插件上下文</li><li>• 实现proper的异常处理</li><li>• 使用配置文件管理插件参数</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">性能建议</h3><ul class="space-y-2 text-gray-700"><li>• 避免在插件中执行耗时操作</li><li>• 使用连接池管理数据库连接</li><li>• 实现proper的资源释放</li><li>• 监控插件内存使用</li></ul></div></div></section>`,11)])])}const Mu=dt(Au,[["render",Tu]]),Nu={},Du={class:"space-y-8"};function Lu(t,e){return k(),N("div",Du,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">插件打包</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍如何将自定义插件打包为可分发的JAR文件，包括Maven配置、打包流程和最佳实践。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">打包概述</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit提供了专门的Maven插件来帮助开发者将插件项目打包为标准的JAR文件。 打包后的插件可以独立分发和部署，支持动态加载和卸载。 </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-semibold text-blue-900 mb-2">独立分发</h3><p class="text-blue-700 text-sm">生成的JAR文件可以独立分发和部署</p></div><div class="bg-green-50 p-4 rounded-lg"><h3 class="font-semibold text-green-900 mb-2">动态加载</h3><p class="text-green-700 text-sm">支持在运行时动态加载和卸载插件</p></div><div class="bg-purple-50 p-4 rounded-lg"><h3 class="font-semibold text-purple-900 mb-2">版本管理</h3><p class="text-purple-700 text-sm">内置版本管理和依赖冲突检测</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">Maven插件配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件配置</h3><p class="text-gray-700"> 在插件项目的pom.xml中配置Brick BootKit的Maven打包插件： </p><pre><code class="xml">&lt;build&gt;
  &lt;plugins&gt;
    &lt;plugin&gt;
      &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
      &lt;version&gt;4.0.1&lt;/version&gt;
      &lt;configuration&gt;
        &lt;!-- 插件元数据配置 --&gt;
        &lt;pluginName&gt;my-custom-plugin&lt;/pluginName&gt;
        &lt;version&gt;1.0.0&lt;/version&gt;
        &lt;description&gt;自定义功能插件&lt;/description&gt;
        &lt;author&gt;开发团队&lt;/author&gt;
        
        &lt;!-- 依赖配置 --&gt;
        &lt;includeDependencies&gt;true&lt;/includeDependencies&gt;
        &lt;dependencyScope&gt;runtime&lt;/dependencyScope&gt;
        
        &lt;!-- 输出配置 --&gt;
        &lt;outputDirectory&gt;\${project.build.directory}/plugins&lt;/outputDirectory&gt;
        &lt;finalName&gt;\${project.artifactId}-\${project.version}&lt;/finalName&gt;
      &lt;/configuration&gt;
      &lt;executions&gt;
        &lt;execution&gt;
          &lt;phase&gt;package&lt;/phase&gt;
          &lt;goals&gt;
            &lt;goal&gt;package&lt;/goal&gt;
          &lt;/goals&gt;
        &lt;/execution&gt;
      &lt;/executions&gt;
    &lt;/plugin&gt;
  &lt;/plugins&gt;
&lt;/build&gt;</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置参数说明</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-semibold text-gray-900 mb-2">基本配置</h4><ul class="space-y-2 text-gray-700"><li><code>pluginName</code> - 插件名称</li><li><code>version</code> - 插件版本</li><li><code>description</code> - 插件描述</li><li><code>author</code> - 插件作者</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">高级配置</h4><ul class="space-y-2 text-gray-700"><li><code>includeDependencies</code> - 是否包含依赖</li><li><code>dependencyScope</code> - 依赖范围</li><li><code>outputDirectory</code> - 输出目录</li><li><code>finalName</code> - 最终文件名</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">打包流程</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">执行打包</h3><p class="text-gray-700"> 使用Maven命令执行插件打包： </p><pre><code class="bash"># 完整打包
mvn clean package

# 只执行打包插件
mvn brick-bootkit:package

# 包含依赖的完整打包
mvn clean package -DincludeDependencies=true

# 跳过测试
mvn clean package -DskipTests</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">打包过程</h3><div class="space-y-4"><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">1</div><div><h4 class="font-semibold text-gray-900">编译阶段</h4><p class="text-gray-700 text-sm">编译Java源代码和资源文件</p></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">2</div><div><h4 class="font-semibold text-gray-900">测试阶段</h4><p class="text-gray-700 text-sm">执行单元测试和集成测试</p></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">3</div><div><h4 class="font-semibold text-gray-900">依赖分析</h4><p class="text-gray-700 text-sm">分析插件依赖关系和版本冲突</p></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">4</div><div><h4 class="font-semibold text-gray-900">资源打包</h4><p class="text-gray-700 text-sm">收集和打包插件资源文件</p></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">5</div><div><h4 class="font-semibold text-gray-900">生成插件</h4><p class="text-gray-700 text-sm">生成标准的JAR文件和元数据</p></div></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件清单</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件元数据</h3><p class="text-gray-700"> 打包过程中会生成插件清单文件，包含插件的基本信息和依赖关系： </p><pre><code class="json">{
  &quot;pluginName&quot;: &quot;my-custom-plugin&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;自定义功能插件&quot;,
  &quot;author&quot;: &quot;开发团队&quot;,
  &quot;mainClass&quot;: &quot;com.example.plugin.MyPlugin&quot;,
  &quot;dependencies&quot;: [
    {
      &quot;groupId&quot;: &quot;org.springframework.boot&quot;,
      &quot;artifactId&quot;: &quot;spring-boot-starter&quot;,
      &quot;version&quot;: &quot;3.2.0&quot;,
      &quot;scope&quot;: &quot;runtime&quot;
    }
  ],
  &quot;resources&quot;: [
    &quot;META-INF/spring.factories&quot;,
    &quot;static/plugin-config.json&quot;
  ],
  &quot;entryPoints&quot;: [
    {
      &quot;type&quot;: &quot;listener&quot;,
      &quot;class&quot;: &quot;com.example.plugin.MyListener&quot;
    }
  ],
  &quot;exportedPackages&quot;: [
    &quot;com.example.plugin.api&quot;
  ]
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">清单文件位置</h3><p class="text-gray-700"> 插件清单文件会打包到JAR的 <code>META-INF/plugin.json</code> 路径： </p><pre><code class="bash">jar -tf my-custom-plugin-1.0.0.jar
# 输出包含:
# META-INF/MANIFEST.MF
# META-INF/plugin.json    # 插件清单
# com/example/plugin/MyPlugin.class
# ...</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">依赖管理</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">依赖打包策略</h3><p class="text-gray-700"> 插件可以采用不同的依赖打包策略： </p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-gray-50 p-4 rounded-lg"><h4 class="font-semibold text-gray-900 mb-2">包含依赖 (Fat JAR)</h4><ul class="text-gray-700 text-sm space-y-1"><li>• 所有依赖打包到JAR内部</li><li>• 优点：独立性强，部署简单</li><li>• 缺点：文件体积大，可能存在冲突</li></ul></div><div class="bg-gray-50 p-4 rounded-lg"><h4 class="font-semibold text-gray-900 mb-2">外部依赖 (Thin JAR)</h4><ul class="text-gray-700 text-sm space-y-1"><li>• 只打包插件代码，不包含依赖</li><li>• 优点：文件体积小，便于更新</li><li>• 缺点：需要确保依赖环境</li></ul></div></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">依赖冲突检测</h3><p class="text-gray-700"> 打包过程中会自动检测依赖冲突： </p><pre><code class="bash"># 依赖冲突示例
WARNING: 发现依赖冲突:
  - spring-core: 6.1.2 (插件需要) vs 6.1.1 (系统已有)
  建议解决方案: 使用 &lt;dependencyManagement&gt; 统一版本</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">命名规范</h3><ul class="space-y-2 text-gray-700"><li>• 使用有意义的插件名称</li><li>• 遵循语义化版本规范</li><li>• 包含清晰的描述信息</li><li>• 指定明确的作者信息</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">版本管理</h3><ul class="space-y-2 text-gray-700"><li>• 使用语义化版本号</li><li>• 及时更新依赖版本</li><li>• 维护向后兼容性</li><li>• 记录变更日志</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">性能优化</h3><ul class="space-y-2 text-gray-700"><li>• 只包含必要的依赖</li><li>• 移除未使用的资源</li><li>• 优化资源文件大小</li><li>• 使用ProGuard混淆代码</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3><ul class="space-y-2 text-gray-700"><li>• 验证依赖的安全性</li><li>• 避免包含敏感信息</li><li>• 使用代码签名</li><li>• 限制插件权限</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">测试和部署</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件测试</h3><p class="text-gray-700"> 在部署前对插件进行全面测试： </p><pre><code class="bash"># 本地测试插件
mvn test
mvn integration-test

# 插件功能验证
java -cp target/plugins/my-plugin-1.0.0.jar com.zqzqq.bootkits.test.PluginTest

# 依赖验证
java -cp target/plugins/my-plugin-1.0.0.jar com.zqzqq.bootkits.test.DependencyCheck</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">部署策略</h3><div class="space-y-3"><div class="flex items-start space-x-3"><div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold">✓</div><div><h4 class="font-semibold text-gray-900">本地测试环境</h4><p class="text-gray-700 text-sm">先在本地环境验证插件功能</p></div></div><div class="flex items-start space-x-3"><div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold">✓</div><div><h4 class="font-semibold text-gray-900">开发环境部署</h4><p class="text-gray-700 text-sm">在开发环境进行集成测试</p></div></div><div class="flex items-start space-x-3"><div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold">✓</div><div><h4 class="font-semibold text-gray-900">生产环境发布</h4><p class="text-gray-700 text-sm">通过审核后发布到生产环境</p></div></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">故障排除</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">常见问题</h3><div class="space-y-4"><div><h4 class="font-semibold text-gray-900">依赖冲突</h4><p class="text-gray-700 text-sm">问题：打包时出现依赖版本冲突</p><p class="text-gray-600 text-sm">解决：使用dependencyManagement统一版本或排除冲突依赖</p></div><div><h4 class="font-semibold text-gray-900">主类未找到</h4><p class="text-gray-700 text-sm">问题：插件JAR无法找到主类</p><p class="text-gray-600 text-sm">解决：确保主类配置正确且在MANIFEST.MF中声明</p></div><div><h4 class="font-semibold text-gray-900">资源文件缺失</h4><p class="text-gray-700 text-sm">问题：插件运行时找不到资源文件</p><p class="text-gray-600 text-sm">解决：检查资源路径和打包配置</p></div></div></div></section>`,9)])])}const Ou=dt(Nu,[["render",Lu]]),Bu={},Uu={class:"space-y-8"};function ju(t,e){return k(),N("div",Uu,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">动态部署</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍如何在运行时动态部署、更新和卸载插件，包括部署策略、监控机制和故障恢复方案。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">动态部署概述</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit支持在Spring Boot应用运行时动态部署插件，无需重启应用即可加载、更新或卸载插件功能。 这种能力使得系统具备更强的可扩展性和维护性。 </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-semibold text-blue-900 mb-2">零停机部署</h3><p class="text-blue-700 text-sm">支持热插拔，不影响在线用户</p></div><div class="bg-green-50 p-4 rounded-lg"><h3 class="font-semibold text-green-900 mb-2">版本回滚</h3><p class="text-green-700 text-sm">快速回滚到上一版本</p></div><div class="bg-purple-50 p-4 rounded-lg"><h3 class="font-semibold text-purple-900 mb-2">负载隔离</h3><p class="text-purple-700 text-sm">插件故障不影响核心功能</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">部署架构</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">系统架构</h3><p class="text-gray-700"> 动态部署基于Brick BootKit的核心架构，包含插件管理器、类加载器和生命周期管理器： </p><pre><code class="text-sm">┌─────────────────────────────────────────────────────────┐
│                   Spring Boot 应用                        │
├─────────────────────────────────────────────────────────┤
│                   Brick BootKit 核心                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 插件管理器   │  │ 类加载器     │  │ 生命周期管理 │     │
│  │ PluginMgr   │  │ ClassLoader │  │ Lifecycle   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   动态部署层                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 部署调度器   │  │ 监控管理器   │  │ 状态管理器   │     │
│  │ Deployer    │  │ Monitor     │  │ StateMgr    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   插件实例                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 插件A v1.2  │  │ 插件B v2.1  │  │ 插件C v1.0  │     │
│  │ [运行中]    │  │ [更新中]    │  │ [已暂停]    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">核心组件</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-gray-900 mb-3">插件管理器</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 插件发现和注册</li><li>• 版本管理和依赖解析</li><li>• 插件生命周期控制</li><li>• 配置管理和更新</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">类加载器</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 插件类隔离</li><li>• 依赖类共享</li><li>• 热加载机制</li><li>• 内存管理</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">部署调度器</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 部署计划管理</li><li>• 资源调度和分配</li><li>• 并发控制</li><li>• 回滚机制</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">监控管理器</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 健康检查</li><li>• 性能监控</li><li>• 错误跟踪</li><li>• 告警通知</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">部署策略</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">蓝绿部署</h3><p class="text-gray-700"> 通过维护两套完全相同的插件环境，实现零风险版本升级： </p><pre><code class="yaml"># 蓝绿部署配置
deployment:
  strategy: blue_green
  environments:
    blue:
      plugins:
        - name: user-service
          version: &quot;1.0.0&quot;
          status: active
    green:
      plugins:
        - name: user-service
          version: &quot;1.1.0&quot; 
          status: standby
  health_check:
    - url: &quot;/api/health/user-service&quot;
      timeout: 30s
      threshold: 95%</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">滚动部署</h3><p class="text-gray-700"> 逐步替换现有插件实例，确保服务的连续性： </p><pre><code class="yaml"># 滚动部署配置
deployment:
  strategy: rolling
  batch_size: 25%      # 每批更新25%的实例
  max_unavailable: 1   # 最大不可用实例数
  min_ready_time: 10s  # 实例最小就绪时间
  progress_deadline: 5m # 进度截止时间</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">金丝雀部署</h3><p class="text-gray-700"> 先对少量用户发布新版本，根据反馈逐步扩大范围： </p><pre><code class="yaml"># 金丝雀部署配置
deployment:
  strategy: canary
  traffic_splitting:
    stable: 90%         # 稳定版本流量90%
    canary: 10%         # 金丝雀版本流量10%
  success_criteria:
    error_rate: &lt;1%     # 错误率小于1%
    response_time: &lt;200ms # 响应时间小于200ms
  auto_promote:
    enabled: true
    duration: 30m      # 30分钟后自动提升</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">部署流程</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">标准部署流程</h3><div class="space-y-4"><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">1</div><div><h4 class="font-semibold text-gray-900">准备阶段</h4><p class="text-gray-700 text-sm">验证插件包、依赖关系和系统资源</p><ul class="text-gray-600 text-xs mt-1 space-y-1"><li>• 插件包完整性检查</li><li>• 依赖版本兼容性验证</li><li>• 系统资源评估</li></ul></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">2</div><div><h4 class="font-semibold text-gray-900">预检查</h4><p class="text-gray-700 text-sm">系统健康检查和兼容性测试</p><ul class="text-gray-600 text-xs mt-1 space-y-1"><li>• 当前插件状态检查</li><li>• 网络和服务连通性</li><li>• 数据库连接测试</li></ul></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">3</div><div><h4 class="font-semibold text-gray-900">停止旧版本</h4><p class="text-gray-700 text-sm">优雅停止当前运行的插件实例</p><ul class="text-gray-600 text-xs mt-1 space-y-1"><li>• 请求完成等待</li><li>• 资源清理</li><li>• 状态保存</li></ul></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">4</div><div><h4 class="font-semibold text-gray-900">加载新版本</h4><p class="text-gray-700 text-sm">加载插件文件并初始化类加载器</p><ul class="text-gray-600 text-xs mt-1 space-y-1"><li>• JAR文件解压和验证</li><li>• 类加载器创建</li><li>• 依赖解析和加载</li></ul></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">5</div><div><h4 class="font-semibold text-gray-900">启动插件</h4><p class="text-gray-700 text-sm">初始化插件组件和服务</p><ul class="text-gray-600 text-xs mt-1 space-y-1"><li>• 配置文件加载</li><li>• 组件初始化</li><li>• 服务注册</li></ul></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">6</div><div><h4 class="font-semibold text-gray-900">健康验证</h4><p class="text-gray-700 text-sm">功能测试和健康检查</p><ul class="text-gray-600 text-xs mt-1 space-y-1"><li>• 健康检查接口</li><li>• 功能自测</li><li>• 性能基准测试</li></ul></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">7</div><div><h4 class="font-semibold text-gray-900">流量切换</h4><p class="text-gray-700 text-sm">将流量切换到新版本</p><ul class="text-gray-600 text-xs mt-1 space-y-1"><li>• 路由规则更新</li><li>• 负载均衡调整</li><li>• 服务发现更新</li></ul></div></div><div class="flex items-start space-x-3"><div class="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">8</div><div><h4 class="font-semibold text-gray-900">完成</h4><p class="text-gray-700 text-sm">部署完成，清理旧资源</p><ul class="text-gray-600 text-xs mt-1 space-y-1"><li>• 旧版本文件清理</li><li>• 资源释放</li><li>• 状态更新</li></ul></div></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">API配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">部署控制器</h3><p class="text-gray-700"> 通过REST API进行插件的动态部署管理： </p><pre><code class="java">@RestController
@RequestMapping(&quot;/api/plugins&quot;)
public class PluginDeploymentController {
    
    @Autowired
    private PluginDeploymentService deploymentService;
    
    // 部署插件
    @PostMapping(&quot;/deploy&quot;)
    public ResponseEntity&lt;DeploymentResult&gt; deployPlugin(
            @RequestParam String pluginName,
            @RequestParam String version,
            @RequestParam String packageUrl) {
        
        DeploymentRequest request = DeploymentRequest.builder()
            .pluginName(pluginName)
            .version(version)
            .packageUrl(packageUrl)
            .strategy(DeploymentStrategy.ROLLING)
            .healthCheckEnabled(true)
            .build();
            
        DeploymentResult result = deploymentService.deploy(request);
        return ResponseEntity.ok(result);
    }
    
    // 更新插件
    @PostMapping(&quot;/update&quot;)
    public ResponseEntity&lt;DeploymentResult&gt; updatePlugin(
            @RequestParam String pluginName,
            @RequestParam String newVersion) {
        
        UpdateRequest request = UpdateRequest.builder()
            .pluginName(pluginName)
            .newVersion(newVersion)
            .rollbackOnFailure(true)
            .build();
            
        DeploymentResult result = deploymentService.update(request);
        return ResponseEntity.ok(result);
    }
    
    // 卸载插件
    @DeleteMapping(&quot;/uninstall/{pluginName}&quot;)
    public ResponseEntity&lt;UninstallResult&gt; uninstallPlugin(
            @PathVariable String pluginName,
            @RequestParam(defaultValue = &quot;true&quot;) boolean graceful) {
        
        UninstallRequest request = UninstallRequest.builder()
            .pluginName(pluginName)
            .gracefulShutdown(graceful)
            .build();
            
        UninstallResult result = deploymentService.uninstall(request);
        return ResponseEntity.ok(result);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">部署配置示例</h3><pre><code class="yaml"># application.yml
brick-bootkit:
  deployment:
    # 全局配置
    global:
      default-strategy: rolling
      timeout: 300s
      retry-attempts: 3
      health-check:
        enabled: true
        interval: 10s
        timeout: 30s
        
    # 蓝绿部署配置
    blue-green:
      environments:
        blue:
          label: &quot;stable&quot;
          weight: 80
        green:
          label: &quot;candidate&quot;
          weight: 20
      auto-promote:
        enabled: false
        threshold: 95%
        
    # 滚动部署配置
    rolling:
      batch-size: 25%
      max-unavailable: 1
      min-ready-time: 10s
      
    # 金丝雀部署配置
    canary:
      steps:
        - weight: 10
          duration: 5m
        - weight: 25
          duration: 10m
        - weight: 50
          duration: 15m
        - weight: 100
          duration: 20m</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">监控和健康检查</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">健康检查</h3><p class="text-gray-700"> 系统提供多层次的健康检查机制： </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-gray-50 p-4 rounded-lg"><h4 class="font-semibold text-gray-900 mb-2">基础检查</h4><ul class="text-gray-700 text-sm space-y-1"><li>• JVM内存使用</li><li>• 线程池状态</li><li>• 文件句柄数</li></ul></div><div class="bg-gray-50 p-4 rounded-lg"><h4 class="font-semibold text-gray-900 mb-2">应用检查</h4><ul class="text-gray-700 text-sm space-y-1"><li>• 数据库连接</li><li>• 缓存服务</li><li>• 外部API调用</li></ul></div><div class="bg-gray-50 p-4 rounded-lg"><h4 class="font-semibold text-gray-900 mb-2">插件检查</h4><ul class="text-gray-700 text-sm space-y-1"><li>• 插件状态</li><li>• 接口响应</li><li>• 业务指标</li></ul></div></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">性能监控</h3><pre><code class="java">@Component
public class DeploymentMetrics {
    
    @EventListener
    public void onPluginDeployed(PluginDeployedEvent event) {
        // 记录部署成功指标
        meterRegistry.counter(&quot;plugin.deployment.success&quot;,
            &quot;plugin&quot;, event.getPluginName(),
            &quot;version&quot;, event.getVersion()).increment();
            
        // 记录部署耗时
        Timer.Sample sample = Timer.start(meterRegistry);
        sample.stop(Timer.builder(&quot;plugin.deployment.duration&quot;)
            .description(&quot;插件部署耗时&quot;)
            .register(meterRegistry,
                event.getPluginName(), event.getVersion()));
    }
    
    @EventListener
    public void onDeploymentFailed(DeploymentFailedEvent event) {
        // 记录部署失败指标
        meterRegistry.counter(&quot;plugin.deployment.failure&quot;,
            &quot;plugin&quot;, event.getPluginName(),
            &quot;version&quot;, event.getVersion(),
            &quot;reason&quot;, event.getFailureReason()).increment();
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">回滚策略</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">自动回滚</h3><p class="text-gray-700"> 当部署后的健康检查失败时，系统自动触发回滚： </p><pre><code class="yaml"># 回滚策略配置
rollback:
  auto:
    enabled: true
    triggers:
      - health_check_failed
      - error_rate_exceeded
      - response_time_degraded
    thresholds:
      error_rate: 5%
      response_time: 1000ms
      success_rate: 95%
      
  timeout: 5m      # 回滚超时时间
  parallel: false  # 是否并行回滚</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">手动回滚</h3><p class="text-gray-700"> 通过API手动触发回滚操作： </p><pre><code class="bash"># 回滚到上一版本
curl -X POST &quot;/api/plugins/rollback/user-service&quot; \\
  -d &#39;{&quot;reason&quot;: &quot;manual_rollback&quot;}&#39;

# 回滚到指定版本
curl -X POST &quot;/api/plugins/rollback/user-service&quot; \\
  -d &#39;{&quot;targetVersion&quot;: &quot;1.0.0&quot;, &quot;reason&quot;: &quot;emergency_rollback&quot;}&#39;</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">部署前准备</h3><ul class="space-y-2 text-gray-700"><li>• 完整备份当前状态</li><li>• 测试环境预演部署</li><li>• 验证依赖和配置</li><li>• 准备回滚方案</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">部署执行</h3><ul class="space-y-2 text-gray-700"><li>• 选择合适的部署策略</li><li>• 监控关键指标</li><li>• 及时处理异常</li><li>• 记录详细日志</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">资源管理</h3><ul class="space-y-2 text-gray-700"><li>• 合理分配系统资源</li><li>• 监控内存和CPU使用</li><li>• 及时清理无用资源</li><li>• 优化类加载策略</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3><ul class="space-y-2 text-gray-700"><li>• 验证插件来源可信</li><li>• 限制插件权限范围</li><li>• 加密敏感配置信息</li><li>• 审计部署操作日志</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">故障排除</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">常见问题</h3><div class="space-y-4"><div><h4 class="font-semibold text-gray-900">部署失败</h4><p class="text-gray-700 text-sm">问题：插件部署过程中出现错误</p><p class="text-gray-600 text-sm">解决：检查依赖兼容性、系统资源充足性和网络连通性</p></div><div><h4 class="font-semibold text-gray-900">健康检查失败</h4><p class="text-gray-700 text-sm">问题：部署后健康检查不通过</p><p class="text-gray-600 text-sm">解决：检查插件配置、数据库连接和外部服务依赖</p></div><div><h4 class="font-semibold text-gray-900">类冲突</h4><p class="text-gray-700 text-sm">问题：多个插件使用不同版本的同类库</p><p class="text-gray-600 text-sm">解决：使用类隔离和依赖版本统一管理</p></div><div><h4 class="font-semibold text-gray-900">内存泄漏</h4><p class="text-gray-700 text-sm">问题：频繁部署导致内存使用增长</p><p class="text-gray-600 text-sm">解决：检查类加载器清理和资源释放逻辑</p></div></div></div></section>`,10)])])}const Vu=dt(Bu,[["render",ju]]),Hu={},zu={class:"space-y-8"};function Gu(t,e){return k(),N("div",zu,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">插件生命周期管理</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍插件从创建、安装、启动、运行到停止、卸载的完整生命周期过程，以及如何在各个阶段进行管理和控制。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">生命周期概述</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit提供了完整的插件生命周期管理机制，确保插件能够正确初始化、运行和释放资源。 生命周期管理涵盖了从插件发现到最终销毁的全过程。 </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-semibold text-blue-900 mb-2">状态跟踪</h3><p class="text-blue-700 text-sm">实时跟踪插件运行状态</p></div><div class="bg-green-50 p-4 rounded-lg"><h3 class="font-semibold text-green-900 mb-2">优雅关闭</h3><p class="text-green-700 text-sm">确保资源正确释放</p></div><div class="bg-purple-50 p-4 rounded-lg"><h3 class="font-semibold text-purple-900 mb-2">事件驱动</h3><p class="text-purple-700 text-sm">基于事件的生命周期通知</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">生命周期状态</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">状态转换图</h3><p class="text-gray-700"> 插件在其生命周期中会经历多种状态，每个状态都代表插件的当前运行情况： </p><pre><code class="text-sm">┌─────────────┐    安装     ┌─────────────┐    初始化     ┌─────────────┐
│   DISCOVERED │ ───────────→ │ INSTALLED   │ ───────────→ │ INITIALIZED │
└─────────────┘              └─────────────┘              └─────────────┘
      ▲                             │                             │
      │                             ▼                             ▼
      │                      ┌─────────────┐              ┌─────────────┐
      │                      │   FAILED    │              │   STARTING  │
      │                      └─────────────┘              └─────────────┘
      │                             ▲                             │
      │                             │                             ▼
      │                      ┌─────────────┐              ┌─────────────┐
      │                      │   STOPPING  │              │   RUNNING   │
      │                      └─────────────┘              └─────────────┘
      │                             │                             ▲
      │                             │                             │
      │                             ▼                             │
      │                      ┌─────────────┐              ┌─────────────┐
      │                      │  UNINSTALL  │              │   PAUSED    │
      │                      │   FAILED    │              └─────────────┘
      │                      └─────────────┘                      ▲
      │                             │                               │
      │                             │                               │
      └─────────────────────────────┴───────────────────────────────┘
                                   │
                                   ▼
                          ┌─────────────┐
                          │ UNINSTALLED │
                          └─────────────┘</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">状态详细说明</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-semibold text-gray-900 mb-3">核心状态</h4><ul class="space-y-2 text-gray-700 text-sm"><li><strong>DISCOVERED</strong> - 发现阶段，插件已扫描但未安装</li><li><strong>INSTALLED</strong> - 已安装，插件文件已解压并验证</li><li><strong>INITIALIZED</strong> - 已初始化，插件类已加载</li><li><strong>STARTING</strong> - 启动中，插件正在启动过程</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">运行状态</h4><ul class="space-y-2 text-gray-700 text-sm"><li><strong>RUNNING</strong> - 正常运行，插件已完全启动</li><li><strong>PAUSED</strong> - 已暂停，插件暂时停止服务</li><li><strong>STOPPING</strong> - 停止中，插件正在优雅关闭</li><li><strong>FAILED</strong> - 失败状态，插件启动或运行失败</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">清理状态</h4><ul class="space-y-2 text-gray-700 text-sm"><li><strong>UNINSTALLING</strong> - 卸载中，插件正在清理</li><li><strong>UNINSTALL_FAILED</strong> - 卸载失败，清理过程出错</li><li><strong>UNINSTALLED</strong> - 已卸载，插件已被完全移除</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">状态特征</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 状态转换是单向的</li><li>• 每个状态都有特定的生命周期事件</li><li>• 支持状态恢复和回滚</li><li>• 提供状态监控和告警</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">生命周期事件</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">事件类型</h3><p class="text-gray-700"> 插件生命周期管理系统发出各种事件，应用程序可以监听这些事件来执行特定操作： </p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-semibold text-gray-900 mb-3">安装事件</h4><ul class="space-y-2 text-gray-700 text-sm"><li><code>PluginDiscoveredEvent</code> - 插件发现事件</li><li><code>PluginInstalledEvent</code> - 插件安装事件</li><li><code>PluginInstallationFailedEvent</code> - 安装失败事件</li><li><code>PluginUninstalledEvent</code> - 插件卸载事件</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">启动事件</h4><ul class="space-y-2 text-gray-700 text-sm"><li><code>PluginInitializedEvent</code> - 插件初始化事件</li><li><code>PluginStartingEvent</code> - 插件启动事件</li><li><code>PluginStartedEvent</code> - 插件启动完成事件</li><li><code>PluginStartFailedEvent</code> - 启动失败事件</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">停止事件</h4><ul class="space-y-2 text-gray-700 text-sm"><li><code>PluginPausedEvent</code> - 插件暂停事件</li><li><code>PluginStoppingEvent</code> - 插件停止事件</li><li><code>PluginStoppedEvent</code> - 插件停止完成事件</li><li><code>PluginStopFailedEvent</code> - 停止失败事件</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">状态事件</h4><ul class="space-y-2 text-gray-700 text-sm"><li><code>PluginStateChangedEvent</code> - 状态变更事件</li><li><code>PluginHealthChangedEvent</code> - 健康状态变更事件</li><li><code>PluginDependencyChangedEvent</code> - 依赖变更事件</li><li><code>PluginVersionChangedEvent</code> - 版本变更事件</li></ul></div></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">事件监听示例</h3><p class="text-gray-700"> 监听插件生命周期事件的Java代码示例： </p><pre><code class="java">@Component
public class PluginLifecycleListener {
    
    @EventListener
    public void handlePluginStarted(PluginStartedEvent event) {
        PluginInfo plugin = event.getPlugin();
        log.info(&quot;插件 [{}] 启动完成，版本: {}&quot;, plugin.getName(), plugin.getVersion());
        
        // 执行启动后逻辑
        registerPluginMetrics(plugin);
        updatePluginRegistry(plugin);
    }
    
    @EventListener
    public void handlePluginStopped(PluginStoppedEvent event) {
        PluginInfo plugin = event.getPlugin();
        log.info(&quot;插件 [{}] 已停止&quot;, plugin.getName());
        
        // 清理资源
        unregisterPluginMetrics(plugin);
        cleanupPluginResources(plugin);
    }
    
    @EventListener
    public void handlePluginFailed(PluginStartFailedEvent event) {
        PluginInfo plugin = event.getPlugin();
        Exception error = event.getError();
        
        log.error(&quot;插件 [{}] 启动失败: {}&quot;, plugin.getName(), error.getMessage(), error);
        
        // 执行失败处理逻辑
        sendAlert(plugin, error);
        scheduleRetry(plugin);
    }
    
    @EventListener
    public void handleStateChanged(PluginStateChangedEvent event) {
        PluginInfo plugin = event.getPlugin();
        PluginState oldState = event.getOldState();
        PluginState newState = event.getNewState();
        
        log.info(&quot;插件 [{}] 状态变更: {} -&gt; {}&quot;, plugin.getName(), oldState, newState);
        
        // 记录状态变更日志
        auditLogService.recordStateChange(plugin.getName(), oldState, newState);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">生命周期管理</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">状态机配置</h3><p class="text-gray-700"> 可以通过配置文件定义插件的生命周期状态转换规则： </p><pre><code class="yaml"># application.yml
brick-bootkit:
  plugin-lifecycle:
    # 状态转换规则
    state-machine:
      states:
        - DISCOVERED
        - INSTALLED  
        - INITIALIZED
        - STARTING
        - RUNNING
        - PAUSED
        - STOPPING
        - FAILED
        - UNINSTALLING
        - UNINSTALLED
        
      transitions:
        - from: DISCOVERED
          to: INSTALLED
          trigger: install
          action: installPlugin
          
        - from: INSTALLED
          to: INITIALIZED  
          trigger: initialize
          action: initializePlugin
          
        - from: INITIALIZED
          to: STARTING
          trigger: start
          action: startPlugin
          
        - from: STARTING
          to: RUNNING
          trigger: startSuccess
          action: onStartSuccess
          
        - from: STARTING
          to: FAILED
          trigger: startFailed
          action: onStartFailed
          
        - from: RUNNING
          to: PAUSED
          trigger: pause
          action: pausePlugin
          
        - from: PAUSED
          to: RUNNING
          trigger: resume
          action: resumePlugin
          
        - from: RUNNING
          to: STOPPING
          trigger: stop
          action: stopPlugin
          
        - from: STOPPING
          to: INSTALLED
          trigger: stopSuccess
          action: onStopSuccess
          
        - from: INSTALLED
          to: UNINSTALLING
          trigger: uninstall
          action: uninstallPlugin
          
        - from: UNINSTALLING
          to: UNINSTALLED
          trigger: uninstallSuccess
          action: onUninstallSuccess
          
    # 超时配置
    timeouts:
      install: 300s
      initialize: 60s
      start: 120s
      stop: 60s
      pause: 30s
      uninstall: 120s
      
    # 重试配置
    retry:
      max-attempts: 3
      backoff-strategy: exponential
      initial-delay: 5s
      max-delay: 60s</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">生命周期管理器</h3><p class="text-gray-700"> 核心的生命周期管理器实现： </p><pre><code class="java">@Service
public class PluginLifecycleManager {
    
    @Autowired
    private PluginRepository pluginRepository;
    
    @Autowired
    private PluginStateMachine stateMachine;
    
    @Autowired
    private EventPublisher eventPublisher;
    
    @Autowired
    private PluginResourceManager resourceManager;
    
    public void installPlugin(String pluginId, InputStream pluginPackage) {
        try {
            // 验证插件包
            PluginValidationResult validation = validatePlugin(pluginPackage);
            if (!validation.isValid()) {
                throw new PluginValidationException(validation.getErrors());
            }
            
            // 提取插件文件
            PluginInfo plugin = extractPlugin(pluginId, pluginPackage);
            
            // 触发状态转换
            stateMachine.fireEvent(plugin.getId(), &quot;install&quot;);
            
            // 发布安装完成事件
            eventPublisher.publishEvent(new PluginInstalledEvent(plugin));
            
            log.info(&quot;插件 [{}] 安装成功&quot;, plugin.getName());
            
        } catch (Exception e) {
            eventPublisher.publishEvent(new PluginInstallationFailedEvent(pluginId, e));
            throw new PluginInstallationException(&quot;插件安装失败&quot;, e);
        }
    }
    
    public void startPlugin(String pluginId) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        try {
            // 检查前置条件
            validateStartConditions(plugin);
            
            // 触发启动过程
            stateMachine.fireEvent(pluginId, &quot;start&quot;);
            
            // 分配资源
            resourceManager.allocateResources(plugin);
            
            // 初始化插件
            PluginContext context = createPluginContext(plugin);
            plugin.initialize(context);
            
            // 启动插件服务
            plugin.start();
            
            // 验证启动状态
            if (plugin.isHealthy()) {
                stateMachine.fireEvent(pluginId, &quot;startSuccess&quot;);
                eventPublisher.publishEvent(new PluginStartedEvent(plugin));
                log.info(&quot;插件 [{}] 启动成功&quot;, plugin.getName());
            } else {
                throw new PluginException(&quot;插件健康检查失败&quot;);
            }
            
        } catch (Exception e) {
            stateMachine.fireEvent(pluginId, &quot;startFailed&quot;);
            resourceManager.releaseResources(plugin);
            eventPublisher.publishEvent(new PluginStartFailedEvent(plugin, e));
            log.error(&quot;插件 [{}] 启动失败&quot;, plugin.getName(), e);
            throw e;
        }
    }
    
    public void stopPlugin(String pluginId, boolean graceful) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        try {
            stateMachine.fireEvent(pluginId, &quot;stop&quot;);
            
            if (graceful) {
                // 优雅关闭
                plugin.stop(new StopTimeout(60, TimeUnit.SECONDS));
            } else {
                // 强制关闭
                plugin.forceStop();
            }
            
            // 释放资源
            resourceManager.releaseResources(plugin);
            
            stateMachine.fireEvent(pluginId, &quot;stopSuccess&quot;);
            eventPublisher.publishEvent(new PluginStoppedEvent(plugin));
            
            log.info(&quot;插件 [{}] 停止成功&quot;, plugin.getName());
            
        } catch (Exception e) {
            eventPublisher.publishEvent(new PluginStopFailedEvent(plugin, e));
            log.error(&quot;插件 [{}] 停止失败&quot;, plugin.getName(), e);
            throw e;
        }
    }
    
    public void uninstallPlugin(String pluginId) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        try {
            // 确保插件已停止
            if (plugin.getState() == PluginState.RUNNING) {
                throw new PluginException(&quot;插件正在运行，无法卸载&quot;);
            }
            
            stateMachine.fireEvent(pluginId, &quot;uninstall&quot;);
            
            // 清理插件数据
            cleanupPluginData(plugin);
            
            // 删除插件文件
            deletePluginFiles(plugin);
            
            // 从仓库移除
            pluginRepository.remove(pluginId);
            
            stateMachine.fireEvent(pluginId, &quot;uninstallSuccess&quot;);
            eventPublisher.publishEvent(new PluginUninstalledEvent(plugin));
            
            log.info(&quot;插件 [{}] 卸载成功&quot;, plugin.getName());
            
        } catch (Exception e) {
            eventPublisher.publishEvent(new PluginUninstallFailedEvent(plugin, e));
            log.error(&quot;插件 [{}] 卸载失败&quot;, plugin.getName(), e);
            throw e;
        }
    }
    
    public PluginState getPluginState(String pluginId) {
        return pluginRepository.findById(pluginId).getState();
    }
    
    public void pausePlugin(String pluginId) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        if (plugin.getState() != PluginState.RUNNING) {
            throw new PluginException(&quot;插件未在运行状态，无法暂停&quot;);
        }
        
        plugin.pause();
        stateMachine.fireEvent(pluginId, &quot;pause&quot;);
        eventPublisher.publishEvent(new PluginPausedEvent(plugin));
        
        log.info(&quot;插件 [{}] 已暂停&quot;, plugin.getName());
    }
    
    public void resumePlugin(String pluginId) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        if (plugin.getState() != PluginState.PAUSED) {
            throw new PluginException(&quot;插件未在暂停状态，无法恢复&quot;);
        }
        
        plugin.resume();
        stateMachine.fireEvent(pluginId, &quot;resume&quot;);
        eventPublisher.publishEvent(new PluginResumedEvent(plugin));
        
        log.info(&quot;插件 [{}] 已恢复&quot;, plugin.getName());
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">依赖管理</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">依赖关系</h3><p class="text-gray-700"> 插件生命周期管理需要考虑复杂的依赖关系，确保启动和停止的顺序正确： </p><pre><code class="java">@Service
public class PluginDependencyManager {
    
    public void handleDependencyStart(PluginInfo plugin) {
        // 启动依赖插件
        List&lt;PluginInfo&gt; dependencies = plugin.getDependencies();
        for (PluginInfo dependency : dependencies) {
            if (dependency.getState() == PluginState.RUNNING) {
                continue; // 依赖已启动
            }
            
            if (dependency.getState() == PluginState.PAUSED) {
                // 恢复暂停的依赖
                lifecycleManager.resumePlugin(dependency.getId());
            } else {
                // 启动未启动的依赖
                lifecycleManager.startPlugin(dependency.getId());
            }
        }
    }
    
    public void handleDependencyStop(PluginInfo plugin, boolean force) {
        // 检查是否有其他插件依赖此插件
        List&lt;PluginInfo&gt; dependentPlugins = plugin.getDependents();
        
        for (PluginInfo dependent : dependentPlugins) {
            if (dependent.getState() == PluginState.RUNNING) {
                if (force) {
                    // 强制停止依赖插件
                    lifecycleManager.stopPlugin(dependent.getId(), false);
                } else {
                    // 不能停止有依赖的插件
                    throw new PluginDependencyException(
                        &quot;无法停止插件 [&quot; + plugin.getName() + 
                        &quot;]，被插件 [&quot; + dependent.getName() + &quot;] 依赖&quot;);
                }
            }
        }
        
        // 可以安全停止此插件
        lifecycleManager.stopPlugin(plugin.getId(), force);
    }
    
    public void updateDependencyGraph(String pluginId) {
        // 更新依赖关系图
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        // 重新计算依赖关系
        calculateDependencies(plugin);
        
        // 验证依赖循环
        validateDependencyCycle();
        
        // 触发相关插件状态检查
        notifyDependencyChange(plugin);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">健康监控</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">健康检查</h3><p class="text-gray-700"> 对运行中的插件进行定期健康检查，及时发现问题： </p><pre><code class="java">@Component
public class PluginHealthMonitor {
    
    @Scheduled(fixedRate = 30000) // 每30秒检查一次
    public void performHealthCheck() {
        List&lt;PluginInfo&gt; runningPlugins = pluginRepository.findByState(PluginState.RUNNING);
        
        for (PluginInfo plugin : runningPlugins) {
            try {
                PluginHealth health = plugin.checkHealth();
                
                if (health.isHealthy()) {
                    handleHealthyPlugin(plugin, health);
                } else {
                    handleUnhealthyPlugin(plugin, health);
                }
                
            } catch (Exception e) {
                handleHealthCheckError(plugin, e);
            }
        }
    }
    
    private void handleUnhealthyPlugin(PluginInfo plugin, PluginHealth health) {
        log.warn(&quot;插件 [{}] 健康检查失败: {}&quot;, plugin.getName(), health.getMessage());
        
        // 发布健康状态变更事件
        eventPublisher.publishEvent(new PluginHealthChangedEvent(plugin, health));
        
        // 根据失败次数决定处理策略
        int failureCount = plugin.incrementHealthFailureCount();
        
        if (failureCount &gt;= 3) {
            // 连续3次失败，触发恢复机制
            handleCriticalFailure(plugin, health);
        } else if (failureCount &gt;= 1) {
            // 发送告警
            sendHealthAlert(plugin, health);
        }
    }
    
    private void handleCriticalFailure(PluginInfo plugin, PluginHealth health) {
        log.error(&quot;插件 [{}] 健康状况严重恶化，执行恢复操作&quot;, plugin.getName());
        
        try {
            // 尝试重启插件
            lifecycleManager.stopPlugin(plugin.getId(), false);
            Thread.sleep(5000); // 等待5秒
            lifecycleManager.startPlugin(plugin.getId());
            
        } catch (Exception e) {
            log.error(&quot;插件 [{}] 恢复失败&quot;, plugin.getName(), e);
            
            // 发布严重故障事件
            eventPublisher.publishEvent(new PluginCriticalFailureEvent(plugin, e));
        }
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">状态管理</h3><ul class="space-y-2 text-gray-700"><li>• 确保状态转换的正确性</li><li>• 避免状态死锁情况</li><li>• 及时更新插件状态</li><li>• 记录状态变更历史</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">资源管理</h3><ul class="space-y-2 text-gray-700"><li>• 正确分配和释放资源</li><li>• 避免资源泄漏</li><li>• 监控资源使用情况</li><li>• 设置资源使用限制</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">事件处理</h3><ul class="space-y-2 text-gray-700"><li>• 异步处理事件</li><li>• 避免事件处理阻塞</li><li>• 处理事件处理异常</li><li>• 合理设置事件监听器</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">错误处理</h3><ul class="space-y-2 text-gray-700"><li>• 提供详细的错误信息</li><li>• 实现优雅的失败处理</li><li>• 记录详细的错误日志</li><li>• 实施自动恢复机制</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">故障排除</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">常见问题</h3><div class="space-y-4"><div><h4 class="font-semibold text-gray-900">状态不一致</h4><p class="text-gray-700 text-sm">问题：插件状态与实际运行情况不符</p><p class="text-gray-600 text-sm">解决：重新初始化状态机，同步实际状态</p></div><div><h4 class="font-semibold text-gray-900">启动超时</h4><p class="text-gray-700 text-sm">问题：插件启动超过配置的超时时间</p><p class="text-gray-600 text-sm">解决：检查插件初始化逻辑，优化启动流程</p></div><div><h4 class="font-semibold text-gray-900">依赖循环</h4><p class="text-gray-700 text-sm">问题：插件之间存在循环依赖</p><p class="text-gray-600 text-sm">解决：重构插件架构，消除循环依赖</p></div><div><h4 class="font-semibold text-gray-900">资源泄漏</h4><p class="text-gray-700 text-sm">问题：插件停止后资源未正确释放</p><p class="text-gray-600 text-sm">解决：完善插件的停止和清理逻辑</p></div></div></div></section>`,9)])])}const Fu=dt(Hu,[["render",Gu]]),$u={},Ku={class:"space-y-8"};function Wu(t,e){return k(),N("div",Ku,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">配置管理</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍如何管理Brick BootKit的配置信息，包括配置源、动态配置、配置热更新和配置验证等功能。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置管理概述</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit提供了强大的配置管理系统，支持多种配置源、动态配置更新、配置验证和配置热加载， 确保插件能够在不同环境下灵活配置运行参数。 </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-semibold text-blue-900 mb-2">多源配置</h3><p class="text-blue-700 text-sm">支持多种配置来源</p></div><div class="bg-green-50 p-4 rounded-lg"><h3 class="font-semibold text-green-900 mb-2">动态更新</h3><p class="text-green-700 text-sm">运行时配置热更新</p></div><div class="bg-purple-50 p-4 rounded-lg"><h3 class="font-semibold text-purple-900 mb-2">配置验证</h3><p class="text-purple-700 text-sm">强类型配置验证</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置源</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置源类型</h3><p class="text-gray-700"> Brick BootKit支持多种配置源，可以根据不同场景选择合适的配置方式： </p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-gray-900 mb-3">文件配置源</h4><ul class="space-y-2 text-gray-700 text-sm"><li><strong>Properties文件</strong> - 传统的键值对配置文件</li><li><strong>YAML文件</strong> - 结构化的配置文件</li><li><strong>JSON文件</strong> - JSON格式的配置文件</li><li><strong>XML文件</strong> - XML格式的配置文件</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">系统配置源</h4><ul class="space-y-2 text-gray-700 text-sm"><li><strong>环境变量</strong> - 系统环境变量配置</li><li><strong>命令行参数</strong> - JVM启动参数</li><li><strong>系统属性</strong> - System.getProperties()</li><li><strong>JVM参数</strong> - JVM启动配置</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">外部配置源</h4><ul class="space-y-2 text-gray-700 text-sm"><li><strong>数据库</strong> - 数据库中的配置表</li><li><strong>Redis</strong> - Redis缓存配置</li><li><strong>Nacos</strong> - Nacos配置中心</li><li><strong>Apollo</strong> - Apollo配置中心</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">自定义配置源</h4><ul class="space-y-2 text-gray-700 text-sm"><li><strong>HTTP配置</strong> - 远程HTTP配置源</li><li><strong>Kafka配置</strong> - 基于消息的配置</li><li><strong>ZooKeeper</strong> - ZooKeeper配置</li><li><strong>Consul</strong> - Consul配置</li></ul></div></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置源配置</h3><p class="text-gray-700"> 通过配置文件启用和管理不同的配置源： </p><pre><code class="yaml"># application.yml
brick-bootkit:
  config:
    # 默认配置源
    sources:
      - name: application-yml
        type: file
        priority: 100
        enabled: true
        config-location: classpath:application.yml
        
      - name: plugin-yaml
        type: file  
        priority: 90
        enabled: true
        config-location: classpath:plugin-config.yml
        
      - name: environment
        type: environment
        priority: 80
        enabled: true
        prefix: &quot;BRICK_&quot;
        
      - name: system-properties
        type: system
        priority: 70
        enabled: true
        
      - name: redis
        type: redis
        priority: 60
        enabled: false
        host: localhost
        port: 6379
        database: 0
        key-prefix: &quot;brick-config:&quot;
        
      - name: nacos
        type: nacos
        priority: 50
        enabled: false
        server-addr: &quot;nacos-server:8848&quot;
        namespace: &quot;brick-config&quot;
        group: &quot;DEFAULT_GROUP&quot;
        data-id: &quot;brick-config.yaml&quot;
        
    # 配置优先级（数字越大优先级越高）
    priority-order: nacos, redis, application-yml, plugin-yaml, environment, system-properties
    
    # 缓存配置
    cache:
      enabled: true
      ttl: 300s  # 缓存时间
      max-size: 1000 # 最大缓存数量
      
    # 监控配置
    monitoring:
      enabled: true
      metrics-enabled: true
      health-check-enabled: true</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置属性</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置属性定义</h3><p class="text-gray-700"> 使用注解定义配置属性，支持默认值、验证、描述等特性： </p><pre><code class="java">@ConfigProperties(prefix = &quot;brick.plugin.user&quot;)
@Component
public class UserPluginConfig {
    
    @NotBlank(message = &quot;用户名不能为空&quot;)
    @Length(min = 3, max = 50, message = &quot;用户名长度必须在3-50字符之间&quot;)
    private String username;
    
    @NotNull(message = &quot;年龄不能为null&quot;)
    @Min(value = 18, message = &quot;年龄必须大于等于18岁&quot;)
    @Max(value = 100, message = &quot;年龄必须小于等于100岁&quot;)
    private Integer age;
    
    @Email(message = &quot;邮箱格式不正确&quot;)
    private String email;
    
    @Pattern(regexp = &quot;^(1[3-9]\\\\d{9})$&quot;, message = &quot;手机号格式不正确&quot;)
    private String phone;
    
    @Valid
    private List&lt;@Valid UserSettings&gt; settings;
    
    @DefaultValue(&quot;true&quot;)
    private Boolean enabled;
    
    @DefaultValue(&quot;1000&quot;)
    @Min(value = 100, message = &quot;超时时间不能小于100ms&quot;)
    private Long timeout;
    
    // Getters and Setters
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">嵌套配置对象</h3><pre><code class="java">@ConfigProperties(prefix = &quot;brick.plugin.database&quot;)
@Component
public class DatabaseConfig {
    
    @NotNull
    private String url;
    
    @NotBlank
    private String username;
    
    @NotBlank
    private String password;
    
    @DefaultValue(&quot;5&quot;)
    @Min(value = 1)
    @Max(value = 100)
    private Integer poolSize;
    
    @DefaultValue(&quot;30s&quot;)
    private Duration connectionTimeout;
    
    @Valid
    private ConnectionPoolConfig pool;
    
    @Valid
    private List&lt;@Valid ReadReplicaConfig&gt; readReplicas;
    
    @Getter
    @Setter
    @ConfigProperties(prefix = &quot;pool&quot;)
    public static class ConnectionPoolConfig {
        
        @DefaultValue(&quot;10&quot;)
        private Integer minSize;
        
        @DefaultValue(&quot;50&quot;)
        private Integer maxSize;
        
        @DefaultValue(&quot;5m&quot;)
        private Duration maxLifetime;
        
        @DefaultValue(&quot;2m&quot;)
        private Duration idleTimeout;
    }
    
    @Getter
    @Setter
    @ConfigProperties(prefix = &quot;read-replica&quot;)
    public static class ReadReplicaConfig {
        
        @NotBlank
        private String name;
        
        @NotBlank
        private String url;
        
        @DefaultValue(&quot;true&quot;)
        private Boolean enabled;
        
        @DefaultValue(&quot;100&quot;)
        private Integer weight;
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置验证</h3><p class="text-gray-700"> 使用Hibernate Validator进行配置验证： </p><pre><code class="java">@ConfigProperties(prefix = &quot;brick.plugin&quot;)
@Component
public class PluginConfig {
    
    // 字符串验证
    @NotBlank(message = &quot;插件名称不能为空&quot;)
    @Length(min = 1, max = 100, message = &quot;插件名称长度必须在1-100字符之间&quot;)
    private String name;
    
    // 数值验证
    @Min(value = 1, message = &quot;端口号必须大于0&quot;)
    @Max(value = 65535, message = &quot;端口号不能超过65535&quot;)
    private Integer port;
    
    // 集合验证
    @Size(min = 1, max = 10, message = &quot;集群节点数量必须在1-10之间&quot;)
    private List&lt;String&gt; clusterNodes;
    
    // 正则验证
    @Pattern(regexp = &quot;^(https?|ftp)://.*&quot;, message = &quot;URL必须以http、https或ftp开头&quot;)
    private String serviceUrl;
    
    // 枚举验证
    @NotNull
    private LogLevel logLevel;
    
    // 自定义验证
    @ValidURL(message = &quot;无效的URL格式&quot;)
    private String healthCheckUrl;
    
    @ValidEmail(message = &quot;无效的邮箱格式&quot;)
    private String notificationEmail;
    
    // Getters and Setters
    public enum LogLevel {
        DEBUG, INFO, WARN, ERROR
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置注入</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">使用配置注入</h3><p class="text-gray-700"> 通过配置注入器自动加载和注入配置值： </p><pre><code class="java">@PluginComponent
public class UserService {
    
    @ConfigurationValue(&quot;brick.plugin.user.username&quot;)
    private String username;
    
    @ConfigurationValue(&quot;brick.plugin.user.timeout&quot;)
    @DefaultValue(&quot;1000&quot;)
    private Long timeout;
    
    @ConfigurationValue(&quot;brick.plugin.user.enabled&quot;)
    @DefaultValue(&quot;true&quot;)
    private Boolean enabled;
    
    @ConfigurationValue(&quot;brick.plugin.database.url&quot;)
    private String databaseUrl;
    
    @ConfigurationValue(&quot;brick.plugin.database.pool.size&quot;)
    @DefaultValue(&quot;10&quot;)
    private Integer poolSize;
    
    @ConfigurationValue(&quot;brick.plugin.cluster.nodes&quot;)
    private List&lt;String&gt; clusterNodes;
    
    @ConfigurationValue(&quot;brick.plugin.features.cache-enabled&quot;)
    @DefaultValue(&quot;false&quot;)
    private Boolean cacheEnabled;
    
    public void initialize() {
        log.info(&quot;配置加载完成:&quot;);
        log.info(&quot;  用户名: {}&quot;, username);
        log.info(&quot;  超时时间: {}ms&quot;, timeout);
        log.info(&quot;  启用状态: {}&quot;, enabled);
        log.info(&quot;  数据库URL: {}&quot;, databaseUrl);
        log.info(&quot;  连接池大小: {}&quot;, poolSize);
        log.info(&quot;  集群节点: {}&quot;, clusterNodes);
        log.info(&quot;  缓存启用: {}&quot;, cacheEnabled);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">对象配置注入</h3><pre><code class="java">@PluginComponent
public class DatabaseService {
    
    @ConfigurationValue(&quot;brick.plugin.database&quot;)
    @Validated
    private DatabaseConfig databaseConfig;
    
    @ConfigurationValue(&quot;brick.plugin.http&quot;)
    @Validated
    private HttpConfig httpConfig;
    
    @ConfigurationValue(&quot;brick.plugin&quot;)
    @Validated
    private PluginConfig pluginConfig;
    
    public void initialize() {
        // 使用配置对象
        DataSource dataSource = createDataSource(databaseConfig);
        
        // 使用配置值
        int port = pluginConfig.getPort();
        String serviceUrl = pluginConfig.getServiceUrl();
        
        // 使用配置验证
        List&lt;String&gt; validationErrors = validateConfig(pluginConfig);
        if (!validationErrors.isEmpty()) {
            throw new ConfigurationException(&quot;配置验证失败: &quot; + validationErrors);
        }
        
        log.info(&quot;数据库服务初始化完成，配置信息: {}&quot;, databaseConfig);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">动态配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置变更监听</h3><p class="text-gray-700"> 支持监听配置变更，实时更新插件配置： </p><pre><code class="java">@PluginComponent
public class ConfigChangeHandler {
    
    @ConfigurationListener(path = &quot;brick.plugin.user.username&quot;)
    public void onUsernameChanged(String oldValue, String newValue) {
        log.info(&quot;用户名配置变更: {} -&gt; {}&quot;, oldValue, newValue);
        
        // 通知相关组件配置变更
        notifyUsernameChange(newValue);
    }
    
    @ConfigurationListener(path = &quot;brick.plugin.database.*&quot;)
    public void onDatabaseConfigChanged(ConfigChangeEvent event) {
        String key = event.getKey();
        String oldValue = event.getOldValue();
        String newValue = event.getNewValue();
        
        log.info(&quot;数据库配置变更 [{}]: {} -&gt; {}&quot;, key, oldValue, newValue);
        
        // 根据不同配置项执行相应逻辑
        if (&quot;url&quot;.equals(key)) {
            updateDatabaseConnection(newValue);
        } else if (&quot;pool.size&quot;.equals(key)) {
            updateConnectionPoolSize(Integer.valueOf(newValue));
        }
    }
    
    @ConfigurationListener(path = &quot;brick.plugin.features.*&quot;, async = true)
    public void onFeatureConfigChanged(ConfigChangeEvent event) {
        // 异步处理功能配置变更
        CompletableFuture.runAsync(() -&gt; {
            handleFeatureToggle(event);
        });
    }
    
    @ConfigurationListener(path = &quot;brick.plugin.cluster.*&quot;, debounce = &quot;3s&quot;)
    public void onClusterConfigChanged(ConfigChangeEvent event) {
        // 防抖处理，3秒内的多次变更只会执行一次
        updateClusterConfig(event);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置更新API</h3><pre><code class="java">@RestController
@RequestMapping(&quot;/api/config&quot;)
public class ConfigManagementController {
    
    @Autowired
    private ConfigService configService;
    
    @GetMapping(&quot;/{key}&quot;)
    public ResponseEntity&lt;?&gt; getConfig(@PathVariable String key) {
        Object value = configService.getValue(key);
        return ResponseEntity.ok(value);
    }
    
    @PutMapping(&quot;/{key}&quot;)
    public ResponseEntity&lt;?&gt; updateConfig(@PathVariable String key, @RequestBody Object value) {
        configService.setValue(key, value);
        return ResponseEntity.ok().build();
    }
    
    @PostMapping(&quot;/batch&quot;)
    public ResponseEntity&lt;?&gt; batchUpdateConfig(@RequestBody Map&lt;String, Object&gt; configs) {
        configs.forEach(configService::setValue);
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping(&quot;/{key}&quot;)
    public ResponseEntity&lt;?&gt; deleteConfig(@PathVariable String key) {
        configService.removeValue(key);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping(&quot;/history/{key}&quot;)
    public ResponseEntity&lt;List&lt;ConfigHistory&gt;&gt; getConfigHistory(
            @PathVariable String key,
            @RequestParam(defaultValue = &quot;10&quot;) int limit) {
        
        List&lt;ConfigHistory&gt; history = configService.getConfigHistory(key, limit);
        return ResponseEntity.ok(history);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置热更新</h3><p class="text-gray-700"> 配置变更后自动触发组件重新配置： </p><pre><code class="java">@PluginComponent
public class HotReloadService {
    
    @ConfigurationValue(&quot;brick.plugin.cache.ttl&quot;)
    private Long cacheTtl;
    
    private CacheManager cacheManager;
    
    @PostConstruct
    public void initialize() {
        initializeCache();
    }
    
    @ConfigurationListener(path = &quot;brick.plugin.cache.ttl&quot;)
    public void onCacheConfigChanged(Long newTtl) {
        log.info(&quot;缓存TTL配置变更: {}ms -&gt; {}ms&quot;, cacheTtl, newTtl);
        
        // 更新缓存配置
        updateCacheConfiguration(newTtl);
        
        // 重新初始化缓存
        reinitializeCache();
    }
    
    private void updateCacheConfiguration(Long ttl) {
        // 更新内存中的配置
        cacheTtl = ttl;
        
        // 更新缓存管理器配置
        cacheManager.updateTtl(ttl);
        
        // 清理过期缓存
        cacheManager.clearExpiredEntries();
    }
    
    private void reinitializeCache() {
        log.info(&quot;重新初始化缓存...&quot;);
        cacheManager.clearAll();
        initializeCache();
    }
    
    private void initializeCache() {
        // 根据配置初始化缓存
        this.cacheManager = new CacheManager(cacheTtl, TimeUnit.MILLISECONDS);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置环境</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">环境配置</h3><p class="text-gray-700"> 支持多环境配置，根据运行环境自动切换配置： </p><pre><code class="yaml"># application.yml (默认配置)
brick:
  plugin:
    database:
      url: &quot;jdbc:mysql://localhost:3306/default_db&quot;
      username: &quot;dev_user&quot;
      password: &quot;dev_password&quot;
      
# application-dev.yml (开发环境)
brick:
  plugin:
    database:
      url: &quot;jdbc:mysql://localhost:3306/dev_db&quot;
      username: &quot;dev_user&quot;
      password: &quot;dev_password&quot;
    logging:
      level: DEBUG
      
# application-test.yml (测试环境)
brick:
  plugin:
    database:
      url: &quot;jdbc:mysql://test-db:3306/test_db&quot;
      username: &quot;test_user&quot;
      password: &quot;test_password&quot;
    logging:
      level: INFO
      
# application-prod.yml (生产环境)
brick:
  plugin:
    database:
      url: &quot;jdbc:mysql://prod-db:3306/prod_db&quot;
      username: \${DATABASE_USERNAME}
      password: \${DATABASE_PASSWORD}
    logging:
      level: WARN
    security:
      enabled: true</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">条件配置</h3><p class="text-gray-700"> 根据条件启用或禁用配置： </p><pre><code class="java">@PluginComponent
public class ConditionalConfigService {
    
    @ConfigurationValue(&quot;brick.plugin.debug.enabled&quot;)
    @ConditionalOnProperty(name = &quot;brick.plugin.debug.enabled&quot;, havingValue = &quot;true&quot;)
    private Boolean debugEnabled;
    
    @ConfigurationValue(&quot;brick.plugin.cluster.enabled&quot;)
    @ConditionalOnProperty(name = &quot;brick.plugin.cluster.enabled&quot;, havingValue = &quot;true&quot;)
    @ConditionalOnMissingBean
    private ClusterService clusterService;
    
    @ConfigurationValue(&quot;brick.plugin.cache.provider&quot;)
    @ConditionalOnProperty(name = &quot;brick.plugin.cache.provider&quot;, matchIfMissing = true)
    private String cacheProvider;
    
    @ConditionalOnBean(type = &quot;RedisTemplate&quot;)
    @ConfigurationValue(&quot;brick.plugin.redis.enabled&quot;)
    private Boolean redisEnabled;
    
    @PostConstruct
    public void initialize() {
        if (Boolean.TRUE.equals(debugEnabled)) {
            log.info(&quot;调试模式已启用&quot;);
            enableDebugMode();
        }
        
        log.info(&quot;缓存提供商: {}&quot;, cacheProvider);
        log.info(&quot;Redis启用状态: {}&quot;, redisEnabled);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置安全</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">敏感信息加密</h3><p class="text-gray-700"> 对敏感配置信息进行加密存储和解密使用： </p><pre><code class="java">@ConfigProperties(prefix = &quot;brick.plugin.database&quot;)
@Component
public class SecureDatabaseConfig {
    
    @ConfigurationValue(&quot;brick.plugin.database.username&quot;)
    private String username;
    
    // 加密存储的密码
    @ConfigurationValue(&quot;brick.plugin.database.password&quot;)
    @Encrypted
    private String password;
    
    // 解密后的密码
    public String getDecryptedPassword() {
        return decryptPassword(this.password);
    }
    
    // 加密配置值
    public void setEncryptedPassword(String encryptedPassword) {
        this.password = encryptedPassword;
    }
    
    private String decryptPassword(String encryptedPassword) {
        return encryptionService.decrypt(encryptedPassword);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置访问控制</h3><pre><code class="java">@PreAuthorize(&quot;hasRole(&#39;ADMIN&#39;)&quot;)
@PostAuthorize(&quot;hasRole(&#39;ADMIN&#39;)&quot;)
@Controller
public class ConfigAdminController {
    
    @PreAuthorize(&quot;hasPermission(#key, &#39;CONFIG_READ&#39;)&quot;)
    @GetMapping(&quot;/{key}&quot;)
    public Object getConfig(@PathVariable String key) {
        return configService.getValue(key);
    }
    
    @PreAuthorize(&quot;hasPermission(#config, &#39;CONFIG_WRITE&#39;)&quot;)
    @PutMapping(&quot;/{key}&quot;)
    public void setConfig(@PathVariable String key, @RequestBody Object config) {
        configService.setValue(key, config);
    }
    
    @PreAuthorize(&quot;hasRole(&#39;ADMIN&#39;)&quot;)
    @DeleteMapping(&quot;/{key}&quot;)
    public void deleteConfig(@PathVariable String key) {
        configService.removeValue(key);
    }
    
    // 配置变更审计
    @PreAuthorize(&quot;hasRole(&#39;ADMIN&#39;)&quot;)
    @PostMapping(&quot;/audit/{key}&quot;)
    public List&lt;ConfigHistory&gt; getConfigHistory(@PathVariable String key) {
        return configService.getConfigHistory(key);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置监控</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置指标</h3><p class="text-gray-700"> 监控配置相关的指标和统计信息： </p><pre><code class="java">@Component
public class ConfigMetrics {
    
    private final MeterRegistry meterRegistry;
    private final Counter configLoadCounter;
    private final Timer configLoadTimer;
    private final Gauge configCountGauge;
    
    public ConfigMetrics(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
        
        this.configLoadCounter = Counter.builder(&quot;config.load.count&quot;)
            .description(&quot;配置加载次数&quot;)
            .register(meterRegistry);
            
        this.configLoadTimer = Timer.builder(&quot;config.load.duration&quot;)
            .description(&quot;配置加载耗时&quot;)
            .register(meterRegistry);
            
        this.configCountGauge = Gauge.builder(&quot;config.count&quot;)
            .description(&quot;配置项数量&quot;)
            .register(meterRegistry, this, ConfigMetrics::getConfigCount);
    }
    
    public void recordConfigLoad(String source, boolean success, long duration) {
        configLoadCounter
            .tag(&quot;source&quot;, source)
            .tag(&quot;success&quot;, String.valueOf(success))
            .increment();
            
        configLoadTimer
            .tag(&quot;source&quot;, source)
            .record(duration, TimeUnit.MILLISECONDS);
    }
    
    private int getConfigCount() {
        return configService.getAllKeys().size();
    }
    
    @EventListener
    public void onConfigChanged(ConfigChangedEvent event) {
        meterRegistry.counter(&quot;config.change.count&quot;,
            &quot;key&quot;, event.getKey(),
            &quot;change_type&quot;, event.getChangeType().name()).increment();
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">配置组织</h3><ul class="space-y-2 text-gray-700"><li>• 使用有意义的配置键名</li><li>• 采用分层命名约定</li><li>• 按功能模块组织配置</li><li>• 提供配置说明文档</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">配置验证</h3><ul class="space-y-2 text-gray-700"><li>• 使用强类型配置对象</li><li>• 添加配置验证注解</li><li>• 提供合理的默认值</li><li>• 验证配置完整性</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">配置更新</h3><ul class="space-y-2 text-gray-700"><li>• 实现优雅的配置更新</li><li>• 记录配置变更历史</li><li>• 支持配置回滚</li><li>• 通知相关组件配置变更</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3><ul class="space-y-2 text-gray-700"><li>• 加密敏感配置信息</li><li>• 限制配置访问权限</li><li>• 审计配置操作日志</li><li>• 定期更新配置密钥</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">故障排除</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">常见问题</h3><div class="space-y-4"><div><h4 class="font-semibold text-gray-900">配置加载失败</h4><p class="text-gray-700 text-sm">问题：配置文件无法加载或解析</p><p class="text-gray-600 text-sm">解决：检查配置文件格式、路径和权限</p></div><div><h4 class="font-semibold text-gray-900">配置值类型错误</h4><p class="text-gray-700 text-sm">问题：配置值类型与期望不符</p><p class="text-gray-600 text-sm">解决：使用正确的配置属性类型，添加类型转换</p></div><div><h4 class="font-semibold text-gray-900">配置验证失败</h4><p class="text-gray-700 text-sm">问题：配置验证规则不通过</p><p class="text-gray-600 text-sm">解决：检查配置值范围和格式要求</p></div><div><h4 class="font-semibold text-gray-900">配置缓存问题</h4><p class="text-gray-700 text-sm">问题：配置更新后未生效</p><p class="text-gray-600 text-sm">解决：检查缓存配置和缓存清理逻辑</p></div></div></div></section>`,11)])])}const Ju=dt($u,[["render",Wu]]),Qu={},Yu={class:"space-y-8"};function Xu(t,e){return k(),N("div",Yu,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">性能监控</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍Brick BootKit的性能监控体系，包括指标收集、性能分析、告警机制和性能优化方案。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">性能监控概述</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit提供了全面的性能监控解决方案，实时监控系统资源使用情况、插件性能指标和应用健康状态， 帮助开发者和运维人员及时发现和解决性能问题。 </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-semibold text-blue-900 mb-2">实时监控</h3><p class="text-blue-700 text-sm">实时采集系统各项指标</p></div><div class="bg-green-50 p-4 rounded-lg"><h3 class="font-semibold text-green-900 mb-2">智能告警</h3><p class="text-green-700 text-sm">基于阈值的智能告警</p></div><div class="bg-purple-50 p-4 rounded-lg"><h3 class="font-semibold text-purple-900 mb-2">性能分析</h3><p class="text-purple-700 text-sm">深度性能分析和报告</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">监控架构</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">监控架构图</h3><p class="text-gray-700"> Brick BootKit的性能监控采用分层架构，支持多维度的性能数据收集和分析： </p><pre><code class="text-sm">┌─────────────────────────────────────────────────────────┐
│                   展示层 (Presentation Layer)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  实时面板    │  │  性能报告   │  │  告警中心   │     │
│  │ Dashboard   │  │  Reports    │  │  Alerts     │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   应用层 (Application Layer)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  指标收集器  │  │  数据聚合器  │  │  告警引擎   │     │
│  │ Metrics     │  │ Aggregator  │  │ Alert       │     │
│  │ Collector   │  │             │  │ Engine      │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   数据层 (Data Layer)                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  时序数据库  │  │  缓存系统   │  │  日志存储   │     │
│  │ Time Series │  │ Cache       │  │ Log Store   │     │
│  │ Database    │  │ System      │  │             │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   采集层 (Collection Layer)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  JVM监控    │  │ 应用监控     │  │  插件监控    │     │
│  │ JVM Monitor │  │ App Monitor │  │ Plugin      │     │
│  │             │  │             │  │ Monitor     │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">核心组件</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-gray-900 mb-3">数据采集层</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• JVM指标采集（内存、线程、GC等）</li><li>• 应用指标采集（HTTP、数据库、缓存）</li><li>• 插件指标采集（生命周期、性能）</li><li>• 系统指标采集（CPU、磁盘、网络）</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">数据处理层</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 指标聚合和计算</li><li>• 异常检测和分析</li><li>• 数据清洗和格式化</li><li>• 实时流处理</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">告警系统</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 阈值告警规则</li><li>• 趋势分析告警</li><li>• 告警分级和抑制</li><li>• 多渠道通知</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">展示系统</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 实时监控面板</li><li>• 历史趋势图表</li><li>• 性能分析报告</li><li>• 告警状态展示</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">指标收集</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">JVM指标</h3><p class="text-gray-700"> 监控Java虚拟机的各项性能指标： </p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-semibold text-gray-900 mb-2">内存指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>heap.used</code> - 已使用的堆内存</li><li><code>heap.max</code> - 最大堆内存</li><li><code>heap.committed</code> - 提交的堆内存</li><li><code>nonheap.used</code> - 非堆内存使用量</li><li><code>metaspace.used</code> - Metaspace使用量</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">GC指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>gc.count</code> - GC次数</li><li><code>gc.time</code> - GC耗时</li><li><code>gc.young.count</code> - Young GC次数</li><li><code>gc.old.count</code> - Old GC次数</li><li><code>gc.pause.time</code> - GC暂停时间</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">线程指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>threads.count</code> - 线程总数</li><li><code>threads.daemon.count</code> - 守护线程数</li><li><code>threads.peak.count</code> - 峰值线程数</li><li><code>threads.states.blocked</code> - 阻塞线程数</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">类加载指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>classes.loaded</code> - 已加载类数</li><li><code>classes.unloaded</code> - 已卸载类数</li><li><code>classes.total</code> - 总类数</li></ul></div></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">应用指标</h3><p class="text-gray-700"> 监控Spring Boot应用的业务指标： </p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-semibold text-gray-900 mb-2">HTTP指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>http.server.requests.count</code> - HTTP请求总数</li><li><code>http.server.requests.duration</code> - HTTP请求耗时</li><li><code>http.server.errors.count</code> - HTTP错误数</li><li><code>http.server.requests.rate</code> - 请求速率</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">数据库指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>database.connections.active</code> - 活跃连接数</li><li><code>database.connections.idle</code> - 空闲连接数</li><li><code>database.queries.duration</code> - 查询耗时</li><li><code>database.transactions.count</code> - 事务数</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">缓存指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>cache.hits.count</code> - 缓存命中数</li><li><code>cache.misses.count</code> - 缓存未命中数</li><li><code>cache.hit.rate</code> - 缓存命中率</li><li><code>cache.size</code> - 缓存大小</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">消息队列指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>mq.messages.produced</code> - 发送消息数</li><li><code>mq.messages.consumed</code> - 接收消息数</li><li><code>mq.queue.size</code> - 队列大小</li><li><code>mq.processing.time</code> - 处理时间</li></ul></div></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件指标</h3><p class="text-gray-700"> 专门针对插件系统的性能指标： </p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-semibold text-gray-900 mb-2">生命周期指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>plugin.startup.time</code> - 插件启动时间</li><li><code>plugin.shutdown.time</code> - 插件关闭时间</li><li><code>plugin.lifetime.duration</code> - 插件运行时间</li><li><code>plugin.restart.count</code> - 重启次数</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">资源使用指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>plugin.memory.usage</code> - 内存使用量</li><li><code>plugin.cpu.usage</code> - CPU使用率</li><li><code>plugin.threads.count</code> - 线程数</li><li><code>plugin.filehandles.open</code> - 打开的文件句柄</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">接口性能指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>plugin.api.request.count</code> - API请求数</li><li><code>plugin.api.response.time</code> - API响应时间</li><li><code>plugin.api.error.rate</code> - API错误率</li><li><code>plugin.api.throughput</code> - API吞吐量</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">健康状态指标</h4><ul class="space-y-1 text-gray-700 text-sm"><li><code>plugin.health.score</code> - 健康分数</li><li><code>plugin.status.duration</code> - 状态持续时间</li><li><code>plugin.failure.count</code> - 故障次数</li><li><code>plugin.recovery.time</code> - 恢复时间</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">监控配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置文件</h3><p class="text-gray-700"> 通过配置文件启用和配置监控功能： </p><pre><code class="yaml"># application.yml
brick-bootkit:
  monitoring:
    # 全局监控开关
    enabled: true
    
    # 监控数据存储
    storage:
      # 时序数据库配置
      time-series:
        enabled: true
        type: influxdb  # influxdb, prometheus, elasticsearch
        host: localhost
        port: 8086
        database: brick_monitoring
        retention: 30d  # 数据保留时间
        
      # 缓存配置
      cache:
        enabled: true
        max-size: 10000
        ttl: 300s
        
    # 指标收集配置
    metrics:
      # JVM指标
      jvm:
        enabled: true
        collection-interval: 10s
        
      # 应用指标
      application:
        enabled: true
        collection-interval: 5s
        
      # 插件指标
      plugin:
        enabled: true
        collection-interval: 15s
        
      # 自定义指标
      custom:
        enabled: true
        collection-interval: 30s
        
    # 告警配置
    alerting:
      enabled: true
      
      # 告警规则
      rules:
        - name: &quot;HighMemoryUsage&quot;
          condition: &quot;jvm.memory.usage &gt; 0.8&quot;
          duration: &quot;2m&quot;
          severity: &quot;warning&quot;
          action: &quot;notify_admin&quot;
          
        - name: &quot;PluginFailure&quot;
          condition: &quot;plugin.health.score &lt; 0.5&quot;
          duration: &quot;30s&quot;
          severity: &quot;critical&quot;
          action: &quot;restart_plugin&quot;
          
        - name: &quot;HighResponseTime&quot;
          condition: &quot;http.server.requests.duration.p95 &gt; 2000ms&quot;
          duration: &quot;5m&quot;
          severity: &quot;warning&quot;
          action: &quot;performance_analysis&quot;
          
      # 告警通知
      notification:
        channels:
          - type: &quot;email&quot;
            enabled: true
            recipients: [&quot;admin@example.com&quot;]
            
          - type: &quot;webhook&quot;
            enabled: true
            url: &quot;https://hooks.slack.com/services/...&quot;
            
          - type: &quot;sms&quot;
            enabled: false
            recipients: [&quot;+1234567890&quot;]
            
    # 监控面板配置
    dashboard:
      enabled: true
      refresh-interval: 5s
      auto-refresh: true
      
      # 面板布局
      layout:
        - row: 1
          widgets:
            - type: &quot;chart&quot;
              title: &quot;JVM内存使用情况&quot;
              metrics: [&quot;jvm.memory.used&quot;, &quot;jvm.memory.max&quot;]
              chart-type: &quot;line&quot;
              
            - type: &quot;chart&quot;
              title: &quot;HTTP请求速率&quot;
              metrics: [&quot;http.server.requests.rate&quot;]
              chart-type: &quot;area&quot;</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">代码配置</h3><p class="text-gray-700"> 通过Java注解和配置类来启用监控功能： </p><pre><code class="java">@Configuration
@EnableBrickMonitoring
@EnableMetrics
@EnableActuator
public class MonitoringConfig {
    
    @Bean
    public PluginMetricsCollector pluginMetricsCollector() {
        return new PluginMetricsCollector();
    }
    
    @Bean
    public JVMMetricsCollector jvmMetricsCollector() {
        return new JVMMetricsCollector();
    }
    
    @Bean
    public AlertingService alertingService() {
        return new AlertingService();
    }
}

// 插件组件监控
@PluginComponent
@Monitored
public class MonitoredPluginService {
    
    @Timed(name = &quot;user.service.find.by.id&quot;)
    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    @Counted(name = &quot;user.service.create&quot;)
    @Timed(name = &quot;user.service.create.duration&quot;)
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    @Gauge(name = &quot;user.service.total.users&quot;)
    public int getTotalUsers() {
        return userRepository.count();
    }
}

// 自定义指标
@Component
@PluginComponent
public class CustomMetrics {
    
    private final MeterRegistry meterRegistry;
    
    public CustomMetrics(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }
    
    public void recordBusinessMetric(String operation, long duration) {
        Timer.Sample sample = Timer.start(meterRegistry);
        sample.stop(Timer.builder(&quot;business.operation.duration&quot;)
            .description(&quot;业务操作耗时&quot;)
            .register(meterRegistry, 
                Tags.of(&quot;operation&quot;, operation), 
                duration, TimeUnit.MILLISECONDS));
    }
    
    public void incrementErrorCount(String service, String errorType) {
        meterRegistry.counter(&quot;business.error.count&quot;,
            Tags.of(&quot;service&quot;, service, &quot;type&quot;, errorType)).increment();
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">性能分析</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">性能分析工具</h3><p class="text-gray-700"> 提供多种性能分析工具和方法： </p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-gray-900 mb-3">实时分析</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 实时性能仪表板</li><li>• 实时告警和通知</li><li>• 实时性能趋势</li><li>• 实时瓶颈检测</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">历史分析</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 历史性能报告</li><li>• 性能趋势分析</li><li>• 容量规划分析</li><li>• 性能基线对比</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">深度分析</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 性能剖析(Profiling)</li><li>• 内存分析</li><li>• 线程分析</li><li>• 调用链分析</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">预测分析</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 资源使用预测</li><li>• 性能趋势预测</li><li>• 故障预警</li><li>• 容量需求预测</li></ul></div></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">性能分析示例</h3><pre><code class="java">@Service
@PluginComponent
public class PerformanceAnalyzer {
    
    @Autowired
    private MetricsRepository metricsRepository;
    
    @Autowired
    private PluginManager pluginManager;
    
    public PerformanceReport generateReport(String pluginId, TimeRange timeRange) {
        PerformanceReport report = new PerformanceReport();
        report.setPluginId(pluginId);
        report.setTimeRange(timeRange);
        
        // 收集性能数据
        List&lt;MetricData&gt; metrics = metricsRepository.findMetrics(pluginId, timeRange);
        
        // 分析性能指标
        report.setMemoryAnalysis(analyzeMemoryUsage(metrics));
        report.setCpuAnalysis(analyzeCpuUsage(metrics));
        report.setResponseTimeAnalysis(analyzeResponseTime(metrics));
        report.setThroughputAnalysis(analyzeThroughput(metrics));
        
        // 生成建议
        report.setRecommendations(generateRecommendations(report));
        
        return report;
    }
    
    private MemoryAnalysis analyzeMemoryUsage(List&lt;MetricData&gt; metrics) {
        MemoryAnalysis analysis = new MemoryAnalysis();
        
        // 提取内存使用数据
        List&lt;Double&gt; heapUsage = metrics.stream()
            .filter(m -&gt; &quot;jvm.memory.used&quot;.equals(m.getName()))
            .map(MetricData::getValue)
            .map(Double::parseDouble)
            .collect(Collectors.toList());
        
        analysis.setAvgUsage(calculateAverage(heapUsage));
        analysis.setMaxUsage(Collections.max(heapUsage));
        analysis.setMinUsage(Collections.min(heapUsage));
        analysis.setTrend(calculateTrend(heapUsage));
        
        // 检测内存泄漏
        if (isMemoryLeak(heapUsage)) {
            analysis.setIssue(MemoryIssue.POTENTIAL_LEAK);
            analysis.setSeverity(Severity.HIGH);
        }
        
        return analysis;
    }
    
    private List&lt;String&gt; generateRecommendations(PerformanceReport report) {
        List&lt;String&gt; recommendations = new ArrayList&lt;&gt;();
        
        // 基于内存分析的建议
        if (report.getMemoryAnalysis().getAvgUsage() &gt; 0.8) {
            recommendations.add(&quot;建议优化内存使用，考虑增加堆内存大小&quot;);
        }
        
        // 基于响应时间分析的建议
        if (report.getResponseTimeAnalysis().getP95() &gt; 2000) {
            recommendations.add(&quot;响应时间较长，建议优化慢查询和增加缓存&quot;);
        }
        
        // 基于吞吐量分析的建议
        if (report.getThroughputAnalysis().getDecliningTrend() &gt; 0.1) {
            recommendations.add(&quot;吞吐量呈下降趋势，建议检查系统瓶颈&quot;);
        }
        
        return recommendations;
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">告警系统</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">告警规则配置</h3><p class="text-gray-700"> 定义灵活的告警规则和条件： </p><pre><code class="yaml"># 告警规则配置
alerting:
  rules:
    # JVM内存告警
    - name: &quot;JVM内存使用告警&quot;
      enabled: true
      metric: &quot;jvm.memory.usage&quot;
      condition: &quot;value &gt; 0.85&quot;      # 内存使用率超过85%
      duration: &quot;3m&quot;                 # 持续3分钟
      severity: &quot;warning&quot;            # 告警级别：info, warning, critical
      message: &quot;JVM内存使用率过高: {value}&quot;
      
    # 插件健康告警
    - name: &quot;插件健康状态告警&quot;
      enabled: true
      metric: &quot;plugin.health.score&quot;
      condition: &quot;value &lt; 0.5&quot;       # 健康分数低于0.5
      duration: &quot;1m&quot;
      severity: &quot;critical&quot;
      message: &quot;插件健康分数过低: {value}&quot;
      
    # HTTP响应时间告警
    - name: &quot;HTTP响应时间告警&quot;
      enabled: true
      metric: &quot;http.server.requests.duration.p95&quot;
      condition: &quot;value &gt; 2000&quot;      # P95响应时间超过2秒
      duration: &quot;5m&quot;
      severity: &quot;warning&quot;
      message: &quot;HTTP响应时间过长: {value}ms&quot;
      
    # 插件启动失败告警
    - name: &quot;插件启动失败告警&quot;
      enabled: true
      metric: &quot;plugin.startup.failure.count&quot;
      condition: &quot;value &gt; 0&quot;         # 有启动失败
      duration: &quot;30s&quot;
      severity: &quot;critical&quot;
      message: &quot;插件启动失败&quot;
      
    # 告警抑制规则
    suppressions:
      - name: &quot;维护窗口抑制&quot;
        enabled: false
        time-range: &quot;02:00-04:00&quot;     # 凌晨2-4点抑制告警
        weekdays: [&quot;sat&quot;, &quot;sun&quot;]      # 周末抑制告警
        
    # 告警聚合
    aggregation:
      enabled: true
      time-window: &quot;5m&quot;              # 5分钟窗口聚合
      max-alerts: 100                # 最大聚合告警数</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">告警处理</h3><pre><code class="java">@Service
@PluginComponent
public class AlertingService {
    
    @Autowired
    private NotificationService notificationService;
    
    @Autowired
    private PluginManager pluginManager;
    
    @EventListener
    public void handleMetricAlert(MetricAlertEvent event) {
        Alert alert = event.getAlert();
        
        // 记录告警
        logAlert(alert);
        
        // 执行告警动作
        executeAlertAction(alert);
        
        // 发送通知
        sendNotification(alert);
        
        // 更新告警状态
        updateAlertState(alert);
    }
    
    private void executeAlertAction(Alert alert) {
        switch (alert.getRule().getAction()) {
            case &quot;restart_plugin&quot;:
                if (alert.getMetric().contains(&quot;plugin.health&quot;)) {
                    String pluginId = extractPluginId(alert.getMetric());
                    restartPlugin(pluginId);
                }
                break;
                
            case &quot;scale_up&quot;:
                if (alert.getMetric().contains(&quot;cpu.usage&quot;)) {
                    scaleUpResources();
                }
                break;
                
            case &quot;performance_analysis&quot;:
                startPerformanceAnalysis(alert.getPluginId());
                break;
                
            case &quot;notify_admin&quot;:
                notifyAdministrators(alert);
                break;
                
            default:
                log.warn(&quot;未知的告警动作: {}&quot;, alert.getRule().getAction());
        }
    }
    
    private void restartPlugin(String pluginId) {
        try {
            log.info(&quot;重启插件: {}&quot;, pluginId);
            pluginManager.stopPlugin(pluginId, false);
            Thread.sleep(5000); // 等待5秒
            pluginManager.startPlugin(pluginId);
            
            log.info(&quot;插件重启成功: {}&quot;, pluginId);
            
        } catch (Exception e) {
            log.error(&quot;插件重启失败: {}&quot;, pluginId, e);
        }
    }
    
    private void startPerformanceAnalysis(String pluginId) {
        // 启动性能分析任务
        PerformanceAnalysisTask task = new PerformanceAnalysisTask(pluginId);
        taskScheduler.schedule(task, new Date(System.currentTimeMillis() + 30000)); // 30秒后执行
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">监控面板</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">实时监控面板</h3><p class="text-gray-700"> 提供直观的实时监控面板： </p><pre><code class="java">@RestController
@RequestMapping(&quot;/api/monitoring&quot;)
@PluginComponent
public class MonitoringController {
    
    @GetMapping(&quot;/dashboard&quot;)
    public DashboardData getDashboardData() {
        DashboardData dashboard = new DashboardData();
        
        // 系统概览
        dashboard.setSystemOverview(getSystemOverview());
        
        // JVM状态
        dashboard.setJvmStatus(getJvmStatus());
        
        // 插件状态
        dashboard.setPluginStatus(getPluginStatus());
        
        // 性能指标
        dashboard.setPerformanceMetrics(getPerformanceMetrics());
        
        // 告警状态
        dashboard.setAlertStatus(getAlertStatus());
        
        return dashboard;
    }
    
    @GetMapping(&quot;/metrics/{pluginId}&quot;)
    public List&lt;MetricData&gt; getPluginMetrics(
            @PathVariable String pluginId,
            @RequestParam(defaultValue = &quot;5m&quot;) String timeRange) {
        
        TimeRange range = TimeRange.parse(timeRange);
        return metricsService.getPluginMetrics(pluginId, range);
    }
    
    @GetMapping(&quot;/alerts&quot;)
    public List&lt;Alert&gt; getActiveAlerts() {
        return alertingService.getActiveAlerts();
    }
    
    @PostMapping(&quot;/alerts/{alertId}/acknowledge&quot;)
    public void acknowledgeAlert(@PathVariable String alertId) {
        alertingService.acknowledgeAlert(alertId);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">指标设计</h3><ul class="space-y-2 text-gray-700"><li>• 选择关键业务指标</li><li>• 避免过度监控</li><li>• 合理设置指标标签</li><li>• 使用标准指标命名</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">告警配置</h3><ul class="space-y-2 text-gray-700"><li>• 设置合理的告警阈值</li><li>• 避免告警风暴</li><li>• 配置告警抑制规则</li><li>• 提供有意义的告警信息</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">性能优化</h3><ul class="space-y-2 text-gray-700"><li>• 定期清理历史数据</li><li>• 使用聚合指标</li><li>• 优化数据采集频率</li><li>• 实施数据压缩</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">监控覆盖</h3><ul class="space-y-2 text-gray-700"><li>• 监控所有关键组件</li><li>• 覆盖用户体验指标</li><li>• 监控安全相关指标</li><li>• 定期审查监控策略</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">故障排除</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">常见问题</h3><div class="space-y-4"><div><h4 class="font-semibold text-gray-900">监控数据缺失</h4><p class="text-gray-700 text-sm">问题：某些指标没有数据或数据不准确</p><p class="text-gray-600 text-sm">解决：检查监控配置、指标收集器和网络连接</p></div><div><h4 class="font-semibold text-gray-900">告警频繁触发</h4><p class="text-gray-700 text-sm">问题：告警过于频繁，影响正常运维</p><p class="text-gray-600 text-sm">解决：调整告警阈值、添加抑制规则或聚合告警</p></div><div><h4 class="font-semibold text-gray-900">性能监控影响性能</h4><p class="text-gray-700 text-sm">问题：监控系统本身影响应用性能</p><p class="text-gray-600 text-sm">解决：调整采集频率、使用异步采集、优化收集器</p></div><div><h4 class="font-semibold text-gray-900">监控数据存储问题</h4><p class="text-gray-700 text-sm">问题：时序数据库性能下降或存储不足</p><p class="text-gray-600 text-sm">解决：实施数据清理策略、增加存储空间或优化查询</p></div></div></div></section>`,10)])])}const Zu=dt(Qu,[["render",Xu]]),td={},ed={class:"space-y-8"};function nd(t,e){return k(),N("div",ed,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">安全机制</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍Brick BootKit的安全防护体系，包括插件隔离、权限控制、安全认证、代码签名和数据保护等安全机制。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">安全机制概述</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit构建了全方位的安全防护体系，确保插件系统的安全性和稳定性。 通过多层安全机制保护系统免受恶意插件和攻击的威胁。 </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-semibold text-blue-900 mb-2">多层防护</h3><p class="text-blue-700 text-sm">多层次安全防护机制</p></div><div class="bg-green-50 p-4 rounded-lg"><h3 class="font-semibold text-green-900 mb-2">权限控制</h3><p class="text-green-700 text-sm">精细化的权限管理系统</p></div><div class="bg-purple-50 p-4 rounded-lg"><h3 class="font-semibold text-purple-900 mb-2">安全隔离</h3><p class="text-purple-700 text-sm">插件间安全隔离</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">安全架构</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">安全架构图</h3><p class="text-gray-700"> Brick BootKit采用分层安全架构，从底层到应用层提供全方位保护： </p><pre><code class="text-sm">┌─────────────────────────────────────────────────────────┐
│                   应用层安全 (Application Layer)           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 权限验证     │  │ 安全审计     │  │ 输入验证     │     │
│  │ Auth        │  │ Audit       │  │ Validation  │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   插件层安全 (Plugin Layer)               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 插件隔离     │  │ 资源限制     │  │ 接口控制     │     │
│  │ Isolation   │  │ Limits      │  │ Interface   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   容器层安全 (Container Layer)           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 类加载器     │  │ 沙箱环境     │  │ 访问控制     │     │
│  │ ClassLoader │  │ Sandbox     │  │ Access Ctrl │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   系统层安全 (System Layer)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 进程隔离     │  │ 内存保护     │  │ 文件系统     │     │
│  │ Process     │  │ Memory      │  │ File System │     │
│  │ Isolation   │  │ Protection  │  │ Security    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">安全组件</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-gray-900 mb-3">隔离机制</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 类加载器隔离</li><li>• 线程隔离</li><li>• 内存空间隔离</li><li>• 资源访问隔离</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">访问控制</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 权限验证</li><li>• 资源限制</li><li>• 接口访问控制</li><li>• 网络访问控制</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">安全审计</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 操作日志记录</li><li>• 安全事件监控</li><li>• 审计报告生成</li><li>• 异常行为检测</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-3">威胁防护</h4><ul class="space-y-2 text-gray-700 text-sm"><li>• 代码签名验证</li><li>• 恶意代码检测</li><li>• 注入攻击防护</li><li>• 资源耗尽防护</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件隔离</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">类加载器隔离</h3><p class="text-gray-700"> 通过自定义类加载器实现插件间的完全隔离： </p><pre><code class="java">public class PluginClassLoader extends URLClassLoader {
    
    private final PluginSecurityManager securityManager;
    private final AccessControlContext accessContext;
    private final Set&lt;String&gt; permittedClasses;
    
    public PluginClassLoader(PluginInfo pluginInfo, SecurityManager securityManager) {
        super(pluginInfo.getClasspath(), null);
        this.securityManager = securityManager;
        this.accessContext = createAccessControlContext(pluginInfo);
        this.permittedClasses = initializePermittedClasses(pluginInfo);
    }
    
    @Override
    protected Class&lt;?&gt; loadClass(String name, boolean resolve) throws ClassNotFoundException {
        synchronized (getClassLoadingLock(name)) {
            // 1. 检查是否已加载
            Class&lt;?&gt; clazz = findLoadedClass(name);
            if (clazz != null) {
                return clazz;
            }
            
            // 2. 检查允许的类
            if (!isClassPermitted(name)) {
                throw new SecurityException(&quot;类访问被拒绝: &quot; + name);
            }
            
            // 3. 使用插件类加载器加载
            try {
                clazz = findClass(name);
                
                // 4. 安全检查
                securityManager.validateClassLoad(pluginId, name, clazz);
                
                if (resolve) {
                    resolveClass(clazz);
                }
                
                return clazz;
                
            } catch (ClassNotFoundException e) {
                // 5. 委派给父类加载器
                return super.loadClass(name, resolve);
            }
        }
    }
    
    private boolean isClassPermitted(String className) {
        // 检查类是否在允许列表中
        return permittedClasses.contains(className) || 
               permittedClasses.stream().anyMatch(className::startsWith);
    }
    
    private AccessControlContext createAccessControlContext(PluginInfo pluginInfo) {
        PermissionCollection permissions = new Permissions();
        
        // 添加基本权限
        permissions.add(new FilePermission(&quot;&lt;&lt;ALL FILES&gt;&gt;&quot;, &quot;read&quot;));
        permissions.add(new SocketPermission(&quot;*&quot;, &quot;connect,listen,accept&quot;));
        permissions.add(new PropertyPermission(&quot;*&quot;, &quot;read&quot;));
        
        // 根据插件配置添加特定权限
        if (pluginInfo.hasDatabaseAccess()) {
            permissions.add(new SQLPermission(&quot;setLoginTimeout&quot;, null));
        }
        
        if (pluginInfo.hasNetworkAccess()) {
            permissions.add(new SocketPermission(&quot;localhost&quot;, &quot;connect&quot;));
        }
        
        return new AccessControlContext(new ProtectionDomain[] {
            new ProtectionDomain(null, permissions)
        });
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">资源访问控制</h3><pre><code class="java">@PluginComponent
public class ResourceAccessController {
    
    @ResourceAccessControl(maxMemory = &quot;256MB&quot;, maxThreads = 10)
    public class PluginResourceManager {
        
        private final ConcurrentHashMap&lt;String, ResourceQuota&gt; resourceQuotas = new ConcurrentHashMap&lt;&gt;();
        private final ScheduledExecutorService monitorExecutor = Executors.newScheduledThreadPool(1);
        
        public ResourceAccessController() {
            // 定期监控资源使用情况
            monitorExecutor.scheduleAtFixedRate(this::monitorResourceUsage, 0, 30, TimeUnit.SECONDS);
        }
        
        public void allocateResource(String pluginId, ResourceType type, long size) {
            ResourceQuota quota = resourceQuotas.get(pluginId);
            if (quota == null) {
                quota = new ResourceQuota();
                resourceQuotas.put(pluginId, quota);
            }
            
            switch (type) {
                case MEMORY:
                    quota.allocateMemory(size);
                    break;
                case THREAD:
                    quota.allocateThreads(1);
                    break;
                case FILE_HANDLE:
                    quota.allocateFileHandles(1);
                    break;
                default:
                    throw new UnsupportedOperationException(&quot;不支持的资源类型: &quot; + type);
            }
            
            // 检查是否超出配额
            if (quota.isExceeded()) {
                throw new ResourceQuotaExceededException(&quot;插件 &quot; + pluginId + &quot; 超出资源配额&quot;);
            }
        }
        
        private void monitorResourceUsage() {
            resourceQuotas.forEach((pluginId, quota) -&gt; {
                long currentMemory = getCurrentMemoryUsage(pluginId);
                int currentThreads = getCurrentThreadCount(pluginId);
                int currentFileHandles = getCurrentFileHandleCount(pluginId);
                
                if (quota.shouldAlert(currentMemory, currentThreads, currentFileHandles)) {
                    handleResourceAlert(pluginId, quota, currentMemory, currentThreads, currentFileHandles);
                }
            });
        }
    }
    
    public enum ResourceType {
        MEMORY, THREAD, FILE_HANDLE, NETWORK_CONNECTION
    }
    
    public static class ResourceQuota {
        private long maxMemory = 256 * 1024 * 1024; // 256MB
        private int maxThreads = 10;
        private int maxFileHandles = 100;
        private int maxNetworkConnections = 5;
        
        private AtomicLong currentMemory = new AtomicLong(0);
        private AtomicInteger currentThreads = new AtomicInteger(0);
        private AtomicInteger currentFileHandles = new AtomicInteger(0);
        private AtomicInteger currentNetworkConnections = new AtomicInteger(0);
        
        public void allocateMemory(long size) {
            currentMemory.addAndGet(size);
        }
        
        public void allocateThreads(int count) {
            currentThreads.addAndGet(count);
        }
        
        public boolean isExceeded() {
            return currentMemory.get() &gt; maxMemory ||
                   currentThreads.get() &gt; maxThreads ||
                   currentFileHandles.get() &gt; maxFileHandles ||
                   currentNetworkConnections.get() &gt; maxNetworkConnections;
        }
        
        public boolean shouldAlert(long memory, int threads, int fileHandles) {
            double memoryUsage = (double) memory / maxMemory;
            return memoryUsage &gt; 0.8 || threads &gt; maxThreads * 0.8 || fileHandles &gt; maxFileHandles * 0.8;
        }
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">权限控制</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">权限系统设计</h3><p class="text-gray-700"> 实现细粒度的权限控制系统： </p><pre><code class="java">@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface RequirePermission {
    String value();
    PermissionScope scope() default PermissionScope.GLOBAL;
    boolean adminOnly() default false;
}

// 权限枚举
public enum Permission {
    // 插件管理权限
    PLUGIN_INSTALL(&quot;plugin:install&quot;, &quot;安装插件&quot;),
    PLUGIN_UNINSTALL(&quot;plugin:uninstall&quot;, &quot;卸载插件&quot;),
    PLUGIN_START(&quot;plugin:start&quot;, &quot;启动插件&quot;),
    PLUGIN_STOP(&quot;plugin:stop&quot;, &quot;停止插件&quot;),
    PLUGIN_UPDATE(&quot;plugin:update&quot;, &quot;更新插件&quot;),
    
    // 系统权限
    SYSTEM_CONFIG(&quot;system:config&quot;, &quot;系统配置&quot;),
    SYSTEM_MONITOR(&quot;system:monitor&quot;, &quot;系统监控&quot;),
    SYSTEM_AUDIT(&quot;system:audit&quot;, &quot;系统审计&quot;),
    
    // 数据权限
    DATA_READ(&quot;data:read&quot;, &quot;读取数据&quot;),
    DATA_WRITE(&quot;data:write&quot;, &quot;写入数据&quot;),
    DATA_DELETE(&quot;data:delete&quot;, &quot;删除数据&quot;),
    
    // 网络权限
    NETWORK_CONNECT(&quot;network:connect&quot;, &quot;网络连接&quot;),
    NETWORK_LISTEN(&quot;network:listen&quot;, &quot;网络监听&quot;);
    
    private final String key;
    private final String description;
    
    Permission(String key, String description) {
        this.key = key;
        this.description = description;
    }
    
    public String getKey() { return key; }
    public String getDescription() { return description; }
}

// 权限检查器
@Component
@PluginComponent
public class PermissionChecker {
    
    public boolean hasPermission(String pluginId, Permission permission) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        if (plugin == null) {
            return false;
        }
        
        // 检查插件是否被禁用
        if (plugin.isDisabled()) {
            return false;
        }
        
        // 检查插件权限
        Set&lt;Permission&gt; pluginPermissions = plugin.getPermissions();
        return pluginPermissions.contains(permission);
    }
    
    public boolean hasPermission(String pluginId, String permissionKey) {
        Permission permission = Permission.valueOf(permissionKey.toUpperCase());
        return hasPermission(pluginId, permission);
    }
    
    public void checkPermission(String pluginId, Permission permission) {
        if (!hasPermission(pluginId, permission)) {
            throw new AccessDeniedException(&quot;插件 &quot; + pluginId + &quot; 缺少权限: &quot; + permission);
        }
    }
    
    public void checkPermission(String pluginId, String permissionKey) {
        if (!hasPermission(pluginId, permissionKey)) {
            throw new AccessDeniedException(&quot;插件 &quot; + pluginId + &quot; 缺少权限: &quot; + permissionKey);
        }
    }
    
    public void checkMultiplePermissions(String pluginId, Permission... permissions) {
        for (Permission permission : permissions) {
            checkPermission(pluginId, permission);
        }
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">权限注解使用</h3><pre><code class="java">@PluginComponent
public class SecurePluginService {
    
    @Autowired
    private PermissionChecker permissionChecker;
    
    @RequirePermission(Permission.PLUGIN_INSTALL)
    public PluginInfo installPlugin(InputStream pluginPackage, String pluginId) {
        permissionChecker.checkPermission(pluginId, Permission.PLUGIN_INSTALL);
        
        // 执行插件安装逻辑
        return performInstallation(pluginPackage, pluginId);
    }
    
    @RequirePermission(Permission.PLUGIN_START)
    public void startPlugin(String pluginId) {
        permissionChecker.checkPermission(pluginId, Permission.PLUGIN_START);
        
        // 执行插件启动逻辑
        performStart(pluginId);
    }
    
    @RequirePermission(value = Permission.DATA_WRITE, adminOnly = true)
    public void updateSystemConfiguration(Map&lt;String, Object&gt; config) {
        // 检查管理员权限
        UserInfo currentUser = SecurityContextHolder.getContext().getAuthentication();
        if (!currentUser.isAdmin()) {
            throw new AccessDeniedException(&quot;只有管理员可以修改系统配置&quot;);
        }
        
        permissionChecker.checkPermission(currentUser.getPluginId(), Permission.DATA_WRITE);
        
        // 执行配置更新逻辑
        performConfigurationUpdate(config);
    }
    
    @RequirePermission(Permission.NETWORK_CONNECT)
    public String makeHttpRequest(String url, Object requestData) {
        permissionChecker.checkPermission(currentPluginId(), Permission.NETWORK_CONNECT);
        
        // 检查URL是否在白名单中
        if (!isUrlAllowed(url)) {
            throw new SecurityException(&quot;URL不在允许列表中: &quot; + url);
        }
        
        // 执行HTTP请求
        return performHttpRequest(url, requestData);
    }
    
    private boolean isUrlAllowed(String url) {
        Set&lt;String&gt; allowedUrls = currentPlugin().getAllowedUrls();
        return allowedUrls.stream().anyMatch(url::startsWith);
    }
}

// 权限检查切面
@Aspect
@Component
public class PermissionCheckAspect {
    
    @Autowired
    private PermissionChecker permissionChecker;
    
    @Around(&quot;@annotation(requirePermission)&quot;)
    public Object checkPermission(ProceedingJoinPoint joinPoint, RequirePermission requirePermission) throws Throwable {
        String methodName = joinPoint.getSignature().getName();
        Object[] args = joinPoint.getArgs();
        
        // 获取当前插件ID
        String pluginId = PluginContextHolder.getCurrentPluginId();
        if (pluginId == null) {
            throw new SecurityException(&quot;无法获取当前插件ID&quot;);
        }
        
        // 检查权限
        Permission permission = Permission.valueOf(requirePermission.value());
        permissionChecker.checkPermission(pluginId, permission);
        
        // 检查管理员权限
        if (requirePermission.adminOnly()) {
            checkAdminPermission(pluginId);
        }
        
        // 记录权限检查
        auditLogService.logPermissionCheck(pluginId, permission, methodName, true);
        
        return joinPoint.proceed();
    }
    
    private void checkAdminPermission(String pluginId) {
        // 检查插件是否为管理员插件
        PluginInfo plugin = pluginRepository.findById(pluginId);
        if (plugin == null || !plugin.isAdmin()) {
            throw new AccessDeniedException(&quot;只有管理员插件可以执行此操作&quot;);
        }
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">安全认证</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件身份认证</h3><p class="text-gray-700"> 实现插件身份的验证和认证机制： </p><pre><code class="java">@PluginComponent
public class PluginAuthenticationService {
    
    public PluginIdentity authenticatePlugin(String pluginId, String authToken) {
        // 1. 验证插件是否存在
        PluginInfo plugin = pluginRepository.findById(pluginId);
        if (plugin == null) {
            throw new AuthenticationException(&quot;插件不存在: &quot; + pluginId);
        }
        
        // 2. 验证插件是否被禁用
        if (plugin.isDisabled()) {
            throw new AuthenticationException(&quot;插件已被禁用: &quot; + pluginId);
        }
        
        // 3. 验证认证令牌
        if (!isValidAuthToken(plugin, authToken)) {
            logSecurityEvent(&quot;认证令牌验证失败&quot;, pluginId);
            throw new AuthenticationException(&quot;认证令牌无效&quot;);
        }
        
        // 4. 验证证书签名
        if (!verifyPluginSignature(plugin)) {
            logSecurityEvent(&quot;插件签名验证失败&quot;, pluginId);
            throw new AuthenticationException(&quot;插件签名验证失败&quot;);
        }
        
        // 5. 创建插件身份
        PluginIdentity identity = new PluginIdentity(pluginId);
        identity.setPermissions(plugin.getPermissions());
        identity.setValidUntil(calculateExpiryTime(plugin));
        
        logSecurityEvent(&quot;插件认证成功&quot;, pluginId);
        return identity;
    }
    
    private boolean isValidAuthToken(PluginInfo plugin, String authToken) {
        String expectedToken = generateExpectedToken(plugin);
        return ConstantTimeComparator.equal(authToken, expectedToken);
    }
    
    private String generateExpectedToken(PluginInfo plugin) {
        String data = plugin.getId() + &quot;:&quot; + plugin.getVersion() + &quot;:&quot; + plugin.getSecretKey();
        return DigestUtils.sha256Hex(data);
    }
    
    private boolean verifyPluginSignature(PluginInfo plugin) {
        try {
            // 获取插件证书
            Certificate certificate = plugin.getCertificate();
            if (certificate == null) {
                return plugin.isTrustworthy(); // 如果没有证书，检查是否可信
            }
            
            // 验证签名
            String pluginHash = plugin.getHash();
            byte[] signature = plugin.getSignature();
            
            Signature verifier = Signature.getInstance(&quot;SHA256withRSA&quot;);
            verifier.initVerify(certificate);
            verifier.update(pluginHash.getBytes());
            
            return verifier.verify(signature);
            
        } catch (Exception e) {
            log.error(&quot;插件签名验证异常: &quot; + plugin.getId(), e);
            return false;
        }
    }
    
    private Date calculateExpiryTime(PluginInfo plugin) {
        // 认证令牌有效期：24小时
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR_OF_DAY, 24);
        return calendar.getTime();
    }
}

// 插件身份上下文
public class PluginIdentity {
    private final String pluginId;
    private final Set&lt;Permission&gt; permissions;
    private Date validUntil;
    private Map&lt;String, Object&gt; attributes;
    
    public boolean isValid() {
        return validUntil != null &amp;&amp; new Date().before(validUntil);
    }
    
    public boolean hasPermission(Permission permission) {
        return permissions.contains(permission);
    }
}

// 插件上下文持有者
public class PluginContextHolder {
    private static final ThreadLocal&lt;PluginIdentity&gt; currentIdentity = new ThreadLocal&lt;&gt;();
    
    public static void setCurrentIdentity(PluginIdentity identity) {
        currentIdentity.set(identity);
    }
    
    public static PluginIdentity getCurrentIdentity() {
        return currentIdentity.get();
    }
    
    public static String getCurrentPluginId() {
        PluginIdentity identity = getCurrentIdentity();
        return identity != null ? identity.getPluginId() : null;
    }
    
    public static void clear() {
        currentIdentity.remove();
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件注册和信任</h3><pre><code class="java">@PluginComponent
public class PluginRegistrationService {
    
    public PluginInfo registerPlugin(PluginRegistrationRequest request) {
        // 1. 验证插件包
        PluginPackageValidationResult validation = validatePluginPackage(request.getPackageData());
        if (!validation.isValid()) {
            throw new PluginValidationException(&quot;插件包验证失败: &quot; + validation.getErrors());
        }
        
        // 2. 生成插件ID
        String pluginId = generatePluginId(request);
        
        // 3. 创建插件信息
        PluginInfo pluginInfo = new PluginInfo();
        pluginInfo.setId(pluginId);
        pluginInfo.setName(request.getName());
        pluginInfo.setVersion(request.getVersion());
        pluginInfo.setDescription(request.getDescription());
        pluginInfo.setAuthor(request.getAuthor());
        
        // 4. 设置信任级别
        pluginInfo.setTrustLevel(determineTrustLevel(request));
        pluginInfo.setTrustworthy(isPluginTrustworthy(request));
        
        // 5. 设置权限
        pluginInfo.setPermissions(analyzeRequiredPermissions(request));
        
        // 6. 验证证书（如果存在）
        if (request.hasCertificate()) {
            pluginInfo.setCertificate(validateCertificate(request.getCertificate()));
        }
        
        // 7. 保存插件信息
        PluginInfo savedPlugin = pluginRepository.save(pluginInfo);
        
        logSecurityEvent(&quot;插件注册成功&quot;, pluginId, &quot;trustLevel=&quot; + pluginInfo.getTrustLevel());
        
        return savedPlugin;
    }
    
    private TrustLevel determineTrustLevel(PluginRegistrationRequest request) {
        if (request.hasCertificate()) {
            Certificate cert = request.getCertificate();
            
            // 验证证书有效期
            if (isCertificateValid(cert)) {
                // 检查证书颁发者
                if (isTrustedCA(cert.getIssuer())) {
                    return TrustLevel.TRUSTED;
                }
                return TrustLevel.SIGNED;
            }
        }
        
        // 无证书的插件为未知信任级别
        return TrustLevel.UNKNOWN;
    }
    
    private boolean isPluginTrustworthy(PluginRegistrationRequest request) {
        TrustLevel trustLevel = determineTrustLevel(request);
        
        // 只有已签名的可信证书插件才被认为是可信的
        return trustLevel == TrustLevel.TRUSTED;
    }
    
    private Set&lt;Permission&gt; analyzeRequiredPermissions(PluginRegistrationRequest request) {
        Set&lt;Permission&gt; requiredPermissions = new HashSet&lt;&gt;();
        
        // 分析插件的依赖和功能来确定所需权限
        List&lt;String&gt; dependencies = request.getDependencies();
        for (String dependency : dependencies) {
            if (dependency.contains(&quot;database&quot;)) {
                requiredPermissions.add(Permission.DATA_READ);
                requiredPermissions.add(Permission.DATA_WRITE);
            }
            
            if (dependency.contains(&quot;network&quot;)) {
                requiredPermissions.add(Permission.NETWORK_CONNECT);
            }
            
            if (dependency.contains(&quot;filesystem&quot;)) {
                requiredPermissions.add(Permission.DATA_WRITE);
            }
        }
        
        // 分析插件的注解和配置
        Set&lt;String&gt; annotatedMethods = analyzeAnnotatedMethods(request.getPackageData());
        for (String method : annotatedMethods) {
            if (method.contains(&quot;start&quot;)) {
                requiredPermissions.add(Permission.PLUGIN_START);
            }
            if (method.contains(&quot;stop&quot;)) {
                requiredPermissions.add(Permission.PLUGIN_STOP);
            }
        }
        
        return requiredPermissions;
    }
    
    public enum TrustLevel {
        TRUSTED(&quot;trusted&quot;, &quot;可信&quot;),
        SIGNED(&quot;signed&quot;, &quot;已签名&quot;),
        UNKNOWN(&quot;unknown&quot;, &quot;未知&quot;);
        
        private final String key;
        private final String description;
        
        TrustLevel(String key, String description) {
            this.key = key;
            this.description = description;
        }
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">代码签名</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">签名验证</h3><p class="text-gray-700"> 实现代码签名验证机制，确保插件的完整性和可信度： </p><pre><code class="java">@PluginComponent
public class CodeSignatureVerifier {
    
    public SignatureVerificationResult verifyPluginSignature(PluginInfo plugin, InputStream pluginData) {
        try {
            // 1. 计算插件哈希
            String pluginHash = calculatePluginHash(pluginData);
            
            // 2. 验证哈希一致性
            if (!pluginHash.equals(plugin.getHash())) {
                return SignatureVerificationResult.failed(&quot;插件哈希值不匹配&quot;);
            }
            
            // 3. 验证数字签名
            if (plugin.hasSignature()) {
                SignatureVerificationResult signatureResult = verifySignature(plugin);
                if (!signatureResult.isValid()) {
                    return signatureResult;
                }
            }
            
            // 4. 验证证书链
            if (plugin.hasCertificate()) {
                CertificateVerificationResult certResult = verifyCertificateChain(plugin.getCertificate());
                if (!certResult.isValid()) {
                    return SignatureVerificationResult.failed(&quot;证书链验证失败: &quot; + certResult.getError());
                }
            }
            
            return SignatureVerificationResult.success();
            
        } catch (Exception e) {
            return SignatureVerificationResult.failed(&quot;签名验证异常: &quot; + e.getMessage());
        }
    }
    
    private SignatureVerificationResult verifySignature(PluginInfo plugin) {
        try {
            PublicKey publicKey = plugin.getCertificate().getPublicKey();
            
            Signature signature = Signature.getInstance(&quot;SHA256withRSA&quot;);
            signature.initVerify(publicKey);
            
            // 使用插件哈希进行签名验证
            signature.update(plugin.getHash().getBytes());
            
            boolean isValid = signature.verify(plugin.getSignature());
            
            if (isValid) {
                logSecurityEvent(&quot;插件签名验证成功&quot;, plugin.getId());
                return SignatureVerificationResult.success();
            } else {
                logSecurityEvent(&quot;插件签名验证失败&quot;, plugin.getId());
                return SignatureVerificationResult.failed(&quot;数字签名无效&quot;);
            }
            
        } catch (Exception e) {
            return SignatureVerificationResult.failed(&quot;签名验证异常: &quot; + e.getMessage());
        }
    }
    
    private CertificateVerificationResult verifyCertificateChain(Certificate certificate) {
        try {
            // 验证证书有效期
            if (!isCertificateValid(certificate)) {
                return CertificateVerificationResult.failed(&quot;证书已过期或尚未生效&quot;);
            }
            
            // 验证证书颁发者
            String issuer = certificate.getIssuerDN().getName();
            if (!isTrustedCA(issuer)) {
                return CertificateVerificationResult.failed(&quot;不受信任的证书颁发者&quot;);
            }
            
            // 验证证书用途
            if (!hasKeyUsage(certificate, KeyUsage.digitalSignature)) {
                return CertificateVerificationResult.failed(&quot;证书缺少数字签名用途&quot;);
            }
            
            return CertificateVerificationResult.success();
            
        } catch (Exception e) {
            return CertificateVerificationResult.failed(&quot;证书验证异常: &quot; + e.getMessage());
        }
    }
    
    private String calculatePluginHash(InputStream pluginData) throws Exception {
        MessageDigest digest = MessageDigest.getInstance(&quot;SHA-256&quot;);
        
        byte[] buffer = new byte[8192];
        int bytesRead;
        while ((bytesRead = pluginData.read(buffer)) != -1) {
            digest.update(buffer, 0, bytesRead);
        }
        
        byte[] hashBytes = digest.digest();
        return Hex.encodeHexString(hashBytes);
    }
    
    private boolean isCertificateValid(Certificate certificate) {
        Date now = new Date();
        return certificate.getNotBefore().before(now) &amp;&amp; certificate.getNotAfter().after(now);
    }
    
    private boolean isTrustedCA(String issuer) {
        Set&lt;String&gt; trustedCAs = getTrustedCAs();
        return trustedCAs.stream().anyMatch(issuer::contains);
    }
    
    private Set&lt;String&gt; getTrustedCAs() {
        // 返回系统信任的证书颁发者列表
        return new HashSet&lt;&gt;(Arrays.asList(
            &quot;CN=Brick BootKit Root CA&quot;,
            &quot;CN=Oracle&quot;,
            &quot;CN=Microsoft&quot;
        ));
    }
}

// 签名验证结果
public class SignatureVerificationResult {
    private final boolean valid;
    private final String message;
    private final String error;
    
    private SignatureVerificationResult(boolean valid, String message, String error) {
        this.valid = valid;
        this.message = message;
        this.error = error;
    }
    
    public static SignatureVerificationResult success() {
        return new SignatureVerificationResult(true, &quot;签名验证成功&quot;, null);
    }
    
    public static SignatureVerificationResult failed(String error) {
        return new SignatureVerificationResult(false, null, error);
    }
    
    public boolean isValid() { return valid; }
    public String getMessage() { return message; }
    public String getError() { return error; }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">安全审计</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">安全事件监控</h3><p class="text-gray-700"> 监控和记录安全相关的事件： </p><pre><code class="java">@PluginComponent
public class SecurityAuditService {
    
    @EventListener
    public void handleSecurityEvent(SecurityEvent event) {
        // 1. 记录安全事件
        SecurityAuditLog auditLog = createAuditLog(event);
        auditLogRepository.save(auditLog);
        
        // 2. 实时告警
        if (event.getSeverity() == SecuritySeverity.HIGH || 
            event.getSeverity() == SecuritySeverity.CRITICAL) {
            sendSecurityAlert(event);
        }
        
        // 3. 分析威胁模式
        analyzeThreatPattern(event);
    }
    
    private SecurityAuditLog createAuditLog(SecurityEvent event) {
        SecurityAuditLog log = new SecurityAuditLog();
        log.setTimestamp(event.getTimestamp());
        log.setPluginId(event.getPluginId());
        log.setEventType(event.getType());
        log.setSeverity(event.getSeverity());
        log.setDescription(event.getDescription());
        log.setSourceIp(getSourceIp());
        log.setUserAgent(getUserAgent());
        log.setRequestId(generateRequestId());
        return log;
    }
    
    private void sendSecurityAlert(SecurityEvent event) {
        SecurityAlert alert = new SecurityAlert();
        alert.setEvent(event);
        alert.setCreatedAt(new Date());
        alert.setStatus(AlertStatus.NEW);
        
        // 发送到安全告警系统
        securityAlertService.sendAlert(alert);
        
        // 记录告警发送日志
        log.warn(&quot;发送安全告警: {} - {}&quot;, event.getType(), event.getDescription());
    }
    
    private void analyzeThreatPattern(SecurityEvent event) {
        // 检查是否为重复攻击模式
        List&lt;SecurityEvent&gt; recentEvents = getRecentEvents(event.getPluginId(), 5, TimeUnit.MINUTES);
        
        long securityViolations = recentEvents.stream()
            .filter(e -&gt; e.getType() == SecurityEventType.PERMISSION_VIOLATION ||
                       e.getType() == SecurityEventType.UNAUTHORIZED_ACCESS)
            .count();
        
        if (securityViolations &gt;= 3) {
            handlePotentialAttack(event.getPluginId(), securityViolations);
        }
    }
    
    private void handlePotentialAttack(String pluginId, long violationCount) {
        // 临时禁用插件
        PluginInfo plugin = pluginRepository.findById(pluginId);
        if (plugin != null) {
            plugin.setTemporarilyDisabled(true);
            plugin.setDisabledReason(&quot;检测到潜在攻击行为&quot;);
            plugin.setDisabledUntil(DateUtils.addMinutes(new Date(), 30)); // 禁用30分钟
            pluginRepository.save(plugin);
            
            log.warn(&quot;插件因潜在攻击被临时禁用: {}, 违规次数: {}&quot;, pluginId, violationCount);
            
            // 发送高级别告警
            SecurityEvent alertEvent = new SecurityEvent(
                SecurityEventType.SUSPICIOUS_ACTIVITY,
                SecuritySeverity.CRITICAL,
                &quot;检测到潜在攻击行为，插件已被临时禁用&quot;,
                pluginId
            );
            
            sendSecurityAlert(alertEvent);
        }
    }
    
    public List&lt;SecurityAuditLog&gt; getAuditLogs(String pluginId, Date startTime, Date endTime) {
        return auditLogRepository.findByPluginIdAndTimestampBetween(pluginId, startTime, endTime);
    }
    
    public SecurityReport generateSecurityReport(Date startTime, Date endTime) {
        SecurityReport report = new SecurityReport();
        report.setPeriod(startTime, endTime);
        
        // 统计安全事件
        List&lt;SecurityEvent&gt; events = getEventsInPeriod(startTime, endTime);
        report.setTotalEvents(events.size());
        report.setHighSeverityEvents(getEventsBySeverity(events, SecuritySeverity.HIGH).size());
        report.setCriticalEvents(getEventsBySeverity(events, SecuritySeverity.CRITICAL).size());
        
        // 分析攻击模式
        Map&lt;String, Long&gt; attackPatterns = analyzeAttackPatterns(events);
        report.setAttackPatterns(attackPatterns);
        
        // 生成建议
        report.setRecommendations(generateSecurityRecommendations(events));
        
        return report;
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">插件开发安全</h3><ul class="space-y-2 text-gray-700"><li>• 使用代码签名工具签名插件</li><li>• 避免在插件中包含敏感信息</li><li>• 验证用户输入和参数</li><li>• 使用安全的通信协议</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">权限管理</h3><ul class="space-y-2 text-gray-700"><li>• 遵循最小权限原则</li><li>• 定期审查插件权限</li><li>• 及时撤销不必要权限</li><li>• 记录权限变更日志</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">安全监控</h3><ul class="space-y-2 text-gray-700"><li>• 实施实时安全监控</li><li>• 配置智能告警规则</li><li>• 定期分析安全报告</li><li>• 建立应急响应流程</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">系统维护</h3><ul class="space-y-2 text-gray-700"><li>• 及时更新安全补丁</li><li>• 定期备份安全配置</li><li>• 测试安全防护机制</li><li>• 培训开发人员安全意识</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">故障排除</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">常见问题</h3><div class="space-y-4"><div><h4 class="font-semibold text-gray-900">插件启动被拒绝</h4><p class="text-gray-700 text-sm">问题：插件无法启动，提示权限不足</p><p class="text-gray-600 text-sm">解决：检查插件权限配置，确保拥有必要的启动权限</p></div><div><h4 class="font-semibold text-gray-900">签名验证失败</h4><p class="text-gray-700 text-sm">问题：插件签名验证失败，无法安装</p><p class="text-gray-600 text-sm">解决：检查插件签名是否正确，证书是否在信任列表中</p></div><div><h4 class="font-semibold text-gray-900">资源访问被阻止</h4><p class="text-gray-700 text-sm">问题：插件访问资源被安全策略阻止</p><p class="text-gray-600 text-sm">解决：检查资源访问权限配置，添加相应的访问权限</p></div><div><h4 class="font-semibold text-gray-900">安全告警频繁触发</h4><p class="text-gray-700 text-sm">问题：正常操作触发过多安全告警</p><p class="text-gray-600 text-sm">解决：调整告警阈值，优化告警规则，检查权限配置</p></div></div></div></section>`,10)])])}const sd=dt(td,[["render",nd]]),id={},ld={class:"space-y-8"};function od(t,e){return k(),N("div",ld,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">注解说明</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍Brick BootKit框架提供的所有注解及其使用方法，帮助开发者快速构建插件。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">注解概述</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit提供了丰富的注解体系，用于插件开发、配置管理、权限控制等各个方面。 通过这些注解，开发者可以快速构建功能完整的插件应用。 </p><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-semibold text-blue-900 mb-2">插件注解</h3><p class="text-blue-700 text-sm">插件组件和控制器</p></div><div class="bg-green-50 p-4 rounded-lg"><h3 class="font-semibold text-green-900 mb-2">配置注解</h3><p class="text-green-700 text-sm">配置参数注入</p></div><div class="bg-purple-50 p-4 rounded-lg"><h3 class="font-semibold text-purple-900 mb-2">权限注解</h3><p class="text-purple-700 text-sm">权限验证和限制</p></div><div class="bg-orange-50 p-4 rounded-lg"><h3 class="font-semibold text-orange-900 mb-2">监控注解</h3><p class="text-orange-700 text-sm">性能监控指标</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件注解</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@PluginComponent</h3><p class="text-gray-700"> 用于标识插件中的组件，支持Spring Bean的自动装配和管理。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List&lt;User&gt; getAllUsers() {
        return userRepository.findAll();
    }
}

// 支持构造函数注入
@PluginComponent
public class OrderService {
    
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    
    public OrderService(UserRepository userRepository, 
                       ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }
}</code></pre><h4 class="font-semibold text-gray-900">特性说明：</h4><ul class="space-y-2 text-gray-700"><li>• 支持@Scope(&quot;singleton&quot;)、@Scope(&quot;prototype&quot;)等作用域注解</li><li>• 自动处理依赖注入和循环依赖</li><li>• 支持JSR-330注解(@Inject、@Named等)</li><li>• 提供插件级别的Bean管理</li></ul></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@PluginRestController</h3><p class="text-gray-700"> 插件REST控制器注解，继承Spring MVC的@RestController功能。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginRestController
@RequestMapping(&quot;/user&quot;)
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List&lt;User&gt; getAllUsers() {
        return userService.getAllUsers();
    }
    
    @GetMapping(&quot;/{id}&quot;)
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
    
    @PutMapping(&quot;/{id}&quot;)
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return userService.updateUser(user);
    }
    
    @DeleteMapping(&quot;/{id}&quot;)
    public ResponseEntity&lt;Void&gt; deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}</code></pre><h4 class="font-semibold text-gray-900">URL访问规则：</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2">根据配置<code>enablePluginIdRestPathPrefix</code>的值：</p><ul class="space-y-1 text-gray-700"><li>• <strong>true</strong>: <code>/plugins/{pluginId}/user</code></li><li>• <strong>false</strong>: <code>/user</code> (可能有路径冲突风险)</li></ul></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@PluginScheduled</h3><p class="text-gray-700"> 插件定时任务注解，支持cron表达式和固定频率执行。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class ScheduledTaskService {
    
    // 每分钟执行一次
    @PluginScheduled(cron = &quot;0 * * * * ?&quot;)
    public void perMinuteTask() {
        System.out.println(&quot;每分钟执行的任务: &quot; + LocalDateTime.now());
    }
    
    // 每5秒执行一次
    @PluginScheduled(fixedRate = 5000)
    public void fixedRateTask() {
        System.out.println(&quot;固定频率任务: &quot; + LocalDateTime.now());
    }
    
    // 上次任务完成后等待10秒再执行
    @PluginScheduled(fixedDelay = 10000)
    public void fixedDelayTask() {
        System.out.println(&quot;延迟执行任务: &quot; + LocalDateTime.now());
        try {
            Thread.sleep(2000); // 模拟任务耗时
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    // 初始延迟3秒，然后每10秒执行
    @PluginScheduled(initialDelay = 3000, fixedRate = 10000)
    public void initialDelayTask() {
        System.out.println(&quot;初始延迟任务: &quot; + LocalDateTime.now());
    }
    
    // 使用SpEL表达式配置定时任务
    @PluginScheduled(cron = &quot;#{@cronExpression}&quot;)
    public void dynamicCronTask() {
        System.out.println(&quot;动态Cron任务: &quot; + LocalDateTime.now());
    }
}</code></pre><h4 class="font-semibold text-gray-900">配置说明：</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h5 class="font-semibold text-gray-900 mb-2">Cron表达式格式：</h5><pre><code class="text-sm">秒 分 时 日 月 星期
0 0 12 * * ?     // 每天12:00执行
0 */5 * * * ?    // 每5分钟执行
0 0 8-18/2 * * ? // 8点到18点每2小时执行
0 0 8 ? * MON    // 每周一8点执行</code></pre></div><div><h5 class="font-semibold text-gray-900 mb-2">任务配置：</h5><ul class="space-y-1 text-gray-700 text-sm"><li>• <strong>cron</strong>: Cron表达式</li><li>• <strong>fixedRate</strong>: 固定频率(毫秒)</li><li>• <strong>fixedDelay</strong>: 固定延迟(毫秒)</li><li>• <strong>initialDelay</strong>: 初始延迟(毫秒)</li><li>• <strong>zone</strong>: 时区</li><li>• <strong>enable</strong>: 是否启用</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置注解</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@ConfigurationValue</h3><p class="text-gray-700"> 用于从插件配置文件或环境变量中注入配置值。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class ConfigService {
    
    // 从配置文件注入
    @ConfigurationValue(&quot;plugin.database.url&quot;)
    private String databaseUrl;
    
    @ConfigurationValue(&quot;plugin.database.username&quot;)
    private String username;
    
    @ConfigurationValue(&quot;plugin.database.password&quot;)
    private String password;
    
    // 带默认值
    @ConfigurationValue(&quot;plugin.cache.enabled&quot;, defaultValue = &quot;true&quot;)
    private boolean cacheEnabled;
    
    @ConfigurationValue(&quot;plugin.cache.ttl&quot;, defaultValue = &quot;300&quot;)
    private int cacheTtl;
    
    // 从环境变量注入
    @ConfigurationValue(&quot;\${PLUGIN_ENV_VAR}&quot;)
    private String envVar;
    
    // 支持复杂类型
    @ConfigurationValue(&quot;plugin.whitelist.ips&quot;)
    private List&lt;String&gt; allowedIps;
    
    @ConfigurationValue(&quot;plugin.config&quot;)
    private Map&lt;String, Object&gt; configMap;
    
    // 方法注入
    @ConfigurationValue(&quot;plugin.retry.maxAttempts&quot;)
    public void setMaxRetries(@Value(&quot;3&quot;) int maxAttempts) {
        this.maxRetries = maxAttempts;
    }
    
    // 构造函数注入
    @ConfigurationValue(&quot;plugin.api.key&quot;)
    public ApiService(@Value(&quot;\${api.timeout:5000}&quot;) int timeout,
                     @Value(&quot;true&quot;) boolean enableLogging) {
        this.timeout = timeout;
        this.enableLogging = enableLogging;
    }
}</code></pre><h4 class="font-semibold text-gray-900">配置文件格式：</h4><pre><code class="yaml"># application.yml (插件配置)
plugin:
  database:
    url: jdbc:mysql://localhost:3306/mydb
    username: plugin_user
    password: \${DB_PASSWORD}  # 环境变量
    pool:
      maxSize: 20
      minSize: 5
  
  cache:
    enabled: true
    ttl: 300
    type: redis
  
  api:
    key: your-api-key
    timeout: 5000
  
  whitelist:
    ips:
      - 127.0.0.1
      - 192.168.1.0/24</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@ConfigProperties</h3><p class="text-gray-700"> 用于将配置文件中的属性绑定到Java对象。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@ConfigProperties(prefix = &quot;plugin.database&quot;)
public class DatabaseConfig {
    
    private String url;
    private String username;
    private String password;
    private PoolConfig pool = new PoolConfig();
    
    // getters and setters
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
    public PoolConfig getPool() { return pool; }
    public void setPool(PoolConfig pool) { this.pool = pool; }
    
    @ConfigProperties(prefix = &quot;plugin.database.pool&quot;)
    public static class PoolConfig {
        private int maxSize = 20;
        private int minSize = 5;
        private long maxWait = 30000;
        
        // getters and setters
        public int getMaxSize() { return maxSize; }
        public void setMaxSize(int maxSize) { this.maxSize = maxSize; }
        
        public int getMinSize() { return minSize; }
        public void setMinSize(int minSize) { this.minSize = minSize; }
        
        public long getMaxWait() { return maxWait; }
        public void setMaxWait(long maxWait) { this.maxWait = maxWait; }
    }
}

// 使用配置属性
@PluginComponent
public class DatabaseService {
    
    @Autowired
    private DatabaseConfig databaseConfig;
    
    public void initialize() {
        System.out.println(&quot;数据库配置: &quot; + databaseConfig.getUrl());
        System.out.println(&quot;连接池配置: &quot; + databaseConfig.getPool().getMaxSize());
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@DefaultValue</h3><p class="text-gray-700"> 为配置属性提供默认值，当配置文件缺失时使用。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@ConfigProperties(prefix = &quot;plugin.settings&quot;)
public class SettingsConfig {
    
    @DefaultValue(&quot;8080&quot;)
    private int serverPort;
    
    @DefaultValue(&quot;localhost&quot;)
    private String serverHost;
    
    @DefaultValue(&quot;true&quot;)
    private boolean enableSecurity;
    
    @DefaultValue(&quot;INFO&quot;)
    private String logLevel;
    
    @DefaultValue(&quot;1000&quot;)
    private int maxConnections;
    
    // 数组类型默认值
    @DefaultValue(&quot;localhost,127.0.0.1&quot;)
    private List&lt;String&gt; allowedHosts;
    
    @DefaultValue(&quot;300&quot;) // 秒
    private long sessionTimeout;
    
    // getters and setters...
}</code></pre><h4 class="font-semibold text-gray-900">支持的数据类型：</h4><div class="grid grid-cols-2 md:grid-cols-3 gap-4"><ul class="space-y-1 text-gray-700 text-sm"><li>• 基本类型: int, long, double, boolean</li><li>• 包装类型: Integer, Long, Double, Boolean</li><li>• 字符串: String</li></ul><ul class="space-y-1 text-gray-700 text-sm"><li>• 集合: List&lt;T&gt;, Set&lt;T&gt;</li><li>• Map: Map&lt;K,V&gt;</li><li>• 枚举: Enum</li></ul><ul class="space-y-1 text-gray-700 text-sm"><li>• 复杂对象</li><li>• TimeUnit</li><li>• Duration</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">权限注解</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@RequirePermission</h3><p class="text-gray-700"> 用于方法级别的权限验证，限制特定权限才能访问。 </p><h4 class="font-semibold text-gray-900">权限定义：</h4><pre><code class="java">public enum Permission {
    // 插件管理权限
    PLUGIN_INSTALL(&quot;plugin:install&quot;, &quot;安装插件&quot;),
    PLUGIN_UNINSTALL(&quot;plugin:uninstall&quot;, &quot;卸载插件&quot;),
    PLUGIN_START(&quot;plugin:start&quot;, &quot;启动插件&quot;),
    PLUGIN_STOP(&quot;plugin:stop&quot;, &quot;停止插件&quot;),
    PLUGIN_UPDATE(&quot;plugin:update&quot;, &quot;更新插件&quot;),
    
    // 系统权限
    SYSTEM_CONFIG(&quot;system:config&quot;, &quot;系统配置&quot;),
    SYSTEM_MONITOR(&quot;system:monitor&quot;, &quot;系统监控&quot;),
    SYSTEM_AUDIT(&quot;system:audit&quot;, &quot;系统审计&quot;),
    
    // 数据权限
    DATA_READ(&quot;data:read&quot;, &quot;读取数据&quot;),
    DATA_WRITE(&quot;data:write&quot;, &quot;写入数据&quot;),
    DATA_DELETE(&quot;data:delete&quot;, &quot;删除数据&quot;),
    
    // 网络权限
    NETWORK_CONNECT(&quot;network:connect&quot;, &quot;网络连接&quot;),
    NETWORK_LISTEN(&quot;network:listen&quot;, &quot;网络监听&quot;);
    
    private final String key;
    private final String description;
    
    Permission(String key, String description) {
        this.key = key;
        this.description = description;
    }
}</code></pre><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class PluginManagementService {
    
    @RequirePermission(Permission.PLUGIN_INSTALL)
    public PluginInfo installPlugin(String pluginFile) {
        // 安装插件逻辑
        return pluginInstaller.install(pluginFile);
    }
    
    @RequirePermission(Permission.PLUGIN_UNINSTALL)
    public void uninstallPlugin(String pluginId) {
        // 卸载插件逻辑
        pluginManager.uninstall(pluginId);
    }
    
    @RequirePermission(Permission.PLUGIN_START)
    public void startPlugin(String pluginId) {
        // 启动插件逻辑
        pluginManager.start(pluginId);
    }
    
    @RequirePermission(Permission.PLUGIN_STOP)
    public void stopPlugin(String pluginId) {
        // 停止插件逻辑
        pluginManager.stop(pluginId);
    }
    
    // 组合权限要求
    @RequirePermission(Permission.DATA_WRITE)
    @RequirePermission(Permission.SYSTEM_CONFIG)
    public void updateConfiguration(Map&lt;String, Object&gt; config) {
        // 需要同时具备DATA_WRITE和SYSTEM_CONFIG权限
        configurationService.update(config);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@SecureConfiguration</h3><p class="text-gray-700"> 用于保护配置更新方法，只有具备特定权限的用户才能修改配置。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class ConfigurationService {
    
    @SecureConfiguration(permission = Permission.SYSTEM_CONFIG)
    public void updateSystemConfig(Map&lt;String, Object&gt; newConfig) {
        // 只有具备SYSTEM_CONFIG权限的插件才能修改系统配置
        validateConfiguration(newConfig);
        saveConfiguration(newConfig);
        logConfigurationChange(newConfig);
    }
    
    @SecureConfiguration(permission = Permission.DATA_WRITE, 
                       requireAdmin = true)
    public void updateDatabaseConfig(DatabaseConfig config) {
        // 需要DATA_WRITE权限且管理员级别的插件
        if (!isAdminPlugin()) {
            throw new AccessDeniedException(&quot;需要管理员权限&quot;);
        }
        databaseConfigService.update(config);
    }
    
    @SecureConfiguration(permission = Permission.NETWORK_CONNECT,
                       allowedHosts = {&quot;localhost&quot;, &quot;127.0.0.1&quot;})
    public void configureNetwork(String host, int port) {
        // 限制只能连接到特定的Host
        if (!isHostAllowed(host)) {
            throw new AccessDeniedException(&quot;不允许连接到主机: &quot; + host);
        }
        networkConfigService.update(host, port);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">监控注解</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@Monitored</h3><p class="text-gray-700"> 用于方法或类的性能监控，自动收集执行时间和调用次数。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class UserService {
    
    @Monitored(&quot;user.getAll&quot;)
    public List&lt;User&gt; getAllUsers() {
        // 性能监控: 执行时间、调用次数
        return userRepository.findAll();
    }
    
    @Monitored(value = &quot;user.create&quot;, 
              tags = {&quot;type=create&quot;, &quot;layer=service&quot;})
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    @Monitored(value = &quot;user.search&quot;,
              tags = {&quot;operation=search&quot;, &quot;complexity=O(log n)&quot;})
    public List&lt;User&gt; searchUsers(String keyword) {
        return userRepository.findByNameContaining(keyword);
    }
}

// 类级别监控
@Monitored(value = &quot;order.service&quot;, 
          tags = {&quot;component=order-service&quot;, &quot;version=v1.0&quot;})
@PluginComponent
public class OrderService {
    
    public void createOrder(Order order) {
        // 整个类的方法都会被监控
        validateOrder(order);
        processPayment(order);
        updateInventory(order);
        sendNotification(order);
    }
}</code></pre><h4 class="font-semibold text-gray-900">监控指标：</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><ul class="space-y-2 text-gray-700"><li>• <strong>执行时间</strong>: 方法平均、最大、最小执行时间</li><li>• <strong>调用次数</strong>: 方法被调用的总次数</li><li>• <strong>并发数</strong>: 同一时刻的并发调用数</li></ul><ul class="space-y-2 text-gray-700"><li>• <strong>错误率</strong>: 方法执行失败的百分比</li><li>• <strong>吞吐量</strong>: 每秒处理请求数</li><li>• <strong>自定义标签</strong>: 业务维度的监控指标</li></ul></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@Timed</h3><p class="text-gray-700"> 专门用于时间测量的注解，支持详细的时间统计。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class PerformanceService {
    
    @Timed(name = &quot;database.query&quot;, 
          description = &quot;数据库查询耗时&quot;)
    public List&lt;User&gt; queryUsers() {
        return userRepository.findAll();
    }
    
    @Timed(name = &quot;api.call&quot;,
          description = &quot;外部API调用时间&quot;,
          percentile = {50, 90, 95, 99})
    public String callExternalApi(String url) {
        return restTemplate.getForObject(url, String.class);
    }
    
    @Timed(name = &quot;complex.operation&quot;,
          description = &quot;复杂业务操作&quot;,
          histogram = true)
    public void complexBusinessLogic() {
        // 复杂的业务逻辑
        step1();
        step2();
        step3();
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@Counted</h3><p class="text-gray-700"> 用于计数统计，记录方法调用次数和特定事件的发生次数。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class MetricsService {
    
    @Counted(name = &quot;api.requests&quot;,
            description = &quot;API请求计数&quot;)
    public void handleRequest(HttpServletRequest request) {
        // 处理请求逻辑
        processRequest(request);
    }
    
    @Counted(name = &quot;user.actions&quot;,
            description = &quot;用户操作计数&quot;,
            tags = {&quot;action=login&quot;})
    public void userLogin(String username) {
        // 用户登录逻辑
        authenticateUser(username);
    }
    
    @Counted(name = &quot;errors&quot;,
            description = &quot;错误计数&quot;,
            tags = {&quot;type=validation&quot;})
    public void handleValidationError(String error) {
        // 验证错误处理
        log.error(&quot;验证失败: &quot; + error);
    }
    
    @Counted(name = &quot;cache.operations&quot;,
            description = &quot;缓存操作计数&quot;,
            tags = {&quot;operation=hits&quot;})
    public Object getFromCache(String key) {
        return cache.get(key);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@Gauge</h3><p class="text-gray-700"> 用于测量指标，记录当前的状态值，如内存使用量、队列长度等。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class SystemMetricsService {
    
    @Gauge(name = &quot;memory.usage&quot;,
          description = &quot;内存使用量(MB)&quot;,
          tags = {&quot;type=heap&quot;})
    public double getHeapMemoryUsage() {
        MemoryMXBean memoryBean = ManagementFactory.getMemoryMXBean();
        return memoryBean.getHeapMemoryUsage().getUsed() / (1024 * 1024);
    }
    
    @Gauge(name = &quot;thread.count&quot;,
          description = &quot;活跃线程数&quot;)
    public int getActiveThreadCount() {
        ThreadMXBean threadBean = ManagementFactory.getThreadMXBean();
        return threadBean.getThreadCount();
    }
    
    @Gauge(name = &quot;queue.size&quot;,
          description = &quot;队列长度&quot;)
    public int getQueueSize() {
        return taskQueue.size();
    }
    
    @Gauge(name = &quot;connection.pool.size&quot;,
          description = &quot;数据库连接池大小&quot;)
    public int getConnectionPoolSize() {
        return dataSource.getHikariPoolMXBean().getActiveConnections();
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">事件注解</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@EventListener</h3><p class="text-gray-700"> 用于监听插件生命周期事件和自定义事件。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class EventHandler {
    
    // 监听插件启动事件
    @EventListener
    public void handlePluginStarted(PluginStartedEvent event) {
        String pluginId = event.getPluginId();
        log.info(&quot;插件启动完成: &quot; + pluginId);
        
        // 可以在这里进行初始化操作
        initializePluginData(pluginId);
    }
    
    // 监听插件停止事件
    @EventListener
    public void handlePluginStopped(PluginStoppedEvent event) {
        String pluginId = event.getPluginId();
        log.info(&quot;插件停止: &quot; + pluginId);
        
        // 清理资源
        cleanupResources(pluginId);
    }
    
    // 监听自定义事件
    @EventListener
    public void handleCustomEvent(CustomPluginEvent event) {
        String pluginId = event.getSource();
        String eventType = event.getType();
        Object data = event.getData();
        
        log.info(&quot;收到自定义事件: {} from plugin: {}&quot;, eventType, pluginId);
        
        // 处理自定义业务逻辑
        processCustomEvent(event);
    }
    
    // 监听系统事件
    @EventListener
    public void handleSystemEvent(SystemEvent event) {
        switch (event.getType()) {
            case SYSTEM_SHUTDOWN:
                handleSystemShutdown();
                break;
            case SYSTEM_RESTART:
                handleSystemRestart();
                break;
            case CONFIG_CHANGED:
                handleConfigChanged(event.getConfig());
                break;
        }
    }
}</code></pre><h4 class="font-semibold text-gray-900">事件类型：</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h5 class="font-semibold text-gray-900 mb-2">插件生命周期事件：</h5><ul class="space-y-1 text-gray-700 text-sm"><li>• PluginInstallEvent - 插件安装</li><li>• PluginStartedEvent - 插件启动</li><li>• PluginStoppedEvent - 插件停止</li><li>• PluginUninstalledEvent - 插件卸载</li></ul></div><div><h5 class="font-semibold text-gray-900 mb-2">系统事件：</h5><ul class="space-y-1 text-gray-700 text-sm"><li>• SystemShutdownEvent - 系统关闭</li><li>• SystemRestartEvent - 系统重启</li><li>• ConfigChangedEvent - 配置变更</li><li>• CustomPluginEvent - 自定义事件</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">条件注解</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@ConditionalOnProperty</h3><p class="text-gray-700"> 根据配置属性值决定是否创建Bean或执行方法。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class ConditionalConfigService {
    
    // 当 plugin.feature.cache.enabled = true 时创建
    @ConditionalOnProperty(name = &quot;plugin.feature.cache.enabled&quot;, 
                         havingValue = &quot;true&quot;)
    @Bean
    public CacheService cacheService() {
        return new RedisCacheService();
    }
    
    // 当 plugin.feature.cache.enabled = false 或不存在时创建
    @ConditionalOnProperty(name = &quot;plugin.feature.cache.enabled&quot;, 
                         havingValue = &quot;false&quot;)
    @Bean
    public CacheService simpleCacheService() {
        return new SimpleCacheService();
    }
    
    // 当 plugin.database.type = mysql 时创建
    @ConditionalOnProperty(name = &quot;plugin.database.type&quot;, 
                         havingValue = &quot;mysql&quot;)
    @Bean
    public DatabaseService mysqlDatabaseService() {
        return new MySqlDatabaseService();
    }
    
    // 当 plugin.database.type = postgresql 时创建
    @ConditionalOnProperty(name = &quot;plugin.database.type&quot;, 
                         havingValue = &quot;postgresql&quot;)
    @Bean
    public DatabaseService postgresqlDatabaseService() {
        return new PostgreSqlDatabaseService();
    }
    
    // 方法级别条件注解
    @ConditionalOnProperty(name = &quot;plugin.feature.metrics.enabled&quot;, 
                         havingValue = &quot;true&quot;)
    public void enableMetrics() {
        metricsService.start();
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@ConditionalOnBean</h3><p class="text-gray-700"> 当指定类型的Bean存在时才创建当前Bean。 </p><h4 class="font-semibold text-gray-900">使用示例：</h4><pre><code class="java">@PluginComponent
public class AutoConfiguration {
    
    // 当存在UserService Bean时创建UserController
    @ConditionalOnBean(UserService.class)
    @Bean
    public UserController userController(UserService userService) {
        return new UserController(userService);
    }
    
    // 当存在RedisTemplate Bean时创建CacheService
    @ConditionalOnBean(name = &quot;redisTemplate&quot;)
    @Bean
    public CacheService redisCacheService(RedisTemplate redisTemplate) {
        return new RedisCacheService(redisTemplate);
    }
    
    // 当存在DataSource Bean时创建DatabaseService
    @ConditionalOnBean(DataSource.class)
    @Bean
    public DatabaseService databaseService(DataSource dataSource) {
        return new DatabaseServiceImpl(dataSource);
    }
    
    // 方法级别条件注解
    @ConditionalOnBean(JpaRepository.class)
    public void initializeRepository() {
        repositoryManager.initialize();
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">自定义注解</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">定义自定义注解</h3><p class="text-gray-700"> 开发者可以根据业务需求定义自己的注解。 </p><h4 class="font-semibold text-gray-900">示例：业务日志注解</h4><pre><code class="java">// 定义注解
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface BusinessLog {
    
    String value() default &quot;&quot;;
    
    LogLevel level() default LogLevel.INFO;
    
    boolean includeParams() default false;
    
    boolean includeResult() default false;
}

// 注解处理器
@Aspect
@Component
@PluginComponent
public class BusinessLogAspect {
    
    @Around(&quot;@annotation(businessLog)&quot;)
    public Object logBusinessOperation(ProceedingJoinPoint joinPoint, 
                                     BusinessLog businessLog) throws Throwable {
        
        long startTime = System.currentTimeMillis();
        String methodName = joinPoint.getSignature().getName();
        
        // 记录方法参数
        if (businessLog.includeParams()) {
            Object[] args = joinPoint.getArgs();
            log.debug(&quot;方法参数: {} = {}&quot;, methodName, Arrays.toString(args));
        }
        
        try {
            // 执行方法
            Object result = joinPoint.proceed();
            
            // 记录成功日志
            long duration = System.currentTimeMillis() - startTime;
            log.log(businessLog.level(), 
                   &quot;业务操作: {} 执行成功，耗时: {}ms&quot;, methodName, duration);
            
            // 记录返回结果
            if (businessLog.includeResult()) {
                log.debug(&quot;方法返回: {} = {}&quot;, methodName, result);
            }
            
            return result;
            
        } catch (Exception e) {
            // 记录错误日志
            log.error(&quot;业务操作: {} 执行失败: {}&quot;, methodName, e.getMessage(), e);
            throw e;
        }
    }
    
    public enum LogLevel {
        DEBUG, INFO, WARN, ERROR
    }
}</code></pre><h4 class="font-semibold text-gray-900">使用自定义注解：</h4><pre><code class="java">@PluginComponent
public class OrderService {
    
    @BusinessLog(value = &quot;创建订单&quot;, 
                level = LogLevel.INFO,
                includeParams = true)
    public Order createOrder(OrderRequest request) {
        // 创建订单逻辑
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setAmount(request.getAmount());
        // ... 其他逻辑
        return orderRepository.save(order);
    }
    
    @BusinessLog(value = &quot;支付订单&quot;, 
                level = LogLevel.WARN,
                includeParams = true,
                includeResult = true)
    public PaymentResult payOrder(Long orderId, PaymentRequest request) {
        // 支付逻辑
        return paymentService.processPayment(orderId, request);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">注解使用建议</h3><ul class="space-y-2 text-gray-700"><li>• 合理使用注解，保持代码简洁</li><li>• 避免过度注解导致性能问题</li><li>• 注解参数要有默认值</li><li>• 使用有意义的注解名称</li><li>• 及时更新注解文档</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">性能优化</h3><ul class="space-y-2 text-gray-700"><li>• 避免在注解中进行复杂计算</li><li>• 监控注解的执行性能</li><li>• 合理设置缓存策略</li><li>• 异步处理监控和日志</li><li>• 避免循环依赖和无限递归</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3><ul class="space-y-2 text-gray-700"><li>• 使用权限注解保护敏感操作</li><li>• 验证注解参数的有效性</li><li>• 避免在注解中暴露敏感信息</li><li>• 定期审计权限配置</li><li>• 记录权限检查日志</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">测试建议</h3><ul class="space-y-2 text-gray-700"><li>• 为自定义注解编写单元测试</li><li>• 测试注解处理器的逻辑</li><li>• 验证配置注入的正确性</li><li>• 测试权限验证的功能</li><li>• 集成测试验证完整流程</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">常见问题</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">常见问题解决</h3><h4 class="font-semibold text-gray-900">1. 注解无法正常工作</h4><div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4"><p class="text-yellow-700"><strong>问题：</strong>自定义注解没有生效</p><p class="text-yellow-700"><strong>解决：</strong></p><ul class="mt-2 text-yellow-700 text-sm"><li>• 检查是否添加了@Aspect和@Component注解</li><li>• 确认切点表达式正确</li><li>• 检查组件扫描路径</li><li>• 验证Spring Boot自动配置是否启用</li></ul></div><h4 class="font-semibold text-gray-900">2. 配置注入失败</h4><div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4"><p class="text-yellow-700"><strong>问题：</strong>@ConfigurationValue注解无法注入配置值</p><p class="text-yellow-700"><strong>解决：</strong></p><ul class="mt-2 text-yellow-700 text-sm"><li>• 检查配置文件格式和路径</li><li>• 确认配置键名拼写正确</li><li>• 验证数据类型匹配</li><li>• 检查是否存在循环依赖</li></ul></div><h4 class="font-semibold text-gray-900">3. 权限验证失败</h4><div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4"><p class="text-yellow-700"><strong>问题：</strong>@RequirePermission注解总是抛出权限异常</p><p class="text-yellow-700"><strong>解决：</strong></p><ul class="mt-2 text-yellow-700 text-sm"><li>• 检查插件权限配置</li><li>• 验证Permission枚举值</li><li>• 确认权限检查器正常工作</li><li>• 查看审计日志定位问题</li></ul></div><h4 class="font-semibold text-gray-900">4. 监控指标异常</h4><div class="bg-yellow-50 border-l-4 border-yellow-400 p-4"><p class="text-yellow-700"><strong>问题：</strong>@Monitored注解收集不到监控数据</p><p class="text-yellow-700"><strong>解决：</strong></p><ul class="mt-2 text-yellow-700 text-sm"><li>• 检查监控服务是否正常启动</li><li>• 确认监控配置正确</li><li>• 验证指标上报端点</li><li>• 检查防火墙和网络设置</li></ul></div></div></section>`,11)])])}const rd=dt(id,[["render",od]]),ad={},cd={class:"space-y-8"};function ud(t,e){return k(),N("div",cd,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">配置参数</h1><p class="text-lg text-gray-600 mb-8"> 详细介绍Brick BootKit框架的所有配置参数，包括主程序配置、插件配置、性能监控、安全设置等各个方面。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置参数概述</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit通过配置参数实现灵活的系统定制和插件管理。 所有配置项都支持环境变量注入、默认值设置和动态更新。 </p><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-semibold text-blue-900 mb-2">主程序配置</h3><p class="text-blue-700 text-sm">系统级配置参数</p></div><div class="bg-green-50 p-4 rounded-lg"><h3 class="font-semibold text-green-900 mb-2">插件配置</h3><p class="text-green-700 text-sm">插件专用配置项</p></div><div class="bg-purple-50 p-4 rounded-lg"><h3 class="font-semibold text-purple-900 mb-2">性能配置</h3><p class="text-purple-700 text-sm">监控和优化参数</p></div><div class="bg-orange-50 p-4 rounded-lg"><h3 class="font-semibold text-orange-900 mb-2">安全配置</h3><p class="text-orange-700 text-sm">权限和安全设置</p></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">主程序配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">基本配置</h3><h4 class="font-semibold text-gray-900">plugin.runMode</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>插件运行模式</p><p class="text-gray-700 mb-2"><strong>类型：</strong>String</p><p class="text-gray-700 mb-2"><strong>可选值：</strong>dev, prod</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>dev</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  runMode: prod</code></pre><p class="text-gray-700"><strong>说明：</strong>dev模式提供开发友好的功能，prod模式优化性能和安全性</p></div><h4 class="font-semibold text-gray-900">plugin.mainPackage</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>主程序扫描包名，用于插件发现</p><p class="text-gray-700 mb-2"><strong>类型：</strong>String</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>com.example.main</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  mainPackage: com.company.main</code></pre><p class="text-gray-700"><strong>说明：</strong>插件加载器会扫描此包及其子包下的组件</p></div><h4 class="font-semibold text-gray-900">plugin.enablePluginIdRestPathPrefix</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件ID作为REST接口路径前缀</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  enablePluginIdRestPathPrefix: true</code></pre><p class="text-gray-700"><strong>说明：</strong>true时URL为/plugins/user-service/user，false时为/user（可能有冲突）</p></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件路径配置</h3><h4 class="font-semibold text-gray-900">plugin.pluginPath</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>插件文件存放路径列表</p><p class="text-gray-700 mb-2"><strong>类型：</strong>List&lt;String&gt;</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  pluginPath:
    - D://project/plugins
    - ./plugins-dev
    - /opt/plugins</code></pre><p class="text-gray-700"><strong>说明：</strong>支持多个路径，插件加载器会依次扫描这些目录</p></div><h4 class="font-semibold text-gray-900">plugin.pluginScanInterval</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>插件目录扫描间隔时间（毫秒）</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>30000 (30秒)</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  pluginScanInterval: 60000  # 1分钟</code></pre><p class="text-gray-700"><strong>说明：</strong>用于监控插件目录变化，自动发现新插件或插件更新</p></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">管理接口配置</h3><h4 class="font-semibold text-gray-900">plugin.management.port</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>插件管理接口端口</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>8081</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  management:
    port: 8081</code></pre><p class="text-gray-700"><strong>说明：</strong>插件管理REST API的监听端口</p></div><h4 class="font-semibold text-gray-900">plugin.management.contextPath</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>管理接口的上下文路径</p><p class="text-gray-700 mb-2"><strong>类型：</strong>String</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>/api</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  management:
    contextPath: /plugin-api</code></pre><p class="text-gray-700"><strong>说明：</strong>管理API的基础路径，最终URL为 http://host:port/contextPath</p></div><h4 class="font-semibold text-gray-900">plugin.management.security.enabled</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用管理接口安全认证</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>false</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  management:
    security:
      enabled: true
      token: \${MANAGEMENT_TOKEN}</code></pre><p class="text-gray-700"><strong>说明：</strong>启用后需要Token认证访问管理接口</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件生命周期配置</h3><h4 class="font-semibold text-gray-900">plugin.lifecycle.startTimeout</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>插件启动超时时间（毫秒）</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>60000 (1分钟)</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  lifecycle:
    startTimeout: 120000  # 2分钟</code></pre><p class="text-gray-700"><strong>说明：</strong>插件启动超过此时间将被标记为启动失败</p></div><h4 class="font-semibold text-gray-900">plugin.lifecycle.stopTimeout</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>插件停止超时时间（毫秒）</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>30000 (30秒)</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  lifecycle:
    stopTimeout: 60000  # 1分钟</code></pre><p class="text-gray-700"><strong>说明：</strong>插件停止超过此时间将被强制终止</p></div><h4 class="font-semibold text-gray-900">plugin.lifecycle.autoStart</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>插件安装后是否自动启动</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  lifecycle:
    autoStart: false</code></pre><p class="text-gray-700"><strong>说明：</strong>设置为false后需要手动启动插件</p></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件隔离配置</h3><h4 class="font-semibold text-gray-900">plugin.isolation.enabled</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件隔离</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  isolation:
    enabled: true
    classLoaderType: ISOLATED</code></pre><p class="text-gray-700"><strong>说明：</strong>禁用后所有插件在同一个类加载器中运行</p></div><h4 class="font-semibold text-gray-900">plugin.isolation.memoryLimit</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>单个插件内存使用限制</p><p class="text-gray-700 mb-2"><strong>类型：</strong>String</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>256MB</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  isolation:
    memoryLimit: 512MB</code></pre><p class="text-gray-700"><strong>说明：</strong>格式支持KB、MB、GB，超出限制的插件将被重启</p></div><h4 class="font-semibold text-gray-900">plugin.isolation.threadLimit</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>单个插件线程数量限制</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>50</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  isolation:
    threadLimit: 100</code></pre><p class="text-gray-700"><strong>说明：</strong>防止插件创建过多线程影响系统性能</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">性能监控配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">监控设置</h3><h4 class="font-semibold text-gray-900">plugin.monitoring.enabled</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用性能监控</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  monitoring:
    enabled: true
    collectionInterval: 30s</code></pre><p class="text-gray-700"><strong>说明：</strong>关闭后不再收集性能指标数据</p></div><h4 class="font-semibold text-gray-900">plugin.monitoring.metrics</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>监控指标配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Map&lt;String, Object&gt;</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  monitoring:
    metrics:
      jvm:
        enabled: true
        memory: true
        gc: true
        threads: true
      plugin:
        enabled: true
        executionTime: true
        errorRate: true
        throughput: true
      system:
        enabled: true
        cpu: true
        disk: true
        network: true</code></pre><p class="text-gray-700"><strong>说明：</strong>可以精确控制收集哪些指标</p></div><h4 class="font-semibold text-gray-900">plugin.monitoring.export</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>监控数据导出配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  monitoring:
    export:
      prometheus:
        enabled: true
        port: 9090
        path: /metrics
      influxdb:
        enabled: false
        url: http://localhost:8086
        database: plugin_metrics
      elasticsearch:
        enabled: false
        hosts: localhost:9200
        index: plugin-metrics</code></pre><p class="text-gray-700"><strong>说明：</strong>支持多种监控数据导出格式</p></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">性能调优</h3><h4 class="font-semibold text-gray-900">plugin.performance.classLoadingCache</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>类加载器缓存配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  performance:
    classLoadingCache:
      enabled: true
      maxSize: 1000
      ttl: 3600s</code></pre><p class="text-gray-700"><strong>说明：</strong>缓存已加载的类以提高类加载性能</p></div><h4 class="font-semibold text-gray-900">plugin.performance.resourcePool</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>资源池配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  performance:
    resourcePool:
      threadPool:
        coreSize: 10
        maxSize: 50
        queueSize: 1000
      connectionPool:
        maxSize: 20
        minSize: 5
        maxWait: 30s</code></pre><p class="text-gray-700"><strong>说明：</strong>管理插件使用的各种资源池</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">安全配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">安全设置</h3><h4 class="font-semibold text-gray-900">plugin.security.enabled</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用安全机制</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  security:
    enabled: true
    strictMode: false</code></pre><p class="text-gray-700"><strong>说明：</strong>严格模式下会拒绝所有未明确授权的操作</p></div><h4 class="font-semibold text-gray-900">plugin.security.permissions</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>权限配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  security:
    permissions:
      default:
        - data:read
        - system:monitor
      admin:
        - &quot;*&quot;
      trusted:
        - plugin:*
        - system:*
        - data:*</code></pre><p class="text-gray-700"><strong>说明：</strong>定义不同信任级别的默认权限</p></div><h4 class="font-semibold text-gray-900">plugin.security.network</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>网络安全配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  security:
    network:
      allowedHosts:
        - localhost
        - 127.0.0.1
        - &quot;*.company.com&quot;
      blockedPorts:
        - 22    # SSH
        - 3389  # RDP
      maxConnections: 100</code></pre><p class="text-gray-700"><strong>说明：</strong>控制插件的网络访问权限</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">数据库配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件数据库配置</h3><h4 class="font-semibold text-gray-900">plugin.database.enabled</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件数据库功能</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  database:
    enabled: true
    type: h2
    connectionPool:
      maximumPoolSize: 20
      minimumIdle: 5
      connectionTimeout: 30s</code></pre><p class="text-gray-700"><strong>说明：</strong>每个插件可以有独立的数据库实例</p></div><h4 class="font-semibold text-gray-900">plugin.database.h2</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>H2数据库配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  database:
    h2:
      mode: file
      dbName: plugin_db
      location: ./data/plugins
      options:
        AUTO_SERVER: &quot;TRUE&quot;
        CACHE_SIZE: 65536</code></pre><p class="text-gray-700"><strong>说明：</strong>轻量级数据库，适合开发和小型应用</p></div><h4 class="font-semibold text-gray-900">plugin.database.mysql</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>MySQL数据库配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  database:
    mysql:
      url: jdbc:mysql://localhost:3306/plugin_db
      username: \${DB_USERNAME}
      password: \${DB_PASSWORD}
      driverClassName: com.mysql.cj.jdbc.Driver
      pool:
        maximumPoolSize: 20
        minimumIdle: 5
        connectionTimeout: 30s
        idleTimeout: 600000
        maxLifetime: 1800000</code></pre><p class="text-gray-700"><strong>说明：</strong>生产环境推荐使用MySQL等关系型数据库</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">日志配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">日志设置</h3><h4 class="font-semibold text-gray-900">plugin.logging.enabled</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件日志</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  logging:
    enabled: true
    level: INFO
    pattern: &quot;%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n&quot;</code></pre><p class="text-gray-700"><strong>说明：</strong>每个插件有独立的日志配置</p></div><h4 class="font-semibold text-gray-900">plugin.logging.file</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>日志文件配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  logging:
    file:
      name: ./logs/plugins.log
      maxSize: 100MB
      maxHistory: 30
      totalSize: 1GB</code></pre><p class="text-gray-700"><strong>说明：</strong>支持日志文件轮转和归档</p></div><h4 class="font-semibold text-gray-900">plugin.logging.plugins</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>特定插件日志配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Map&lt;String, Object&gt;</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  logging:
    plugins:
      user-service:
        level: DEBUG
        file:
          name: ./logs/user-service.log
      order-service:
        level: WARN
        file:
          name: ./logs/order-service.log</code></pre><p class="text-gray-700"><strong>说明：</strong>可以为特定插件单独设置日志级别和文件</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">高级配置</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">热更新配置</h3><h4 class="font-semibold text-gray-900">plugin.hotReload.enabled</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件热更新</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>false (prod模式), true (dev模式)</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  hotReload:
    enabled: true
    watchPaths:
      - src/main/java
      - src/main/resources
    excludePaths:
      - &quot;*.class&quot;
      - &quot;*.jar&quot;</code></pre><p class="text-gray-700"><strong>说明：</strong>开发模式下自动检测文件变化并重新加载插件</p></div><h4 class="font-semibold text-gray-900">plugin.hotReload.debounceTime</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>文件变化防抖时间（毫秒）</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>3000 (3秒)</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  hotReload:
    debounceTime: 5000  # 5秒</code></pre><p class="text-gray-700"><strong>说明：</strong>防止频繁的文件变化触发多次重载</p></div></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">开发工具配置</h3><h4 class="font-semibold text-gray-900">plugin.devTools.enabled</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用开发工具</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p><p class="text-gray-700 mb-2"><strong>默认值：</strong>false (prod模式), true (dev模式)</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  devTools:
    enabled: true
    webInterface:
      enabled: true
      port: 9090
    remoteDebug:
      enabled: false
      port: 5005</code></pre><p class="text-gray-700"><strong>说明：</strong>提供Web界面和远程调试功能</p></div><h4 class="font-semibold text-gray-900">plugin.devTools.debug</h4><div class="bg-gray-50 p-4 rounded-lg"><p class="text-gray-700 mb-2"><strong>说明：</strong>调试配置</p><p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p><p class="text-gray-700 mb-2"><strong>示例值：</strong></p><pre><code class="yaml">plugin:
  devTools:
    debug:
      enabled: true
      verbose: true
      logClassLoading: true
      logMethodCalls: false</code></pre><p class="text-gray-700"><strong>说明：</strong>详细的调试信息，帮助定位问题</p></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">环境变量支持</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">环境变量配置</h3><p class="text-gray-700"> Brick BootKit支持通过环境变量覆盖配置文件中的值： </p><h4 class="font-semibold text-gray-900">语法格式：</h4><pre><code class="yaml">plugin:
  runMode: \${PLUGIN_RUN_MODE:dev}      # 默认值为 dev
  management:
    port: \${PLUGIN_MANAGEMENT_PORT}    # 无默认值
  database:
    password: \${DB_PASSWORD}            # 无默认值</code></pre><h4 class="font-semibold text-gray-900">常用环境变量：</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h5 class="font-semibold text-gray-900 mb-2">基本配置：</h5><ul class="space-y-1 text-gray-700 text-sm"><li>• PLUGIN_RUN_MODE - 插件运行模式</li><li>• PLUGIN_MAIN_PACKAGE - 主程序包名</li><li>• PLUGIN_MANAGEMENT_PORT - 管理接口端口</li><li>• PLUGIN_MANAGEMENT_TOKEN - 管理接口Token</li></ul></div><div><h5 class="font-semibold text-gray-900 mb-2">数据库配置：</h5><ul class="space-y-1 text-gray-700 text-sm"><li>• DB_USERNAME - 数据库用户名</li><li>• DB_PASSWORD - 数据库密码</li><li>• DB_URL - 数据库连接URL</li><li>• DB_DRIVER - 数据库驱动</li></ul></div></div><h4 class="font-semibold text-gray-900">设置环境变量示例：</h4><pre><code class="bash"># Linux/Mac
export PLUGIN_RUN_MODE=prod
export PLUGIN_MANAGEMENT_PORT=8081
export DB_USERNAME=plugin_user
export DB_PASSWORD=secure_password

# Windows
set PLUGIN_RUN_MODE=prod
set PLUGIN_MANAGEMENT_PORT=8081

# Docker
docker run -e PLUGIN_RUN_MODE=prod -e DB_PASSWORD=secure_password myapp</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置最佳实践</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">开发环境配置</h3><ul class="space-y-2 text-gray-700"><li>• 启用热更新和开发工具</li><li>• 使用DEBUG级别的日志</li><li>• 禁用严格的安全模式</li><li>• 使用H2内存数据库</li><li>• 启用详细的性能监控</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">生产环境配置</h3><ul class="space-y-2 text-gray-700"><li>• 关闭热更新和开发工具</li><li>• 使用WARN/ERROR级别的日志</li><li>• 启用严格的安全模式</li><li>• 使用MySQL/PostgreSQL数据库</li><li>• 配置日志文件轮转</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3><ul class="space-y-2 text-gray-700"><li>• 使用强密码和加密存储</li><li>• 限制网络访问范围</li><li>• 定期更新和轮转密钥</li><li>• 审计权限配置</li><li>• 监控异常访问</li></ul></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">性能优化</h3><ul class="space-y-2 text-gray-700"><li>• 合理设置内存和线程限制</li><li>• 配置连接池参数</li><li>• 启用类加载器缓存</li><li>• 调优JVM参数</li><li>• 监控资源使用情况</li></ul></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">配置问题排查</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">常见问题解决</h3><h4 class="font-semibold text-gray-900">1. 配置不生效</h4><div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4"><p class="text-yellow-700"><strong>问题：</strong>修改配置后没有生效</p><p class="text-yellow-700"><strong>解决：</strong></p><ul class="mt-2 text-yellow-700 text-sm"><li>• 检查配置文件格式和路径</li><li>• 确认环境变量名称正确</li><li>• 重启应用程序</li><li>• 查看启动日志中的配置加载信息</li></ul></div><h4 class="font-semibold text-gray-900">2. 插件启动失败</h4><div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4"><p class="text-yellow-700"><strong>问题：</strong>插件因为配置问题无法启动</p><p class="text-yellow-700"><strong>解决：</strong></p><ul class="mt-2 text-yellow-700 text-sm"><li>• 检查插件特有的配置项</li><li>• 验证数据库连接配置</li><li>• 查看插件启动日志</li><li>• 检查权限和资源限制</li></ul></div><h4 class="font-semibold text-gray-900">3. 性能问题</h4><div class="bg-yellow-50 border-l-4 border-yellow-400 p-4"><p class="text-yellow-700"><strong>问题：</strong>系统性能不佳</p><p class="text-yellow-700"><strong>解决：</strong></p><ul class="mt-2 text-yellow-700 text-sm"><li>• 检查内存和线程配置</li><li>• 调整连接池参数</li><li>• 优化监控指标收集频率</li><li>• 调整日志级别减少I/O</li></ul></div></div></section>`,12)])])}const dd=dt(ad,[["render",ud]]),gd={name:"Changelog",data(){return{selectedVersion:"4.0.1",versions:["4.0.1","4.0.0"]}}},pd={class:"space-y-8"},md={class:"space-y-6"},fd={class:"card space-y-4"},hd={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},xd=["onClick"],yd={key:0,class:"space-y-6"},bd={key:1,class:"space-y-6"};function vd(t,e,n,s,i,l){return k(),N("div",pd,[e[5]||(e[5]=h("div",null,[h("h1",{class:"text-4xl font-bold text-gray-900 mb-4"},"版本升级说明"),h("p",{class:"text-lg text-gray-600 mb-8"}," 详细记录Brick BootKit框架的版本变更历史、升级指南和迁移步骤。 ")],-1)),h("section",md,[e[2]||(e[2]=h("h2",{class:"text-3xl font-bold text-gray-900"},"版本导航",-1)),h("div",fd,[e[0]||(e[0]=h("p",{class:"text-gray-700"}," 选择目标版本查看详细的升级指南和变更说明： ",-1)),h("div",hd,[(k(!0),N(ot,null,Et(i.versions,o=>(k(),N("button",{key:o,onClick:r=>i.selectedVersion=o,class:Ee(["p-3 rounded-lg text-sm font-medium transition-colors",i.selectedVersion===o?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},at(o),11,xd))),128))]),e[1]||(e[1]=h("div",{class:"bg-blue-50 border-l-4 border-blue-400 p-4"},[h("p",{class:"text-blue-700"},[h("strong",null,"当前版本："),Re("4.0.1 "),h("strong",null,"发布日期："),Re("2025年12月5日 ")])],-1))])]),i.selectedVersion==="4.0.1"?(k(),N("section",yd,[...e[3]||(e[3]=[nt(`<h2 class="text-3xl font-bold text-gray-900">版本 4.0.1 (当前版本)</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">发布日期</h3><p class="text-gray-700">2025年12月5日</p><h3 class="text-xl font-semibold text-gray-900">主要特性</h3><ul class="space-y-2 text-gray-700"><li>• 增强的插件隔离机制</li><li>• 改进的性能监控功能</li><li>• 新的注解支持</li><li>• 安全机制优化</li><li>• 更好的开发工具支持</li></ul><h3 class="text-xl font-semibold text-gray-900">新功能</h3><ul class="space-y-2 text-gray-700"><li>• <strong>插件生命周期管理</strong>：完整的插件启动、停止、重新加载流程</li><li>• <strong>动态部署</strong>：支持热插拔和零停机部署</li><li>• <strong>性能监控</strong>：内置监控指标收集和导出</li><li>• <strong>安全增强</strong>：权限控制和资源隔离</li><li>• <strong>配置管理</strong>：动态配置更新和验证</li></ul><h3 class="text-xl font-semibold text-gray-900">改进</h3><ul class="space-y-2 text-gray-700"><li>• 优化了类加载器性能</li><li>• 改进了错误处理和日志记录</li><li>• 增强了API稳定性</li><li>• 提供了更好的文档和示例</li></ul><h3 class="text-xl font-semibold text-gray-900">破坏性变更</h3></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">从 4.0.0 升级到 4.0.1</h3><h4 class="font-semibold text-gray-900">升级步骤</h4><div class="space-y-4"><div class="bg-green-50 p-4 rounded-lg"><h5 class="font-semibold text-green-900 mb-2">1. 备份现有项目</h5><p class="text-green-700 text-sm">在升级前，请备份您的插件项目和数据</p></div><div class="bg-blue-50 p-4 rounded-lg"><h5 class="font-semibold text-blue-900 mb-2">2. 更新依赖版本</h5><pre><code class="yaml"># pom.xml 依赖更新
&lt;dependency&gt;
    &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot3-brick-bootkit&lt;/artifactId&gt;
    &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre></div><div class="bg-blue-50 p-4 rounded-lg"><h5 class="font-semibold text-blue-900 mb-2">3. 更新插件打包配置</h5><pre><code class="xml">&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;</code></pre></div><div class="bg-blue-50 p-4 rounded-lg"><h5 class="font-semibold text-blue-900 mb-2">4. 重新构建项目</h5><pre><code class="bash"># 清理和重新构建
mvn clean install</code></pre></div></div></div>`,3)])])):Zt("",!0),i.selectedVersion==="4.0.0"?(k(),N("section",bd,[...e[4]||(e[4]=[nt('<h2 class="text-3xl font-bold text-gray-900">版本 4.0.0</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">发布日期</h3><p class="text-gray-700">2025年12月1日</p><h3 class="text-xl font-semibold text-gray-900">主要特性</h3><ul class="space-y-2 text-gray-700"><li>• 完全重写的插件系统</li><li>• Spring Boot 3.x 完整支持</li><li>• 新的插件生命周期管理</li><li>• 增强的安全性</li><li>• 改进的开发体验</li></ul><h3 class="text-xl font-semibold text-gray-900">新功能</h3><ul class="space-y-2 text-gray-700"><li>• <strong>@PluginComponent 注解</strong>：自动扫描和注册插件组件</li><li>• <strong>@PluginRestController</strong>：插件REST控制器</li><li>• <strong>@PluginScheduled</strong>：插件定时任务</li><li>• <strong>插件隔离机制</strong>：内存、线程、类加载器隔离</li><li>• <strong>权限控制</strong>：细粒度权限验证</li></ul><h3 class="text-xl font-semibold text-gray-900">破坏性变更</h3><div class="bg-red-50 border-l-4 border-red-400 p-4"><p class="text-red-700"><strong>重大变更：</strong>4.0.0是完全重写的版本，与3.x系列不兼容</p><ul class="mt-2 text-red-700 text-sm space-y-1"><li>• 移除了旧版插件API</li><li>• 更改了配置文件格式</li><li>• 新的注解系统</li><li>• 需要Spring Boot 3.x</li></ul></div></div>',2)])])):Zt("",!0),e[6]||(e[6]=nt(`<section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">破坏性变更详细说明</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">配置变更</h3><h4 class="font-semibold text-gray-900">4.x 配置格式</h4><pre><code class="yaml"># 新格式
plugin:
  enabled: true
  mainPackage: com.example.main
  lifecycle:
    autoStart: true</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">依赖变更</h3><h4 class="font-semibold text-gray-900">Spring Boot 版本要求</h4><ul class="space-y-2 text-gray-700"><li>• <strong>4.x</strong>：Spring Boot 3.0.x 及以上版本</li></ul><h4 class="font-semibold text-gray-900">Java 版本要求</h4><ul class="space-y-2 text-gray-700"><li>• <strong>4.x</strong>：Java 17+</li></ul></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">回滚指南</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">紧急回滚步骤</h3><p class="text-gray-700"> 如果升级后遇到严重问题，可以按以下步骤进行回滚： </p><div class="space-y-4"><div class="bg-red-50 p-4 rounded-lg"><h4 class="font-semibold text-red-900 mb-2">1. 停止服务</h4><pre><code class="bash"># 停止当前服务
sudo systemctl stop brick-bootkit</code></pre></div><div class="bg-red-50 p-4 rounded-lg"><h4 class="font-semibold text-red-900 mb-2">2. 恢复备份</h4><pre><code class="bash"># 恢复备份
cp -r /backup/brick-bootkit-backup/* /opt/brick-bootkit/
cp /backup/application.yml /opt/brick-bootkit/config/</code></pre></div><div class="bg-red-50 p-4 rounded-lg"><h4 class="font-semibold text-red-900 mb-2">3. 恢复数据库</h4><pre><code class="bash"># 如果使用外部数据库
mysql -u root -p &lt; /backup/database_backup.sql</code></pre></div><div class="bg-red-50 p-4 rounded-lg"><h4 class="font-semibold text-red-900 mb-2">4. 重启服务</h4><pre><code class="bash"># 重启服务
sudo systemctl start brick-bootkit
sudo systemctl status brick-bootkit</code></pre></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">测试和验证</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">升级后验证清单</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-gray-900 mb-2">功能验证</h4><ul class="space-y-2 text-gray-700"><li>• 所有插件正常启动</li><li>• REST接口正常工作</li><li>• 定时任务正常执行</li><li>• 数据库连接正常</li><li>• 配置文件正确加载</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">性能验证</h4><ul class="space-y-2 text-gray-700"><li>• 内存使用正常</li><li>• 响应时间在预期范围内</li><li>• 没有明显的性能下降</li><li>• 监控指标正常收集</li><li>• 日志输出正常</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">安全验证</h4><ul class="space-y-2 text-gray-700"><li>• 权限验证正常工作</li><li>• 插件隔离有效</li><li>• 网络访问控制正常</li><li>• 安全审计日志正常</li></ul></div><div><h4 class="font-semibold text-gray-900 mb-2">兼容性验证</h4><ul class="space-y-2 text-gray-700"><li>• 现有插件功能完整</li><li>• API接口兼容</li><li>• 配置格式正确</li><li>• 第三方依赖正常</li></ul></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">技术支持</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">获取帮助</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="text-center"><h4 class="font-semibold text-gray-900 mb-2">文档</h4><p class="text-gray-700 text-sm">查看完整的升级文档和FAQ</p><a href="#" class="text-blue-600 hover:text-blue-800 text-sm">访问文档 →</a></div><div class="text-center"><h4 class="font-semibold text-gray-900 mb-2">社区</h4><p class="text-gray-700 text-sm">在GitHub讨论区提问</p><a href="#" class="text-blue-600 hover:text-blue-800 text-sm">访问讨论 →</a></div><div class="text-center"><h4 class="font-semibold text-gray-900 mb-2">企业支持</h4><p class="text-gray-700 text-sm">商业用户可以获得专业技术支持</p><a href="#" class="text-blue-600 hover:text-blue-800 text-sm">联系支持 →</a></div></div><h4 class="font-semibold text-gray-900 mt-6 mb-3">升级报告模板</h4><p class="text-gray-700 mb-3"> 如果您在升级过程中遇到问题，请提供以下信息： </p><pre><code class="text-sm"># 升级报告模板
## 环境信息
- Brick BootKit版本: 4.0.1
- Spring Boot版本: 3.1.x
- Java版本: 17
- 操作系统: Linux/Windows/Mac

## 升级内容
- 从版本: 3.2.x
- 到版本: 4.0.1
- 插件数量: N
- 自定义配置: 是/否

## 问题描述
[详细描述遇到的问题]

## 日志信息
[相关错误日志]

## 复现步骤
1. 步骤一
2. 步骤二
3. 步骤三

## 期望结果
[描述期望的结果]

## 实际结果
[描述实际的结果]</code></pre></div></section>`,4))])}const qd=dt(gd,[["render",vd]]),Sd={name:"FAQ",data(){return{searchQuery:"",selectedCategory:"all",expandedItems:new Set,popularTags:["插件开发","配置问题","性能优化","安全设置","部署","故障排查"],categories:[{id:"all",name:"全部问题",description:"所有分类",count:0},{id:"getting-started",name:"入门指南",description:"基本使用和快速开始",count:0},{id:"plugin-development",name:"插件开发",description:"插件编写和开发",count:0},{id:"configuration",name:"配置管理",description:"配置相关问题",count:0},{id:"deployment",name:"部署运维",description:"部署和运维",count:0},{id:"performance",name:"性能优化",description:"性能和监控",count:0},{id:"troubleshooting",name:"故障排查",description:"问题解决",count:0}],faqItems:[{id:1,question:"如何创建一个新的插件？",category:"plugin-development",tags:["插件开发","入门"],sections:[{title:"创建新插件的基本步骤：",content:"",list:["创建Maven项目并添加依赖","创建插件启动类","添加业务组件","配置打包插件"]},{title:"1. 添加依赖",content:"在插件项目的pom.xml中添加以下依赖：",code:`<dependency>
    <groupId>com.zqzqq.bootkits</groupId>
    <artifactId>spring-boot3-brick-bootkit-bootstrap</artifactId>
    <version>4.0.1</version>
</dependency>`},{title:"2. 创建插件启动类",content:"继承SpringPluginBootstrap并添加@PluginComponent注解：",code:`@PluginComponent
public class MyPlugin extends SpringPluginBootstrap {
    
    @Override
    protected void initialize() throws Exception {
        // 插件初始化逻辑
    }
}`},{title:"3. 添加业务组件",content:"使用@PluginComponent注解自动注册组件：",code:`@PluginComponent
@RestController
@RequestMapping("/api")
public class MyController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from plugin!";
    }
}`},{title:"4. 配置Maven打包插件",content:"在pom.xml中添加打包配置：",code:`<plugin>
    <groupId>com.zqzqq.bootkits</groupId>
    <artifactId>spring-boot3-brick-bootkit-maven-packager</artifactId>
    <version>4.0.1</version>
</plugin>`}]},{id:2,question:"插件启动失败怎么办？",category:"troubleshooting",tags:["插件开发","故障排查"],sections:[{title:"插件启动失败的常见原因和解决方法："},{title:"1. 检查插件依赖",content:"确保所有依赖都标记为provided作用域，由主程序提供：",code:`<dependency>
    <groupId>com.example</groupId>
    <artifactId>main-application</artifactId>
    <version>1.0.0</version>
    <scope>provided</scope>
</dependency>`},{title:"2. 检查插件配置",content:"验证application.yml中的插件配置是否正确：",code:`plugin:
  pluginPath:
    - ./plugins-dev
  management:
    port: 8081`},{title:"3. 查看启动日志",content:"检查控制台输出的错误信息，常见问题包括：",list:["类加载错误：检查jar包冲突","依赖注入失败：检查@Component和@Autowired注解","端口占用：检查插件管理接口端口"]},{title:"4. 启用调试模式",content:"在配置文件中启用详细的调试信息：",code:`plugin:
  devTools:
    enabled: true
    debug:
      enabled: true
      verbose: true`}]},{id:3,question:"如何配置插件的REST接口路径？",category:"configuration",tags:["配置问题","API"],sections:[{title:"Brick BootKit提供了两种REST接口路径配置方式："},{title:"1. 使用插件ID前缀（推荐）",content:"当enablePluginIdRestPathPrefix为true时：",code:`plugin:
  enablePluginIdRestPathPrefix: true`},{content:"插件的接口路径格式：/plugins/{pluginId}/{controllerPath}",list:['例如：插件ID为"user-service"，控制器路径为"/api/user"',"完整路径为：/plugins/user-service/api/user","这种方式可以避免路径冲突"]},{title:"2. 直接路径（可能有冲突）",content:"当enablePluginIdRestPathPrefix为false时：",code:`plugin:
  enablePluginIdRestPathPrefix: false`},{content:"注意：多个插件可能有相同的控制器路径，导致冲突"},{title:"3. 自定义路径前缀",content:"在插件中可以通过@RequestMapping注解自定义前缀：",code:`@PluginRestController
@RequestMapping("/custom-prefix/my-api")
public class MyController {
    // 接口路径为 /plugins/plugin-id/custom-prefix/my-api
}`}]},{id:4,question:"插件之间如何共享数据？",category:"plugin-development",tags:["插件开发","数据共享"],sections:[{title:"插件之间数据共享的几种方式："},{title:"1. 通过数据库共享",content:"所有插件可以使用同一个数据库：",code:`plugin:
  database:
    enabled: true
    shared: true
    url: jdbc:mysql://localhost:3306/shared_db`},{title:"2. 通过插件间通信API",content:"使用内置的插件通信服务：",code:`@PluginComponent
public class DataShareService {
    
    @Autowired
    private PluginCommunicationService commService;
    
    public void sendDataToPlugin(String targetPluginId, Object data) {
        commService.sendMessage(targetPluginId, "data-share", data);
    }
}`},{title:"3. 通过共享缓存",content:"使用Redis等共享缓存：",code:`@PluginComponent
public class CacheService {
    
    @Value("cache.type:redis")
    private String cacheType;
    
    public void putSharedData(String key, Object value) {
        redisTemplate.opsForValue().set("shared:" + key, value);
    }
}`},{title:"4. 通过事件系统",content:"使用Spring的事件机制：",code:`@PluginComponent
public class EventService {
    
    public void publishEvent(String eventType, Object data) {
        applicationEventPublisher.publishEvent(new PluginEvent(eventType, data));
    }
}`}]},{id:5,question:"如何监控插件的性能？",category:"performance",tags:["性能优化","监控"],sections:[{title:"Brick BootKit提供了内置的性能监控功能："},{title:"1. 启用监控",content:"在配置文件中启用监控功能：",code:`plugin:
  monitoring:
    enabled: true
    collectionInterval: 30s`},{title:"2. 使用监控注解",content:"使用内置注解自动收集性能指标：",code:`@PluginComponent
public class MyService {
    
    @Monitored("service.method1")
    public void method1() {
        // 业务逻辑
    }
    
    @Timed("database.query")
    public List<User> queryUsers() {
        return userRepository.findAll();
    }
}`},{title:"3. 查看监控数据",content:"监控数据可以通过以下方式查看：",list:["管理API：http://localhost:8081/api/metrics","Prometheus格式：http://localhost:8081/actuator/prometheus","Web界面：开发模式下可访问监控界面"]},{title:"4. 导出到监控系统",content:"配置监控数据导出：",code:`plugin:
  monitoring:
    export:
      prometheus:
        enabled: true
        port: 9090
      influxdb:
        enabled: true
        url: http://localhost:8086`}]},{id:6,question:"插件的安全机制是如何工作的？",category:"configuration",tags:["安全设置","权限控制"],sections:[{title:"Brick BootKit提供了多层安全机制："},{title:"1. 插件隔离",content:"每个插件在独立的隔离环境中运行：",code:`plugin:
  isolation:
    enabled: true
    memoryLimit: 256MB
    threadLimit: 50`},{title:"2. 权限控制",content:"使用注解进行权限验证：",code:`@RequirePermission(Permission.DATA_WRITE)
public void sensitiveOperation() {
    // 只有具备DATA_WRITE权限的插件才能执行此操作
}`},{title:"3. 网络访问控制",content:"限制插件的网络访问范围：",code:`plugin:
  security:
    network:
      allowedHosts:
        - localhost
        - 127.0.0.1
        - "*.company.com"
      blockedPorts:
        - 22    # SSH
        - 3389  # RDP`},{title:"4. 资源限制",content:"每个插件都有资源使用限制：",list:["内存使用限制","线程数量限制","网络连接数限制","文件句柄数量限制"]}]},{id:7,question:"如何进行插件的动态部署和更新？",category:"deployment",tags:["部署","热更新"],sections:[{title:"Brick BootKit支持插件的动态部署和更新："},{title:"1. 动态部署插件",content:"通过管理API部署插件：",code:`curl -X POST http://localhost:8081/api/plugins/install \\
     -H "Content-Type: multipart/form-data" \\
     -F "file=@my-plugin-1.0.0.jar"`},{title:"2. 插件生命周期管理",content:"使用API管理插件生命周期：",code:`# 启动插件
curl -X POST http://localhost:8081/api/plugins/my-plugin/start

# 停止插件
curl -X POST http://localhost:8081/api/plugins/my-plugin/stop

# 卸载插件
curl -X DELETE http://localhost:8081/api/plugins/my-plugin`},{title:"3. 插件更新",content:"更新插件到新版本：",code:`# 停止插件
curl -X POST http://localhost:8081/api/plugins/my-plugin/stop

# 上传新版本
curl -X POST http://localhost:8081/api/plugins/my-plugin/update \\
     -F "file=@my-plugin-1.1.0.jar"

# 重新启动
curl -X POST http://localhost:8081/api/plugins/my-plugin/start`},{title:"4. 热更新配置",content:"开发环境下支持热更新：",code:`plugin:
  hotReload:
    enabled: true
    watchPaths:
      - src/main/java
      - src/main/resources`},{title:"5. 零停机更新",content:"在生产环境中实现零停机更新的步骤：",list:["部署新版本插件为不同ID","测试新版本功能","切换流量到新版本","停用旧版本插件"]}]}]}},computed:{filteredFAQItems(){let t=this.faqItems;if(this.selectedCategory!=="all"&&(t=t.filter(e=>e.category===this.selectedCategory)),this.searchQuery.trim()){const e=this.searchQuery.toLowerCase().trim();t=t.filter(n=>n.question.toLowerCase().includes(e)||n.sections.some(s=>s.title&&s.title.toLowerCase().includes(e)||s.content&&s.content.toLowerCase().includes(e))||n.tags.some(s=>s.toLowerCase().includes(e)))}return t}},methods:{toggleExpanded(t){this.expandedItems.has(t)?this.expandedItems.delete(t):this.expandedItems.add(t)},addTag(t){this.searchQuery=t}},mounted(){this.categories.forEach(t=>{t.id==="all"?t.count=this.faqItems.length:t.count=this.faqItems.filter(e=>e.category===t.id).length})}},Pd={class:"space-y-8"},Id={class:"space-y-6"},Cd={class:"card space-y-4"},wd={class:"relative"},Ed={class:"flex flex-wrap gap-2"},Rd=["onClick"],_d={class:"space-y-6"},Ad={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},kd=["onClick"],Td={class:"font-semibold"},Md={class:"text-sm opacity-75"},Nd={class:"text-xs mt-2"},Dd={class:"space-y-6"},Ld={class:"space-y-4"},Od=["onClick"],Bd={class:"flex items-start justify-between"},Ud={class:"flex-1"},jd={class:"text-lg font-semibold text-gray-900 mb-2"},Vd={class:"flex flex-wrap gap-2 mb-3"},Hd={class:"ml-4 flex-shrink-0"},zd={key:0,class:"mt-4 pt-4 border-t border-gray-200"},Gd={class:"prose max-w-none"},Fd={key:0,class:"font-semibold text-gray-900 mb-2"},$d={key:1,class:"text-gray-700 mb-2"},Kd={key:2,class:"bg-gray-50 p-4 rounded-lg mb-4"},Wd={key:3,class:"list-disc list-inside text-gray-700 mb-2"},Jd={key:0,class:"text-center py-12"};function Qd(t,e,n,s,i,l){return k(),N("div",Pd,[e[8]||(e[8]=h("div",null,[h("h1",{class:"text-4xl font-bold text-gray-900 mb-4"},"常见问题"),h("p",{class:"text-lg text-gray-600 mb-8"}," 收集了Brick BootKit框架使用过程中的常见问题和解决方案，帮助您快速解决问题。 ")],-1)),h("section",Id,[e[3]||(e[3]=h("h2",{class:"text-3xl font-bold text-gray-900"},"问题搜索",-1)),h("div",Cd,[h("div",wd,[Qo(h("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.searchQuery=o),type:"text",placeholder:"搜索问题或关键词...",class:"w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"},null,512),[[Pa,i.searchQuery]]),e[1]||(e[1]=h("div",{class:"absolute inset-y-0 right-0 flex items-center pr-3"},[h("svg",{class:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1))]),h("div",Ed,[e[2]||(e[2]=h("span",{class:"text-sm text-gray-600"},"热门标签:",-1)),(k(!0),N(ot,null,Et(i.popularTags,o=>(k(),N("button",{key:o,onClick:r=>l.addTag(o),class:"px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"},at(o),9,Rd))),128))])])]),h("section",_d,[e[4]||(e[4]=h("h2",{class:"text-3xl font-bold text-gray-900"},"问题分类",-1)),h("div",Ad,[(k(!0),N(ot,null,Et(i.categories,o=>(k(),N("button",{key:o.id,onClick:r=>i.selectedCategory=o.id,class:Ee(["p-4 rounded-lg text-left transition-colors",i.selectedCategory===o.id?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},[h("h3",Td,at(o.name),1),h("p",Md,at(o.description),1),h("p",Nd,at(o.count)+" 个问题",1)],10,kd))),128))])]),h("section",Dd,[e[7]||(e[7]=h("h2",{class:"text-3xl font-bold text-gray-900"},"问题列表",-1)),h("div",Ld,[(k(!0),N(ot,null,Et(l.filteredFAQItems,o=>(k(),N("div",{key:o.id,class:"card cursor-pointer",onClick:r=>l.toggleExpanded(o.id)},[h("div",Bd,[h("div",Ud,[h("h3",jd,at(o.question),1),h("div",Vd,[(k(!0),N(ot,null,Et(o.tags,r=>(k(),N("span",{key:r,class:"px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"},at(r),1))),128))])]),h("div",Hd,[(k(),N("svg",{class:Ee(["w-5 h-5 text-gray-400 transition-transform",i.expandedItems.has(o.id)?"rotate-180":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...e[5]||(e[5]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))])]),i.expandedItems.has(o.id)?(k(),N("div",zd,[h("div",Gd,[(k(!0),N(ot,null,Et(o.sections,r=>(k(),N("div",{key:r.title,class:"mb-4"},[r.title?(k(),N("h4",Fd,at(r.title),1)):Zt("",!0),r.content?(k(),N("p",$d,at(r.content),1)):Zt("",!0),r.code?(k(),N("div",Kd,[h("pre",null,[h("code",null,at(r.code),1)])])):Zt("",!0),r.list?(k(),N("ul",Wd,[(k(!0),N(ot,null,Et(r.list,a=>(k(),N("li",{key:a},at(a),1))),128))])):Zt("",!0)]))),128))])])):Zt("",!0)],8,Od))),128))]),l.filteredFAQItems.length===0?(k(),N("div",Jd,[...e[6]||(e[6]=[h("svg",{class:"w-16 h-16 text-gray-300 mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.88-6.07-2.33l-2.93 2.93m1.17 4.17l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),h("p",{class:"text-gray-500 text-lg"},"没有找到相关问题",-1),h("p",{class:"text-gray-400"},"请尝试其他关键词或浏览不同分类",-1)])])):Zt("",!0)]),e[9]||(e[9]=nt('<section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">仍然需要帮助？</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="card text-center"><svg class="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg><h3 class="text-lg font-semibold text-gray-900 mb-2">查看文档</h3><p class="text-gray-600 mb-4">浏览完整的技术文档和API参考</p><a href="#" class="text-blue-600 hover:text-blue-800 font-medium">查看文档 →</a></div><div class="card text-center"><svg class="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z"></path></svg><h3 class="text-lg font-semibold text-gray-900 mb-2">社区讨论</h3><p class="text-gray-600 mb-4">加入GitHub讨论区与其他用户交流</p><a href="#" class="text-green-600 hover:text-green-800 font-medium">参与讨论 →</a></div><div class="card text-center"><svg class="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h3 class="text-lg font-semibold text-gray-900 mb-2">提交问题</h3><p class="text-gray-600 mb-4">提交新的问题或建议改进</p><a href="#" class="text-purple-600 hover:text-purple-800 font-medium">提交问题 →</a></div></div></section>',1))])}const Yd=dt(Sd,[["render",Qd]]),Xd={},Zd={class:"space-y-8"};function tg(t,e){return k(),N("div",Zd,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">API 参考文档</h1><p class="text-lg text-gray-600 mb-8"> Brick BootKit SpringBoot 提供的核心API接口和注解说明。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">核心类</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">SpringMainBootstrap</h3><p class="text-gray-700">主程序启动引导类，用于启动插件框架。</p><pre><code>public class SpringMainBootstrap {
    
    /**
     * 启动主程序
     * @param mainClass 主程序启动类
     * @param args 启动参数
     */
    public static void launch(Class&lt;?&gt; mainClass, String[] args)
    
    /**
     * 启动主程序（异步）
     * @param mainClass 主程序启动类
     * @param args 启动参数
     * @param callback 启动完成回调
     */
    public static void launchAsync(Class&lt;?&gt; mainClass, 
                                 String[] args, 
                                 BootstrapCallback callback)
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">SpringPluginBootstrap</h3><p class="text-gray-700">插件引导基类，所有插件都必须继承此类。</p><pre><code>public abstract class SpringPluginBootstrap {
    
    /**
     * 插件运行入口
     * @param args 启动参数
     */
    public abstract void run(String[] args)
    
    /**
     * 插件初始化
     */
    protected abstract void initialize() throws Exception
    
    /**
     * 插件关闭
     */
    protected abstract void shutdown() throws Exception
    
    /**
     * 获取插件信息
     */
    public abstract PluginInfo getPluginInfo()
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginManager</h3><p class="text-gray-700">插件管理器，提供插件的动态管理功能。</p><pre><code>public interface PluginManager {
    
    /**
     * 安装插件
     */
    PluginResult install(PluginInfo pluginInfo)
    
    /**
     * 卸载插件
     */
    PluginResult uninstall(String pluginId)
    
    /**
     * 启动插件
     */
    PluginResult start(String pluginId)
    
    /**
     * 停止插件
     */
    PluginResult stop(String pluginId)
    
    /**
     * 重载插件
     */
    PluginResult reload(String pluginId)
    
    /**
     * 获取插件状态
     */
    PluginState getPluginState(String pluginId)
    
    /**
     * 获取所有插件
     */
    List&lt;PluginInfo&gt; getAllPlugins()
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">注解说明</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@PluginComponent</h3><p class="text-gray-700">标记一个类为插件组件，该类会被插件加载器识别并注册。</p><pre><code>@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD, ElementType.FIELD})
public @interface PluginComponent {
    
    /**
     * 组件名称
     */
    String value() default &quot;&quot;;
    
    /**
     * 是否单例
     */
    boolean singleton() default true;
    
    /**
     * 初始化顺序，数值越小越早初始化
     */
    int order() default 0;
}</code></pre><h4 class="font-semibold text-gray-900 mt-4">使用示例：</h4><pre><code>@PluginComponent(&quot;exampleService&quot;)
public class ExampleService {
    // 服务实现
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@AutowiredType</h3><p class="text-gray-700">指定依赖注入的类型，特别是在插件中注入主程序Bean时使用。</p><pre><code>@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.PARAMETER, ElementType.CONSTRUCTOR})
public @interface AutowiredType {
    
    /**
     * 注入类型
     */
    Class&lt;?&gt; value();
    
    /**
     * 是否包含主程序Bean
     */
    boolean includeMainBeans() default false;
}</code></pre><h4 class="font-semibold text-gray-900 mt-4">使用示例：</h4><pre><code>@AutowiredType(MainConfiguration.class)
@Autowired
private MainConfigService mainConfigService;</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">@PluginRestController</h3><p class="text-gray-700">专门用于插件的REST控制器，自动添加插件路径前缀。</p><pre><code>@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@RestController
@RequestMapping
public @interface PluginRestController {
    
    /**
     * 请求映射路径
     */
    String[] value() default {};
    
    /**
     * 是否启用插件路径前缀
     */
    boolean enablePluginPath() default true;
}</code></pre><h4 class="font-semibold text-gray-900 mt-4">使用示例：</h4><pre><code>@PluginRestController(&quot;/example&quot;)
public class ExampleController {
    // 控制器实现
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件上下文</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginContextHolder</h3><p class="text-gray-700">提供插件上下文的访问接口。</p><pre><code>public class PluginContextHolder {
    
    /**
     * 获取当前插件ID
     */
    public static String getCurrentPluginId()
    
    /**
     * 获取当前插件信息
     */
    public static PluginInfo getCurrentPluginInfo()
    
    /**
     * 获取当前插件ClassLoader
     */
    public static ClassLoader getCurrentClassLoader()
    
    /**
     * 获取插件Bean
     */
    public static &lt;T&gt; T getBean(String name, Class&lt;T&gt; type)
    
    /**
     * 设置插件上下文
     */
    public static void setPluginContext(PluginContext context)
    
    /**
     * 清除插件上下文
     */
    public static void clearPluginContext()
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件信息</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginInfo</h3><p class="text-gray-700">描述插件的基本信息。</p><pre><code>public class PluginInfo {
    
    /**
     * 插件ID
     */
    private String id;
    
    /**
     * 插件名称
     */
    private String name;
    
    /**
     * 插件版本
     */
    private String version;
    
    /**
     * 插件描述
     */
    private String description;
    
    /**
     * 插件入口类
     */
    private String bootstrapClass;
    
    /**
     * 插件作者
     */
    private String author;
    
    /**
     * 插件依赖
     */
    private List&lt;PluginDependency&gt; dependencies;
    
    /**
     * 插件配置
     */
    private Map&lt;String, Object&gt; configuration;
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginState</h3><p class="text-gray-700">描述插件的当前状态。</p><pre><code>public enum PluginState {
    
    /**
     * 未解析
     */
    UNPARSED,
    
    /**
     * 已解析
     */
    PARSED,
    
    /**
     * 已加载
     */
    LOADED,
    
    /**
     * 已启动
     */
    STARTED,
    
    /**
     * 已停止
     */
    STOPPED,
    
    /**
     * 已卸载
     */
    UNLOADED,
    
    /**
     * 启动失败
     */
    STARTED_FAILURE,
    
    /**
     * 停止失败
     */
    STOPPED_FAILURE,
    
    /**
     * 卸载失败
     */
    UNLOADED_FAILURE
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件事件</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginLifecycleEvent</h3><p class="text-gray-700">插件生命周期事件。</p><pre><code>public class PluginLifecycleEvent extends ApplicationEvent {
    
    /**
     * 插件ID
     */
    private String pluginId;
    
    /**
     * 插件状态
     */
    private PluginState state;
    
    /**
     * 插件信息
     */
    private PluginInfo pluginInfo;
    
    /**
     * 异常信息（如果有）
     */
    private Exception exception;
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginConfigurationChangeEvent</h3><p class="text-gray-700">插件配置变更事件。</p><pre><code>public class PluginConfigurationChangeEvent extends PluginLifecycleEvent {
    
    /**
     * 配置键
     */
    private String key;
    
    /**
     * 旧值
     */
    private Object oldValue;
    
    /**
     * 新值
     */
    private Object newValue;
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">插件操作</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginResult</h3><p class="text-gray-700">插件操作结果封装类。</p><pre><code>public class PluginResult {
    
    /**
     * 是否成功
     */
    private boolean success;
    
    /**
     * 结果代码
     */
    private int code;
    
    /**
     * 结果消息
     */
    private String message;
    
    /**
     * 插件信息
     */
    private PluginInfo pluginInfo;
    
    /**
     * 异常信息
     */
    private Exception exception;
    
    /**
     * 创建成功结果
     */
    public static PluginResult success(PluginInfo pluginInfo)
    
    /**
     * 创建失败结果
     */
    public static PluginResult failure(String message)
    public static PluginResult failure(int code, String message)
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">工具类</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginUser</h3><p class="text-gray-700">提供插件用户操作的工具类。</p><pre><code>public class PluginUser {
    
    /**
     * 获取Bean
     */
    public static &lt;T&gt; T getBean(String name, Class&lt;T&gt; type)
    public static &lt;T&gt; T getBean(Class&lt;T&gt; type)
    
    /**
     * 获取主程序Bean
     */
    public static &lt;T&gt; T getMainBean(String name, Class&lt;T&gt; type)
    public static &lt;T&gt; T getMainBean(Class&lt;T&gt; type)
    
    /**
     * 是否包含Bean
     */
    public static boolean containsBean(String name)
    
    /**
     * 获取配置文件属性
     */
    public static String getProperty(String key)
    public static &lt;T&gt; T getProperty(String key, Class&lt;T&gt; type)
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginClassLoaderUtils</h3><p class="text-gray-700">插件类加载器工具类。</p><pre><code>public class PluginClassLoaderUtils {
    
    /**
     * 加载插件类
     */
    public static Class&lt;?&gt; loadClass(String pluginId, String className)
    
    /**
     * 获取插件资源
     */
    public static URL getResource(String pluginId, String resourcePath)
    
    /**
     * 获取插件资源输入流
     */
    public static InputStream getResourceAsStream(String pluginId, String resourcePath)
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">异常类</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">PluginException</h3><p class="text-gray-700">插件框架的基础异常类。</p><pre><code>public class PluginException extends RuntimeException {
    
    /**
     * 错误码
     */
    private String errorCode;
    
    /**
     * 错误参数
     */
    private Object[] args;
    
    public PluginException(String message)
    public PluginException(String message, Throwable cause)
    public PluginException(String errorCode, String message)
    public PluginException(String errorCode, String message, Object... args)
    
    /**
     * 获取错误码
     */
    public String getErrorCode()
    
    /**
     * 获取错误参数
     */
    public Object[] getArgs()
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">REST API 端点</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件管理接口</h3><div class="overflow-x-auto"><table class="min-w-full"><thead><tr class="bg-gray-50"><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">方法</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">路径</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GET</td><td class="px-6 py-4 text-sm text-gray-500">/api/plugins</td><td class="px-6 py-4 text-sm text-gray-500">获取所有插件列表</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GET</td><td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}</td><td class="px-6 py-4 text-sm text-gray-500">获取指定插件信息</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">POST</td><td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}/start</td><td class="px-6 py-4 text-sm text-gray-500">启动插件</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">POST</td><td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}/stop</td><td class="px-6 py-4 text-sm text-gray-500">停止插件</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">POST</td><td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}/reload</td><td class="px-6 py-4 text-sm text-gray-500">重载插件</td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DELETE</td><td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}</td><td class="px-6 py-4 text-sm text-gray-500">卸载插件</td></tr></tbody></table></div></div></section>`,10)])])}const eg=dt(Xd,[["render",tg]]),ng={},sg={class:"space-y-8"};function ig(t,e){return k(),N("div",sg,[...e[0]||(e[0]=[nt(`<div><h1 class="text-4xl font-bold text-gray-900 mb-4">示例项目</h1><p class="text-lg text-gray-600 mb-8"> 通过实际的代码示例，了解如何在项目中使用 Brick BootKit SpringBoot 框架。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">官方示例</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">示例项目地址</h3><p class="text-gray-700"> 官方提供了一个完整的示例项目，展示了如何使用框架的各种特性： </p><div class="bg-blue-50 border-l-4 border-blue-400 p-4"><p class="text-blue-700"><strong>GitHub: </strong><a href="https://github.com/v18268185209/brick-bootkit-springboot-demo.git" target="_blank" class="underline hover:text-blue-800"> https://github.com/v18268185209/brick-bootkit-springboot-demo.git </a></p></div><p class="text-gray-600 text-sm"> 包含完整的主程序和插件示例，覆盖了开发、生产环境的使用场景。 </p></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">基础示例</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">主程序完整示例</h3><h4 class="font-semibold text-gray-900">1. pom.xml 依赖配置</h4><pre><code>&lt;project&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;springboot-demo&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;
    
    &lt;name&gt;springboot-demo&lt;/name&gt;
    &lt;description&gt;Spring Boot 3.5.5最小框架示例&lt;/description&gt;
    
    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;3.5.5&lt;/version&gt;
        &lt;relativePath/&gt;
    &lt;/parent&gt;
    
    &lt;properties&gt;
        &lt;java.version&gt;17&lt;/java.version&gt;
    &lt;/properties&gt;
    
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;io.micrometer&lt;/groupId&gt;
            &lt;artifactId&gt;micrometer-registry-prometheus&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-core&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-common&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-bootstrap&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
            &lt;optional&gt;true&lt;/optional&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
    
    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
                &lt;version&gt;4.0.1&lt;/version&gt;
                &lt;configuration&gt;
                    &lt;mode&gt;main&lt;/mode&gt;
                    &lt;mainConfig&gt;
                        &lt;mainClass&gt;com.example.demo.DemoApplication&lt;/mainClass&gt;
                        &lt;packageType&gt;jar&lt;/packageType&gt;
                    &lt;/mainConfig&gt;
                &lt;/configuration&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;repackage&lt;/goal&gt;
                        &lt;/goals&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;</code></pre><h4 class="font-semibold text-gray-900">2. application.yml 配置</h4><pre><code>server:
  port: 8080

spring:
  application:
    name: brick-bootkit-example

plugin:
  # 运行模式：dev(开发) 或 prod(生产)
  runMode: dev
  
  # 主程序扫描包名
  mainPackage: com.example.main
  
  # 插件路径
  pluginPath:
    - D://project/plugins
    - ./plugins-dev
  
  # 是否启用插件ID作为路径前缀
  enablePluginIdRestPathPrefix: true
  
  # 插件管理接口端口
  management:
    port: 8081

# 日志配置
logging:
  level:
    com.zqzqq.bootkits: DEBUG
    com.example: INFO</code></pre><h4 class="font-semibold text-gray-900">3. 主程序启动类</h4><pre><code>import com.zqzqq.bootkits.loader.launcher.SpringMainBootstrap;
import com.zqzqq.bootkits.loader.launcher.SpringBootstrap;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MainApplication implements SpringBootstrap {

    public static void main(String[] args) {
        SpringMainBootstrap.launch(MainApplication.class, args);
    }

    @Override
    public void run(String[] args) throws Exception {
        SpringApplication.run(MainApplication.class, args);
    }
    
    @GetMapping(&quot;/&quot;)
    public String home() {
        return &quot;主程序运行中，插件框架已启动&quot;;
    }
    
    @GetMapping(&quot;/plugins&quot;)
    public String plugins() {
        return &quot;插件管理界面可以通过 /actuator/plugins 访问&quot;;
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件完整示例</h3><h4 class="font-semibold text-gray-900">1. 插件 pom.xml 配置</h4><pre><code>&lt;project&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;3.5.5&lt;/version&gt;
        &lt;relativePath/&gt;
    &lt;/parent&gt;

    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;springboot-monitor-plus&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;
    
    &lt;name&gt;springboot-monitor-plus&lt;/name&gt;
    &lt;description&gt;Spring Boot 3.5.5 springboot-monitor-plus&lt;/description&gt;
    
    &lt;properties&gt;
        &lt;java.version&gt;17&lt;/java.version&gt;
    &lt;/properties&gt;
    
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.example&lt;/groupId&gt;
            &lt;artifactId&gt;springboot-demo&lt;/artifactId&gt;
            &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
            &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
            &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
    
    &lt;build&gt;
        &lt;resources&gt;
            &lt;resource&gt;
                &lt;directory&gt;src/main/resources&lt;/directory&gt;
                &lt;includes&gt;
                    &lt;include&gt;**/**&lt;/include&gt;
                &lt;/includes&gt;
            &lt;/resource&gt;
        &lt;/resources&gt;

        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
                &lt;version&gt;4.0.0&lt;/version&gt;
                &lt;configuration&gt;
                    &lt;mode&gt;dev&lt;/mode&gt;
                    &lt;pluginInfo&gt;
                        &lt;id&gt;monitorPlugins&lt;/id&gt;
                        &lt;bootstrapClass&gt;com.example.demo.monitor.MonitorPlugin&lt;/bootstrapClass&gt;
                        &lt;version&gt;0.0.1&lt;/version&gt;
                        &lt;provider&gt;jove&lt;/provider&gt;
                        &lt;description&gt;monitor,提供demo&lt;/description&gt;
                    &lt;/pluginInfo&gt;
                    &lt;prodConfig&gt;
                        &lt;packageType&gt;jar&lt;/packageType&gt;
                    &lt;/prodConfig&gt;
                    &lt;includeSystemScope&gt;true&lt;/includeSystemScope&gt;
                &lt;/configuration&gt;

                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;repackage&lt;/goal&gt;
                        &lt;/goals&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;</code></pre><h4 class="font-semibold text-gray-900">2. 插件启动类</h4><pre><code>package com.example.demo.monitor;

import com.zqzqq.bootkits.bootstrap.SpringPluginBootstrap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class MonitorPlugin extends SpringPluginBootstrap {

    public static void main(String[] args) {
        new MonitorPlugin().run(args);
    }
}</code></pre><h4 class="font-semibold text-gray-900">3. 插件控制器</h4><pre><code>package com.example.demo.monitor.controller;

import com.example.demo.monitor.service.MonitorService;
import com.zqzqq.bootkits.core.isolation.ResourceQuota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping(&quot;/hello/&quot;)
public class HelloController {

    @Autowired
    MonitorService monitorService;

    @GetMapping(&quot;hello&quot;)
    public String hello(String name) {
        return &quot;hello &quot; + name;
    }

    @GetMapping(&quot;getTotalSystemMemory&quot;)
    public Map&lt;String, ResourceQuota&gt; getTotalSystemMemory() {
        return monitorService.getQuotaManager().getAllPluginQuotas();
    }
}</code></pre><h4 class="font-semibold text-gray-900">4. 插件服务类</h4><pre><code>package com.example.demo.monitor.service;

import com.zqzqq.bootkits.core.isolation.QuotaManager;
import com.zqzqq.bootkits.core.isolation.ResourceQuota;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MonitorService {

    @Getter
    private QuotaManager quotaManager;

    @PostConstruct
    public void init() {
        ResourceQuota resourceQuota = ResourceQuota.strictQuota();
        quotaManager = new QuotaManager(resourceQuota);
        log.info(&quot;quotaManager init&quot;);
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">运行和测试</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">如何运行示例</h3><h4 class="font-semibold text-gray-900">1. 克隆示例项目</h4><pre><code>git clone https://github.com/v18268185209/brick-bootkit-springboot-demo.git
cd brick-bootkit-springboot-demo/springboot3demo</code></pre><h4 class="font-semibold text-gray-900">2. 构建主程序</h4><pre><code>mvn clean package -pl springboot-demo -am</code></pre><h4 class="font-semibold text-gray-900">3. 构建插件</h4><pre><code>cd plugins/monitor-plus
mvn clean package</code></pre><h4 class="font-semibold text-gray-900">4. 启动主程序</h4><pre><code>cd springboot-demo
java -jar target/springboot-demo-0.0.1-SNAPSHOT.jar</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">测试插件接口</h3><p class="text-gray-700">启动成功后，您可以通过以下方式测试插件：</p><h4 class="font-semibold text-gray-900">1. 简单Hello接口</h4><div class="bg-gray-50 border border-gray-200 rounded-lg p-4"><p class="text-sm text-gray-600 mb-2">浏览器访问或使用curl:</p><code class="text-blue-600"> http://localhost:8081/plugins/monitorPlugins/hello/hello?name=你好 </code><p class="text-sm text-gray-600 mt-2">返回结果: &quot;hello 你好&quot;</p></div><h4 class="font-semibold text-gray-900">2. 系统资源监控接口</h4><div class="bg-gray-50 border border-gray-200 rounded-lg p-4"><p class="text-sm text-gray-600 mb-2">浏览器访问或使用curl:</p><code class="text-blue-600"> http://localhost:8081/plugins/monitorPlugins/hello/getTotalSystemMemory </code><p class="text-sm text-gray-600 mt-2">返回JSON格式的系统资源配额信息</p></div><h4 class="font-semibold text-gray-900">3. 管理API测试</h4><pre><code># 查看已安装的插件
curl http://localhost:8081/api/plugins

# 查看插件状态
curl http://localhost:8081/api/plugins/monitorPlugins

# 查看插件详细信息
curl http://localhost:8081/api/plugins/monitorPlugins/info</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">高级示例</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">带数据库的插件示例</h3><h4 class="font-semibold text-gray-900">1. 数据库配置 (插件内 application.yml)</h4><pre><code>spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password: 
  
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true

plugin:
  feature:
    enabled: true
    cache-ttl: 300</code></pre><h4 class="font-semibold text-gray-900">2. JPA 实体类</h4><pre><code>import javax.persistence.*;

@Entity
@Table(name = &quot;plugin_products&quot;)
@PluginComponent
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String sku;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Column(length = 1000)
    private String description;
    
    @Column(nullable = false)
    private Boolean active = true;
    
    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    // ... other getters and setters
}</code></pre><h4 class="font-semibold text-gray-900">3. JPA Repository</h4><pre><code>import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@PluginComponent
public interface ProductRepository extends JpaRepository&lt;Product, Long&gt; {
    
    Product findBySku(String sku);
    
    List&lt;Product&gt; findByActiveTrue();
    
    List&lt;Product&gt; findByNameContainingIgnoreCase(String name);
}</code></pre><h4 class="font-semibold text-gray-900">4. 数据库服务类</h4><pre><code>import com.zqzqq.bootkits.core.annotation.PluginComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@PluginComponent
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    public List&lt;Product&gt; getAllProducts() {
        return productRepository.findByActiveTrue();
    }
    
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }
    
    public Product getProductBySku(String sku) {
        return productRepository.findBySku(sku);
    }
    
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">调用外部服务的插件</h3><pre><code>import com.zqzqq.bootkits.core.annotation.PluginComponent;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;

@Service
@PluginComponent
public class ExternalApiService {
    
    @Value(&quot;\${external.api.base-url}&quot;)
    private String baseUrl;
    
    @Autowired
    private RestTemplate restTemplate;
    
    public ExternalUser getUserInfo(String userId) {
        String url = baseUrl + &quot;/users/&quot; + userId;
        return restTemplate.getForObject(url, ExternalUser.class);
    }
    
    public List&lt;ExternalUser&gt; searchUsers(String keyword) {
        String url = baseUrl + &quot;/users/search?keyword=&quot; + keyword;
        ExternalUser[] users = restTemplate.getForObject(url, ExternalUser[].class);
        return Arrays.asList(users != null ? users : new ExternalUser[0]);
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">插件拦截器示例</h3><pre><code>import com.zqzqq.bootkits.core.context.PluginContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;

@Component
@PluginComponent
public class LoggingInterceptor implements HandlerInterceptor {
    
    @Override
    public boolean preHandle(HttpServletRequest request, 
                           HttpServletResponse response, 
                           Object handler) throws Exception {
        
        String pluginId = PluginContextHolder.getCurrentPluginId();
        String uri = request.getRequestURI();
        
        System.out.println(String.format(
            &quot;[%s] Plugin %s handling request: %s at %s&quot;,
            Thread.currentThread().getName(),
            pluginId, 
            uri, 
            LocalDateTime.now()
        ));
        
        // 可以在这里添加访问控制逻辑
        return true;
    }
    
    @Override
    public void postHandle(HttpServletRequest request, 
                          HttpServletResponse response, 
                          Object handler, 
                          ModelAndView modelAndView) throws Exception {
        // 请求处理后的逻辑
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, 
                               HttpServletResponse response, 
                               Object handler, 
                               Exception ex) throws Exception {
        // 请求完成后的清理逻辑
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">集成示例</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">与 Spring Security 集成</h3><pre><code>import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

@Service
@PluginComponent
public class SecurityService {
    
    public String getCurrentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth instanceof JwtAuthenticationToken) {
            JwtAuthenticationToken jwtAuth = (JwtAuthenticationToken) auth;
            return jwtAuth.getToken().getClaim(&quot;user_id&quot;);
        }
        return &quot;anonymous&quot;;
    }
    
    public boolean hasPermission(String permission) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth != null &amp;&amp; auth.getAuthorities().stream()
                .anyMatch(a -&gt; a.getAuthority().equals(permission));
    }
}</code></pre></div><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">与消息队列集成</h3><pre><code>import com.zqzqq.bootkits.core.annotation.PluginComponent;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;

@Service
@PluginComponent
public class MessageService {
    
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    @Value(&quot;\${rabbitmq.exchange}&quot;)
    private String exchange;
    
    @Value(&quot;\${rabbitmq.queue}&quot;)
    private String queue;
    
    public void sendMessage(String message) {
        rabbitTemplate.convertAndSend(exchange, &quot;plugin.message&quot;, message);
    }
    
    @RabbitListener(queues = &quot;#{@queue}&quot;)
    public void handleMessage(String message) {
        System.out.println(&quot;插件接收消息: &quot; + message);
        // 处理消息逻辑
    }
}</code></pre></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">构建和部署</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">开发环境构建</h3><h4 class="font-semibold text-gray-900 mb-2">主程序构建：</h4><pre><code class="bash"># 构建主程序
mvn clean install

# 运行主程序
java -jar target/main-application-1.0.0.jar</code></pre><h4 class="font-semibold text-gray-900 mb-2">插件构建：</h4><pre><code class="bash"># 构建插件（开发模式）
mvn clean package

# 插件将被输出到 target/ 目录
# 插件ID将自动解析为 artifactId-version</code></pre></div><div class="card"><h3 class="text-lg font-semibold text-gray-900 mb-3">生产环境构建</h3><h4 class="font-semibold text-gray-900 mb-2">插件打包配置：</h4><pre><code>&lt;mode&gt;prod&lt;/mode&gt;
&lt;pluginInfo&gt;
    &lt;id&gt;monitorPlugins&lt;/id&gt;
    &lt;bootstrapClass&gt;com.example.plugin.UserServicePlugin&lt;/bootstrapClass&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
    &lt;requires&gt;
        &lt;require&gt;
            &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-bootstrap&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/require&gt;
    &lt;/requires&gt;
&lt;/pluginInfo&gt;</code></pre><h4 class="font-semibold text-gray-900 mb-2">生产部署：</h4><pre><code class="bash"># 插件将被打包为 jar 文件
# 可以通过 REST API 或管理界面安装

curl -X POST http://localhost:8081/api/plugins/install \\
     -H &quot;Content-Type: application/json&quot; \\
     -d &#39;{&quot;filePath&quot;: &quot;/path/to/monitorPlugins-1.0.0.jar&quot;}&#39;</code></pre></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">测试插件</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">API 测试示例</h3><h4 class="font-semibold text-gray-900">1. 检查插件状态</h4><pre><code class="bash"># 获取所有插件状态
curl http://localhost:8081/api/plugins

# 获取特定插件信息
curl http://localhost:8081/api/plugins/monitorPlugins</code></pre><h4 class="font-semibold text-gray-900">2. 测试插件接口</h4><pre><code class="bash"># 获取用户列表
curl http://localhost:8080/plugins/monitorPlugins/user

# 创建用户
curl -X POST http://localhost:8080/plugins/monitorPlugins/user \\
     -H &quot;Content-Type: application/json&quot; \\
     -d &#39;{&quot;name&quot;: &quot;王五&quot;, &quot;email&quot;: &quot;wangwu@example.com&quot;}&#39;

# 更新用户
curl -X PUT http://localhost:8080/plugins/monitorPlugins/user/1 \\
     -H &quot;Content-Type: application/json&quot; \\
     -d &#39;{&quot;name&quot;: &quot;王五&quot;, &quot;email&quot;: &quot;wangwu2@example.com&quot;}&#39;

# 删除用户
curl -X DELETE http://localhost:8080/plugins/monitorPlugins/user/1</code></pre><h4 class="font-semibold text-gray-900">3. 插件生命周期管理</h4><pre><code class="bash"># 启动插件
curl -X POST http://localhost:8081/api/plugins/monitorPlugins/start

# 停止插件
curl -X POST http://localhost:8081/api/plugins/monitorPlugins/stop

# 重载插件
curl -X POST http://localhost:8081/api/plugins/monitorPlugins/reload

# 卸载插件
curl -X DELETE http://localhost:8081/api/plugins/monitorPlugins</code></pre></div></section>`,8)])])}const lg=dt(ng,[["render",ig]]),og="/me.jpg",rg="/me-public.jpg",ag="/chatroom.jpg",cg="/logo.svg",ug={name:"Contact",data(){return{showImageModal:!1,modalImageSrc:"",modalImageAlt:""}},methods:{openImageModal(t,e){this.modalImageSrc=t,this.modalImageAlt=e,this.showImageModal=!0,document.body.style.overflow="hidden"},closeImageModal(){this.showImageModal=!1,this.modalImageSrc="",this.modalImageAlt="",document.body.style.overflow="auto"},handleEscapeKey(t){t.key==="Escape"&&this.closeImageModal()}},mounted(){document.addEventListener("keydown",this.handleEscapeKey)},beforeUnmount(){document.removeEventListener("keydown",this.handleEscapeKey)}},dg={class:"space-y-8"},gg={class:"space-y-6"},pg={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},mg={class:"card text-center"},fg={class:"mb-4"},hg={class:"card text-center"},xg={class:"mb-4"},yg={class:"card text-center"},bg={class:"mb-4"},vg={class:"card text-center"},qg={class:"mb-4"},Sg={class:"relative max-w-2xl max-h-full flex flex-col items-center"},Pg={class:"bg-white rounded-lg overflow-hidden max-w-full max-h-[80vh]"},Ig=["src","alt"],Cg={class:"text-center mt-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg"},wg={class:"text-white text-base"};function Eg(t,e,n,s,i,l){return k(),N("div",dg,[e[18]||(e[18]=nt('<div><h1 class="text-4xl font-bold text-gray-900 mb-4">联系我们</h1><p class="text-lg text-gray-600 mb-8"> 如果您在使用过程中遇到问题，或者希望参与项目贡献，欢迎通过以下方式联系我们。 </p></div><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">联系方式</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"><div class="card text-center"><div class="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></div><h3 class="text-lg font-semibold text-gray-900 mb-2">GitHub</h3><p class="text-gray-600 mb-4">提交Issue或参与项目开发</p><a href="https://github.com/v18268185209/brick-bootkit-springboot" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium"> 访问GitHub → </a></div><div class="card text-center"><div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg></div><h3 class="text-lg font-semibold text-gray-900 mb-2">技术交流群</h3><p class="text-gray-600 mb-4">加入微信群参与讨论</p><p class="text-sm text-gray-500">群号见下方二维码</p></div></div></section>',2)),h("section",gg,[e[15]||(e[15]=h("h2",{class:"text-3xl font-bold text-gray-900"},"二维码",-1)),e[16]||(e[16]=h("p",{class:"text-gray-600"}," 扫描以下二维码快速联系我们或加入技术交流群，点击图片可放大查看。 ",-1)),h("div",pg,[h("div",mg,[e[7]||(e[7]=h("h3",{class:"text-lg font-semibold text-gray-900 mb-4"},"作者微信",-1)),h("div",fg,[h("img",{src:og,alt:"作者微信二维码",class:"w-48 h-48 mx-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200",onClick:e[0]||(e[0]=o=>l.openImageModal("/me.jpg","作者微信二维码"))})]),e[8]||(e[8]=h("p",{class:"text-gray-600 text-sm"},"扫码添加作者微信",-1))]),h("div",hg,[e[9]||(e[9]=h("h3",{class:"text-lg font-semibold text-gray-900 mb-4"},"公众号",-1)),h("div",xg,[h("img",{src:rg,alt:"公众号二维码",class:"w-48 h-48 mx-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200",onClick:e[1]||(e[1]=o=>l.openImageModal("/me-public.jpg","公众号二维码"))})]),e[10]||(e[10]=h("p",{class:"text-gray-600 text-sm"},"关注公众号获取最新资讯",-1))]),h("div",yg,[e[11]||(e[11]=h("h3",{class:"text-lg font-semibold text-gray-900 mb-4"},"技术交流群",-1)),h("div",bg,[h("img",{src:ag,alt:"技术交流群二维码",class:"w-48 h-48 mx-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200",onClick:e[2]||(e[2]=o=>l.openImageModal("/chatroom.jpg","技术交流群二维码"))})]),e[12]||(e[12]=h("p",{class:"text-gray-600 text-sm"},"扫码加入技术交流群",-1))]),h("div",vg,[e[13]||(e[13]=h("h3",{class:"text-lg font-semibold text-gray-900 mb-4"},"项目标志",-1)),h("div",qg,[h("img",{src:cg,alt:"Brick BootKit Logo",class:"w-64 h-auto mx-auto rounded-lg shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-200",style:{"max-height":"80px","object-fit":"contain"},onClick:e[3]||(e[3]=o=>l.openImageModal("/logo.svg","Brick BootKit Logo"))})]),e[14]||(e[14]=h("p",{class:"text-gray-600 text-sm"},"Brick BootKit 官方标志",-1))])])]),i.showImageModal?(k(),N("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",onClick:e[6]||(e[6]=(...o)=>l.closeImageModal&&l.closeImageModal(...o))},[h("div",Sg,[h("button",{onClick:e[4]||(e[4]=(...o)=>l.closeImageModal&&l.closeImageModal(...o)),class:"absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-10"},[...e[17]||(e[17]=[h("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])]),h("div",Pg,[h("img",{src:i.modalImageSrc,alt:i.modalImageAlt,class:"w-full h-full object-contain",style:{"max-height":"70vh"},onClick:e[5]||(e[5]=wa(()=>{},["stop"]))},null,8,Ig)]),h("div",Cg,[h("p",wg,at(i.modalImageAlt),1)])])])):Zt("",!0),e[19]||(e[19]=nt('<section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">参与贡献</h2><div class="card space-y-4"><h3 class="text-xl font-semibold text-gray-900">我们欢迎任何形式的贡献</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-gray-900 mb-2">🐛 报告Bug</h4><p class="text-gray-600 text-sm mb-2"> 如果您发现了问题，请在GitHub上提交Issue，详细描述问题现象和重现步骤。 </p><a href="https://github.com/v18268185209/brick-bootkit-springboot/issues" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm"> 提交Bug报告 → </a></div><div><h4 class="font-semibold text-gray-900 mb-2">💡 功能建议</h4><p class="text-gray-600 text-sm mb-2"> 我们很乐意听取您的功能建议和改进意见，请在GitHub上提交Feature Request。 </p><a href="https://github.com/v18268185209/brick-bootkit-springboot/issues" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm"> 提出功能建议 → </a></div><div><h4 class="font-semibold text-gray-900 mb-2">📖 完善文档</h4><p class="text-gray-600 text-sm mb-2"> 帮助完善项目文档，添加示例或改进现有文档内容。 </p><a href="https://github.com/v18268185209/brick-bootkit-springboot/pulls" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm"> 完善文档 → </a></div><div><h4 class="font-semibold text-gray-900 mb-2">🔧 提交代码</h4><p class="text-gray-600 text-sm mb-2"> 修复Bug、添加功能或优化代码，我们欢迎各种形式的代码贡献。 </p><a href="https://github.com/v18268185209/brick-bootkit-springboot/pulls" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm"> 提交代码 → </a></div></div></div></section><section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900">致谢</h2><div class="card space-y-4"><p class="text-gray-700"> Brick BootKit的发展离不开社区的支持和贡献者的努力。特别感谢： </p><ul class="space-y-2 text-gray-700"><li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>所有提交Bug报告的用户</span></li><li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>提供功能建议和改进意见的开发者</span></li><li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>参与代码贡献的开发者和测试者</span></li><li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>使用并推荐Brick BootKit的团队和个人</span></li></ul><div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6"><p class="text-blue-700"><strong>特别感谢</strong>：感谢所有对Brick BootKit项目给予支持和建议的用户， 您的反馈帮助我们不断完善和改进这个框架。 </p></div></div></section>',2))])}const Rg=dt(ug,[["render",Eg]]),_g="/zq-logo.svg",Ag="/yu-logo.svg",kg={name:"EnterpriseUsers"},Tg={class:"space-y-8"},Mg={class:"space-y-6"},Ng={class:"bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center"},Dg={class:"flex flex-col sm:flex-row gap-4 justify-center"};function Lg(t,e,n,s,i,l){const o=dn("router-link");return k(),N("div",Tg,[e[3]||(e[3]=nt('<div><h1 class="text-4xl font-bold text-gray-900 mb-4">使用企业</h1><p class="text-lg text-gray-600 mb-8"> 以下企业正在使用 Brick BootKit SpringBoot 框架构建其业务系统。 我们感谢这些企业对开源项目的支持与信任。 </p></div><section class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"><div class="card text-center"><div class="mb-6"><img src="'+_g+'" alt="周口智汇企业咨询有限公司" class="w-64 h-auto mx-auto"></div><h3 class="text-xl font-semibold text-gray-900 mb-2">周口智汇企业咨询有限公司</h3><p class="text-gray-600 mb-4"> 专业的企业咨询服务公司，致力于为企业提供全方位的数字化转型解决方案。 </p><div class="flex items-center justify-center space-x-4"><a href="https://www.zqzqq.com" target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> 访问官网 </a></div></div><div class="card text-center"><div class="mb-6"><img src="'+Ag+'" alt="遇财（杭州）科技有限公司" class="w-64 h-auto mx-auto"></div><h3 class="text-xl font-semibold text-gray-900 mb-2">遇财（杭州）科技有限公司</h3><p class="text-gray-600 mb-4"> 专注于企业科技、智能创新的科技公司，运用前沿科技技术为客户提供优质的软件开发服务。 </p><div class="flex items-center justify-center"><span class="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-lg"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> 官网建设中 </span></div></div></div></section>',2)),h("section",Mg,[h("div",Ng,[e[1]||(e[1]=h("h2",{class:"text-3xl font-bold text-gray-900 mb-4"},"加入我们的企业用户名单",-1)),e[2]||(e[2]=h("p",{class:"text-gray-700 mb-6 max-w-2xl mx-auto"}," 如果您的企业正在使用 Brick BootKit SpringBoot 框架，并且希望展示在企业用户名单中， 欢迎通过邮件或微信联系我们。 ",-1)),h("div",Dg,[rt(o,{to:"/contact",class:"inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"},{default:ne(()=>[...e[0]||(e[0]=[h("svg",{class:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})],-1),Re(" 联系我们 ",-1)])]),_:1})])])]),e[4]||(e[4]=nt('<section class="space-y-6"><h2 class="text-3xl font-bold text-gray-900 text-center">为什么选择 Brick BootKit？</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="card text-center"><div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h3 class="text-lg font-semibold text-gray-900 mb-2">高效开发</h3><p class="text-gray-600">插件式架构显著提升开发效率，支持模块化部署和维护</p></div><div class="card text-center"><div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><h3 class="text-lg font-semibold text-gray-900 mb-2">安全可靠</h3><p class="text-gray-600">类隔离机制确保系统稳定性，有效避免依赖冲突</p></div><div class="card text-center"><div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div><h3 class="text-lg font-semibold text-gray-900 mb-2">开源免费</h3><p class="text-gray-600">完全开源，无版权费用，支持企业级应用场景</p></div></div></section>',1))])}const Og=dt(kg,[["render",Lg]]),Bg=[{path:"/",component:du,name:"home"},{path:"/introduction",component:fu,name:"introduction"},{path:"/quickstart",component:qu,name:"quickstart"},{path:"/project-structure",component:Cu,name:"project-structure"},{path:"/configuration",component:_u,name:"configuration"},{path:"/plugins",component:Mu,name:"plugins"},{path:"/plugins-packaging",component:Ou,name:"plugins-packaging"},{path:"/dynamic-deployment",component:Vu,name:"dynamic-deployment"},{path:"/plugin-lifecycle",component:Fu,name:"plugin-lifecycle"},{path:"/configuration-management",component:Ju,name:"configuration-management"},{path:"/performance-monitoring",component:Zu,name:"performance-monitoring"},{path:"/security",component:sd,name:"security"},{path:"/api",component:eg,name:"api"},{path:"/annotations",component:rd,name:"annotations"},{path:"/config-parameters",component:dd,name:"config-parameters"},{path:"/examples",component:lg,name:"examples"},{path:"/changelog",component:qd,name:"changelog"},{path:"/faq",component:Yd,name:"faq"},{path:"/contact",component:Rg,name:"contact"},{path:"/enterprise-users",component:Og,name:"enterprise-users"}],Ug=Oc({history:fc(),routes:Bg}),ro=_a(Yc);ro.use(Ug);ro.mount("#app");
