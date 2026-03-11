import{j as e}from"./map-vendor-CkCCoZy4.js";import{R as S,r as b}from"./form-vendor-8JSUuxVu.js";import{g as _}from"./carousel-vendor-Ek1eulE_.js";import{r as Q}from"./index-Chjiymov.js";import{P as X,D as J,E as K,k as Z}from"./react-icons-vendor-D75jEhkE.js";import{G as ee,ad as te,af as ie,L as re,d as ae,E as ne,o as oe,ag as se,e as de,ah as me,y as T}from"./index-DdHqVGOp.js";import{A as le,O as ce,a as F,I as he,b as pe,S as xe,C as fe,T as ge,c as ue,d as we,e as be,f as ye,g as je,h as ve,B as ke,P as ze,i as Ce,j as Ie}from"./CampaignDetails.styles-CB3upz5i.js";import{d as t}from"./ui-vendor-BVv7PGpf.js";import{B as We}from"./Breadcrumbs-CzB9j62p.js";import{u as G}from"./vendor-8UwSOQY7.js";import{j as Pe,c as Se}from"./tanstack-vendor-DVbpgvBY.js";import"./media-vendor-CuumJ3vL.js";var Te=Q();const k=_(Te);var Y=function(n){var a=n.stroke,c=a===void 0?"#02B732":a,h=n.strokeWidth,p=h===void 0?10:h,m=n.background,f=m===void 0?"#D0D0CE":m,g=n.diameter,o=g===void 0?200:g,u=n.orientation,w=u===void 0?"up":u,z=n.direction,i=z===void 0?"right":z,s=n.showPercentValue,y=s===void 0?!1:s,C=n.percentage,v=o/2,W=(o-2*p)/2,x=Math.PI*W,j=void 0;C>100?j=100:C<0?j=0:j=C;var E=j*(x/100),I=void 0;return w==="down"?i==="left"?I="rotate(180deg) rotateY(180deg)":I="rotate(180deg)":i==="right"&&(I="rotateY(180deg)"),S.createElement("div",{className:"semicircle-container",style:{position:"relative"}},S.createElement("svg",{width:o,height:o/2,style:{transform:I,overflow:"hidden"}},S.createElement("circle",{cx:v,cy:v,r:W,fill:"none",stroke:f,strokeWidth:p,strokeDasharray:x,style:{strokeDashoffset:x}}),S.createElement("circle",{cx:v,cy:v,r:W,fill:"none",stroke:c,strokeWidth:p,strokeDasharray:x,style:{strokeDashoffset:E,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"}})),y&&S.createElement("span",{className:"semicircle-percent-value",style:{width:"100%",left:"0",textAlign:"center",bottom:w==="down"?"auto":"0",position:"absolute"}},C,"%"))};function Ee(r){return function(n,a,c){var h=n[a];if(h==null)throw new Error("Percentage is a required prop.");if(typeof h!="number")return new Error("Invalid percentage. Must be a number between 0 and 100.");if(n[a]<0||n[a]>100)return new Error("Invalid percentage. Must be a number between 0 and 100.")}}var Le=Ee();Y.propTypes={stroke:k.string,strokeWidth:k.number,background:k.string,diameter:k.number,orientation:k.oneOf(["up","down"]),direction:k.oneOf(["left","right"]),showPercentValue:k.bool,percentage:Le};const $e=t.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Ae=t.div`
  background-color: var(--background-light);
  padding: 4rem 1rem 1rem 1rem;
  min-width: 45%;
  max-width: 45%;
  @media (max-width: 1024px) {
    min-width: 40%;
    max-width: 40%;
  }
  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    padding: 1.25rem 1rem;
  }
  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`,Be=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;t.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;const Me=t.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: ${({isRTL:r})=>r?"right":"left"};

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
`,Ne=t.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-light);
  margin-bottom: 2rem;
  text-align: ${({isRTL:r})=>r?"right":"left"};

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }
`,Ue=t.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,M=t.div`
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 480px) {
    padding: 0.85rem;
  }
`,N=t.div`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    var(--primary-light),
    var(--primary-color)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`,U=t.h3`
  font-size: 0.938rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  text-align: center;
  color: var(--primary-light);
`;t.p`
  font-size: 0.9rem;
  color: #4b5563;
  text-align: center;
`;const Oe=t.div`
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: #fedaa9;
  border-right: 4px solid var(--secondary-color);
  font-size: 0.9rem;
  /* color: #92400e; */
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,De=t(ee)`
  background-color: var(--primary-light);
  width: 100%;
`,Ve=t.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1.75rem 0 1.25rem;
`,H=t.span`
  flex: 1;
  height: 1px;
  background-color: #fbae42;
`,Re=t.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #fbae42;
`,Ge=t.div`
  text-align: ${({isRTL:r})=>r?"right":"left"};
  padding: 1.25rem 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`,Fe=t.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-light);
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,He=t.p`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;t.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;t.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
`;t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
  }
`;t.button`
  min-width: 64px;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1.5px solid
    ${({$active:r})=>r?"var(--primary-light)":"#d1d5db"};
  background-color: ${({$active:r})=>r?"var(--primary-light)":"#ffffff"};
  color: ${({$active:r})=>r?"#ffffff":"#111827"};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: var(--primary-light);
    background-color: ${({$active:r})=>r?"var(--primary-color)":"#f3f4f6"};
    color: ${({$active:r})=>r?"#ffffff":"#111827"};
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(50% - 0.5rem);
    text-align: center;
  }
`;t.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;t.input`
  min-width: 90px;
  padding: 0.55rem 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  font-size: 0.95rem;
  text-align: center;
  direction: rtl;

  &:focus {
    outline: none;
    border-color: var(--primary-light);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;t.span`
  font-size: 0.8rem;
  color: #9ca3af;
  text-align: center;
`;t.p`
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: #374151;
`;const qe=t.div`
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,Ye=t.span`
  font-size: 1rem;
  font-weight: 600;
`,_e=t.span`
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;t.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;t.button`
  flex: 1 1 150px;
  padding: 0.85rem 1.25rem;
  border-radius: 0.75rem;
  border: none;
  background-color: #fbbf24;
  color: #111827;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;t.button`
  flex: 1 1 150px;
  padding: 0.85rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--primary-light);
  background-color: #ffffff;
  color: var(--primary-light);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;t.div`
  width: 100%;
  border-radius: 1rem;
  background: #ffffff;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;t.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--primary-light);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;t.p`
  font-size: 1.05rem;
  color: #4b5563;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;t.p`
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 0.35rem;
`;t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.75rem;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;t.div`
  flex: 1;
  min-width: 150px;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: #f9fafb;

  @media (max-width: 480px) {
    padding: 0.7rem 0.85rem;
  }
`;t.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;t.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;const Qe=t.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: #f5f5f5;
  width: 100%;
  text-align: center;
  color: var(--primary-light);

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`,Xe=t.p`
  font-size: 1.5rem;
  font-weight: 700;

  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,Je=t.span`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0.3rem;

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`,Ke=t.p`
  font-size: 1rem;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,Ze=t.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  min-width: 0;
  @media (max-width: 768px) {
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  @media (max-width: 480px) {
    gap: 0.4rem;
    width: 100%;
  }
`,q=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 100%;
  padding: 0;
`,et=t.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 0.75rem;
    box-sizing: border-box;
  }
`,tt=t.div`
  margin-top: 0;
  width: 100%;

  z-index: 3;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 0.5rem;
  border: 10px solid #fccb86;
  border-radius: 0.85rem;
  background-color: var(--secondary-color);
  color: #111827;
  font-family: "Cairo", sans-serif;
  direction: ${({isRTL:r})=>r?"rtl":"ltr"};

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0.6rem 0.4rem;
    border-width: 8px;
  }

  @media (max-width: 480px) {
    gap: 0.35rem;
    padding: 0.5rem 0.35rem;
    border-width: 6px;
  }
`,O=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,D=t.div`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.15rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`,R=t.div`
  font-size: 1.6rem;
  font-weight: 800;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`,V=t.div`
  font-size: 0.75rem;
  margin-top: 0.1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`,it=t(R)`
  color: #015cab;
  font-size: 2.4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;function rt({onAmountChange:r,basePrice:n,predefinedAmounts:a,selectedAmount:c}){const{t:h,i18n:p}=G(),m=p.resolvedLanguage==="ar",f=c&&!a.includes(Number(c)),[g,o]=b.useState(f?String(c):""),[u,w]=b.useState(f?"custom":Number(c||n));b.useEffect(()=>{c||r(n)},[n]);const z=s=>{w(s),typeof s=="number"&&(o(""),r(s))},i=s=>{const y=s.target.value;/^\d*$/.test(y)&&(o(y),w("custom"),r(Number(y)))};return e.jsx(e.Fragment,{children:e.jsxs(le,{children:[e.jsx(ce,{isRTL:m,children:m?"عدد الأطباق :":"Number of plates :"}),e.jsx("div",{children:e.jsxs(Ze,{children:[a.map(s=>e.jsx(F,{type:"button",onClick:()=>z(s),$active:u===s,children:e.jsx(q,{isRTL:m,children:e.jsx("span",{children:s})})},s)),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(F,{type:"button",as:"div",$active:u==="custom",onClick:()=>w("custom"),children:e.jsx(q,{isRTL:m,children:e.jsx(he,{type:"text",placeholder:h("checkout.otherAmout"),value:g,onClick:s=>s.stopPropagation(),onChange:i,isRTL:m})})}),e.jsx(pe,{style:{padding:"0 4px"},isRTL:m,children:m?"طبق":"Plate"})]})]})})]})})}function at({campaign:r,isRTL:n}){const{t:a}=G(),{targetUnits:c,collectedUnits:h}=r??{},{safeTarget:p,safeCollected:m,remaining:f}=b.useMemo(()=>{const o=Number(c)||0,u=Number(h)||0,w=Math.max(o-u,0);return{safeTarget:o,safeCollected:u,remaining:w}},[c,h]),g=o=>Number(o||0).toLocaleString("en-US");return e.jsxs(tt,{isRTL:n,children:[e.jsxs(O,{children:[e.jsx(D,{children:a("aishWmelh.stats.targetLabel")}),e.jsx(R,{children:g(p)}),e.jsx(V,{children:a("aishWmelh.plateLabel")})]}),e.jsxs(O,{children:[e.jsx(D,{children:a("aishWmelh.stats.achievedLabel")}),e.jsx(it,{children:g(m)}),e.jsx(V,{children:a("aishWmelh.plateLabel")})]}),e.jsxs(O,{children:[e.jsx(D,{children:a("aishWmelh.stats.remainingLabel")}),e.jsx(R,{children:g(f)}),e.jsx(V,{children:a("aishWmelh.plateLabel")})]})]})}function ut(){const{t:r,i18n:n}=G(),a=n.resolvedLanguage==="ar",c=te(),h=r("common.egpShort",a?"ج.م":"EGP"),[p,m]=b.useState(10),f=5,g=d=>{const l=Number(d);if(Number.isNaN(l)||l<0){m(0);return}m(l),console.log(l)},o=b.useMemo(()=>p*f,[p,f]),u=b.useMemo(()=>o.toLocaleString("ar-EG"),[o]),w=()=>{const d={title:r("aishWmelh.shareTitle"),text:r("aishWmelh.shareText"),url:window.location.href};navigator.share?navigator.share(d):navigator.clipboard&&navigator.clipboard.writeText(window.location.href)},{id:z}=Pe({from:"/campaign-details/aish-w-melh/$id"}),{data:i,isLoading:s,error:y,refetch:C}=ie(z),v=Se(),W=b.useMemo(()=>{const d=Number(i?.targetUnits)||0,l=Number(i?.collectedUnits)||0;return d<=0?0:Math.min(100,Math.round(l/d*100))},[i?.targetUnits,i?.collectedUnits]),[x,j]=b.useState({diameter:680,strokeWidth:40});b.useEffect(()=>{const d=()=>{const l=window.innerWidth;l<=480?j({diameter:Math.min(l-24,320),strokeWidth:24}):l<=768?j({diameter:Math.min(l*.6,400),strokeWidth:30}):j({diameter:680,strokeWidth:40})};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]);const E=async()=>{const d=n.resolvedLanguage==="ar",{cartItems:l,addOrUpdateCartItem:L}=c,$=p*f,A=l?.items?.find(B=>B.campaignId===i.id),P={id:i.id,donationIntention:null,amount:$,donationAmountTypeId:i.amountTypeId,numberOfShares:Math.round($/i.basePrice),shareValue:i.basePrice,campaignId:i.id,campaign:{id:i.id,titleAr:i.titleAr,titleEn:i.titleEn,imageUrl:i.imageUrl,keyWords:i.keywords,intentions:i.donationIntentions,basePrice:i.basePrice,campaignTypeId:i.campaignTypeId},isInstallmentPayment:!1,isShareInSakk:!1,installmentMonths:1,sakkOwnerInfo:null,onBehalfInfo:null};try{await L(P),A?T.info(d?`تم تحديث ${i.titleAr} في السلة`:`${i.titleEn} has been updated in cart!`):T.success(d?`تم إضافة ${i.titleAr} إلى السلة`:`${i.titleEn} added to cart!`)}catch(B){console.error("Failed to add/update cart item:",B),T.error(d?"حدث خطأ أثناء إضافة العنصر إلى السلة":"Error adding item to cart")}},I=async()=>{const d=n.resolvedLanguage==="ar",{cartItems:l,addOrUpdateCartItem:L}=c;if(l?.items?.find(P=>P.campaignId===i.id)){v({to:"/payment"});return}const A={id:i.id,donationIntention:null,amount:o,donationAmountTypeId:i.amountTypeId,numberOfShares:Math.round(o/i.basePrice),shareValue:i.basePrice,campaignId:i.id,campaign:{id:i.id,titleAr:i.titleAr,titleEn:i.titleEn,imageUrl:i.imageUrl,keyWords:i.keywords,intentions:i.donationIntentions,basePrice:i.basePrice,campaignTypeId:i.campaignTypeId},isInstallmentPayment:!1,isShareInSakk:!1,installmentMonths:1,sakkOwnerInfo:null,onBehalfInfo:null};try{await L(A),T.success(d?`تم إضافة ${i.titleAr} إلى السلة`:`${i.titleEn} added to cart!`),v({to:"/payment"})}catch(P){console.error("Failed to add/update cart item:",P),T.error(d?"حدث خطأ أثناء إضافة العنصر إلى السلة":"Error adding item to cart")}};return s?e.jsx(e.Fragment,{children:e.jsxs(re,{children:[e.jsx(ae,{}),e.jsx("p",{children:r("common.loading")})]})}):y?e.jsxs(ne,{children:[e.jsxs(oe,{children:[r("errors.error"),": ",y.message]}),e.jsx(se,{onClick:()=>C(),children:r("common.retry")})]}):e.jsxs(xe,{children:[e.jsx(We,{}),e.jsx(fe,{children:e.jsxs($e,{children:[e.jsxs(Be,{children:[e.jsxs(ge,{style:{width:"100%"},children:[e.jsx(ue,{isRTL:a,children:a?i?.titleAr:i?.titleEn}),e.jsxs(we,{onClick:w,children:[e.jsx("span",{children:r("checkout.shareBtn")}),e.jsx(be,{className:"share-icon"})]})]}),e.jsxs(et,{children:[e.jsx(Y,{percentage:W,diameter:x.diameter,background:"#f59e0b",stroke:"#015CAB",strokeWidth:x.strokeWidth,direction:a?"left":"right"}),e.jsx(ye,{style:{position:"absolute",top:x.diameter<=320?"28px":x.diameter<=400?"44px":"80px",left:"50%",transform:"translateX(-50%)",width:x.diameter<=320?"82%":"89%",maxWidth:x.diameter-48},children:e.jsx(je,{style:{aspectRatio:"7/3"},src:`https://lifemakers.org/Public/${i.coverUrl}`,alt:a?i.titleAr:i.titleEn})})]}),e.jsx(at,{campaign:i,isRTL:a}),e.jsxs(Qe,{children:[e.jsxs(Xe,{children:[r("aishWmelh.goalMain"),e.jsx(Je,{children:i?.targetUnits}),` ${r("aishWmelh.plateWord")}`]}),e.jsx(Ke,{children:r("aishWmelh.goalSub")})]}),e.jsx(ve,{isRTL:a,as:"div",children:e.jsx(de,{html:a?i?.descriptionAr:i?.descriptionEn,as:"div"})})]}),e.jsxs(Ae,{children:[e.jsx(Me,{isRTL:a,children:r("aishWmelh.mechanismHeading")}),e.jsx(Ne,{isRTL:a,children:r("aishWmelh.mechanismSubheading")}),e.jsxs(Ue,{children:[e.jsxs(M,{children:[e.jsx(N,{children:e.jsx(X,{})}),e.jsx(U,{children:r("aishWmelh.steps.step1Title")})]}),e.jsxs(M,{children:[e.jsx(N,{children:e.jsx(J,{})}),e.jsx(U,{children:r("aishWmelh.steps.step2Title")})]}),e.jsxs(M,{children:[e.jsx(N,{children:e.jsx(K,{})}),e.jsx(U,{children:r("aishWmelh.steps.step3Title")})]})]}),e.jsxs(Oe,{children:[e.jsx("span",{style:{fontWeight:"700"},children:r("aishWmelh.noteLabel")}),r("aishWmelh.noteBody")]}),e.jsx(De,{onClick:()=>window.open("https://ee-eu.kobotoolbox.org/x/YUebCIye","_blank"),children:r("aishWmelh.formButton")}),e.jsxs(Ve,{children:[e.jsx(H,{}),e.jsx(Re,{children:r("aishWmelh.or")}),e.jsx(H,{})]}),e.jsxs(Ge,{isRTL:a,children:[e.jsx(Fe,{children:r("aishWmelh.donationTitle")}),e.jsx(He,{children:r("aishWmelh.donationLabel")}),e.jsx(rt,{basePrice:5,predefinedAmounts:[10,50,100,500,1e3],selectedAmount:p,onAmountChange:g}),e.jsxs(qe,{children:[e.jsx(Ye,{children:r("aishWmelh.totalLabel")}),e.jsxs(_e,{children:[u," ",h]})]}),e.jsxs(ke,{children:[e.jsxs(ze,{type:"button",isRTL:a,onClick:E,children:[e.jsx("span",{children:r("checkout.cart")}),e.jsx(Ce,{src:me,alt:"cart",isRTL:a})]}),e.jsxs(Ie,{type:"submit",value:"Submit",isRTL:a,onClick:I,children:[e.jsx("span",{children:r("checkout.donate")}),e.jsx(Z,{size:a?20:25,style:a?{marginRight:"4px"}:{marginLeft:"4px"}})]})]})]})]})]})})]})}export{ut as default};
