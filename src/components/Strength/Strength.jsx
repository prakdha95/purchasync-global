
import './Strength.css'
import { SlLayers } from "react-icons/sl";
import { IoGitNetworkOutline } from "react-icons/io5";
import { MdOutlineDataSaverOn } from "react-icons/md";

const Strength = () => {
  return (
    <>
      <section className='strength_section'>
        <div className="container">
            <h2>Our Strength</h2>
            <div className="underline"></div>
            {/* <p>Tailored consulting solutions that redefine possibilities and drive business innovation with a client-centric approach at SUP Solutions</p> */}
            <div className="service_cards">
                <div className="card">
                    <div className='image'>
                    <SlLayers size={60} color='#1243a8'/>
                    </div>
                    <h4>Experience</h4>
                    <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>
                </div>
                <div className="card">
                    <div className='image'>
                    <IoGitNetworkOutline size={60} color='#1243a8'/>
                    </div>
                    <h4>Network</h4>
                    <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>
                </div>
                <div className="card">
                    <div className='image'>
                    <MdOutlineDataSaverOn size={60} color='#1243a8' />
                    </div>
                    <h4>Values</h4>
                    <p>Our sustainable solutions integrate ESG principles into your supply chain, driving environmental and social impact for long-term success and resilience.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Strength
