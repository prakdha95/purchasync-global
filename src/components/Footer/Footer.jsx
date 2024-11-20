import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div>
              <h4>Purchasync<span>Global</span></h4>
              <ul>
                <li>Head Office: Dubai, UAE</li>
                <li>+971-507482498</li>
                <li>info@purchasync.com</li>
              </ul>
            </div>
            <div>
              <h4>Useful Links</h4>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>Marketing</li>
                <li>Consultancy</li>
                <li>Procurement</li>
                <li>IT Solutions</li>
              </ul>
            </div>
            <div>
              <h4>Office Hours</h4>
              <ul>
                <li>Sunday - Friday : 9:00 am - 6:00 pm</li>
                <li>Saturday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">copyright ©2024 Purchasync-Global. All Rights Reserved</div>
      </footer>
    </>
  )
}

export default Footer
