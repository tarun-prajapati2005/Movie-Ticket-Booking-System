import React from 'react'
import { ArrowRight, Film } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './MovieCard'

const FeaturedSection = () => {
    const navigate = useNavigate()
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
            <div className='relative flex items-center justify-between pt-20 pb-10'>
                <BlurCircle top="0" right='-80px' />
                <div className='flex items-center gap-3'>
                    <Film className='text-pink-500 w-6 h-6' />
                    <h2 className='text-2xl md:text-3xl font-bold bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
                        Now Showing
                    </h2>
                    <span className='bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse'>NEW</span>
                </div>
                <button onClick={() => navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300 hover:text-pink-400 transition-colors cursor-pointer font-medium'>
                    View All
                    <ArrowRight className="group-hover:translate-x-1 transition-transform w-4.5 h-4.5" />
                </button>
            </div>

            <div className='flex flex-wrap max-sm:justify-start justify-center gap-8 mt-8'>
                {dummyShowsData.slice(0, 4).map((show) => (<MovieCard key={show._id} movie={show} />))}
            </div>



            <div className='flex justify-center mt-20'>
                <button onClick={() => { navigate('/movie'); scrollTo(0, 0) }} className='flex items-center gap-2 px-8 py-3.5 text-sm bg-linear-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 transition-all duration-300 rounded-full font-semibold cursor-pointer shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105'>Show more</button>
            </div>


        </div>
    )
}

export default FeaturedSection