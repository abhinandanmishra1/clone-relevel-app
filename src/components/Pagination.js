import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export default function Pagination({postsPerPage,totalPosts,paginate,currentPage}) {
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    pageNumbers.push(i);
  }
  return (
    <div className='pagination'>
      <FontAwesomeIcon  
      onClick={()=>paginate(currentPage>1?currentPage-1:currentPage)} 
      size='sm'className={`border w-6 h-6 ${currentPage===1 && 'cursor-ban'}`} 
      icon={faAngleLeft}
      />
      {
        pageNumbers.map((pageNumber)=>(
          <li onClick={()=>paginate(pageNumber)} className={`border w-6 h-6 ${currentPage===pageNumber?'active-li':'inactive-li'}`} key={pageNumber}>{pageNumber}</li>
        ))
      }
      <FontAwesomeIcon 
      onClick={()=>paginate(currentPage<pageNumbers.length?currentPage+1:currentPage)} 
      size='xs'className={`border w-6 h-6 ${currentPage===pageNumbers.length && 'cursor-ban'}`}  
      icon={faAngleRight}
      />
    </div>
  )
}
