

import { TagFaces } from '@material-ui/icons'
import React from 'react'

const JobBoard = ({job:{company,tools,logo,featured,position,level,role,location,contract,postedAt,languages,new:isNew},}) => {
    

    const tags=[level,role]

    if(tools){
        tags.push(...tools)
    }

    if(languages){
        tags.push(...languages)
    }

    return (
        <div className={`flex bg-blue-100 shadow-lg m-4 p-6 rounded w-11/12 ml-16
            ${featured&& 'border-l-4 border-indigo-800 border-solid'}
        `}>
            
            <div>
                <img src={logo} alt={company}/>
            </div>

            <div className="ml-4 flex flex-col justify-between">
                <h3 className="font-bold text-purple-500">
                    {company}
                    {isNew&&<span className="text-gray-600 bg-yellow-500
                    font-normal m-2 px-1 py-2 rounded-full">New</span>}
                    {featured&&<span className="text-yellow-300 bg-pink-700
                    font-normal m-2 p-2 rounded-full">Featured</span>}

                </h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-700">
                    {postedAt}&middot;{contract}&middot;{location}
                </p>

            </div>

            <div className="flex ml-auto items-center">
                {tags?(
                    tags.map((tag,ind)=><span key={ind} className="text-indigo-400 bg-indigo-100
                    font-bold m-2 p-1 rounded-xl">{tag}</span>)
                ):""}
            </div>
        </div>
    )
}

export default JobBoard
