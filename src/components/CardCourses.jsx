import { AlignEndHorizontal, ArrowUpRight, Star, Video } from 'lucide-react'
import React from 'react'
import logoImage from '../../public/courses/course-user.jpg'
import Button from './Button'

const CardCourses = ({ title, CourseImage, lessons, level, rating, instructor, price }) => {
    return (
        <div className='bg-white rounded-2xl overflow-hidden'>
            <div className="h-[200px] overflow-hidden">
                <img src={`/public/courses/${CourseImage}`} alt="" className='object-cover' />
            </div>
            <div className="p-5 space-y-2">
                <div className="font-bold">{title}</div>
                <div className="flex justify-between">
                    <div className="flex gap-x-2 items-center">
                        <Video color='grey' size={18} /><p>{lessons}</p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <AlignEndHorizontal color='grey' size={18} />
                        <p>{level}</p>
                    </div>
                </div>
                <div className="flex justify-between border-b-1 border-gray-200 pb-5">
                    <div className="flex gap-x-2 items-center">
                        <Star color='orange' size={18} /><p>{rating}</p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <img src={logoImage} alt="" width={30} />
                        <p>{instructor}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className='text-xl text-amber-500'>${price}</p>
                    <Button variant={'link'} arrow={true} >Enroll now</Button>
                </div>
            </div>
        </div>
    )
}

export default CardCourses