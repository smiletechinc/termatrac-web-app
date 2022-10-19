import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { SearchView } from '../components/SearchView/SearchView'
import { ResultView } from '../components/ResultView/ResultView'
import { TextareaAutosize, Button } from '@material-ui/core';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Termatrac Dashboard</title>
        <meta name="Termatrac Dashboard" content="Termatrac dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <left>
            <SearchView />
        </left>
            <ResultView />
        <right>
          
        </right>
      
      </main>
      <Footer />
    </div>
  )
}
