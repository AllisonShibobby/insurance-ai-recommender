import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questionnaire from './pages/Questionnaire';
// import ResultPage from './pages/ResultPage';
import Recommendation from './pages/Recommendation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/questionnaire" element={<Questionnaire />} />
        {/* <Route path="/result" element={<ResultPage />} /> */}
        <Route path="/recommendation" element={<Recommendation />} />
      </Routes>
    </Router>
  );
}

export default App;
