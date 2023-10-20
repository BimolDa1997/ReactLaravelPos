import React from "react";
import Vendor from "../components/Vendor";
import Product from "../components/Product";
import Dashboard from "../components/Dashboard";

const CustomRouter = [
  { path: "/admin", exact: true, name: "Dashboard" },
  { path: "/admin/product", exact: true, name: "Product", component: Product },
  { path: "/admin/vendor", exact: true, name: "Vendor", component: Vendor },
];

export default CustomRouter;
