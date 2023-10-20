import React from "react";
import $ from "jquery";
import jQuery from "jquery";
import Sidebar from "./layouts/admin/Sidebar";
import Header from "./layouts/admin/Header";
import Footer from "./layouts/admin/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vendor from "./components/Vendor";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import "./assets/admin/css/sb-admin-2.min.css";
import "./assets/admin/vendor/fontawesome-free/css/all.min.css";
import "./assets/admin/vendor/bootstrap/js/bootstrap.bundle";
import "./assets/admin/js/sb-admin-2";

function App() {
  return (
    <>
      <Router>
        <body id="page-top">
          <div id="wrapper">
            <Sidebar></Sidebar>

            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Header></Header>

                <div class="container-fluid">
                  <Routes>
                    <Route path="/admin" Component={Dashboard}></Route>
                    <Route path="/admin/product" Component={Product}></Route>
                    <Route path="/admin/vendor" Component={Vendor}></Route>
                  </Routes>
                </div>
              </div>

              <Footer></Footer>
            </div>
          </div>
        </body>
      </Router>
    </>
  );
}

export default App;
