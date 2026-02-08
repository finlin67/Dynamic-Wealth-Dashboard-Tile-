import React from 'react';
import WealthManageTile from './components/WealthManageTile';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDelay: '2s'}}></div>
      </div>

      <div className="z-10 flex flex-col items-center gap-8">
        <div className="text-center space-y-2">
          <h2 className="text-slate-400 text-sm font-semibold tracking-widest uppercase">Component Preview</h2>
          <h1 className="text-white text-3xl font-bold">Dynamic Wealth Dashboard</h1>
        </div>
        
        {/* The Isolated Component */}
        <WealthManageTile />
        
        <p className="text-slate-500 text-xs mt-4">
          Rendered size: 600px x 600px • Built with React, Tailwind & Framer Motion
        </p>
      </div>
    </div>
  );
}