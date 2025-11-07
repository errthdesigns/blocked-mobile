import svgPaths from "./svg-39k4l9g6g8";
import imgMobileMenu2 from "figma:asset/670723166d639047fb41ad1eb337f56fbef65772.png";
import imgLayer19 from "figma:asset/5b7c55f37a4981d824bc9fc616e1ef217cc6f4f6.png";

function Group() {
  return (
    <div className="absolute bottom-[37.07%] left-[calc(50%-4.5px)] top-[60.53%] translate-x-[-50%] w-[195px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195 21">
        <g id="Group 58080">
          <path d={svgPaths.p3786200} fill="var(--fill-0, #FF001B)" fillOpacity="0.5" id="Vector" />
          <path d={svgPaths.p1eae8b80} fill="var(--fill-0, #FF001B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function MobileColour() {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="mobile-colour-2">
      <div className="absolute h-[54px] left-[calc(50%+0.5px)] top-[32px] translate-x-[-50%] w-[349px]" data-name="mobile-menu 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMobileMenu2} />
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[173.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px]">
        <p className="leading-[normal]">USE</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[243.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px]">
        <p className="leading-[normal]">MERCH</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[313.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px]">
        <p className="leading-[normal]">INFO</p>
      </div>
      <Group />
      <div className="absolute left-[101px] shadow-[0px_4px_4px_0px_rgba(255,0,27,0.25)] size-[193px] top-[314px]" data-name="Layer_1-9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer19} />
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-end leading-[0] left-[28px] text-[38px] text-white top-[232px] tracking-[-0.76px] translate-y-[-100%] w-[291px]">
        <p className="leading-none">Pick A Colour</p>
      </div>
      <div className="absolute h-[50px] left-[calc(50%+2.5px)] top-[736px] translate-x-[-50%] w-[343px]">
        <div className="absolute bg-[#ff001b] inset-0 rounded-[25px]">
          <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_4px_4px_0px_rgba(255,0,255,0.25)]" />
        </div>
        <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-[20.83%_4.75%_22.92%_6.79%] justify-center leading-[0] text-[#401b01] text-[14px] text-center tracking-[1.4px]">
          <p className="leading-[normal]">DONE</p>
        </div>
      </div>
    </div>
  );
}