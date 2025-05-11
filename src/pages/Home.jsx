import MainLayout from '../layouts/MainLayout';
import GoBackButton from '../components/GoBackButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  return (
    <MainLayout>
      <section aria-label="Hero slideshow" className="pt-20 sm:pt-24">
      <Swiper loop aria-roledescription="carousel">
        <SwiperSlide>
          <div className="min-h-[60vh] sm:min-h-[75vh] flex flex-col items-center justify-center bg-blue-100 text-center px-4">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">Github Actions working..</h1>
            <p className="text-base sm:text-lg text-gray-800 max-w-lg">
              We deliver quality and value through innovation and experience.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[60vh] sm:min-h-[75vh] flex flex-col items-center justify-center bg-green-100 text-center px-4">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">Your Success is Our Mission</h1>
            <p className="text-base sm:text-lg text-gray-800 max-w-lg">
              Join thousands who trust us to elevate their digital presence.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
      <GoBackButton/> 
    </MainLayout>
  );
};

export default Home;