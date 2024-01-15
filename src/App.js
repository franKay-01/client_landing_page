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
            Government Contracting Solutions
          </h1>
          
          <div className='flex flex-col mt-12'>
            <p className='white-color contact-address contact-phone'>Contact Us</p>
            <div className='flex flex-row'>
              <img className='w-5 h-6' src={phone} />
              <a href="tel:240-310-9795" className='white-color contact-address under ml-4'>240-310-9795</a>
            </div>
          </div>
        </section>
       
      </section>
      <section className='section-1 container bg-gradient-to-b from-black mb-12'>
        <h1 className='section-1-text underline'>Services.</h1>
        <div className='flex flex-col'>
          <h1 className='section-1-text'>* Facility maintenance services</h1>
          <h1 className='section-1-text'>* Short Term Rentals</h1>
          <h1 className='section-1-text'>* Government Consulting</h1>
        </div>
      </section>
      <section className='section-2 container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:p-32 md:p-32'>
          <div>
            <img src={home}/>
          </div>
          <div className='flex flex-col section-2-about-container'>
            <p className='section-2-top'>ABOUT<span className='red-color'>.</span></p>
            <p className='section-2-heading'>About us</p>
            <p className='section-2-p'>
              A trusted provider of government consulting services tailored to meet the diverse needs of both local and federal agencies. At Holyday Homes, we pride ourselves on delivering exceptional solutions that empower government organizations to achieve their objectives efficiently and effectively.
            </p>
            <hr></hr>
          </div>
        </div>
      </section>
      <section className='contact-section bg-gradient-to-t from-black'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-white content-center'>
          <div className='p-8'>
            <p className='contact-heading'>Contacts</p>          
            <div className='flex flex-row mb-4'>
              <img className='w-8 h-8' src={emailImg} />
              <a href='mailto:Holydayhomes21@gmail.com' className='red-color ml-2 underline cursor-pointer' >Holydayhomes21@gmail.com</a>
            </div>
            <div className='flex flex-row'>
              <img className='w-8 h-8' src={phone} />
              <a href="tel:240-310-9795" className='red-color contact-address under ml-4'>240-310-9795</a>
            </div>
          </div>
          <div className='p-8'>
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
