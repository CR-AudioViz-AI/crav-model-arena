export default function CreditsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Credits</h1>
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
        <div className="text-4xl font-bold text-white">2,450</div>
        <div className="text-zinc-500">Available Credits</div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { amount: 500, price: '$4.99', popular: false },
          { amount: 1200, price: '$9.99', popular: true },
          { amount: 3000, price: '$19.99', popular: false },
        ].map((pkg) => (
          <div key={pkg.amount} className={`p-5 rounded-xl border ${pkg.popular ? 'bg-violet-600/10 border-violet-500' : 'bg-zinc-900 border-zinc-800'}`}>
            {pkg.popular && <span className="text-xs text-violet-400 font-medium">MOST POPULAR</span>}
            <div className="text-2xl font-bold text-white mt-2">{pkg.amount} Credits</div>
            <div className="text-zinc-400">{pkg.price}</div>
            <button className="w-full mt-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
