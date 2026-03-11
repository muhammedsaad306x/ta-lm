import{j as e}from"./map-vendor-bFKnpCbR.js";import{r as b}from"./form-vendor-2tEkjfrN.js";import{d as n}from"./ui-vendor-DkFBY_P_.js";import{k as p}from"./react-icons-vendor-CvqjQV9E.js";import{c as k}from"./tanstack-vendor-BIBkAdy1.js";import{u as L}from"./vendor-Dpb4irXk.js";import"./carousel-vendor-C-zzQswU.js";const S=n.section`
  width: 100%;
  padding: 2.5rem 4rem 2rem 4rem;
  background: #0a4976;
  @media (max-width: 768px) {
    padding: 2.5rem 2rem 2rem 2rem;
  }
`,C=n.h2`
  text-align: ${t=>t.isRTL?"right":"left"};
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #fff;
`,z=n.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,m=n.div`
  background: none;
  border-radius: 0.6rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  min-width: 260px;
  height: 200px;
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px) scale(1.03);
  }
`,d=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 260 / 200;
`,g=n.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffa726;
  border-radius: 0.3rem;

  background: rgba(0, 0, 0, 0.5);
  margin: 0 0 0.5rem 0;
  padding: 0.5rem 1rem;
  z-index: 2;
  ${m}:hover & {
    color: #fff;
  }
`,h=n.button`
  font-family: "Cairo", sans-serif;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  background: #ffa726;
  color: #fff;
  justify-content: center;
  flex: 1;
  transition: all 0.3s ease;
  text-wrap: nowrap;
  gap: 0.5rem;
  min-width: 0;
  padding: ${({isRTL:t})=>t?"0.64rem 1rem":"0.5rem 0.7rem"};
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
`,x=n.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
`,u="/assets/Special%20Campaign%20Wed-Ck02VEea.webp",w="/assets/Special%20Campaign%20Nakhil-beF0SSzm.webp",$="/assets/Special%20Campaign%20Gaza-DkWvLtQ0.webp",v="/assets/Special%20Campaign%20Aish%20w%20Mal7-CIjQX8Qi.webp",R=()=>{const{t,i18n:y}=L(),i=y.resolvedLanguage==="ar",l=k(),s=a=>(a||"").toString().trim().toLowerCase().replace(/[^a-z0-9]+/gi,"-").replace(/^-+|-+$/g,""),o=a=>(a||"").toString().trim().toLowerCase().replace(/[^\u0600-\u06FFa-z0-9]+/gi,"-").replace(/^-+|-+$/g,""),r=typeof window<"u"?window.location.origin:"",f=b.useMemo(()=>{const a=[{name:i?"قوافل إغاثة غزة":"Gaza Relief",image:$,url:`${r}/campaign-details/${i?o("قوافل إغاثة غزة"):s("Gaza Relief")}/42`},{name:t("nakhil.title"),image:w,url:`${r}/campaign-details/${i?o(t("nakhil.title")):s("nakhil")}/15`},{name:t("wed.title"),image:u,url:`${r}/campaign-details/${i?o(t("wed.title")):s("wed")}/6`}];return{"@context":"https://schema.org","@type":"ItemList",name:t("special_campaigns"),itemListElement:a.map((c,j)=>({"@type":"ListItem",position:j+1,url:c.url,item:{"@type":"Product",name:c.name,image:c.image}}))}},[t,i,r]);return e.jsxs(S,{itemScope:!0,itemType:"https://schema.org/WebPageElement",children:[e.jsx(C,{as:"h2",itemProp:"name",isRTL:i,children:t("special_campaigns")}),e.jsxs(z,{isRTL:i,itemScope:!0,itemType:"https://schema.org/ItemList",itemProp:"hasPart",children:[e.jsxs(m,{onClick:()=>{l({to:"/campaign-details/aish-w-melh/$id",params:{id:1054}})},itemScope:!0,itemType:"https://schema.org/ListItem",itemProp:"itemListElement",children:[e.jsx(d,{src:v,alt:t("campaign3.alt_text"),width:260,height:200,loading:"lazy",decoding:"async"}),e.jsxs(x,{children:[e.jsx(g,{itemProp:"name",children:t("aishWmelh.title")}),e.jsxs(h,{type:"button",children:[t("common.donateNow"),e.jsx(p,{})]})]})]}),e.jsxs(m,{onClick:()=>{const a=(i?o(t("nakhil.title")):s("nakhil"))||"campaign";l({to:"/campaign-details/$slug/$id",params:{slug:a,id:15}})},itemScope:!0,itemType:"https://schema.org/ListItem",itemProp:"itemListElement",children:[e.jsx(d,{src:w,alt:t("campaign2.alt_text"),width:260,height:200,loading:"lazy",decoding:"async"}),e.jsxs(x,{children:[e.jsx(g,{itemProp:"name",children:t("nakhil.title")}),e.jsxs(h,{type:"button",children:[t("common.donateNow"),e.jsx(p,{})]})]})]}),e.jsxs(m,{onClick:()=>{const a=(i?o(t("wed.title")):s("wed"))||"campaign";l({to:"/campaign-details/$slug/$id",params:{slug:a,id:6}})},itemScope:!0,itemType:"https://schema.org/ListItem",itemProp:"itemListElement",children:[e.jsx(d,{src:u,alt:t("campaign1.alt_text"),width:260,height:200,loading:"lazy",decoding:"async"}),e.jsxs(x,{children:[e.jsx(g,{itemProp:"name",children:t("wed.title")}),e.jsxs(h,{type:"button",children:[e.jsx("p",{children:t("common.donateNow")}),e.jsx(p,{})]})]})]})]}),f&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f)}})]})};export{R as default};
