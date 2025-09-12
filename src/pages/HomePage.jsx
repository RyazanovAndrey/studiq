import { BookOpen } from 'lucide-react'
import React from 'react'
import Button from '../components/Button'

const HomePage = () => {
    return (
        <section className='relative min-h-[700px] bg-[url(/images/hero-bg.png)] bg-cover flex items-center'>
            <div className="container mx-auto px-3 flex justify-center">
                <div className="w-5xl text-center space-y-5 z-10">
                    <div className="text-accent flex gap-x-2 justify-center">
                        <div className="flex gap-x-2">
                            <BookOpen />
                            <span>Your Future, Achieve Success</span>
                        </div>
                    </div>
                    <h1 className='text-5xl font-bold'>Find Your <span className='text-[#25BA4D]'>Ideal</span> Course, Build</h1>
                    <span className='text-[#D5810F] text-5xl font-bold'>Skills</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.</p>
                    <div className="flex justify-center">
                        <div className="flex gap-x-3">
                            <Button variant={'fill'}>Get start today</Button>
                            <Button>Get start today</Button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 bg-[url(/images/cloud-shap-img1.png)] w-full h-[300px] z-0"></div>
            </div>
        </section>
    )
}

export default HomePage