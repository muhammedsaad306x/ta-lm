import{d as n}from"./ui-vendor-BVv7PGpf.js";const o=n.section`
  width: 100%;
  padding: ${({padding:e})=>e||"2.5rem 4rem 2rem 4rem"};
  background: ${({backgroundColor:e})=>e||"#fff"};
  @media (max-width: 768px) {
    padding: ${({padding:e})=>e||"2.5rem 2rem 2rem 2rem"};
  }
  text-align: ${({isRTL:e})=>e?"right":"left"};
`,a=n.h2`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 2rem;
  ${""}
  text-align: ${({isRTL:e})=>e?"right":"left"};
  @media (max-width: 600px) {
    text-align: center;
  }
`,l=n.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  ${""}

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`,r=n.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
  aspect-ratio: 5 / 1;
`,i=n.div`
  background: var(--secondary-color);
  color: #fff;
  border-radius: 8px;
  min-height: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: ${({isRTL:e})=>e?"flex-end":"flex-start"};
  justify-content: center;
  text-align: ${({isRTL:e})=>e?"right":"left"};
  padding: 3rem 1rem;
  font-weight: 600;

  font-size: 1.08rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    background 0.3s,
    color 0.3s;
  color: #014976;

  &:hover {
    color: var(--secondary-color);
  }

  &.with-image:hover {
    background: none;
  }

  &:hover ${r} {
    opacity: 1;
  }

  &:hover .card-overlay {
    opacity: 1;
  }
  @media (min-width: 1440px) {
    padding: 4rem 1rem;
  }
`,d=n.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 2;
`,s=n.div`
  position: relative;
  z-index: 3;
  width: 100%;
`,m=n.div`
  font-weight: 700;
  font-size: 1.08rem;
  margin-bottom: 0.25rem;
  text-align: ${({isRTL:e})=>e?"right":"left"};
`,h=n.div`
  font-weight: 400;
  font-size: 0.95rem;
  opacity: 0.95;
  color: #fff;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  text-overflow: ellipsis;
  line-height: 1.4;
  text-align: ${({isRTL:e})=>e?"right":"left"};

  /* Make DangerouslyInnerHTML wrapper transparent to line-clamp */
  .dangerously-inner-html {
    display: contents;
  }

  /* Style paragraphs as normal paragraphs */
  .dangerously-inner-html p {
    display: inline;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: normal;
    line-height: inherit;
    color: inherit;
  }

  /* Convert other block elements to inline for proper line-clamp behavior */
  .dangerously-inner-html div,
  .dangerously-inner-html h1,
  .dangerously-inner-html h2,
  .dangerously-inner-html h3,
  .dangerously-inner-html h4,
  .dangerously-inner-html h5,
  .dangerously-inner-html h6,
  .dangerously-inner-html ul,
  .dangerously-inner-html ol,
  .dangerously-inner-html li {
    display: inline;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: normal;
  }

  /* Remove line breaks and list markers */
  .dangerously-inner-html br {
    display: none;
  }

  .dangerously-inner-html ul,
  .dangerously-inner-html ol {
    list-style: none;
  }

  /* Ensure text elements flow inline with normal styling */
  .dangerously-inner-html span,
  .dangerously-inner-html a,
  .dangerously-inner-html strong,
  .dangerously-inner-html b,
  .dangerously-inner-html em,
  .dangerously-inner-html i {
    display: inline;
    font-weight: inherit;
    font-style: inherit;
  }

  /* Normal link styling */
  .dangerously-inner-html a {
    color: inherit;
    text-decoration: underline;
  }

  ${i}:hover & {
    color: var(--secondary-color);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    -webkit-line-clamp: 2;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    -webkit-line-clamp: 2;
  }
`;n.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 2rem;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 150px;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    min-width: 120px;
  }
`;export{i as C,l as G,o as S,a as T,r as a,d as b,s as c,m as d,h as e};
