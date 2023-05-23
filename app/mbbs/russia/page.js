import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Mbbsrussia from '../../components/Mbbs/Mbbsrussia'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Mbbsrussia/>

<Footer/>


</>
  )
}
