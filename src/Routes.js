import React from "react";
import Homepage from "pages/Homepage";
import Withdraw from "pages/Withdraw";
import Launchpad from "pages/Launchpad";
import LabsOne from "pages/LabsOne";
import Deposit from "pages/Deposit";
import BasicExchange from "pages/BasicExchange";
import AdvanceExchange from "pages/AdvanceExchange";
import Info from "pages/Info";
import Savings from "pages/Savings";
import Labs from "pages/Labs";
import One from "pages/One";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/one" element={<One />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/info" element={<Info />} />
        <Route path="/advanceexchange" element={<AdvanceExchange />} />
        <Route path="/basicexchange" element={<BasicExchange />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/labsone" element={<LabsOne />} />
        <Route path="/launchpad" element={<Launchpad />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
