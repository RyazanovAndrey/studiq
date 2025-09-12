import { BookOpen } from 'lucide-react'
import React from 'react'
import Button from '../components/Button'
import DescTitle from '../components/DescTitle'
import { HeartPlus, MessageCircleMore, PaintbrushVertical } from "lucide-react"


const HomePage = () => {

    const exploreList = [
        { image: <MessageCircleMore size={48} strokeWidth={1} />, title: 'Language Learning', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.' },
        { image: <PaintbrushVertical size={48} strokeWidth={1} />, title: 'Creative Arts & Design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.' },
        { image: <HeartPlus size={48} strokeWidth={1} />, title: 'Health & Fitness', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.' },
    ]

    return (
        <>
            <section className='relative min-h-[700px] bg-[url(/images/hero-bg.png)] bg-cover flex items-center circle line'>
                <div className="container mx-auto px-3 flex justify-center">
                    <div className="w-5xl text-center space-y-5 z-10">
                        <DescTitle position={'justify-center'}>Your Future, Achieve Success</DescTitle>
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
            <section className='relative pt-30 pb-60 z-30'>
                <div className="container mx-auto px-3 grid grid-cols-2 gap-x-10 items-center bg-white">
                    <div className="space-y-6 z-10">
                        <DescTitle position={'justify-start'} >About StudIQ</DescTitle>
                        <h2 className='text-2xl font-bold'>The Place Where You Can Achieve</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit autem praesentium facere beatae blanditiis at officiis voluptate ipsa assumenda.</p>
                        <div className="flex gap-x-5 items-center justify-center">
                            <div>
                                <div className="rounded-full overflow-hidden w-15 h-15 bg-[#F0F8FF] flex items-center justify-center">
                                    <img src="/images/about-img1.png" alt="" className='w-10 h-7' />
                                </div>
                            </div>
                            <div className="">
                                <p className='text-lg font-bold'>Our Mission</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab excepturi velit deleniti ipsum error ad! Voluptatibus repudiandae facere nisi ullam?</p>
                            </div>
                        </div>
                        <div className="flex gap-x-5 items-center justify-center">
                            <div>
                                <div className="rounded-full overflow-hidden w-15 h-15 bg-[#F0F8FF] flex items-center justify-center">
                                    <img src="/images/about-img2.png" alt="" className='w-10 h-8' />
                                </div>
                            </div>
                            <div className="">
                                <p className='text-lg font-bold'>Our Vision</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab excepturi velit deleniti ipsum error ad! Voluptatibus repudiandae facere nisi ullam?</p>
                            </div>
                        </div>
                        <Button variant={'fill'}>Read More</Button>
                    </div>
                    <div className="">
                        <img src="/images/about-image.jpg" alt="" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 bg-[url(/images/cloud-shap-img2.png)] w-full h-[300px] z-0"></div>
            </section>
            <section className='relative bg-[#F1F8FD] pt-60 pb-60 -mt-40 z-20'>
                <div className="container mx-auto px-3">
                    <h2 className='text-2xl font-bold'>Explore 5,000+ Free Online Courses For Students</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim fugiat praesentium at unde? Harum itaque blanditiis cupiditate libero exercitationem?</p>
                    <div className="relative grid grid-cols-3 gap-x-5 mt-10 z-50">
                        {exploreList.map(item => (
                            <div className='bg-white rounded-2xl cursor-pointer group overflow-hidden shadow-lg/10'>
                                <div className="group-hover:bg-accent p-5 space-y-5 transition-all">
                                    <div className="text-accent group-hover:text-white">{item.image}</div>
                                    <div className="font-bold group-hover:text-white">{item.title}</div>
                                    <p className='text-sm group-hover:text-white'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 bg-[url(/images/cloud-shap-img1.png)] w-full h-[300px] z-0"></div>
            </section>
        </>
    )
}

export default HomePage