import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MAX_DEPTH, PIXELS_PER_METER, SEA_CREATURES, OCEAN_ZONES } from './constants';
import CreatureCard from './components/CreatureCard';
import BubbleEffect from './components/BubbleEffect';
import WaveLayer from './components/WaveLayer';


const INTRO_HEIGHT = 900;
const APP_MARGIN = 150;

const App: React.FC = () => {
  const [currentDepth, setCurrentDepth] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const frameSrc = `${import.meta.env.BASE_URL}frame.png`;
  const scrollViewportRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const totalHeight = MAX_DEPTH * PIXELS_PER_METER + INTRO_HEIGHT + 1000;

  useEffect(() => {
    const updateFromCurrentViewport = () => {
      const viewport = scrollViewportRef.current;
      if (!viewport) return;

      cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = viewport.scrollTop;
        const viewportHeight = viewport.clientHeight;

        const linePositionFromTop = viewportHeight * 0.8;
        const depthAtLine =
          (scrollTop + linePositionFromTop - INTRO_HEIGHT) / PIXELS_PER_METER;

        setCurrentDepth(Math.max(0, Math.min(depthAtLine, MAX_DEPTH)));
        setShowScrollTop(scrollTop > 300);
      });
    };

    updateFromCurrentViewport();
    window.addEventListener('resize', updateFromCurrentViewport);

    return () => {
      window.removeEventListener('resize', updateFromCurrentViewport);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);


  const scrollToTop = () => {
    const viewport = scrollViewportRef.current;
    if (!viewport) return;

    viewport.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const gradientBackground = useMemo(() => {
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
  const handleViewportScroll = (
    e: React.UIEvent<HTMLDivElement>
  ) => {
    const viewport = e.currentTarget;

    cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = viewport.scrollTop;
      const viewportHeight = viewport.clientHeight;

      const linePositionFromTop = viewportHeight * 0.8;
      const depthAtLine =
        (scrollTop + linePositionFromTop - INTRO_HEIGHT) / PIXELS_PER_METER;

      setCurrentDepth(Math.max(0, Math.min(depthAtLine, MAX_DEPTH)));
      setShowScrollTop(scrollTop > 300);
    });
  };
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* INNER APP AREA */}
      <div
        className="fixed overflow-hidden z-10"
        style={{
          top: 126,
          right: 122,
          bottom: 74,
          left: 112,
        }}
      >
        <div className="relative w-full h-full overflow-hidden text-white font-sans selection:bg-cyan-500 selection:text-white">
          <div
            className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay opacity-30 animate-[wave_20s_ease-in-out_infinite_alternate]"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 40%)',
              backgroundSize: '150% 150%',
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none z-0 mix-blend-soft-light opacity-20"
            style={{
              background:
                'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
              backgroundSize: '200% 200%',
              animation: 'shimmer 10s linear infinite',
            }}
          />

          <BubbleEffect />

          <div className="absolute left-0 right-0 bottom-[20%] z-50 pointer-events-none">
            <div className="relative w-full border-t border-dashed border-white/40 h-px flex items-center justify-end pr-8">
              <div className="absolute -top-10 right-8 md:right-12 bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-2xl">
                <span className="font-mono text-5xl md:text-6xl font-black text-white tracking-widest">
                  {Math.round(currentDepth)}{' '}
                  <span className="text-2xl md:text-3xl text-cyan-400">m</span>
                </span>
              </div>
              <span className="absolute right-2 -top-16 text-sm text-white/60 uppercase tracking-widest font-semibold">
                Current Depth
              </span>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed z-[110] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/80 ${showScrollTop
              ? 'pointer-events-auto opacity-100 translate-y-0'
              : 'pointer-events-none opacity-0 translate-y-3'
              }`}
            style={{
              left: 140,
              bottom: 120,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <div
            ref={scrollViewportRef}
            onScroll={handleViewportScroll}
            className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden no-scrollbar"
          >
            <div className="relative w-full" style={{ height: `${totalHeight}px` }}>
              <div
                className="absolute inset-0 z-0"
                style={{ background: gradientBackground }}
              />

              <div className="relative z-20 w-full h-full">
                <header
                  className="absolute top-0 left-0 w-full flex flex-col justify-center items-center z-30"
                  style={{ height: `${INTRO_HEIGHT}px` }}
                >
                  <h1 className="text-5xl md:text-8xl font-black text-cyan-900 drop-shadow-sm tracking-wider mb-6 text-center">
                    THE DEEP SEA
                  </h1>
                  <p className="text-lg md:text-2xl text-cyan-700 max-w-lg mx-auto font-light leading-relaxed drop-shadow-sm text-center px-4">
                    Scroll down to explore the ocean&apos;s depths
                  </p>
                  <div className="mt-12 animate-bounce text-cyan-600">
                    <svg
                      className="w-10 h-10 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </header>

                <WaveLayer
                  className="absolute w-full z-40"
                  style={{ top: `${INTRO_HEIGHT - 2}px`, transform: 'translateY(-98%)' }}
                />

                {OCEAN_ZONES.map((zone) => (
                  <div
                    key={zone.name}
                    className="absolute right-4 md:right-10 text-right opacity-60 hover:opacity-100 transition-opacity"
                    style={{ top: `${INTRO_HEIGHT + zone.startDepth * PIXELS_PER_METER}px` }}
                  >
                    <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/80 border-b border-white/20 pb-1 mb-1 inline-block">
                      {zone.name}
                    </h2>
                    <p className="text-[10px] md:text-xs text-white/50 font-mono">
                      {zone.startDepth}m - {zone.endDepth}m
                    </p>
                  </div>
                ))}

                {Array.from({ length: Math.floor(MAX_DEPTH / 250) }).map((_, i) => {
                  const depth = (i + 1) * 250;
                  return (
                    <div
                      key={depth}
                      className="absolute w-full flex items-center justify-center pointer-events-none"
                      style={{ top: `${INTRO_HEIGHT + depth * PIXELS_PER_METER}px` }}
                    >
                      <div className="absolute w-full border-t border-dashed border-white/10" />
                      <span className="relative z-10 px-4 text-4xl md:text-6xl font-black text-white/20 drop-shadow-lg uppercase tracking-wider">
                        {depth} m
                      </span>
                    </div>
                  );
                })}

                {SEA_CREATURES.map((creature, index) => (
                  <div
                    key={creature.id}
                    className="absolute w-full pointer-events-none"
                    style={{ top: `${INTRO_HEIGHT + creature.depth * PIXELS_PER_METER}px` }}
                  >
                    <div className="pointer-events-auto">
                      <CreatureCard creature={creature} index={index} />
                    </div>
                  </div>
                ))}

                <div
                  className="absolute w-full text-center pt-40"
                  style={{ top: `${INTRO_HEIGHT + MAX_DEPTH * PIXELS_PER_METER}px` }}
                >
                  <p className="text-gray-500 max-w-lg mx-auto px-6 text-lg leading-relaxed font-light">
                    You have reached the deepest known point of the ocean.
                    <br />
                    <span className="font-bold text-gray-400">Deep Ocean</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME ON THE BLACK BORDER */}
      <img
        src={frameSrc}
        alt="Frame"
        className="fixed z-[100] pointer-events-none select-none"
        draggable={false}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
};

export default App;