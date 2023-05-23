import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Arminia from '../../components/Mbbs/Arminia'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Arminia/>

<Footer/>


</>
  )
}
