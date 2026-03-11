import{j as t}from"./map-vendor-CkCCoZy4.js";import{r as m,R as N}from"./form-vendor-8JSUuxVu.js";import{e as B,aH as Y,L as O,d as F,h as H,T as W}from"./index-CQputUX_.js";import{d as g,a as A}from"./ui-vendor-BVv7PGpf.js";import{f as q}from"./formatDate-DZ24sZIr.js";import{L as G,u as U}from"./tanstack-vendor-DVbpgvBY.js";import{u as R}from"./vendor-8UwSOQY7.js";import{P as K,H as V,C as J,g as X}from"./news.styles-CTkhLrp5.js";import{S as Z,a as _,D as Q,b as ee,c as te,d as ne}from"./SearchInput-Dq9RJiWF.js";import{f as ie}from"./react-icons-vendor-D75jEhkE.js";import{c as re,d as D}from"./Gallery.styles-DL8ktXf3.js";import{B as oe}from"./Breadcrumbs-CzB9j62p.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-BKWaKWrj.js";const C=g.div`
  display: flex;
  flex-direction: row
  align-items: center;
  background: var(--background-light);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 16px;
  margin-bottom: 24px;
  width: 100%;
  transition: box-shadow 0.2s;
  cursor: pointer;
  direction: ${n=>n.isRTL?"rtl":"ltr"};
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-bottom: 12px;
    border-radius: 8px;
  }
`,ae=g.img`
  aspect-ratio: 4 / 3;
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 16px;
  transition: transform 0.2s ease;
  
  ${C}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
    margin-left: 0;
    margin-bottom: 12px;
    order: -1;
  }

  @media (max-width: 480px) {
    height: 150px;
    margin-bottom: 10px;
    border-radius: 6px;
  }
`,se=g.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  direction: ${n=>n.isRTL?"rtl":"ltr"};
  @media (max-width: 768px) {
    width: 100%;
  }
`,le=g.div`
  color: #8c8c8c;
  font-size: 13px;
  margin-bottom: 4px;
  text-align: ${n=>n.isRTL?"right":"left"};
  margin-right: ${n=>n.isRTL?"1rem":"0"};
  margin-left: ${n=>n.isRTL?"0":"1rem"};

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 4px;
  }
`,de=g.div`
  color: var(--primary-color);
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 6px;
  text-align: ${n=>n.isRTL?"right":"left"};
  margin-right: ${n=>n.isRTL?"1rem":"0"};
  margin-left: ${n=>n.isRTL?"0":"1rem"};
  line-height: 1.4;
  transition: text-decoration 0.2s ease;
  
  ${C}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 6px;
    line-height: 1.6;
  }
`,me=g.div`
  color: #000;
  font-size: 18px;
  text-align: ${n=>n.isRTL?"right":"left"};
  margin-right: ${n=>n.isRTL?"1rem":"0"};
  margin-left: ${n=>n.isRTL?"0":"1rem"};
  line-height: 1.6;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  text-overflow: ellipsis;
  
  /* Make DangerouslyInnerHTML wrapper transparent to line-clamp */
  .dangerously-inner-html {
    display: contents;
  }
  
  /* Style paragraphs as normal paragraphs */
  .dangerously-inner-html p {
    display: inline;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: normal;
    line-height: inherit;
    color: inherit;
  }
  
  /* Convert other block elements to inline for proper line-clamp behavior */
  .dangerously-inner-html div,
  .dangerously-inner-html h1,
  .dangerously-inner-html h2,
  .dangerously-inner-html h3,
  .dangerously-inner-html h4,
  .dangerously-inner-html h5,
  .dangerously-inner-html h6,
  .dangerously-inner-html ul,
  .dangerously-inner-html ol,
  .dangerously-inner-html li {
    display: inline;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: normal;
  }
  
  /* Remove line breaks and list markers */
  .dangerously-inner-html br {
    display: none;
  }
  
  .dangerously-inner-html ul,
  .dangerously-inner-html ol {
    list-style: none;
  }
  
  /* Ensure text elements flow inline with normal styling */
  .dangerously-inner-html span,
  .dangerously-inner-html a,
  .dangerously-inner-html strong,
  .dangerously-inner-html b,
  .dangerously-inner-html em,
  .dangerously-inner-html i {
    display: inline;
    font-weight: inherit;
    font-style: inherit;
  }
  
  /* Normal link styling */
  .dangerously-inner-html a {
    color: inherit;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.7;
    -webkit-line-clamp: 3;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.8;
    -webkit-line-clamp: 4;
  }
`,ce=({image:n,date:p,title:i,description:a,id:f})=>{const{t:x,i18n:s}=R(),h=s.resolvedLanguage==="ar"?"ar-EG":"en-US",l=s.resolvedLanguage==="ar";f||console.warn("News item has no ID, cannot navigate to details");const b=w=>(w||"").toString().trim().toLowerCase().replace(/[^\u0600-\u06FFa-z0-9]+/gi,"-").replace(/^-+|-+$/g,""),u=p?new Date(p).toISOString():"";return t.jsx(G,{to:`/news/${b(i)}/${f}`,style:{textDecoration:"none",color:"inherit"},"aria-label":i,children:t.jsxs(C,{isRTL:l,children:[t.jsx(ae,{src:n,alt:i,loading:"lazy",itemProp:"image",width:400,height:300}),t.jsxs(se,{isRTL:l,children:[t.jsxs(le,{isRTL:l,children:[t.jsx("span",{style:{fontWeight:"bold",color:"#000"},children:x("news.publishedAt","تاريخ النشر :")})," ",t.jsx("time",{itemProp:"datePublished",dateTime:u,children:q(p,h)})]}),t.jsx(de,{isRTL:l,itemProp:"headline",children:i}),t.jsx(me,{isRTL:l,itemProp:"description",children:t.jsx(B,{html:a})})]})]})})},Te=()=>{const{t:n,i18n:p}=R(),i=p.resolvedLanguage==="ar",[a,f]=m.useState(1),[x,s]=m.useState([]),[h,l]=m.useState([]),[b,u]=m.useState(!0),[w,y]=m.useState(!1),[r,z]=m.useState(null),j=m.useRef(null),$=[{id:2025,label:"2025"},{id:2024,label:"2024"},{id:2023,label:"2023"},{id:2022,label:"2022"},{id:2021,label:"2021"},{id:2020,label:"2020"}],{data:o,isLoading:L,error:I}=U({queryKey:["news",{page:a,size:2}],queryFn:()=>Y({page:a,size:2}),staleTime:300*1e3,cacheTime:1800*1e3});m.useEffect(()=>{const e=d=>{j.current&&!j.current.contains(d.target)&&y(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const S=e=>{if(!e){s(h);return}const d=h.filter(v=>new Date(v.createdOn).getFullYear()===e);s(d)},T=e=>{z(e),S(e),y(!1)};N.useEffect(()=>{o?.data?.items?a===1?(l(o.data.items),s(o.data.items),u(o.data.items.length>0)):(l(e=>[...e,...o.data.items]),s(e=>[...e,...o.data.items]),u(o.data.items.length>0)):o?.data&&a>1&&u(!1)},[o,a]);const P=()=>{f(e=>e+1)},E=e=>{if(!e.trim()){S(r);return}let d=h;r&&(d=h.filter(c=>new Date(c.createdOn).getFullYear()===r));const v=d.filter(c=>{const k=i?c.title.toLowerCase().includes(e.toLowerCase()):c.titleEn.toLowerCase().includes(e.toLowerCase()),M=i?c.content.toLowerCase().includes(e.toLowerCase()):c.contentEn.toLowerCase().includes(e.toLowerCase());return k||M});s(v)};return L&&a===1?t.jsxs(O,{children:[t.jsx(F,{}),t.jsx("p",{children:n("common.loading")})]}):I?t.jsx("div",{children:n("error")}):t.jsxs(H,{isRTL:i,children:[t.jsx(oe,{}),t.jsxs(K,{itemScope:!0,itemType:"https://schema.org/Blog",children:[t.jsxs(V,{children:[t.jsx(W,{isRTL:i,children:n("news.title")}),t.jsxs(Z,{children:[t.jsx(_,{isRTL:i,onSearch:E}),t.jsxs(Q,{style:{gap:"2px"},isRTL:i,children:[t.jsxs(ee,{children:[n("media.sortBy"),":"]}),t.jsxs(te,{ref:j,children:[t.jsxs(ne,{isRTL:i,onClick:()=>y(!w),children:[r?r.toString():n("common.all"),t.jsx(ie,{style:{fontSize:18}})]}),t.jsxs(re,{open:w,children:[t.jsx(D,{isRTL:i,onClick:()=>T(null),style:{backgroundColor:r?"transparent":"rgba(255,255,255,0.1)",fontWeight:r?"normal":"bold"},children:n("common.all")}),$.map(e=>t.jsx(D,{isRTL:i,onClick:()=>T(e.id),style:{backgroundColor:r===e.id?"rgba(255,255,255,0.1)":"transparent",fontWeight:r===e.id?"bold":"normal"},children:e.label},e.id))]})]})]})]})]}),t.jsx(J,{role:"feed",children:x.length>0?x.map((e,d)=>t.jsx("article",{itemScope:!0,itemType:"https://schema.org/BlogPosting",itemProp:"blogPost",children:t.jsx(ce,{item:e,id:e.id,image:"https://lifemakers.org/Public/"+e.imageUrl,title:i?e.title:e.titleEn,date:e.createdOn,description:i?e.content:e.contentEn})},`${e.id}-${d}`)):t.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",fontWeight:"bold",color:"var(--primary-light)",margin:"0 auto"},children:n("news.noNewsFound")})}),b&&x.length>0&&t.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"0 auto"},children:t.jsx(X,{as:A.button,whileHover:{scale:1.05},whileTap:{scale:.95},onClick:P,disabled:L,type:"button",children:n(L?"common.loading":"news.seeMore")})})]})]})};export{Te as default};
