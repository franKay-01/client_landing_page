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
import img11 from './assets/img_11.jpg';
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
          <h1 className='text-rose-700 banner-text'>
            Not your ordinary meeting space
          </h1>
          <p className='white-color banner-p'>Choose one of Holiday homes locations for your meetings or small gatherings.</p>
          <a target={'blank'} href="https://www.peerspace.com/pages/listings/6359479cab68cd000ef2124c?utm_source=copy_link&utm_campaign=listing_sharing" class="banner-button"><span className='banner-button-text'>Book Now !!</span></a>
        </section>
       
      </section>
      <section className='section-1 container'>
        <h1 className='section-1-text'>Choose one of Holiday homes locations<span className='red-color'>.</span></h1>
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
          <li class="tile-hide tile">
            <img src={img6}/>
          </li>
          <li class="tile-hide tile">
            <img src={img7}/>
          </li>
          <li class="tile-hide tile">
            <img src={img8}/>
          </li>
          <li class="tile-hide tile">
            <img src={img9}/>
          </li>
          <li class="tile-hide tile">
            <img src={img10}/>
          </li>
          <li class="tile-hide tile">
            <img src={img11}/>
          </li>
          <li class="tile-hide tile">
            <img src={img12}/>
          </li>
          <li class="tile-hide tile">
            <img src={img13}/>
          </li>
          <li class="tile-hide tile">
            <img src={img14}/>
          </li>
          <li class="tile-hide tile">
            <img src={img15}/>
          </li>
        </ul>
        {/* <div className='spiral-body'>
          <div class="scope">
            <span style={{ '--i':1 }}><img src="https://i.postimg.cc/BQcRL38F/pexels-photo-761963.jpg" alt="not found"/></span>
            <span style={{ '--i':2 }}><img src="https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg" alt="not found"/></span>
            <span style={{ '--i':3 }}><img src="https://i.postimg.cc/CMfHRKfP/woman-2003647-960-720.jpg" alt="not found"/></span>
            <span style={{ '--i':4 }}><img src="https://i.postimg.cc/T1rDCpVT/beautiful-1274056-960-720.jpg" alt="not found"/></span>
            <span style={{ '--i':5 }}><img src="https://i.postimg.cc/SNf99YQr/woman-1807533-960-720.jpg" alt="not found"/></span>
            <span style={{ '--i':6 }}><img src="https://i.postimg.cc/2SHBcpZL/pexels-photo-4664520.jpg" alt="not found"/></span>
            <span style={{ '--i':7 }}><img src="https://i.postimg.cc/CxBzNcjw/Opera-Snapshot-2020-07-03-162022-www-freepik-com.png" alt="not found"/></span>
            <span style={{ '--i':8 }}><img src="https://i.postimg.cc/0QckxSpt/Opera-Snapshot-2020-07-03-161422-www-freepik-com.png" alt="not found"/></span>
          </div>
        </div> */}
        {/* <p className='section-1-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p> */}
        {/* <div class="container-grid">
          <div class="gallery">

            <div class="gallery-item">
              <img class="gallery-image w-52 h-52" src={img1} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={img2} alt="sunset behind San Francisco city skyline"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={img3} alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={img4} alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={img5} alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={img6} alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"/>
            </div>

          </div>
        </div> */}
        {/* <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 section-1-dos'>
          <div className='mb-8'>
            <p className='section-1-heading'>Strategy<span className='red-color'>.</span></p>
            <div className='flex flex-col space-y-9'>
              <p>Analytics and Research</p>
              <p>Interactive Workshops</p>
              <p>Brand Strategy</p>
            </div>
          </div>
          <div className='mb-8'>
            <p className='section-1-heading'>Strategy<span className='red-color'>.</span></p>
            <div className='flex flex-col space-y-9'>
              <p>Analytics and Research</p>
              <p>Interactive Workshops</p>
              <p>Brand Strategy</p>
            </div>
          </div>
          <div className='mb-8'>
            <p className='section-1-heading'>Strategy<span className='red-color'>.</span></p>
            <div className='flex flex-col space-y-9'>
              <p>Analytics and Research</p>
              <p>Interactive Workshops</p>
              <p>Brand Strategy</p>
            </div>
          </div>
        </div> */}
      </section>
      <section className='section-2 container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:p-32 md:p-32'>
          <div>
            <img src={home}/>
          </div>
          <div className='flex flex-col section-2-about-container'>
            <p className='section-2-top'>ABOUT<span className='red-color'>.</span></p>
            <p className='section-2-heading'>Holydayhomes' Identity</p>
            <p className='section-2-p'>
            Holydayhomes was Founded in 2018, <br></br>We are a small business black owned business focused on serving our community by providing a meeting space that is not your usual office environment.
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
      {/* <section className='section-3 container'>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:p-24 md:p-24'>
          <div className='mb-8'>
            <p className='section-1-heading'>Strategy<span className='red-color'>.</span></p>
            <div className='flex flex-col space-y-9'>
              <p>Analytics and Research</p>
            </div>
          </div>
          <div className='mb-8'>
            <p className='section-1-heading'>Strategy<span className='red-color'>.</span></p>
            <div className='flex flex-col space-y-9'>
              <p>Analytics and Research</p>
            </div>
          </div>
          <div className='mb-8'>
            <p className='section-1-heading'>Strategy<span className='red-color'>.</span></p>
            <div className='flex flex-col space-y-9'>
              <p>Analytics and Research</p>
            </div>
          </div>
          <div className='mb-8'>
            <p className='section-1-heading'>Strategy<span className='red-color'>.</span></p>
            <div className='flex flex-col space-y-9'>
              <p>Analytics and Research</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className='section-4 container'>
        <div className='flex flex-col lg:p-8 md:p-8'>
          <div className='flex flex-col justify-center'>
            <p className='section-2-heading text-center'>Web Platforms and Industries</p>
            <p className='text-center'>With a lot of powerful features, we guarantee simplicity and clarity.</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:p-24 md:p-24'>
            <div className='flex flex-row'>
              <img className='w-12 h-12' src={quoteImg}/>
              <span className='flex flex-col ml-8'>
                <p>Massa tincidunt nunc pulvinar sapien. Urna et pharetra pharetra massa massa ultricies mi quis. Sem nulla pharetra diam sit amet nisl suscipit</p>
                <p className='mt-2'>- Mattie Smith</p>
              </span>
            </div>
            <div className='flex flex-row'>
              <img className='w-12 h-12' src={quoteImg}/>
              <span className='flex flex-col ml-8'>
                <p>Massa tincidunt nunc pulvinar sapien. Urna et pharetra pharetra massa massa ultricies mi quis. Sem nulla pharetra diam sit amet nisl suscipit</p>
                <p className='mt-2'>- Mattie Smith</p>
              </span>
            </div>
            <div className='flex flex-row mt-8'>
              <img className='w-12 h-12' src={quoteImg}/>
              <span className='flex flex-col ml-8'>
                <p>I learned a long time ago that trying to micromanage the perfect vacation is always a disaster. That leads to terrible times</p>
                <p className='mt-2'>- Anthony Bourdain</p>
              </span>
            </div>
            <div className='flex flex-row mt-8'>
              <img className='w-12 h-12' src={quoteImg}/>
              <span className='flex flex-col ml-8'>
                <p>Massa tincidunt nunc pulvinar sapien. Urna et pharetra pharetra massa massa ultricies mi quis. Sem nulla pharetra diam sit amet nisl suscipit</p>
                <p className='mt-2'>- Mattie Smith</p>
              </span>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className='container'>
        <div className='flex flex-col justify-center'>
          <p className='section-2-heading text-center white-color'>Our Work</p>
          <p className='text-center white-color'>With a lot of powerful features, we guarantee simplicity and clarity.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:p-12 md:p-12'>
          <div className='flex flex-col section-2-about-container'>
            <p className='section-2-top red-color'>ABOUT COMPANY</p>
            <p className='section-2-heading red-color'>Corporate Identity</p>
            <p className='section-2-p white-color'>
              Nisi lacus sed viverra tellus in. Nunc aliquet bibendum enim facilisis. Consequat semper viverra nam libero justo laoreet sit amet. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.
            </p>
            <hr></hr>
            <div className='flex flex-row mt-8'>
              <img className='w-12 h-12' src={quoteImg}/>
              <span className='flex flex-col ml-8'>
                <p className='white-color'>Massa tincidunt nunc pulvinar sapien. Urna et pharetra pharetra massa massa ultricies mi quis. Sem nulla pharetra diam sit amet nisl suscipit</p>
                <p className='mt-2 white-color'>- Mattie Smith</p>
              </span>
            </div>
          </div>
          <div>
            <img src={ourWork}/>
          </div>
        </div>
      </section> */}
      <section className='contact-section'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-white content-center'>
          <div className='p-8'>
            <p className='contact-heading'>Contacts</p>
            <p>Use our contact form for all information requests or contact us directly using the contact information below.
            <br></br><br></br>Feel free to get in touch with us via email or phone</p>
            <br></br>
            <div className='flex flex-row'>
              <img className='w-8 h-8' src={emailImg} />
              <a href='mailto:Holydayhomes21@gmail.com' className='red-color ml-2 contact-address underline cursor-pointer' >Holydayhomes21@gmail.com</a>

            </div>
          </div>
          <div className='p-8'>
            <p className='contact-heading blue-color'>Sign up for the newsletter</p>
            <p className='contact-newsletter'>Be the first to know about new spaces.</p>
            <div class=" w-72 md:w-80 lg:w-96">
              <div class="relative flex items-center">
                <input id="11" type="text" placeholder='Enter you email here...' class="peer relative h-12 w-full rounded-md contact-input-bg pl-2 pr-4 font-normal outline-contact" />
                <button class="absolute right-2 h-8 w-16 rounded-md bg-blue-200 text-xs font-semibold text-white contact-button-bg">Send</button>
              </div>
            </div>
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
