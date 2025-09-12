import { navLinks } from '../data.js'
import { Link, useLocation, useNavigate } from 'react-router'
import { CircleUser } from 'lucide-react'

const Header = () => {

    const location = useLocation().pathname
    const navigate = useNavigate()

    return (
        <header className='fixed w-full py-5 top-0 left-0 z-50'>
            <div className="container mx-auto px-3 flex justify-between">
                <div className="flex items-center gap-x-20">
                    <div className="text-2xl font-bold">Stud<span className='text-accent'>IQ</span> </div>
                    <div className="flex gap-x-10">
                        {navLinks.map(item => {
                            const isActive = item.href == location
                            return <button className={`cursor-pointer py-2 px-4 hover:text-accent transition-all ${isActive ? 'bg-accent text-white py-2 px-4' : ''}`} onClick={() => navigate(item.href)}>{item.title}</button>
                        })}
                    </div>
                </div>
                <Link to={'/login'} className='bg-white rounded-full size-8 flex items-center justify-center hover:bg-accent hover:text-white transition-all'><CircleUser /></Link>
            </div>
        </header>
    )
}

export default Header