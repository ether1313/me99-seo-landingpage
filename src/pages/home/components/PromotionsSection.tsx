const welcomeOffers = [
  {
    icon: "ri-gift-line",
    title: "Free Chips 10",
    sub: "AUD 10. No Deposit",
    desc: "New members get AUD 10 in free chips upon registration. No deposit needed. Start playing immediately with real credit.",
  },
  {
    icon: "ri-calendar-check-line",
    title: "Check In Bonus",
    sub: "Daily Reward",
    desc: "Log in daily to claim your check-in bonus. The more consecutive days, the bigger the reward.",
  },
  {
    icon: "ri-time-line",
    title: "New Free 365 Days Bonus",
    sub: "Full Year of Free Bonuses",
    desc: "Get a free bonus every day for 365 days after registration. ME99 rewards loyalty with continuous bonus credits.",
  },
  {
    icon: "ri-smartphone-line",
    title: "ME99 App Bonus",
    sub: "AUD 15 App Install",
    desc: "Download the ME99 mobile app and get an exclusive AUD 15 bonus. Available on Android and iOS devices.",
  },
];

export default function PromotionsSection() {
  return (
    <section className="relative bg-gradient-warm py-14 md:py-20 overflow-hidden">
      <div className="floating-orb w-[400px] h-[400px] top-1/2 -left-48 opacity-15 animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="badge-premium mb-4 inline-block">Promotions</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Welcome Offers at <span className="text-gradient-orange">ME99</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            New Australian members get a FREE AUD 10 on registration plus a generous multi-tier bonus system designed to reward every deposit and every session.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {welcomeOffers.map((o) => (
            <div key={o.title} className="glass-card rounded-2xl p-6 card-lift">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-orange-soft rounded-xl mb-4">
                <i className={`${o.icon} text-me99-500 text-xl`}></i>
              </div>
              <h4 className="font-display font-bold text-gray-900 text-sm mb-0.5">{o.title}</h4>
              <p className="text-me99-600 text-xs font-medium mb-3">{o.sub}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}