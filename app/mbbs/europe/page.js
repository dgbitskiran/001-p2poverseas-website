import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Europe from '../../components/Mbbs/Europe'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Europe/>

<Footer/>


</>
  )
}
