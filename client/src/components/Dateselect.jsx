import React from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Dateselect = ({ dateTime, id }) => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [selected, setSelected] = useState(null)

    const onBookHandler = () => {
        if (!selected) {
            return toast('Please select a date')
        }
        navigate(`/movies/${id}/${selected}`)
        scrollTo(0, 0)
    }

    return (
        <div id={id || "dateSelect"} className="pt-30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-top-right/10 border border-primery/20 rounded-lg">
                <BlurCircle top="-100px" left="-100px" />
                <BlurCircle top="-100px" left="0px" />
                <div>
                    <p className="text-primary">Choose Date</p>
                    <div className="flex items-center gap-6 text-sm mt-5">
                        <ChevronLeftIcon width={28} />
                        <span className="grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4" >
                            {Object.keys(dateTime || {}).map(date => (
                                <button onClick={() => setSelected(date)} key={date} className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded-md border transition cursor-pointer active:scale-95 ${selected === date ? "bg-primary border-primary text-white" : "border-gray-500 hover:border-primary"}`}>
                                    <span>
                                        {new Date(date).getDate()}
                                    </span>
                                    <span >
                                        {new Date(date).toLocaleString("en-US", { month: "short" })}
                                    </span>

                                </button>
                            ))}

                        </span>
                        <ChevronRightIcon width={28} />
                    </div>
                </div>
                <button onClick={onBookHandler} className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/80 transition">
                    Book Show
                </button>
            </div>
        </div>
    )
}

export default Dateselect