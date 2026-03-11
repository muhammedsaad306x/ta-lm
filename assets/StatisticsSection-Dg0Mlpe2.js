import{j as e}from"./map-vendor-CkCCoZy4.js";import{d as i}from"./ui-vendor-BVv7PGpf.js";import{g as p}from"./group-CZmcei6Q.js";import{g as u,b as h}from"./bag-B6iUsJmF.js";import{r as l}from"./form-vendor-8JSUuxVu.js";import{u as g}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";const x=i.section.withConfig({shouldForwardProp:t=>t!=="isRTL"})`
  width: 100%;
  /* CLS Fix: Ensure consistent padding for both RTL and LTR */
  padding: 2.5rem 4rem 2rem 4rem;
  background: #F5F5F5;
  overflow: hidden;
  /* CLS Fix: Explicit direction to prevent layout shift */
  direction: ${t=>t.isRTL?"rtl":"ltr"};
  /* CLS Fix: Ensure content is centered */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 2.5rem 2rem 2rem 2rem;
  }
`;i.img`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  ${""}
  opacity: 0.7;
  z-index: 1;
  pointer-events: none;
  user-select: none;

  @media (max-width: 900px) {
    height: 120px;
    top: 1.5rem;
    transform: none;
  }
`;const f=i.h2`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2.2rem;
  color: #111;
  position: relative;
  z-index: 2;
`,v=i.div.withConfig({shouldForwardProp:t=>t!=="isRTL"})`
  display: flex;
  /* CLS Fix: Ensure proper centering for both RTL and LTR */
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  position: relative;
  z-index: 2;
  width: 100%;
  /* CLS Fix: Prevent layout shift by ensuring consistent alignment */
  margin: 0 auto;
  max-width: 100%;
  /* CLS Fix: Ensure content is centered regardless of direction */
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`,y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* CLS Fix: Reserve space to prevent layout shift */
  min-width: 160px;
  max-width: 200px;
  flex: 0 1 auto;
  /* CLS Fix: Ensure text alignment is centered */
  text-align: center;
  /* CLS Fix: Prevent item from stretching */
  width: auto;
`,b=i.div`
  color: var(--secondary-color);
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
`,w=i.div`
  color: #000;

  text-align: center;
  font-family: Cairo;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,S=i.div`
  color: var(--primary-light);

  text-align: center;
  font-family: Cairo;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,r=i.img`
  width: 4rem;
  height: 4rem;
`,n=[{icon:e.jsx(r,{src:p,alt:"users icon",width:80,height:80}),label:"statistics.beneficiaries",value:"4,136,895"},{icon:e.jsx(r,{src:u,alt:"opportunities icon",width:80,height:80}),label:"statistics.opportunities",value:"34,5570"},{icon:e.jsx(r,{src:h,alt:"budget icon",width:80,height:80}),label:"statistics.budget",value:"88,168,614"}];function z(){const{t,i18n:c}=g(),s=c.resolvedLanguage==="ar",m=l.useRef(null),a=l.useMemo(()=>({"@context":"https://schema.org","@type":"Dataset",name:t("statistics.title"),variableMeasured:[{"@type":"PropertyValue",name:t("statistics.beneficiaries"),value:n[0].value},{"@type":"PropertyValue",name:t("statistics.opportunities"),value:n[1].value},{"@type":"PropertyValue",name:t("statistics.budget"),value:n[2].value}]}),[t]);return e.jsxs(x,{ref:m,itemScope:!0,itemType:"https://schema.org/WebPageElement",isRTL:s,children:[e.jsx(f,{as:"h2",itemProp:"name",children:t("statistics.title")}),e.jsx(v,{isRTL:s,children:n.map((o,d)=>e.jsxs(y,{itemScope:!0,itemType:"https://schema.org/PropertyValue",children:[e.jsx(b,{children:o.icon}),e.jsx(w,{itemProp:"name",children:t(o.label)}),e.jsx(S,{itemProp:"value",children:o.value})]},d))}),a&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a)}})]})}export{z as default};
