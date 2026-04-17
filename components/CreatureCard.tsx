import React, { useState, useEffect, useRef } from 'react';
import { SeaCreature } from '../types';

interface CreatureCardProps {
  creature: SeaCreature;
  index: number;
}

const sizeClassMap = {
  Micro: 'w-8 md:w-12',
  Small: 'w-20 md:w-32',
  Big: 'w-28 md:w-48',
  Large: 'w-36 md:w-64',
  Custom: 'w-64 md:w-120'
} as const;

let globalClosePopup: (() => void) | null = null;

const CreatureCard: React.FC<CreatureCardProps> = ({ creature, index }) => {
  const [showPopup, setShowPopup] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [popupSide, setPopupSide] = useState<'right' | 'left'>('right');

  const column = index % 3;
  const row = Math.floor(index / 3);

  const columnOffsets = [
    [8, 22, 38],
    [50, 65],
    [78, 92],
  ];

  const group = columnOffsets[column % columnOffsets.length];
  const horizontalOffset = group[row % group.length];

  const imageSizeClass =
    sizeClassMap[
      (creature.sizeCategory as keyof typeof sizeClassMap) || 'Small'
    ] || sizeClassMap.Small;

  const closePopup = () => {
    setShowPopup(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleClick = () => {
    if (globalClosePopup && globalClosePopup !== closePopup) {
      globalClosePopup();
    }

    if (showPopup) {
      closePopup();
      globalClosePopup = null;
      return;
    }

    // Decide popup side based on position on screen
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setPopupSide(rect.left > window.innerWidth / 2 ? 'left' : 'right');
    }

    setShowPopup(true);
    globalClosePopup = closePopup;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowPopup(false);
      globalClosePopup = null;
    }, 10000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="absolute flex flex-col items-center group"
      style={{
        left: `${horizontalOffset}%`,
        transform: 'translateX(-50%)',
        width: 'max-content',
        maxWidth: '22%',
        zIndex: showPopup ? 1000 : 1,  // 👈 bring to front when popup open
      }}
    >
      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: 'absolute',
            bottom: '105%',
            // 👈 flip side based on screen position
            ...(popupSide === 'right'
              ? { left: '50%' }
              : { right: '50%' }
            ),
            zIndex: 9998,
            width: '180px',
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.6))',
          }}
        >
          {/* Tail arrow */}
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            ...(popupSide === 'right' ? { left: '16px' } : { right: '16px' }),
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid rgba(0,0,0,0.88)',
          }} />

          {/* Box */}
          <div style={{
            background: 'rgba(0,0,0,0.88)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(6,182,212,0.35)',
            borderRadius: '10px',
            padding: '10px 12px',
          }}>
            

            {/* Description only */}
            <p style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '12px',
              lineHeight: '1.5',
              margin: 0,
              fontFamily: 'sans-serif',
            }}>
              {creature.description}
            </p>
          </div>
        </div>
      )}

      {/* Image */}
      <div
        onClick={handleClick}
        className="relative mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer animate-[float_6s_ease-in-out_infinite]"
      >
        <img
          src={creature.imageUrl}
          alt={creature.name}
          className={`object-contain ${imageSizeClass} drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]`}
          style={{ mixBlendMode: 'normal' }}
          
        />
      </div>

      {/* Name & depth */}
      <div className="text-center relative z-10 max-w-[110px] md:max-w-[170px] px-1">
        <h3 className="text-[11px] md:text-lg font-bold text-white uppercase tracking-widest leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-80 group-hover:opacity-100 transition-opacity break-words">
          {creature.name}
        </h3>
        <p className="text-[10px] md:text-xs text-cyan-200 font-mono mt-1 opacity-60 drop-shadow-md">
          {creature.depth}m
        </p>
      </div>
    </div>
  );
};

export default CreatureCard;