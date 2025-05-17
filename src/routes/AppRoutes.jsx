import { Routes, Route } from 'react-router-dom';
import UnderConstruction from '../pages/UnderConstruction';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import About from '../pages/About';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/underconstruction" element={<UnderConstruction />} />
    <Route path="/notfound" element={<NotFound />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;