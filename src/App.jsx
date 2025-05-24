import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import OurTeamPage from "./pages/OurTeam";
import EventsPage from "./pages/Events";
import SponsorsAndPartnersPage from "./pages/SponsorsAndPartners";
import PublicationsPage from "./pages/Publications";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        {/* About Us Page */}
        <Route path="/aboutus" element={<AboutUsPage />} />
        {/* Our Team Page */}
        <Route path="/ourteam" element={<OurTeamPage />} />
        {/* Events Page */}
        <Route path="/events" element={<EventsPage />} />
        {/* Sponsors & Partners Page */}
        <Route path="/sponsorsandpartners" element={<SponsorsAndPartnersPage />} />
        {/* Publications Page */}
        <Route path="/publications" element={<PublicationsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
