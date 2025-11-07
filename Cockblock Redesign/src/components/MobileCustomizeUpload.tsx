import { useState, useRef } from 'react';
import svgPaths from "../imports/svg-54gs81njdy";
import imgMobileMenu2 from "figma:asset/670723166d639047fb41ad1eb337f56fbef65772.png";
import imgGroup2331 from "figma:asset/e2fa7924faadaab3b607786dd00b91529258b98e.png";

interface StickerInstance {
  id: string;
  image: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

interface MobileCustomizeUploadProps {
  onNavigate: (page: 'use' | 'merch' | 'info') => void;
  onToggleMenu: () => void;
  menuExpanded?: boolean;
  uploadedImage?: string;
  selectedStickers?: Array<{ id: number; name: string; image: string; colorIndex: number }>;
  onDownload?: () => void;
  onCancel?: () => void;
}

function DownloadButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute h-[48.19px] left-[326.98px] top-[737px] w-[49.018px] cursor-pointer z-30" onClick={onClick}>
      <div className="absolute bottom-[-16.6%] left-[-8.16%] right-[-8.16%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 57">
          <g id="Group 56358">
            <g filter="url(#filter0_d_77_1237)" id="Ellipse 13">
              <ellipse cx="28.5089" cy="24.095" fill="var(--fill-0, #FF00FF)" rx="24.5089" ry="24.095" />
              <path d={svgPaths.p1bacad80} stroke="var(--stroke-0, #FF001B)" strokeWidth="3" />
            </g>
            <g id="Group 56356">
              <path d="M20 16L37 33" id="Vector 8" stroke="var(--stroke-0, #401B01)" strokeWidth="2.4" />
              <path d="M37.0001 16L20.0001 33" id="Vector 9" stroke="var(--stroke-0, #401B01)" strokeWidth="2.4" />
            </g>
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

function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute left-[326.98px] size-[48.19px] top-[737px] cursor-pointer z-30" onClick={onClick}>
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

interface Touch {
  id: number;
  x: number;
  y: number;
}

function DraggableSticker({
  sticker,
  onUpdate,
  onDelete,
  canvasRect,
}: {
  sticker: StickerInstance;
  onUpdate: (id: string, updates: Partial<StickerInstance>) => void;
  onDelete: (id: string) => void;
  canvasRect: DOMRect | null;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef<{ x: number; y: number; stickerX: number; stickerY: number } | null>(null);
  const touchStartData = useRef<{
    touches: Touch[];
    initialDistance: number;
    initialAngle: number;
    initialWidth: number;
    initialRotation: number;
    centerX: number;
    centerY: number;
  } | null>(null);

  const getDistance = (t1: Touch, t2: Touch) => {
    const dx = t2.x - t1.x;
    const dy = t2.y - t1.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getAngle = (t1: Touch, t2: Touch) => {
    return Math.atan2(t2.y - t1.y, t2.x - t1.x) * (180 / Math.PI);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    
    if (e.touches.length === 1) {
      // Single touch - drag
      const touch = e.touches[0];
      setIsDragging(true);
      dragStartPos.current = {
        x: touch.clientX,
        y: touch.clientY,
        stickerX: sticker.x,
        stickerY: sticker.y,
      };
    } else if (e.touches.length === 2) {
      // Two touches - pinch to resize and rotate
      const t1 = { id: 0, x: e.touches[0].clientX, y: e.touches[0].clientY };
      const t2 = { id: 1, x: e.touches[1].clientX, y: e.touches[1].clientY };
      
      touchStartData.current = {
        touches: [t1, t2],
        initialDistance: getDistance(t1, t2),
        initialAngle: getAngle(t1, t2),
        initialWidth: sticker.width,
        initialRotation: sticker.rotation,
        centerX: (t1.x + t2.x) / 2,
        centerY: (t1.y + t2.y) / 2,
      };
      setIsDragging(false);
      dragStartPos.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.touches.length === 1 && isDragging && dragStartPos.current) {
      // Single touch drag
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragStartPos.current.x;
      const deltaY = touch.clientY - dragStartPos.current.y;

      const newX = dragStartPos.current.stickerX + deltaX;
      const newY = dragStartPos.current.stickerY + deltaY;

      onUpdate(sticker.id, { x: newX, y: newY });
    } else if (e.touches.length === 2 && touchStartData.current) {
      // Two touch pinch and rotate
      const t1 = { id: 0, x: e.touches[0].clientX, y: e.touches[0].clientY };
      const t2 = { id: 1, x: e.touches[1].clientX, y: e.touches[1].clientY };

      const currentDistance = getDistance(t1, t2);
      const currentAngle = getAngle(t1, t2);

      // Calculate scale
      const scale = currentDistance / touchStartData.current.initialDistance;
      const newWidth = Math.max(50, Math.min(350, touchStartData.current.initialWidth * scale));
      const newHeight = newWidth; // Keep aspect ratio

      // Calculate rotation
      const angleDelta = currentAngle - touchStartData.current.initialAngle;
      const newRotation = touchStartData.current.initialRotation + angleDelta;

      onUpdate(sticker.id, {
        width: newWidth,
        height: newHeight,
        rotation: newRotation,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      // All touches released
      if (isDragging) {
        setIsDragging(false);
        
        // Check if sticker is outside canvas bounds
        if (canvasRect) {
          const stickerCenterX = sticker.x + sticker.width / 2;
          const stickerCenterY = sticker.y + sticker.height / 2;

          if (
            stickerCenterX < 0 ||
            stickerCenterX > canvasRect.width ||
            stickerCenterY < 0 ||
            stickerCenterY > canvasRect.height
          ) {
            onDelete(sticker.id);
          }
        }
        
        dragStartPos.current = null;
      }
      
      touchStartData.current = null;
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return; // Handle touch separately
    
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
    
    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      stickerX: sticker.x,
      stickerY: sticker.y,
    };

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return; // Handle touch separately
    if (!isDragging || !dragStartPos.current) return;

    e.preventDefault();
    e.stopPropagation();

    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;

    const newX = dragStartPos.current.stickerX + deltaX;
    const newY = dragStartPos.current.stickerY + deltaY;

    onUpdate(sticker.id, { x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return; // Handle touch separately
    if (!isDragging) return;

    setIsDragging(false);
    dragStartPos.current = null;

    // Check if sticker is outside canvas bounds
    if (canvasRect) {
      const stickerCenterX = sticker.x + sticker.width / 2;
      const stickerCenterY = sticker.y + sticker.height / 2;

      if (
        stickerCenterX < 0 ||
        stickerCenterX > canvasRect.width ||
        stickerCenterY < 0 ||
        stickerCenterY > canvasRect.height
      ) {
        onDelete(sticker.id);
      }
    }

    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Mouse wheel to rotate (holding shift) or resize
    e.preventDefault();
    e.stopPropagation();

    if (e.shiftKey) {
      // Rotate with shift + wheel
      const rotationDelta = e.deltaY > 0 ? -5 : 5;
      onUpdate(sticker.id, { rotation: sticker.rotation + rotationDelta });
    } else {
      // Resize with wheel
      const scaleDelta = e.deltaY > 0 ? 0.95 : 1.05;
      const newWidth = Math.max(50, Math.min(350, sticker.width * scaleDelta));
      onUpdate(sticker.id, { width: newWidth, height: newWidth });
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
      style={{
        position: 'absolute',
        left: sticker.x,
        top: sticker.y,
        width: sticker.width,
        height: sticker.height,
        opacity: isDragging ? 0.7 : 1,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 10,
        touchAction: 'none',
      }}
    >
      <img
        src={sticker.image}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          pointerEvents: 'none',
          transform: `rotate(${sticker.rotation}deg)`,
          userSelect: 'none',
        }}
        draggable={false}
      />
    </div>
  );
}

export default function MobileCustomizeUpload({
  onNavigate,
  onToggleMenu,
  menuExpanded = true,
  uploadedImage,
  selectedStickers = [],
  onDownload,
  onCancel,
}: MobileCustomizeUploadProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasRect, setCanvasRect] = useState<DOMRect | null>(null);

  // Initialize sticker instances with positions that fit on screen (350x350 canvas)
  const [stickerInstances, setStickerInstances] = useState<StickerInstance[]>(() => {
    // Better positioning - grid layout that keeps stickers on screen
    const positions = [
      { x: 30, y: 30, rotation: 0 },      // Top left
      { x: 180, y: 30, rotation: 0 },     // Top right
      { x: 30, y: 130, rotation: 0 },     // Middle left
      { x: 180, y: 130, rotation: 0 },    // Middle right
      { x: 105, y: 220, rotation: 0 },    // Bottom center
    ];

    return selectedStickers.slice(0, 5).map((sticker, index) => ({
      id: `sticker-${sticker.id}-${index}`,
      image: sticker.image,
      x: positions[index]?.x || 50,
      y: positions[index]?.y || 50,
      width: 120,
      height: 120,
      rotation: positions[index]?.rotation || 0,
    }));
  });

  // Update canvas rect when component mounts
  useState(() => {
    if (canvasRef.current) {
      setCanvasRect(canvasRef.current.getBoundingClientRect());
    }
  });

  const updateSticker = (id: string, updates: Partial<StickerInstance>) => {
    setStickerInstances((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  const deleteSticker = (id: string) => {
    setStickerInstances((prev) => prev.filter((s) => s.id !== id));
  };

  const handleDownload = async () => {
    if (!uploadedImage) return;

    const canvas = document.createElement('canvas');
    canvas.width = 350;
    canvas.height = 350;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load and draw the background image
    const bgImage = new Image();
    bgImage.crossOrigin = 'anonymous';
    
    await new Promise<void>((resolve, reject) => {
      bgImage.onload = () => {
        ctx.drawImage(bgImage, 0, 0, 350, 350);
        resolve();
      };
      bgImage.onerror = reject;
      bgImage.src = uploadedImage;
    });

    // Load and draw each sticker
    for (const sticker of stickerInstances) {
      const stickerImage = new Image();
      stickerImage.crossOrigin = 'anonymous';
      
      await new Promise<void>((resolve, reject) => {
        stickerImage.onload = () => {
          ctx.save();
          
          // Move to sticker center
          const centerX = sticker.x + sticker.width / 2;
          const centerY = sticker.y + sticker.height / 2;
          
          ctx.translate(centerX, centerY);
          ctx.rotate((sticker.rotation * Math.PI) / 180);
          
          // Draw sticker
          ctx.drawImage(
            stickerImage,
            -sticker.width / 2,
            -sticker.height / 2,
            sticker.width,
            sticker.height
          );
          
          ctx.restore();
          resolve();
        };
        stickerImage.onerror = () => resolve(); // Skip failed images
        stickerImage.src = sticker.image;
      });
    }

    // Download the image
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'cockblock-creation.png';
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  return (
    <div className="bg-[#291a01] relative size-full" data-name="mobile-customize-upload">

      {/* Menu bar */}
      {menuExpanded ? (
        <>
          <div className="absolute h-[54px] left-[calc(50%+0.5px)] top-[32px] translate-x-[-50%] w-[349px] cursor-pointer z-10" data-name="mobile-menu 2" onClick={onToggleMenu}>
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
        </>
      ) : (
        <div className="absolute h-[50px] left-[37px] top-[32px] w-[115px] cursor-pointer z-10" data-name="Group 233 1" onClick={onToggleMenu}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2331} />
        </div>
      )}

      {/* Canvas area with uploaded image */}
      <div 
        ref={canvasRef}
        className="absolute left-[26px] size-[350px] top-[237px] bg-[#D9D9D9] overflow-hidden"
        onPointerMove={(e) => {
          // Update canvas rect on first interaction
          if (!canvasRect && canvasRef.current) {
            setCanvasRect(canvasRef.current.getBoundingClientRect());
          }
        }}
      >
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
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

        {/* Draggable stickers */}
        {stickerInstances.map((sticker) => (
          <DraggableSticker
            key={sticker.id}
            sticker={sticker}
            onUpdate={updateSticker}
            onDelete={deleteSticker}
            canvasRect={canvasRect}
          />
        ))}
      </div>

      {/* Download Button */}
      <div 
        className="absolute bg-[#ff001b] box-border content-stretch flex flex-col gap-[10px] h-[60px] items-center justify-center left-[32px] px-[40px] py-[20px] rounded-[100px] top-[731px] w-[217px] cursor-pointer z-30" 
        data-name="Buttons"
        onClick={handleDownload}
      >
        <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_4px_4px_0px_rgba(255,0,255,0.25)]" />
        <div className="flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#401b01] text-[14px] text-center text-nowrap tracking-[1.4px]">
          <p className="leading-[1.2] whitespace-pre">DOWNLOAD</p>
        </div>
      </div>

      {/* Cancel Button */}
      <CancelButton onClick={() => onCancel?.()} />
    </div>
  );
}
