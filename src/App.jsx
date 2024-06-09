import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Home, TanyaDokter, JadwalDokter, LoginPage } from "./pages"

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
