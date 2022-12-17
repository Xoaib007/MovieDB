import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {

    const { movies } = useQuery({
        queryKey: ['movies'],
        queryFn: () =>
          fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=6d47a4eb4a550f0aec87d70e03ce12ae').then(res =>
            res.json()
          )
      })
    return (
        <div className='flex gap-7 overflow-x-auto'>
        {
            movies?.results?.map((movie, i)=>
                <MovieCard key={i} title={movie.title} released={movie.released} imageUrl={movie.poster_path} />
            )
        }
            
        </div>
    );
};

export default MovieList;