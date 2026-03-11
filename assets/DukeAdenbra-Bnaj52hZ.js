import{j as e}from"./map-vendor-CkCCoZy4.js";import{B as v}from"./Breadcrumbs-CzB9j62p.js";import{S as k,C as m,T as y,an as s,D as d}from"./index-BG7PzkZp.js";import{S as A,A as L}from"./news.styles-CTkhLrp5.js";import{d as r}from"./ui-vendor-BVv7PGpf.js";import{L as x}from"./tanstack-vendor-DVbpgvBY.js";import{u as C}from"./vendor-8UwSOQY7.js";import"./form-vendor-8JSUuxVu.js";import"./carousel-vendor-Ek1eulE_.js";import"./media-vendor-CVofrm-u.js";import"./react-icons-vendor-D75jEhkE.js";const I="/ta-lm/assets/duke-cover-BxAiA8nq.jpg",T=r.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    gap: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,z=r.div`
  height: 375px;
  width: 100%;
  margin-bottom: 2rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0px -100px;
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    object-position: center center;
  }
`,B=r.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 1200px) {
    gap: 14px;
    margin-top: 1.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 1.25rem;
  }
`,S=r.div`
  flex: 1;
  height: 100%;
  min-height: 200px;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    min-height: 180px;
  }

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    min-height: 160px;
  }

  @media (max-width: 480px) {
    min-height: 140px;
  }
`,D=r.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  margin: 5rem 0;
  ${({isRTL:t})=>t?"margin-left: 1rem;":"margin-right: 1rem;"}
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin: 1.5rem 0;
  }
`,E=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;
  justify-content: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`,$=r.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: stretch;
  justify-content: center;
  width: 100%;
`,c=r.li`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: stretch;
  justify-content: center;
  width: 100%;
`,p=r.h3`
  font-size: 1.25rem;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,R=r.div`
  flex: 1;
`,h=r.div`
  min-height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 3rem;
  }
`,g=r.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: stretch;
  justify-content: center;
  ${({isRTL:t})=>t?"padding-right: 20px;":"padding-left: 20px;"}
  ${({isRTL:t})=>t?"margin-right: ; margin-left: 2rem;":"margin-left: ; margin-right: 2rem;"}
`,o=r.li`
  list-style-type: disc;
  display: list-item;
`,l=r.h3`
  font-size: 1.25rem;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,G=r.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  width: 100%;
  padding: 40px 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,H=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,O=r.ul`
  list-style-type: disc;
  padding-left: ${({isRTL:t})=>t?"0":"20px"};
  padding-right: ${({isRTL:t})=>t?"20px":"0"};
`,F=r.li`
  margin-bottom: 10px;
  font-size: 15px;
`,V=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
`;r.button`
  background-color: var(--primary-light);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  width: 50%;

  &:hover {
    background-color: #095a93;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;const u=r.button`
  background-color: transparent;
  border: 1.5px solid var(--primary-light);
  border-radius: 10px;
  width: 50%;
  color: var(--primary-light);
  font-size: 1rem;
  padding: 0.5rem 2rem;
  margin: 2rem auto;
  transition: all 0.3s ease;
  cursor: pointer;
  @media (min-width: 1440px) {
    width: 40%;
  }
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
  &:hover {
    background-color: var(--primary-light);
    color: #fff;
  }
`,W="/ta-lm/assets/duke1-Bpe3ZTEA.jpg",J="/ta-lm/assets/duke2-C0CSu76_.jpg",Z="/ta-lm/assets/duke3-DAx2Odct.jpg",_="/ta-lm/assets/duke4-D3ROBGl2.jpg",q="/ta-lm/assets/award-framework-DjWFM9Lz.jpg",K="/ta-lm/assets/award1-C1QLE0V_.jpg",M="/ta-lm/assets/award2-FG2zOBhk.jpg",N="/ta-lm/assets/award3-Cf8kf0-H.jpg",P="/ta-lm/assets/award4-ClEEIt5R.jpg";function de(){const{t,i18n:j}=C(),i=j.resolvedLanguage==="ar",w=[W,J,Z,_],f=[K,M,N,P],b=()=>{navigator.share?navigator.share({title:t("projects.title"),text:t("projects.description"),url:window.location.href}):navigator.clipboard.writeText(window.location.href)};return e.jsxs(k,{isRTL:i,children:[e.jsx(v,{isRTL:i}),e.jsxs(m,{children:[e.jsxs(T,{children:[e.jsx(y,{isRTL:i,children:t("dukeAdenbra.title")}),e.jsxs(A,{onClick:b,children:[e.jsx("span",{children:t("checkout.shareBtn")}),e.jsx(L,{className:"share-icon"})]})]}),e.jsx(z,{children:e.jsx("img",{src:I,alt:"projects"})})]}),e.jsxs(m,{children:[e.jsxs("div",{children:[e.jsx(s,{isRTL:i,children:t("dukeAdenbra.subtitle")}),e.jsx(d,{isRTL:i,children:t("dukeAdenbra.description")})]}),e.jsx(B,{children:w.map((n,a)=>e.jsx(S,{children:e.jsx("img",{src:n,alt:"projects"})},a))}),e.jsx(x,{to:"/duke-form",style:{display:"flex",justifyContent:"center"},children:e.jsx(u,{children:t("dukeAdenbra.button")})}),e.jsxs(D,{isRTL:i,children:[e.jsxs(E,{children:[e.jsx(s,{isRTL:i,children:t("dukeAdenbra.levels.title")}),e.jsxs($,{children:[e.jsx(c,{children:e.jsx(p,{isRTL:i,children:t("dukeAdenbra.levels.bronze")})}),e.jsx(c,{children:e.jsx(p,{isRTL:i,children:t("dukeAdenbra.levels.silver")})}),e.jsx(c,{children:e.jsx(p,{isRTL:i,children:t("dukeAdenbra.levels.gold")})})]}),e.jsx(d,{isRTL:i,children:t("dukeAdenbra.levels.description")}),e.jsx(s,{isRTL:i,children:t("dukeAdenbra.categories.title")}),e.jsxs(g,{children:[e.jsx(o,{children:e.jsx(l,{isRTL:i,children:t("dukeAdenbra.categories.voluntaryService")})}),e.jsx(o,{children:e.jsx(l,{isRTL:i,children:t("dukeAdenbra.categories.physicalRecreation")})}),e.jsx(o,{children:e.jsx(l,{isRTL:i,children:t("dukeAdenbra.categories.skillsDevelopment")})})]}),e.jsx(d,{isRTL:i,children:t("dukeAdenbra.categories.goldLevel")}),e.jsx(g,{isRTL:i,children:e.jsx(o,{children:e.jsx(l,{isRTL:i,children:t("dukeAdenbra.categories.residentialProject")})})})]}),e.jsxs(R,{children:[e.jsx(h,{children:e.jsx("img",{src:q,alt:"projects"})}),e.jsx(h,{children:e.jsx("div",{style:{position:"relative",paddingBottom:"56.25%",height:0},children:e.jsx("iframe",{src:"https://www.youtube.com/embed/JzKx3cJHVag?si=4tb2-nBL1riVtEZz",title:"YouTube video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,width:"100%",height:"600",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",minHeight:"600px",border:"none"}})})})]})]}),e.jsxs(G,{children:[e.jsxs(H,{children:[e.jsx(s,{isRTL:i,children:t("dukeAdenbra.participateInTheAward.title")}),e.jsx(d,{isRTL:i,children:t("dukeAdenbra.participateInTheAward.description")}),e.jsx(O,{isRTL:i,children:t("dukeAdenbra.participateInTheAward.items",{returnObjects:!0}).map((n,a)=>e.jsx(F,{children:n},a))})]}),e.jsx(V,{children:f.map((n,a)=>e.jsx("img",{src:n,alt:`Duke Adenbra ${a+1}`},a))})]}),e.jsx(x,{to:"/duke-form",style:{display:"flex",justifyContent:"center"},children:e.jsx(u,{children:t("dukeAdenbra.button")})})]})]})}export{de as default};
