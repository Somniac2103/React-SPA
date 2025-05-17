// Components
import MainLayout from '../layouts/MainLayout';
import PageMetaBox from '../components/PageMetaBox';
import GoBackButton from '../components/GoBackButton';

// Styles
import '../styles/home.scss';

//Icons
import { MdEmail, MdPhone } from 'react-icons/md';

//Images
import ProfilePic from "../assets/img/Profile pic.webp";
import LinkedinLogo from "../assets/img/logos/Linkedin Logo.webp";
import GithubLogo from "../assets/img/logos/Github Logo.webp";
import FacebookLogo from "../assets/img/logos/Facebook Logo.webp";
import InstagramLogo from "../assets/img/logos/Instagram Logo.webp";
import Email from "../assets/img/logos/Instagram Logo.webp";
import Telephone from "../assets/img/logos/Instagram Logo.webp";


const About = () => { 
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
      <section className="main" aria-label="Main" >
        <h2>About us... uhm me </h2>
        <section className='introduction'>
            <img src={ProfilePic} alt="Profile Pic of BK Salmon" />
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium provident debitis perferendis dignissimos quae reprehenderit alias! Nihil doloribus vitae praesentium cum voluptatum, aut error in, asperiores, quibusdam consequuntur ipsa et.
                </p>
                <div className='socialstack'>
                    <img src={LinkedinLogo} alt="Linkedin Logo" />
                    <img src={GithubLogo} alt="Github Logo" />
                    <img src={FacebookLogo} alt="Facebook Logo" />
                    <img src={InstagramLogo} alt="Instagram Logo" />
                </div>
            </div>
        </section>
        <section className="cv-section">
        {/* Add downloadable cv */}
        </section>
        <section className="contactMe-section">
            <p>Let's get in touch</p>
            <div className="contactStack">
                <img src={Email} alt="Email image" />
                <img src={LinkedinLogo} alt="Linkedin Logo" />
                <img src={Telephone} alt="Telephone iamge" />
                {/* TODO: GET IMAGES AND CREATE LINKS */}
            </div>
        </section>

        </section>
     
      <GoBackButton/> 
    </MainLayout>
  );
};

export default About;