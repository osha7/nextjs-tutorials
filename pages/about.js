import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function About() {
  return (
    <>
        <Header />
        <h1 className={styles.title}>
          ABOUT Page
        </h1>
    </>
  )
}
