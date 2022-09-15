import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/globals.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Download from "./pages/Download";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 h-screen">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="download" element={<Download />}>
            <Route index element={<Download />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
