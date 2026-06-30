"use client";
import './Services.css';


import Link from "next/link";
import Image from "next/image";
import Cta from "./Cta";

export default function Aboutus() {
  const services = [
    {
      id: "template-pack",
      title: "Template pack",
      description: "A complete DIY compliance starter kit tailored specifically for your sector's requirements.",
      bestFor: "Small businesses that want to get compliant themselves",
      price: "$597–$997",
      priceSub: "per sector / $997 all three",
      featured: false,
    },
    {
      id: "health-check",
      title: "Compliance health check",
      description: "A structured review of your current position resulting in a prioritised action plan within 5 days.",
      bestFor: "Businesses that want to know exactly where they stand",
      price: "$1,500–$2,800",
      priceSub: "flat fee",
      featured: false,
    },
    {
      id: "program-builder",
      title: "AML Program Builder",
      description: "Guided platform build, reviewed and refined by a Cleared practitioner.",
      bestFor: "Businesses seeking a guided, cost-effective tech-enabled build",
      price: "From $1,800",
      priceSub: "flat fee",
      badge: "New",
      featured: false,
    },
    {
      id: "full-build",
      title: "Full program build",
      description: "End-to-end service: risk assessment, written program, training, and AUSTRAC enrolment.",
      bestFor: "Businesses that want it done properly, by an expert",
      price: "$5,000–$12,000",
      priceSub: "flat fee",
      badge: "Most popular",
      featured: true,
    },
    {
      id: "sector-workshop",
      title: "Sector workshop",
      description: "3-hour facilitated training for your team on practical, day-to-day compliance operations.",
      bestFor: "Teams needing practical training in plain English",
      price: "$750–$1,500",
      priceSub: "per person",
      featured: false,
    },
    {
      id: "readiness-review",
      title: "AUSTRAC Readiness Review",
      description: "Optional pre-readiness assurance preparing your business for regulatory audits.",
      bestFor: "All AUSTRAC reporting entities preparing for audits",
      price: "From $2,500",
      priceSub: "flat fee",
      featured: false,
    },
  ];

  const phase2Services = [
    {
      id: "fractional-mlro",
      title: "Fractional MLRO",
      description: "Ongoing compliance leadership on a monthly retainer.",
      bestFor: "Fintechs, DCEs, and businesses needing senior ongoing compliance leadership",
      price: "$4,500–$8,500/mo",
      priceSub: "",
      featured: false,
    },
    {
      id: "kyc-cdd",
      title: "KYC/CDD operations",
      description: "Onboarding, screening, and ongoing monitoring.",
      bestFor: "Businesses scaling fast who need compliance ops without hiring",
      price: "Retainer",
      priceSub: "from $800/mo",
      featured: false,
    },
    {
      id: "transaction-monitoring",
      title: "Transaction monitoring",
      description: "Alert review and structured adjudication.",
      bestFor: "High-volume transaction businesses needing dedicated alert management",
      price: "Retainer",
      priceSub: "from $800/mo",
      featured: false,
    },
    {
      id: "smr-drafting",
      title: "SMR drafting & submission",
      description: "Suspicious matter report evaluation and support.",
      bestFor: "Entities requiring expert assistance in accurately reporting suspicious matters",
      price: "Retainer",
      priceSub: "scope on free call",
      featured: false,
    },
    {
      id: "independent-evaluation",
      title: "Annual independent evaluation",
      description: "By Cleared Audit — CAMS-Audit certified practitioners.",
      bestFor: "All AUSTRAC reporting entities requiring their mandatory annual audit",
      price: "$2,500–$10,000+",
      priceSub: "",
      badge: "Tranche 1 & 2",
      featured: false,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ── Hero Section  ── */}
      <div className="w-full min-h-124 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 flex flex-col relative overflow-hidden pt-22">

        {/* ── Content Wrapper  ── */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-15 lg:py-30">
          <div className="flex flex-col items-center text-center  max-w-211 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Tagline: "Services & pricing" — gold gradient */}
            <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px uppercase bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 bg-clip-text text-transparent">
              Services & pricing
            </span>

            {/* Heading: Mixed Roman + Italic */}
            <h1 className="font-gelasio font-medium text--4xl sm:text--7xl md:text--9xl leading-tight md:leading-19 sm:tracking--0.48px text-white">
              Transparent pricing.{" "}
              <br className="hidden sm:inline" />
              <span className="italic font-medium services__highlight-text-gold bg-clip-text text-transparent">No surprises.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="font-space-grotesk font-medium text--xs sm:text--lg md:text-18px leading-7 text-white/80 max-w-211">
              Every engagement scoped before you commit. No hidden fees. No scope creep. No disappearing.
            </p>
          </div>
        </div>
      </div>

      {/* ── Advisory Services Section (3. PHASE 1: GET CLEARED) ── */}
      <section className="w-full bg-white text-slate-900 flex flex-col items-center">
        <div className="container--boxed">

          <div className="max-w-360 mx-auto section-1xl sm:section-2xl w-full flex flex-col items-center">

            {/* Header */}
            <div className="flex flex-col w-full items-start sm:items-center sm:text-center mb-4 sm:mb-16 max-w-200">
              <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px text-[#D4AF37] uppercase">
                Phase 1 — Get Cleared
              </span>
              <h2 className="font-gelasio font-medium text--3xl sm:text--2xl md:text--7xl leading-tight tracking--0.48px text-brand-900 sm:mt-4">
                Advisory services
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-300 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`group relative flex flex-col justify-between py-6 px-6 sm:px-8 sm:py-10 max-h-131 w-full transition-all duration-300 ${service.featured
                      ? "bg-white border-2 border-brand-gold-600 services__shadow-gold services__shadow-gold-hover"
                      : "bg-brand-bg-white border border-brand-gray-200 hover:bg-white hover:border-brand-gold-500/30 services__shadow-card-hover"
                      }`}
                  >
                    {service.badge && (
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-space-grotesk font-bold text--2xs tracking-0.7px px-6 py-2 rounded-full uppercase services__shadow-badge z-20 whitespace-nowrap bg-brand-gold-600"
                      >
                        <span className="services__highlight-text-blue bg-clip-text text-transparent">
                          {service.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col ">
                      {/* Title */}
                      <h3 className="font-gelasio font-medium text--xl sm:text--3xl text-brand-900 tracking--0.28px leading-snug pb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-space-grotesk font-normal pb-4 sm:pb-0 text--xs sm:text--base text-brand-gray-600 leading-6">
                        {service.description}
                      </p>


                    </div>

                    {/* Pricing Info & Button */}
                    <div className="sm:mt-8 flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="border-l-3 border-brand-gold-600 bg-brand-900/[0.02] p-5 flex flex-col gap-2 rounded-r-sm">
                          <span className="font-space-grotesk font-bold text--2xs tracking--1.4px text-brand-900 uppercase">
                            BEST FOR:
                          </span>
                          <span className="font-space-grotesk font-normal text--xs text-brand-gray-600 leading-22.4px">
                            {service.bestFor}
                          </span>
                        </div>
                        <span className="pt-8 font-space-grotesk font-bold text--3xl sm:text--4xl text-brand-900 leading-none">
                          {service.price}
                        </span>
                        {service.priceSub && (
                          <span className="font-space-grotesk font-normal text--xs text-brand-gray-500 leading-normal">
                            {service.priceSub}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`mailto:ritesh@clearedadvisory.com.au?subject=Inquiry regarding ${encodeURIComponent(service.title)}`}
                        className="group/btn flex w-full h-13 items-center justify-center gap-2 pl-6 pr-4 py-2  sm:pl-6 sm:pr-3 rounded-full bg-brand-900 hover:bg-brand-gold-500 hover:scale-1.01 transition-all duration-300"
                      >
                        <span className="font-space-grotesk text--xs sm:text--base font-medium text-white group-hover/btn:text-brand-900 transition-colors duration-300">
                          Get Started
                        </span>

                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover/btn:bg-brand-900 group-hover/btn:scale-105 shrink-0">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover/btn:translate-x-px group-hover/btn:-translate-y-px"
                          >
                            <path
                              d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10"
                              stroke="currentColor"
                              className="text-brand-900 group-hover/btn:text-white transition-colors duration-300"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Phase 2: Stay Cleared ── */}
      <section className="w-full bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 text-white flex flex-col items-center">
        <div className="container--boxed">

          <div className="max-w-360 mx-auto section-1xl sm:section-2xl w-full flex flex-col items-center">
            <div className="flex flex-col items-center w-full max-w-300 mb-4 sm:mb-16">
              <span className="font-space-grotesk font-bold text--2xs sm:text--xs tracking--1.4px text-brand-gold-600 uppercase">
                PHASE 2 — STAY CLEARED
              </span>
              <h2 className="font-gelasio font-medium text--3xl  md:text--7xl leading-tight text-white mt-4">
                Ongoing services
              </h2>
            </div>

            <div className="w-full max-w-300 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 items-stretch w-full">
                {phase2Services.map((service) => (
                  <div
                    key={service.id}
                    className="group relative flex flex-col sm:justify-between py-6 px-6 sm:px-8 sm:py-10 transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-gold-500/30 services__shadow-card-dark-hover"
                  >
                    {service.badge && (
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-space-grotesk font-bold text--2xs tracking-0.7px px-6 py-2 rounded-full uppercase services__shadow-badge z-20 whitespace-nowrap bg-gradient-to-l from-[#CCAB51] via-[#D5B45F] to-[#E7C77C]"
                      >
                        <span className="services__highlight-text-blue bg-clip-text text-transparent">
                          {service.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col ">
                      {/* Title */}
                      <h3 className="font-gelasio font-medium text--xl lg:text--3xl text-white tracking--0.28px leading-snug pb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-space-grotesk font-normal pb-4 sm:pb-0 text--xs sm:text--base text-white/80 leading-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing Info & Button */}
                    <div className="sm:mt-8 flex flex-col gap-6">
                      <div className="sm:pt-6  flex flex-col gap-1">
                        <div className="border-l-3 border-brand-gold-600 bg-white/5 py-4 px-6 flex flex-col gap-2 rounded-r-sm">
                          <span className="font-space-grotesk font-bold text--2xs tracking--1.4px text-white/60 uppercase">
                            BEST FOR:
                          </span>
                          <span className="font-space-grotesk font-medium text--xs text-white/90 leading-5">
                            {service.bestFor}
                          </span>
                        </div>

                        <span className="pt-8 font-space-grotesk font-bold text--3xl lg:text--4xl text-white leading-none">
                          {service.price}
                        </span>
                        {service.priceSub && (
                          <span className="font-space-grotesk font-normal text--xs text-white/60 leading-normal">
                            {service.priceSub}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`mailto:ritesh@clearedadvisory.com.au?subject=Inquiry regarding ${encodeURIComponent(service.title)}`}
                        className="group/btn flex w-full h-13 button--primary"
                      >
                        <span className="font-space-grotesk text--xs sm:text--base font-semibold text-brand-900">
                          Get Started
                        </span>

                        <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center transition-all duration-300">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover/btn:translate-x-px group-hover/btn:-translate-y-px"
                          >
                            <path
                              d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10"
                              stroke="currentColor"
                              className="text-white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </div>
  );
}
