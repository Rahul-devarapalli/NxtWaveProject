import { Route, Routes } from "react-router-dom";
import { CreateResourcePage } from "./pages/CreateResourcePage";
import { ResourcesPage } from "./pages/ResourcesPage";
import LoginPage from "./pages/LoginPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/resources/add-resource" element={<CreateResourcePage />} />
    </Routes>
  );
};
