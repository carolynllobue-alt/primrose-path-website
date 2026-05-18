import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Home, MapPin, Hammer, BedDouble, Bath, Ruler, Trees, Phone, Mail, CalendarDays, Camera, Images, FileText, DollarSign } from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const renderings = [
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop", title: "Front Elevation Rendering" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop", title: "Pool Courtyard Rendering" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop", title: "Covered Outdoor Living Rendering" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop", title: "Kitchen + Dining Rendering" },
  { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop", title: "Kitchen Island Rendering" },
  { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop", title: "Pantry Inspiration" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop", title: "Prep Pantry Inspiration" },
];

const droneImages = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop", title: "Aerial View Toward Gulf" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", title: "Aerial View Over Canal" },
  { src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop", title: "Canal + Neighborhood Aerial" },
];

const planCategories = [
  {
    id: "buyer",
    title: "Buyer-Friendly Plans",
    description: "The clearest plans for buyers, agents, and private previews.",
    plans: [
      {
        src: "https://placehold.co/1400x900/f5f5f4/1c1917?text=Site+Plan",
        title: "Site + Drainage Plan",
        subtitle: "Lot orientation, setbacks, pool courtyard, canal edge, swales, and exterior layout.",
        highlights: ["13,533.7 SF lot", "4,300 SF building coverage", "9.00 NAVD design flood elevation", "Pool courtyard + canal-side outdoor areas"],
      },
      {
        src: "https://placehold.co/1400x900/f5f5f4/1c1917?text=First+Floor+Plan",
        title: "First Floor Plan",
        subtitle: "Main living level with garage, great room, pantry, primary suite, bonus room, pool bath, and outdoor living.",
        highlights: ["Main-level primary suite", "Great room opening to pool courtyard", "Hidden pantry + kitchen core", "2-car garage + storage"],
      },
      {
        src: "https://placehold.co/1400x900/f5f5f4/1c1917?text=Second+Floor+Plan",
        title: "Second Floor Plan",
        subtitle: "Upper level with three king suites, covered balcony, laundry, mechanical space, and open-to-below moments.",
        highlights: ["Three upstairs king suites", "Covered balcony", "Open-to-below connection", "Secondary laundry upstairs"],
      },
    ],
  },
  {
    id: "reference",
    title: "Plan Set Reference",
    description: "Additional approved sheets for viewers who want a deeper look.",
    plans: [
      {
        src: "https://placehold.co/1400x900/f5f5f4/1c1917?text=Roof+Plan",
        title: "Roof Plan",
        subtitle: "Roof geometry, slopes, scuppers/drainage intent, and upper-level roof layout.",
        highlights: ["Low-slope modern roof form", "Drainage routing", "Parapet-style massing", "Courtyard roof relationships"],
      },
      {
        src: "https://placehold.co/1400x900/f5f5f4/1c1917?text=Pool+%26+Planter+Details",
        title: "Pool + Planter Details",
        subtitle: "Courtyard pool, spa, sun shelf, planter, and outdoor feature detailing.",
        highlights: ["Pool courtyard focus", "Spa + sun shelf", "Raised planter integration", "Separate pool permit noted"],
      },
      {
        src: "https://placehold.co/1400x900/f5f5f4/1c1917?text=Stair+Sections",
        title: "Stair Sections + Details",
        subtitle: "Stair design references, sections, railing notes, and connection details.",
        highlights: ["Architectural stair zone", "Section details", "Modern railing intent", "Interior circulation"],
      },
      {
        src: "https://placehold.co/1400x900/f5f5f4/1c1917?text=First+Floor+Electrical",
        title: "First Floor Electrical Plan",
        subtitle: "Lighting, switching, fan, outlet, and first-floor electrical layout reference.",
        highlights: ["Kitchen + great room lighting", "Outdoor living circuits", "Garage/equipment zones", "Buyer reference only"],
      },
      {
        src: "https://placehold.co/1400x900/f5f5f4/1c1917?text=Second+Floor+Electrical",
        title: "Second Floor Electrical Plan",
        subtitle: "Upper-level lighting, switching, outlets, balcony, and suite electrical reference.",
        highlights: ["Suite lighting layouts", "Balcony electrical", "Open-to-below lighting", "Buyer reference only"],
      },
    ],
  },
];

const features = [
  { icon: Home, title: "New Construction", text: "A modern waterfront residence currently under construction on Siesta Key with anticipated completion in December 2026." },
  { icon: Waves, title: "119' Saltwater Canal Frontage", text: "Canal-front homesite with concrete seawall, water views, and quick access to the Siesta Key boating lifestyle." },
  { icon: BedDouble, title: "4 Bedrooms", text: "A flexible luxury floor plan with a main-level primary suite, upstairs king suites, and generous guest accommodations." },
  { icon: Bath, title: "4 Baths + 2 Powder Baths", text: "Thoughtfully planned bath count for owners, guests, pool use, and entertaining." },
  { icon: Ruler, title: "3,935 Heated Sq. Ft.", text: "Approximately 5,604 total square feet with elevated indoor-outdoor living and large covered areas." },
  { icon: Trees, title: "Private Courtyard Pool", text: "Resort-inspired pool courtyard, spa, outdoor kitchen, terraces, balconies, and covered lanais." },
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
  const [activePlanCategory, setActivePlanCategory] = useState("buyer");
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [expandedPlan, setExpandedPlan] = useState(null);

  const currentPlanCategory = planCategories.find((category) => category.id === activePlanCategory) || planCategories[0];
  const activePlan = currentPlanCategory.plans[activePlanIndex] || currentPlanCategory.plans[0];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-stone-950/70 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-300">Siesta Key Waterfront</p>
            <h1 className="text-lg font-semibold tracking-wide">Primrose Path Residence</h1>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-stone-200 md:flex">
            <a href="#vision" className="hover:text-white">Vision</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#plans" className="hover:text-white">Plans</a>
            <a href="#progress" className="hover:text-white">Progress</a>
            <a href="#inquire" className="hover:text-white">Inquire</a>
          </nav>
          <Button asChild className="rounded-full bg-white text-stone-950 hover:bg-stone-200">
            <a href="#inquire">Request Info</a>
          </Button>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-stone-950 pt-24 text-white">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-stone-300">4857 Primrose Path · Sarasota, FL 34242</p>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              A new modern coastal waterfront estate on Siesta Key.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
              Listed at $4,795,000, Primrose Path Residence blends warm organic textures, refined contemporary design, canal-front living, and a private courtyard-style pool retreat.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-white px-7 text-stone-950 hover:bg-stone-200">
                <a href="#inquire">Schedule a Private Preview <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Card className="rounded-[2rem] border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl">
              <CardContent className="p-7">
                <p className="text-sm uppercase tracking-[0.32em] text-stone-300">Pre-Construction Offering</p>
                <div className="mt-8 grid grid-cols-2 gap-5">
                  <Stat label="List Price" value="$4.795M" />
                  <Stat label="Heated Sq. Ft." value="3,935" />
                  <Stat label="Total Sq. Ft." value="5,604" />
                  <Stat label="Canal Frontage" value="119'" />
                  <Stat label="Bedrooms" value="4" />
                  <Stat label="Baths" value="4/2" />
                </div>
                <div className="mt-8 rounded-3xl bg-white/10 p-5">
                  <p className="text-sm leading-6 text-stone-200">
                    New construction. Waterfront. Private pool and spa. Anticipated completion December 2026.
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
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">The Vision</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Modern architecture with a relaxed Florida soul.</h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Clean architectural lines, soaring glass walls, natural stone accents, warm wood detailing, and a dramatic pool courtyard create a refined Siesta Key retreat designed for entertaining, boating, and effortless indoor-outdoor living.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-80 rounded-[2rem] bg-stone-200 bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop')" }} />
            <div className="h-80 rounded-[2rem] bg-stone-200 bg-cover bg-center shadow-xl sm:mt-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop')" }} />
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-stone-500">Image Gallery</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Renderings, interiors, and aerial views.</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-sm text-stone-600">
              <Images className="h-4 w-4" /> Uploaded property media
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[2.25rem] bg-stone-100 shadow-xl">
              <img src={selected.src} alt={selected.title} className="h-[620px] w-full object-cover" />
              <div className="flex items-center justify-between p-5">
                <p className="font-medium">{selected.title}</p>
                <p className="text-sm text-stone-500">Click a thumbnail to change image</p>
              </div>
            </div>
            <div className="grid max-h-[700px] gap-4 overflow-y-auto pr-2 sm:grid-cols-2 lg:grid-cols-1">
              {[...renderings, ...droneImages].map((image) => (
                <button key={image.src} onClick={() => setSelected(image)} className="group grid grid-cols-[120px_1fr] items-center gap-4 rounded-3xl border border-stone-200 bg-stone-50 p-3 text-left transition hover:bg-stone-100">
                  <img src={image.src} alt={image.title} className="h-24 w-full rounded-2xl object-cover" />
                  <div>
                    <Camera className="mb-2 h-4 w-4 text-stone-500" />
                    <p className="font-medium group-hover:underline">{image.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">Property Highlights</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Built around light, water, and easy entertaining.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <Card key={item.title} className="rounded-[2rem] border-stone-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-7">
                  <item.icon className="h-7 w-7 text-stone-600" />
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-stone-500">Interactive Plans</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">A cleaner way to understand the approved plan set.</h2>
              <p className="mt-5 leading-8 text-stone-700">
                Instead of dropping the full permit set into one long PDF, the most important sheets are organized into a simple plan viewer with plain-English highlights for buyers and agents.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {planCategories.map((category) => (
                <Button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setActivePlanCategory(category.id);
                    setActivePlanIndex(0);
                  }}
                  className={`rounded-full px-5 ${activePlanCategory === category.id ? "bg-stone-950 text-white hover:bg-stone-800" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-stone-200 bg-stone-50 p-4 shadow-xl md:p-6">
            <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">{currentPlanCategory.title}</p>
                <h3 className="mt-2 text-2xl font-semibold">{activePlan.title}</h3>
                <p className="mt-2 max-w-3xl text-stone-600">{activePlan.subtitle}</p>
              </div>
              <Button type="button" onClick={() => setExpandedPlan(activePlan)} className="rounded-full bg-stone-950 hover:bg-stone-800">
                View Larger <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
              <div className="grid gap-3 lg:block lg:space-y-3">
                {currentPlanCategory.plans.map((plan, index) => (
                  <button
                    key={plan.title}
                    type="button"
                    onClick={() => setActivePlanIndex(index)}
                    className={`w-full rounded-3xl border p-3 text-left transition ${activePlanIndex === index ? "border-stone-950 bg-white shadow-md" : "border-stone-200 bg-white/70 hover:bg-white"}`}
                  >
                    <img src={plan.src} alt={plan.title} className="mb-3 h-28 w-full rounded-2xl bg-white object-cover object-center" />
                    <p className="font-medium">{plan.title}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-stone-500">{plan.subtitle}</p>
                  </button>
                ))}
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-white shadow-inner">
                <div className="max-h-[720px] overflow-auto bg-white p-3">
                  <img src={activePlan.src} alt={activePlan.title} className="mx-auto w-full min-w-[900px] rounded-2xl object-contain" />
                </div>
                <div className="grid gap-3 border-t border-stone-200 bg-white p-5 md:grid-cols-2 xl:grid-cols-4">
                  {activePlan.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-2xl bg-stone-100 p-4">
                      <p className="text-sm font-medium text-stone-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <PlanSummaryCard title="Site Logic" text="The lot, setbacks, pool, outdoor areas, and drainage plan are separated from the floor plans so buyers can quickly understand how the home sits on the canal-front site." />
            <PlanSummaryCard title="Main Living" text="The first floor is the primary lifestyle level, with the great room, kitchen, pantry, primary suite, pool bath, courtyard, and garage all organized around outdoor living." />
            <PlanSummaryCard title="Guest Level" text="The second floor gives guests privacy with multiple king suites, balcony space, laundry, and open-to-below connections that keep the home feeling bright and architectural." />
          </div>
        </div>
      </section>

      {expandedPlan && (
        <div className="fixed inset-0 z-[80] bg-stone-950/90 p-4 backdrop-blur-sm" onClick={() => setExpandedPlan(null)}>
          <div className="mx-auto flex h-full max-w-7xl flex-col rounded-[2rem] bg-white p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Expanded Plan View</p>
                <h3 className="text-2xl font-semibold">{expandedPlan.title}</h3>
              </div>
              <Button type="button" onClick={() => setExpandedPlan(null)} className="rounded-full bg-stone-950 hover:bg-stone-800">Close</Button>
            </div>
            <div className="flex-1 overflow-auto rounded-3xl bg-stone-100 p-4">
              <img src={expandedPlan.src} alt={expandedPlan.title} className="mx-auto max-w-none rounded-2xl bg-white shadow-xl" />
            </div>
          </div>
        </div>
      )}

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[2.5rem] bg-stone-200 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop" alt="Kitchen and dining rendering" className="h-[540px] w-full object-cover" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">Finish Direction</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">A high-end spec package with broad luxury appeal.</h2>
          <div className="mt-8 grid gap-3">
            {specs.map((spec) => (
              <div key={spec} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <div className="mt-1 h-2 w-2 rounded-full bg-stone-950" />
                <p className="text-stone-700">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="progress" className="bg-stone-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-stone-400">Construction Progress</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Follow the build before completion.</h2>
              <p className="mt-6 leading-8 text-stone-300">
                Aerial construction photography documents the current stage of the build and the relationship between the homesite, canal, Gulf, and surrounding Siesta Key neighborhood.
              </p>
            </div>
            <div className="grid gap-4">
              {progress.map((item, index) => (
                <div key={item.phase} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-950">{index + 1}</div>
                    <p className="font-medium">{item.phase}</p>
                  </div>
                  <p className="text-sm text-stone-300">{item.status}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {droneImages.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-[2rem] bg-white/5 shadow-xl">
                <img src={image.src} alt={image.title} className="h-72 w-full object-cover" />
                <p className="p-5 text-sm text-stone-300">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-xl md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-stone-500">Location</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Siesta Key convenience with private waterfront living.</h2>
              <p className="mt-6 leading-8 text-stone-700">
                Located at 4857 Primrose Path, the residence places buyers on a 0.31-acre saltwater canal-front homesite near Siesta Beach, Siesta Key Village, boating, dining, and downtown Sarasota.
              </p>
            </div>
            <div className="rounded-[2rem] bg-stone-100 p-7">
              <MapPin className="h-8 w-8 text-stone-700" />
              <h3 className="mt-5 text-2xl font-semibold">4857 Primrose Path</h3>
              <p className="mt-2 text-stone-600">Sarasota, FL 34242</p>
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Aerial view of Primrose Path area" className="mt-6 h-64 w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="inquire" className="bg-stone-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">Private Preview</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Request details before completion.</h2>
            <p className="mt-6 leading-8 text-stone-700">
              For pricing, finish details, construction timeline, broker information, or private hard-hat tour scheduling, submit an inquiry below.
            </p>
            <div className="mt-8 grid gap-4">
              <ContactLine icon={DollarSign} text="$4,795,000 list price" />
              <ContactLine icon={Phone} text="Carolyn LoBue · 847-400-7357" />
              <ContactLine icon={Mail} text="Carolynllobue@gmail.com" />
              <ContactLine icon={CalendarDays} text="Private previews by appointment" />
            </div>
          </div>

          <Card className="rounded-[2rem] border-stone-200 shadow-xl">
            <CardContent className="p-7 md:p-9">
              <form className="grid gap-5">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Name</label>
                  <input className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none ring-stone-950/10 focus:ring-4" placeholder="Your name" />
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <input className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none ring-stone-950/10 focus:ring-4" placeholder="you@email.com" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none ring-stone-950/10 focus:ring-4" placeholder="Phone number" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea className="min-h-36 rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none ring-stone-950/10 focus:ring-4" placeholder="I’d like more information about Primrose Path Residence." />
                </div>
                <Button type="button" size="lg" className="rounded-full bg-stone-950 hover:bg-stone-800">
                  Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs leading-5 text-stone-500">
                  Form is a visual placeholder. Connect to your CRM, email provider, or website platform before launch.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-stone-950 px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-400">Primrose Path Residence</p>
            <p className="mt-2 text-stone-300">4857 Primrose Path · Sarasota, FL 34242</p>
          </div>
          <p className="text-sm text-stone-500">Pre-construction marketing website concept. Replace placeholder form connection before publishing.</p>
        </div>
      </footer>
    </div>
  );
}

function Button({ children, className = "", size, variant, asChild, type = "button", onClick }) {
  const base = "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-4 focus:ring-stone-950/10";
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
      <p className="mt-1 text-sm text-stone-300">{label}</p>
    </div>
  );
}

function ContactLine({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
      <Icon className="h-5 w-5 text-stone-600" />
      <span className="text-stone-700">{text}</span>
    </div>
  );
}

function PlanSummaryCard({ title, text }) {
  return (
    <Card className="rounded-[2rem] border-stone-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <FileText className="h-6 w-6 text-stone-600" />
        <h3 className="mt-5 text-xl font-semibold">{title}</h3>
        <p className="mt-3 leading-7 text-stone-600">{text}</p>
      </CardContent>
    </Card>
  );
}
