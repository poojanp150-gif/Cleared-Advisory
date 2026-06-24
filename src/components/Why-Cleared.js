"use client";
import './Why-Cleared.css';


import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Union from "../../public/Union.png";
import Cta from "./Cta";

export default function WhyCleared() {
    return (
        <div className="w-full flex flex-col">
            {/* ── Hero Section ── */}
            <div className="w-full min-h-146 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 flex flex-col relative overflow-hidden pt-22">

                {/* ── Hero Content ── */}
                <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-16 lg:py-30">
                    <div className="flex flex-col items-center text-center gap-6 max-w-211 w-full">

                        {/* Subtitle: "Why Cleared" — gold gradient, small-caps */}
                        <span
                            className="font-space-grotesk font-medium text--xs tracking-1.1px uppercase bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 bg-clip-text text-transparent"
                        >
                            Why Cleared
                        </span>

                        {/* Heading: mixed roman + italic */}
                        <h1 className="font-gelasio font-medium text--2xl sm:text--7xl md:text--9xl leading-tight md:leading-19 tracking--0.48px text-white">
                            The traditional compliance{" "}
                            <br className="hidden sm:inline" />
                            <span className="not-italic font-medium italic why-cleared__highlight-text-gold bg-clip-text text-transparent">model is broken.</span>

                        </h1>
                        {/* Description */}
                        <p className="font-space-grotesk font-medium text--base sm:text--lg md:text-18px leading-7 text-white/90 max-w-211">
                            Here's what businesses have been told to do — and why it's been failing them for 20 years.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Why Us (3 Cards Section) ── */}
            <section className="w-full bg-white py-20 lg:py-30 text-slate-900 border-b border-neutral-100 flex flex-col items-center">
                <div className="container--boxed">


                    <div className="max-w-360 mx-auto section-2xl w-full">
                        {/* Header */}
                        <div className="max-w-320 mx-auto flex flex-col items-center text-center mb-12 sm:mb-16">
                            <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-brand-gray-500 uppercase">
                                OUR DIFFERENCE
                            </span>
                            <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text--7xl leading-tight md:leading-15 tracking--0.48px text-brand-900 mt-6">
                                What businesses have always been told to do.
                            </h2>
                            <p className="font-space-grotesk font-normal text--base sm:text--lg md:text-18px leading-7 text-brand-gray-500 max-w-195 mx-auto mt-6">
                                For 20 years, businesses needing compliance help had three options. None of them worked particularly well.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
                            {/* Card 1 */}
                            <div className="group relative bg-white rounded-sm p-8 sm:p-12 shadow-sm border border-black/10 hover:border-amber-400/30  flex flex-col gap-6 h-full overflow-hidden">
                                <h3 className="font-gelasio font-medium text--2xl text-brand-900">
                                    Hire a law firm
                                </h3>
                                <p className="font-space-grotesk font-normal text--base text-brand-gray-500 leading-6">
                                    $400–$600/hour. Lawyers who understand the legal framework but have never run a compliance program, never been the MLRO, never sat across the table from AUSTRAC when something went wrong. Beautiful documents. Handsome invoices. Then they disappear.
                                </p>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-l from-brand-gold-500 to-brand-gold-300 group-hover:w-full transition-all duration-300" />
                            </div>

                            {/* Card 2 */}
                            <div className="group relative bg-white rounded-sm p-8 sm:p-12 shadow-sm border border-black/10 hover:border-amber-400/30  flex flex-col gap-6 h-full overflow-hidden">
                                <h3 className="font-gelasio font-medium text--2xl text-brand-900">
                                    Hire a big consulting firm
                                </h3>
                                <p className="font-space-grotesk font-normal text--base text-brand-gray-500 leading-6">
                                    A junior consultant reads the AUSTRAC guidance and builds something generic with your logo on it. It looks professional. It ticks boxes. Nobody in your business actually understands it, uses it, or knows what to do when a suspicious transaction lands on their desk.
                                </p>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-l from-brand-gold-500 to-brand-gold-300 group-hover:w-full transition-all duration-300" />
                            </div>

                            {/* Card 3 */}
                            <div className="group relative bg-white rounded-sm p-8 sm:p-12 shadow-sm border border-black/10 hover:border-amber-400/30  flex flex-col gap-6 h-full overflow-hidden">
                                <h3 className="font-gelasio font-medium text--2xl text-brand-900">
                                    Rely on software alone
                                </h3>
                                <p className="font-space-grotesk font-normal text--base text-brand-gray-500 leading-6">
                                    Templates, checklists, a help centre, maybe a webinar. But nobody to call when a real regulatory question arises. Nobody who has been through an AUSTRAC audit and knows what they really look for.
                                </p>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-l from-brand-gold-500 to-brand-gold-300 group-hover:w-full transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Founder Section ── */}
            <section className="w-full bg-gradient-to-b from-brand-blue-900 to-brand-blue-800  text-white relative overflow-hidden">
                <div className="container--boxed">


                    <div className="max-w-360 mx-auto section-2xl w-full flex justify-center">
                        {/* Centered Glass Quote Card */}
                        <div className="max-w-208 w-full p-8 sm:p-10 md:p-12  flex flex-col gap-8 md:gap-10">
                            {/* Profile Info (Header) */}
                            <div className="flex items-center gap-6">
                                {/* Avatar with Outside Gold Gradient Border */}
                                <div className="w-26 h-26 rounded-full p-[5px] bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 flex items-center justify-center flex-shrink-0">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
                                        <Image
                                            src="/ritesh_singh.png"
                                            alt="Ritesh Singh"
                                            fill
                                            sizes="100px"
                                            priority
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>

                                {/* Name & Designation */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-gelasio font-semibold text--2xl text-white tracking--0.24px">
                                        Ritesh Singh
                                    </h3>
                                    <span className="font-space-grotesk font-normal text--xs tracking-1.1px text-white/80 uppercase">
                                        FOUNDER, CLEARED ADVISORY
                                    </span>
                                </div>
                            </div>

                            {/* Quote Text */}
                            <blockquote className="font-gelasio font-medium text--2xl sm:text--2xl md:text--4xl leading-relaxed md:leading-50.4px tracking--0.36px text-white">
                                "The dirty secret of the compliance industry is that{" "}
                                <span className="text-brand-gold-500">
                                    most compliance programs are built by people who have never actually been accountable to a regulator.
                                </span>{" "}
                                They know the rules. They don't know what it feels like when the rules are tested. And when they are tested — that's exactly when you find out if your program actually works."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Services Section (Side-by-Side Cards) ── */}
            <section className="w-full bg-brand-gray-100  text-slate-900 border-b border-neutral-200/50 flex flex-col items-center">
                <div className="container--boxed">


                    <div className="max-w-360 mx-auto section-2xl w-full">
                        {/* Header */}
                        <div className="max-w-320 mx-auto flex flex-col items-center text-center mb-12 sm:mb-16">
                            <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-brand-gray-500 uppercase">
                                THE CLEARED ADVISORY DIFFERENCE
                            </span>
                            <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text--7xl leading-tight md:leading-15 tracking--0.48px text-brand-900 mt-6">
                                What we do differently. <span className="font-normal italic">And why it matters.</span>
                            </h2>
                        </div>

                        {/* Cards Grid */}
                        <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">

                            {/* Phase 1 Card: The Traditional Model */}
                            <div className="group relative bg-white rounded-4px p-8 sm:p-10 md:p-12  border border-black/10  flex flex-col gap-8 h-full overflow-hidden">
                                {/* Icon */}
                                <div className="w-10 h-10 flex items-center justify-center text-slate-900 flex-shrink-0">
                                    <Image src={Union} alt="UI Icon" width={35} height={40} />
                                </div>

                                {/* Title */}
                                <h3 className="font-gelasio font-medium text--2xl text-brand-900">
                                    The Traditional Model
                                </h3>

                                {/* List Items */}
                                <ul className="flex flex-col  list-disc w-full">
                                    {[
                                        "Advisors who know the rules but have never been the MLRO. Never been accountable. Never signed an SMR.",
                                        "Generic templates with your logo. Same document, same structure, every client.",
                                        "Complexity designed to create dependency. The more confusing it is, the more billable hours they get.",
                                        "Deliver the document. Invoice. Move on. No follow-up, no operational support, no help when things go wrong.",
                                        "Advisory only. You need three firms. Three invoices. Three sets of onboarding.",
                                        "$400–$600/hour. Compliance becomes the privilege of businesses that can afford it."
                                    ].map((item, idx, arr) => (
                                        <li
                                            key={idx}
                                            className={`py-6 w-full font-space-grotesk font-normal text--base text-brand-900 leading-6 ${idx !== arr.length - 1 ? "border-b border-black/10" : ""
                                                }`}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Phase 2 Card: The Cleared Advisory Model */}
                            <div className="group relative bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 rounded-4px p-8 sm:p-10 md:p-12  border border-white/10  flex flex-col gap-8 h-full overflow-hidden text-white">
                                {/* Icon */}
                                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                    <Image src={Logo} width={40} height={40} alt="Cleared Advisory Logo" />
                                </div>

                                {/* Title */}
                                <h3 className="font-gelasio font-medium text--2xl text-white">
                                    The Cleared Advisory Model
                                </h3>

                                {/* List Items */}
                                <ul className="flex flex-col list-disc pl-5 w-full text-white">
                                    {[
                                        "We've been the MLRO. Accountable to AUSTRAC. Signed the SMRs. Managed de-banking threats. We know what it feels like when compliance is really tested.",
                                        "Programs built specifically for your business, your risk profile, your team, your sector. Not a template with your name changed.",
                                        "Transaction monitoring",
                                        "SMR drafting & submission",
                                        "Annual independent audit"
                                    ].map((item, idx, arr) => (
                                        <li
                                            key={idx}
                                            className={`py-6 w-full ${idx !== arr.length - 1 ? "border-b border-white/10" : ""
                                                }`}
                                        >
                                            <span className="font-space-grotesk font-normal text--base text-white leading-6">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Promises Section (Second Why Us Layer) ── */}
            <section className="w-full bg-gradient-to-b from-brand-blue-900 to-brand-blue-800  text-white relative">
                <div className="container--boxed">


                    <div className="max-w-360 mx-auto section-2xl w-full">
                        <div className="max-w-320 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                            {/* Left Column: Heading Content */}
                            <div className="flex flex-col  lg:sticky lg:top-24 max-w-144 w-full ">
                                {/* Tagline */}
                                <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-white/70 uppercase">
                                    OUR PROMISES
                                </span>

                                {/* Heading */}
                                <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text--7xl leading-tight md:leading-15 tracking--0.48px text-white mt-6">
                                    Three things we promise. Every client. Every time.
                                </h2>

                                {/* Description */}
                                <p className="font-inter font-normal text--base sm:text--lg text-white/80 mt-6 leading-relaxed">
                                    Most consultants deal entirely in theory, leaving you to figure out the execution.
                                    We bring boots-on-the-ground reality to your compliance, building operational
                                    frameworks that actually protect your business.
                                </p>
                            </div>

                            {/* Right Column: Stacked Cards */}
                            <div className="flex flex-col gap-8 w-full lg:max-w-144">
                                {[
                                    {
                                        number: "01",
                                        title: "Plain English. Always.",
                                        text: "Every document, every conversation, every recommendation. If you can't explain it to your team, it won't work in your business. We have never once used jargon as a substitute for clarity."
                                    },
                                    {
                                        number: "02",
                                        title: "Yours to own and operate.",
                                        text: "We build programs your team can actually run. No dependency on us to answer every question. Compliance that lives in your business, understood by the people who need to follow it."
                                    },
                                    {
                                        number: "03",
                                        title: "We stay after delivery.",
                                        text: "The document is the beginning, not the end. Available when AUSTRAC asks questions, when staff change, when risks evolve. We don't invoice and disappear."
                                    }
                                ].map((card, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative bg-white rounded-sm p-8 sm:p-10 shadow-md border border-black/5 hover:border-amber-400/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
                                    >
                                        {/* Big faint number */}
                                        <div className="font-space-grotesk font-medium text--7xl leading-none text-slate-900/10 group-hover:text-amber-500/20 transition-colors duration-300">
                                            {card.number}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-4">
                                            <h3 className="font-gelasio font-medium text--2xl text-brand-900">
                                                {card.title}
                                            </h3>
                                            <p className="font-inter font-normal text--base text-slate-500 leading-relaxed">
                                                {card.text}
                                            </p>
                                        </div>

                                        {/* Bottom gold gradient border line */}
                                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-l from-brand-gold-500 to-brand-gold-300 group-hover:w-full transition-all duration-300" />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── What Makes a Compliance Program Survive ── */}
            <section className="w-full bg-white  text-slate-900 flex flex-col items-center">
                <div className="container--boxed">


                    <div className="max-w-360 mx-auto section-2xl  w-full flex flex-col items-center">
                        <div className="max-w-300 w-full flex flex-col gap-12 lg:gap-16">

                            {/* Header Content */}
                            <div className="flex flex-col items-start text-left w-full gap-4 sm:gap-6">
                                <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-brand-gray-500 uppercase">
                                    WHAT GOOD LOOKS LIKE
                                </span>
                                <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text--7xl leading-tight md:leading-15 tracking--0.48px text-brand-900">
                                    What makes a compliance program that actually survives an AUSTRAC audit.
                                </h2>
                                <p className="font-space-grotesk font-normal text--base sm:text--base leading-relaxed text-brand-gray-500 max-w-175">
                                    Most AML/CTF programs fail in practice — not because they don't exist, but because they
                                    were built for the shelf, not the business. Here's what we build instead.
                                </p>
                            </div>

                            {/* Grid Layout of Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                                {[
                                    {
                                        title: "Built for your actual risk profile",
                                        desc: "Not a generic template. Based on a real business risk assessment of your clients, services, geographies and delivery channels."
                                    },
                                    {
                                        title: "Written in language your staff understand",
                                        desc: "Procedures your front desk, your admin team, your principal can follow without a law degree or a compliance background."
                                    },
                                    {
                                        title: "Tested against what AUSTRAC actually reviews",
                                        desc: "Structured around the 40 AML/CTF obligations from the Act — not what looks good on paper."
                                    },
                                    {
                                        title: "Owned and operated by your team",
                                        desc: "Trained into your team. Referenced in real situations. Not a document that gets filed and forgotten."
                                    },
                                    {
                                        title: "Maintained as your business changes",
                                        desc: "Updated when staff change, services change, regulations change. A living program — not a one-time project."
                                    }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex gap-4 py-6 ${idx !== 4 ? "border-b border-black/10" : ""
                                            }`}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 flex items-center justify-center flex-shrink-0 text-white font-sans text--2xs shadow-sm">
                                            ✓
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="font-gelasio font-medium text--2xl leading-tight tracking--0.24px text-brand-900">
                                                {item.title}
                                            </h4>
                                            <p className="font-space-grotesk font-normal text--base text-brand-gray-500 leading-6">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* Warning Box: Signs your current program isn't working */}
                            <div className="w-full bg-#F9F9F9 border border-slate-200 rounded-4px p-8 sm:p-12 flex flex-col gap-8 mt-4 bg-gray-50">
                                <h3 className="font-gelasio font-medium text--2xl text-brand-red-600 tracking--0.24px">
                                    SIGNS YOUR CURRENT PROGRAM ISN'T WORKING
                                </h3>
                                <div className="flex flex-col w-full">
                                    {[
                                        "Your staff don't know what a suspicious transaction looks like",
                                        "You can't find your AML/CTF program when AUSTRAC asks for it",
                                        "Your compliance officer doesn't know what an SMR is",
                                        "Your program was built by someone who has never filed an SMR",
                                        "You've changed services or staff but never updated your program",
                                        "Your training was a one-off session nobody remembers",
                                        "You have a document but no one is responsible for running it"
                                    ].map((sign, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-4 py-4 border-b border-slate-200 last:border-b-0"
                                        >
                                            <div className="w-5 h-5 rounded-4px bg-brand-red-600/10 flex items-center justify-center flex-shrink-0 text-brand-red-600 font-sans text-10px font-bold">
                                                ✗
                                            </div>
                                            <span className="font-space-grotesk font-normal text--base text-brand-900 leading-6">
                                                {sign}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </div>
    );
}
