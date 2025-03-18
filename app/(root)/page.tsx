import React from 'react'
import ActionBtn from '../components/ActionBtn'
import IntroPanel from '../components/IntroPanel'
import PageHeading from '../components/PageHeading'
import WhoWeAre from '../contents/WhoWeAre'
import Section from '../components/Section'
import ImageHolder from '../components/ImageHolder'
import IndustryImages from '../contents/IndustryImages'
import CustomBtn from '../components/CustomBtn'
import Link from 'next/link'
import LogoSlider from '../components/LogoSlider'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col w-full max-w-[2560px]'>
      <section className='bg-[url(/images/stocks/workers-photo-by-sol-unsplash.jpg)] h-screen  bg-cover bg-center'>
        <div className='max-w-screen mx-auto pt-30 px-5 md:px-16 lg:pt-40 flex flex-col gap-5 items-center lg:items-start'>
            <h1 className='text-3xl font-roboto font-extrabold text-center md:text-5xl lg:text-left lg:text-6xl lg:w-3/4 xl:w-1/2 text-secondary'>
              Finding the right people is our 
              <span className='font-roboto text-3xl font-extrabold md:text-7xl text-primary italic'> Business</span>
            </h1>

            <p className='text-secondary-dark text-lg text-center lg:text-left lg:w-1/3  lg:text-xl xl:text-2xl'>
            Hiring isn’t just about filling a role—it’s about matching the right person with the right team. 
            </p>
            <p className='text-lg xl:text-2xl font-bold text-secondary'>Let us help you make the ideal connection!</p>
            <input type="text" className='py-3 px-5 bg-white w-3/4 lg:w-96 placeholder:text-gray-500 text-gray-700 shadow-md mt-16' placeholder='Search Jobs'/>
            <ActionBtn color='primary' className='text-xl px-6 py-3 lg:py-5 lg:px-10 relative flex gap-5'>Apply Now <img src="/arrow-right.svg" alt="arrow-right" /></ActionBtn>
        </div>
      </section>

      <section className='h-[40vh] w-[70vw] max-w-[2560px] flex flex-col items-center justify-center gap-14 mx-auto text-center px-5'>
          <h1 className='text-secondary font-bold text-2xl lg:text-4xl'>A Legacy of Excellence: 37+ Years of Global Recruitment Expertise</h1>
          <CustomBtn className='border border-gray-900 text-gray-900 hover:bg-primary hover:border-primary hover:text-white py-4 px-5 w-64 text-lg'><Link href={'/about-us'}>About Us</Link></CustomBtn>
      </section>


      <section className='min-h-screen relative overflow-hidden max-w-[2560px]'>
        <div className='bg-[url(/images/stocks/worldmap.jpg)] w-full h-full opacity-10 bg-cover bg-center bg-no-repeat absolute'>
        </div>
        <div className='w-[70vw] max-w-full mx-auto h-full'>
        <PageHeading>Who We Are</PageHeading>
          <div className='flex flex-col lg:flex-row gap-5 items-center justify-center w-full px-10 pb-20 lg:px-30 mx-auto'>
            {
              WhoWeAre.map(({title, body}, index) => <IntroPanel key={index}>
                <h3 className='font-bold text-secondary xl:text-lg lg:h-2/5'>{title}</h3>
                <p className='text-secondary-dark text-sm xl:text-base h-3/5'>{body}</p>
              </IntroPanel>)
            }
            
          </div>
        </div>
        <div className='w-[100vw] h-[30vh] overflow-hidden absolute'>
          <div style={{
            clipPath: 'polygon(100% 50%, 0 0, 0 100%)'
          }} className='w-[150vw] h-[50vh] bg-primary opacity-20'>
            
          </div>
        </div>
       
      
        
      </section>



      <section className='bg-white relative pb-10 w-[70vw] max-w-[2560px] mx-auto min-h-[100vh]'>
      <PageHeading>What We Do</PageHeading>
      
      <div className='flex h-[70vh]'>
        <div className='w-1/3 h-full overflow-hidden'>
          <img src="/images/about/pexels-cottonbro-5989932.jpg" alt="" className='object-cover' />
        </div>
        <div className='w-2/3 h-full flex flex-col px-24 justify-evenly'>
        <h4 className='text-3xl text-primary font-bold'>
          Al Assal Recruitment
        </h4>
        <div className='py-5 flex flex-col gap-5'>
          <h5 className='text-2xl text-primary font-bold'>Understanding Your Recruitment Needs</h5>
          <p className='text-gray-900 text-lg'>Delivering Tailored Recruitment Solutions for Complex and Specialized Hiring Needs</p>
          
        </div>
        <div className='py-5 flex flex-col gap-5'>
          <h5 className='text-2xl text-primary font-bold'>Skills and Training</h5>
          <p className='text-gray-900 text-lg'>Comprehensive Skill Testing and Training for Candidate Excellence</p>
          <CustomBtn className='border border-gray-900 text-gray-900 hover:bg-primary hover:border-primary hover:text-white py-2 px-2 w-40 text-lg'><Link href={'/services'}>Learn More</Link></CustomBtn>
        </div>

        <div className='py-5 flex flex-col gap-5'>
          <h5 className='text-2xl text-primary font-bold'>Efficient & Streamlined Recruitment</h5>
          <p className='text-gray-900 text-lg'>Our recruitment process is designed to connect top talent with the right opportunities efficiently and effectively. From sourcing and screening to interviews and onboarding, we streamline every step to ensure a seamless hiring experience for both employers and candidates.</p>
        </div>
         <CustomBtn className='border border-gray-900 text-gray-900 hover:bg-primary hover:border-primary hover:text-white py-3 px-2 w-52 text-lg'><Link href={'/process'}>Read Our Processing</Link></CustomBtn>
        </div>
      </div>
      <div className='flex h-[20vh] w-full my-5 gap-5'>
        <div className='relative w-1/4 h-full overflow-hidden '>
        <img src="/images/about/Mam Arlene Picture.jpg" alt="" className='object-cover saturate-150' />
        </div>
        <div className='relative w-1/4 h-full overflow-hidden'>
          <img 
          src="/images/about/homepic2.jpg" 
          alt="" 
          className="w-full h-full object-cover saturate-150"
          />
        </div>
        <div className='relative  w-1/4 h-full'>
          <img 
            src="/images/about/homepic4.jpg" 
            alt="" 
            className="w-full h-full object-cover saturate-150"
            />
        </div>
        <div className='relative  w-1/4 h-full'>
        <img 
            src="/images/about/homepic5.jpg" 
            alt="" 
            className="w-full h-full saturate-180 "
            />
        </div>
      </div>
      </section>

      <section className='bg-white relative pb-10 max-w-[2560px] mx-auto'>
          <PageHeading>Our Industry Specialization</PageHeading>
          <div className='grid grid-cols-1 md:grid-cols-4 w-[50vw] max-w-full mx-auto place-items-center'>
            {
              IndustryImages.map(({src, alt, name}, index) =>  <ImageHolder src={src} alt={alt} key={index} name={name}/>
              )
            }
          </div>
      </section>
      <LogoSlider />

      <section className='w-full max-w-[2560px] mx-auto bg-secondary-dark h-[40vh] flex flex-col justify-center items-center gap-5'>
          <h4 className='text-3xl text-gray-200'>Looking For a Job or Talent?</h4>
          <p className='text-2xl text-gray-200'>Let's Talk!</p>
          <p className='text-xl text-gray-200'>Whether you're seeking your next opportunity or the perfect candidate, we're here to help. Reach out and let's connect!</p>
          <Link href={'/contact-us'} className='text-2xl text-gray-200 py-5 px-10 border border-gray-300 my-5 cursor-pointer hover:bg-white hover:text-secondary font-bold'>Contact Us</Link>
      </section>

      
   
    </div>
  )
}

export default Home
