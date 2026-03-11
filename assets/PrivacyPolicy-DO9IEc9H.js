import{j as t}from"./map-vendor-bFKnpCbR.js";import{h as f,C as b,T as y,an as v}from"./index-B9j8TIkH.js";import{B as I}from"./Breadcrumbs-CP2ARXTu.js";import{d as l}from"./ui-vendor-DkFBY_P_.js";import{u as O}from"./vendor-Dpb4irXk.js";import"./form-vendor-2tEkjfrN.js";import"./carousel-vendor-C-zzQswU.js";import"./media-vendor-C8E2tzc3.js";import"./tanstack-vendor-BIBkAdy1.js";import"./react-icons-vendor-CvqjQV9E.js";const S=l.div`
  line-height: 1.8;
  font-size: 1rem;
  direction: ${({isRTL:e})=>e?"rtl":"ltr"};
  text-align: ${({isRTL:e})=>e?"right":"left"};

  ul {
    margin: 0 3rem;
    padding: 0;
    list-style-type: disc;
  }

  .divider {
    margin: 2rem 0;
    border-bottom: 1px solid #ddd;
  }

  .note {
    font-style: italic;
    margin-bottom: 1rem;
  }
`,n=l.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  direction: ${({isRTL:e})=>e?"rtl":"ltr"};
`;l.h3`
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
  font-weight: 600;
  direction: ${({isRTL:e})=>e?"rtl":"ltr"};
`;function E(){const{t:e,i18n:a}=O("privacy"),i=a.resolvedLanguage==="ar",h=e("collect.items",{returnObjects:!0})||[],m=e("use.items",{returnObjects:!0})||[],j=e("protection.items",{returnObjects:!0})||[],p=e("sharing.items",{returnObjects:!0})||[],x=e("rights.items",{returnObjects:!0})||[],u=e("contact.items",{returnObjects:!0})||[],g=e("refund.sections",{returnObjects:!0})||[];let c=1;return t.jsxs(f,{isRTL:i,children:[t.jsx(I,{}),t.jsxs(b,{children:[t.jsx(y,{isRTL:i,children:e("title")}),t.jsx(v,{isRTL:i,children:e("label")}),t.jsxs(S,{isRTL:i,children:[t.jsx(n,{isRTL:i,children:`${c++}. ${e("preface.title")}`}),t.jsx("p",{style:{width:"80%"},children:e("preface.body")}),t.jsx(n,{isRTL:i,children:`${c++}. ${e("collect.title")}`}),t.jsx("p",{children:e("collect.description")}),t.jsx("ul",{children:h.map((r,s)=>t.jsx("li",{children:r},`c-${s}`))}),t.jsx(n,{isRTL:i,children:`${c++}. ${e("use.title")}`}),t.jsx("p",{children:e("use.preface")}),t.jsx("ul",{children:m.map((r,s)=>t.jsx("li",{children:r},`u-${s}`))}),t.jsx(n,{isRTL:i,children:`${c++}. ${e("protection.title")}`}),t.jsx("p",{children:e("protection.preface")}),t.jsx("ul",{children:j.map((r,s)=>t.jsx("li",{children:r},`p-${s}`))}),t.jsx(n,{isRTL:i,children:`${c++}. ${e("sharing.title")}`}),t.jsx("p",{children:e("sharing.preface")}),t.jsx("ul",{children:p.map((r,s)=>t.jsx("li",{children:r},`s-${s}`))}),t.jsx(n,{isRTL:i,children:`${c++}. ${e("cookies.title")}`}),t.jsx("p",{children:e("cookies.body")}),t.jsx(n,{isRTL:i,children:`${c++}. ${e("rights.title")}`}),t.jsx("ul",{children:x.map((r,s)=>t.jsx("li",{children:r},`r-${s}`))}),t.jsx("p",{children:e("rights.contactNote")}),t.jsx(n,{isRTL:i,children:`${c++}. ${e("changes.title")}`}),t.jsx("p",{children:e("changes.body")}),t.jsx(n,{isRTL:i,children:`${c++}.${e("contact.title")}`}),t.jsx("p",{children:e("contact.body")}),t.jsx("ul",{children:u.map((r,s)=>t.jsx("li",{children:r},`ct-${s}`))}),g.map((r,s)=>t.jsxs("div",{style:{marginBottom:"1rem"},children:[t.jsx(n,{isRTL:i,children:r.heading}),r.body&&t.jsx("p",{children:r.body}),r.list&&t.jsx("ul",{style:{padding:0,margin:0},children:r.list.map((o,$)=>{const d=/^\d+\./.test(o.trim());return t.jsx("li",{style:{listStyle:d?"none":"disc",marginInlineStart:d?"0":"3rem"},children:o},$)})})]},s))]})]})]})}export{E as default};
