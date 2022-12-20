import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMovie = () => {
    const movie = useLoaderData();

    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            <div className='flex h-[450px]'>
                <img className='w-[300px]' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt='' />
                <div className='bg-gray-900 rounded-lg w-full border-2 ml-5'>p</div>
            </div>

            <div className='flex justify-between mt-10 '>
                <div className='w-1/2 text-left'>
                    <p className=' text-5xl font-bold mb-10'>{movie.title}</p>
                    <p>{movie.overview}</p>
                </div>
                <div className='mr-32 mt-20'>
                    <div className='flex'>
                        <FontAwesomeIcon className='w-10 h-10' icon={faStar} />
                        <p className='text-4xl font-semibold'>{movie.vote_average}<span className='text-2xl font-normal text-gray-400 '>/10 ({movie.vote_count})</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;