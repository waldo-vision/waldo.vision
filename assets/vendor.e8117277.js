var $,u,W,q,P,I,R,B,T={},z=[],ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(e,_){for(var t in _)e[t]=_[t];return e}function V(e){var _=e.parentNode;_&&_.removeChild(e)}function F(e,_,t){var o,l,n,i={};for(n in _)n=="key"?o=_[n]:n=="ref"?l=_[n]:i[n]=_[n];if(arguments.length>2&&(i.children=arguments.length>3?$.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)i[n]===void 0&&(i[n]=e.defaultProps[n]);return E(e,i,o,l,null)}function E(e,_,t,o,l){var n={type:e,props:_,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++W:l};return l==null&&u.vnode!=null&&u.vnode(n),n}function me(){return{current:null}}function H(e){return e.children}function S(e,_){this.props=e,this.context=_}function C(e,_){if(_==null)return e.__?C(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?C(e):null}function G(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return G(e)}}function N(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!D.__r++||R!==u.debounceRendering)&&((R=u.debounceRendering)||I)(D)}function D(){for(var e;D.__r=P.length;)e=P.sort(function(_,t){return _.__v.__b-t.__v.__b}),P=[],e.some(function(_){var t,o,l,n,i,a;_.__d&&(i=(n=(t=_).__v).__e,(a=t.__P)&&(o=[],(l=b({},n)).__v=n.__v+1,j(a,n,l,t.__n,a.ownerSVGElement!==void 0,n.__h!=null?[i]:null,o,i==null?C(n):i,n.__h),_e(o,n),n.__e!=i&&G(n)))})}function J(e,_,t,o,l,n,i,a,p,h){var r,v,f,c,s,x,d,y=o&&o.__k||z,m=y.length;for(t.__k=[],r=0;r<_.length;r++)if((c=t.__k[r]=(c=_[r])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?E(null,c,null,null,c):Array.isArray(c)?E(H,{children:c},null,null,null):c.__b>0?E(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=t,c.__b=t.__b+1,(f=y[r])===null||f&&c.key==f.key&&c.type===f.type)y[r]=void 0;else for(v=0;v<m;v++){if((f=y[v])&&c.key==f.key&&c.type===f.type){y[v]=void 0;break}f=null}j(e,c,f=f||T,l,n,i,a,p,h),s=c.__e,(v=c.ref)&&f.ref!=v&&(d||(d=[]),f.ref&&d.push(f.ref,null,c),d.push(v,c.__c||s,c)),s!=null?(x==null&&(x=s),typeof c.type=="function"&&c.__k===f.__k?c.__d=p=K(c,p,e):p=X(e,c,f,y,s,p),typeof t.type=="function"&&(t.__d=p)):p&&f.__e==p&&p.parentNode!=e&&(p=C(f))}for(t.__e=x,r=m;r--;)y[r]!=null&&(typeof t.type=="function"&&y[r].__e!=null&&y[r].__e==t.__d&&(t.__d=C(o,r+1)),ne(y[r],y[r]));if(d)for(r=0;r<d.length;r++)te(d[r],d[++r],d[++r])}function K(e,_,t){for(var o,l=e.__k,n=0;l&&n<l.length;n++)(o=l[n])&&(o.__=e,_=typeof o.type=="function"?K(o,_,t):X(t,o,o,l,o.__e,_));return _}function Q(e,_){return _=_||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(t){Q(t,_)}):_.push(e)),_}function X(e,_,t,o,l,n){var i,a,p;if(_.__d!==void 0)i=_.__d,_.__d=void 0;else if(t==null||l!=n||l.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(l),i=null;else{for(a=n,p=0;(a=a.nextSibling)&&p<o.length;p+=2)if(a==l)break e;e.insertBefore(l,n),i=n}return i!==void 0?i:l.nextSibling}function ge(e,_,t,o,l){var n;for(n in t)n==="children"||n==="key"||n in _||U(e,n,null,t[n],o);for(n in _)l&&typeof _[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||t[n]===_[n]||U(e,n,_[n],t[n],o)}function Y(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||ye.test(_)?t:t+"px"}function U(e,_,t,o,l){var n;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(_ in o)t&&_ in t||Y(e.style,_,"");if(t)for(_ in t)o&&t[_]===o[_]||Y(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")n=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+n]=t,t?o||e.addEventListener(_,n?ee:Z,n):e.removeEventListener(_,n?ee:Z,n);else if(_!=="dangerouslySetInnerHTML"){if(l)_=_.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function Z(e){this.l[e.type+!1](u.event?u.event(e):e)}function ee(e){this.l[e.type+!0](u.event?u.event(e):e)}function j(e,_,t,o,l,n,i,a,p){var h,r,v,f,c,s,x,d,y,m,A,k=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,a=_.__e=t.__e,_.__h=null,n=[a]),(h=u.__b)&&h(_);try{e:if(typeof k=="function"){if(d=_.props,y=(h=k.contextType)&&o[h.__c],m=h?y?y.props.value:h.__:o,t.__c?x=(r=_.__c=t.__c).__=r.__E:("prototype"in k&&k.prototype.render?_.__c=r=new k(d,m):(_.__c=r=new S(d,m),r.constructor=k,r.render=be),y&&y.sub(r),r.props=d,r.state||(r.state={}),r.context=m,r.__n=o,v=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=b({},r.__s)),b(r.__s,k.getDerivedStateFromProps(d,r.__s))),f=r.props,c=r.state,v)k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k.getDerivedStateFromProps==null&&d!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(d,m),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(d,r.__s,m)===!1||_.__v===t.__v){r.props=d,r.state=r.__s,_.__v!==t.__v&&(r.__d=!1),r.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(w){w&&(w.__=_)}),r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(d,r.__s,m),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,c,s)})}r.context=m,r.props=d,r.state=r.__s,(h=u.__r)&&h(_),r.__d=!1,r.__v=_,r.__P=e,h=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(o=b(b({},o),r.getChildContext())),v||r.getSnapshotBeforeUpdate==null||(s=r.getSnapshotBeforeUpdate(f,c)),A=h!=null&&h.type===H&&h.key==null?h.props.children:h,J(e,Array.isArray(A)?A:[A],_,t,o,l,n,i,a,p),r.base=_.__e,_.__h=null,r.__h.length&&i.push(r),x&&(r.__E=r.__=null),r.__e=!1}else n==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=ke(t.__e,_,t,o,l,n,i,p);(h=u.diffed)&&h(_)}catch(w){_.__v=null,(p||n!=null)&&(_.__e=a,_.__h=!!p,n[n.indexOf(a)]=null),u.__e(w,_,t)}}function _e(e,_){u.__c&&u.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(o){o.call(t)})}catch(o){u.__e(o,t.__v)}})}function ke(e,_,t,o,l,n,i,a){var p,h,r,v=t.props,f=_.props,c=_.type,s=0;if(c==="svg"&&(l=!0),n!=null){for(;s<n.length;s++)if((p=n[s])&&(p===e||(c?p.localName==c:p.nodeType==3))){e=p,n[s]=null;break}}if(e==null){if(c===null)return document.createTextNode(f);e=l?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,f.is&&f),n=null,a=!1}if(c===null)v===f||a&&e.data===f||(e.data=f);else{if(n=n&&$.call(e.childNodes),h=(v=t.props||T).dangerouslySetInnerHTML,r=f.dangerouslySetInnerHTML,!a){if(n!=null)for(v={},s=0;s<e.attributes.length;s++)v[e.attributes[s].name]=e.attributes[s].value;(r||h)&&(r&&(h&&r.__html==h.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(ge(e,f,v,l,a),r)_.__k=[];else if(s=_.props.children,J(e,Array.isArray(s)?s:[s],_,t,o,l&&c!=="foreignObject",n,i,n?n[0]:t.__k&&C(t,0),a),n!=null)for(s=n.length;s--;)n[s]!=null&&V(n[s]);a||("value"in f&&(s=f.value)!==void 0&&(s!==e.value||c==="progress"&&!s)&&U(e,"value",s,v.value,!1),"checked"in f&&(s=f.checked)!==void 0&&s!==e.checked&&U(e,"checked",s,v.checked,!1))}return e}function te(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(o){u.__e(o,t)}}function ne(e,_,t){var o,l;if(u.unmount&&u.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||te(o,null,_)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){u.__e(n,_)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&ne(o[l],_,typeof e.type!="function");t||e.__e==null||V(e.__e),e.__e=e.__d=void 0}function be(e,_,t){return this.constructor(e,t)}function re(e,_,t){var o,l,n;u.__&&u.__(e,_),l=(o=typeof t=="function")?null:t&&t.__k||_.__k,n=[],j(_,e=(!o&&t||_).__k=F(H,null,[e]),l||T,T,_.ownerSVGElement!==void 0,!o&&t?[t]:l?null:_.firstChild?$.call(_.childNodes):null,n,!o&&t?t:l?l.__e:_.firstChild,o),_e(n,e)}function oe(e,_){re(e,_,oe)}function xe(e,_,t){var o,l,n,i=b({},e.props);for(n in _)n=="key"?o=_[n]:n=="ref"?l=_[n]:i[n]=_[n];return arguments.length>2&&(i.children=arguments.length>3?$.call(arguments,2):t),E(e.type,i,o||e.key,l||e.ref,null)}function Ce(e,_){var t={__c:_="__cC"+B++,__:e,Consumer:function(o,l){return o.children(l)},Provider:function(o){var l,n;return this.getChildContext||(l=[],(n={})[_]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&l.some(N)},this.sub=function(i){l.push(i);var a=i.componentWillUnmount;i.componentWillUnmount=function(){l.splice(l.indexOf(i),1),a&&a.call(i)}}),o.children}};return t.Provider.__=t.Consumer.contextType=t}$=z.slice,u={__e:function(e,_){for(var t,o,l;_=_.__;)if((t=_.__c)&&!t.__)try{if((o=t.constructor)&&o.getDerivedStateFromError!=null&&(t.setState(o.getDerivedStateFromError(e)),l=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e}},W=0,q=function(e){return e!=null&&e.constructor===void 0},S.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof e=="function"&&(e=e(b({},t),this.props)),e&&b(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),N(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),N(this))},S.prototype.render=H,P=[],I=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,B=0;var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",render:re,hydrate:oe,createElement:F,h:F,Fragment:H,createRef:me,get isValidElement(){return q},Component:S,cloneElement:xe,createContext:Ce,toChildArray:Q,get options(){return u}});function Pe(e){if(e.__esModule)return e;var _=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(_,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})}),_}var Ee=Pe($e),He,Se,le=Ee,Ae=0;function ie(e,_,t,o,l){var n,i,a={};for(i in _)i=="ref"?n=_[i]:a[i]=_[i];var p={type:e,props:a,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ae,__source:o,__self:l};if(typeof e=="function"&&(n=e.defaultProps))for(i in n)a[i]===void 0&&(a[i]=n[i]);return le.options.vnode&&le.options.vnode(p),p}Se=ie,He=ie;var ce,g,ue,fe=0,O=[],se=u.__b,ae=u.__r,pe=u.diffed,he=u.__c,de=u.unmount;function we(e,_){u.__h&&u.__h(g,e,fe||_),fe=0;var t=g.__H||(g.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Ue(e,_){var t=we(ce++,3);!u.__s&&De(t.__H,_)&&(t.__=e,t.__H=_,g.__H.__h.push(t))}function Te(){O.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(M),e.__H.__h.forEach(L),e.__H.__h=[]}catch(_){e.__H.__h=[],u.__e(_,e.__v)}}),O=[]}u.__b=function(e){g=null,se&&se(e)},u.__r=function(e){ae&&ae(e),ce=0;var _=(g=e.__c).__H;_&&(_.__h.forEach(M),_.__h.forEach(L),_.__h=[])},u.diffed=function(e){pe&&pe(e);var _=e.__c;_&&_.__H&&_.__H.__h.length&&(O.push(_)!==1&&ue===u.requestAnimationFrame||((ue=u.requestAnimationFrame)||function(t){var o,l=function(){clearTimeout(n),ve&&cancelAnimationFrame(o),setTimeout(t)},n=setTimeout(l,100);ve&&(o=requestAnimationFrame(l))})(Te)),g=null},u.__c=function(e,_){_.some(function(t){try{t.__h.forEach(M),t.__h=t.__h.filter(function(o){return!o.__||L(o)})}catch(o){_.some(function(l){l.__h&&(l.__h=[])}),_=[],u.__e(o,t.__v)}}),he&&he(e,_)},u.unmount=function(e){de&&de(e);var _=e.__c;if(_&&_.__H)try{_.__H.__.forEach(M)}catch(t){u.__e(t,_.__v)}};var ve=typeof requestAnimationFrame=="function";function M(e){var _=g;typeof e.__c=="function"&&e.__c(),g=_}function L(e){var _=g;e.__c=e.__(),g=_}function De(e,_){return!e||e.length!==_.length||_.some(function(t,o){return t!==e[o]})}export{re as S,He as a,Se as j,Ue as y};
