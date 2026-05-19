import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Waves,
  Home,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Trees,
  Phone,
  Mail,
  CalendarDays,
  Camera,
  Images,
  FileText,
  DollarSign,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const renderings = [
  { src: "/images/front-rendering.jpg", title: "Front Elevation Rendering" },
  { src: "/images/indoor-outdoor-dining-kitchen.jpg", title: "Pool Courtyard Rendering" },
  { src: "/images/view-back-of-home-from-canal.jpg", title: "Canal-Side Exterior Rendering" },
  { src: "/images/diing-kitchen.jpg", title: "Kitchen + Dining Rendering" },
  { src: "/images/kitchen.jpg", title: "Kitchen Island Rendering" },
  { src: "/images/pantry.jpg", title: "Pantry Inspiration" },
  { src: "/images/pantry (2).jpg", title: "Prep Pantry Inspiration" },
];

const droneImages = [
  { src: "/images/drone-facing-east.JPG", title: "Aerial View Toward Gulf" },
  { src: "/images/drone-facing-north.JPG", title: "Aerial View Over Canal" },
  { src: "/images/drone-facing-west.JPG", title: "Canal + Neighborhood Aerial" },
];

const plans = [
  {
    src: "/plans/plans-first-floor.jpg",
    title: "First Floor Plan",
    subtitle:
      "Main living level with garage, great room, pantry, primary suite, bonus room, pool bath, and outdoor living",
    highlights: [
      "Main-level primary suite",
      "Great room opening to pool courtyard",
      "Hidden pantry + kitchen core",
      "2-car garage + storage",
    ],
  },
  {
    src: "/plans/plans-second-floor.jpg",
    title: "Second Floor Plan",
    subtitle:
      "Upper level with three king suites, covered balcony, laundry, mechanical space, and open-to-below moments",
    highlights: [
      "Three upstairs king suites",
      "Covered balcony",
      "Open-to-below connection",
      "Secondary laundry upstairs",
    ],
  },
];

const features = [
  {
    icon: Home,
    title: "New Construction",
    text: "A modern waterfront residence currently under construction on Siesta Key with anticipated completion in Winter 2026",
  },
  {
    icon: Waves,
    title: "119' Saltwater Canal Frontage",
    text: "Canal-front homesite with concrete seawall, water views, and quick access to the Siesta Key boating lifestyle",
  },
  {
    icon: BedDouble,
    title: "4 Bedrooms",
    text: "A flexible luxury floor plan with a main-level primary suite, upstairs king suites, and generous guest accommodations",
  },
  {
    icon: Bath,
title: "3 Full Baths + 2 Powder Baths",
text: "Thoughtfully designed bath layout for owners, guests, pool access, and entertaining",
  },
  {
    icon: Ruler,
    title: "3,935 A/C Sq. Ft.",
    text: "Approximately 5,604 total square feet with elevated indoor-outdoor living and large covered areas",
  },
  {
    icon: Trees,
    title: "Private Courtyard Pool",
    text: "Resort-inspired pool courtyard, spa, outdoor kitchen, terraces, balconies, and covered lanais",
  },
];

const specs = [
  "Modern mid-century coastal architecture",
  "Block construction with stem wall foundation",
  "Membrane roof system",
  "Private saltwater canal frontage with concrete seawall",
  "Large-format glass, sliders, balconies, and covered terraces",
  "Chef’s kitchen with hidden prep pantry, stone surfaces, wine refrigeration, and premium appliance package",
  "Tile and wood flooring planned throughout",
  "Open floor plan with high ceilings, vaulted/cathedral moments, and abundant natural light",
  "Elevated construction designed to current Florida wind and flood standards",
  "Minutes from Siesta Beach, Siesta Key Village, and downtown Sarasota",
];

const progress = [
  { phase: "Design + Engineering", status: "Complete" },
  { phase: "Foundation + Masonry", status: "In Progress" },
  { phase: "Framing + Trusses", status: "Upcoming" },
  { phase: "Windows + Exterior Dry-In", status: "Upcoming" },
  { phase: "Interior Finishes", status: "Coming Next" },
];

export default function PrimrosePathWebsite() {
  const [selected, setSelected] = useState(renderings[0]);
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [expandedPlan, setExpandedPlan] = useState(null);

  const activePlan = plans[activePlanIndex] || plans[0];

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#3e352d]">
      <header className="fixed top-0 z-50 w-full border-b border-white/30 bg-[#e7d9c5]/80 text-[#3e352d] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#6f8f8b]">Siesta Key Waterfront</p>
            <h1 className="text-lg font-semibold tracking-wide">Primrose Path Residence</h1>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-[#5b5147] md:flex">
            <a href="#vision" className="hover:text-[#3e352d]">Vision</a>
            <a href="#gallery" className="hover:text-[#3e352d]">Gallery</a>
            <a href="#plans" className="hover:text-[#3e352d]">Plans</a>
            <a href="#progress" className="hover:text-[#3e352d]">Progress</a>
            <a href="#inquire" className="hover:text-[#3e352d]">Inquire</a>
          </nav>
          <Button asChild className="rounded-full bg-[#3e352d] text-white hover:bg-[#5b5147]">
            <a href="#inquire">Request Info</a>
          </Button>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#3e352d] pt-24 text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          poster="/images/drone-facing-east.JPG"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-tropical-coastline-1560678661486/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f2923]/90 via-[#3e352d]/65 to-[#6f8f8b]/20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#f3e8d6]">4857 Primrose Path · Sarasota, FL 34242</p>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              A modern coastal waterfront estate on Siesta Key
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f6f1e8]">
              Listed at $4,795,000, Primrose Path Residence blends warm organic textures, refined contemporary design, canal-front living, and a private courtyard-style pool retreat
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-[#f6f1e8] px-7 text-[#3e352d] hover:bg-[#e7d9c5]">
                <a href="#inquire">Schedule a Private Preview <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-full border border-white/40 bg-white/10 px-7 text-white hover:bg-white/20">
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Card className="rounded-[2rem] border border-white/25 bg-[#f6f1e8]/15 text-white shadow-2xl backdrop-blur-xl">
              <CardContent className="p-7">
                <p className="text-sm uppercase tracking-[0.32em] text-[#f3e8d6]">Pre-Construction Offering</p>
                <div className="mt-8 grid grid-cols-2 gap-5">
                  <Stat label="List Price" value="$4.795M" />
                  <Stat label="A/C Sq. Ft." value="3,935" />
                  <Stat label="Total Sq. Ft." value="5,604" />
                  <Stat label="Canal Frontage" value="119'" />
                  <Stat label="Bedrooms" value="4" />
                  <Stat label="Baths" value="3/2" />
                </div>
                <div className="mt-8 rounded-3xl bg-white/10 p-5">
                  <p className="text-sm leading-6 text-[#f6f1e8]">
                    New construction. Waterfront. Private pool and spa. Anticipated completion Winter 2026.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-[#6f8f8b]">The Vision</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3e352d] md:text-5xl">Warm coastal design with a relaxed Florida soul</h2>
            <p className="mt-6 text-lg leading-8 text-[#5b5147]">
              Clean architectural lines, soaring glass walls, natural stone accents, warm wood detailing, and a dramatic pool courtyard create a refined Siesta Key retreat designed for entertaining, boating, and effortless indoor-outdoor living
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-80 rounded-[2rem] bg-[#d8cbb8] bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('/images/front-rendering.jpg')" }} />
            <div className="h-80 rounded-[2rem] bg-[#d8cbb8] bg-cover bg-center shadow-xl sm:mt-12" style={{ backgroundImage: "url('/images/view-back-of-home-from-canal.jpg')" }} />
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#efe4d2] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#6f8f8b]">Image Gallery</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3e352d] md:text-5xl">Renderings, interiors, and aerial views</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#f8f4ed] px-4 py-2 text-sm text-[#5b5147]">
              <Images className="h-4 w-4" /> Property media
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[2.25rem] bg-[#f8f4ed] shadow-xl">
              <img src={selected.src} alt={selected.title} className="h-[620px] w-full object-cover" />
              <div className="flex items-center justify-between p-5">
                <p className="font-medium text-[#3e352d]">{selected.title}</p>
                <p className="text-sm text-[#6f8f8b]">Click a thumbnail to change image</p>
              </div>
            </div>
            <div className="grid max-h-[700px] gap-4 overflow-y-auto pr-2 sm:grid-cols-2 lg:grid-cols-1">
              {[...renderings, ...droneImages].map((image) => (
                <button key={image.src} onClick={() => setSelected(image)} className="group grid grid-cols-[120px_1fr] items-center gap-4 rounded-3xl border border-[#d8cbb8] bg-[#f8f4ed] p-3 text-left transition hover:bg-white">
                  <img src={image.src} alt={image.title} className="h-24 w-full rounded-2xl object-cover" />
                  <div>
                    <Camera className="mb-2 h-4 w-4 text-[#6f8f8b]" />
                    <p className="font-medium text-[#3e352d] group-hover:underline">{image.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f1e8] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#6f8f8b]">Property Highlights</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3e352d] md:text-5xl">Built around light, water, and easy entertaining</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <Card key={item.title} className="rounded-[2rem] border border-[#d8cbb8] bg-[#f8f4ed] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-7">
                  <item.icon className="h-7 w-7 text-[#6f8f8b]" />
                  <h3 className="mt-6 text-xl font-semibold text-[#3e352d]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#5b5147]">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-[#efe4d2] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-[2.5rem] border border-[#d8cbb8] bg-[#f8f4ed] p-4 shadow-xl md:p-6">
            <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#6f8f8b]">Floor Plans</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#3e352d]">{activePlan.title}</h3>
                <p className="mt-2 max-w-3xl text-[#5b5147]">{activePlan.subtitle}</p>
              </div>
              <Button type="button" onClick={() => setExpandedPlan(activePlan)} className="rounded-full bg-[#3e352d] text-white hover:bg-[#5b5147]">
                View Larger <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
              <div className="grid gap-3 lg:block lg:space-y-3">
                {plans.map((plan, index) => (
                  <button
                    key={plan.title}
                    type="button"
                    onClick={() => setActivePlanIndex(index)}
                    className={`w-full rounded-3xl border p-3 text-left transition ${activePlanIndex === index ? "border-[#6f8f8b] bg-white shadow-md" : "border-[#d8cbb8] bg-white/70 hover:bg-white"}`}
                  >
                    <img src={plan.src} alt={plan.title} className="mb-3 h-28 w-full rounded-2xl bg-white object-cover object-center" />
                    <p className="font-medium text-[#3e352d]">{plan.title}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#5b5147]">{plan.subtitle}</p>
                  </button>
                ))}
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-white shadow-inner">
                <div className="max-h-[760px] overflow-auto bg-white p-3">
                  <img src={activePlan.src} alt={activePlan.title} className="mx-auto w-full min-w-[900px] rounded-2xl object-contain" />
                </div>
                <div className="grid gap-3 border-t border-[#d8cbb8] bg-[#f8f4ed] p-5 md:grid-cols-2 xl:grid-cols-4">
                  {activePlan.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-2xl bg-[#efe4d2] p-4">
                      <p className="text-sm font-medium text-[#3e352d]">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {expandedPlan && (
        <div className="fixed inset-0 z-[80] bg-[#2f2923]/90 p-4 backdrop-blur-sm" onClick={() => setExpandedPlan(null)}>
          <div className="mx-auto flex h-full max-w-7xl flex-col rounded-[2rem] bg-[#f8f4ed] p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#6f8f8b]">Expanded Plan View</p>
                <h3 className="text-2xl font-semibold text-[#3e352d]">{expandedPlan.title}</h3>
              </div>
              <Button type="button" onClick={() => setExpandedPlan(null)} className="rounded-full bg-[#3e352d] text-white hover:bg-[#5b5147]">Close</Button>
            </div>
            <div className="flex-1 overflow-auto rounded-3xl bg-white p-4">
              <img src={expandedPlan.src} alt={expandedPlan.title} className="mx-auto max-w-none rounded-2xl bg-white shadow-xl" />
            </div>
          </div>
        </div>
      )}

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#d8cbb8] shadow-2xl">
          <img src="/images/diing-kitchen.jpg" alt="Kitchen and dining rendering" className="h-[540px] w-full object-cover" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#6f8f8b]">Finish Direction</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3e352d] md:text-5xl">A high-end spec package with broad luxury appeal</h2>
          <div className="mt-8 grid gap-3">
            {specs.map((spec) => (
              <div key={spec} className="flex items-start gap-3 rounded-2xl bg-[#f8f4ed] p-4 shadow-sm">
                <div className="mt-1 h-2 w-2 rounded-full bg-[#6f8f8b]" />
                <p className="text-[#5b5147]">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="progress" className="bg-[#3e352d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d8cbb8]">Construction Progress</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Follow the build before completion</h2>
              <p className="mt-6 leading-8 text-[#f6f1e8]">
                Aerial construction photography documents the current stage of the build and the relationship between the homesite, canal, Gulf, and surrounding Siesta Key neighborhood
              </p>
            </div>
            <div className="grid gap-4">
              {progress.map((item, index) => (
                <div key={item.phase} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6f1e8] text-[#3e352d]">{index + 1}</div>
                    <p className="font-medium">{item.phase}</p>
                  </div>
                  <p className="text-sm text-[#d8cbb8]">{item.status}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {droneImages.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-[2rem] bg-white/10 shadow-xl">
                <img src={image.src} alt={image.title} className="h-72 w-full object-cover" />
                <p className="p-5 text-sm text-[#f6f1e8]">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-[2.5rem] bg-[#f8f4ed] p-8 shadow-xl md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#6f8f8b]">Location</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3e352d]">Siesta Key convenience with private waterfront living</h2>
              <p className="mt-6 leading-8 text-[#5b5147]">
                Located at 4857 Primrose Path, the residence places buyers on a 0.31-acre saltwater canal-front homesite near Siesta Beach, Siesta Key Village, boating, dining, and downtown Sarasota
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#efe4d2] p-7">
              <MapPin className="h-8 w-8 text-[#6f8f8b]" />
              <h3 className="mt-5 text-2xl font-semibold text-[#3e352d]">4857 Primrose Path</h3>
              <p className="mt-2 text-[#5b5147]">Sarasota, FL 34242</p>
              <img src="/images/drone-facing-north.JPG" alt="Aerial view of Primrose Path area" className="mt-6 h-64 w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="inquire" className="bg-[#efe4d2] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#6f8f8b]">Private Preview</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3e352d] md:text-5xl">Request details before completion.</h2>
            <p className="mt-6 leading-8 text-[#5b5147]">
              For pricing, finish details, construction timeline, broker information, or private hard-hat tour scheduling, submit an inquiry below.
            </p>
            <div className="mt-8 grid gap-4">
              <ContactLine icon={DollarSign} text="$4,795,000 list price" />
              <ContactLine icon={Phone} text="Carolyn LoBue · 847-400-7357" />
              <ContactLine icon={Mail} text="Carolynllobue@gmail.com" />
              <ContactLine icon={CalendarDays} text="Private previews by appointment" />
            </div>
          </div>

          <Card className="rounded-[2rem] border border-[#d8cbb8] bg-[#f8f4ed] shadow-xl">
            <CardContent className="p-7 md:p-9">
              <form
                action="https://formspree.io/f/mojbvlkq"
                method="POST"
                className="grid gap-5"
              >
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-[#3e352d]">Name</label>
                  <input
                    name="name"
                    required
                    className="rounded-2xl border border-[#d8cbb8] bg-white px-4 py-3 outline-none ring-[#6f8f8b]/20 focus:ring-4"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-[#3e352d]">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-2xl border border-[#d8cbb8] bg-white px-4 py-3 outline-none ring-[#6f8f8b]/20 focus:ring-4"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-[#3e352d]">Phone</label>
                    <input
                      name="phone"
                      className="rounded-2xl border border-[#d8cbb8] bg-white px-4 py-3 outline-none ring-[#6f8f8b]/20 focus:ring-4"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-[#3e352d]">Message</label>
                  <textarea
                    name="message"
                    required
                    className="min-h-36 rounded-2xl border border-[#d8cbb8] bg-white px-4 py-3 outline-none ring-[#6f8f8b]/20 focus:ring-4"
                    placeholder="I’d like more information about Primrose Path Residence."
                  />
                </div>
                <input type="hidden" name="property" value="Primrose Path Residence" />
                <Button type="submit" size="lg" className="rounded-full bg-[#3e352d] text-white hover:bg-[#5b5147]">
                  Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs leading-5 text-[#5b5147]">
                  By submitting this form, you consent to be contacted regarding Primrose Path Residence.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#3e352d] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d8cbb8]">Primrose Path Residence</p>
            <p className="mt-2 text-[#f6f1e8]">4857 Primrose Path · Sarasota, FL 34242</p>
          </div>
          <p className="text-sm text-[#d8cbb8]">Pre-construction marketing website concept. Replace placeholder form connection before publishing.</p>
        </div>
      </footer>
    </div>
  );
}

function Button({ children, className = "", size, asChild, type = "button", onClick }) {
  const base = "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-4 focus:ring-[#6f8f8b]/20";
  const sizeClass = size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm";

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${base} ${sizeClass} ${className} ${children.props.className || ""}`,
    });
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${sizeClass} ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Stat({ label, value }) {
  return (
    <div className="rounded-3xl bg-white/10 p-5">
      <p className="text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-[#f3e8d6]">{label}</p>
    </div>
  );
}

function ContactLine({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#f8f4ed] p-4 shadow-sm">
      <Icon className="h-5 w-5 text-[#6f8f8b]" />
      <span className="text-[#5b5147]">{text}</span>
    </div>
  );
}
