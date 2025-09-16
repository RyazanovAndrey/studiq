import React from 'react'
import DescTitle from './DescTitle'
import { Calendar } from 'lucide-react'
import Button from './Button'

const BlogCard = ({ image, title, category, date, desc }) => {

  const colorCategoty = () => {
    if (category == 'Student life') return 'bg-amber-600 text-white p-2 rounded-md inline-block'
    if (category == 'Online') return 'bg-green-500 text-white p-2 rounded-md inline-block'
    if (category == 'Freedom') return 'bg-red-500 text-white p-2 rounded-md inline-block'

    return 'bg-red-5 text-white'
  }

  const colorItem = colorCategoty()

  return (
    <div className='rounded-2xl overflow-hidden bg-white shadow-card cursor-pointer'>
      <img src={image} alt="" />
      <div className="p-5">
        <div className="space-y-2">
          <span className={colorItem}>{category}</span>
          <div className="font-bold">{title}</div>
          <div className="flex items-center gap-x-2 text-[14px]"><Calendar size={18} />{date}</div>
          <div className="text-gray-500">{desc.slice(0, 50)}</div>
          <Button variant={'link'} arrow={true}>Read more</Button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard