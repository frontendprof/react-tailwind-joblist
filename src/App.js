import React,{useState,useEffect} from "react";
import data from "./assets/data.json";
import JobBoard from "./components/JobBoard";


const App=()=> {

  const[jobs,setJobs]=useState([]);

  useEffect(()=>setJobs(data),[])

  console.log(jobs);
  return (
    <div>
      <h2 className="text-4xl text-center">Hello my friends</h2>

      {jobs.length===0?<div>Fetching the jobs ...</div>:(
        jobs.map(job=>(
          <JobBoard key={job.id} job={job} />
        ))
      )}
    </div>
  );
}

export default App;
