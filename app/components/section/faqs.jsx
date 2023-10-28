import React from 'react'
import Accordion from '../Accordion'

const dataFaqs = [
  {
    q: 'What services does your digital agency offer?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
  },
  {
    q: 'What services does your digital agency offer?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
  },
  {
    q: 'What services does your digital agency offer?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
  },
  {
    q: 'What services does your digital agency offer?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
  },
]

const Faqs = ({questions}) => {
  return (
    <section id='faqs' className='bg-background w-full'>
      <div className="container mx-auto py-12 lg:py-0 lg:min-h-screen flex items-center justify-center">
        <div className='w-full space-y-10'>
          <h3 className='text-3xl text-center font-semibold'>Frequently Asked Questions</h3>
          <div className='space-y-3 px-4'>
            {questions?.map((data, i) => (
              <div key={i}>
                <Accordion
                  title={data.question}
                  description={data.answer}
                />
              </div>
            ))}
          </div>
        </div>
      </div >
    </section>
  )
}

export default Faqs