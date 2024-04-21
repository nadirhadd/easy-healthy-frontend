import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TanyaDokter from "./pages/TanyaDokter";
import "./index.css";
import JadwalDokter from "./pages/JadwalDokter";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/tanya-dokter" Component={TanyaDokter} />
      <Route path="/schedule" Component={JadwalDokter} />
    </Routes>
  );
};

export default App;
