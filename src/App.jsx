import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Home, TanyaDokter, JadwalDokter, LoginPage, RegistrationForm } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/tanya-dokter" Component={TanyaDokter} />
      <Route path="/schedule" Component={JadwalDokter} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/regist" Component={RegistrationForm} />
    </Routes>
  );
};

export default App;
