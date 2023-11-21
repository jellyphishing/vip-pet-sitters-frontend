// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterSitterPage from "./pages/RegisterSitterPage/RegisterSitterPage";
import RegisterClientPage from "./pages/RegisterClientPage/RegisterClientPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SitterDetailsPage from "./pages/SitterDetailsPage/SitterDetailsPage";
//import SitterHomePage from "./pages/SitterHomePage/SitterHomePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
//import FavoritesList from "./components/FavoritesList/FavoritesList";

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
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/registerClient" element={<RegisterClientPage />} />
        <Route path="/registerSitter" element={<RegisterSitterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/searchPage/*" element={<SearchPage />} />
        <Route
          path="/sitterDetailsPage/:sitterId"
          element={<SitterDetailsPage />}
        />
        {/* <Route path="/sitterHomePage" element={<SitterHomePage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
