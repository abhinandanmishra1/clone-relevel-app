import React from 'react'
import JobCard from './JobCard';

export default function Jobs({jobs}) {
  return (
    <div className='flex flex-wrap w-11-12 h-full justify-center'>
    {
      jobs.map((job)=> <JobCard data={job} />)
    }
  </div>
  )
}
