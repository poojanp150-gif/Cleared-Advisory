"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Blog-listing.css";
import { allArticles } from "@/data/blog-posts";

export default function Bloaglisting() {
  const featuredArticle = {
    tag: "Featured Article",
    title: "The Tranche 2 Deadline is Set: What 80,000 Australian Businesses Must Do Now.",
    description: "With the AUSTRAC enrolment deadline locked in for July 2026, real estate agents, accountants, and lawyers are officially on the clock. Here is the exact roadmap to get your business cleared before the regulatory window closes.",
    image: "/Blogmainimg.jpg",
    link: "/blog/the-tranche-2-deadline-is-set-what-80000-australian-businesses-must-do-now"
  };


  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter articles based on search query
  const filteredArticles = allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Smooth scroll to top of listing section
      const listingSection = document.getElementById("blog-listing-content");
      if (listingSection) {
        listingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full flex flex-col bg-brand-bg-white text-slate-900">
      {/* ── Services Hero Section (Frame 688) ── */}
      <div className="w-full min-h-132 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 flex flex-col relative overflow-hidden pt-22 pb-24 lg:pb-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent_50%)]" />

        {/* ── Content Wrapper (Frame 687) ── */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-15 lg:py-30 relative z-10">
          <div className="flex flex-col items-center text-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Tagline: "About us" — gold gradient */}
            <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking--1.4px uppercase pb-2 text-[#D4AF37]">
              Blog & News
            </span>

            {/* Heading: Mixed Roman + Italic */}
            <h1 className="font-gelasio font-medium text--4xl sm:text--7xl md:text--9xl leading-tight md:leading-19 tracking--0.48px text-white">
              Insights &{" "}
              <br className="sm:hidden" />
              <span className="italic font-medium bloag-listing__highlight-text-gold bg-clip-text text-transparent">
                Updates.
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="font-space-grotesk font-medium text--xs sm:text--lg md:text--lg leading-7 text-white/80 max-w-211 pt-4">
              Plain-English guidance on AML/CTF regulations, Tranche 2 readiness, and compliance operations for Australian businesses.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Container (Container Layer) ── */}
      <div id="blog-listing-content" className="w-full relative z-20 px-6 lg:px-20 pb-20 -mt-16 lg:-mt-24">
        <div className="max-w-300 mx-auto w-full flex flex-col">

          {/* ── Featured Article Card ── */}

          <div className="w-full bg-white border border-[#E5E7EB] rounded-sm overflow-hidden flex flex-col lg:flex-row bloag-listing__featured-card mb-16 lg:mb-20">
            {/* Left Column: Image */}
            <div className="w-full lg:w-[50%] h-64 lg:h-122 relative bg-brand-gray-200 shrink-0">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full lg:w-[50%] p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="font-space-grotesk font-medium text--xs tracking--1.4px uppercase text-[#D4AF37] block mb-4">
                  {featuredArticle.tag}
                </span>
                <h2 className="font-gelasio font-medium text-2xl lg:text--3xl text-brand-gray-800 leading-snug tracking--0.32px mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="font-space-grotesk font-normal text--xs lg:text-base text-brand-gray-600 leading-relaxed mb-8">
                  {featuredArticle.description}
                </p>
              </div>
              <div>
                <Link href={featuredArticle.link} className="button--primary inline-flex">
                  <span className="font-space-grotesk text--xs lg:text-base font-medium text-brand-900">
                    Read full article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>


          {/* ── Search Input Section ── */}
          <div className="w-full mb-12">
            <div className="relative w-full max-w-300 mx-auto bloag-listing__search-container">
              <span className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-brand-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to page 1 on search
                }}
                className="w-full h-13 pl-14 pr-6 bg-white border border-brand-gray-600/40 rounded-full font-space-grotesk text-sm text-brand-gray-800 placeholder-brand-gray-500 outline-none bloag-listing__search-input"
              />
            </div>
          </div>

          {/* ── Articles Grid ── */}
          {currentArticles.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
              {currentArticles.map((article) => (
                <div key={article.id} className="bg-white border border-brand-gray-200  flex flex-col justify-between overflow-hidden bloag-listing__card bloag-listing__link">
                  <div>
                    {/* Card Image */}
                    <div className="w-full h-60 relative bg-brand-gray-200">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    {/* Card Info */}
                    <div className="p-8">
                      <span className="font-space-grotesk font-normal text--xs text-brand-gray-500 block mb-2">
                        {article.date}
                      </span>
                      <h3 className="font-gelasio font-medium text-xl lg:text-2xl text-brand-900 tracking--0.28px leading-snug mb-3 min-h-14">
                        {article.title}
                      </h3>
                      <p className="font-space-grotesk font-normal text--xs lg:text-base text-brand-gray-600 leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-8 pb-8 pt-0">
                    <Link href={article.link} className="inline-flex items-center gap-1.5 font-space-grotesk text--xs lg:text-base font-medium text-brand-900 hover:text-brand-gold-500 transition-colors duration-200">
                      <span>Read article</span>
                      <span className="bloag-listing__link-arrow inline-block">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-20 text-center">
              <p className="font-space-grotesk text-lg text-brand-gray-600">
                No insights found matching &quot;{searchQuery}&quot;.
              </p>
            </div>
          )}

          {/* ── Pagination row ── */}
          {filteredArticles.length > itemsPerPage && (
            <div className="w-full border-t border-brand-gray-200 pt-8 flex items-center justify-center">
              <div className="flex items-center gap-2">
                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNum = index + 1;
                  const isActive = currentPage === pageNum;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 flex items-center justify-center font-space-grotesk text--base font-medium rounded transition-all duration-200 ${isActive
                        ? "bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 text-white shadow-sm"
                        : "text-brand-gray-600 hover:bg-brand-gray-100"
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next Page button */}
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="h-10 px-4 flex items-center justify-center font-space-grotesk text--base font-medium text-brand-900 hover:bg-brand-gray-100 rounded transition-all duration-200 ml-2"
                  >
                    Next &rarr;
                  </button>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}