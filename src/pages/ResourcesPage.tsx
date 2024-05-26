import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Card, CardDetails } from "../components/Card";
import { useEffect, useState } from "react";
import { getResourcesList } from "../api/resources";

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
  margin: 0px 190px;
`;

export const ResourcesPage = () => {
  const [data, setData] = useState<CardDetails[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {data && data.map((item, index) => <Card key={index} data={item} />)}
          {!loading && !error && !data && <div>No data available</div>}
        </CardWrapper>
      </ResourcePageWrapper>
    </>
  );
};
