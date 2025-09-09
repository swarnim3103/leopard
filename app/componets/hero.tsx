// hate to admit it is taking me more time than it should
//
import leo from "../assets/leo.jpg";
import leos from "../assets/leos.png";
import video from "../assets/roar.mp4";
import {Link} from "react-router";
export function Hero() {
    return (
        <>
 <div className="relative w-full h-screen bg-[#0D0D0D]">
    <img src={leo} className="absolute fit top-0 right-0 z-10" />
    
    <p className="sticky ml-10 top-1/4 left-20 z-20 text-white text-9xl font-serif"><p className=" top-1/5 text-white text-4xl font-serif">Nature's silent athletes</p>Meet The Leopards</p>
    <img src={leos} className="absolute top-0 right-0 z-30" />
</div>

<div className="relative w-full h-screen bg-[#0D0D0D]">
    <video 
        src={video}
        autoPlay 
        loop 
        muted 
        className="absolute mt-50 top-0 left-0 w-full h-full object-cover z-10"
    />
    <div className="absolute inset-0 flex items-center justify-center z-20 ">
        <a href="../components/game.tsx" className="text-white text-8xl font-serif hover:text-gray-300 transition-colors">
            <h2>Start The Hunt</h2>
        </a>
    </div>
</div>

        </>
    );
}
