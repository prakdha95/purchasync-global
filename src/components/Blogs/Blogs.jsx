import { assets } from '../../assets/images';
import './Blogs.css'
import { FaArrowRight,  FaRecycle,FaChartBar } from 'react-icons/fa';
import { MdOutlineNoFood } from "react-icons/md";

const Blogs = () => {
  return (
    <>
      <section className='blogs_section'>
        <div className="container">
            <h2>Blogs</h2>
            <div className="underline"></div>
            <p>Welcome to our Blog! Discover informative and engaging articles on a variety of topics. Let’s dive in!</p>
            <div className="service_cards">
                <div className="card">
                    <div className='image'>
                        <img src={assets.service1} alt="" />
                        {/* <div className='card_icon'> <FaRecycle size={30}/></div> */}
                    </div>
                    <h4>Sustainable Solutions</h4>
                    <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>
                    <b>Read More <FaArrowRight /></b>
                    <div className="overlay"></div>
                </div>
                <div className="card">
                    <div className='image'>
                        <img src={assets.service2} alt="" />
                        {/* <div className='card_icon'> <FaChartBar size={30}/></div> */}
                    </div>
                    <h4>Sustainable Solutions</h4>
                    <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>
                    <b>Read More <FaArrowRight /></b>
                    <div className="overlay"></div>
                </div>
                <div className="card">
                    <div className='image'>
                        <img src={assets.service3} alt="" />
                        {/* <div className='card_icon'> <MdOutlineNoFood size={30}/></div> */}
                    </div>
                    <h4>Sustainable Solutions</h4>
                    <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>
                    <b>Read More <FaArrowRight /></b>
                    <div className="overlay"></div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
