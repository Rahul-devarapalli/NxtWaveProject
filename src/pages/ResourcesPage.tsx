import React, { useEffect, useState, useMemo, ChangeEvent } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { CardDetails } from "../components/Card";
import { getResourcesList } from "../api/resources";
import Pagination from "../components/Pagination";
import Tabs from "../components/Tabs";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import { useDebounce } from "../hooks/searchhook";
import GlobalStyle from "../globalStyles";

const ResourcePageWrapper = styled.div`
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ResourcesPage: React.FC = () => {
  const [data, setData] = useState<CardDetails[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Resources");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getResourcesList();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  const filteredResources: CardDetails[] = useMemo(() => {
    if (!data) return [];
    let resources = data;
    if (activeTab === "request") {
      resources = data.filter((item) => item.tag === "request");
    } else if (activeTab === "user") {
      resources = data.filter((item) => item.tag === "user");
    }
    if (debouncedSearchQuery) {
      resources = resources.filter((item) =>
        item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }
    return resources;
  }, [data, activeTab, debouncedSearchQuery]);

  const currentResources = filteredResources.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset pagination when tab changes
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset pagination when search query changes
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <GlobalStyle />
      <Navbar isResourcesPage />
      <ResourcePageWrapper>
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <CardList
          loading={loading}
          error={error}
          resources={currentResources}
        />
        {filteredResources.length > 0 && (
          <Pagination
            resourcesPerPage={6}
            totalResources={filteredResources.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </ResourcePageWrapper>
    </>
  );
};
