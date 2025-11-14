import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RegionPage } from './pages/RegionPage';
import { LessonPage } from './pages/LessonPage';
import './App.css';

function App() {
  return (
    <Router basename="/JCG-DialectMaterial">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/region/:regionId" element={<RegionPage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
      </Routes>
    </Router>
  );
}

export default App;

