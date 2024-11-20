import './Contact.css'

const Contact = () => {
  return (
    <>
      <section className='contact_page_section'>
        <div className="container">
            <h2>Get in touch</h2>
            <div className="underline"></div>
            <p>Let's connect and create something amazing together! Drop us a message below or call us on above given number and let's get started.</p>
            <form>
              <div><input type="text" placeholder='First name'/><input type="text" placeholder='Last name'/></div>
              <div><input type="text" placeholder='Email address'/><input type="text" placeholder='Phone'/></div>
              <div><textarea name="" id="" placeholder='Type Messages ....'></textarea></div>
              <button>Submit</button>
            </form>
            
        </div>
      </section>
    </>
  )
}

export default Contact
