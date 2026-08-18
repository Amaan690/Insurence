"use client";

import {
  ShieldCheck,
  IndianRupee,
  Users,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";

export default function ReturnOfPremiumTerm() {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Hero Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Return of Premium Term Insurance
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Protection Today,
              <span className="block text-blue-600">
                Premiums Back Tomorrow
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Get life insurance protection during the policy term and receive
              eligible premiums back at the end of the policy term, subject to
              the policy terms and conditions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Get a Quote
                <ArrowRight size={18} />
              </button>

              <button className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">

              <h2 className="text-2xl font-bold text-slate-900">
                Why Choose Return of Premium?
              </h2>

              <div className="mt-8 space-y-6">

                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <ShieldCheck size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Life Protection
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Provide financial protection to your loved ones during
                      the policy term.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <IndianRupee size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Premium Return
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Eligible premiums may be returned at the end of the
                      policy term, as per the policy conditions.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <Users size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Family Security
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Help secure your family's financial future with life
                      cover.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <RefreshCcw size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Protection With Return
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Combine term insurance protection with a premium-return
                      feature.
                    </p>
                  </div>
                </div>

              </div>

              {/* Highlight */}
              <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                <p className="text-sm font-medium leading-6 text-blue-700">
                  Stay protected throughout the policy term while getting
                  eligible premiums back as per the policy terms.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <ShieldCheck size={24} />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Life Cover
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Financial protection for your family
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <IndianRupee size={24} />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Premium Return
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Eligible premiums returned as per policy terms
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <RefreshCcw size={24} />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Added Value
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Protection with a premium-return feature
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}