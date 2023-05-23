"use client"
import { Card, Accordion} from "flowbite-react"
import Image from "next/image"

export default function Topunivercity() {
    return (
      <>
      





<Card>
<Image width={100} height={100}  src="/photos/canada/logo.jpg" alt="USA" className="rounded-xl m-6" />

<div className=" grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-6 grid-col-4 place-items-center  gap-5 m-5 ">

<a href="#" className="group block max-w-xs mx-auto rounded-lg p-1 bg-white-500 ring-2 ring-slate-900/6 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <Image width={100} height={100}  src="/photos/topunivercitys/france/1.png" alt="canada" className="rounded-xl" />
</a>


</div>
</Card>









      </>
    )
}