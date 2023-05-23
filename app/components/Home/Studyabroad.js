"use client";
import {Dropdown, Card} from "flowbite-react";
import Image from "next/image";


export default function Studyabroad() {
    return (
      <>




{/* Free Education  lg, md device */}


<div className=" sr-only sm:not-sr-only rounded-md  ">
<h1 className="text-white text-md  text-2xl text-center  m-5"><b>STUDY IN ABROAD</b></h1>
<div className="grid lg:grid-cols-4 md:grid-cols-2 place-items-center gap-5 m-5">


<div className="max-w-sm">
  <Card imgSrc="photos/studyabroad/usa.png">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
    STUDY IN USA
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Discover the famous American educational system, which places a focus on research, innovation, and academic performance. The US provides a wide selection of programmes across numerous disciplines, from Ivy League colleges to top-ranked schools, allowing you the chance to explore your interests and be the best in your profession.
    </p>
  </Card>
</div>

<div className="max-w-sm">
  <Card imgSrc="photos/studyabroad/aus.png">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
    STUDY IN AUSTRALIA
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Embark on an educational adventure Down Under in Australia. Known for its world-class universities and cutting-edge research facilities, Australia offers a dynamic learning environment that fosters innovation and creativity. Immerse yourself in a multicultural society, enjoy a high standard of living, and explore stunning landscapes, from pristine beaches to the outback.
    </p>
  </Card>
</div>

<div className="max-w-sm">
  <Card imgSrc="photos/studyabroad/uk.png">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
    STUDY IN UK
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    <br/> Immerse yourself in the rich academic heritage of the United Kingdom. Choose from prestigious universities that uphold a tradition of quality education and offer diverse courses designed to challenge and inspire you. Benefit from the UK&apos;s strong emphasis on research, critical thinking, and practical skills development.
    </p>
  </Card>
</div>


<div className="max-w-sm">
  <Card imgSrc="photos/studyabroad/canada.png">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
    STUDY IN CANADA
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Discover Canada&apos;s welcoming and inclusive environment for international students. Renowned for its high-quality education, Canada offers a range of programs that cater to diverse interests and career aspirations. Take advantage of the country&apos;s multicultural society, vibrant cities, and breathtaking natural landscapes while pursuing your educational goals.
    </p>
  </Card>
</div>







</div>




</div>




{/* STUDY ABROAD  small device  */}


<div className="max-w-sm m-3 lg:hidden md:hidden ">
  <Card className="bg-sky-200">
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 text-center">
      STUDY ABROAD
      </h5>
     
    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <Image width={100} height={100}
                className="h-8 w-8 rounded-full"
                src="/photos/studyabroad/usa.png"
                alt="Neil image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                STUDY ABROAD
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              single line comment about country
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <a href="#">MoreInfo</a>
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <Image width={100} height={100}
                className="h-8 w-8 rounded-full"
                src="/photos/studyabroad/aus.png"
                alt="Bonnie image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              STUDY ABROAD
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              single line comment about country
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a href="#">MoreInfo</a>
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <Image width={100} height={100}
                className="h-8 w-8 rounded-full"
                src="/photos/studyabroad/uk.png"
                alt="Michael image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              STUDY ABROAD
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              single line comment about country
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a href="#">MoreInfo</a>
            </div>
          </div>
        </li>
     
        <li className="pt-3 pb-0 sm:pt-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <Image width={100} height={100}
                className="h-8 w-8 rounded-full"
                src="/photos/studyabroad/canada.png"
                alt="Thomas image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              STUDY ABROAD
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                single line comment about country
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a href="#">MoreInfo</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</div>



</>
    )
  }