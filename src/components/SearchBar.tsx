import React, { ChangeEvent } from "react";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
  position: relative;
  margin-top: 32px;
  margin-bottom: 16px;
  width: 100%;
  max-width: 648px;
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid var(--border-color);
  padding-left: 40px;
  &::placeholder {
    font-style: italic;
    font-family: var(--font-family);
    font-size: 14px;
    font-weight: 400;
    color: var(--text-color);
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 14px;
  left: 14px;
`;

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <SearchBarWrapper>
      <SearchIcon src="src/assets/searchIcon.svg" alt="search_icon" />
      <SearchBarInput
        placeholder="Search"
        value={searchQuery}
        onChange={onSearchChange}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
