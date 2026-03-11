import{d as i}from"./ui-vendor-DkFBY_P_.js";i.section`
  /* Desktop styles */
  padding: 1rem 2rem;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  max-width: 98%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    padding: 0.5rem 0;
    width: 100vw;
    max-width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;i.div`
  /* Desktop styles */
  max-width: 98%;
  margin: 0 auto;

  /* Mobile styles */
  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;const o=i.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;i.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;
  color: var(--primary-light);
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 1.5rem 0;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 1rem 0;
  }
`;const d=i.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,n=i.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: ${({isRTL:e})=>e?"auto":"0"};
  margin-left: ${({isRTL:e})=>e?"0":"auto"};

  @media (max-width: 600px) {
    margin-right: ${({isRTL:e})=>e?"0":"auto"};
    margin-left: ${({isRTL:e})=>e?"auto":"0"};
    margin-top: 1rem;
  }
`,m=i.div`
  position: relative;
  display: inline-block;
`,s=i.button`
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
  min-width: 180px;
  text-align: right;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: border 0.2s;
  direction: rtl;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.4rem 0.7rem;
    min-width: 120px;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.5rem;
    min-width: 90px;
    overflow-x: auto;
  }

  &:hover,
  &:focus {
    border: 2px solid #bdbdbd;
    outline: none;
  }
`,p=i.ul`
  display: ${e=>e.open?"block":"none"};
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  min-width: 180px;
  z-index: 2000;
  padding: 0.5rem 0;
  margin: 0;
  list-style: none;
  @media (max-width: 600px) {
    min-width: 120px;
    font-size: 0.95rem;
  }
  @media (max-width: 400px) {
    min-width: 90px;
    font-size: 0.9rem;
    overflow-x: auto;
  }
`,x=i.li`
  padding: 0.7rem 1.2rem;
  color: #222;
  font-size: 1.1rem;
  cursor: pointer;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  direction: ${({isRTL:e})=>e?"rtl":"ltr"};
  transition: background 0.2s;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.5rem 0.7rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.5rem;
  }
  &:hover {
    background: #f5f5f5;
  }
`,l=i.div`
  /* Desktop styles */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0 3rem 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 2rem 0;
    gap: 2.5rem;
    width: 100vw;
    max-width: 100vw;
    box-sizing: border-box;
    padding: 0;
  }
`,t=i.div`
  /* Desktop styles */
  width: 100%;
  margin: 0 auto;
  aspect-ratio: 16/9;
  background: #fff;
  border-radius: 12px;
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    border-radius: 8px;
    padding: 0.25rem;
  }
  @media (max-width: 500px) {
    border-radius: 6px;
    padding: 0.1rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    width: 90vw;
    max-width: 100vw;
    margin: 0;
    border-radius: 4px;
    padding: 0;
    box-sizing: border-box;
  }
`,r=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,g=i.p`
  font-size: 0.9rem;
  font-weight: 400;

  color: #222;
  margin: 2rem 0;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  direction: ${({isRTL:e})=>e?"rtl":"ltr"};
`,h=i.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  /* position: absolute; */
  top: 0;
  left: 0;
  z-index: 1;
  transition: filter 0.3s;
  &:hover {
    ${r} {
      filter: blur(3px);
    }
  }
`,w=i.div`
  position: absolute;
  bottom: 0;
  display: flex;

  ${({animate:e})=>e?`
  left: 30rem;
  
  right: 0;
  bottom: 0;
  `:`
    left: 0;
    right: 0;
    bottom: 0;`}
  z-index: 5;
  height: 4rem;
  background: rgba(255, 255, 255, 0.85);
  padding: 0.5rem 1.5rem 0.7rem 1.5rem;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  @media (max-width: 480px) {
    padding: 0.4rem 1rem 0.5rem 1rem;
  }
  ${t}:hover & {
    opacity: 1;
    pointer-events: auto;
    display: flex;
    left: 0;
    right: 0;
  }
`,f=i.div`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: ${({isLink:e})=>e?"underline":"none"};
  color: ${({isLink:e})=>e?"var(--primary-color)":"#222"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  direction: ${({isRTL:e})=>e?"rtl":"ltr"};
  text-align: ${({isRTL:e})=>e?"right":"left"};
  cursor: ${({isLink:e})=>e?"pointer":"default"};
  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 0.3rem;
  }
`,c=i.div`
  font-size: 0.7rem;
  color: #444;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;i.div`
  /* Desktop styles */

  /* Mobile styles */
  @media (max-width: 480px) {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    width: 100vw;
    margin: 0;
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
  }
`;const b=i.img`
  /* Desktop styles */
  position: absolute;
  top: -6px;
  left: -6px;
  z-index: 1000;
  pointer-events: none;
  max-width: 106px;
  height: auto;

  @media (max-width: 768px) {
    top: -8px;
    left: -8px;
    max-width: 68px;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    top: -8px;
    left: -8px;
    max-width: 12vw;
    min-width: 24px;
  }
`,u=i.img`
  /* Desktop styles */
  position: absolute;
  bottom: -6px;
  right: -6px;
  z-index: 1000;
  pointer-events: none;
  max-width: 106px;
  height: auto;

  @media (max-width: 768px) {
    bottom: -8px;
    right: -8px;
    max-width: 68px;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    bottom: -8px;
    right: -8px;
    max-width: 12vw;
    min-width: 24px;
  }
`,v=i.button`
  background: transparent;
  border: 1.5px solid var(--primary-light);
  border-radius: 0.75rem;
  color: var(--primary-light);
  font-size: 0.95rem;
  font-weight: 500;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  display: block;
  text-wrap: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: var(--primary-light);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.5rem 1.5rem;
    margin: 1.5rem auto;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    margin: 1rem auto;
    border-width: 1px;
  }
`;export{u as B,n as D,d as H,f as M,o as T,m as a,s as b,p as c,x as d,l as e,v as f,t as g,b as h,h as i,r as j,g as k,w as l,c as m};
