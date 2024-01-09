import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

    const [tag, setTag] = useState('');

    const {gif, loading, fetchData} = useGif(tag);

    return (
        <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            
            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>RANDOM {tag} GIF</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width='450' alt = 'gif'/>)
            }

            <div className='w-full flex flex-col items-center gap-y-1'>
            <input 
            className='w-10/12 text-lg py-2 rounded-lg mb-[4px] text-center'
            onChange={(event) => setTag(event.target.value)}
            value={tag}
            />

            <button onClick={() => fetchData(tag)}
            className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
            </div>
        </div>
    )
}

export default Tag
