import { BookOpen, Users, TrendingUp } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Readers Trust Lists, Not Ads",
    description:
      "Goodreads Listopia lists are curated by real readers. A placement here carries genuine social proof that paid ads simply can't replicate.",
  },
  {
    icon: BookOpen,
    title: "Natural Discovery",
    description:
      "Your book appears where readers actively search for their next read — no algorithmic bidding wars, just organic visibility.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Organic Traffic",
    description:
      "Unlike ads that stop the moment you stop paying, list placements continue driving traffic and sales month after month.",
  },
];

const WhatIDoSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-foreground/60 text-lg">
            Goodreads Listopia placement helps books appear on reader-curated
            lists where people actively search for their next read.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-border">
          {points.map((p, i) => (
            <div
              key={i}
              className="px-0 md:px-8 first:pl-0 last:pr-0 py-6 md:py-0"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p.icon className="w-5 h-5 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2 tracking-normal">
                {p.title}
              </h3>
              <p className="text-foreground/60 text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
