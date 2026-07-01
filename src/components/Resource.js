"use client";


import Link from "next/link";
import Image from "next/image";
export default function resource() {

    const leftHeroPost = {
        date: "12 Aug 2026",
        title: "The Complete Tranche 2 Guide for Real Estate Agents",
        summary: "Everything you need to know about your AML/CTF obligations as a real estate agent in Australia. What's captured, what's required, and how to get compliant without slowing down your transactions.",
        image: "/blog1.jpg",
        link: "#"
    };

    const smallPosts = [
        {
            date: "05 Aug 2026",
            title: "How to Enrol with AUSTRAC: A Step-by-Step Walkthrough",
            link: "#"
        },
        {
            date: "28 Jul 2026",
            title: "What Is an AML/CTF Program and What Must Mine Include?",
            link: "#"
        }
    ];

    const bottomWidePost = {
        date: "14 Jul 2026",
        title: "Understanding Fractional MLRO Services for Fast-Growing Teams",
        image: "/blog2.jpg",
        link: "#"
    };

    return (

        <section className="w-full bg-white  text-slate-900 relative" style={{ marginTop: "-1px" }}>
            <div className="container--boxed">
                <div className="max-w-360 mx-auto section-2xl">

                    {/* Header Row */}
                    <div className="max-w-300 mx-auto flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
                        <div className="flex flex-col">
                            <span className="font-space-grotesk font-medium text--xs tracking--1.4px text-gray-500 uppercase">
                                RESOURCES
                            </span>
                            <h2 className="font-gelasio font-medium text--3xl  md:text--7xl leading-tight tracking--0.01em text-brand-900 mt-3">
                                Insights & Guides
                            </h2>
                        </div>
                        <div className='hidden lg:block'>
                            <Link
                                href="#"
                                className="inline-block font-inter font-semibold text-15px text-brand-900 self-start md:self-auto transition-all duration-300 hover:text-brand-gold-500 hover:border-brand-gold-500 hover:translate-x-0.5"
                            >
                                View all resources →
                            </Link>
                        </div>
                    </div>

                    {/* Bento Grid System */}
                    <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-12  items-stretch">

                        {/* LEFT COLUMN: Large Hero Card */}
                        <div className="col-span-1 lg:col-span-5 bg-white border border-slate-200  overflow-hidden flex flex-col justify-between group cursor-pointer">
                            <div className="flex flex-col">
                                {/* Image Container */}
                                <div className="relative w-full aspect-543/280 overflow-hidden bg-slate-100">
                                    <Image
                                        src={leftHeroPost.image}
                                        alt={leftHeroPost.title}
                                        fill
                                        sizes="(max-w-1024px) 100vw, 500px"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content area */}
                                <div className="p-8 flex flex-col gap-4">
                                    <span className="font-space-grotesk font-normal text--2xs sm:text--xs text-slate-500">
                                        {leftHeroPost.date}
                                    </span>
                                    <h3 className="font-gelasio font-medium text--xl sm:text--3xl leading-snug tracking--0.01em text-brand-900 group-hover:text-amber-600 transition-colors duration-300">
                                        {leftHeroPost.title}
                                    </h3>
                                    <p className="font-space-grotesk font-normal text--base text-slate-500 leading-relaxed">
                                        {leftHeroPost.summary}
                                    </p>
                                </div>
                            </div>

                            {/* Read link */}
                            <div className="px-8 pb-8">
                                <Link
                                    href={leftHeroPost.link}
                                    className="inline-flex items-center font-space-grotesk font-semibold border-b border-brand-900 pb-0.5 text--xs sm:text--base text-brand-900 gap-1 group/link hover:text-brand-gold-500 transition-colors duration-300"
                                >
                                    Read article
                                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Stacked Grid */}
                        <div className="col-span-1 lg:col-span-7 flex flex-col  justify-between">

                            {/* Top Row: 2 Small Text Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2  items-stretch flex-1 cursor-pointer">
                                {smallPosts.map((post, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white border border-slate-200  p-8 flex flex-col justify-between  group"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <span className="font-space-grotesk font-normal text--2xs sm:text--xs text-slate-500">
                                                {post.date}
                                            </span>
                                            <h3 className="font-gelasio font-medium text--xl sm:text--2xl leading-snug tracking--0.01em text-brand-900 group-hover:text-amber-600 transition-colors duration-300">
                                                {post.title}
                                            </h3>
                                        </div>

                                        <div className="mt-8">
                                            <Link
                                                href={post.link}
                                                className="inline-flex items-center font-space-grotesk font-semibold border-b border-brand-900 pb-0.5 text--xs sm:text--base text-brand-900 gap-1 group/link hover:text-brand-gold-500 transition-colors duration-300"
                                            >
                                                Read article
                                                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                                                    →
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Row: 1 Wide Card with right-aligned image */}
                            <div className="bg-white border border-slate-200  overflow-hidden flex flex-col sm:flex-row items-stretch  group cursor-pointer">
                                {/* Content on Left */}
                                <div className="p-8 flex flex-col justify-between flex-1">
                                    <div className="flex flex-col gap-4">
                                        <span className="font-space-grotesk font-normal text--2xs sm:text--xs text-slate-500">
                                            {bottomWidePost.date}
                                        </span>
                                        <h3 className="font-gelasio font-medium text--xl sm:text--2xl leading-snug tracking--0.01em text-brand-900 group-hover:text-amber-600 transition-colors duration-300 max-w-85">
                                            {bottomWidePost.title}
                                        </h3>
                                    </div>

                                    <div className="mt-8">
                                        <Link
                                            href={bottomWidePost.link}
                                            className="inline-flex items-center font-space-grotesk font-semibold text--xs sm:text--base border-b border-brand-900 pb-0.5 text-brand-900 gap-1 group/link hover:text-brand-gold-500 transition-colors duration-300"
                                        >
                                            Read article
                                            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Image on Right */}
                                <div className="relative w-full sm:w-59 min-h-50 sm:min-h-full overflow-hidden bg-slate-100 shrink-0">
                                    <Image
                                        src={bottomWidePost.image}
                                        alt={bottomWidePost.title}
                                        fill
                                        sizes="(max-w-768px) 100vw, 236px"
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                            <div className="block lg:hidden text-center mt-5">
                                <Link
                                    href="#"
                                    className="inline-block font-inter font-semibold text-15px text-brand-900 transition-all duration-300 hover:text-brand-gold-500 hover:border-brand-gold-500 hover:translate-x-0.5"
                                >
                                    View all resources →
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}