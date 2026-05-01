const whyJumpFeatures = [
  {
    icon: "ri-play-circle-line",
    text: "Access to every game in real money or demo mode.",
  },
  {
    icon: "ri-notification-3-line",
    text: "Instant alerts for EVERY DEPOSIT RANDOM BONUS drops.",
  },
  {
    icon: "ri-coins-line",
    text: "Weekly rebates up to 5% and weekly 7% commission payouts on your referral network.",
  },
  {
    icon: "ri-line-chart-line",
    text: "Detailed live transaction ticker of your history.",
  },
  {
    icon: "ri-vip-crown-line",
    text: "Entry to exclusive ME99 tech-events.",
  },
  {
    icon: "ri-headphone-line",
    text: "A quicker path to 24/7 customer support.",
  },
];

const monthlyRankingPrizes = [
  { rank: "#1", amount: "AUD 1,999" },
  { rank: "#2", amount: "AUD 999" },
  { rank: "#3", amount: "AUD 599" },
  { rank: "#4", amount: "AUD 399" },
  { rank: "#5", amount: "AUD 399" },
  { rank: "#6", amount: "AUD 199" },
  { rank: "#7", amount: "AUD 199" },
  { rank: "#8", amount: "AUD 199" },
  { rank: "#9", amount: "AUD 199" },
  { rank: "#10", amount: "AUD 199" },
];

const LANDING_URL = "https://me99office.net/RFLANDINGPAAGE";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-me99-400" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-me99-300" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="badge-premium mb-4 inline-block">About ME99</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What is <span className="text-gradient-orange">ME99</span>?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            ME99 is Australia's most trusted online pokies and casino platform, purpose-built for Aussie players who demand secure gaming, lightning-fast payouts, and the most generous bonus program in the country.
          </p>
        </div>

        {/* Blog-style comprehensive content */}
        <article className="prose prose-lg max-w-none mb-16">
          <div className="glass-card rounded-2xl p-6 md:p-8 lg:p-10 card-lift">
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
              ME99 Australia. The Complete Guide to <strong className="text-me99-600">Online Pokies Australia</strong> and Real Money Casino Gaming
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              <strong className="text-me99-600">ME99</strong> is the top <strong>online pokies Australia</strong> platform for over 50,000 active Australian players. Looking for the <strong>best online casino Australia</strong> experience, live dealer action, or sports betting? ME99 has it all, built specifically for the Australian market.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              ME99 casino is the <strong>trusted and safest platform</strong> for <strong>real money pokies</strong> in the region. From the AUD 10 minimum deposit to the 100% guaranteed payout promise, everything is designed to make playing easy and rewarding.
            </p>

            <h4 className="font-display text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
              Why ME99 is the #1 Choice for <strong className="text-me99-600">Pokies Online Australia</strong>
            </h4>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              The Australian online gaming market is packed with options, but ME99 stands out with game variety, generous promotions, and solid operational integrity. With <strong>over 4,000 online pokies and live casino games</strong> from JILI, BNG, VPower, WF Gaming, Pegasus, Rich88, Joker, UU Slots, Pragmatic Play, Evolution Gaming, PG Soft, and MEGA888, players get endless variety. Classic fruit machines, Megaways titles, progressive jackpots, and live dealer tables are all available.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              ME99 highlights the same bonus pillars showcased on the official ME99 site (<strong>me99office.net</strong>): <strong>FREE $10</strong> for new registrations with no deposit, a <strong>Welcome Bonus</strong> that doubles your first deposit (activate it under Promotions after funding), <strong>EVERY DEPOSIT RANDOM BONUS</strong> alerts, <strong>weekly rebates up to 5%</strong>, and <strong>weekly 7% commission</strong> for players building a referral network. Slot favourites from JILI, BNG, VPower, WF Gaming, Pegasus, Rich88, Joker, UU Slots, Pragmatic Play, Evolution, PG Soft, MEGA888 and more also rotate through category-specific welcome packs. Always confirm the live percentages inside Promotions before you claim.
            </p>

            <h4 className="font-display text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
              Unmatched Security, Fairness, and <strong className="text-me99-600">Guaranteed Payout</strong>
            </h4>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              ME99 takes security seriously. The platform is <strong>Verified by Trusted Pokies Australia (TPA)</strong>, Australia's recognised pokies verification voice, so players know promotions, payout integrity, and platform claims align with independent scrutiny. Every game outcome uses certified RNG. Financial transactions are protected by 256-bit SSL encryption. The <strong>100% Guaranteed Payout</strong> policy means when you win, your money is yours. Withdrawals go through trusted Australian payment rails like <strong>PayID, Osko, and direct bank transfer</strong>.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Responsible gaming is core to ME99. The platform provides deposit limits, session timers, self-exclusion options, and links to Australian gambling support services like GamblingHelpOnline.org.au. ME99 enforces an <strong>18+ age requirement</strong> and promotes healthy, controlled entertainment.
            </p>

            <h4 className="font-display text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
              The ME99 Mobile Experience and App Bonuses
            </h4>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Australian players want flexibility. ME99 delivers with a fully optimized mobile platform. No download needed. On iPhone, Android, or tablet, the full library of 4,000+ games, live casino streams, and sports betting markets is accessible instantly through your browser. The <strong>ME99 App Bonus</strong> awards a <strong>Random Bonus on Every Deposit</strong> when playing via mobile.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              The <strong>weekly 7% commission</strong> pathway rewards agents who share ME99 with their network, while <strong>weekly rebates up to 5%</strong> keep gameplay lively between jackpots. The <strong>iPAY9 VIP Program</strong> unlocks premium perks like priority withdrawals, personal account managers, and custom promotional offers layered on top of these baseline rewards.
            </p>

            <h4 className="font-display text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
              Getting Started at ME99. <strong className="text-me99-600">AUD 10 Minimum Deposit</strong>
            </h4>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Joining ME99 takes less than two minutes. Registration requires only basic details. Your <strong>FREE $10 registration bonus</strong> is credited automatically. Make your first deposit of just <strong>AUD 10</strong>, then head to <strong>Promotions</strong> on ME99 to activate your Welcome Bonus. This mirrors the official signup journey described on <strong>me99office.net</strong>. Withdrawals start at <strong>AUD 50</strong> and are processed through secure local channels. Most requests are completed within 24 hours.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Ready to see why thousands of Australian players rate ME99 as the <strong>best online pokies Australia</strong> platform? Register today and claim your FREE $10. 24/7 support via Live Chat, WhatsApp, and Telegram. <strong>ME99. Trusted. Safe. Rewarding.</strong>
            </p>
          </div>
        </article>

        {/* Why you'll want to jump in (ME99 promo card style) */}
        <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 md:p-8 lg:p-10 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-orange-soft shrink-0">
              <i className="ri-rocket-2-fill text-me99-500 text-2xl" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Why You&apos;ll Want To Jump Into ME99
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
                When you sign in at ME99, you step into a highly secure app environment built for gamers. It&apos;s your ticket to real-time play, fresh bonuses, and guaranteed security, with verification standards aligned with{" "}
                <strong className="text-me99-600">Trusted Pokies Australia (TPA)</strong>.
              </p>
            </div>
          </div>

          <p className="text-me99-600 font-bold text-xs md:text-sm uppercase tracking-wider mb-4">
            What you gain by signing in
          </p>

          <ul className="space-y-3 md:space-y-4">
            {whyJumpFeatures.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-me99-500/10 text-me99-600 shrink-0">
                  <i className={`${item.icon} text-lg`} />
                </span>
                <span className="text-gray-700 text-sm md:text-base leading-relaxed pt-1">{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center sm:text-left">
            <a href={LANDING_URL} target="_blank" rel="noopener noreferrer" className="btn-premium text-white inline-block">
              Register Now. Get FREE $10
            </a>
          </div>
        </div>

        {/* Featured bonuses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <div className="rounded-2xl border-2 border-me99-400 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <i className="ri-gift-line text-me99-500 text-xl" />
              <h3 className="font-display text-lg md:text-xl font-bold text-gray-900">Daily Easy Step Free 100</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Complete simple daily steps to claim bonus credit. The promo suits active ME99 members who share and engage through the official promotion flow.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li className="flex gap-2">
                <i className="ri-flashlight-line text-me99-500 shrink-0 mt-0.5" />
                <span>All ME99 customers can claim this bonus once per day.</span>
              </li>
              <li className="flex gap-2">
                <i className="ri-flashlight-line text-me99-500 shrink-0 mt-0.5" />
                <span>Share your unique referral link in at least 5 different Facebook Group Chats (same group does not count).</span>
              </li>
              <li className="flex gap-2">
                <i className="ri-flashlight-line text-me99-500 shrink-0 mt-0.5" />
                <span>Removed shares are not valid. After sharing, send a screenshot to Live Chat for verification.</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-600 space-y-1">
              <p>
                <span className="text-green-600 font-semibold">✓</span> Eligible: event slot games only.
              </p>
              <p>
                <span className="text-red-500 font-semibold">✗</span> Not eligible: live casino, fishing, or save-free modes per promo rules.
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Always confirm the latest task list, screenshots, and turnover rules on the live promotion inside{" "}
              <a href="https://me99office.net/" target="_blank" rel="noopener noreferrer" className="text-me99-600 font-medium hover:underline">
                me99office.net
              </a>{" "}
              before you claim.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-me99-400 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <i className="ri-trophy-line text-me99-500 text-xl" />
              <h3 className="font-display text-lg md:text-xl font-bold text-gray-900">Monthly Competition Deposit Ranking</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Compete every calendar month (Sydney and Melbourne time). Ranking is based on <strong>total deposit amount only</strong>. The more you deposit during the month, the higher you climb. Rewards are settled after the competition ends.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed mb-4">
              <li className="flex gap-2">
                <i className="ri-calendar-line text-me99-500 shrink-0 mt-0.5" />
                <span>Runs from the 1st through the last day of each month (Syd/Melb).</span>
              </li>
              <li className="flex gap-2">
                <i className="ri-bar-chart-box-line text-me99-500 shrink-0 mt-0.5" />
                <span>Leaderboard reflects total deposits for that month only.</span>
              </li>
            </ul>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Top 10 cash prizes (AUD)</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {monthlyRankingPrizes.map((row) => (
                <div key={row.rank} className="flex justify-between gap-2 px-2 py-1.5 rounded-lg bg-me99-50/80 border border-me99-100/60">
                  <span className="font-semibold text-gray-800">{row.rank}</span>
                  <span className="text-me99-700 font-bold">{row.amount}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a href={LANDING_URL} target="_blank" rel="noopener noreferrer" className="btn-premium text-white inline-block w-full text-center sm:w-auto">
                Check your ranking
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Prize tiers and settlement windows follow the Monthly Top 10 and deposit leaderboard pages published on{" "}
              <a href="https://me99office.net/" target="_blank" rel="noopener noreferrer" className="text-me99-600 font-medium hover:underline">
                me99office.net
              </a>
              {`.`}
            </p>
          </div>
        </div>

        {/* FIFA World Cup SEO blog block (H2/H3; single H1 stays in Hero) */}
        <article className="glass-card rounded-2xl p-6 md:p-8 lg:p-10 card-lift border border-me99-100/60">
          <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
            FIFA World Cup &amp; Online Entertainment: Why ME99 Fits Australian Fans
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            The FIFA World Cup draws millions of Australian viewers every tournament. Between matches, halftime breaks, and post-game buzz, fans want one login that covers secure sports markets, quick deposits in AUD, and premium pokies, all without juggling risky offshore apps. ME99 is positioned as that hub for readers searching <strong>online pokies Australia</strong>, <strong>World Cup betting</strong>, and <strong>trusted casino platforms</strong> in one sentence.
          </p>

          <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-3">
            Watch the World Cup, Bet Smarter, Stay Verified with TPA
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Trusted Pokies Australia (TPA) means promotional language and payout expectations face independent scrutiny. That clarity matters when casual viewers click an ad during a World Cup campaign. Pair that trust layer with ME99&apos;s <strong>AUD 10 minimum deposit</strong>, <strong>instant bonus alerts</strong>, and <strong>weekly rebate pathways</strong>, and you get a narrative that converts curious football fans into informed players.
          </p>

          <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-3">
            Halftime Slots, Daily Easy Step Free 100 &amp; Monthly Ranking Momentum
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Tournament nights are long. ME99 lets supporters rotate between live football chatter and quick slot sessions that respect the same promo guardrails highlighted above, including <strong>Daily Easy Step Free 100</strong> for daily engagement and <strong>Monthly Competition Deposit Ranking</strong> for players who want leaderboard prestige beyond a single matchweek.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Whether Australia is on the pitch or you are backing global favourites, ME99 keeps the experience cohesive: real-money or demo games, transparent transaction history, and 24/7 support when stadium schedules run late into Syd/Melb mornings.
          </p>
        </article>
      </div>
    </section>
  );
}
