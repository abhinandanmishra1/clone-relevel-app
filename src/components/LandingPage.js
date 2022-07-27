import React from 'react'
import JobPortal from './JobPortal'
import SideBar from './SideBar'

export default function LandingPage() {
  return (
    <div className='flex w-full'>
      <SideBar />
      <JobPortal />
    </div>
  )
}
