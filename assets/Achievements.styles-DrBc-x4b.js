import{d as m}from"./ui-vendor-BVv7PGpf.js";import{a4 as H}from"./index-CQputUX_.js";import{r as D,a as A,b as J}from"./carousel-vendor-Ek1eulE_.js";import{r as P}from"./index-Chjiymov.js";import{r as h}from"./form-vendor-8JSUuxVu.js";var v={},R;function Q(){if(R)return v;R=1,v.__esModule=!0,v.default=void 0;var t=n(D()),e=n(P()),i=n(A());function n(s){return s&&s.__esModule?s:{default:s}}const r=({animate:s=!0,className:l="",layout:o="2-columns",lineColor:u="#FFF",children:c})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",u),t.default.createElement("div",{className:(0,i.default)(l,"vertical-timeline",{"vertical-timeline--animate":s,"vertical-timeline--two-columns":o==="2-columns","vertical-timeline--one-column-left":o==="1-column"||o==="1-column-left","vertical-timeline--one-column-right":o==="1-column-right"})},c));r.propTypes={children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]).isRequired,className:e.default.string,animate:e.default.bool,layout:e.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:e.default.string};var a=r;return v.default=a,v}var b={};function C(){return C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},C.apply(this,arguments)}function X(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,M(t,e)}function M(t,e){return M=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},M(t,e)}function Y(t,e){if(t==null)return{};var i={},n=Object.keys(t),r,a;for(a=0;a<n.length;a++)r=n[a],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}var N=new Map,k=new WeakMap,j=0,F=void 0;function Z(t){F=t}function ee(t){return t?(k.has(t)||(j+=1,k.set(t,j.toString())),k.get(t)):"0"}function te(t){return Object.keys(t).sort().filter(function(e){return t[e]!==void 0}).map(function(e){return e+"_"+(e==="root"?ee(t.root):t[e])}).toString()}function re(t){var e=te(t),i=N.get(e);if(!i){var n=new Map,r,a=new IntersectionObserver(function(s){s.forEach(function(l){var o,u=l.isIntersecting&&r.some(function(c){return l.intersectionRatio>=c});t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(o=n.get(l.target))==null||o.forEach(function(c){c(u,l)})})},t);r=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:a,elements:n},N.set(e,i)}return i}function S(t,e,i,n){if(i===void 0&&(i={}),n===void 0&&(n=F),typeof window.IntersectionObserver>"u"&&n!==void 0){var r=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var a=re(i),s=a.id,l=a.observer,o=a.elements,u=o.get(t)||[];return o.has(t)||o.set(t,u),u.push(e),l.observe(t),function(){u.splice(u.indexOf(e),1),u.length===0&&(o.delete(t),l.unobserve(t)),o.size===0&&(l.disconnect(),N.delete(s))}}var ie=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function q(t){return typeof t.children!="function"}var T=(function(t){X(e,t);function e(n){var r;return r=t.call(this,n)||this,r.node=null,r._unobserveCb=null,r.handleNode=function(a){r.node&&(r.unobserve(),!a&&!r.props.triggerOnce&&!r.props.skip&&r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=a||null,r.observeNode()},r.handleChange=function(a,s){a&&r.props.triggerOnce&&r.unobserve(),q(r.props)||r.setState({inView:a,entry:s}),r.props.onChange&&r.props.onChange(a,s)},r.state={inView:!!n.initialInView,entry:void 0},r}var i=e.prototype;return i.componentDidUpdate=function(r){(r.rootMargin!==this.props.rootMargin||r.root!==this.props.root||r.threshold!==this.props.threshold||r.skip!==this.props.skip||r.trackVisibility!==this.props.trackVisibility||r.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(!(!this.node||this.props.skip)){var r=this.props,a=r.threshold,s=r.root,l=r.rootMargin,o=r.trackVisibility,u=r.delay,c=r.fallbackInView;this._unobserveCb=S(this.node,this.handleChange,{threshold:a,root:s,rootMargin:l,trackVisibility:o,delay:u},c)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!q(this.props)){var r=this.state,a=r.inView,s=r.entry;return this.props.children({inView:a,entry:s,ref:this.handleNode})}var l=this.props,o=l.children,u=l.as,c=Y(l,ie);return h.createElement(u||"div",C({ref:this.handleNode},c),o)},e})(h.Component);T.displayName="InView";T.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ne(t){var e=t===void 0?{}:t,i=e.threshold,n=e.delay,r=e.trackVisibility,a=e.rootMargin,s=e.root,l=e.triggerOnce,o=e.skip,u=e.initialInView,c=e.fallbackInView,d=h.useRef(),y=h.useState({inView:!!u}),p=y[0],w=y[1],E=h.useCallback(function(V){d.current!==void 0&&(d.current(),d.current=void 0),!o&&V&&(d.current=S(V,function(x,g){w({inView:x,entry:g}),g.isIntersecting&&l&&d.current&&(d.current(),d.current=void 0)},{root:s,rootMargin:a,threshold:i,trackVisibility:r,delay:n},c))},[Array.isArray(i)?i.toString():i,s,a,l,o,r,c,n]);h.useEffect(function(){!d.current&&p.entry&&!l&&!o&&w({inView:!!u})});var f=[E,p.inView,p.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const ae=Object.freeze(Object.defineProperty({__proto__:null,InView:T,default:T,defaultFallbackInView:Z,observe:S,useInView:ne},Symbol.toStringTag,{value:"Module"})),le=J(ae);var $;function oe(){if($)return b;$=1,b.__esModule=!0,b.default=void 0;var t=r(D()),e=r(P()),i=r(A()),n=le;function r(l){return l&&l.__esModule?l:{default:l}}const a=({children:l="",className:o="",contentArrowStyle:u=null,contentStyle:c=null,date:d="",dateClassName:y="",icon:p=null,iconClassName:w="",iconOnClick:E=null,onTimelineElementClick:f=null,iconStyle:V=null,id:x="",position:g="",style:W=null,textClassName:B="",intersectionObserverProps:L={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:_=!1,shadowSize:K="small"})=>t.default.createElement(n.InView,L,({inView:O,ref:G})=>t.default.createElement("div",{ref:G,id:x,className:(0,i.default)(o,"vertical-timeline-element",{"vertical-timeline-element--left":g==="left","vertical-timeline-element--right":g==="right","vertical-timeline-element--no-children":l===""}),style:W},t.default.createElement(t.default.Fragment,null,t.default.createElement("span",{style:V,onClick:E,className:(0,i.default)(w,"vertical-timeline-element-icon",`shadow-size-${K}`,{"bounce-in":O||_,"is-hidden":!(O||_)})},p),t.default.createElement("div",{style:c,onClick:f,className:(0,i.default)(B,"vertical-timeline-element-content",{"bounce-in":O||_,"is-hidden":!(O||_)})},t.default.createElement("div",{style:u,className:"vertical-timeline-element-content-arrow"}),l,t.default.createElement("span",{className:(0,i.default)(y,"vertical-timeline-element-date")},d)))));a.propTypes={children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]),className:e.default.string,contentArrowStyle:e.default.shape({}),contentStyle:e.default.shape({}),date:e.default.node,dateClassName:e.default.string,icon:e.default.element,iconClassName:e.default.string,iconStyle:e.default.shape({}),iconOnClick:e.default.func,onTimelineElementClick:e.default.func,id:e.default.string,position:e.default.string,style:e.default.shape({}),textClassName:e.default.string,visible:e.default.bool,shadowSize:e.default.string,intersectionObserverProps:e.default.shape({root:e.default.object,rootMargin:e.default.string,threshold:e.default.number,triggerOnce:e.default.bool})};var s=a;return b.default=s,b}var I,z;function se(){return z||(z=1,I={VerticalTimeline:Q().default,VerticalTimelineElement:oe().default}),I}var U=se();const he=m.section`
  padding: 1rem 4rem;
  background-image: url(${H});
  background-repeat: no-repeat;
  background-position: 4rem 2rem;
  text-align: ${({isRTL:t})=>t?"right":"left"};
  @media (max-width: 768px) {
    padding: 1rem;
    background-image: none;
  }
`,pe=m.div`
  max-width: 98%;
  margin: 0 auto;
`,ge=m.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--primary-light);
`,ve=m(U.VerticalTimeline)`
  &::before {
    background: #fbae42;
  }
`,be=m(U.VerticalTimelineElement)`
  &.vertical-timeline-element--work {
    .vertical-timeline-element-content {
      padding: 0rem 1rem;
      margin: 0 3rem;
      color: black;
      background-color: transparent;
      box-shadow: 0 0 0 0 transparent;
      text-align: ${({isRtl:t})=>t?"right":"left"};
      @media (max-width: 768px) {
        ${({isRtl:t})=>t?"margin-right: 3rem;":"margin-left: 3rem;"};
        ${({isRtl:t})=>t?"margin-left: 0;":"margin-right: 0;"};
      }
    }

    .vertical-timeline-element-content-arrow {
      display: none;
    }

    .vertical-timeline-element-icon {
      background: white;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover;
      width: 3rem;
      height: 3rem;
      border-radius: 0;
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,ye=m.h3`
  font-size: 1.05rem;
  font-weight: bold;
  margin: 1rem 0;
  &.vertical-timeline-element-title {
    font-size: 1.6rem;
    font-weight: bold;
  }
`,we=m.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
  padding: 0 2rem;
  img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0;
  }
`;export{pe as C,he as S,ge as T,ve as a,be as b,ye as c,we as d};
