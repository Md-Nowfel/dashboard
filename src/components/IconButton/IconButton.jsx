import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || "var(--color-light)"};
  color: ${(props) => props.color || "var(--color-dark)"};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.type === "picture" &&
    `
    padding: 0px;
  `}

  & img {
    width: 100%;
  }

  &:hover {
    background-color: ${(props) =>
      props.hoverBgColor || "var(--color-dark-hover)"};
  }

  &:active {
    background-color: ${(props) =>
      props.activeBgColor || "var(--color-dark-active)"};
  }
`;

const IconButton = ({
  onClick,
  bgColor,
  color,
  hoverBgColor,
  activeBgColor,
  children,
  type,
}) => {
  return (
    <StyledIconButton
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      hoverBgColor={hoverBgColor}
      activeBgColor={activeBgColor}
      type={type}
    >
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
