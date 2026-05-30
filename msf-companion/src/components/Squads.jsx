import React from 'react';

const Squads = () => {
  const SquadRow = ({ title, type, members, accentColor, description }) => (
    <div className="bg-gray-950 border border-slate-800 rounded p-6 mb-8 shadow-xl relative overflow-hidden">
      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 ${accentColor} opacity-20 blur-xl`}></div>
      <div className="mb-6">
        <h3 className="text-2xl font-black uppercase text-white italic tracking-wider flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-sm ${accentColor}`}></span>
          <span>{title}</span>
        </h3>
        <p className="text-slate-400 text-sm mt-1">{description}</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 relative z-10">
        {members.map((member, index) => (
          <div key={index} className="flex-1 w-full bg-slate-900 border border-slate-700 rounded p-4 text-center relative group hover:border-slate-500 transition-colors">
            <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded text-xs font-bold flex items-center justify-center text-gray-950 ${accentColor}`}>
              {index + 1}
            </div>
            <h4 className="text-white font-bold uppercase text-sm mt-2">{member.name}</h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">{member.role}</p>
            <p className="text-cyan-400 text-[10px] uppercase mt-2 italic">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold uppercase italic text-white mb-2">Central de Esquadrões</h2>
        <p className="text-slate-400">Mapas táticos de posicionamento oficial. A ordem (da esquerda para a direita) é vital para mitigar dano em área.</p>
        <div className="h-1 w-24 bg-cyan-500 mx-auto rounded mt-4"></div>
      </div>

      <SquadRow 
        title="Esquadrão Heróis (O Muro Impenetrável)" 
        description="Capitão América segura e gera energia na ponta para alimentar Estigma e Shang-Chi."
        accentColor="bg-emerald-500"
        members={[
          { name: 'Cosmo', role: 'Healer / Suporte', position: 'Extrema Esquerda' },
          { name: 'Garota da Lua', role: 'Controle Vel.', position: 'Meio-Esquerda' },
          { name: 'Estigma', role: 'Nuke Artilharia', position: 'Centro' },
          { name: 'Shang-Chi', role: 'Dano Crítico / Cura', position: 'Meio-Direita' },
          { name: 'Capitão América', role: 'Tanque / Bateria Energ.', position: 'Extrema Direita' },
        ]}
      />

      <SquadRow 
        title="Esquadrão Vilões (O Motor do Sexteto Sinistro)" 
        description="Sinergia total liderada pelo Doutor Octopus para controle absoluto e sustentação contínua."
        accentColor="bg-purple-500"
        members={[
          { name: 'Mysterio', role: 'Controle / Spawn Barreira', position: 'Extrema Esquerda' },
          { name: 'Abutre', role: 'Puncionador de Turno', position: 'Meio-Esquerda' },
          { name: 'Dr. Octopus', role: 'Suporte Lendário / Líder', position: 'Centro' },
          { name: 'Shocker', role: 'Bateria de Offense Up', position: 'Meio-Direita' },
          { name: 'Rhino', role: 'Parede Anti-Cegueira', position: 'Extrema Direita' },
        ]}
      />

      <SquadRow 
        title="Arena Defesa (Máquina de Vantagem de Turno)" 
        description="Combinação híbrida projetada para acelerar seu time e atrasar o oponente sob controle da IA."
        accentColor="bg-amber-500"
        members={[
          { name: 'Abutre', role: 'Atraso de Barra Inicial', position: 'Extrema Esquerda' },
          { name: 'Garota da Lua', role: 'Redutor de Velocidade', position: 'Meio-Esquerda' },
          { name: 'Shang-Chi', role: 'Limpador / Contra-Ataque', position: 'Centro' },
          { name: 'Estigma', role: 'Artilharia Pesada', position: 'Meio-Direita' },
          { name: 'Capitão América', role: 'Proteção Geral / Energia', position: 'Extrema Direita' },
        ]}
      />
    </div>
  );
};

export default Squads;