import{d as r,m as t,l as o}from"./ui-vendor-BVv7PGpf.js";import{x as n,B as m}from"./react-icons-vendor-D75jEhkE.js";const h=r.section`
  padding: ${({padding:e="0 4rem"})=>e};
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,f=r.div`
  max-width: 98%;
  margin: 0 auto;
`,w=r.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  color: var(--primary-color);
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,u=r.h3`
  text-align: ${({isRTL:e})=>e?"right":"left"};
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,b=r.span`
  font-size: 0.875rem;
  color: var(--secondary-color);
  font-weight: 500;
  cursor: pointer;

  display: block;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  margin-bottom: 1rem;
  padding: 0.1rem 0;
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.05rem 0.35rem;
  }
  &:hover {
    color: var(--secondary-dark);
    transition: all 0.3s ease;
  }
`,y=r.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 1024px) {
    gap: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
  @media (max-width: 480px) {
    gap: 1rem;
  }
`,v=r.div`
  text-align: ${({isRTL:e})=>e?"right":"left"};
  padding-top: 1rem;
  width: 55%;
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 1rem;
  }
  @media (max-width: 480px) {
    padding-top: 0.5rem;
  }
`,k=r.div`
  background-color: var(--background-light);
  padding: 4rem 1rem 1rem 1rem;
  min-width: 45%;
  max-width: 45%;
  @media (max-width: 1024px) {
    min-width: 40%;
    max-width: 40%;
  }
  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 12px;
  }
`,z=r.div`
  width: 95%;
  object-fit: cover;
  border-radius: 0.75rem;
  margin: 1rem auto;
`,$=r.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    max-height: 300px;
    border-radius: 0.5rem;
  }
  @media (max-width: 480px) {
    max-height: 250px;
    border-radius: 0.375rem;
  }
`,C=r.div`
  font-size: 1.25rem;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  margin: 0 0 1rem 0;
  line-height: 1.6;

  /* Style HTML elements within the description */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0 0.5rem 0;
    font-weight: 600;
  }

  p {
    margin: 0.5rem 0;
  }

  ul,
  ol {
    margin: 0.5rem 0;
    padding-left: ${({isRTL:e})=>e?"0":"1.5rem"};
    padding-right: ${({isRTL:e})=>e?"1.5rem":"0"};
  }

  li {
    margin: 0.25rem 0;
  }

  strong,
  b {
    font-weight: 600;
  }

  em,
  i {
    font-style: italic;
  }

  a {
    color: var(--primary-color);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  blockquote {
    border-left: ${({isRTL:e})=>e?"none":"3px solid var(--primary-color)"};
    border-right: ${({isRTL:e})=>e?"3px solid var(--primary-color)":"none"};
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background-color: rgba(37, 99, 235, 0.05);
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 1.1rem;
    }
  }
`,B=r.p`
  color: var(--primary-light);
  text-align: ${({isRTL:e})=>e?"right":"left"};
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,d=r.button`
  background: #f5f5f5;
  border: 1.5px solid #dfdfdf;
  border-radius: 10px;
  color: var(--primary-light);
  font-size: 0.95rem;
  font-weight: 500;
  display: block;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  ${e=>e.$active&&o`
      background: var(--primary-light);
      color: #fff;
      border-color: var(--primary-light);
    `}

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
`;r.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;const I=r.p`
  text-align: ${({isRTL:e})=>e?"right":"left"};
  font-weight: 700;
  font-size: 1.2rem;
  margin: 2rem 0;
`,A=r.form``,T=r.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-wrap: nowrap;
  flex: 1;
  min-width: 0;
  @media (max-width: 768px) {
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  @media (max-width: 480px) {
    gap: 0.4rem;
    width: 100%;
  }
`,Y=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 100%;
  padding: 10px 20px;
`,j=r.input`
  all: unset;
  padding: 0;
  font-size: 1rem;
  border-radius: 0.75rem;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  &::placeholder {
    color: rgba(128, 128, 128, 1);
  }
`,O=r.span`
  font-size: 1rem;
  color: #333;
`,X=r(d)`
  width: ${({width:e="100px"})=>e};
  height: 45px;

  &:focus {
    border: 1px solid var(--primary-light);
  }
`,F=r.p`
  white-space: nowrap;
  min-width: 5rem;
  display: flex;
  margin-top: 2px;
  align-items: center;
  justify-content: ${({isRTL:e})=>e?"right":"left"};
  flex-shrink: 0;
  @media (max-width: 768px) {
    min-width: 6rem;
    margin: 0 0.5rem;
  }
  @media (max-width: 480px) {
    min-width: 5rem;
    margin: 0 0.25rem;
    font-size: 0.9rem;
  }
`,i=r.button`
  border-radius: 0.375rem;
  font-size: 0.7rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: all 0.3s ease;
  text-wrap: nowrap;
  min-width: 0;
  padding: ${({isRTL:e})=>e?"0.64rem 1rem":"0.5rem 0.7rem"};
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
`,H=r.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  flex-grow: 1;
  width: 100%;
  min-height: 40px;
  margin-top: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 4px;
    min-height: 80px;
  }
`,P=r(i)`
  background-color: var(--primary-light);
  color: white;
  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }

  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: var(--primary-color);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,D=r(i)`
  background-color: var(--secondary-color);
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: var(--secondary-color);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`,M=r.img`
  width: 1rem;
  height: 1rem;
  margin-right: ${({isRTL:e})=>e?"0.3rem":"0"};
  margin-left: ${({isRTL:e})=>e?"0":"0.3rem"};
  @media (max-width: 480px) {
    width: 0.85rem;
    height: 0.85rem;
    ${({isRTL:e})=>e&&"margin-right: 0.3rem;"||"margin-left: 0.3rem;"}
  }
`,S=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,L=r.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`,q=r.div`
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  margin-top: 1rem;
  padding: 0 0.5rem;
  width: 95%;
  margin: 0 auto;
`,s=t`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-30px);
    opacity: 0;
  }
  51% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,p=t`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(30px);
    opacity: 0;
  }
  51% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,a=r.button`
  background: transparent;
  border: 1.5px solid var(--primary-light);
  border-radius: 0.75rem;
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: var(--primary-color);
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
`,R=r(n)`
  font-size: 20px;
  transition: color 0.3s ease;
`,W=r(a)`
  margin-bottom: 0;
  .share-icon {
    animation: ${p} 0.6s ease;
    color: var(--primary-color);
  }

  &:hover {
    background: var(--primary-light);
    color: #fff;

    .share-icon {
      animation: ${s} 0.6s ease;
      color: #fff;
    }
  }
`,l=t`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(10px);
    opacity: 0;
  }
  51% {
    transform: translateX(-10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,c=t`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(-10px);
    opacity: 0;
  }
  51% {
    transform: translateX(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;r(a)`
  padding: 0.5rem 1rem;
  margin-bottom: 0;

  .arrow-icon {
    animation: ${c} 0.6s ease;
    color: var(--primary-color);
  }

  &:hover {
    background: var(--primary-color);
    color: #fff;

    .arrow-icon {
      animation: ${l} 0.6s ease;
      color: #fff;
    }
  }
`;r(m)`
  font-size: 20px;
  color: var(--primary-color);
  transition: color 0.3s ease;
`;r.div`
  display: none; /* You can toggle to 'flex' or 'block' when open */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;r.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 5px;
`;r.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;r.div`
  margin-top: 20px;
`;const G=r.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 120px;
  @media (max-width: 768px) {
    max-width: 100px;
  }
  @media (max-width: 480px) {
    max-width: 80px;
  }
`,E=r.input`
  border: 1px solid #dfdfdf;
  border-radius: 0.75rem;
  font-size: 1rem;
  background-color: #f5f5f5;
  width: 100%;
  padding: 10px 10px;
  padding-left: 35px;
  color: var(--primary-color);
  text-align: center;

  /* Hide default spinner arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 8px;
    padding-left: 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 6px;
    padding-left: 25px;
  }
`,J=r.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  pointer-events: none;
`,U=r.button`
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 10px;
  cursor: pointer;
  padding: 2px;
  line-height: 1;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 15px;

  &:hover {
    color: var(--primary-light);
  }

  &:active {
    transform: scale(0.9);
  }
`,K=r.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-top: 1px solid #e0e0e0;
`;r.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  display: none;
  accent-color: var(--primary-light, #2e7d32);
`;const N=r.label`
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0.8rem;
  color: #015cab;
  cursor: pointer;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,Q=r.span`
  color: #ff0000;
  font-weight: bold;
`,V=r.div`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
`,Z=r.textarea`
  width: 100%;
  min-height: 35px;
  margin-top: 0.8rem;
  text-wrap: wrap;
  max-width: 100%;
  resize: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  text-align: ${({isRTL:e})=>e?"right":"left"};
`,_=r.label`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  text-align: ${({isRTL:e})=>e?"right":"left"};
`,rr=r.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 0.5rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`,er=r.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px 0;
`;export{rr as A,H as B,f as C,V as D,Z as E,L as F,er as G,K as H,j as I,N as J,F as O,P,Q as R,h as S,S as T,X as a,O as b,w as c,W as d,R as e,z as f,$ as g,C as h,M as i,D as j,T as k,Y as l,y as m,v as n,q as o,b as p,B as q,k as r,u as s,I as t,A as u,G as v,J as w,U as x,E as y,_ as z};
