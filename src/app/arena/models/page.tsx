import Link from 'next/link';

const models = [
  { id: '1', name: 'TrendFollower', tier: 'gold', elo: 1547, battles: 89, winRate: 68.5, streak: 5 },
  { id: '2', name: 'MeanReversionBot', tier: 'silver', elo: 1323, battles: 45, winRate: 55.2, streak: 0 },
  { id: '3', name: 'MomentumTrader', tier: 'bronze', elo: 1089, battles: 23, winRate: 47.8, streak: 0 },
];

const tierColors: Record<string, { bg: string; text: string; icon: string }> = {
  bronze: { bg: 'bg-amber-600/20', text: 'text-amber-600', icon: '🥉' },
  silver: { bg: 'bg-zinc-400/20', text: 'text-zinc-300', icon: '🥈' },
  gold: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', icon: '🥇' },
  platinum: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', icon: '💎' },
  diamond: { bg: 'bg-violet-500/20', text: 'text-violet-400', icon: '👑' },
};

export default function ModelsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Your Models</h1>
          <p className="text-zinc-500 mt-1">Manage and train your AI models</p>
        </div>
        <Link href="/arena/models/create" className="btn-primary">
          + Create Model
        </Link>
      </div>

      <div className="grid gap-4">
        {models.map((model) => {
          const tier = tierColors[model.tier];
          return (
            <Link
              key={model.id}
              href={`/arena/models/${model.id}`}
              className="flex items-center gap-4 p-5 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">{model.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                  <span className={`px-2 py-0.5 rounded ${tier.bg} ${tier.text} text-xs font-medium capitalize`}>
                    {tier.icon} {model.tier}
                  </span>
                  {model.streak >= 3 && (
                    <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded text-xs">
                      🔥 {model.streak} Win Streak
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-zinc-500">
                  <span>{model.elo} ELO</span>
                  <span>{model.winRate}% Win Rate</span>
                  <span>{model.battles} Battles</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">#{Math.floor(Math.random() * 100) + 1}</div>
                <div className="text-xs text-zinc-500">Rank</div>
              </div>
            </Link>
          );
        })}
      </div>

      {models.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🧠</div>
          <h3 className="text-xl font-semibold text-white mb-2">No models yet</h3>
          <p className="text-zinc-500 mb-4">Create your first AI model to start battling</p>
          <Link href="/arena/models/create" className="btn-primary">Create Model</Link>
        </div>
      )}
    </div>
  );
}
