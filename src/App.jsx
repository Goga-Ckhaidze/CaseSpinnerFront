import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import CasePage from "./pages/CasePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/case/:caseTitle" element={<CasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
