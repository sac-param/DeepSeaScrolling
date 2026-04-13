import React, { useState } from 'react';
import { scanOceanDepth } from '../services/geminiService';

interface ScannerProps {
  depth: number;
}

const Scanner: React.FC<ScannerProps> = ({ depth }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    setIsOpen(true);
    const text = await scanOceanDepth(Math.round(depth));
    setResult(text);
    setLoading(false);
  };

  const closeScanner = () => {
    setIsOpen(false);
    setResult(null);
  };

  return (
    <>
      <div className="fixed bottom-8 right-6 z-50">
        <button
          onClick={handleScan}
          disabled={loading}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,255,255,0.3)]
            transition-all duration-300 transform hover:scale-105 active:scale-95
            ${loading ? 'bg-gray-600 cursor-wait' : 'bg-cyan-600 hover:bg-cyan-500 text-white'}
          `}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Scanning...</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span>BIO-SCAN</span>
            </>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closeScanner}>
          <div 
            className="bg-slate-900 border border-cyan-500/50 p-6 rounded-2xl max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-cyan-400 text-lg font-bold mb-2 flex justify-between items-center">
              <span>DEPTH SCAN: {Math.round(depth)}m</span>
              <button onClick={closeScanner} className="text-gray-400 hover:text-white">✕</button>
            </h3>
            <div className="text-gray-200 leading-relaxed font-light min-h-[80px]">
              {loading ? (
                <div className="flex space-x-1 animate-pulse h-full items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>
              ) : (
                result
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Scanner;
