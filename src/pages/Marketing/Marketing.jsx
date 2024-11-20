import './Marketing.css'
import {assets} from '../../assets/images'

const Marketing = () => {
  return (
    <>
      <section className='marketing_section'>
        <div className="container">
          <h2>Scope 3 ESG Solutions</h2>
          <div className="underline"></div>
          <p>Tailored consulting solutions that redefine possibilities and drive business innovation with a client-centric approach at SUP Solutions</p>
        </div>
      </section>

        <section className='marketing_intro_section'>
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
        <section className='marketing_intro_section'>
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

export default Marketing
