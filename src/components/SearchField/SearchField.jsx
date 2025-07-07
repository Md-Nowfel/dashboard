import React from "react";
import styled from "styled-components";
import { Search } from "react-feather";

const SearchFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-light);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  width: 310px;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled.span`
  font-size: 1.2rem;
  color: var(--color-dark-gray);
  margin-right: 0.5rem;
  align-self: flex-end;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: var(--font-size-medium);
  color: var(--color-dark-gray);
  width: 100%;

  &::placeholder {
    color: var(--color-mutedText);
  }
`;

const SearchField = () => {
  return (
    <SearchFieldWrapper>
      <SearchIcon>
        <Search color={"var(--color-mutedText)"} />
      </SearchIcon>
      <SearchInput type="text" placeholder="Search anything..." />
    </SearchFieldWrapper>
  );
};

export default SearchField;
