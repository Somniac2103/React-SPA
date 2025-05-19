
// Components
import SEO from '../layouts/SEO';
import MainLayout from '../layouts/MainLayout';
import PageMetaBox from '../components/PageMetaBox';
import GoBackButton from '../components/GoBackButton';
import ExternalLinkIconCard from '../components/ExternalLinkIconCard';

// Styles
import '../styles/about.scss';

//Images
import ProfilePic from "../assets/img/Profile pic.webp";
import LinkedinLogo from "../assets/img/logos/Linkedin Logo.webp";
import GithubLogo from "../assets/img/logos/Github Logo.webp";
import FacebookLogo from "../assets/img/logos/Facebook Logo.webp";
import InstagramLogo from "../assets/img/logos/Instagram Logo.webp";
import EmailPic from "../assets/img/utility/email.webp";
import TelephonePic from "../assets/img/utility/call.webp";
import ResumePic from "../assets/img/utility/resume.webp";



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

  const preloadAssets = [ProfilePic];

  return (
    <>
    <SEO title = "BK Salmon-About | Software Developer" 
      description = "Barry Keith Salmon is a UK-based software developer and retired Air Force Major with 16+ years of experience in aviation, training, and tech leadership. He specializes in Python, React, full-stack development, and system security."
      keywords = "Barry Keith Salmon, software developer, Python developer, React developer, full-stack web developer, JavaScript developer, cyber security"
      image = "https://bksalmon.com/og-image.jpg"
      url = "https://bksalmon.com"
    />      
    
    <MainLayout  preloadAssets={preloadAssets}>
      <PageMetaBox metadata={$pageMetaData}/>
      <section className="main" aria-label="Main" >
        <h2>About us... uhm me </h2>
        <section className='introduction'>
          <div>
             <img src={ProfilePic} alt="Profile Pic of BK Salmon" className='profilepic'/>
            <div>
                <p>
                  Born and raised in South Africa, I attended Willem Cruywagen and M.W. De Wet Primary Schools, followed by Marais Viljoen Technical High School, where I built a strong foundation in mathematics, physics, electronics, and computer studies.
                </p>
                <p>
                  In 2003, I joined the South African Air Force as a student navigator and completed a Higher Certificate in Military Studies (Technology), focusing on aeronautical science, calculus, and physics. I earned my navigator wings in 2008 and was assigned to 35 Squadron as a maritime and electronic warfare navigator on the C47TP, supporting surveillance and anti-piracy missions. During this time, I completed a Bachelor’s in Technology and Defence Management, majoring in aeronautical science, Java programming, strategy, electronic warfare, and management.
                </p>
                <p>
                  Over the next decade, I served in diverse roles including Tactical Coordinator at 22 Squadron, aircrew instructor at 80 Air Navigation School, and trainee Weapon Systems Officer at 16 Squadron, the SAAF’s attack helicopter unit. I retired as a Major after 16 years of service.
                </p>
                <p>
                 Following my military career, I spent two years traveling across Southeast Asia, where I discovered a passion for software development. I’ve since relocated to the UK to pursue this new path and apply my skills in the tech industry.
                </p>

          </div>
           
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
            </div>
        </section>
        <section className="work-section">
          <h3>Working Preferences:</h3>
          <p><strong>Currently open for work</strong>, and actively looking for work meeting the following criteria:</p>
          <div className='icon'>&#128195;</div>
          <h4>Job Roles:</h4>
          <p>Software Developer</p>
          <p>Python Developer</p>
          <p>JavaScript/React Developer</p>
          <p>Fullstack Web Developer</p>
          <h4>Terms:</h4>
          <p>&#8987;Full time</p>
          <h4>Locations:</h4>
          <p>Currently have a flexible living arrangement and can relocate immediately</p>
          <p><strong>Onsite:</strong> Any City </p>
          <p><strong>Hybrid:</strong> Any City </p>
          <p><strong>Remote:</strong> Anywhere in United Kingdom</p>
        </section>
        <section>
          <h5>You can download all versions of my CV using the links below:</h5>
          <div className="cv-stack">
            <ExternalLinkIconCard
              target={{
              filePath: "/assets/documents/cv/BK%20Salmon%20-%20Software%20Developer%20CV.pdf",
              label: "View Software Developer CV (PDF)",
              icon: ResumePic
              }}
            />
            <ExternalLinkIconCard
              target={{
              filePath: "/assets/documents/cv/BK%20Salmon%20-%20Python%20Developer%20CV.pdf",
              label: "View Python Developer CV (PDF)",
              icon: ResumePic
              }}
            />
            <ExternalLinkIconCard
              target={{
              filePath: "/assets/documents/cv/BK%20Salmon%20-%20JavaScriptReact%20Developer%20CV.pdf",
              label: "View JavaScript/React Developer CV (PDF)",
              icon: ResumePic
              }}
            />
            <ExternalLinkIconCard
              target={{
              filePath: "/assets/documents/cv/BK%20Salmon%20-%20Full-Stack%20Web%20Developer%20CV.pdf",
              label: "View Full-Stack Web Developer CV (PDF)",
              icon: ResumePic
              }}
            />           
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
     
      <GoBackButton/> 
    </MainLayout>
  </>
  );
};



export default About;