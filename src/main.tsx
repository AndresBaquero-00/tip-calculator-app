import React from 'react';
import ReactDOM from 'react-dom/client';
import { TipCalculatorApp } from './TipCalculatorApp';

import './scss/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
.render(
  <React.StrictMode>
    <TipCalculatorApp />
  </React.StrictMode>
)
