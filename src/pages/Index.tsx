import { useMemo, useState } from "react";
import {
  ArrowLeftRight,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Image,
  Italic,
  Keyboard,
  List,
  Moon,
  Plus,
  Redo2,
  RotateCcw,
  Save,
  Search,
  Sigma,
  Sparkles,
  Tags,
  Trash2,
  Type,
  Undo2,
  Volume2,
  X,
} from "lucide-react";

const decks = [
  { name: "Physics Formulas", cards: 42, progress: 72, color: "bg-study-front" },
  { name: "Spanish Verbs", cards: 28, progress: 54, color: "bg-success" },
  { name: "HCI Principles", cards: 36, progress: 88, color: "bg-accent" },
];

const templates = ["Definition", "Formula", "Q&A", "Diagram"];

const stats = [
  { label: "Retention", value: "86%", icon: Brain },
  { label: "Study streak", value: "9 days", icon: Sparkles },
  { label: "Due today", value: "18", icon: Clock3 },
];

const principles = [
  { title: "Safety", text: "Auto-save, undo/redo, restore history, and delete confirmation reduce costly mistakes." },
  { title: "Utility", text: "Rich text, equations, imagery, audio cues, tags, and templates support real coursework." },
  { title: "Efficiency", text: "One-click creation, shortcuts, smart templates, and inline editing minimize setup effort." },
  { title: "Effectiveness", text: "Flip, quiz, timed review, and spaced repetition address different learning strategies." },
];

const Index = () => {
  const [flipped, setFlipped] = useState(false);
  const [showSafety, setShowSafety] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("Formula");

  const autosaveText = useMemo(() => "Auto-saved 8 seconds ago", []);

  return (
    <main className="mlfi-shell min-h-screen text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col lg:flex-row">
        <aside className="border-b border-border/70 bg-sidebar/90 px-4 py-4 backdrop-blur-xl lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-md bg-gradient-primary text-primary-foreground shadow-soft">
                <BookOpen className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">MLFI Studio</p>
                <h1 className="font-display text-2xl font-bold leading-none text-foreground">Micro-Learn</h1>
              </div>
            </div>
            <button aria-label="Toggle high contrast theme" className="rounded-md border border-border bg-card p-2 text-muted-foreground transition hover:scale-105 hover:text-primary">
              <Moon className="size-4" />
            </button>
          </div>

          <div className="mt-7 flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 shadow-card">
            <Search className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search decks, tags, equations...</span>
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Decks & categories</p>
              <button aria-label="Create deck" className="rounded-md bg-primary p-1.5 text-primary-foreground transition hover:scale-105">
                <Plus className="size-4" />
              </button>
            </div>
            {decks.map((deck) => (
              <button key={deck.name} className="group w-full rounded-md border border-border bg-card p-3 text-left shadow-card transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`size-2.5 rounded-full ${deck.color}`} />
                    <span className="font-semibold text-card-foreground">{deck.name}</span>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{deck.cards} cards</span>
                  <span>{deck.progress}% mastered</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${deck.progress}%` }} />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-7 rounded-md border border-border bg-gradient-card p-4 shadow-card">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Keyboard className="size-4 text-primary" />
              Fast path
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <span className="rounded-sm bg-muted px-2 py-1">N New</span>
              <span className="rounded-sm bg-muted px-2 py-1">F Flip</span>
              <span className="rounded-sm bg-muted px-2 py-1">⌘Z Undo</span>
              <span className="rounded-sm bg-muted px-2 py-1">S Save</span>
            </div>
          </div>
        </aside>

        <section className="flex-1 px-4 py-4 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4 rounded-md border border-border bg-card/85 p-4 shadow-soft backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Focused learning workspace</p>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Create, protect, and study rich flashcards.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground transition hover:-translate-y-0.5 hover:shadow-card">
                <RotateCcw className="size-4" /> Version history
              </button>
              <button className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
                <Plus className="size-4" /> New card
              </button>
            </div>
          </header>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="animate-float-in rounded-md border border-border bg-card/90 p-4 shadow-card backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <stat.icon className="size-5 text-primary" />
                </div>
                <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-md border border-border bg-card/90 shadow-soft backdrop-blur-xl">
              <div className="flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Flashcard creation module</p>
                  <h3 className="font-display text-2xl font-bold text-foreground">Front | Back split editor</h3>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-success/10 px-3 py-2 text-sm font-semibold text-success">
                  <span className="size-2 rounded-full bg-success animate-pulse-save" />
                  {autosaveText}
                </div>
              </div>

              <div className="grid gap-4 p-4 lg:grid-cols-[1fr_1fr]">
                <div className="rounded-md border border-border bg-surface-raised p-4">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {[Type, Italic, List, Sigma, Image, Volume2, Undo2, Redo2].map((Icon, index) => (
                      <button key={index} aria-label="Editor tool" className="rounded-md border border-border bg-card p-2 text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary hover:shadow-card">
                        <Icon className="size-4" />
                      </button>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-foreground">Front</label>
                    <div className="min-h-36 rounded-md border border-input bg-background p-4 text-ink-soft shadow-inner">
                      What is the relationship between force, mass, and acceleration?
                    </div>
                    <label className="text-sm font-bold text-foreground">Back</label>
                    <div className="min-h-44 rounded-md border border-input bg-background p-4 text-ink-soft shadow-inner">
                      <p className="font-semibold text-foreground">Newton&apos;s Second Law</p>
                      <p className="mt-2">F = m × a</p>
                      <p className="mt-2 text-sm text-muted-foreground">Force equals mass multiplied by acceleration.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border border-border bg-gradient-card p-4 shadow-card">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-bold text-foreground">Live preview</h4>
                    <span className="rounded-sm bg-accent px-2 py-1 text-xs font-bold text-accent-foreground">{selectedTemplate}</span>
                  </div>
                  <div className="mt-4 rounded-md border border-border bg-card p-5 shadow-card">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Physics</p>
                    <p className="mt-3 text-xl font-bold text-foreground">F = m × a</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Sigma className="size-4" /> Equation-ready content
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {templates.map((template) => (
                      <button key={template} onClick={() => setSelectedTemplate(template)} className={`rounded-md border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${selectedTemplate === template ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-card-foreground hover:border-primary/40"}`}>
                        {template}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-md border border-border bg-card/90 p-4 shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Study mode</p>
                  <h3 className="font-display text-2xl font-bold text-foreground">Flip + spaced review</h3>
                </div>
                <button onClick={() => setFlipped((value) => !value)} className="rounded-md bg-secondary p-2 text-secondary-foreground transition hover:rotate-6 hover:scale-105" aria-label="Flip card">
                  <ArrowLeftRight className="size-5" />
                </button>
              </div>

              <button onClick={() => setFlipped((value) => !value)} className="study-perspective mt-5 block w-full text-left" aria-label="Interactive flashcard">
                <div className={`study-card-inner relative min-h-72 rounded-md transition duration-500 motion-reduce:transition-none ${flipped ? "rotate-y-180" : ""}`}>
                  <div className="study-card-face absolute inset-0 rounded-md border border-border bg-study-front p-6 text-primary-foreground shadow-soft">
                    <p className="text-sm font-semibold opacity-80">Question</p>
                    <p className="mt-8 text-2xl font-bold leading-tight">Which HCI principle prevents accidental data loss?</p>
                    <p className="mt-10 text-sm opacity-80">Tap to reveal answer</p>
                  </div>
                  <div className="study-card-face absolute inset-0 rotate-y-180 rounded-md border border-border bg-study-back p-6 text-primary-foreground shadow-soft">
                    <p className="text-sm font-semibold opacity-80">Answer</p>
                    <p className="mt-8 text-2xl font-bold leading-tight">Safety: auto-save, confirmation prompts, undo/redo, and version history.</p>
                  </div>
                </div>
              </button>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-3 py-3 font-bold text-card-foreground transition hover:-translate-y-0.5 hover:border-warning hover:text-warning">
                  <RotateCcw className="size-4" /> Review again
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-success px-3 py-3 font-bold text-success-foreground transition hover:-translate-y-0.5 hover:shadow-card">
                  <Check className="size-4" /> Know
                </button>
              </div>

              <div className="mt-5 rounded-md border border-border bg-surface-tinted p-4">
                <div className="flex items-center justify-between text-sm font-semibold text-secondary-foreground">
                  <span>Session progress</span>
                  <span>12 / 18</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-card">
                  <div className="h-full w-2/3 rounded-full bg-gradient-primary" />
                </div>
              </div>
            </section>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-md border border-border bg-card/90 p-4 shadow-card backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-foreground">Safety flow</h3>
                <button onClick={() => setShowSafety(true)} className="inline-flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm font-bold text-destructive transition hover:-translate-y-0.5">
                  <Trash2 className="size-4" /> Delete card
                </button>
              </div>
              <div className="mt-4 rounded-md border border-border bg-muted/60 p-4">
                <p className="text-sm text-muted-foreground">Destructive actions trigger confirmation, while unsaved exits offer Save, Discard, or Cancel paths.</p>
              </div>
              {showSafety && (
                <div className="mt-4 rounded-md border border-destructive/40 bg-card p-4 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-foreground">Delete this flashcard?</p>
                      <p className="mt-1 text-sm text-muted-foreground">This action is reversible from version history for 30 days.</p>
                    </div>
                    <button onClick={() => setShowSafety(false)} aria-label="Close dialog" className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
                      <X className="size-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="rounded-md bg-destructive px-3 py-2 text-sm font-bold text-destructive-foreground">Delete</button>
                    <button className="rounded-md border border-border bg-card px-3 py-2 text-sm font-bold text-card-foreground" onClick={() => setShowSafety(false)}>Cancel</button>
                  </div>
                </div>
              )}
            </section>

            <section className="rounded-md border border-border bg-card/90 p-4 shadow-card backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-foreground">HCI design mapping</h3>
                <BarChart3 className="size-5 text-primary" />
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {principles.map((item) => (
                  <article key={item.title} className="rounded-md border border-border bg-surface-raised p-4 transition hover:-translate-y-0.5 hover:shadow-card">
                    <div className="flex items-center gap-2 font-bold text-foreground">
                      <FileText className="size-4 text-primary" /> {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <footer className="mt-5 flex flex-col gap-3 rounded-md border border-border bg-card/85 p-4 text-sm text-muted-foreground shadow-card backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2"><Tags className="size-4 text-primary" /> Tags: physics, formula, exam</span>
              <span className="inline-flex items-center gap-2"><Save className="size-4 text-success" /> Reliable auto-save enabled</span>
            </div>
            <span>Designed for keyboard navigation, readable contrast, and low cognitive load.</span>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default Index;
