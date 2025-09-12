import { BookOpen } from 'lucide-react'
import React from 'react'

const DescTitle = ({ position, children }) => {
    return (
        <div className={`text-accent flex gap-x-2 ${position}`}>
            <div className="flex gap-x-2">
                <BookOpen />
                <span>{ children }</span>
            </div>
        </div>
    )
}

export default DescTitle