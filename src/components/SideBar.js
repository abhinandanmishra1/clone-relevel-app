import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilterCircleDollar,faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import logo from "../images/logo.png";

export default function SideBar() {
  return (
    <div className='w-1-6 flex flex-col items-center h-96 justify-around'>
      <img className='w-6 h-6 cursor-pointer' src={logo} alt="logo" />
      <FontAwesomeIcon className='w-6 h-6 cursor-pointer' icon={faUserGroup} />
      <FontAwesomeIcon className='w-6 h-6 cursor-pointer' icon={faFilterCircleDollar} />
      <FontAwesomeIcon className='w-6 h-6 cursor-pointer' icon={faEdit} />
    </div>
  )
}
