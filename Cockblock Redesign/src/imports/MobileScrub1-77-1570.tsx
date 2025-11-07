import svgPaths from "./svg-3nlvrpfoww";
import imgMobileMenu2 from "figma:asset/670723166d639047fb41ad1eb337f56fbef65772.png";

function Icon() {
  return (
    <div className="relative size-[80px]" data-name="Icon">
      <div className="absolute bottom-[-10%] left-[-5%] right-[-5%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
          <g id="Icon">
            <g filter="url(#filter0_d_69_81)" id="Ellipse 652">
              <circle cx="44" cy="40" fill="var(--fill-0, #FF001B)" r="40" />
              <circle cx="44" cy="40" r="38.5" stroke="var(--stroke-0, #FF00FF)" strokeWidth="3" />
            </g>
            <g id="Layer 2">
              <g id="Vector">
                <mask fill="white" id="path-3-inside-1_69_81">
                  <path d={svgPaths.p307a6d00} />
                </mask>
                <path d={svgPaths.p307a6d00} fill="var(--fill-0, #401B01)" mask="url(#path-3-inside-1_69_81)" stroke="var(--stroke-0, #401B01)" strokeWidth="6" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="88" id="filter0_d_69_81" width="88" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_69_81" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_69_81" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function MobileScrub() {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="mobile-scrub-1">
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
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 874">
          <path d="M402 874H0V0H402V874Z" fill="var(--fill-0, #FF001B)" id="Subtract" opacity="0.95" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-end leading-[0] left-[28px] text-[38px] text-white top-[305px] tracking-[-0.76px] translate-y-[-100%] w-[291px]">
        <p className="leading-none">Scrub to reveal your protection pack..</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[131px] text-[15px] text-white top-[723.5px] tracking-[-0.15px] translate-y-[-50%] w-[229px]">
        <p className="leading-[0px]">{`Swipe `}</p>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[16px] top-[664px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "80" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <Icon />
        </div>
      </div>
    </div>
  );
}