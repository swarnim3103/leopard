import { motion } from "framer-motion";
import eyes from "../assets/eyes.png";
import {Link} from "react-router";
export default function Rules(){
    document.addEventListener('keydown', function (e) {
  const btn = document.getElementById('btn');
  if (btn) btn.click();
});
    return (
        <>
        <div className="bg-[#0B0B0B] h-screen w-full relative">
            <h1 className="font-serif absolute mt-10 left-1/2 transform -translate-x-1/2 text-6xl text-gray-500 z-20">
                Welcome
            </h1>
        <motion.img
           src={eyes}
            className="absolute top-1/4 left-1/2 z-10 -translate-x-1/2"
            animate={{ 
              opacity: [0.1, 1, 0.1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
            
            <div className="absolute bottom-20 left-1/2  -translate-x-1/2 w-full max-w-4xl text-center z-20 space-y-6 px-8">
                
                <div className="font-serif text-xl text-orange-400 mb-8">
                    &gt; RULES &lt;
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    
                    <div className="bg-[#0D0D0D] bg-opacity-80 p-4 rounded border border-gray-500">
                        <h3 className="font-serif text-lg text-gray-400 mb-2">
                            1. STEALTH MODE
                        </h3>
                        <p className="font-serif text-sm text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores.
                        </p>
                    </div>
                    
                    <div className="bg-[#0D0D0D] bg-opacity-80 p-4 rounded border border-gray-500">
                        <h3 className="font-serif text-lg text-gray-400 mb-2">
                            2. TRACK TARGETS
                        </h3>
                        <p className="font-serif  text-sm text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.
                        </p>
                    </div>
                    
                    <div className="bg-[#0D0D0D] bg-opacity-80 p-4 rounded border border-gray-500">
                        <h3 className="font-serif text-lg text-gray-400 mb-2">
                            3. SURVIVAL
                        </h3>
                        <p className="font-serif text-sm text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, repudiandae.
                        </p>
                    </div>
                    
                    <div className="bg-[#0D0D0D] bg-opacity-80 p-4 rounded border border-gray-500">
                        <h3 className="font-serif text-lg text-gray-400 mb-2">
                            4. CAPTURE
                        </h3>
                        <p className="font-serif text-sm text-gray-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, voluptatibus.
                        </p>
                    </div>
                    
                </div>
                <Link to="/leo">
                    <button id="btn" className="font-serif text-lg text-orange-400 mt-8">
                        PRESS SPACE OR CLICK TO PLAY
                    </button>
                </Link>

            </div>
        </div>
        </>
    );
}