const services = [
  {
    numeral: "I",
    title: "Goodreads Listopia Placement",
    tag: "Core Service",
    items: [
      "Placement on targeted reader-curated lists",
      "Niche-specific list research",
      "Organic visibility boost",
      "Long-term ranking potential",
    ],
  },
  {
    numeral: "II",
    title: "Amazon Profile Optimization",
    items: [
      "Keyword optimization",
      "Improved book discoverability",
      "Category ranking strategy",
    ],
  },
  {
    numeral: "III",
    title: "Goodreads Profile Optimization",
    items: [
      "Author profile setup and polish",
      "Book metadata optimization",
      "Engagement improvement",
    ],
  },
  {
    numeral: "IV",
    title: "Google Panel SEO",
    items: [
      "Build and optimize your Google Knowledge Panel",
      "Improve online authority and credibility",
    ],
  },
  {
    numeral: "V",
    title: "Amazon A+ Content",
    items: [
      "Enhanced product page visuals",
      "Better conversion rates",
      "Professional layout for book pages",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-foreground mb-16">
          Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.numeral}
              className="bg-card rounded-xl p-6 transition-all duration-300 ease-out hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-soft)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "var(--shadow-lifted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "var(--shadow-soft)")
              }
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-accent font-serif text-2xl italic">
                  {s.numeral}
                </span>
                {s.tag && (
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold bg-accent/10 px-2 py-0.5 rounded-full">
                    {s.tag}
                  </span>
                )}
              </div>
              <h3 className="font-sans font-semibold text-foreground mb-3 tracking-normal text-base">
                {s.title}
              </h3>
              <ul className="space-y-2">
                {s.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/60">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
