import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 mx-auto max-w-2xl">
          Stop Letting Your Book Go Unnoticed
        </h2>
        <p className="text-foreground/60 text-lg mb-10 max-w-lg mx-auto">
          Your book deserves visibility — put it where readers are already looking.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/intake">Start My Placement Now</a>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
