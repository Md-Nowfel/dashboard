import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Overview from "../../components/Overview/Overview";
import Header from "../../components/Header/Header";
import ProductActivity from "../../components/ProductActivity/ProductActivity";
import ProductList from "../../components/ProductList/ProductList";
import Chart from "../../components/Chart/Chart";
import { MainDashboard, ProductSection } from "./Dashboard.styles";

function Dashboard() {
  return (
    <DashboardLayout>
      <Header />
      <MainDashboard>
        <Overview />
        <ProductSection>
          <ProductActivity />
          <Chart />
        </ProductSection>
        <ProductList />
      </MainDashboard>
    </DashboardLayout>
  );
}

export default Dashboard;
