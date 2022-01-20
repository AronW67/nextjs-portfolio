import React from 'react';
import Link from 'next/link';
import styles from '../styles/Card.module.css'
import Image from 'next/image'

export const Card = ({
    id, 
    title, 
    img, 
    tags}) => {
          
    const isInViewport = () => {

    };
    
    return (
        <div>
            <Link href={{
                pathname: '/project',
                query: {id: id}
            }}
            >
                <a>
                    <div className={`${styles.card} ${styles.projectCard}`} key={id}>
                        <div className={styles.overlay}>
                            <div className={styles.cardInfo}>
                                <h3>{title}</h3>
                                {tags.map((tag)=>{
                                   return <span key={tag.toLowerCase().replace(' ', '')} className={styles.tag} id={tag.toLowerCase().replace(' ', '')}>{tag}</span>;
                                   })}
                            </div>
                        </div>
                        <Image src={img} alt={title} layout='fill' quality='15' placeholder='blur' blurDataURL={`data:image/svg+xml;base64`} />
                    </div>
                </a>
            </Link>
        </div>
    )
}
