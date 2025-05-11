import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UnderConstruction from '../pages/UnderConstruction';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/underconstruction" element={<UnderConstruction />} />
    <Route path="/notfound" element={<NotFound />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;