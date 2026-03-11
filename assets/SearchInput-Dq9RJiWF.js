import{d as t}from"./ui-vendor-BVv7PGpf.js";import{j as p}from"./map-vendor-CkCCoZy4.js";import{r as d}from"./form-vendor-8JSUuxVu.js";const S=t.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`,z=t.div`
  display: flex;
  padding: 10px;
  width: 80%;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: var(--background-light);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`,D=t.div`
  text-align: ${({isRTL:e})=>e?"right":"left"};
  margin-right: ${({isRTL:e})=>e?"2rem":"0"};
  margin-left: ${({isRTL:e})=>e?"0":"2rem"};
`,E=t.div`
  width: 200px;
  height: 200px;
  img {
    border-radius: 10px;
  }
`,I=t.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
  color: var(--primary-color);
`,M=t.span`
  font-weight: bold;
  ${({isRTL:e})=>e?"padding-left: 5px":"padding-right: 5px"};
`,B=t.a`
  text-decoration: underline;
  color: var(--primary-light);
  margin: 0 6px;
`,L=t.div`
  display: flex;
  align-items: center;
`,W=t.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`,F=t.div`
  color: #888;
  font-size: 1rem;
  font-weight: 500;
  border-right: 1px solid #888;
  padding: 0 13px;
  white-space: nowrap;
  @media (max-width: 768px) {
    border: none;
  }
`,P=t.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: ${({isRTL:e})=>e?"auto":"0"};
  margin-left: ${({isRTL:e})=>e?"0":"auto"};

  @media (max-width: 768px) {
    margin: 1rem;
    margin-right: 0;
    width: 100%;
  }
`,T=t.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,R=t.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #222;
  background: #fff;
  border: 2px solid #e0e0e0;
  justify-content: space-between;
  flex-direction: ${({isRTL:e})=>e?"row":"row-reverse"};
  border-radius: 12px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  min-width: 60px;
  text-align: right;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: border 0.2s;
  direction: rtl;
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.4rem 0.7rem;
    min-width: 120px;
    width: 100%;
  }

  &:hover,
  &:focus {
    border: 2px solid #bdbdbd;
    outline: none;
  }
`,w="data:image/svg+xml,%3csvg%20width='35'%20height='36'%20viewBox='0%200%2035%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.4724%2031.6105C10.9552%2031.6105%204.86128%2025.2989%204.86128%2017.5132C4.86128%209.72756%2010.9552%203.41602%2018.4724%203.41602C25.9896%203.41602%2032.0835%209.72756%2032.0835%2017.5132C32.0835%2025.2989%2025.9896%2031.6105%2018.4724%2031.6105Z'%20stroke='%23808080'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.91683%2032.5827L5.8335%2029.666'%20stroke='%23808080'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function b(e,i=300,l=!1){let o;return function(...a){const s=()=>{o=null,l||e(...a)},n=l&&!o;clearTimeout(o),o=setTimeout(s,i),n&&e(...a)}}const v=t.div`
  position: relative;
  height: 40px;
  width: 100%;
  max-width: 320px;
  ${({isRTL:e})=>e?"margin-left: 16px;":"margin-right: 16px;"}
`,C=t.input`
  width: ${({expanded:e,alwaysExpanded:i})=>e||i?"300px":"0"};
  height: ${({expanded:e,alwaysExpanded:i})=>e||i?"55px":"0"};
  padding-right: ${({expanded:e,alwaysExpanded:i})=>e||i?"55px":"22px"};
  padding-left: ${({expanded:e,alwaysExpanded:i})=>e||i?"55px":"22px"};
  margin-left: ${({expanded:e,alwaysExpanded:i})=>e||i?"10px":"0"};
  transition: width 0.4s ease;
  border-radius: 5px;
  background-color: var(--background-light);
  outline: none;
  font-size: 14px;
  box-shadow: ${({expanded:e})=>e?"0 0 5px rgba(0,0,0,0.1)":"none"};
  cursor: text;
  border: none;

  @media (max-width: 480px) {
    width: 100% !important;
    margin-left: 0;
    padding: 0 16px;
  }
`,k=t.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 18px;
  cursor: pointer;
  transition: right 0.4s ease;
  z-index: 2;

  @media (max-width: 480px) {
    display: none;
  }
`,H=({placeholder:e="ابحث هنا...",onSearch:i,isRTL:l,alwaysExpanded:o=!1})=>{const[c,a]=d.useState(!1),s=d.useRef(),[n,x]=d.useState(!1);d.useEffect(()=>{const r=()=>{x(window.innerWidth<=480)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),d.useEffect(()=>{c&&!n&&s.current?.focus()},[c,n]);const h=()=>{n||(c?s.current?.value===""&&a(!1):a(!0))},m=()=>{!n&&s.current?.value===""&&a(!1)},g=d.useCallback(b(r=>{i(r)},300),[i]),u=r=>{const f=r.target.value;i&&g(f)};return p.jsxs(v,{isRTL:l,children:[p.jsx(C,{ref:s,expanded:n?!0:c,placeholder:l?e:"Search here...",onBlur:m,onChange:u,alwaysExpanded:o}),!n&&p.jsx(k,{onClick:h,children:p.jsx("img",{style:{marginLeft:"10px"},src:w,alt:"search"})})]})};export{S as C,P as D,L as P,W as S,H as a,F as b,T as c,R as d,z as e,E as f,D as g,I as h,M as i,B as j};
