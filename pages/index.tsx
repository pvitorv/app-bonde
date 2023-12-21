import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/home.module.css'
import bonde from '../public/assets/logo-bonde.png.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="icon" href="/favicon.png" />
        <title>Bonde+ | Embarque nesse bomde!</title>
        
      </Head>
      
        <div>
            <main className= {styles.main}>
              <div className={styles.logoContente}>
                <Image className={styles.hero} alt='Logo Bonde'src={bonde} priority />
              </div>
              <h1 className= {styles.title} >Já sabe para onde esse bonde vai?</h1>
            </main>
            <div className={styles.infoContent} >
              <section className={styles.box}><span>+12 posts</span></section>
              <section className={styles.box}><span>+17 comentários</span></section>
            </div>
        </div>
      
    </div>
  )
}
