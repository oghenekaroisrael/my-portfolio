import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Resume from '../assets/Oghenekaro_Brume Israel_Resume_C.pdf';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} style={{color: '#fff'}}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to='/about' className='nav-links'>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to='/services' className='nav-links'>
                                    Services
                                </Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to='/contact' className='nav-links'>
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item-btn'>
                                <a
                                    href={Resume}
                                    className='nav-links-btn btn btn-primary'
                                    download
                                    target='_blank'
                                    rel="noreferrer noreferrer"
                                >
                                    Resume
                                </a>
                            </li>
                    </ul>

                </div>
            </nav>
    </>
  )
}

export default Navbar;