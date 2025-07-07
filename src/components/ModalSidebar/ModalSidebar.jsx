import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import logo from "../../assets/images/logo-light.webp";
import { X } from "react-feather";
import Sidebar from "../Sidebar/Sidebar";

function ModalSideBar({ isModalOpen, handleOpenModal }) {
  if (!isModalOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <FloatIcon>
          <IconButton type="icon" onClick={handleOpenModal}>
            <X/>
          </IconButton>
        </FloatIcon>
          <Sidebar type="mobile"/>
      </Content>
    </Overlay>
  );
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--color-blur);
  display: flex;
  justify-content: flex-start;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: var(--color-background);
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FloatIcon = styled.div`
  position: absolute;
  top: 30px;
  right: 16px; 
`

export default ModalSideBar;
