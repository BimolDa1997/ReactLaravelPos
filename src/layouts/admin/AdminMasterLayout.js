import React from "react";
import { Route, Routes, redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../../components/Dashboard";
import Footer from "./Footer";
import CustomRouter from "../../routes/CustomRouter";
export default function AdminMasterLayout() {
  return (
    <>
      <body id="page-top">
        <div id="wrapper">
          <Sidebar></Sidebar>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Header></Header>

              <div class="container-fluid">
                test
                <Routes>
                  {CustomRouter.map((route, idx) => {
                    return (
                      route.component && (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={(props) => <route.component {...props} />}
                        />
                      )
                    );
                  })}
                  <redirect from="admin" to="/admin/dashboard"></redirect>
                </Routes>
              </div>
            </div>

            <Footer></Footer>
          </div>
        </div>
      </body>
    </>
  );
}
