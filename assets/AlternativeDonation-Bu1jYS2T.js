import{j as o}from"./map-vendor-bFKnpCbR.js";import{d as e}from"./ui-vendor-DkFBY_P_.js";import{S as m,C as p}from"./Achievements.styles-DE8dDdAA.js";import{B as x}from"./Breadcrumbs-CP2ARXTu.js";import{c as f}from"./CampaignDetails.styles-D86BZ0bL.js";import{u as d}from"./vendor-Dpb4irXk.js";import{c as g,u}from"./tanstack-vendor-BIBkAdy1.js";import{aF as h,aG as v}from"./index-B9j8TIkH.js";import"./form-vendor-2tEkjfrN.js";import"./carousel-vendor-C-zzQswU.js";import"./index-Chjiymov.js";import"./react-icons-vendor-CvqjQV9E.js";import"./media-vendor-C8E2tzc3.js";const c=e.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 170px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: ${({noShadow:t})=>t?"none":"0 4px 16px rgba(0,0,0,0.12)"};
  }
`,y=e.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=e.img`
  max-width: 100%;
  max-height: 170px;
  width: auto;
  height: auto;
  transition: opacity 0.3s;
  position: relative;
  z-index: 1;
  object-fit: cover;
`,j=e.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 38px;
  background: #111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 400;
  opacity: 0;
  text-wrap: nowrap;
  transition: opacity 0.3s;
  text-align: center;
  padding: 0 8px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 2;
  pointer-events: none;
  ${c}:hover & {
    opacity: 1;
  }
`;function w(t){const{i18n:a}=d(),n=a.resolvedLanguage==="ar"?t.nameAr:t.nameEn,s=t.logoUrl?`https://lifemakers.org/Public/${t.logoUrl}`:"";return o.jsx(c,{noShadow:t.noShadow,onClick:t.onClick,children:o.jsxs(y,{children:[o.jsx(b,{src:s,alt:t.alt||n||"",width:200,height:170,loading:"lazy"}),t.showHoverBar&&o.jsx(j,{children:n})]})})}function T(){const{t}=d(),{i18n:a}=d(),r=a.resolvedLanguage==="ar",n=g(),{data:s}=u({queryKey:["donationMethods"],queryFn:h}),l=e.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
    padding: 32px 0;
  `;return o.jsxs(m,{children:[o.jsx(x,{}),o.jsxs(p,{children:[o.jsx(f,{isRTL:r,children:t("donationSection.alternativeDonation.title")}),o.jsx(l,{children:s?.data?.map(i=>o.jsx(w,{onClick:()=>{(r?i.nameAr:i.nameEn)&&n({to:v.to,params:{type:r?i.nameAr:i.nameEn,id:i.id}})},...i,showHoverBar:!0},i.id))})]})]})}export{T as default};
