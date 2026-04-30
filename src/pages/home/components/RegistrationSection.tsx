const steps = [
  { num: 1, text: "Visit the ME99 website or open the ME99 app, then click the Register button." },
  { num: 2, text: "Enter your Full Name. It must match your bank account name for smooth withdrawals." },
  { num: 3, text: "Input your Australian mobile number (e.g. 61480050689)." },
  { num: 4, text: "Create a secure password between 6–20 characters." },
  { num: 5, text: "Enter a Referrer Code (e.g. RFFBLEAD) if you have one. Optional but recommended." },
  { num: 6, text: "Click GET CODE to receive your SMS verification code, then enter it in the Verification Code field." },
  { num: 7, text: "Click the REGISTER button. Your account is ready instantly. Claim your FREE $10 and start playing!" },
];

export default function RegistrationSection() {
  return (
    <section className="relative bg-gradient-warm py-20 md:py-28 overflow-hidden">
      <div className="floating-orb w-[400px] h-[400px] top-0 right-0 opacity-20 animate-float" />
      <div className="floating-orb w-[300px] h-[300px] bottom-0 left-0 opacity-15 animate-float-slow" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="badge-premium mb-4 inline-block">Get Started</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Quick <span className="text-gradient-orange">Registration</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Getting started at ME99 takes under 30 seconds. New members get a FREE $10 credit instantly upon registration. No deposit required. The sign-up process has been simplified so Australian members can begin playing almost immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="space-y-4">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-me99-200 transition-all duration-300 card-lift"
                >
                  <div className="step-circle">{s.num}</div>
                  <div className="pt-1">
                    <p className="text-gray-700 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-me99-500 card-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-orange-soft flex-shrink-0">
                  <i className="ri-shield-check-line text-me99-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm mb-2">SMS Verification</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    A quick verification via SMS confirms your ME99 account. Click GET CODE to receive the verification code on your mobile, enter it, and you're done. This step protects user data and ensures all future transactions are safe. Verification typically takes less than one minute. ME99 is a Trusted &amp; Safest Platform, Verified by TPA.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-me99-500 card-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-orange-soft flex-shrink-0">
                  <i className="ri-gift-line text-me99-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm mb-2">FREE $10 on Registration + Welcome Bonus</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    After registration, you get a FREE $10 credit instantly. No deposit needed. Make your first deposit of AUD 10 or more to unlock the 100% Welcome Bonus. Daily First Deposit 30%, Live Welcome 50%, and Sport Welcome 50% bonuses are also available.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-me99-500 card-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-orange-soft flex-shrink-0">
                  <i className="ri-smartphone-line text-me99-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm mb-2">Mobile-First Experience</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Register on any device. Desktop, tablet, or mobile. The ME99 platform is fully responsive and optimized for seamless gameplay across all Australian devices and networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}