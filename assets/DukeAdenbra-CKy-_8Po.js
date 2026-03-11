import{j as e}from"./map-vendor-bFKnpCbR.js";import{B as v}from"./Breadcrumbs-CP2ARXTu.js";import{S as k,C as m,T as y,an as s,D as d}from"./index-B9j8TIkH.js";import{S as A,A as L}from"./news.styles-nAKOMXuN.js";import{d as r}from"./ui-vendor-DkFBY_P_.js";import{L as x}from"./tanstack-vendor-BIBkAdy1.js";import{u as C}from"./vendor-Dpb4irXk.js";import"./form-vendor-2tEkjfrN.js";import"./carousel-vendor-C-zzQswU.js";import"./media-vendor-C8E2tzc3.js";import"./react-icons-vendor-CvqjQV9E.js";const I="/assets/duke-cover-BxAiA8nq.jpg",T=r.div`
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
  ${({isRTL:i})=>i?"margin-left: 1rem;":"margin-right: 1rem;"}
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
  ${({isRTL:i})=>i?"padding-right: 20px;":"padding-left: 20px;"}
  ${({isRTL:i})=>i?"margin-right: ; margin-left: 2rem;":"margin-left: ; margin-right: 2rem;"}
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
  padding-left: ${({isRTL:i})=>i?"0":"20px"};
  padding-right: ${({isRTL:i})=>i?"20px":"0"};
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
`,W="/assets/duke1-Bpe3ZTEA.jpg",J="/assets/duke2-C0CSu76_.jpg",Z="/assets/duke3-DAx2Odct.jpg",_="/assets/duke4-D3ROBGl2.jpg",q="/assets/award-framework-DjWFM9Lz.jpg",K="/assets/award1-C1QLE0V_.jpg",M="/assets/award2-FG2zOBhk.jpg",N="/assets/award3-Cf8kf0-H.jpg",P="/assets/award4-ClEEIt5R.jpg";function de(){const{t:i,i18n:j}=C(),t=j.resolvedLanguage==="ar",w=[W,J,Z,_],f=[K,M,N,P],b=()=>{navigator.share?navigator.share({title:i("projects.title"),text:i("projects.description"),url:window.location.href}):navigator.clipboard.writeText(window.location.href)};return e.jsxs(k,{isRTL:t,children:[e.jsx(v,{isRTL:t}),e.jsxs(m,{children:[e.jsxs(T,{children:[e.jsx(y,{isRTL:t,children:i("dukeAdenbra.title")}),e.jsxs(A,{onClick:b,children:[e.jsx("span",{children:i("checkout.shareBtn")}),e.jsx(L,{className:"share-icon"})]})]}),e.jsx(z,{children:e.jsx("img",{src:I,alt:"projects"})})]}),e.jsxs(m,{children:[e.jsxs("div",{children:[e.jsx(s,{isRTL:t,children:i("dukeAdenbra.subtitle")}),e.jsx(d,{isRTL:t,children:i("dukeAdenbra.description")})]}),e.jsx(B,{children:w.map((a,n)=>e.jsx(S,{children:e.jsx("img",{src:a,alt:"projects"})},n))}),e.jsx(x,{to:"/duke-form",style:{display:"flex",justifyContent:"center"},children:e.jsx(u,{children:i("dukeAdenbra.button")})}),e.jsxs(D,{isRTL:t,children:[e.jsxs(E,{children:[e.jsx(s,{isRTL:t,children:i("dukeAdenbra.levels.title")}),e.jsxs($,{children:[e.jsx(c,{children:e.jsx(p,{isRTL:t,children:i("dukeAdenbra.levels.bronze")})}),e.jsx(c,{children:e.jsx(p,{isRTL:t,children:i("dukeAdenbra.levels.silver")})}),e.jsx(c,{children:e.jsx(p,{isRTL:t,children:i("dukeAdenbra.levels.gold")})})]}),e.jsx(d,{isRTL:t,children:i("dukeAdenbra.levels.description")}),e.jsx(s,{isRTL:t,children:i("dukeAdenbra.categories.title")}),e.jsxs(g,{children:[e.jsx(o,{children:e.jsx(l,{isRTL:t,children:i("dukeAdenbra.categories.voluntaryService")})}),e.jsx(o,{children:e.jsx(l,{isRTL:t,children:i("dukeAdenbra.categories.physicalRecreation")})}),e.jsx(o,{children:e.jsx(l,{isRTL:t,children:i("dukeAdenbra.categories.skillsDevelopment")})})]}),e.jsx(d,{isRTL:t,children:i("dukeAdenbra.categories.goldLevel")}),e.jsx(g,{isRTL:t,children:e.jsx(o,{children:e.jsx(l,{isRTL:t,children:i("dukeAdenbra.categories.residentialProject")})})})]}),e.jsxs(R,{children:[e.jsx(h,{children:e.jsx("img",{src:q,alt:"projects"})}),e.jsx(h,{children:e.jsx("div",{style:{position:"relative",paddingBottom:"56.25%",height:0},children:e.jsx("iframe",{src:"https://www.youtube.com/embed/JzKx3cJHVag?si=4tb2-nBL1riVtEZz",title:"YouTube video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,width:"100%",height:"600",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",minHeight:"600px",border:"none"}})})})]})]}),e.jsxs(G,{children:[e.jsxs(H,{children:[e.jsx(s,{isRTL:t,children:i("dukeAdenbra.participateInTheAward.title")}),e.jsx(d,{isRTL:t,children:i("dukeAdenbra.participateInTheAward.description")}),e.jsx(O,{isRTL:t,children:i("dukeAdenbra.participateInTheAward.items",{returnObjects:!0}).map((a,n)=>e.jsx(F,{children:a},n))})]}),e.jsx(V,{children:f.map((a,n)=>e.jsx("img",{src:a,alt:`Duke Adenbra ${n+1}`},n))})]}),e.jsx(x,{to:"/duke-form",style:{display:"flex",justifyContent:"center"},children:e.jsx(u,{children:i("dukeAdenbra.button")})})]})]})}export{de as default};
