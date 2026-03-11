import{j as n}from"./map-vendor-CkCCoZy4.js";import{r as x,u as X,C as g}from"./form-vendor-8JSUuxVu.js";import{aJ as Z,S as A,L as nn,d as en,T as tn,D as rn,t as f,aa as R,F as L,r as E,a7 as F}from"./index-Dv1SXuG7.js";import{B as z}from"./Breadcrumbs-CzB9j62p.js";import{d as r}from"./ui-vendor-BVv7PGpf.js";import{U as j,V as T,W as D}from"./react-icons-vendor-D75jEhkE.js";import{u as on}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-b5BVGNQh.js";import"./tanstack-vendor-DVbpgvBY.js";const an=r.div`
  flex: 1;
  min-width: 280px;
  max-width: 50%;
  background: #fff;
  border-radius: 16px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: ${({isRtl:e})=>e?"right":"left"};

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 24px 16px;
    margin: 16px 0;
  }

  @media (max-width: 480px) {
    padding: 20px 12px;
    margin: 12px 0;
  }
`,I=r.div`
  flex: 1;
  position: relative;
  background: #f5f5f5;
  border-radius: 16px;
  padding: 32px 24px;
  min-width: 280px;
  max-width: 50%;
  box-shadow: 0 2px 16px #0002;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 32px 0;
  text-align: right;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 24px 16px;
    margin: 16px 0;
    min-height: 280px;
  }

  @media (max-width: 480px) {
    padding: 20px 12px;
    margin: 12px 0;
    min-height: 250px;
  }
`,N=r.p`
  width: 100%;
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  margin: auto 0;
`,sn=r.img`
  width: 120px;
  height: 40px;
  object-fit: cover;
`,dn=r.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`;r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;const cn=r.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    ${""}
    gap: 12px;
    align-items: center;
  }
`,q=r.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
`;r.select`
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: #fff;

  @media (max-width: 480px) {
    padding: 10px 8px;
    font-size: 0.95rem;
  }
`;r.input`
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: #fff;

  @media (max-width: 480px) {
    padding: 10px 8px;
    font-size: 0.95rem;
  }
`;const ln=r.div`
  margin: 0 auto;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: ${({isRtl:e})=>e?"row-reverse":"row"};
  text-align: ${({isRtl:e})=>e?"right":"left"};

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 16px;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 12px;
    padding: 0 8px;
  }
`,b=r.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`,y=r.p`
  font-size: 1.2rem;
  margin: 0 0 2px 0;
  text-align: ${({isRtl:e})=>e?"right":"left"};
`,w=r.p`
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0;
  letter-spacing: 0.5px;
  text-align: ${({isRtl:e})=>e?"right":"left"};
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,k=r.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 2px 10px 0 10px;
  color: var(--primary-color);
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: var(--primary-color);
  }
`,xn=r.div`
  position: fixed;
  bottom: 20px;
  right: ${({isRtl:e})=>e?"20px":"auto"};
  left: ${({isRtl:e})=>e?"auto":"20px"};
  background: #4caf50;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  z-index: 8000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease-out;
  text-align: ${({isRtl:e})=>e?"right":"left"};
  @media (max-width: 768px) {
    bottom: 10px;
    right: ${({isRtl:e})=>e?"10px":"auto"};
    left: ${({isRtl:e})=>e?"auto":"10px"};
    padding: 10px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    right: ${({isRtl:e})=>e?"8px":"auto"};
    left: ${({isRtl:e})=>e?"auto":"8px"};
    padding: 8px 12px;
    font-size: 0.85rem;
  }
`,pn=r.form`
  width: 70%;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`,un=r.div`
  font-weight: 600;
  margin-bottom: 8px;
`,mn=r.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,hn=r.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 1rem;
`,gn=r.div`
  width: 100%;
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: fadeIn 0.35s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,fn=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  width: 100%;
`,G=r.button`
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #fff;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`,jn=r.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`,bn=r.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({$isActive:e})=>e?"var(--primary-color)":"rgba(0, 0, 0, 0.2)"};
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`,Ln=()=>{const{t:e,i18n:M}=on(),i=M.resolvedLanguage==="ar",{data:v,isLoading:U}=Z(),[B,C]=x.useState(""),[p,l]=x.useState(0),{control:u,watch:W}=X({defaultValues:{country:"",bank:"",area:"",currency:""}}),[P,V,Y]=W(["country","bank","currency"]),o={country:P,bank:V,currency:Y},J=o.country&&o.bank&&o.currency,d=v?.find(t=>t.id===parseInt(o.bank)),s=x.useMemo(()=>!d||!o.currency?[]:d.accountsInfo?.filter(t=>!t||t.currency!==o.currency?!1:o.country?o.country==="outside"?t.isAbroad===!0:t.isAbroad!==!0:!0)?.filter(Boolean)||[],[d,o.currency,o.country]);x.useEffect(()=>{l(0)},[d?.id,o.currency,o.country]),x.useEffect(()=>{if(!s.length){l(0);return}l(t=>t>=s.length?s.length-1:t)},[s.length]);const c=s[p],m=o.country==="outside",O=m?e("inBank.iban","IBAN:"):e("donationSection.inBank.accountNumber",i?"رقم الحساب:":"Account Number:"),Q=m?e("donationSection.inBank.iban","رقم الحساب:"):e("donationSection.inBank.accountNumber",i?"رقم الحساب:":"Account Number:"),S=m?c?.ibanNumber:c?.accountNumber||c?.ibanNumber,_=()=>{s.length<=1||l(t=>t===s.length-1?0:t+1)},H=()=>{s.length<=1||l(t=>t===0?s.length-1:t-1)},$=t=>{if(!d||!o.currency)return"";const a=i?t.address:t.addressEn;return a||"لا يوجد فرع في هذه المنطقة"},h=async(t,a)=>{try{await navigator.clipboard.writeText(t),C(`${i?"تم نسخ":"copied"} ${a}`),setTimeout(()=>C(""),2e3)}catch(K){console.error("Failed to copy: ",K)}};return U?n.jsxs(A,{isRTL:i,children:[n.jsx(z,{}),n.jsx(n.Fragment,{children:n.jsxs(nn,{children:[n.jsx(en,{}),n.jsx("p",{children:e("common.loading")})]})})]}):n.jsxs(A,{isRTL:i,children:[n.jsx(z,{}),B&&n.jsx(xn,{isRtl:i,children:B}),n.jsxs(ln,{isRtl:i,children:[J&&d?n.jsxs(I,{isRtl:i,children:[n.jsxs(dn,{children:[n.jsx(un,{children:e("donationSection.inBank.accountInfo","بيانات الحساب")}),n.jsx(sn,{src:`https://lifemakers.org/Public/${d.imageUrl}`,alt:`${i?d.nameAr:d.nameEn} Logo`,isRtl:i})]}),s.length>0?n.jsx(n.Fragment,{children:n.jsxs(hn,{children:[c&&n.jsxs(gn,{children:[n.jsxs(b,{children:[n.jsx(y,{isRtl:i,children:e("donationSection.inBank.swiftCode","سويفت كود:")}),n.jsxs(w,{isRtl:i,children:[c.swiftCode,n.jsx(k,{onClick:()=>h(c.swiftCode,e("donationSection.inBank.swiftCode","سويفت كود:")),children:n.jsx(j,{})})]})]}),n.jsxs(b,{children:[n.jsx(y,{styl:{textAlign:"left"},isRtl:i,children:O}),n.jsxs(w,{isRtl:i,children:[S,n.jsx(k,{onClick:()=>h(S??"",Q),children:n.jsx(j,{})})]})]}),o.country==="inside"&&n.jsxs(b,{children:[n.jsx(y,{isRtl:i,children:e("donationSection.inBank.branch","عنوان الفرع:")}),n.jsxs(w,{isRtl:i,children:[$(c),n.jsx(k,{onClick:()=>h($(c),e("donationSection.inBank.branch","عنوان الفرع:")),children:n.jsx(j,{})})]})]})]},c.id||p),s.length>1&&n.jsxs(fn,{children:[n.jsx(G,{onClick:H,"aria-label":e("common.previous","السابق"),children:i?n.jsx(T,{}):n.jsx(D,{})}),n.jsx(jn,{children:s.map((t,a)=>n.jsx(bn,{type:"button",onClick:()=>l(a),$isActive:a===p,"aria-label":e("common.slide","شريحة")},a))}),n.jsx(G,{onClick:_,"aria-label":e("common.next","التالي"),children:i?n.jsx(D,{}):n.jsx(T,{})})]})]})}):n.jsx(N,{children:e("donationSection.inBank.noDataFound")})]}):n.jsx(I,{children:n.jsx(N,{children:e("donationSection.inBank.cardEmptyMessage","يرجى إدخال البيانات المطلوبة للتبرع")})}),n.jsxs(an,{isRtl:i,children:[n.jsx(tn,{children:e("donationSection.inBank.title","التبرع عبر البنك")}),n.jsx(rn,{isRTL:i,children:e("donationSection.inBank.description","يمكنك التبرع عبر البنك باستخدام أحد البنوك التالية:")}),n.jsxs(pn,{children:[n.jsxs(mn,{children:[n.jsx(f,{htmlFor:"country",children:e("donationSection.inBank.selectCountry","اختر الدولة")}),n.jsx(g,{name:"country",control:u,id:"country",rules:{required:e("checkout.inputRequired","هذا الحقل مطلوب")},render:({field:t})=>n.jsxs(cn,{children:[n.jsxs(q,{children:[n.jsx(R,{type:"radio",value:"inside",checked:t.value==="inside",onChange:t.onChange}),e("donationSection.inBank.insideEgypt","من داخل مصر")]}),n.jsxs(q,{children:[n.jsx(R,{type:"radio",value:"outside",checked:t.value==="outside",onChange:t.onChange}),e("donationSection.inBank.outsideEgypt","من خارج مصر")]})]})})]}),n.jsx(L,{children:n.jsxs(E,{children:[n.jsx(f,{isRTL:i,htmlFor:"bank",children:e("donationSection.inBank.selectBank","اختر البنك")}),n.jsx(g,{name:"bank",control:u,id:"bank",rules:{required:e("checkout.inputRequired","هذا الحقل مطلوب")},render:({field:t})=>n.jsxs(F,{...t,isRTL:i,children:[n.jsx("option",{value:"",children:e("donationSection.inBank.selectBank","اختر البنك")}),v?.map(a=>n.jsx("option",{value:a.id,children:i?a.nameAr:a.nameEn},a.id))]})})]})}),n.jsx(L,{children:n.jsxs(E,{children:[n.jsx(f,{isRTL:i,htmlFor:"currency",children:e("donationSection.inBank.selectCurrency","اختر العملة")}),n.jsx(g,{name:"currency",control:u,id:"currency",rules:{required:e("checkout.inputRequired","هذا الحقل مطلوب")},render:({field:t})=>n.jsxs(F,{...t,isRTL:i,children:[n.jsx("option",{value:"",children:e("donationSection.inBank.selectCurrency")}),n.jsxs("option",{value:"EG",children:[" ",`${i?"جنيه مصري":"EGP"}`]}),n.jsxs("option",{value:"USD",children:[" ",`${i?"دولار أمريكي":"USD"}`]}),n.jsxs("option",{value:"EUR",children:[" ",`${i?"يورو":"EUR"}`]}),n.jsxs("option",{value:"GBP",children:[" ",`${i?"جنيه إسترليني":"GBP"}`]}),n.jsxs("option",{value:"SAR",children:[" ",`${i?"ريال سعودي":"SAR"}`]}),n.jsxs("option",{value:"AED",children:[" ",`${i?"درهم إماراتي":"AED"}`]})]})})]})})]})]})]})]})};export{Ln as default};
