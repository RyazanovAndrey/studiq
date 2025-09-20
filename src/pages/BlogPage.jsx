import React from 'react'
import SectionTitle from '../components/SectionTitle'
import CoursesList from '../sections/CoursesList'
import Girl from '../sections/Girl'
import { blogList } from '../data.js'
import BlogCard from '../components/BlogCard.jsx'

function BlogPage() {
    return (
        <>
            <SectionTitle>Blog</SectionTitle>
            <div className="container mx-auto px-3 mt-10 mb-30">
                <div className="grid grid-cols-4 gap-x-5 mt-6">
                    {blogList.map(item => (
                        <BlogCard {...item} />
                    ))}
                </div>
            </div>
            <Girl />
        </>
    )
}

export default BlogPage