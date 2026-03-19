const testimonials = [
  {
    quote:
      "Within two weeks of working with Linda, my book appeared on 12 Goodreads lists. My organic sales doubled the following month.",
    name: "Sarah Mitchell",
    title: "Author of The Last Horizon",
  },
  {
    quote:
      "I was spending $800/month on Amazon ads with diminishing returns. Linda's approach gave me sustainable visibility without the ad spend.",
    name: "James Crawford",
    title: "Historical Fiction Author",
  },
  {
    quote:
      "Linda doesn't just place your book — she builds your entire discoverability ecosystem. My Google Knowledge Panel went live within 3 weeks.",
    name: "Dr. Nina Brooks",
    title: "Non-Fiction Author",
  },
  {
    quote:
      "The ROI speaks for itself. 300% increase in Goodreads impressions and a consistent stream of new readers every month.",
    name: "Emma Hart",
    title: "Romance Author",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-foreground mb-16">
          What Authors Say
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
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
