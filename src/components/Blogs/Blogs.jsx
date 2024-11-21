import { assets } from '../../assets/images';
import './Blogs.css'
import { FaArrowRight} from 'react-icons/fa';

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
                        <img src={assets.brand_growth} alt="" />
                        {/* <div className='card_icon'> <FaRecycle size={30}/></div> */}
                    </div>
                    <h4>Driving Brand Growth</h4>
                    <p>How Sustainable Marketing Solutions Can Future-Proof Your Business</p>
                    <b>Read More <FaArrowRight /></b>
                    <div className="overlay"></div>
                </div>
                <div className="card">
                    <div className='image'>
                        <img src={assets.procurement_image} alt="" />
                        {/* <div className='card_icon'> <FaChartBar size={30}/></div> */}
                    </div>
                    <h4>Procurement Services for Hospitality</h4>
                    <p>Optimizing Hospitality Procurement: Strategies for Cost Efficiency and Exceptional Guest Experiences</p>
                    <b>Read More <FaArrowRight /></b>
                    <div className="overlay"></div>
                </div>
                <div className="card">
                    <div className='image'>
                        <img src={assets.tech_image} alt="" />
                        {/* <div className='card_icon'> <MdOutlineNoFood size={30}/></div> */}
                    </div>
                    <h4>Empowering Your Business with Tech </h4>
                    <p>Empowering Your Business with Cutting-Edge IT Solutions for Digital Transformation"</p>
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
