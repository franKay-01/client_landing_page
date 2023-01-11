import './App.css';
import './grid.scss';
import './spiral.css'
import aboutImg from './assets/about.jpeg';
import quoteImg from './assets/quote.png';
import emailImg from './assets/mail.png';
import img1 from './assets/img_1.jpeg';
import img2 from './assets/img_2.jpeg';
import img3 from './assets/img_3.jpeg';
import img4 from './assets/img_4.jpeg';
import img5 from './assets/img_5.jpg';
import img6 from './assets/img_6.jpg';
import img7 from './assets/img_7.jpg';
import img8 from './assets/img_8.jpg';
import img9 from './assets/img_9.jpg';
import img10 from './assets/img_10.jpg';
import sendEmailImg from './assets/email_sent.gif';
import img12 from './assets/img_12.jpg';
import img13 from './assets/img_13.jpg';
import img14 from './assets/img_14.jpg';
import img15 from './assets/img_15.jpg';
import home from './assets/home.jpg'
import location from './assets/location.png'
import phone from './assets/phone.png'

function App() {
  return (
    <div>
      <section className='banner'>
        <section className='grid grid-cols-1 container banner-content-height'>
          <h1 className='white-color banner-text'>
            Not Your Ordinary Meeting Space
          </h1>
          <p className='white-color banner-p'>Choose one of Holiday homes locations for your meetings or small gatherings.</p>
          <a target={'blank'} href="https://www.peerspace.com/pages/listings/6359479cab68cd000ef2124c?utm_source=copy_link&utm_campaign=listing_sharing" class="banner-button"><span className='banner-button-text'>Book Now !!</span></a>
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
          <li class="tile">
            <img src={img3}/>
          </li>
          <li class="tile">
            <img src={img4}/>
          </li>
          <li class="tile">
            <img src={img5}/>
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
            HolydayHomes was Founded in 2018,<br></br>We are a small business focused on serving our community by providing a meeting space that is not your usual office environment.
            </p>
            <hr></hr>
            <div className='flex flex-row mt-8'>
              <img className='w-12 h-12' src={quoteImg}/>
              <span className='flex flex-col ml-8'>
                <p>I learned a long time ago that trying to micromanage the perfect vacation is always a disaster. That leads to terrible times<span className='red-color'>.</span></p>
                <p className='mt-2'>- Anthony Bourdain</p>
              </span>
            </div>
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
