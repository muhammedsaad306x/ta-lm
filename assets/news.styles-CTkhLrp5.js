import{d as t,m as e}from"./ui-vendor-BVv7PGpf.js";import{x as a}from"./react-icons-vendor-D75jEhkE.js";const d=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-baseline;
  justify-content: space-between;
  width: 80%;
 
  padding: 2rem 0;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`,l=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`,m=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,c=t.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  margin-top: 2rem;
  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    gap: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }
`,f=t.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  display: flex;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,h=t.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: flex;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,g=t.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;

  @media (max-width: 768px) {
    gap: 8px;
  }
`,w=t.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;

  @media (max-width: 768px) {
    gap: 8px;
  }
`,u=t.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,n=e`
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
`,p=e`
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
`,o=t.button`
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
`,y=t(a)`
  font-size: 20px;
  transition: color 0.3s ease;
`,v=t(o)`
  .share-icon {
    animation: ${p} 0.6s ease;
    color: var(--primary-color);
  }

  &:hover {
    background: var(--primary-color);
    color: #fff;

    .share-icon {
      animation: ${n} 0.6s ease;
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
  }
`;t.div`
  width: 15.38px;
  height: 20px;
  position: absolute;
  left: 15px;
  top: 10px;
  outline: 1px var(--Colors-Blue-Blue, #0a4976) solid;
  outline-offset: -0.5px;

  @media (max-width: 768px) {
    width: 12px;
    height: 16px;
    left: 12px;
    top: 8px;
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 14px;
    left: 10px;
    top: 6px;
  }
`;t.div`
  width: 15.38px;
  height: 20px;
  position: absolute;
  left: 15px;
  top: 44px;
  outline: 1px var(--Colors-Blue-Blue, #0a4976) solid;
  outline-offset: -0.5px;

  @media (max-width: 768px) {
    width: 12px;
    height: 16px;
    left: 12px;
    top: 35px;
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 14px;
    left: 10px;
    top: 30px;
  }
`;const b=t.div`
  flex: 1 1 0;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  color: var(--primary-color);
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`,j=t.span`
  color: var(--primary-color);
  font-size: 40px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;
  line-height: 1.3;
  text-align: ${({isRTL:i})=>i?"right":"left"};

  @media (max-width: 1200px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 1.5;
  }
`,z=t.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;

  @media (max-width: 768px) {
    gap: 8px;
  }
`,C=t.div`
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,B=t.div`
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,k=t.span`
  color: var(--Colors-Grey-Grey---200, #404040);
  font-size: 14px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,T=t.span`
  color: black;
  font-size: 12px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`,N=t.img`
  width: 971px;
  height: 654px;
  border-radius: 10px;
  object-fit: cover;
  max-width: 100%;
  height: auto;

  @media (max-width: 1200px) {
    width: 100%;
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 8px;
  }
`,D=t.div`
  align-self: stretch;
  width: 100%;
  display: block;
`,I=t.div`
  /* Minimal wrapper - only structural styling, no content styling */
  /* API content styles (inline styles and classes) will be preserved */
  display: block;
  width: 100%;
  
  /* Don't set text-align - let API content control it via inline styles or classes */
  /* If API doesn't specify, browser default will apply based on document direction */
`;t.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: flex-start;
  gap: 23px;
  display: inline-flex;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;t.div`
  width: 45%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: flex;

  @media (max-width: 1200px) {
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;t.img`
  width: 100%;
  height: 376px;
  border-radius: 10px;
  object-fit: cover;
  max-width: 100%;
  height: auto;

  @media (max-width: 1200px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
    border-radius: 8px;
  }
`;t.span`
  color: var(--Colors-Blue-Blue---100, #015cab);
  font-size: 18px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  word-wrap: break-word;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;t.div`
  width: 50%;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  display: flex;

  @media (max-width: 1200px) {
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;t.span`
  color: black;
  font-size: 16px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  word-wrap: break-word;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.8;
  }
`;const Y=t.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: flex;

  @media (max-width: 768px) {
    gap: 15px;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,S=t.div`
  align-self: stretch;
  padding-top: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;

  @media (max-width: 768px) {
    padding-top: 15px;
  }

  @media (max-width: 480px) {
    padding-top: 12px;
  }
`,A=t.div`
  align-self: stretch;
  height: 1px;
  border: 1px var(--Colors-Grey-Grey---800, #dfdfdf) solid;
`,H=t.div`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  display: flex;

  @media (max-width: 768px) {
    align-items: center;
  }
`,P=t.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: inline-flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,G=t.div`
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
  cursor: pointer;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,L=t.span`
  color: var(--Colors-Orange-Orange, #fbae42);
  font-size: 15px;
  font-family: Cairo;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,s=t.div`
  height: 45px;
  padding-left: 42px;
  padding-right: 42px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 10px;
  outline: 1px var(--Colors-Blue-Blue---100, #015cab) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 auto;

  &:hover {
    background-color: var(--Colors-Blue-Blue---100, #015cab);
    color: white;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 40px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 35px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 14px;
  }
`,M=t.span`
  color: var(--Colors-Blue-Blue---100, #015cab);
  font-size: 16px;
  font-family: Cairo;
  font-weight: 400;
  text-transform: uppercase;
  word-wrap: break-word;

  ${s}:hover & {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    white-space: nowrap;
  }
`;export{y as A,s as B,l as C,C as D,m as H,T as L,N as M,Y as N,d as P,v as S,H as T,S as a,A as b,P as c,G as d,L as e,M as f,o as g,c as h,f as i,h as j,g as k,w as l,u as m,b as n,j as o,z as p,B as q,k as r,D as s,I as t};
