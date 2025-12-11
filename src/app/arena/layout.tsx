import Link from 'next/link';

const navItems = [
  { href: '/arena', label: 'Dashboard', icon: '📊' },
  { href: '/arena/models', label: 'Models', icon: '🧠' },
  { href: '/arena/battles', label: 'Battles', icon: '⚔️' },
  { href: '/arena/leaderboard', label: 'Leaderboard', icon: '🏆' },
  { href: '/arena/achievements', label: 'Achievements', icon: '⭐' },
  { href: '/arena/credits', label: 'Credits', icon: '💰' },
];

export default function ArenaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col">
        <Link href="/" className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">MA</span>
          </div>
          <span className="text-lg font-bold text-white">Model Arena</span>
        </Link>

        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="pt-4 border-t border-zinc-800">
          <Link href="/arena/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
            <span className="text-lg">⚙️</span>
            <span className="font-medium">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
