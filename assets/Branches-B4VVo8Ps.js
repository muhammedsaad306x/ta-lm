import{j as n,M as Te,T as Le,b as he,P as fe,u as O,L as pe,i as Ie,c as ze}from"./map-vendor-CkCCoZy4.js";import{r as l}from"./form-vendor-8JSUuxVu.js";import{u as Me,a as H}from"./vendor-8UwSOQY7.js";import{q as Be,I as Re,r as Ge,s as Ue}from"./react-icons-vendor-D75jEhkE.js";import{f as $e,h as Q,C as V,T as J}from"./index-Bz-f-rfY.js";import{B as X}from"./Breadcrumbs-CzB9j62p.js";import{d as g}from"./ui-vendor-BVv7PGpf.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-DdfYexyz.js";import"./tanstack-vendor-DVbpgvBY.js";const Pe=g.div`
  position: relative;
  min-height: 700px;
  text-align: ${({isRtl:o})=>o?"right":"left"};
`,We=g.div`
  height: 700px;
  background: #eee;
  overflow: hidden;
  position: relative;
`,Ze=g.div`
  position: absolute;
  top: 2rem;
  left: 4rem;
  z-index: 1000;
  width: 300px;
  border-radius: 0.5rem;
  
  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    right: 1rem;
    width: auto;
  }
`,Fe=g.div`
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
      ${({isMobileExpanded:o})=>o?"0":"calc(100% - 60px)"}
    );
    transition: transform 0.3s ease;
    z-index: 2010;
    cursor: pointer;

    &:hover {
      transform: translateY(
        ${({isMobileExpanded:o})=>o?"0":"calc(100% - 70px)"}
      );
    }
  }
`,_e=g.div`
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
`;g.h1`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--primary-color, #1a237e);
  margin-bottom: 1.5rem;
`;const Ke=g.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  align-items: center;
`,ge=g.button`
  background: ${({active:o,color:r="var(--primary-color, #1a237e)"})=>o?r:"#f3f3f3"};
  color: ${({active:o})=>o?"#fff":"#222"};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  outline: none;
`,Ye=g.div`
  padding: 1rem 0.5rem;
  overflow-y: auto;
  height: 100%;
  
  @media (max-width: 768px) {
    max-height: calc(70dvh - 120px);
    overflow-y: auto;
  }
`,qe=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 400px;
  
  @media (max-width: 768px) {
    max-height: none;
  }
`,He=g.li`
  margin-bottom: 0.5rem;
  direction: ${({isRtl:o})=>o?"rtl":"ltr"};
`,Qe=g.button`
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
  &[aria-expanded='true'] {
    background: #f3f3f3;
  }
`,Ve=g.ul`
  list-style: none;
  margin: 0.5rem 0 0 0;
  ${""}
`,Je=g.li`
  font-size: 0.97rem;
  ${""}
  margin-bottom: 0.3rem;
  cursor: pointer;
  transition: color 0.15s;
  text-align: right;
  padding-inline: .5rem;

`,Xe=g.div`
  margin-bottom: 1rem;
  position: relative;
`,De=g.input`
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 2rem;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
  background: #fff;
  text-align: ${({isRTL:o})=>o?"right":"left"};
  
  &:focus {
    border-color: var(--primary-color, #1a237e);
  }
  
  &::placeholder {
    color: #999;
  }
`,Oe=g.div`
  position: absolute;
  ${({isRTL:o})=>o?"right: 1rem;":"left: 1rem;"}
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 1rem;
`,en=g.button`
  position: absolute;
  ${({isRTL:o})=>o?"left: 2rem;":"right: 2rem;"}
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 50%;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f0f0f0;
  }
`,nn=g.div`
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 1rem;
`;let tn=pe.icon({iconUrl:ze,shadowUrl:Ie});pe.Marker.prototype.options.icon=tn;const rn=(o,r)=>{const t=[],u=[],b={};r&&r.forEach(a=>{b[a.id]={nameAr:a.nameAr,nameEn:a.nameEn}});const E=r||[];return E.forEach(a=>{t.push({governanceId:a.id,governanceNameAr:a.nameAr,governanceNameEn:a.nameEn,addresses:[]})}),E.forEach(a=>{u.push({governanceId:a.id,governanceNameAr:a.nameAr,governanceNameEn:a.nameEn,addresses:[]})}),o.forEach(a=>{const y={id:a.id,name:a.nameAr,address:a.address,nameEn:a.nameEn,addressEn:a.addressEn,latitude:parseFloat(a.latitude),longitude:parseFloat(a.longitude),mobileNumber:a.mobileNumber,locationUrl:a.locationUrl,imageUrl:a.imageUrl,governanceId:a.governanceId,governanceNameAr:b[a.governanceId]?.nameAr||`Governance ${a.governanceId}`,governanceNameEn:b[a.governanceId]?.nameEn||`Governance ${a.governanceId}`};if(a.branchTypeId===6){const x=t.find(N=>N.governanceId===a.governanceId);x&&x.addresses.push(y)}else if(a.branchTypeId===3){const x=u.find(N=>N.governanceId===a.governanceId);x&&x.addresses.push(y)}}),{offices:t,associations:u}};function D({bounds:o}){const r=O();return l.useEffect(()=>{o&&o.length>0&&r.fitBounds(o,{padding:[60,60]})},[o,r]),null}function W({center:o,zoom:r}){const t=O();return l.useEffect(()=>{o&&r&&t.flyTo(o,r,{duration:1.2})},[o,r,t]),null}function on({disabled:o}){const r=O();return l.useEffect(()=>{o?(r.dragging.disable(),r.touchZoom.disable(),r.doubleClickZoom.disable(),r.scrollWheelZoom.disable(),r.boxZoom.disable(),r.keyboard.disable(),r.zoomControl&&r.zoomControl.remove()):(r.dragging.enable(),r.touchZoom.enable(),r.doubleClickZoom.enable(),r.scrollWheelZoom.enable(),r.boxZoom.enable(),r.keyboard.enable())},[o,r]),null}function sn({position:o,popupContent:r,markerKey:t,openPopupKey:u}){const b=l.useRef(null);return l.useEffect(()=>{t===u&&b.current&&setTimeout(()=>{b.current?.openPopup()},800)},[t,u]),n.jsx(he,{ref:b,position:o,children:n.jsx(fe,{children:r})})}const an=({t:o})=>n.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(255,255,255,0.7)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",color:"#1a237e",fontWeight:"bold"},children:o("common.loading")}),vn=()=>{const{i18n:o,t:r}=Me(),t=o.resolvedLanguage==="ar",[u,b]=l.useState("offices"),[E,a]=l.useState(null),[y,x]=l.useState("governances"),[N,S]=l.useState(null),[xe,I]=l.useState(null),[z,Z]=l.useState({center:[27.8025,29.8206],zoom:7}),[ee,ve]=l.useState([]),[A,M]=l.useState([]),ye=l.useRef({}),[be,ne]=l.useState(!1),[c,te]=l.useState(""),[f,re]=l.useState(!1),[v,B]=l.useState(null),[C,Ee]=l.useState({offices:[],associations:[]}),[F,oe]=l.useState(!0),[R,_]=l.useState(null),[j,G]=l.useState(!1),U=l.useRef(null),[ke,se]=l.useState(null),{data:K=[],isLoading:Y}=$e("Governance");l.useEffect(()=>{const e=async()=>{try{if(oe(!0),_(null),!["offices","associations"].includes(u))return;const s=u==="offices"?6:3,i=await H.get("/api/content/branches",{params:{typeId:s}});if(i.data.succeeded&&i.data.data){const d=rn(i.data.data,K);Ee(m=>({...m,[u]:d[u]}))}else _("Failed to fetch branches data")}catch(s){console.error("Error fetching branches data:",s),_("Error loading branches data. Please try again later.")}finally{oe(!1)}};K.length>0&&e()},[K,u]),l.useEffect(()=>{if(F||R||Y||!C[u]||C[u].length===0)return;let e=!0;return(async()=>{ne(!0);const d=C[u].map(p=>t?p.governanceNameAr:p.governanceNameEn),m=await Promise.all(d.map(async p=>{try{const P=(await H.get(`https://photon.komoot.io/api/?q=${encodeURIComponent(p+" Egypt")}`)).data.features[0];return{governanceName:p,lat:P?.geometry?.coordinates[1]??null,lng:P?.geometry?.coordinates[0]??null}}catch($){return console.error(`Error geocoding governance ${p}:`,$),{governanceName:p,lat:null,lng:null}}}));if(!e)return;const h=m.filter(p=>p.lat&&p.lng);ve(h),M([]),ye.current={},ne(!1),x("governances"),S(null),I(null),h.length>0&&Z({center:[h[0].lat,h[0].lng],zoom:10})})(),()=>{e=!1}},[u,C,F,R,Y,t]);const ae=e=>{b(e),a(null),x("governances"),S(null),I(null)},Ne=async e=>{if(e.addresses.length===0)return;const s=t?e.governanceNameAr:e.governanceNameEn;a(E===s?null:s),x("governanceAddresses"),S(s),I(null);const i=e.addresses.map(d=>({governanceName:s,address:t?d?.address:d?.addressEn||d?.address,lat:d?.latitude,lng:d?.longitude,id:d?.id,name:d?.name,mobileNumber:d?.mobileNumber,locationUrl:d?.locationUrl}));M(d=>[...d,...i])},Ce=async(e,s,i,d)=>{if(x("address"),S(e),I(s),G(!1),i&&d){Z({center:[i,d],zoom:16});const h=`${e}${s}`;se(h);return}const m=A.find(h=>h.governanceName===e&&h.address===s);if(m&&m.lat&&m.lng){Z({center:[m.lat,m.lng],zoom:16});const h=`${e}${s}`;se(h)}},we=e=>{window.innerWidth<=768&&(j?(e.target===U.current||e.target.closest(".mobile-handle"))&&G(!1):G(!0))};l.useEffect(()=>{const e=s=>{window.innerWidth<=768&&j&&U.current&&(U.current.contains(s.target)||G(!1))};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[j]);const ie=ee.map(e=>[e.lat,e.lng]),le=A.filter(e=>e.governanceName===N).map(e=>[e.lat,e.lng]);let T=[];if(y==="governances")T=ee.map(e=>({key:e.governanceName,lat:e.lat,lng:e.lng,label:e.governanceName}));else if(y==="governanceAddresses")T=A.filter(e=>e.governanceName===N).map(e=>({key:e.governanceName+e.address,lat:e.lat,lng:e.lng,label:e.address,locationUrl:e.locationUrl}));else if(y==="address"){const e=A.find(s=>s.governanceName===N&&s.address===xe);e&&(T=[{key:e.governanceName+e.address,lat:e.lat,lng:e.lng,label:e.address,locationUrl:e.locationUrl}])}const ce=A.filter(e=>e.governanceName===N),de=y==="governanceAddresses"&&ce.length===1,q=de?ce[0]:null,L=f&&c?C[u].map(e=>{if((t?e.governanceNameAr:e.governanceNameEn).toLowerCase().includes(c.toLowerCase()))return{...e,addresses:e.addresses};const d=e.addresses.filter(m=>(t?m.address:m.addressEn||m.address).toLowerCase().includes(c.toLowerCase()));return d.length>0?{...e,addresses:d}:null}).filter(Boolean):C[u],w=f&&c?T.filter(e=>e.label.toLowerCase().includes(c.toLowerCase())):T,me=l.useCallback(async()=>{if(re(!0),B(null),!C[u].some(s=>{const d=(t?s.governanceNameAr:s.governanceNameEn).toLowerCase().includes(c.toLowerCase()),m=s.addresses.some(h=>(t?h.address:h.addressEn||h.address).toLowerCase().includes(c.toLowerCase()));return d||m})&&c)try{const i=(await H.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(c)}&countrycodes=eg&limit=1`)).data[0];i&&i.display_name&&i.display_name.includes("Egypt")?B({lat:parseFloat(i.lat),lng:parseFloat(i.lon),label:i.display_name,locationUrl:i.osm_type+"/"+i.osm_id}):B(null)}catch{}},[c,u,C,t]),Se=e=>{e.key==="Enter"&&me()},ue=()=>{te(""),re(!1),B(null)};return l.useEffect(()=>{if(f&&c){const e=L.map(s=>t?s.governanceNameAr:s.governanceNameEn);if(e.length>0&&!e.includes(E)){a(e[0]),S(e[0]),x("governanceAddresses");const s=L[0];if(s&&s.addresses.length>0){const i=t?s.governanceNameAr:s.governanceNameEn,d=s.addresses.map(m=>({governanceName:i,address:t?m.address:m.addressEn||m.address,lat:m?.latitude,lng:m?.longitude,id:m.id,name:m.name,mobileNumber:m.mobileNumber,locationUrl:m.locationUrl}));M(d)}}}},[f,c,L,E,t]),l.useEffect(()=>{ue()},[u]),F||Y?n.jsxs(n.Fragment,{children:[n.jsxs(Q,{isRTL:t,children:[n.jsx(X,{}),n.jsx(V,{isRTL:t,children:n.jsx(J,{isRTL:t,children:r("donationSection.inBranch.title")})})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px",fontSize:"1.2rem",color:"#1a237e"},children:r("common.loading")})]}):R?n.jsxs(n.Fragment,{children:[n.jsxs(Q,{isRTL:t,children:[n.jsx(X,{}),n.jsx(V,{isRTL:t,children:n.jsx(J,{isRTL:t,children:r("donationSection.inBranch.title")})})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px",fontSize:"1.2rem",color:"#d32f2f",textAlign:"center",padding:"0 2rem"},children:R})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Q,{isRTL:t,children:[n.jsx(X,{}),n.jsx(V,{isRTL:t,children:n.jsx(J,{isRTL:t,children:r("donationSection.inBranch.title")})})]}),n.jsxs(Pe,{children:[n.jsxs(We,{style:{position:"relative"},children:[be&&n.jsx(an,{t:r}),n.jsx(Ze,{children:n.jsxs(Xe,{children:[n.jsx(De,{type:"text",value:c,onChange:e=>te(e.target.value),onKeyDown:Se,isRTL:t,placeholder:t?r("search.placeholder")||"البحث في المحافظات والعناوين...":r("search.placeholder")||"Search in governorates and addresses..."}),n.jsx(Oe,{isRTL:t,onClick:me,style:{cursor:"pointer"},children:n.jsx(Be,{size:20})}),c&&n.jsx(en,{isRTL:t,onClick:ue,children:n.jsx(Re,{size:16})})]})}),n.jsxs(Te,{center:z.center,zoom:z.zoom,style:{height:"700px",width:"100%",borderRadius:"1rem"},dragging:!1,touchZoom:!1,doubleClickZoom:!1,scrollWheelZoom:!1,boxZoom:!1,keyboard:!1,zoomControl:!1,children:[n.jsx(on,{disabled:!0}),n.jsx(Le,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),y==="governances"&&ie.length>0&&!c&&n.jsx(D,{bounds:ie}),y==="governanceAddresses"&&le.length>1&&!c&&n.jsx(D,{bounds:le}),de&&q&&!c&&n.jsx(W,{center:[q.lat,q.lng],zoom:12}),y==="address"&&!c&&n.jsx(W,{center:z.center,zoom:z.zoom}),f&&c&&v&&n.jsx(W,{center:[v.lat,v.lng],zoom:16}),f&&c&&v&&n.jsx(he,{position:[v.lat,v.lng],children:n.jsx(fe,{children:n.jsx("a",{href:v.locationUrl,target:"_blank",children:v.label})})}),f&&c&&!v&&w.length===1&&n.jsx(W,{center:[w[0].lat,w[0].lng],zoom:14}),f&&c&&!v&&w.length>1&&n.jsx(D,{bounds:w.map(e=>[e.lat,e.lng])}),(!f||!c||!v)&&w.map(e=>n.jsx(sn,{position:[e.lat,e.lng],markerKey:e.key,openPopupKey:ke,popupContent:n.jsx("a",{href:e.locationUrl,target:"_blank",children:e.label})},e.key))]})]}),n.jsxs(Fe,{ref:U,isMobileExpanded:j,onClick:we,children:[n.jsx(_e,{className:"mobile-handle",children:r(j?"branches.hideBranches":"branches.showBranches")}),n.jsxs(Ke,{children:[n.jsx(ge,{active:u==="offices",onClick:()=>ae("offices"),children:r("branches.offices")}),n.jsx(ge,{active:u==="associations",color:"#FBAE42",onClick:()=>ae("associations"),children:r("branches.donateBranches")})]}),n.jsx(Ye,{children:n.jsx(qe,{children:L.length>0?L.map((e,s)=>n.jsxs(He,{isRtl:t,children:[n.jsxs(Qe,{expanded:f&&c?!0:E===(t?e.governanceNameAr:e.governanceNameEn),onClick:()=>Ne(e),disabled:e.addresses.length===0,style:{opacity:e.addresses.length===0?.6:1,cursor:e.addresses.length===0?"default":"pointer"},children:[n.jsx("span",{style:{float:t?"right":"left",fontWeight:"bold",display:"inline-block",transition:"transform 0.3s ease",transform:f&&c||E===(t?e.governanceNameAr:e.governanceNameEn)?"rotate(0deg)":t?"rotate(90deg)":"rotate(-90deg)"},children:n.jsx(Ge,{style:{color:"#1a237e"}})}),t?e.governanceNameAr:e.governanceNameEn,e.addresses.length>0&&n.jsxs("span",{style:{marginRight:"8px",fontSize:"0.8rem",color:"#666",fontWeight:"normal"},children:["(",e.addresses.length,")"]})]}),f&&c||E===(t?e.governanceNameAr:e.governanceNameEn)?n.jsx(Ve,{children:e.addresses.length>0?e.addresses.map((i,d)=>{const m=async(h,p,$,P)=>{if(f&&c){const Ae=t?e.governanceNameAr:e.governanceNameEn,je=e.addresses.map(k=>({governanceName:Ae,address:t?k?.address:k?.addressEn||k?.address,lat:k?.latitude,lng:k?.longitude,id:k?.id,name:k?.name,mobileNumber:k?.mobileNumber,locationUrl:k?.locationUrl}));M(je)}Ce(h,p,$,P)};return n.jsx(Je,{onClick:()=>m(t?e.governanceNameAr:e.governanceNameEn,t?i?.address:i?.addressEn||i?.address,i?.latitude,i?.longitude),children:n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[n.jsx(Ue,{style:{color:"#1a237e"},size:18}),t?i?.address:i?.addressEn||i?.address]})},i?.id??d)}):n.jsx("div",{style:{padding:"0.5rem",fontSize:"0.9rem",color:"#666",fontStyle:"italic",textAlign:"center"},children:t?"لا توجد فروع في هذه المحافظة":"No branches in this governorate"})}):null]},e.governanceId??s)):n.jsx(nn,{children:t?r("search.noResults")||"لا توجد نتائج للبحث":r("search.noResults")||"No search results found"})})})]})]})]})};export{vn as default};
