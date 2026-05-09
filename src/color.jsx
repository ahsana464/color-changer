import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
function Color() {
    const [color, setColor] = useState("black")
    
    return (
        <>
            <div
                className='w-full h-50 duration-200 '
                style={{ backgroundColor: color, borderRadius: '20px' }}>
            </div>

            <div
                className='flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py- ' >
                <div
                    className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 mt-4 rounded-xl ' >
                    <button
                        onClick={() => setColor("red")}
                        className='outline-none px-4'
                        style={{ backgroundColor: "red" }}>
 
                        RED
                    </button>
                    <button
                        onClick={()=> setColor("blue")} 
                        className='outline-none px-4'
                        style={{ backgroundColor: "blue" }}>
 
                        BLUE
                    </button>
                    <button
                        onClick={()=> setColor("green")} 
                        className='outline-none px-4'
                        style={{ backgroundColor: "green" }}>
 
                        GREEN
                    </button>
                    <button
                        onClick={()=> setColor("grey")} 
                        className='outline-none px-4'
                        style={{ backgroundColor: "grey" }}>
 
                        GREY
                    </button>
                    <button
                        onClick={()=> setColor("yellow")} 
                        className='outline-none px-4'
                        style={{ backgroundColor: "yellow" }}>
 
                        YELLOW
                    </button>
                    <button
                        onClick={()=> setColor("pink")}
                        className='outline-none px-4'
                        style={{ backgroundColor: "pink" }}>
 
                        PINK
                    </button>
                    <button
                        onClick={()=> setColor("olive")}
                        className='outline-none px-4'
                        style={{ backgroundColor: "olive" }}>
 
                        olive
                    </button>
                    <button
                        onClick={()=> setColor("purple")}
                        className='outline-none px-4'
                        style={{ backgroundColor: "purple" }}>
 
                        PURPLE
                    </button>
                </div>
            </div>

        </>
    )
}

export default Color