import React from 'react'
import MessageContainer from './MessageContainer'
import Sidebar from './Sidebar'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-40'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage