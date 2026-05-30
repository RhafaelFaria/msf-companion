import React, { useState } from 'react';

const Roster = () => {
  const [hideTrash, setHideTrash] = useState(true);

  const characters = [
    { id: 1, name: 'Doutor Octopus', tier: 'S', type: 'Tecnológico | Suporte', desc: 'O motor definitivo do Sexteto Sinistro. Invoca aliados, cura por regeneração contínua e prolonga debuffs.', stats: { dmg: '🟩🟩🟩⬛⬛', hp: '🟩🟩🟩🟩⬛', arm: '🟩🟩🟩⬛⬛', foc: '🟩🟩🟩🟩⬛', res: '🟩🟩🟩🟩⬛' }, color: 'border-fuchsia-500', badge: 'bg-fuchsia-500 text-white' },
    { id: 2, name: 'Garota da Lua', tier: 'S', type: 'Bio | Controlador', desc: 'Dona do ritmo do campo. Excelente manipulação de barra de velocidade e redução de turnos inimigos.', stats: { dmg: '🟩🟩🟩⬛⬛', hp: '🟩🟩🟩⬛⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩🟩🟩🟩🟩', res: '🟩🟩🟩⬛⬛' }, color: 'border-fuchsia-500', badge: 'bg-fuchsia-500 text-white' },
    { id: 3, name: 'Abutre', tier: 'S', type: 'Tecnológico | Bom de Briga', desc: 'O carrasco do Sexteto Sinistro pós-rework. Lentidão severa e massivo dano em área com redução de velocidade.', stats: { dmg: '🟩🟩🟩🟩⬛', hp: '🟩🟩⬛⬛⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩🟩🟩⬛⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-fuchsia-500', badge: 'bg-fuchsia-500 text-white' },
    { id: 4, name: 'Estigma (Star Brand)', tier: 'S', type: 'Místico | Artilheiro', desc: 'Artilharia pesada moderna. Multiplicadores de dano absurdos quando protegido pela sinergia Out of Time.', stats: { dmg: '🟩🟩🟩🟩🟩', hp: '🟩🟩🟩⬛⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩🟩🟩⬛⬛', res: '🟩🟩🟩⬛⬛' }, color: 'border-fuchsia-500', badge: 'bg-fuchsia-500 text-white' },
    { id: 5, name: 'Cosmo', tier: 'S', type: 'Bio | Suporte', desc: 'Suporte especializado e purificadora. Limpa debuffs críticos com perfeição e concede imunidades.', stats: { dmg: '🟩⬛⬛⬛⬛', hp: '🟩🟩🟩🟩⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩🟩🟩⬛⬛', res: '🟩🟩🟩🟩🟩' }, color: 'border-fuchsia-500', badge: 'bg-fuchsia-500 text-white' },
    { id: 6, name: 'Capitão América (Clássico)', tier: 'A', type: 'Bio | Protetor', desc: 'A muralha. Bloqueio maciço contínuo e exímio gerador de energia de habilidade para aliados.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩🟩🟩🟩⬛', arm: '🟩🟩🟩🟩⬛', foc: '🟩🟩⬛⬛⬛', res: '🟩🟩🟩🟩⬛' }, color: 'border-cyan-500', badge: 'bg-cyan-500 text-white' },
    { id: 7, name: 'Shang-Chi', tier: 'A', type: 'Habilidade | Bom de Briga', desc: 'Carrasco curandeiro. Ultimate de dano crítico massivo, recua barras inimigas e cura a equipe passivamente.', stats: { dmg: '🟩🟩🟩🟩⬛', hp: '🟩🟩🟩⬛⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩🟩🟩⬛⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-cyan-500', badge: 'bg-cyan-500 text-white' },
    { id: 8, name: 'Mysterio', tier: 'A', type: 'Tecnológico | Controlador', desc: 'Mestre de ilusões. Barreira forte no spawn e invoca clones que aplicam Blind ao morrer.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩🟩⬛⬛⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩🟩🟩🟩🟩', res: '🟩🟩🟩⬛⬛' }, color: 'border-cyan-500', badge: 'bg-cyan-500 text-white' },
    { id: 9, name: 'Rhino', tier: 'A', type: 'Bio | Protetor', desc: 'O contra-ataque natural à cegueira. Escala em vida para cada aliado do Sexteto Sinistro presente.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩🟩🟩🟩🟩', arm: '🟩🟩🟩⬛⬛', foc: '🟩⬛⬛⬛⬛', res: '🟩🟩🟩🟩⬛' }, color: 'border-cyan-500', badge: 'bg-cyan-500 text-white' },
    { id: 10, name: 'Venom', tier: 'A', type: 'Bio | Controlador', desc: 'Vetor da Hive-Mind. Espalha penalidades de um alvo para toda a equipe inimiga e bloqueia curas.', stats: { dmg: '🟩🟩🟩⬛⬛', hp: '🟩🟩🟩⬛⬛', arm: '🟩🟩🟩⬛⬛', foc: '🟩🟩🟩🟩⬛', res: '🟩🟩🟩⬛⬛' }, color: 'border-cyan-500', badge: 'bg-cyan-500 text-white' },
    { id: 11, name: 'Homem-Aranha Noir', tier: 'A', type: 'Habilidade | Bom de Briga', desc: 'Furtivo da Spider-Society. Aplica Heal Block eficiente e conta com evasões automáticas sólidas.', stats: { dmg: '🟩🟩🟩🟩⬛', hp: '🟩🟩⬛⬛⬛', arm: '🟩⬛⬛⬛⬛', foc: '🟩🟩🟩⬛⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-cyan-500', badge: 'bg-cyan-500 text-white' },
    { id: 12, name: 'Loki', tier: 'A', type: 'Místico | Controlador', desc: 'Foco em quebra de defesa imediata. Excelente truque de forçar inimigos a se atacarem.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩🟩⬛⬛⬛', arm: '🟩⬛⬛⬛⬛', foc: '🟩🟩🟩🟩⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-cyan-500', badge: 'bg-cyan-500 text-white' },
    { id: 13, name: 'Deadpool', tier: 'B', type: 'Mutante | Bom de Briga', desc: 'Batedor regenerativo. Grande rework de status para a equipe Mercs for Money. Ignora Heal Block.', stats: { dmg: '🟩🟩🟩🟩⬛', hp: '🟩🟩🟩⬛⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩⬛⬛⬛⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-amber-500', badge: 'bg-amber-500 text-white' },
    { id: 14, name: 'Viúva Negra', tier: 'B', type: 'Habilidade | Controlador', desc: 'Geradora de Speed Up tática no início do jogo. Aplica atordoamento forte em alvos únicos.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩🟩⬛⬛⬛', arm: '🟩⬛⬛⬛⬛', foc: '🟩🟩🟩⬛⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-amber-500', badge: 'bg-amber-500 text-white' },
    { id: 15, name: 'Shocker', tier: 'B', type: 'Tecnológico | Artilheiro', desc: 'Fornecedor de bônus de dano. Aplica Offense Up vital para o estouro inicial do Sexteto Sinistro.', stats: { dmg: '🟩🟩🟩⬛⬛', hp: '🟩🟩⬛⬛⬛', arm: '🟩⬛⬛⬛⬛', foc: '🟩🟩⬛⬛⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-amber-500', badge: 'bg-amber-500 text-white' },
    { id: 16, name: 'Thor', tier: 'B', type: 'Místico | Artilheiro', desc: 'Dano em área reativo e lento. Retalia após aliados Vingadores sofrerem agressão severa.', stats: { dmg: '🟩🟩🟩🟩⬛', hp: '🟩🟩🟩⬛⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩🟩⬛⬛⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-amber-500', badge: 'bg-amber-500 text-white' },
    { id: 17, name: 'Homem de Gelo', tier: 'B', type: 'Mutante | Controlador', desc: 'Aplica lentidão técnica e mitiga dano base de alvos lentos. Tapa-buraco para a divisão Mutante.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩🟩⬛⬛⬛', arm: '🟩🟩⬛⬛⬛', foc: '🟩🟩🟩⬛⬛', res: '🟩🟩⬛⬛⬛' }, color: 'border-amber-500', badge: 'bg-amber-500 text-white' },
    // Tier Lixo / Congelados
    { id: 18, name: 'Hulk', tier: 'Lixo', type: 'Bio | Protetor', desc: 'CONGELADO NV 25. Tanque bruto obsoleto.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩🟩🟩🟩⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 19, name: 'Homem-Aranha', tier: 'Lixo', type: 'Bio | Controlador', desc: 'CONGELADO NV 25. Atributos base fracos.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩⬛⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 20, name: 'Jessica Jones', tier: 'Lixo', type: 'Bio | Suporte', desc: 'CONGELADO NV 25. Completamente superada pela Cosmo.', stats: { dmg: '🟩⬛⬛⬛⬛', hp: '🟩🟩⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 21, name: 'Senhor Fantástico', tier: 'Lixo', type: 'Bio | Controlador', desc: 'CONGELADO NV 25. Fragilidade extrema no meta atual.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩⬛⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 22, name: 'Homem de Ferro', tier: 'Lixo', type: 'Tecnológico | Artilheiro', desc: 'CONGELADO NV 25. Kit antigo sem utilidade mecânica.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩⬛⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 23, name: 'Luke Cage', tier: 'Lixo', type: 'Bio | Protetor', desc: 'CONGELADO NV 25. Defesa insuficiente contra times modernos.', stats: { dmg: '🟩⬛⬛⬛⬛', hp: '🟩🟩🟩⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 24, name: 'Ossos Cruzados', tier: 'Lixo', type: 'Tecnológico | Protetor', desc: 'CONGELADO NV 25. Substituído por Mysterio e Venom.', stats: { dmg: '🟩🟩🟩⬛⬛', hp: '🟩🟩⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 25, name: 'Justiceiro', tier: 'Lixo', type: 'Habilidade | Artilheiro', desc: 'CONGELADO NV 25. Dano cosmético irrelevante.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩⬛⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 26, name: 'Elektra', tier: 'Lixo', type: 'Habilidade | Bom de Briga', desc: 'CONGELADO NV 25. Kit de assassinato ultrapassado.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩⬛⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 27, name: 'Ms. Marvel (Kamala)', tier: 'Lixo', type: 'Bio | Bom de Briga', desc: 'CONGELADO NV 25. Redundante (Não confundir com Hard Light).', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩🟩⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 28, name: 'Gavião Arqueiro', tier: 'Lixo', type: 'Habilidade | Controlador', desc: 'CONGELADO NV 25. Pouca saúde e foco insuficiente.', stats: { dmg: '🟩🟩⬛⬛⬛', hp: '🟩⬛⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' },
    { id: 29, name: 'Médica S.H.I.E.L.D.', tier: 'Lixo', type: 'Bio | Suporte', desc: 'CONGELADO NV 25. Lacaio fraco anulado por suportes reais.', stats: { dmg: '🟩⬛⬛⬛⬛', hp: '🟩⬛⬛⬛⬛' }, color: 'border-red-600', badge: 'bg-red-600 text-white' }
  ];

  const filteredRoster = hideTrash ? characters.filter(c => c.tier !== 'Lixo') : characters;

  return (
    <div className="space-y-6">
      <div className="bg-gray-950 border border-slate-800 rounded p-5 flex flex-col md:flex-row justify-between items-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <div>
          <h2 className="text-2xl font-black uppercase text-white italic tracking-wider">Base de Dados de Operadores ({filteredRoster.length})</h2>
          <p className="text-slate-400 text-sm mt-1">Filtro tático e acompanhamento de atributos ativos.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3 bg-slate-900 border border-slate-700 p-2 rounded">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Ocultar Zona de Quarentena (Lixo)</span>
          <button 
            onClick={() => setHideTrash(!hideTrash)}
            className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${hideTrash ? 'bg-cyan-500' : 'bg-slate-700'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${hideTrash ? 'left-7' : 'left-1'}`}></div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoster.map(char => (
          <div key={char.id} className={`bg-slate-800 border-l-4 rounded p-5 shadow-lg relative overflow-hidden group hover:bg-slate-700 transition-all ${char.color}`}>
            <div className={`absolute top-0 right-0 p-2 text-[10px] font-black uppercase tracking-widest ${char.badge}`}>
              Tier {char.tier}
            </div>
            <h3 className="text-xl font-bold uppercase text-white mb-1">{char.name}</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">[{char.type}]</p>
            
            <div className="text-xs space-y-1 mb-4 font-mono border-b border-slate-700 pb-3">
              {char.stats.dmg && <div className="flex justify-between">
                <span className="text-slate-500">DANO:</span><span>{char.stats.dmg}</span>
              </div>}
              {char.stats.hp && <div className="flex justify-between">
                <span className="text-slate-500">VIDA:</span><span>{char.stats.hp}</span>
              </div>}
              {char.stats.foc && <div className="flex justify-between">
                <span className="text-slate-500">FOCO:</span><span>{char.stats.foc}</span>
              </div>}
            </div>
            
            <p className="text-slate-300 text-sm italic line-clamp-3">
              {char.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;