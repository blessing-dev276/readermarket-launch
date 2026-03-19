import { Button } from "@/components/ui/button";
import book1 from "@/assets/book-1.png";
import book2 from "@/assets/book-2.png";
import book3 from "@/assets/book-3.png";
import book4 from "@/assets/book-4.png";
import book5 from "@/assets/book-5.png";
import { CheckCircle, MapPin, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left — 60% */}
            <div className="lg:col-span-3 space-y-7">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-foreground">
                Your Book Isn't Invisible — It's Just Not Placed Where Readers Look
              </h1>
              <p className="text-lg text-foreground/60 max-w-xl leading-relaxed tracking-wide">
                I help authors get featured on high-traffic Goodreads Listopia lists so real readers can discover their books organically — without relying on ads.
              </p>

              {/* Proof lines */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Placed books on multiple reader-curated lists</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Helping authors increase visibility and organic discovery</span>
                </div>
              </div>

              {/* Urgency line */}
              <p className="text-sm font-semibold text-accent italic">
                If your book isn't on these lists, readers will never find it.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/intake">Get My Book on Goodreads Lists</a>
                </Button>
                <Button variant="heroGhost" size="lg" asChild>
                  <a href="#portfolio">See Real Results</a>
                </Button>
              </div>
            </div>

            {/* Right — Multi-book display */}
            <div className="lg:col-span-2 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Stacked book covers */}
                <div className="flex items-end justify-center gap-3">
                  <img
                    src={book4}
                    alt="Book placement example"
                    className="w-24 lg:w-28 drop-shadow-xl -rotate-6 translate-y-4 opacity-70"
                    loading="eager"
                  />
                  <img
                    src={book2}
                    alt="Book placement example"
                    className="w-28 lg:w-32 drop-shadow-xl -rotate-2 translate-y-1 opacity-85"
                    loading="eager"
                  />
                  <img
                    src={book1}
                    alt="Featured book on Goodreads list"
                    className="w-32 lg:w-40 drop-shadow-2xl z-10 relative"
                    loading="eager"
                  />
                  <img
                    src={book3}
                    alt="Book placement example"
                    className="w-28 lg:w-32 drop-shadow-xl rotate-2 translate-y-1 opacity-85"
                    loading="eager"
                  />
                  <img
                    src={book5}
                    alt="Book placement example"
                    className="w-24 lg:w-28 drop-shadow-xl rotate-6 translate-y-4 opacity-70"
                    loading="eager"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  Featured on Goodreads Lists
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-border bg-muted/50">
        <div className="container mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Trusted by indie authors</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>USA-based service</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Focused on organic book discovery</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
