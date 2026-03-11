import{j as e}from"./map-vendor-CkCCoZy4.js";import{d as t,l as m}from"./ui-vendor-BVv7PGpf.js";import{B as R}from"./Breadcrumbs-CzB9j62p.js";import{r as k}from"./form-vendor-8JSUuxVu.js";import{S as C,e as g,L as I,d as L}from"./index-Bz-f-rfY.js";import{u as T}from"./vendor-8UwSOQY7.js";const A=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e7eb;
  color: #6b7280;
  overflow: hidden;
  width: ${({size:r})=>r}px;
  height: ${({size:r})=>r}px;
  border-radius: ${({rounded:r})=>r?"50%":"0"};
  object-fit: contain;
`,b=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({rounded:r})=>r?"50%":"0"};
  border: 3px solid #fff;
  transition: border-color 0.3s;
`,F=t.svg`
  width: 50%;
  height: 50%;
  color: inherit;
`;t.section`
  padding: 1rem 4rem;
  text-align: ${({isRTL:r})=>r?"right":"left"};
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;const N=t.div`
  max-width: 98%;
  margin: 0 auto;
`,S=t.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0 2rem 0;
  text-align: ${({isRTL:r})=>r?"right":"left"};

  color: var(--primary-color);
`,v=t.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0 0.5rem 0;
  color: var(--primary-light);
  text-align: ${({isRTL:r})=>r?"right":"left"};
`,D=t.div`
  text-align: center;
  margin-top: 4rem;
  width: 25%;
  margin: 0 auto;
`,H=t.div`
  // font-size: 1.5rem;
  text-align: ${({isRTL:r})=>r?"right":"left"};
`,J=t.div`
  box-sizing: border-box;
  display: flex;
  padding: 1rem;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  transition: background 0.9s;
  margin-bottom: 1rem;
  width: 250px;
  height: 100%;
  max-width: 100%;
  &:hover {
    background: #dfdfdf;

    ${b} {
      border: 4px solid var(--secondary-color);
    }
  }
`,P=t.h4`
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 700;
`,U=t.p`
  font-size: 0.85rem;
  text-align: center;
  line-height: 2.5;
`,W=t.p`
  font-size: 0.85rem;
  text-align: center;
`,h=r=>`repeat(${r}, 1fr)`,q={left:"flex-start",center:"center",right:"flex-end"},K=t.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1rem;
  column-gap: 2rem;
  align-items: stretch;
  grid-auto-rows: 1fr;

  /* Justify content - default to 'left' */
  justify-content: ${({justify:r="left"})=>q[r]||"flex-start"};

  ${({sm:r})=>r&&m`
      @media (min-width: 576px) {
        grid-template-columns: ${h(r)};
      }
    `}

  ${({md:r})=>r&&m`
      @media (min-width: 768px) {
        grid-template-columns: ${h(r)};
      }
    `}

  ${({lg:r})=>r&&m`
      @media (min-width: 992px) {
        grid-template-columns: ${h(r)};
      }
    `}

  ${({xl:r})=>r&&m`
      @media (min-width: 1200px) {
        grid-template-columns: ${h(r)};
      }
    `}
`,O=t.div`
  box-sizing: border-box;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 3rem;
  width: auto;
  ${({justify:r})=>r==="center"?"justify-self: center;":r==="right"?"justify-self: end;":"justify-self: start;"};
`;function Q({imageUrl:r,size:a=48,rounded:s=!0}){const[d,x]=k.useState(!1);return e.jsx(A,{size:a,rounded:s,children:r&&!d?e.jsx(b,{src:r,alt:"avatar",onError:()=>x(!0),rounded:s}):e.jsxs(F,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4z"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})})}function rr({title:r,description:a,headerSubtitle:s,footerSubtitle:d,isLoading:x,error:$,membersData:y=[],volBoards:z=!1,layoutGroups:l=[1,3,4,4]}){const{t:u,i18n:B}=T(),n=B.resolvedLanguage==="ar",j=(y?.data||[]).sort((o,c)=>o.order-c.order),M=()=>{let o=0,c=[],f=0;for(;o<j.length;){const p=f<l.length?l[f]:l[l.length-1],w=j.slice(o,o+p);o+=p,w.length>0&&c.push(e.jsx(K,{lg:p,justify:"center",children:w.map((i,E)=>e.jsx(O,{lg:1,justify:"center",children:e.jsxs(J,{children:[e.jsx(Q,{className:"avatar-hover-border",size:"200",imageUrl:`https://lifemakers.org/Public/${i.imageUrl}`}),e.jsx(P,{children:n?i.nameAr:i.nameEn}),e.jsx(U,{children:e.jsx(g,{html:z?n?i.bioAr:i.bioEn:n?i.formerRoleAr:i.formerRoleEn,as:"div"})}),e.jsx(W,{children:e.jsx(g,{html:n?i.ngoroleAr:i.ngoroleEn,as:"div"})})]})},i.id||i.order||E))},`row-${o}`)),f++}return c};return e.jsxs(C,{isRTL:n,children:[e.jsx(R,{}),e.jsxs(N,{children:[e.jsx(S,{isRTL:n,children:r}),s&&e.jsx(v,{isRTL:n,children:e.jsx(g,{html:s,as:"div"})}),a&&e.jsx(H,{isRTL:n,children:e.jsx(g,{html:a,as:"div"})}),d&&e.jsx(v,{isRTL:n,children:d}),x?e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsx(L,{}),e.jsx("p",{children:u("common.loading")})]})}):$?e.jsx("p",{children:u("error")}):e.jsx(D,{isRTL:n,children:M()})]})]})}export{rr as M};
