import { useState, useEffect } from 'react';
import { ResponsiveScaler } from './components/ResponsiveScaler';
import Desktop45 from './imports/Desktop45-23-14';
import Desktop51 from './imports/Desktop51';
import Desktop46 from './imports/Desktop46';
import Desktop47 from './imports/Desktop47';
import MobileInfo from './components/MobileInfo';
import MobileInfoExpanded from './components/MobileInfoExpanded';
import MobileUse from './components/MobileUse';
import MobileUpload from './components/MobileUpload';
import MobileCustomise from './components/MobileCustomise';
import MobileCatalogue from './components/MobileCatalogue';
import MobileColourPicker from './components/MobileColourPicker';
import MobileScrub from './components/MobileScrub';
import MobileCustomizeUpload from './components/MobileCustomizeUpload';

// Import sticker images for randomise function
import imgImage42 from "figma:asset/2f77cbe2106a3ddf767c538aec975c1e336500c5.png";
import imgLayer18 from "figma:asset/e46c2c548905df92d53a73de3160c8ed2fad7c10.png";
import imgLayer19 from "figma:asset/5b7c55f37a4981d824bc9fc616e1ef217cc6f4f6.png";
import imgLayer1 from "figma:asset/b5c2e74efdab52af47376e489b7838649674699a.png";
import imgGroup301 from "figma:asset/7d4865997946b8b09ab191affee9fd4e63372993.png";
import imgLayer11 from "figma:asset/3e0aef972ffcb08da3bc76897cb6c3b6ff733680.png";
import imgImage19 from "figma:asset/0a747b9a2cd13f917a41017b0822e30b9c797f4a.png";
import imgLayer17 from "figma:asset/26a680ac487adba2ea0211370496b28166a8cbbb.png";
import imgImage15 from "figma:asset/ba7e717afd412827a768cd221fa743fe715c9fef.png";
import imgLayer13 from "figma:asset/36d9fe07331ccf7be2d5e9237678fb5d241d9d02.png";
import imgLayer15 from "figma:asset/8c28dda183a8bbfa763dbb2e477c4083ae3251bd.png";
import imgLayer14 from "figma:asset/edf7ad19b24a654efc956978775931b8711feded.png";
import imgImage44 from "figma:asset/9168c84be5892ae1d4addc4c11ce2c7b2ba87de2.png";
import imgImage9 from "figma:asset/ddc4327d86a29fc448b10698e1dbf5cbbd63d744.png";
import imgLayer16 from "figma:asset/7c8df45bc027a253515a64b180c2a9d8358d706f.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'info' | 'use' | 'merch' | 'customise' | 'catalogue' | 'scrub' | 'customize-upload'>('info');
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showColourPicker, setShowColourPicker] = useState(false);
  const [selectedSticker, setSelectedSticker] = useState<{ image: string; name: string; colorways: string[] } | null>(null);
  const [confirmedStickers, setConfirmedStickers] = useState<Array<{ id: number; name: string; image: string; colorIndex: number }>>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigate = (page: 'use' | 'merch' | 'info' | 'customise' | 'catalogue' | 'scrub') => {
    setCurrentPage(page);
    if (page !== 'customise' && page !== 'catalogue' && page !== 'scrub') {
      setMenuExpanded(false);
      setShowUpload(false);
    }
  };

  const handleToggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  const handleStartUpload = () => {
    setShowUpload(true);
    setMenuExpanded(true);
  };

  const handleImageUpload = (imageDataUrl: string) => {
    setUploadedImage(imageDataUrl);
  };

  const handleStickerClick = (sticker: { id: number; image: string; name: string; colorways: string[] }) => {
    setSelectedSticker(sticker);
    setShowColourPicker(true);
  };

  const handleColourPickerDone = (selectedColorIndex: number) => {
    if (selectedSticker) {
      // Add or update the confirmed sticker with selected color
      setConfirmedStickers(prev => {
        const existingIndex = prev.findIndex(s => s.name === selectedSticker.name);
        const newSticker = {
          id: (selectedSticker as any).id,
          name: selectedSticker.name,
          image: selectedSticker.colorways[selectedColorIndex],
          colorIndex: selectedColorIndex
        };
        
        if (existingIndex >= 0) {
          // Update existing
          const updated = [...prev];
          updated[existingIndex] = newSticker;
          return updated;
        } else {
          // Add new
          return [...prev, newSticker];
        }
      });
    }
    setShowColourPicker(false);
    setSelectedSticker(null);
  };

  const handleColourPickerBack = () => {
    setShowColourPicker(false);
    setSelectedSticker(null);
  };

  const handleRemoveSticker = (stickerName: string) => {
    setConfirmedStickers(prev => prev.filter(s => s.name !== stickerName));
  };

  const handleCatalogueNext = () => {
    setCurrentPage('scrub');
  };

  const handlePickAgain = () => {
    // Reset to catalogue page to pick stickers again
    setCurrentPage('catalogue');
  };

  const handleScrubConfirm = () => {
    // Navigate to customize upload page where user can position stickers
    setCurrentPage('customize-upload');
  };

  const handleCustomizeDownload = () => {
    // TODO: Implement download functionality
    console.log('Download clicked');
    alert('Download functionality to be implemented');
  };

  const handleCustomizeCancel = () => {
    // Go back to catalogue page
    setCurrentPage('catalogue');
  };

  const handleRandomise = () => {
    // All available stickers with their imported images
    const allStickers = [
      { id: 1, image: imgImage42, name: "image-42" },
      { id: 2, image: imgLayer18, name: "layer-1-8" },
      { id: 3, image: imgLayer19, name: "layer-1-9" },
      { id: 4, image: imgLayer1, name: "layer-1" },
      { id: 5, image: imgGroup301, name: "group-30-1" },
      { id: 6, image: imgLayer11, name: "layer-1-1" },
      { id: 7, image: imgImage19, name: "image-19" },
      { id: 8, image: imgLayer17, name: "layer-1-7" },
      { id: 9, image: imgImage15, name: "image-15" },
      { id: 10, image: imgLayer13, name: "layer-1-3" },
      { id: 11, image: imgLayer15, name: "layer-1-5" },
      { id: 12, image: imgLayer14, name: "layer-1-4" },
      { id: 13, image: imgImage44, name: "image-44" },
      { id: 14, image: imgImage9, name: "image-9" },
      { id: 15, image: imgLayer16, name: "layer-1-6" },
    ];

    // Shuffle array and take first 5
    const shuffled = [...allStickers].sort(() => Math.random() - 0.5);
    const randomStickers = shuffled.slice(0, 5).map(sticker => ({
      ...sticker,
      colorIndex: 0
    }));

    console.log('Randomise clicked! Random stickers:', randomStickers);
    setConfirmedStickers(randomStickers);
    setCurrentPage('scrub');
  };

  if (isMobile) {
    return (
      <ResponsiveScaler designWidth={402} designHeight={844}>
        {currentPage === 'info' && !menuExpanded && <MobileInfo onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} />}
        {currentPage === 'info' && menuExpanded && <MobileInfoExpanded onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} />}
        {currentPage === 'use' && !showUpload && <MobileUse onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} menuExpanded={menuExpanded} onStartUpload={handleStartUpload} />}
        {currentPage === 'use' && showUpload && <MobileUpload onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} menuExpanded={menuExpanded} onImageUpload={handleImageUpload} />}
        {currentPage === 'customise' && <MobileCustomise onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} menuExpanded={menuExpanded} />}
        {currentPage === 'catalogue' && !showColourPicker && <MobileCatalogue onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} menuExpanded={menuExpanded} onStickerClick={handleStickerClick} confirmedStickers={confirmedStickers} onRemoveSticker={handleRemoveSticker} onNext={handleCatalogueNext} onRandomise={handleRandomise} />}
        {currentPage === 'catalogue' && showColourPicker && selectedSticker && (
          <MobileColourPicker 
            sticker={selectedSticker} 
            onNavigate={handleNavigate} 
            onToggleMenu={handleToggleMenu} 
            menuExpanded={menuExpanded}
            onDone={handleColourPickerDone}
            onBack={handleColourPickerBack}
          />
        )}
        {currentPage === 'scrub' && <MobileScrub onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} menuExpanded={menuExpanded} selectedStickers={confirmedStickers} onPickAgain={handlePickAgain} onConfirm={handleScrubConfirm} />}
        {currentPage === 'customize-upload' && <MobileCustomizeUpload onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} menuExpanded={menuExpanded} uploadedImage={uploadedImage || undefined} selectedStickers={confirmedStickers} onDownload={handleCustomizeDownload} onCancel={handleCustomizeCancel} />}
        {currentPage === 'merch' && <MobileUse onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} menuExpanded={menuExpanded} onStartUpload={handleStartUpload} />}
      </ResponsiveScaler>
    );
  }

  return (
    <ResponsiveScaler designWidth={1440} designHeight={1024}>
      {currentPage === 'info' && menuExpanded && <Desktop45 onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} />}
      {currentPage === 'info' && !menuExpanded && <Desktop51 onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} />}
      {currentPage === 'use' && menuExpanded && <Desktop46 onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} />}
      {currentPage === 'use' && !menuExpanded && <Desktop47 onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} />}
      {currentPage === 'merch' && <Desktop46 onNavigate={handleNavigate} onToggleMenu={handleToggleMenu} />}
    </ResponsiveScaler>
  );
}
