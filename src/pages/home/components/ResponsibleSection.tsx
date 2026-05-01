const tools = [
  { icon: "ri-money-dollar-circle-line", title: "Deposit Limits", desc: "Set daily, weekly, or monthly maximum deposit amounts" },
  { icon: "ri-arrow-down-circle-line", title: "Loss Limits", desc: "Cap the maximum amount you can lose within a defined period" },
  { icon: "ri-timer-line", title: "Session Timers", desc: "Receive reminders about how long you have been playing" },
  { icon: "ri-eye-line", title: "Reality Checks", desc: "Periodic popups showing your session activity and balance changes" },
  { icon: "ri-forbid-line", title: "Self-Exclusion", desc: "Temporarily or permanently exclude yourself from the platform" },
  { icon: "ri-pause-circle-line", title: "Cool-Off Periods", desc: "Take a break for 24 hours, 7 days, or 30 days" },
];

const contactChannels = [
  { channel: "Live Chat", availability: "24/7", language: "English", response: "Under 2 minutes" },
  { channel: "WhatsApp", availability: "24/7", language: "English", response: "Under 5 minutes" },
  { channel: "Telegram", availability: "24/7", language: "English", response: "Under 5 minutes" },
  { channel: "FAQ and Help Centre", availability: "Always available", language: "English", response: "Instant" },
];

export default function ResponsibleSection() {
  return (
    <section className="relative bg-gradient-warm py-20 md:py-28 overflow-hidden">
      <div className="floating-orb w-[400px] h-[400px] top-0 left-0 opacity-15 animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 border border-green-500/20 text-green-600 mb-4">
              <i className="ri-shield-check-line text-xs"></i>
              Safe Gaming
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Responsible Gaming at <span className="text-gradient-orange">ME99</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              ME99 is committed to providing a safe and enjoyable gaming environment with a suite of responsible gaming tools, fully aligned with Australian standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((t) => (
              <div key={t.title} className="glass-card rounded-2xl p-6 flex items-start gap-4 card-lift">
                <div className="w-12 h-12 flex items-center justify-center bg-green-50 rounded-xl flex-shrink-0">
                  <i className={`${t.icon} text-green-500 text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm mb-1">{t.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card rounded-2xl p-6 text-center border border-green-200/50 bg-green-50/50">
            <p className="text-green-800 text-sm leading-relaxed">
              If you or someone you know may have a gambling problem, ME99 encourages reaching out to professional support services.
              Visit <a href="https://me99office.net/RFLANDINGPAAGE" rel="nofollow" className="font-bold underline hover:text-green-600 cursor-pointer">GamblingHelpOnline.org.au</a> or call the Australian Gambling Helpline at <strong>1800 858 858</strong> (free, 24/7).
            </p>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contacting <span className="text-gradient-orange">ME99</span> Support
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Assistance at ME99 is available 24 hours a day, 7 days a week through multiple contact channels. All in English.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 glass-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                  <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Contact Channel</th>
                  <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Availability</th>
                  <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Language</th>
                  <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Response Time</th>
                </tr>
              </thead>
              <tbody>
                {contactChannels.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-me99-50/50 transition-colors`}
                  >
                    <td className="px-5 py-4 font-semibold text-gray-900 text-xs whitespace-nowrap">{row.channel}</td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="text-green-600 font-semibold text-xs">{row.availability}</span>
                    </td>
                    <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">{row.language}</td>
                    <td className="px-5 py-4 text-me99-500 font-semibold text-xs whitespace-nowrap">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}