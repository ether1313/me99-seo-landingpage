const gamesTable = [
  { game: "Baccarat", category: "Live Casino", provider: "Evolution Gaming", minBet: "AUD 5", maxBet: "AUD 50,000", mobile: "Yes" },
  { game: "Gates of Olympus", category: "Slot", provider: "Pragmatic Play", minBet: "AUD 0.20", maxBet: "AUD 400", mobile: "Yes" },
  { game: "AFL Betting", category: "Sports", provider: "ME99 Sportsbook", minBet: "AUD 1", maxBet: "AUD 50,000", mobile: "Yes" },
  { game: "Dragon Tiger", category: "Live Casino", provider: "Evolution Gaming", minBet: "AUD 1", maxBet: "AUD 5,000", mobile: "Yes" },
  { game: "NRL Betting", category: "Sports", provider: "ME99 Sportsbook", minBet: "AUD 1", maxBet: "AUD 50,000", mobile: "Yes" },
  { game: "Sweet Bonanza", category: "Slot", provider: "Pragmatic Play", minBet: "AUD 0.20", maxBet: "AUD 200", mobile: "Yes" },
  { game: "Cricket Betting", category: "Sports", provider: "ME99 Sportsbook", minBet: "AUD 1", maxBet: "AUD 30,000", mobile: "Yes" },
  { game: "Texas Hold'em", category: "Poker", provider: "Evolution Gaming", minBet: "AUD 5", maxBet: "AUD 20,000", mobile: "Yes" },
];

const popularGames = [
  {
    icon: "ri-poker-hearts-line",
    title: "Baccarat",
    sub: "Australia's Favourite Table Game",
    desc: "30+ live baccarat variants from Evolution Gaming and Pragmatic Play Live. Speed Baccarat, Lightning Baccarat, and Squeeze Baccarat with English-speaking dealers around the clock. Bets from AUD 5.",
    tag: "Live Casino",
    gradient: "from-red-500/10 to-red-600/5",
    tagColor: "bg-red-500/10 text-red-500 border-red-500/20",
  },
  {
    icon: "ri-gamepad-line",
    title: "Slots – Gates of Olympus & More",
    sub: "1,200+ Slot Titles",
    desc: "Gates of Olympus, Mahjong Ways 2, Sweet Bonanza, Starlight Princess, and Book of the Dead. Optimized for mobile play on Android and iOS. Free demo modes available without a deposit.",
    tag: "Slots",
    gradient: "from-me99-500/10 to-me99-600/5",
    tagColor: "bg-me99-500/10 text-me99-500 border-me99-500/20",
  },
  {
    icon: "ri-football-line",
    title: "AFL & NRL Betting",
    sub: "Australia's Biggest Sports Markets",
    desc: "Comprehensive AFL and NRL markets with live in-play betting, head-to-head, line betting, and same-game multis. Real-time odds updated throughout every match.",
    tag: "Sports",
    gradient: "from-green-500/10 to-green-600/5",
    tagColor: "bg-green-500/10 text-green-500 border-green-500/20",
  },
  {
    icon: "ri-sword-line",
    title: "Dragon Tiger",
    sub: "Fast-Paced Live Table Game",
    desc: "Multiple live Dragon Tiger tables with stakes from AUD 1 to AUD 5,000 per round. Bet on Dragon, Tiger, or Tie. A top choice for both new and experienced players.",
    tag: "Live Casino",
    gradient: "from-red-500/10 to-red-600/5",
    tagColor: "bg-red-500/10 text-red-500 border-red-500/20",
  },
  {
    icon: "ri-medal-line",
    title: "Cricket Betting",
    sub: "Test, ODI & Big Bash League",
    desc: "Bet on Test matches, ODIs, T20s, and the Big Bash League. Markets include match winner, top batsman, total runs, and live in-play options during every over.",
    tag: "Sports",
    gradient: "from-green-500/10 to-green-600/5",
    tagColor: "bg-green-500/10 text-green-500 border-green-500/20",
  },
  {
    icon: "ri-trophy-line",
    title: "Poker Variants",
    sub: "Texas Hold'em & More",
    desc: "Video poker and live poker rooms with Texas Hold'em, Three Card Poker, and Casino Hold'em. Live tables powered by Evolution Gaming with AUD stakes.",
    tag: "Poker",
    gradient: "from-purple-500/10 to-purple-600/5",
    tagColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
];

const stats = [
  { icon: "ri-gamepad-line", val: "4000+", label: "Total Games" },
  { icon: "ri-building-line", val: "50+", label: "Game Providers" },
  { icon: "ri-money-dollar-circle-line", val: "AUD 10", label: "Min Deposit" },
  { icon: "ri-headphone-line", val: "24/7", label: "Support" },
];

export default function GamesSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="floating-orb w-[500px] h-[500px] -top-40 -right-40 opacity-10 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="badge-premium mb-4 inline-block">Game Library</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ultimate <span className="text-gradient-orange">Casino Experience</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            4000+ online pokies and live casino games from top certified providers. Pragmatic Play, Evolution Gaming, PG Soft, JILI, ACE333, BIGPOT and more. All RNG-certified for fair play.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-6 text-center card-lift">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 rounded-xl bg-gradient-orange-soft">
                <i className={`${s.icon} text-me99-500 text-xl`}></i>
              </div>
              <div className="font-display text-gray-900 font-extrabold text-2xl">{s.val}</div>
              <div className="text-gray-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h3 className="font-display text-xl font-bold text-gray-900 mb-8">
          Most Popular Games at <span className="text-gradient-orange">ME99</span> Australia. Online Pokies &amp; Live Casino
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {popularGames.map((g) => (
            <div
              key={g.title}
              className={`glass-card rounded-2xl p-6 card-lift bg-gradient-to-br ${g.gradient}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-orange-soft rounded-xl">
                  <i className={`${g.icon} text-me99-500 text-xl`}></i>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${g.tagColor}`}>
                  {g.tag}
                </span>
              </div>
              <h4 className="font-display font-bold text-gray-900 text-sm mb-0.5">{g.title}</h4>
              <p className="text-me99-600 text-xs font-medium mb-3">{g.sub}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display text-xl font-bold text-gray-900 mb-6">Popular Games at ME99. Quick Reference</h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 glass-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Game</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Category</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Provider</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Min Bet</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Max Bet</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {gamesTable.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-me99-50/50 transition-colors`}
                >
                  <td className="px-5 py-4 font-semibold text-gray-900 text-xs whitespace-nowrap">{row.game}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">{row.category}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">{row.provider}</td>
                  <td className="px-5 py-4 text-gray-600 text-xs whitespace-nowrap">{row.minBet}</td>
                  <td className="px-5 py-4 text-gray-600 text-xs whitespace-nowrap">{row.maxBet}</td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="text-green-600 font-semibold text-xs flex items-center gap-1">
                      <i className="ri-smartphone-line"></i> {row.mobile}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}