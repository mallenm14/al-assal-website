import CustomBtn from '@/app/components/CustomBtn'
import PageHeading from '@/app/components/PageHeading'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='min-h-screen flex flex-col w-full bg-white overflow-x-hidden pt-18'>
        <section className='w-full max-w-[2560px] mx-auto bg-white'>
        <div className='h-[50vh] w-full overflow-hidden relative flex'>
          <div className='h-full w-full bg-secondary absolute -skew-x-20 -translate-x-1/2 z-10'></div>
          <p className='w-1/2 px-10 lg:px-16 h-full flex justify-center items-center lg:text-3xl text-gray-100 font-bold z-20'>Comprehensive Recruitment Solutions Tailored to Industry Needs</p>
          <div className='w-2/3 h-full relative '>
          <Image  unoptimized={true} fill src="/images/about/Picture5.jpg" alt="Al Assal Recruitment Team" className='object-cover absolute m-auto right-[-9999px] left-[-9999px] top-[-9999px] bottom-[-9999px]' /></div>
        </div>
      </section>
      <section className='w-full'>
        <PageHeading>Our Services</PageHeading>
        <div className='w-[70vw] mx-auto flex flex-col lg:flex-row gap-20 justify-center mb-20'>
          <div className='bg-gray-200 flex-1 h-96 shadow-lg flex flex-col justify-between'>
              <div className='px-10 flex flex-col justify-between h-2/5 p-5'>
              <h4 className='text-xl font-bold text-primary'>AL ASSAL RECRUITMENT</h4>
              <CustomBtn className='border border-gray-900 text-gray-900 hover:bg-primary hover:border-primary hover:text-white py-2 px-5 w-32 '>Learn More</CustomBtn>
              </div>
              <div className='h-3/5 overflow-hidden bg-center bg-cover saturate-150'>
              <Image fill src="/images/about/mission.jpg" alt="" className='saturate-120' />
              </div>
          </div>
          <div className='bg-gray-200 flex-1 h-96 shadow-lg flex flex-col justify-between'>
            <div className='px-10 flex flex-col justify-between h-2/5  p-5'>
            <h4 className='text-xl font-bold text-primary'>SKILLS TRAINING</h4>
            <CustomBtn className='border border-gray-900 text-gray-900 hover:bg-primary hover:border-primary hover:text-white py-2 px-5 w-32 '>Learn More</CustomBtn>
            </div>
            <div className='h-3/5 overflow-hidden relative'>
              <Image width={500} height={500} src="/images/about/training.jpg" alt="" className='saturate-150 absolute -rotate-90 object-cover m-auto right-[-9999px] left-[-9999px] top-[-9999px] bottom-[-9999px]' /> 
            </div>
          </div>
          <div className='bg-gray-200 flex-1 h-96 shadow-lg flex flex-col justify-between'>
            <div className='px-10 flex flex-col justify-between h-2/5 p-5'>
            <h4 className='text-xl font-bold text-primary'>UNDERSTANDING RECRUITMENT NEEDS</h4>
            <CustomBtn className='border border-gray-900 text-gray-900 hover:bg-primary hover:border-primary hover:text-white py-2 px-5 w-32'>Learn More</CustomBtn>
            </div>
            <div className='h-3/5 overflow-hidden bg-[url(/images/about/Picture2.jpg)] bg-center bg-cover saturate-120'>
            </div>
          </div>

        </div>
      </section>
      <section className='w-[70vw] mx-auto space-y-10'>
        <div className='space-y-5'>
        <h4 className='text-xl font-bold text-primary'>Al Assal Recruitment</h4>
        <p className='text-lg text-gray-900'>Al Assal’s clients have a wide range of recruitment needs, which is why our recruitment services cover a wide range of industries. The Al Assal Recruitment team is made up of industry experts, engineers, and human resources professionals. Clients typically meet with our recruitment team, who understand and focus on the client’s specific requirements.</p>
        <p className='text-lg text-gray-900'>Our recruitment teams are assigned to a variety of key specialties including oil and gas, civil and marine, manufacturing, agriculture and aquaculture, as well as hospital and clinic, hospitality and retail requirements. The group is led by hiring Managers, Recruitment Specialist, Psychologist and Field Staff to source candidates that is needed by the client. Technical Interviewers, who evaluates the skills and abilities of the applicants particularly in the Electro-Mechanical Industries and Construction Companies.</p>
        <p className='text-lg text-gray-900'>We also assigned a group if the client’s requirements are over 1000 to focus only in your account and work with the company’s representative assigned in Philippines.</p>
        </div>
        <div className='space-y-5'>
        <h4 className='text-xl font-bold text-primary'>Skills Training</h4>
        <p className='text-lg text-gray-900'>Upon the client’s request, AL ASSAL may arrange skill testing designed to test and assess the actual skills required with credible and accredited government and private institution/ trade test centers. We also provide trainings for our candidates to upgrade their skills.</p>
        </div>
        <div className='space-y-5'>
        <h4 className='text-xl font-bold text-primary'>Understanding Your Recruitment Needs</h4>
        <p className='text-lg text-gray-900'>The company prides itself on its ability to deliver specific solutions to difficult and highly complex recruitment challenges, whatever the sector is. Emphasis is placed on having a thorough insight into a Client’s organization, culture, business goals and objectives. Once these are understood fully, the search for the right Candidate can begin. The prime objective being to find the Candidate who is not only the best for the job but, more importantly, the ‘best-fit’ as well.</p>
        </div>
      </section>
      <section className='w-full bg-[#e7e7e7] my-10'>
        <PageHeading>Processing and Documentation Procedures</PageHeading>
        <div className=' w-[70vw] mx-auto flex flex-col justify-center items-center gap-10 pb-20'>
        <p className='text-lg text-gray-900'>We guarantee that the necessary travel documents are processed quickly Passports, medical permits, visas, employment permits, and contracts. We will assist with ticket issuance and travel arrangements. We will update the client’s of the selected workers documents on time and inform you of your selected workers departure schedule.</p>
        <CustomBtn className='border border-primary-dark text-primary-dark hover:bg-primary hover:border-primary hover:text-white py-4 px-5 w-64 text-lg'><Link href={'/process'}>Read Our Process</Link></CustomBtn>
        </div>
       
      </section>
      <section className='w-full min-h-screen'>
        <PageHeading>Companies We Work With</PageHeading>
        <div className='w-[70vw] h-full pb-20 mx-auto flex flex-wrap gap-10 justify-center'>
          <Image width={250} height={200} src="/images/logo/16022348465380.png" className='w-40 h-14' alt="Dutest Qatar W.L.L. Logo" />
          <Image width={250} height={200} src="/images/logo/ABDUL LATIF JAMEEL HOSPITAL.png" className='w-20 h-14' alt="ABDUL LATIF JAMEEL HOSPITAL Logo" />
          <Image width={250} height={200} src="/images/logo/AJEX LOGISTIC SERVICES.png" className='w-24 h-14' alt="AJEX LOGISTIC SERVICES Logo" />
          <Image width={250} height={200} src="/images/logo/AJLAN & BROTHERS.jpg" className='w-40 h-20' alt="AJLAN & BROTHERS Logo" />
          <Image width={250} height={200} src="/images/logo/AL FANAR COMPANY.png" className='w-32 h-20' alt="AL FANAR COMPANY Logo" />
          <Image width={250} height={200} src="/images/logo/AL GHANDI AUTO.png" className='w-30 h-20' alt="AL GHANDI AUTO Logo" />
          <Image width={250} height={200} src="/images/logo/AL HARAMAIN MEDICAL COMPLEX.jpg" className='w-30 h-20' alt="AL HARAMAIN MEDICAL COMPLEX Logo" />
          <Image width={250} height={200} src="/images/logo/AL HATAB BAKERY.png" className='w-30 h-20' alt="AL HATAB BAKERY Logo" />
          <Image width={250} height={200} src="/images/logo/Al Majdouie.png" className='w-30 h-20' alt="Al Majdouie Logo" />
          <Image width={250} height={200} src="/images/logo/Al metals.jpg" className='w-30 h-20' alt="Al metals Logo" />
          <Image width={250} height={200} src="/images/logo/Anjum.jpg" className='w-30 h-20' alt="Anjum Logo" />
          <Image width={250} height={200} src="/images/logo/ARABIAN INTERNATIONAL COMPANY.jfif" className='w-30 h-20' alt="ARABIAN INTERNATIONAL COMPANY Logo" />
          <Image width={250} height={200} src="/images/logo/Arabian Metal Industires.JPG" className='w-30 h-20' alt="Arabian Metal Industires Logo" />
          <Image width={250} height={200} src="/images/logo/avjzz8axdsrdvrubf4hq.webp" className='w-30 h-20' alt="EI Engineering Group Logo" />
          <Image width={250} height={200} src="/images/logo/Aztracon.jpg" className='w-30 h-20' alt="Aztracon Logo" />
          <Image width={250} height={200} src="/images/logo/Badan Agricultural.jpg" className='w-30 h-20' alt="Badan Agricultural Logo" />
          <Image width={250} height={200} src="/images/logo/bindajim_co_logo.jfif" className='w-30 h-20' alt="bindajim co Logo" />
          <Image width={250} height={200} src="/images/logo/Carrier.png" className='w-30 h-20' alt="Carrier Logo" />
          <Image width={250} height={200} src="/images/logo/CGC.KW_BIG.png" className='w-30 h-20' alt="CGC.KW_BIG Logo" />
          <Image width={250} height={200} src="/images/logo/changan.JPG" className='w-30 h-20' alt="changan Logo" />
          <Image width={250} height={200} src="/images/logo/Chrysler.webp" className='w-30 h-20' alt="Chrysler Logo" />
          <Image width={250} height={200} src="/images/logo/Daewoo_E&C_CI_(eng).svg.png" className='w-28 h-16' alt="DaewooE&CCI Logo" />
          <Image width={250} height={200} src="/images/logo/Dammam Pharma.png" className='w-28 h-16' alt="Dammam Pharma Logo" />
          <Image width={250} height={200} src="/images/logo/download (3).jpeg" className='w-40 h-20' alt="Alesayi Logo" />
          <Image width={250} height={200} src="/images/logo/Dr. Bassam Al-Hemsi Medical Cebte.png" className='w-28 h-16' alt="Dr. Bassam Al-Hemsi Medical Cebte Logo" />
          <Image width={250} height={200} src="/images/logo/eram engineering.jpg" className='w-28 h-16' alt="Eram Engineering Logo" />
          <Image width={250} height={200} src="/images/logo/GS.png" className='w-28 h-16' alt="GS Logo" />
          <Image width={250} height={200} src="/images/logo/honda.webp" className='w-28 h-16' alt="Honda Logo" />
          <Image width={250} height={200} src="/images/logo/Hyundai_Heavy_Industries-Logo.wine.svg" className='w-28 h-16' alt="Hyundai Heavy Industries Logo" />
          <Image width={250} height={200} src="/images/logo/images.jpg" className='w-28 h-16' alt="Images Logo" />
          <Image width={250} height={200} src="/images/logo/Jamal 1.png" className='w-28 h-16' alt="Jamal 1 Logo" />
          <Image width={250} height={200} src="/images/logo/Juffali.png" className='w-28 h-16' alt="Juffali Logo" />
          <Image width={250} height={200} src="/images/logo/Lexus.png" className='w-28 h-16' alt="Lexus Logo" />
          <Image width={250} height={200} src="/images/logo/liebherr.JPG" className='w-28 h-16' alt="Liebherr Logo" />
          <Image width={250} height={200} src="/images/logo/logo with logistic en.jpg" className='w-28 h-16' alt="Logistic Logo" />
          <Image width={250} height={200} src="/images/logo/Madarek.jpeg" className='w-28 h-16' alt="Madarek Logo" />
          <Image width={250} height={200} src="/images/logo/MAYYAR UNITED Support Services.png" className='w-28 h-16' alt="MAYYAR UNITED Support Services Logo" />
          <Image width={250} height={200} src="/images/logo/MercedesBenz.jpg" className='w-28 h-16' alt="Mercedes Benz Logo" />
          <Image width={250} height={200} src="/images/logo/Mesc.png" className='w-28 h-16' alt="Mesc Logo" />
          <Image width={250} height={200} src="/images/logo/Movenpick-new-logo-916x515.jpg" className='w-28 h-16' alt="Movenpick Logo" />
          <Image width={250} height={200} src="/images/logo/Mtex.png" className='w-28 h-16' alt="Mtex Logo" />
          <Image width={250} height={200} src="/images/logo/Naqua_logo.png" className='w-28 h-16' alt="Naqua Logo" />
          <Image width={250} height={200} src="/images/logo/samsung heavy industries.png" className='w-42 h-20' alt="Samsung Logo" />
          <Image width={250} height={200} src="/images/logo/Pannon Work.jpg" className='w-28 h-16' alt="Pannon Work Logo" />
          <Image width={250} height={200} src="/images/logo/pngegg.png" className='w-28 h-16' alt="Pngegg Logo" />
          <Image width={250} height={200} src="/images/logo/pngwing.com.png" className='w-28 h-16' alt="Pngwing Logo" />
          <Image width={250} height={200} src="/images/logo/Prodar 2.png" className='w-28 h-16' alt="Prodar 2 Logo" />
          <Image width={250} height={200} src="/images/logo/Pwc.png" className='w-28 h-16' alt="PWC Logo" />
          <Image width={250} height={200} src="/images/logo/Qassim_University_logo.svg.png" className='w-28 h-16' alt="Qassim University Logo" />
          <Image width={250} height={200} src="/images/logo/Sakura.png" className="w-32 h-28" alt="Sakura Logo" />
          <Image width={250} height={200} src="/images/logo/Samsung SDI.jpg" className="w-28 h-16" alt="Samsung SDI Logo" />
          <Image width={250} height={200} src="/images/logo/samsung-engineering3687.logowik.com.webp" className="w-42   h-24" alt="Samsung Engineering Logowik Logo" />
          <Image width={250} height={200} src="/images/logo/samsung.png" className="w-28 h-16" alt="Samsung Logo" />
          <Image width={250} height={200} src="/images/logo/sasung engineering.png" className="w-28 h-16" alt="Sasung Engineering Logo" />
          <Image width={250} height={200} src="/images/logo/Saudi Master Baker.JPG" className="w-28 h-16" alt="Saudi Master Baker Logo" />
          <Image width={250} height={200} src="/images/logo/Saudi Paper Group.jpg" className="w-28 h-16" alt="Saudi Paper Group Logo" />
          <Image width={250} height={200} src="/images/logo/saudibio-logo-201x90@2x.png" className="w-28 h-16" alt="Saudibio Logo" />
          <Image width={250} height={200} src="/images/logo/Savage-Logo.jpg" className="w-28 h-16" alt="Savage Logo" />
          <Image width={250} height={200} src="/images/logo/Schneider-Electric-logo-jpg-.png" className="w-28 h-16" alt="Schneider Electric Logo" />
          <Image width={250} height={200} src="/images/logo/Siemens-logo-500x281.png" className="w-28 h-16" alt="Siemens Logo" />
          <Image width={250} height={200} src="/images/logo/tenas.jpg" className="w-28 h-16" alt="Tenas Logo" />
          <Image width={250} height={200} src="/images/logo/Teyseer Motors WLL.jpg" className="w-28 h-16" alt="Teyseer Motors WLL Logo" />
          <Image width={250} height={200} src="/images/logo/Tulip Inn.png" className="w-28 h-16" alt="Tulip Inn Logo" />
          <Image width={250} height={200} src="/images/logo/United Motors Group.png" className="w-28 h-16" alt="United Motors Group Logo" />
          <Image width={250} height={200} src="/images/logo/URE Industrial.jpg" className="w-28 h-16" alt="URE Industrial Logo" />
          <Image width={250} height={200} src="/images/logo/Venus.png" className="w-28 h-16" alt="Venus Logo" />
          <Image width={250} height={200} src="/images/logo/Westin.png" className="w-28 h-16" alt="Westin Logo" />
          <Image width={250} height={200} src="/images/logo/WPPCO.png" className="w-28 h-16" alt="WPPCO Logo" />
        </div>
      </section>
    </div>
  )
}

export default Services
