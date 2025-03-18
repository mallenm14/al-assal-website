'use client';

import React from 'react'
import PageHeading from '@/app/components/PageHeading'
import { useState } from 'react';
import ActionBtn from '@/app/components/ActionBtn';

const Careers = () => {

    const [selectedJob, setselectedJob] = useState<number>(0)

    const sampleData = [
        {
            id : 0,
            position : "QC/QA Inspector",
            location : "Kingdom of Saudi Arabia",
            datePosted : "2023-10-23",
            requirements : [
                "With atleast 5 years work experience in a wood manufacturing company.",
                "Knowledge in Microsoft Office."
            ]
        },
        {
            id : 1,
            position : "Maintenance Technician",
            location : "Kingdom of Saudi Arabia",
            datePosted : "2023-10-23",
            requirements : [
                "With atleast 5 years work experience in a wood manufacturing company.",
                "Knowledge in Microsoft Office."
            ]
        },
        {
            id : 2,
            position : "Edge-Banner Machine Operator",
            location : "Kingdom of Saudi Arabia",
            datePosted : "2023-10-23",
            requirements : [
                "With atleast 5 years work experience in a wood manufacturing company.",
                "Knowledge in Microsoft Office."
            ]
        },
        {
            id : 3,
            position : "MEP AutoCAD Operators",
            location : "Kingdom of Saudi Arabia",
            datePosted : "2023-01-23",
            requirements : [
                "With atleast 5 years work experience in a wood manufacturing company.",
                "Knowledge in AutoCAD."
            ]
        },
        {
            id : 4,
            position : "Electrical Design Engineer",
            location : "Kingdom of Saudi Arabia",
            datePosted : "2023-01-23",
            requirements : [
                "With atleast 5 years work experience in a wood manufacturing company.",
                "Knowledge in AutoCAD."
            ]
        },
        {
            id : 5,
            position : "Technician, Assembly",
            location : "Kingdom of Saudi Arabia",
            datePosted : "2023-01-23",
            requirements : [
                "With atleast 5 years work experience in a wood manufacturing company."
            ]
        },
        {
            id : 6,
            position : "Technician, QC",
            location : "Kingdom of Saudi Arabia",
            datePosted : "2023-01-23",
            requirements : [
                "With atleast 5 years work experience in a wood manufacturing company."
            ]
        },
    ]

    const selectedJobDetails = sampleData.find((job) => job.id === selectedJob)
    
    function formatDate(dateString: string | undefined, locale: string = "en-US"): string {
        if (!dateString) return "Invalid Date"
        const date = new Date(dateString);
        return new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric" }).format(date);
      }

      

  return (
    <div className='min-h-screen flex flex-col w-full max-w-[2560px] pt-18'>
      <PageHeading>Careers</PageHeading>
      <div className='w-[70vw] max-w-full mx-auto h-[60vh] flex '>
        <div className='w-1/3 px-5 mx-auto space-y-5 overflow-hidden'>
        <div className='flex gap-5'>
            <input type="text" placeholder='Search Jobs' className='border border-gray-400 py-3 px-5 bg-white w-full lg:w-96 placeholder:text-gray-500 text-gray-700 shadow-md'/>
            <ActionBtn color='secondary' className='px-7 py-3 flex gap-5'>Find</ActionBtn>
        </div>
       
        <div className='flex flex-col h-full  overflow-y-auto'>
              {
            sampleData.map(({id, position, location, datePosted, requirements}, index) => (
                <div onClick={() => setselectedJob(id)} key={index} className='border border-gray-300 py-2 px-5 bg-white w-full placeholder:text-gray-500 text-gray-700 shadow-md mt-5 cursor-pointer'>
                    <h4 className='text-lg'>{position}</h4>
                    <p className='text-sm'>{location}</p>
                </div> 
            ))
                
        }
        </div>
        
      
        </div>
        <div className='w-2/3 border border-gray-300 px-5 py-3'>
            <div className='w-full flex justify-between items-center border-b border-gray-300 py-5'>
                <div><h4 className='text-2xl font-bold text-secondary'>{selectedJobDetails?.position}</h4>
                <h5 className='text-lg'>{selectedJobDetails?.location}</h5></div>
                <ActionBtn color='secondary'>Apply Now</ActionBtn>
            </div>

            <div><h5 className='text-lg text-gray-700 py-5'>Date Posted: {formatDate(selectedJobDetails?.datePosted)}</h5></div>
           
            <div className='py-10 w-full'>
                <h5 className='text-lg font-semibold text-gray-700 pb-5'>Requirements</h5>
                <ul className='list-disc list-inside space-y-5 text-gray-700'>
                    {
                        selectedJobDetails?.requirements?.map((requirement, index) => (
                            <li key={index} className=''>{requirement}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
     
      </div>
      
    </div>
  )
}

export default Careers
