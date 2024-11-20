import { assets } from '../../assets/images';
import './About.css'
import { FaEye ,FaHandshake  } from 'react-icons/fa';
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
  return (
    <>
      <section className='about_section'>
        <div className="container">
          <h2>About Us</h2>
          <div className="underline"></div>
          <p>Tailored consulting solutions that redefine possibilities and drive business innovation with a client-centric approach at SUP Solutions</p>
          <div className="service_cards">
            <div className="card">
              <div className='image'>
                <img src={assets.service1} alt="" />
                <div className='card_icon'> <TbTargetArrow size={40} /></div>
              </div>
              <h4>Our Mission</h4>
              <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>
            </div>
            <div className="card">
              <div className='image'>
                <img src={assets.service2} alt="" />
                <div className='card_icon'> <FaEye size={40} /></div>
              </div>
              <h4>Our Vision</h4>
              <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>             
            </div>
            <div className="card">
              <div className='image'>
                <img src={assets.service3} alt="" />
                <div className='card_icon'> <FaHandshake  size={40} /></div>
              </div>
              <h4>Our Values</h4>
              <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>
            </div>
          </div>
        </div>
      </section>

        <section className='about_intro_section'>
          <div className="container">
            <div className="left">
              <h2>STRATEGIC EXCELLENCE, TIMELY IMPACT: ELEVATE YOUR BUSINESS JOURNEY:</h2>
              <div className='underline'></div>
              <p>At SUP Solutions, we're more than just consultants — we're catalysts for your success story. Established with a vision to redefine industry standards, we specialize in offering innovative consultancy services tailored to your unique needs. We stand out for our unwavering dedication to service excellence. With a team of industry experts, creative thinkers, and client-focused professionals, we bring a blend of expertise and innovation to every project. Our commitment to transparency, integrity, and delivering beyond expectations sets us apart.</p>
            </div>
            <div className="right">
              <img src={assets.intro_image} alt="" />
              {/* <div className="overlay"></div> */}
            </div>
          </div>
        </section>
    </>
  )
}

export default About;
