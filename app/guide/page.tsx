import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Backpack,
  BadgeCheck,
  CalendarDays,
  Compass,
  FileBadge2,
  HeartPulse,
  Plane,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nepal Trek Planner",
  description:
    "Comprehensive Nepal trekking guide covering visas, gear, seasons, grade selection, insurance, health preparation, and route planning.",
  alternates: {
    canonical: "/guide",
  },
  openGraph: {
    title: `${SITE_NAME} | Nepal Trek Planner`,
    description:
      "Comprehensive Nepal trekking guide covering visas, gear, seasons, grade selection, insurance, health preparation, and route planning.",
    url: "/guide",
    type: "website",
  },
};

type GuideTopic = {
  title: string;
  icon: LucideIcon;
  summary: string;
  quickTips: string[];
};

const guideHighlights = [
  {
    title: "Route Strategy",
    desc: "Choose route and pace based on days, altitude history, and comfort preferences.",
    icon: Compass,
  },
  {
    title: "Altitude Safety",
    desc: "Use conservative acclimatization, hydration routine, and weather-aware decisions.",
    icon: ShieldCheck,
  },
  {
    title: "Logistics Readiness",
    desc: "Handle permits, flights, gear checks, insurance, and medical kit before departure.",
    icon: BadgeCheck,
  },
];

const travelGuideTopics: GuideTopic[] = [
  {
    title: "Nepal Entry Visa",
    icon: FileBadge2,
    summary:
      "Tourist visas are available for many travelers on arrival. Keep passport validity and documentation ready to avoid airport delays.",
    quickTips: [
      "Carry at least 6 months passport validity before entry.",
      "Bring passport photos and prepare payment options for visa fee.",
      "Double-check visa duration against your full trip and buffer days.",
    ],
  },
  {
    title: "Trek Gear Essentials",
    icon: Backpack,
    summary:
      "Layering and proper footwear matter more than heavy packing. Build your kit around altitude, season, and route remoteness.",
    quickTips: [
      "Use moisture-wicking base layers and one reliable waterproof shell.",
      "Break in trekking boots before the trip and carry blister care.",
      "Pack power bank, headlamp, water bottles, and personal meds.",
    ],
  },
  {
    title: "Nepal Snapshot",
    icon: Compass,
    summary:
      "Nepal has huge variation in climate, terrain, and access. Conditions can change quickly by altitude and region.",
    quickTips: [
      "Expect warm valleys and cold mornings/evenings at higher elevations.",
      "Road and flight conditions can shift by weather and season.",
      "Keep 1 to 2 spare days in your itinerary for smoother logistics.",
    ],
  },
  {
    title: "Flight Delays and Disruptions",
    icon: Plane,
    summary:
      "Mountain sectors can face weather delays, especially around Lukla and remote airstrips. Flexible planning is essential.",
    quickTips: [
      "Book critical onward connections with at least one safety day.",
      "Prefer early morning mountain flights when possible.",
      "Keep essentials in cabin baggage in case checked bags are delayed.",
    ],
  },
  {
    title: "Best Time to Trek",
    icon: CalendarDays,
    summary:
      "Autumn and spring are generally the best seasons for visibility and stable trail conditions, though each region differs.",
    quickTips: [
      "Autumn (Sep-Nov): clear skies, busier trails, cooler nights.",
      "Spring (Mar-May): good weather and blooming forests.",
      "Winter/monsoon can still work on specific lower or rain-shadow routes.",
    ],
  },
  {
    title: "Trek Difficulty Levels",
    icon: BadgeCheck,
    summary:
      "Trip grade should reflect walking hours, altitude profile, and recovery capacity, not just your motivation.",
    quickTips: [
      "Choose by sustained effort level, not single hard-day capability.",
      "Prioritize itineraries with acclimatization/rest structure.",
      "If unsure, start moderate and extend later routes progressively.",
    ],
  },
  {
    title: "High-Altitude Travel Insurance",
    icon: ShieldCheck,
    summary:
      "Insurance should explicitly include high-altitude trekking and emergency helicopter evacuation coverage.",
    quickTips: [
      "Confirm max altitude limit in policy wording before departure.",
      "Save emergency hotline and policy number offline.",
      "Keep insurer informed early if route changes or symptoms appear.",
    ],
  },
  {
    title: "First-Aid and Health Kit",
    icon: Stethoscope,
    summary:
      "A compact, focused medical kit improves response time for common trail issues and minor altitude discomfort.",
    quickTips: [
      "Carry blister kit, oral rehydration salts, and basic pain relief.",
      "Pack altitude-related meds only with medical advice beforehand.",
      "Bring personal prescriptions in original labeled packaging.",
    ],
  },
  {
    title: "Flight Planning Tips",
    icon: Plane,
    summary:
      "Pick flexible flight options where possible and avoid tight same-day international connections after mountain sectors.",
    quickTips: [
      "Use refundable or change-friendly tickets for internal segments.",
      "Schedule return to Kathmandu with at least one buffer day.",
      "Keep digital and printed copies of all flight details.",
    ],
  },
  {
    title: "Is Nepal Safe for Trekkers",
    icon: HeartPulse,
    summary:
      "Nepal is generally safe for trekkers when you use licensed support, realistic pacing, and weather-aware decision making.",
    quickTips: [
      "Trek with local guidance on less-traveled or high-pass routes.",
      "Avoid pushing altitude gain when symptoms worsen.",
      "Share daily route plans with your guide and accommodation hosts.",
    ],
  },
];

const preTrekChecklist = [
  "Passport, visa, and travel insurance verified",
  "Fitness build-up completed for route grade",
  "Gear tested and boots already broken in",
  "Emergency contacts and policy numbers saved offline",
  "At least 1 buffer day reserved after mountain flights",
];

const toId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function GuidePage() {
  return (
    <main id="top" className="min-h-screen bg-[#050505] pb-16 pt-28">
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.05] to-white/[0.02] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.34)] sm:p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Trek Planning Hub</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Complete Nepal Trek Planner
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Everything you need before booking: visa basics, route-grade decisions, weather timing, flight planning,
            insurance readiness, and trail safety practices.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {travelGuideTopics.map((topic) => (
              <a
                key={topic.title}
                href={`#${toId(topic.title)}`}
                className="rounded-full border border-white/12 bg-black/25 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                {topic.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {guideHighlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05]">
                <item.icon className="h-5 w-5 text-zinc-100" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs font-semibold tracking-[0.14em] text-zinc-400 uppercase">Guide Sections</p>
              <nav className="mt-3 space-y-1">
                {travelGuideTopics.map((topic) => (
                  <a
                    key={topic.title}
                    href={`#${toId(topic.title)}`}
                    className="block rounded-md px-2.5 py-2 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {topic.title}
                  </a>
                ))}
              </nav>
              <div className="mt-4 h-px bg-white/10" />
              <Link
                href="/booking"
                className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-3 text-sm font-semibold text-white hover:bg-primary/90"
              >
                Plan My Trek
              </Link>
            </div>
          </aside>

          <section className="space-y-4">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-white">Before You Go Checklist</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Use this quick checklist before final confirmation. Completing these points early prevents last-minute
                stress and itinerary disruptions.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {preTrekChecklist.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-200"
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {travelGuideTopics.map((topic) => (
              <article
                id={toId(topic.title)}
                key={topic.title}
                className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05]">
                    <topic.icon className="h-5 w-5 text-zinc-100" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">{topic.summary}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold tracking-[0.12em] text-zinc-400 uppercase">Quick Tips</p>
                  <ul className="mt-2 space-y-2">
                    {topic.quickTips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-zinc-200">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-3 text-xs font-semibold text-zinc-200 transition hover:bg-white/[0.1] hover:text-white"
                  >
                    Ask About This Topic
                  </Link>
                  <a href="#top" className="text-xs font-semibold text-zinc-400 hover:text-zinc-200">
                    Back to top
                  </a>
                </div>
              </article>
            ))}
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-amber-300/25 bg-amber-500/10 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <div>
              <h2 className="text-lg font-semibold text-white">Safety Note</h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                This guide is practical information, not medical advice. For pre-existing conditions or altitude-related
                concerns, consult a licensed medical professional before your trek.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/destinations"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Browse Destinations
          </Link>
          <Link
            href="/packages"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Compare Packages
          </Link>
          <Link
            href="/booking"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Plan My Trek
          </Link>
        </div>
      </section>
    </main>
  );
}
