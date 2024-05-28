// src/components/Tabs.tsx
import React from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  margin-top: 42px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  height: 40px;
  border: 1px solid var(--border-color);
  background-color: ${( props) =>
    props.$active ? "var(--primary-color)" : "white"};
  color: ${(props ) => (props.$active ? "white" : "black")};
  cursor: pointer;
  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    margin-bottom: 8px;
  }
`;

interface TabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

  
const Tabs: React.FC<TabsProps> = ({ activeTab, onTabClick }) => {
  return (
    <TabsWrapper>
      <Tab
        $active={activeTab === "Resources"}
        
        onClick={() => onTabClick("Resources")}
      >
        Resources
      </Tab>
      <Tab
        $active={activeTab === "request"}
        onClick={() => onTabClick("request")}
      >
        Requests
      </Tab>
      <Tab $active={activeTab === "user"}
       onClick={() => onTabClick("user")}>
        Users
      </Tab>
    </TabsWrapper>
  );
};

export default Tabs;
