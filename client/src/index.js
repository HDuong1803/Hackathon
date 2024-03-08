import React, { Suspense } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from 'react-dom/client';
import "./i18n";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
