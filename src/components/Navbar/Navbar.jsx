import { useState } from 'react';
import './Navbar.css'
import { FaCaretDown, FaBars } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/images'

const Navbar = () => {

  const [show, setShow] = useState(true)
  const [showService, setShowService] = useState(true)

  const navigate = useNavigate()

  const handleMenuBtn = () => {
    setShow(prev => !prev)
  }
  const handleServiceBtn = () => {
    setShowService(prev => !prev)
  }

  return (
    <>
      <nav className='main_nav'>
        <div className="container">
          <div onClick={() => navigate('/')} className="logo">
            {/* <h2>Purchasync<span>Global</span></h2> */}
            <img src={assets.logo} alt="" />
          </div>
          <div className="nav_links">
            <ul>
              <li onClick={() => navigate('/')}>Home</li>
              <li onClick={() => navigate('/about')}>About Us</li>
              <li className='services_dropdown'>Services <FaCaretDown />
                <ul>
                  <li onClick={() => navigate('/marketing')}>Marketing </li>
                  <li onClick={() => navigate('/it')}>IT Services</li>
                  <li onClick={() => navigate('/procurement')}>Procurement </li>
                  <li onClick={() => navigate('/sales')}>Sales </li>
                </ul>
              </li>
              <li onClick={() => navigate('/contact')}>Contact Us</li>
              <li onClick={() => navigate('/blogs')}>Blogs</li>
            </ul>
          </div>
          <div className="mobile_btn" onClick={handleMenuBtn}>
            {
              show ? (
                <div className='menu_open'><FaBars size={24} /></div>
              ) : (
                <div className='menu_close'>
                  <div className="mobile_menu_container">
                    <div className='close'>
                      <IoMdClose size={24} />
                    </div>
                    <div className="mob_nav_links">
                      <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/about')}>About Us</li>
                        <li className='mob_services_dropdown' onClick={handleServiceBtn}>
                          Services
                          <FaCaretDown />
                          {showService && (
                            <div>
                              <ul>
                                <li onClick={() => navigate('/marketing')}>Marketing </li>
                                <li onClick={() => navigate('/it')}>IT Services</li>
                                <li onClick={() => navigate('/procurement')}>Procurement </li>
                                <li onClick={() => navigate('/sales')}>Sales </li>
                              </ul>
                            </div>
                          )}
                        </li>
                        <li onClick={() => navigate('/contact')}>Contact Us</li>
                        <li onClick={() => navigate('/blogs')}>Blogs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mobile_overlay"></div>
                </div>
              )
            }


          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar


