

import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px 0;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 10px;
  border: 1px solid #d7dfe9;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

interface PaginationProps {
  resourcesPerPage: number;
  totalResources: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  resourcesPerPage,
  totalResources,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResources / resourcesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <PageButton
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PageButton>
      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          onClick={() => paginate(number)}
          disabled={currentPage === number}
        >
          {number}
        </PageButton>
      ))}
      <PageButton
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
