import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Image src="/space.jpeg" width={400} height={400} alt="teste"/>
    </div>
  )
}
