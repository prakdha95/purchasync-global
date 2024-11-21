import { assets } from '../../assets/images';
import './Services.css'
import { FaArrowRight} from 'react-icons/fa';
import {  MdCampaign } from "react-icons/md";
import { GiShoppingCart,GiProcessor } from "react-icons/gi";
import React, { forwardRef } from 'react';

const Services = forwardRef((props, ref) => {

 
  return (
    <>
      <section className='services_section' ref={ref} id='services'>
        <div className="container">
            <h2>Our Services</h2>
            <div className="underline"></div>
            <p>End-to-End Solutions for Driving Innovation, Efficiency, and Growth Across Marketing, Procurement, Sales and IT.</p>
            <div className="service_cards">
                <div className="card">
                    <div className='image'>
                        <img src={assets.marketing_image} alt="" />
                        <div className='card_icon'> <MdCampaign size={40}/></div>
                    </div>
                    <h4>Marketing Solutions</h4>
                    <p>Our marketing solutions are designed to help your brand connect with the right audience, drive engagement, and achieve measurable results. By leveraging data-driven strategies and innovative techniques, we ensure your brand stands out and grows in an ever-evolving market.</p>
                    <b>Read More <FaArrowRight /></b>
                    <div className="overlay"></div>
                </div>
                <div className="card">
                    <div className='image'>
                        <img src={assets.procurement1_image} alt="" />
                        <div className='card_icon'> <GiShoppingCart size={40}/></div>
                    </div>
                    <h4>Procurement solutions for hospitality</h4>
                    <p>Our procurement services for hospitality streamline sourcing, ensure cost-efficiency, and guarantee the highest quality products. By partnering with trusted suppliers and optimizing your supply chain, we help elevate guest experiences while maintaining operational excellence and sustainability.</p>
                    <b>Read More <FaArrowRight /></b>
                    <div className="overlay"></div>
                </div>
                <div className="card">
                    <div className='image'>
                        <img src={assets.it_solutions} alt="" />
                        <div className='card_icon'> <GiProcessor size={40}/></div>
                    </div>
                    <h4>IT Solutions</h4>
                    <p>Our IT solutions empower your business with innovative technology, seamless integration, and robust support. We provide tailored services that enhance efficiency, secure data, and drive digital transformation, helping you stay competitive and future-ready.</p>
                    <b>Read More <FaArrowRight /></b>
                    <div className="overlay"></div>
                </div>
                
            </div>
        </div>
      </section>
    </>
  )
})

export default Services
