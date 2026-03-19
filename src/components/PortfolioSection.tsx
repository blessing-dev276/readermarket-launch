import book1 from "@/assets/book-1.png";
import book2 from "@/assets/book-2.png";
import book3 from "@/assets/book-3.png";
import book4 from "@/assets/book-4.png";
import book5 from "@/assets/book-5.png";

const cases = [
  {
    image: book1,
    title: "The Last Horizon",
    author: "Sarah Mitchell",
    metric: "Placed on 18 Goodreads lists",
    result: "320% increase in organic visibility",
  },
  {
    image: book2,
    title: "Echoes of Florence",
    author: "James Crawford",
    metric: "Ranked #4 in Historical Fiction Lists",
    result: "Consistent organic traffic for 6+ months",
  },
  {
    image: book3,
    title: "Under the Willow",
    author: "Emma Hart",
    metric: "Placed on 15+ Romance lists",
    result: "300% increase in Kindle impressions",
  },
  {
    image: book4,
    title: "Neon Meridian",
    author: "Alex Petrov",
    metric: "12 Sci-Fi list placements",
    result: "2x organic sales within 30 days",
  },
  {
    image: book5,
    title: "The Clarity Path",
    author: "Dr. Nina Brooks",
    metric: "Google Knowledge Panel live in 3 weeks",
    result: "47% increase in Amazon discoverability",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-foreground mb-16">
          Portfolio
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group">
              <div className="relative bg-muted rounded-xl p-6 flex items-center justify-center h-72 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-56 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/80 rounded-xl flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-primary-foreground font-semibold text-sm mb-2">
                    {c.metric}
                  </p>
                  <p className="text-primary-foreground/70 text-xs">
                    {c.result}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-foreground text-sm">
                  {c.title}
                </p>
                <p className="text-xs text-muted-foreground">{c.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
