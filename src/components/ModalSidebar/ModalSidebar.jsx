import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import logo from "../../assets/images/logo-light.webp";
import { X } from "react-feather";

function ModalSideBar({ isModalOpen, handleOpenModal }) {
  if (!isModalOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <Header>
          <IconButton type="picture">
            <img src={logo} />
          </IconButton>
          <IconButton type="icon" onClick={handleOpenModal}>
            <X />
          </IconButton>
        </Header>
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

export default ModalSideBar;
