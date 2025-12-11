const leaderboard = [
  { rank: 1, name: 'MegaPredictor', owner: 'eliteTrader', elo: 2456, tier: 'diamond', winRate: 78.5, battles: 342 },
  { rank: 2, name: 'AlphaForce', owner: 'quantKing', elo: 2389, tier: 'diamond', winRate: 76.2, battles: 298 },
  { rank: 3, name: 'NeuralKing', owner: 'aiMaster', elo: 2301, tier: 'platinum', winRate: 74.8, battles: 267 },
  { rank: 4, name: 'QuantumMind', owner: 'deepLearner', elo: 2234, tier: 'platinum', winRate: 72.1, battles: 245 },
  { rank: 5, name: 'DeepOracle', owner: 'predictionPro', elo: 2178, tier: 'platinum', winRate: 70.5, battles: 223 },
  { rank: 6, name: 'TrendMaster', owner: 'marketWiz', elo: 2045, tier: 'gold', winRate: 68.9, battles: 198 },
  { rank: 7, name: 'SignalHunter', owner: 'techTrader', elo: 1987, tier: 'gold', winRate: 66.4, battles: 176 },
  { rank: 8, name: 'PatternSeeker', owner: 'chartist', elo: 1923, tier: 'gold', winRate: 64.2, battles: 154 },
  { rank: 9, name: 'MomentumBot', owner: 'speedTrader', elo: 1856, tier: 'gold', winRate: 62.8, battles: 143 },
  { rank: 10, name: 'ValueFinder', owner: 'longTermist', elo: 1789, tier: 'silver', winRate: 60.1, battles: 132 },
];

const tierConfig: Record<string, { bg: string; text: string; icon: string }> = {
  bronze: { bg: 'bg-amber-600/20', text: 'text-amber-600', icon: '🥉' },
  silver: { bg: 'bg-zinc-400/20', text: 'text-zinc-300', icon: '🥈' },
  gold: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', icon: '🥇' },
  platinum: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', icon: '💎' },
  diamond: { bg: 'bg-violet-500/20', text: 'text-violet-400', icon: '👑' },
};

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Leaderboard</h1>
        <p className="text-zinc-500 mt-1">Top performing models in the arena</p>
      </div>

      <div className="flex gap-2">
        {['Global', 'Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'Global' ? 'bg-violet-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[leaderboard[1], leaderboard[0], leaderboard[2]].map((model, i) => {
          const isFirst = i === 1;
          const tier = tierConfig[model.tier];
          return (
            <div
              key={model.rank}
              className={`p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center ${
                isFirst ? 'transform -translate-y-4' : ''
              }`}
            >
              <div className="text-4xl mb-2">{['🥈', '🥇', '🥉'][i]}</div>
              <div className={`inline-block px-2 py-1 rounded ${tier.bg} ${tier.text} text-xs font-medium mb-2`}>
                {tier.icon} {model.tier}
              </div>
              <h3 className="text-lg font-semibold text-white">{model.name}</h3>
              <p className="text-sm text-zinc-500">by {model.owner}</p>
              <div className="text-2xl font-bold text-white mt-2">{model.elo}</div>
              <div className="text-sm text-zinc-500">ELO</div>
            </div>
          );
        })}
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="px-4 py-3 text-left text-sm font-medium text-zinc-500">Rank</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-zinc-500">Model</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-zinc-500">Tier</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-zinc-500">ELO</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-zinc-500">Win Rate</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-zinc-500">Battles</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((model) => {
              const tier = tierConfig[model.tier];
              return (
                <tr key={model.rank} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                  <td className="px-4 py-3 text-white font-bold">#{model.rank}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-white">{model.name}</div>
                    <div className="text-sm text-zinc-500">by {model.owner}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded ${tier.bg} ${tier.text} text-xs font-medium capitalize`}>
                      {tier.icon} {model.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-white">{model.elo}</td>
                  <td className="px-4 py-3 text-right text-emerald-400">{model.winRate}%</td>
                  <td className="px-4 py-3 text-right text-zinc-400">{model.battles}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
