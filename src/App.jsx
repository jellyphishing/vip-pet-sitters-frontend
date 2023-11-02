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

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ResultsList from "./components/ResultsList/ResultsList";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { FileUpload } from "./FileUpload";

function App() {
  return (
    <div>
      <div className="App">
        <FileUpload />
      </div>
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
        <Route path="/search" element={<SearchPage />} />
        <Route path="/sitterDetails" element={<SitterDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
