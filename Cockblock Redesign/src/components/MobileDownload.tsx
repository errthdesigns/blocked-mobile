import { useState } from 'react';
import { Rnd } from 'react-rnd';
import svgPaths from "../imports/svg-54gs81njdy";
import imgMobileMenu2 from "figma:asset/670723166d639047fb41ad1eb337f56fbef65772.png";

interface Sticker {
  id: string;
  image: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

interface MobileDownloadProps {
  onNavigate: (page: 'use' | 'merch' | 'info') => void;
  onToggleMenu: () => void;
  menuExpanded?: boolean;
  uploadedImage?: string;
  selectedStickers?: Array<{ id: number; name: string; image: string; colorIndex: number }>;
  onBackToScrub?: () => void;
}

function CheckmarkButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute h-[48.19px] left-[326.98px] top-[737px] w-[49.018px] cursor-pointer z-30" onClick={onClick}>
      <div className="absolute bottom-[-16.6%] left-[-8.16%] right-[-8.16%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 57">
          <g id="Group 56358">
            <g filter="url(#filter0_d_77_1237)" id="Ellipse 13">
              <ellipse cx="28.5089" cy="24.095" fill="var(--fill-0, #FF00FF)" rx="24.5089" ry="24.095" />
              <path d={svgPaths.p1bacad80} stroke="var(--stroke-0, #FF001B)" strokeWidth="3" />
            </g>
            <path d={svgPaths.p254300} fill="var(--fill-0, #401B01)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56.19" id="filter0_d_77_1237" width="57.0179" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_77_1237" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_77_1237" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute left-[266px] size-[48.19px] top-[737px] cursor-pointer z-30" onClick={onClick}>
      <div className="absolute bottom-[-16.6%] left-[-8.3%] right-[-8.3%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
          <g id="Group 56357">
            <circle cx="28.095" cy="24.095" fill="var(--fill-0, black)" id="Ellipse 13" r="24.095" />
            <g filter="url(#filter0_d_77_1241)" id="Ellipse 14">
              <circle cx="28.095" cy="24.095" fill="var(--fill-0, #FF00FF)" r="24.095" />
              <circle cx="28.095" cy="24.095" r="22.595" stroke="var(--stroke-0, #FF001B)" strokeWidth="3" />
            </g>
            <g id="Group 56356">
              <path d="M20 16L37 33" id="Vector 8" stroke="var(--stroke-0, #401B01)" strokeWidth="2.4" />
              <path d="M37.0001 16L20.0001 33" id="Vector 9" stroke="var(--stroke-0, #401B01)" strokeWidth="2.4" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56.19" id="filter0_d_77_1241" width="56.19" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_77_1241" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_77_1241" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function MobileDownload({ 
  onNavigate, 
  onToggleMenu, 
  menuExpanded = true, 
  uploadedImage,
  selectedStickers = [],
  onBackToScrub 
}: MobileDownloadProps) {
  const [stickers, setStickers] = useState<Sticker[]>(() => {
    // Initialize stickers with random positions around the canvas
    const positions = [
      { x: 30, y: 150 },
      { x: 250, y: 140 },
      { x: 100, y: 280 },
      { x: 30, y: 420 },
      { x: 250, y: 410 },
    ];
    
    return selectedStickers.map((sticker, index) => ({
      id: `sticker-${sticker.id}-${index}`,
      image: sticker.image,
      x: positions[index]?.x || 50 + (index * 60),
      y: positions[index]?.y || 150 + (index * 80),
      width: 100,
      height: 100,
      rotation: 0,
    }));
  });

  const [selectedStickerId, setSelectedStickerId] = useState<string | null>(null);

  const handleStickerUpdate = (id: string, x: number, y: number, width: number, height: number) => {
    setStickers(prev => prev.map(s => 
      s.id === id ? { ...s, x, y, width, height } : s
    ));
  };

  const handleDeleteSelected = () => {
    if (selectedStickerId) {
      setStickers(prev => prev.filter(s => s.id !== selectedStickerId));
      setSelectedStickerId(null);
    }
  };

  const handleConfirm = () => {
    // TODO: Generate final image and navigate to download
    console.log('Confirmed! Ready to download');
  };

  return (
    <div className="bg-[#291a01] relative size-full overflow-hidden" data-name="mobile-download">
      {/* Brown overlay background */}
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 874">
          <path d="M402 874H0V0H402V874Z" fill="var(--fill-0, #401B01)" id="Subtract" opacity="0.95" />
        </svg>
      </div>

      {/* Menu bar */}
      <div className="absolute h-[54px] left-[calc(50%+0.5px)] top-[32px] translate-x-[-50%] w-[349px] z-10" data-name="mobile-menu 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMobileMenu2} />
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[173.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer z-10" onClick={() => onNavigate('use')}>
        <p className="leading-[normal]">USE</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[243.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer z-10" onClick={() => onNavigate('merch')}>
        <p className="leading-[normal]">MERCH</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[313.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer z-10" onClick={() => onNavigate('info')}>
        <p className="leading-[normal]">INFO</p>
      </div>

      {/* Canvas area with uploaded image */}
      <div className="absolute left-[26px] size-[350px] top-[237px] bg-gray-200 overflow-hidden">
        {uploadedImage ? (
          <img 
            alt="Uploaded" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            src={uploadedImage} 
          />
        ) : (
          <div className="absolute bottom-0 left-0 right-0 top-[-0.22%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 351">
              <g id="Group 232">
                <rect fill="var(--fill-0, #D9D9D9)" height="350" id="Rectangle 84241" width="350" y="0.765372" />
                <line id="Line 1" stroke="var(--stroke-0, black)" transform="matrix(0.696971 0.717099 -0.650419 0.759576 3.68359 0.76541)" x2="488.077" y1="-0.5" y2="-0.5" />
                <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(0.703356 -0.710838 0.64369 0.765286 3.68359 350.765)" x2="492.376" y1="-0.5" y2="-0.5" />
              </g>
            </svg>
          </div>
        )}

        {/* Draggable and resizable stickers */}
        {stickers.map((sticker) => (
          <Rnd
            key={sticker.id}
            position={{ x: sticker.x, y: sticker.y }}
            size={{ width: sticker.width, height: sticker.height }}
            onDragStop={(e, d) => {
              handleStickerUpdate(sticker.id, d.x, d.y, sticker.width, sticker.height);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              handleStickerUpdate(
                sticker.id,
                position.x,
                position.y,
                parseInt(ref.style.width),
                parseInt(ref.style.height)
              );
            }}
            bounds="parent"
            onClick={() => setSelectedStickerId(sticker.id)}
            className={`cursor-move ${selectedStickerId === sticker.id ? 'ring-2 ring-magenta' : ''}`}
            enableResizing={{
              top: false,
              right: true,
              bottom: true,
              left: false,
              topRight: false,
              bottomRight: true,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <img 
              alt="" 
              src={sticker.image} 
              className="w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
            />
          </Rnd>
        ))}
      </div>

      {/* PICK AGAIN Button */}
      <div 
        className="absolute bg-[#ff001b] box-border content-stretch flex flex-col gap-[10px] h-[60px] items-center justify-center left-[32px] px-[40px] py-[20px] rounded-[100px] top-[731px] w-[217px] cursor-pointer z-30" 
        data-name="Buttons"
        onClick={onBackToScrub}
      >
        <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_4px_4px_0px_rgba(255,0,255,0.25)]" />
        <div className="flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#401b01] text-[14px] text-center text-nowrap tracking-[1.4px]">
          <p className="leading-[1.2] whitespace-pre">PICK AGAIN</p>
        </div>
      </div>

      {/* Delete Button */}
      <DeleteButton onClick={handleDeleteSelected} />

      {/* Checkmark Button */}
      <CheckmarkButton onClick={handleConfirm} />
    </div>
  );
}
