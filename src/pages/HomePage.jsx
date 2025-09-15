import { GraduationCap, ThumbsUp, Users, UserStar, Video } from 'lucide-react'
import Button from '../components/Button'
import DescTitle from '../components/DescTitle'
import { HeartPlus, MessageCircleMore, PaintbrushVertical } from "lucide-react"
import { Link } from 'react-router'
import { useState } from 'react'
import CoursesCard from '../components/CoursesCard'
import CoursesData from '../dataCourses.json'

const HomePage = () => {

    const [tabsCoursesSort, setTabsCoursesSort] = useState('All')

    console.log(CoursesData.Courses)

    const exploreList = [
        { image: <MessageCircleMore size={48} strokeWidth={1.5} />, title: 'Language Learning', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.' },
        { image: <PaintbrushVertical size={48} strokeWidth={1.5} />, title: 'Creative Arts & Design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.' },
        { image: <HeartPlus size={48} strokeWidth={1.5} />, title: 'Health & Fitness', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.' },
        { image: <GraduationCap size={48} strokeWidth={1.5} />, title: 'Individual Teacher', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.' },
    ]

    const dataList = [
        { image: <Users color='#B58B77' size={36} strokeWidth={1.5} />, title: '1.4K', desc: 'Successfully', color: 'card-orange' },
        { image: <Video color='#C8DEF3' size={36} strokeWidth={1.5} />, title: '2k', desc: 'Courses Completed', color: 'card-blue' },
        { image: <ThumbsUp color='#B58B77' size={36} strokeWidth={1.5} />, title: '2.5K', desc: 'Satisfaction Rate', color: 'card-orange ' },
        { image: <UserStar color='#C8DEF3' size={36} strokeWidth={1.5} />, title: '5K', desc: 'Students Communyty', color: 'card-blue' },
    ]

    const tabsCourses = ['All', 'Marketing', 'Academic', 'WebDesign', 'Programming', 'Design']

    return (
        <>
            <section className='relative min-h-[800px] bg-[url(/images/hero-bg.png)] bg-cover flex items-center'>
                <img src="/public/images/element-01.png" alt="" className='absolute top-[20%] left-[10%] circle' />
                <img src="/public/images/element-02.png" alt="" className='absolute top-[40%] left-[10%] line' width={70} />
                <img src="/public/images/element-06.png" alt="" className='absolute top-[20%] right-[20%] line' width={100} />
                <img src="/public/images/element-03.png" alt="" className='absolute bottom-0 right-[10%] z-40 triangle' />
                <img src="/public/images/element-04.png" alt="" className='absolute bottom-30 right-20 z-40 triangle triangle' />
                <div className="container mx-auto px-3 flex justify-center">
                    <div className="w-5xl text-center space-y-5 z-10">
                        <DescTitle position={'justify-center'}>Your Future, Achieve Success</DescTitle>
                        <h1 className='text-7xl font-bold font-title'>Find Your <span className='text-[#25BA4D]'>Ideal</span> Course, Build<br /><span className='text-[#D5810F] '> Skills</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.</p>
                        <div className="flex justify-center">
                            <div className="flex gap-x-3">
                                <Button variant={'fill'}>Get start today</Button>
                                <Button>Get start today</Button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-[url(/images/cloud-shap-img1.png)] w-full h-[300px] z-0">
                    </div>
                </div>
            </section>
            <section className='relative pt-30 pb-60 z-30'>
                <img src="/public/images/element-01.png" alt="" className='absolute top-[20%] left-[5%] circle' />
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
                <img src="/public/images/element-06.png" alt="" className='absolute top-[20%] right-[20%] line' width={120} />
                <img src="/public/images/element-03.png" alt="" className='absolute bottom-0 right-[10%] z-40 triangle' />
                <div className="container mx-auto px-3">
                    <h2 className='text-2xl font-bold'>Explore 5,000+ Free Online Courses For Students</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim fugiat praesentium at unde? Harum itaque blanditiis cupiditate libero exercitationem?</p>
                    <div className="relative grid grid-cols-4 gap-x-5 mt-10 z-50">
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
            <section className='relative pt-30 pb-80'>
                <div className="container mx-auto px-3">
                    <div className="grid grid-cols-4 gap-x-5">
                        {dataList.map(item => (
                            <div className={`${item.color} space-y-3 cursor-pointer group`}>
                                <div className="relative top-0 p-2 rounded-full bg-white size-16 grid place-items-center group-hover:-top-1 transition-all">{item.image}</div>
                                <div className="text-2xl font-bold">{item.title}</div>
                                <div className="">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 bg-[url(/images/cloud-shap-img2.png)] w-full h-[300px] z-0"></div>
            </section>
            <section className='bg-[#F1F8FD] -mt-40 min-h-[600px] py-50'>
                <div className="container mx-auto px-3">
                    <div className="grid grid-cols-2 gap-x-10">
                        <h2 className='text-2xl font-bold'>Explore 4,000+ Free Online Courses <br /> For Students</h2>
                        <div className="">
                            <p>Welcome to our diverse and dynamic course catalog we`re dedicated to providing you</p>
                            <Link className='text-accent'>See All Courses</Link>
                        </div>
                    </div>
                    <div className="bg-white mt-5 rounded-2xl flex p-5 gap-x-3">
                        {tabsCourses.map(item => {
                            return <p onClick={() => setTabsCoursesSort(item)} className={`cursor-pointer bg-[#F3F7FD] p-3 rounded-full px-6 ${tabsCoursesSort == item ? 'bg-accent text-white' : ''}`}>{item}</p>
                        })}
                    </div>
                    <div className="grid grid-cols-4 gap-x-5 mt-5">
                      
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage