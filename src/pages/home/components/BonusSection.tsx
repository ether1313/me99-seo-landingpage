import { useState } from "react";

const bonusGroups = [
  {
    groupTitle: "Starter Pack",
    items: [
      {
        label: "Free Chips 10",
        badge: "AUD 10",
        amount: "AUD 10 Free Chips",
        extra: "",
        desc: "New members get AUD 10 in free chips to start playing right away. No deposit needed. Register and the chips are credited instantly.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-gift-line",
      },
      {
        label: "Check In Bonus",
        badge: "Daily Reward",
        amount: "Daily Check-In Bonus",
        extra: "",
        desc: "Log in to your ME99 account daily to claim your check-in bonus. The more consecutive days, the bigger the reward.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-calendar-check-line",
      },
      {
        label: "New Free 365 Days Bonus",
        badge: "365 Days",
        amount: "Free Bonus for 365 Days",
        extra: "",
        desc: "Get a free bonus every day for a full year after registration. ME99 rewards loyalty with 365 days of bonus credits.",
        gradient: "from-me99-300 to-me99-400",
        icon: "ri-time-line",
      },
      {
        label: "ME99 App Bonus",
        badge: "AUD 15",
        amount: "AUD 15 App Bonus",
        extra: "",
        desc: "Download the ME99 mobile app and get an exclusive AUD 15 bonus. Available on Android and iOS. Install, log in, and claim instantly.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-smartphone-line",
      },
    ],
  },
  {
    groupTitle: "Information",
    items: [
      {
        label: "ME99 Rollover Rebate",
        badge: "0.3%",
        amount: "0.3% Rollover Rebate",
        extra: "",
        desc: "Earn a 0.3% rebate on all rollover bets. Every wager contributes to your rebate total, credited automatically based on activity.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-restart-line",
      },
      {
        label: "Rebate Bonus",
        badge: "5%",
        amount: "5% Rebate Bonus",
        extra: "",
        desc: "Get a 5% rebate bonus on qualifying gameplay. The more you play across slots, live casino, and sports, the more rebate you earn.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-percent-line",
      },
      {
        label: "Weekly Commission",
        badge: "7%",
        amount: "7% Weekly Commission",
        extra: "",
        desc: "Share ME99 with your network and earn up to 7% weekly commission on qualifying downline activity. This matches the referral mechanics promoted on me99office.net.",
        gradient: "from-me99-300 to-me99-400",
        icon: "ri-user-add-line",
      },
      {
        label: "JILI Welcome",
        badge: "80%",
        amount: "80% JILI Welcome",
        extra: "",
        desc: "New JILI players get an exclusive 80% welcome bonus. Try popular slots like Super Ace and Fortune Gems with a big starting boost.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-gamepad-line",
      },
    ],
  },
  {
    groupTitle: "Slot Game Bonus",
    items: [
      {
        label: "Slot Welcome Bonus",
        badge: "50%",
        amount: "50% Slot Welcome Bonus",
        extra: "",
        desc: "New slot players get a 50% welcome bonus on their first slot deposit. Spin popular pokies with extra funds for more winning chances.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-coin-line",
      },
      {
        label: "Daily First Time Deposit Bonus",
        badge: "20%",
        amount: "20% Daily First Deposit",
        extra: "",
        desc: "Claim a 20% bonus on your first deposit of the day. Log in daily, make your first deposit, and get an automatic 20% boost.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-calendar-line",
      },
      {
        label: "Every Deposit Random Bonus",
        badge: "Random",
        amount: "Random Bonus Every Deposit",
        extra: "",
        desc: "Every deposit comes with a surprise random bonus. The amount is unpredictable. Could be small, could be huge. Deposit more for more surprises.",
        gradient: "from-me99-300 to-me99-400",
        icon: "ri-shuffle-line",
      },
      {
        label: "VVIP Unlimited Slot Bonus",
        badge: "10%",
        amount: "10% VVIP Unlimited",
        extra: "",
        desc: "VVIP members get a 10% unlimited slot bonus on every deposit. No cap, no limit. The higher your VIP level, the more bonus you collect.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-vip-crown-line",
      },
      {
        label: "VIP Unlimited Slot Bonus",
        badge: "8%",
        amount: "8% VIP Unlimited",
        extra: "",
        desc: "VIP members get an 8% unlimited slot bonus on all deposits. A consistent boost that rewards loyalty on every top-up.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-vip-diamond-line",
      },
    ],
  },
  {
    groupTitle: "Daily Deposit Progressive Bonus",
    items: [
      {
        label: "Deposit Progressive $10-$20",
        badge: "Tier 1",
        amount: "Deposit $10 to $20",
        extra: "Progressive Bonus",
        desc: "Deposit between AUD 10 and AUD 20 to access the first tier of the progressive bonus system. Small deposits still earn real rewards.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-bar-chart-box-line",
      },
      {
        label: "Deposit Progressive $11-$30",
        badge: "Tier 2",
        amount: "Deposit $11 to $30",
        extra: "Progressive Bonus",
        desc: "Deposit between AUD 11 and AUD 30 to access the second tier. Increase your deposit amount for progressively larger bonus rewards.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-bar-chart-box-line",
      },
      {
        label: "Deposit Progressive $21-$40",
        badge: "Tier 3",
        amount: "Deposit $21 to $40",
        extra: "Progressive Bonus",
        desc: "Deposit between AUD 21 and AUD 40 to reach the third progressive tier. Bonus amounts scale with your commitment. The more you deposit, the better the reward.",
        gradient: "from-me99-300 to-me99-400",
        icon: "ri-bar-chart-box-line",
      },
      {
        label: "Deposit Progressive $31-$60",
        badge: "Tier 4",
        amount: "Deposit $31 to $60",
        extra: "Progressive Bonus",
        desc: "Deposit between AUD 31 and AUD 60 to access tier four. Serious players get serious bonuses in this mid-high deposit bracket.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-bar-chart-box-line",
      },
      {
        label: "Deposit Progressive $61-$100",
        badge: "Tier 5",
        amount: "Deposit $61 to $100",
        extra: "Progressive Bonus",
        desc: "Deposit between AUD 61 and AUD 100 for the highest progressive tier. Maximum deposit commitment earns maximum bonus returns.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-bar-chart-box-line",
      },
    ],
  },
  {
    groupTitle: "Lucky & Event Bonus",
    items: [
      {
        label: "Lucky Wheel Bonus",
        badge: "Spin & Win",
        amount: "Lucky Wheel Bonus",
        extra: "",
        desc: "Spin the ME99 Lucky Wheel for a chance to win random bonus prizes. Every spin is a new opportunity. Test your luck daily for extra credits.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-dv-line",
      },
      {
        label: "VIP Loyalty Bonus",
        badge: "Loyalty",
        amount: "VIP Loyalty Bonus",
        extra: "",
        desc: "Loyal VIP members get exclusive loyalty bonuses as a token of appreciation. Your dedication to ME99 is rewarded with surprise bonus drops.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-heart-line",
      },
      {
        label: "VIP Upgrade Bonus",
        badge: "Upgrade",
        amount: "VIP Upgrade Bonus",
        extra: "",
        desc: "Every time you upgrade your VIP level, ME99 gives a special upgrade bonus. Climb the ranks and collect bonuses at each milestone.",
        gradient: "from-me99-300 to-me99-400",
        icon: "ri-arrow-up-circle-line",
      },
      {
        label: "Golden Egg Bonus",
        badge: "Smash & Win",
        amount: "Golden Egg Bonus",
        extra: "",
        desc: "Smash the golden egg to reveal hidden bonus rewards. A fun interactive promotion where every crack could reveal a surprise prize.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-star-line",
      },
    ],
  },
  {
    groupTitle: "Mission & Achievement Bonus",
    items: [
      {
        label: "Daily Easy Step Bonus",
        badge: "AUD 100",
        amount: "Daily Easy Step AUD 100",
        extra: "",
        desc: "Complete simple daily missions to earn up to AUD 100 in bonus credits. Small tasks, big rewards. Open to every player level.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-task-line",
      },
      {
        label: "Birthday Bonus",
        badge: "Celebrate",
        amount: "Birthday Bonus",
        extra: "",
        desc: "ME99 celebrates your birthday with a special bonus gift. Log in during your birthday month to claim your personalized reward.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-cake-line",
      },
      {
        label: "Free Share Bonus",
        badge: "AUD 3",
        amount: "Free Share Bonus AUD 3",
        extra: "",
        desc: "Share ME99 with friends on social media and get AUD 3 free bonus credit. Spread the word and get rewarded instantly.",
        gradient: "from-me99-300 to-me99-400",
        icon: "ri-share-line",
      },
    ],
  },
  {
    groupTitle: "Daily & Weekly Deposit Bonus",
    items: [
      {
        label: "Daily Deposit 5 Times",
        badge: "AUD 9.99",
        amount: "Daily Deposit 5x = AUD 9.99",
        extra: "",
        desc: "Make 5 deposits in a single day and get AUD 9.99 bonus. Consistent daily activity is rewarded. Deposit regularly and stack your bonuses.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-number-5",
      },
      {
        label: "Daily Deposit 10 Times",
        badge: "AUD 19.99",
        amount: "Daily Deposit 10x = AUD 19.99",
        extra: "",
        desc: "Make 10 deposits in a single day and get AUD 19.99 bonus. High-frequency players get higher returns with this daily milestone reward.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-number-1",
      },
      {
        label: "Daily Deposit 30 Times",
        badge: "AUD 59.99",
        amount: "Daily Deposit 30x = AUD 59.99",
        extra: "",
        desc: "Make 30 deposits in a single day and get AUD 59.99 bonus. Frequent depositors unlock substantial daily bonus rewards.",
        gradient: "from-me99-300 to-me99-400",
        icon: "ri-number-3",
      },
      {
        label: "Weekly Deposit 50 Times",
        badge: "AUD 79.99",
        amount: "Weekly Deposit 50x = AUD 79.99",
        extra: "",
        desc: "Make 50 deposits within a week and get AUD 79.99 bonus. Weekly milestones reward sustained commitment over seven days of play.",
        gradient: "from-me99-500 to-me99-600",
        icon: "ri-calendar-2-line",
      },
      {
        label: "Weekly Deposit 100 Times",
        badge: "AUD 169.99",
        amount: "Weekly Deposit 100x = AUD 169.99",
        extra: "",
        desc: "Make 100 deposits within a week and get AUD 169.99 bonus. The ultimate weekly achievement for the most active ME99 players.",
        gradient: "from-me99-400 to-me99-500",
        icon: "ri-calendar-2-line",
      },
    ],
  },
];

const extraCards = [
  {
    label: "Partnership Platform",
    badge: "New Rewards",
    desc: "Join the ME99 Partnership Platform for exclusive rewards. Agents and partners get dedicated commission structures, promotional tools, and priority support.",
    icon: "ri-group-line",
  },
  {
    label: "Monthly Competition",
    badge: "Ranking",
    desc: "Compete in the monthly deposit ranking competition. Top depositors win exclusive prizes and bonus rewards. Climb the leaderboard and claim your share.",
    icon: "ri-trophy-line",
  },
];

export default function BonusSection() {
  const [activeGroup, setActiveGroup] = useState(0);
  const currentGroup = bonusGroups[activeGroup];

  return (
    <section className="relative dark-section-glow py-20 md:py-28 overflow-hidden">
      <div className="floating-orb w-[600px] h-[600px] -top-48 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="floating-orb w-[400px] h-[400px] bottom-0 right-0 opacity-15 animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-me99-500/10 border border-me99-500/20 text-me99-400 mb-4">
            <i className="ri-gift-line text-xs"></i>
            {" "}All Promotions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ME99 <span className="text-gradient-orange">Bonus Guide</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            ME99 Australia offers the most comprehensive bonus program. From starter packs and daily deposits to progressive tiers and weekly achievements. Every deposit and every session earns you more.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left sidebar sticky nav */}
          <div className="lg:w-[280px] shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="glass-card-dark rounded-2xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <i className="ri-list-check text-me99-400 text-sm"></i>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Categories</span>
                </div>
                <nav className="space-y-1">
                  {bonusGroups.map((group, idx) => (
                    <button
                      key={group.groupTitle}
                      onClick={() => setActiveGroup(idx)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                        activeGroup === idx
                          ? "bg-me99-500/15 text-me99-300 font-semibold border border-me99-500/25"
                          : "text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          activeGroup === idx ? "bg-me99-400" : "bg-white/20"
                        }`}
                      ></span>
                      <span className="truncate">{group.groupTitle}</span>
                      <span
                        className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                          activeGroup === idx
                            ? "bg-me99-500/20 text-me99-400"
                            : "bg-white/5 text-white/30"
                        }`}
                      >
                        {group.items.length}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 min-w-0">
            <div className="space-y-14">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-me99-500/10 border border-me99-500/20 flex items-center justify-center">
                    <span className="text-me99-400 text-xs font-bold">{activeGroup + 1}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-white">
                    {currentGroup.groupTitle}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentGroup.items.map((t) => (
                    <div
                      key={t.label}
                      className="glass-card-dark rounded-xl p-5 hover:border-me99-500/25 transition-all duration-500 card-lift group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-9 h-9 rounded-lg bg-gradient-to-r ${t.gradient} flex items-center justify-center shadow-lg shrink-0`}
                          >
                            <i className={`${t.icon} text-white text-sm`}></i>
                          </div>
                          <span className="text-white/50 text-[11px] font-medium uppercase tracking-wider">
                            {t.label}
                          </span>
                        </div>
                        <span
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${t.gradient} text-white shadow-md whitespace-nowrap shrink-0`}
                        >
                          {t.badge}
                        </span>
                      </div>
                      <div className="text-me99-400 font-extrabold text-lg md:text-xl mb-1 leading-tight">
                        {t.amount}
                      </div>
                      {t.extra && (
                        <div className="text-me99-300 text-xs font-semibold mb-2">{t.extra}</div>
                      )}
                      <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/50 transition-colors">
                        {t.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra highlight cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extraCards.map((card) => (
                  <div
                    key={card.label}
                    className="glass-card-dark rounded-xl p-5 border border-me99-500/15 animate-pulse-glow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-me99-500/10 flex items-center justify-center shrink-0">
                        <i className={`${card.icon} text-me99-400 text-sm`}></i>
                      </div>
                      <div className="min-w-0">
                        <div className="text-me99-300 font-bold text-sm">{card.label}</div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-me99-500/15 text-me99-400">
                          {card.badge}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/35 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <a href="https://me99office.net/RFLANDINGPAAGE" className="btn-premium text-white inline-block">
                  Claim Your Bonus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}