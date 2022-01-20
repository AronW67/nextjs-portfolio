import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {Button} from './Button'
import { faLaptopCode, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Navbar = () => {
    const [click, setClick] = useState(false);

    const [scroll, setScroll] = useState(false);

    const dynamicRoute = useRouter().asPath

    const handleScroll = () => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    };

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => {
        setClick(false);
    }

    useEffect(() => {
        handleScroll();
    });

    useEffect(() => {
        if (click) {
            setClick(false);
        }
    }, [dynamicRoute]);

    return (
        <>
            <nav className={scroll ? 'navbar scroll' : 'navbar'}>
                <div className="navbar-container">
                    <Link href="/"><a><div className="navbar-logo">AW <FontAwesomeIcon icon={faLaptopCode} width="40px" /></div></a></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={ click ? faTimes : faBars } />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item" >
                            <Link href='/'><a onClick={closeMobileMenu}><div className='nav-links underline-navlink'>Projects</div></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/experience' ><a onClick={closeMobileMenu}><div className='nav-links underline-navlink'>Experience</div></a></Link>
                        </li>
                        <li className="nav-item nav-btn" onClick={closeMobileMenu}>
                            <Button linkTo='/contact' buttonStyle='btn--outline' >Contact</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}




