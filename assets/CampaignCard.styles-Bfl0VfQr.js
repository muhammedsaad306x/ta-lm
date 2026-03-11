import{d as e}from"./ui-vendor-DkFBY_P_.js";const o=e.div`
  position: relative;
  width: 100%;
  height: 412px;
  @media (min-width: 1200px) {
    height: 350px;
  }
  @media (max-width: 768px) {
    height: 350px;
  }
  @media (max-width: 480px) {
    height: 300px;
  }
`,t=e.button`
  font-family: "Cairo", sans-serif;
  position: absolute;
  bottom: 0rem;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%);
  ${""}
  height: 40px;
  background-color: white;
  color: black;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.75rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`,n=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  transition: transform 0.3s ease;
  aspect-ratio: 4 / 3;
  @media (max-width: 480px) {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    object-fit: fill;
  }
`,m=e.div`
  padding: 0.5rem 0.5rem 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.2rem;
  @media (max-width: 768px) {
    padding: 0.4rem 0.4rem 0.15rem 0.4rem;
    gap: 0.15rem;
  }
  @media (max-width: 480px) {
    padding: 0.15rem 0.15rem 0.1rem 0.15rem;
    gap: 0.1rem;
  }
`,d=e.div`
  max-width: 420px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 0.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  background: #fff;
  text-align: ${({isRTL:i})=>i?"right":"left"};
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  cursor: pointer;

  @media (max-width: 1024px) {
    max-width: 360px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
  }
  &:hover {
    ${t} {
      opacity: 1;
      bottom: 1.5rem;
    }
    ${n} {
      transform: scale(1.05);
    }
  }
`,l=e.div`
  margin: 0.8rem 0;
  text-align: ${({isRTL:i})=>i?"right":"left"};
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.3rem;
  align-items: center;
  min-height: 24px;
  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
    gap: 0.4rem 0.2rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 0.4rem;
    gap: 0.3rem 0.2rem;
  }
`,s=e.span`
  font-size: 0.875rem;
  color: var(--secondary-color);
  font-weight: 500;
  border-radius: 0.375rem;
  padding: 0.1rem 0;
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.05rem 0.35rem;
  }
`,p=e.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--primary-light);
  ${""}
  text-align: ${({isRTL:i})=>i?"right":"left"};
  min-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    min-height: 24px;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    min-height: 24px;
  }
`,h=e.div`
  ${""}
  font-size: 0.875rem;
  margin-bottom: 0.2rem;
  text-align: ${({isRTL:i})=>i?"right":"left"};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

  /* Make DangerouslyInnerHTML wrapper work with line-clamp */
  .dangerously-inner-html {
    display: contents;
  }

  /* Convert all block elements to inline for proper line-clamp behavior */
  .dangerously-inner-html h1,
  .dangerously-inner-html h2,
  .dangerously-inner-html h3,
  .dangerously-inner-html h4,
  .dangerously-inner-html h5,
  .dangerously-inner-html h6 {
    display: block;
    margin: 0;
    ${""}
    line-height: inherit;
    font-size: inherit;
  }

  .dangerously-inner-html p {
    display: inline;
    margin: 0;
    padding: 0;
    line-height: inherit;
  }

  .dangerously-inner-html div {
    display: inline;
    margin: 0;
    padding: 0;
  }

  .dangerously-inner-html ul,
  .dangerously-inner-html ol {
    display: inline;
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: inherit;
  }

  .dangerously-inner-html li {
    display: inline;
    margin: 0;
    padding: 0;
    line-height: inherit;
  }

  strong,
  b {
    font-weight: normal;
  }

  .dangerously-inner-html em,
  .dangerously-inner-html i {
    display: inline;
    font-style: italic;
  }

  .dangerously-inner-html a {
    display: inline;
    color: var(--primary-color);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  .dangerously-inner-html blockquote {
    display: inline;
    margin: 0;
    padding: 0;
    font-style: italic;
    border: none;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.15rem;
    -webkit-line-clamp: 2;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 0.1rem;
    -webkit-line-clamp: 2;
  }
`,g=e.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  flex-direction: ${({isRTL:i})=>i?"row":"row-reverse"};
  width: 100%;
  min-height: 40px;
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 0.15rem;
    min-height: 40px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    min-height: 40px;
    margin-bottom: 0.1rem;
  }
`,x=e.div`
  display: flex;
  align-items: center;
  flex-direction: ${({isRTL:i})=>i?"row":"row-reverse"};
  gap: 0.25rem;
  min-width: 80px;
  border-radius: 0.625rem;
  border: 1px solid var(--primary-light);
  background: #f5f5f5;
  padding: 0.25rem 0.5rem;
  width: 100%;
  max-width: 200px;
  position: relative;
  direction: ltr;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.5rem;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    width: 100%;
    padding: 0.75rem 0.5rem;
    gap: 0.5rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;e.span`
  font-weight: bold;
  font-size: 1.125rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;const c=e.span`
  color: #4b5563;
  font-size: 0.7rem;
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`,w=e.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  flex-grow: 1;
  width: 100%;
  min-height: 40px;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 4px;
    min-height: 80px;
  }
`,r=e.button`
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
  padding: ${({isRTL:i})=>i?"0.64rem 1rem":"0.5rem 0.7rem"};
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
`,f=e(r)`
  background-color: var(--primary-light);
  color: white;
  ${""}

  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: var(--primary-color);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,b=e(r)`
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
`,u=e.img`
  width: 1rem;
  height: 1rem;
  margin-right: ${({isRTL:i})=>i?"0.3rem":"0"};
  margin-left: ${({isRTL:i})=>i?"0":"0.3rem"};
  @media (max-width: 480px) {
    width: 0.85rem;
    height: 0.85rem;
    ${({isRTL:i})=>i&&"margin-right: 0.3rem;"||"margin-left: 0.3rem;"}
  }
`,y=e.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 40px;
  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`,v=e.div`
  flex: 1;
`,k=e.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 0.375rem;
  @media (max-width: 480px) {
    height: 0.25rem;
  }
`,z=e.div`
  height: 100%;
  background-color: var(--primary-light);
  border-radius: 9999px;
  transition: width 0.3s ease;
`,$=e.span`
  font-size: 0.875rem;
  color: #4b5563;
  min-width: 2rem;
  @media (max-width: 480px) {
    font-size: 0.7rem;
    min-width: 1.2rem;
  }
`,P=e.input`
  font-weight: 600;
  font-size: 17px;
  color: #222;
  min-width: 40px;
  max-width: 40px;
  text-align: ${({isRTL:i})=>i?"right":"left"};

  /* Hide spinner arrows in Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  /* Hide spinner arrows in Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  @media (max-width: 480px) {
    min-width: 40px;
    max-width: 100%;
  }
`,C=e.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: ${({isRTL:i})=>i?"row":"row-reverse"};
  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
`;export{w as B,d as C,t as D,o as I,y as P,b as S,l as T,v as a,k as b,z as c,$ as d,n as e,m as f,s as g,p as h,h as i,g as j,C as k,c as l,x as m,P as n,f as o,u as p};
