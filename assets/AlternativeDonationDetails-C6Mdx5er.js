import{j as t}from"./map-vendor-CkCCoZy4.js";import{j as s,u as l}from"./tanstack-vendor-DVbpgvBY.js";import{c as h,L as c,d as g,S as w,C as f,T as u,D as j,e as $}from"./index-Bz-f-rfY.js";import{B as b}from"./Breadcrumbs-CzB9j62p.js";import{t as C,b as y}from"./top-corner-DJrA6mvu.js";import{d as a}from"./ui-vendor-BVv7PGpf.js";import{u as v}from"./vendor-8UwSOQY7.js";import"./form-vendor-8JSUuxVu.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-DdfYexyz.js";import"./react-icons-vendor-D75jEhkE.js";const D=a.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`,I=a.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`,L=a.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`,T=a.div`
  width: 150px;
  height: 120px;
  margin: 0 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 100px;
    margin: 0;
  }

  @media (max-width: 480px) {
    height: 80px;
  }
`,S=a.div`
  display: flex;
  flex-direction: ${({$multiple:i})=>i?"row":"column"};
  justify-content: center;
  align-items: center;
  gap: ${({$multiple:i})=>i?"16px":"0"};
  flex-wrap: ${({$multiple:i})=>i?"wrap":"nowrap"};
  width: 50%;

  .image-wrapper {
    position: relative;
    display: inline-block;
  }

  .donation-image {
    width: ${({$multiple:i})=>i?"170px":"400px"};
    max-width: ${({$multiple:i})=>i?"170px":"400px"};
    border-radius: 8px;
    object-fit: cover;
    display: block;
    padding: 2px;
  }

  @media (max-width: 768px) {
    .donation-image {
      width: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 12px;
    .donation-image {
      width: ${({$multiple:i})=>i?"140px":"300px"};
      max-width: ${({$multiple:i})=>i?"140px":"300px"};
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;

    .donation-image {
      width: 100%;
      max-width: 240px;
    }
  }
`,A=a.img`
  position: absolute;
  top: -6px;
  left: -6px;
  pointer-events: none;
  max-width: 60px;
  height: auto;
  z-index: 1;

  @media (max-width: 768px) {
    top: -8px;
    left: -8px;
    max-width: 48px;
  }

  @media (max-width: 480px) {
    top: -8px;
    left: -8px;
    max-width: 36px;
  }
`,E=a.img`
  position: absolute;
  bottom: -6px;
  right: -6px;
  pointer-events: none;
  max-width: 60px;
  height: auto;
  z-index: 1;

  @media (max-width: 768px) {
    bottom: -8px;
    right: -8px;
    max-width: 48px;
  }

  @media (max-width: 480px) {
    bottom: -8px;
    right: -8px;
    max-width: 36px;
  }
`;a.ol`
  text-align: ${({isRTL:i})=>i?"right":"left"};
  padding-inline-start: ${({isRTL:i})=>i?"20px":"40px"};

  @media (max-width: 480px) {
    padding-inline-start: ${({isRTL:i})=>i?"16px":"24px"};
    font-size: 0.9rem;
  }
`;function K(){const{i18n:i,t:m}=v(),{id:o}=s({from:"/alternative-donation/method-details/$type/$id"}),n=i.resolvedLanguage==="ar",{data:p,isLoading:d}=l({queryKey:["donationChannel",o],queryFn:()=>h(o)}),e=p?.data;return d?t.jsx(c,{children:t.jsx(g,{})}):t.jsxs(w,{children:[t.jsx(b,{}),t.jsx(f,{children:t.jsxs(D,{children:[t.jsxs(I,{children:[t.jsxs(L,{children:[t.jsx(u,{isRTL:n,children:n?e?.nameAr:e?.nameEn}),t.jsx(T,{children:t.jsx("img",{src:`https://lifemakers.org/Public/${e?.logoUrl}`,alt:n?e?.nameAr:e?.nameEn,loading:"lazy",itemProp:"image",itemScope:!0,itemType:"https://schema.org/ImageObject"})})]}),t.jsx(j,{isRTL:n,children:t.jsx($,{html:n?e?.descriptionAr:e?.descriptionEn,as:"div"})})]}),t.jsx(S,{$multiple:e.images.length>1,children:e?.images.map((x,r)=>t.jsxs("div",{className:"image-wrapper",children:[t.jsx(A,{src:C,alt:"topCorner"}),t.jsx("img",{className:"donation-image",src:`https://lifemakers.org/Public/${x.imageUrl}`,alt:`${n?e.titleAr:e.titleEn} - ${m("donation.image")} ${r+1}`}),t.jsx(E,{src:y,alt:"bottomCorner"})]},r))})]})})]})}export{K as default};
