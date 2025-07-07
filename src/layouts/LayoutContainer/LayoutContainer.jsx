import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { 
  StyledLayoutContainer,
  MainContent,
  StyledContent,
  LargeScreenSidebar
} from "./StyledLayoutContainer";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import ModalSideBar from "../../components/ModalSidebar/ModalSidebar";

const TITLES = {
  "/dashboard": "Dashboard",
  "/products": "Products",
  "/customers": "Customers",
  "/shop": "Shop",
  "/income": "Income",
  "/promote": "Promote",
};

const LayoutContainer = ({ children }) => {
  const location = useLocation();
  const title = TITLES[location.pathname] || "Dashboard";

  // Modal state lifted up
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpenModal() {
    setIsModalOpen((open) => !open);
  }

  return (
    <StyledLayoutContainer>
      <LargeScreenSidebar>
      <Sidebar handleOpenModal={handleOpenModal} />
      </LargeScreenSidebar>
      <StyledContent>
        <Header title={title} handleOpenModal={handleOpenModal} />
        <MainContent>{children}</MainContent>
      </StyledContent>
      <ModalSideBar isModalOpen={isModalOpen} handleOpenModal={handleOpenModal} />
    </StyledLayoutContainer>
  );
};

export default LayoutContainer;
