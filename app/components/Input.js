'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
function Input() {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null)
    const inputHandler = (event) => {
        setInput(event.target.value);
        console.log(input)
    };

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.API_KEY}`)
        const res = await request.json();
        console.log(res)
        setData(res)
    }
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <form onSubmit={onSubmitHandler} className='w-full flex mb-20 self-center items-center justify-center gap-2'>
                <input  
                type="text"
                onChange={inputHandler}
                value={input} 
                className='w-2/4 self-start bg-zinc-700 p-2 text-cyan md:mx-auto rounded-sm'
                placeholder='Search a city'
                />
                <button className='md:hidden p-2 bg-cyan-700 rounded-sm'>Search</button>
            </form>

            <div className='w-full flex flex-col items-center text-black'>
             {data ? (
               <>
                {data.cod === 200?(
                    <>
                    <div className='flex items-center gap-4'>
                        <Image src={'/country.png'} alt='Temperature icon' width={50} height={50}/>
                        <h1 className='text-bold text-2xl'>{data && (data.name)}</h1>
                        <Image src={`https://flagcdn.com/16x12/${data.sys.country.toLowerCase()}.png`} alt='Temperature icon' width={15} height={15}/>
                    </div>
                    <div className='flex justify-center flex-col items-center'> 
                        <p className='text-lg text-black font-black'>
                            {data.weather[0].main} - {data.weather[0].description} 
                        </p>
                    </div>

                    <div className='w-full flex gap-20 justify-center my-10'>
                        <div className='flex items-center gap-4 text-black font-black'>
                            <Image src={'/temparature.png'} alt='Temperature icon' width={50} height={50}/>
                            : {data.main.temp}
                        </div>
                        <div className='flex items-center gap-4 text-black font-black'>
                            <Image src={'/storm.png'} alt='Wind Speed icon' width={50} height={50}/>
                            : {data.wind.speed}
                        </div>
                    </div>
                    <div className='w-full flex gap-20 justify-center my-10'>
                        <div className='flex items-center gap-4 text-black font-black'>
                            <Image src={'/humidity.png'} alt='Humidity icon' width={50} height={50}/>
                            : {data.main.humidity}
                        </div>
                        <div className='flex items-center gap-4 text-black font-black'>
                            <Image src={'/sea-level.png'} alt='Sea Level  icon' width={50} height={50}/>
                            : {data.main.sea_level}
                        </div>
                    </div>
                    </>
                ):(
                    <div className='p-20 w-full flex flex-col items-center justify-center gap-5'>
                         <Image src={'/warning.png'} alt='Sea Level  icon' width={50} height={50}/>
                        <p className='my-2 font-black'>
                            {data.message}
                        </p>
                    </div>
                )}
               </>
                
                ):(
                    <>
                        <Image src={'/exploration.png'} alt='Sea Level  icon' width={100} height={100}/>
                        <p className='text-2xl font-extrabold'>Search a City</p>
                    </>
                )}

             
        </div>
        </div>
    );
}

export default Input;