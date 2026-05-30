import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Roster from './components/Roster';
import Squads from './components/Squads';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <header className="bg-gray-950 border-b border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-sm transform rotate-45 border border-cyan-200 flex items-center justify-center shrink-0">
              <span className="transform -rotate-45 text-white font-bold tracking-tighter">MSF</span>
            </div>
            <h1 className="text-2xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">
              Companion Pro
            </h1>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 uppercase text-sm font-bold tracking-widest">
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`transition-colors ${activeTab === 'dashboard' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-cyan-400'}`}
            >
              Comando
            </button>
            <button 
              onClick={() => setActiveTab('roster')} 
              className={`transition-colors ${activeTab === 'roster' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-cyan-400'}`}
            >
              Roster
            </button>
            <button 
              onClick={() => setActiveTab('squads')} 
              className={`transition-colors ${activeTab === 'squads' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-cyan-400'}`}
            >
              Táticas
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'roster' && <Roster />}
        {activeTab === 'squads' && <Squads />}
      </main>
    </div>
  );
}

export default App;