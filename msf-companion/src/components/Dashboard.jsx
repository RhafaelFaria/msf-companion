import React, { useState } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Resgatar Brinde Diário na Web Store (Scopely)', category: 'web', done: false },
    { id: 2, text: 'Coletar Marcos da Web (Milestones)', category: 'web', done: false },
    { id: 3, text: '4x Recargas de Energia de Campanha (50 Núcleos)', category: 'campanha', done: false },
    { id: 4, text: 'Realizar 5 Ataques na Arena (Garantir Cores)', category: 'combate', done: false },
    { id: 5, text: 'Doação de 10.000 de Ouro na Aliança', category: 'alianca', done: false },
    { id: 6, text: 'Gastar Energia de Incursão (Raid)', category: 'alianca', done: false },
    { id: 7, text: 'Verificar Atualização das Lojas (8h / 16h / 24h)', category: 'lojas', done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const completedCount = tasks.filter(t => t.done).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-950 border border-cyan-500/30 rounded p-5 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Protocolo Ativo</span>
            <h3 className="text-2xl font-black uppercase text-white italic mt-1">Comandante Nível 35+</h3>
            <p className="text-slate-400 text-sm mt-2">Doutrina de Economia Extrema: Hulk e Homem-Aranha congelados com sucesso.</p>
          </div>
          <div className="mt-4 border-t border-slate-800 pt-3 flex justify-between items-center text-xs font-mono">
            <span className="text-slate-500">DIRETRIZ:</span>
            <span className="text-emerald-400 font-bold animate-pulse">EFICIÊNCIA META ACESSÍVEL</span>
          </div>
        </div>

        <div className="bg-gray-950 border border-slate-800 rounded p-5 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Consistência Operacional Diária</h4>
              <span className="text-cyan-400 font-mono font-bold text-lg">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-[2px] border border-slate-700">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic">
            "O sucesso no MSF não vem de gastos impulsivos, mas sim da repetição disciplinada." — Marvel Church
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-950 border border-slate-800 rounded p-5 lg:col-span-2 space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h3 className="text-lg font-extrabold uppercase text-white tracking-wide italic flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_5px_rgba(6,182,212,1)]"></span>
              <span>Objetivos do Dia</span>
            </h3>
          </div>
          
          <div className="space-y-2">
            {tasks.map(task => (
              <div 
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`flex items-center justify-between p-3 rounded border cursor-pointer select-none transition-all ${
                  task.done 
                    ? 'bg-slate-900/40 border-slate-800/60 text-slate-500 opacity-60 line-through' 
                    : 'bg-slate-900 border-slate-800 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                    task.done ? 'bg-cyan-500 border-cyan-500' : 'border-slate-600'
                  }`}>
                    {task.done && (
                      <svg className="w-3 h-3 text-gray-950 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm font-medium">{task.text}</span>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                  task.category === 'web' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                  task.category === 'campanha' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                  task.category === 'combate' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                  'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                }`}>
                  {task.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-950 border border-emerald-500/20 rounded p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Farm de Campanha Prioritário</h4>
            <div className="space-y-3">
              <div className="bg-slate-900 p-3 rounded border border-slate-800 flex justify-between items-center">
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Capitão América</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Heróis 3-6 / Nexo 1-3</p>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded font-bold uppercase">Muralha</span>
              </div>
              <div className="bg-slate-900 p-3 rounded border border-slate-800 flex justify-between items-center">
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Mysterio / Gambit</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Loja de Incursão (Raid)</p>
                </div>
                <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-1 rounded font-bold uppercase">Créditos</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 border border-fuchsia-500/20 rounded p-5 shadow-[0_0_15px_rgba(217,70,239,0.05)]">
            <h4 className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-2">Diretriz de Ouro</h4>
            <div className="bg-slate-900 p-4 rounded border border-slate-800 text-center">
              <span className="text-lg font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 italic">
                DOCTOR OCTOPUS
              </span>
              <p className="text-xs text-slate-300 mt-2">
                Injete todo o Ouro ganho nos desafios e campanhas para maximizar os atributos do seu novo Lendário e assumir o Tier S de Vilões.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;