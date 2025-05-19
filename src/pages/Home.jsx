import { useNavigate } from 'react-router-dom';

// Components
import SEO from '../layouts/SEO';
import ExternalLinkIconCard from '../components/ExternalLinkIconCard';
import MainLayout from '../layouts/MainLayout';
import PageMetaBox from '../components/PageMetaBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

//Images
import ProfilePic from "../assets/img/Profile pic.webp";
import LinkedinLogo from "../assets/img/logos/Linkedin Logo.webp";
import GithubLogo from "../assets/img/logos/Github Logo.webp";
import FacebookLogo from "../assets/img/logos/Facebook Logo.webp";
import InstagramLogo from "../assets/img/logos/Instagram Logo.webp";
import EmailPic from "../assets/img/utility/email.webp";
import TelephonePic from "../assets/img/utility/call.webp";
import ResumePic from "../assets/img/utility/resume.webp";

//CSS
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

  // const preloadAssets = [];
  const navigate = useNavigate();
  
  return (
     <>

      <SEO title = "BK Salmon-About | Software Developer" 
        description = "Barry Keith Salmon is a UK-based software developer and retired Air Force Major with 16+ years of experience in aviation, training, and tech leadership. He specializes in Python, React, full-stack development, and system security."
        keywords = "Barry Keith Salmon, software developer, Python developer, React developer, full-stack web developer, JavaScript developer, cyber security"
        image = "https://bksalmon.com/og-image.jpg"
        url = "https://bksalmon.com"
      /> 
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
                delay: 4000, 
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
                    <li>Jenkins Configuration With Github Hook to pull new images from DockerHub completing the CI pipeline</li>
                    <li>Containerized PostgreSql Database Establish For Datadriven Website</li>
                    <li>About Page To Be Created</li>
                    <li>
                      <p>Additional:</p>
                      <ul>
                        <li> Automatic Disaster Recovery implemented for databases and system critical files with redundancy using Jenkins and batch files</li>
                      </ul>
                    </li>
                  </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide" role="group" aria-label="Slide 2 of 3">
              <div>
                <h2>Coming Up This Week (25/05/2025):</h2>
                <ul>
                    <li>Creation of Data-Driven Roles Page with Dynamic Yemplating and Styling</li>
                    <li>Optimisation of Pages Accessiblity, SEO, Performance and Responsivenes</li>
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
              <h2>Work - Live - Play</h2>
              <section className='introduction'>
                  <img src={ProfilePic} alt="Profile Pic of BK Salmon" className='profilepic'/>
                  <p>
                    From Air Force cockpits to code editors — I’ve flown missions, trained aircrews, and battled pirates (seriously). After roaming Southeast Asia, I landed in the UK with a newfound love for software development. Curious how a navigator became a full-stack software dev? Tap in and find out more! 🚀
                  </p>
                  <button onClick={() => navigate('/about')}>About uhm... me Page</button>
                <strong>If you want to see more check out my social accounts:</strong>
                <div className='socialstack'>
                   <ExternalLinkIconCard
                      target={{
                      filePath:  "https://linkedin.com/in/bksalmon",
                      label: "Linkedin",
                      icon: LinkedinLogo
                      }}
                    />
                   <ExternalLinkIconCard
                      target={{
                      filePath:  "https://github.com/Somniac2103",
                      label: "Github",
                      icon: GithubLogo
                      }}
                    />
                   <ExternalLinkIconCard
                      target={{
                      filePath:  "https://www.facebook.com/somniac2103",
                      label: "Facebook",
                      icon: FacebookLogo
                      }}
                    />
                   <ExternalLinkIconCard
                      target={{
                      filePath:  "https://www.instagram.com/somniac2103",
                      label: "Instagram",
                      icon: InstagramLogo
                      }}
                    />
                </div>
              </section>
              <section className="work-section">
                <h3>Working Preferences:</h3>
                <div className='work-section-terms'>
                  <section className='work-section-part'>
                  <p><strong>Currently open for work</strong>, and actively looking for work meeting the following criteria:</p>
                  <h4>Terms:</h4>
                <p>&#8987;Full time</p>
                <h4>Locations:</h4>
                <p>Currently have a flexible living arrangement and can relocate immediately</p>
                <p><strong>Onsite:</strong> Any City </p>
                <p><strong>Hybrid:</strong> Any City </p>
                <p><strong>Remote:</strong> Anywhere in United Kingdom</p>
                </section>
                <section className='work-section-part'>
                  <div className='icon'>&#128195;</div>
                <h4>Job Roles:</h4>
                <p>You can download all versions of my CV using the links below:</p>
                <a href='/assets/documents/cv/BK%20Salmon%20-%20Software%20Developer%20CV.pdf'><p>SoftwareDeveloper</p></a>                
                <a href="/assets/documents/cv/BK%20Salmon%20-%20Python%20Developer%20CV.pdf"><p>Python Developer</p></a>
                <a href="/assets/documents/cv/BK%20Salmon%20-%20JavaScriptReact%20Developer%20CV.pdf"><p>JavaScript/React Developer</p></a>
                <a href="/assets/documents/cv/BK%20Salmon%20-%20Full-Stack%20Web%20Developer%20CV.pdf"><p>Fullstack Web Developer</p></a>
                </section>
                </div>
            </section> 
            <section className="contactMe-section">
                  <h3>Let's get in touch</h3>
                  <div className="contactStack">
                    <ExternalLinkIconCard
                    target={{
                    filePath: "mailto:bksalmon.dev@gmail.com?subject=BK%20Salmon%20-%20Job%20Enquiry",
                    label: "Email me @ BKSalmon.dev@gmail.com",
                    icon: EmailPic
                    }}
                  />  
                  <ExternalLinkIconCard
                    target={{
                    filePath: "https://linkedin.com/in/bksalmon",
                    label: "Connect on Linkedin @ handle bksalmon",
                    icon: LinkedinLogo
                    }}
                  />  
                  <ExternalLinkIconCard
                    target={{
                    filePath: "tel:+447742097145",
                    label: "Call me on (UK) +447742097145",
                    icon: TelephonePic
                    }}
                  /> 
                  </div>
              </section>

        </section>
      </main>
      {/* <GoBackButton/>  */}
    </MainLayout>
    </>
  );
};
      

export default Home;