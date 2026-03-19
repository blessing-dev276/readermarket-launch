import { BookOpen, Users, TrendingUp, Eye } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    text: "Your book appears where readers are actively searching",
  },
  {
    icon: TrendingUp,
    text: "Builds long-term organic visibility",
  },
  {
    icon: BookOpen,
    text: "Drives consistent traffic without paid ads",
  },
  {
    icon: Users,
    text: "Increases credibility and reader trust",
  },
];

const WhatIDoSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
            What This Actually Does
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Goodreads Listopia is where readers go to find their next book.
            These are curated lists created by readers — not ads.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card rounded-xl p-5"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <b.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
              <p className="text-foreground/70 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
