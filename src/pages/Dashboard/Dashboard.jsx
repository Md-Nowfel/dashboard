import React from "react";
import Overview from "../../components/Overview/Overview"; 
import ProductActivity from "../../components/ProductActivity/ProductActivity";
import ProductList from "../../components/ProductList/ProductList";
import Chart from "../../components/Chart/Chart";
import { MainDashboard, ProductSection } from "./Dashboard.styles";

function Dashboard() {
  return (
    <>
      <MainDashboard>
        <Overview />
        <ProductSection>
          <ProductActivity />
          <Chart />
        </ProductSection>
        <ProductList />
      </MainDashboard>
    </>
  );
}

export default Dashboard;
