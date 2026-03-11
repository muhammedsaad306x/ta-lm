import{j as e}from"./map-vendor-bFKnpCbR.js";import{r as c,u as be,C as x,P as Me}from"./form-vendor-2tEkjfrN.js";import{p as je,w as H,u as Ee,f as Z,L as Be,d as pe,S as Ae,T as qe,I as j,F as y,r as S,t as v,v as T,o as N,Y as Ue,Z as Oe,_ as Ge,b2 as Ye,b3 as Ve,b4 as _e,y as g,b5 as He}from"./index-B9j8TIkH.js";import{R as Ze}from"./media-vendor-C8E2tzc3.js";import{B as We}from"./Breadcrumbs-CP2ARXTu.js";import{d as o}from"./ui-vendor-DkFBY_P_.js";import{e as W}from"./useBase64-zaDlYYBZ.js";import{M as Je}from"./Model-sg7809PA.js";import{t as J,u as K}from"./react-icons-vendor-CvqjQV9E.js";import{u as ye}from"./vendor-Dpb4irXk.js";import"./carousel-vendor-C-zzQswU.js";import"./tanstack-vendor-BIBkAdy1.js";const Ke="/assets/campaigns_participated-BgpJp0KZ.svg",Qe="/assets/total-donations-tl6YFyYF.svg",Xe=o.div`
  display: flex;
  flex-direction: row-reverse; /* Changed for RTL compatibility with Figma layout */
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  ${""}
  margin: 0 auto;
  ${""}
  gap: 3rem;

  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    max-width: 98%;
    gap: 4rem;
    ${""}
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    ${""}
    gap: 2.5rem;
    ${""}
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    ${""}
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    ${""}
  }
`,ei=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 400px;
  gap: 2rem;
  background: white;
  border-radius: 16px;
  ${""}
  height: fit-content;
  align-self: flex-start;
  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    max-width: 450px;
    ${""}
    gap: 2.5rem;
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    max-width: 350px;
    ${""}
    gap: 2rem;
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    max-width: 500px;
    ${""}
    gap: 1.5rem;
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    max-width: 100%;
    ${""}
    gap: 1rem;
  }
`,ii=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 16px;
  ${""}
  height: fit-content;

  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    max-width: 900px;
    ${""}
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    max-width: 800px;
    ${""}
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    max-width: 100%;
    ${""}
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    max-width: 100%;
    ${""}  
  }
`,ri=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,ve=o.div`
  position: relative;
  width: 236px;
  height: 236px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    width: 280px;
    height: 280px;
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    width: 236px;
    height: 236px;
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`,ti=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`,si=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;

  span {
    font-size: 2rem;
    color: white;
  }

  ${ve}:hover & {
    opacity: 1;
  }
`,oi=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 10;
`,ni=o.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`,ai=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: conic-gradient(
    #015cab ${i=>i.progress*3.6}deg,
    rgba(255, 255, 255, 0.2) ${i=>i.progress*3.6}deg
  );
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    backdrop-filter: blur(10px);
  }
`,li=o.div`
  font-size: 14px;
  font-weight: 700;
  color: white;
  z-index: 1;
  font-family: Cairo;
`,di=o.span`
  color: #015cab;
  font-size: 16px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #004499;
  }
`,ci=o.input`
  display: none;
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;o.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  text-align: center;
`;o.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #666;
  margin: 0;
  text-align: center;
`;o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;const pi=o.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: left;

  &:hover {
    background-color: #f8f9fa;
    border-color: #0066cc;
    color: #0066cc;
    transform: translateX(4px);
  }

  svg {
    font-size: 1.3rem;
    color: #666;
    min-width: 20px;
  }

  &:hover svg {
    color: #0066cc;
  }
`;o.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin: 1rem 0;
`;o(pi)`
  color: #dc2626;
  border-color: #fecaca;

  &:hover {
    background-color: #fef2f2;
    border-color: #dc2626;
    color: #dc2626;
  }

  svg {
    color: #dc2626;
  }

  &:hover svg {
    color: #dc2626;
  }
`;const mi=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    gap: 2rem;
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    gap: 1.5rem;
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    gap: 1.25rem;
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    gap: 1rem;
  }
`,me=o.div`
  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  ${""}
  min-width: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    ${""}
    min-width: 200px;
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    ${""}
    min-width: 180px;
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    ${""}
    min-width: 160px;
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    ${""}
    min-width: 140px;
  }
`,xe=o.div`
  width: 50px;
  height: 50px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,he=o.h3`
  font-size: 1rem;
  font-family: Cairo;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`,fe=o.div`
  font-size:2rem;
  font-family: Cairo;
  font-weight: 700;
  color: #015cab;
  text-transform: uppercase;
  text-align: center;

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;o.p`
  font-size: 12px;
  font-family: Cairo;
  font-weight: 400;
  color: #666;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`;const xi=o.div`
  display: flex;
  flex-direction: column;
  direction: ${i=>i.isRTL?"rtl":"ltr"};
  width: 100%;
  gap: 30px;
`,hi=o.h2`
  font-size: 24px;
  font-family: Cairo;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  text-align: ${i=>i.isRTL?"right":"left"};
  margin: 0 0 20px 0;

  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    font-size: 28px;
    margin: 0 0 25px 0;
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    font-size: 24px;
    margin: 0 0 20px 0;
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    font-size: 22px;
    margin: 0 0 18px 0;
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    font-size: 20px;
    margin: 0 0 15px 0;
  }
`,ge=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,U=o.div`
  display: flex;
  gap: 0.8rem;
  align-items: stretch;
  width: 100%;

  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    gap: 1.5rem;
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    gap: 1rem;
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    gap: 0.8rem;
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }
`,fi=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 50%;

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    width: 100%;
  }
`,P=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 50%;

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    width: 100%;
  }
`;o.span`
  color: #f00000;
  font-size: 18px;
  font-family: Cairo;
  font-weight: 700;
`;const Q=o.select`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 0.875rem;
  font-family: Cairo;
  font-weight: 400;
  background: transparent;
  color: #333;
  text-align: ${i=>i.isRTL?"right":"left"};
  ${""}
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: ${({isRTL:i})=>i?"left":"right"} 1rem center;
  background-size: 1em;
  ${""}

  &:focus {
    outline: none;
  }

  option {
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: none;
  }
`,ue=o.button`
  padding: 6px 17px;
  background: #015cab;
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover {
    background: #004499;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(1, 92, 171, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  /* Large PC screens (1400px and above) */
  @media (min-width: 1400px) {
    padding: 18px 35px;
    font-size: 20px;
    min-width: 180px;
  }

  /* Small PC screens (1024px - 1399px) */
  @media (max-width: 1399px) and (min-width: 1024px) {
    padding: 15px 30px;
    font-size: 18px;
    min-width: 150px;
  }

  /* Tablet screens (768px - 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    min-width: 140px;
  }

  /* Mobile screens (below 768px) */
  @media (max-width: 767px) {
    padding: 12px 24px;
    font-size: 14px;
    min-width: 120px;
    align-self: center;
  }
`,gi=o.div`
  width: 100%;
  height: 1px;
  background-color: #dfdfdf;
  margin: 20px 0;
`,ui=o.span`
  color: var(--primary-color);
  font-size: 18px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  margin-left: 8px;
`,wi=o.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,X=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ee=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  font-family: Cairo, sans-serif;
`,ie=o.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: Cairo, sans-serif;
  transition: border-color 0.2s;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #015cab;
    box-shadow: 0 0 0 3px rgba(1, 92, 171, 0.1);
  }

  &.error {
    border-color: #ef4444;
  }
`,re=o.span`
  color: #ef4444;
  font-size: 0.75rem;
  font-family: Cairo, sans-serif;
`,bi=o.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,we=o.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  font-family: Cairo, sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  flex: 1;

  &.primary {
    background: #015cab;
    color: white;

    &:hover {
      background: #014a8a;
    }

    &:disabled {
      background: #D9D9D9;
      cursor: not-allowed;
    }
  }

  &.secondary {
    background: #f3f4f6;
    color: #374151;

    &:hover {
      background: #e5e7eb;
    }
  }
`,ji=({isOpen:i,onClose:z})=>{const{t:r,i18n:O}=ye(),l=O.resolvedLanguage==="ar",{changePassword:R}=je(),[h,M]=c.useState(!1),[L,d]=c.useState(!1),[u,G]=c.useState(!1),{control:k,handleSubmit:D,watch:Y,formState:{errors:p,isSubmitting:E},reset:I}=be({defaultValues:{oldPassword:"",newPassword:"",confirmPassword:""}}),V=Y("newPassword"),_=async n=>{try{const m={oldPassword:W(n.oldPassword),newPassword:W(n.newPassword),confirmPassword:W(n.confirmPassword)};await R(m),I(),z()}catch(m){console.error("Password change error:",m)}},B=()=>{I(),z()};return i?e.jsx(Je,{onClose:z,modalTitle:r("profile.changePassword"),children:e.jsxs(wi,{onSubmit:D(_),children:[e.jsxs(X,{children:[e.jsx(ee,{htmlFor:"oldPassword",isRTL:l,children:r("profile.oldPassword")}),e.jsx(x,{name:"oldPassword",control:k,id:"oldPassword",rules:{required:r("checkout.inputRequired")},render:({field:n})=>e.jsxs("div",{style:{position:"relative"},children:[e.jsx(ie,{...n,type:h?"text":"password",isRTL:l,className:p.oldPassword?"error":"",style:{direction:"ltr",paddingLeft:l?"2.5rem":"0"}}),e.jsx(H,{type:"button",onClick:()=>M(m=>!m),isRTL:l,children:h?e.jsx(J,{}):e.jsx(K,{})})]})}),p.oldPassword&&e.jsx(re,{children:p.oldPassword.message})]}),e.jsxs(X,{children:[e.jsx(ee,{htmlFor:"newPassword",isRTL:l,children:r("profile.newPassword")}),e.jsx(x,{name:"newPassword",control:k,id:"newPassword",rules:{required:r("checkout.inputRequired"),minLength:{value:6,message:r("auth.register.passwordMinLength")}},render:({field:n})=>e.jsxs("div",{style:{position:"relative"},children:[e.jsx(ie,{...n,type:L?"text":"password",isRTL:l,className:p.newPassword?"error":"",style:{direction:"ltr",paddingLeft:l?"2.5rem":"0"}}),e.jsx(H,{type:"button",onClick:()=>d(m=>!m),isRTL:l,children:L?e.jsx(J,{}):e.jsx(K,{})})]})}),p.newPassword&&e.jsx(re,{children:p.newPassword.message})]}),e.jsxs(X,{children:[e.jsx(ee,{htmlFor:"confirmPassword",isRTL:l,children:r("profile.confirmNewPassword")}),e.jsx(x,{name:"confirmPassword",control:k,id:"confirmPassword",rules:{required:r("checkout.inputRequired"),validate:n=>n===V||r("auth.register.passwordMismatch")},render:({field:n})=>e.jsxs("div",{style:{position:"relative"},children:[e.jsx(ie,{...n,type:u?"text":"password",isRTL:l,className:p.confirmPassword?"error":"",style:{direction:"ltr",paddingLeft:l?"2.5rem":"0"}}),e.jsx(H,{type:"button",onClick:()=>G(m=>!m),isRTL:l,children:u?e.jsx(J,{}):e.jsx(K,{})})]})}),p.confirmPassword&&e.jsx(re,{children:p.confirmPassword.message})]}),e.jsxs(bi,{children:[e.jsx(we,{type:"button",className:"secondary",onClick:B,children:r("common.cancel")}),e.jsx(we,{type:"submit",className:"primary",disabled:E,children:r(E?"common.loading":"profile.updatePassword")})]})]})}):null},Ni=()=>{const{t:i,i18n:z}=ye(),r=z.resolvedLanguage==="ar",[O,l]=c.useState(null),[R,h]=c.useState(""),[M,L]=c.useState(0),[d,u]=c.useState(!1),[G,k]=c.useState(!1),D=c.useRef(null),[Y,p]=c.useState([]),[E,I]=c.useState([]),[V,_]=c.useState({mobile:"EG"}),B=Ee(),{userProfile:n,isUserProfileLoading:m,updateUserImage:Pe,refetchUserProfile:Ce}=je(),{data:Se=[],isLoading:ke}=Z("Governance"),{data:te=[],isLoading:Fe}=Z("City"),{data:se=[],isLoading:ze}=Z("Village");c.useEffect(()=>{p(te),I(se),l(n?.profileImage)},[te,se]);const{control:w,handleSubmit:Le,watch:De,formState:{errors:b,isSubmitting:oe}}=be({defaultValues:{birthDate:"",fullName:"",email:"",mobileNumber:"",password:"",confirmPassword:"",governorate:"",city:"",village:"",detailedAddress:""},values:{birthDate:n?.dateOfBirth?new Date(n.dateOfBirth).toISOString().split("T")[0]:"0001-01-01",fullName:n?.fullName||"",email:n?.email||"",mobileNumber:n?.phoneNumber||"",password:"",confirmPassword:"",governorate:n?.governanceId||"",city:n?.cityId||"",village:n?.villageId||"",detailedAddress:n?.addressDetails||""}}),ne=De("birthDate"),A=()=>{if(!ne)return!1;const t=new Date(ne),s=new Date;return t.setHours(0,0,0,0),s.setHours(0,0,0,0),t>=s},Ie=["image/jpeg","image/jpg","image/png","image/gif","image/webp"],ae=5*1024*1024,le=t=>{if(t===0)return"0 B";const s=1024,a=["B","KB","MB","GB","TB"],f=Math.floor(Math.log(t)/Math.log(s));return parseFloat((t/Math.pow(s,f)).toFixed(2))+" "+a[f]},$e=async t=>{const s=t.target.files[0];if(h(""),L(0),u(!0),!s){u(!1);return}if(!Ie.includes(s.type)){const a=i("profile.invalidFileType");h(a),g.error(a,{position:r?"bottom-left":"bottom-right"}),u(!1);return}if(s.size>ae){const a=`${i("profile.fileTooLarge")} (${le(s.size)} > ${le(ae)})`;h(a),g.error(a,{position:r?"bottom-left":"bottom-right"}),u(!1);return}try{const a=await new Promise($=>{Ze.imageFileResizer(s,300,300,"JPEG",80,0,C=>{$(C)},"file")}),f=new File([a],s.name,{type:"image/jpeg",lastModified:Date.now()}),q=new FileReader;q.onload=$=>{const C=new Uint8Array($.target.result).subarray(0,4);let ce="";for(let F=0;F<C.length;F++)ce+=C[F].toString(16);if(!{"89504e47":"image/png",47494638:"image/gif",ffd8ffe0:"image/jpeg",ffd8ffe1:"image/jpeg",ffd8ffe2:"image/jpeg",ffd8ffe3:"image/jpeg",ffd8ffe8:"image/jpeg",52494646:"image/webp"}[ce]){const F=i("profile.invalidFileType");h(F),g.error(F,{position:r?"bottom-left":"bottom-right"}),u(!1);return}l(URL.createObjectURL(f))};try{await Pe(f,L)}catch($){const C=i("profile.imageProcessingError");throw h(C),g.error(C,{position:r?"bottom-left":"bottom-right"}),$}q.readAsArrayBuffer(f)}catch(a){console.error("Error resizing image:",a);const f=i("profile.imageProcessingError");h(f),g.error(f,{position:r?"bottom-left":"bottom-right"})}finally{u(!1)}},de=()=>{d||D.current?.click()},Te=async t=>{const s=[];if(t.fullName?.trim()||s.push(i("profile.fullName")),t.email?.trim()||s.push(i("profile.email")),t.mobileNumber?.trim()||s.push(i("profile.phone")),(!t.birthDate||t.birthDate==="0001-01-01")&&s.push(i("profile.birthDate")),s.length>0){const q=s.join(", ");g.error(i("profile.missingFields",{fields:q}),{position:r?"bottom-left":"bottom-right"});return}const a={fullName:t.fullName,phoneNumber:t.mobileNumber,dateOfBirth:new Date(t.birthDate).toISOString(),...t.governorate&&{GovernanceId:+t.governorate},...t.city&&{cityId:+t.city},...t.village&&{villageId:+t.village},...t.detailedAddress&&{addressDetails:t.detailedAddress}};(await He(a)).succeeded?(g.success(i("profile.updateSuccess",{position:r?"bottom-right":"bottom-left"})),Ce()):g.error(i("profile.updateError",{position:r?"bottom-left":"bottom-right"}))},Ne=()=>{k(!0)},Re=async t=>{try{g.success(i("profile.passwordChangedSuccessfully",{position:r?"bottom-left":"bottom-right"}))}catch(s){console.error("Password change error:",s),g.error(i("profile.passwordChangeError",{position:r?"bottom-left":"bottom-right"}))}};return m||ke||Fe||ze?e.jsxs(Be,{children:[e.jsx(pe,{}),i("common.loading")]}):e.jsxs(Ae,{children:[e.jsx(We,{}),e.jsxs(Xe,{children:[e.jsxs(ei,{children:[e.jsxs(ri,{children:[e.jsxs(ve,{onClick:de,style:{cursor:d?"not-allowed":"pointer",opacity:d?.8:1},children:[e.jsx(ti,{src:O||n?.profileImage||"https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?w=360",alt:"Profile"}),d&&e.jsx(oi,{children:e.jsxs(ni,{children:[e.jsx(ai,{progress:M}),e.jsxs(li,{children:[M,"%"]})]})}),!d&&e.jsx(si,{children:e.jsx("span",{children:"📷"})})]}),e.jsx(di,{onClick:de,style:{cursor:d?"not-allowed":"pointer",opacity:d?.6:1},children:i(d?"profile.uploading":"profile.changePicture")}),R&&e.jsxs("div",{role:"alert",style:{background:"#fee2e2",border:"1px solid #fecaca",color:"#b91c1c",fontSize:"0.9rem",marginTop:"0.5rem",padding:"8px 10px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[e.jsx("span",{style:{lineHeight:1.4},children:R}),e.jsx("button",{type:"button",onClick:()=>{h(""),d||D.current?.click()},style:{background:"#b91c1c",color:"#fff",border:0,borderRadius:6,padding:"6px 10px",cursor:d?"not-allowed":"pointer"},disabled:d,children:i("common.tryAgain")||"Try again"})]}),e.jsx(ci,{ref:D,type:"file",accept:"image/*",onChange:$e})]}),e.jsxs(mi,{children:[e.jsxs(me,{children:[e.jsx(xe,{children:e.jsx("img",{src:Qe,alt:"total_donations"})}),e.jsx(he,{children:i("profile.totalDonations")}),e.jsxs(fe,{children:[n?.totalDonations," ",e.jsx("span",{children:i("campaigns.campaignCard.amountcurrency")})]})]}),e.jsxs(me,{children:[e.jsx(xe,{children:e.jsx("img",{src:Ke,alt:"campaigns_participated"})}),e.jsx(he,{children:i("profile.campaignsParticipated")}),e.jsx(fe,{children:n?.totalNumberOfCampaignsParticipatedIn})]})]})]}),e.jsx(ii,{children:e.jsxs(xi,{isRTL:r,children:[e.jsx(qe,{isRTL:r,children:i("profile.title")}),e.jsxs("form",{onSubmit:Le(Te),children:[e.jsxs(ge,{children:[e.jsxs(U,{children:[e.jsx(P,{children:e.jsx(j,{children:e.jsxs(y,{style:{margin:"0"},children:[e.jsxs(S,{children:[e.jsxs(v,{htmlFor:"fullName",isRTL:r,children:[i("profile.fullName"),":"]}),e.jsx(x,{name:"fullName",control:w,id:"fullName",rules:{required:i("checkout.inputRequired")},render:({field:t})=>e.jsx(T,{...t,type:"text",isRTL:r})})]}),b.fullName&&e.jsx(N,{children:b.fullName.message})]})})}),e.jsx(P,{children:e.jsx(j,{children:e.jsxs(y,{style:{margin:"0"},children:[e.jsxs(S,{children:[e.jsxs(v,{htmlFor:"birthDate",isRTL:r,children:[i("profile.birthDate"),":"]}),e.jsx(x,{name:"birthDate",control:w,id:"birthDate",rules:{required:i("checkout.inputRequired"),validate:t=>{if(!t)return!0;const s=new Date;return s.setFullYear(s.getFullYear()-6),new Date(t)>s?i("errors.minAgeError",{age:6}):!0},min:{value:new Date().getFullYear()-100,message:i("checkout.invalidDate")},max:{value:new Date().getFullYear()-18,message:i("checkout.invalidDate")}},render:({field:t})=>e.jsx(T,{isRTL:r,...t,type:"date"})})]}),b.birthDate&&e.jsx(N,{children:b.birthDate.message}),A()&&e.jsx(N,{children:i("profile.invalidBirthDate")})]})})})]}),e.jsxs(U,{children:[e.jsx(P,{children:e.jsx(j,{children:e.jsxs(y,{style:{margin:"0"},children:[e.jsxs(S,{children:[e.jsxs(v,{htmlFor:"email",isRTL:r,children:[i("profile.email"),":"]}),e.jsx(x,{name:"email",control:w,id:"email",rules:{required:i("checkout.inputRequired"),pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:i("auth.register.invalidEmail")}},render:({field:t})=>e.jsx(T,{...t,type:"email",isRTL:r,style:{direction:"ltr",textAlign:"left",paddingLeft:"10px",paddingRight:"0"}})})]}),b.email&&e.jsx(N,{children:b.email.message})]})})}),e.jsx(fi,{children:e.jsx(j,{children:e.jsxs(y,{style:{margin:"0"},children:[e.jsxs(Ue,{isRTL:r,margin:"0",children:[e.jsx(Oe,{isRTL:r,children:e.jsx(Me,{country:V.mobile.toLowerCase(),disableSearchIcon:!0,enableSearch:!0,countryCodeEditable:!1,onChange:(t,s)=>_(a=>({...a,mobile:s?.countryCode?.toUpperCase()||"EG"}))})}),e.jsxs(Ge,{children:[e.jsxs(v,{htmlFor:"mobileNumber",isRTL:r,children:[i("profile.phone"),":"]}),e.jsx(x,{name:"mobileNumber",control:w,id:"mobileNumber",rules:{required:i("checkout.inputRequired"),minLength:{value:9,message:i("checkout.invalidPhoneNum")}},render:({field:t})=>e.jsx(T,{...t,type:"tel",padding:"0",isRTL:r})})]})]}),b.mobileNumber&&e.jsx(N,{children:b.mobileNumber.message})]})})})]}),e.jsxs(ue,{type:"button",onClick:Ne,children:[i("profile.changePassword")," "]})]}),e.jsx(gi,{}),e.jsxs(ge,{children:[e.jsx(P,{children:e.jsxs(hi,{isRTL:r,children:[i("profile.address"),e.jsxs(ui,{children:[" (",i("profile.optional"),")"]})]})}),e.jsxs(U,{children:[e.jsx(P,{children:e.jsx(j,{children:e.jsx(y,{style:{margin:"0"},children:e.jsxs(S,{children:[e.jsxs(v,{isRequired:!1,htmlFor:"governorate",isRTL:r,children:[i("profile.governorate"),":"]}),e.jsx(x,{name:"governorate",control:w,id:"governorate",render:({field:t})=>e.jsxs(Q,{...t,onChange:s=>{t.onChange(s),B(Ye.initiate(s.target.value)).then(a=>{p(a.data.relatedRecords)})},isRTL:r,children:[e.jsx("option",{value:"",children:i("profile.select")}),Se.map(s=>e.jsx("option",{value:s.id,children:r?s.nameAr:s.nameEn},s.id))]})})]})})})}),e.jsx(P,{children:e.jsx(j,{children:e.jsx(y,{style:{margin:"0"},children:e.jsxs(S,{children:[e.jsxs(v,{isRequired:!1,htmlFor:"city",isRTL:r,children:[i("profile.city"),":"]}),e.jsx(x,{name:"city",control:w,id:"city",render:({field:t})=>e.jsxs(Q,{...t,onChange:s=>{t.onChange(s),B(Ve.initiate(s.target.value)).then(a=>{I(a.data.relatedRecords)})},isRTL:r,children:[e.jsx("option",{value:"",children:i("profile.select")}),Y.map(s=>e.jsx("option",{value:s.id,children:r?s.nameAr:s.nameEn},s.id))]})})]})})})})]}),e.jsxs(U,{children:[e.jsx(P,{children:e.jsx(j,{children:e.jsx(y,{style:{margin:"0"},children:e.jsxs(S,{children:[e.jsxs(v,{isRequired:!1,htmlFor:"village",isRTL:r,children:[i("profile.village"),":"]}),e.jsx(x,{name:"village",control:w,id:"village",render:({field:t})=>e.jsxs(Q,{...t,isRTL:r,children:[e.jsx("option",{value:"",children:i("profile.select")}),E.map(s=>e.jsx("option",{value:s.id,children:r?s.nameAr:s.nameEn},s.id))]})})]})})})}),e.jsx(P,{children:e.jsx(j,{children:e.jsx(y,{style:{margin:"0"},children:e.jsxs(S,{children:[e.jsxs(v,{isRequired:!1,htmlFor:"detailedAddress",isRTL:r,children:[i("profile.detailedAddress"),":"]}),e.jsx(x,{name:"detailedAddress",control:w,id:"detailedAddress",render:({field:t})=>e.jsx(T,{...t,type:"text",isRTL:r})})]})})})})]})]}),e.jsxs(ue,{type:"submit",disabled:A()||oe,style:{opacity:A()?.6:1,cursor:A()?"not-allowed":"pointer"},children:[i("profile.saveChanges")," ",oe&&e.jsx("span",{children:e.jsx(pe,{size:"20px"})})," "]})]})]})})]}),e.jsx(_e,{position:r?"bottom-right":"bottom-left"}),e.jsx(ji,{isOpen:G,onClose:()=>k(!1),onSubmit:Re})]})};export{Ni as default};
