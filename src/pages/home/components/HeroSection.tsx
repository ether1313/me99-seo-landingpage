import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      life: number;
      maxLife: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.2,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      };
    };

    for (let i = 0; i < 60; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          particles[i] = createParticle();
          return;
        }

        const fade = Math.sin((p.life / p.maxLife) * Math.PI);
        const alpha = p.alpha * fade;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${alpha * 0.15})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[720px] overflow-hidden bg-gradient-to-b from-[#0a0a12] via-[#0f0a08] to-[#0a0a12]">
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Flowing ribbons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Ribbon 1 */}
        <svg className="absolute top-[20%] left-0 w-[200%] h-32 opacity-20" viewBox="0 0 2000 200" preserveAspectRatio="none">
          <path
            d="M0,100 C300,20 500,180 800,80 C1100,-20 1300,160 1600,60 C1800,10 2000,100 2000,100"
            fill="none"
            stroke="url(#ribbonGrad1)"
            strokeWidth="2"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#F97316" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        {/* Ribbon 2 */}
        <svg className="absolute top-[50%] left-0 w-[200%] h-32 opacity-15" viewBox="0 0 2000 200" preserveAspectRatio="none">
          <path
            d="M0,80 C400,160 600,20 1000,120 C1400,220 1600,40 2000,100"
            fill="none"
            stroke="url(#ribbonGrad2)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="ribbonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="#EA580C" />
              <stop offset="60%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        {/* Ribbon 3 */}
        <svg className="absolute top-[75%] left-0 w-[200%] h-32 opacity-10" viewBox="0 0 2000 200" preserveAspectRatio="none">
          <path
            d="M0,120 C200,40 500,180 900,60 C1300,-40 1700,140 2000,80"
            fill="none"
            stroke="url(#ribbonGrad3)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="ribbonGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating orbs */}
      <div className="floating-orb w-[500px] h-[500px] -top-32 -left-32 opacity-40 animate-float-slow" />
      <div className="floating-orb w-[400px] h-[400px] top-[40%] -right-20 opacity-30 animate-float" style={{ animationDelay: "2s" }} />
      <div className="floating-orb w-[300px] h-[300px] bottom-20 left-[30%] opacity-25 animate-float-slow" style={{ animationDelay: "4s" }} />

      {/* Light trail elements */}
      <div className="absolute top-[30%] left-0 w-20 h-px bg-gradient-to-r from-transparent via-me99-400 to-transparent opacity-40 animate-light-trail" />
      <div className="absolute top-[60%] left-0 w-16 h-px bg-gradient-to-r from-transparent via-me99-500 to-transparent opacity-30 animate-light-trail" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[45%] left-0 w-24 h-px bg-gradient-to-r from-transparent via-me99-300 to-transparent opacity-25 animate-light-trail" style={{ animationDelay: "4s" }} />

      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-36 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-premium mb-6 animate-float">
              <span className="w-1.5 h-1.5 rounded-full bg-me99-500 animate-pulse" />
              {" "}Australia's Best Online Entertainment
            </div>

            {/* Main Title */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6">
              <span className="block glow-text-strong text-gradient-orange">ME99</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-white/80 mt-3">
                Online Pokies Australia
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-white/60">
                Trusted &amp; Safest Platform
              </span>
            </h1>

            <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Australia's #1 destination for <strong className="text-me99-400">online pokies</strong> and real money casino gaming. Play 4,000+ games from JILI, BNG, VPower, WF Gaming, Pegasus, Rich88, Joker, UU Slots, Pragmatic Play, Evolution Gaming and more. New register <strong className="text-me99-400">FREE $10</strong>. Welcome Bonus doubles your first deposit. EVERY DEPOSIT RANDOM BONUS, weekly rebate up to 5%, weekly 7% referral commission. Minimum Deposit <strong className="text-me99-400">AUD 10</strong>. 100% Guaranteed Payout, Verified by TPA (Trusted Pokies Australia).
            </p>

            {/* Stars */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <i key={i} className="ri-star-fill text-me99-400 text-lg drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"></i>
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.9/5</span>
              <span className="text-white/30 text-xs uppercase tracking-wider">Verified Reviews</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://me99office.net/RFLANDINGPAAGE" className="btn-premium text-white text-center">
                <span className="relative z-10">Register Now. Free</span>
              </a>
              <a href="https://me99office.net/RFLANDINGPAAGE" className="btn-outline-premium text-center">
                Login
              </a>
            </div>

            {/* Bonus badge */}
            <div className="mt-8 inline-flex items-center gap-3 glass-card-dark rounded-xl px-5 py-3 animate-pulse-glow">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-orange">
                <i className="ri-gift-line text-white text-lg"></i>
              </div>
              <div className="text-left">
                <span className="text-me99-400 text-sm font-bold block">New Register FREE 10$</span>
                <span className="text-white/40 text-xs">Welcome Bonus, EVERY DEPOSIT RANDOM BONUS, weekly rebate up to 5%</span>
              </div>
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            {/* Glow ring behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-me99-500/20 animate-spin-slow" />
              <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-me99-400/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
            </div>

            {/* Main visual card */}
            <div className="relative glass-card-dark rounded-2xl p-6 md:p-8 max-w-[440px] w-full animate-float" style={{ animationDelay: "1s" }}>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center shadow-lg shadow-me99-500/30">
                    <span className="font-display text-white font-black text-lg">M</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">ME99 Platform</p>
                    <p className="text-white/40 text-xs">Live &amp; Active</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Online</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Active Players", value: "50K+", icon: "ri-user-3-line" },
                  { label: "Total Games", value: "4000+", icon: "ri-gamepad-line" },
                  { label: "Min Deposit", value: "AUD 10", icon: "ri-trophy-line" },
                  { label: "Guaranteed Payout", value: "100%", icon: "ri-percent-line" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-me99-500/20 transition-all duration-300">
                    <div className="w-7 h-7 flex items-center justify-center mb-2">
                      <i className={`${stat.icon} text-me99-400 text-sm`}></i>
                    </div>
                    <p className="text-white font-bold text-lg">{stat.value}</p>
                    <p className="text-white/40 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/50 text-xs">Today's Activity</span>
                  <span className="text-me99-400 text-xs font-semibold">High</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-me99-600 to-me99-400 w-[78%] animate-shimmer shimmer-bg" />
                </div>
              </div>

              {/* Mini game preview */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-me99-500/20 to-me99-600/20 flex items-center justify-center">
                  <i className="ri-fire-line text-me99-400"></i>
                </div>
                <div className="flex-1">
                  <p className="text-white text-xs font-semibold">Gates of Olympus</p>
                  <p className="text-white/40 text-xs">Pragmatic Play. Hot</p>
                </div>
                <span className="text-me99-400 text-xs font-bold">x5,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a12] to-transparent z-20 pointer-events-none" />
    </section>
  );
}