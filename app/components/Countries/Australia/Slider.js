"use client"
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Slider() {
    return (
      <>
      
<div className="h-56 sm:h-64 xl:h-80 2xl:h-[38rem]">
  <Carousel slide={false}>

  <Image width={800} height={800} src="/photos/canada/8.png"alt="canada" />

  <Image width={800} height={800} src="/photos/canada/1.png"alt="canada" />

  <Image width={800} height={800} src="/photos/canada/2.png"alt="canada" />
    
  </Carousel>
</div>


      
      </>
    )
}