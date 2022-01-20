import React from 'react';
import styles from '../styles/TechSwiper.module.css'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
    Autoplay
  } from 'swiper'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faJava, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

SwiperCore.use([Autoplay]);

export const TechSwiper = () => {
    return (
        <>
        <div className={styles.techSliderWrapper}>
            <h2>Supported Technologies</h2>
            <Swiper
            slidesPerView={4}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                1200: {
                    slidesPerView: 8
                }
            }}
            >
                <SwiperSlide>
                    <div>
                        <Link href='/experience'>
                            <div>
                                <FontAwesomeIcon icon={faHtml5} />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Link href='/experience'>
                            <div>
                                <FontAwesomeIcon icon={faCss3Alt} />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Link href='/experience'>
                            <div>
                                <FontAwesomeIcon icon={faJsSquare} />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Link href='/experience'>
                            <div>
                                <FontAwesomeIcon icon={faReact} />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Link href='/experience'>
                            <div>
                                <FontAwesomeIcon icon={faAngular} />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Link href='/experience'>
                            <div>
                                <FontAwesomeIcon icon={faJava} />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                        <Link href='/experience'>
                            <div>
                                <FontAwesomeIcon icon={faPython} />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Link href='/experience'>
                            <div>
                                <FontAwesomeIcon icon={faNodeJs} />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}
