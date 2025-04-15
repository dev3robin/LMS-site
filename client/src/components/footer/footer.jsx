import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
const Footer = () => {
  return (
    <div className="footerSection">
        <div className="footer-qoutes">
        Self-education is, I firmly believe,<br /> <i>the only kind of education there is.</i>
        </div>
        <hr />
        <div className="topskills">
          <div className="footerheading">Explore top skills and certifications</div>
          <div className="skills">
            <div>
              <h1>Certifications by Issuer</h1>
              <li>Certifications</li>
              <li>Amazon Web Services (AWS)</li>
              <li>Six Sigma Certifications</li>
              <li>Microsoft Certifications</li>
              <li>Cisco Certifications</li>
              <li>Tableau Certifications</li>
              <li>See all Certifications</li>
            </div>
            <div>
              <h1>Web Development</h1>
              <li>Web Development</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Angular</li>
              <li>Java</li>
            </div>
            <div>
              <h1>IT Certifications</h1>
              <li>Amazon AWS</li>
              <li>AWS Certified Cloud Practitioner</li>
              <li>AZ-900: Microsoft Azure Fundamentals</li>
              <li>AWS Certified Solutions Architect - Associate</li>
              <li>Kubernetes</li>
            </div>
            <div>
              <h1>Leadership</h1>
              <li>Leadership</li>
              <li>Management Skills</li>
              <li>Project Management</li>
              <li>Personal Productivity</li>
              <li>Emotional Intelligence</li>
            </div>
            <div>
              <h1>Certifications by Skill</h1>
              <li>Cybersecurity Certification</li>
              <li>Project Management Certification</li>
              <li>Cloud Certification</li>
              <li>Data Analytics Certification</li>
              <li>HR Management Certification</li>
              <li>See all Certifications</li>
            </div>
            <div>
              <h1>Data Science</h1>
              <li>Data Science</li>
              <li>Python</li>
              <li>Machine Learning</li>
              <li>ChatGPT</li>
              <li>Deep Learning</li>
            </div>
            <div>
              <h1>Communication</h1>
              <li>Communication Skills</li>
              <li>Presentation Skills</li>
              <li>Public Speaking</li>
              <li>Writing</li>
              <li>PowerPoint</li>
            </div>
            <div>
              <h1>Business Analytics & Intelligence</h1>
              <li>Microsoft Excel</li>
              <li>SQL</li>
              <li>Microsoft Power BI</li>
              <li>Data Analysis</li>
              <li>Business Analysis</li>
            </div>
          </div>
        </div>
        <hr />
        <div className="about">
          <div>
            <h1>About</h1>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Investors</li>
          </div>
          <div>
            <h1>Discovery SelfLearning</h1>
            <li>Get the app</li>
            <li>Teach on SelfLearning</li>
            <li>Plans and Pricing</li>
            <li>Affiliate</li>
            <li>Help and Support</li>
          </div>
          <div>
            <h1>SelfLearning for Business</h1>
            <li>SelfLearning Business</li>
          </div>
          <div>
            <h1>Legal & Accessibility</h1>
            <li>Accessibility statement</li>
            <li>Privacy policy</li>
            <li>Sitemap</li>
            <li>Terms</li>
          </div>
        </div>
        <hr />
        <div className="footer">
          <div>
            <div className="logo">
              <SchoolIcon />
              SelfLearning
            </div>
          </div>
          <div>Cookie settings</div>
          <div className="lan">
            <LanguageIcon />
            English
          </div>
        </div>
    </div>
  )
}

export default Footer