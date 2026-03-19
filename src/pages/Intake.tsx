import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, BookOpen, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  bookTitle: z.string().trim().min(1, "Book title is required").max(200),
  authorName: z.string().trim().min(1, "Author name is required").max(100),
  bookGenre: z.string().trim().min(1, "Please select a genre").max(100),
  amazonLink: z.string().trim().url("Please enter a valid URL").max(500).or(z.literal("")),
  goodreadsLink: z.string().trim().url("Please enter a valid URL").max(500).or(z.literal("")),
  mainGoal: z.enum(["visibility", "sales", "both"], { required_error: "Please select a goal" }),
  currentSituation: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  email: z.string().trim().email("Please enter a valid email").max(255),
});

type FormData = z.infer<typeof formSchema>;

const genres = [
  "Romance", "Mystery / Thriller", "Science Fiction", "Fantasy",
  "Non-Fiction", "Self-Help", "Biography / Memoir", "Horror",
  "Literary Fiction", "Children's", "Young Adult", "Historical Fiction",
  "Business", "Poetry", "Other",
];

const Intake = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookTitle: "",
      authorName: "",
      bookGenre: "",
      amazonLink: "",
      goodreadsLink: "",
      mainGoal: undefined,
      currentSituation: undefined,
      budget: "",
      email: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`New Book Placement Request: ${data.bookTitle}`);
    const body = encodeURIComponent(
      `Book Title: ${data.bookTitle}\nAuthor: ${data.authorName}\nGenre: ${data.bookGenre}\nAmazon Link: ${data.amazonLink || "N/A"}\nGoodreads Link: ${data.goodreadsLink || "N/A"}\nMain Goal: ${data.mainGoal}\nCurrent Situation: ${data.currentSituation || "N/A"}\nBudget: ${data.budget}\nEmail: ${data.email}`
    );
    window.location.href = `mailto:lindarlyonn@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    toast({ title: "Opening your email client…", description: "Send the pre-filled email to complete your submission." });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md space-y-6">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl text-foreground">Thank You!</h1>
          <p className="text-foreground/60 leading-relaxed">
            Your email client should have opened with your submission details. Send that email and I'll personally review your book and get back to you with the best placement strategy.
          </p>
          <Button variant="outline" asChild>
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-accent text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            <span>Linda R. Lyon — Book Marketing Specialist</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-foreground">
            Let's Get Your Book in Front of the Right Readers
          </h1>
          <p className="text-base text-foreground/60 max-w-xl mx-auto leading-relaxed">
            Tell me about your book and goals. I'll review it and recommend the best Goodreads Listopia placement strategy for organic visibility and sales.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Simple process. No ads. Real reader discovery.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-2xl border border-border p-8 sm:p-10 space-y-7"
            style={{ boxShadow: "var(--shadow-lifted)" }}
          >
            {/* Book Title */}
            <div className="space-y-2">
              <Label htmlFor="bookTitle">Book Title *</Label>
              <Input id="bookTitle" placeholder="Enter your book title" {...register("bookTitle")} className="rounded-xl" />
              {errors.bookTitle && <p className="text-sm text-destructive">{errors.bookTitle.message}</p>}
            </div>

            {/* Author Name */}
            <div className="space-y-2">
              <Label htmlFor="authorName">Author Name *</Label>
              <Input id="authorName" placeholder="Your name or pen name" {...register("authorName")} className="rounded-xl" />
              {errors.authorName && <p className="text-sm text-destructive">{errors.authorName.message}</p>}
            </div>

            {/* Genre */}
            <div className="space-y-2">
              <Label>Book Genre *</Label>
              <Select onValueChange={(v) => setValue("bookGenre", v)}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select your genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((g) => (
                    <SelectItem key={g} value={g}>{g}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.bookGenre && <p className="text-sm text-destructive">{errors.bookGenre.message}</p>}
            </div>

            {/* Links */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="amazonLink">Amazon Link <span className="text-muted-foreground">(optional)</span></Label>
                <Input id="amazonLink" placeholder="https://amazon.com/..." {...register("amazonLink")} className="rounded-xl" />
                {errors.amazonLink && <p className="text-sm text-destructive">{errors.amazonLink.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="goodreadsLink">Goodreads Link <span className="text-muted-foreground">(optional)</span></Label>
                <Input id="goodreadsLink" placeholder="https://goodreads.com/..." {...register("goodreadsLink")} className="rounded-xl" />
                {errors.goodreadsLink && <p className="text-sm text-destructive">{errors.goodreadsLink.message}</p>}
              </div>
            </div>

            {/* Main Goal */}
            <div className="space-y-3">
              <Label>What's your main goal? *</Label>
              <RadioGroup onValueChange={(v) => setValue("mainGoal", v as FormData["mainGoal"])} className="flex flex-wrap gap-4">
                {[
                  { value: "visibility", label: "Increase visibility" },
                  { value: "sales", label: "Increase sales" },
                  { value: "both", label: "Both" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-sm text-foreground/80">
                    <RadioGroupItem value={opt.value} />
                    {opt.label}
                  </label>
                ))}
              </RadioGroup>
              {errors.mainGoal && <p className="text-sm text-destructive">{errors.mainGoal.message}</p>}
            </div>

            {/* Current Situation */}
            <div className="space-y-2">
              <Label>What best describes your current situation? <span className="text-muted-foreground">(optional)</span></Label>
              <Select onValueChange={(v) => setValue("currentSituation", v)}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select one…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Just published">Just published</SelectItem>
                  <SelectItem value="Not getting enough visibility">Not getting enough visibility</SelectItem>
                  <SelectItem value="Running ads but need organic growth">Already running ads but need organic growth</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label>Budget Range *</Label>
              <Select onValueChange={(v) => setValue("budget", v)}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select your budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$10 – $50">$10 – $50</SelectItem>
                  <SelectItem value="$50 – $150">$50 – $150</SelectItem>
                  <SelectItem value="$150+">$150+</SelectItem>
                </SelectContent>
              </Select>
              {errors.budget && <p className="text-sm text-destructive">{errors.budget.message}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register("email")} className="rounded-xl" />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
              <Send className="w-4 h-4" />
              Submit & Get My Placement Strategy
            </Button>

            <p className="text-xs text-center text-muted-foreground leading-relaxed">
              I personally review every submission and respond with the best next step for your book.
            </p>
          </form>

          {/* Trust Bullets */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            {["Targeted Goodreads List placements", "Long-term organic discovery", "Built for indie authors"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          {/* What Happens Next */}
          <div className="mt-14 max-w-md mx-auto text-center space-y-6">
            <h2 className="text-2xl text-foreground">What Happens Next</h2>
            <div className="space-y-4 text-sm text-foreground/60">
              {[
                "I review your book and niche",
                "I identify the best-performing reader lists",
                "I send you a clear plan or next steps",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intake;
