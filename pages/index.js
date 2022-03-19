import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className=" container">
      <Nav/>
      <Landing/>
      <Footer/>
    </div>
  )
}
