import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Fullpage from '../../components/Coaching/Tofel/Fullpage.js'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Fullpage/>

<Footer/>


</>
  )
}
