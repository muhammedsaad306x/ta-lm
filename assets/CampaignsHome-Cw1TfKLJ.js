import{j as e}from"./map-vendor-bFKnpCbR.js";import{L as n}from"./tanstack-vendor-BIBkAdy1.js";import{d as r}from"./ui-vendor-DkFBY_P_.js";import{u as d}from"./vendor-Dpb4irXk.js";import"./form-vendor-2tEkjfrN.js";import"./carousel-vendor-C-zzQswU.js";const a=r.div`
  width: 95%;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
`,c=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`,l=r.h1`
  font-size: 1.875rem;
  font-weight: bold;
`,m=r.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`,o=r.select`
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
`,p=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,g=r.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`,x=r.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`,h=r.div`
  padding: 1rem;
`,f=r.span`
  font-size: 0.875rem;
  color: #2563eb;
`,b=r.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,j=r.p`
  color: #4b5563;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,u=r.div`
  margin-bottom: 1rem;
`,w=r.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 0.5rem;
`,y=r.div`
  background-color: #2563eb;
  height: 0.5rem;
  border-radius: 9999px;
`,v=r.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,C=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,k=r(n)`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;function D(){const{t}=d(),s=[{id:1,title:"سهم العشرة الأواخر",description:"تقدر تتبرع وتشارك بسهم الليالي العشر على مدار 10 أيام من شهر رمضان والتي تهدف في توفير عدد كبير من المساعدات المتنوعة للأسر المستحقة.",price:500,image:"/campaigns/ramadan.jpg",category:"الاحتياجات الأساسية",progress:75},{id:2,title:"وقف النخيل الخيري",price:4500,image:"/campaigns/palm.jpg",category:"الاحتياجات الأساسية",progress:45},{id:3,title:"كرتونة رمضان خيرية",price:400,image:"/campaigns/box.jpg",category:"الاحتياجات الأساسية",progress:90},{id:4,title:"إفطار صائم",price:250,image:"/campaigns/iftar.jpg",category:"الاحتياجات الأساسية",progress:60}];return e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(l,{children:t("campaigns.title")}),e.jsxs(m,{children:[e.jsxs(o,{children:[e.jsx("option",{children:t("campaigns.filters.category")}),e.jsx("option",{children:t("campaigns.filters.basic")}),e.jsx("option",{children:t("campaigns.filters.urgent")})]}),e.jsxs(o,{children:[e.jsx("option",{children:t("campaigns.filters.sort")}),e.jsx("option",{children:t("campaigns.filters.newest")}),e.jsx("option",{children:t("campaigns.filters.oldest")})]})]})]}),e.jsx(p,{children:s.map(i=>e.jsxs(g,{children:[e.jsx(x,{src:i.image,alt:i.title}),e.jsxs(h,{children:[e.jsx(f,{children:i.category}),e.jsx(b,{children:i.title}),i.description&&e.jsx(j,{children:i.description}),e.jsxs(u,{children:[e.jsx(w,{children:e.jsx(y,{style:{width:`${i.progress}%`}})}),e.jsxs(v,{children:[e.jsxs("span",{children:[i.progress,"%"]}),e.jsxs("span",{children:[i.price," ج"]})]})]}),e.jsx(C,{children:e.jsx(k,{to:"/campaign-details/$slug/$id",params:{slug:i.title.replace(/[^\w]+/g,"-").toLowerCase(),id:i.id.toString()},children:t("common.donate")})})]})]},i.id))})]})}export{D as default};
