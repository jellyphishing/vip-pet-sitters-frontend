// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import ClientHomePage from "./pages/ClientHomePage/ClientHomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterSitterPage from "./pages/RegisterSitterPage/RegisterSitterPage";
import RegisterClientPage from "./pages/RegisterClientPage/RegisterClientPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <ClientHomePage />
            </PrivateRoute>
          }
        />
        <Route path="/registerClient" element={<RegisterClientPage />} />
        <Route path="/registerSitter" element={<RegisterSitterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="searchResults" element={<SearchResultsPage />} />
        <Route path="/sitterDetails" element={<SitterDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
