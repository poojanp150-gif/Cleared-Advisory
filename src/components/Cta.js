import './Cta.css';
import Link from "next/link";

export default function Cta() {
  const contactInfo = [
    {
      label: "EMAIL",
      value: "ritesh@clearedadvisory.com.au",
      href: "mailto:ritesh@clearedadvisory.com.au"
    },
    {
      label: "PHONE",
      value: "+61 410 450 511",
      href: "tel:+61410450511"
    },
    {
      label: "LOCATION",
      value: "Sydney, NSW — available nationally",
      href: null
    }
  ];

  const expectations = [
    "30 minutes, no charge, no commitment",
    "We confirm whether you're captured under Tranche 2",
    "We walk through what you need to do before 1 July 2026",
    "You leave with at least 3 practical actions you can take immediately",
    "If there's a fit for further work, we discuss it — only if it makes sense for you"
  ];

  return (
    <section className="w-full bg-white  text-slate-900 relative" style={{ marginTop: "-1px" }}>
      <div className="container--boxed">
        <div className="max-w-360 mx-auto section-2xl">
          <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16  lg:items-start">

            {/* Left Side Content */}
            <div className="flex flex-col justify-start max-w-142 w-full">
              <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-slate-500/60 uppercase">
                GET STARTED
              </span>

              <h2 className="font-gelasio font-medium text--2xl sm:text--7xl md:text--9xl leading-tight  tracking--0.01em text-brand-900 mt-6">
                Book a free <br className="hidden sm:inline" />
                <span className="italic font-normal cta__highlight-text-gold bg-clip-text text-transparent">
                  30-minute
                </span> <br className="hidden sm:inline" />
                consultation.
              </h2>

              <p className="font-space-grotesk font-normal text--base text-slate-500 mt-6 leading-relaxed max-w-121">
                No sales pitch. No commitment. A plain-English conversation about where you stand and what you need to do before 1 July 2026. You'll leave with at least 3 practical actions.
              </p>

              {/* Contact Grid */}
              <div className=" pt-8 flex flex-col gap-6">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                    {/* Label */}
                    <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-slate-500/60 uppercase w-28 shrink-0">
                      {item.label}
                    </span>

                    {/* Value */}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-space-grotesk font-normal text--xs sm:text--base text-slate-900 hover:text-brand-gold-500 hover:underline transition-colors duration-300"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <span className="font-space-grotesk font-normal text--xs sm:text--base text-slate-900">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Dark Card */}
            <div className="w-full bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 border border-white/10 p-8 sm:p-12 shadow-2xl text-white">
              <h3 className="font-gelasio font-medium text--2xl text-white tracking--0.01em">
                What To Expect on The Call
              </h3>

              {/* Bullet Points with Dividers */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <ul className="flex flex-col gap-5">
                  {expectations.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      {/* Small Circular Dot */}
                      <div className="w-2 h-2 rounded-full bg-white mt-3 shrink-0" />

                      {/* Text */}
                      <span className="font-space-grotesk font-normal text--base text-white/60 leading-normal">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email Pill Button */}
              <div className="mt-10">
                <Link
                  href="/contact-us"
                  className="group flex w-full h-14 items-center justify-center gap-2 pl-8 pr-4 rounded-full bg-white shadow-md hover:scale-1.01 transition-transform duration-300"
                >
                  <span className="font-space-grotesk text--base font-medium text-brand-900">
                    Send us an email now
                  </span>

                  <div className="w-7 h-7 rounded-full bg-brand-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
                    >
                      <path
                        d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* OR CALL text under button */}
              <div className="mt-6 text-center">
                <Link
                  href="/contact-us"
                  className="inline-block font-space-grotesk font-medium text--base tracking-0.5px text-white/80 hover:text-white hover:underline transition-colors duration-300"
                >
                  OR CALL +61 410 450 511
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
