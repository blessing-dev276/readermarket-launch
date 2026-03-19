import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import lindaPortrait from "@/assets/linda-portrait.png";

const PersonalBrandSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft gradient background */}
              <div className="absolute inset-0 -m-6 rounded-2xl bg-gradient-to-br from-muted to-secondary opacity-60" />
              <img
                src={lindaPortrait}
                alt="Linda R. Lyon — Book Marketing Specialist"
                className="relative w-72 sm:w-80 lg:w-96 aspect-[4/5] object-cover object-top rounded-2xl"
                style={{ boxShadow: "var(--shadow-lifted)" }}
                loading="lazy"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                Book Marketing Specialist — USA
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="space-y-6 max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-foreground">
              Hi, I'm Linda — I Help Authors Get Seen
            </h2>

            <div className="space-y-4 text-foreground/65 leading-relaxed">
              <p>
                Most books don't fail because they're bad — they fail because no
                one sees them.
              </p>
              <p>
                I specialize in getting books placed where readers are already
                looking — especially on Goodreads Listopia, where discovery
                actually happens.
              </p>
              <p>
                I focus on simple, effective strategies that bring long-term
                visibility — not short-term hype.
              </p>
            </div>

            {/* Trust bullets */}
            <div className="space-y-2.5 pt-2">
              {[
                "Focused on organic book discovery",
                "Works with indie and self-published authors",
                "Strategy-first approach, not guesswork",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-foreground/75"
                >
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/intake">Work With Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBrandSection;
