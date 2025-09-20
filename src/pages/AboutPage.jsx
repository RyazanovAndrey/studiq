import { Backpack, BadgeCheck, Clock, Command, GalleryHorizontalEnd, GraduationCap, NotebookTabs, StickyNote, ToolCase, Users, Video } from 'lucide-react'
import { Link } from 'react-router'
import DescTitle from '../components/DescTitle'
import Girl from '../sections/Girl'
import SectionTitle from '../components/SectionTitle'

const AboutPage = () => {

  const dataList = [
    { icon: <Backpack size={36} strokeWidth='1.5' />, title: 'Learn the latest skills', desc: 'Quality education shouldn`t break the bank. We offer competitive pricing and payment' },
    { icon: <GraduationCap size={36} strokeWidth='1.5' />, title: 'Get ready for a career', desc: 'Engage in dynamic and interactive learning experiencs. Our courses are designed' },
    { icon: <StickyNote size={36} strokeWidth='1.5' />, title: 'Earn the Caertificate', desc: 'Quality education shouldn`t break the bank. We offer competitive pricing and payment' }
  ]

  const preferItems = [
    { icon: <Video />, title: '50,000 online courses', desc: 'Enjoy a variently of fresh toplas' },
    { icon: <Users />, title: '50,000 online courses', desc: 'Enjoy a variently of fresh toplas' },
    { icon: <Clock />, title: '50,000 online courses', desc: 'Enjoy a variently of fresh toplas' },
    { icon: <BadgeCheck />, title: '50,000 online courses', desc: 'Enjoy a variently of fresh toplas' },
  ]

  const itemsSkills = [
    { icon: <NotebookTabs />, title: 'Academic Excellence', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloribus?', color: 'text-[#0B6ECB]' },
    { icon: <GalleryHorizontalEnd />, title: 'Courses Offerings', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloribus?', color: 'text-[#c29582]' },
    { icon: <Command />, title: 'Innovative Learning', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloribus?', color: 'text-[#c29582]' },
    { icon: <ToolCase />, title: 'Sustainability Initiative', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloribus?', color: 'text-[#91bfa2]' },
  ]

  return (
    <>
      <SectionTitle>About us</SectionTitle>
      <section className='pt-10'>
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-2 gap-x-10">
            <h2 className='text-2xl font-bold'>Build better growth skills, faster. Ignite <br /> Your Learning Journey</h2>
            <div className="">
              <p>explore new skills deepen existing passions, and lost in creativity. What you find just might.</p>
              <Link className='text-accent'>Read more</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-5 mt-10">
            {dataList.map(item => (
              <div className="group">
                <div className='shadow-card rounded-2xl flex flex-col items-center text-center p-10 gap-y-5 cursor-pointer bg-white hover:bg-accent transition-all group-hover:bg-accent'>
                  <div className="bg-[#f3f3f3] size-20 flex items-center justify-center rounded-full text-accent">
                    {item.icon}
                  </div>
                  <div className="font-bold text-xl group-hover:text-white">{item.title}</div>
                  <p className='text-gray-500 group-hover:text-white'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='bg-accent my-20 py-5'>
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-4 gap-x-5">
            {preferItems.map(item => (
              <div className='flex items-center gap-x-5'>
                <div className="size-10 bg-white rounded-full flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div className="text-white">
                  <div className="">{item.title}</div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='pb-40'>
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="h-[300px] overflow-hidden rounded-2xl">
              <img src="/images/about-img.png" alt="" />
            </div>
            <div className="space-y-6">
              <DescTitle>Why choose us</DescTitle>
              <div className="text-2xl font-bold">Over 16 Years in Distant learning for skills</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quibusdam officia in consequuntur ex rem asperiores esse commodi, perspiciatis distinctio.</p>
              <div className="grid grid-cols-2 gap-5">
                {itemsSkills.map(item => (
                  <div className='flex gap-5 items-center'>
                    <div className={`bg-white w-20 h-12 shadow-card rounded-full grid place-items-center ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="">
                      <p className='font-bold'>{item.title}</p>
                      <p className='text-[14px]'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Girl />
    </>
  )
}

export default AboutPage