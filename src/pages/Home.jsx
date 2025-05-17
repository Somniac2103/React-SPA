import MainLayout from '../layouts/MainLayout';
import PageMetaBox from '../components/PageMetaBox';
import GoBackButton from '../components/GoBackButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import '../styles/home.scss'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Home = () => { 
  let $pageMetaData = {
    design : 'Proprietary Design',
    designsystem : 'Proprietary System',
    style : 'Partial SASS System',
    frontend : 'React',
    backend : 'React Router (SPA)',
    dbDev : 'Coming Soon!',
    test : 'Coming Soon!',
    system : 'Linux Ubuntu Distro',
    network: 'Nginx Reverse Proxy',
    dbOps: 'Coming Soon!',
    infrastructure : '3rd Party VPS',
    cdci : 'GitHub Actions, Docker',
    optAccess: "Partial",
    optSEO: "Partial",
    optPerforamance: "Partial",
    optRespond: "Partial",
    gitrepo : "https://github.com/Somniac2103/React-SPA",
    gitname : "React SPA"
  }
  return (
    <MainLayout>
      <PageMetaBox metadata={$pageMetaData}/>
        <main className='home'>
            <section className="hero-section" aria-label="Hero slideshow" >
          <Swiper
              className='swiper'
              aria-roledescription="carousel"
              aria-label="Lastest updates, Currently working on and future plans"
              role="region"
              aria-live="polite"
              modules={[Navigation, Pagination, Autoplay, EffectFade]}

              pagination={{ clickable: true }}

              autoplay={{ 
                delay: 3000, 
                disableOnInteraction: false, 
                pauseOnMouseEnter: true, 
              }}
              loop={true}

              effect="fade"
              fadeEffect={{ crossFade: true }}

              navigation
              spaceBetween={30}
              slidesPerView={1}

              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 }
              }}
          >
            <SwiperSlide className="slide"role="group" aria-label="Slide 1 of 3">
              <div >
                <h2>What Is New On The Website:</h2>
                <ul>
                  <li>Linux Server Configured And Hardened</li>
                  <li>Docker Compose Serving App Images</li>
                  <li>GitHub Actions Implemented To Built And Push App Images To Docker Hub</li>
                  <li>Git Version Control Implemented With Pull Request Protection</li>
                  <li>Reverse Proxy Nginx Configured And Firewall Implemented</li>
                  <li>React Homepage Created with React Router</li>
                  <li>SASS Design System Implemented</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide" role="group" aria-label="Slide 2 of 3">
              <div>
                <h2>Coming Up This Week:</h2>
                <ul>
                  <li>Jenkins Configuration With Github Hook</li>
                  <li>PostgreSql Database Establish For Datadriven Website</li>
                  <li>About Page To Be Created</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide" role="group" aria-label="Slide 3 of 3">
              <div>
                <h2>Roadmap For The Future</h2>
                <ul>
                  <li>JavaScript, Python and PHP Web App Servers</li>
                  <li>JavaScript, Python and PHP API Servers</li>
                  <li>JavaScript and Python Websites</li>
                  <li>PHP Website Using Class Base MVC</li>
                  <li>Bootstrap/TailwindCSS Website</li>
                  <li>WordPress Website With Custom Theme And Plugins</li>
                  <li>MySql And MongoDB Databases Implementation</li>
                  <li>Ansible, Terrafrom And Kubernetes</li>
                  <li>Azure Implementation</li>
                  <li>Exciting Time!!</li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>   
            <section className='about-section' aria-label="About Me Section">
              
              
            </section>
      </main>
      {/* <GoBackButton/>  */}
    </MainLayout>
  );
};
      

export default Home;