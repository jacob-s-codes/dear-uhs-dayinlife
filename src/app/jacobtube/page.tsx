import React from 'react'
import { JacobTubeLogo } from '../components/Jacobtube'
import Bell from '../components/Bell'

const page = () => {
  return (
    <div>
        <div className='flex flex-row items-center justify-between px-12 py-4 bg-black'>
            <a href="/jacobtube"><JacobTubeLogo className="" size="lg" /></a>
            <div className='flex flex-row items-center gap-12'>
                <Bell />
                <img src="/ishanlogo.webp" alt="Ishan logo" className='rounded-full w-15 h-auto'/>
            </div>
        </div>
    </div>
  )
}

export default page