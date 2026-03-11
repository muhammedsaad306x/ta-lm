import{j as r}from"./map-vendor-CkCCoZy4.js";import{r as E}from"./form-vendor-8JSUuxVu.js";import{c as w,l as z,u as R}from"./tanstack-vendor-DVbpgvBY.js";import{R as f}from"./react-icons-vendor-D75jEhkE.js";import{d as t}from"./ui-vendor-BVv7PGpf.js";import{e as A,G as T,bi as L,S as u,C as b,L as P,d as I,E as B,o as F,ag as D}from"./index-Bz-f-rfY.js";import{B as j}from"./Breadcrumbs-CzB9j62p.js";import{C as G}from"./CampaignCard-0FaIjOo5.js";import{u as x}from"./vendor-8UwSOQY7.js";import{f as U}from"./formatDate-DZ24sZIr.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-DdfYexyz.js";import"./CampaignCard.styles-DZbdjgt-.js";const O=t.div`
  margin-bottom: 3rem;
`,q=t.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  text-align: ${e=>e.isRTL?"right":"left"};
`,V=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;t.div`
  text-align: center;
  padding: 2rem;
  color: #6b7280;
  font-style: italic;
`;const H=({campaigns:e,isRTL:n})=>{const{t:o}=x();if(!e||e.length===0)return null;const l=e.map(i=>({...i,titleAr:i.nameAr,titleEn:i.nameEn,descriptionAr:i.descriptionAr,descriptionEn:i.descriptionEn,basePrice:i.defaultShare||0,amountTypeId:1,donationIntentions:[],progress:i.progressBarValue||0,showProgressBar:i.showProgressBar||!1,progressBarValue:i.progressBarValue||0}));return r.jsxs(O,{children:[r.jsxs(q,{isRTL:n,children:[n?"الحملات":"Campaigns"," (",e.length,")"]}),r.jsx(V,{children:l.map(i=>r.jsx(G,{campaign:i,t:o,isRTL:n},i.id))})]})},M=t.div`
  margin-bottom: 3rem;
`,Q=t.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  text-align: ${e=>e.isRTL?"right":"left"};
`,W=t.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,K=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--background-light);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 16px;
  transition: box-shadow 0.2s;
  cursor: pointer;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
  }
`,J=t.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 16px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-left: 0;
    margin-bottom: 12px;
  }
`,X=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 16px;
`,Y=t.div`
  font-size: 0.875rem;
  color: #6b7280;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
`,Z=t.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  line-height: 1.4;
`,_=t.p`
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ee=({news:e,isRTL:n})=>{const{t:o,i18n:l}=x(),i=w(),s=l.resolvedLanguage==="ar"?"ar-EG":"en-US";if(!e||e.length===0)return null;const c=a=>(a||"").toString().trim().toLowerCase().replace(/[^a-z0-9]+/gi,"-").replace(/^-+|-+$/g,""),p=a=>{i({to:`/news/${c(a.nameEn)}/${a.id}`})};return r.jsxs(M,{children:[r.jsxs(Q,{isRTL:n,children:[n?"الأخبار":"News"," (",e.length,")"]}),r.jsx(W,{children:e.map(a=>r.jsxs(K,{isRTL:n,onClick:()=>p(a),children:[r.jsx(J,{src:`https://lifemakers.org/Public/${a.imageUrl}`,alt:n?a.titleAr||a.nameAr:a.titleEn||a.nameEn}),r.jsxs(X,{children:[r.jsxs(Y,{isRTL:n,children:[r.jsx("span",{style:{fontWeight:"bold",color:"#000"},children:o("news.publishedAt","تاريخ النشر :")})," ",U(a.createdOn,s)]}),r.jsx(Z,{isRTL:n,children:n?a.nameAr:a.nameEn}),r.jsx(_,{isRTL:n,children:r.jsx(A,{html:n?a.descriptionAr:a.descriptionEn})})]})]},a.id))})]})},re=t.div`
  margin-bottom: 3rem;
`,te=t.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  text-align: ${e=>e.isRTL?"right":"left"};
`,ie=t.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`,ne=t.div`
  background: var(--secondary-color);
  color: #fff;
  border-radius: 8px;
  min-height: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: ${({isRTL:e})=>e?"flex-end":"flex-start"};
  justify-content: center;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  padding: ${({isRTL:e})=>"0 1rem"};
  font-weight: 600;
  font-size: 1.08rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    background 0.3s,
    color 0.3s;
  color: #014976;

  &:hover {
    color: var(--secondary-color);
  }

  &.with-image:hover {
    background: none;
  }

  &:hover .card-image {
    opacity: 1;
  }

  &:hover .card-overlay {
    opacity: 1;
  }
`,oe=t.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
  aspect-ratio: 5 / 1;
`,se=t.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 2;
`,ae=t.div`
  position: relative;
  z-index: 3;
  width: 100%;
`,le=t.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  line-height: 1.3;
`,de=({projects:e,isRTL:n})=>{const o=w();if(!e||e.length===0)return null;const l=i=>{o({to:`/project-details/${(c=>(c||"").toString().trim().toLowerCase().replace(/[^a-z0-9]+/gi,"-").replace(/^-+|-+$/g,""))(i.nameEn)}/${i.id}`})};return r.jsxs(re,{children:[r.jsxs(te,{isRTL:n,children:[n?"المشاريع":"Projects"," (",e.length,")"]}),r.jsx(ie,{isRTL:n,children:e.map(i=>r.jsxs(ne,{isRTL:n,onClick:()=>l(i),className:i.imageUrl?"with-image":"",children:[i.imageUrl&&r.jsxs(r.Fragment,{children:[r.jsx(oe,{src:`https://lifemakers.org/Public/${i.imageUrl}`,alt:n?i.nameAr:i.nameEn,width:400,height:80,loading:"lazy",decoding:"async",className:"card-image","aria-hidden":"true"}),r.jsx(se,{className:"card-overlay","aria-hidden":"true"})]}),r.jsx(ae,{children:r.jsx(le,{isRTL:n,children:n?i.nameAr:i.nameEn})})]},i.id))})]})},ce=t.div`
  margin-bottom: 3rem;
`,me=t.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  text-align: ${e=>e.isRTL?"right":"left"};
`,ge=t.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 32px 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px 0;
  }
`,he=t.div`
  display: flex;
  gap: 16px;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  background: var(--background-light);
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #dfdfdf;
  justify-content: space-between;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,xe=t.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
`,pe=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,fe=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
`,ue=t.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
  line-height: 1.4;
`,be=({ngOs:e,isRTL:n})=>{const{t:o}=x(),l=w();if(!e||e.length===0)return null;const i=s=>{l({to:`/ngos/${s}`})};return r.jsxs(ce,{children:[r.jsxs(me,{isRTL:n,children:[n?"الجمعيات والمبادرات":"NGOs & Initiatives"," (",e.length,")"]}),r.jsx(ge,{isRTL:n,children:e.map(s=>r.jsxs(he,{isRTL:n,children:[r.jsxs(fe,{isRTL:n,children:[r.jsx(ue,{isRTL:n,children:n?s.nameAr:s.nameEn}),r.jsx(T,{onClick:()=>i(s.id),children:o("home.campaigns.details")})]}),r.jsx(xe,{children:r.jsx(pe,{src:`https://lifemakers.org/Public/${s.imageUrl}`,alt:n?s.nameAr:s.nameEn})})]},s.id))})]})},je=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: ${e=>e.isRTL?"flex-start":"flex-end"};
`,we=t.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
`,ve=t.div`
  color: #3b82f6;
  font-size: 1.5rem;
`;t.div`
  color: #6b7280;
  font-size: 1rem;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
`;t.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;t.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;t.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
`;t.p`
  color: #6b7280;
  line-height: 1.6;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
`;t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
  direction: ${e=>e.isRTL?"rtl":"ltr"};
`;t.span`
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;t.span`
  color: #D9D9D9;
  font-size: 0.875rem;
`;const y=t.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #6b7280;
`,$=t.div`
  font-size: 3rem;
  color: #d1d5db;
  margin-bottom: 1rem;
`,C=t.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,k=t.p`
  color: #6b7280;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.6;
`,ye=t.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

`,$e=t.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: ${e=>e.active?"#3b82f6":"white"};
  color: ${e=>e.active?"white":"#374151"};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  direction: ${e=>e.isRTL?"rtl":"ltr"};

  &:hover {
    background: ${e=>e.active?"#2563eb":"#f3f4f6"};
    border-color: ${e=>e.active?"#2563eb":"#d1d5db"};
  }
`,De=()=>{const{t:e,i18n:n}=x(),o=n.resolvedLanguage==="ar",i=z({from:"/search"})?.query||"",[s,c]=E.useState("all"),{data:p,isLoading:a,error:v,refetch:S}=R({queryKey:["search",i],queryFn:()=>L(i),enabled:!!i.trim(),staleTime:300*1e3,cacheTime:1800*1e3}),d=p||{news:[],ngOs:[],projects:[],campaigns:[],totalResults:0},g=d.totalResults||0,h=s==="all"?d:{news:s==="news"?d.news:[],ngOs:s==="ngos"?d.ngOs:[],projects:s==="projects"?d.projects:[],campaigns:s==="campaigns"?d.campaigns:[],totalResults:d.totalResults},N=[{key:"all",labelAr:"الكل",labelEn:"All"},{key:"campaigns",labelAr:"الحملات",labelEn:"Campaigns"},{key:"news",labelAr:"الأخبار",labelEn:"News"},{key:"projects",labelAr:"المشاريع",labelEn:"Projects"},{key:"ngos",labelAr:"الجمعيات والمبادرات",labelEn:"NGOs & Initiatives"}];return a?r.jsxs(u,{isRTL:o,children:[r.jsx(j,{}),r.jsx(b,{children:r.jsxs(P,{children:[r.jsx(I,{}),r.jsx("p",{children:e("common.loading")})]})})]}):v?r.jsxs(u,{isRTL:o,children:[r.jsx(j,{}),r.jsx(b,{children:r.jsxs(B,{children:[r.jsxs(F,{children:[e("common.error"),": ",v.message]}),r.jsx(D,{onClick:()=>S(),children:e("common.retry")})]})})]}):r.jsxs(u,{isRTL:o,children:[r.jsx(j,{}),r.jsxs(b,{children:[r.jsx(je,{isRTL:o,children:r.jsxs(we,{isRTL:o,children:[r.jsx(ve,{children:r.jsx(f,{})}),o?"نتائج البحث عن:":"Search results for:"," ”",r.jsx("span",{style:{color:"#3b82f6"},children:i}),"” "," "," ..",o?`تم العثور على ${g} نتيجة`:`Found ${g} results`]})}),g>0&&r.jsx(ye,{isRTL:o,children:N.map(m=>r.jsx($e,{active:s===m.key,isRTL:o,onClick:()=>c(m.key),children:o?m.labelAr:m.labelEn},m.key))}),g>0?r.jsxs(r.Fragment,{children:[r.jsx(H,{campaigns:h.campaigns,isRTL:o}),r.jsx(ee,{news:h.news,isRTL:o}),r.jsx(de,{projects:h.projects,isRTL:o}),r.jsx(be,{ngOs:h.ngOs,isRTL:o})]}):i.trim()?r.jsxs(y,{children:[r.jsx($,{children:r.jsx(f,{})}),r.jsx(C,{children:o?"لا توجد نتائج":"No results found"}),r.jsx(k,{children:o?"لم نتمكن من العثور على أي نتائج مطابقة لبحثك. حاول استخدام كلمات مختلفة أو أكثر عمومية.":"We couldn't find any results matching your search. Try using different or more general keywords."})]}):r.jsxs(y,{children:[r.jsx($,{children:r.jsx(f,{})}),r.jsx(C,{children:o?"ابدأ البحث":"Start searching"}),r.jsx(k,{children:o?"استخدم شريط البحث في الأعلى للعثور على المحتوى الذي تبحث عنه.":"Use the search bar above to find the content you're looking for."})]})]})]})};export{De as default};
