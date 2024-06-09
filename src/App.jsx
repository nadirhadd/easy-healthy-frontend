import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TanyaDokter from "./pages/TanyaDokter";
import "./index.css";
import JadwalDokter from "./pages/JadwalDokter";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/tanya-dokter" Component={TanyaDokter} />
      <Route path="/schedule" Component={JadwalDokter} />
      <Route path="/login" Component={LoginPage} />
    </Routes>
  );
};

export default App;
