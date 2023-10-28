import React, { useState } from 'react'
import Button from '../Button'

const phoneNumberPattern = /^[-+]?\d+$/;
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Contact = () => {
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [validateEmail, setValidateEmail] = useState(true)


    const handleChangePhone = (e) => {
        const input = e.target.value
        // if (phoneNumberPattern.test(input) || input == '') {
        setPhone(input)
    }
    return (
        <section id='faqs' className='bg-background-dark w-full'>
            <div className="container mx-auto py-12 flex items-center justify-end px-2">
                <div className='max-w-lg bg-primary-500/10 p-6 rounded-xl space-y-4'>
                    <h3 className='text-3xl text-primary-500 font-semibold'>Contact Us!</h3>
                    <div className='text-sm text-white/80 space-y-3'>
                        <h3>Let`s discuss your project, or together we will find a solution to the most difficult tasks.</h3>
                        <hr className='border-white/20' />
                        <form action="">

                            <div className='space-y-2'>
                                <input
                                    type="text"
                                    className='input'
                                    placeholder='Your name'
                                />
                                <div className='flex items-center gap-2'>
                                    <input
                                        value={phone}
                                        type="text"
                                        className='input'
                                        placeholder='Phone'
                                        onChange={handleChangePhone}
                                    />
                                    <input
                                        value={email}
                                        type="email"
                                        className='input'
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                </div>
                                <textarea
                                    type="text"
                                    className='input resize-none h-60'
                                    placeholder='Project detail'
                                />
                            </div>
                        </form>
                        <hr className='border-white/20' />
                        <h3>By clicking on the button below, you accept our privacy policy.</h3>
                        <button className='btn-primary'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact