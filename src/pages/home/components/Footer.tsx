import curacaoLogo from "../../../assets/licenses/curacao.png";
import pagcorLogo from "../../../assets/licenses/pagcor.png";

export default function Footer() {
  const LANDING_URL = "https://me99office.net/RFLANDINGPAAGE";
  const SOCIAL_LINKS = [
    { label: "Facebook", icon: "ri-facebook-fill", href: "https://www.facebook.com/Me99australia/" },
    { label: "Telegram", icon: "ri-telegram-fill", href: "https://t.me/tpachatgrouau" },
    { label: "WhatsApp", icon: "ri-whatsapp-fill", href: "https://chat.whatsapp.com/LHKV5Mmj5ybEx76MTCxDwE" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-[#08080f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-me99-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href={LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-5"
            >
              <img
                src="https://static.readdy.ai/image/b513b5b4a847779ee65de1525456761b/45e146b6768c3e35cb94fd36bd7f41ae.png"
                alt="ME99 Logo"
                className="h-16 w-auto"
              />
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              <strong className="text-white/60">ME99 Australia</strong>. Online pokies &amp; casino for Australian players. Trusted &amp; Safest Platform. New register FREE $10, Welcome Bonus (double your first deposit), EVERY DEPOSIT RANDOM BONUS, weekly rebate up to 5%, weekly 7% referral commission. 4,000+ games, AUD 10 min deposit, AUD 50 min withdrawal, 100% Guaranteed Payout. Verified By TPA.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl hover:bg-me99-500/20 hover:text-me99-400 text-white/30 transition-all duration-300 cursor-pointer border border-white/5 hover:border-me99-500/20"
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-bold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "ME99 App", href: LANDING_URL },
                { label: "Online Pokies", href: LANDING_URL },
                { label: "Live Casino", href: LANDING_URL },
                { label: "Sports Betting", href: LANDING_URL },
                { label: "Promotions", href: LANDING_URL },
                { label: "Register", href: LANDING_URL },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-me99-400 text-sm transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h4 className="font-display text-white font-bold text-sm mb-5">Responsible Gaming</h4>
            <p className="text-white/40 text-sm leading-relaxed mb-3">
              This website is intended for users aged <strong className="text-white/60">18 years and older</strong> only.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-3">
              Please <strong className="text-white/60">gamble responsibly</strong>. For help, visit{" "}
              <a
                href={LANDING_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-me99-400 hover:underline cursor-pointer"
              >
                GamblingHelpOnline.org.au
              </a>{" "}
              or call the Australian Gambling Helpline at <strong className="text-white/60">1800 858 858</strong> (free, 24/7).
            </p>
            <p className="text-white/30 text-xs">Gambling can be addictive, so please play responsibly.</p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <img
                src={curacaoLogo}
                alt="Gaming Curacao"
                loading="lazy"
                className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={pagcorLogo}
                alt="PAGCOR"
                loading="lazy"
                className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* License */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-white/20 text-xs leading-relaxed">
            ME99 is Australia's premier online entertainment platform, providing secure, diverse, and rewarding experiences tailored specifically for Australian players. This website is intended for entertainment purposes only. Players are responsible for ensuring online gaming is legal in their jurisdiction. ME99 supports responsible gambling and complies with applicable Australian regulations. Minimum Deposit AUD 10. Minimum Withdrawal AUD 50. All transactions are secured with 256-bit SSL encryption.
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#05050a] py-5 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs text-center sm:text-left">
            Copyright &copy; 2026 | ME99 Australia. Best Online Entertainment In Asia. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-white/15 text-xs">
            <i className="ri-shield-check-line text-me99-500/40"></i>
            <span>Licensed &amp; Regulated | 18+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}