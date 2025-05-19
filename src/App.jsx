import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './layouts/ScrollToTop';

function App() {
  return (
      <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <AppRoutes />
      </BrowserRouter>  
      </HelmetProvider>    
  );
}

export default App;