import{j as r}from"./map-vendor-CkCCoZy4.js";import{u as l}from"./tanstack-vendor-DVbpgvBY.js";import{a3 as g,L as p,d as c,P as f}from"./index-Dv1SXuG7.js";import{d as e}from"./ui-vendor-BVv7PGpf.js";import{C as h}from"./CampaignCard.styles-DZbdjgt-.js";import{S as x,C as u,T as y,P as w}from"./About.styles-TS9RDmNy.js";import{B as j}from"./Breadcrumbs-CzB9j62p.js";import{u as v}from"./vendor-8UwSOQY7.js";import"./form-vendor-8JSUuxVu.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-b5BVGNQh.js";import"./react-icons-vendor-D75jEhkE.js";e.section`
  width: 100%;
  padding: 2.5rem 4rem 2rem 4rem;
  background: #fff;
  @media (max-width: 768px) {
    padding: 2.5rem 2rem 2rem 2rem;
  }
`;e.h2`
  text-align: center;
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #222;
`;e.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
  padding: 0 2rem;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 0 0.5rem;
  }
`;e.div`
  width: 180px;
  min-width: 160px;
  border-radius: 8px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px) scale(1.03);
  }
`;e.img`
  width: 100%;
  height: 220px;
  object-fit: fill;
  background: #f3f3f3;
`;const b=e.div`
  color: var(--primary-light);

  text-align: center;
  font-family: Cairo;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;e.button`
  background: transparent;
  border: 1.5px solid var(--primary-light);
  border-radius: 0.75rem;
  color: var(--primary-light);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  display: block;
  text-wrap: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;

  &:hover {
    background: var(--primary-light);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.5rem 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
  }
`;const C=e.div`
  display: flex;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`,L=e.div`
  width: 100%;
  margin-left: ${({isRTL:a})=>a?"3rem":"0"};
`,k=e.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7rem;
  justify-items: center;
  padding: 0 2rem;
  width: 80%;
  align-items: stretch;
  justify-items: stretch;
  margin: 3rem auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 0 0.5rem;
  }
`,R=e.img`
  width: 100%;
  object-fit: fill;
  background: #f3f3f3;
`;function G(){const{t:a,i18n:o}=v(),i=o.resolvedLanguage==="ar",{data:n,isLoading:m,error:s}=l({queryKey:["reports"],queryFn:g,staleTime:300*1e3,cacheTime:1800*1e3}),d=n?.data||[];return m?r.jsxs(p,{children:[r.jsx(c,{}),r.jsx("p",{children:a("common.loading")})]}):s?r.jsx("div",{children:a("error.loadingProjects")}):r.jsxs(x,{isRTL:i,children:[r.jsx(f,{title:o.resolvedLanguage==="ar"?"التقارير السنوية | صناع الحياة":"Yearly Reports | Life Makers",description:o.resolvedLanguage==="ar"?"التقارير السنوية.":"Yearly Reports.",lang:o.resolvedLanguage,openGraph:{ogImage:{ogImage:"",ogImageAlt:o.resolvedLanguage==="ar"?"التقارير السنوية":"Yearly Reports",ogImageWidth:1200,ogImageHeight:630,ogImageType:"image/jpeg"},ogUrl:"https://www.lifemakers.org/yearly-reports"},twitter:{twitterSummaryCard:{summaryCardImage:"",summaryCardImageAlt:o.resolvedLanguage==="ar"?"التقارير السنوية":"Yearly Reports",summaryCardSiteUsername:"LifeMakersOrg"}}}),r.jsx(j,{}),r.jsxs(u,{children:[r.jsx(y,{children:a("yearlyReports.title")}),r.jsx(C,{isRTL:i,children:r.jsx(L,{isRTL:i,children:r.jsx(w,{children:a("yearlyReports.description")})})})]}),r.jsx(k,{children:d.map(t=>r.jsx("a",{target:"_blank",href:`https://lifemakers.org/Public/${i?t.reportAttachmentUrl:t.enReportAttachmentUrl}`,children:r.jsxs(h,{children:[r.jsx(R,{src:`https://lifemakers.org/Public/${i?t.imageUrl:t.enImageUrl}`,alt:i?t.titleAr:t.titleEn,loading:"lazy"}),r.jsx(b,{isRTL:i,children:i?t.titleAr:t.titleEn})]},t.id)}))})]})}export{G as default};
