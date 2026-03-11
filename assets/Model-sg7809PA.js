import{j as o}from"./map-vendor-bFKnpCbR.js";import{d as t}from"./ui-vendor-DkFBY_P_.js";const d=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 800000;
`,s=t.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
`,a=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`,l=t.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  font-family: Cairo, sans-serif;
`,c=t.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  padding: 0.25rem;
  border-radius: 4px;
  transition: color 0.2s;

  &:hover {
    color: #374151;
  }
`;function x({onClose:e,children:r,modalTitle:i}){return o.jsx(d,{onClick:e,children:o.jsxs(s,{onClick:n=>n.stopPropagation(),children:[o.jsxs(a,{children:[o.jsx(l,{children:i}),o.jsx(c,{onClick:e,children:"×"})]}),r]})})}export{x as M};
