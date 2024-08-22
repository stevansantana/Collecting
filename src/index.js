import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RecoilRoot>
      <React.Suspense fallback={<div>Carregando...</div>}>
         <App />
      </React.Suspense>
   </RecoilRoot>
);