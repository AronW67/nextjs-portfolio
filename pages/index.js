import React, {useState, useEffect} from 'react'
import styles from '../styles/CardSection.module.css'
import {Card} from '../components/Card'
import cardData from '../public/data/CardData.js'
import {TechSwiper} from '../components/TechSwiper'

export default function Home() {

  const [projectData, setProjectData] = useState({});

  const [loading, setLoading] = useState(true);

  const getProjectData = () => {
    setLoading(true);
    try {
      fetch('/api/projects', {
        method: 'GET',
      }).then((res) => res.json())
      .then((data) => {
        setProjectData(data);
        setLoading(false);
      })
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <>
      <section className={styles.cardContainer}>
      <div className={`${styles.card} ${styles.headerCard}`}>
          <div className={styles.heroContainer}>
              <h1>ARON WEARING</h1>
              <h2><span>WEB DEVELOPER</span></h2> 
              <p>Greetings! I created this site as a platform to display some of my professional and personal work. Feel free to check it out!</p>
          </div>
          </div>
          {!loading
            ? projectData.map((project)=>{
                return <Card key={project.id} id={project.id} title={project.title} img={project.img} tags={project.tags} />;
            }) : 'Loading...'
          }
      </section>
      <TechSwiper />
    </>
  )
}
