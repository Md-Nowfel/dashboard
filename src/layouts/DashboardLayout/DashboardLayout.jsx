import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  DashboardLayoutContainer,
  MainContent,
} from "./DashboardLayout.styles";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardLayoutContainer>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </DashboardLayoutContainer>
    </>
  );
};

export default DashboardLayout;
