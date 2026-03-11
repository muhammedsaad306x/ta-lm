import{j as e}from"./map-vendor-CkCCoZy4.js";import{r as u,u as B,C as f,P as D}from"./form-vendor-8JSUuxVu.js";import{r as V,G as F,S as E,C as H,T as _,D as q,an as M,I as k,F as g,t as j,v as y,o as b,Y as W,Z as G,_ as L,x as O,z as T,H as Y,A as Z,B as Q,at as $,bh as K,y as U}from"./index-Dv1SXuG7.js";import{b as X,c as J,d as R,e as ee,A as re,a0 as te,a1 as ie,a as ne,a2 as ae,k as oe}from"./react-icons-vendor-D75jEhkE.js";import{B as se}from"./Breadcrumbs-CzB9j62p.js";import{d as t}from"./ui-vendor-BVv7PGpf.js";import{f as l}from"./NgoDetails.styles-vVzLul1Q.js";import de from"./PrivacyPolicy-CeA0sSZK.js";import{j as ce}from"./CampaignDetails.styles-CB3upz5i.js";import{L as S}from"./tanstack-vendor-DVbpgvBY.js";import{M as me}from"./Model-D50lhyh2.js";import{u as le}from"./vendor-8UwSOQY7.js";import{p as xe}from"./parsePhoneNumber-DYNEpPXc.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-b5BVGNQh.js";t.p`
  background-color: #cceaff;
  border-radius: 20px;
  padding: 1rem 2rem;
  font-size: 2.5rem; /* 40px */
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem; /* 32px */
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem; /* 28px */
    padding: 0.5rem 1rem;
  }
`;const pe=t.p`
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1.5rem;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,he=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`,ue=t.div`
  display: flex;
  gap: 1.3rem;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.75rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,x=t.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  svg {
    color: var(--primary-light);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`,fe=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,ge=t.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
  padding: 1rem;
`,je=t.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  font-weight: 700;
  font-size: 1.5rem;

  svg {
    color: var(--primary-light);
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,be=t.div`
  color: var(--primary-light);
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,we=t.div`
  margin-top: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
  padding: 2rem;
  max-width: 100%; /* Prevent overflow */

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,v=t(V)`
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
`,ke=t.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 2rem;
  width: 100%; /* Ensure full width within its parent */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`,ye=t.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  width: 100%;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  & > * {
    min-width: 0; /* Critical: allows children (like button) to shrink */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,ve=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Ce=t.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "content";
  }
`,Ie=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-area: image;
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`,Ue=t.div`
  padding: 0.5rem;

  @media (max-width: 768px) {
    grid-area: content;
    padding: 1rem 0;
  }
`,Se=t.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,Fe=t.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;t.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color, #007bff);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;

  &:hover {
    background-color: var(--primary-color-dark, #0056b3);
  }

  @media (max-width: 768px) {
    padding: 0.45rem 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
  }
`;const ze=t(F)`
  @media (max-width: 768px) {
    width: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Pe="/ta-lm/assets/contactus-CNwUpyGO.png",Ae="/ta-lm/assets/donate-img-DrS_IvtG.webp",Ne="/ta-lm/assets/vol-img-BOQ_cCUD.webp",Be=()=>e.jsxs(ue,{children:[e.jsx(l,{href:"http://instagram.com/lifemakersegy/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(x,{children:e.jsx(X,{})})}),e.jsx(l,{href:"https://x.com/LifeMakersEGY",target:"_blank",rel:"noopener noreferrer",children:e.jsx(x,{children:e.jsx(J,{})})}),e.jsx(l,{href:"https://www.facebook.com/LifeMakersEGY/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(x,{children:e.jsx(R,{})})}),e.jsx(l,{href:"https://www.linkedin.com/company/life-makers-foundation/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(x,{children:e.jsx(ee,{})})}),e.jsx(l,{href:"https://www.youtube.com/user/EgyptLifeMakers",target:"_blank",rel:"noopener noreferrer",children:e.jsx(x,{children:e.jsx(re,{size:40})})})]}),De=({t:r})=>{const i=[{id:"address",icon:e.jsx(te,{}),label:r("contactUs.address"),value:e.jsx("a",{style:{textDecoration:"underline"},href:"https://maps.app.goo.gl/vVWhUKp7AQv2WtPQ9",target:"_blank",rel:"noopener noreferrer",children:r("contactUs.addressValue")})},{id:"email",icon:e.jsx(ie,{}),label:r("contactUs.email"),value:e.jsx("a",{style:{textDecoration:"underline"},href:"mailto:website@lifemakers.org",children:"website@lifemakers.org"})},{id:"phone",icon:e.jsx(ne,{}),label:r("contactUs.phone"),value:e.jsx("a",{style:{fontWeight:"700"},href:"tel:16563",children:"16563"})},{id:"workTime",icon:e.jsx(ae,{}),label:r("contactUs.workTime"),value:r("contactUs.workTimeValue")}];return e.jsx(fe,{children:i.map(({id:a,icon:c,label:m,value:s})=>e.jsxs(ge,{children:[e.jsxs(je,{children:[c,m]}),e.jsx(be,{children:s})]},a))})},Ve=({t:r,isRTL:i})=>{const a=[{id:"card1",img:Ae,title:r("contactUs.donate"),description:r("contactUs.donateDes"),button:e.jsx(S,{to:"/website-donation",children:e.jsxs(ce,{isRTL:i,children:[e.jsx("span",{children:r("checkout.donate")}),e.jsx(oe,{size:i?20:25,style:i?{marginRight:"4px"}:{marginLeft:"4px"}})]})})},{id:"card2",img:Ne,title:r("contactUs.volunteer"),description:r("contactUs.volDes"),button:e.jsx(S,{to:"/vol-become/volunteer-form",children:e.jsx(ze,{children:r("contactUs.volunteer")})})}];return e.jsx(ve,{children:a.map(({id:c,img:m,title:s,description:p,button:w})=>e.jsxs(Ce,{children:[e.jsxs(Ue,{children:[e.jsx(Se,{children:s}),e.jsx(Fe,{children:p}),w]}),e.jsx("div",{style:{width:"266px",height:"217px"},children:e.jsx(Ie,{src:m,alt:s})})]},c))})},Ee=({t:r,isRTL:i})=>{const[a,c]=u.useState("eg"),[m,s]=u.useState(null),[p,w]=u.useState(!1),[z,C]=u.useState(!1),{control:h,handleSubmit:P,reset:A,formState:{errors:o}}=B({defaultValues:{name:"",email:"",mobileNumber:"",message:""}}),N=n=>{K(n).then(d=>{d.succeeded?(U.success(r("common.formSubmitted")),A()):U.error(d.message)})};return e.jsxs(we,{children:[e.jsx(M,{isRTL:i,children:r("contactUs.formTitle")}),e.jsxs(ke,{children:[e.jsxs("form",{style:{width:"100%",minWidth:0},onSubmit:P(N),children:[e.jsx(k,{children:e.jsxs(g,{children:[e.jsxs(v,{children:[e.jsx(j,{isRTL:i,children:r("DukeForm.fullName")}),e.jsx(f,{name:"name",control:h,rules:{required:r("checkout.inputRequired")},render:({field:n})=>e.jsx(y,{isRTL:i,...n,type:"text",style:{direction:"ltr"}})})]}),o.name&&e.jsx(b,{children:o.name.message})]})}),e.jsxs(k,{children:[e.jsxs(g,{children:[e.jsxs(W,{style:{backgroundColor:"#fff"},isRTL:i,children:[e.jsx(G,{isRTL:i,children:e.jsx(D,{country:a,value:"",onChange:(n,d)=>{c(d.countryCode)},enableSearch:!1,disableSearchIcon:!0,countryCodeEditable:!1})}),e.jsxs(L,{children:[e.jsx(j,{htmlFor:"mobileNumber",isRTL:i,focused:m==="mobileNumber",children:r("checkout.formPhone")}),e.jsx(f,{name:"mobileNumber",control:h,id:"mobileNumber",rules:{required:r("checkout.inputRequired"),validate:n=>{const d=n.replace(/\D/g,"");if(!d)return r("checkout.inputRequired");try{const I=xe(d,a?.toUpperCase());return!I||!I.isValid()?r("checkout.invalidPhoneNum"):!0}catch{return r("checkout.invalidPhoneNum")}}},render:({field:n})=>e.jsx(y,{...n,type:"tel",onFocus:()=>s("phone"),onBlur:()=>{s(null),n.onBlur()},style:{direction:"ltr",textAlign:"left"}})})]})]}),o.mobileNumber&&e.jsx(b,{children:o.mobileNumber.message})]}),e.jsxs(g,{children:[e.jsxs(v,{children:[e.jsx(j,{isRTL:i,children:r("checkout.formEmail")}),e.jsx(f,{name:"email",control:h,errors:o,id:"email",rules:{required:r("checkout.inputRequired"),pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:r("checkout.invalidEmail")}},render:({field:n})=>e.jsx(y,{isRTL:i,...n,type:"email",style:{direction:"ltr",textAlign:"left",paddingLeft:"10px",paddingRight:"0"}})})]}),o.email&&e.jsx(b,{children:o.email.message})]})]}),e.jsx(k,{children:e.jsxs(g,{children:[e.jsxs(v,{style:{minHeight:"100px"},children:[e.jsx(j,{style:{alignItems:"flex-start",paddingTop:"10px"},isRTL:i,children:r("contactUs.message")}),e.jsx(f,{name:"message",rules:{required:r("checkout.inputRequired")},control:h,render:({field:n})=>e.jsx("textarea",{style:{width:"100%",height:"100%",outline:"none"},...n,rows:3})})]}),o.message&&e.jsx(b,{children:o.message.message})]})}),e.jsxs(ye,{children:[e.jsx(O,{style:{margin:"0"},children:e.jsxs(T,{isRtl:i,children:[e.jsx(Y,{type:"checkbox",value:"ProvideBankIntegration",checked:p,onChange:n=>w(n.target.checked)}),e.jsx(Z,{viewBox:"0 0 64 64",children:e.jsx(Q,{d:"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"})}),e.jsxs($,{onClick:()=>C(!0),style:{direction:i?"rtl":"ltr",whiteSpace:"nowrap"},children:[r("checkout.termsPrefix")," ",e.jsx("p",{children:r("checkout.termsLink")})," ",i?"و":"and"," ",e.jsx("p",{children:r("checkout.privacyLink")})," ",e.jsx("strong",{style:{color:"red"},children:"*"})]})," "]})}),e.jsx(F,{disabled:!p,children:r("common.submit")})]}),z&&e.jsx(me,{onClose:()=>C(!1),modalTitle:r("checkout.privacyLink"),children:e.jsx(de,{})})]}),e.jsx("img",{src:Pe,alt:"contact us"})]})]})};function Je(){const{t:r,i18n:i}=le(),a=i.resolvedLanguage==="ar";return e.jsxs(E,{isRTL:a,children:[e.jsx(se,{}),e.jsxs(H,{children:[e.jsx(_,{isRTL:a,children:r("contactUs.title")}),e.jsx(pe,{isRTL:a,children:e.jsxs(he,{children:[e.jsx(q,{isRTL:a,fontSize:"1.3rem",children:r("contactUs.discription")}),e.jsx(Be,{})]})}),e.jsx(De,{t:r}),e.jsx(Ee,{t:r,isRTL:a}),e.jsx(Ve,{t:r,isRTL:a})]})]})}export{Je as default};
