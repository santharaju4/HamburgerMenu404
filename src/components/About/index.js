// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="home-container">
    <Header />
    <div className="home-image-container">
      <img
        className="mobile-home-image"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <img
        className="desktop-home-image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About
