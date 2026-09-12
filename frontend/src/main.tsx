import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import WelcomePage from "./WelcomePage";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import Workspace from "./Workspace";
import AiHelpPage from "./WorkSpacePages/AiHelpPage";
import PlanningPage from "./WorkSpacePages/PlanningPage";
import SettingsPage from "./WorkSpacePages/SettingsPage";
import StatisticsPage from "./WorkSpacePages/StatisticsPage";
import UserDataPage from "./WorkSpacePages/UserDataPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/planningPage" element={<PlanningPage />} />
        <Route path="/statisticsPage" element={<StatisticsPage />} />
        <Route path="/userDataPage" element={<UserDataPage />} />
        <Route path="/settingsPage" element={<SettingsPage />} />
        <Route path="/aiHelpPage" element={<AiHelpPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
