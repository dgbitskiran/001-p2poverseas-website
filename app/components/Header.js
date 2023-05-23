"use client"
import Image from "next/image";

import { Card} from "flowbite-react"

export default function Header() {
  return (
    <>    
{/*Header */} 

  <div className=" grid lg:grid-cols-4 md:grid-cols-2 bg-white rounded-lg place-items-center">

  <div className="card-body items-center">
  <Image width={200} height={300} src="/photos/22years/pp.png"  alt="contact us "/>
  </div>

  <div className="card-body flex items-center sr-only sm:not-sr-only">
  <Image width={200} height={300} src="/photos/22years/22.png"  alt="contact us "/>
  </div>

  <div className="card-body flex items-center sr-only sm:not-sr-only ">
  <Image width={200} height={300} src="/photos/22years/chat.png"  alt="chat us "/>
  </div>


<Card className=" bg-[url('/photos/enbg.png')]  h-40 sr-only sm:not-sr-only  text-white">
<h2 className="card-title text-sm">CONTACT US FOR ENQUIRY / FRANCHISE</h2>
<h2 className="card-subtitle">E-MAIL:enquiry@p2poverseas.com<br/>franchise@p2poverseas.com <br/>PH: +91-8019999564 <br/>Land Line: 040-29337111 / 222</h2>
</Card>


</div>










{/*Header*/} 
 


    </>
  )
}



