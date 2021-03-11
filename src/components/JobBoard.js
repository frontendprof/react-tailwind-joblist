

import React from 'react'

const JobBoard = ({job:{company,tools,logo,position,location,contract,postedAt,languages,new:isNew},}) => {
    
    return (
        <div className="flex bg-white shadow-lg m-4 p-6">
            
            <div>
                <img src={logo} alt={company}/>
            </div>

            <div className="ml-4 flex flex-col justify-between">
                <h3 className="font-bold text-purple-500">{company}</h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-700">
                    {postedAt}&middot;{contract}&middot;{location}
                </p>

            </div>

            <div className="flex ml-auto items-center">
                {languages?(
                    languages.map((lan,ind)=><span key={ind} className="text-indigo-400 bg-indigo-100
                    font-bold m-2 p-1 rounded">{lan}</span>)
                ):""}

                {/* {tools?(
                    tools.map(tool=><span>{tool}</span>)
                ):""} */}
            </div>
        </div>
    )
}

export default JobBoard
