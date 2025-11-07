import imgGroup301 from "figma:asset/7d4865997946b8b09ab191affee9fd4e63372993.png";
import imgLayer19 from "figma:asset/5b7c55f37a4981d824bc9fc616e1ef217cc6f4f6.png";
import imgLayer17 from "figma:asset/26a680ac487adba2ea0211370496b28166a8cbbb.png";
import imgLayer18 from "figma:asset/e46c2c548905df92d53a73de3160c8ed2fad7c10.png";
import imgImage15 from "figma:asset/ba7e717afd412827a768cd221fa743fe715c9fef.png";
import imgLayer15 from "figma:asset/8c28dda183a8bbfa763dbb2e477c4083ae3251bd.png";
import imgLayer1 from "figma:asset/b5c2e74efdab52af47376e489b7838649674699a.png";
import imgGroup2331 from "figma:asset/e2fa7924faadaab3b607786dd00b91529258b98e.png";

/**
 * @figmaAssetKey 8664e6212dfb5cd75eb70369c52c0c289d372c63
 */
function Group1({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute aspect-[411.743/254.872] flex items-center justify-center left-[65.53%] right-[4.75%] top-[396px]">
        <div className="flex-none h-[161.22px] rotate-[345deg] w-[383.068px]">
          <div className="relative size-full" data-name="Group 30 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup301} />
          </div>
        </div>
      </div>
      <div className="absolute aspect-[389.748/389.748] flex items-center justify-center left-[11.04%] right-[60.83%] top-[11px]">
        <div className="flex-none rotate-[341.519deg] size-[308px]">
          <div className="relative size-full" data-name="Layer_1-9">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer19} />
          </div>
        </div>
      </div>
      <div className="absolute aspect-[2791/650] left-[13.93%] right-[14.77%] top-[calc(50%+11.662px)] translate-y-[-50%]" data-name="Layer_1-7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer17} />
      </div>
      <div className="absolute aspect-[496.624/496.624] flex items-center justify-center left-[64.16%] right-0 top-0">
        <div className="flex-none h-[440.359px] rotate-[315deg] w-[261.972px]">
          <div className="relative size-full" data-name="Layer_1-8">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer18} />
          </div>
        </div>
      </div>
      <div className="absolute aspect-[397.579/249.086] flex items-center justify-center left-[43.37%] right-[27.93%] top-[81px]">
        <div className="flex-none h-[159px] rotate-[15deg] w-[369px]">
          <div className="relative size-full" data-name="image 15">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage15} />
          </div>
        </div>
      </div>
      <div className="absolute aspect-[506.15/346.676] flex items-center justify-center left-0 right-[63.47%] top-[330px]">
        <div className="flex-none h-[235.4px] rotate-[15deg] w-[460.93px]">
          <div className="relative size-full" data-name="Layer_1-5">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer15} />
          </div>
        </div>
      </div>
      <div className="absolute aspect-[241.561/236.361] flex items-center justify-center left-[27.79%] right-[54.78%] top-[396px]">
        <div className="flex-none h-[167.828px] rotate-[330deg] w-[182.035px]">
          <div className="relative size-full" data-name="Layer_1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLayer1} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey aa8faacf65349a43d31584e5b7bed5afb4a33347
 */
function Group({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute bg-[#ff001b] inset-0 rounded-[11px]">
        <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-[20.83%_4.75%_22.92%_6.79%] justify-center leading-[0] text-[#401b01] text-[20px] text-center tracking-[2px]">
        <p className="leading-[normal]">CLICK ANYWHERE TO BEGIN</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 807792fe2390c30b7e31b18f504371f983eba483
 */
function Group2({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Group 233 1">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2331} />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="Desktop - 39">
      <Group2 className="absolute h-[75px] left-[51px] top-[47px] w-[173px]" />
      <Group className="absolute h-[48px] left-1/2 top-[772px] translate-x-[-50%] w-[442px]" />
      <Group1 className="absolute h-[676.676px] left-[32px] top-[143px] w-[1385.62px]" />
    </div>
  );
}