import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 mx-auto max-w-2xl">
          Ready to Get Your Book Seen?
        </h2>
        <p className="text-foreground/60 text-lg mb-10 max-w-lg mx-auto">
          Let's build a visibility strategy that works while you write your
          next bestseller.
        </p>
        <Button variant="hero" size="lg">
          Start Your Project
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
