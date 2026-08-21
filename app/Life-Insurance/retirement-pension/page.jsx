"use client";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarClock,
  Check,
  ChevronDown,
  CircleHelp,
  HeartHandshake,
  LockKeyhole,
  Menu,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

const plans = [
  {
    name: "Secure Pension",
    tag: "Most Popular",
    icon: WalletCards,
    description:
      "A steady income stream designed to support your everyday retirement needs.",
    features: [
      "Guaranteed income options",
      "Flexible retirement age",
      "Life cover included",
    ],
  },
  {
    name: "Growth Retirement",
    tag: "Long-term Growth",
    icon: TrendingUp,
    description:
      "Build your retirement corpus with a plan designed for long-term wealth creation.",
    features: [
      "Market-linked growth options",
      "Top-up contributions",
      "Tax-efficient planning",
    ],
  },
  {
    name: "Family Legacy",
    tag: "For Your Family",
    icon: HeartHandshake,
    description:
      "Protect your loved ones while creating a retirement income you can depend on.",
    features: [
      "Spouse protection",
      "Nominee benefits",
      "Income continuation options",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Financial Protection",
    description:
      "Create a dependable financial safety net for your later years.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description:
      "Give your savings time and structure to grow toward your goals.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Planning",
    description:
      "Choose contribution and income options that fit your lifestyle.",
  },
  {
    icon: Users,
    title: "Family First",
    description:
      "Build protection and benefits around the people who matter.",
  },
];

const faqs = [
  {
    question: "When should I start planning for retirement?",
    answer:
      "The earlier you start, the more time your savings have to grow. Starting early can make it easier to build a meaningful retirement corpus with smaller regular contributions.",
  },
  {
    question: "Can I increase my contribution later?",
    answer:
      "Yes. Many retirement plans allow additional contributions or top-ups as your income grows. Exact options depend on the plan selected.",
  },
  {
    question: "How does pension income work?",
    answer:
      "At retirement, your accumulated corpus can generally be used to create a regular income stream, subject to the terms and options available under your chosen policy.",
  },
  {
    question: "Is my family protected if something happens to me?",
    answer:
      "Depending on the policy, death benefits or nominee benefits can help provide financial protection to your family.",
  },
];

function Button({ children, outline = false }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1 ${
        outline
          ? "border border-white/20 bg-white text-[#123f32] hover:bg-[#d6ef7d]"
          : "bg-[#d6ef7d] text-[#123f32] hover:bg-[#c8e568]"
      }`}
    >
      {children}
      <ArrowRight size={17} />
    </button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#10231f]">
      {/* NAVBAR */}
      {/* <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#123f32] text-[#d6ef7d]">
              <PiggyBank size={21} />
            </span>

            <span className="text-xl font-black tracking-tight">
              Nest<span className="text-[#3f7b62]">Sure</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#53645e] md:flex">
            <a href="#plans" className="hover:text-[#123f32]">
              Plans
            </a>

            <a href="#benefits" className="hover:text-[#123f32]">
              Benefits
            </a>

            <a href="#how" className="hover:text-[#123f32]">
              How It Works
            </a>

            <a href="#faq" className="hover:text-[#123f32]">
              FAQs
            </a>
          </div>

          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          <button className="md:hidden">
            <Menu size={25} />
          </button>
        </div>
      </nav> */}

      {/* HERO */}
      <section className="overflow-hidden bg-[#f7f8f3]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9d6c9] bg-white px-4 py-2 text-xs font-bold text-[#316653]">
              <Sparkles size={14} />
              Retirement planning, made simpler
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Your future deserves a{" "}
              <span className="text-[#3f7b62]">steady plan.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#66756f]">
              Build a retirement you can look forward to with flexible pension
              insurance, long-term savings and protection for the people you
              love.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button>Explore Plans</Button>

              <Button outline>Talk to an Expert</Button>
            </div>

            <div className="mt-9 flex flex-wrap gap-6 text-sm font-semibold text-[#50645d]">
              <span className="flex items-center gap-2">
                <BadgeCheck size={18} className="text-[#3f7b62]" />
                Transparent Plans
              </span>

              <span className="flex items-center gap-2">
                <LockKeyhole size={18} className="text-[#3f7b62]" />
                Secure by Design
              </span>
            </div>
          </div>

          {/* RETIREMENT CARD */}
          <div className="relative">
            <div className="mx-auto max-w-md rounded-[34px] bg-[#123f32] p-7 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">
                    Your Retirement Goal
                  </p>

                  <p className="mt-1 text-3xl font-black">₹1.20 Cr</p>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                  <BarChart3 />
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white/10 p-5">
                <div className="mb-3 flex justify-between text-xs text-white/60">
                  <span>Progress</span>
                  <span>68%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[68%] rounded-full bg-[#d6ef7d]" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-white/50">
                      Monthly Saving
                    </p>
                    <p className="mt-1 text-lg font-bold">₹12,000</p>
                  </div>

                  <div>
                    <p className="text-xs text-white/50">Target Age</p>
                    <p className="mt-1 text-lg font-bold">60 Years</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#d6ef7d] p-4 text-[#123f32]">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/60">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-sm font-black">
                    Plan With Confidence
                  </p>

                  <p className="text-xs opacity-70">
                    Your goals, your pace, your future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        id="benefits"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
            Why Plan Ahead
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            More than a pension. A plan for the life you want.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-black/5 bg-[#f7f8f3] p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#3f7b62] shadow-sm">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-[#66756f]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PLANS */}
      <section
        id="plans"
        className="bg-[#123f32] px-5 py-20 text-white lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6ef7d]">
              Plans Built Around You
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              Choose the retirement journey that fits.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.name}
                  className={`rounded-[28px] p-7 ${
                    index === 0
                      ? "bg-white text-[#123f32]"
                      : "border border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${
                        index === 0
                          ? "bg-[#e7f4ed]"
                          : "bg-white/10"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-black ${
                        index === 0
                          ? "bg-[#d6ef7d]"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      {plan.tag}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black">
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-3 leading-7 ${
                      index === 0
                        ? "text-[#66756f]"
                        : "text-white/60"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="my-7 space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-2 text-sm font-semibold"
                      >
                        <Check
                          size={17}
                          className="mt-0.5 text-[#72a88e]"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full rounded-full py-3.5 text-sm font-bold ${
                      index === 0
                        ? "bg-[#123f32] text-white"
                        : "bg-[#d6ef7d] text-[#123f32]"
                    }`}
                  >
                    View Plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
            Simple By Design
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            From today’s savings to tomorrow’s freedom.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#66756f]">
            A clear process helps you make confident decisions without getting
            lost in financial jargon.
          </p>

          <div className="mt-9 space-y-7">
            {[
              [
                "01",
                "Set Your Goal",
                "Tell us when you want to retire and the lifestyle you want to support.",
              ],
              [
                "02",
                "Choose Your Plan",
                "Compare contribution, protection and income options that fit your needs.",
              ],
              [
                "03",
                "Grow With Confidence",
                "Keep contributing and review your plan as your life and income evolve.",
              ],
            ].map(([number, title, description]) => (
              <div key={number} className="flex gap-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#123f32] text-sm font-black text-[#d6ef7d]">
                  {number}
                </div>

                <div>
                  <h3 className="font-black">{title}</h3>

                  <p className="mt-1 leading-7 text-[#66756f]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GRAPH CARD */}
        <div className="rounded-[34px] bg-[#e7f4ed] p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#3f7b62]">
              <BarChart3 />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#6d8179]">
                Retirement Snapshot
              </p>

              <h3 className="font-black">
                A clearer view of your future
              </h3>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6">
            <div className="flex justify-between">
              <span className="text-sm text-[#718079]">
                Projected Corpus
              </span>

              <span className="font-black text-[#3f7b62]">
                ₹1.20 Cr
              </span>
            </div>

            <div className="mt-6 flex h-40 items-end gap-3">
              {[35, 45, 52, 63, 75, 86, 100].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-lg bg-[#3f7b62]/20"
                  style={{ height: `${height}%` }}
                >
                  <div
                    className="h-full rounded-t-lg bg-[#3f7b62]/70"
                    style={{
                      width: index === 6 ? "100%" : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between text-[11px] text-[#89958f]">
              <span>Today</span>
              <span>Age 60</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/70 p-5">
              <p className="text-xs text-[#718079]">
                Monthly Contribution
              </p>

              <p className="mt-1 text-xl font-black">
                ₹12,000
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 p-5">
              <p className="text-xs text-[#718079]">
                Target Income
              </p>

              <p className="mt-1 text-xl font-black">
                ₹48,500
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="bg-[#f7f8f3] px-5 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
              Questions, Answered
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Retirement planning, without the confusion.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/10 rounded-3xl border border-black/5 bg-white px-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black">
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={19}
                    className="transition group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 pr-8 leading-7 text-[#66756f]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[34px] bg-[#d6ef7d] px-7 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#42634e]">
              Start Today
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-[#123f32] sm:text-5xl">
              Give your future self something to thank you for.
            </h2>
          </div>

          <Button>Build My Plan</Button>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="border-t border-black/5 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#66756f] md:flex-row md:items-center md:justify-between">
          <div className="font-black text-[#123f32]">
            © 2026 NestSure
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-[#123f32]">
              Privacy
            </a>

            <a href="#" className="hover:text-[#123f32]">
              Terms
            </a>

            <a href="#" className="hover:text-[#123f32]">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <CircleHelp size={16} />
            Need help? Talk to an expert
          </div>
        </div>
      </footer> */}
    </main>
  );
}