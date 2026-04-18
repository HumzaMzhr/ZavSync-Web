import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import hero3d from "@/assets/hero-3d.jpg";
import dashboardImg from "@/assets/dashboard-zavsync.jpg";
import securityLock from "@/assets/security-lock.jpg";
import {
  Layers, Brain, BarChart3, Shield, Zap, TrendingUp,
  Users, DollarSign, BookOpen, Briefcase, Building2,
  Bot, Search, MessageSquare, ArrowRight, Check, ChevronRight,
  Menu, X, ChevronDown, Globe, Mail, Phone,
  MapPin, Twitter, Linkedin, Github, Instagram, Facebook, Youtube,
  PieChart, Activity, Target, Clock, FileText, Lock, Eye, Database,
  Workflow, Plug, Sparkles, Rocket, ShieldCheck, EyeOff, ServerOff
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid,
  PieChart as RPieChart, Pie, Cell, RadialBarChart, RadialBar
} from "recharts";

// ─── Helpers ──────────────────────────────
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} id={id} className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </section>
  );
}

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-primary text-xs font-medium uppercase tracking-[0.25em] mb-3 font-heading">{children}</p>
);

// ─── Navbar ──────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Features", "How It Works", "AI", "Analytics", "Privacy", "Pricing", "FAQ"];
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-2 px-6 min-h-[120px] gap-6">
        <img src={logo} alt="ZavSync" className="h-36 md:h-44 lg:h-48 w-auto shrink-0" />
        <div className="flex items-center gap-6 ml-auto">
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">{l}</a>
            ))}
          </div>
          <Button variant="hero" size="sm" className="hidden md:inline-flex">Get Started</Button>
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-2">{l}</a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2">Get Started</Button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ──────────────────────────────
const heroRevenue = [
  { m: "Jan", v: 42 }, { m: "Feb", v: 55 }, { m: "Mar", v: 49 },
  { m: "Apr", v: 70 }, { m: "May", v: 86 }, { m: "Jun", v: 78 },
  { m: "Jul", v: 102 }, { m: "Aug", v: 124 },
];

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-36 md:pt-40">
      <div className="blob bg-primary/40 w-[500px] h-[500px] -top-32 -left-32 animate-blob" />
      <div className="blob bg-accent/30 w-[600px] h-[600px] top-40 -right-40 animate-blob" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <SectionLabel>Unified · Intelligent · Synchronized</SectionLabel>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-6 tracking-tight">
            Run Your Entire Business from{" "}
            <span className="text-gradient">One Intelligent Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed font-light">
            ZavSync is a next-generation business operating system that unifies HR, payroll, accounting, CRM, banking, and AI-powered operations into a single synchronized platform.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-xl mb-10 leading-relaxed font-light">
            Eliminate fragmented tools, manual workflows, and disconnected data. Operate with clarity, control, and intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="text-base px-8">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8">Request Demo</Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> SOC2-ready architecture</span>
            <span className="flex items-center gap-2"><EyeOff className="h-4 w-4 text-primary" /> No third-party data sharing</span>
            <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> AI-native</span>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative card-3d glass-card rounded-2xl p-4 animate-float">
            <img src={hero3d} alt="ZavSync 3D analytics" className="rounded-xl w-full" width={1600} height={1024} />
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 w-56 hidden md:block">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Revenue · Live</p>
              <p className="text-xl font-heading font-bold text-gradient">$1.24M</p>
              <div className="h-12 mt-1">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={heroRevenue}>
                    <defs>
                      <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#hg)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 glass-card rounded-2xl p-3 hidden md:block">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Sync</p>
              <p className="text-sm font-heading font-semibold flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Real-time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Partners ──────────────────────────────
function Partners() {
  const partners = ["JetClean", "GetXm", "Nordic Xpress Limousine", "Bindia"];
  return (
    <Section className="py-16 px-6 border-y border-border/40 bg-background/40">
      <div className="container mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 font-heading">Trusted by forward-thinking teams</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {partners.map(p => (
            <div key={p} className="glass-card rounded-xl py-6 px-4 text-center hover:border-primary/30 transition-all">
              <p className="font-heading font-semibold text-lg tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Positioning ──────────────────────────────
function Positioning() {
  return (
    <Section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>About the Platform</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">A Complete Business{" "}<span className="text-gradient">Operating System</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-light">
              Modern businesses rely on multiple disconnected systems to manage people, finances, customers, and operations. This fragmentation leads to inefficiencies, data silos, errors, and a fundamental lack of visibility across the organization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 font-light">
              ZavSync replaces this entire stack with one unified platform where every module works together in real time—from employee management to financial reporting and AI-driven automation.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Every piece of data flows seamlessly between modules, giving you a complete, accurate picture of your business at any moment.
            </p>
          </div>
          <div className="relative card-3d max-w-md mx-auto lg:max-w-none lg:w-[80%] lg:ml-auto">
            <div className="blob bg-primary/30 w-72 h-72 -top-10 -left-10 animate-blob" />
            <img src={dashboardImg} alt="ZavSync Dashboard" className="relative rounded-2xl w-full shadow-2xl border border-border/50" loading="lazy" width={1280} height={960} />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── How It Works ──────────────────────────────
const steps = [
  { icon: Plug, title: "Connect", desc: "Sign up and connect your existing data—employees, accounts, customers—through guided imports or our APIs." },
  { icon: Workflow, title: "Configure", desc: "Set up your modules with sensible defaults. Customize roles, departments, accounting structure, and pipelines in minutes." },
  { icon: Sparkles, title: "Automate", desc: "Activate AI assistants and workflows. Routine operations like payroll runs, invoicing, and reporting happen automatically." },
  { icon: Rocket, title: "Scale", desc: "Grow with confidence. Real-time dashboards and predictive analytics keep you in control as your business evolves." },
];

function HowItWorks() {
  return (
    <Section className="py-24 px-6 bg-gradient-mesh" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">From Setup to{" "}<span className="text-gradient">Synchronized</span> in Days</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-light">A guided journey from fragmented tools to a unified intelligent operating system.</p>
        </div>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <div key={i} className="relative card-3d glass-card rounded-2xl p-7">
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/30">
                <s.icon className="h-6 w-6 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-border text-[10px] font-heading font-semibold flex items-center justify-center">{i + 1}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Why ZavSync ──────────────────────────────
const whyItems = [
  { icon: Layers, title: "Unified Platform", desc: "All operations in one place—HR, payroll, accounting, CRM, AI." },
  { icon: Zap, title: "Intelligent Automation", desc: "AI enhances workflows, reduces manual effort, improves decisions." },
  { icon: BarChart3, title: "Real-Time Visibility", desc: "Synchronized financial and operational data updated in real time." },
  { icon: TrendingUp, title: "Scalable Architecture", desc: "Grows seamlessly from startups to enterprises." },
  { icon: Shield, title: "Secure by Design", desc: "RBAC, audit logs, encrypted pipelines, and per-company isolation." },
];

function WhySection() {
  return (
    <Section className="py-24 px-6" id="platform">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Core Value</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Why <span className="text-gradient">ZavSync</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-light">Built from the ground up to solve the fundamental problem of business fragmentation.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whyItems.map((w, i) => (
            <div key={i} className="card-3d glass-card rounded-2xl p-6 text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                <w.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{w.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Features ──────────────────────────────
const features = [
  { icon: Users, title: "Human Resource Management", desc: "Employee profiles, attendance & leave, role structuring, document management, and self-service.", details: ["Employee profiles & onboarding", "Attendance & leave tracking", "Role & department structuring", "Document management", "Self-service portal"] },
  { icon: DollarSign, title: "Payroll Automation", desc: "Automate salary processing and ensure compliance with zero manual errors.", details: ["Salary calculations", "Allowances & deductions", "Payslip generation", "Tax handling & compliance", "Accounting integration"] },
  { icon: BookOpen, title: "Accounting & Finance", desc: "A complete financial engine built into your operations.", details: ["Chart of Accounts & General Ledger", "Accounts Receivable & Payable", "Invoice management", "Journal entries", "Financial reporting"] },
  { icon: Briefcase, title: "CRM & Sales Management", desc: "Track leads, manage relationships, and drive revenue growth.", details: ["Companies & contacts", "Sales pipelines", "Activity tracking", "Lead management", "Basic automation"] },
  { icon: Building2, title: "Banking & Cash Flow", desc: "Bank account tracking, transaction monitoring, and cash flow insights.", details: ["Bank account tracking", "Transaction monitoring", "Cash flow overview", "Financial insights", "Reconciliation tools"] },
];

function Features() {
  return (
    <Section className="py-24 px-6" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Platform Features</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Everything You Need,{" "}<span className="text-gradient">One Platform</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">Each module connects through a unified data layer for seamless workflows and accurate insights.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card-3d glass-card rounded-2xl p-7 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">{f.desc}</p>
              <ul className="space-y-1.5">
                {f.details.map((d, j) => (
                  <li key={j} className="text-muted-foreground text-xs flex items-center gap-2 font-light">
                    <Check className="h-3 w-3 text-primary shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="card-3d glass-card rounded-2xl p-7 border-primary/20 glow-border">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/30">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">AI Operations Layer</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">Intelligent automation, knowledge search, and AI-powered execution across modules.</p>
            <ul className="space-y-1.5">
              {["Smart task prioritization", "Workflow automation", "AI-powered insights", "Natural language commands", "Knowledge base search"].map((d, j) => (
                <li key={j} className="text-muted-foreground text-xs flex items-center gap-2 font-light">
                  <Check className="h-3 w-3 text-primary shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Analytics Section with real charts ──────────────────────────────
const revenueData = [
  { m: "Jan", revenue: 42, expense: 28 }, { m: "Feb", revenue: 55, expense: 33 },
  { m: "Mar", revenue: 49, expense: 31 }, { m: "Apr", revenue: 70, expense: 40 },
  { m: "May", revenue: 86, expense: 47 }, { m: "Jun", revenue: 78, expense: 44 },
  { m: "Jul", revenue: 102, expense: 55 }, { m: "Aug", revenue: 124, expense: 62 },
  { m: "Sep", revenue: 138, expense: 68 }, { m: "Oct", revenue: 156, expense: 72 },
];
const departmentData = [
  { name: "Sales", value: 38 }, { name: "Engineering", value: 28 },
  { name: "Operations", value: 18 }, { name: "Support", value: 16 },
];
const pipelineData = [
  { s: "Lead", v: 280 }, { s: "Qualified", v: 180 },
  { s: "Proposal", v: 120 }, { s: "Negotiation", v: 70 }, { s: "Won", v: 42 },
];
const radialData = [{ name: "Health", value: 87, fill: "hsl(var(--primary))" }];

function AnalyticsSection() {
  const stats = [
    { icon: PieChart, value: "360°", label: "Business Visibility" },
    { icon: Activity, value: "Real-Time", label: "Data Sync" },
    { icon: Target, value: "99.9%", label: "Accuracy" },
    { icon: Clock, value: "70%", label: "Time Saved" },
  ];
  const COLORS = ["hsl(var(--primary))", "hsl(var(--primary-glow))", "hsl(var(--accent))", "hsl(188 60% 70%)"];
  return (
    <Section className="py-24 px-6 bg-gradient-mesh" id="analytics">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Live Analytics</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Data-Driven{" "}<span className="text-gradient">Decision Making</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">Real-time dashboards, financial analytics, and operational metrics—built directly into your workflow.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <div key={i} className="card-3d glass-card rounded-2xl p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-3">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="text-2xl font-heading font-bold text-gradient">{s.value}</p>
              <p className="text-muted-foreground text-xs font-light">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 card-3d glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Revenue vs Expense</p>
                <p className="font-heading font-semibold">Last 10 months · Live</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">+24.6%</span>
            </div>
            <div className="h-72">
              <ResponsiveContainer>
                <AreaChart data={revenueData} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="exp" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#rev)" />
                  <Area type="monotone" dataKey="expense" stroke="hsl(var(--accent))" strokeWidth={2} fill="url(#exp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="card-3d glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Workforce</p>
            <p className="font-heading font-semibold mb-3">Department Split</p>
            <div className="h-56">
              <ResponsiveContainer>
                <RPieChart>
                  <Pie data={departmentData} dataKey="value" innerRadius={45} outerRadius={75} paddingAngle={3}>
                    {departmentData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
                </RPieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {departmentData.map((d, i) => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{ background: COLORS[i] }} />
                  <span className="text-muted-foreground">{d.name}</span>
                  <span className="ml-auto font-medium">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card-3d glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">CRM</p>
            <p className="font-heading font-semibold mb-3">Sales Pipeline</p>
            <div className="h-56">
              <ResponsiveContainer>
                <BarChart data={pipelineData} layout="vertical" margin={{ left: -10 }}>
                  <CartesianGrid stroke="hsl(var(--border))" horizontal={false} />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis dataKey="s" type="category" stroke="hsl(var(--muted-foreground))" fontSize={11} width={80} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
                  <Bar dataKey="v" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="card-3d glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Operations</p>
            <p className="font-heading font-semibold mb-3">System Health</p>
            <div className="h-56 relative">
              <ResponsiveContainer>
                <RadialBarChart innerRadius="65%" outerRadius="100%" data={radialData} startAngle={90} endAngle={-270}>
                  <RadialBar background={{ fill: "hsl(var(--secondary))" }} dataKey="value" cornerRadius={20} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-3xl font-heading font-bold text-gradient">87%</p>
                <p className="text-xs text-muted-foreground">Operational</p>
              </div>
            </div>
          </div>
          <div className="card-3d glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Cash Flow</p>
            <p className="font-heading font-semibold mb-3">Daily Movement</p>
            <div className="h-56">
              <ResponsiveContainer>
                <LineChart data={revenueData}>
                  <CartesianGrid stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── AI Section ──────────────────────────────
function AISection() {
  const aiFeatures = [
    { icon: Bot, title: "AI Ops Assistant", desc: "Smart assistance for operational workflows that learns your patterns.", items: ["Categorize & prioritize tasks", "Suggest optimal workflows", "Automate routine operations"] },
    { icon: Search, title: "Internal AI Knowledge", desc: "RAG-powered search across your secure company documents.", items: ["Upload & index documents", "AI-powered contextual answers", "Department-based access control"] },
    { icon: MessageSquare, title: "AI Execution Copilot", desc: "Operate your business using natural language commands.", items: ["Natural language commands", "Structured action generation", "Review before execution"], upcoming: true },
  ];
  return (
    <Section className="py-24 px-6" id="ai">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <SectionLabel>Core Differentiator</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">AI-Powered{" "}<span className="text-gradient">Business Operations</span></h2>
          <p className="text-muted-foreground leading-relaxed font-light">Unlike bolted-on AI features, our intelligence layer is deeply integrated into every module, understanding context across your entire operation.</p>
        </div>
        <div className="space-y-4">
          {aiFeatures.map((f, i) => (
            <div key={i} className="card-3d glass-card rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-7">
              <div className="flex items-center gap-3 md:w-72 md:shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-semibold">{f.title}</h3>
                    {f.upcoming && <span className="text-[10px] bg-accent/15 text-accent px-2 py-0.5 rounded-full font-medium">Upcoming</span>}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-light md:flex-1 md:max-w-md">{f.desc}</p>
              <ul className="md:flex-1 space-y-1.5 md:border-l md:border-border/60 md:pl-6">
                {f.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-center gap-2 font-light">
                    <ChevronRight className="h-3 w-3 text-primary shrink-0" /> {item}
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

// ─── Privacy & Security ──────────────────────────────
function Privacy() {
  const items = [
    { icon: ServerOff, title: "No Third-Party Data Sharing", desc: "Your data is never sold, shared, or accessed by any third party. Period." },
    { icon: Lock, title: "End-to-End Encryption", desc: "AES-256 encryption in transit and at rest. Your data is unreadable to anyone but you." },
    { icon: Shield, title: "Role-Based Access Control", desc: "Granular permissions ensure team members only see what they need." },
    { icon: Database, title: "Per-Company Isolation", desc: "Your data is logically isolated. Zero risk of cross-tenant exposure." },
    { icon: FileText, title: "Complete Audit Logs", desc: "Every action is logged with timestamps and actor identity for full compliance." },
    { icon: EyeOff, title: "Privacy by Default", desc: "Minimal data collection. You own your data and can export or delete at any time." },
  ];
  return (
    <Section className="py-24 px-6 bg-gradient-mesh" id="privacy">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative card-3d order-2 lg:order-1 max-w-sm mx-auto">
            <div className="blob bg-primary/30 w-56 h-56 -bottom-6 -left-6 animate-blob" />
            <img src={securityLock} alt="Privacy & Security" className="relative rounded-2xl w-full shadow-2xl" loading="lazy" width={800} height={800} />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel>Privacy & Security</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Your Data,{" "}<span className="text-gradient">Truly Yours</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-light">
              ZavSync is built privacy-first. We do not share, sell, or expose your data to any third party. Your information lives in encrypted, isolated environments designed to meet enterprise compliance standards.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              No tracking pixels. No data brokering. No advertising networks. Just your business, secured.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div key={i} className="card-3d glass-card rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                <it.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{it.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Industries ──────────────────────────────
function Industries() {
  const industries = [
    { icon: Zap, name: "Startups", desc: "Launch with a complete operating system from day one." },
    { icon: Building2, name: "SMEs", desc: "Scale operations without scaling complexity." },
    { icon: Users, name: "Agencies", desc: "Manage clients, projects, and finances in one place." },
    { icon: Briefcase, name: "Service Businesses", desc: "Streamline service delivery and billing." },
    { icon: DollarSign, name: "Financial Teams", desc: "End-to-end financial management and reporting." },
    { icon: Globe, name: "Multi-Entity Orgs", desc: "Manage multiple companies from a single platform." },
  ];
  return (
    <Section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Industries</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Built for <span className="text-gradient">Every Business</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="card-3d glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <ind.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold">{ind.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Pricing ──────────────────────────────
function Pricing() {
  const included = ["HR Management (Basic)", "Payroll (Basic)", "Accounting (Core)", "CRM (Basic)", "Invoice Management", "1 Company Setup"];
  const limits = ["Up to 10 Employees", "Up to 5 Users", "1,000 Invoices/mo", "1 Bank Account", "5GB Storage"];
  const upcoming = ["Advanced AI Copilot", "Multi-company support", "Advanced payroll", "CRM automation", "AI Outreach Engine", "Enterprise analytics"];
  return (
    <Section className="py-24 px-6" id="pricing">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Simple, Transparent{" "}<span className="text-gradient">Pricing</span></h2>
          <p className="text-muted-foreground font-light">Start free. Scale as you grow.</p>
        </div>
        <div className="card-3d glass-card rounded-3xl p-8 md:p-12 glow-border">
          <div className="text-center mb-10">
            <span className="text-xs text-primary font-heading uppercase tracking-[0.3em]">Starter Plan</span>
            <div className="mt-3"><span className="text-6xl font-heading font-bold text-gradient">Free</span></div>
            <p className="text-muted-foreground mt-2 font-light">Early Access · Limited Time</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-primary">Included</h4>
              <ul className="space-y-2.5">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-light"><Check className="h-4 w-4 text-primary shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-primary">Limits</h4>
              <ul className="space-y-2.5">
                {limits.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-light"><Check className="h-4 w-4 text-primary shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-primary">Coming Soon</h4>
              <ul className="space-y-2.5">
                {upcoming.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-light"><ChevronRight className="h-4 w-4 text-primary/50 shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Button variant="hero" size="lg" className="text-base px-10">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── FAQ ──────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "What is ZavSync?", a: "ZavSync is a unified business operating system that combines HR, payroll, accounting, CRM, banking, and an AI operations layer—all in one synchronized platform." },
    { q: "How is ZavSync different from other business tools?", a: "Most tools focus on a single function. ZavSync is built as a unified platform from the ground up. Every module shares the same data layer for true real-time synchronization." },
    { q: "Do you share my data with third parties?", a: "No. We never sell, share, or expose your data to any third party. There are no advertising networks, no data brokering, and no tracking pixels. Your data is yours." },
    { q: "Is my data secure?", a: "Yes. AES-256 encryption in transit and at rest, role-based access control, audit logs, and per-company data isolation. Built to meet enterprise compliance standards." },
    { q: "How does the AI layer work?", a: "Three layers: AI Ops Assistant automates routine tasks; Internal AI Knowledge enables document search with contextual answers; the upcoming AI Execution Copilot allows natural language commands with review-before-execution safety." },
    { q: "What does the free plan include?", a: "The Starter Plan (free during early access) includes HR, payroll, accounting, CRM, invoice management, 1 company setup, up to 10 employees, 5 users, 1,000 invoices/month, and 5GB storage." },
    { q: "Can I migrate from existing tools?", a: "Yes. ZavSync supports common import formats and we're building direct integrations. Our onboarding helps you transition smoothly." },
    { q: "Can I export or delete my data?", a: "Absolutely. You own your data. Export at any time in standard formats, and request full deletion whenever you want." },
  ];
  return (
    <Section className="py-24 px-6" id="faq">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Frequently Asked{" "}<span className="text-gradient">Questions</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-heading font-semibold text-sm pr-4">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}>
                <p className="px-5 text-muted-foreground text-sm font-light leading-relaxed">{faq.a}</p>
              </div>
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
    <Section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden glass-card rounded-3xl p-12 md:p-20 text-center glow-border">
          <div className="blob bg-primary/30 w-72 h-72 -top-10 -left-10 animate-blob" />
          <div className="blob bg-accent/30 w-72 h-72 -bottom-10 -right-10 animate-blob" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Start Operating{" "}<span className="text-gradient">Smarter</span></h2>
            <p className="text-muted-foreground mb-8 text-lg font-light leading-relaxed max-w-2xl mx-auto">Experience a new way of running your business—fully unified, intelligent, and synchronized.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="text-base px-8">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8">Request a Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Footer ──────────────────────────────
function Footer() {
  const cols = [
    { title: "Platform", links: ["HR Management", "Payroll", "Accounting", "CRM & Sales", "Banking", "AI Operations"] },
    { title: "Product", links: ["Features", "How It Works", "Analytics", "Pricing", "Roadmap", "Changelog"] },
    { title: "Company", links: ["About", "Careers", "Press", "Partners", "Blog", "Contact"] },
    { title: "Resources", links: ["Documentation", "API Reference", "Help Center", "Community", "Status", "Security"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Processing", "GDPR", "Compliance"] },
  ];
  return (
    <footer className="border-t border-border/50 pt-16 pb-8 px-6 bg-background/50">
      <div className="container mx-auto">
        {/* Top: logo + tagline + contact + social */}
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-start">
          <div className="lg:col-span-4">
            <img src={logo} alt="ZavSync" className="h-24 md:h-28 w-auto mb-1 -ml-2" />
            <p className="text-primary text-xs font-medium uppercase tracking-[0.25em] mb-6 font-heading whitespace-nowrap">Unified · Intelligent · Synchronized</p>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-center gap-2 text-muted-foreground text-sm font-light"><Mail className="h-4 w-4 text-primary shrink-0" /> hello@zavsync.com</li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm font-light"><Phone className="h-4 w-4 text-primary shrink-0" /> +1 (000) 000-0000</li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm font-light"><MapPin className="h-4 w-4 text-primary shrink-0" /> Remote-first · Global</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {/* Aligned link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {cols.map(c => (
              <div key={c.title}>
                <h4 className="font-heading font-semibold text-sm mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map(l => (
                    <li key={l}><a href="#" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-light">© {new Date().getFullYear()} ZavSync. All rights reserved.</p>
          <p className="text-muted-foreground text-xs font-light">Made with intention · Built for synchronized teams</p>
        </div>
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
      <Partners />
      <Positioning />
      <HowItWorks />
      <WhySection />
      <Features />
      <AnalyticsSection />
      <AISection />
      <Privacy />
      <Industries />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
