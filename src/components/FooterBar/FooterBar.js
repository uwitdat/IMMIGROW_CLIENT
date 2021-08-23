import './FooterBar.css'
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdEventNote } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom'


const FooterBar = () => {
    const pathname = window.location.pathname

    return (
        <div className='footerbar'>
            <div className={pathname === 'IMMIGROW_CLIENT/homepage' ? 'flex-col active' : 'flex-col'}>
                <Link to='/homepage'>
                    <AiFillHome className='footer-icon black' />
                </Link>
                <p className='footer-text black'>HOME</p>
            </div>
            <div className={pathname === 'IMMIGROW_CLIENT/groups' ? 'flex-col active' : 'flex-col'}>
                <HiUserGroup className='footer-icon black' />
                <p className='footer-text black'>GROUPS</p>
            </div>
            <div className={pathname === 'IMMIGROW_CLIENT/events' ? 'flex-col active' : 'flex-col'}>
                <MdEventNote className='footer-icon black' />
                <p className='footer-text black' >EVENTS</p>
            </div>
            <div className={pathname === 'IMMIGROW_CLIENT/mentors' ? 'flex-col active' : 'flex-col'}>
                <Link to='/mentors'>
                    <IoPerson className='footer-icon black' />
                </Link>
                <p className='footer-text'>MENTORS</p>
            </div>
            <div className={pathname === 'IMMIGROW_CLIENT/' ? 'flex-col active' : 'flex-col'}>
                <Link to='/'>
                    <IoIosLogOut className='footer-icon black' />
                </Link>
                <p className='footer-text'>LOGOUT</p>
            </div>
        </div>
    )
}

export default FooterBar
