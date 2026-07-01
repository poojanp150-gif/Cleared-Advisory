"use client";

import Link from "next/link";
import Image from "next/image";
import Resource from "./Resource";
import "./Blog-details.css";
import { allArticles } from "@/data/blog-posts";
import Cta from "./Cta";

export default function BlogDetails({ slug }) {
    // Find current article
    const article = allArticles.find((item) => item.slug === slug);

    if (!article) {
        return (
            <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
                <h1 className="font-gelasio text-4xl mb-4">Article Not Found</h1>
                <p className="font-space-grotesk text-lg text-white/70 mb-8">
                    The article you are looking for does not exist or has been moved.
                </p>
                <Link href="/blog-listing" className="button--primary inline-flex">
                    <span className="font-space-grotesk font-medium text-brand-900">
                        Back to Blog
                    </span>
                    <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </Link>
            </div>
        );
    }

    // Get related insights (4 articles excluding current one)
    const relatedArticles = allArticles
        .filter((item) => item.id !== article.id)
        .slice(0, 4);

    // If we have less than 4 articles, fallback to any 4 articles
    const bentoArticles = relatedArticles.length >= 4
        ? relatedArticles
        : allArticles.slice(0, 4);

    const card1 = bentoArticles[0]; // Left column large card
    const card2 = bentoArticles[1]; // Small card 1 (Top row left)
    const card3 = bentoArticles[2]; // Small card 2 (Top row right)
    const card4 = bentoArticles[3]; // Wide card (Bottom row)

    return (
        <div className="w-full flex flex-col bg-brand-bg-white text-slate-900 blog-details">
            {/* ── Hero Section ── */}
            <div className="w-full bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 flex flex-col relative overflow-hidden pt-22 pb-32 lg:pb-48">
                {/* Decorative background element */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent_50%)]" />

                <div className="flex-grow flex items-center justify-center px-6 lg:px-20 py-15 lg:py-24 relative z-10">
                    <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">
                        {/* Tagline / Category */}
                        <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking--1.4px uppercase text-[#D4AF37] block mb-4">
                            {article.tag || "Compliance"}
                        </span>

                        {/* Main Title */}
                        <h1 className="font-gelasio font-medium text-3xl sm:text-5xl lg:text-[64px] lg:leading-[76px] tracking-[-0.48px] text-white max-w-4xl mb-8">
                            {article.title}
                        </h1>

                        {/* Metadata Row */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-space-grotesk text-sm sm:text-base text-white">
                            <span>{article.date}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                            <span>{article.author || "By Ritesh Singh"}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                            <span>{article.readTime || "6 min read"}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Overlapping Image Container ── */}
            <div className="w-full px-6 lg:px-20 relative z-20 -mt-20 lg:-mt-36">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="w-full aspect-[16/10] sm:aspect-[16/9] relative  rounded-sm overflow-hidden shadow-2xl ">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            sizes="(max-w-1024px) 100vw, 920px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* ── Article Content Body ── */}
            <article className="w-full px-6 lg:px-20 py-16 lg:py-24 bg-white relative z-20">
                <div className="max-w-3xl mx-auto w-full">
                    {article.contentBlocks && article.contentBlocks.length > 0 ? (
                        article.contentBlocks.map((block, idx) => {
                            if (block.type === "paragraph") {
                                return (
                                    <p key={idx} className="font-space-grotesk font-normal text-base sm:text-lg text-brand-gray-600 leading-[1.8] mb-8">
                                        {block.text}
                                    </p>
                                );
                            }
                            if (block.type === "heading") {
                                return (
                                    <h2 key={idx} className="font-gelasio font-medium text-2xl sm:text-3xl lg:text-[32px] lg:leading-[51px] tracking-[-0.32px] text-brand-gray-900 mt-12 mb-6">
                                        {block.text}
                                    </h2>
                                );
                            }
                            if (block.type === "blockquote") {
                                return (
                                    <div key={idx} className="border-l-4 border-[#D4AF37] pl-8 py-2 my-10">
                                        <blockquote className="font-gelasio italic text-xl sm:text-[28px] sm:leading-[39px] text-brand-gray-900">
                                            &ldquo;{block.text}&rdquo;
                                        </blockquote>
                                    </div>
                                );
                            }
                            if (block.type === "list") {
                                return (
                                    <ul key={idx} className="list-disc pl-6 mb-8 flex flex-col gap-4 blog-details__list">
                                        {block.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="font-space-grotesk text-base sm:text-lg text-brand-gray-600 leading-[1.8]">
                                                {item.bold && (
                                                    <strong className="font-bold text-brand-gray-900">{item.bold}</strong>
                                                )}
                                                {item.normal}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }
                            return null;
                        })
                    ) : (
                        // Default placeholder body if no blocks are present
                        <div className="flex flex-col gap-8">
                            <p className="font-space-grotesk font-normal text-base sm:text-lg text-brand-gray-600 leading-[1.8]">
                                {article.description}
                            </p>
                            <p className="font-space-grotesk font-normal text-base sm:text-lg text-brand-gray-600 leading-[1.8]">
                                Compliance is a continuous journey. As businesses adapt to the new regulatory requirements of Tranche 2, having an operational framework in place becomes the most critical asset to protect your brand and maintain clean operations.
                            </p>
                        </div>
                    )}
                </div>
            </article>

            {/* ── Related Insights Section ── */}

            <Resource />
            {/* ── CTA Section ── */}
            <Cta />
        </div>
    );
}
