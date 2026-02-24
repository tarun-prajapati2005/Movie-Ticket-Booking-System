import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon, Clapperboard } from 'lucide-react'

// Extract YouTube video ID from URL
const getYouTubeId = (url) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  return match ? match[1] : '';
};

const TraileraSection = () => {

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-20 py-20 overflow-hidden'>
      <div className='flex items-center gap-3 max-w-240 mx-auto mb-2'>
        <Clapperboard className='text-pink-500 w-6 h-6' />
        <h4 className='text-2xl md:text-3xl font-bold bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
          Latest Trailers
        </h4>
      </div>
      <p className='text-gray-400 text-sm max-w-240 mx-auto'>Watch the hottest movie trailers 🔥</p>
      <div className='relative mt-6'>
        <BlurCircle top='-50px' left='1200px' />
        <div className='mx-auto max-w-4xl aspect-video bg-black rounded-xl overflow-hidden'>
          <iframe
            src={`https://www.youtube.com/embed/${getYouTubeId(currentTrailer.videoUrl)}?rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className='w-full h-full'
          />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className={`relative hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer ${currentTrailer.videoUrl === trailer.videoUrl ? 'ring-2 ring-white rounded-lg' : ''}`}
            onClick={() => setCurrentTrailer(trailer)}
          >

            <img src={trailer.image} alt="trailer" className='rounded-lg w-full h-full object-cover brightness-75' />
            <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
        ))}

      </div>

    </div>
  )
}

export default TraileraSection