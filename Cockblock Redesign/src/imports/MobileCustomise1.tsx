import imgMobileMenu2 from "figma:asset/670723166d639047fb41ad1eb337f56fbef65772.png";
import imgLayer13 from "figma:asset/36d9fe07331ccf7be2d5e9237678fb5d241d9d02.png";
import imgLayer19 from "figma:asset/5b7c55f37a4981d824bc9fc616e1ef217cc6f4f6.png";
import imgLayer1 from "figma:asset/b5c2e74efdab52af47376e489b7838649674699a.png";
import imgImage42 from "figma:asset/2f77cbe2106a3ddf767c538aec975c1e336500c5.png";

function Group() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%+0.5px)] text-center text-white top-[471px] translate-x-[-50%]">
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-end left-[201.5px] text-[38px] top-[547px] tracking-[-0.76px] translate-x-[-50%] translate-y-[-100%] w-[291px]">
        <p className="leading-none">Customise Your Image</p>
      </div>
      <div className="absolute font-['Archivo_Narrow:Medium',sans-serif] font-medium inset-[64.87%_15.92%_27.92%_13.93%] leading-[1.5] text-[14px] tracking-[-0.14px]">
        <p className="mb-0">Choose from an array of Cockblocks to protect your art.</p>
        <p>Stickers are customisable so you can find the perfect colour combos for your art</p>
      </div>
    </div>
  );
}

export default function MobileCustomise() {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="mobile-customise-1">
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
      <div className="absolute left-[20px] size-[159px] top-[171px]" data-name="Layer_1-3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer13} />
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.258819043636322)+(var(--transform-inner-height)*0.9659258127212524)))] items-center justify-center left-[154px] top-[164px] w-[calc(1px*((var(--transform-inner-height)*0.258819043636322)+(var(--transform-inner-width)*0.9659258127212524)))]" style={{ "--transform-inner-width": "193", "--transform-inner-height": "193" } as React.CSSProperties}>
        <div className="flex-none rotate-[15deg]">
          <div className="relative size-[193px]" data-name="Layer_1-9">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer19} />
          </div>
        </div>
      </div>
      <div className="absolute h-[135px] left-[149px] top-[116px] w-[146px]" data-name="Layer_1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer1} />
      </div>
      <div className="absolute h-[137px] left-[49px] top-[271px] w-[188px]" data-name="image 42">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage42} />
      </div>
      <Group />
      <div className="absolute h-[50px] left-[calc(50%+2.5px)] top-[736px] translate-x-[-50%] w-[343px]">
        <div className="absolute bg-[#ff001b] inset-0 rounded-[25px]">
          <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_4px_4px_0px_rgba(255,0,255,0.25)]" />
        </div>
        <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-[20.83%_4.75%_22.92%_6.79%] justify-center leading-[0] text-[#401b01] text-[14px] text-center tracking-[1.4px]">
          <p className="leading-[normal]">NEXT</p>
        </div>
      </div>
    </div>
  );
}