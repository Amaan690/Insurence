"use client";

export default function ULIPPlans() {
  const plans = [
    {
      title: "Wealth Creation Plan",
      description:
        "Grow your wealth over the long term while enjoying life insurance protection.",
      features: ["Market-linked returns", "Life insurance cover", "Flexible investment"],
    },
    {
      title: "Child Future Plan",
      description:
        "Secure your child's future with a combination of investment and insurance benefits.",
      features: ["Education planning", "Long-term savings", "Life protection"],
    },
    {
      title: "Retirement Plan",
      description:
        "Build a retirement corpus through disciplined and market-linked investments.",
      features: ["Retirement savings", "Market-linked growth", "Financial security"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-200">
              Insurance & Investment
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              ULIP Plans
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100 md:text-xl">
              Secure your family's future while growing your wealth with
              market-linked Unit Linked Insurance Plans.
            </p>

            <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50">
              Explore Plans
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Choose the Right ULIP Plan
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            ULIPs combine life insurance protection with investment
            opportunities. Choose a plan based on your financial goals,
            investment horizon, and risk preference.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-700">
                ₹
              </div>

              <h3 className="text-xl font-bold">{plan.title}</h3>

              <p className="mt-3 leading-7 text-gray-600">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800">
                View Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Plan Your Financial Future Today
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Explore ULIP options designed to help you achieve your long-term
          financial goals with insurance protection.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700">
          Get Started
        </button>
      </section>
    </main>
  );
}