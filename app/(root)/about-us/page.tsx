import React from 'react'
import PageHeading from '@/app/components/PageHeading'
import CorpoValues from '@/app/contents/CorpoValues'
import DarAmanah from '@/app/components/DarAmanah'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className='min-h-screen flex flex-col w-full pt-18 overflow-x-hidden'>
      <section className='w-full max-w-[2560px] mx-auto bg-white'>
        <div className='h-[50vh] w-full overflow-hidden relative flex'>
          <div className='h-full w-full bg-secondary absolute -skew-x-20 -translate-x-1/2 z-10'></div>
          <p className='w-1/2 px-10 lg:px-16 h-full flex justify-center items-center lg:text-3xl text-gray-100 font-bold z-20'>Committed in providing an exceptional level of recruitment services</p>
          <div className='w-2/3 h-full relative'>
          <Image fill src="/images/about/AAMI.jpg" alt="Al Assal Recruitment Team" className='absolute m-auto right-[-9999px] left-[-9999px] top-[-9999px] bottom-[-9999px] brightness-90 object-cover' /></div>
        </div>
      </section>
      
      <section className='w-full max-w-[2560px] mx-auto px-10 pb-20 md:px-30 bg-[#E7E7E7]'>
        <PageHeading>About Us</PageHeading>
        <div className='w-[70vw] mx-auto flex flex-col lg:flex-row gap-20 justify-center'>
          <div className='w-full lg:w-1/3 flex flex-col p-5 lg:p-10 items-center shadow-lg bg-white'>
            <h3 className='text-2xl text-primary font-bold py-5 text-center w-1/2'>Our Mission</h3>
            <p className='text-sm lg:text-lg text-gray-900 text-center py-5'>To provide professional and effective recruitment solutions that meet the needs and requirements of each client and provide the best career opportunities for our Filipino employees and professionals.</p>
          </div>
          
          <div className='w-full lg:w-1/3 flex flex-col p-5 lg:p-10 items-center shadow-lg bg-white'>
              <h3 className='text-2xl text-primary font-bold py-5 text-center w-1/2'>Our Vision</h3>
              <p className='text-sm lg:text-lg text-gray-900 text-center py-5'>To be the best and most preferred employment service provider in the Philippines by both foreign employers and Filipino workers and professionals.</p>
          </div>
        </div>
      </section>



      <section className='w-full max-w-[2560px] py-20 px-16 lg:px-24 bg-[#E7E7E7]'>
        <div className='w-[70vw] mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='flex-1 bg-white max-h-[400px] shadow-lg'>
          <div className='h-[200px] w-full bg-secondary relative'>
          <Image fill className='absolute brightness-90 saturate-120 grow-0 object-cover' src="/images/about/vision.jpg" alt="Al Assal Recruitment Team" />
          </div>
     
          <p className='h-1/2 w-full px-5 py-2 text-gray-900 pt-10'>Our team of highly trained and efficient professionals expertly manages every aspect of manpower mobilization, screening, documentation, and recruitment</p>
        </div>
        <div className='w-full flex-1 bg-white max-h-[400px] overflow-hidden shadow-lg'>
        <div className='h-[200px] w-full bg-secondary relative'>
          <Image fill className='absolute brightness-90 saturate-120 grow-0 object-cover'  src="/images/about/slide_2.jpg"  alt="Al Assal Recruitment Team" />
          </div>
          <p className='h-1/2 w-full px-5 py-2 text-gray-900 pt-10'>
          We empower our employees with opportunities for growth in commerce and information technology, ensuring continuous innovation and a competitive edge in service delivery.
          </p>
        </div>

        <div className='w-full flex-1 bg-white max-h-[400px] shadow-lg'>
        <div className='h-[200px] w-full bg-secondary relative'>
          <Image fill className='absolute brightness-90 saturate-120 grow-0 object-cover' src="/images/about/slide_1.jpg" alt="Al Assal Recruitment Team" />
          </div>
          <p  className='h-1/2 w-full px-5 py-2 text-gray-900 pt-10'>We accelerate the development of high-quality workspaces and continuously enhance processes to boost productivity.</p>
        </div>
        <div className='w-full flex-1 bg-white max-h-[400px] shadow-lg'>
        <div className='h-[200px] w-full bg-secondary relative'>
          <Image fill className='absolute brightness-90 saturate-120 grow-0 object-cover' src="/images/about/slide_4.jpg" alt="Al Assal Recruitment Team" />
          </div>
          <p  className='h-1/2 w-full px-5 py-2 text-gray-900 pt-10'>Preparing and equipping candidates to meet the evolving manpower needs of our clients.</p>
        </div>
        </div>

      </section>
      <section className='w-screen mx-auto bg-secondary'>
        <PageHeading className='text-white'>Our Corporate Values</PageHeading>
        <div className='flex flex-col gap-5 xl:gap-10 items-center justify-center px-10 pb-20 lg:px-30 w-[70vw] mx-auto'>
            {
              CorpoValues.map(({title, body}, index) => <div className='w-full px-16 space-y-5' key={index}>
                <h3 className='text-xl font-bold text-gray-200'>{title}</h3>
                <p className='text-lg text-gray-300'>{body}</p>
              </div>)
            }
            
          </div>
      </section>
      <section className='w-full bg-[#E7E7E7]'>
      <PageHeading>Our Core Competencies</PageHeading>
      <div className='flex flex-col lg:grid grid-cols-3 grid-rows-6 gap-5 px-10 pb-20 lg:px-30 w-[80vw] mx-auto'>
        <div className='col-span-1 row-span-6 bg-white shadow-lg px-10 py-5 flex flex-col justify-evenly'>
          <h5 className='text-xl font-bold text-primary'>Experience</h5>
          <p className='text-lg text-gray-900'>With 37 years of expertise in overseas manpower recruitment, we have a proven track record of connecting top-tier candidates with leading corporations across the Middle East, Asia, and the United Kingdom. Trusted by top 1000 companies, we take pride in delivering exceptional, high-quality recruitment services.

          As we celebrate our 25th year, we have successfully deployed over 50,000 professionals, skilled workers, and technicians. Additionally, we have built strong partnerships with approximately 200 clients worldwide.</p>
        </div>
        <div className='col-span-1 row-span-3 bg-white shadow-lg px-10 py-5 flex flex-col justify-evenly'>
          <h5 className='text-xl font-bold text-primary'>Computerized Talent Bank</h5>
          <p className='text-base text-gray-900'>We have designed a specialized database that stores detailed applicant profiles for all roles, from executives to unskilled workers. Accredited clients can easily access and review candidates online.</p>
        </div>
        <div className='col-span-1 row-span-2 bg-white shadow-lg px-10 py-5 flex flex-col justify-evenly'>
          <h5 className='text-xl font-bold text-primary'>Technology</h5>
          <p className='text-base text-gray-900'>Al Assal utilizes a proactive assessment tool to accurately evaluate a candidate&apos;s suitability for the role.</p>
        </div>
        <div className='col-span-1 row-span-2 bg-white shadow-lg px-10 py-5 flex flex-col justify-evenly'>
        <h5 className='text-xl font-bold text-primary'>Delivery Capability</h5>
        <p className='text-base text-gray-900'>Al Assal maintains a well-vetted talent pool of over 10,000 screened applicants, all equipped with the necessary documents for swift and seamless deployment.</p>
        </div>
        <div className='col-span-1 row-span-3 bg-white shadow-lg px-10 py-5 flex flex-col justify-evenly'>
        <h5 className='text-xl font-bold text-primary'>Recruitment Team</h5>
        <p className='text-base text-gray-900'>Al Assal is backed by highly skilled professionals with years of extensive experience in screening qualified applicants. Our dedicated team ensures precise candidate selection while efficiently managing your account.</p>
        </div>
        <div className='col-span-1 row-span-2 bg-white shadow-lg px-10 py-5 flex flex-col justify-evenly'>
        <h5 className='text-xl font-bold text-primary'>Management Team</h5>
        <p className='text-base text-gray-900'>A utilization of two decade skills and management expertise.</p>
        </div>
      </div>
      </section>
      <section className='w-full bg-white'>
        <PageHeading>Our Management and Recruitment Executives</PageHeading>
        <div className='w-[70vw] mx-auto py-10 px-10'>

          <h5 className='text-xl font-bold text-primary px-10'>
            Mona Evangeline Fabian Al Assal, RN 
          </h5>
          <p className='text-secondary font-semibold px-10'>Founder and Chairperson</p>
          <p className='text-gray-900 py-5 px-10'>Our founding chairperson, company visionary and strategist over 37 years. She has provided staffing and recruitment services to leading companies in the Philippines and abroad. She is proficient in all phases of human resource management, particularly recruitment, employee relations, organization and training development, and Philippine labor laws. She has served as an officer in the Nurse Corp of Armed Forces of the Philippines. Neuropsychiatric nursing is her area of expertise as a military officer. Prior to entering the recruitment industry, she also served as a clinical instructor at a number of nursing institutions and the AFP Medical Service School.</p>

        <div className='flex flex-col lg:grid grid-cols-3 place-items-center border-t border-cerulian mt-10'>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Arlene D. Alimorong, CBA</h6>
            <p className='text-secondary font-semibold'>President/General Manager
            </p>
          </div>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Enrg. Ricardo G. Vidal</h6>
            <p className='text-secondary font-semibold'>Technical Manager
            </p>
          </div>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Gilbert R. Atienza</h6>
            <p className='text-secondary font-semibold'>Project In Charge Electromechanical Industry
            </p>
          </div>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Nasrimah M. Alamada, LPT</h6>
            <p className='text-secondary font-semibold'>Legal and Welfare Officer
            </p>
          </div>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Mohamed A. Mohamed, MBA</h6>
            <p className='text-secondary font-semibold'>Overseas Marketing Consultant
            </p>
          </div>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Tahani F. Al Assal, MD, MBAHHM</h6>
            <p className='text-secondary font-semibold'>Treasurer/HR Manager
            </p>
          </div>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Ramon C. Carcer</h6>
            <p className='text-secondary font-semibold'>Recruitment Manager
            </p>
          </div>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Iris L. Matienzo</h6>
            <p className='text-secondary font-semibold'>Processing Head
            </p>
          </div>
          <div className='p-10 flex flex-col text-center justify-center items-center'>
            <h6 className='text-xl font-bold text-primary'>Mirasol S. Conejos, aMBA</h6>
            <p className='text-secondary font-semibold'>Corporate Social Responsibility
            </p>
          </div>
        </div>
        </div>
      </section>
      <DarAmanah/>
    </div>
  )
}

export default AboutUs
