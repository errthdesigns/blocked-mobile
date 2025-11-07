import { motion } from 'motion/react';
import imgBurgerMenu1 from "figma:asset/544f87baa899af9d231c1a0815f170497f5760b6.png";
import imgGroup301 from "figma:asset/7d4865997946b8b09ab191affee9fd4e63372993.png";
import imgLayer19 from "figma:asset/5b7c55f37a4981d824bc9fc616e1ef217cc6f4f6.png";
import imgLayer17 from "figma:asset/26a680ac487adba2ea0211370496b28166a8cbbb.png";
import imgLayer18 from "figma:asset/e46c2c548905df92d53a73de3160c8ed2fad7c10.png";
import imgImage15 from "figma:asset/ba7e717afd412827a768cd221fa743fe715c9fef.png";
import imgLayer15 from "figma:asset/8c28dda183a8bbfa763dbb2e477c4083ae3251bd.png";
import imgLayer1 from "figma:asset/b5c2e74efdab52af47376e489b7838649674699a.png";

interface DesktopProps {
  onNavigate: (page: 'use' | 'merch' | 'info') => void;
  onToggleMenu: () => void;
}

export default function Desktop({ onNavigate, onToggleMenu }: DesktopProps) {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="Desktop - 46">
      <div className="absolute h-[73px] left-[51px] top-[48px] w-[1357px] cursor-pointer" data-name="burger menu 1" onClick={onToggleMenu}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.05%] max-w-none top-0 w-[99.82%]" src={imgBurgerMenu1} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[395px] text-[#401b01] text-[32px] text-center top-[84.5px] translate-x-[-50%] translate-y-[-50%] w-[240px] cursor-pointer" onClick={() => onNavigate('use')}>
        <p className="leading-[normal]">Use</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[741px] text-[#401b01] text-[32px] text-center top-[84.5px] translate-x-[-50%] translate-y-[-50%] w-[240px] cursor-pointer" onClick={() => onNavigate('merch')}>
        <p className="leading-[normal]">Merch</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[1087px] text-[#401b01] text-[32px] text-center top-[84.5px] translate-x-[-50%] translate-y-[-50%] w-[240px] cursor-pointer" onClick={() => onNavigate('info')}>
        <p className="leading-[normal]">Info</p>
      </div>
      <div className="absolute h-[676.676px] left-[32px] top-[143px] w-[1385.62px]">
        <motion.div 
          className="absolute aspect-[411.743/254.872] flex items-center justify-center left-[65.53%] right-[4.75%] top-[395.86px] transition-transform duration-300 hover:scale-105 hover:rotate-2"
          animate={{ 
            filter: [
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))",
              "drop-shadow(0 0 12px rgba(255, 0, 255, 0.5))",
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))"
            ]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex-none h-[161.22px] rotate-[345deg] w-[383.068px]">
            <div className="relative size-full" data-name="Group 30 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup301} />
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute aspect-[389.748/389.748] flex items-center justify-center left-[11.04%] right-[60.83%] top-[11.37px] transition-transform duration-300 hover:scale-105 hover:-rotate-2"
          animate={{ 
            filter: [
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))",
              "drop-shadow(0 0 12px rgba(255, 0, 255, 0.5))",
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))"
            ]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="flex-none rotate-[341.519deg] size-[308px]">
            <div className="relative size-full" data-name="Layer_1-9">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer19} />
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute aspect-[2791/650] left-[13.93%] right-[14.77%] top-[calc(50%+11.662px)] translate-y-[-50%] transition-transform duration-300 hover:scale-103 hover:rotate-1" 
          data-name="Layer_1-7"
          animate={{ 
            filter: [
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))",
              "drop-shadow(0 0 12px rgba(255, 0, 255, 0.5))",
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))"
            ]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer17} />
        </motion.div>
        <motion.div 
          className="absolute aspect-[496.624/496.624] flex items-center justify-center left-[64.16%] right-0 top-[-0.24px] transition-transform duration-300 hover:scale-105 hover:rotate-3"
          animate={{ 
            filter: [
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))",
              "drop-shadow(0 0 12px rgba(255, 0, 255, 0.5))",
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))"
            ]
          }}
          transition={{ 
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          <div className="flex-none h-[440.359px] rotate-[315deg] w-[261.972px]">
            <div className="relative size-full" data-name="Layer_1-8">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer18} />
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute aspect-[397.579/249.086] flex items-center justify-center left-[43.36%] right-[27.94%] top-[81px] transition-transform duration-300 hover:scale-105 hover:-rotate-1"
          animate={{ 
            filter: [
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))",
              "drop-shadow(0 0 12px rgba(255, 0, 255, 0.5))",
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))"
            ]
          }}
          transition={{ 
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        >
          <div className="flex-none h-[159px] rotate-[15deg] w-[369px]">
            <div className="relative size-full" data-name="image 15">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage15} />
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute aspect-[506.15/346.676] flex items-center justify-center left-[0.01%] right-[63.47%] top-[330px] transition-transform duration-300 hover:scale-105 hover:rotate-1"
          animate={{ 
            filter: [
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))",
              "drop-shadow(0 0 12px rgba(255, 0, 255, 0.5))",
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))"
            ]
          }}
          transition={{ 
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        >
          <div className="flex-none h-[235.4px] rotate-[15deg] w-[460.93px]">
            <div className="relative size-full" data-name="Layer_1-5">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer15} />
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute aspect-[241.561/236.361] flex items-center justify-center left-[27.79%] right-[54.78%] top-[395.98px] transition-transform duration-300 hover:scale-105 hover:-rotate-3"
          animate={{ 
            filter: [
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))",
              "drop-shadow(0 0 12px rgba(255, 0, 255, 0.5))",
              "drop-shadow(0 0 3px rgba(255, 0, 255, 0.3))"
            ]
          }}
          transition={{ 
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9
          }}
        >
          <div className="flex-none h-[167.828px] rotate-[330deg] w-[182.035px]">
            <div className="relative size-full" data-name="Layer_1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer1} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute h-[48px] left-1/2 top-[900px] translate-x-[-50%] w-[442px]">
        <div className="absolute bg-[#ff001b] inset-0 rounded-[11px]">
          <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-[20.83%_4.75%_22.92%_6.79%] justify-center leading-[0] text-[#401b01] text-[20px] text-center tracking-[2px]">
          <p className="leading-[normal]">CLICK ANYWHERE TO BEGIN</p>
        </div>
      </div>
    </div>
  );
}
