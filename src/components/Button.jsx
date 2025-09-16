import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import React from 'react'

const Button = ({ variant, children, arrow }) => {

    const variantItem = () => {
        if (variant == 'fill') return 'fill-btn'
        if (variant == 'border') return 'border-brn '
        if (variant == 'link') return 'link-btn'
    }

    const variantBtn = variantItem()

    return <button className={variantBtn}>{children}{arrow && <ArrowUpRight size={18} />}</button>
}

export default Button