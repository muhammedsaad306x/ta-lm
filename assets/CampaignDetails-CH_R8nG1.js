import{j as e}from"./map-vendor-CkCCoZy4.js";import{B as ln}from"./Breadcrumbs-CzB9j62p.js";import{r as m,u as cn,C as A,P as fe}from"./form-vendor-8JSUuxVu.js";import{e as dn,j as mn,c as un,a as hn,u as pn}from"./tanstack-vendor-DVbpgvBY.js";import{r as ie,H as oe,k as xn}from"./react-icons-vendor-D75jEhkE.js";import{H as Pe,A as Se,B as $e,p as gn,ad as fn,af as bn,f as jn,ai as yn,L as wn,d as In,E as qe,ag as Fe,P as vn,e as kn,F as te,r as He,t as re,v as ae,X as be,Y as je,Z as ye,_ as we,x as Cn,a7 as An,aj as We,ah as Pn,y as g,ak as Sn}from"./index-CQputUX_.js";import{P as $n,a as Nn,b as Bn,c as Mn,d as Vn,T as zn}from"./CampaignCard.styles-DZbdjgt-.js";import{d as s,l as Qe}from"./ui-vendor-BVv7PGpf.js";import{A as En,O as F,k as Ne,a as se,l as le,b as Dn,I as On,S as Tn,C as qn,m as Fn,n as Hn,T as Wn,c as Un,d as _n,e as Gn,f as Ln,g as Qn,o as Rn,p as Kn,h as Zn,q as Jn,r as Xn,F as Yn,s as et,t as Ie,u as nt,v as ve,w as ke,x as O,y as Ce,D as tt,z as rt,E as at,G as Ue,H as it,J as ot,R as st,B as lt,P as ct,i as dt,j as mt}from"./CampaignDetails.styles-CB3upz5i.js";import{u as ce}from"./vendor-8UwSOQY7.js";import{M as ut}from"./Model-D50lhyh2.js";import{p as Ae}from"./parsePhoneNumber-DYNEpPXc.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-BKWaKWrj.js";s.div`
  margin-bottom: 1rem;
  text-align: ${({isRTL:n})=>n?"right":"left"};
`;s.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1.5px solid #bfbfbf;
  border-radius: 0.625rem;
  outline: none;
  transition: border-color 0.2s;
  background-color: #f5f5f5;

  ${({hasError:n})=>n&&Qe`
      border-color: #e74c3c;
    `}
  &::placeholder {
    color: #000;
    opacity: 0.9;
    font-size: 0.95rem;
  }
  &:focus {
    border-color: var(--primary-light);
  }
`;const P=s.p`
  margin-top: 0.25rem;
  color: #e74c3c;
  font-size: 0.85rem;
  text-align: justify;
`;s.div`
  position: relative;
  margin-bottom: 1.25rem;
`;s.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 0.8rem 0.75rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border: 1.5px solid #bfbfbf;
  border-radius: 0.625rem;
  outline: none;
  transition: border-color 0.2s;
  background-color: #f5f5f5;

  ${({hasError:n})=>n&&Qe`
      border-color: #e74c3c;
    `}

  &:focus {
    outline: none;
  }
`;s.svg`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
  transform: ${({isOpen:n})=>n?"rotate(180deg)":"rotate(0deg)"};
`;s.ul`
  position: absolute;
  z-index: 10;
  margin-top: 0.25rem;
  width: 100%;
  background: white;
  border: 1px solid var(--primary-green-light);
  border-radius: 0.375rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;s.li``;s.button`
  width: 100%;
  padding: 0.5rem;
  text-align: right;
  font-size: 0.875rem;
  color: var(--primary-light);
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--background-light);
  }

  &:focus {
    outline: none;
  }
`;s.span`
  font-size: 0.875rem;
`;s.span`
  font-size: 0.875rem;
`;function ht({onAmountChange:n,basePrice:c,selectedAmount:a}){const{t:u,i18n:f}=ce(),v=f.resolvedLanguage==="ar",y=[c,c*2,c*3],H=a&&!y.includes(Number(a)),[S,w]=m.useState(H?String(a):""),[N,k]=m.useState(H?"custom":Number(a||c));m.useEffect(()=>{a||n(c)},[c]);const I=b=>{k(b),typeof b=="number"&&(w(""),n(b))},j=b=>{const E=b.target.value;/^\d*$/.test(E)&&(w(E),k("custom"),n(Number(E)))};return e.jsx(e.Fragment,{children:e.jsxs(En,{children:[e.jsx(F,{isRTL:v,children:u("checkout.amount")}),e.jsxs("div",{children:[e.jsxs(Ne,{children:[y.map(b=>e.jsx(se,{type:"button",onClick:()=>I(b),$active:N===b,children:e.jsx(le,{isRTL:v,children:e.jsx("span",{children:b})})},b)),e.jsx(Dn,{isRTL:v,children:u("checkout.amountcurrency")})]}),e.jsx("div",{style:{display:"flex",alignItems:"center",background:"none",color:"black"},children:e.jsx(se,{type:"button",style:{width:"92%",margin:"1rem 0",background:"none",color:"black"},as:"div",$active:N==="custom",onClick:()=>k("custom"),children:e.jsx(le,{isRTL:v,children:e.jsx(On,{type:"text",placeholder:u("checkout.otherAmout"),value:S,onClick:b=>b.stopPropagation(),onChange:j,isRTL:v})})})})]})]})})}const pt=s.div`
  margin: 1rem 0;
  ${""}
  border-radius: 8px;
  direction: ${({isRTL:n})=>n?"rtl":"ltr"};

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
`,xt=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`,gt=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: ${({isRTL:n})=>n?"row-reverse":"row"};

  @media (max-width: 768px) {
    gap: 0.4rem;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`,ft=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 60%;
  flex-direction: ${({isRTL:n})=>n?"row":"row-reverse"};
  flex-wrap: nowrap;
  overflow: visible;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,_e=s.div`
  display: flex;
  flex-direction: ${({isRTL:n})=>n?"row":"row-reverse"};
  align-items: center;
  justify-content: space-around;

  border: ${({border:n})=>n?"1px solid #bfbfbf":"none"};
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
  text-align: ${({isRTL:n})=>n?"right":"left"};
  overflow: visible;

  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: space-between;
    padding: 0.4rem 0.5rem;
  }

  @media (max-width: 480px) {
    align-items: center;
    gap: 0.2rem;
    padding: 0.5rem;
  }
`,bt=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 40px;
  flex-direction: ${({isRTL:n})=>n?"row":"row-reverse"};

  @media (max-width: 768px) {
    min-height: 35px;
  }

  @media (max-width: 480px) {
    min-height: 30px;
    gap: 0.25rem;
  }
`;s.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--primary-light, #2e7d32);
  order: ${({isRTL:n})=>n?"2":"1"};

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;const jt=s.label`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  text-align: ${({isRTL:n})=>n?"right":"left"};
  white-space: ${({isRTL:n})=>n?"nowrap":"normal"};
  order: ${({isRTL:n})=>n?"1":"2"};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,Ge=s.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-align: ${({isRTL:n})=>n?"right":"left"};
  white-space: ${({isRTL:n})=>n?"nowrap":"normal"};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,yt=s.div`
  position: relative;
  direction: ${({isRTL:n})=>n?"rtl":"ltr"};
`,wt=s.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.2s;
  height: 40px;
  ${({isRTL:n})=>n?"margin-right: 5px;":"margin-left: 5px;"}
  /* flex-direction: ${({isRTL:n})=>n?"row-reverse":"row"}; */

  &:hover {
    border-color: var(--primary-light, #2e7d32);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-light, #2e7d32);
  }

  @media (max-width: 768px) {
    height: 35px;
    font-size: 0.85rem;
    padding: 0.4rem 0.5rem;
  }

  @media (max-width: 480px) {
    height: 30px;
    font-size: 0.8rem;
    padding: 0.35rem 0.45rem;
  }
`,It=s.span`
  font-size: 0.75rem;
  transition: transform 0.3s ease;
  transform: ${({isOpen:n})=>n?"rotate(180deg)":"rotate(0deg)"};
  margin-left: ${({isRTL:n})=>n?"0":"0.5rem"};
  margin-right: ${({isRTL:n})=>n?"0.5rem":"0"};
  order: ${({isRTL:n})=>n?"1":"2"};

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`,vt=s.div`
  position: absolute;
  top: 100%;
  left: ${({isRTL:n})=>n?"auto":"0"};
  right: ${({isRTL:n})=>n?"0":"auto"};
  background-color: white;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 2px;
  direction: ${({isRTL:n})=>n?"rtl":"ltr"};

  @media (max-width: 768px) {
    max-height: 150px;
  }

  @media (max-width: 480px) {
    max-height: 120px;
  }
`,kt=s.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  text-align: ${({isRTL:n})=>n?"right":"left"};
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &:first-child {
    border-radius: ${({isRTL:n})=>n?"0 0 8px 8px":"8px 8px 0 0"};
  }

  &:last-child {
    border-radius: ${({isRTL:n})=>n?"8px 8px 0 0":"0 0 8px 8px"};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.6rem;
    font-size: 0.85rem;
  }
`,Ct=s.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-direction: ${({isRTL:n})=>n?"row-reverse":"row"};
  flex-shrink: 0;
  min-width: 0;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.35rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`,At=s.input`
  font-size: 0.9rem;
  text-align: center;
  cursor: default;
  width: 3rem;
  min-width: 3.25rem;
  height: 40px;
  direction: ${({isRTL:n})=>n?"rtl":"ltr"};
  flex-shrink: 0;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.6rem;
    height: 35px;
    width: 130px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 5px;
    height: 30px;
    width: 30px;
  }
`,Pt=s.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  flex-shrink: 0;
  order: ${({isRTL:n})=>n?"1":"2"};
  ${""}

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin: 0 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin: 0 0.4rem;
  }
`,St=s.div`
  direction: ${({isRTL:n})=>n?"rtl":"ltr"};
  text-align: ${({isRTL:n})=>n?"right":"left"};
  line-height: 1.6;
  color: #333;
`,T=s.section`
  margin-bottom: 1.5rem;
`,q=s.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2e7d32;
  margin-bottom: 0.75rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
`,$t=s.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #555;
  font-style: italic;
`,Q=s.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
`,R=s.li`
  position: relative;
  padding: 0.5rem 0;
  padding-${({isRTL:n})=>n?"right":"left"}: 1.5rem;
  
  &:before {
    content: "•";
    color: #2e7d32;
    font-weight: bold;
    position: absolute;
    ${({isRTL:n})=>n?"right":"left"}: 0;
    top: 0.5rem;
  }
`,Le=s.p`
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  color: #666;
`,Nt=s.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid #e9ecef;
`,Bt=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
  flex-direction: ${({isRTL:n})=>n?"row-reverse":"row"};
`,Mt=s.span`
  font-size: 1.2rem;
  color: #2e7d32;
`,Vt=s.span`
  font-size: 0.95rem;
  color: #555;
`,zt=({isRTL:n=!1})=>{const{t:c}=ce(),a=c("checkout.installmentPolicyContent",{returnObjects:!0});return e.jsxs(St,{isRTL:n,children:[e.jsx($t,{isRTL:n,children:a.intro}),e.jsxs(T,{children:[e.jsx(q,{isRTL:n,children:a.generalProvisions.title}),e.jsx(Q,{children:a.generalProvisions.points.map((u,f)=>e.jsx(R,{isRTL:n,children:u},f))})]}),e.jsxs(T,{children:[e.jsx(q,{isRTL:n,children:a.eligibility.title}),e.jsx(Q,{children:a.eligibility.points.map((u,f)=>e.jsx(R,{isRTL:n,children:u},f))})]}),e.jsxs(T,{children:[e.jsx(q,{isRTL:n,children:a.paymentPlan.title}),e.jsx(Q,{children:a.paymentPlan.points.map((u,f)=>e.jsx(R,{isRTL:n,children:u},f))})]}),e.jsxs(T,{children:[e.jsx(q,{isRTL:n,children:a.paymentMethods.title}),e.jsx(Q,{children:a.paymentMethods.points.map((u,f)=>e.jsx(R,{isRTL:n,children:u},f))})]}),e.jsxs(T,{children:[e.jsx(q,{isRTL:n,children:a.latePayment.title}),e.jsx(Le,{isRTL:n,children:a.latePayment.description}),e.jsx(Q,{children:a.latePayment.points.map((u,f)=>e.jsx(R,{isRTL:n,children:u},f))})]}),e.jsxs(T,{children:[e.jsx(q,{isRTL:n,children:a.inquiries.title}),e.jsx(Le,{isRTL:n,children:a.inquiries.description}),e.jsx(Nt,{children:a.inquiries.points.map((u,f)=>e.jsxs(Bt,{isRTL:n,children:[e.jsx(Mt,{children:u.match(/^[^\s]+/)[0]}),e.jsx(Vt,{children:u.replace(/^[^\s]+\s/,"")})]},f))})]})]})},Et=({watch:n,setValue:c,isRTL:a=!0,totalAmount:u=0,isInstallmentPayment:f,setIsInstallmentPayment:v,showPolicyModal:y,setShowPolicyModal:H})=>{const{t:S}=ce(),[w,N]=m.useState(f),[k,I]=m.useState(!1),[j,b]=m.useState(6),W=(n("donationAmount")||u)/j,K=[3,6,9];m.useEffect(()=>{w?(c("installmentAmount",W),c("numberOfInstallments",j),v(!0)):(c("installmentAmount",void 0),c("numberOfInstallments",void 0),v(!1))},[w,j,f,W,c,v]);const D=()=>{const h=!w;N(h),v(h)},U=h=>{b(h),I(!1)};return e.jsxs(pt,{isRTL:a,children:[e.jsxs(xt,{isRTL:a,children:[e.jsx(gt,{isRTL:a,children:e.jsxs(bt,{isRTL:a,as:"label",children:[e.jsx(Pe,{type:"checkbox",checked:w,onChange:D,id:"installment-checkbox"}),e.jsx(Se,{viewBox:"0 0 64 64",children:e.jsx($e,{d:"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"})}),e.jsx(jt,{htmlFor:"installment-checkbox",isRTL:a,as:"span",children:S("checkout.installmentPayment")})]})}),e.jsxs(ft,{isRTL:a,children:[e.jsxs(_e,{border:!0,isRTL:a,children:[e.jsxs(Ge,{isRTL:a,children:[S("checkout.numberOfInstallments"),":"]}),e.jsxs(yt,{isRTL:a,children:[e.jsxs(wt,{type:"button",onClick:()=>I(!k),isRTL:a,disabled:!w,children:[e.jsx(It,{isOpen:k,isRTL:a,children:a?e.jsx(ie,{size:15}):e.jsx(oe,{size:15})}),e.jsx("span",{children:j})]}),k&&e.jsx(vt,{isRTL:a,children:K.map(h=>e.jsx(kt,{onClick:()=>U(h),isRTL:a,children:h},h))})]})]}),e.jsxs(_e,{border:!0,isRTL:a,children:[e.jsxs(Ge,{isRTL:a,children:[S("checkout.installmentValue"),":"]}),e.jsx(Ct,{isRTL:a,children:e.jsx(At,{disabled:!0,type:"text",value:Math.round(W),readOnly:!0,isRTL:a})})]})]}),e.jsx(Pt,{isRTL:a,children:S("checkout.currency")})]}),y&&e.jsx(ut,{onClose:()=>H(!1),modalTitle:S("checkout.installmentPolicy"),children:e.jsx(zt,{isRTL:a})})]})};function Zt(){const{t:n,i18n:c}=ce(),a=c.resolvedLanguage==="ar",u=dn(),f=u.state?.donationData||{},v=Array.from({length:28},(r,i)=>i+1);let y=u.pathname.split("/");y.includes("ngos")&&y.includes("campaign-details")?(y[2]="$ngo_id",y[4]="$slug",y[5]="$id"):(y[2]="$slug",y[3]="$id"),y=y.join("/");const S=mn({from:y}).id,[w,N]=m.useState("eg"),[k,I]=m.useState(null),[j,b]=m.useState(!1),[E,W]=m.useState(!1),{isAuthenticated:K}=gn(),[D,U]=m.useState(!1),[h,Be]=m.useState(!1),[Z,Me]=m.useState(1),[$,_]=m.useState(null),[V,J]=m.useState(null),[Re,Ve]=m.useState(!1),[ze,Ee]=m.useState(1),[De,X]=m.useState(!1),de=un(),me=hn(),ue=fn(),G=m.useMemo(()=>({4:!0,5:!0}),[]),{control:C,handleSubmit:Ke,watch:he,getValues:Y,setValue:d,formState:{errors:p}}=cn({mode:"onChange",defaultValues:{donationIntention:f.donationIntention,sukNumber:1,donationAmount:f.amount,donationType:Z}}),{data:t,isLoading:Ze,error:Oe,refetch:Te}=bn(S),{data:pe}=jn("DonationIntention"),{data:xe}=pn({queryKey:["campaignsReminders"],queryFn:yn,enabled:!!(K&&t?.isReminderAllowed)});m.useEffect(()=>{if(xe?.items&&t?.id){const r=xe.items.find(i=>i.campaignId===t.id&&i.isActice);r?(X(!0),Ee(Number(r.dayOfMonth)||1)):X(!1)}},[xe,t?.id]),m.useEffect(()=>{const r=window.dataLayer||[],i=c.resolvedLanguage==="ar";if(r.push({event:"view_content",content_type:"campaign",content_id:t?.id,content_name:i?t?.titleAr:t?.titleEn,value:t?.basePrice||0,currency:"EGP"}),r.push({event:"view_campaign",campaign_id:t?.id,campaign_name:t?.titleEn,campaign_price:t?.basePrice}),t&&G[t?.campaignTypeId]){const l=t.basePrice*1;d("donationAmount",l)}if(t&&(t.campaignTypeId===3||t.campaignTypeId===4)){const o=t.basePrice;d("donationAmount",o),Me(1)}},[t,d,G]);const Je=async()=>{We({dayOfMonth:ze,campaignId:t.id}).then(r=>{r.succeeded?(g.success(n("reminders.updateSuccess")),X(!0),me.invalidateQueries({queryKey:["campaignsReminders"]})):g.error(r.message)})},Xe=async()=>{Sn(t.id).then(r=>{r.succeeded?(g.success(n("reminders.updateSuccess")),X(!1),me.invalidateQueries({queryKey:["campaignsReminders"]})):g.error(r.message)})};if(Ze)return e.jsx(e.Fragment,{children:e.jsxs(wn,{children:[e.jsx(In,{}),e.jsx("p",{children:n("common.loading")})]})});if(Oe)return e.jsxs(qe,{children:[e.jsxs(P,{children:[n("errors.error"),": ",Oe.message]}),e.jsx(Fe,{onClick:()=>Te(),children:n("common.retry")})]});if(Object.keys(t).length===0)return e.jsxs(qe,{children:[e.jsx(P,{children:n("common.noData")}),e.jsx(Fe,{onClick:()=>Te(),children:n("common.retry")})]});const Ye=r=>{if(!pe||!r.donationIntentions)return[];const i=r.donationIntentions.map(o=>o.id);return pe.filter(o=>i.includes(o.id))},en=()=>{Be(!0),d("sukNumber",1),d("donationAmount",1e3),b(!1),d("name",""),d("phone",""),d("whatsappNumber",""),_(null),d("onBehalfPhone",""),d("donnerMsg",""),J(null)},nn=()=>{Be(!1),b(!1),U(!1),J(null),_(null),d("donationAmount",t.basePrice),b(!1),d("name",""),d("phone",""),d("whatsappNumber",""),d("onBehalfPhone",""),d("donnerMsg","")},tn=async r=>{const{addOrUpdateCartItem:i}=ue,o=c.resolvedLanguage==="ar",l=Y("numberOfInstallments");if(j&&!D){g.error(o?"يرجى الموافقة على سياسة الدفع بالتقسيط":"Please agree to the installment payment policy");return}const{cartItems:z}=ue,L=z?.items?.find(B=>B.campaignId===t.id);if(E&&L){de({to:"/payment"});return}try{const B=Number(r.donationAmount)||0,ee=Y("numberOfInstallments"),M=j&&ee?Number(ee):j&&l?Number(l):1,ne=!!(j&&M>1),ge=ne&&M>1?Math.round(B/M):B,x={id:t.id,donationIntention:r.donationIntention,amount:ge,donationAmountTypeId:t.amountTypeId,numberOfShares:Math.round(B/t.basePrice),shareValue:t.basePrice,campaignId:t.id,isShareInSakk:r.donationType===2,isInstallmentPayment:ne,installmentMonths:M,sakkOwnerInfo:$,onBehalfInfo:V,campaign:{id:t.id,titleAr:t.titleAr,titleEn:t.titleEn,imageUrl:t.imageUrl,keyWords:t.keywords,intentions:t.donationIntentions,basePrice:t.basePrice,campaignTypeId:t.campaignTypeId}};await i(x),g.success(o?`تم إضافة ${t.titleAr} إلى السلة`:`${t.titleEn} added to cart!`),de({to:"/payment"})}catch(B){console.error("Failed to add/update cart item:",B),g.error(o?"حدث خطأ أثناء إضافة العنصر إلى السلة":"Error adding item to cart")}},rn=async()=>{const r=Y(),i=c.resolvedLanguage==="ar";if(t.campaignTypeId===4&&r.donationAmount<t.basePrice&&!j&&!h){g.error(i?"الحد الأدنى للمبلغ هو "+t.basePrice:"the donation amount must be more that "+t.basePrice);return}const{cartItems:o,addOrUpdateCartItem:l}=ue;if(W(!0),j&&!D){g.error(i?"يرجى الموافقة على سياسة الدفع بالتقسيط":"Please agree to the installment payment policy");return}if(Z!==1&&Z!==2){g.error(i?"يرجى اختيار نوع التبرع":"Please select a donation type");return}if(t.campaignTypeId===5&&!h){if(!$){g.error(i?"يرجى إدخال معلومات المالك أو الموظف":"Please enter the owner or employee information");return}const x=[];if((!$.fullName||$.fullName.trim()==="")&&x.push(i?"الاسم":"Name"),(!$.mobileNumber||$.mobileNumber.trim()==="")&&x.push(i?"رقم الهاتف":"Phone Number"),(!$.whatsappNumber||$.whatsappNumber.trim()==="")&&x.push(i?"رقم الواتساب":"WhatsApp Number"),x.length>0){g.error(i?`يرجى إدخال: ${x.join(", ")}`:`Please enter: ${x.join(", ")}`);return}}if(t.campaignTypeId===3){if(!V){g.error(i?"يرجى إدخال معلومات المالك أو الموظف":"Please enter the owner or employee information");return}const x=[];if((!V.mobileNumber||V.mobileNumber.trim()==="")&&x.push(i?"رقم الهاتف":"Phone Number"),(!V.message||V.message.trim()==="")&&x.push(i?"الرسالة":"Message"),x.length>0){g.error(i?`يرجى إدخال: ${x.join(", ")}`:`Please enter: ${x.join(", ")}`);return}}const z=r.donationAmount||t.basePrice,L=r.donationIntention;if(!L){g.error(i?"يرجى اختيار نية التبرع":"Please select a donation intention");return}if(!pe?.find(x=>x.id===parseInt(L))){g.error(i?"نية التبرع المختارة غير صحيحة":"Selected donation intention is invalid");return}const ee=o?.items?.find(x=>x.campaignId===t.id),M=j&&Number(Y("numberOfInstallments"))||1,ne=j&&M>1?Math.round(z/M):z,ge={id:t.id,donationIntention:L,amount:ne,donationAmountTypeId:t.amountTypeId,numberOfShares:Math.round(z/t.basePrice),shareValue:t.basePrice,campaignId:t.id,campaign:{id:t.id,titleAr:t.titleAr,titleEn:t.titleEn,imageUrl:t.imageUrl,keyWords:t.keywords,intentions:t.donationIntentions,basePrice:t.basePrice,campaignTypeId:t.campaignTypeId},isInstallmentPayment:j,isShareInSakk:h,installmentMonths:M,sakkOwnerInfo:$,onBehalfInfo:V};try{await l(ge),ee?g.info(i?`تم تحديث ${t.titleAr} في السلة`:`${t.titleEn} has been updated in cart!`):g.success(i?`تم إضافة ${t.titleAr} إلى السلة`:`${t.titleEn} added to cart!`)}catch(x){console.error("Failed to add/update cart item:",x),g.error(i?"حدث خطأ أثناء إضافة العنصر إلى السلة":"Error adding item to cart")}},an=()=>{navigator.share?navigator.share({title:a?t.titleAr:t.titleEn,url:window.location.href}):(navigator.clipboard.writeText(window.location.href),g.success(n("checkout.clipboard")));const r=window.location.href;navigator.clipboard.writeText(r)},on=r=>{const i=/[\u0600-\u06FF]/,o=/[A-Za-z]/;return r?.length===0||i.test(r?.[0])?"rtl":o.test(r?.[0])?"ltr":"rtl"},sn=r=>{de({to:"/search",search:{query:(a?r.nameAr:r.nameEn).trim()}})};return e.jsxs(e.Fragment,{children:[e.jsx(vn,{title:`${a?t.titleAr:t.titleEn} | ${c.resolvedLanguage==="ar"?"صناع الحياة":"Life Makers"}`,description:a?t.descriptionAr?.replace(/<[^>]+>/g,"").slice(0,160):t.descriptionEn?.replace(/<[^>]+>/g,"").slice(0,160),lang:c.resolvedLanguage,openGraph:{ogImage:{ogImage:"/Logo.svg",ogImageAlt:c.resolvedLanguage==="ar"?"صوره الحمله":"campaign image"},ogUrl:`undefined/campaign-details/${a?t.titleAr:t.titleEn}/${t.id}`,ogTitle:a?t.titleAr:t.titleEn,ogDescription:a?t.descriptionAr?.replace(/<[^>]+>/g,"").slice(0,160):t.descriptionEn?.replace(/<[^>]+>/g,"").slice(0,160)},twitter:{twitterSummaryCard:{summaryCardImage:"/Logo.svg",summaryCardImageAlt:c.resolvedLanguage==="ar"?"صوره الحمله":"campaign image",summaryCardSiteUsername:"LifeMakersOrg"}}}),e.jsx(Tn,{padding:y.includes("ngos")?"0":"0 4rem",children:e.jsx(qn,{children:e.jsxs(Fn,{children:[e.jsxs(Hn,{isRTL:a,children:[!y.includes("ngos")&&e.jsx(ln,{}),e.jsxs(Wn,{children:[e.jsx(Un,{isRTL:a,children:a?t.titleAr:t.titleEn}),e.jsxs(_n,{onClick:an,children:[e.jsx("span",{children:n("checkout.shareBtn")}),e.jsx(Gn,{className:"share-icon"})]})]}),e.jsx(Ln,{children:e.jsx(Qn,{src:`https://lifemakers.org/Public/${t.coverUrl}`,alt:a?t.titleAr:t.titleEn})}),t.showProgressBar&&e.jsx(Rn,{children:e.jsxs($n,{children:[e.jsx("span",{style:{fontSize:"12px",color:"#666",marginBottom:"4px"},children:n("campaigns.campaignCard.progress")}),e.jsx(Nn,{children:e.jsx(Bn,{children:e.jsx(Mn,{style:{width:`${t.progressBarValue}%`}})})}),e.jsxs(Vn,{children:[t.progressBarValue,"%"]})]})}),e.jsx(zn,{children:t.keywords&&t.keywords.map(r=>e.jsxs(Kn,{onClick:()=>sn(r),children:["#",a?r.nameAr:r.nameEn]},r.id))}),e.jsx(Zn,{isRTL:a,as:"div",children:e.jsx(kn,{html:a?t?.descriptionAr:t?.descriptionEn,as:"div"})}),e.jsx(Jn,{isRTL:a,children:`${n("checkout.shareValue")}${t.basePrice} ${n("checkout.amountcurrency")}`})]}),e.jsxs(Xn,{children:[e.jsx(Yn,{children:e.jsx(et,{isRTL:a,children:n("checkout.donate")})}),e.jsx(Ie,{isRTL:a,children:n("checkout.donationDetails")}),e.jsxs(nt,{onSubmit:Ke(tn),children:[e.jsx(A,{name:"donationIntention",control:C,rules:{required:n("checkout.inputRequired")},render:()=>{const r=Ye(t);return e.jsxs("div",{style:{display:"flex",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem",alignItems:"flex-start"},children:[e.jsxs(F,{isRTL:a,children:[n("home.campaigns.donationIntention"),":"]}),e.jsxs("div",{children:[e.jsx(A,{name:"donationIntention",control:C,rules:{required:n("checkout.inputRequired")},render:({field:i})=>e.jsx(Ne,{children:r.map(o=>e.jsx(se,{type:"button",width:"auto",onClick:()=>i.onChange(o.id),$active:i.value===o.id,children:e.jsx(le,{isRTL:a,children:e.jsx("span",{children:a?o.nameAr:o.nameEn})})},o.id))})}),p.donationIntention&&e.jsx(P,{children:p.donationIntention.message})]})]})}}),!G[t?.campaignTypeId]&&t.campaignTypeId!==3&&e.jsxs(e.Fragment,{children:[e.jsx(A,{name:"donationAmount",control:C,rules:{required:n("checkout.inputRequired"),validate:r=>t.campaignTypeId===4?Number(r)>=t.basePrice||n("checkout.minimumAmount",{amount:t.basePrice}):!0},render:({field:r})=>e.jsx(ht,{basePrice:t.basePrice,selectedAmount:r.value,onAmountChange:r.onChange})}),p.donationAmount&&e.jsx(P,{children:p.donationAmount.message})]}),t?.campaignTypeId===5&&e.jsx(A,{name:"donationType",control:C,rules:{required:n("checkout.inputRequired")},render:()=>e.jsx("div",{children:e.jsxs("div",{style:{display:"flex",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem",alignItems:"flex-start"},children:[e.jsxs(F,{isRTL:a,children:[n("home.campaigns.donationType"),":"]}),e.jsxs("div",{children:[e.jsx(A,{name:"donationType",control:C,defaultValue:Z,rules:{required:n("checkout.inputRequired")},render:({field:r})=>e.jsx(Ne,{children:[{id:1,nameAr:"صك نخيل (نخله واحدة)",nameEn:"Palm Tree Suk (One Tree)"},{id:2,nameAr:"المشاركة فى نخله",nameEn:"Participate in a Palm Tree"}].map(i=>e.jsx(se,{type:"button",width:"auto",onClick:()=>{r.onChange(i.id),Me(i.id),i.id===2?en():(d("donationAmount",t.basePrice),nn())},$active:r.value===i.id,children:e.jsx(le,{isRTL:a,children:e.jsx("span",{children:a?i.nameAr:i.nameEn})})},i.id))})}),p.donationType&&e.jsx(P,{children:p.donationType.message})]})]})})}),G[t?.campaignTypeId]&&(!h||t.campaignTypeId===4)&&e.jsxs("div",{style:{display:"flex",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem",alignItems:"flex-start"},children:[e.jsxs(F,{isRTL:a,children:[n("home.campaigns.sukNumber"),":"]}),e.jsxs("div",{children:[e.jsx(A,{name:"sukNumber",control:C,type:"number",max:t.campaignTypeId===4?7:999,rules:{required:n("checkout.inputRequired"),validate:r=>Number(r)<=(t.campaignTypeId===4?7:999)||n("checkout.maximumAmount",{amount:t.campaignTypeId===4?7:999})},render:({field:r})=>e.jsxs(ve,{children:[e.jsxs(ke,{children:[e.jsx(O,{type:"button",onClick:()=>{const i=Number(r.value)||0,o=Math.min(i+1,t.campaignTypeId===4?7:999);r.onChange(o);const l=t?.basePrice*o;d("donationAmount",l)},children:e.jsx(oe,{size:20})}),e.jsx(O,{type:"button",onClick:()=>{const i=Number(r.value)||0,o=Math.max(0,i-1);if(o<=1){r.onChange(1);const z=t?.basePrice*1;d("donationAmount",z);return}r.onChange(o);const l=t?.basePrice*o;d("donationAmount",l)},children:e.jsx(ie,{size:20})})]}),e.jsx(Ce,{...r,type:"number",min:"1",onChange:i=>{r.onChange(i);const o=Number(i.target.value),l=t?.basePrice*o;d("donationAmount",l)},isRTL:a})]})}),p.sukNumber&&e.jsx(P,{children:p.sukNumber.message})]})]}),G[t?.campaignTypeId]&&e.jsxs("div",{style:{display:"flex",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem",alignItems:"flex-start"},children:[e.jsxs(F,{isRTL:a,children:[n("home.campaigns.totalAmount"),":"]}),e.jsxs("div",{children:[e.jsx(A,{name:"donationAmount",control:C,type:"number",rules:{required:n("checkout.inputRequired")},render:({field:r})=>e.jsxs(ve,{children:[h&&e.jsxs(ke,{children:[e.jsx(O,{type:"button",onClick:()=>{const i=Number(r.value)||0,o=h?1:t?.basePrice;let l=i+o;t?.campaignTypeId===4&&l<o?l=o:l<0&&(l=0),r.onChange(l)},children:e.jsx(oe,{size:20})}),e.jsx(O,{type:"button",onClick:()=>{const i=Number(r.value)||0,o=h?1:t?.basePrice;let l=i-o;t?.campaignTypeId===4&&l<o?l=o:l<0&&(l=0),r.onChange(l)},children:e.jsx(ie,{size:20})})]}),e.jsx(Ce,{...r,isRTL:a,value:r.value||0,type:"number",min:h?0:t?.campaignTypeId===4?t?.basePrice:0,disabled:!h})]})}),p.donationAmount&&e.jsx(P,{children:p.donationAmount.message})]})]}),t?.isInstallmentPaymentAllowed&&!h&&e.jsx(e.Fragment,{children:e.jsx(Et,{watch:he,setValue:d,isRTL:a,totalAmount:he("donationAmount")||t?.basePrice||0,maxInstallments:12,showPolicyModal:Re,setShowPolicyModal:Ve,isInstallmentPayment:j,setIsInstallmentPayment:b})}),t.campaignTypeId===3&&e.jsxs("div",{style:{display:"flex",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem",alignItems:"flex-start"},children:[e.jsxs(F,{isRTL:a,children:[n("home.campaigns.totalAmount"),":"]}),e.jsxs("div",{children:[e.jsx(A,{name:"donationAmount",control:C,type:"number",rules:{required:n("checkout.inputRequired")},render:({field:r})=>e.jsxs(ve,{children:[e.jsx(Ce,{...r,isRTL:a,value:r.value||0,type:"number",min:t?.campaignTypeId===4?t?.basePrice:0,disabled:!0}),e.jsxs(ke,{children:[e.jsx(O,{type:"button",onClick:()=>{let o=(Number(r.value)||0)+t?.basePrice;t?.campaignTypeId===4&&o<t?.basePrice&&(o=t?.basePrice),r.onChange(o)},children:e.jsx(oe,{size:20})}),e.jsx(O,{type:"button",onClick:()=>{let o=(Number(r.value)||0)-t?.basePrice;t?.campaignTypeId===4&&o<t?.basePrice?o=t?.basePrice:o<0&&(o=0),r.onChange(o)},children:e.jsx(ie,{size:20})})]})]})}),p.donationAmount&&e.jsx(P,{children:p.donationAmount.message})]})]}),t.campaignTypeId===5&&!h&&e.jsxs(e.Fragment,{children:[e.jsx(Ie,{isRTL:a,children:n("checkout.sukOwnerInfo")}),e.jsx("div",{style:{width:"100%"},children:e.jsxs(te,{children:[e.jsxs(He,{children:[e.jsx(re,{htmlFor:"name",isRTL:a,focused:k==="name",children:n("checkout.formName")}),e.jsx(A,{name:"name",control:C,id:"name",rules:{required:n("checkout.inputRequired")},render:({field:r})=>e.jsx(ae,{...r,type:"text",isRTL:a,value:r.value||"",onChange:i=>{r.onChange(i),_(o=>({...o,fullName:i.target.value}))},onFocus:()=>I("name"),onBlur:()=>{I(null),r.onBlur()},style:{direction:on(r.value)}})})]}),p.name&&e.jsx(P,{children:p.name.message})]})}),e.jsx(be,{children:e.jsxs(te,{children:[e.jsxs(je,{isRTL:a,children:[e.jsx(ye,{isRTL:a,children:e.jsx(fe,{country:w,value:"",onChange:(r,i)=>{N(i.countryCode)},enableSearch:!1,disableSearchIcon:!0,countryCodeEditable:!1})}),e.jsxs(we,{children:[e.jsx(re,{htmlFor:"phone",isRTL:a,focused:k==="phone",children:n("checkout.formPhone")}),e.jsx(A,{name:"phone",control:C,id:"phone",rules:{required:n("checkout.inputRequired"),validate:r=>{const i=r?.replace(/\D/g,"");if(!i)return n("checkout.inputRequired");try{const o=Ae(i,w?.toUpperCase());return!o||!o.isValid()?n("checkout.invalidPhoneNum"):!0}catch{return n("checkout.invalidPhoneNum")}}},render:({field:r})=>e.jsx(ae,{...r,type:"tel",value:r.value||"",onFocus:()=>I("phone"),onChange:i=>{r.onChange(i),_(o=>({...o,mobileNumber:i.target.value}))},onBlur:()=>{I(null),r.onBlur()},style:{direction:"ltr",textAlign:"left"}})})]})]}),p.phone&&e.jsx(P,{children:p.phone.message})]})}),e.jsx(be,{children:e.jsxs(te,{children:[e.jsxs(je,{isRTL:a,children:[e.jsx(ye,{isRTL:a,children:e.jsx(fe,{country:w,value:"",onChange:(r,i)=>{N(i.countryCode)},enableSearch:!1,disableSearchIcon:!0,countryCodeEditable:!1})}),e.jsxs(we,{children:[e.jsx(re,{htmlFor:"whatsappNumber",isRTL:a,focused:k==="whatsappNumber",children:n("home.campaigns.whatsappNumber")}),e.jsx(A,{name:"whatsappNumber",control:C,id:"whatsappNumber",rules:{required:n("checkout.inputRequired"),validate:r=>{const i=r?.replace(/\D/g,"");if(!i)return n("checkout.inputRequired");try{const o=Ae(i,w?.toUpperCase());return!o||!o.isValid()?n("checkout.invalidPhoneNum"):!0}catch{return n("checkout.invalidPhoneNum")}}},render:({field:r})=>e.jsx(ae,{...r,type:"tel",value:r.value||"",onChange:i=>{r.onChange(i),_(o=>({...o,whatsappNumber:i.target.value}))},onFocus:()=>I("whatsappNumber"),onBlur:()=>{I(null),r.onBlur()},style:{direction:"ltr",textAlign:"left"}})})]})]}),p.phone&&e.jsx(P,{children:p.phone.message})]})})]}),t.campaignTypeId===3&&e.jsxs(e.Fragment,{children:[e.jsx(Ie,{isRTL:a,children:n("home.campaigns.donnerInfo")}),e.jsx(be,{children:e.jsxs(te,{children:[e.jsxs(je,{isRTL:a,children:[e.jsx(ye,{children:e.jsx(fe,{country:w,value:"",onChange:(r,i)=>{N(i.countryCode)},enableSearch:!1,disableSearchIcon:!0,countryCodeEditable:!1})}),e.jsxs(we,{children:[e.jsx(re,{htmlFor:"onBehalfPhone",isRTL:a,focused:k==="onBehalfPhone",children:n("checkout.formPhone")}),e.jsx(A,{name:"onBehalfPhone",control:C,id:"onBehalfPhone",rules:{required:n("checkout.inputRequired"),validate:r=>{const i=r?.replace(/\D/g,"");if(!i)return n("checkout.inputRequired");try{const o=Ae(i,w?.toUpperCase());return!o||!o.isValid()?n("checkout.invalidPhoneNum"):!0}catch{return n("checkout.invalidPhoneNum")}}},render:({field:r})=>e.jsx(ae,{...r,type:"tel",value:r.value||"",onFocus:()=>I("onBehalfPhone"),onBlur:()=>{I(null),r.onBlur()},onChange:i=>{r.onChange(i),J(o=>({...o,mobileNumber:i.target.value.replace(/\s/g,"")}))},style:{direction:"ltr",textAlign:"left"}})})]})]}),p.onBehalfPhone&&e.jsx(P,{children:p.onBehalfPhone.message})]})}),e.jsxs(tt,{children:[e.jsxs(rt,{htmlFor:"donnerMsg",isRTL:a,children:[e.jsxs("p",{children:[n("home.campaigns.donnerMsg")," "]}),e.jsx("p",{children:n("home.campaigns.donnerMsgMax")})]}),e.jsx(at,{type:"textarea",id:"donnerMsg",isRTL:a,maxLength:70,value:he("donnerMsg")||"",onChange:r=>{d("donnerMsg",r.target.value),J(i=>({...i,message:r.target.value}))}})]})]}),K&&t.isReminderAllowed&&e.jsx(Cn,{style:{margin:"0"},children:e.jsxs(Ue,{isRtl:a,children:[e.jsx(Pe,{type:"checkbox",value:"rememberMonthlyDonation",checked:De,onChange:async r=>{r.target.checked?await Je():await Xe()}}),e.jsx(Se,{viewBox:"0 0 64 64",children:e.jsx($e,{d:"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"})}),e.jsx("span",{style:{margin:"0 10px"},children:n("monthlyDonation.rememberMonthlyDonation")}),e.jsx(He,{children:e.jsx(An,{isRTL:a,value:ze,onChange:r=>{const i=Number(r.target.value);Ee(i),De&&We({dayOfMonth:i,campaignId:t.id}).then(o=>{o.succeeded&&me.invalidateQueries({queryKey:["campaignsReminders"]})})},children:v.map(r=>e.jsx("option",{value:r,children:n("monthlyDonation.columns.day")+" "+r},r))})}),e.jsx("span",{style:{margin:"0 10px"},children:n("monthlyDonation.everyMonth")})]})}),t.isInstallmentPaymentAllowed&&j&&!h&&e.jsx(it,{isRTL:a,children:e.jsxs(Ue,{isRtl:a,children:[e.jsx(Pe,{type:"checkbox",checked:D,onChange:r=>{U(r.target.checked)}}),e.jsx(Se,{viewBox:"0 0 64 64",children:e.jsx($e,{d:"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"})}),e.jsxs(ot,{isRTL:a,as:"span",onClick:()=>{U(!D),Ve(!0)},children:[n("checkout.installmentPolicy"),e.jsx(st,{children:"*"})]})]})}),e.jsxs(lt,{children:[e.jsxs(ct,{type:"button",isRTL:a,onClick:rn,disabled:+t?.progressBarValue==100||t?.isSoldOut,children:[e.jsx("span",{children:n("checkout.cart")}),e.jsx(dt,{src:Pn,alt:"cart",isRTL:a})]}),e.jsxs(mt,{type:"submit",value:"Submit",isRTL:a,disabled:+t?.progressBarValue==100||t?.isSoldOut,children:[e.jsx("span",{children:n("checkout.donate")}),e.jsx(xn,{size:a?20:25,style:a?{marginRight:"4px"}:{marginLeft:"4px"}})]})]})]})]})]})})})]})}export{Zt as default};
