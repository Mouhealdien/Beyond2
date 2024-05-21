import React from 'react'
import { Container } from '../global/Container'
import ServicesCard from './ServicesCard'

const OurServicesSection = () => {

    const arr=[1,2,3,4,5,6,7]
  return (
    <Container>
<div className='flex  gap-8 justify-center items-center  flex-wrap md:flex-nowrap  md:flex-row py-10'>
    <div className='flex gap-4 justify-center flex-col'>
        <h1 className='text-white px-2 lg:px-5 py-4 rounded-xl text-center bg-orange-500 text-xl md:text-2xl lg:text-4xl'>Our Services</h1>
        {
            arr.map((e,i)=>{
                if(i<2)
                return(
                    <ServicesCard key={i}/>
                )
            })
        }
    </div>

    <div className='flex gap-4  flex-col'>
        
        {
            arr.map((e,i)=>{
                if(i>=2 &&i<4)
                return(
                    <ServicesCard key={i}/>
                )
            })
        }
    </div>


    <div className='flex gap-4  justify-center flex-row flex-wrap md:flex-col'>
        
        {
            arr.map((e,i)=>{
                if(i>=4 &&i<arr.length)
                return(
                    <ServicesCard key={i}/>
                )
            })
        }
    </div>
    
</div>
    </Container>
  )
}

export default OurServicesSection