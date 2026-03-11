import{j as e}from"./map-vendor-CkCCoZy4.js";import{r as b,a as Q,C,R as Ee,P as Ae,u as Me,F as De}from"./form-vendor-8JSUuxVu.js";import{d as r,m as H,l as Be}from"./ui-vendor-BVv7PGpf.js";import{f as X,a5 as Fe,a6 as ze,I as F,F as v,r as A,t as M,a7 as W,o as D,v as q,a8 as J,Q as $e,U as Le,V as Te,W as Oe,a9 as Ve,aa as ee,ab as ie,y as w,ac as N,ad as se,J as Re,p as qe}from"./index-DdHqVGOp.js";import{B as Ne,x as _e,m as He,n as Ge,o as Ue,p as We}from"./react-icons-vendor-D75jEhkE.js";import{M as Ke}from"./Model-D50lhyh2.js";import Qe from"./PrivacyPolicy-B2dOPaiS.js";import{c as le,e as Xe}from"./tanstack-vendor-DVbpgvBY.js";import{u as O}from"./vendor-8UwSOQY7.js";import{B as Ye}from"./Breadcrumbs-CzB9j62p.js";import{A as Ze}from"./InKindDonations.styles-Dl_eofq8.js";import{L as Je}from"./LocationPicker-BTJYtSvn.js";import{p as en}from"./parsePhoneNumber-DYNEpPXc.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-CuumJ3vL.js";const nn=r.div`
  background: #fff;
  margin: 2rem 0;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 0 24px 0;
  direction: ${n=>n.isRTL?"rtl":"ltr"};
`,tn=r.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 18px;
  color: #333;
  text-align: ${n=>n.isRTL?"right":"left"};
`,rn=r.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,on=r(rn)`
  max-width: 100%;
`;r.div`
  flex: 1;
  max-width: 50%;
`;const an=r.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  height: 38px;
  overflow: hidden;

  &:focus-within {
    border-color: #3b82f6;
  }
`;r.label`
  font-size: 0.875rem;
  color: #666;
  padding: 0 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;

  ${n=>n.focused&&`
    color: #3B82F6;
  `}

  &::after {
    content: "*";
    color: #ef4444;
    margin-right: 4px;
  }
`;r.input`
  flex: 1;
  height: 100%;
  border: none;
  /* padding: 0 16px; */
  font-size: 0.875rem;
  background: transparent;
  color: #333;
  display: flex;
  text-align: ${n=>n.isEmail?"left":"right"};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }
`;r.select`
  height: 48px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  background: #f9fafb;
  cursor: pointer;
  min-width: 40px;
  width: 50px;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }

  option {
    font-size: 1rem;
    padding: 8px;
  }
`;r.div`
  display: flex;
  gap: 12px;
  margin: 12px 0 18px 0;
`;r.button`
  background: #f5b43a;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 12px 0;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e0a92e;
  }
`;r.p`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 4px;
  text-align: justify;
`;const sn=r(an)`
  display: flex;
  justify-content: flex-end;
  /* justify-content: ${({isRTL:n})=>n?"flex-start":"flex-end"}; */
  padding: 0;
  overflow: visible;
  gap: 4px;
  flex-direction: row-reverse;
  border: none;
  background: transparent;
  box-shadow: none;
  width: 50%;
`,ln=r.div`
  height: 100%;
  width: 80px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  .react-tel-input {
    height: 100%;
    width: 100%;
  }

  .flag-dropdown {
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
    position: static !important;
    width: 100%;

    &:hover,
    &:focus {
      background: transparent !important;
    }

    .selected-flag {
      background: transparent !important;
      padding: 0 !important;
      width: 100%;
      height: 100%;
      position: static !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      margin-right: 1rem;
      &:hover,
      &:focus {
        background: transparent !important;
      }

      .flag {
        position: static !important;
        transform: scale(1.3);
      }

      .arrow {
        position: static !important;
        margin-right: -1rem;
        margin-top: 0.25rem;
        display: block;
        border-top: 4px solid #666;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }
    }
  }

  .country-list {
    margin: 4px 0 0;
    z-index: 999;
    min-width: 240px;
    right: 0;
    left: auto;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    .country {
      display: flex;
      align-items: center;
      padding: 8px 12px;

      &:hover {
        background: #f3f4f6;
      }

      .flag {
        margin-right: 8px;
      }
    }
  }

  input {
    display: none !important;
  }
`,dn=r.div`
  /* flex: 1;
  position: relative; */
  display: flex;
  text-align: ${({isRTL:n})=>n?"right":"left"};
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  height: 100%;

  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`,cn=r.h1`
  font-size: 3rem;
  font-weight: 700;
  white-space: nowrap;
  margin-bottom: 1rem;
  text-align: ${({isRTL:n})=>n?"right":"left"};
  color: var(--primary-light);
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;r.span`
  font-size: 0.875rem;
  color: var(--secondary-color);
  font-weight: 500;
  display: block;
  text-align: ${({isRTL:n})=>n?"right":"left"};
  margin-bottom: 1rem;
  padding: 0.1rem 0;
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.05rem 0.35rem;
  }
`;r.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;r.div`
  text-align: ${({isRTL:n})=>n?"right":"left"};
  padding-top: 2rem;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;r.div`
  background-color: var(--background-light);
  padding: 20px;
`;r.img``;r.p`
  font-size: 1.25rem;
  text-align: ${({isRTL:n})=>n?"right":"left"};
  margin: 2rem 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;r.p`
  color: var(--primary-light);
  text-align: ${({isRTL:n})=>n?"right":"left"};
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;const pn=r.button`
  background: #fff;
  border: 1.5px solid #dfdfdf;
  border-radius: 0.75rem;
  color: var(--primary-light);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.7rem 1rem;
  display: block;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  ${n=>n.$active&&Be`
      background: var(--primary-color);
      color: #fff;
      border-color: var(--primary-color);
    `}

  &:hover {
    background: var(--primary-color);
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
`;r.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;r.p`
  text-align: ${({isRTL:n})=>n?"right":"left"};
  font-weight: 700;
  font-size: 1.2rem;
  margin: 2rem 0;
`;r.form``;r.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin: 2rem 0;
  flex-wrap: wrap;
`;r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;r.input`
  all: unset;
  padding: 0;
  font-size: 1rem;
  background: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: rgba(128, 128, 128, 1);
  }
`;r.span`
  font-size: 1rem;
  color: #333;
`;r(pn)`
  width: 99px;
  height: 50px;
`;r.p`
  white-space: nowrap;
`;const de=r.button`
  border-radius: 0.375rem;
  font-size: 0.7rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: all 0.3s ease;
  text-wrap: nowrap;
  min-width: 0;
  padding: ${({isRTL:n})=>n?"0.64rem 1rem":"0.5rem 0.7rem"};
  min-height: 40px;

  @media (max-width: 768px) {
    padding: 0.75rem 0.75rem;
    font-size: 0.65rem;
  }
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    font-size: 0.6rem;
    width: 100%;
    min-width: 0;
  }
`;r.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  flex-grow: 1;
  width: 100%;
  min-height: 40px;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 4px;
    min-height: 80px;
  }
`;r(de)`
  background-color: var(--primary-color);
  color: white;
  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }

  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: var(--primary-color);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;r(de)`
  background-color: var(--secondary-color);
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: var(--secondary-color);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;r.img`
  width: 1rem;
  height: 1rem;
  margin-right: ${({isRTL:n})=>n?"0.3rem":"0"};
  margin-left: ${({isRTL:n})=>n?"0":"0.3rem"};
  @media (max-width: 480px) {
    width: 0.85rem;
    height: 0.85rem;
    ${({isRTL:n})=>n&&"margin-right: 0.3rem;"||"margin-left: 0.3rem;"}
  }
`;const mn=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`,un=r.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  align-items: center;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    margin: 0;
    justify-content: flex-end;
  }
`;r.div`
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  margin-top: 1rem;
  padding: 0 0.5rem;
`;const hn=H`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-30px);
    opacity: 0;
  }
  51% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,fn=H`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(30px);
    opacity: 0;
  }
  51% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,ce=r.button`
  background: transparent;
  border: 1.5px solid var(--primary-light);
  border-radius: 0.75rem;
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: var(--primary-color);
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
`;r(_e)`
  font-size: 20px;
  transition: color 0.3s ease;
`;r(ce)`
  .share-icon {
    animation: ${fn} 0.6s ease;
    color: var(--primary-color);
  }

  &:hover {
    background: var(--primary-color);
    color: #fff;

    .share-icon {
      animation: ${hn} 0.6s ease;
      color: #fff;
    }
  }
`;const gn=H`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(10px);
    opacity: 0;
  }
  51% {
    transform: translateX(-10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,xn=H`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(-10px);
    opacity: 0;
  }
  51% {
    transform: translateX(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,yn=r(ce)`
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  white-space: nowrap;

  .arrow-icon {
    animation: ${xn} 0.6s ease;
    color: var(--primary-color);
  }

  &:hover {
    background: var(--primary-color);
    color: #fff;

    .arrow-icon {
      animation: ${gn} 0.6s ease;
      color: #fff;
    }
  }
`,wn=r(Ne)`
  font-size: 20px;
  color: var(--primary-color);
  transition: color 0.3s ease;
  white-space: nowrap;
`;r.div`
  display: none; /* You can toggle to 'flex' or 'block' when open */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;r.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 5px;
`;r.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;r.div`
  margin-top: 20px;
`;const bn=r.div`
  margin-top: 2rem;
`,In=r.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  text-align: ${n=>n.isRTL?"right":"left"};
`,kn=r.div`
  display: flex;
  gap: 4px;
  margin-bottom: 1rem;
  @media (max-width: 490px) {
    flex-wrap: wrap;
  }
`,ne=r.button`
  padding: 12px 24px;
  background: ${n=>n.active?"#0066B3":"#fff"};
  color: ${n=>n.active?"#fff":"#333"};
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: ${n=>n.active?"#0066B3":"#f3f4f6"};
  }
`,vn=r.div`
  background: ${({variant:n})=>n==="CreditCard"?"#ffeacc":"transparent"};
  border-radius: 8px;
  display: flex;
  font-weight: 600;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin-top: 1rem;
`,Cn=r.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: row;
  justify-content: flex-start;
`,te=r.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,jn="data:image/svg+xml,%3csvg%20width='47'%20height='30'%20viewBox='0%200%2047%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1985_11285)'%3e%3cpath%20d='M2.41026%200H44.5897C45.9209%200%2047%201.07454%2047%202.4V27.6C47%2028.9255%2045.9209%2030%2044.5897%2030H2.41026C1.07913%2030%200%2028.9255%200%2027.6V2.4C0%201.07454%201.07913%200%202.41026%200Z'%20fill='%230E4595'/%3e%3cpath%20d='M17.6675%2020.9237L19.6777%209.17811H22.893L20.8814%2020.9237H17.6675ZM32.4972%209.43131C31.8603%209.19335%2030.862%208.93799%2029.6156%208.93799C26.4386%208.93799%2024.2007%2010.531%2024.1817%2012.8142C24.1637%2014.502%2025.7794%2015.4435%2026.9988%2016.0053C28.2504%2016.581%2028.6711%2016.9482%2028.6652%2017.4623C28.6573%2018.2496%2027.6657%2018.6093%2026.7417%2018.6093C25.4548%2018.6093%2024.7711%2018.4312%2023.7152%2017.9927L23.3008%2017.8061L22.8496%2020.4355C23.6005%2020.7633%2024.9893%2021.0474%2026.4311%2021.0621C29.8109%2021.0621%2032.0048%2019.4873%2032.0299%2017.0491C32.0419%2015.713%2031.1853%2014.6962%2029.3303%2013.8579C28.2065%2013.3146%2027.5183%2012.9519%2027.5256%2012.4018C27.5256%2011.9136%2028.1081%2011.3914%2029.3668%2011.3914C30.4183%2011.3752%2031.18%2011.6035%2031.7734%2011.8414L32.0615%2011.977L32.4972%209.43131ZM40.771%209.17793H38.2865C37.5169%209.17793%2036.9409%209.38715%2036.6029%2010.152L31.828%2020.916H35.2042C35.2042%2020.916%2035.7561%2019.4686%2035.881%2019.1509C36.2501%2019.1509%2039.5298%2019.1559%2039.9988%2019.1559C40.095%2019.5671%2040.3898%2020.916%2040.3898%2020.916H43.3734L40.771%209.17757V9.17793ZM36.8292%2016.7625C37.095%2016.0858%2038.1102%2013.4791%2038.1102%2013.4791C38.0912%2013.5105%2038.3741%2012.7991%2038.5365%2012.3581L38.7537%2013.3708C38.7537%2013.3708%2039.3695%2016.1746%2039.4981%2016.7625H36.8292ZM14.938%209.17793L11.7902%2017.1879L11.4548%2015.5601C10.8688%2013.6837%209.04302%2011.6508%207.00195%2010.633L9.88016%2020.905L13.282%2020.9012L18.3438%209.17781H14.938'%20fill='white'/%3e%3cpath%20d='M8.85251%209.17749H3.66799L3.62695%209.42187C7.6604%2010.3941%2010.3293%2012.7436%2011.4374%2015.5665L10.31%2010.1689C10.1154%209.42517%209.55094%209.20323%208.85263%209.17725'%20fill='%23F2AE14'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1985_11285'%3e%3crect%20width='47'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Pn="/ta-lm/assets/card-payment-pRc-PCgG.svg",Sn="/ta-lm/assets/meza-payment-Dx2IPX7y.png",En=async(n,i)=>{try{const u=await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${n}&lon=${i}&format=json`)).json();return u&&u.display_name?u.display_name:null}catch(d){return console.error("Error reverse geocoding coordinates:",d),null}},An=({isRTL:n})=>{const{t:i}=O(),[d,u]=b.useState(null),o=b.useRef(),{control:c,watch:f,setValue:l,formState:{errors:a}}=Q(),p=f("governorate"),{data:s=[]}=X("Governance"),{data:h=[]}=Fe(p,{skip:!p}),{data:S=[]}=ze("TimePeriodSlots"),B=async g=>{u(g);const x=await En(g[0],g[1]);x&&l("addressUrl",x)};return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:[e.jsxs(v,{children:[e.jsxs(A,{children:[e.jsx(M,{htmlFor:"governorate",isRTL:n,children:i("InKindDonations.governorate.label")}),e.jsx(C,{name:"governorate",control:c,id:"governorate",rules:{required:i("checkout.inputRequired")},render:({field:g})=>e.jsxs(W,{isRTL:n,...g,children:[e.jsx("option",{value:"",children:i("InKindDonations.selectOption")}),s.map(x=>e.jsx("option",{value:x.id,children:n?x.nameAr:x.nameEn},x.id))]})})]}),a.governorate&&e.jsx(D,{children:a.governorate.message})]}),e.jsxs(v,{children:[e.jsxs(A,{children:[e.jsx(M,{htmlFor:"area",isRTL:n,children:i("InKindDonations.area.label")}),e.jsx(C,{name:"area",control:c,id:"area",rules:{required:i("checkout.inputRequired")},render:({field:g})=>e.jsxs(W,{isRTL:n,...g,children:[e.jsx("option",{value:"",children:i("InKindDonations.selectOption")}),h?.relatedRecords?.map(x=>e.jsx("option",{value:x.id,children:n?x.nameAr:x.nameEn},x.id))]})})]}),a.area&&e.jsx(D,{children:a.area.message})]})]}),e.jsx(F,{children:e.jsxs(v,{children:[e.jsxs(A,{children:[e.jsx(M,{htmlFor:"address",isRTL:n,children:i("InKindDonations.address.label")}),e.jsx(C,{name:"address",control:c,id:"address",rules:{required:i("checkout.inputRequired")},render:({field:g})=>e.jsx(q,{isRTL:n,...g,type:"text"})})]}),a.address&&e.jsx(D,{children:a.address.message})]})}),e.jsx(F,{children:e.jsx(v,{children:e.jsxs(Ze,{style:{height:"200px",alignItems:"flex-start"},children:[e.jsx(J,{htmlFor:"addressUrl",isRTL:n,children:i("InKindDonations.addressUrl")}),e.jsx(Je,{isRTL:n,position:d,onPositionChange:B})]})})}),e.jsxs(F,{children:[e.jsxs(v,{children:[e.jsxs(A,{style:{justifyContent:"space-between"},children:[e.jsx(M,{htmlFor:"pickupDate",isRTL:n,children:i("InKindDonations.pickupDate.label")}),e.jsx(C,{name:"pickupDate",control:c,id:"pickupDate",rules:{required:i("checkout.inputRequired")},render:({field:{value:g,onChange:x}})=>{const P=()=>{o.current?.showPicker?.()};return e.jsxs($e,{onClick:P,children:[e.jsx(Le,{type:"text",readOnly:!0,value:g||"",isRTL:n}),e.jsx(Te,{isRTL:n}),e.jsx(Oe,{type:"date",min:new Date().toISOString().split("T")[0],onChange:G=>x(G.target.value),ref:o})]})}})]}),a.pickupDate&&e.jsx(D,{children:a.pickupDate.message})]}),e.jsxs(v,{children:[e.jsxs(A,{children:[e.jsx(M,{htmlFor:"timePeriodSlotId",isRTL:n,children:i("InKindDonations.period.label")}),e.jsx(C,{name:"timePeriodSlotId",control:c,id:"timePeriodSlotId",rules:{required:i("checkout.inputRequired")},render:({field:g})=>e.jsxs(W,{isRTL:n,...g,children:[e.jsx("option",{value:"",children:i("InKindDonations.period.selectOption")}),S?.map(x=>e.jsxs("option",{value:x.id,children:[n?x.nameAr:x.nameEn," -"," ",`${x.startTime} - ${x.endTime}`]}))]})})]}),a.timePeriodSlotId&&e.jsx(D,{children:a.timePeriodSlotId.message})]})]}),e.jsx(F,{children:e.jsx(v,{children:e.jsxs(A,{children:[e.jsx(J,{htmlFor:"notes",children:i("InKindDonations.notes.label")}),e.jsx(C,{name:"notes",control:c,id:"notes",render:({field:g})=>e.jsx("textarea",{style:{width:"100%",height:"100%",outline:"none"},...g,rows:3})})]})})})]})},Mn=({setValue:n})=>{const{t:i,i18n:d}=O(),u=d.resolvedLanguage==="ar",{data:o=[]}=X("DonationMethod"),[c,f]=b.useState(!1),[l,a]=b.useState(null);b.useEffect(()=>{o?.length>0&&(a(o[0].id),n("paymentMethodId",o[0].id),n("isAbroad",!1))},[o,n]);const p=h=>{a(h.id),n("paymentMethodId",h.id);const S=window.dataLayer||[],B={1:"Credit Card",2:"Cash Collection",3:"Fawry",4:"Vodafone Cash"};S.push({event:"add_payment_info",payment_method:B[h.id]||h.nameEn,payment_method_id:h.id})},s=h=>{switch(h.nameEn){case"CreditCard":return e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("p",{children:i("checkout.cardDis")}),e.jsx("img",{src:jn,alt:"visa",style:{height:24}}),e.jsx("img",{src:Pn,alt:"mastercard",style:{height:24}}),e.jsx("img",{src:Sn,alt:"meza",style:{height:24}})]});case"Fawry":return e.jsx("p",{children:i("checkout.fawryDis")});case"VodafonCasch":return e.jsx("p",{children:i("checkout.walletDis")});case"CashCollection":return e.jsx(An,{isRTL:u});default:return e.jsx("p",{children:h.nameEn})}};return e.jsxs(bn,{children:[e.jsx(Cn,{children:e.jsx(v,{style:{display:"flex"},children:e.jsx(C,{name:"isAbroad",id:"isAbroad",defaultValue:!1,render:({field:h})=>e.jsxs(Ve,{children:[e.jsxs(te,{children:[e.jsx(ee,{type:"radio",name:"donationLocation",value:!1,checked:h.value===!1,onChange:()=>{h.onChange(!1),f(!1)}}),i("donationSection.inBank.insideEgypt","من داخل مصر")]}),e.jsxs(te,{children:[e.jsx(ee,{type:"radio",name:"donationLocation",value:!0,checked:h.value===!0,onChange:()=>{h.onChange(!0),f(!0)}}),i("donationSection.inBank.outsideEgypt","من خارج مصر")]})]})})})}),e.jsx(In,{isRTL:u,children:i("checkout.donationMethods")}),e.jsx(kn,{children:c===!1?o.map(h=>e.jsx(ne,{type:"button",active:l===h.id,variant:h.nameEn,onClick:()=>p(h),children:u&&h.nameAr||h.nameEn},h.id)):e.jsx(ne,{type:"button",active:l===o[0]?.id,variant:o[0]?.nameEn,onClick:()=>p(o[0]),children:u&&o[0]?.nameAr||o[0]?.nameEn},1)}),e.jsxs(vn,{variant:o.find(h=>h.id===l)?.nameEn,children:[c===!1&&o.find(h=>h.id===l)&&s(o.find(h=>h.id===l)),c===!0&&s((o||[]).find(h=>h.id===1))]})]})},Dn=r.section`
  padding: 0 4rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Bn=r.div`
  max-width: 98%;
  margin: 0 auto;
`,Fn=r.div``,zn=r.div`
  display: flex;
  width: 90dvw;
  background: #fff;
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column;
    border-radius: 0;
  }
`,$n=r.div`
  flex: 1;
  background: #f7fafd;
  padding: 32px 24px;
  width: 50%;
  ${""}
  @media (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-bottom: 1.5px solid #ececec;
    padding: 24px 12px;
  }
`,Ln=r.div`
  flex: 1;
  padding: 32px 24px;
  height: 100%;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 24px 12px;
  }
`,Tn=r.div`
  width: 100%;
  height: 100%;
  background: var(--Colors-Grey-Grey---1000, #f9f9f9);

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
`,On=r.h1`
  color: var(--Colors-Blue-Blue, #0a4976);
  font-size: 32px;
  font-family: Cairo;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
  text-transform: uppercase;
  word-wrap: break-word;
  margin: 0;
  width: 100%;
`,Vn=r.h2`
  color: var(--Colors-Base-Black, black);
  font-size: 24px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
  gap: 10px;
`,Rn=r.div`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  background: ${({error:n})=>n?"var(--Colors-Red-Red---1000, #FFEDED)":"var(--Colors-Grey-Grey---900, #F5F5F5)"};
  border-radius: 10px;
  border: 1px solid
    ${({error:n})=>n?"var(--Colors-Red-Red, #F00000)":"var(--Colors-Grey-Grey---800, #DFDFDF)"};
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-direction: ${({isRtl:n})=>n?"row":"row-reverse"};
  @media (max-width: 490px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 0;
  }
`,qn=r.img`
  width: 95px;
  height: 95px;
  border-radius: 10px;
  object-fit: cover;
`,Nn=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({isRtl:n})=>n?"flex-end":"flex-start"};
  @media (max-width: 490px) {
    justify-content: center;
    align-items: center;
  }
`,_n=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
`,Hn=r.span`
  color: var(--Colors-Orange-Orange, #fbae42);
  font-size: 15px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;
`,Gn=r.h3`
  color: var(--Colors-Blue-Blue, #0a4976);
  font-size: 20px;
  font-family: Cairo;
  font-weight: 700;

  word-wrap: break-word;
  margin: 0;
  text-align: ${({isRtl:n})=>n?"right":"left"};
`,Un=r.div`
  display: flex;
  align-items: center;
  gap: 7px;
  direction: ${({isRtl:n})=>n?"ltr":"rtl"};
  text-wrap: nowrap;
`,Wn=r.span`
  color: var(--Colors-Base-Black, black);
  font-size: 15px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
  text-wrap: nowrap;
`,Kn=r.span`
  color: ${({error:n})=>n?"var(--Colors-Red-Red, #F00000)":"var(--Colors-Blue-Blue---100, #015CAB)"};
  font-size: 15px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 4px;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
`,Qn=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,re=r.button`
  width: 20px;
  height: 20px;
  border: 1px solid var(--Colors-Base-Black, black);
  background: transparent;
  color: #222;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Xn=r.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,Yn=r.span`
  color: black;
  font-size: 16px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
`,Zn=r.span`
  color: black;
  font-size: 24px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
`,Jn=r.input`
  color: black;
  font-size: 24px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid #fbae42;
  border-radius: 4px;
  padding: 2px 6px;
  width: 80px;
  text-align: center;
  outline: none;

  &:focus {
    border-color: #015cab;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`,et=r.button`
  width: 20px;
  height: 20px;
  background: transparent;
  color: #f00000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
`,nt=r.p`
  color: var(--Colors-Red-Red, #f00000);
  font-size: 15px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  text-align: ${({isRtl:n})=>n?"right":"left"};
  margin: 5px 0;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
`;r.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
`;const tt=r.label`
  color: var(--Colors-Base-Black, black);
  font-size: 1rem;
  font-family: Cairo;
  font-weight: 400;
  padding: 1rem;
  cursor: pointer;

  a {
    color: var(--Colors-Blue-Blue---100, #015cab);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`,rt=r.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid var(--Colors-Grey-Grey---800, #dfdfdf);
`,ot=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-direction: "row";
  @media (max-width: 1200px) {
    gap: 10px;
  }
  @media (max-width: 490px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`,at=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: "row";
`,it=r.span`
  color: black;
  font-size: 14px;
  font-family: Cairo;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
`,st=r.span`
  color: black;
  font-size: 24px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`,lt=r.span`
  color: black;
  font-size: 24px;
  font-family: Cairo;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`,dt=r.button`
  flex: 1;
  height: 50px;
  padding: 6px 19px;
  background: var(--Colors-Orange-Orange, #fbae42);
  border-radius: 10px;
  border: none;
  color: var(--Colors-Base-White, white);
  font-size: 16px;
  font-family: Cairo;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  @media (max-width: 490px) {
    padding: 15px 20px;
  }

  &:hover {
    background: #e0a92e;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ct=r.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
`,pt=r.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;r.div`
  width: 100%;
  padding: 16px;
  background: var(--Colors-Grey-Grey---900, #f5f5f5);
  border-radius: 10px;
  border: 1px solid var(--Colors-Grey-Grey---800, #dfdfdf);
  margin: 20px 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  direction: ${({isRtl:n})=>n?"rtl":"ltr"};
`;r.label`
  color: var(--Colors-Base-Black, black);
  font-size: 16px;
  font-family: Cairo;
  font-weight: 400;
  cursor: pointer;
`;const mt=r.div`
  margin-top: 2rem;
`,ut=r.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: ${({isRtl:n})=>n?"row-reverse":"row"};
`,pe=r.input`
  display: none;
`,me=r.svg`
  overflow: visible;
  width: 2em;
  height: 2em;
`,ht=r.path`
  fill: none;
  stroke: #0f70b7;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition:
    stroke-dasharray 0.5s ease,
    stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;

  ${pe}:checked ~ ${me} & {
    stroke-dasharray: 70.51 9999999;
    stroke-dashoffset: -262.27;
  }
`;r.span`
  margin-right: 0.5rem;
`;const ft="/ta-lm/assets/cart-summary-B9P1Q470.svg";let z=null,j=!1;const _=async n=>{if(j){console.log("Payment failure already processed, skipping duplicate call");return}try{const i=localStorage.getItem("orderId"),d=localStorage.getItem("sessionId");if(i&&d&&d===z){j=!0,window._paymentObserverCleanup&&window._paymentObserverCleanup(),ue();const u={orderId:parseInt(i),paymentSessionId:d,isSuccess:!1,referenceNumber:Math.random().toString(36).substring(2,8),response:n||"Payment was cancelled or failed",lang:document.documentElement.lang||"en"};console.log("Completing payment failure:",u),await ie(u),console.log("Payment failure completed:",n),localStorage.removeItem("sessionId"),localStorage.removeItem("orderId")}else console.warn("Cannot complete payment failure - session mismatch or missing data",{orderId:i,storedSessionId:d,currentPaymentSessionId:z})}catch(i){console.error("Error completing payment failure:",i),j=!1}};let K=!1,L=null,T=null;const ue=()=>{L&&(document.removeEventListener("visibilitychange",L),L=null),T&&(window.removeEventListener("focus",T),T=null),K=!1},gt=()=>{K||(K=!0,L=async()=>{if(!document.hidden){const n=localStorage.getItem("orderId"),i=localStorage.getItem("sessionId");n&&i&&i===z&&!j&&setTimeout(async()=>{if(!j&&i===localStorage.getItem("sessionId")){const d=document.getElementById("paymentModal");d&&d.style.display==="none"&&await _("Payment was cancelled - user returned from payment page")}},1e3)}},document.addEventListener("visibilitychange",L),T=async()=>{const n=localStorage.getItem("orderId"),i=localStorage.getItem("sessionId");n&&i&&i===z&&!j&&setTimeout(async()=>{if(!j&&i===localStorage.getItem("sessionId")){const d=document.getElementById("paymentModal");d&&(d.style.display==="none"||!d.style.display)&&await _("Payment was cancelled - window regained focus")}},1e3)},window.addEventListener("focus",T))};function oe(n){return new Promise((i,d)=>{if(!n)return d("No session ID provided.");if(z=n,j=!1,gt(),window.errorCallback=async function(o){console.error("Mastercard payment error:",o)},window.cancelCallback=async function(){console.log("Payment was cancelled - callback triggered"),await _("Payment was cancelled by user")},window.Checkout)u();else{const o=document.createElement("script");o.src="https://qnbalahli.gateway.mastercard.com/static/checkout/checkout.min.js",o.setAttribute("data-error","errorCallback"),o.setAttribute("data-cancel","cancelCallback"),o.async=!0,o.onload=()=>{window.Checkout?u():d("Checkout script loaded, but Checkout is not available.")},o.onerror=()=>{d("Failed to load Mastercard checkout script.")},document.body.appendChild(o)}function u(){try{console.log("Starting payment with session ID"),window.Checkout.configure({session:{id:n}});const o=document.getElementById("paymentModal"),c=document.getElementById("hc-loader-container"),f=document.getElementById("hc-comms-layer-iframe");o&&(o.style.display="block");let l=null;o&&(l=new MutationObserver(a=>{a.forEach(p=>{p.type==="attributes"&&p.attributeName==="style"&&(o.style.display==="none"||!o.style.display)&&!j&&z===n&&setTimeout(async()=>{localStorage.getItem("sessionId")===n&&!j&&(console.log("Payment modal closed - checking if payment was cancelled"),await _("Payment modal was closed"))},500)})}),l.observe(o,{attributes:!0,attributeFilter:["style","display"]})),window.Checkout.showPaymentPage(),setTimeout(()=>{c&&(c.style.display="none"),f&&(f.style.display="none")},1e3),window._paymentObserverCleanup=()=>{l&&(l.disconnect(),l=null),ue()},i("Payment started")}catch(o){d("Failed to start payment: "+o.message)}}})}let $=0;const ae=60*1e3,he=()=>{const n=Date.now();return n-$<ae?{allowed:!1,remainingSeconds:Math.ceil((ae-(n-$))/1e3)}:{allowed:!0}},xt=async(n,i,d,u,o)=>{const c=he();if(!c.allowed){w.error(o?o("checkout.rateLimitError",{seconds:c.remainingSeconds,defaultValue:`Please wait ${c.remainingSeconds} second(s) before making another donation.`}):`Please wait ${c.remainingSeconds} second(s) before making another donation.`);return}if(d){u(!0);try{const f={orderId:i.orderId,paymentMethodId:n.paymentMethodId,isAbroad:n.isAbroad};$=Date.now();const l=await N(f,d);localStorage.setItem("successPageCartItems",JSON.stringify({items:i.items,totalAmount:i.totalAmount,orderId:+l.data.orderId})),localStorage.setItem("successOrderId",String(l.data.orderId)),oe(l.data.onlinePaymentSessionId),localStorage.setItem("sessionId",l.data.onlinePaymentSessionId),localStorage.setItem("orderId",+l.data.orderId),localStorage.setItem("paymentInProgress","true")}catch(f){if(console.error("Credit Card Payment Error:",f),f?.response?.status===429){const l=f.response.data;w.error(l?.error||(o?o("checkout.rateLimitError",{seconds:l?.retryAfter||60,defaultValue:"Too many requests. Please wait before trying again."}):"Too many requests. Please wait before trying again."))}else w.error(o?o("checkout.paymentError",{defaultValue:"Payment failed. Please try again."}):"Payment failed. Please try again.")}finally{u(!1)}}else{u(!0);try{const f={anonymousUserInfo:{name:n.name,email:n.email,mobileNumber:n.phone},isAbroad:n.isAbroad,paymentMethodId:n.paymentMethodId,items:i.items.map(a=>{const p={campaignId:a.campaignId,donationIntention:a.donationIntention,amount:a.amount,donationAmountTypeId:a.donationAmountTypeId,numberOfShares:a.numberOfShares,shareValue:a?.campaign?.basePrice,isShareInSakk:a.isShareInSakk,isInstallmentPayment:a.isInstallmentPayment,installmentMonths:a.installmentMonths,sakkOwnerInfo:a.sakkOwnerInfo,onBehalfInfo:a.onBehalfInfo};return a.isInstallmentPayment&&a.installmentMonths>1&&console.log("[Payment Handler] Installment Payment Item:",{amount:p.amount,shareValue:p.shareValue,installmentMonths:p.installmentMonths,expectedMonthlyAmount:p.amount,note:"Backend should use 'amount' (monthly) for payment gateway, not 'shareValue' (total)"}),p})};console.log("[Payment Handler] Full payload being sent to backend:",f),$=Date.now();const l=await N(f,d);localStorage.setItem("successPageCartItems",JSON.stringify({items:i.items,totalAmount:i.totalAmount,orderId:+l.data.orderId})),localStorage.setItem("successOrderId",String(l.data.orderId)),oe(l.data.onlinePaymentSessionId),localStorage.setItem("sessionId",l.data.onlinePaymentSessionId),localStorage.setItem("orderId",+l.data.orderId),localStorage.setItem("paymentInProgress","true")}catch(f){if(console.error("Credit Card Payment Error:",f),f?.response?.status===429){const l=f.response.data;w.error(l?.error||(o?o("checkout.rateLimitError",{seconds:l?.retryAfter||60,defaultValue:"Too many requests. Please wait before trying again."}):"Too many requests. Please wait before trying again."))}else w.error(o?o("checkout.paymentError",{defaultValue:"Payment failed. Please try again."}):"Payment failed. Please try again.")}finally{u(!1)}}},yt=async(n,i,d,u)=>{console.log("Fawry flow here...",n,i,d,u)},wt=async(n,i,d,u)=>{console.log("Wallet flow here...",n,i,d,u)},bt=async(n,i,d,u,o,c)=>{const f=he();if(!f.allowed){w.error(o?o("checkout.rateLimitError",{seconds:f.remainingSeconds,defaultValue:`Please wait ${f.remainingSeconds} second(s) before making another donation.`}):`Please wait ${f.remainingSeconds} second(s) before making another donation.`);return}const l=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n.addressUrl)}`;if(d){u(!0);try{const a={orderId:i.orderId,paymentMethodId:n.paymentMethodId,cashCollectionInfo:{donerName:n.name,mobileNumber:n.phone,preferredDateTime:n.pickupDate,notes:n.notes,locationUrl:l,address:n.address,cityId:+n.area,governanceId:+n.governorate,timePeriodId:+n.timePeriodSlotId}};$=Date.now();const p=await N(a,d);p.succeeded?(localStorage.setItem("successPageCartItems",JSON.stringify({items:i.items,totalAmount:i.totalAmount,orderId:+p.data.orderId})),localStorage.setItem("successOrderId",String(p.data.orderId)),localStorage.setItem("paymentInProgress","true"),w.success(o("checkout.cashCollectionInfoSuccess")),c({to:"/donation/success?method=cashCollection"})):w.error(o("checkout.cashCollectionInfoError"))}catch(a){if(console.error("Credit Card Payment Error:",a),a?.response?.status===429){const p=a.response.data;w.error(p?.error||(o?o("checkout.rateLimitError",{seconds:p?.retryAfter||60,defaultValue:"Too many requests. Please wait before trying again."}):"Too many requests. Please wait before trying again."))}else w.error(o("checkout.cashCollectionInfoError"))}finally{u(!1)}}else{u(!0);try{const a={anonymousUserInfo:{name:n.name,email:n.email,mobileNumber:n.phone},paymentMethodId:n.paymentMethodId,items:i.items.map(s=>({campaignId:s.campaignId,donationIntention:s.donationIntention,amount:s.amount,donationAmountTypeId:s.donationAmountTypeId,numberOfShares:s.numberOfShares,shareValue:s?.campaign?.basePrice,isShareInSakk:s.isShareInSakk,isInstallmentPayment:s.isInstallmentPayment,installmentMonths:s.installmentMonths,sakkOwnerInfo:s.sakkOwnerInfo,onBehalfInfo:s.onBehalfInfo})),cashCollectionInfo:{donerName:n.name,mobileNumber:n.phone,preferredDateTime:n.pickupDate,notes:n.notes,locationUrl:l,address:n.address,cityId:+n.area,governanceId:+n.governorate,timePeriodId:+n.timePeriodSlotId}};$=Date.now();const p=await N(a,d);p.succeeded?(localStorage.setItem("successPageCartItems",JSON.stringify({items:i.items,totalAmount:i.totalAmount,orderId:+p.data.orderId})),localStorage.setItem("orderId",+p.data.orderId),localStorage.setItem("successOrderId",String(p.data.orderId)),localStorage.setItem("paymentInProgress","true"),w.success(o("checkout.cashCollectionInfoSuccess")),c({to:"/donation/success?method=cashCollection"})):w.error(o("checkout.cashCollectionInfoError"))}catch(a){if(console.error("Credit Card Payment Error:",a),a?.response?.status===429){const p=a.response.data;w.error(p?.error||(o?o("checkout.rateLimitError",{seconds:p?.retryAfter||60,defaultValue:"Too many requests. Please wait before trying again."}):"Too many requests. Please wait before trying again."))}else w.error(o("checkout.cashCollectionInfoError"))}finally{u(!1)}}},It=()=>{const{cartItems:n,removeFromCart:i,updateQuantity:d,decreaseQuantity:u,updatePrice:o,getTotalPrice:c,updateDonationIntention:f,isAuthenticated:l}=se(),{t:a,i18n:p}=O(),s=p.resolvedLanguage==="ar",h=le(),[S,B]=b.useState(!1),[g,x]=b.useState(!1),[P,G]=b.useState(!1),[fe,Y]=b.useState(null),[V,U]=b.useState({}),{handleSubmit:ge}=Q(),{data:xe=[]}=X("DonationMethod"),ye={CreditCard:xt,Fawry:yt,VodafoneCash:wt,CashCollection:bt},we=xe.reduce((t,y)=>{const m=ye[y.nameEn];return m&&(t[y.id]=m),t},{}),be=t=>{const y=we[t.paymentMethodId];if(y){const m=window.dataLayer||[],k=p.resolvedLanguage==="ar",I={1:"Credit Card",2:"Cash Collection",3:"Fawry",4:"Vodafone Cash"},R={name:t.name,email:t.email,phone:t.phone};localStorage.setItem("donaterData",JSON.stringify(R));const Se=n?.items?.map(E=>({item_id:E.campaignId||E.id,item_name:k?E?.campaign?.titleAr||E?.titleAr:E?.campaign?.titleEn||E?.titleEn,item_category:"donation",price:E.amount||0,quantity:E.numberOfShares||1}))||[];return m.push({event:"Donate_Started",ecommerce:{currency:"EGP",value:Math.round(c()),items:Se},total_amount:Math.round(c()),donate_currency:a("checkout.amountcurrency"),isAbroad:t.isAbroad?"USD":"EGP",donation_method:I[t.paymentMethodId]}),m.push({event:"donate_started",total_amount:Math.round(c()),donate_currency:a("checkout.amountcurrency"),isAbroad:t.isAbroad?"USD":"EGP",donation_method:I[t.paymentMethodId]}),y(t,n,l,G,a,h)}console.warn("No handler for method:",t.paymentMethodId)},Ie=t=>t?.isShareInSakk?1:t?.campaign?.basePrice||t?.shareValue||1,ke=(t,y)=>{const m=Number(y);U(k=>({...k,[t.id]:m}))},ve=t=>{const y=Number(t?.campaign?.basePrice);if(y>=0){const m=V[t.id]??t.amount,k=t?.campaign?.campaignTypeId;let I=m;t.isInstallmentPayment&&t.installmentMonths>1,m<y&&(I=y),k===4&&Math.round(I/y)>7&&(I=y*7),U(R=>({...R,[t.id]:I})),o(t.id,I,!0)}Y(null)},Z=(t,y)=>{y.isShareInSakk||y.isInstallmentPayment||y?.campaign?.campaignTypeId===4||(V[t]===void 0&&U(m=>({...m,[t]:y.amount})),Y(t))},Ce=t=>{t.key==="Enter"&&t.target.blur()},je=(t,y)=>{const m=n.items.find(I=>I.id===t);if(!m||!m?.campaign?.intentions)return;const k=m?.campaign?.intentions.find(I=>I.id===Number(y));k&&f(t,k.id)},Pe=async t=>{if(n?.items?.some(m=>!m.donationIntention&&m.campaign.id!==1054)){w.error(a("common.donateIntentionRequired"));return}be(t)};return e.jsxs(Tn,{children:[e.jsxs(On,{isRtl:s,children:[e.jsx("img",{src:ft,alt:"cart"})," ",a("checkout.cart")]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(Vn,{isRtl:s,children:a("checkout.cartItems")}),n?.items?.length===0?e.jsx("div",{style:{textAlign:"center",margin:"32px 0",color:"#888"},children:a("checkout.cartEmpty")}):e.jsxs(e.Fragment,{children:[n?.items?.map(t=>{const y=t?.campaign?.intentions||[];return e.jsxs(Ee.Fragment,{children:[e.jsxs(Rn,{isRtl:s,error:!!(s?t.errorAr:t.errorEn)||!t.donationIntention&&t.campaign.id!==1054,children:[e.jsx(et,{type:"button",onClick:()=>{i(t.id)},children:e.jsx(He,{size:16})}),e.jsxs(Qn,{children:[e.jsx(re,{type:"button",onClick:()=>{u(t.id)},disabled:t.isInstallmentPayment||t.amount<=Ie(t),children:e.jsx(Ge,{size:16})}),e.jsxs(Xn,{children:[e.jsx(Yn,{children:a("checkout.amountcurrency")}),fe===t.id?e.jsx(Jn,{type:"number",value:V[t.id]??t.amount,onChange:m=>{const k=parseFloat(m.target.value)||0;ke(t,k)},onBlur:()=>ve(t),onFocus:()=>Z(t.id,t),onKeyPress:m=>Ce(m),min:t?.campaign?.basePrice,max:t?.campaign?.campaignTypeId===4?t?.campaign?.basePrice*7:void 0,disabled:t.isShareInSakk||t.isInstallmentPayment||t?.campaign?.campaignTypeId===4}):e.jsx(Zn,{onClick:()=>{!t.isShareInSakk&&!t.isInstallmentPayment&&t?.campaign?.campaignTypeId!==4&&Z(t.id,t)},style:{cursor:t.isShareInSakk||t.isInstallmentPayment||t?.campaign?.campaignTypeId===4?"not-allowed":"pointer",opacity:t.isShareInSakk||t.isInstallmentPayment||t?.campaign?.campaignTypeId===4?.6:1},children:V[t.id]??t.amount})]}),e.jsx(re,{type:"button",onClick:()=>{const m=t.amount+t.basePrice;if(t?.campaign?.campaignTypeId===4&&m>7){w.warning(a("checkout.maxQuantityReached",{max:7}));return}d(t.id)},disabled:t.isInstallmentPayment||t?.campaign?.campaignTypeId===4&&t.numberOfShares>=7,children:e.jsx(Ue,{size:16})})]}),e.jsxs(Nn,{isRtl:s,children:[e.jsx(_n,{isRtl:s,children:t?.campaign?.keyWords&&t?.campaign?.keyWords?.map(m=>e.jsxs(Hn,{children:["#",s?m.nameAr:m.nameEn]},m.id))}),e.jsx(Gn,{children:s?t?.campaign?.titleAr:t?.campaign?.titleEn}),t.isInstallmentPayment&&t.installmentMonths>1&&e.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"8px",textAlign:s?"right":"left"},children:s?`دفع بالتقسيط (${t.installmentMonths} أشهر)`:`Installment Payment (${t.installmentMonths} months)`}),t.campaign.id===1054&&e.jsx("div",{children:e.jsxs("p",{children:[s?"سيتم التبرع بقيمة عدد وجبات":"you will donate by number of meals",": ",t.amount/5," ",s?"وجبة ":"meals"]})}),t.isShareInSakk&&e.jsx("div",{style:{fontSize:"12px",color:"#28a745",marginBottom:"8px",textAlign:s?"right":"left",fontWeight:"500"},children:s?"مشاركة في صك":"Share in Sakk"}),t.campaign.id!==1054&&e.jsxs(Un,{isRtl:s,children:[e.jsxs(pt,{children:[e.jsxs(Kn,{isRtl:s,error:!t.donationIntention,children:[t.donationIntention?s?t?.campaign?.intentions.find(m=>m.id===t.donationIntention).nameAr:t?.campaign?.intentions.find(m=>m.id===t.donationIntention).nameEn:a("common.selectIntention"),e.jsx(We,{})]}),e.jsxs(ct,{value:t.donationIntention||"",onChange:m=>je(t.id,m.target.value),children:[e.jsx("option",{style:{direction:s?"rtl":"ltr"},value:"",children:a("common.selectIntention")}),y.map(m=>e.jsx("option",{style:{direction:s?"rtl":"ltr"},value:m.id,children:s?m.nameAr:m.nameEn},m.id))]})]}),e.jsxs(Wn,{isRtl:s,children:[a("common.donateIntention"),":"]})]})]}),e.jsx(qn,{src:"https://lifemakers.org/Public/"+t?.campaign?.imageUrl,alt:s?t?.campaign?.titleAr:t?.campaign?.titleEn})]}),((s?t.errorAr:t.errorEn)||!t.donationIntention&&t.campaign.id!==1054)&&e.jsxs(nt,{isRtl:s,children:["*"," ",t.donationIntention?s?t.errorAr:t.errorEn:a("common.donateIntentionRequired")]})]},t.id)}),e.jsxs(rt,{children:[e.jsx(mt,{children:e.jsxs(ut,{isRtl:s,children:[e.jsx(pe,{type:"checkbox",value:"ProvideBankIntegration",checked:S,onChange:t=>B(t.target.checked)}),e.jsx(me,{viewBox:"0 0 64 64",children:e.jsx(ht,{d:"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"})}),e.jsxs(tt,{onClick:()=>x(!0),style:{direction:s?"rtl":"ltr"},children:[a("checkout.termsPrefix")," ",e.jsx("a",{href:"#",children:a("checkout.termsLink")})," ",s?"و":"and"," ",e.jsx("a",{href:"#",children:a("checkout.privacyLink")})," ",e.jsx("strong",{style:{color:"red"},children:"*"})]})," "]})}),e.jsxs(ot,{isRtl:s,children:[e.jsx(dt,{disabled:!S||P,type:"button",onClick:ge(Pe),children:P?e.jsxs(e.Fragment,{children:[a("common.loading"),e.jsxs(Re,{children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]}):a("checkout.paymentBtn")}),e.jsxs(at,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",flexDirection:"row"},children:[e.jsx(lt,{children:a("checkout.amountcurrency")}),e.jsx(st,{children:Math.round(c())})]}),e.jsx(it,{children:a("checkout.totalAmout")})]})]})]})]})]}),g&&e.jsx(Ke,{onClose:()=>x(!1),modalTitle:a("checkout.privacyLink"),children:e.jsx(Qe,{})})]})},kt=()=>{const n=le(),{userProfile:i}=qe(),{control:d,setValue:u,formState:{errors:o}}=Q(),{t:c,i18n:f}=O(),l=f.resolvedLanguage==="ar",[a,p]=b.useState(null),[s,h]=b.useState("eg"),{isAuthenticated:S}=se(),B=g=>{const x=/[\u0600-\u06FF]/,P=/[A-Za-z]/;return g.length===0||x.test(g[0])?"rtl":P.test(g[0])?"ltr":"rtl"};return b.useEffect(()=>{i&&(u("name",i?.fullName),u("email",i?.email),u("phone",i?.phoneNumber))},[i]),e.jsxs(e.Fragment,{children:[e.jsx(Ye,{}),e.jsxs(mn,{children:[e.jsx(cn,{isRTL:l,children:c("checkout.payment")}),!S&&e.jsxs(un,{children:[e.jsx("p",{style:{whiteSpace:"nowrap"},children:c("checkout.loginChoice")}),e.jsxs(yn,{onClick:()=>n({to:"/auth/login"}),children:[e.jsx("span",{children:c("common.login")}),e.jsx(wn,{className:"arrow-icon"})]})]})]}),e.jsxs(nn,{isRTL:l,children:[e.jsx(tn,{isRTL:l,children:c("checkout.personalData")}),e.jsxs(F,{children:[e.jsxs(v,{children:[e.jsxs(A,{children:[e.jsx(M,{htmlFor:"email",isRTL:l,focused:a==="email",children:c("checkout.formEmail")}),e.jsx(C,{name:"email",control:d,rules:{required:c("checkout.inputRequired"),pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:c("checkout.invalidEmail")}},render:({field:g})=>e.jsx(q,{...g,type:"email",isRTL:l,style:{direction:"ltr",textAlign:"left"},onFocus:()=>p("email"),onBlur:()=>{p(null),g.onBlur()}})})]}),o.email&&e.jsx(D,{children:o.email.message})]}),e.jsxs(v,{children:[e.jsxs(A,{children:[e.jsx(M,{htmlFor:"name",isRTL:l,focused:a==="name",children:c("checkout.formName")}),e.jsx(C,{name:"name",control:d,rules:{required:c("checkout.inputRequired")},render:({field:g})=>e.jsx(q,{...g,type:"text",isRTL:l,onFocus:()=>p("name"),onBlur:()=>{p(null),g.onBlur()},style:{direction:B(g.value)}})})]}),o.name&&e.jsx(D,{children:o.name.message})]})]}),e.jsx(on,{children:e.jsxs(v,{children:[e.jsxs(sn,{isRTL:l,children:[e.jsx(ln,{children:e.jsx(Ae,{country:s,value:"",onChange:(g,x)=>{h(x.countryCode)},enableSearch:!1,disableSearchIcon:!0,countryCodeEditable:!1})}),e.jsxs(dn,{children:[e.jsx(M,{htmlFor:"phone",isRTL:l,focused:a==="phone",children:c("checkout.formPhone")}),e.jsx(C,{name:"phone",control:d,rules:{required:c("checkout.inputRequired"),validate:g=>{const x=g.replace(/\D/g,"");if(!x)return c("checkout.inputRequired");try{const P=en(x,s?.toUpperCase());return!P||!P.isValid()?c("checkout.invalidPhoneNum"):!0}catch{return c("checkout.invalidPhoneNum")}}},render:({field:g})=>e.jsx(q,{...g,type:"tel",style:{direction:"ltr",textAlign:"left"},onFocus:()=>p("phone"),onBlur:()=>{p(null),g.onBlur()}})})]})]}),o.phone&&e.jsx(D,{children:o.phone.message})]})})]}),e.jsx(Mn,{setValue:u})]})},Ot=()=>{const{i18n:n}=O(),i=n.resolvedLanguage==="ar",d=Xe(),u=Me({defaultValues:{name:"",email:"",phone:"",countryCode:"eg",paymentMethodId:1,governorate:"",area:"",address:"",pickupDate:"",timePeriodSlotId:"",notes:""}});return b.useEffect(()=>{const o=async()=>{const f=d.hash||window.location.hash;if(f&&(f.includes("_hc-action-cancel")||f.includes("_hc-action-error"))){const l=localStorage.getItem("orderId"),a=localStorage.getItem("sessionId");if(l&&a){console.log("Payment cancellation detected from URL hash:",f);try{const p={orderId:parseInt(l),paymentSessionId:a,isSuccess:!1,referenceNumber:Math.random().toString(36).substring(2,8),response:f.includes("cancel")?"Payment was cancelled by user":"Payment error occurred",lang:n.resolvedLanguage||"en"};console.log("Completing payment failure from hash:",p),await ie(p),console.log("Payment failure completed from hash"),localStorage.removeItem("sessionId"),localStorage.removeItem("orderId"),window.history.replaceState(null,"",window.location.pathname+window.location.search)}catch(p){console.error("Error completing payment failure from hash:",p)}}}};o();const c=()=>{o()};return window.addEventListener("hashchange",c),()=>{window.removeEventListener("hashchange",c)}},[d.hash,n.resolvedLanguage]),e.jsx(Dn,{children:e.jsx(Bn,{children:e.jsx(Fn,{isRtl:i,children:e.jsx(De,{...u,children:e.jsx("form",{children:e.jsxs(zn,{children:[e.jsx(Ln,{children:e.jsx(kt,{})}),e.jsx($n,{children:e.jsx(It,{})})]})})})})})})};export{Ot as default};
