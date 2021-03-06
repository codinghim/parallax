import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    let styleArrOne = [styles.section, styles.parallax, styles.bg_1]
  let styleArrTwo = [styles.section, styles.static]
  let styleArrThree = [styles.section, styles.parallax, styles.bg_2]
  
  return (
    <div className={styles.wrapper}>
    <section className={styleArrOne.join(' ')}>
      <h1 className={styles.section_header_1}>Welcome to Steak House</h1>
      <p className={styles.lg_font}>Where True High Quality Meat Is Served.</p>
    </section>
    <section className={styleArrTwo.join(' ')}>
      <div className={styles.content_container}>
        <div className={styles.text_container}>
          <h1 className={styles.section_header_2}>We&apos;ve perfected and refined our craft over a period of 30 years.</h1>
          <p>Practice makes perfect and our chefs are here to prove it. This is a paragraph and you can edit it with whichever text you desire. Lorem Ipsum.</p>
        </div>

        <div className={styles.img_container}>
        </div>
      </div>
    </section>
    <section className={styleArrThree.join(' ')}>
       <h1 className={styles.flavor_header}>We don&apos;t settle for less, and neither should you</h1>
       <p className={styles.flavor_text}>Our ingredients are fresh and organic. We strive to use the ingredients of the best quality and review our imports thoroughly. This is a paragraph and you can edit it with whichever text you desire. Lorem Ipsum.</p>
    </section>
    <section className={styleArrTwo.join(' ')}>

      <div className={styles.content_container}>
        <div className={styles.img_container_2}>
        </div>
        <div className={styles.text_container}>
          <h1 className={styles.section_header_2}>Sate your hunger with something deserving.</h1>
          <p>Explore our wide variety of steak cuisine and great drinks to complement them. This is a paragraph and you can edit it with whichever text you desire. Lorem Ipsum.</p>
        </div>
      </div>
    </section>
    </div>
  )
}
