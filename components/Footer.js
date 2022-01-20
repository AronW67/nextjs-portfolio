import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-social-icons">
                    <Link href={'#'}>
                        <a>
                            <span><FontAwesomeIcon icon={faLinkedin} /></span>
                        </a>
                    </Link>
                    <Link href={'#'}>
                        <a>
                            <span><FontAwesomeIcon icon={faGithubSquare} /></span>
                        </a>
                    </Link>
                </div>
                <div className="footer-links">
                    <Link href={'/'}>
                        <a>
                            <span className="underline-footerlink">Projects</span>
                        </a>
                    </Link>
                    <Link href={'/experience'}>
                        <a>
                            <span className="underline-footerlink">Experience</span>
                        </a>
                    </Link>
                    <Link href={'/contact'}>
                        <a>
                            <span className="underline-footerlink">Contact</span>
                        </a>
                    </Link>
                </div>
                <div className="footer-technologies">
                        <h4>Built On:</h4>
                        <span><FontAwesomeIcon icon={faHtml5} /></span>
                        <span><FontAwesomeIcon icon={faCss3Alt} /></span>
                        <span><FontAwesomeIcon icon={faJsSquare} /></span>
                        <span><FontAwesomeIcon icon={faReact} /></span>
                        <span><Image src='/images/next-js-logo.svg' width='35px' height='35' /></span>
                        <span><FontAwesomeIcon icon={faNodeJs} /></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
