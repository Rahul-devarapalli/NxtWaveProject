import { Route, Routes } from "react-router-dom";
import { CreateResourcePage } from "./pages/CreateResourcePage";
import { ResourcesPage } from "./pages/ResourcesPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ResourcesPage />} />
      <Route path="/add-resource" element={<CreateResourcePage />} />
    </Routes>
  );
};
