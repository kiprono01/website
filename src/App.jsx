import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Phone,
  ShieldCheck,
  Workflow
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Business Digitization",
    description:
      "We help organizations redesign, automate, and digitize business processes to reduce manual work and improve operational visibility.",
    points: [
      "Process automation",
      "Digital transformation roadmap",
      "Workflow optimization",
      "Data-driven operations"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "We support cloud strategy, migration, governance, and optimization so your business can operate securely and scale efficiently.",
    points: [
      "Cloud readiness assessment",
      "Cloud migration planning",
      "Cloud cost optimization",
      "Security and governance"
    ]
  },
  {
    icon: Megaphone,
    title: "Corporate Marketing",
    description:
      "We help companies strengthen brand visibility, customer engagement, and digital marketing performance.",
    points: [
      "Corporate brand strategy",
      "Digital marketing systems",
      "Go-to-market planning",
      "Customer communication"
    ]
  }
];

const approach = [
  {
    title: "Discover",
    description:
      "We assess your current processes, systems, customer journeys, and business priorities."
  },
  {
    title: "Design",
    description:
      "We define a practical roadmap covering digitization, cloud adoption, and marketing improvements."
  },
  {
    title: "Implement",
    description:
      "We support execution through technology rollout, process improvement, and team enablement."
  },
  {
    title: "Optimize",
    description:
      "We measure outcomes, improve adoption, reduce costs, and continuously refine performance."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 font-bold text-slate-950">
              DA
            </div>
            <div>
              <p className="font-semibold leading-none">Digital Advisory</p>
              <p className="mt-1 text-xs text-slate-400">Consulting Firm</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-cyan-300">
              Services
            </a>
            <a href="#approach" className="hover:text-cyan-300">
              Approach
            </a>
            <a href="#why-us" className="hover:text-cyan-300">
              Why Us
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
          >
            Book Consultation
          </a>

          <Menu className="md:hidden" />
        </nav>
      </header>

      {/* Hero */}
      <main id="home">
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                Independent advisory for digital-first organizations
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Streamline operations with digitization, cloud, and corporate
                marketing solutions.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We help organizations modernize business operations, improve
                efficiency, implement digital solutions, adopt secure cloud
                platforms, and strengthen their market presence.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Your Digital Roadmap
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">
                    Transformation Dashboard
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">
                    Digital Impact Plan
                  </h2>
                </div>
                <ShieldCheck className="h-12 w-12 text-cyan-300" />
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-900/80 p-6">
                  <p className="text-3xl font-bold text-cyan-300">30%+</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Operational efficiency improvement targets
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-900/80 p-6">
                  <p className="text-3xl font-bold text-cyan-300">24/7</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Cloud-ready business operations
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-900/80 p-6">
                  <p className="text-3xl font-bold text-cyan-300">360°</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Advisory from strategy to execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white px-6 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-semibold text-cyan-700">What We Do</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                Advisory and implementation support for modern enterprises.
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                We connect business strategy, cloud technology, operational
                improvement, and corporate marketing into one practical growth
                plan.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-xl font-bold">{service.title}</h3>

                    <p className="mt-3 text-slate-600">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-cyan-300">Our Approach</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                Clear strategy. Practical execution. Measurable outcomes.
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                We focus on solutions your people can adopt, your organization
                can measure, and your leadership team can scale.
              </p>
            </div>

            <div className="space-y-4">
              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 font-bold text-slate-950">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-2 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="bg-slate-900 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="font-semibold text-cyan-300">Why Choose Us</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                  We combine business advisory, technology, and market strategy.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-white/5 p-6">
                  <BarChart3 className="mb-4 h-8 w-8 text-cyan-300" />
                  <h3 className="font-bold">Business-focused</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    We align digital initiatives with operational and commercial
                    goals.
                  </p>
                </div>

                <div className="rounded-[2rem] bg-white/5 p-6">
                  <Cloud className="mb-4 h-8 w-8 text-cyan-300" />
                  <h3 className="font-bold">Cloud-ready</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    We help businesses adopt scalable, secure, and cost-aware
                    cloud solutions.
                  </p>
                </div>

                <div className="rounded-[2rem] bg-white/5 p-6">
                  <Megaphone className="mb-4 h-8 w-8 text-cyan-300" />
                  <h3 className="font-bold">Market-aware</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    We support visibility, positioning, and customer engagement.
                  </p>
                </div>

                <div className="rounded-[2rem] bg-white/5 p-6">
                  <ShieldCheck className="mb-4 h-8 w-8 text-cyan-300" />
                  <h3 className="font-bold">Practical execution</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    We focus on implementable solutions, not just reports and
                    presentations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-cyan-400 px-6 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-5xl">
                Ready to digitize your business?
              </h2>

              <p className="mt-5 text-lg text-slate-800">
                Contact us for an advisory session and we will help you identify
                quick wins, strategic priorities, and a practical digital
                transformation path.
              </p>

              <div className="mt-8 space-y-4 font-medium">
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  hello@digitaladvisory.co.ke
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  +254 700 000 000
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <form className="rounded-[2rem] bg-white p-6 shadow-2xl">
              <div className="grid gap-4">
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
                  type="text"
                  placeholder="Full name"
                />

                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
                  type="email"
                  placeholder="Work email"
                />

                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
                  type="text"
                  placeholder="Company name"
                />

                <textarea
                  className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
                  placeholder="Tell us about your business challenge"
                />

                <button
                  type="button"
                  className="rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
                >
                  Send Inquiry
                </button>

                <p className="text-xs text-slate-500">
                  Note: This form is frontend-only. To receive messages, connect
                  it to Formspree, AWS Lambda, Amazon SES, or another backend.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Digital Advisory Consulting Firm. All
        rights reserved.
      </footer>
    </div>
  );
}

export default App;
``