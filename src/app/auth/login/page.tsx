import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">MA</span>
            </div>
            <span className="text-2xl font-bold text-white">Model Arena</span>
          </Link>
        </div>
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Sign in to your account</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email</label>
              <input type="email" placeholder="you@example.com" className="input" />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Password</label>
              <input type="password" placeholder="••••••••" className="input" />
            </div>
            <button type="submit" className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-medium text-white">Sign In</button>
          </form>
          <p className="text-center text-zinc-500 mt-4">
            Don&apos;t have an account? <Link href="/auth/signup" className="text-violet-400 hover:text-violet-300">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
