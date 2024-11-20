import { assets } from '../../assets/images'
import Blogs from '../../components/Blogs/Blogs'
import Services from '../../components/Services/Services'
import Strength from '../../components/Strength/Strength'
import './Home.css'

const Home = () => {
  return (
    <>
      <main className='homepage'>
        <section className='hero_section'>
            <div className='hero_info'>
                <h2> Your Partner For<br /><span>Procurement and Marketing</span> </h2>
                <p>Our dedication revolves around translating visions into actionable plans,
                fostering growth, achieving unparalleled profitability and customer service.</p>
            </div>
            <div className="overlay"></div>
        </section>

        <section className='intro_section'>
            <div className="container">
                <div className="left">
                    <h4>Welcome to Global Purchasync!</h4>
                    <h2>Discover Procurement Excellence in Hospitality</h2>
                    <div className='underline'></div>
                    <p>Welcome to SUP Solutions, where excellence meets innovation. We're dedicated to providing unparalleled consultancy services that redefine standards and exceed expectations. As one of the world's leading consulting firms, we prioritize safe, compassionate, and exceptional car e for every client.</p>
                </div>
                <div className="right">
                    <img src={assets.intro_image} alt="" />
                    {/* <div className="overlay"></div> */}
                </div>
            </div>
        </section>
      </main>
      <Services/>
      <Strength/>
      <Blogs/>
    </>
  )
}

export default Home
