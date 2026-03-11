import{d as i}from"./ui-vendor-DkFBY_P_.js";const e=i.div`
  display: flex;
  align-items: stretch;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,n=i.form`
  width: 50%;

  @media (max-width: 768px) {
    width: 90%;
  }
`,a=i.form`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`,o=i.div``,r=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    align-items: center;
  }
`,d=i.div`
  width: 100%;
`,s=i.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`,c=i.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  width: 467px;
  border: 1px solid var(--primary-light);
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  justify-content: center;
  color: var(--primary-light);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
  }
`,p=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2px;
  margin: 0 25px;
  background-color: transparent;
  position: relative;

  &::before {
    content: "";
    flex-grow: 1;
    width: 1px;
    background-color: #ccc;
  }

  &::after {
    content: "";
    flex-grow: 1;
    width: 1px;
    background-color: #ccc;
  }

  span {
    color: #888;
    font-size: 14px;
    padding: 8px;
    background-color: #fff;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      height: 1px;
      width: auto;
      background-color: #ccc;
    }

    span {
      padding: 0 12px;
      white-space: nowrap;
    }
  }
`,x=i.div`
  display: flex;
  justify-content: space-between;
`,m=i.div`
  text-align: justify;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`,l=i.div`
  background-color: #ffeacc;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0 10px;
  }
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`,g=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  @media (max-width: 576px) {
    gap: 0;
  }
`,f=i.form`
  width: 50%;
  margin-top: 3rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;export{m as C,x as F,l as I,g as L,p as O,o as R,s as S,e as a,n as b,d as c,r as d,c as e,a as f,f as g};
