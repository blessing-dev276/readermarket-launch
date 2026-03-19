import { AlertTriangle } from "lucide-react";

const bullets = [
  "Thousands of books are published daily — yours gets buried",
  "Ads stop working the moment you stop paying",
  "Readers trust lists more than promotions",
  "Visibility is the difference between selling and being ignored",
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
              Why This Matters NOW
            </h2>
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-foreground/70">
                  <AlertTriangle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm font-medium">{b}</span>
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
