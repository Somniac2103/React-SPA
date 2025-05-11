import MainLayout from '../layouts/MainLayout';
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
  return (
    <MainLayout>
      <section className="home" aria-label="Hero slideshow" >
      <Swiper
          aria-roledescription="carousel"
          aria-label="Lastest updates, Currently working on and future plans"
          role="region"
          aria-live="polite"
          modules={[Navigation, Pagination, Autoplay, EffectFade]}

          pagination={{ clickable: true }}

          autoplay={{ 
            delay: 1000, 
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
        <SwiperSlide role="group" aria-label="Slide 1 of 3">
          <div className="slide">
            <h2>What is New on the Website:</h2>
            <ul>
              <li>Linux Server Configured and Hardened</li>
              <li>Docker Compose serving images</li>
              <li>GitHub Actions implemented to built and push images to Docker hub</li>
              <li>Git version control implemented with pull request protection</li>
              <li>Reverse Proxy Nginx Configured and firewall implemented</li>
              <li>React Homepage created with React Router</li>
              <li>SASS design system implemented</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide role="group" aria-label="Slide 2 of 3">
          <div className="slide">
            <p>Coming this week:</p>
            <ul>
              <li>Jenkins configuration with Github hook</li>
              <li>PostgreSql Database establish for datadriven website</li>
              <li>About page to be created</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide role="group" aria-label="Slide 3 of 3">
          <div className="slide">
            <h2>Roadmap</h2>
            <ul>
              <li>JavaScript, Python and PHP webs servers</li>
              <li>JavaScript, Python and PHP API servers</li>
              <li>JavaScript website</li>
              <li>Python website</li>
              <li>PHP Classbase MVC website</li>
              <li>Bootstrap/TailwindCSS website</li>
              <li>WordPress website with custom theme and plugins</li>
              <li>MySql and MongoDB databases implementation</li>
              <li>Ansible, Terrafrom and Kubernetes</li>
              <li>Azure implementation for scaling</li>
              <li>Exciting time!!</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
      <GoBackButton/> 
    </MainLayout>
  );
};

export default Home;