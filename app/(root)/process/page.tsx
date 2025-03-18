import PageHeading from '@/app/components/PageHeading'
import { FunctionComponent } from 'react'
import React from 'react'

const Process = () => {
  
  return (
    <div className='min-h-screen flex flex-col w-full bg-white overflow-x-hidden pt-18'>
      <PageHeading>Our Processing</PageHeading>
      <section className='w-[70vw] mx-auto pb-20'>
        <h2 className='text-xl font-bold text-primary pb-10'>Processing and Documentation Procedures</h2>
        <p className='text-gray-900 text-lg a'>We guarantee that the necessary travel documents are processed quickly Passports, medical permits, visas, employment permits, and contracts. We will assist with ticket issuance and travel arrangements. We will update the client’s of the selected workers documents on time and inform you of your selected workers departure schedule.

Our documentation and processing employees have extensive experience. Once a candidate is selected: we assist our clients in reaching acceptable package with the selected applicants and we will assist in signing a letter of offer upon candidate’s selection.</p>
      </section>
      <section className='w-[70vw] mx-auto py-10'>
        <div className='w-full grid lg:grid-cols-2'>
        <div className='flex card h-full'>
            <div className='flex flex-col'>
            <div className='flex h-14 arrow-ribbon'>
              <div className='h-full flex-1 relative'>
                <div className='h-1/2 skew-x-32 bg-primary w-full'></div>
                <div className='h-1/2 -skew-x-32 bg-primary w-full'></div>
                <div className='absolute m-auto inset-0 flex px-10 justify-between items-center'>
                  <p className='text-white text-start w-2/5'>Day 1</p>
                  <p className='text-white text-start w-1/4'>Day 2</p>
                  <p className='text-white text-end w-1/4 text-end'>Day 10</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-4 grid-rows-4 text-sm gap-2 p-2'>
              <div className='col-span-4 flex row-span-2 gap-2'>
                <div className='w-2/5 border border-gray-400 px-5 py-4'><p className='text-primary pb-5 text-start'>Day 1</p>
                <p>Acceptance / signing of "Offer of Employment" (Immediately upon hiring / selection)</p></div>
                <div className='w-3/5 border border-gray-400 px-5 py-4'>
                  <p className='text-primary pb-5 text-start'>Day 2 - Day 10</p>
                  <p className=''>Medical Examination. Medical exam can only be undertaken once passport is obtained. Applicants with passports can proceed for the examination at once. Those who are without passports may take the medical on the 4th or 6th day. A medical result is obtained within 5 to 6 days.</p>
                </div>
              </div>
              <div className='col-span-4 border border-gray-400 px-5 py-4'>
                <p className='text-primary pb-5 text-start'>Day 1 - Day 10</p>
                <p className=''>Completion / submission of all travel documents such as Passport, NBI Clearance (Police Clearance). Authenticated documents for professionals and technicians, etc. Signing of all documents related to travel documents processing.</p>
              </div>

            </div>

            </div>
          </div>
          <div className='flex card'>
            <div className='flex flex-col'>
            <div className='flex h-14 arrow-ribbon'>
              <div className='h-full flex-1 relative'>
                <div className='h-1/2 skew-x-32 bg-secondary w-full'></div>
                <div className='h-1/2 -skew-x-32 bg-secondary w-full'></div>
                <div className='absolute m-auto inset-0 flex px-10 justify-between items-center'>
                  <p className='text-white text-start w-1/4'>Day 11</p>
                  <p className='text-white text-end w-1/4'>Day 13</p>
                  <p className='text-white text-end w-1/4 text-end'>Day 14</p>
                  <p className='text-white w-1/4 text-end'>Day 15</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-4 grid-rows-4 text-sm gap-2 p-2'>
              <div className='col-span-2 border border-gray-400 px-5 py-4'>
                <p className='text-primary pb-5 text-start'>Day 11 - Day 13</p>
                <p>Request for PTA ticket / Booking (Once released visa.)</p>
              </div>
              <div className='col-span-4 w-1/2 border border-gray-400 px-5 py-4'>
                <div>
                <p className='text-primary pb-5'>Day 11 - Day 13</p>  
                <p className=''>POEA / OEC Processing (Labor Office Clearance)</p>
                </div>
              </div>
              <div className='col-span-4 border border-gray-400 px-5 py-4'>
                <p className='text-primary pb-5 text-start'>Day 11 - Day 15</p>
                <p className=''>Pre-Departure Orientation Seminar (PDOS). In-house PDOS are conducted every Friday. All workers for deployment are required to attend.</p>
              </div>
              <div className='col-span-4 border border-gray-400 px-5 py-4'>
                <p className='text-primary pb-5 text-start'>Day 11 - Day 15</p>
                <p className=''>Visa application / stamping</p>
              </div>
              <div className='col-span-4 flex'>
                <div className='w-3/5'></div>
                <div className='w-2/5 border border-gray-400 px-5 py-4 text-start flex flex-col'>
                <p className='text-primary pb-5'>Day 14 Onwards</p>
                <p className='text-warp'>Deployment / Departure (Depending on availability of airline booking)</p>
                </div>
              </div>
            </div>

            </div>
          </div>

         
        </div>
      </section>
      <section className='w-[70vw] mx-auto h-[30vh]'>
        <h4 className='text-lg font-bold text-secondary py-10'>Notes: </h4>
        <p className='text-gray-900'>1. The Foregoing schedule can be implemented on time as soon as all the verified documents are available.</p>
        <p className='text-gray-900'>2. If an applicant has a valid passports, Authenticated documents as required by the Royal Embassy of Saudi Arabia for visa issuance, processing time can be shortened to ten (10) working days or less.</p>
      </section>
      <section className='w-[70vw] mx-auto h-[50vh]'>
        <div className='flex flex-col lg:flex-row py-10 w-full h-full gap-10'>
          <div className='w-1/2 h-full bg-primary relative overflow-hidden'>
          <img src="/images/about/seminar.jpg" alt="" className='object-cover absolute saturate-150 ' />
          </div>
          <div className='w-1/2 h-full'>
            <h5 className='text-lg font-bold text-primary py-10'>PRE-DEPARTURE ORIENTATION SEMINAR</h5>
            <p className='text-gray-900 text-lg'>Our company provides the mandatory orientation seminar to our departing workers and professionals prior to their flight schedule. It aimed to orient departing migrant workers with basic information that are most beneficial to them, e.g. work standards, general profile of the country of destination, stages of the OFW’s life abroad, health & safety, travel tips, airport procedure, and government programs & services. The orientation-seminars are country-specific and in some cases, skill-specific.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process
