"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, ChevronDown, User, Menu, X, HeartPulse, HeartHandshake, 
  Car, Plane, Home, Briefcase, ArrowRight 
} from "lucide-react";

const megaMenuData = [
  {
    title: "Health Insurance",
    icon: HeartPulse,
    color: "text-rose-500",
    bg: "bg-rose-50",
    items: [
      {
        name: "Family Health Insurance",
        desc: "Covers spouse & children",
        link: "/health-insurance/health" 
      },
      {
        name: "Senior Citizen Health",
        desc: "Specialized for ages 60+",
        link: "/health-insurance/Senior-Citizen-Health"
      },
      {
        name: "Critical Illness Cover",
        desc: "Lump sum on diagnosis",
        link: "/health-insurance/Critical-Illness-Cover"
      },
      {
        name: "Arogya Sanjeevani",
        desc: "Standard affordable plan",
        link: "/health-insurance/Arogya-Sanjeevani"
      },
      {
        name: "1 Cr Super Top-up",
        desc: "Expand existing coverage",
        link: "/health-insurance/Super-Top-Up"
      }
    ],
    link: "/health"
  },

  {
    title: "Life Insurance",
    icon: HeartHandshake,
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
    items: [
      {
        name: "Term Life Insurance",
        desc: "High cover, low premium",
        link: "/Life-Insurance/Term-Life-Insurance"
      },
      {
        name: "Return of Premium Term",
        desc: "Get premiums back if you survive",
        link: "/Life-Insurance/Return-of-Premium-Term"
      },
      {
        name: "ULIP Plans",
        desc: "Investment + Insurance",
        link: "/Life-Insurance/ULIP-Plans"
      },
      {
        name: "Retirement & Pension",
        desc: "Secure your golden years",
        link: "/Life-Insurance/retirement-pension"
      },
      {
        name: "Child Education Plans",
        desc: "Fund future milestones",
        link: "/Life-Insurance/child-education-plan"
      },
      {
        name: "Senior Citizen Plans",
        desc: "Tailored for age 60+",
        link: "/Life-Insurance/senior-citizen-plan"
      }
    ],
    link: "/life"
  },

  {
    title: "Motor & Travel",
    icon: Car,
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50",
    items: [
      {
        name: "Comprehensive Car",
        desc: "Full damage protection",
        link: "/motor-travel-insurance/comperhensive-car"
      },
      {
        name: "Pay As You Drive",
        desc: "Premium based on usage",
        link: "/motor/pay-as-you-drive"
      },
      {
        name: "Two Wheeler Cover",
        desc: "Starting at ₹499/year",
        link: "/motor/two-wheeler"
      },
      {
        name: "Commercial Vehicle",
        desc: "For trucks & cabs",
        link: "/motor/commercial"
      },
      {
        name: "Travel Insurance",
        desc: "Schengen & USA/Canada specific",
        link: "/travel"
      }
    ],
    link: "/motor"
  },

  {
    title: "Business & Other",
    icon: Briefcase,
    color: "text-purple-500",
    bg: "bg-purple-50",
    items: [
      {
        name: "Group Health (SME)",
        desc: "Cover your employees",
        link: "/business/group-health"
      },
      {
        name: "Home Insurance",
        desc: "Protect against fire & theft",
        link: "/business/home"
      },
      {
        name: "Cyber Insurance",
        desc: "Protection against fraud",
        link: "/business/cyber"
      },
      {
        name: "Doctor's Indemnity",
        desc: "Professional liability",
        link: "/business/doctor-indemnity"
      },
      {
        name: "Marine & Transit",
        desc: "Cargo protection",
        link: "/business/marine"
      }
    ],
    link: "/business"
  }
];

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


   return (
  <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-xl shadow-sm">

    {/* ================= HEADER CONTAINER ================= */}
    <div className="container mx-auto h-20 px-4 md:px-6 flex items-center justify-between relative">

      {/* ================= LOGO ================= */}
      <Link
        href="/"
        className="flex items-center gap-3 group"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="
            relative w-11 h-11 rounded-2xl
            bg-gradient-to-br from-brand-blue-600 via-blue-600 to-brand-orange-500
            flex items-center justify-center text-white
            shadow-lg shadow-blue-500/20
            transition-all duration-500
            group-hover:scale-110
            group-hover:-rotate-3
            group-hover:shadow-xl
            group-hover:shadow-orange-500/30
          "
        >
          <Shield className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />

          <span
            className="
              absolute inset-0 rounded-2xl
              bg-white/20
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
            "
          />
        </div>

        <span
          className="
            text-xl md:text-2xl font-extrabold
            tracking-tight text-slate-900
            transition-all duration-300
            group-hover:tracking-normal
          "
        >
          OnSure
          <span className="text-brand-orange-500 transition-colors duration-300 group-hover:text-brand-blue-600">
            Karo
          </span>
        </span>
      </Link>


      {/* ================= DESKTOP NAVIGATION ================= */}
      <nav className="hidden lg:flex items-center gap-7 font-medium text-slate-600 h-full">

        {/* ================= INSURANCE PRODUCTS ================= */}
        <div
          className="h-full flex items-center group cursor-pointer relative"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >

          <div
            className={`
              relative flex items-center gap-1.5
              py-2
              transition-all duration-300
              ${
                isMegaMenuOpen
                  ? "text-brand-orange-500"
                  : "hover:text-brand-orange-500"
              }
            `}
          >
            Insurance Products

            <ChevronDown
              className={`
                w-4 h-4
                transition-all duration-300
                ${
                  isMegaMenuOpen
                    ? "rotate-180 text-brand-orange-500"
                    : "group-hover:translate-y-0.5"
                }
              `}
            />

            {/* Animated Underline */}
            <span
              className={`
                absolute left-0 -bottom-1 h-[2px]
                bg-gradient-to-r from-brand-blue-600 to-brand-orange-500
                transition-all duration-300
                ${
                  isMegaMenuOpen
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }
              `}
            />
          </div>


          {/* ================= MEGA MENU ================= */}
          <AnimatePresence>
            {isMegaMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 15,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                  fixed top-[80px] left-0 w-full
                  bg-white/95 backdrop-blur-2xl
                  border-b border-slate-200
                  shadow-2xl shadow-slate-900/10
                  overflow-hidden z-40
                "
              >

                {/* Decorative Background */}
                <div
                  className="
                    absolute -top-32 -right-32
                    w-[500px] h-[500px]
                    rounded-full
                    bg-gradient-to-bl
                    from-brand-orange-100/60
                    via-blue-100/30
                    to-transparent
                    blur-3xl
                    pointer-events-none
                  "
                />

                <div
                  className="
                    absolute -bottom-40 -left-40
                    w-[450px] h-[450px]
                    rounded-full
                    bg-blue-100/30
                    blur-3xl
                    pointer-events-none
                  "
                />


                <div className="container mx-auto px-4 md:px-6 py-10 relative z-10">

                  <div className="flex gap-12">

                    {/* ================= CATEGORY GRID ================= */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

                      {megaMenuData.map((category, idx) => (
                        <motion.div
                          key={idx}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: idx * 0.05,
                            duration: 0.3,
                          }}
                          className="group/cat"
                        >

                          {/* Category Header */}
                          <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">

                            <div
                              className={`
                                relative w-11 h-11
                                rounded-xl
                                ${category.bg}
                                ${category.color}
                                flex items-center justify-center
                                shadow-sm
                                transition-all duration-300
                                group-hover/cat:scale-110
                                group-hover/cat:-rotate-3
                                group-hover/cat:shadow-md
                              `}
                            >
                              <category.icon
                                className="
                                  w-5 h-5
                                  transition-transform duration-300
                                  group-hover/cat:scale-110
                                "
                              />
                            </div>

                            <h4
                              className="
                                font-bold text-slate-900 text-lg
                                transition-colors duration-300
                                group-hover/cat:text-brand-orange-500
                              "
                            >
                              {category.title}
                            </h4>

                          </div>


                          {/* Category Items */}
                          <ul className="space-y-2">

                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>

                                <Link
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="
                                    group/item block
                                    p-2.5 -mx-2.5
                                    rounded-xl
                                    transition-all duration-300
                                    hover:bg-gradient-to-r
                                    hover:from-blue-50
                                    hover:to-orange-50
                                    hover:translate-x-1
                                  "
                                >

                                  <div className="flex items-center justify-between">

                                    <div
                                      className="
                                        font-semibold text-sm
                                        text-slate-700
                                        transition-all duration-300
                                        group-hover/item:text-brand-orange-500
                                        group-hover/item:translate-x-0.5
                                      "
                                    >
                                      {item.name}
                                    </div>

                                    <ArrowRight
                                      className="
                                        w-4 h-4
                                        text-brand-orange-500
                                        opacity-0
                                        -translate-x-3
                                        transition-all duration-300
                                        group-hover/item:opacity-100
                                        group-hover/item:translate-x-0
                                      "
                                    />

                                  </div>

                                  <div
                                    className="
                                      text-xs text-slate-500
                                      mt-1 leading-relaxed
                                      transition-colors duration-300
                                      group-hover/item:text-slate-600
                                    "
                                  >
                                    {item.desc}
                                  </div>

                                </Link>

                              </li>
                            ))}

                          </ul>

                        </motion.div>
                      ))}

                    </div>


                    {/* ================= OFFER CARD ================= */}
                    <div
                      className="
                        w-[320px] shrink-0
                        border-l border-slate-200/70
                        pl-10
                        hidden xl:flex
                      "
                    >

                      <div
                        className="
                          group
                          relative overflow-hidden
                          flex-1 flex flex-col justify-between
                          rounded-3xl
                          p-8
                          text-white
                          bg-gradient-to-br
                          from-slate-950
                          via-slate-900
                          to-blue-950
                          shadow-xl
                          transition-all duration-500
                          hover:-translate-y-1
                          hover:shadow-2xl
                        "
                      >

                        {/* Orange Glow */}
                        <div
                          className="
                            absolute -top-20 -right-20
                            w-48 h-48
                            rounded-full
                            bg-brand-orange-500/30
                            blur-3xl
                            transition-transform duration-700
                            group-hover:scale-125
                          "
                        />

                        {/* Blue Glow */}
                        <div
                          className="
                            absolute -bottom-20 -left-20
                            w-44 h-44
                            rounded-full
                            bg-blue-500/20
                            blur-3xl
                            transition-transform duration-700
                            group-hover:scale-110
                          "
                        />


                        <div className="relative z-10">

                          {/* Badge */}
                          <div
                            className="
                              inline-flex items-center gap-2
                              px-3 py-1.5
                              rounded-full
                              bg-white/10
                              backdrop-blur-md
                              text-brand-orange-400
                              text-[10px]
                              font-extrabold
                              uppercase
                              tracking-[0.18em]
                              border border-white/10
                              transition-all duration-300
                              hover:bg-orange-500/20
                              hover:border-orange-400/30
                            "
                          >
                            <span
                              className="
                                w-1.5 h-1.5
                                rounded-full
                                bg-brand-orange-400
                                animate-pulse
                              "
                            />

                            Limited Time Offer
                          </div>


                          <h4
                            className="
                              font-extrabold
                              text-2xl
                              leading-tight
                              mt-6 mb-3
                            "
                          >
                            Save up to 25% on Health Plans
                          </h4>


                          <p className="text-sm text-slate-300 leading-relaxed">
                            Lock in your premiums before the upcoming price hike
                            on all multi-year policies.
                          </p>

                        </div>


                        {/* CTA */}
                        <Link
                          href="#"
                          className="
                            group/cta
                            relative z-10
                            mt-8
                            flex items-center justify-between
                            bg-white
                            text-slate-900
                            px-5 py-3.5
                            rounded-xl
                            font-bold
                            overflow-hidden
                            transition-all duration-300
                            hover:bg-brand-orange-500
                            hover:text-white
                            hover:shadow-lg
                            hover:shadow-orange-500/20
                            hover:-translate-y-0.5
                          "
                        >

                          <span>
                            Check Savings
                          </span>

                          <div
                            className="
                              w-9 h-9
                              rounded-full
                              bg-slate-100
                              flex items-center justify-center
                              transition-all duration-300
                              group-hover/cta:bg-white/20
                            "
                          >
                            <ArrowRight
                              className="
                                w-4 h-4
                                transition-transform duration-300
                                group-hover/cta:translate-x-1
                              "
                            />
                          </div>

                        </Link>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>


        {/* ================= NAV LINKS ================= */}
        {[
          {
            name: "Renewals",
            href: "#renew",
          },
          {
            name: "Claims",
            href: "#claims",
          },
          {
            name: "Support",
            href: "/support",
          },
        ].map((item) => (

          <Link
            key={item.name}
            href={item.href}
            className="
              relative py-2
              text-slate-600
              transition-all duration-300
              hover:text-brand-orange-500
              group
            "
          >

            {item.name}

            <span
              className="
                absolute left-0 bottom-0
                w-0 h-[2px]
                bg-gradient-to-r
                from-brand-blue-600
                to-brand-orange-500
                transition-all duration-300
                group-hover:w-full
              "
            />

          </Link>

        ))}

      </nav>


      {/* ================= DESKTOP SIGN IN ================= */}
      <div className="hidden lg:flex items-center gap-4">

        <Link
          href="/dashboard"
          className="
            group
            relative overflow-hidden
            flex items-center gap-2
            text-brand-orange-500
            font-bold
            bg-brand-orange-50
            border border-brand-orange-100
            px-5 py-2.5
            rounded-xl
            transition-all duration-300
            hover:bg-brand-orange-500
            hover:text-white
            hover:border-brand-orange-500
            hover:-translate-y-0.5
            hover:shadow-lg
            hover:shadow-orange-500/20
          "
        >

          <User
            className="
              w-5 h-5
              transition-transform duration-300
              group-hover:scale-110
              group-hover:rotate-3
            "
          />

          <span>
            Sign In
          </span>

        </Link>

      </div>


      {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="
          lg:hidden
          p-2.5
          rounded-xl
          text-slate-600
          bg-slate-50
          border border-slate-200
          transition-all duration-300
          hover:bg-brand-orange-50
          hover:text-brand-orange-500
          hover:border-brand-orange-200
          hover:scale-105
          active:scale-95
          cursor-pointer
        "
      >

        {isMobileMenuOpen ? (
          <X
            className="
              w-6 h-6
              transition-transform duration-300
              rotate-90
            "
          />
        ) : (
          <Menu
            className="
              w-6 h-6
              transition-transform duration-300
            "
          />
        )}

      </button>

    </div>


    {/* ================= MOBILE DRAWER ================= */}
    <AnimatePresence>

      {isMobileMenuOpen && (
        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="
            lg:hidden
            w-full
            bg-white/95
            backdrop-blur-xl
            border-t border-slate-200
            overflow-y-auto
            max-h-[calc(100vh-80px)]
            shadow-xl
          "
        >

          <div className="px-4 py-6 space-y-6">

            {/* ================= MOBILE PRODUCTS ================= */}
            <div>

              <h4
                className="
                  font-extrabold
                  text-brand-orange-500
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  mb-4
                "
              >
                Insurance Products
              </h4>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {megaMenuData.map((category, idx) => (

                  <motion.div
                    key={idx}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: idx * 0.04,
                    }}
                    className="
                      group
                      bg-gradient-to-br
                      from-slate-50
                      to-white
                      p-4
                      rounded-2xl
                      border border-slate-200
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                      hover:border-brand-orange-200
                    "
                  >

                    <h5
                      className="
                        font-bold
                        text-slate-800
                        text-sm
                        mb-3
                        flex items-center gap-2
                      "
                    >

                      <div
                        className={`
                          w-8 h-8
                          rounded-lg
                          ${category.bg}
                          ${category.color}
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:scale-110
                          group-hover:-rotate-3
                        `}
                      >
                        <category.icon className="w-4 h-4" />
                      </div>

                      {category.title}

                    </h5>


                    <ul className="space-y-1.5 pl-10">

                      {category.items.slice(0, 3).map((item, itemIdx) => (

                        <li key={itemIdx}>

                          <Link
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="
                              block
                              text-xs
                              text-slate-500
                              py-1
                              transition-all duration-300
                              hover:text-brand-orange-500
                              hover:translate-x-1
                            "
                          >
                            {item.name}
                          </Link>

                        </li>

                      ))}

                    </ul>

                  </motion.div>

                ))}

              </div>

            </div>


            {/* ================= MOBILE UTILITY LINKS ================= */}
            <div
              className="
                border-t border-slate-100
                pt-6
                space-y-2
                font-semibold
              "
            >

              {[
                {
                  name: "Renewals",
                  href: "#renew",
                },
                {
                  name: "Claims",
                  href: "#claims",
                },
                {
                  name: "Support",
                  href: "/support",
                },
              ].map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    group
                    flex items-center justify-between
                    px-3 py-3
                    rounded-xl
                    text-slate-700
                    transition-all duration-300
                    hover:bg-orange-50
                    hover:text-brand-orange-500
                    hover:translate-x-1
                  "
                >

                  {item.name}

                  <ArrowRight
                    className="
                      w-4 h-4
                      opacity-0
                      -translate-x-2
                      transition-all duration-300
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />

                </Link>

              ))}

            </div>


            {/* ================= MOBILE SIGN IN ================= */}
            <div className="border-t border-slate-100 pt-6">

              <Link
                href="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  flex items-center justify-center gap-2
                  text-white
                  bg-gradient-to-r
                  from-brand-blue-600
                  to-brand-orange-500
                  font-bold
                  py-3.5
                  rounded-xl
                  shadow-lg
                  shadow-blue-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-orange-500/20
                  active:scale-95
                "
              >

                <User className="w-5 h-5" />

                Sign In

              </Link>

            </div>

          </div>

        </motion.div>
      )}

    </AnimatePresence>

  </header>
);
}
