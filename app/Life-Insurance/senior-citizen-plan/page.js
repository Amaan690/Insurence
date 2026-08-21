"use client";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarDays,
  Check,
  ChevronDown,
  Heart,
  HeartHandshake,
  Home,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Users,
  WalletCards,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Financial Security",
    description:
      "Create a dependable financial cushion to support a comfortable and independent life.",
  },
  {
    icon: Stethoscope,
    title: "Health Support",
    description:
      "Plan for healthcare and medical expenses without putting unnecessary pressure on your family.",
  },
  {
    icon: Banknote,
    title: "Regular Income",
    description:
      "Build a predictable income stream to help manage everyday retirement expenses.",
  },
  {
    icon: HeartHandshake,
    title: "Family Protection",
    description:
      "Keep your family's financial responsibilities and future needs in mind while planning.",
  },
];

const plans = [
  {
    icon: WalletCards,
    title: "Secure Income",
    description:
      "A retirement-focused plan designed to provide a steady income during your later years.",
    features: [
      "Regular income options",
      "Flexible payout choices",
      "Retirement-focused planning",
    ],
    popular: true,
  },
  {
    icon: Stethoscope,
    title: "Health & Care",
    description:
      "Build additional financial support for healthcare and unexpected medical expenses.",
    features: [
      "Healthcare-focused savings",
      "Emergency financial support",
      "Flexible contribution options",
    ],
    popular: false,
  },
  {
    icon: Heart,
    title: "Family Secure",
    description:
      "Protect your loved ones while maintaining financial independence during retirement.",
    features: [
      "Family protection options",
      "Nominee benefits",
      "Legacy-focused planning",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What is a senior citizen insurance plan?",
    answer:
      "A senior citizen plan is designed to help older adults manage financial needs during retirement. Depending on the product, it may focus on regular income, healthcare expenses, protection or a combination of these.",
  },
  {
    question: "Can I get a plan after retirement?",
    answer:
      "Some products are specifically designed for people who are already retired. Eligibility, age limits and benefits vary between policies.",
  },
  {
    question: "Can I create a regular income after retirement?",
    answer:
      "Certain retirement and pension products can be structured to provide regular income. The exact income amount and payout frequency depend on the selected product and policy terms.",
  },
  {
    question: "Can my family receive benefits?",
    answer:
      "Depending on the policy, nominee or family benefits may be available. Always check the specific policy terms, exclusions and eligibility requirements.",
  },
];

export default function SeniorCitizenPlan() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10231f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7f8f3]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d6ef7d]/40 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#dcefe6] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          {/* HERO CONTENT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9d6c9] bg-white px-4 py-2 text-xs font-bold text-[#316653]">
              <Sparkles size={14} />
              Retirement security made simpler
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Enjoy the years you worked{" "}
              <span className="text-[#3f7b62]">
                so hard for.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#66756f]">
              Plan for a more secure and comfortable retirement with financial
              solutions designed around income, healthcare and the people who
              matter most.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#123f32] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1d5948]">
                Explore Senior Plans
                <ArrowRight size={17} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-full border border-[#123f32]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#123f32] transition hover:-translate-y-1 hover:bg-[#d6ef7d]">
                Talk to an Expert
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#50645d]">
              <span className="flex items-center gap-2">
                <BadgeCheck
                  size={18}
                  className="text-[#3f7b62]"
                />
                Simple planning
              </span>

              <span className="flex items-center gap-2">
                <LockKeyhole
                  size={18}
                  className="text-[#3f7b62]"
                />
                Protection focused
              </span>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[36px] bg-[#123f32] p-7 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">
                    Retirement Income
                  </p>

                  <h2 className="mt-1 text-3xl font-black">
                    ₹48,500
                    <span className="text-sm font-medium text-white/50">
                      {" "}
                      / month
                    </span>
                  </h2>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#d6ef7d]">
                  <Banknote size={24} />
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/45">
                      Retirement Corpus
                    </p>

                    <p className="mt-1 text-xl font-black">
                      ₹1.20 Cr
                    </p>
                  </div>

                  <div className="rounded-full bg-[#d6ef7d] px-3 py-1 text-xs font-black text-[#123f32]">
                    Stable
                  </div>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[76%] rounded-full bg-[#d6ef7d]" />
                </div>

                <div className="mt-3 flex justify-between text-xs text-white/45">
                  <span>Planning progress</span>
                  <span>76%</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[11px] text-white/40">
                    Monthly Needs
                  </p>

                  <p className="mt-1 font-black">
                    ₹35,000
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[11px] text-white/40">
                    Emergency Fund
                  </p>

                  <p className="mt-1 font-black">
                    ₹8 Lakh
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#d6ef7d] p-4 text-[#123f32]">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/60">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-sm font-black">
                    Plan With Confidence
                  </p>

                  <p className="text-xs opacity-70">
                    Your retirement. Your independence.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-[#b9d6c9] bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#e7f4ed]">
                  <Heart size={18} className="text-[#3f7b62]" />
                </div>

                <div>
                  <p className="text-xs text-[#718079]">
                    Peace of mind
                  </p>

                  <p className="font-black">
                    Family protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-[#e7f4ed] p-7">
            <WalletCards
              size={25}
              className="text-[#3f7b62]"
            />

            <p className="mt-5 text-3xl font-black">
              ₹48.5K
            </p>

            <p className="mt-2 font-bold">
              Example monthly income
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7f8f3] p-7">
            <Stethoscope
              size={25}
              className="text-[#3f7b62]"
            />

            <p className="mt-5 text-3xl font-black">
              360°
            </p>

            <p className="mt-2 font-bold">
              Financial & healthcare planning
            </p>
          </div>

          <div className="rounded-3xl bg-[#123f32] p-7 text-white">
            <HeartHandshake
              size={25}
              className="text-[#d6ef7d]"
            />

            <p className="mt-5 text-3xl font-black">
              Family
            </p>

            <p className="mt-2 font-bold text-white/75">
              Protection-focused planning
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
            Why Senior Planning Matters
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Retirement should feel like freedom, not financial stress.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#66756f]">
            A well-designed senior citizen financial plan can help you prepare
            for regular expenses, healthcare needs and unexpected situations.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-black/5 bg-[#f7f8f3] p-7 transition hover:-translate-y-1 hover:shadow-xl"
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
      <section className="bg-[#123f32] px-5 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6ef7d]">
            Senior Citizen Plans
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Choose the support that fits your retirement.
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.title}
                  className={`relative rounded-[30px] p-7 ${
                    plan.popular
                      ? "bg-white text-[#123f32]"
                      : "border border-white/10 bg-white/5"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute right-6 top-6 rounded-full bg-[#d6ef7d] px-3 py-1 text-[10px] font-black uppercase">
                      Recommended
                    </div>
                  )}

                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${
                      plan.popular
                        ? "bg-[#e7f4ed]"
                        : "bg-white/10"
                    }`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black">
                    {plan.title}
                  </h3>

                  <p
                    className={`mt-3 leading-7 ${
                      plan.popular
                        ? "text-[#66756f]"
                        : "text-white/60"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="my-7 space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm font-semibold"
                      >
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-[#72a88e]"
                        />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full rounded-full py-3.5 text-sm font-bold transition ${
                      plan.popular
                        ? "bg-[#123f32] text-white hover:bg-[#1e5947]"
                        : "bg-[#d6ef7d] text-[#123f32] hover:bg-[#c8e568]"
                    }`}
                  >
                    Explore Plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RETIREMENT LIFE SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
              Your Retirement, Your Way
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Plan for the things you want to enjoy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#66756f]">
              Retirement is more than stopping work. It is about having the
              financial freedom to spend time with family, travel, take care of
              your health and enjoy everyday life.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [Home, "Comfortable living"],
                [Users, "Family time"],
                [Heart, "Health & wellness"],
                [CalendarDays, "Travel & hobbies"],
              ].map(([Icon, title]) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#f7f8f3] p-4"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#3f7b62]">
                    <Icon size={19} />
                  </div>

                  <span className="text-sm font-bold">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RETIREMENT DASHBOARD */}
          <div className="rounded-[34px] bg-[#e7f4ed] p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#3f7b62]">
                <PiggyBank size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#6d8179]">
                  Retirement Snapshot
                </p>

                <h3 className="font-black">
                  Monthly financial plan
                </h3>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-[#718079]">
                    Monthly Income
                  </p>

                  <p className="mt-1 text-3xl font-black text-[#123f32]">
                    ₹48,500
                  </p>
                </div>

                <span className="rounded-full bg-[#e7f4ed] px-3 py-1 text-xs font-black text-[#3f7b62]">
                  Planned
                </span>
              </div>

              <div className="mt-8 space-y-5">
                {[
                  ["Household", "₹18,000", "38%"],
                  ["Healthcare", "₹8,500", "18%"],
                  ["Lifestyle", "₹12,000", "25%"],
                  ["Savings", "₹10,000", "19%"],
                ].map(([label, amount, percent]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-xs font-semibold">
                      <span>{label}</span>

                      <span className="text-[#66756f]">
                        {amount}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[#e7f4ed]">
                      <div
                        className="h-full rounded-full bg-[#3f7b62]"
                        style={{ width: percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#123f32] p-5 text-white">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                <BadgeCheck
                  size={19}
                  className="text-[#d6ef7d]"
                />
              </div>

              <div>
                <p className="text-sm font-black">
                  Financially Prepared
                </p>

                <p className="text-xs text-white/50">
                  Keep your retirement goals on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH + FAMILY */}
      <section className="px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[34px] bg-[#f7f8f3] p-8 lg:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#3f7b62] shadow-sm">
              <Stethoscope size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight">
              Prepare for healthcare expenses.
            </h2>

            <p className="mt-4 leading-7 text-[#66756f]">
              Healthcare can become an important part of retirement planning.
              Keeping a separate financial cushion can help you manage
              unexpected medical needs.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Medical expense planning",
                "Emergency fund preparation",
                "Healthcare-focused financial support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold"
                >
                  <Check
                    size={17}
                    className="text-[#3f7b62]"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-[#123f32] p-8 text-white lg:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-[#d6ef7d]">
              <HeartHandshake size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight">
              Keep your family protected.
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              A thoughtful retirement plan can also consider your spouse,
              children and other family responsibilities.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Nominee-focused planning",
                "Family financial protection",
                "Legacy planning options",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold"
                >
                  <Check
                    size={17}
                    className="text-[#d6ef7d]"
                  />

                  {item}
                </div>
              ))}
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
              FAQs
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Questions about senior citizen plans.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/10 rounded-3xl border border-black/5 bg-white px-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-6"
              >
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
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[36px] bg-[#d6ef7d] px-7 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#42634e]">
              Plan Your Next Chapter
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-[#123f32] sm:text-5xl">
              A comfortable retirement starts with a thoughtful plan.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#42634e]">
              Build a retirement strategy around your income, healthcare,
              lifestyle and family needs.
            </p>
          </div>

          <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#123f32] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1d5948]">
            Start Planning
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
}