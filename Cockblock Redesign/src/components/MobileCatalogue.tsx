import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-zcwhzizale";
import imgMobileMenu2 from "figma:asset/670723166d639047fb41ad1eb337f56fbef65772.png";
import imgGroup2331 from "figma:asset/e2fa7924faadaab3b607786dd00b91529258b98e.png";

// Sticker imports from catalogue 1
import imgLayer13 from "figma:asset/36d9fe07331ccf7be2d5e9237678fb5d241d9d02.png";
import imgLayer19 from "figma:asset/5b7c55f37a4981d824bc9fc616e1ef217cc6f4f6.png";
import imgLayer1 from "figma:asset/b5c2e74efdab52af47376e489b7838649674699a.png";
import imgLayer18 from "figma:asset/e46c2c548905df92d53a73de3160c8ed2fad7c10.png";
import imgGroup301 from "figma:asset/7d4865997946b8b09ab191affee9fd4e63372993.png";
import imgImage42 from "figma:asset/2f77cbe2106a3ddf767c538aec975c1e336500c5.png";

// Additional sticker imports from catalogue 2
import imgLayer11 from "figma:asset/3e0aef972ffcb08da3bc76897cb6c3b6ff733680.png";
import imgLayer17 from "figma:asset/26a680ac487adba2ea0211370496b28166a8cbbb.png";
import imgImage15 from "figma:asset/ba7e717afd412827a768cd221fa743fe715c9fef.png";
import imgImage19 from "figma:asset/0a747b9a2cd13f917a41017b0822e30b9c797f4a.png";

// Additional sticker imports from catalogue 3
import imgLayer15 from "figma:asset/8c28dda183a8bbfa763dbb2e477c4083ae3251bd.png";
import imgLayer14 from "figma:asset/edf7ad19b24a654efc956978775931b8711feded.png";
import imgImage44 from "figma:asset/9168c84be5892ae1d4addc4c11ce2c7b2ba87de2.png";
import imgImage9 from "figma:asset/ddc4327d86a29fc448b10698e1dbf5cbbd63d744.png";
import imgLayer16 from "figma:asset/7c8df45bc027a253515a64b180c2a9d8358d706f.png";

interface StickerWrapperProps {
  children: React.ReactNode;
  isConfirmed: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  xButtonPosition?: { left: string; top: string };
}

function StickerWrapper({ children, isConfirmed, onClick, onRemove, xButtonPosition }: StickerWrapperProps) {
  return (
    <>
      <motion.div
        className="cursor-pointer"
        onClick={onClick}
        animate={{
          scale: isConfirmed ? 1.05 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 }
        }}
        style={{
          filter: isConfirmed ? 'drop-shadow(0 0 15px magenta)' : 'none',
          outline: isConfirmed ? '3px solid magenta' : 'none',
          outlineOffset: '-3px',
          borderRadius: '12px',
        }}
      >
        {children}
      </motion.div>
      {isConfirmed && onRemove && xButtonPosition && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute w-[17.111px] h-[16.822px] cursor-pointer z-[101]"
          style={{
            left: xButtonPosition.left,
            top: xButtonPosition.top,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          <div className="absolute bottom-[-47.56%] left-[-23.38%] right-[-23.38%] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 25">
              <g filter="url(#filter0_d_51_6484)" id="Group 56357">
                <ellipse cx="12.5555" cy="8.41101" fill="black" rx="8.55551" ry="8.41101" />
                <ellipse cx="12.5555" cy="8.41101" fill="#FF001B" rx="7.55551" ry="7.41101" stroke="#FF00FF" strokeWidth="2" />
                <g id="Group 56356">
                  <path d="M9.5 5.5L15.5 11.5" stroke="#401B01" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M15.5 5.5L9.5 11.5" stroke="#401B01" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.822" id="filter0_d_51_6484" width="25.111" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_51_6484" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_51_6484" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </motion.div>
      )}
    </>
  );
}

function CheckButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute h-[48.19px] right-[25px] top-[30px] w-[49.018px] cursor-pointer z-10" onClick={onClick}>
      <div className="absolute bottom-[-16.6%] left-[-8.16%] right-[-8.16%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 57">
          <g id="Group 56358">
            <g filter="url(#filter0_d_51_6495)" id="Ellipse 13">
              <ellipse cx="28.5089" cy="24.095" fill="var(--fill-0, #FF00FF)" rx="24.5089" ry="24.095" />
              <path d={svgPaths.p1bacad80} stroke="var(--stroke-0, #FF001B)" strokeWidth="3" />
            </g>
            <path d={svgPaths.p254300} fill="var(--fill-0, #401B01)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56.19" id="filter0_d_51_6495" width="57.0179" x="-8.56817e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_51_6495" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_51_6495" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

interface MobileCatalogueProps {
  onNavigate: (page: 'use' | 'merch' | 'info') => void;
  onToggleMenu: () => void;
  menuExpanded?: boolean;
  onNext?: () => void;
  onRandomise?: () => void;
  onStickerClick?: (sticker: { id: number; image: string; name: string; colorways: string[] }) => void;
  confirmedStickers?: Array<{ id: number; name: string; image: string; colorIndex: number }>;
  onRemoveSticker?: (stickerName: string) => void;
}

export default function MobileCatalogue({ onNavigate, onToggleMenu, menuExpanded = true, onNext, onRandomise, onStickerClick, confirmedStickers = [], onRemoveSticker }: MobileCatalogueProps) {

  // Placeholder colorway images
  const placeholder1 = "https://images.unsplash.com/photo-1595411425732-e69c1abe2763?w=400";
  const placeholder2 = "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400";
  const placeholder3 = "https://images.unsplash.com/photo-1557683316-973673baf926?w=400";
  
  // Define sticker data with colorways (using original + placeholder images for color variations)
  const stickers = [
    { id: 1, image: imgImage42, name: "image-42", colorways: [imgImage42, placeholder1, placeholder2, placeholder3] },
    { id: 2, image: imgLayer18, name: "layer-1-8", colorways: [imgLayer18, placeholder2, placeholder3, placeholder1] },
    { id: 3, image: imgLayer19, name: "layer-1-9", colorways: [imgLayer19, placeholder3, placeholder1, placeholder2] },
    { id: 4, image: imgLayer1, name: "layer-1", colorways: [imgLayer1, placeholder1, placeholder3] },
    { id: 5, image: imgGroup301, name: "group-30-1", colorways: [imgGroup301, placeholder2, placeholder1] },
    { id: 6, image: imgLayer11, name: "layer-1-1", colorways: [imgLayer11, placeholder3, placeholder2] },
    { id: 7, image: imgImage19, name: "image-19", colorways: [imgImage19, placeholder1, placeholder2] },
    { id: 8, image: imgLayer17, name: "layer-1-7", colorways: [imgLayer17, placeholder2, placeholder3] },
    { id: 9, image: imgImage15, name: "image-15", colorways: [imgImage15, placeholder3, placeholder1] },
    { id: 10, image: imgLayer13, name: "layer-1-3", colorways: [imgLayer13, placeholder1, placeholder2] },
    { id: 11, image: imgLayer15, name: "layer-1-5", colorways: [imgLayer15, placeholder2, placeholder3] },
    { id: 12, image: imgLayer14, name: "layer-1-4", colorways: [imgLayer14, placeholder3, placeholder1] },
    { id: 13, image: imgImage44, name: "image-44", colorways: [imgImage44, placeholder1, placeholder3] },
    { id: 14, image: imgImage9, name: "image-9", colorways: [imgImage9, placeholder2, placeholder1] },
    { id: 15, image: imgLayer16, name: "layer-1-6", colorways: [imgLayer16, placeholder3, placeholder2] },
  ];

  const handleStickerClick = (sticker: { id: number; image: string; name: string; colorways: string[] }) => {
    if (onStickerClick) {
      onStickerClick(sticker);
    }
  };

  const isConfirmed = (stickerName: string) => {
    return confirmedStickers.some(s => s.name === stickerName);
  };

  // Get the display image for a sticker (confirmed color variant or default)
  const getStickerImage = (stickerName: string, defaultImage: string) => {
    const confirmed = confirmedStickers.find(s => s.name === stickerName);
    return confirmed ? confirmed.image : defaultImage;
  };
  
  return (
    <div className="bg-[#291a01] relative size-full overflow-hidden" data-name="mobile-catalogue">
      {/* Fixed Header */}
      <div className="absolute inset-x-0 top-0 h-[240px] bg-[#291a01] z-20 pointer-events-none">
        {menuExpanded ? (
          <>
            <div className="absolute h-[54px] left-[calc(50%+0.5px)] top-[32px] translate-x-[-50%] w-[349px] cursor-pointer pointer-events-auto" data-name="mobile-menu 2" onClick={onToggleMenu}>
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMobileMenu2} />
            </div>
            <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[173.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer pointer-events-auto" onClick={() => onNavigate('use')}>
              <p className="leading-[normal]">USE</p>
            </div>
            <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[243.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer pointer-events-auto" onClick={() => onNavigate('merch')}>
              <p className="leading-[normal]">MERCH</p>
            </div>
            <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[313.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer pointer-events-auto" onClick={() => onNavigate('info')}>
              <p className="leading-[normal]">INFO</p>
            </div>
          </>
        ) : (
          <div className="absolute h-[50px] left-[37px] top-[32px] w-[115px] cursor-pointer pointer-events-auto" data-name="Group 233 1" onClick={onToggleMenu}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2331} />
          </div>
        )}
        <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-end leading-[0] left-[28px] text-[38px] text-white top-[232px] tracking-[-0.76px] translate-y-[-100%] w-[291px]">
          <p className="leading-none">Select the stickers that best suit you</p>
        </div>
      </div>

      {/* Scrollable Content - Horizontal with scattered stickers across 3 "pages" */}
      <div className="absolute inset-0 top-[240px] bottom-[113px] overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="relative h-full w-[1179px]">
          {/* Page 1 - Catalogue 1 layout (0-393px) */}
          
          {/* Sticker 1: image 42 */}
          <StickerWrapper 
            isConfirmed={isConfirmed(stickers[0].name)}
            onClick={() => handleStickerClick(stickers[0])}
            onRemove={() => onRemoveSticker?.(stickers[0].name)}
            xButtonPosition={{ left: "240px", top: "30px" }}
          >
            <div className="absolute h-[145px] left-[56px] top-[41px] w-[198px]" data-name="image 42">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[0].name, imgImage42)} />
            </div>
          </StickerWrapper>

          {/* Sticker 2: Layer_1-8 */}
          <StickerWrapper 
            isConfirmed={isConfirmed(stickers[1].name)}
            onClick={() => handleStickerClick(stickers[1])}
            onRemove={() => onRemoveSticker?.(stickers[1].name)}
            xButtonPosition={{ left: "270px", top: "195px" }}
          >
            <div className="absolute aspect-[205.072/205.072] flex items-center justify-center left-[84px] top-[200px] w-[205px]">
              <div className="flex-none h-[181.838px] rotate-[315deg] w-[108.177px]">
                <div className="relative size-full" data-name="Layer_1-8">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[1].name, imgLayer18)} />
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Sticker 3: Layer_1-9 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[2].name)}
            onClick={() => handleStickerClick(stickers[2])}
            onRemove={() => onRemoveSticker?.(stickers[2].name)}
            xButtonPosition={{ left: "365px", top: "50px" }}
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.258819043636322)+(var(--transform-inner-height)*0.9659258127212524)))] items-center justify-center left-[186px] top-[56px] w-[calc(1px*((var(--transform-inner-height)*0.258819043636322)+(var(--transform-inner-width)*0.9659258127212524)))]" style={{ "--transform-inner-width": "193", "--transform-inner-height": "193" } as React.CSSProperties}>
              <div className="flex-none rotate-[15deg]">
                <div className="relative size-[193px]" data-name="Layer_1-9">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[2].name, imgLayer19)} />
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Sticker 4: Layer_1 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[3].name)}
            onClick={() => handleStickerClick(stickers[3])}
            onRemove={() => onRemoveSticker?.(stickers[3].name)}
            xButtonPosition={{ left: "380px", top: "0px" }}
          >
            <div className="absolute h-[135px] left-[247px] top-[5px] w-[146px]" data-name="Layer_1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[3].name, imgLayer1)} />
            </div>
          </StickerWrapper>

          {/* Sticker 5: Group 30 1 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[4].name)}
            onClick={() => handleStickerClick(stickers[4])}
            onRemove={() => onRemoveSticker?.(stickers[4].name)}
            xButtonPosition={{ left: "370px", top: "300px" }}
          >
            <div className="absolute aspect-[288.494/178.581] flex items-center justify-center left-[100px] top-[304px] w-[290px]">
              <div className="flex-none h-[112.962px] rotate-[345deg] w-[268.403px]">
                <div className="relative size-full" data-name="Group 30 1">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[4].name, imgGroup301)} />
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Page 2 - Catalogue 2 layout (393-786px) */}
          
          {/* Sticker 6: Layer_1-1 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[5].name)}
            onClick={() => handleStickerClick(stickers[5])}
            onRemove={() => onRemoveSticker?.(stickers[5].name)}
            xButtonPosition={{ left: "597px", top: "15px" }}
          >
            <div className="absolute h-[261px] left-[440px] top-[10px] w-[169px]" data-name="Layer_1-1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[5].name, imgLayer11)} />
            </div>
          </StickerWrapper>

          {/* Sticker 7: image 19 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[6].name)}
            onClick={() => handleStickerClick(stickers[6])}
            onRemove={() => onRemoveSticker?.(stickers[6].name)}
            xButtonPosition={{ left: "840px", top: "25px" }}
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.12770427763462067)+(var(--transform-inner-height)*0.9918122887611389)))] items-center justify-center left-[630px] top-[30px] w-[calc(1px*((var(--transform-inner-height)*0.12770427763462067)+(var(--transform-inner-width)*0.9918122887611389)))]" style={{ "--transform-inner-width": "224.9375", "--transform-inner-height": "115.890625" } as React.CSSProperties}>
              <div className="flex-none rotate-[352.663deg]">
                <div className="h-[115.898px] relative w-[224.945px]" data-name="image 19">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[116.85%] left-[-1.8%] max-w-none top-[-2.72%] w-[101.8%]" src={getStickerImage(stickers[6].name, imgImage19)} />
                  </div>
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Sticker 8: Layer_1-7 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[7].name)}
            onClick={() => handleStickerClick(stickers[7])}
            onRemove={() => onRemoveSticker?.(stickers[7].name)}
            xButtonPosition={{ left: "742px", top: "245px" }}
          >
            <div className="absolute h-[78px] left-[420px] top-[250px] w-[335px]" data-name="Layer_1-7">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[7].name, imgLayer17)} />
            </div>
          </StickerWrapper>

          {/* Sticker 9: image 15 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[8].name)}
            onClick={() => handleStickerClick(stickers[8])}
            onRemove={() => onRemoveSticker?.(stickers[8].name)}
            xButtonPosition={{ left: "700px", top: "135px" }}
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.37201452255249023)+(var(--transform-inner-height)*0.928226888179779)))] items-center justify-center left-[490px] top-[140px] w-[calc(1px*((var(--transform-inner-height)*0.37201452255249023)+(var(--transform-inner-width)*0.928226888179779)))]" style={{ "--transform-inner-width": "223", "--transform-inner-height": "96" } as React.CSSProperties}>
              <div className="flex-none rotate-[21.84deg]">
                <div className="h-[96px] relative w-[223px]" data-name="image 15">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[8].name, imgImage15)} />
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Sticker 10: Layer_1-3 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[9].name)}
            onClick={() => handleStickerClick(stickers[9])}
            onRemove={() => onRemoveSticker?.(stickers[9].name)}
            xButtonPosition={{ left: "785px", top: "175px" }}
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.28823694586753845)+(var(--transform-inner-height)*0.9575591087341309)))] items-center justify-center left-[640px] top-[180px] w-[calc(1px*((var(--transform-inner-height)*0.28823694586753845)+(var(--transform-inner-width)*0.9575591087341309)))]" style={{ "--transform-inner-width": "159", "--transform-inner-height": "159" } as React.CSSProperties}>
              <div className="flex-none rotate-[343.248deg]">
                <div className="relative size-[159px]" data-name="Layer_1-3">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[9].name, imgLayer13)} />
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Page 3 - Catalogue 3 layout (786-1179px) */}
          
          {/* Sticker 11: Layer_1-5 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[10].name)}
            onClick={() => handleStickerClick(stickers[10])}
            onRemove={() => onRemoveSticker?.(stickers[10].name)}
            xButtonPosition={{ left: "962px", top: "45px" }}
          >
            <div className="absolute h-[84px] left-[810px] top-[50px] w-[164px]" data-name="Layer_1-5">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[10].name, imgLayer15)} />
            </div>
          </StickerWrapper>

          {/* Sticker 12: Layer_1-4 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[11].name)}
            onClick={() => handleStickerClick(stickers[11])}
            onRemove={() => onRemoveSticker?.(stickers[11].name)}
            xButtonPosition={{ left: "1008px", top: "155px" }}
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.258819043636322)+(var(--transform-inner-height)*0.9659258127212524)))] items-center justify-center left-[840px] top-[160px] w-[calc(1px*((var(--transform-inner-height)*0.258819043636322)+(var(--transform-inner-width)*0.9659258127212524)))]" style={{ "--transform-inner-width": "179", "--transform-inner-height": "92" } as React.CSSProperties}>
              <div className="flex-none rotate-[15deg]">
                <div className="h-[92px] relative w-[179px]" data-name="Layer_1-4">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[11].name, imgLayer14)} />
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Sticker 13: image 44 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[12].name)}
            onClick={() => handleStickerClick(stickers[12])}
            onRemove={() => onRemoveSticker?.(stickers[12].name)}
            xButtonPosition={{ left: "1135px", top: "255px" }}
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.258819043636322)+(var(--transform-inner-height)*0.9659258127212524)))] items-center justify-center left-[800px] top-[260px] w-[calc(1px*((var(--transform-inner-height)*0.258819043636322)+(var(--transform-inner-width)*0.9659258127212524)))]" style={{ "--transform-inner-width": "349", "--transform-inner-height": "65" } as React.CSSProperties}>
              <div className="flex-none rotate-[15deg]">
                <div className="h-[65px] relative w-[349px]" data-name="image 44">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[12].name, imgImage44)} />
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Sticker 14: image 9 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[13].name)}
            onClick={() => handleStickerClick(stickers[13])}
            onRemove={() => onRemoveSticker?.(stickers[13].name)}
            xButtonPosition={{ left: "1070px", top: "15px" }}
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[990px] top-[20px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "98", "--transform-inner-height": "70" } as React.CSSProperties}>
              <div className="flex-none rotate-[315deg]">
                <div className="h-[70px] relative w-[98px]" data-name="image 9">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[13].name, imgImage9)} />
                </div>
              </div>
            </div>
          </StickerWrapper>

          {/* Sticker 15: Layer_1-6 */}
          <StickerWrapper
            isConfirmed={isConfirmed(stickers[14].name)}
            onClick={() => handleStickerClick(stickers[14])}
            onRemove={() => onRemoveSticker?.(stickers[14].name)}
            xButtonPosition={{ left: "1103px", top: "115px" }}
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.258819043636322)+(var(--transform-inner-height)*0.9659258127212524)))] items-center justify-center left-[980px] top-[120px] w-[calc(1px*((var(--transform-inner-height)*0.258819043636322)+(var(--transform-inner-width)*0.9659258127212524)))]" style={{ "--transform-inner-width": "136", "--transform-inner-height": "207" } as React.CSSProperties}>
              <div className="flex-none rotate-[345deg]">
                <div className="h-[207px] relative w-[136px]" data-name="Layer_1-6">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={getStickerImage(stickers[14].name, imgLayer16)} />
                </div>
              </div>
            </div>
          </StickerWrapper>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="absolute bottom-0 left-0 right-0 h-[113px] bg-[#291a01] z-20">
        <div className="absolute bg-[#ff001b] box-border content-stretch flex flex-col gap-[10px] h-[60px] items-center justify-center left-[32px] px-[40px] py-[20px] rounded-[100px] top-[28px] w-[217px] cursor-pointer" data-name="Buttons" onClick={onRandomise}>
          <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_4px_4px_0px_rgba(255,0,255,0.25)]" />
          <div className="flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#401b01] text-[14px] text-center text-nowrap tracking-[1.4px]">
            <p className="leading-[1.2] whitespace-pre">RANDOMISE</p>
          </div>
        </div>
        <CheckButton onClick={onNext} />
      </div>
    </div>
  );
}
