import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children, preloadAssets }) => {
  return (
    <div>
      <Header preloadAssets={preloadAssets}/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;