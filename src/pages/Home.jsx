import React from 'react';
import Navbar from '../components/Navbar';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';


export default function Home() {
    return (
        <section className='h-screen bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: "url('/LandingPage.png')" }}>
            <Navbar />

            <div className="relative bottom-[120px] w-[782px] mx-auto h-full flex items-center gap-20 text-white z-0">

                {/* Play Icon */}
                <div className="absolute left-[-50px] top-[300px] w-26 h-26 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition">
                    <FaPlay className="text-white text-2xl ml-1" />

                    <h1 className="absolute top-[250px] rotate-270 text-white text-sm font-medium">PLAY VIDEO</h1>
                </div>

                {/* Text */}
                <div>
                    <p className="absolute left-[150px] top-[300px] text-[#fa2a20] font-semibold">CARDIO</p>
                    <h1 className="absolute left-[150px] bottom-[300px] text-8xl font-bold leading-tight">
                        LIVE IT <br /> LIKE A ROCK!
                    </h1>
                </div>

                {/* Bottom Left Slider Controls */}
                <div className=" w-[740] h-[100px] border-3 border-blue/30 flex justify-center">
                    <div className="absolute left-[-505px] bottom-[-55px]  bg-white/20 backdrop-blur-md  w-[477px] h-[70px] flex items-center text-white">

                        {/* Page Number */}
                        <span className="mr-6 text-sm text-black">1 / 4</span>

                        {/* Line */}
                        <div className="flex-1 h-[2px] bg-white/30 mr-6 text-black" ></div>

                        {/* Arrows */}
                        <div className="flex gap-4">
                            <FaArrowLeft className="cursor-pointer hover:text-red-500 transition" />
                            <FaArrowRight className="cursor-pointer hover:text-red-500 transition" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}