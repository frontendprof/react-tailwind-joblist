

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
        <div className={`flex flex-col bg-blue-100 shadow-lg my-16 mx-10 p-6 rounded w-11/12 ml-16 sm:flex-row
            ${featured&& 'border-l-4 border-indigo-800 border-solid'}
        `}>
            
            <div>
                <img className=" -mt-16 mb-4 w-20 h-20 sm:my-0 sm:h-24 sm:w-24" src={logo} alt={company}/>
            </div>

            <div className="ml-4 flex flex-col justify-between">
                <h3 className="font-bold text-purple-500">
                    {company}
                    {isNew&&<span className="text-gray-600 bg-yellow-500
                    font-normal m-2 px-1 py-2 rounded-full uppercase text-sm">New</span>}
                    {featured&&<span className="text-yellow-300 bg-pink-700 uppercase
                    font-normal m-2 p-2 rounded-full text-sm">Featured</span>}

                </h3>
                <h2 className="font-bold text-xl my-2">{position}</h2>
                <p className="text-gray-700">
                    {postedAt}&middot;{contract}&middot;{location}
                </p>

            </div>

            <div className="flex mt-4 mx-4 pt-4 border-gray-300 border-solid border-t items-center flex-wrap 
                sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
                {tags?(
                    tags.map((tag,ind)=><span key={ind} className="text-indigo-400 bg-indigo-100
                    font-bold mr-4 mb-2 p-1 rounded-xl sm:mb-0">{tag}</span>)
                ):""}
            </div>
        </div>
    )
}

export default JobBoard
