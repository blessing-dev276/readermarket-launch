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
    label: "Placed on Top Goodreads Lists",
    stat: "Featured on multiple Listopia categories",
  },
  {
    image: book2,
    title: "Echoes of Florence",
    author: "James Crawford",
    label: "Increased Visibility",
    stat: "Improved book exposure significantly",
  },
  {
    image: book3,
    title: "Under the Willow",
    author: "Emma Hart",
    label: "Organic Discovery Growth",
    stat: "Consistent new reader traffic monthly",
  },
  {
    image: book4,
    title: "Neon Meridian",
    author: "Alex Petrov",
    label: "Placed on Top Goodreads Lists",
    stat: "Featured on multiple Listopia categories",
  },
  {
    image: book5,
    title: "The Clarity Path",
    author: "Dr. Nina Brooks",
    label: "Increased Visibility",
    stat: "Improved discoverability across platforms",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-foreground mb-16">
          Real Results
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
                {/* Label badge */}
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {c.label}
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-foreground text-sm">
                  {c.title}
                </p>
                <p className="text-xs text-muted-foreground">{c.author}</p>
                <p className="text-xs text-accent mt-1 font-medium">{c.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
