const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <p className="font-serif text-lg tracking-tight text-foreground">
              Linda R. Lyon
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Book Marketing Specialist
            </p>
            <p className="text-sm text-muted-foreground">United States</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Links</p>
            <nav className="space-y-2">
              {["Services", "Portfolio", "How It Works", "Testimonials"].map(
                (l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                )
              )}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-3">
              Contact
            </p>
            <a
              href="mailto:lindarlyonn@gmail.com"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              hello@lindarlyon.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Linda R. Lyon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
