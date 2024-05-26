import { CardDetails } from "../components/Card";


export const getResourcesList = async (): Promise<CardDetails[]> => {
  const response = await fetch(
    "https://media-content.ccbp.in/website/react-assignment/resources.json"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result: CardDetails[] = await response.json();
  return result;
};
