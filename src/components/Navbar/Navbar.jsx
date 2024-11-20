import { useState } from 'react';
import './Navbar.css'
import { FaCaretDown, FaBars } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [show, setShow] = useState(true)
  const [showService, setShowService] = useState(true)

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
          <div className="logo"><h2>Purchasync<span>Global</span></h2></div>
          <div className="nav_links">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li className='services_dropdown'>Services <FaCaretDown />
                <ul>
                  <li>Marketing </li>
                  <li>IT Services</li>
                  <li>Procurement </li>
                  <li>Sales </li>
                </ul>
              </li>
              <li>Contact Us</li>
              <li>Blogs</li>
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
                        <li>Home</li>
                        <li>About Us</li>
                        <li className='mob_services_dropdown' onClick={handleServiceBtn}>
                          Services
                          <FaCaretDown />
                          {showService && (
                            <div>
                              <ul>
                                <li>Marketing</li>
                                <li>Consulting</li>
                              </ul>
                            </div>
                          )}
                        </li>
                        <li>Contact Us</li>
                        <li>Blogs</li>
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


