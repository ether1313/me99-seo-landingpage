import { useState } from "react";

const faqs = [
  {
    q: "How do I register at ME99 Australia?",
    a: "Visit the ME99 homepage, click Register, fill in your Full Name, Australian mobile number, and a secure password (6 to 20 characters). Click GET CODE to receive your SMS verification code, enter it, and click REGISTER. Your account is ready instantly. New members get a FREE $10 credit instantly upon registration. No deposit required.",
  },
  {
    q: "Is ME99 legal in Australia?",
    a: "Online gaming regulations in Australia are governed by the Interactive Gambling Act 2001. Players should review local laws and ensure compliance before participating. ME99 operates under international licensing and implements age verification to ensure only eligible players aged 18+ participate. ME99 is a Trusted and Safest Platform, Verified by TPA.",
  },
  {
    q: "What is the minimum deposit at ME99?",
    a: "The minimum deposit at ME99 Australia is AUD 10 for most payment methods including PayID, Osko, and bank transfers. The minimum withdrawal is AUD 50.",
  },
  {
    q: "How do I claim the ME99 welcome bonus?",
    a: "After registering, you get a FREE $10 instantly with no deposit required. Make your first deposit to unlock the 80% JILI Welcome Bonus. You can also claim a 30% Daily First Deposit Bonus every day, a 50% Live Welcome Bonus for live casino, and a 50% Sport Welcome Bonus for sports betting.",
  },
  {
    q: "What payment methods does ME99 accept for Australian players?",
    a: "ME99 Australia accepts PayID, Osko, Google Pay, Apple Pay, Mobile Banking, Visa/Mastercard, Speed Pay, and Cryptocurrency (BTC, ETH, USDT). All major Australian banking methods are supported for fast and secure transactions.",
  },
  {
    q: "How fast are ME99 withdrawals?",
    a: "Most withdrawal requests at ME99 are processed within 15 minutes for fully verified accounts. The minimum withdrawal amount is AUD 50. First-time withdrawals may require standard identity verification, typically completed within one business hour. ME99 does not charge internal fees on withdrawals.",
  },
  {
    q: "What are the most popular games at ME99 Australia?",
    a: "The most popular games among Australian players at ME99 include online pokies (slots), live Baccarat, Dragon Tiger, live roulette, AFL and NRL sports betting, and cricket betting. Top game providers include Pragmatic Play, Evolution Gaming, PG Soft, JILI, ACE333, and BIGPOT.",
  },
  {
    q: "Can I play ME99 on my mobile phone?",
    a: "Yes. The ME99 platform is fully optimized for mobile play on both Android and iOS devices. The dedicated ME99 app is available for download from the official website and offers access to the full game library, live sports betting, account management, and an exclusive random bonus on every deposit.",
  },
  {
    q: "What is the ME99 app bonus?",
    a: "The ME99 app offers an exclusive random bonus on every deposit you make through the app. Download the ME99 app on Android or iOS and enjoy surprise bonuses every time you deposit. The app also provides the fastest access to all games, promotions, and live transactions.",
  },
  {
    q: "Does ME99 offer responsible gambling tools for Australian players?",
    a: "Yes. ME99 provides a full suite of responsible gambling tools including deposit limits, loss limits, session timers, reality checks, self-exclusion, and cool-off periods. Australian players can also contact the Gambling Help Online service at 1800 858 858 (free, 24/7).",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="floating-orb w-[300px] h-[300px] top-20 right-0 opacity-10 animate-float-slow" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="badge-premium mb-4 inline-block">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
          <p className="text-gray-500 text-sm">Everything you need to know about ME99 Australia.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl border transition-all duration-300 ${
                openIndex === i ? "border-me99-300 shadow-lg shadow-me99-500/5" : "border-gray-100 hover:border-me99-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                <span className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-lg bg-gradient-orange-soft">
                  <i className={`${openIndex === i ? "ri-subtract-line" : "ri-add-line"} text-me99-500 text-lg`}></i>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-gradient-to-r from-me99-200 to-transparent mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}