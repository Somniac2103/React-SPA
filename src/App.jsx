import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
      <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>  
      </HelmetProvider>    
  );
}

export default App;