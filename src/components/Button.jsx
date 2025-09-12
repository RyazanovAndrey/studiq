import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import React from 'react'

const Button = ({ variant, children }) => {
    return variant == 'fill'
        ? (<button className='bg-accent text-white py-3 px-5 rounded-full flex gap-x-2 cursor-pointer hover:bg-black transition-all'>{children}<ArrowUpRight /></button>
        )
        : (<button className='py-3 px-5 border border-accent text-accent rounded-full flex gap-x-2 cursor-pointer'>{children}<ArrowUpRight /></button>)
}

export default Button