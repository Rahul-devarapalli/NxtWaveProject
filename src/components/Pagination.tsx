// src/components/Pagination.tsx
import React from "react";
import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 10px;
`;

const PageInfo = styled.span`
  margin: 0 10px;
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <Button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </Button>
      <PageInfo>{`Page ${currentPage} of ${totalPages}`}</PageInfo>
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
