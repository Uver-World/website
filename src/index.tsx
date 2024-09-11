import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/globals.css";
import Header from "./layouts/Header";
import About from "./pages/About";
import { OrganisationEdit } from "./pages/Admin/OrganisationEdit";
import { OrganisationList } from "./pages/Admin/OrganisationList";
import { UserEdit } from "./pages/Admin/UserEdit";
import { UsersList } from "./pages/Admin/UsersList";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import Thanks from "./pages/Download/Thanks";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Dashboard from './pages/dashboard';
import { Login } from './pages/Login';
import Faq from './pages/Faq';
import Marketplace from './pages/Marketplace';
import ProductPage from './pages/ProductPage';
import { PricesList } from "./pages/Prices/PricesList";
import Profile from "./pages/Profile";
import { Register } from "./pages/Register";
import { ProtectedRoute } from "./protected";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <main
          className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          style={{
            background: "#D4DCDE",
          }}
        >
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
            <Route path="faq" element={<Faq />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute
                  permissions={[
                    "organisation.all",
                    "organisation.see",
                    "organisation.edit",
                    "organisation.members.all",
                    "organisation.members.edit",
                  ]}
                  child={<Dashboard />}
                />
              }
            />
            <Route path="admin">
              <Route path="users">
                <Route
                  index
                  element={
                    <ProtectedRoute
                      permissions={[
                        "organisation.all",
                        "organisation.members.all",
                        "organisation.members.edit",
                      ]}
                      child={<UsersList />}
                    />
                  }
                />
                <Route
                  path=":id"
                  element={
                    <ProtectedRoute
                      permissions={[
                        "organisation.all",
                        "organisation.members.all",
                        "organisation.members.edit",
                      ]}
                      child={<UserEdit />}
                    />
                  }
                />
              </Route>
              <Route path="organisations">
                <Route
                  index
                  element={
                    <ProtectedRoute
                      permissions={[
                        "organisation.all",
                        "organisation.see",
                        "organisation.edit",
                      ]}
                      child={<OrganisationList />}
                    />
                  }
                />
                <Route
                  path=":id"
                  element={
                    <ProtectedRoute
                      permissions={["organisation.all", "organisation.edit"]}
                      child={<OrganisationEdit />}
                    />
                  }
                />
              </Route>
            </Route>
            <Route path="prices">
              <Route index element={<Prices />} />
              <Route path="1" element={<PricesList />} />
              <Route path="1" element={<PricesList />} />
            </Route>
            <Route path="product/:id" element={<ProductPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
