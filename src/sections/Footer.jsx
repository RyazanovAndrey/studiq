import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer className=''>
            <div className="container mx-auto px-3 py-7">
                <div className="grid grid-cols-4 border-b-1 border-accent pb-5">
                    <div className="space-y-4">
                        <div className="text-2xl font-bold font-title">Stud<span className='text-accent'>IQ</span> </div>
                        <p className='text-[14px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ad?</p>
                        <div className="flex gap-x-3 text-accent">
                            <Facebook size={20} />
                            <Twitter size={20} />
                            <Instagram size={20} />
                        </div>
                    </div>
                    <div className="">
                        <p className='font-bold'>Navigation</p>
                        <div className="flex flex-col mt-2">
                            <Link>About us</Link>
                            <Link>Courses</Link>
                            <Link>Blog</Link>
                            <Link>Contact</Link>
                        </div>
                    </div>
                    <div className="">
                        <p className='font-bold'>Contact us</p>
                        <div className="flex items-center gap-x-5 text-[14px] mt-3">
                            <Phone color='#0B6ECB' />
                            <div className="">
                                <p>(207) 555-10-30</p>
                                <p>(207) 555-10-30</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5 text-[14px] mt-3">
                            <Mail color='#0B6ECB' />
                            <div className="">
                                <p>dwall@gmail.com</p>
                                <p>edu@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                       <p className='font-bold'>Subscribe Here</p>
                       <p className='text-[14px] text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                       <input type="text" className='border rounded-md border-gray-300 h-10 pl-3 outline-0' />
                    </div>
                </div>
                <p className='text-center mt-5 text-gray-500'>&copy;2025 copyright All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer