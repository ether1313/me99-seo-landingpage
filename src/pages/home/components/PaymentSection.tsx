const depositMethods = [
  { icon: "ri-bank-line", name: "PayID", desc: "Instant deposits using your Australian phone number or email" },
  { icon: "ri-google-line", name: "Google Pay", desc: "Quick and secure deposits using Google Pay on Android" },
  { icon: "ri-apple-line", name: "Apple Pay", desc: "Fast and secure deposits using Apple Pay on your devices" },
  { icon: "ri-smartphone-line", name: "Mobile Banking", desc: "Deposits via your Australian bank's official mobile app" },
  { icon: "ri-visa-line", name: "Visa and Mastercard", desc: "Instant deposits with major credit and debit cards" },
  { icon: "ri-exchange-line", name: "Osko", desc: "Real-time bank transfer via Osko. 24/7 instant payments" },
  { icon: "ri-flashlight-line", name: "Speed Pay", desc: "Instant deposits via Speed Pay for rapid transactions" },
  { icon: "ri-bit-coin-line", name: "Cryptocurrency", desc: "Bitcoin (BTC), Ethereum (ETH), USDT supported" },
];

const paymentTable = [
  { method: "PayID", minDep: "AUD 10", maxDep: "AUD 50,000", minWith: "AUD 20", maxWith: "AUD 50,000", time: "Instant" },
  { method: "Osko", minDep: "AUD 10", maxDep: "AUD 30,000", minWith: "AUD 20", maxWith: "AUD 30,000", time: "Instant" },
  { method: "Apple Pay", minDep: "AUD 10", maxDep: "AUD 20,000", minWith: "AUD 20", maxWith: "AUD 20,000", time: "Instant" },
  { method: "Visa and Mastercard", minDep: "AUD 10", maxDep: "AUD 20,000", minWith: "AUD 20", maxWith: "AUD 20,000", time: "Instant" },
  { method: "Google Pay", minDep: "AUD 10", maxDep: "AUD 20,000", minWith: "AUD 20", maxWith: "AUD 20,000", time: "Instant" },
  { method: "Speed Pay", minDep: "AUD 10", maxDep: "AUD 10,000", minWith: "AUD 20", maxWith: "AUD 10,000", time: "Instant" },
  { method: "Bitcoin (BTC)", minDep: "AUD 50", maxDep: "No Limit", minWith: "AUD 100", maxWith: "No Limit", time: "10 to 30 min" },
  { method: "USDT (TRC20)", minDep: "AUD 50", maxDep: "No Limit", minWith: "AUD 100", maxWith: "No Limit", time: "5 to 15 min" },
];

export default function PaymentSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="floating-orb w-[400px] h-[400px] bottom-0 right-0 opacity-10 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="badge-premium mb-4 inline-block">Banking</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Payment Methods at <span className="text-gradient-orange">ME99</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            ME99 Australia supports a comprehensive range of local and international payment methods. Minimum Deposit AUD 10. Minimum Withdrawal AUD 50. All transactions are processed through encrypted channels.
          </p>
        </div>

        <h3 className="font-display text-lg font-bold text-gray-900 mb-6">Deposit Methods</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {depositMethods.map((m) => (
            <div key={m.name} className="glass-card rounded-2xl p-5 text-center card-lift">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-orange-soft rounded-xl mx-auto mb-3">
                <i className={`${m.icon} text-me99-500 text-xl`}></i>
              </div>
              <p className="font-display font-semibold text-gray-900 text-xs mb-1">{m.name}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display text-lg font-bold text-gray-900 mb-5">Deposit &amp; Withdrawal Limits Table</h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 glass-card mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Payment Method</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Min Deposit</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Max Deposit</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Min Withdrawal</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Max Withdrawal</th>
                <th className="px-5 py-4 text-left font-semibold text-white/70 text-xs whitespace-nowrap">Processing Time</th>
              </tr>
            </thead>
            <tbody>
              {paymentTable.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-me99-50/50 transition-colors`}
                >
                  <td className="px-5 py-4 font-semibold text-gray-900 text-xs whitespace-nowrap">{row.method}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">{row.minDep}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">{row.maxDep}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">{row.minWith}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">{row.maxWith}</td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className={`font-semibold text-xs ${row.time === "Instant" ? "text-green-600" : "text-me99-500"}`}>
                      {row.time}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-card rounded-2xl p-6 flex items-start gap-5 card-lift">
          <div className="w-12 h-12 flex items-center justify-center bg-green-50 rounded-xl flex-shrink-0">
            <i className="ri-time-line text-green-500 text-xl"></i>
          </div>
          <div>
            <h4 className="font-display font-bold text-gray-900 text-sm mb-2">Withdrawal Processing Times</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Most ME99 withdrawal requests are reviewed and approved within <strong className="text-me99-600">15 minutes</strong> for verified accounts. Minimum Withdrawal is <strong className="text-me99-600">AUD 50</strong>. First-time withdrawals may require standard identity verification, typically completed within one business hour. ME99 does not charge internal fees on withdrawals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}