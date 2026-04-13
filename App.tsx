import React, { useEffect, useState, useRef } from 'react';
import { MAX_DEPTH, PIXELS_PER_METER, SEA_CREATURES, OCEAN_ZONES } from './constants';
import CreatureCard from './components/CreatureCard';
import BubbleEffect from './components/BubbleEffect';
import WaveLayer from './components/WaveLayer';

// Height of the intro "title screen" before the ocean starts
const INTRO_HEIGHT = 900;

const App: React.FC = () => {
  const [currentDepth, setCurrentDepth] = useState(0);
  const frameRef = useRef<number>(0);

  // Scroll handler to update depth
  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame to throttle state updates slightly and align with frame rate
      cancelAnimationFrame(frameRef.current);
      
      frameRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // We want the depth calculation to represent the depth at the 'line' 
        // which is at 20% from the bottom (or 80% from the top) of the viewport.
        const viewportHeight = window.innerHeight;
        const linePositionFromTop = viewportHeight * 0.8; 
        
        // Depth = (Total Scroll + Offset - Intro Height) / Scale
        const depthAtLine = (scrollY + linePositionFromTop - INTRO_HEIGHT) / PIXELS_PER_METER;
        setCurrentDepth(Math.max(0, Math.min(depthAtLine, MAX_DEPTH)));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount to set initial value
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // Generate gradient stops based on zones and the intro offset
  // Wrapped in useMemo to prevent recalculation on every render (though it is cheap)
  const gradientBackground = React.useMemo(() => {
    const r = PIXELS_PER_METER;
    const h = INTRO_HEIGHT;
    
    return `linear-gradient(to bottom, 
      #CFFAFE 0px,         
      #CFFAFE ${h}px,      
      #4facfe ${h}px,      
      #4facfe ${h + 200 * r}px, 
      #005bea ${h + 1000 * r}px, 
      #00234a ${h + 3000 * r}px, 
      #000814 ${h + 8000 * r}px, 
      #000000 ${h + 12000 * r}px
    )`;
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Main Container that defines the total scrollable height */}
      <div 
        style={{ 
          height: `${MAX_DEPTH * PIXELS_PER_METER + INTRO_HEIGHT + 1000}px`,
          background: gradientBackground
        }}
        className="relative w-full overflow-hidden"
      >
        
        {/* Slow Animated Wave / Caustics Effect (Underwater texture) */}
        <div className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay opacity-30 animate-[wave_20s_ease-in-out_infinite_alternate]"
             style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 40%)',
                backgroundSize: '150% 150%',
             }}
        ></div>

        {/* Additional shimmer layer for deep sea feeling */}
         <div className="fixed inset-0 pointer-events-none z-0 mix-blend-soft-light opacity-20"
             style={{
                background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 10s linear infinite'
             }}
        ></div>

        {/* Bubbles - Always present but fixed so they don't scroll with page content */}
        <BubbleEffect />

        {/* Fixed Reference Line at 20% from bottom */}
        {/* Now contains the live depth counter */}
        <div className="fixed bottom-[20%] left-0 w-full z-50 pointer-events-none">
          <div className="relative w-full border-t border-dashed border-white/40 h-px flex items-center justify-end pr-8">
            <div className="absolute -top-10 right-8 md:right-12 bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-2xl transition-transform duration-75 ease-out">
              <span className="font-mono text-5xl md:text-6xl font-black text-white tracking-widest drop-shadow-lg">
                {Math.round(currentDepth)} <span className="text-2xl md:text-3xl text-cyan-400">m</span>
              </span>
            </div>
            <span className="absolute right-2 -top-16 text-sm text-white/60 uppercase tracking-widest font-semibold">Current Depth</span>
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-20 w-full h-full">
          
          {/* Header / Intro Section */}
          <header 
            className="absolute top-0 left-0 w-full flex flex-col justify-center items-center z-30"
            style={{ height: `${INTRO_HEIGHT}px` }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-cyan-900 drop-shadow-sm tracking-wider mb-6 text-center">
              THE DEEP SEA
            </h1>
            <p className="text-lg md:text-2xl text-cyan-700 max-w-lg mx-auto font-light leading-relaxed drop-shadow-sm text-center px-4">
              Scroll down to explore the ocean's depths
            </p>
            <div className="mt-12 animate-bounce text-cyan-600">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </header>

          {/* THE WAVE LAYER - Original Surface (Transition) */}
          {/* This one scrolls with the page and marks the beginning of water */}
          <WaveLayer 
            className="absolute w-full z-40" 
            style={{ top: `${INTRO_HEIGHT - 2}px`, transform: 'translateY(-98%)' }} 
          />

          {/* Zones Labels */}
          {OCEAN_ZONES.map((zone) => (
            <div 
              key={zone.name}
              className="absolute right-4 md:right-10 text-right opacity-60 hover:opacity-100 transition-opacity"
              style={{ top: `${INTRO_HEIGHT + zone.startDepth * PIXELS_PER_METER}px` }}
            >
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/80 border-b border-white/20 pb-1 mb-1 inline-block">{zone.name}</h2>
              <p className="text-[10px] md:text-xs text-white/50 font-mono">{zone.startDepth}m - {zone.endDepth}m</p>
            </div>
          ))}

          {/* Depth Markers (Static on scroll) every 250m */}
          {Array.from({ length: Math.floor(MAX_DEPTH / 250) }).map((_, i) => {
             const depth = (i + 1) * 250;
             return (
               <div 
                 key={depth}
                 className="absolute w-full flex items-center justify-center pointer-events-none"
                 style={{ top: `${INTRO_HEIGHT + depth * PIXELS_PER_METER}px` }}
               >
                 <div className="absolute w-full border-t border-dashed border-white/10"></div>
                 {/* Increased size for depth markers */}
                 <span className="relative z-10 px-4 text-4xl md:text-6xl font-black text-white/20 drop-shadow-lg uppercase tracking-wider">
                   {depth} m
                 </span>
               </div>
             )
          })}

          {/* Creatures */}
          {SEA_CREATURES.map((creature, index) => (
            <div 
              key={creature.id}
              className="absolute w-full pointer-events-none"
              style={{ top: `${INTRO_HEIGHT + creature.depth * PIXELS_PER_METER}px` }}
            >
              {/* Enable pointer events on the card itself */}
              <div className="pointer-events-auto">
                <CreatureCard creature={creature} index={index} />
              </div>
            </div>
          ))}

          {/* Bottom Message */}
          <div 
            className="absolute w-full text-center pb-40"
            style={{ top: `${INTRO_HEIGHT + MAX_DEPTH * PIXELS_PER_METER}px` }}
          >
             <h2 className="text-4xl md:text-6xl font-black text-gray-700 mb-8 uppercase tracking-widest">The Bottom</h2>
             <p className="text-gray-500 max-w-lg mx-auto px-6 text-lg leading-relaxed font-light">
               You have reached the deepest known point of the ocean.<br/>
               <span className="font-bold text-gray-400">Challenger Deep</span>
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;