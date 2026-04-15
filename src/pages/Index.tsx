import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import aiSection from "@/assets/ai-section.jpg";
import aiIntelligence from "@/assets/ai-intelligence.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";
import platformOverview from "@/assets/platform-overview.jpg";
import {
  Layers, Brain, BarChart3, Shield, Zap, TrendingUp,
  Users, DollarSign, BookOpen, Briefcase, Building2,
  Bot, Search, MessageSquare, ArrowRight, Check, ChevronRight,
  Sun, Moon, Menu, X, ChevronDown, Globe, Mail, Phone,
  MapPin, Twitter, Linkedin, Github, PieChart, Activity,
  Target, Clock, FileText, Lock, Eye, Database
} from "lucide-react";

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
    <section ref={ref} id={id} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </section>
  );
}

// ─── Navbar ──────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Features", "Platform", "AI", "Analytics", "Pricing", "Roadmap", "FAQ"];
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src={logo} alt="ZavSync" className="h-10 md:h-12" />
        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggle} className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4 text-muted-foreground" /> : <Moon className="h-4 w-4 text-muted-foreground" />}
          </button>
          <Button variant="hero" size="sm" className="hidden md:inline-flex">Get Started</Button>
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-2">{l}</a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2">Get Started</Button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ──────────────────────────────
function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 dark:opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-4 tracking-widest text-xs uppercase font-heading">Unified · Intelligent · Synchronized</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight">
            Run Your Entire Business from{" "}
            <span className="text-gradient">One Intelligent Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed font-light">
            ZavSync is a next-generation business operating system that unifies HR, payroll, accounting, CRM, banking, and AI-powered operations into a single synchronized platform.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-xl mb-10 leading-relaxed font-light">
            Eliminate fragmented tools, manual workflows, and disconnected data. Operate your entire business with clarity, control, and intelligence.
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

// ─── Positioning ──────────────────────────────
function Positioning() {
  return (
    <Section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">About the Platform</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">A Complete Business{" "}<span className="text-gradient">Operating System</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-light">
              Modern businesses rely on multiple disconnected systems to manage people, finances, customers, and operations. This fragmentation leads to inefficiencies, data silos, errors, and a fundamental lack of visibility across the organization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 font-light">
              ZavSync replaces this entire stack with one unified platform where every module works together in real time—from employee management to financial reporting and AI-driven automation.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Every piece of data flows seamlessly between modules, giving you a complete, accurate picture of your business at any moment. No more reconciling spreadsheets, no more switching between tools.
            </p>
          </div>
          <div className="relative">
            <img src={platformOverview} alt="Platform Overview" className="rounded-2xl w-full shadow-2xl" loading="lazy" width={1280} height={720} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Why ZavSync ──────────────────────────────
const whyItems = [
  { icon: Layers, title: "Unified Platform", desc: "All your business operations in one place—HR, payroll, accounting, CRM, and AI. No more juggling between disconnected tools." },
  { icon: Zap, title: "Intelligent Automation", desc: "AI enhances workflows, reduces manual effort, and improves decision-making across every department." },
  { icon: BarChart3, title: "Real-Time Visibility", desc: "Understand your business instantly with synchronized financial and operational data updated in real time." },
  { icon: TrendingUp, title: "Scalable Architecture", desc: "Designed to grow seamlessly from early-stage startups to enterprise-level organizations." },
  { icon: Shield, title: "Secure by Design", desc: "Enterprise-grade security with role-based access control, audit logs, encrypted pipelines, and data isolation." },
];

function WhySection() {
  return (
    <Section className="py-24 px-6 bg-secondary/30" id="platform">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">Core Value</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Why <span className="text-gradient">ZavSync</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-light">Built from the ground up to solve the fundamental problem of business fragmentation.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whyItems.map((w, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <w.icon className="h-7 w-7 text-primary" />
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
  { icon: Users, title: "Human Resource Management", desc: "Manage your entire workforce lifecycle with ease. Employee profiles, attendance & leave management, role and department structuring, document management, and employee self-service portal.", details: ["Employee profiles & onboarding", "Attendance & leave tracking", "Role & department structuring", "Document management", "Self-service portal"] },
  { icon: DollarSign, title: "Payroll Automation", desc: "Automate salary processing, ensure compliance, and eliminate manual payroll errors across your organization.", details: ["Salary calculations", "Allowances & deductions", "Payslip generation", "Tax handling & compliance", "Accounting integration"] },
  { icon: BookOpen, title: "Accounting & Finance", desc: "A complete financial engine built directly into your operations—no external accounting tools needed.", details: ["Chart of Accounts & General Ledger", "Accounts Receivable & Payable", "Invoice management", "Journal entries", "Financial reporting"] },
  { icon: Briefcase, title: "CRM & Sales Management", desc: "Track leads, manage relationships, and drive revenue growth with powerful sales tools and pipeline management.", details: ["Companies & contacts", "Sales pipelines", "Activity tracking", "Lead management", "Basic automation"] },
  { icon: Building2, title: "Banking & Cash Flow", desc: "Gain full visibility into your finances with bank account tracking, transaction monitoring, and cash flow insights.", details: ["Bank account tracking", "Transaction monitoring", "Cash flow overview", "Financial insights", "Reconciliation tools"] },
];

function Features() {
  return (
    <Section className="py-24 px-6" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">Platform Features</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Everything You Need,{" "}<span className="text-gradient">One Platform</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">Each module is connected through a unified data layer, ensuring seamless workflows and accurate insights across your entire organization.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-xl p-7 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
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
          <div className="glass-card rounded-xl p-7 border-primary/20 glow-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">AI Operations Layer</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">Intelligent automation, knowledge search, and AI-powered business execution that transforms how you operate.</p>
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

// ─── Analytics Section ──────────────────────────────
function AnalyticsSection() {
  const stats = [
    { icon: PieChart, value: "360°", label: "Business Visibility", desc: "Complete overview of all operations" },
    { icon: Activity, value: "Real-Time", label: "Data Sync", desc: "Instant updates across modules" },
    { icon: Target, value: "99.9%", label: "Accuracy", desc: "Automated calculations eliminate errors" },
    { icon: Clock, value: "70%", label: "Time Saved", desc: "Reduce manual reporting effort" },
  ];
  return (
    <Section className="py-24 px-6 bg-secondary/30" id="analytics">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">Analytics & Insights</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Data-Driven{" "}<span className="text-gradient">Decision Making</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">ZavSync provides real-time dashboards, financial analytics, and operational metrics so you always know exactly where your business stands.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-heading font-bold text-gradient mb-1">{s.value}</p>
              <h3 className="font-heading font-semibold text-sm mb-1">{s.label}</h3>
              <p className="text-muted-foreground text-xs font-light">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img src={analyticsDashboard} alt="Analytics Dashboard" className="rounded-2xl w-full shadow-2xl" loading="lazy" width={1280} height={720} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          <div className="space-y-6">
            {[
              { icon: BarChart3, title: "Financial Dashboards", desc: "Revenue tracking, expense analysis, profit margins, and cash flow visualizations updated in real time." },
              { icon: TrendingUp, title: "Operational Metrics", desc: "Employee productivity, project timelines, CRM conversion rates, and departmental KPIs at a glance." },
              { icon: Eye, title: "Custom Reports", desc: "Build custom reports with drag-and-drop simplicity. Export to PDF, Excel, or share interactive dashboards." },
              { icon: Database, title: "Predictive Analytics", desc: "AI-powered forecasting helps you anticipate cash flow needs, hiring requirements, and revenue trends." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-5 group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm font-light leading-relaxed ml-[52px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── AI Section ──────────────────────────────
function AISection() {
  const aiFeatures = [
    { icon: Bot, title: "AI Ops Assistant", desc: "Smart assistance for operational workflows that learns your patterns and automates routine tasks.", items: ["Categorize & prioritize tasks", "Suggest optimal workflows", "Automate routine operations", "Learn from your patterns"] },
    { icon: Search, title: "Internal AI Knowledge", desc: "A secure, intelligent system for accessing company data using RAG-powered search.", items: ["Upload & index documents", "Search internal knowledge", "AI-powered contextual answers", "Department-based access control"] },
    { icon: MessageSquare, title: "AI Execution Copilot", desc: "Operate your business using natural language—record revenue, create invoices, manage employees, and more.", items: ["Natural language commands", "Structured action generation", "Review before execution", "Full control & transparency"], upcoming: true },
  ];
  return (
    <Section className="py-24 px-6" id="ai">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">Core Differentiator</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">AI-Powered{" "}<span className="text-gradient">Business Operations</span></h2>
            <p className="text-muted-foreground mb-4 leading-relaxed font-light">ZavSync introduces an intelligent AI layer that enhances every aspect of your business—from routine task management to complex operational decisions.</p>
            <p className="text-muted-foreground mb-10 leading-relaxed font-light">Unlike bolted-on AI features, our intelligence layer is deeply integrated into every module, understanding context across your entire operation.</p>
            <div className="space-y-6">
              {aiFeatures.map((f, i) => (
                <div key={i} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <f.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">{f.title}</h3>
                    {f.upcoming && <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">Upcoming</span>}
                  </div>
                  <p className="text-muted-foreground text-sm font-light mb-3 ml-[52px]">{f.desc}</p>
                  <ul className="space-y-1.5 ml-[52px]">
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
          <div className="space-y-6">
            <div className="relative">
              <img src={aiIntelligence} alt="AI Intelligence" className="rounded-2xl w-full shadow-2xl" loading="lazy" width={1280} height={720} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="relative">
              <img src={aiSection} alt="AI Operations" className="rounded-2xl w-full shadow-2xl" loading="lazy" width={1280} height={720} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
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
    <Section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">Industries</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Built for <span className="text-gradient">Every Business</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-light">ZavSync adapts to the unique needs of your industry and scales with your growth.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ind.icon className="h-5 w-5 text-primary" />
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

// ─── Security ──────────────────────────────
function SecuritySection() {
  const items = [
    { icon: Lock, title: "Role-Based Access", desc: "Granular permissions ensure users only see what they need." },
    { icon: Shield, title: "Encrypted Pipelines", desc: "All data encrypted in transit and at rest with AES-256." },
    { icon: FileText, title: "Audit Logs", desc: "Complete activity logs for compliance and accountability." },
    { icon: Database, title: "Data Isolation", desc: "Per-company data isolation ensures complete privacy." },
  ];
  return (
    <Section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">Security</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Enterprise-Grade{" "}<span className="text-gradient">Security</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-light">Your data is protected by industry-leading security infrastructure designed for the most demanding compliance requirements.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
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
    <Section className="py-24 px-6 bg-secondary/30" id="pricing">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Simple, Transparent{" "}<span className="text-gradient">Pricing</span></h2>
          <p className="text-muted-foreground font-light">Designed for small teams and growing businesses. Start free, scale as you grow.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-12 glow-border">
          <div className="text-center mb-10">
            <span className="text-xs text-primary font-heading uppercase tracking-widest">Starter Plan</span>
            <div className="mt-3">
              <span className="text-5xl font-heading font-bold text-gradient">Free</span>
            </div>
            <p className="text-muted-foreground mt-2 font-light">Early Access · Limited Time</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-widest text-primary">Included</h4>
              <ul className="space-y-2.5">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-secondary-foreground font-light">
                    <Check className="h-4 w-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-widest text-primary">Limits</h4>
              <ul className="space-y-2.5">
                {limits.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-secondary-foreground font-light">
                    <Check className="h-4 w-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-xs uppercase tracking-widest text-primary">Coming Soon</h4>
              <ul className="space-y-2.5">
                {upcoming.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                    <ChevronRight className="h-4 w-4 text-primary/50 shrink-0" /> {item}
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
  { label: "Phase 1", title: "Foundation", status: "Active", items: ["Core modules (HR, Payroll, Accounting, CRM)", "Basic AI assistant", "Initial integrations"] },
  { label: "Phase 2", title: "Expansion", status: "Next", items: ["Advanced workflows", "CRM automation", "Financial enhancements"] },
  { label: "Phase 3", title: "Intelligence", status: "Planned", items: ["AI enrichment", "Smart recommendations", "Workflow optimization"] },
  { label: "Phase 4", title: "Automation", status: "Planned", items: ["Approval-based AI execution", "Rules-based automation"] },
  { label: "Phase 5", title: "Full AI OS", status: "Vision", items: ["End-to-end AI workflows", "Predictive insights", "Full business intelligence"] },
];

function Roadmap() {
  return (
    <Section className="py-24 px-6" id="roadmap">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">Roadmap</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Product <span className="text-gradient">Roadmap</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-light">Our vision for building the most comprehensive AI-powered business operating system.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {phases.map((p, i) => (
            <div key={i} className={`glass-card rounded-xl p-6 ${i === 0 ? "border-primary/30 glow-border" : ""} hover:border-primary/20 transition-all duration-300`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-primary font-heading font-medium">{p.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${i === 0 ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"}`}>{p.status}</span>
              </div>
              <h3 className="font-heading font-semibold mb-3">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-xs flex items-start gap-1.5 font-light">
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

// ─── FAQ ──────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "What is ZavSync?", a: "ZavSync is a unified business operating system that combines HR management, payroll automation, accounting & finance, CRM & sales, banking & cash flow management, and an AI operations layer—all in one synchronized platform. Instead of using separate tools for each function, ZavSync brings everything together with real-time data flow between modules." },
    { q: "How is ZavSync different from other business tools?", a: "Most business tools focus on a single function—HR, accounting, or CRM. ZavSync is fundamentally different because it's built as a unified platform from the ground up. Every module shares the same data layer, which means your financial data automatically reflects in HR reports, CRM insights inform accounting, and AI operates across your entire business context." },
    { q: "Is ZavSync suitable for my business size?", a: "ZavSync is designed to scale from early-stage startups to enterprise-level organizations. The Starter Plan is perfect for small teams (up to 10 employees, 5 users), and as your business grows, ZavSync grows with you through advanced plans with expanded capabilities." },
    { q: "How does the AI layer work?", a: "ZavSync's AI layer operates across three levels: the AI Ops Assistant automates routine tasks and suggests workflows; the Internal AI Knowledge system lets you upload documents and search company knowledge with AI-powered answers; and the upcoming AI Execution Copilot will allow you to perform business operations using natural language commands with review-before-execution safety." },
    { q: "Is my data secure?", a: "Absolutely. ZavSync is built with enterprise-grade security including role-based access control, AES-256 encryption for data in transit and at rest, comprehensive audit logs, secure infrastructure, and per-company data isolation. Your data never mixes with other organizations' data." },
    { q: "What does the free plan include?", a: "The Starter Plan (currently free during early access) includes basic HR management, payroll, core accounting, CRM, invoice management, and 1 company setup. Limits include up to 10 employees, 5 users, 1,000 invoices per month, 1 bank account, and 5GB storage. AI credits are included for basic operations." },
    { q: "Can I migrate from existing tools?", a: "Yes. ZavSync supports data import from common formats and we're building direct integrations with popular business tools. Our onboarding process helps you transition smoothly without disrupting your operations." },
    { q: "What's on the product roadmap?", a: "We're currently in Phase 1 (Foundation) with core modules and basic AI. Upcoming phases include advanced workflows and CRM automation (Phase 2), AI enrichment and smart recommendations (Phase 3), approval-based AI execution (Phase 4), and a fully AI-driven operating system with predictive insights (Phase 5)." },
  ];
  return (
    <Section className="py-24 px-6 bg-secondary/30" id="faq">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3 font-heading">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Frequently Asked{" "}<span className="text-gradient">Questions</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/20">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
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
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Start Operating{" "}<span className="text-gradient">Smarter</span></h2>
        <p className="text-muted-foreground mb-8 text-lg font-light leading-relaxed">Experience a new way of running your business—fully unified, intelligent, and synchronized. Join the early access program today.</p>
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
    <footer className="border-t border-border/50 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <img src={logo} alt="ZavSync" className="h-10 mb-4" />
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm mb-6">
              The unified business operating system that brings HR, payroll, accounting, CRM, banking, and AI together in one intelligent platform.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {["HR Management", "Payroll", "Accounting", "CRM & Sales", "Banking", "AI Operations"].map(l => (
                <li key={l}><a href="#features" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About", "Pricing", "Roadmap", "Blog", "Careers", "Contact"].map(l => (
                <li key={l}><a href="#" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm font-light">
                <Mail className="h-4 w-4 text-primary shrink-0" /> hello@zavsync.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm font-light">
                <MapPin className="h-4 w-4 text-primary shrink-0" /> Remote-first company
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-heading font-semibold text-sm mb-3">Legal</h4>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
                  <li key={l}><a href="#" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-light">© {new Date().getFullYear()} ZavSync. All rights reserved.</p>
          <p className="text-muted-foreground text-xs font-light">Unified. Intelligent. Synchronized.</p>
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
      <Positioning />
      <WhySection />
      <Features />
      <AnalyticsSection />
      <AISection />
      <Industries />
      <SecuritySection />
      <Pricing />
      <Roadmap />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
