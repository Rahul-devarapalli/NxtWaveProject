// src/components/CardList.tsx
import React from "react";
import styled from "styled-components";
import { Card, CardDetails } from "../components/Card";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

interface CardListProps {
  loading: boolean;
  error: string | null;
  resources: CardDetails[];
}

const CardList: React.FC<CardListProps> = ({ loading, error, resources }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (resources.length === 0) return <div>No data available</div>;

  return (
    <CardWrapper>
      {resources.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </CardWrapper>
  );
};

export default CardList;
