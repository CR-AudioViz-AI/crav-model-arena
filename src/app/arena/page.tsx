import Link from 'next/link';

const stats = [
  { label: 'ELO Rating', value: '1,247', change: '+32', positive: true, icon: '🎯' },
  { label: 'Win Rate', value: '67.5%', change: '+2.1%', positive: true, icon: '🏆' },
  { label: 'Total Battles', value: '156', change: '+12', positive: true, icon: '⚔️' },
  { label: 'Credits', value: '2,450', change: '+150', positive: true, icon: '💰' },
];

const recentBattles = [
  { id: 1, opponent: 'AlphaPredictor', result: 'win', elo: '+15', time: '2 hours ago' },
  { id: 2, opponent: 'NeuralTrader', result: 'loss', elo: '-12', time: '5 hours ago' },
  { id: 3, opponent: 'DeepMind_v2', result: 'win', elo: '+18', time: '1 day ago' },
  { id: 4, opponent: 'QuantBot', result: 'win', elo: '+11', time: '2 days ago' },
];

const topModels = [
  { rank: 1, name: 'MegaPredictor', elo: 2456, tier: 'diamond', winRate: 78.5 },
  { rank: 2, name: 'AlphaForce', elo: 2389, tier: 'diamond', winRate: 76.2 },
  { rank: 3, name: 'NeuralKing', elo: 2301, tier: 'platinum', winRate: 74.8 },
  { rank: 4, name: 'QuantumMind', elo: 2234, tier: 'platinum', winRate: 72.1 },
  { rank: 5, name: 'DeepOracle', elo: 2178, tier: 'platinum', winRate: 70.5 },
];

const tierColors: Record<string, string> = {
  bronze: 'text-amber-600',
  silver: 'text-zinc-300',
  gold: 'text-yellow-400',
  platinum: 'text-cyan-400',
  diamond: 'text-violet-400',
};

export default function ArenaDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome to the Arena</h1>
          <p className="text-zinc-500 mt-1">Track your progress and dominate the competition</p>
        </div>
        <Link href="/arena/battles/new" className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg font-medium text-white transition-colors">
          ⚔️ New Battle
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-zinc-900 rounded-xl border border-zinc-800 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-sm font-medium ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Battles */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Battles</h2>
            <Link href="/arena/battles" className="text-sm text-violet-400 hover:text-violet-300">View all</Link>
          </div>
          <div className="space-y-3">
            {recentBattles.map((battle) => (
              <div key={battle.id} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${battle.result === 'win' ? 'bg-emerald-400' : 'bg-red-400'}`} />
                  <div>
                    <div className="font-medium text-white">vs {battle.opponent}</div>
                    <div className="text-xs text-zinc-500">{battle.time}</div>
                  </div>
                </div>
                <div className={`font-semibold ${battle.result === 'win' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {battle.elo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Models */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Top Models</h2>
            <Link href="/arena/leaderboard" className="text-sm text-violet-400 hover:text-violet-300">View all</Link>
          </div>
          <div className="space-y-3">
            {topModels.map((model) => (
              <div key={model.rank} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center text-sm font-bold text-white">
                    #{model.rank}
                  </div>
                  <div>
                    <div className="font-medium text-white">{model.name}</div>
                    <div className={`text-xs capitalize ${tierColors[model.tier]}`}>{model.tier}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">{model.elo}</div>
                  <div className="text-xs text-zinc-500">{model.winRate}% WR</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { href: '/arena/models/create', label: 'Create Model', icon: '🧠', color: 'from-violet-500 to-purple-600' },
          { href: '/arena/battles/new', label: 'Start Battle', icon: '⚔️', color: 'from-emerald-500 to-teal-600' },
          { href: '/arena/achievements', label: 'Achievements', icon: '⭐', color: 'from-amber-500 to-orange-600' },
          { href: '/arena/credits', label: 'Buy Credits', icon: '💰', color: 'from-blue-500 to-cyan-600' },
        ].map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className={`p-4 bg-gradient-to-br ${action.color} rounded-xl text-white text-center hover:opacity-90 transition-opacity`}
          >
            <div className="text-3xl mb-2">{action.icon}</div>
            <div className="font-medium">{action.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
