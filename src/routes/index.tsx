import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from  "@/assets/ceo.png";
import faithAdventure from "@/assets/projects/Church Program Branding - Faith Adventure/1001988195.jpg";
import soundsOfHealing from "@/assets/projects/Church Program Branding - Sounds of Healing/1001938317.jpg";
import glciccFlyer from "@/assets/projects/Flyer Designs for GLCICC/20260113_102553.jpg";
import ladiesAliveFlyer from "@/assets/projects/Flyer Designs for Ladies Alive Global Institute l/20260207_235015.jpg";
import shaZefaLogo from "@/assets/projects/Logo for Sha_zefa/20260422_115037.png";
import myLogo from "@/assets/projects/My Logo/20250117_172513.png";
import northstarBranding from "@/assets/projects/Northstar Academy Branding/20260110_151745.png";
import schoolCampaign from "@/assets/projects/School Campaign Designs/20250925_192739.jpg";
import underscoredPremiere from "@/assets/projects/Underscored Movie Premiere Branding/Underscored (1).jpg";
import { KenteRule } from "@/components/site/KenteRule";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veezuals | Brand Designer" },
      { name: "description", content: "Brand designer helping brands look better, feel stronger, and connect deeper through design." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Social Media Design", d: "Scroll-stopping content systems built for consistency." },
  { n: "02", t: "Flyer Design", d: "Print-ready event, promo, and campaign flyers." },
  { n: "03", t: "Book Interior Design", d: "Readable, refined layouts that respect the manuscript." },
  { n: "04", t: "Brand Presentation Design", d: "Pitch decks and brand books that command the room." },
  { n: "05", t: "Creative Decorations", d: "Considered visual environments for moments that matter." },
];

function Index() {
  const projectCards = [
    // { src: faithAdventure, label: "Case 01", title: "Faith Adventure branding" },
    { src: soundsOfHealing, label: "Case 02", title: "Sounds of Healing identity" },
    // { src: glciccFlyer, label: "Case 03", title: "GLCICC flyer design" },
    // { src: ladiesAliveFlyer, label: "Case 04", title: "Ladies Alive campaign flyer" },
    // { src: shaZefaLogo, label: "Case 05", title: "Sha_zefa logo" },
    // { src: myLogo, label: "Case 06", title: "Logo concept" },
    { src: northstarBranding, label: "Case 07", title: "Northstar Academy branding" },
    { src: schoolCampaign, label: "Case 08", title: "School campaign design" },
    // { src: underscoredPremiere, label: "Case 09", title: "Movie premiere branding" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="container-x pt-12 md:pt-24 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-muted-foreground">Brand Designer · Est. 2020</p>
            <h1 className="display-lg mt-6">
             <em className="not-italic text-[#64AEE0]">Crafting Designs</em> that make brands <em className="not-italic text-[#64AEE0]">Look Better,</em> Feel Stronger, and <em className="not-italic text-[#64AEE0]"> Connect Deeper.</em>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-20 flex flex-col gap-6">
            <p className="text-base leading-loose text-muted-foreground max-w-sm">
              I'm Victoria Edochie an independent brand designer working across brand identity, flyers and social media designs. Quietly crafting, loud results.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-5 py-3 bg-foreground text-background text-sm hover:opacity-50 transition">
                Book a project
              </Link>
              <Link to="/services" className="px-5 py-3 border border-foreground text-sm hover:bg-[#64AEE0]  hover:text-background transition">
                View services
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-6">
          
        </div>
      </section>
      {/* <KenteRule className="mt-6" /> */}

      <Marquee items={["Brand Identity", "Graphic Design", "Banners", "Logo Design", "Book Design", "Flyers"]} className="bg-[#EDF8FE] text-[#07090A]" />

      {/* SERVICES PREVIEW */}
      <section className="container-x py-24 bg-[#64AEE0] text-[#07090A]">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow text-white">What I do</p>
            <h2 className="display-lg !text-5xl md:!text-6xl mt-4">Services</h2>
          </div>
          <Link to="/services" className="text-sm underline text-white underline-offset-4 hover:text-[#07090A]">All services →</Link>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {services.map((s) => (
            <li key={s.n} className="grid cursor-pointer grid-cols-12 gap-4 py-8 group hover:bg-card/50 transition px-2">
              <span className="col-span-2 md:col-span-1 text-white text-sm">{s.n}</span>
              <span className="col-span-10 md:col-span-5 font-display text-2xl md:text-3xl">{s.t}</span>
              <span className="col-start-3 md:col-start-7 col-span-10 md:col-span-6 text-white text-sm md:text-base">{s.d}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* <KenteRule className="mt-6" /> */}

      {/* SELECTED WORK PLACEHOLDER */}
      <section className="container-x py-24 bg-white">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow text-blue-500">My Designs</p>
            <h2 className="text-[#07090A] display-lg !text-5xl md:!text-6xl mt-4">Selected work</h2>
          </div>
          <Link to="/gallery" className="text-blue-900 text-sm underline underline-offset-4 hover:opacity-70">View all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projectCards.map(({ src, label, title }, index) => (
            <div key={index} className="flex flex-col bg-card border border-border overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden flex-shrink-0">
                <img src={src} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 bg-background/80 backdrop-blur-sm">
                <p className="eyebrow text-muted-foreground">{label}</p>
                <p className="font-display text-xl mt-2">{title}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-8 max-w-md">
          {/* Best projects and client testimonials. */}
        </p>
      </section>

      {/* CTA */}
      <section className="container-x py-32">
        <div className="">
          <p className="eyebrow text-muted-foreground">Booking design service</p>
          <h2 className="display-lg mt-6 max-w-4xl">Have a <em className="text-blue-200">brand</em>
             <br /> <em className="text-blue-200">worth</em> building?
             <br /> Let's <em className="text-blue-200">talk.</em>
             </h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background text-sm hover:opacity-90">
            Start a project →
          </Link>
        </div>
      </section>
          {/* <KenteRule className="mt-6" /> */}
    </>
  );
}
