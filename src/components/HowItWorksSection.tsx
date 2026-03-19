const steps = [
  {
    step: "01",
    title: "Submit Your Book Details",
    description:
      "Share your book title, genre, target audience, and goals. We'll take it from there.",
  },
  {
    step: "02",
    title: "We Identify & Optimize",
    description:
      "We research the best-performing lists for your niche and optimize your book's presence across platforms.",
  },
  {
    step: "03",
    title: "Get Discovered",
    description:
      "Your book gets placed and discovered by real readers who are actively looking for their next great read.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-foreground mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i}>
              <span className="text-accent font-serif text-5xl italic leading-none">
                {s.step}
              </span>
              <h3 className="font-sans font-semibold text-foreground mt-4 mb-2 tracking-normal text-lg">
                {s.title}
              </h3>
              <p className="text-sm text-foreground/60">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
