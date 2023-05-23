import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Georgia from '../../components/Mbbs/Georgia'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Georgia/>

<Footer/>


</>
  )
}
