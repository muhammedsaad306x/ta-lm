import{d as i}from"./ui-vendor-DkFBY_P_.js";const e=i.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  height: 100%;
  margin-top: 4rem;

  @media (max-width: 1200px) {
    gap: 12px;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin-top: 1.5rem;
  }
`,x=i.div`
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
`,p=i.div`
  /* Minimal wrapper - only structural styling, no content styling */
  /* API content styles (inline styles and classes) will be preserved */
  white-space: pre-line;
  width: ${({width:t})=>t||"50%"};
  font-size: 1.2rem;

  /* Don't override API content styles */
  & * {
    /* Let API styles take precedence */
  }

  @media (max-width: 1200px) {
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,d=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;

  @media (max-width: 1200px) {
    width: 52%;
    gap: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`,n=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  position: relative;
  min-height: 100px;

  @media (max-width: 1200px) {
    padding: 20px;
    margin-bottom: 20px;
    min-height: 90px;
  }

  @media (max-width: 768px) {
    padding: 18px;
    margin: 18px 0;
    min-height: 80px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin-bottom: 16px;
    min-height: 70px;
  }
`,m=i.img`
  width: 48px;
  height: 48px;
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    width: 44px;
    height: 44px;
    top: -22px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: -20px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    top: -18px;
  }
`,o=i.h4`
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  font-family: "Cairo", sans-serif;
  margin: 0;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,h=i.h4`
  font-size: 32px;
  font-weight: 800;
  color: #2563eb;
  font-family: "Cairo", sans-serif;
  margin: 0;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,s=i.h4`
  font-size: 16px;
  font-weight: 500;
  color: #4a5568;
  font-family: "Cairo", sans-serif;
  margin: 0;
  text-align: center;
  line-height: 1.4;
  max-width: 280px;

  @media (max-width: 1200px) {
    font-size: 15px;
    max-width: 260px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,r=i.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  width: 100%;

  @media (max-width: 1200px) {
    gap: 14px;
  }

  @media (max-width: 768px) {
    gap: 12px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,g=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 45%;
  background-color: #f5f5f5;
  border-radius: 16px;
  padding: 12px;
  min-height: 150px;

  @media (max-width: 1200px) {
    width: 48%;
    gap: 6px;
    padding: 10px;
    min-height: 140px;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 8px;
    padding: 12px;
    min-height: 120px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    padding: 10px;
    min-height: 100px;
    border-radius: 12px;
  }
`,w=i.h3`
  font-size: 20px;
  font-family: Cairo;
  font-weight: 700;
  color: #222;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 18px;
    gap: 6px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    gap: 6px;
  }
`,c=i.h3`
  font-size: 20px;
  font-weight: 700;
  color: #222;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,f=i.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  @media (max-width: 1200px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`,l=i.img`
  width: 35px;
  height: 35px;
  object-fit: contain;

  @media (max-width: 1200px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`,z=i.p`
  font-family: Cairo;
  font-size: 16px;
  font-weight: 400;
  color: #222;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 15px;
    gap: 3px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 4px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    gap: 3px;
  }
`,y=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  margin-bottom: 8px;

  @media (max-width: 1200px) {
    gap: 6px;
    margin-bottom: 6px;
  }

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 6px;
  }
`,u=i.span`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: 800;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,b=i.span`
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,C=i.p`
  color: #4a5568;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 1200px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,j=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: stretch;
  align-items: stretch;
  padding: 0 2rem;
  width: 100%;
  margin: 3rem auto;

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
`,v=i.div`
  flex: 1;
  height: 100%;
  min-height: 200px;

  img {
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
`;export{c as C,x as H,j as I,e as M,d as P,m as S,p as T,v as a,n as b,o as c,h as d,s as e,r as f,g,w as h,f as i,z as j,y as k,u as l,b as m,C as n,l as o};
