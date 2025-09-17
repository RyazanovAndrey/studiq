import React, { useState } from 'react'
import CoursesData from '../dataCourses.json'
import CardCourses from '../components/CardCourses'

const CoursesList = ({ count }) => {

    const [tabsCoursesSort, setTabsCoursesSort] = useState('All')
    const tabsCourses = ['All', 'Marketing', 'Academic', 'WebDesign', 'Programming', 'Design']

    const getData = () => {
        if (tabsCoursesSort == 'All') {
            return Object.keys(CoursesData.Courses).flatMap(item => {
                if (item == 'Marketing') {
                    return CoursesData.Courses[item]
                }

                return CoursesData.Courses[item]
            })
        }

        return CoursesData.Courses[tabsCoursesSort]
    }

    const sortList = getData()

    return (
        <>
            <div className="bg-white mt-5 rounded-2xl flex p-5 gap-x-3 shadow-card">
                {tabsCourses.map(item => {
                    return <p onClick={() => setTabsCoursesSort(item)} className={`cursor-pointer bg-[#F3F7FD] p-3 rounded-full px-6 ${tabsCoursesSort == item ? 'bg-accent text-white' : ''}`}>{item}</p>
                })}
            </div>
            <div className="relative grid grid-cols-4 gap-5 mt-5 z-40">
                {sortList.slice(0, count).map(item => {
                    return <CardCourses {...item} />
                })}
            </div>
        </>
    )
}

export default CoursesList