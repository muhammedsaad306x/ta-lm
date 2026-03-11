import{j as e}from"./map-vendor-CkCCoZy4.js";import{r as o}from"./form-vendor-8JSUuxVu.js";import{c as w,u as v}from"./tanstack-vendor-DVbpgvBY.js";import{bf as S,L,d as T,E as N,o as E,ag as k,S as B,C as M,T as $,an as D,D as Q,G as R,m as A}from"./index-BG7PzkZp.js";import{B as I}from"./Breadcrumbs-CzB9j62p.js";import{d as a}from"./ui-vendor-BVv7PGpf.js";import{S as P,a as q}from"./SearchInput-Dq9RJiWF.js";import{u as z}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-CVofrm-u.js";import"./react-icons-vendor-D75jEhkE.js";const G=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 32px 0;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,H=a.div`
  display: flex;
  gap: 16px;
  direction: ${s=>s.isRTL?"rtl":"ltr"};
  background: var(--background-light);
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #dfdfdf;
  cursor: pointer;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid var(--primary-light);
  }
`,F=a.div`
  width: 5rem;
  height: 5rem;
  aspect-ratio: 1/1;
`,K=a.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,U=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  align-items: flex-start;
`,J=a.h3`
  font-size: 1.5rem;
  color: #014976;
  font-weight: bold;
`,O=a.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
  }
`,ie=()=>{const{t:s,i18n:x}=z(),t=x.resolvedLanguage==="ar",c=w(),[l,h]=o.useState(1),[n,u]=o.useState(""),m=8,{data:d,isLoading:f,error:p,refetch:j}=v({queryKey:["ngos",{page:l,size:m}],queryFn:()=>S(l,m),staleTime:300*1e3,cacheTime:1800*1e3}),i=o.useMemo(()=>(d?.data?.items||[]).filter(r=>r.id!==1),[d]),y=r=>{u(r)},C=()=>{h(r=>r+1)},b=o.useMemo(()=>{if(!n)return i;const r=n.toLowerCase();return i.filter(g=>(t?g.nameAr:g.nameEn).toLowerCase().includes(r))},[i,n,t]);return f?e.jsxs(L,{children:[e.jsx(T,{}),e.jsx("p",{children:s("common.loading")})]}):p?e.jsxs(N,{children:[e.jsxs(E,{children:[s("common.error"),": ",p.message]}),e.jsx(k,{onClick:()=>j(),children:s("common.retry")})]}):e.jsxs(B,{isRTL:t,children:[e.jsx(I,{}),e.jsxs(M,{children:[e.jsxs(O,{children:[e.jsx($,{isRTL:t,children:s("ngos.title")}),e.jsx(P,{children:e.jsx(q,{value:n,onSearch:y,isRTL:t,alwaysExpanded:!0})})]}),e.jsx(D,{isRTL:t,children:s("ngos.label")}),e.jsx(Q,{isRTL:t,children:s("ngos.description")}),e.jsx(G,{isRTL:t,children:b.map(r=>e.jsxs(H,{isRTL:t,onClick:()=>c({to:`/ngos/${r.id}`}),children:[e.jsxs(U,{isRTL:t,children:[e.jsx(J,{isRTL:t,children:t?r.nameAr:r.nameEn}),e.jsx(R,{onClick:()=>c({to:`/ngos/${r.id}`}),children:s("home.campaigns.details")})]}),e.jsx(F,{children:e.jsx(K,{src:`https://lifemakers.org/Public/${r.imageUrl}`,alt:r.nameEn})})]},r.id))}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.length<(d?.total||0)-1&&e.jsx(A,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:C,children:s("donationSection.websiteDonation.seeMore")})})]})]})};export{ie as default};
