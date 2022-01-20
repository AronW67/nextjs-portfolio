import React from 'react'
import Link from 'next/link'
import styles from '../styles/Project.module.css'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    click, 
    linkTo, 
    buttonStyle, 
    buttonSize}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
    const checkBusttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link href={linkTo}>
            <a>
                <button className={`${styles.btn} ${checkButtonStyle} ${checkBusttonSize}`} onClick={click}>
                    {children}
                </button>
            </a>
        </Link>
    )
}; 