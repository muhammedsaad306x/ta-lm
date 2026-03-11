import{d as a,l as t,m as o}from"./ui-vendor-DkFBY_P_.js";const d=o`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,n=a.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 12px;
  border-bottom: 1px solid #e0e0e0;
  margin: 2rem 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`,r=a.div`
  display: flex;
  font-weight: bold;
  padding: 8px;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 6px;

  @media (max-width: 768px) {
    display: none; /* Hide header on mobile */
  }
`,p=a.div`
  display: flex;
  padding: 8px;
  align-items: center;
  flex-wrap: wrap;
  opacity: ${({isNew:e})=>e?0:1};
  animation: ${({isNew:e})=>e?t`
          ${d} 0.35s ease forwards
        `:"none"};
  background-color: ${({isNew:e})=>e?"rgba(1, 92, 171, 0.06)":"transparent"};
  border-radius: 10px;
`,l=a.div`
  flex: 1;
  min-width: 120px;
  padding: 4px 8px;

  @media (max-width: 768px) {
    flex: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    padding: 6px 0;
    &::before {
      content: attr(data-label);
      font-weight: bold;
    }
  }
`,s=a.p`
  color: ${({status:e})=>e==="Accepted"?"#015CAB":"none"};
  font-weight: 600;
  text-decoration: ${({status:e})=>e==="Accepted"?"underline":"none"};
`,c=a.span`
  border-radius: 8px;
  font-weight: bold;
  color: white;
  color: ${({status:e})=>e==="Case Research"?"#808080":e==="Accepted"?"#015CAB":e==="Rejected"?"#F00000":e==="Information Required"||e==="Initially Accepted"?"#ff9800":"#ccc"};
`,x=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;export{s as C,c as S,n as T,x as a,r as b,l as c,p as d};
