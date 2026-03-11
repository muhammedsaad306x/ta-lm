import{j as e}from"./map-vendor-CkCCoZy4.js";import{u as T,r as h,C as M,P as ie,R as oe,F as se}from"./form-vendor-8JSUuxVu.js";import{u as le,c as de}from"./tanstack-vendor-DVbpgvBY.js";import{d as n}from"./ui-vendor-BVv7PGpf.js";import{I as O,p as ce,t as V,v as K,o as B,Q as pe,U as me,V as xe,W as ue,aR as he,y as j,aS as ge,u as ee,ad as ae,b as fe,aT as be,aU as we,aV as ye,aW as ke,ah as je,aX as te,aY as ve,D as Ie}from"./index-CQputUX_.js";import{_ as ze,$ as Ce,k as Pe,f as Fe}from"./react-icons-vendor-D75jEhkE.js";import{B as Se,o as Ae,p as Ze,S as $e}from"./CampaignCard.styles-DZbdjgt-.js";import{p as De}from"./parsePhoneNumber-DYNEpPXc.js";import{L as Ee,a as Ne}from"./CampaignsSection.styles-Bb46-Hcb.js";import{g as Ue}from"./cacheConfig-DLAJO7wI.js";import{B as Me}from"./Breadcrumbs-CzB9j62p.js";import{u as Ve}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-BKWaKWrj.js";n.div`
  background: #fff;
  border: 1px solid #DFDFDF;
  border-radius: 10px;
  padding: clamp(10px, 2vw, 20px);
  width: 100%;
  box-sizing: border-box;
`;n.div`
  font-weight: 700;
  font-size: clamp(18px, 3vw, 28px);
  font-family: Cairo;
  margin-bottom: clamp(8px, 2vw, 16px);
  text-align: ${({isRtl:a})=>a?"right":"left"};
`;const Be=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(5px, 1vw, 12px);
  margin-bottom: clamp(8px, 2vw, 12px);
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;n.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 2vw, 10px);
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;const Ge=n.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: clamp(5px, 1vw, 10px);
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`,Oe=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  border: 1px solid #BFBFBF;
  border-radius: 10px;
  height: clamp(40px, 6vw, 50px);
  gap: clamp(4px, 1vw, 10px);
  padding: 0 clamp(6px, 2vw, 12px);
  background: #fff;
  flex: 2 1 0;
  min-width: 0;
`,We=n.label`
  color: #222;
  font-size: clamp(12px, 2vw, 18px);
  font-family: Cairo;
  font-weight: 400;
  @media (max-width: 1200px) {
    font-size: clamp(10px, 2vw, 16px);
  }
`,Ke=n.input`
  border: none;
  background: transparent;
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 700;
  font-family: Cairo;
  color: #222;
  width: clamp(40px, 10vw, 60px);
  text-align: right;
  outline: none;
  margin-left: clamp(4px, 1vw, 8px);
`,_e=n.span`
  color: #015CAB;
  font-weight: 500;
  font-size: clamp(14px, 2vw, 18px);
  font-family: Cairo;
  margin-right: clamp(4px, 1vw, 8px);
`,qe=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  height: clamp(40px, 6vw, 50px);
  padding: 0 clamp(6px, 2vw, 12px);
  background: #fff;
  margin-bottom: clamp(2px, 1vw, 4px);
`,He=n.label`
  color: #222;
  font-size: clamp(12px, 2vw, 18px);
  font-family: Cairo;
  font-weight: 400;
`,Xe=n.span`
  font-weight: 700;
  font-size: clamp(16px, 2vw, 20px);
  font-family: Cairo;
  color: #222;
  margin-left: clamp(4px, 1vw, 8px);
`,Re=n.div`
  min-width: clamp(60px, 10vw, 100px);
  color: #015CAB;
  font-weight: 500;
  font-size: clamp(14px, 2vw, 18px);
  font-family: Cairo;
`,Qe=n.p`
  color: #FF0000;
  font-size: clamp(12px, 2vw, 14px);
  font-family: Cairo;
  font-weight: 400;
  margin-top: 5px;
  text-align: center;
`,_=({name:a,goldPrice:t,label:d,unit:c,valueLabel:f,currency:p,calcGoldZakat:o,inputValue:v})=>e.jsx(e.Fragment,{children:e.jsx(Be,{children:e.jsxs(Ge,{children:[e.jsxs(Oe,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(We,{htmlFor:a,children:d}),e.jsx(Ke,{type:"text",name:a,id:a,value:v,placeholder:"0",onChange:o})]}),e.jsx(_e,{children:c})]}),e.jsxs(qe,{children:[e.jsx(He,{htmlFor:a,children:f}),e.jsx(Xe,{id:a,children:t}),e.jsx(Re,{children:p})]})]})})}),Ye=n.div`
  background: #fff;
  border: 1px solid #DFDFDF;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  @media (max-width: 1200px) {
    padding: 16px;
  }
  @media (max-width: 900px) {
    padding: 12px;
  }
  @media (max-width: 600px) {
    padding: 10px;
  }
`,Je=n.div`
  font-weight: 700;
  font-size: 28px;
  font-family: Cairo;
  margin-bottom: 16px;
  text-align: ${({isRtl:a})=>a?"right":"left"};
  @media (max-width: 1200px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`,Le=n.div`
  display: flex;
  align-items: center;
  flex-direction: ${({isRtl:a})=>a?"row-reverse":"row"};
  gap: 5px;
  @media (max-width: 1200px) {
    gap: 8px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`,Te=n.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  ${""}
  @media (max-width: 1200px) {
    gap: 3px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
  }
`,ea=n.div`
  display: flex;
  align-items: center;
  border: 1px solid #BFBFBF;
  border-radius: 10px;
  height: 50px;
  ${""}
  background: #fff;
  flex:4;
  @media (max-width: 1200px) {
    height: 44px;
    padding: 0 8px;
  }
  @media (max-width: 900px) {
    height: 40px;
    padding: 0 6px;
  }
`,aa=n.label`
  color: #222;
  font-size: 14px;
  font-family: Cairo;
  font-weight: 400;
  margin-right: 8px;
  display: inline-block;
  gap:10;

  @media (max-width: 1200px) {
    font-size: 13px;
    margin-right: 6px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
    margin-right: 4px;
  }
`,ta=n.input`
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: 700;
  font-family: Cairo;
  color: #222;
  text-align: right;
  padding: 0 10px ; outline: none;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
`,na=n.div`
  min-width: 100px;
  color: #015CAB;
  font-weight: 500;
  flex: 0.5;
  font-size: 18px;
  font-family: Cairo;
  @media (max-width: 1200px) {
    font-size: 16px;
    min-width: 80px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
    min-width: 60px;
  }
`,ra=n.label`
  min-width: 100px;
  color: #222;
  font-weight: 500;
  flex: 0.5;
  font-size: 18px;
  font-family: Cairo;
  @media (max-width: 1200px) {
    font-size: 16px;
    min-width: 80px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
    min-width: 60px;
  }
`,ia=n.div`
  min-width: 100px;
  color: #222;
  font-weight: 700;
  flex: 0.5;
  font-size: 18px;
  font-family: Cairo;
  @media (max-width: 1200px) {
    font-size: 16px;
    min-width: 80px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
    min-width: 60px;
  }
`,oa=n.div`
  min-width: 100px;
  color: #015CAB;
  font-weight: 500;
  flex: 0.5;
  font-size: 18px;
  font-family: Cairo;
  @media (max-width: 1200px) {
    font-size: 16px;
    min-width: 80px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
    min-width: 60px;
  }
`;n.p`
  color: #FF0000;
  font-size: 14px;
  font-family: Cairo;
  font-weight: 400;
  margin-top: 5px;
  text-align: ${({isRtl:a})=>a?"right":"left"};
`;const sa=({isRtl:a,value:t,label:d,title:c,unit:f,valueLabel:p,currency:o,handleMoneyChange:v,isGold:s=!1,name:b,inputValue:z})=>e.jsxs(Ye,{children:[e.jsx(Je,{isRtl:a,children:c}),e.jsx(Le,{isRtl:a,children:e.jsxs(Te,{children:[e.jsxs(ea,{children:[e.jsx(aa,{htmlFor:b,children:d}),e.jsx(ta,{name:b,id:b,type:"text",value:z,placeholder:"0",onChange:v})]}),s&&e.jsxs(e.Fragment,{children:[e.jsx(na,{children:f}),e.jsx(ra,{htmlFor:b,children:p}),e.jsx(ia,{children:t})]}),e.jsx(oa,{children:o})]})})]}),la=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,da=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  justify-content: ${({isRTL:a})=>a?"flex-start":"flex-end"};
  text-align: ${a=>a?"right":"left"};
  direction: ${a=>a?"rtl":"ltr"};
  cursor: pointer;
  user-select: none;
`,Y=n(Ce)`
  transition: transform 0.3s ease-in-out;
  display: inline;
  transform: ${({isOpen:a})=>a?"rotate(-90deg)":"rotate(0deg)"};
`,J=n(ze)`
  color: #e53935;
  font-size: 1.5rem;
`,ca=n.span`
  color: #015cab;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: ${a=>a?"right":"left"};
`,pa=n.div`
  display: flex;
  flex-direction: column;
  text-align: ${a=>a?"right":"left"};
  gap: 16px;
  ${""}
  overflow: hidden;
  opacity: ${({height:a})=>a?1:0};
  transition: height 0.3s ease-in-out;
`,ma=n.button`
  width: 100%;
  background: #015cab;
  color: #fff;
  font-size: 1.1rem;
  font-family: Cairo, sans-serif;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  margin-top: 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #014a8a;
  }
`,W=n.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  height: 38px;
  direction: ${({isRTL:a})=>a?"rtl":"ltr"};
  overflow: hidden;
  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`,xa=n(W)`
  display: flex;
  justify-content: space-between;
  direction: ${({isRTL:a})=>a?"rtl":"ltr"};
  padding: 0;
  overflow: visible;
  gap: 4px;
  flex-direction: row-reverse;
  border: none;
  background: transparent;
  box-shadow: none;
  width: 100%;
  margin-top: ${({margin:a})=>a||"0"};
`,ua=n.div`
  height: 100%;
  width: 57px;
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
        margin-right: ${({isRTL:a})=>a?"-1rem":"0"};
        margin-left: ${({isRTL:a})=>a?"0":"1.5rem"};
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
    left: 0;
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
`,ha=n.div`
  display: flex;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  height: 100%;
  width: 100%;

  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`,ga=n(ha)`
  display: ${({flex:a})=>a?"flex":"block"};
`,fa=n(O)`
  max-width: 100%;
`,G=n.div`
  flex: 1;
  max-width: 100%;
`,ba=({isRTL:a,t})=>{const{control:d,formState:{errors:c},setValue:f,getValues:p,trigger:o,reset:v}=T({mode:"onChange",defaultValues:{anonymousUserInfo:{name:"",email:"",mobileNumber:""},reminderDate:""}}),[s,b]=h.useState("eg"),[z,D]=h.useState(!1),[$,w]=h.useState(0),F=h.useRef(null),m=h.useRef(null),{isAuthenticated:Z}=ce();h.useEffect(()=>{if(F.current){const l=F.current.scrollHeight+50;F.current.style.height=z?`${l}px`:"0px",w(z?l:0)}},[z]);const E=async()=>{if(!await o())return;const g=p();if(Z){const y={reminderDate:g.reminderDate},P=await he(y);P.succeeded?(j.success(t("reminders.updateSuccess")),v()):j.error(P.message)}else{const y=await ge(g);y.succeeded?(j.success(t("reminders.updateSuccess")),v()):j.error(y.message)}};return e.jsxs(la,{isRTL:a,children:[e.jsxs(da,{isRTL:a,onClick:()=>D(!z),children:[!a&&e.jsx(J,{}),e.jsxs(ca,{isRTL:a,children:[a&&e.jsx(Y,{isOpen:z}),t("hasabat-elzakat.zakatReminder.headerText"),!a&&e.jsx(Y,{isOpen:z})]}),a&&e.jsx(J,{})]}),e.jsxs(pa,{isRTL:a,ref:F,height:$,children:[!Z&&e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsxs(G,{style:{width:"100%",maxWidth:"100%"},children:[e.jsxs(W,{isRTL:a,style:{width:"100%",maxWidth:"100%"},children:[e.jsx(V,{isRTL:a,htmlFor:"anonymousUserInfo.name",children:t("hasabat-elzakat.zakatReminder.name")}),e.jsx(M,{name:"anonymousUserInfo.name",control:d,id:"anonymousUserInfo.name",rules:{required:t("checkout.inputRequired")},render:({field:l})=>e.jsx(K,{...l,type:"text",onFocus:()=>f("anonymousUserInfo.name",l.value),onBlur:()=>{f("anonymousUserInfo.name",l.value),l.onBlur()},style:{width:"100%",maxWidth:"100%"}})})]}),c.anonymousUserInfo?.name&&e.jsx(B,{children:c.anonymousUserInfo?.name.message})]})}),e.jsx(O,{children:e.jsxs(G,{style:{width:"100%",maxWidth:"100%"},children:[e.jsxs(W,{isRTL:a,style:{width:"100%",maxWidth:"100%"},children:[e.jsx(V,{isRTL:a,htmlFor:"email",children:t("hasabat-elzakat.zakatReminder.email")}),e.jsx(M,{name:"anonymousUserInfo.email",control:d,id:"email",rules:{required:t("checkout.inputRequired"),pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:t("checkout.invalidEmail")}},render:({field:l})=>e.jsx(K,{...l,type:"email",isEmail:!0,onFocus:()=>f("anonymousUserInfo.email",l.value),onBlur:()=>{f("anonymousUserInfo.email",l.value)},style:{direction:"ltr",width:"100%",textAlign:"left",paddingLeft:"10px",paddingRight:"0"}})})]}),c.anonymousUserInfo?.email&&e.jsx(B,{children:c.anonymousUserInfo?.email.message})]})}),e.jsx(fa,{children:e.jsxs(G,{style:{width:"100%",maxWidth:"100%"},children:[e.jsxs(xa,{isRTL:a,children:[e.jsx(ua,{isRTL:a,children:e.jsx(ie,{country:s,value:"",onChange:(l,g)=>{b(g.countryCode)},enableSearch:!1,disableSearchIcon:!0,countryCodeEditable:!1})}),e.jsxs(ga,{flex:!0,children:[e.jsx(V,{isRTL:a,htmlFor:"mobileNumber",children:t("auth.phone")}),e.jsx(M,{name:"anonymousUserInfo.mobileNumber",control:d,id:"mobileNumber",rules:{required:t("checkout.inputRequired"),validate:l=>{const g=l.replace(/\D/g,"");if(!g)return t("checkout.inputRequired");try{const y=De(g,s?.toUpperCase());return!y||!y.isValid()?t("checkout.invalidPhoneNum"):!0}catch{return t("checkout.invalidPhoneNum")}}},render:({field:l})=>e.jsx(K,{...l,type:"tel",style:{direction:"ltr",textAlign:"left"}})})]})]}),c.anonymousUserInfo?.mobileNumber&&e.jsx(B,{children:c.anonymousUserInfo?.mobileNumber.message})]})})]}),e.jsx(O,{children:e.jsxs(G,{children:[e.jsxs(W,{isRTL:a,style:{justifyContent:"space-between"},children:[e.jsx(V,{isRTL:a,htmlFor:"reminderDate",children:t("hasabat-elzakat.zakatReminder.date")}),e.jsx(M,{name:"reminderDate",control:d,id:"reminderDate",rules:{required:t("checkout.inputRequired")},render:({field:{value:l,onChange:g}})=>{const y=()=>{m.current?.showPicker?.()};return e.jsxs(pe,{onClick:y,children:[e.jsx(me,{type:"text",readOnly:!0,value:l||"",isRTL:a}),e.jsx(xe,{isRTL:a}),e.jsx(ue,{type:"date",min:new Date(Date.now()+1440*60*1e3).toISOString().split("T")[0],onChange:P=>g(P.target.value),ref:m})]})}})]}),c.collectionDate&&e.jsx(B,{children:c.collectionDate.message})]})}),e.jsx(ma,{type:"button",onClick:E,children:t("hasabat-elzakat.zakatReminder.submitButton")})]})]})},wa=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`,q=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  margin-top: 20px;
`,H=n.span`
  color: #222;
  font-size: 18px;
  font-family: Cairo;
  font-weight: 700;
`,X=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,R=n.span`
  color: #222;
  font-size: 18px;
  font-family: Cairo;
  font-weight: 700;
`,Q=n.span`
  color: #222;
  font-size: 18px;
  font-family: Cairo;
`,ya=n.div`
  height: 1px;
  background: #DFDFDF;
  margin: 8px 0;
`,ka=n.div`
  height: 1px;
  background: #DFDFDF;
  margin: 16px 0;
`,ja=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,va=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`,Ia=n(Pe)`
  margin-right: ${a=>a.isRTL?"4px":"0"};
  margin-left: ${a=>a.isRTL?"0":"4px"};
`,za=({zakatDue:a,malZakatDue:t,goldZakatDue:d,methods:c,showError:f,isRTL:p,t:o,nisab:v,piceSum:s,setCampaignId:b,campaignId:z})=>{const D=ee(),[$,w]=h.useState({}),{addOrUpdateCartItem:F,cartItems:m}=ae(),{data:Z,isLoading:E}=fe({page:1}),l=Z?.items||[],g=l?.filter(x=>x.donationIntentions?.some(r=>r.nameEn.toLowerCase().includes("zakat")));h.useEffect(()=>{g.length>0&&(b(g[0]?.id||null),c.setValue("campaignId",g[0]?.id||null))},[g]);const y=oe.useMemo(()=>a>0&&s>=v,[a,s,v]);if(E)return e.jsx("div",{children:"Loading..."});const P=async()=>{if(a<=0){j.error(p?"يرجى إدخال قيمة للزكاة":"Please enter a zakat amount");return}if(f)return;const x=await D(te.initiate(c.watch("campaignId")));if(x.error){j.error(o("common.error"));return}const r=x.data,I=(m?.items||[]).find(U=>U?.campaignId===r?.id),N={id:I?.id,amount:Math.round(a),donationAmountTypeId:r.amountTypeId,numberOfShares:Math.round(a/r.basePrice),shareValue:r.basePrice,campaignId:r.id,isShareInSakk:!1,isInstallmentPayment:!1,installmentMonths:null,sakkOwnerInfo:null,onBehalfInfo:null,campaign:{id:r.id,titleAr:r.titleAr,titleEn:r.titleEn,imageUrl:r.imageUrl,keyWords:r.keywords,intentions:r.donationIntentions,basePrice:r.basePrice}};try{I?(F({donationId:I.id,campaignId:r.id,amount:(I.amount||0)+Math.round(a),donationAmountTypeId:r.amountTypeId,numberOfShares:Math.round((I.numberOfShares||0)+a/r.basePrice),shareValue:r.basePrice,isShareInSakk:!1,isInstallmentPayment:!1,installmentMonths:null,sakkOwnerInfo:null,onBehalfInfo:null}),j.info(p?`تم تعديل ${r.titleAr} في السلة`:`${r.titleEn} has been updated in cart!`)):(F(N),j.success(p?`تم إضافة ${r.titleAr} إلى السلة`:`${r.titleEn} added to cart!`))}catch(U){console.error("Failed to add zakat to cart:",U),j.error(o("common.error"))}};return e.jsxs(e.Fragment,{children:[e.jsxs(wa,{children:[e.jsxs(q,{children:[e.jsxs(H,{children:[o("hasabat-elzakat.zakat-al-mal"),":"]}),e.jsxs(X,{children:[e.jsx(R,{children:y?Math.round(t):0}),e.jsx(Q,{children:o("hasabat-elzakat.currency-short")})]})]}),e.jsxs(q,{children:[e.jsxs(H,{children:[o("hasabat-elzakat.Zakat-Gold"),":"]}),e.jsxs(X,{children:[e.jsx(R,{children:y?Math.round(d):0}),e.jsx(Q,{children:o("hasabat-elzakat.currency-short")})]})]}),e.jsxs(q,{children:[e.jsxs(H,{children:[o("hasabat-elzakat.total-zakat"),":"]}),e.jsxs(X,{children:[e.jsx(R,{children:Math.round(a)}),e.jsx(Q,{children:o("hasabat-elzakat.currency-short")})]})]}),e.jsx(ya,{}),e.jsx(ja,{children:e.jsxs(be,{children:[e.jsx(we,{isRTL:p,children:`${o("hasabat-elzakat.zakat-campgain")}`}),e.jsx(ye,{isRTL:p,padding:190,name:"campaignName",value:$.campaignName,onChange:x=>{const r=l?.find(I=>I.id===parseInt(x.target.value));b(r.id),c.setValue("campaignId",r.id||null),w(I=>({...I,campaignName:parseInt(x.target.value),donationIntention:r?.donationIntentions?.[0]?.id||""}))},children:g?.length>0?g?.map(x=>e.jsx("option",{value:x.id,children:p?`${x.titleAr}`:`${x.titleEn}`},x.id)):e.jsx("option",{value:"",disabled:!0,children:o("hasabat-elzakat.no-campaigns")})}),e.jsx(ke,{isRTL:p,style:{margin:"0 10px"},children:e.jsx(Fe,{})})]})})]}),f&&e.jsx(Qe,{children:o("hasabat-elzakat.error")}),e.jsxs(Se,{children:[e.jsxs(Ae,{disabled:f,type:"button",onClick:P,isRTL:p,children:[e.jsx("span",{children:o("campaigns.campaignCard.cart")}),e.jsx(Ze,{src:je,alt:"cart",isRTL:p})]}),e.jsxs($e,{disabled:f,type:"submit",isRTL:p,children:[e.jsx("span",{children:o("campaigns.campaignCard.donate")}),e.jsx(Ia,{size:p?20:25,isRTL:p})]})]}),e.jsx(ka,{}),e.jsx(va,{children:e.jsx(ba,{isRTL:p,t:o})})]})},Ca=31.1035,Pa=.982,Fa=a=>{if(!a||a<=0)throw new Error("Invalid XAU rate received.");return 1/a/Ca},Sa=(a,t)=>{if(!t||t<=0)throw new Error("Invalid EGP rate received.");const d=a*t,c=d*(21/24),f=d*(18/24);return{"24K":d,"21K":c,"18K":f}},Aa=a=>Object.fromEntries(Object.entries(a).map(([t,d])=>[t,d*Pa])),Za=async()=>{const t=(await ve.get("/api/services/metals/price",{params:{currencies:"XAU,EGP",base:"USD"}})).data.rates;if(!t.XAU||!t.EGP)throw new Error("Missing required rates (XAU or EGP) in API response.");const d=Fa(t.XAU),c=Sa(d,t.EGP);return Aa(c)},$a=()=>{const{data:a,error:t}=le({queryKey:["goldPrices"],queryFn:Za,...Ue("DYNAMIC")}),d=t?`Failed to fetch gold prices: ${t.message}`:null;return{prices:a??null,error:d}},Da=n.section`
  padding: 0 4rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,L=n.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0 1rem;
  text-align: ${({isRTL:a})=>a?"right":"left"};
  color: ${({dark:a})=>"var(--primary-color)"};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Ea=n.div`
  max-width: 98%;
  margin: 0 auto;
`,Na=n.div``,Ua=n.div`
  display: flex;

  background: #fff;
  overflow: hidden;
  @media (max-width:1200px) {
    flex-direction: column;
    border-radius: 0;
  }
`,Ma=n.div`
  flex: 1;
  position: sticky;
  top: 0;
  background: #f7fafd;
  padding: 50px 24px 0;
  gap: 16px;
    ${""}
  @media (max-width: 900px) {
    border-left: none;
    border-bottom: 1.5px solid #ececec;
    padding: 24px 12px;
  }
`,Va=n.div`
  flex: 1.5;
  padding: 32px 24px;

  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  @media (max-width: 900px) {
    padding: 24px 12px;
    height: auto;
  }
`,Ta=()=>{const{i18n:a,t}=Ve(),d=ee(),c=de(),{cartItems:f,addOrUpdateCartItem:p}=ae(),o=a.resolvedLanguage==="ar",v=a.resolvedLanguage==="ar",s=T(),[b,z]=h.useState(null),[D,$]=h.useState(!1),[w,F]=h.useState({gold18Price:null,gold21Price:null,gold24Price:null}),{prices:m,error:Z}=$a(),E=u=>{const i=u.target.value.replace(/[^\d.]/g,""),k=parseFloat(i);isNaN(k)?(z(0),s.setValue("zakat-al-mal",0)):(z(k),s.setValue("zakat-al-mal",k),s.clearErrors("zakat-al-mal"))},[l,g]=h.useState(3),y=u=>{const{name:i,value:k}=u.target,[C]=i.split("_"),A=Number(k)||0;F(S=>({...S,[C]:A})),s.setValue(i,A)},P=h.useMemo(()=>{const u=Number(m?.["24K"])||0,i=Number(m?.["21K"])||0,k=Number(m?.["18K"])||0,C=Number(w.gold18Price)||0,A=Number(w.gold21Price)||0,S=Number(w.gold24Price)||0,re=C*k+A*i+S*u;return Math.round(Number(re))},[w,m]),x=h.useMemo(()=>{const u=(+b||0)+(P||0);return s.setValue("assets-total",u),u},[b,P,s]),r=h.useMemo(()=>Math.round(Number(m?.["24K"])||0)*85,[m]),I=h.useMemo(()=>{const u=Number(m?.["24K"])||0,i=Number(m?.["21K"])||0,k=Number(w.gold18Price)||0,C=Number(w.gold21Price)||0,A=Number(w.gold24Price)||0,S=k*u*.025+C*i*.025+A*u*.025;return Math.round(Number(S))},[w,m]),N=h.useMemo(()=>(Number(b)||0)*.025,[b]),U=h.useMemo(()=>{const u=x>=r?N+I:0;return s.setValue("zakat-value",u),u},[x,r,N,I,s]),ne=async()=>{const u=await d(te.initiate(s.watch("campaignId")));if(u.error){j.error(t("common.error"));return}const i=u.data,k=Math.round(s.watch("zakat-value")||0);if(k<=0){j.error(v?"يرجى إدخال قيمة للزكاة":"Please enter a zakat amount");return}const C=(f?.items||[]).find(S=>S?.campaignId===i?.id),A={id:C?.id,amount:k,donationAmountTypeId:i.amountTypeId,numberOfShares:i.basePrice>0?Math.round(k/i.basePrice):1,shareValue:i.basePrice||1,campaignId:i.id,isShareInSakk:!1,isInstallmentPayment:!1,installmentMonths:1,sakkOwnerInfo:null,onBehalfInfo:null,campaign:{id:i.id,titleAr:i.titleAr,titleEn:i.titleEn,imageUrl:i.imageUrl,keyWords:i.keywords,intentions:i.donationIntentions,basePrice:i.basePrice}};try{C?(p({donationId:C.id,campaignId:i.id,amount:(C.amount||0)+Math.round(k),donationAmountTypeId:i.amountTypeId,numberOfShares:i.basePrice>0?Math.round((C.numberOfShares||0)+k/i.basePrice):(C.numberOfShares||0)+1,shareValue:i.basePrice||1,isShareInSakk:!1,isInstallmentPayment:!1,installmentMonths:1,sakkOwnerInfo:null,onBehalfInfo:null}),j.info(v?`تم تحديث ${i.titleAr} في السلة`:`${i.titleEn} has been updated in cart!`)):(p(A),j.success(v?`تم إضافة ${i.titleAr} إلى السلة`:`${i.titleEn} added to cart!`)),c({to:"/payment"})}catch(S){console.error("Failed to add zakat to cart:",S),j.error(t("common.error"))}};return h.useEffect(()=>{x>0&&r>0&&x<r?$(!0):$(!1)},[x,r]),e.jsxs(e.Fragment,{children:[Z&&e.jsxs("div",{children:["Error: ",Z]}),m?e.jsx(Da,{children:e.jsx(Ea,{children:e.jsx(Na,{isRtl:o,children:e.jsx(se,{...s,children:e.jsx("form",{onSubmit:s.handleSubmit(ne),children:e.jsxs(Ua,{children:[e.jsxs(Va,{children:[e.jsx(Me,{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(L,{isRTL:o,children:t("hasabat-elzakat.title")}),e.jsx(Ie,{isRTL:o,children:t("hasabat-elzakat.description")})]}),e.jsx(sa,{isRtl:o,handleMoneyChange:E,inputValue:b,name:"zakat-al-mal",label:t("hasabat-elzakat.zakat-al-mal-title"),title:t("hasabat-elzakat.zakat-al-mal"),currency:t("hasabat-elzakat.currency"),error:s.formState.errors["zakat-al-mal"]}),e.jsxs("div",{style:{background:"#fff",border:"1px solid #DFDFDF",borderRadius:10,padding:20},children:[e.jsx("div",{style:{fontWeight:700,fontSize:28,fontFamily:"Cairo",marginBottom:16,textAlign:o?"right":"left"},children:t("hasabat-elzakat.Zakat-Gold")}),e.jsx(_,{goldPrice:m["18K"].toFixed(2),name:`gold18Price_${m["18K"].toFixed(2)}_18`,calcGoldZakat:y,label:t("hasabat-elzakat.zakat-gold-18k-title"),unit:t("hasabat-elzakat.unit"),valueLabel:t("hasabat-elzakat.value-label"),currency:t("hasabat-elzakat.currency"),error:s.formState.errors.gold18Price,isRtl:o,inputValue:w.gold18Price}),e.jsx(_,{name:`gold21Price_${m["21K"].toFixed(2)}_21`,calcGoldZakat:y,goldPrice:m["21K"].toFixed(2),label:t("hasabat-elzakat.zakat-gold-21k-title"),unit:t("hasabat-elzakat.unit"),valueLabel:t("hasabat-elzakat.value-label"),currency:t("hasabat-elzakat.currency"),error:s.formState.errors.gold21Price,isRtl:o,inputValue:w.gold21Price}),e.jsx(_,{name:`gold24Price_${m["24K"].toFixed(2)}_24`,goldPrice:m["24K"].toFixed(2),calcGoldZakat:y,label:t("hasabat-elzakat.zakat-gold-24k-title"),unit:t("hasabat-elzakat.unit"),valueLabel:t("hasabat-elzakat.value-label"),currency:t("hasabat-elzakat.currency"),error:s.formState.errors.gold24Price,isRtl:o,inputValue:w.gold24Price})]})]})]}),e.jsx(Ma,{children:e.jsxs("div",{style:{position:"sticky",top:0,marginTop:"45px"},children:[e.jsx(L,{isRTL:o,children:t("hasabat-elzakat.zakat-value")}),e.jsx(za,{goldPriceSum:P,showError:D,moneyData:b,piceSum:x,zakatDue:U,malZakatDue:N,goldZakatDue:I,nisab:r,isRTL:o,setValue:s.setValue,t,setCampaignId:g,methods:s,goldData:w,prices:m})]})})]})})})})})}):e.jsxs(Ee,{children:[e.jsx(Ne,{}),e.jsx("p",{children:t("common.loading")})]})]})};export{Ta as default};
