import { BookOpen } from 'lucide-react'
import React from 'react'

const Girl = () => {
    return (
        <section className='relative pt-20 -mt-20 z-40 pb-20'>
            <div className="container mx-auto px-3 bg-accent rounded-2xl">
                <div className="grid grid-cols-2 items-center">
                    <div className="text-white space-y-4 pl-10">
                        <span className='flex items-center gap-x-3 text-white'><BookOpen />Get Sertificate</span>
                        <div className="text-3xl font-bold">Get Quality Skills Certificate From <br /> the StudIQ</div>
                        <button className='bg-white py-3 px-6 rounded-full cursor-pointer text-accent'>Get started now</button>
                    </div>
                    <div className="flex justify-end pr-10">
                        <img src='/public/images/certificate-img.png' width={300} className='-mt-20' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Girl