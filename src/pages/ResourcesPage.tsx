// src/components/ResourcesPage.tsx
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Navbar from "../components/Navbar";
import { Card, CardDetails } from "../components/Card";
import { getResourcesList } from "../api/resources";
import Pagination from "../components/Pagination";

const Tab = styled.button<{ active: boolean }>`
  width: 200px;
  height: 40px;
  border: 1px solid #d7dfe9;
  ${(props) =>
    props.active &&
    css`
      background-color: #0b69ff;
      color: #ffffff;
    `}
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
  margin-top: 42px;
`;

const SearchBar = styled.input`
  width: 648px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #d7dfe9;
  margin-top: 32px;
  margin-bottom: 16px;
  margin-right: 491px;
  &::placeholder {
    font-style: italic;
    width: 44px;
    height: 24px;
    padding: 40px;
    font-family: HK Grotesk;
    font-size: 14px;
    font-weight: 400;
    color: #7e858e99;
  }
`;

const SearchIcon = styled.img`
  position: relative;
  width: 12px;
  height: 12px;
  top: 60px;
  left: -550px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
`;

export const ResourcesPage: React.FC = () => {
  const [data, setData] = useState<CardDetails[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterResources, setFilterResources] = useState(data);
  const [activeTab, setActiveTab] = useState("Resources");

  const resourcesPerPage = 6;
  const indexOfLastRes = currentPage * resourcesPerPage;
  const indexOfFirstRes = indexOfLastRes - resourcesPerPage;

  const requestResources = data?.filter((item) => item.tag === "request");
  const userResources = data?.filter((item) => item.tag === "user");

  const ResourcesClick = () => {
    setActiveTab("Resources");
    setFilterResources(data || null);
  };

  const requestClick = () => {
    setActiveTab("request");
    setFilterResources(requestResources || null);
  };

  const userClick = () => {
    setActiveTab("user");
    setFilterResources(userResources || null);
  };

  const currentResources = filterResources?.slice(
    indexOfFirstRes,
    indexOfLastRes
  );

  console.log(requestResources);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getResourcesList();
        setData(result);
        setFilterResources(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar isResourcesPage />
      <ResourcePageWrapper>
        <TabsWrapper>
          <Tab active={activeTab === "Resources"} onClick={ResourcesClick}>
            Resources
          </Tab>
          <Tab active={activeTab === "request"} onClick={requestClick}>
            Requests
          </Tab>
          <Tab active={activeTab === "user"} onClick={userClick}>
            Users
          </Tab>
        </TabsWrapper>
        <SearchIcon src="src\assets\searchIcon.svg" alt="search_icon" />
        <SearchBar
        placeholder="Search"
        />

        <CardWrapper>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {currentResources &&
            currentResources.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          {!loading && !error && !data && <div>No data available</div>}
        </CardWrapper>
        {data && data.length > 0 && (
          <Pagination
            resourcesPerPage={resourcesPerPage}
            totalResources={data.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </ResourcePageWrapper>
    </>
  );
};
