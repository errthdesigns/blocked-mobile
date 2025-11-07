import { useRef, useEffect, useState } from 'react';
import svgPaths from "../imports/svg-dj53xsk5ts";
import svgPathsReveal from "../imports/svg-38inn3zxvb";
import imgMobileMenu2 from "figma:asset/670723166d639047fb41ad1eb337f56fbef65772.png";
import imgGroup2331 from "figma:asset/e2fa7924faadaab3b607786dd00b91529258b98e.png";

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

function CheckmarkButton() {
  return (
    <div className="absolute h-[48.19px] left-[326.98px] top-[737px] w-[49.018px]">
      <div className="absolute bottom-[-16.6%] left-[-8.16%] right-[-8.16%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 57">
          <g id="Group 56358">
            <g filter="url(#filter0_d_75_1258)" id="Ellipse 13">
              <ellipse cx="28.5089" cy="24.095" fill="var(--fill-0, #FF00FF)" rx="24.5089" ry="24.095" />
              <path d={svgPathsReveal.p1bacad80} stroke="var(--stroke-0, #FF001B)" strokeWidth="3" />
            </g>
            <path d={svgPathsReveal.p254300} fill="var(--fill-0, #401B01)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56.19" id="filter0_d_75_1258" width="57.0179" x="-8.56817e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_75_1258" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_75_1258" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

interface MobileScrubProps {
  onNavigate: (page: 'use' | 'merch' | 'info') => void;
  onToggleMenu: () => void;
  menuExpanded?: boolean;
  selectedStickers?: Array<{ id: number; name: string; image: string; colorIndex: number }>;
  onPickAgain?: () => void;
  onConfirm?: () => void;
}

export default function MobileScrub({ onNavigate, onToggleMenu, menuExpanded = true, selectedStickers = [], onPickAgain, onConfirm }: MobileScrubProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scrubProgress, setScrubProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStartedScrubbing, setHasStartedScrubbing] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log('MobileScrub selectedStickers:', selectedStickers);
    console.log('Number of stickers:', selectedStickers.length);
  }, [selectedStickers]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use window dimensions to ensure full coverage
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Set canvas internal resolution to match window size
    canvas.width = width;
    canvas.height = height;

    // Fill with red overlay
    ctx.fillStyle = '#FF001B';
    ctx.globalAlpha = 0.95;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }, []);

  useEffect(() => {
    // When scrub progress is high enough, reveal the final state
    if (scrubProgress > 0.7 && !isRevealed) {
      setIsRevealed(true);
    }
  }, [scrubProgress, isRevealed]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY
      };
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    }
  };

  const scrub = (x: number, y: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    // Clear a circle where user drags
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    // Calculate scrub progress
    const imageData = ctx.getImageData(0, 0, canvas!.width, canvas!.height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) {
        transparentPixels++;
      }
    }
    
    const progress = transparentPixels / (pixels.length / 4);
    setScrubProgress(progress);
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isRevealed) return;
    e.preventDefault();
    setIsDrawing(true);
    setHasStartedScrubbing(true);
    const coords = getCoordinates(e);
    if (coords) {
      scrub(coords.x, coords.y);
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || isRevealed) return;
    e.preventDefault();
    const coords = getCoordinates(e);
    if (coords) {
      scrub(coords.x, coords.y);
    }
  };

  const handleEnd = () => {
    setIsDrawing(false);
  };

  const handlePickAgain = () => {
    if (onPickAgain) {
      onPickAgain();
    }
  };

  return (
    <div ref={containerRef} className="bg-[#291a01] relative size-full overflow-hidden" data-name="mobile-scrub">
      {/* Stickers layer - all same size, positioned to fit on screen */}
      {selectedStickers.length > 0 && (
        <>
          {selectedStickers[0] && (
            <div className="absolute left-[30px] top-[150px]" data-name="sticker-1">
              <img alt="" className="w-[150px] h-auto pointer-events-none" src={selectedStickers[0].image} />
            </div>
          )}
          
          {selectedStickers[1] && (
            <div className="absolute left-[200px] top-[140px]" data-name="sticker-2">
              <img alt="" className="w-[150px] h-auto pointer-events-none" src={selectedStickers[1].image} />
            </div>
          )}
          
          {selectedStickers[2] && (
            <div className="absolute left-[110px] top-[280px]" data-name="sticker-3">
              <img alt="" className="w-[150px] h-auto pointer-events-none" src={selectedStickers[2].image} />
            </div>
          )}
          
          {selectedStickers[3] && (
            <div className="absolute left-[30px] top-[420px]" data-name="sticker-4">
              <img alt="" className="w-[150px] h-auto pointer-events-none" src={selectedStickers[3].image} />
            </div>
          )}
          
          {selectedStickers[4] && (
            <div className="absolute left-[200px] top-[410px]" data-name="sticker-5">
              <img alt="" className="w-[150px] h-auto pointer-events-none" src={selectedStickers[4].image} />
            </div>
          )}
        </>
      )}

      {/* Menu bar */}
      {menuExpanded ? (
        <>
          <div className="absolute h-[54px] left-[calc(50%+0.5px)] top-[32px] translate-x-[-50%] w-[349px] cursor-pointer z-10 pointer-events-auto" data-name="mobile-menu 2" onClick={onToggleMenu}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMobileMenu2} />
          </div>
          <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[173.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer z-10 pointer-events-auto" onClick={() => onNavigate('use')}>
            <p className="leading-[normal]">USE</p>
          </div>
          <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[243.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer z-10 pointer-events-auto" onClick={() => onNavigate('merch')}>
            <p className="leading-[normal]">MERCH</p>
          </div>
          <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[313.5px] text-[#401b01] text-[12px] text-center top-[58.5px] translate-x-[-50%] translate-y-[-50%] w-[49px] cursor-pointer z-10 pointer-events-auto" onClick={() => onNavigate('info')}>
            <p className="leading-[normal]">INFO</p>
          </div>
        </>
      ) : (
        <div className="absolute h-[50px] left-[37px] top-[32px] w-[115px] cursor-pointer z-10 pointer-events-auto" data-name="Group 233 1" onClick={onToggleMenu}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2331} />
        </div>
      )}

      {/* Interactive canvas overlay for scrubbing - only visible when not revealed */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          className="absolute touch-none z-30 inset-0"
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          style={{ 
            cursor: 'pointer', 
            width: '100vw', 
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0
          }}
        />
      )}

      {/* Instruction text - fades when scrubbing starts - exact Figma position */}
      <div 
        className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-end leading-[0] left-[28px] text-[38px] text-white top-[305px] tracking-[-0.76px] translate-y-[-100%] w-[291px] transition-opacity duration-500 z-40 pointer-events-none"
        style={{ opacity: hasStartedScrubbing ? 0 : 1 }}
      >
        <p className="leading-none">Scrub to reveal your protection pack..</p>
      </div>

      {/* Swipe text - fades when scrubbing starts - exact Figma position */}
      <div 
        className="absolute flex flex-col font-['Archivo_Narrow:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[131px] text-[15px] text-white top-[723.5px] tracking-[-0.15px] translate-y-[-50%] w-[229px] transition-opacity duration-500 z-40 pointer-events-none"
        style={{ opacity: hasStartedScrubbing ? 0 : 1 }}
      >
        <p className="leading-[0px]">{`Swipe `}</p>
      </div>

      {/* Swipe icon (hand) - fades when scrubbing starts - exact Figma position */}
      <div 
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[16px] top-[664px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))] transition-opacity duration-500 z-40 pointer-events-none" 
        style={{ 
          "--transform-inner-width": "80", 
          "--transform-inner-height": "80",
          opacity: hasStartedScrubbing ? 0 : 1
        } as React.CSSProperties}
      >
        <div className="flex-none rotate-[315deg]">
          <Icon />
        </div>
      </div>

      {/* Revealed state - buttons appear after scrubbing */}
      {isRevealed && (
        <>
          {/* Pick Again Button */}
          <div 
            className="absolute bg-[#ff001b] box-border content-stretch flex flex-col gap-[10px] h-[60px] items-center justify-center left-[32px] px-[40px] py-[20px] rounded-[100px] top-[731px] w-[217px] cursor-pointer z-30 pointer-events-auto" 
            data-name="Buttons"
            onClick={handlePickAgain}
          >
            <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_4px_4px_0px_rgba(255,0,255,0.25)]" />
            <div className="flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#401b01] text-[14px] text-center text-nowrap tracking-[1.4px]">
              <p className="leading-[1.2] whitespace-pre">PICK AGAIN</p>
            </div>
          </div>

          {/* Checkmark Button */}
          <div className="cursor-pointer z-30 pointer-events-auto" onClick={onConfirm}>
            <CheckmarkButton />
          </div>
        </>
      )}
    </div>
  );
}
