import { assets } from '../../assets/images'
import Blogs from '../../components/Blogs/Blogs'
import Services from '../../components/Services/Services'
import Strength from '../../components/Strength/Strength'
import Contact from '../../components/Contact/Contact'
import './Home.css'
import React, { useRef } from 'react';

const Home = () => {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <main className='homepage'>
        <section className='hero_section'>
            <div className='hero_info'>
                <h2> Smart Solutions for<br /><span>Marketing, Procurement, IT & Sales</span> </h2>
                <p>Our dedication is centered on transforming your vision into actionable strategies that drive growth and profitability. We focus on optimizing efficiency and delivering exceptional customer service, ensuring long-term success and a competitive edge in the market.</p>
                {/* <button onClick={scrollToSection}>Try Purchasync!</button> */}
            </div>
            <div className="overlay"></div>
        </section>

        <section className='intro_section'>
            <div className="container">
                <div className="left">
                    <h4>Welcome to Purchasync Global!</h4>
                    <h2>Your Path to Effortless Growth in Hospitality</h2>
                    <div className='underline'></div>
                    <p>Unlock the full potential of your hospitality business with our tailored solutions in marketing, procurement, and IT. Our expert team helps streamline your operations, optimize costs, and enhance guest experiences, all while driving sustainable growth. With our innovative strategies and seamless integration, we empower your business to thrive in a competitive and ever-evolving market, ensuring long-term success and resilience. </p>
                </div>
                <div className="right">
                    <img src={assets.growth_image} alt="" />
                    {/* <div className="overlay"></div> */}
                </div>
            </div>
        </section>
      </main>
      <Services ref={sectionRef}/>
      <Strength/>
      <Blogs/>
      <Contact/>
    </>
  )
}

export default Home
