import { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-1hs3urhpee";
import imgMobileMenu2 from "figma:asset/670723166d639047fb41ad1eb337f56fbef65772.png";
import imgGroup2331 from "figma:asset/e2fa7924faadaab3b607786dd00b91529258b98e.png";

function SliderGroup({ currentIndex, totalColors }: { currentIndex: number; totalColors: number }) {
  // Calculate scroll progress (0 to 1)
  const scrollProgress = totalColors > 1 ? currentIndex / (totalColors - 1) : 0;
  
  const firstPathStyle: React.CSSProperties = {
    opacity: 1 - scrollProgress,
    transition: 'opacity 0.1s ease-out'
  };
  
  const secondPathStyle: React.CSSProperties = {
    opacity: scrollProgress,
    transition: 'opacity 0.1s ease-out'
  };
  
  return (
    <div className="absolute left-[calc(50%-97.5px)] w-[195px] h-[21px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195 21">
        <g id="Group 58080">
          {/* Background bone shape */}
          <path d={svgPaths.p3786200} fill="#FF001B" fillOpacity="0.5" />
          {/* First color variant (opacity decreases as we scroll) */}
          <path 
            d={svgPaths.p1eae8b80} 
            fill="#FF001B"
            style={firstPathStyle}
          />
          {/* Last color variant (opacity increases as we scroll) */}
          <path 
            d={svgPaths.p1eae8b80} 
            fill="#FF001B"
            style={secondPathStyle}
          />
        </g>
      </svg>
    </div>
  );
}

interface MobileColourPickerProps {
  sticker: {
    image: string;
    name: string;
    colorways: string[]; // Array of image URLs for different colors
  };
  onNavigate: (page: 'use' | 'merch' | 'info') => void;
  onToggleMenu: () => void;
  menuExpanded?: boolean;
  onDone: (selectedColorIndex: number) => void;
  onBack: () => void;
}

export default function MobileColourPicker({ 
  sticker, 
  onNavigate, 
  onToggleMenu, 
  menuExpanded = true, 
  onDone,
  onBack 
}: MobileColourPickerProps) {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const totalColors = sticker.colorways.length;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Calculate fill percentage for slider
  const fillPercentage = totalColors > 1 ? (currentColorIndex / (totalColors - 1)) * 100 : 100;

  // Update current index based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const index = Math.round(scrollPosition / itemWidth);
      setCurrentColorIndex(Math.min(Math.max(index, 0), totalColors - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [totalColors]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest item
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.clientWidth;
      const targetIndex = Math.round(scrollContainerRef.current.scrollLeft / itemWidth);
      scrollContainerRef.current.scrollTo({
        left: targetIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleDone = () => {
    onDone(currentColorIndex);
  };

  return (
    <div className="bg-[#291a01] relative size-full overflow-hidden" data-name="mobile-colour-picker">
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
          <p className="leading-none">Pick A Colour</p>
        </div>
      </div>

      {/* Scrollable Sticker Carousel */}
      <div 
        ref={scrollContainerRef}
        className="absolute left-0 top-[240px] w-full h-[300px] overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
        style={{ 
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        } as React.CSSProperties}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div className="flex h-full" style={{ width: `${totalColors * 100}%` } as React.CSSProperties}>
          {sticker.colorways.map((colorway, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center flex-shrink-0"
              style={{ 
                width: `${100 / totalColors}%`,
                scrollSnapAlign: 'center'
              } as React.CSSProperties}
            >
              <div className="relative size-[193px]">
                <img 
                  alt={`${sticker.name} color ${index + 1}`} 
                  className="absolute inset-0 object-contain pointer-events-none size-full"
                  src={colorway} 
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Color Slider */}
      <div className="absolute left-0 right-0 top-[527px] h-[21px]">
        <SliderGroup currentIndex={currentColorIndex} totalColors={totalColors} />
      </div>

      {/* Color indicator text */}
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] justify-center leading-[0] left-[calc(50%)] top-[560px] translate-x-[-50%] text-white text-[12px] text-center">
        <p className="leading-normal">{currentColorIndex + 1} / {totalColors}</p>
      </div>

      {/* Done Button */}
      <div className="absolute h-[50px] left-[calc(50%+2.5px)] top-[736px] translate-x-[-50%] w-[343px] cursor-pointer" onClick={handleDone}>
        <div className="absolute bg-[#ff001b] inset-0 rounded-[25px]">
          <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_4px_4px_0px_rgba(255,0,255,0.25)]" />
        </div>
        <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-[20.83%_4.75%_22.92%_6.79%] justify-center leading-[0] text-[#401b01] text-[14px] text-center tracking-[1.4px]">
          <p className="leading-[normal]">DONE</p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
