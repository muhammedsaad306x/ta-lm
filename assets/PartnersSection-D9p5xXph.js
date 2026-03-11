import{j as e}from"./map-vendor-CkCCoZy4.js";import{d as s}from"./ui-vendor-BVv7PGpf.js";import{S as P}from"./carousel-vendor-Ek1eulE_.js";import{r as d}from"./form-vendor-8JSUuxVu.js";import{P as W}from"./PartnerCard-CwEvAFfd.js";import{l as z,L as E,d as M,o as $}from"./index-Dv1SXuG7.js";import{u as B}from"./tanstack-vendor-DVbpgvBY.js";import{u as A}from"./vendor-8UwSOQY7.js";import"./media-vendor-b5BVGNQh.js";import"./react-icons-vendor-D75jEhkE.js";const D=s(P)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,I=s.section`
  width: 100%;
  padding: 2.5rem 4rem 2rem 4rem;
  background: #fff;
  @media (max-width: 768px) {
    padding: 2.5rem 2rem 2rem 2rem;
  }
`,N=s.h2`
  text-align: center;
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #222;
`,R=s.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
`;s.img`
  max-height: 60px;
  max-width: 140px;
  width: auto;
  height: auto;
  margin: 0 1.5rem;
  align-self: center;
  object-fit: contain;
  filter: grayscale(0.2);
  transition: filter 0.2s;
  &:hover {
    filter: grayscale(0) drop-shadow(0 2px 8px rgba(0,0,0,0.08));
  }
  @media (max-width: 900px) {
    max-width: 90px;
    max-height: 40px;
    margin: 0 0.7rem;
  }
`;const G=s.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  @media (max-width: 900px) {
    gap: 0
  }
`,m=s.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  &:hover {
    background: transparent;
    box-shadow: none;
  }
  svg {
    color: var(--primary-light);
    width: 1.3rem;
    height: 1.3rem;
  }
`,b=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,S=s.button`
  width: ${({$active:i})=>i?"2.2rem":"0.95rem"};
  height: 0.95rem;
  border-radius: ${({$active:i})=>i?"0.6rem":"50%"};
  border: none;
  background: ${({$active:i})=>i?"var(--secondary-color)":"#e5e7eb"};
  transition: background 0.2s, width 0.2s, border-radius 0.2s;
  cursor: pointer;
  outline: none;
`;function _(){const[i,h]=d.useState(()=>typeof window<"u"?[window.innerWidth]:[1200]);return d.useEffect(()=>{if(typeof window>"u")return;const c=()=>h([window.innerWidth]);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),i}function Y(){const{t:i,i18n:h}=A(),c=h.resolvedLanguage==="ar",a=d.useRef(),[g,L]=d.useState(0),[p]=_(),x=12,w=1,{data:f,isLoading:T,error:v}=B({queryKey:["partners",{page:w,size:x}],queryFn:()=>z({page:w,size:x}),staleTime:1e3*60*5,keepPreviousData:!0}),o=d.useMemo(()=>f?.data?.items||[],[f]);let n=6;p<=600?n=2:p<=900?n=3:p<=1200&&(n=2);const C={dots:!1,arrows:!1,infinite:o.length>n,speed:500,slidesToShow:n,slidesToScroll:4,autoplay:!0,autoplaySpeed:2500,pauseOnHover:!0,beforeChange:(r,t)=>L(t),responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}}]},l=Math.ceil(o.length/n),k=r=>r*n>=g&&r*n<g+n,j="https://lifemakers.org/Public/",y=d.useMemo(()=>!o||o.length===0?null:{"@context":"https://schema.org","@type":"ItemList",name:i("partners.title"),itemListElement:o.map((r,t)=>({"@type":"ListItem",position:t+1,item:{"@type":"Organization",name:r.name||r.title||void 0,image:r.logoUrl?`${j}${r.logoUrl}`:void 0,url:r.url||r.link||void 0}}))},[o,j,i]);return e.jsxs(I,{itemScope:!0,itemType:"https://schema.org/WebPageElement",children:[e.jsx(N,{as:"h2",itemProp:"name",children:i("partners.title")}),T&&e.jsx(E,{children:e.jsx(M,{})}),v&&e.jsx($,{children:v.message}),o.length>0&&e.jsxs(R,{itemScope:!0,itemType:"https://schema.org/ItemList",itemProp:"hasPart",children:[e.jsx(D,{ref:a,...C,children:o.map((r,t)=>e.jsx("div",{itemScope:!0,itemType:"https://schema.org/ListItem",itemProp:"itemListElement",children:e.jsx(W,{...r,showHoverBar:!1,noShadow:!0})},t))}),e.jsx(G,{children:c?e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>a.current?.slickNext(),"aria-label":"Next Slide",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"var(--primary-light)",strokeWidth:"2.5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})}),l>1&&e.jsx(b,{children:Array.from({length:l}).map((r,t)=>{const u=k(l-1-t);return e.jsx(S,{$active:u,onClick:()=>a.current?.slickGoTo((l-1-t)*n),"aria-label":`Go to slide ${l-t}`},t)})}),e.jsx(m,{onClick:()=>a.current?.slickPrev(),"aria-label":"Previous Slide",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"var(--primary-light)",strokeWidth:"2.5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})})]}):e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>a.current?.slickPrev(),"aria-label":"Previous Slide",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"var(--primary-light)",strokeWidth:"2.5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})}),l>1&&e.jsx(b,{children:Array.from({length:l}).map((r,t)=>{const u=k(t);return e.jsx(S,{$active:u,onClick:()=>a.current?.slickGoTo(t*n),"aria-label":`Go to slide ${t+1}`},t)})}),e.jsx(m,{onClick:()=>a.current?.slickNext(),"aria-label":"Next Slide",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"var(--primary-light)",strokeWidth:"2.5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})})]})})]}),y&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(y)}})]})}export{Y as default};
