import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";
import Pagination from "../components/Pagination";
import { data } from "../components/data";
import { useState } from "react";

const Tab = styled.button`
  width: 200px;
  height: 40px;
  top: 118px;
  left: 420px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  /* background: #0b69ff; */
  border: 1px solid #d7dfe9;
`;

const ResourcePageWrapper = styled.div`
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TabsWrapper = styled.div`
  width: 600px;
  height: 40px;
  top: 118px;
  border: 1px;
  margin-top: 42px;
`;

const SearchBar = styled.input`
  width: 648px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #d7dfe9;
  color: Grey/60;
  margin-top: 32px;
  margin-right: 491px;
  margin-bottom: 16px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px 194px;
`;

export const ResourcesPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

     const startIndex = (currentPage - 1) * itemsPerPage;
     const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      <Navbar isResourcesPage />
      <ResourcePageWrapper>
        <TabsWrapper>
          <Tab>Resources</Tab>
          <Tab>Requests</Tab>
          <Tab>Users</Tab>
        </TabsWrapper>
        <SearchBar />
        <CardWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
        </CardWrapper>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ResourcePageWrapper>
    </>
  );
};
