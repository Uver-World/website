import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/globals.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Download from "./pages/Download";
import Thanks from "./pages/Download/Thanks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {UsersList} from "./pages/Admin/UsersList";
import {ChakraProvider} from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <main className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen" style={{
          background: "#D4DCDE"
        }}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="download">
              <Route path="thanks" element={<Thanks />} />
              <Route index element={<Download />} />
            </Route>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="admin" element={<UsersList/>}>
              <Route index element={<UsersList/>} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
