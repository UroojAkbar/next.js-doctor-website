// import {client} from "../../sanity/lib/client"
// import Image from "next/image";

// async function getData(){
//   // const fetchData = await client.fetch(`*[_type=="pet" ]`) 
//   const fetchData = await client.fetch(`*[_type=="pet" ]{
//     pname,
//       "imageUrl": image.asset->url
//   }`) ;
//   return fetchData;
// }

// export default async function Home(){
//   const data = await getData();
//   // console.log(data)
//   return(
//     <div className="flex max-h-screen flex-col items-center p-24">
//       <h1>Sanity Data</h1>
//       {
//         data.map((value:any,index:number) =>{
//           return(
//          <>
//          <h1 key={index}>{value.pname}</h1>
//          <h1 key={index}>{value.description}</h1>
//          <Image src={value.imageUrl} width={500} height={500} alt="image" />
//          <button >Book Appointment</button>
//          </>
//           )
//         })
//       }
//     </div>
//   )
// }


// import React from 'react'
// import Link from 'next/link'

// const page = () => {
//   return (
//     <div>
//       home
//     </div>
//   )
// }



import React from 'react'
import Hero from './components/hero'

import Testemonials from './components/Testemonials'
import Blogs from './components/Blogs'
import Branches from './components/Branches'
import WhatsApp from './Watsapp'
const page = () => {
  return (
    <div>
      <Hero/>
<Blogs/>
<Branches/>
<Testemonials/>
<WhatsApp/>
     
    </div>
  )
}

export default page
