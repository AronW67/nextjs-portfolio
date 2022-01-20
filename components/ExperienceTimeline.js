import React from 'react';
import styles from '../styles/ExperienceTimeline.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ExperienceTimeline() {
    return (
        <div className={styles.experienceTimeline}>
            <h1>Experience</h1>
            <p>See my professional <FontAwesomeIcon icon={faBriefcase} /> and educational <FontAwesomeIcon icon={faGraduationCap} /> experience below.</p>
            <VerticalTimeline
                lineColor={'#b3b3b3'}>
                <VerticalTimelineElement
                    className={styles.verticalTimelineElement}
                    contentStyle={{ background: '#64f4ac', color: '#242424' }} 
                    contentArrowStyle={{ borderRight: '7px solid  #64f4ac' }}
                    date="2020 - present"
                    iconStyle={{ background: '#ffffff', color: '#242424',  boxShadow: '0 0 0 4px #64f4ac, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}
                >
                    <img src="/images/gp-logo.svg" alt="General Pants Logo" />
                    <h3 className={styles.verticalTimelineElementTitle}>Senior Front End Developer/ Development Manager</h3>
                    <h4 className={styles.verticalTimelineElementSubtitle}>General Pants Group</h4>
                    <p>
                    Front-End Development (AngularJS), Back-End Development (Java, JSP), Deployment Management (Bamboo), Project Management (Jira), Team Leadership
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#809BCE', color: '#242424' }} 
                    contentArrowStyle={{ borderRight: '7px solid  #809BCE' }}
                    className={styles.verticalTimelineElement}
                    date="2020 - present"
                    iconStyle={{ background: '#ffffff', color: '#242424', boxShadow: '0 0 0 4px #809BCE, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <img src="/images/uts-logo.svg" alt="UTS Logo" />
                    <h3 className={styles.verticalTimelineElementTitle}>Masters of Information Technology (Software Development)</h3>
                    <h4 className={styles.verticalTimelineElementSubtitle}>University of Technology, Sydney</h4>
                    <p>
                    Programming (Java, .NET, Python, JS), Database (SQL), Data Analytics,  Project Management, IT Business Theory 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ borderTop: '5px solid #64f4ac', color: '#242424' }} 
                    className={styles.verticalTimelineElement}
                    date="2019 - 2020"
                    iconStyle={{ background: '#ffffff', color: '#242424', boxShadow: '0 0 0 4px #64f4ac, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}
                >
                    <img src="/images/gp-logo.svg" alt="General Pants Logo" />
                    <h3 className={styles.verticalTimelineElementTitle}>Front End Developer</h3>
                    <h4 className={styles.verticalTimelineElementSubtitle}>General Pants Group</h4>
                    <p>
                    Front-End Development, UX/UI Design, A/B Testing, Web Analytics Tracking (Google Analytics)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ borderTop: '5px solid #809BCE', color: '#242424' }} 
                    className={styles.verticalTimelineElement}
                    date="2020 - 2020"
                    iconStyle={{ background: '#ffffff', color: '#242424', boxShadow: '0 0 0 4px #809BCE, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <img src="/images/uts-logo.svg" alt="UTS Logo" />
                    <h3 className={styles.verticalTimelineElementTitle}>Graduate Certificate of Information Technology</h3>
                    <h4 className={styles.verticalTimelineElementSubtitle}>University of Technology, Sydney<br></br><br></br>Achievement: UTS Dean's List 2020 (HD Average)</h4>
                    <p>
                    Programming (Java), Database (SQL), Project Management, IT Business Theory 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ borderTop: '5px solid #64f4ac', color: '#242424' }} 
                    className={styles.verticalTimelineElement}
                    date="2017 - 2019"
                    iconStyle={{ background: '#ffffff', color: '#242424', boxShadow: '0 0 0 4px #64f4ac, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}
                >
                    <img src="/images/ikea-logo.svg" alt="IKEA Logo" />
                    <h3 className={styles.verticalTimelineElementTitle}>Digital Specialist (Conversion Optimisation & Front-End Development)</h3>
                    <h4 className={styles.verticalTimelineElementSubtitle}>IKEA Australia</h4>
                    <p>
                    Conversion Optimisation, UX/UI Design, A/B Testing (Optimizely), Front-End Development, Web Analytics Tracking (Google Analytics & Adobe Analytics)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ borderTop: '5px solid #64f4ac', color: '#242424' }} 
                    className={styles.verticalTimelineElement}
                    date="2017 - 2017"
                    iconStyle={{ background: '#ffffff', color: '#242424', boxShadow: '0 0 0 4px #64f4ac, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}
                >
                    <img src="/images/ikea-logo.svg" alt="IKEA Logo" />
                    <h3 className={styles.verticalTimelineElementTitle}>Digital Content Editor</h3>
                    <h4 className={styles.verticalTimelineElementSubtitle}>IKEA Australia</h4>
                    <p>
                    Content Editing, Conversion Optimisation, Front-End Development, Web Analytics (Google Analytics & Adobe Analytics)
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default ExperienceTimeline
