import { assets } from '../../assets/images';
import './Blogs.css'
import { FaArrowRight } from 'react-icons/fa';


const Blogs = () => {
  return (
    <>
      <section className='blogs_page_section'>
        <div className="container">
            <h2>Blog Posts</h2>
            <div className="underline"></div>
            <p>Welcome to our Blog! Explore insightful articles covering a wide range of topics, from industry trends to expert tips and advice. Dive into engaging content that aims to inform, inspire, and captivate your curiosity. Let’s embark on a journey of discovery together!</p>
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
