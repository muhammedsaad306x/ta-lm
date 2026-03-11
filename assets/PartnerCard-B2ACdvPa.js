import{j as o}from"./map-vendor-bFKnpCbR.js";import{d as i}from"./ui-vendor-DkFBY_P_.js";import{c as h}from"./tanstack-vendor-BIBkAdy1.js";import{ay as x}from"./index-B9j8TIkH.js";import{u as g}from"./vendor-Dpb4irXk.js";const r=i.div.withConfig({shouldForwardProp:t=>t!=="noShadow"})`
  background: #fff;
  border-radius: 4px;
  box-shadow: ${({noShadow:t})=>t?"none":"0 2px 8px rgba(0,0,0,0.05)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 140px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: ${({noShadow:t})=>t?"none":"0 4px 16px rgba(0,0,0,0.12)"};
  }
`,f=i.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,m=i.img`
  max-width: 100%;
  max-height: 100px;
  width: auto;
  height: auto;
  transition: opacity 0.3s;
  position: relative;
  z-index: 1;
  object-fit: cover;
`,u=i.div`
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
  ${r}:hover & {
    opacity: 1;
  }
`;function k({id:t,imageUrl:n,nameAr:a,nameEn:e,showHoverBar:s,noShadow:d}){const{i18n:p}=g(),c=p.resolvedLanguage==="ar"?a:e,l=h();return o.jsx(r,{noShadow:d,onClick:()=>l({to:x.to,params:{id:t}}),children:o.jsxs(f,{children:[o.jsx(m,{src:`https://lifemakers.org/Public/${n}`,alt:e,width:200,height:100,loading:"lazy"}),s&&o.jsx(u,{children:c})]})})}export{k as P};
