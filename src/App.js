import React,{useState,useEffect} from "react";
import data from "./assets/data.json";
import JobBoard from "./components/JobBoard";


const App=()=> {

  const[jobs,setJobs]=useState([]);

  useEffect(()=>setJobs(data),[])

  console.log(jobs);
  return (
    <div>
      <header className="mb-12 bg-indigo-300">
        <img src="/images/bg-header-desktop.svg" alt="header-img"/>
      </header>

      {jobs.length===0?<div>Fetching the jobs ...</div>:(
        jobs.map(job=>(
          <JobBoard key={job.id} job={job} />
        ))
      )}
    </div>
  );
}

export default App;
