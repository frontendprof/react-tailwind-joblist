
import React from 'react'

const JobBoard = ({job:{company,logo,position,location,contract,postedAt,new:isNew},}) => {
    
    return (
        <div className="flex bg-white shadow-lg m-4 p-4">
            
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
        </div>
    )
}

export default JobBoard
