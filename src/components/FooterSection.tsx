export default function FooterSection() {
  const tradeLinks = [
    { label: "Voice invoicing for Plumbers", href: "#waitlist" },
    { label: "Hands-free billing for HVAC", href: "#waitlist" },
    { label: "Electrical contractor invoice automation", href: "#waitlist" },
    { label: "Field service admin tools", href: "#waitlist" },
    { label: "Global voice invoicing for trade pros", href: "#waitlist" },
    { label: "Instant invoice generator — zero typing", href: "#waitlist" },
  ];

  return (
    <footer
      className="bg-[#060f1a] text-white py-16 px-5 sm:px-8 border-t border-white/5"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg"
                style={{ background: "#FF4F00" }}
                aria-label="VoiceBill global voice invoicing app logo"
              >
                V
              </div>
              <span className="font-black text-xl tracking-tight">VoiceBill</span>
            </div>
            <p className="text-blue-200/50 text-sm leading-relaxed mb-5">
              Zero-entry invoicing for trade professionals worldwide. Turn a 30-second voice note
              into a professional, billable invoice before you even start your engine.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-blue-200/30">
              {["🇺🇸", "🇬🇧", "🇦🇺", "🇨🇦", "🇮🇳", "🇦🇪"].map((flag) => (
                <span key={flag} className="text-base">{flag}</span>
              ))}
            </div>
          </div>

          {/* SEO links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400/70 mb-6">
              Global Voice Invoicing Solutions for Trade Professionals
            </h3>
            <nav aria-label="Trade professional solutions — global voice invoicing">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tradeLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-blue-200/50 hover:text-[#FF4F00] text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <svg className="w-3 h-3 flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-blue-200/30 text-xs">
            © {new Date().getFullYear()} VoiceBill Invoicing. All rights reserved. · Built for trade pros worldwide 🌍
          </p>
          <div className="flex flex-wrap gap-5">
            {["Privacy Policy", "Terms of Service", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-blue-200/30 hover:text-blue-200/60 text-xs transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Structured data — Global Voice Invoicing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "VoiceBill — Global Voice Invoicing for Trade Professionals",
              applicationCategory: "BusinessApplication",
              description:
                "Global voice invoicing app for trade professionals. Turn a 30-second voice note into a professional invoice with Stripe payment link. Supports USD, GBP, AUD, EUR, AED, CAD, INR.",
              operatingSystem: "iOS, Android, Web",
              availableOnDevice: ["Mobile", "Desktop"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free early access waitlist — global voice invoicing for plumbers, HVAC techs, and electricians",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Plumbers, HVAC Technicians, Electricians, Contractors, Trade Professionals",
              },
              areaServed: ["US", "GB", "AU", "CA", "IN", "AE", "DE", "NZ"],
            }),
          }}
        />
      </div>
    </footer>
  );
}
