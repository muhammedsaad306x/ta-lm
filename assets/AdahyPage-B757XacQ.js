import{j as e}from"./map-vendor-CkCCoZy4.js";import{b as J,L as K,d as X,P as Y,h as Z,C as T}from"./index-Bz-f-rfY.js";import{B as R}from"./Breadcrumbs-CzB9j62p.js";import{t as E,b as I}from"./top-corner-DJrA6mvu.js";import{L as ee,c as te}from"./tanstack-vendor-DVbpgvBY.js";import{r as m}from"./form-vendor-8JSUuxVu.js";import{f as re}from"./react-icons-vendor-D75jEhkE.js";import{d as i}from"./ui-vendor-BVv7PGpf.js";import{u as W}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-DdfYexyz.js";i.section`
  /* Desktop styles */
  padding: 1rem 2rem;
  text-align: ${({isRTL:t})=>t?"right":"left"};
  max-width: 98%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    padding: 0.5rem 0;
    width: 100vw;
    max-width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;i.div`
  /* Desktop styles */
  max-width: 98%;
  margin: 0 auto;

  /* Mobile styles */
  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;const ie=i.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;i.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;
  color: var(--primary-light);
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 1.5rem 0;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 1rem 0;
  }
`;const ae=i.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,oe=i.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: ${({isRTL:t})=>t?"auto":"0"};
  margin-left: ${({isRTL:t})=>t?"0":"auto"};

  @media (max-width: 600px) {
    margin-right: ${({isRTL:t})=>t?"0":"auto"};
    margin-left: ${({isRTL:t})=>t?"auto":"0"};
    margin-top: 1rem;
  }
`,ne=i.div`
  position: relative;
  display: inline-block;
`,de=i.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #222;
  background: #fff;
  border: 2px solid #e0e0e0;
  justify-content: space-between;
  flex-direction: ${({isRTL:t})=>t?"row":"row-reverse"};
  border-radius: 12px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  min-width: 180px;
  text-align: right;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: border 0.2s;
  direction: rtl;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.4rem 0.7rem;
    min-width: 120px;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.5rem;
    min-width: 90px;
    overflow-x: auto;
  }

  &:hover,
  &:focus {
    border: 2px solid #bdbdbd;
    outline: none;
  }
`,se=i.ul`
  display: ${t=>t.open?"block":"none"};
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  min-width: 180px;
  z-index: 2000;
  padding: 0.5rem 0;
  margin: 0;
  list-style: none;
  @media (max-width: 600px) {
    min-width: 120px;
    font-size: 0.95rem;
  }
  @media (max-width: 400px) {
    min-width: 90px;
    font-size: 0.9rem;
    overflow-x: auto;
  }
`,le=i.li`
  padding: 0.7rem 1.2rem;
  color: #222;
  font-size: 1.1rem;
  cursor: pointer;
  text-align: ${({isRTL:t})=>t?"right":"left"};
  direction: ${({isRTL:t})=>t?"rtl":"ltr"};
  transition: background 0.2s;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.5rem 0.7rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.5rem;
  }
  &:hover {
    background: #f5f5f5;
  }
`,me=i.div`
  /* Desktop styles */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 2rem 0;
    gap: 2.5rem;
    width: 100vw;
    max-width: 100vw;
    box-sizing: border-box;
    padding: 0;
  }
`,L=i.div`
  /* Desktop styles */
  width: 80%;
  aspect-ratio: 16/9;
  background: #fff;
  border-radius: 12px;
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    border-radius: 8px;
    padding: 0.25rem;
  }
  @media (max-width: 500px) {
    border-radius: 6px;
    padding: 0.1rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    width: 90vw;
    max-width: 100vw;
    margin: 0;
    border-radius: 4px;
    padding: 0;
    box-sizing: border-box;
  }
`,C=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,pe=i.p`
  font-size: 0.9rem;
  font-weight: 400;

  color: #222;
  margin-top: 1rem;
  text-align: ${({isRTL:t})=>t?"right":"left"};
  direction: ${({isRTL:t})=>t?"rtl":"ltr"};
`,O=i.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: filter 0.3s;
  &:hover {
    ${C} {
      filter: blur(3px);
    }
  }
`,B=i.div`
  position: absolute;
  bottom: 0;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  height: 4rem;
  background: rgba(255, 255, 255, 0.85);
  padding: 0.5rem 1.5rem 0.7rem 1.5rem;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.3s;
  @media (max-width: 480px) {
    padding: 0.4rem 1rem 0.5rem 1rem;
  }
`,F=i.div`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: ${({isLink:t})=>t?"underline":"none"};
  color: ${({isLink:t})=>t?"var(--primary-color)":"#222"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  direction: ${({isRTL:t})=>t?"rtl":"ltr"};
  text-align: ${({isRTL:t})=>t?"right":"left"};
  cursor: ${({isLink:t})=>t?"pointer":"default"};
  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 0.3rem;
  }
`;i.div`
  font-size: 0.7rem;
  color: #444;
  text-align: ${({isRTL:t})=>t?"right":"left"};
  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;i.div`
  /* Desktop styles */

  /* Mobile styles */
  @media (max-width: 480px) {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    width: 100vw;
    margin: 0;
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
  }
`;const _=i.img`
  /* Desktop styles */
  position: absolute;
  top: -6px;
  left: -6px;
  z-index: 1000;
  pointer-events: none;
  max-width: 60px;
  height: auto;

  @media (max-width: 768px) {
    top: -4px;
    left: -4px;
    max-width: 20px;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    top: -8px;
    left: -8px;
    max-width: 12vw;
    min-width: 24px;
  }
`,N=i.img`
  /* Desktop styles */
  position: absolute;
  bottom: -6px;
  right: -6px;
  z-index: 1000;
  pointer-events: none;
  max-width: 60px;
  height: auto;

  @media (max-width: 768px) {
    bottom: -4px;
    right: -4px;
    max-width: 20px;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    bottom: -8px;
    right: -8px;
    max-width: 12vw;
    min-width: 24px;
  }
`,xe=i.button`
  background: transparent;
  border: 1.5px solid var(--primary-color);
  border-radius: 0.75rem;
  color: var(--primary-color);
  font-size: 0.95rem;
  font-family: "Cairo", sans-serif;
  font-weight: 500;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  display: block;
  text-wrap: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: var(--primary-color);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.5rem 1.5rem;
    margin: 1.5rem auto;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    margin: 1rem auto;
    border-width: 1px;
  }
`,G=i.button`
  background-color: ${t=>t.backgroundColor||"#28a745"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  min-width: 80px;
  direction: ${({isRTL:t})=>t?"rtl":"ltr"};
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    min-width: 60px;
  }
`,ce=({title:t,items:d=[],sortOptions:n=[],defaultSort:w="",onItemClick:b,renderItem:g=null,itemsPerPage:h=6,getItemTitle:p=(o,c)=>c==="ar"?o.titleAr:o.titleEn,getItemImage:u=o=>o.imageUrl||o.items?.[0]?.itemUrl,getItemStatus:x=o=>"isSoldOut"in o?o.isSoldOut?"out_of_stock":"available":o.status||"available",imageBaseUrl:v="https://lifemakers.org/Public/",isRTL:a=!1,volunteer:f=!1,opportunity:l=!1})=>{const{t:o,i18n:c}=W(),[y,j]=m.useState(!1),[k,U]=m.useState(w||n[0]),z=m.useRef(null),[$,H]=m.useState(h),S=m.useMemo(()=>[...d||[]].sort((r,s)=>k.id===n[0].id?s.createdOn-r.createdOn:r.createdOn-s.createdOn),[d,k,n]);m.useEffect(()=>{if(!y)return;function r(s){z.current&&!z.current.contains(s.target)&&j(!1)}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[y]);const P=r=>r==="out_of_stock"||r==="unavailable"?a?"نفدت الكميه":"Out of Stock":a?"متاح":"Available",Q=r=>r==="out_of_stock"||r==="unavailable"?"#dc3545":"#28a745",V=(r,s)=>{if(g)return g(r,s);const q=()=>{l||b?.(r)},M=x(r),D=P(M),A=Q(M);return l?e.jsx(ee,{to:"/vol-opportunities-details/$id",params:{id:r.id||s},style:{textDecoration:"none",color:"inherit"},children:e.jsxs(L,{children:[e.jsx(_,{src:E,alt:"topCorner"}),e.jsx(O,{className:"media-blur",children:e.jsx(C,{src:`${v}${u(r)}`,alt:p(r,c.resolvedLanguage),isRTL:a})}),e.jsx(N,{src:I,alt:"bottomCorner"}),e.jsxs(B,{className:"media-overlay",animate:!0,children:[e.jsx("div",{style:{textAlign:a?"right":"left"},children:e.jsx(F,{isRTL:a,isLink:!!r.link,children:p(r,c.resolvedLanguage)})}),e.jsx(G,{style:{backgroundColor:A},isRTL:a,children:D})]})]})},s):e.jsx(e.Fragment,{children:e.jsxs(L,{onClick:q,children:[e.jsx(_,{src:E,alt:"topCorner"}),e.jsxs(O,{className:"media-blur",children:[e.jsx(C,{src:`${v}${u(r)}`,alt:"media",isRTL:a}),f&&e.jsxs(pe,{isRTL:a,children:[o("media.volunteerName"),":"," ",e.jsx("span",{style:{fontWeight:700},children:a?r.titleAr:r.titleEn})]})]}),e.jsx(N,{src:I,alt:"bottomCorner"}),e.jsxs(B,{className:"media-overlay",animate:l||f,children:[e.jsx("div",{style:{textAlign:a?"right":"left"},children:e.jsx(F,{onClick:()=>r.link&&window.open(r.link,"_blank"),isRTL:a,isLink:!!r.link,children:p(r,c.resolvedLanguage)})})," ",e.jsx(G,{style:{backgroundColor:A},isRTL:a,children:D})]})]},s)})};return e.jsxs(e.Fragment,{children:[e.jsxs(ae,{isRTL:a,children:[e.jsx(ie,{children:t}),n.length>0&&e.jsxs(oe,{isRTL:a,children:[e.jsxs("span",{style:{color:"#888",fontSize:"1rem",fontWeight:500},children:[o("media.sortBy"),":"]}),e.jsxs(ne,{ref:z,children:[e.jsxs(de,{isRTL:a,onClick:()=>j(r=>!r),children:[n.find(r=>r.id===k)?.label||n[0].label,e.jsx(re,{style:{fontSize:18}})]}),e.jsx(se,{open:y,children:n.map(r=>e.jsx(le,{isRTL:a,onClick:()=>{U(r.id),j(!1)},children:r.label},r.id))})]})]})]}),S.length>0?e.jsx(me,{children:S.slice(0,$).map(V)}):o("common.noData"),$<d.length&&e.jsx(xe,{onClick:()=>H(r=>r+h),children:o("media.viewMore")})]})},Ce=()=>{const{t,i18n:d}=W(),n=d.resolvedLanguage==="ar",w=te(),{data:b=[],isLoading:g,error:h}=J({page:1,size:100,filter:{campaignType:4}}),p=b||[],u=[{id:1,label:t("media.latestToOldest")},{id:2,label:t("media.oldestToLatest")}];return g?e.jsx(e.Fragment,{children:e.jsxs(K,{children:[e.jsx(X,{}),e.jsx("p",{children:t("common.loading")})]})}):h?e.jsx("div",{children:t("error.loadingProjects")}):e.jsxs(e.Fragment,{children:[e.jsx(Y,{title:d.resolvedLanguage==="ar"?"الاضاحى | صناع الحياة":"Adahy | Life Makers",description:d.resolvedLanguage==="ar"?"تصفح اضاحى وحملات صناع الحياة.":"Explore the Life Makers Adahy and campaigns.",lang:d.resolvedLanguage,openGraph:{ogImage:{ogImage:"",ogImageAlt:d.resolvedLanguage==="ar"?"اضاحى":"Adahy",ogImageWidth:1200,ogImageHeight:630,ogImageType:"image/jpeg"},ogUrl:"https://www.lifemakers.org/adahy"},twitter:{twitterSummaryCard:{summaryCardImage:"",summaryCardImageAlt:d.resolvedLanguage==="ar"?"اضاحى":"Adahy",summaryCardSiteUsername:"LifeMakersOrg"}}}),e.jsx(Z,{isRTL:n,children:e.jsxs(T,{isRTL:n,children:[e.jsx(R,{}),e.jsx(ce,{title:t("adahy.title"),items:p.items||[],sortOptions:u,defaultSort:t("media.latestToOldest"),onItemClick:x=>{const f=(n?(l=>(l||"").toString().trim().toLowerCase().replace(/[^\u0600-\u06FFa-z0-9]+/gi,"-").replace(/^-+|-+$/g,""))(x.title):(l=>(l||"").toString().trim().toLowerCase().replace(/[^a-z0-9]+/gi,"-").replace(/^-+|-+$/g,""))(x.titleEn))||"campaign";w({to:"/campaign-details/$slug/$id",params:{slug:f,id:x.id}})},isRTL:n})]})})]})};export{Ce as default};
