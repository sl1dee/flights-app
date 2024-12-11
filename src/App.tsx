import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketsPage from "@pages/tickets-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
