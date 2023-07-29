import React from 'react'

const user = ({name, country, city, email, gender, cover}) => {
    return (
        <li className='flex max-w-[800px] m-auto  w-full p-4 bg-white border rounded-md h-[300px] '>
            <div className=" w-[300px] bg-gray-100 h-full rounded-md overflow-hidden">
                <img className='w-full object-cover h-full' src={cover} alt="" />
            </div>

            <div className=" flex flex-col mt-4 gap-8 m-2">
                <p className=' text-slate-500'><strong className=' text-slate-700'>🧑‍🦱Name</strong>: {name}</p>
                <p className=' text-slate-500'><strong className=' text-slate-700'>🏙️Country</strong>: {country} </p>
                <p className=' text-slate-500'><strong className=' text-slate-700'>🏘️City</strong>: {city}</p>
                <p className=' text-slate-500'><strong className=' text-slate-700'>✉️ Email</strong>: {email}</p>
                <p className=' text-slate-500'><strong className=' text-slate-700'>⚧ Gender</strong>: {gender}</p>
            </div>
        </li>
    )
}

export default user