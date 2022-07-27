import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar({setSearchTerm}) {
  return (
    <div className='w-full flex justify-center items-center m-2'>
      <input onChange={(e)=>setSearchTerm(e.target.value)} className='w-2-3 p-2 border-0 border-b-1 text-lg border-gray outline-none' />
      <FontAwesomeIcon className='ml-2 cursor-pointer' icon={faSearch} />
    </div>
  )
}
