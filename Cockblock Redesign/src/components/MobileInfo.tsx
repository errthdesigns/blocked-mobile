import { motion } from 'motion/react';
import imgGroup2331 from "figma:asset/e2fa7924faadaab3b607786dd00b91529258b98e.png";

interface MobileInfoProps {
  onNavigate: (page: 'use' | 'merch' | 'info') => void;
  onToggleMenu: () => void;
}

export default function MobileInfo({ onNavigate, onToggleMenu }: MobileInfoProps) {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="mobile-1">
      <div className="absolute h-[452px] left-[37px] top-[177px] w-[328px]">
        <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-0 justify-center leading-[normal] text-[#ffe7e0] text-[20px] text-center tracking-[0.8px] gap-5">
          <p className="m-0">
            <span className="font-['Archivo_Narrow:Bold',sans-serif] font-bold text-[magenta] tracking-[0.64px]">Meet Cockblock. </span>
            <span>
              <br aria-hidden="true" />
              The watermark that protects your art from AI learning. Cockblock is not only a tool that sticks a spanner in the works, it's a badge that shows we stand on the side of humanity.{" "}
            </span>
          </p>
          <p className="m-0">
            <span className="font-['Archivo_Narrow:Bold',sans-serif] font-bold text-[magenta] tracking-[0.64px]">How does it work? </span>AI rejects nudity, so we've created the first ever penis watermark to paste across your art.
          </p>
          <p className="m-0">
            <span className="font-['Archivo_Narrow:Bold',sans-serif] font-bold text-[magenta] tracking-[0.64px]">Who are we?</span> We're a collection of creative people who are pro-artist, pro regulation, pro fair-use.{" "}
          </p>
          <p className="m-0">
            That's why Cockblock is, <br aria-hidden="true" />
            and will always be a free tool.{" "}
          </p>
        </div>
      </div>
      <div className="absolute h-[50px] left-[37px] top-[32px] w-[115px] cursor-pointer" data-name="Group 233 1" onClick={onToggleMenu}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2331} />
      </div>
      <motion.div 
        className="absolute h-[50px] left-[calc(50%+2.5px)] top-[736px] translate-x-[-50%] w-[343px]"
        animate={{ 
          filter: [
            "drop-shadow(0 0 2px rgba(255, 0, 255, 0.3))",
            "drop-shadow(0 0 10px rgba(255, 0, 255, 0.6))",
            "drop-shadow(0 0 2px rgba(255, 0, 255, 0.3))"
          ]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute bg-[#ff001b] inset-0 rounded-[25px] cursor-pointer" onClick={() => onNavigate('use')}>
          <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_4px_4px_0px_rgba(255,0,255,0.25)]" />
        </div>
        <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-[20.83%_4.75%_22.92%_6.79%] justify-center leading-[0] text-[#401b01] text-[14px] text-center tracking-[1.4px] cursor-pointer pointer-events-none">
          <p className="leading-[normal]">CLICK HERE TO ADD PROTECTION</p>
        </div>
      </motion.div>
    </div>
  );
}
