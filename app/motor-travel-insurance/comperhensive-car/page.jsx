"use client";

import {
  ArrowRight,
  BadgeCheck,
  Car,
  Check,
  ChevronDown,
  CircleAlert,
  FileCheck2,
  HeartHandshake,
  KeyRound,
  LockKeyhole,
  MapPin,
  PhoneCall,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

const coverage = [
  {
    icon: ShieldCheck,
    title: "Accidental Damage",
    description:
      "Get protection for repair costs when your insured car is damaged in an accident.",
  },
  {
    icon: Car,
    title: "Theft Protection",
    description:
      "Financial protection if your insured vehicle is stolen, subject to policy terms.",
  },
  {
    icon: Zap,
    title: "Natural Calamities",
    description:
      "Protection against eligible damage caused by events such as floods, storms and earthquakes.",
  },
  {
    icon: HeartHandshake,
    title: "Third-Party Cover",
    description:
      "Protection against eligible third-party liabilities arising from an insured incident.",
  },
];

const features = [
  "Own-damage protection",
  "Third-party liability cover",
  "Theft protection",
  "Fire and natural calamity cover",
  "Cashless repair options",
  "24×7 assistance",
];

const addOns = [
  {
    icon: Wrench,
    title: "Zero Depreciation",
    description:
      "Reduce depreciation deductions on eligible parts during a covered claim, subject to policy conditions.",
  },
  {
    icon: KeyRound,
    title: "Roadside Assistance",
    description:
      "Get support for common roadside emergencies such as breakdowns, flat tyres and towing.",
  },
  {
    icon: Shield,
    title: "Engine Protection",
    description:
      "Additional protection for eligible engine-related damages, subject to selected cover terms.",
  },
  {
    icon: Car,
    title: "Return to Invoice",
    description:
      "An optional benefit that can help bridge the gap between claim settlement and invoice value in eligible cases.",
  },
];

const faqs = [
  {
    question: "What is comprehensive car insurance?",
    answer:
      "Comprehensive car insurance generally combines own-damage protection with third-party liability cover. It can protect against eligible losses caused by accidents, theft, fire and certain natural or man-made events, depending on the policy.",
  },
  {
    question: "Does comprehensive insurance cover full damage?",
    answer:
      "It can cover eligible repair or replacement costs after a covered incident, but 'full damage' does not mean every possible loss is automatically covered. Deductibles, exclusions, depreciation and policy limits may apply.",
  },
  {
    question: "Is zero depreciation included?",
    answer:
      "Zero depreciation is commonly available as an optional add-on rather than being automatically included. Availability and conditions depend on the insurer and policy.",
  },
  {
    question: "Does it cover theft?",
    answer:
      "Comprehensive policies generally provide protection for vehicle theft, subject to the policy's terms, conditions and claim requirements.",
  },
  {
    question: "Can I add roadside assistance?",
    answer:
      "Roadside assistance may be available as an optional add-on depending on the insurer and plan you select.",
  },
];

export default function ComprehensiveCarInsurance() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10231f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7f8f3]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d6ef7d]/40 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#dcefe6] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9d6c9] bg-white px-4 py-2 text-xs font-bold text-[#316653]">
              <Sparkles size={14} />
              Comprehensive car protection
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Drive with confidence.{" "}
              <span className="text-[#3f7b62]">
                We&apos;ve got your car covered.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#66756f]">
              Protect your car against accidents, theft, fire, natural
              calamities and third-party liabilities with comprehensive motor
              insurance designed for everyday driving.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#123f32] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1d5948]">
                Get Car Insurance
                <ArrowRight size={17} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-full border border-[#123f32]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#123f32] transition hover:-translate-y-1 hover:bg-[#d6ef7d]">
                Calculate Premium
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#50645d]">
              <span className="flex items-center gap-2">
                <BadgeCheck
                  size={18}
                  className="text-[#3f7b62]"
                />
                Comprehensive cover
              </span>

              <span className="flex items-center gap-2">
                <LockKeyhole
                  size={18}
                  className="text-[#3f7b62]"
                />
                Hassle-free claims
              </span>
            </div>
          </div>

          {/* CAR INSURANCE CARD */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[36px] bg-[#123f32] p-7 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">
                    Comprehensive Car Cover
                  </p>

                  <h2 className="mt-1 text-3xl font-black">
                    ₹8,75,000
                  </h2>

                  <p className="mt-1 text-xs text-white/45">
                    Insured Declared Value
                  </p>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#d6ef7d]">
                  <Car size={25} />
                </div>
              </div>

              {/* CAR VISUAL */}
              <div className="relative mt-8 overflow-hidden rounded-3xl bg-white/10 p-6">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

                <div className="relative mx-auto mt-8 h-16 w-[85%]">
                  <div className="absolute bottom-3 left-[5%] h-10 w-[90%] rounded-[22px_28px_10px_10px] bg-[#d6ef7d]" />

                  <div className="absolute bottom-11 left-[28%] h-9 w-[43%] rounded-t-[25px] bg-[#d6ef7d]" />

                  <div className="absolute bottom-[43px] left-[34%] h-6 w-[14%] rounded-tl-[18px] bg-[#123f32]" />

                  <div className="absolute bottom-[43px] left-[50%] h-6 w-[14%] rounded-tr-[18px] bg-[#123f32]" />

                  <div className="absolute bottom-0 left-[17%] h-8 w-8 rounded-full border-[6px] border-[#10231f] bg-[#66756f]" />

                  <div className="absolute bottom-0 right-[17%] h-8 w-8 rounded-full border-[6px] border-[#10231f] bg-[#66756f]" />
                </div>

                <div className="mt-7 flex items-center justify-between text-xs text-white/50">
                  <span>Comprehensive Protection</span>
                  <span className="font-bold text-[#d6ef7d]">
                    Active
                  </span>
                </div>
              </div>

              {/* COVERAGE */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[11px] text-white/40">
                    Own Damage
                  </p>

                  <p className="mt-1 font-black">
                    Covered
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[11px] text-white/40">
                    Third Party
                  </p>

                  <p className="mt-1 font-black">
                    Covered
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#d6ef7d] p-4 text-[#123f32]">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/60">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-sm font-black">
                    All-Round Protection
                  </p>

                  <p className="text-xs opacity-70">
                    Protection for your journeys.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-[#b9d6c9] bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#e7f4ed]">
                  <FileCheck2
                    size={19}
                    className="text-[#3f7b62]"
                  />
                </div>

                <div>
                  <p className="text-xs text-[#718079]">
                    Claims support
                  </p>

                  <p className="font-black">
                    24×7 Assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK COVERAGE */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-[#e7f4ed] p-7">
            <ShieldCheck
              size={25}
              className="text-[#3f7b62]"
            />

            <p className="mt-5 text-3xl font-black">
              Own Damage
            </p>

            <p className="mt-2 font-bold">
              Protection for eligible damage to your insured car.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7f8f3] p-7">
            <Car
              size={25}
              className="text-[#3f7b62]"
            />

            <p className="mt-5 text-3xl font-black">
              Theft
            </p>

            <p className="mt-2 font-bold">
              Financial protection for eligible vehicle theft claims.
            </p>
          </div>

          <div className="rounded-3xl bg-[#123f32] p-7 text-white">
            <HeartHandshake
              size={25}
              className="text-[#d6ef7d]"
            />

            <p className="mt-5 text-3xl font-black">
              Third Party
            </p>

            <p className="mt-2 font-bold text-white/75">
              Liability protection subject to applicable policy terms.
            </p>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
            What&apos;s Covered
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Protection for the moments you don&apos;t plan for.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#66756f]">
            Comprehensive insurance can provide broad protection for your
            vehicle and help you manage the financial impact of covered
            incidents.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {coverage.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-black/5 bg-[#f7f8f3] p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#3f7b62] shadow-sm">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#66756f]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FULL DAMAGE SECTION */}
      <section className="bg-[#123f32] px-5 py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6ef7d]">
              Full Damage Protection
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              When the unexpected happens, your policy should be ready.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              From a minor accident to major damage, comprehensive car
              insurance can help cover eligible repair or loss costs according
              to your policy terms.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-[#d6ef7d] text-[#123f32]">
                    <Check size={15} />
                  </div>

                  <span className="text-sm font-bold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CLAIM CARD */}
          <div className="rounded-[34px] bg-white p-8 text-[#123f32] shadow-2xl lg:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#718079]">
                  Sample Claim Journey
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  From incident to repair
                </h3>
              </div>

              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e7f4ed] text-[#3f7b62]">
                <FileCheck2 size={23} />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {[
                [
                  "01",
                  "Report",
                  "Inform the insurer and register the claim.",
                ],
                [
                  "02",
                  "Assessment",
                  "The vehicle damage is assessed according to the claim process.",
                ],
                [
                  "03",
                  "Approval",
                  "The eligible claim is processed according to policy terms.",
                ],
                [
                  "04",
                  "Repair",
                  "Get your car repaired through the applicable repair network.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex gap-4"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#123f32] text-xs font-black text-[#d6ef7d]">
                    {number}
                  </div>

                  <div>
                    <h4 className="font-black">
                      {title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#66756f]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-[#e7f4ed] p-4 text-sm font-bold text-[#315b4b]">
              <div className="flex items-center gap-2">
                <CircleAlert size={17} />
                Always check your policy wording, exclusions and deductibles.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADD ONS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
            Optional Add-Ons
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Upgrade your protection.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#66756f]">
            Add extra protection based on your vehicle, driving habits and
            personal requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {addOns.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e7f4ed] text-[#3f7b62]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#66756f]">
                  {item.description}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#3f7b62]">
                  Learn more
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* CASHLESS REPAIR */}
      <section className="px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[34px] bg-[#e7f4ed] p-8 lg:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#3f7b62]">
              <Wrench size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight">
              Get your car back on the road.
            </h2>

            <p className="mt-4 leading-7 text-[#66756f]">
              Depending on the insurer and network available, eligible claims
              may be handled through cashless repair facilities.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Network repair support",
                "Claim assistance",
                "Repair coordination",
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

          <div className="rounded-[34px] bg-[#f7f8f3] p-8 lg:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#3f7b62] shadow-sm">
              <PhoneCall size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight">
              Help when you need it.
            </h2>

            <p className="mt-4 leading-7 text-[#66756f]">
              Roadside and claims assistance can help make stressful situations
              easier to manage, subject to the services included in your
              selected plan.
            </p>

            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#123f32] px-5 py-3 text-sm font-bold text-white">
              <PhoneCall size={16} />
              Contact Assistance
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f8f3] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7b62]">
              FAQs
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Everything you need to know.
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
              Protect Every Journey
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-[#123f32] sm:text-5xl">
              Your car deserves more than basic protection.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#42634e]">
              Explore comprehensive coverage and choose protection that fits
              your car and your driving needs.
            </p>
          </div>

          <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#123f32] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#1d5948]">
            Get Protected
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
}