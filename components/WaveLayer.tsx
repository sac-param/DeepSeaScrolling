import React from 'react';

interface WaveLayerProps {
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
}

const WaveLayer: React.FC<WaveLayerProps> = ({ className, style, flip = false }) => (
    <div className={`${className} h-24 md:h-48 overflow-hidden pointer-events-none`} style={style}>
        {/* Wave 1: Background, slower, smooth sine wave */}
        <div className={`flex w-[200%] h-full absolute ${flip ? 'top-0' : 'bottom-0'} left-0 animate-[wave-slide_15s_linear_infinite] opacity-60`}>
            <svg className={`w-1/2 h-full fill-[#4facfe] ${flip ? 'rotate-180' : ''}`} viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,160 Q360,60 720,160 T1440,160 V320 H0 Z"></path>
            </svg>
            <svg className={`w-1/2 h-full fill-[#4facfe] ${flip ? 'rotate-180' : ''}`} viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,160 Q360,60 720,160 T1440,160 V320 H0 Z"></path>
            </svg>
        </div>

        {/* Wave 2: Foreground, faster, slightly offset smooth wave */}
        <div className={`flex w-[200%] h-full absolute ${flip ? 'top-0' : 'bottom-0'} left-0 animate-[wave-slide_10s_linear_infinite_reverse]`}>
            <svg className={`w-1/2 h-full fill-[#4facfe] ${flip ? 'rotate-180' : ''}`} viewBox="0 0 1440 320" preserveAspectRatio="none">
               <path d="M0,160 Q360,260 720,160 T1440,160 V320 H0 Z"></path>
            </svg>
            <svg className={`w-1/2 h-full fill-[#4facfe] ${flip ? 'rotate-180' : ''}`} viewBox="0 0 1440 320" preserveAspectRatio="none">
               <path d="M0,160 Q360,260 720,160 T1440,160 V320 H0 Z"></path>
            </svg>
        </div>
    </div>
);

export default React.memo(WaveLayer);