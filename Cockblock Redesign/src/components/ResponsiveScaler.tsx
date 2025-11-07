import { useEffect, useState, ReactNode } from 'react';

interface ResponsiveScalerProps {
  children: ReactNode;
  designWidth: number;
  designHeight: number;
}

export function ResponsiveScaler({ children, designWidth, designHeight }: ResponsiveScalerProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate scale to fit both width and height
      const scaleX = windowWidth / designWidth;
      const scaleY = windowHeight / designHeight;
      
      // Use the smaller scale to ensure everything fits without cutting off
      const newScale = Math.min(scaleX, scaleY);
      
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    
    return () => window.removeEventListener('resize', updateScale);
  }, [designWidth, designHeight]);

  return (
    <div className="fixed inset-0 bg-[#291a01] overflow-hidden flex items-center justify-center">
      <div 
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
}
