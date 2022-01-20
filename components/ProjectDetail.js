import React, {useState, useEffect} from 'react'
import styles from '../styles/Project.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
    Autoplay,
    Pagination
  } from 'swiper'
  import {Button} from './Button'
  
SwiperCore.use([Autoplay, Pagination]);

export const ProjectDetail = () => {

    const [selectedProject, setSelectedProject] = useState({});

    const getProject = () => {
        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");
        //setSelectedCard(cardData[id - 1]);
        if (id) {
            try {
                fetch('/api/project', {
                    method: 'POST',
                    body: JSON.stringify({
                        'id': id
                    })
                }).then((res) => res.json())
                .then((data) => {
                  setSelectedProject(data);
                })
            } catch (e) {
                console.log(e);
            }
        }
    };

    useEffect(() => {
        getProject();
    }, []);

    return (
        <div className={styles.projectDetailContainer}>
            <div className={styles.projectDetailContent}>
                <h1>
                    {selectedProject.title}
                </h1>
                <div className={styles.projectTagContainer}>
                    {selectedProject && selectedProject.tags ? selectedProject.tags.map((tag)=>(<span key={tag} id={tag.toLowerCase().replace(' ', '')}>{tag}</span>)):null}
                </div>
                <div className={ `${styles.projectDetailImage} ${styles.small}` }>
                    <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={true}
                    grabCursor={true}
                    className={styles.swiper}
                    >
                        <SwiperSlide className={styles.swiperSlide}>
                            <img src={selectedProject.img} alt={selectedProject.title} />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <img src={selectedProject.img} alt={selectedProject.title} />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <img src={selectedProject.img} alt={selectedProject.title} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p>
                    {selectedProject.description}
                </p>
                <div className={styles.projectButtonContainer}>
                    <Button linkTo='#' buttonStyle='btn--outline' >View Project</Button>
                    <Button linkTo='#' buttonStyle='btn--outline' >View Code <i className="fab fa-github"></i></Button>
                </div>
            </div>
            <div className={ `${styles.projectDetailImage} ${styles.large}` }>
                <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={true}
                grabCursor={true}
                className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={selectedProject.img} alt={selectedProject.title} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={selectedProject.img} alt={selectedProject.title} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={selectedProject.img} alt={selectedProject.title} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
