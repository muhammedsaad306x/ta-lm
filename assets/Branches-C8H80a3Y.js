import{j as n,M as Te,T as Le,b as ge,P as fe,u as J,L as pe,i as Ae,c as Ie}from"./map-vendor-CkCCoZy4.js";import{r as a}from"./form-vendor-8JSUuxVu.js";import{u as Re,a as Z}from"./vendor-8UwSOQY7.js";import{q as ze,I as Me,r as Be,s as Ge}from"./react-icons-vendor-D75jEhkE.js";import{f as $e,h as _,C as K,T as q,i as Y,D as H}from"./index-CQputUX_.js";import{B as Q}from"./Breadcrumbs-CzB9j62p.js";import{d as h}from"./ui-vendor-BVv7PGpf.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-BKWaKWrj.js";import"./tanstack-vendor-DVbpgvBY.js";const Ue=h.div`
  position: relative;
  min-height: 700px;
  text-align: ${({isRtl:t})=>t?"right":"left"};
`,Fe=h.div`
  height: 700px;
  background: #eee;
  overflow: hidden;
`,Pe=h.div`
  position: absolute;
  top: 1rem;
  left: 4rem;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 30%;

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    right: 1rem;
    width: auto;
  }
`,We=h.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  position: relative;
`,Ze=h.input`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--primary-color, #1a237e);
  }
`,_e=h.div`
  position: absolute;
  ${({isRTL:t})=>t?"left: 1rem;":"right: 1rem;"}
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ke=h.button`
  position: absolute;
  ${({isRTL:t})=>t?"left: 3rem;":"right: 3rem;"}
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`,qe=h.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`,Ye=h.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 340px;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.13);
  padding: 1.5rem 1rem;
  direction: rtl;
  z-index: 1000;
  max-height: 550px;
  min-height: 550px;

  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding-top: .5rem;
    max-height: 70dvh;
    min-height: auto;
    border-radius: 1rem 1rem 0 0;
    transform: translateY(
      ${({isMobileExpanded:t})=>t?"0":"calc(100% - 60px)"}
    );
    transition: transform 0.3s ease;
    z-index: 2010;
    cursor: pointer;

    &:hover {
      transform: translateY(
        ${({isMobileExpanded:t})=>t?"0":"calc(100% - 70px)"}
      );
    }
  }
`,He=h.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color, #1a237e);

    width: 100%;
    padding: 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    position: relative;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0.2rem;
      width: 40px;

      height: 4px;
      background: #ccc;
      border-radius: 2px;
    }
    &:hover {
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
`;h.h1`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--primary-color, #1a237e);
  margin-bottom: 1.5rem;
`;const Qe=h.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  align-items: center;
`,ue=h.button`
  background: ${({active:t,color:s="var(--primary-color, #1a237e)"})=>t?s:"#f3f3f3"};
  color: ${({active:t})=>t?"#fff":"#222"};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  outline: none;
`,Ve=h.div`
  padding: 1rem 0.5rem;
  overflow-y: auto;
  height: 100%;

  @media (max-width: 768px) {
    max-height: calc(70dvh - 120px);
    overflow-y: auto;
  }
`,Je=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 400px;

  @media (max-width: 768px) {
    max-height: none;
  }
`,Xe=h.li`
  margin-bottom: 0.5rem;
  direction: ${({isRtl:t})=>t?"rtl":"ltr"};
`,De=h.button`
  width: 100%;
  background: none;
  border: none;
  color: black;
  font-size: 1.05rem;
  font-weight: 600;
  text-align: right;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${""}
  border-radius: 0.5rem;
  transition: background 0.15s;
  &[aria-expanded="true"] {
    background: #f3f3f3;
  }
`,Oe=h.ul`
  list-style: none;
  margin: 0.5rem 0 0 0;
  ${""}
`,en=h.li`
  font-size: 0.97rem;
  ${""}
  margin-bottom: 0.3rem;
  cursor: pointer;
  transition: color 0.15s;
  text-align: right;
  padding-inline: 0.5rem;
`;let nn=pe.icon({iconUrl:Ie,shadowUrl:Ae});pe.Marker.prototype.options.icon=nn;const rn=(t,s)=>{const r=[],m=[],v={};s&&s.forEach(o=>{v[o.id]={nameAr:o.nameAr,nameEn:o.nameEn}});const y=s||[];return y.forEach(o=>{r.push({governanceId:o.id,governanceNameAr:o.nameAr,governanceNameEn:o.nameEn,addresses:[]})}),y.forEach(o=>{m.push({governanceId:o.id,governanceNameAr:o.nameAr,governanceNameEn:o.nameEn,addresses:[]})}),t.forEach(o=>{const x={id:o.id,name:o?.nameAr,address:o?.address,nameEn:o?.nameEn,addressEn:o?.addressEn,latitude:parseFloat(o?.latitude),longitude:parseFloat(o?.longitude),mobileNumber:o?.mobileNumber,locationUrl:o?.locationUrl,imageUrl:o?.imageUrl,governanceId:o?.governanceId,governanceNameAr:v[o?.governanceId]?.nameAr||`Governance ${o.governanceId}`,governanceNameEn:v[o.governanceId]?.nameEn||`Governance ${o.governanceId}`};if(o.branchTypeId===1){const g=r.find(k=>k.governanceId===o.governanceId);g&&g.addresses.push(x)}else if(o.branchTypeId===2){const g=m.find(k=>k.governanceId===o.governanceId);g&&g.addresses.push(x)}}),{offices:r,associations:m}};function V({bounds:t}){const s=J();return a.useEffect(()=>{t&&t.length>0&&s.fitBounds(t,{padding:[60,60]})},[t,s]),null}function G({center:t,zoom:s}){const r=J();return a.useEffect(()=>{t&&s&&r.flyTo(t,s,{duration:1.2})},[t,s,r]),null}function sn({disabled:t}){const s=J();return a.useEffect(()=>{t?(s.dragging.disable(),s.touchZoom.disable(),s.doubleClickZoom.disable(),s.scrollWheelZoom.disable(),s.boxZoom.disable(),s.keyboard.disable(),s.zoomControl&&s.zoomControl.remove()):(s.dragging.enable(),s.touchZoom.enable(),s.doubleClickZoom.enable(),s.scrollWheelZoom.enable(),s.boxZoom.enable(),s.keyboard.enable())},[t,s]),null}function tn({position:t,popupContent:s,markerKey:r,openPopupKey:m}){const v=a.useRef(null);return a.useEffect(()=>{r===m&&v.current&&setTimeout(()=>{v.current?.openPopup()},800)},[r,m]),n.jsx(ge,{ref:v,position:t,children:n.jsx(fe,{children:s})})}const on=({t})=>n.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(255,255,255,0.7)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",color:"#1a237e",fontWeight:"bold"},children:t("common.loading")}),xn=()=>{const{i18n:t,t:s}=Re(),r=t.resolvedLanguage==="ar",[m,v]=a.useState("offices"),[y,o]=a.useState(null),[x,g]=a.useState("governances"),[k,w]=a.useState(null),[xe,L]=a.useState(null),[A,X]=a.useState({center:[27.8025,29.8206],zoom:7}),[D,ve]=a.useState([]),[S,O]=a.useState([]),ye=a.useRef({}),[be,ee]=a.useState(!1),[d,ne]=a.useState(""),[u,re]=a.useState(!1),[f,I]=a.useState(null),[j,Ee]=a.useState({offices:[],associations:[]}),[$,se]=a.useState(!0),[R,U]=a.useState(null),[N,z]=a.useState(!1),M=a.useRef(null),[ke,je]=a.useState(null),{data:F=[],isLoading:P}=$e("Governance");a.useEffect(()=>{const e=async()=>{try{if(se(!0),U(null),!["offices","associations"].includes(m))return;const i=m==="offices"?1:2,l=await Z.get("/api/content/branches",{params:{typeId:i}});if(l.data.succeeded&&l.data.data){const c=rn(l.data.data,F);Ee(b=>({...b,[m]:c[m]}))}else U("Failed to fetch branches data")}catch(i){console.error("Error fetching branches data:",i),U("Error loading branches data. Please try again later.")}finally{se(!1)}};F.length>0&&e()},[F,m]),a.useEffect(()=>{if($||R||P||!j[m]||j[m].length===0)return;let e=!0;return(async()=>{ee(!0);const c=j[m].map(p=>r?p.governanceNameAr:p.governanceNameEn),b=await Promise.all(c.map(async p=>{try{const he=(await Z.get(`https://photon.komoot.io/api/?q=${encodeURIComponent(p+" Egypt")}`)).data.features[0];return{governanceName:p,lat:he?.geometry?.coordinates[1]??null,lng:he?.geometry?.coordinates[0]??null}}catch(me){return console.error(`Error geocoding governance ${p}:`,me),{governanceName:p,lat:null,lng:null}}}));if(!e)return;const E=b.filter(p=>p.lat&&p.lng);ve(E),O([]),ye.current={},ee(!1),g("governances"),w(null),L(null),E.length>0&&X({center:[E[0].lat,E[0].lng],zoom:10})})(),()=>{e=!1}},[m,j,$,R,P,r]);const te=e=>{v(e),o(null),g("governances"),w(null),L(null)},Ce=async e=>{if(e.addresses.length===0)return;const i=r?e.governanceNameAr:e.governanceNameEn;o(y===i?null:i),g("governanceAddresses"),w(i),L(null);const l=e.addresses.map(c=>({governanceName:i,address:r?c?.address:c.addressEn||c.address,lat:c?.latitude,lng:c?.longitude,id:c?.id,name:c?.name,mobileNumber:c?.mobileNumber,locationUrl:c?.locationUrl}));O(c=>[...c,...l])},we=async(e,i)=>{g("address"),w(e),L(i),z(!1);const l=S.find(c=>c.governanceName===e&&c.address===i);if(l&&l.lat&&l.lng){X({center:[l.lat,l.lng],zoom:16});const c=`${e}${i}`;je(c)}},Se=e=>{window.innerWidth<=768&&(N?(e.target===M.current||e.target.closest(".mobile-handle"))&&z(!1):z(!0))};a.useEffect(()=>{const e=i=>{window.innerWidth<=768&&N&&M.current&&(M.current.contains(i.target)||z(!1))};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[N]);const oe=D.map(e=>[e.lat,e.lng]),ae=S.filter(e=>e.governanceName===k).map(e=>[e.lat,e.lng]);let T=[];if(x==="governances")T=D.map(e=>({key:e.governanceName,lat:e.lat,lng:e.lng,label:e.governanceName}));else if(x==="governanceAddresses")T=S.filter(e=>e.governanceName===k).map(e=>({key:e.governanceName+e.address,lat:e.lat,lng:e.lng,label:e.address,locationUrl:e.locationUrl}));else if(x==="address"){const e=S.find(i=>i.governanceName===k&&i.address===xe);e&&(T=[{key:e.governanceName+e.address,lat:e.lat,lng:e.lng,label:e.address,locationUrl:e.locationUrl}])}const ie=S.filter(e=>e.governanceName===k),le=x==="governanceAddresses"&&ie.length===1,W=le?ie[0]:null,B=u&&d?j[m].map(e=>{if((r?e.governanceNameAr:e.governanceNameEn).toLowerCase().includes(d.toLowerCase()))return{...e,addresses:e.addresses};const c=e.addresses.filter(b=>(r?b.address:b.addressEn||b.address).toLowerCase().includes(d.toLowerCase()));return c.length>0?{...e,addresses:c}:null}).filter(Boolean):j[m],C=u&&d?T.filter(e=>e.label.toLowerCase().includes(d.toLowerCase())):T,ce=a.useCallback(async()=>{if(re(!0),I(null),!j[m].some(i=>{const c=(r?i.governanceNameAr:i.governanceNameEn).toLowerCase().includes(d.toLowerCase()),b=i.addresses.some(E=>(r?E.address:E.addressEn||E.address).toLowerCase().includes(d.toLowerCase()));return c||b})&&d)try{const l=(await Z.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(d)}&countrycodes=eg&limit=1`)).data[0];l&&l.display_name&&l.display_name.includes("Egypt")?I({lat:parseFloat(l.lat),lng:parseFloat(l.lon),label:l.display_name}):I(null)}catch{}},[d,m,j,r]),Ne=e=>{e.key==="Enter"&&ce()},de=()=>{ne(""),re(!1),I(null)};return a.useEffect(()=>{if(u&&d){const e=B.map(i=>r?i.governanceNameAr:i.governanceNameEn);e.length>0&&!e.includes(y)&&(o(e[0]),w(e[0]),g("governanceAddresses"))}},[u,d,B,y,r]),a.useEffect(()=>{de()},[m]),$||P?n.jsxs(n.Fragment,{children:[n.jsxs(_,{isRTL:r,children:[n.jsx(Q,{}),n.jsxs(K,{isRTL:r,children:[n.jsx(q,{isRTL:r,children:s("branches.title")}),n.jsx(Y,{isRTL:r,children:s("branches.geographicalSpread")}),n.jsx(H,{isRTL:r,children:s("branches.description")})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px",fontSize:"1.2rem",color:"#1a237e"},children:s("common.loading")})]}):R?n.jsxs(n.Fragment,{children:[n.jsxs(_,{isRTL:r,children:[n.jsx(Q,{}),n.jsxs(K,{isRTL:r,children:[n.jsx(q,{isRTL:r,children:s("branches.title")}),n.jsx(Y,{isRTL:r,children:s("branches.geographicalSpread")}),n.jsx(H,{isRTL:r,children:s("branches.description")})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px",fontSize:"1.2rem",color:"#d32f2f",textAlign:"center",padding:"0 2rem"},children:R})]}):n.jsxs(n.Fragment,{children:[n.jsxs(_,{isRTL:r,children:[n.jsx(Q,{}),n.jsxs(K,{isRTL:r,children:[n.jsx(q,{isRTL:r,children:s("branches.title")}),n.jsx(Y,{isRTL:r,children:s("branches.geographicalSpread")}),n.jsx(H,{isRTL:r,children:s("branches.description")})]})]}),n.jsxs(Ue,{children:[n.jsxs(Fe,{style:{position:"relative"},children:[be&&n.jsx(on,{t:s}),n.jsx(Pe,{children:n.jsxs(We,{children:[n.jsx(Ze,{type:"text",value:d,onChange:e=>ne(e.target.value),onKeyDown:Ne,placeholder:r?s("search.placeholder")||"البحث في المحافظات والعناوين...":s("search.placeholder")||"Search in governorates and addresses..."}),n.jsx(_e,{onClick:ce,style:{cursor:"pointer"},isRTL:r,children:n.jsx(ze,{size:20})}),d&&n.jsx(Ke,{onClick:de,isRTL:r,children:n.jsx(Me,{size:16})})]})}),n.jsxs(Te,{center:A.center,zoom:A.zoom,style:{height:"700px",width:"100%",borderRadius:"1rem"},dragging:!1,touchZoom:!1,doubleClickZoom:!1,scrollWheelZoom:!1,boxZoom:!1,keyboard:!1,zoomControl:!1,children:[n.jsx(sn,{disabled:!0}),n.jsx(Le,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),x==="governances"&&oe.length>0&&!d&&n.jsx(V,{bounds:oe}),x==="governanceAddresses"&&ae.length>1&&!d&&n.jsx(V,{bounds:ae}),le&&W&&!d&&n.jsx(G,{center:[W.lat,W.lng],zoom:12}),x==="address"&&!d&&n.jsx(G,{center:A.center,zoom:A.zoom}),u&&d&&f&&n.jsx(G,{center:[f.lat,f.lng],zoom:16}),u&&d&&f&&n.jsx(ge,{position:[f.lat,f.lng],children:n.jsx(fe,{children:n.jsx("a",{href:f.locationUrl,target:"_blank",children:f.label})})}),u&&d&&!f&&C.length===1&&n.jsx(G,{center:[C[0].lat,C[0].lng],zoom:14}),u&&d&&!f&&C.length>1&&n.jsx(V,{bounds:C.map(e=>[e.lat,e.lng])}),(!u||!d||!f)&&C.map(e=>n.jsx(tn,{position:[e.lat,e.lng],markerKey:e.key,openPopupKey:ke,popupContent:n.jsx("a",{href:e.locationUrl,target:"_blank",children:e.label})},e.key))]})]}),n.jsxs(Ye,{ref:M,isMobileExpanded:N,onClick:Se,children:[n.jsx(He,{className:"mobile-handle",children:s(N?"branches.hideBranches":"branches.showBranches")}),n.jsxs(Qe,{children:[n.jsx(ue,{active:m==="offices",onClick:()=>te("offices"),children:s("branches.offices")}),n.jsx(ue,{active:m==="associations",color:"#FBAE42",onClick:()=>te("associations"),children:s("branches.associations")})]}),n.jsx(Ve,{children:n.jsx(Je,{children:B.length>0?B.map((e,i)=>n.jsxs(Xe,{isRtl:r,children:[n.jsxs(De,{expanded:u&&d?!0:y===(r?e.governanceNameAr:e.governanceNameEn),onClick:()=>Ce(e),disabled:e.addresses.length===0,style:{opacity:e.addresses.length===0?.6:1,cursor:e.addresses.length===0?"default":"pointer"},children:[n.jsx("span",{style:{float:r?"right":"left",fontWeight:"bold",display:"inline-block",transition:"transform 0.3s ease",transform:u&&d||y===(r?e.governanceNameAr:e.governanceNameEn)?"rotate(0deg)":r?"rotate(90deg)":"rotate(-90deg)"},children:n.jsx(Be,{style:{color:"#1a237e"}})}),r?e.governanceNameAr:e.governanceNameEn,e.addresses.length>0&&n.jsxs("span",{style:{marginRight:"8px",fontSize:"0.8rem",color:"#666",fontWeight:"normal"},children:["(",e.addresses.length,")"]})]}),u&&d||y===(r?e.governanceNameAr:e.governanceNameEn)?n.jsx(Oe,{children:e.addresses.length>0?e.addresses.map((l,c)=>n.jsx(en,{onClick:()=>we(r?e.governanceNameAr:e.governanceNameEn,r?l.address:l.addressEn||l.address),children:n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[n.jsx(Ge,{style:{color:"#1a237e"},size:18}),r?l.address:l.addressEn||l.address]})},l?.id??c)):n.jsx("div",{style:{padding:"0.5rem",fontSize:"0.9rem",color:"#666",fontStyle:"italic",textAlign:"center"},children:r?"لا توجد فروع في هذه المحافظة":"No branches in this governorate"})}):null]},e.governanceId??i)):n.jsx(qe,{children:r?s("search.noResults")||"لا توجد نتائج للبحث":s("search.noResults")||"No search results found"})})})]})]})]})};export{xn as default};
