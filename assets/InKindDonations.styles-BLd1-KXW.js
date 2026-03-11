import{d as e}from"./ui-vendor-BVv7PGpf.js";import{a4 as t}from"./index-Bz-f-rfY.js";e.section`
  padding: 1rem 4rem;
  background-image: url(${t});
  background-repeat: no-repeat;
  background-position: 4rem 2rem;
  margin-bottom: 5rem;
  text-align: ${({isRTL:r})=>r?"right":"left"};
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;const n=e.form`
  width: 70%;
  margin: 2rem 0;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`,d=e.label`
  font-size: 0.875rem;
  color: #666;
  padding: 0 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;

  ${r=>r.focused&&`
    color: #3B82F6;
  `}
`,m=e.h4`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: ${({isRTL:r})=>r?"right":"left"};
`,p=e.h4`
  text-align: ${({isRTL:r})=>r?"right":"left"};
  margin-bottom: 6px;
  white-space: pre-line;
`,s=e.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary-light);
  }
`,o=e.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  height: 38px;
  overflow: hidden;

  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`,l=e(o)`
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;export{l as A,s as C,n as F,o as I,d as O,m as S,p as T};
