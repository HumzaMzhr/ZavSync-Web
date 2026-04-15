import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import aiSection from "@/assets/ai-section.jpg";
import {
  Layers, Brain, BarChart3, Shield, Zap, TrendingUp,
  Users, DollarSign, BookOpen, Briefcase, Building2,
  Bot, Search, MessageSquare, ArrowRight, Check, ChevronRight
} from "lucide-react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </section>
  );
}

// ─── Navbar ──────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src={logo} alt="ZavSync" className="h-8" />
        <div className="hidden md:flex items-center gap-8">
          {["Features", "AI", "Pricing", "Roadmap"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
          <Button variant="hero" size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────
function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-4 tracking-wider text-sm uppercase">Unified · Intelligent · Synchronized</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Run Your Entire Business from{" "}
            <span className="text-gradient">One Intelligent Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            ZavSync unifies HR, payroll, accounting, CRM, banking, and AI-powered operations into a single synchronized platform. Eliminate fragmented tools and operate with clarity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="text-base px-8">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Features ──────────────────────────────
const features = [
  { icon: Users, title: "HR Management", desc: "Employee profiles, attendance, leave management, and self-service portal." },
  { icon: DollarSign, title: "Payroll Automation", desc: "Salary calculations, tax handling, payslip generation, and compliance." },
  { icon: BookOpen, title: "Accounting & Finance", desc: "Chart of accounts, general ledger, invoicing, and financial reporting." },
  { icon: Briefcase, title: "CRM & Sales", desc: "Track leads, manage pipelines, and drive revenue with activity tracking." },
  { icon: Building2, title: "Banking & Cash Flow", desc: "Bank account tracking, transaction monitoring, and financial insights." },
];

function Features() {
  return (
    <Section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Platform Features</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Everything You Need,{" "}<span className="text-gradient">One Platform</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Each module is connected through a unified data layer, ensuring seamless workflows and accurate insights.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="features">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
          <div className="glass-card rounded-xl p-6 border-primary/20 glow-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">AI Operations Layer</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Intelligent automation, knowledge search, and AI-powered business execution.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Why ZavSync ──────────────────────────────
const whyItems = [
  { icon: Layers, title: "Unified Platform", desc: "All business operations in one place." },
  { icon: Zap, title: "Intelligent Automation", desc: "AI reduces manual effort and improves decisions." },
  { icon: BarChart3, title: "Real-Time Visibility", desc: "Synchronized financial and operational data." },
  { icon: TrendingUp, title: "Scalable Architecture", desc: "From startups to enterprise organizations." },
  { icon: Shield, title: "Secure by Design", desc: "Role-based access, audit logs, data isolation." },
];

function WhySection() {
  return (
    <Section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Core Value</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Why <span className="text-gradient">ZavSync</span></h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whyItems.map((w, i) => (
            <div key={i} className="text-center group">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <w.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-1">{w.title}</h3>
              <p className="text-muted-foreground text-sm">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── AI Section ──────────────────────────────
function AISection() {
  const aiFeatures = [
    { icon: Bot, title: "AI Ops Assistant", items: ["Categorize & prioritize tasks", "Suggest workflows", "Automate routine operations"] },
    { icon: Search, title: "Internal AI Knowledge", items: ["Upload documents", "Search internal knowledge", "Department-based access control"] },
    { icon: MessageSquare, title: "AI Execution Copilot", items: ["Natural language commands", "Review before execution", "Full control & transparency"], upcoming: true },
  ];
  return (
    <Section className="py-24 px-6" >
      <div className="container mx-auto" id="ai">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Core Differentiator</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">AI-Powered{" "}<span className="text-gradient">Business Operations</span></h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">ZavSync introduces an intelligent AI layer that enhances every aspect of your business.</p>
            <div className="space-y-8">
              {aiFeatures.map((f, i) => (
                <div key={i} className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <f.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">{f.title}</h3>
                    {f.upcoming && <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Upcoming</span>}
                  </div>
                  <ul className="space-y-1.5 ml-13">
                    {f.items.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={aiSection} alt="AI Operations" className="rounded-2xl w-full" loading="lazy" width={1280} height={720} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Pricing ──────────────────────────────
function Pricing() {
  const included = ["HR Management (Basic)", "Payroll (Basic)", "Accounting (Core)", "CRM (Basic)", "Invoice Management", "1 Company Setup"];
  const limits = ["Up to 10 Employees", "Up to 5 Users", "1,000 Invoices/mo", "1 Bank Account", "5GB Storage"];
  return (
    <Section className="py-24 px-6 bg-secondary/30" >
      <div className="container mx-auto max-w-3xl" id="pricing">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Starter Plan</h2>
          <p className="text-muted-foreground">Designed for small teams and growing businesses.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-12 glow-border">
          <div className="text-center mb-8">
            <span className="text-5xl font-heading font-bold text-gradient">Free</span>
            <p className="text-muted-foreground mt-2">Early Access · Limited Time</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Included</h4>
              <ul className="space-y-2.5">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Limits</h4>
              <ul className="space-y-2.5">
                {limits.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Button variant="hero" size="lg" className="text-base px-10">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Roadmap ──────────────────────────────
const phases = [
  { label: "Phase 1", title: "Foundation", items: ["Core modules (HR, Payroll, Accounting, CRM)", "Basic AI assistant"] },
  { label: "Phase 2", title: "Expansion", items: ["Advanced workflows", "CRM automation", "Financial enhancements"] },
  { label: "Phase 3", title: "Intelligence", items: ["AI enrichment", "Smart recommendations"] },
  { label: "Phase 4", title: "Controlled Automation", items: ["Approval-based AI execution", "Rules-based automation"] },
  { label: "Phase 5", title: "Full AI OS", items: ["End-to-end AI workflows", "Predictive insights"] },
];

function Roadmap() {
  return (
    <Section className="py-24 px-6">
      <div className="container mx-auto" id="roadmap">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Roadmap</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Product <span className="text-gradient">Roadmap</span></h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {phases.map((p, i) => (
            <div key={i} className={`glass-card rounded-xl p-5 ${i === 0 ? "border-primary/30 glow-border" : ""}`}>
              <span className="text-xs text-primary font-medium">{p.label}</span>
              <h3 className="font-heading font-semibold mt-1 mb-3">{p.title}</h3>
              <ul className="space-y-1.5">
                {p.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-xs flex items-start gap-1.5">
                    <ChevronRight className="h-3 w-3 text-primary shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── CTA ──────────────────────────────
function CTA() {
  return (
    <Section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Start Operating{" "}<span className="text-gradient">Smarter</span></h2>
        <p className="text-muted-foreground mb-8 text-lg">Experience a new way of running your business—fully unified, intelligent, and synchronized.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8">Request a Demo</Button>
        </div>
      </div>
    </Section>
  );
}

// ─── Footer ──────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <img src={logo} alt="ZavSync" className="h-6 mb-2" />
          <p className="text-muted-foreground text-xs">Unified. Intelligent. Synchronized.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {["About", "Platform", "Features", "Pricing", "Roadmap", "Contact", "Privacy", "Terms"].map(l => (
            <a key={l} href="#" className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">© ZavSync. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhySection />
      <Features />
      <AISection />
      <Pricing />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
}
