import{j as r}from"./map-vendor-CkCCoZy4.js";import{l as w,f as S,m as L,P,S as k,T as C,C as M}from"./index-Dv1SXuG7.js";import{B as I}from"./Breadcrumbs-CzB9j62p.js";import{d as g}from"./ui-vendor-BVv7PGpf.js";import{P as A}from"./PartnerCard-CwEvAFfd.js";import{u as D}from"./tanstack-vendor-DVbpgvBY.js";import{r as a}from"./form-vendor-8JSUuxVu.js";import{u as b}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-b5BVGNQh.js";import"./react-icons-vendor-D75jEhkE.js";const E=g.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 0.5rem;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  }
`,$=g.button`
  background: none;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({active:e})=>e?"#1f2937":"#6b7280"};
  background-color: ${({active:e})=>e?"var(--primary-color)":"transparent"};
  color: ${({active:e})=>e?"#fff":"#000"};
  border-radius: 0.5rem;
  border: 1px solid
    ${({active:e})=>e?"var(--primary-color)":"#DFDFDF"};
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  /* Mobile responsive */
  @media (max-width: 768px) {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
`,F=({tabs:e,defaultActive:o,onTabChange:n})=>{const[d,p]=a.useState(o||e[0].key),i=s=>{p(s),n&&n(s)};return r.jsx(E,{children:e.map(({key:s,label:m})=>r.jsx($,{active:d===s,onClick:()=>i(s),children:m},s))})},U=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  padding: 32px 0;
`;function B(){const{t:e,i18n:o}=b(),n=o.resolvedLanguage==="ar",[d,p]=a.useState(1),[i,s]=a.useState([]),m=12,{data:c}=D({queryKey:["partners",{page:d,size:m}],queryFn:()=>w({page:d,size:m}),staleTime:1e3*60*5,keepPreviousData:!0}),{data:f=[]}=S("PartnerType"),u=a.useMemo(()=>c?.data?.items||[],[c]),[l,h]=a.useState("all"),v=a.useMemo(()=>[{key:"all",label:e("common.all")},...f.map(t=>({key:String(t.id),label:n?t.nameAr:t.nameEn}))],[f,n,e]),x=a.useMemo(()=>l==="all"?i:i.filter(t=>String(t.partnerTypeId)===l),[i,l]),y=a.useMemo(()=>l==="all"?c?.total||0:i.filter(t=>String(t.partnerTypeId)===l).length,[i,l,c]),T=()=>{p(t=>t+1)};return a.useEffect(()=>{u.length&&s(t=>d===1?u:[...t,...u])},[u]),r.jsxs("div",{children:[r.jsx(F,{tabs:v,defaultActive:"all",onTabChange:h}),r.jsx(U,{children:x.map((t,j)=>r.jsx(A,{...t,showHoverBar:!0},j))}),r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:x.length<y&&r.jsx(L,{onClick:T,children:e("donationSection.websiteDonation.seeMore")})})]})}const G=a.memo(B);function X(){const{t:e,i18n:o}=b(),n=o.resolvedLanguage==="ar";return r.jsxs(r.Fragment,{children:[r.jsx(P,{title:`${e("aboutUs.title")} | ${o.resolvedLanguage==="ar"?"صناع الحياة":"Life Makers"}`,description:e("aboutUs.description"),lang:o.resolvedLanguage,openGraph:{ogImage:{ogImage:"/Logo.svg",ogImageAlt:o.resolvedLanguage==="ar"?"صورة من الوسائط":"Media image"},ogUrl:"https://www.lifemakers.org/about",ogTitle:e("aboutUs.title"),ogDescription:e("aboutUs.description")},twitter:{twitterSummaryCard:{summaryCardImage:"/Logo.svg",summaryCardImageAlt:o.resolvedLanguage==="ar"?"صورة من الوسائط":"Media image",summaryCardSiteUsername:"LifeMakersOrg"}}}),r.jsxs(k,{isRTL:n,children:[r.jsx(I,{}),r.jsx(C,{isRTL:n,children:e("partners.title")}),r.jsx(M,{children:r.jsx(G,{})})]})]})}export{X as default};
