const bullets = [
  "Thousands of books are published every single day — visibility is the #1 problem",
  "Ads are expensive and stop working the moment you stop paying",
  "Goodreads readers are high-intent buyers actively looking for books",
  "List placements create long-term, compounding discovery",
];

const stats = [
  { value: "4,000+", label: "Books published daily" },
  { value: "47.2%", label: "Avg. visibility increase" },
  { value: "90M+", label: "Goodreads active members" },
];

const WhyNowSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-6">
              Why Authors Need This Now
            </h2>
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-foreground/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-0 divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-3xl lg:text-4xl font-serif text-foreground tabular-nums">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
