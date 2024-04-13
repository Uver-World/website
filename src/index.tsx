import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/globals.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Download from "./pages/Download";
import Thanks from "./pages/Download/Thanks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import { UsersList } from "./pages/Admin/UsersList";
import { OrganisationList } from "./pages/Admin/OrganisationList";
import { OrganisationEdit } from "./pages/Admin/OrganisationEdit";
import { ChakraProvider } from "@chakra-ui/react";
import { UserEdit } from "./pages/Admin/UserEdit";
import { PricesList } from "./pages/Prices/PricesList"
import Prices from "./pages/Prices";
import Dashboard from './pages/dashboard';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { ProtectedRoute } from './protected';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const adminGroups = ["Website", "User"];

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <main className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen" style={{
          background: "#D4DCDE"
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />} />
            <Route path="download">
              <Route path="thanks" element={<Thanks />} />
              <Route index element={<Download />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/dashboard" element={<ProtectedRoute groups={adminGroups} child={<Dashboard />} />} />
            <Route path="admin">
              <Route path="users">
                <Route index element={<ProtectedRoute groups={adminGroups} child= {<UsersList />} />} />
                <Route path=":id" element={<ProtectedRoute groups={adminGroups} child= {<UserEdit />} />} />
              </Route>
              <Route path="organisations">
                <Route index element={<ProtectedRoute groups={adminGroups} child= {<OrganisationList />} />} />
                <Route path=":id" element={<ProtectedRoute groups={adminGroups} child= {<OrganisationEdit />} />} />
              </Route>
            </Route>
            <Route path="prices">
              <Route index element={<Prices />} />
              <Route path="1" element={<PricesList />} />
              <Route path="1" element={<PricesList />} />
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
