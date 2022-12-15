import React from 'react'

function TuneUP() {
  return (
    <div className='w-full h-full bg-red-100 flex flex-col items-center'>
      <div className='flex flex-row gap-6' >
        <div className='rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1'> a </div>
        <div className='rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1'> w </div>
        <div className='rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1'> s </div>
        <div className='rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1'> d </div>
      </div>
      <div className='flex flex-row gap-6' >
        <div className='rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1'> j </div>
        <div className='rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1'> k </div>
        <div className='rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1'> l </div>
      </div>
    </div>
  )
}

export default TuneUP