import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Dashboard/innerPages/main";
import SoarHeath from "./pages/Dashboard/innerPages/sora-health";
import CareGiver from "./pages/Dashboard/innerPages/care-giver";
import Benefits from "./pages/Dashboard/innerPages/benefits";
import MedicalRecord from "./pages/Dashboard/innerPages/medical-record";
import PastVisit from "./pages/Dashboard/innerPages/medical-record/pages/past-visit";
import Medications from "./pages/Dashboard/innerPages/medical-record/pages/medications";
import Allergies from "./pages/Dashboard/innerPages/medical-record/pages/allergies";
import CareTeam from "./pages/Dashboard/innerPages/medical-record/pages/care-team";
import Conditions from "./pages/Dashboard/innerPages/medical-record/pages/conditions";
import Privacy from "./pages/Dashboard/innerPages/privacy";
import Settings from "./pages/Dashboard/innerPages/settings";
import LoginPage from "./pages/Auth";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {" "}
                <Dashboard />{" "}
              </ProtectedRoute>
            }
          >
            <Route index element={<Main />} />
            <Route path="sora-health" element={<SoarHeath />} />
            <Route path="care-giver" element={<CareGiver />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="medical-record" element={<MedicalRecord />}>
              <Route path="past-visit" element={<PastVisit />} />
              <Route path="medications" element={<Medications />} />
              <Route path="allergies" element={<Allergies />} />
              <Route path="care-team" element={<CareTeam />} />
              <Route path="conditions" element={<Conditions />} />
            </Route>
            <Route path="privacy" element={<Privacy />} />

            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
