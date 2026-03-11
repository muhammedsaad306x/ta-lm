import{j as e}from"./map-vendor-CkCCoZy4.js";import{r as h,ai as T,L as R,d as I,h as M,C as S,T as D,a8 as L,a7 as $,G as q,ak as W,y as r,aj as E,bd as F}from"./index-Bz-f-rfY.js";import{B as O}from"./Breadcrumbs-CzB9j62p.js";import{d as o}from"./ui-vendor-BVv7PGpf.js";import{u as B,r as Q,C as g}from"./form-vendor-8JSUuxVu.js";import{a as K,u as k,L as G}from"./tanstack-vendor-DVbpgvBY.js";import{u as N}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-DdfYexyz.js";import"./react-icons-vendor-D75jEhkE.js";const H=o.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 12px;
  border-bottom: 1px solid #e0e0e0;
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`,V=o.div`
  display: flex;
  font-weight: bold;
  padding: 8px;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 6px;

  @media (max-width: 768px) {
    display: none; /* Hide header on mobile */
  }
`,z=o.div`
  display: flex;
  padding: 8px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }
`,s=o.div`
  flex: 1;
  min-width: 120px;
  padding: 4px 8px;
  text-align: ${({isRTL:i})=>i?"right":"left"};
  @media (max-width: 768px) {
    flex: 100%;
    display: flex;
    justify-content: ${({isRTL:i})=>i?"flex-start":"flex-end"};
    gap: 8px;
    align-items: center;
    padding: 6px 0;
    ${h} {
      width: 100%;
    }
  }
`;o.span`
  border-radius: 8px;
  font-weight: bold;
  padding: 4px 8px;
  color: ${({status:i})=>i==="Case Research"?"#808080":i==="Accepted"?"#015CAB":i==="Rejected"?"#F00000":i==="Information Required"||i==="Initially Accepted"?"#ff9800":"#ccc"};
`;const P=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: ${({isRTL:i})=>i?"flex-end":"flex-start"};
    width: 100%;
  }
`;function te(){const{t:i,i18n:u}=N(),t=u.resolvedLanguage==="ar",m=K(),f=Array.from({length:28},(n,a)=>a+1),{data:y,isLoading:j,error:b}=k({queryKey:["campaignsReminders"],queryFn:T}),c=y?.items,{control:p,handleSubmit:C,reset:x}=B({defaultValues:{items:[]}}),w=n=>{F(n.items).then(a=>{a.succeeded?(r.success(i("reminders.updateSuccess")),m.invalidateQueries({queryKey:["campaignsReminders"]})):r.error(a.message)})},v=n=>{W(n).then(a=>{a.succeeded?(r.success(i("reminders.updateSuccess")),m.invalidateQueries({queryKey:["campaignsReminders"]})):r.error(a.message)})},A=n=>{E({campaignId:n.campaignId,dayOfMonth:n.dayOfMonth}).then(a=>{a.succeeded?(r.success(i("reminders.updateSuccess")),m.invalidateQueries({queryKey:["campaignsReminders"]})):r.error(a.message)})};return Q.useEffect(()=>{c&&x({items:c.map(n=>({campaignId:n.campaignId,dayOfMonth:Number(n.dayOfMonth)||""}))})},[c,x]),j?e.jsxs(R,{children:[e.jsx(I,{}),e.jsx("p",{children:i("common.loading")})]}):b?e.jsx("div",{children:i("error.loadingProjects")}):e.jsx(M,{isRTL:t,children:e.jsxs(S,{children:[e.jsx(O,{}),e.jsxs(H,{children:[e.jsx(P,{children:e.jsx(D,{isRTL:t,children:i("monthlyDonation.title")})}),e.jsxs(V,{children:[e.jsx(s,{style:{fontWeight:"normal"},isRTL:t,children:i("monthlyDonation.columns.campaignName")}),e.jsx(s,{style:{fontWeight:"normal"},isRTL:t,children:i("monthlyDonation.columns.recurrenceDay")}),e.jsx(s,{style:{textAlign:"center",fontWeight:"normal"},children:i("monthlyDonation.columns.cancelSubscription")})]}),e.jsx("form",{onSubmit:C(w),children:c.length>0?e.jsxs(e.Fragment,{children:[c.map((n,a)=>e.jsxs(z,{children:[e.jsx(s,{isRTL:t,children:e.jsx(G,{style:{color:n?.isActice?"#015cab":"#000",fontWeight:n?.isActice?"bold":"normal"},to:`/campaign-details/${(t?n?.campaignTitleAr||n?.campaignTitleEn||"campaign":n?.campaignTitleEn||n?.campaignTitleAr||"campaign").toString().trim().toLowerCase().replace(/[^\u0600-\u06FFa-z0-9]+/gi,"-").replace(/^-+|-+$/g,"")}/${n?.campaignId}`,children:t?n?.campaignTitleAr:n?.campaignTitleEn})}),e.jsx(s,{isRTL:t,children:e.jsxs(h,{children:[e.jsx(L,{isRTL:t,children:i("monthlyDonation.columns.day")}),e.jsx(g,{name:`items.${a}.campaignId`,control:p,defaultValue:n?.campaignId,render:({field:l})=>e.jsx("input",{type:"hidden",...l})}),e.jsx(g,{name:`items.${a}.dayOfMonth`,control:p,render:({field:l})=>e.jsx($,{isRTL:t,...l,onChange:d=>l.onChange(Number(d.target.value)),children:f.map(d=>e.jsx("option",{value:d,children:d},d))})})]})}),e.jsx(s,{style:{textAlign:"center"},children:e.jsx("button",{onClick:()=>n.isActice?v(n.campaignId):A(n),type:"button",style:{color:n.isActice?"#f00000":"var(--primary-color)",cursor:"pointer"},children:n.isActice?i("common.cancel"):i("reminders.activate")})})]},n?.campaignId??n?.id??a)),e.jsx(q,{type:"submit",style:{width:"100%",margin:"1rem 0"},children:i("reminders.saveChanges")})]}):e.jsx("p",{style:{textAlign:"center",padding:"1rem"},children:i("common.noItemsMatch")})})]})]})})}export{te as default};
