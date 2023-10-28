'use client'
import { Icon } from '@iconify/react'
import React from 'react'
import Button from '../Button'

const priceData = [
  {
    title: 'Web Lite',
    price: 2500000,
    service: [
      'Custom Made Monolith Web Backend',
      'Landing Page With 3 Call to Action',
      'Responsive Design',
      'Dynamic Page and SEO Setting',
      'Optimized Dynamic Image',
      '1 Design Revision',
      'Secure Architecture',
    ],
    desc: '*Server and domain is excluded, Performance index can be vary depend on the server that you choosen but we can assume that > 80 performance index mean < 1s loading time.',
  },
  {
    title: 'Web Lite',
    price: 2500000,
    service: [
      'Custom Made Monolith Web Backend',
      'Landing Page With 3 Call to Action',
      'Responsive Design',
      'Dynamic Page and SEO Setting',
      'Optimized Dynamic Image',
      '1 Design Revision',
      'Secure Architecture',
    ],
    desc: '*Server and domain is excluded, Performance index can be vary depend on the server that you choosen but we can assume that > 80 performance index mean < 1s loading time.',
  },
  {
    title: 'Web Lite',
    price: 2500000,
    service: [
      'Custom Made Monolith Web Backend',
      'Landing Page With 3 Call to Action',
      'Responsive Design',
      'Dynamic Page and SEO Setting',
      'Optimized Dynamic Image',
      '1 Design Revision',
      'Secure Architecture',
    ],
    desc: '*Server and domain is excluded, Performance index can be vary depend on the server that you choosen but we can assume that > 80 performance index mean < 1s loading time.',
  },
  {
    title: 'Web Lite',
    price: 2500000,
    service: [
      'Custom Made Monolith Web Backend',
      'Landing Page With 3 Call to Action',
      'Responsive Design',
      'Dynamic Page and SEO Setting',
      'Optimized Dynamic Image',
      '1 Design Revision',
      'Secure Architecture',
    ],
    desc: '*Server and domain is excluded, Performance index can be vary depend on the server that you choosen but we can assume that > 80 performance index mean < 1s loading time.',
  },
]


const Services = ({services}) => {

  return (
    <div className="container mx-auto py-12 lg:py-0 lg:min-h-screen flex items-center justify-center">
      <div className='w-full space-y-10'>
        <h3 className='text-3xl text-center font-semibold'>Service & Pricing</h3>
        <div className='px-4 md:px-0 flex items-center justify-center gap-4 flex-wrap'>
          {services?.map((data, i) => (
            <div key={i} className='p-6 bg-primary-500/[0.05] rounded-xl space-y-6 ring-1 ring-inset ring-transparent hover:ring-primary-500 hover:shadow-low transition-all duration-700'>
              <h3 className='text-xl text-primary-500'>{data.title}</h3>
              <div>
                <h3 className='text-sm text-white/40'>start from</h3>
                <h3 className='text-3xl'>{data.price}</h3>
              </div>
              <div className='text-sm text-white space-y-3'>
                <h3>Service includes :</h3>
                <div className='space-y-2'>
                  {data.service_list.map((datas, i) => (
                    <div key={i} className='flex items-center justify-start gap-2'>
                      <div className='p-[2px] bg-primary-500/60 text-white rounded-full'>
                        <Icon icon={'octicon:check-16'} />
                      </div>
                      <h3>{datas.service}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant={'secondary'}
                className='w-full'
              >
                Start Working With Us
              </Button>
              <p className='text-xs max-w-xs leading-normal text-white/40'>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Services