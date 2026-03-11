import{d as r,a as o}from"./ui-vendor-BVv7PGpf.js";const t=r.section`
  padding: 0 4rem 1rem 4rem;
  max-width: 98%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 2rem 1rem 2rem;
  }
`,n=r.div`
  max-width: 98%;
  margin: 0 auto;
`,m=r.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,d=r.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 0.75rem;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }
    cursor: grab;
    user-select: none;
  }
`,i=r.div`
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  color: ${({active:e})=>e?"var(--primary-light)":"#000"};

  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
  position: relative;
  white-space: nowrap;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    background: ${({active:e})=>e?"var(--primary-light)":"#f5f5f5"};
    color: ${({active:e})=>e?"#fff":"#222"};
    &:hover {
      background: var(--primary-light);
      box-shadow: ${({active:e})=>e?"0 2px 8px rgba(0,0,0,0.08)":"none"};
    }
  }
`,s=r(o.span)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0.25rem;
  border-radius: 2px;
  background: var(--primary-color);
  width: 100%;
  transition: background 0.3s;
  transform-origin: left;
  @media (max-width: 768px) {
    display: none;
  }
`,p=r.div`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
  margin: 0 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`,l=r(i)`
  color: #ef4444;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    background: ${({active:e})=>e?"#EF4444":"#f5f5f5"};

    color: ${({active:e})=>e?"#fff":"#222"};
    &:hover {
      background: #ef4444;
      color: #fff;
    }
  }
`,c=r.div`
  display: flex;
  align-items: center;
`,g=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,f=r.button`
  background: transparent;
  border: 1px solid var(--primary-light);
  border-radius: 0.625rem;
  color: var(--primary-light);
  font-size: 0.95rem;
  font-weight: 500;

  margin-bottom: 1rem;
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
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    width: 100%;
    margin: 0 auto 1rem;
  }
`,x=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
  background-color: #fff;
`,h=r.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,b=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
  background-color: #fff;
`,u=r.p`
  color: #ef4444;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`,w=r.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;r.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 2rem;
  display: block;
  text-wrap: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
  margin: 2rem auto;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }
`;r.button`
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 2rem;
  display: block;
  text-wrap: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
  margin: 2rem auto;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }
`;r.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    text-align: right;
  }
`;export{n as C,p as D,b as E,g as G,m as H,x as L,s as M,d as N,w as R,t as S,i as T,c as W,h as a,u as b,l as c,f as d};
