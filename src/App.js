import React from "react";
import LandingPage from "./components/LandingPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="flex justify-center app items-center">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;