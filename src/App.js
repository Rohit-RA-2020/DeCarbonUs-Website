import { Routes, Route } from "react-router-dom";


import Layout from "./Layout/Layout";
import AboutUsPage from "./Pages/AboutUsPage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage"
function App() {
  return (
    <Layout>
      <Routes>
        <Route Exact path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route Exact path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      <Routes>
        <Route Exact path="/Login&Signup" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
