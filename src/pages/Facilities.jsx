import React from 'react';


export default function Facilities() {
    const facilities = [
        { id: 1, src: "/Fac1.png", title: "CARDIO ZONE" },
        { id: 2, src: "/Fac2.png", title: "EXCERCISE STUDIO" },
        { id: 3, src: "/Fac3.png", title: "WEIGHT TRAINING" },
        { id: 4, src: "/Fac4.png", title: "FUNCTIONAL ZONE" },
    ];
    return (
        <div className='w-[1441px] h-[532px] pl-28 pr-28 '>
            <div className=' h-[86px] text-[#fa2a20] text-4xl font-bold flex justify-center    '>
                FACILITIES</div>
            <p className=' h-[18px] text-base text-[#4C4C4C] flex justify-center'>HOW IT FEELS TO BE WITH US</p>
            <p className=' h-[56px] text-base text-[#606060] text-center leading-relaxed flex items-center justify-center '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse laborum.</p>

            <div className='w-[1217px] h-[280px] gap-[32px] mt-22 flex justify-center'>
                {facilities.map((facility) => (
                    <div key={facility.id} className="flex flex-col items-center">
                        <img
                            src={facility.src}
                            alt={facility.title}
                            className=' relative w-[280.25px] h-[280px]'
                        />
                        <h2 className="absolute bottom-[300px]  text-[#FFFFFF] font-bold whitespace-nowrap  w-[157px] h-[44px] text-xl font-oswald ">
                            {facility.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>


    )
}