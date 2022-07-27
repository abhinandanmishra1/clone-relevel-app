import React, {useState} from 'react'
import { jobs } from '../jobs';
import Jobs from './Jobs';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

export default function JobPortal() {
  const [currentPage,setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(9);
  const [searchTerm,setSearchTerm] = useState("");
  const indexOfLastJob=currentPage*jobsPerPage;
  const indexOfFirstJob=indexOfLastJob-jobsPerPage;
  const currentPageJobs=jobs.filter((job)=>{
    if(setSearchTerm==="") return job;
    if(job.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return job;
    }
  }).slice(indexOfFirstJob,indexOfLastJob);

  const paginate=(pageNumber)=> setCurrentPage(pageNumber);
  return (
    <div className='w-5-6 flex flex-col h-screen border-l-1 p-4 items-center'>
      <SearchBar setSearchTerm={setSearchTerm} />   
      <Jobs jobs={currentPageJobs} />
      <Pagination currentPage={currentPage} postsPerPage={jobsPerPage} totalPosts={jobs.length} paginate={paginate}/>
    </div>
  )
}
