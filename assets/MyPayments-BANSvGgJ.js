const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/carousel-vendor-CG2PRk06.css"])))=>i.map(i=>d[i]);
import{j as e}from"./map-vendor-CkCCoZy4.js";import{R as g,r as te}from"./form-vendor-8JSUuxVu.js";import{u as ne,k as se}from"./tanstack-vendor-DVbpgvBY.js";import{p as ie,ba as oe,L as ae,d as re,h as le,C as ce,T as de,f as me,bb as L}from"./index-Dv1SXuG7.js";import{B as xe}from"./Breadcrumbs-CzB9j62p.js";import{T as he,a as ue,b as pe,c as d,d as fe}from"./NominatedCasesList.styles-DigdBPHp.js";import{u as ge}from"./useFormattedDate-AGtuprlp.js";import{z as je}from"./react-icons-vendor-D75jEhkE.js";import{_ as K}from"./media-vendor-b5BVGNQh.js";import{d as o}from"./ui-vendor-BVv7PGpf.js";import{u as Z}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";let M=null,z=null;const ye=async()=>(M||(M=K(()=>import("./media-vendor-b5BVGNQh.js").then(a=>a.b),__vite__mapDeps([0]))),(await M).default),ve=async()=>(z||(z=K(()=>import("./media-vendor-b5BVGNQh.js").then(a=>a.j),__vite__mapDeps([0]))),(await z).jsPDF);function be({targetRef:t,fileName:a="document",orientation:s="p",format:j="a4",margin:i=10,unit:y="mm",scale:h=2,onBeforeCapture:v,onAfterCapture:b,children:$}){const[c,P]=g.useState(!1),p=g.useCallback(async()=>{if(!(!t||!t.current))try{P(!0),v&&await v();const[I,{jsPDF:k}]=await Promise.all([ye(),ve()]),S=t.current,n=await I(S,{scale:h,useCORS:!0,backgroundColor:"#ffffff",windowWidth:S.scrollWidth}),m=n.toDataURL("image/png"),C=k,u=new C({orientation:s,unit:y,format:j}),w=u.internal.pageSize.getWidth(),A=u.internal.pageSize.getHeight(),H=w-i*2,N=A-i*2,f=H,x=n.height*f/n.width;if(x<=N)u.addImage(m,"PNG",i,i,f,x,void 0,"FAST");else{let r=i,D=x;const l=document.createElement("canvas"),T=l.getContext("2d"),U=f/n.width,X=Math.floor(N/U);let W=0;for(;D>0;){const E=Math.min(X,n.height-W);l.width=n.width,l.height=E,T.clearRect(0,0,l.width,l.height),T.drawImage(n,0,W,n.width,E,0,0,n.width,E);const ee=l.toDataURL("image/png");r!==i&&(u.addPage(),r=i);const q=E*U;u.addImage(ee,"PNG",i,r,f,q,void 0,"FAST"),W+=E,D-=q,D>0&&u.addPage()}}u.save(`${a}.pdf`),b&&b()}catch(I){console.error("PDF download failed:",I)}finally{P(!1)}},[a,j,i,b,v,s,h,t,y]);return typeof $=="function"?$({downloading:c,download:p}):e.jsx("button",{onClick:p,disabled:c,children:c?"Preparing PDF…":"Download PDF"})}const $e="/ta-lm/assets/invoice_logo-Dx18k7sm.svg",we="/ta-lm/assets/invoice_logo_footer-B_zA7ekf.svg",V="#0a67a3",O="#cfd8e3",R="#0f4c77",Pe="#0b59a1",Ie=o.div`
  width: 900px;
  background: #ffffff;
  color: #000;
  font-family: Cairo, Arial, sans-serif;
  direction: ${t=>t.$rtl?"rtl":"ltr"};
  border: 2px solid ${O};
  border-radius: 14px;
  padding: 18px 18px 12px;
`,Ce=o.div`
  background: ${R};
  color: #fff;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 16px;
`,De=o.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex: 0 0 auto;
  img { width: 180px; }
`,Ae=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  direction: ${t=>t.$rtl?"rtl":"ltr"};
  gap: 6px;
  flex: 1 1 auto;
  text-align: ${t=>t.$rtl?"right":"left"};
`,Y=o.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: ${t=>t.$rtl?"flex-end":"flex-start"};
`;o.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  justify-content: ${t=>t.$rtl?"flex-end":"flex-start"};
  text-align: ${t=>t.$rtl?"right":"left"};
`;const F=o.span`
  font-size: 13px;
  color: #e5f0f9;
`,_=o.strong`
  font-size: 15px;
  color: #ffffff;
`,Ee=o.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 24px;
  justify-content: ${t=>t.$rtl?"end":"start"};
`,B=o.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  white-space: nowrap;
`,Fe=o.div`
  margin-top: 14px;
  border: 1px solid ${O};
  border-radius: 12px;
  overflow: hidden;
`,_e=o.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background: ${Pe};
  color: #fff;
  padding: 12px 14px;
  font-weight: 700;
`,Q=o.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 16px 14px;
  align-items: center;
  background: #fff;
  border-top: 1px solid #eef2f7;
`,ke=o.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  background: ${R};
  color: #fff;
  padding: 15px 30px;
  font-weight: 800;
`,Se=o.div`
  margin-top: 16px;
  border-top: 3px solid ${O};
  padding-top: 10px;
  display: flex;
  flex-direction: ${t=>t.$rtl?"row":"row-reverse"};
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: #444;
  font-size: 14px;
`,He=o.div`
  order: ${t=>t.$rtl?2:1};
  display: flex;
  align-items: center;
  gap: 8px;
`,Ne=o.div`
  order: ${t=>t.$rtl?1:2};
  display: flex;
  align-items: flex-start;
`,Te=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: ${t=>t.$rtl?"right":"left"};
`,We=o.div`
  font-weight: 800;
  color: ${R};
  margin-bottom: 2px;
`,Me=o.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  justify-content: ${t=>t.$rtl?"flex-end":"flex-start"};
`,G=o.span`
  color: #f0b778;
`,ze=o.strong`
  color: ${V};
`,Be=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,J=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;function Ge({item:t,invoice:a,isRTL:s,formatDate:j}){const{t:i}=Z(),{user:y}=ie(),h=a?.userFullname||y?.fullName||y?.name||"-",v=a?.userEmail||y?.email||"-",b=a?.userPhone||"-",$=s?"جنيه":"EGP";return e.jsxs(Ie,{$rtl:s,children:[e.jsxs(Ce,{children:[e.jsx(De,{children:e.jsx("img",{src:$e,alt:"Life Makers"})}),e.jsxs(Ae,{$rtl:s,children:[e.jsxs(Y,{$rtl:s,children:[e.jsx(F,{children:i("invoice.invoiceTo")}),e.jsx(_,{children:h})]}),e.jsxs(Y,{$rtl:s,children:[e.jsx(F,{children:i("invoice.email")}),e.jsx(_,{children:v})]}),e.jsxs(Ee,{$rtl:s,children:[e.jsxs(B,{children:[e.jsx(F,{children:i("invoice.mobile")}),e.jsx(_,{children:b})]}),e.jsxs(B,{children:[e.jsx(F,{children:i("invoice.invoiceDate")}),e.jsx(_,{children:a?.invoiceDate?j?.(a.invoiceDate):j?.(t?.completedOn)})]}),e.jsxs(B,{children:[e.jsx(F,{children:i("invoice.invoiceNumber")}),e.jsx(_,{children:t?.orderId})]})]})]})]}),e.jsxs(Fe,{children:[e.jsxs(_e,{children:[e.jsx("div",{children:i("invoice.transaction")}),e.jsx("div",{children:i("invoice.donationItem")}),e.jsx("div",{children:i("invoice.intention")}),e.jsx("div",{children:i("invoice.amount")}),e.jsx("div",{children:i("invoice.currency")}),e.jsx("div",{children:i("invoice.method")})]}),Array.isArray(a?.items)&&a.items.length>0?a.items.map((c,P)=>e.jsxs(Q,{children:[e.jsx("div",{children:c?.transactionNumber}),e.jsx("div",{style:{color:V,fontWeight:700},children:c?.campaignTitle}),e.jsx("div",{children:s?c?.donationIntention?.nameAr:c?.donationIntention?.nameEn}),e.jsx("div",{style:{fontWeight:800},children:c?.amount}),e.jsx("div",{children:c?.currency||$}),e.jsx("div",{children:s?c?.donationMethod?.nameAr:c?.donationMethod?.nameEn})]},P)):e.jsxs(Q,{children:[e.jsx("div",{children:t?.transactionNumber}),e.jsx("div",{style:{color:V,fontWeight:700},children:s?t?.campaings?.[0]?.nameAr:t?.campaings?.[0]?.nameEn}),e.jsx("div",{children:i("invoice.ongoingCharity")}),e.jsx("div",{style:{fontWeight:800},children:t?.amount}),e.jsx("div",{children:t?.currency||$}),e.jsx("div",{children:t?.method??"-"})]}),e.jsxs(ke,{children:[e.jsx("div",{children:i("invoice.total")}),e.jsxs("div",{children:[a?.totalAmount??t?.amount," ",Array.isArray(a?.items)&&a.items[0]?.currency?a.items[0]?.currency:t?.currency||$]})]})]}),e.jsxs(Se,{$rtl:s,children:[e.jsx(He,{$rtl:s,children:e.jsx("img",{src:we,alt:"Life Makers",style:{width:200}})}),e.jsx(Ne,{$rtl:s,children:e.jsxs(Te,{$rtl:s,children:[e.jsx(We,{children:i("invoice.contactUs")}),e.jsxs(Me,{$rtl:s,children:[e.jsx(G,{children:i("invoice.phone")}),e.jsx(ze,{children:"16563"})]}),e.jsxs(Be,{children:[e.jsxs(J,{children:[e.jsx(G,{children:i("invoice.email")}),e.jsx("span",{children:"website@lifemakers.org"})]}),e.jsxs(J,{children:[e.jsx(G,{children:i("invoice.address")}),e.jsx("span",{children:s?"٣ شارع سعد ظلام، المشتل سابقًا، كورنيش النيل، أثر النبي، مصر القديمة، القاهرة":"3 Saed Zalam Street, Athar Al Nabi, Corniche of the Nile, Old Cairo, Cairo Governorate"})]})]})]})})]})]})}const Ve=72,Oe=400;function nt(){const{t,i18n:a}=Z(),s=a.resolvedLanguage==="ar",j=ge(),[i,y]=g.useState(10),[h,v]=g.useState(null);function b({item:n,isNew:m}){const C=g.useRef(null),[u,w]=g.useState(!1),[A,H]=g.useState(null),{data:N=[]}=me("DonationMethod"),f=N?.find(x=>x.id===n?.methodId);return e.jsxs(fe,{isNew:m,children:[e.jsx(d,{isRTL:s,"data-label":t("nominateCase.columns.requestDate"),children:j(n?.completedOn)}),e.jsxs(d,{isRTL:s,"data-label":t("nominateCase.columns.name"),children:[f?s?f.nameAr:f.nameEn:"",f?.id===2&&e.jsx(e.Fragment,{children:e.jsxs("span",{style:{color:"red"},children:[e.jsx("br",{}),"(",t("myPayments.collection"),")"]})})]}),e.jsx(d,{style:{fontWeight:"bold"},isRTL:s,"data-label":t("nominateCase.columns.phone"),children:n?.amount}),e.jsx(d,{"data-label":t("nominateCase.columns.phone"),children:n?.currency}),e.jsx(d,{"data-label":t("nominateCase.columns.phone"),children:n?.transactionNumber}),e.jsxs(d,{style:{textAlign:"center"},"data-label":t("nominateCase.columns.governorate"),children:[e.jsx(be,{targetRef:C,fileName:`${s?"فاتورة":"invoice"}-${n?.transactionNumber||n?.orderId}`,onBeforeCapture:async()=>{if(!A){w(!0);const x=await L(n?.orderId),r=x?.data??x;H({orderId:n?.orderId,userFullname:r?.userFullname,userEmail:r?.userEmail,userPhone:r?.userPhone,invoiceDate:r?.invoiceDate,invoiceNumber:r?.invoiceNumber,items:r?.items,totalAmount:r?.totalAmount,...r}),w(!1)}},children:({downloading:x,download:r})=>e.jsxs("button",{onClick:async()=>{if(A)r(),w(!1);else{w(!0);try{const D=await L(n?.orderId),l=D?.data??D,T={orderId:n?.orderId,userFullname:l?.userFullname,userEmail:l?.userEmail,userPhone:l?.userPhone,invoiceDate:l?.invoiceDate,invoiceNumber:l?.invoiceNumber,items:l?.items,totalAmount:l?.totalAmount,...l};H(T),setTimeout(()=>r(),0)}finally{w(!1)}}},disabled:x||u,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",background:"transparent",border:0,color:"var(--primary-light)",cursor:"pointer",fontWeight:"bold",width:"100%"},children:[t(x||u?"common.loading":"common.download")," ",e.jsx(je,{})]})}),e.jsx("div",{style:{position:"absolute",left:-99999,top:0},children:e.jsx("div",{ref:C,children:e.jsx(Ge,{item:n,invoice:A,isRTL:s,formatDate:j})})})]}),e.jsx(d,{style:{color:"var(--primary-light)",fontWeight:"bold",whiteSpace:"nowrap"},"data-label":t("nominateCase.columns.status"),children:s?n?.campaings[0]?.nameAr:n?.campaings[0]?.nameEn})]})}const{data:$,isLoading:c,error:P}=ne({queryKey:["myPayments"],queryFn:oe,staleTime:300*1e3,cacheTime:1800*1e3}),p=$?.items||[],I=te.useRef(null),k=se({count:p.length,getScrollElement:()=>I.current,estimateSize:()=>Ve,overscan:5}),S=k.getVirtualItems();return g.useEffect(()=>{y(10),v(null)},[p?.length]),g.useEffect(()=>{if(!h)return;const n=setTimeout(()=>v(null),600);return()=>clearTimeout(n)},[h]),c?e.jsxs(ae,{children:[e.jsx(re,{}),e.jsx("p",{children:t("common.loading")})]}):P?e.jsx("div",{children:t("error.loadingProjects")}):e.jsx(le,{isRTL:s,children:e.jsxs(ce,{children:[e.jsx(xe,{}),e.jsxs(he,{children:[e.jsx(ue,{children:e.jsx(de,{isRTL:s,children:t("myPayments.title")})}),e.jsxs(pe,{children:[e.jsx(d,{children:t("myPayments.columns.date")}),e.jsx(d,{children:t("myPayments.columns.paymentMethod")}),e.jsx(d,{children:t("myPayments.columns.amount")}),e.jsx(d,{children:t("myPayments.columns.currency")}),e.jsx(d,{children:t("myPayments.columns.transactionNumber")}),e.jsx(d,{children:t("myPayments.columns.invoice")}),e.jsx(d,{children:t("myPayments.columns.campaignOrProject")})]}),p?.length>0?p.length>20?e.jsx("div",{ref:I,style:{overflow:"auto",maxHeight:Oe},children:e.jsx("div",{style:{height:`${k.getTotalSize()}px`,width:"100%",position:"relative"},children:S.map(n=>{const m=p[n.index];return e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${n.start}px)`},children:e.jsx(b,{item:m,isNew:!1})},m?.orderId??n.key)})})}):e.jsx(e.Fragment,{children:p.map((n,m)=>{const C=h&&m>=h[0]&&m<h[1];return e.jsx(b,{item:n,isNew:!!C},`${n?.orderId||m}-${m}`)})}):e.jsx("p",{style:{textAlign:"center",padding:"1rem"},children:t("common.noItemsMatch")})]})]})})}export{nt as default};
