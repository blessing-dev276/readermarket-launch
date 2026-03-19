import { Button } from "@/components/ui/button";
import bookImage from "@/assets/book-1.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — 60% */}
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground">
              Get Your Book Discovered by Real Readers — Not Ads
            </h1>
            <p className="text-lg text-foreground/60 max-w-xl leading-relaxed tracking-wide">
              I help authors increase visibility and organic sales through
              Goodreads Listopia placements and strategic book optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#cta">Get Started</a>
              </Button>
              <Button variant="heroGhost" size="lg" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>

          {/* Right — 40% */}
          <div className="lg:col-span-2 relative flex justify-center">
            <div className="relative">
              <img
                src={bookImage}
                alt="Book with Goodreads placement badge"
                className="w-56 lg:w-72 drop-shadow-2xl"
                loading="eager"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                #1 Listopia Placement
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
