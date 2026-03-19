const testimonials = [
  {
    quote: "I started getting consistent visibility without ads. This changed everything for my book launch.",
    name: "Sarah Mitchell",
    title: "Author of The Last Horizon",
  },
  {
    quote: "Exactly what I needed to get my book noticed. The process was simple and the results spoke for themselves.",
    name: "James Crawford",
    title: "Historical Fiction Author",
  },
  {
    quote: "Simple process, real results. My book was placed on lists I didn't even know existed.",
    name: "Dr. Nina Brooks",
    title: "Non-Fiction Author",
  },
  {
    quote: "I stopped spending on ads and started seeing organic readers find my books. Couldn't ask for more.",
    name: "Emma Hart",
    title: "Romance Author",
  },
  {
    quote: "Linda's approach is refreshingly straightforward. Real placements, real readers, real growth.",
    name: "Alex Petrov",
    title: "Sci-Fi Author",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-foreground mb-16">
          What Authors Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-card rounded-xl p-6 flex flex-col justify-between"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <p className="text-foreground/70 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <footer>
                <p className="font-semibold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
