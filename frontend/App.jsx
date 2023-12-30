import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import { createClient } from "@connect2ic/core";
import { defaultProviders} from "@connect2ic/core/providers";
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react";
import Home from "./components/pages/home/Home";
import Marketplace from "./components/pages/marketplace/Marketplace";
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualFarmCards from "./components/pages/farm/cards/IndividualFarms";
import TeamPage from './components/pages/home/Team'
import Jobs from "./components/pages/jobs/JobsMain.jsx";
import Docs from "./components/pages/docs/Docs.jsx"
import Resources from "./components/pages/resources/Resources.jsx"
import Farm from "./components/pages/farm/Farms.jsx"
import Governance from "./components/pages/governance/Governance.jsx"

function App() {
  return (
    <Router> {/* Wrap the components inside Router */}
      <div className="App">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<TeamPage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/marketplace/:category" element={<Marketplace />} />
            <Route path="/indfarm/:farmId" element={<IndividualFarmCards />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:category" element={<Jobs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:category" element={<Resources />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/farm/:category" element={<Farm />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/governance/:category" element={<Governance />} />
            {/* <Route path="/hub" element={<Hub />} />
            <Route path="/hub/:category" element={<Hub />} />
            <Route path="/proposals" element={<div>Proposals Page</div>} />
            <Route path="/forum" element={<div>Forum Page</div>} />
            <Route path="/rewards" element={<div>Rewards Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/register-farm" element={<FarmRegistration />} />
            <Route path="/register-member" element={<MemberRegistration />} /> */}
          </Routes>
      </div>
    </Router>
  );
}

const client = createClient({
  // ... your canister configuration
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
});

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
);
