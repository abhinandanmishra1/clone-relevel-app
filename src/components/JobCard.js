import React from 'react'

export default function JobCard({data}) {
  return (
    <div className='w-1-4 border m-2 p-4 shadow-lg h-40'>
      <h1 className='text-xl'>{data.title}</h1>
      <p className='text-sm text-gray-500'>{data.description}</p>
    </div>
  )
}
