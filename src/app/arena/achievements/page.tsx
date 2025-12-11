export default function AchievementsPage() {
  const achievements = [
    { id: 1, name: 'First Blood', desc: 'Win your first battle', icon: '⚔️', unlocked: true },
    { id: 2, name: 'Rising Star', desc: 'Reach Silver tier', icon: '🥈', unlocked: true },
    { id: 3, name: 'Winning Streak', desc: 'Win 5 battles in a row', icon: '🔥', unlocked: true },
    { id: 4, name: 'Gold Rush', desc: 'Reach Gold tier', icon: '🥇', unlocked: false },
    { id: 5, name: 'Diamond Hands', desc: 'Reach Diamond tier', icon: '💎', unlocked: false },
    { id: 6, name: 'Credit King', desc: 'Earn 10,000 credits', icon: '💰', unlocked: false },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Achievements</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a) => (
          <div key={a.id} className={`p-5 rounded-xl border ${a.unlocked ? 'bg-zinc-900 border-zinc-700' : 'bg-zinc-900/50 border-zinc-800 opacity-50'}`}>
            <div className="text-4xl mb-3">{a.icon}</div>
            <h3 className="font-semibold text-white">{a.name}</h3>
            <p className="text-sm text-zinc-500 mt-1">{a.desc}</p>
            {a.unlocked && <span className="inline-block mt-2 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">Unlocked</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
