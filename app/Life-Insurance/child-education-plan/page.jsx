"use client";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const plans = [
  {
    icon: GraduationCap,
    title: "Education Builder",
    description:
      "Build a dedicated education fund for your child's future studies.",
    features: [
      "Flexible premium options",
      "Education milestone planning",
      "Life protection included",
    ],
    popular: true,
  },
  {
    icon: TrendingUp,
    title: "Future Growth",
    description:
      "Grow your savings over time while staying focused on long-term education goals.",
    features: [
      "Long-term growth options",
      "Additional contribution options",
      "Goal-based planning",
    ],
    popular: false,
  },
  {
    icon: HeartHandshake,
    title: "Child Secure",
    description:
      "Help protect your child's education journey even when life takes an unexpected turn.",
    features: [
      "Child education protection",
      "Nominee benefits",
      "Financial security options",
    ],
    popular: false,
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Education Focused",
    description:
      "Create a dedicated financial plan specifically for your child's education.",
  },
  {
    icon: ShieldCheck,
    title: "Future Protection",
    description:
      "Keep your child's education goals protected against unexpected situations.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description:
      "Give your education savings the time and structure needed to grow.",
  },
  {
    icon: Target,
    title: "Goal Based",
    description:
      "Plan around important milestones such as college, university and higher studies.",
  },
];

const milestones = [
  {
    age: "05",
    title: "Start Early",
    text: "Begin building a dedicated education fund while your child is young.",
  },
  {
    age: "12",
    title: "School Years",
    text: "Review your savings as education expenses and goals become clearer.",
  },
  {
    age: "18",
    title: "College Begins",
    text: "Use your accumulated financial plan to support higher education.",
  },
  {
    age: "21+",
    title: "Higher Studies",
    text: "Continue supporting ambitious education and career goals.",
  },
];

const faqs = [
  {
    question: "When should I start a child education plan?",
    answer:
      "Starting early gives your savings more time to grow and can make the required regular contribution easier to manage.",
  },
  {
    question: "Can I increase my contribution later?",
    answer:
      "Depending on the plan, you may be able to make additional contributions as your income and financial situation change.",
  },
  {
    question: "What happens if something happens to the parent?",
    answer:
      "Some child education insurance plans provide protection or benefits designed to help keep the child's education goals financially supported.",
  },
  {
    question: "Can the plan be used for higher education?",
    answer:
      "Yes, a child education plan can be structured around future education milestones such as college, university and higher studies, depending on the selected policy.",
  },
];

function PrimaryButton({ children }) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6ef7d] px-6 py-3.5 text-sm font-bold text-[#123f32] transition hover:-translate-y-1 hover:bg-[#c8e568]">
      {children}
      <ArrowRight size={17} />
    </button>
  );
}

function SecondaryButton({ children }) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-full border border-[#123f32]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#123f32] transition hover:-translate-y-1 hover:bg-[#123f32] hover:text-white">
      {children}
      <ArrowRight size={17} />
    </button>
  );
}

export default function ChildEducationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10231f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7f8f3]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d6ef7d]/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#cde9dc]/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9d6c9] bg-white px-4 py-2 text-xs font-bold text-[#316653]">
              <Sparkles size={14} />
              Plan today. Empower tomorrow.
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Give your child&apos;s dreams a{" "}
              <span className="text-[#3f7b62]">financial head start.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#66756f]">
              Build a dedicated education fund with a child education
              insurance plan designed to help you prepare for tomorrow&apos;s
              school, college and higher education expenses.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton>Plan My Child&apos;s Future</PrimaryButton>
              <SecondaryButton>Talk to an Expert</SecondaryButton>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#50645d]">
              <span className="flex items-center gap-2">
                <BadgeCheck size={18} className="text-[#3f7b62]" />
                Goal-based planning
              </span>

              <span className="flex items-center gap-2">
                <LockKeyhole size={18} className="text-[#3f7b62]" />
                Financial protection
              </span>
            </div>
          </div>

          {/* EDUCATION CARD */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[36px] bg-[#123f32] p-7 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">
                    Education Goal
                  </p>

                  <h2 className="mt-1 text-3xl font-black">
                    ₹35 Lakh
                  </h2>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#d6ef7d]">
                  <GraduationCap size={25} />
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">
                      Education Goal
                    </p>

                    <p className="mt-1 font-bold">
                      Higher Education
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-white/50">
                      Target Age
                    </p>

                    <p className="mt-1 font-bold">
                      18 Years
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-xs text-white/50">
                    <span>Plan Progress</span>
                    <span>72%</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-[#d6ef7d]" />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-white/45">
                    Monthly Plan
                  </p>

                  <p className="mt-1 text-lg font-black">
                    ₹8,500
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-white/45">
                    Goal Year
                  </p>

                  <p className="mt-1 text-lg font-black">
                    2042
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#d6ef7d] p-4 text-[#123f32]">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/60">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-sm font-black">
                    Protect Their Dreams
                  </p>

                  <p className="text-xs opacity-70">
                    Prepare today for tomorrow&apos;s opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-[#b9d6c9] bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#e7f4ed]">
                  <Award size={19} className="text-[#3f7b62]" />
                </div>

                <div>
                  <p className="text-xs text-[#718079]">
                    Future Milestone
                  </p>

                  <p className="font-black">
                    University Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-[#e7f4ed] p-7">
            <BookOpen className="text-[#3f7b62]" size={25} />

            <p className="mt-5 text-3xl font-black">
              01
            </p>

            <p className="mt-2 font-bold">
              Dedicated education goal
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7f8f3] p-7">
            <PiggyBank className="text-[#3f7b62]" size={25} />

            <p className="mt-5 text-3xl font-black">
              18+
            </p>

            <p className="mt-2 font-bold">
              Years of potential planning horizon
            </p>
          </div>

          <div className="rounded-3xl bg-[#123f32] p-7 text-white">
            <Target className="text-[#d6ef7d]" size={25} />

            <p className="mt-5 text-3xl font-black">
              100%
            </p>

            <p className="mt-2 font-bold text-white/80">
              Focus on your child&apos;s future
            </p>
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
            Why Choose A Child Education Plan
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Because their future shouldn&apos;t depend on chance.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#66756f]">
            A structured financial plan can help you prepare for the rising
            cost of education while protecting the dreams you have for your
            child.
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
      <section
        id="plans"
        className="bg-[#123f32] px-5 py-20 text-white lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6ef7d]">
            Choose Your Plan
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            A plan for every kind of education dream.
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => {
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

      {/* MILESTONES */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
              Their Journey
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Plan around the milestones that matter.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#66756f]">
              From their first classroom to university, a long-term plan can
              help you stay financially prepared at every stage.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#e7f4ed] p-5">
              <Lightbulb
                size={24}
                className="text-[#3f7b62]"
              />

              <p className="text-sm font-bold text-[#315b4b]">
                Start early. Review regularly. Stay prepared.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-5 h-[calc(100%-40px)] w-px bg-[#c9ded4]" />

            <div className="space-y-7">
              {milestones.map((milestone) => (
                <div
                  key={milestone.age}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#123f32] text-sm font-black text-[#d6ef7d]">
                    {milestone.age}
                  </div>

                  <div className="flex-1 rounded-3xl border border-black/5 bg-[#f7f8f3] p-6">
                    <h3 className="text-xl font-black">
                      {milestone.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#66756f]">
                      {milestone.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROTECTION SECTION */}
      <section className="px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[36px] bg-[#e7f4ed] p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#3f7b62]">
              <HeartHandshake size={27} />
            </div>

            <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
              Protect What Matters
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Their education. Your peace of mind.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#66756f]">
              Life can be unpredictable. A child education insurance plan can
              help create an additional layer of financial protection around
              the education goals you have planned for your child.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Dedicated education savings",
                "Protection-focused planning",
                "Long-term financial discipline",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 font-bold text-[#315b4b]"
                >
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-white">
                    <Check size={15} />
                  </div>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[30px] bg-[#123f32] p-7 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/50">
                    Future Education Fund
                  </p>

                  <p className="mt-2 text-4xl font-black">
                    ₹35,00,000
                  </p>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                  <PiggyBank />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[11px] text-white/40">
                    Current Age
                  </p>

                  <p className="mt-1 font-black">
                    5
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[11px] text-white/40">
                    Target Age
                  </p>

                  <p className="mt-1 font-black">
                    18
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[11px] text-white/40">
                    Horizon
                  </p>

                  <p className="mt-1 font-black">
                    13 Yrs
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#d6ef7d] p-5 text-[#123f32]">
                <div className="flex items-center gap-3">
                  <Star size={20} fill="currentColor" />

                  <div>
                    <p className="font-black">
                      Goal Ready
                    </p>

                    <p className="text-xs opacity-70">
                      Stay on track toward their education.
                    </p>
                  </div>
                </div>
              </div>
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
              Questions parents usually ask.
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

                  <span className="text-[#3f7b62] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl pr-8 leading-7 text-[#66756f]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[36px] bg-[#d6ef7d] px-7 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#42634e]">
              Start Planning Today
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-[#123f32] sm:text-5xl">
              Their dreams are growing. So should their financial plan.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#42634e]">
              Start building a financial foundation for your child&apos;s
              education and future opportunities.
            </p>
          </div>

          <PrimaryButton>
            Build Education Plan
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
}