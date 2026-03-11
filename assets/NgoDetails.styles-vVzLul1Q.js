import{d as i}from"./ui-vendor-BVv7PGpf.js";const t=i.div`
  margin-top: 2rem;
  position: relative;
  width: 100%;
  height: 500px;
  margin-bottom: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    height: 450px;
  }

  @media (max-width: 992px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 576px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }

  @media (max-width: 360px) {
    height: 200px;
  }
`,a=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,r=i.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`,d=i.div`
  position: absolute;
  top: -6rem;
  width: 175px;
  height: 165px;
  ${({isRTL:e})=>e?"right: -3rem;":"left: -1rem;"}
  background: ${e=>e.url?`url(${e.url}) no-repeat center center`:"white"};
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  z-index: 10;

  @media (max-width: 1200px) {
    width: 110px;
    height: 110px;
    top: -3.5rem;
    ${({isRTL:e})=>e?"right: 0":"left: 0"}
  }

  @media (max-width: 992px) {
    width: 100px;
    height: 100px;
    top: -3rem;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    top: -2.5rem;
  }

  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
    top: -2rem;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
    top: -1.5rem;
  }

  @media (max-width: 360px) {
    width: 60px;
    height: 60px;
    top: -1rem;
  }
`;i.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;

  object-fit: fill;
`;const x=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`,n=i.div`
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
`,p=i.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  overflow: hidden;
  margin: ${({isRTL:e})=>e?"0 0 0 40px":"0 40px 0 0"};

  @media (max-width: 1200px) {
    gap: 0.625rem;
    margin: ${({isRTL:e})=>e?"0 0 0 30px":"0 30px 0 0"};
  }

  @media (max-width: 992px) {
    gap: 0.5rem;
    margin: ${({isRTL:e})=>e?"0 0 0 20px":"0 20px 0 0"};
  }

  @media (max-width: 768px) {
    gap: 0.375rem;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 1rem;
    /* margin: ${({isRTL:e})=>e?"0 77px 0 0":"0 0 0 77px"}; */
  }

  @media (max-width: 576px) {
    gap: 0.25rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    margin: ${({isRTL:e})=>e?"0 77px 0 0":"0 0 0 77px"};
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    margin: ${({isRTL:e})=>e?"0 77px 0 0":"0 0 0 77px"};
  }

  @media (max-width: 360px) {
    gap: 0.125rem;
    margin: ${({isRTL:e})=>e?"0 77px 0 0":"0 0 0 77px"};
  }
`,h=i.a`
  color: var(--primary-color);
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    color: var(--primary-light);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 0.25rem;
  }
`,o=i.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  flex-shrink: 0;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1200px) {
    width: 1.125rem;
    height: 1.125rem;
  }

  @media (max-width: 992px) {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: 768px) {
    width: 0.875rem;
    height: 0.875rem;
  }

  @media (max-width: 576px) {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (max-width: 480px) {
    width: 0.625rem;
    height: 0.625rem;
  }

  @media (max-width: 360px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`,g=i.div`
  height: 0.5rem;
  width: 1px;
  background-color: #d9d9d9;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 0.875rem;
  }

  @media (max-width: 480px) {
    height: 0.75rem;
  }
`,s=i.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--primary-color);
  transition: color 0.3s ease;
  flex-shrink: 0;
  white-space: nowrap;
  font-weight: 700;
  color: var(--primary-color);
  &:hover {
    color: var(--primary-light);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    gap: 0.125rem;
  }
`,w=i.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 1.125rem;
    height: 1.125rem;
  }

  @media (max-width: 480px) {
    width: 1rem;
    height: 1rem;
  }
`,l=i.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    font-size: 0.875rem;
  }

  @media (max-width: 992px) {
    font-size: 0.8125rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 576px) {
    font-size: 0.6875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.625rem;
  }

  @media (max-width: 360px) {
    font-size: 0.5625rem;
  }
`,c=i.div`
  gap: 1rem;
  padding: ${({isRTL:e})=>e?"0 2rem 0 4rem":"0 4rem 0 2rem"};
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    padding: 0 1.5rem;
    gap: 0.875rem;
  }

  @media (max-width: 992px) {
    padding: 0 1.25rem;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    gap: 0.75rem;
    padding: 0 0.75rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 360px) {
    gap: 0.375rem;
    padding: 0 0.375rem;
  }
`,f=i.div`
  flex: 1;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 1200px) {
    padding: 0 1.5rem;
    margin-top: 1rem;
  }

  @media (max-width: 992px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
    ${({isRTL:e})=>e?"margin-right: 6rem;":"margin-left: 6rem;"}
  }

  @media (max-width: 576px) {
    padding: 0 0.75rem;
    ${({isRTL:e})=>e?"margin-right: 0;":"margin-left: 0;"}
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 360px) {
    padding: 0 0.375rem;
  }
`,v=i.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin: ${({isRTL:e})=>e?"0 152px 0 0":"0 0 0 180px"};
  line-height: 1.2;
  text-align: ${({isRTL:e})=>e?"right":"left"};

  @media (max-width: 1200px) {
    font-size: 1.75rem;
    /* margin: ${({isRTL:e})=>e?"0 0 0 60px":"0 60px 0 0"}; */
  }

  @media (max-width: 992px) {
    font-size: 1.5rem;
    margin: ${({isRTL:e})=>e?"0 0 0 40px":"0 40px 0 0"};
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: ${({isRTL:e})=>e?"0 0 0 1.5rem":"0 1.5rem 0 0"};
  }

  @media (max-width: 576px) {
    font-size: 1.125rem;
    margin: ${({isRTL:e})=>e?"0 0 0 1rem":"0 1rem 0 0"};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: ${({isRTL:e})=>e?"0 5rem 0 0.75rem":"0 0.75rem 0 5rem"};
  }

  @media (max-width: 360px) {
    font-size: 0.875rem;
    margin: ${({isRTL:e})=>e?"0 5rem 0 0.5rem":"0 0.5rem 0 5rem"};
  }
`,$=i.p`
  padding: ${({isRTL:e})=>"0 2rem 0 4rem"};
  text-align: ${({isRTL:e})=>e?"right":"left"};
  line-height: 1.6;
  font-size: 1rem;
  margin-top: 4rem;

  @media (max-width: 1200px) {
    padding: ${({isRTL:e})=>"0 1.5rem 0 2.5rem"};
    font-size: 0.9375rem;
  }

  @media (max-width: 992px) {
    padding: ${({isRTL:e})=>"0 1.25rem 0 2.25rem"};
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    padding: ${({isRTL:e})=>"0 1rem 0 1.5rem"};
    font-size: 0.8125rem;
  }

  @media (max-width: 576px) {
    padding: ${({isRTL:e})=>"0 0.75rem 0 1.25rem"};
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: ${({isRTL:e})=>"0 0.5rem 0 1rem"};
    font-size: 0.6875rem;
  }

  @media (max-width: 360px) {
    padding: 0 0.375rem;
    font-size: 0.625rem;
  }
`;export{t as B,$ as D,o as I,d as L,c as M,s as P,p as S,f as T,a,r as b,v as c,x as d,n as e,h as f,g,l as h,w as i};
