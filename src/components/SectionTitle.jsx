import React from 'react'

const SectionTitle = ({ children }) => {
    return (
        <section className='bg-bg-section min-h-[300px] grid place-items-center'>
            <h2 className='text-5xl font-bold'>{ children }</h2>
        </section>
    )
}

export default SectionTitle