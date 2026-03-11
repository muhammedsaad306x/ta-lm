import{j as r}from"./map-vendor-CkCCoZy4.js";import{d as i}from"./ui-vendor-BVv7PGpf.js";import{a as v}from"./useApiCache-DVg0xXYJ.js";import{L as j,d as k,e as z}from"./index-kzOCw0aW.js";import{c as $,L}from"./tanstack-vendor-DVbpgvBY.js";import{r as S}from"./form-vendor-8JSUuxVu.js";import{u as P}from"./vendor-8UwSOQY7.js";import"./carousel-vendor-Ek1eulE_.js";import"./cacheConfig-DLAJO7wI.js";import"./media-vendor-rSePvz4F.js";import"./react-icons-vendor-D75jEhkE.js";const T=i.section`
  width: 100%;
  padding: 2.5rem 4rem 2rem 4rem;
  background: #fff;
  @media (max-width: 768px) {
    padding: 2.5rem 2rem 2rem 2rem;
  }
`,C=i.h2`
  text-align: ${({isRTL:o})=>o?"right":"left"};
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #222;
  padding-left: 2rem;
  padding-right: 2rem;
`,D=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 0 0.5rem;
  }
`,u=i.div`
  background: #fff;
  border-radius: 0.5rem;
  width: 100%;
  ${""}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  cursor: pointer;
  text-align: right;
`,E=i.div`
  width: 100%;
  height: 14.5rem;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`,N=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #f3f3f3;
  transition: transform 0.3s ease;
  aspect-ratio: 400 / 232;
  ${u}:hover & {
    transform: scale(1.3);
  }
`,B=i.div`
  font-size: 0.92rem;
  color: #888;
  margin: 0.7rem 1rem 0.2rem 0;
  align-self: flex-start;
`,I=i.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 1rem 0.3rem 1rem;
  align-self: flex-start;
  text-align: ${({isRTL:o})=>o?"right":"left"};
`,F=i.div`
  font-size: 15px;
  margin: 0 1rem 1rem 1rem;
  font-weight: 300;
  align-self: flex-start;
  opacity: 0.95;
  text-align: ${({isRTL:o})=>o?"right":"left"};
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  line-height: 1.6;
  
  /* Make DangerouslyInnerHTML wrapper transparent to line-clamp */
  .dangerously-inner-html {
    display: contents;
  }
  
  /* Style paragraphs as normal paragraphs */
  .dangerously-inner-html p {
    display: inline;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: normal;
    line-height: inherit;
    color: inherit;
  }
  
  /* Convert other block elements to inline for proper line-clamp behavior */
  .dangerously-inner-html div,
  .dangerously-inner-html h1,
  .dangerously-inner-html h2,
  .dangerously-inner-html h3,
  .dangerously-inner-html h4,
  .dangerously-inner-html h5,
  .dangerously-inner-html h6,
  .dangerously-inner-html ul,
  .dangerously-inner-html ol,
  .dangerously-inner-html li {
    display: inline;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: normal;
  }
  
  /* Remove line breaks and list markers */
  .dangerously-inner-html br {
    display: none;
  }
  
  .dangerously-inner-html ul,
  .dangerously-inner-html ol {
    list-style: none;
  }
  
  /* Ensure text elements flow inline with normal styling */
  .dangerously-inner-html span,
  .dangerously-inner-html a,
  .dangerously-inner-html strong,
  .dangerously-inner-html b,
  .dangerously-inner-html em,
  .dangerously-inner-html i {
    display: inline;
    font-weight: inherit;
    font-style: inherit;
  }
  
  /* Normal link styling */
  .dangerously-inner-html a {
    color: inherit;
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    -webkit-line-clamp: 4;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    -webkit-line-clamp: 3;
  }
`,M=i.button`
  background: transparent;
  border: 1.5px solid var(--primary-light);
  border-radius: 0.75rem;
  color: var(--primary-light);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  display: block;
  text-wrap: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;

  &:hover {
    background: var(--primary-light);
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
`;function A(o,n){(!n||typeof n!="string")&&(n="ar");const d=o.split(".")[0],a=new Date(d);if(isNaN(a))return"";const t={day:"numeric",month:"long",year:"numeric"};let l=new Intl.DateTimeFormat(n,t).format(a);return n.startsWith("ar")&&(l=l.replace(/\d/g,m=>"٠١٢٣٤٥٦٧٨٩"[m])),l}function V(){const o=$(),{t:n,i18n:d}=P(),a=d.resolvedLanguage||d.language||"ar",t=a==="ar",l=1,m=window.innerWidth<=768?3:4,{data:f,isLoading:x,error:y}=v(l,m),s=f?.data?.items||[],g=typeof window<"u"?window.location.origin:"",p="https://lifemakers.org/Public/",c=S.useMemo(()=>!s||s.length===0?null:{"@context":"https://schema.org","@type":"Blog",name:t?"الأخبار":"News",blogPost:s.map(e=>{const h=t?e.title||e.titleAr||e.titleEn:e.titleEn||e.title,w=h.toString().trim().toLowerCase().replace(/[^\u0600-\u06FFa-z0-9]+/gi,"-").replace(/^-+|-+$/g,""),b=`${g}/news/${w}/${e.id}`;return{"@type":"BlogPosting",headline:h,url:b,image:e.imageUrl?`${p}${e.imageUrl}`:void 0,datePublished:e.createdOn}})},[s,t,g,p]);return x?r.jsxs(j,{children:[r.jsx(k,{}),r.jsx("p",{children:n("common.loading")})]}):y?r.jsx("div",{children:n("error")}):r.jsxs(T,{itemScope:!0,itemType:"https://schema.org/Blog",children:[r.jsx(C,{as:"h2",itemProp:"name",isRTL:t,children:n("news.title")}),r.jsx(D,{isRTL:t,children:s.map(e=>r.jsx(u,{children:r.jsx(L,{to:`/news/${(t?e.title||e.titleAr||e.titleEn:e.titleEn||e.title).toString().trim().toLowerCase().replace(/[^\u0600-\u06FFa-z0-9]+/gi,"-").replace(/^-+|-+$/g,"")}/${e.id}`,style:{textDecoration:"none",color:"inherit"},children:r.jsxs("article",{itemScope:!0,itemType:"https://schema.org/BlogPosting",itemProp:"blogPost",children:[r.jsx(E,{children:r.jsx(N,{src:`https://lifemakers.org/Public/${e.imageUrl}`,alt:e.title,loading:"lazy",decoding:"async",width:400,height:232,itemProp:"image"})}),r.jsx(B,{children:A(e.createdOn,a)}),r.jsx(I,{isRTL:t,itemProp:"headline",children:t?e.title:e.titleEn}),r.jsx(F,{isRTL:t,itemProp:"description",children:r.jsx(z,{html:t?e.content:e.contentEn})})]},e.id)})},e.id))}),r.jsx(M,{onClick:()=>o({to:"/news"}),type:"button",children:n("news.showAll")}),c&&r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(c)}})]})}export{V as default};
