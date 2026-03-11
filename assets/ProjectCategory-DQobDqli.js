import{j as e}from"./map-vendor-CkCCoZy4.js";import{r as T}from"./form-vendor-8JSUuxVu.js";import{e as p,b1 as E,L as $,d as A,S as k,P as z,C as f,T as L,y as S}from"./index-Dv1SXuG7.js";import{B as P}from"./Breadcrumbs-CzB9j62p.js";import{H as I,M as B,T as U,P as N}from"./Projects.styles-C5GiAVb9.js";import{c as C,j as F,u as M}from"./tanstack-vendor-DVbpgvBY.js";import{d as o}from"./ui-vendor-BVv7PGpf.js";import{u as g}from"./vendor-8UwSOQY7.js";import{S as D,T as H,G as R,C as q,a as G,b as O,c as W,d as Y,e as _}from"./ProjectsSection.styles-C789ssjh.js";import{S as j,A as u,N as J,a as w,b,T as K,c as Q,d as V,e as X,B as Z,f as ee}from"./news.styles-CTkhLrp5.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-b5BVGNQh.js";import"./react-icons-vendor-D75jEhkE.js";const te=o.section`
  width: 100%;
  padding: 2rem 4rem;
  background: #fff;
  text-align: ${({isRTL:s})=>s?"right":"left"};

  @media (max-width: 1200px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;o.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #000;

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
`;const ae=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 1000px;
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    max-width: 100%;
  }
`,ie=o.div`
  background: #fff;
  border: 2px solid #ff6b35;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
  min-width: 50%;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    padding: 1.8rem;
    gap: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 0.8rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 0.7rem;
    border-radius: 8px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
`,re=o.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  ${""}

  @media (max-width: 1200px) {
    gap: 0.9rem;
    margin-bottom: 0.9rem;
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }
`,se=o.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    color: #fff;
  }

  @media (max-width: 1200px) {
    width: 44px;
    height: 44px;
    border-radius: 7px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 6px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 5px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;o.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 1.05rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;const ne=o.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 0.5rem;
  ${""}
  justify-content: center;
  @media (max-width: 1200px) {
    gap: 0.4rem;
    margin-bottom: 0.9rem;
  }

  @media (max-width: 768px) {
    gap: 0.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    margin-bottom: 0.7rem;
  }
`,y=o.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;o.span`
  font-size: 1rem;
  font-weight: 500;
  color: #000;

  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;const oe=o.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #374151;
  margin: 0;
  text-align: center;
  text-wrap: balance;
  @media (max-width: 1200px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }
`;function de({projects:s}){const{i18n:m}=g(),i=m.resolvedLanguage==="ar";return e.jsx(te,{isRTL:i,children:e.jsx(ae,{children:s.map(n=>e.jsxs(ie,{children:[e.jsx(re,{children:e.jsx(se,{children:e.jsx("img",{src:`https://lifemakers.org/Public/${n.imageUrl}`,alt:i?n.titleAr:n.titleEn,width:80,height:80,loading:"lazy"})})}),e.jsx(ne,{children:i?e.jsx(e.Fragment,{children:e.jsx(y,{children:n.subTitleAr})}):e.jsx(e.Fragment,{children:e.jsx(y,{children:n.subTitleEn})})}),e.jsx(oe,{children:e.jsx(p,{html:i?n.descriptionAr:n.descriptionEn})})]},n.id))})})}function me({title:s,padding:m,routeName:i,items:n}){const{i18n:l}=g(),t=l.resolvedLanguage==="ar",x=C(),c=a=>(a||"").toString().trim().toLowerCase().replace(/[^a-z0-9]+/gi,"-").replace(/^-+|-+$/g,""),h=a=>(a||"").toString().trim().toLowerCase().replace(/[^\u0600-\u06FFa-z0-9]+/gi,"-").replace(/^-+|-+$/g,"");return e.jsxs(D,{isRTL:t,padding:m,children:[e.jsx(H,{isRTL:t,children:s}),e.jsx(R,{isRTL:t,children:n?.map(a=>e.jsxs(q,{onClick:()=>{const r=t?h(a.titleAr||a.titleEn):c(a.titleEn||a.titleAr);x({to:`/${i}/$slug/$id`,params:{slug:r,id:a.id}})},className:a.imageUrl?"with-image":"",children:[a.imageUrl&&e.jsxs(e.Fragment,{children:[e.jsx(G,{src:`https://lifemakers.org/Public/${a.imageUrl}`,alt:t?a.titleAr:a.titleEn,width:400,height:80,loading:"lazy",decoding:"async","aria-hidden":"true"}),e.jsx(O,{className:"card-overlay","aria-hidden":"true"})]}),e.jsxs(W,{children:[e.jsx(Y,{isRTL:t,children:t?a.titleAr:a.titleEn}),a.descriptionAr||a.descriptionEn?e.jsx(_,{isRTL:t,children:e.jsx(p,{html:t?a.sloganAr:a.sloganEn})}):null]})]},a.id))})]})}const ve=()=>{const{t:s,i18n:m}=g(),i=m.resolvedLanguage==="ar",{id:n}=F({from:"/project-category/$slug/$id"}),l=C(),{data:t,isLoading:x}=M({queryKey:["project/category",{id:n}],queryFn:()=>E({id:n}),staleTime:300*1e3,cacheTime:1800*1e3}),c=()=>{navigator.share?navigator.share({title:s("projects.title"),text:s("projects.description"),url:window.location.href}):(navigator.clipboard.writeText(window.location.href),S.success(s("checkout.shareBtn")))},h=()=>{l({to:"/programs"})},a=T.useMemo(()=>{const r=t?.data;return r?{"@context":"https://schema.org","@type":"CollectionPage",name:i?r.titleAr:r.titleEn,description:i?r.descriptionAr:r.descriptionEn,image:r.imageUrl?`https://lifemakers.org/Public/${r.imageUrl}`:void 0,hasPart:{"@type":"ItemList",itemListElement:(r.subProjects||[]).map((d,v)=>({"@type":"ListItem",position:v+1,item:{"@type":"CreativeWork",name:i?d.titleAr||d.titleEn:d.titleEn||d.titleAr,image:d.imageUrl?`https://lifemakers.org/Public/${d.imageUrl}`:void 0}}))}}:null},[t,i]);return x?e.jsxs($,{children:[e.jsx(A,{}),s("common.loading")]}):e.jsxs(k,{isRTL:i,children:[e.jsx(z,{title:`${i?t?.data?.titleAr:t?.data?.titleEn} | ${m.resolvedLanguage==="ar"?"صناع الحياة":"Life Makers"}`,description:i?t?.data?.descriptionAr:t?.data?.descriptionEn,lang:m.resolvedLanguage,openGraph:{ogImage:{ogImage:t?.data?.imageUrl?`https://lifemakers.org/Public/${t?.data?.imageUrl}`:"/Logo.svg",ogImageAlt:i?t?.data?.titleAr:t?.data?.titleEn},ogUrl:typeof window<"u"?window.location.href:""},children:e.jsx("meta",{name:"robots",content:"index, follow"})}),a&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a)}}),e.jsx(P,{isRTL:i}),e.jsxs(f,{children:[e.jsxs(I,{children:[e.jsx(L,{isRTL:i,children:i?t?.data?.titleAr:t?.data?.titleEn}),e.jsxs(j,{onClick:c,children:[e.jsx("span",{children:s("checkout.shareBtn")}),e.jsx(u,{className:"share-icon"})]})]}),e.jsx("div",{style:{width:"100%",height:"20rem",overflow:"hidden"},children:e.jsx("img",{style:{width:"100%",height:"100%",objectFit:"cover"},src:`https://lifemakers.org/Public/${t?.data?.imageUrl}`,alt:i?t?.data?.titleAr:t?.data?.titleEn})})]}),e.jsx(f,{children:e.jsxs(B,{children:[e.jsx(U,{children:e.jsx(p,{html:i?t?.data?.descriptionAr:t?.data?.descriptionEn})}),e.jsx(N,{children:e.jsx(de,{projects:t?.data?.impacts})})]})}),e.jsx(me,{title:s("navigation.projects"),padding:"2rem 0 2rem 0",routeName:"project-details",items:t?.data?.subProjects}),e.jsxs(J,{children:[e.jsx(w,{children:e.jsx(b,{})}),e.jsxs(K,{children:[e.jsxs(j,{onClick:c,children:[e.jsx("span",{children:s("checkout.shareBtn")}),e.jsx(u,{className:"share-icon"})]}),e.jsx(Q,{children:(t?.data?.keyWords||[]).map((r,d)=>e.jsx(V,{onClick:()=>l({to:"/search",search:{query:(i?r.nameAr:r.nameEn).trim()}}),children:e.jsxs(X,{children:["# ",i?r.nameAr:r.nameEn]})},d))})]}),e.jsx(w,{children:e.jsx(b,{})}),e.jsx(Z,{onClick:h,children:e.jsx(ee,{children:s("projects.backToPrograms")})})]})]})};export{ve as default};
