import './App.css';
import './grid.scss';
import './spiral.css'
import aboutImg from './assets/about.jpeg';
import quoteImg from './assets/quote.png';
import emailImg from './assets/mail.png';

import img1 from './assets/img_1.jpeg';
import img2 from './assets/img_2.jpg';

import sendEmailImg from './assets/email_sent.gif';

import home from './assets/home.jpg'
import location from './assets/location.png'
import phone from './assets/phone.png'

function App() {
  return (
    <div>
      <section className='banner'>
        <section className='grid grid-cols-1 container banner-content-height'>
          <h1 className='white-color banner-text'>
          Your home away from home.
          </h1>
          <p className='white-color banner-p'>
            Choose one of our locations for your temporary stay.
          </p>
          {/* <a target={'blank'} href="https://www.peerspace.com/pages/listings/6359479cab68cd000ef2124c?utm_source=copy_link&utm_campaign=listing_sharing" class="banner-button"><span className='banner-button-text'>Book Now !!</span></a> */}
          <div className='flex flex-col mt-12'>
            <p className='white-color contact-address contact-phone'>Contact for Booking</p>
            <div className='flex flex-row'>
              <img className='w-5 h-6' src={phone} />
              <a href="tel:240-310-9795" className='white-color contact-address under ml-4'>240-310-9795</a>
            </div>
          </div>
        </section>
       
      </section>
      <section className='section-1 container bg-gradient-to-b from-black mb-12'>
        <h1 className='section-1-text'>Choose one of Holiday homes locations.</h1>
        <ul class="tile-container">
          <li class="tile">
            <img src={img1}/>
          </li>
          <li class="tile">
            <img src={img2}/>
          </li>
          
        </ul>
       
      </section>
      <section className='section-2 container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:p-32 md:p-32'>
          <div>
            <img src={home}/>
          </div>
          <div className='flex flex-col section-2-about-container'>
            <p className='section-2-top'>ABOUT<span className='red-color'>.</span></p>
            <p className='section-2-heading'>HolydayHomes' Identity</p>
            <p className='section-2-p'>
              HolydayHomes was Founded in 2021,<br></br>
              We are a business focused on providing travel professionals with short term rental accommodations
            </p>
            <hr></hr>
            {/* <div className='flex flex-row mt-8'>
              <img className='w-12 h-12' src={quoteImg}/>
              <span className='flex flex-col ml-8'>
                <p>I learned a long time ago that trying to micromanage the perfect vacation is always a disaster. That leads to terrible times<span className='red-color'>.</span></p>
                <p className='mt-2'>- Anthony Bourdain</p>
              </span>
            </div> */}
          </div>
        </div>
      </section>
      <section className='contact-section bg-gradient-to-t from-black'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-white content-center'>
          <div className='p-8'>
            <p className='contact-heading'>Contacts</p>
            <p>Use our contact form for all information requests or contact us directly using the contact information below.
            <br></br><br></br>Feel free to get in touch with us via email or phone</p>
            <br></br>
            <div className='flex flex-row'>
              <img className='w-8 h-8' src={emailImg} />
              <a href='mailto:Holydayhomes21@gmail.com' className='red-color ml-2 underline cursor-pointer' >Holydayhomes21@gmail.com</a>

            </div>
          </div>
          <div className='p-8'>
            <p className='contact-heading blue-color'>Be the first to know about new spaces.</p>
            <p className='contact-newsletter'>Send us an email</p>
            <img className='email-gif' src={sendEmailImg}/>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-8'>
          <div className='flex flex-row'>
            <img className='w-12 h-12' src={location} />
            <div className='flex flex-col ml-4'>
              <p className='white-color contact-address'>Mailing Address</p>
              <p className='white-color contact-address'>1631 Wesel Blvd #1053<br></br>Hagerstown, MD 21740</p>
            </div>
          </div>
          <div className='flex flex-row'>
            <img className='w-12 h-12' src={phone} />
            <div className='flex flex-col ml-4'>
              <p className='white-color contact-address'>Phone</p>
              <a href="tel:240-310-9795" className='white-color contact-address under'>240-310-9795</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
